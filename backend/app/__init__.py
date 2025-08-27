from flask import Flask
from dotenv import load_dotenv
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

import os

app = Flask(__name__)


load_dotenv()
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URI')
mydb = SQLAlchemy(app)
migrate = Migrate(app, mydb)

from app import routes, models

