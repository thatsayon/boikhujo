from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import json
import sys 
sys.path.insert(1, './scraping')
from scraping import save_json

app = Flask(__name__)
app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy   dog'
app.config['CORS_HEADERS'] = 'Content-Type'
cors = CORS(app, resources={r"/foo": {"origins": "*"}})

@app.route('/', methods = ['GET', 'POST'])
def home():
    if(request.method == 'GET'):
        data = "hello, world"
        return jsonify({'datra': data})

@app.route('/book', methods = ['GET'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def books():
    book_name = request.args.get('name')

    return save_json(book_name)
    

@app.route('/res', methods=['GET'])
def res():
    f = open('../scraping/data.json')

    data = json.load(f)
    return jsonify(data)
if __name__ == '__main__':
    app.run(debug=True)
