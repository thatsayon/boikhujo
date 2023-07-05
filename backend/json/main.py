from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/', methods = ['GET', 'POST'])
def home():
    if(request.method == 'GET'):
        data = "hello, world"
        return jsonify({'datra': data})

@app.route('/book', methods = ['GET'])
def books():
    book_name = request.args.get('name')
    return jsonify({'name':book_name})

if __name__ == '__main__':
    app.run(debug=True)