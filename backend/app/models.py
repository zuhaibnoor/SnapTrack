from . import mydb
from datetime import datetime

class User(mydb.Model):
    id = mydb.Column(mydb.Integer, primary_key=True)
    full_name = mydb.Column(mydb.String(100), nullable=False)
    designation = mydb.Column(mydb.String(100))

class Attendance(mydb.Model):
    id = mydb.Column(mydb.Integer, primary_key=True)
    user_id = mydb.Column(mydb.Integer, mydb.ForeignKey("user.id"), nullable=False)
    timestamp = mydb.Column(mydb.DateTime, default=datetime.now, nullable=False)

