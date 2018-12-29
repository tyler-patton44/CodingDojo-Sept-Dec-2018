from flask import Flask, render_template, session, request, redirect, flash
import re
import datetime
app = Flask(__name__)

app.secret_key = 'GangGangGang'

from mySQLconnection import connectToMySQL
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
print(__name__)


@app.route('/')
def index():
    if 'email' not in session:
        session['email'] = ""

    return render_template('index.html')

@app.route('/create_friend', methods=['post'])
def create():
    session['email'] = request.form['email']
     
    if request.form['email'] == "":
        flash("Email cannot be blank")
        return render_template('index.html')
    if not EMAIL_REGEX.match(request.form['email']):
        flash("Not a valid email")
        return render_template('index.html')

    mysql = connectToMySQL('EmailDB')
    query = "SELECT email from emails where email = %(email)s"
    data = {
         'email': request.form['email'],
    }
    test = mysql.query_db(query, data)
    if test == ():
        pass
    elif request.form['email'] == test[0]['email']:
        flash("Email is taken")
        return render_template('index.html')

    mysql = connectToMySQL('EmailDB')
    query = "INSERT into emails (email, created_at) VALUES (%(email)s, NOW())"
    data = {
         'email': request.form['email'],
    }
    new_friend_id = mysql.query_db(query, data)
    return redirect('/success')

@app.route('/success')
def success():
    mysql = connectToMySQL('EmailDB')
    emails = mysql.query_db("SELECT email, created_at FROM emails ORDER by email")
    return render_template('created.html', emails=emails)
    


if __name__ == "__main__":
    app.run(debug=True)