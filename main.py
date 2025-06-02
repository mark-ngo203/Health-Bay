import os
from dotenv import load_dotenv, dotenv_values
from google import genai

load_dotenv()

client = genai.Client(api_key=os.getenv("MY_KEY"))

response = client.models.generate_content(
        model="gemini-2.0-flash", contents="Explain how AI works in a few words"
)
print(response.text)
