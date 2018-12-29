from flask import Flask, render_template
app = Flask(__name__)

print(__name__)

@app.route('/')
def welcome():
    return  '<h1>¡Stay Thirsty My Friend!<h1>'

@app.route('/play')
def play():
    return  render_template('index.html', number = 3)

@app.route('/play/<val>')
def play2(val):
    return  render_template('index.html', number = int(val))

@app.route('/play/<val>/<color>')
def play3(val, color):
    return  render_template('index.html', number = int(val), cols= color)

if __name__ == "__main__":
    app.run(debug=True) 
