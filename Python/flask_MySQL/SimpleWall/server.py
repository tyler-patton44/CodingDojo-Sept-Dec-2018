from flask import Flask, render_template, session, request, redirect, flash
from flask_bcrypt import Bcrypt
import re
import datetime
app = Flask(__name__)
bcrypt = Bcrypt(app)

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app.secret_key = 'GangGangGang'

from mySQLconnection import connectToMySQL



@app.route('/')
def index():
    if 'first_name' not in session:
        session['first_name'] = ""
    if 'last_name' not in session:
        session['last_name'] = ""
    if 'email' not in session:
        session['email'] = ""
    if 'email2' not in session:
        session['email2'] = ""
    return render_template('index.html')

@app.route('/create_friend', methods=['post'])
def create():
    flag = False
    session['first_name'] = request.form['first_name']
    session['last_name'] = request.form['last_name']
    session['email'] = request.form['email']

    if request.form['email'] == "":
        flash("Email cannot be blank", "erroremail")
        flag = True
    if not EMAIL_REGEX.match(request.form['email']):
        flash("Not a valid email", "erroremail")
        flag = True
    if request.form['first_name'] == "":
        flash("First Name is blank", "errorfirst_name")
        flag = True    
    if request.form['first_name'].isalpha() == False:
        flash("First Name contains numbers", "errorfirst_name")
        flag = True 

    if request.form['last_name'] == "":
        flash("Last Name is blank", "errorlast_name")
        flag = True 
    if request.form['last_name'].isalpha() == False:
        flash("Last Name contains numbers", "errorlast_name") 
        flag = True

    if request.form['password'] == "":
        flash("Password is blank", "errorpassword")
        flag = True
    elif len(request.form['password']) < 8:
        flash("Password is shorter than 8 characters", "errorpassword")
        flag = True
    elif request.form['password'] != request.form['confirm_password']:
        flash("Password and Confirm Password do not match",  "errorpassword")
        flag = True


    mysql = connectToMySQL('WallDB')
    query = "SELECT email from users where email = %(email)s"
    data = {
         'email': request.form['email']
    }
    test = mysql.query_db(query, data)

    if test == ():
        pass
    elif request.form['email'] == test[0]['email']:
        flash("Email is taken", "erroremail")
        flag = True

    if flag == True:
        return render_template('index.html')
    elif flag == False:
        pw_hash = bcrypt.generate_password_hash(request.form['password'])  
    
    mysql = connectToMySQL('WallDB')
    
    query = "INSERT into users (email, first_name, last_name, password, created_at, updated_at) VALUES (%(email)s,%(first_name)s, %(last_name)s, %(password)s, NOW(), NOW())"
    data = {
        'email': request.form['email'],
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'password': pw_hash
     }
    new_user = mysql.query_db(query, data)

    
    return redirect('/success')

@app.route('/success')
def success():
    flash("You have been registered", "register")
    return render_template('index.html')


@app.route('/login', methods=['post'])
def login():
    beenchecked = False
    session['email2'] = request.form['email2']

    mysql = connectToMySQL('WallDB')
    query = "SELECT * from users where email = %(email)s"
    data = {
         'email': request.form['email2']
    }
    check = mysql.query_db(query, data)

    if check == ():
        flash("Cannot find email", "erroremail2")
        return render_template('index.html')
    elif request.form['email2'] == check[0]['email']:
        beenchecked = True

    if bcrypt.check_password_hash(check[0]['password'], request.form['password2']) != True:
        flash("Wrong password", "errorpassword2")
        return render_template('index.html')
    elif beenchecked == True and bcrypt.check_password_hash(check[0]['password'], request.form['password2']) == True:
        session['userid'] = check
        print (session['userid'])
        return redirect('/thewall')


@app.route('/thewall')
def thewall():
    if 'userid' not in session:
        return redirect('/hacker')
    else:
        mysql = connectToMySQL('WallDB')
        query = "SELECT * from users where id != %(loggeduser)s "
        data = {
            'loggeduser': session['userid'][0]['id']
        }
        allusers = mysql.query_db(query, data)

        mysql = connectToMySQL('WallDB')   
        query = "SELECT id, message, sender from messages where users_id = %(loggeduser)s " 
        data = {
            'loggeduser': session['userid'][0]['id']
        }
        messagesrecieved = mysql.query_db(query, data)
        return render_template('wall.html', allusers=allusers, messagesrecieved=messagesrecieved)

@app.route('/hacker')
def hacker():
    return render_template('goback.html')

@app.route('/create_message', methods=['post'])
def send():
    if request.form['texta'] == "":
        flash("Message cannot be blank", "errortexta")
        return render_template('wall.html')
    if len(request.form['texta']) > 250:
        flash("Message cannot be longer than 250 characters", "errortexta")
        return render_template('wall.html')

    mysql = connectToMySQL('WallDB')
    query = "INSERT into messages(message, users_id, created_at, sender) VALUES (%(message)s, %(user_id)s, now(), %(sender)s)"
    data = {
        'message': request.form['texta'],
        'user_id': request.form['hidden'],
        'sender': session['userid'][0]['first_name']
    }
    send = mysql.query_db(query, data)
    return redirect('/backtowall')

@app.route('/backtowall')
def backtowall():
    return redirect('/thewall')

@app.route('/delete_message/<id>')
def delete(id):
    mysql = connectToMySQL('WallDB')
    query = "DELETE from messages where id = %(id)s AND user_id = %(users_id)s"
    data ={
        'id': id,
        'users_id': session['userid']
    }
    deleter = mysql.query_db(query, data)
    if deleter == False:
        flash("Get that shit outta here", "hacker")
    return redirect('/backtowall')

if __name__ == "__main__":
    app.run(debug=True)