from flask import Flask, render_template
app = Flask(__name__)

print(__name__)

@app.route('/')
def welcome():
    return render_template('index.html',column = 8, row = 8)


@app.route('/<x>/<y>')
def next(x,y):
    x = int(x)
    y = int(y)

    return render_template('index.html',column = x, row = y)

if __name__ == "__main__":
    app.run(debug=True) 
