from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/", methods=["GET"])
def home():
    return {"status": "ok"}

@app.route("/send_email", methods=["POST"])
def send_email():
    data = request.json

    print("Received:", data)
    return jsonify({"message": "Email received", "status": "success"}), 200

if __name__ == "__main__":
    app.run(debug=True)
