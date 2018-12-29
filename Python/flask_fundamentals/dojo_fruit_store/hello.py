from flask import Flask, render_template, session, request, redirect
app = Flask(__name__)

print(__name__)

@app.route('/')
def index():

    return render_template('index.html')

@app.route("/result", methods=['POST'])
def create():
    print('Student ID:', request.form['name'])
    print('Password:', request.form['password'])
    print('Strawberry:', request.form['strawberry'])
    print('Raspberry:', request.form['raspberry'])
    print('Apple:', request.form['apple'])
    return render_template("created.html", sum = int(request.form['strawberry']) + int(request.form['raspberry']) + int(request.form['apple']))

@app.route("/danger")
def goback():
    print("someone tried to visit danger")
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)