from flask import Flask, render_template, session, request, redirect, flash
import random
app = Flask(__name__)
app.secret_key = 'GangGangGang'

print(__name__)

@app.route('/')
def index():
    if 'num' not in session:
        session['num'] = random.randint(1,100)
    print(session['num'])
    return render_template('index.html')

@app.route('/guess', methods=['POST'])
def checkNum():
    number = request.form['number']
    session['number'] = number
    if 'number' not in session:
        session['number'] = int('number')
        
    if session['number'].isdigit() == False:
        return render_template('index.html', status='danger', hotorcold='NOT A VALID ANSWER', playagain='none')

    if int(session['number']) == session['num']:
        return render_template('index.html', status='success', hotorcold='SUCCESS', playagain='visible')

    if int(session['number']) < session['num']:
        return render_template('index.html', status='danger', hotorcold='TO LOW', playagain='none')
         
    if int(session['number']) > session['num']:
        return render_template('index.html', status='danger', hotorcold='TO HIGH', playagain='none')

    print(session['num'])
    return redirect('/')

@app.route('/reset', methods=['POST'])
def reset():
    session.clear()
    return redirect('/')




if __name__ == "__main__":
    app.run(debug=True)