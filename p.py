from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)    

@app.route('/submit', methods=['POST'])
def submit():
    data = request.json

    name = data['name']
    total = data['total']
    avg = data['avg']

    return jsonify({
        "name": name,
        "total": total,
        "avg": avg
    })

if __name__ == '__main__':
    app.run(debug=True)