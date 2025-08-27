from flask import Flask
from dotenv import load_dotenv
import os

app = Flask(__name__)

load_dotenv()

app.config['MONGO_URI'] = os.getenv('DATABASE_URI')


from app import routes

