from flask import Flask
from dotenv import load_dotenv
import os
from flask_pymongo import PyMongo

app = Flask(__name__)

load_dotenv()

app.config['MONGO_URI'] = os.getenv('DATABASE_URL')

mydb = PyMongo(app)


from app import routes

