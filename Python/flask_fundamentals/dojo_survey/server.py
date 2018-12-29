from flask import Flask, render_template, session, request, redirect
import re
app = Flask(__name__)
app.secret_key = 'GangGangGang'

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
print(__name__)

@app.route('/')
def index():
    if 'first-name' not in session:
        session['first-name'] = ""
    if 'last-name' not in session:
        session['last-name'] = ""
    if 'email' not in session:
        session['email'] = ""
    if 'texta' not in session:
        session['texta'] = ""
    return render_template('index.html')

@app.route("/result", methods=['POST'])
def create():
    session['first-name'] = request.form['first-name']
    session['last-name'] = request.form['last-name']
    session['email'] = request.form['email']
    session['texta'] = request.form['texta']

     
    if request.form['first-name'] == "":
        return render_template('index.html', status='danger', message='First Name field is required')
    if request.form['first-name'].isalpha() == False:
        return render_template('index.html', status='danger', message='First Name contains numbers')
    if request.form['last-name'] == "":
        return render_template('index.html', status='danger', message='Last Name field is required')
    if request.form['last-name'].isalpha() == False:
        return render_template('index.html', status='danger', message='Last Name contains numbers')

    if request.form['email'] == "":
        return render_template('index.html', status='danger', message='Email field is required')
    if not EMAIL_REGEX.match(request.form['email']):
        return render_template('index.html', status='danger', message='Invailid Email')

    if request.form['password'] == "":
        return render_template('index.html', status='danger', message='Password field is required')
    if len(request.form['password']) < 8:
        return render_template('index.html', status='danger', message='Password needs to be more than 8 characters')
    if request.form['password'] != request.form['confirm-password']:
        return render_template('index.html', status='danger', message='Password does not match confirm password')

    if request.form['texta'] == "":
        return render_template('index.html', status='danger', message='Description is required')
    if len(request.form['texta']) > 120:
        return render_template('index.html', status='danger', message='Description is too long. Make it less than 120 characters')

    else:
        print('Email:', request.form['email'])
        print('First Name:', request.form['first-name'])
        print('Last Name:', request.form['last-name'])
        print('Password:', request.form['password'])
        print('Info:', request.form['texta'])
        return redirect("/success")

@app.route("/success")
def success():
    return render_template('created.html')

@app.route("/danger")
def goback():
    print("someone tried to visit danger")
    return redirect("/")


if __name__ == "__main__":
    app.run(debug=True)