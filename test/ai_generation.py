# ai_generation.py

from transformers import pipeline
from diffusers import StableDiffusionPipeline
import torch

# Initialize models once (do this on import)
text_gen = pipeline("text-generation", model="gpt2")  # Use GPT-2 for speed
pipe = StableDiffusionPipeline.from_pretrained("runwayml/stable-diffusion-v1-5")
pipe = pipe.to("cpu")  # Change to "cuda" if GPU is available

def generate_story_segment(idea, scene, genre, tone, audience):
    prompt = f"Write the {scene} of a {genre} story with a {tone} tone for {audience}. Story idea: {idea}"
    output = text_gen(prompt, max_new_tokens=30)
    return output[0]['generated_text']

def generate_image(prompt, style="fantasy art"):
    image_prompt = f"{prompt}, {style}"
    image = pipe(image_prompt).images[0]
    # Save image locally in a static folder to serve via Flask
    filename = f"static/{prompt[:10].replace(' ', '_')}.png"
    image.save(filename)
    return filename