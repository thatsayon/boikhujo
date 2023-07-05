from flask import Flask, jsonify, request
import json
import sys 
sys.path.insert(1, '../scraping')
from scraping import save_json

app = Flask(__name__)

@app.route('/', methods = ['GET', 'POST'])
def home():
    if(request.method == 'GET'):
        data = "hello, world"
        return jsonify({'datra': data})

@app.route('/book', methods = ['GET'])
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