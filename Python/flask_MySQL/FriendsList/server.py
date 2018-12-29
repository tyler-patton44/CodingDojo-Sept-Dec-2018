from flask import Flask, render_template, session, request, redirect
import datetime
app = Flask(__name__)

app.secret_key = 'GangGangGang'

from mySQLconnection import connectToMySQL
print(__name__)


@app.route('/')
def index():
    if 'first_name' not in session:
        session['first_name'] = ""
    if 'last_name' not in session:
        session['last_name'] = ""
    if 'occupation' not in session:
        session['occupation'] = ""

    mysql = connectToMySQL('friendsDB')
    all_friends = mysql.query_db("SELECT first_name, last_name, occupation FROM friends ORDER by first_name")
    session['all_friends'] = all_friends
    return render_template('index.html', all_friends=all_friends)

@app.route('/create_friend', methods=['post'])
def create():
    session['first_name'] = request.form['first_name']
    session['last_name'] = request.form['last_name']
    session['occupation'] = request.form['occupation']
     
    if request.form['first_name'] == "":
        return render_template('index.html', all_friends=session['all_friends'], status='danger', message='First Name field is required')
    if request.form['first_name'].isalpha() == False:
        return render_template('index.html', all_friends=session['all_friends'], status='danger', message='First Name contains numbers')
    if request.form['last_name'] == "":
        return render_template('index.html', all_friends=session['all_friends'], status='danger', message='Last Name field is required')
    if request.form['last_name'].isalpha() == False:
        return render_template('index.html', all_friends=session['all_friends'], status='danger', message='Last Name contains numbers')
    if request.form['occupation'] == "":
        return render_template('index.html', all_friends=session['all_friends'], status='danger', message='Occupation field is required')
    
    mysql = connectToMySQL('friendsDB')
    
    query = "INSERT into friends (first_name, last_name, occupation, created_at, updated_at) VALUES (%(first_name)s, %(last_name)s, %(occupation)s, NOW(), NOW())"
    data = {
         'first_name': request.form['first_name'],
         'last_name': request.form['last_name'],
         'occupation': request.form['occupation']
     }
    new_friend_id = mysql.query_db(query, data)
    mysql = connectToMySQL('friendsDB')
    all_friends = mysql.query_db("SELECT first_name, last_name, occupation FROM friends ORDER by first_name")
    print("----------------------------------------", all_friends)
    
    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True)