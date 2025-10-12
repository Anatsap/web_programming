from api import app, db

with app.app_context():
    db.create_all()
    print("Data base is created")

