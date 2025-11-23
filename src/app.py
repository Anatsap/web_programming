from flask import Flask, jsonify, request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)  # дозволяє запити з React

# Зчитуємо продукти один раз при старті сервера
with open("products.json", "r") as f:
    products_data = json.load(f)["products"]

@app.route("/products", methods=["GET"])
def get_products():
    return jsonify(products_data)

@app.route("/products/<int:id>", methods=["GET"])
def get_product(id):
    product = next((p for p in products_data if p["id"] == id), None)
    if product:
        return jsonify(product)
    return jsonify({"message": "Product not found"}), 404

@app.route("/send_email", methods=["POST"])
def send_email():
    data = request.get_json()
    required_fields = ["first_name", "last_name", "email", "phone", "subject", "msg"]
    if not all(field in data and data[field] for field in required_fields):
        return jsonify({"message": "All fields are required"}), 400

    # ТУТ МОЖЕ БУТИ РЕАЛЬНА ВІДПРАВКА ЛИСТА
    print("Received order:", data)
    return jsonify({"message": "Email sent successfully!"}), 200

if __name__ == "__main__":
    app.run(port=5001)
