from flask import Flask, request, jsonify
from flask_cors import CORS

# Import your AI generation libraries
from transformers import pipeline
from diffusers import StableDiffusionPipeline
import torch

app = Flask(__name__)
CORS(app)

# Load text generation model once (use lightweight model for speed)
text_gen = pipeline("text-generation", model="gpt2")  # Adjust model as needed

# Load Stable Diffusion model on CPU
pipe = StableDiffusionPipeline.from_pretrained("runwayml/stable-diffusion-v1-5")
pipe = pipe.to("cpu")

def generate_story_segment(prompt):
    outputs = text_gen(prompt, max_new_tokens=60)
    return outputs[0]['generated_text']

def generate_image(prompt):
    # Shorten image prompt if needed, add style keywords
    image_prompt = f"{prompt}, fantasy art, vibrant"
    image = pipe(image_prompt).images[0]
    # Save image to disk and return local file path or base64 string or URL
    img_path = f"static/{prompt[:10].replace(' ','_')}.png"
    image.save(img_path)
    return img_path

@app.route('/generate', methods=['POST'])
def generate():
    data = request.json
    story_idea = data.get("story_idea")
    genre = data.get("genre")
    tone = data.get("tone")
    audience = data.get("audience")

    scenes = ["Introduction", "Rising Action", "Climax", "Resolution"]
    story = {}
    images = {}

    for scene in scenes:
        prompt = f"Write the {scene} of a {genre} story with a {tone} tone for {audience}. Story idea: {story_idea}"
        text = generate_story_segment(prompt)
        story[scene] = text

        # For image generation, use shortened prompt or scene + keywords
        img_prompt = f"{scene}: {text[:50]}"
        img_path = generate_image(img_prompt)
        # In a real app, you may want to serve static files properly and return URLs!
        images[scene] = img_path

    return jsonify({"story": story, "images": images})

if __name__ == "__main__":
    app.run(debug=True)