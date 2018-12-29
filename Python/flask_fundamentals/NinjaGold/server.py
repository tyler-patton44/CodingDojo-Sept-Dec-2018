from flask import Flask, render_template, session, request, redirect, flash
import random
import datetime
app = Flask(__name__)
app.secret_key = 'GangGangGang'

print(__name__)

@app.route('/')
def index():
    if 'total' not in session:
        session['total'] = 0
    if 'messages' not in session:
        session['messages'] = []

    return render_template('index.html')

@app.route('/process_money', methods=['post'])
def moneyCounter():
    time = datetime.datetime.now()

    if request.form['hidden'] == 'house':
        gold = random.randrange(10,20)
        session['total'] = session['total']+gold
        message = "You found "+str(gold)+" at House congratulations. (Time:"+str(time)+")"
        session['messages'].insert(0, message)
        return render_template('index.html')
        
    elif request.form['hidden'] == 'bed':
        gold = random.randrange(1,5)
        session['total'] = session['total']+gold
        message = "You found "+str(gold)+" at Bed congratulations. (Time:"+str(time)+")"
        session['messages'].insert(0, message)
        return render_template('index.html')

    elif request.form['hidden'] == 'car':
        gold = random.randrange(10,15)
        session['total'] = session['total']+gold
        message = "You found "+str(gold)+" at car congratulations. (Time:"+str(time)+")"
        session['messages'].insert(0, message)
        return render_template('index.html')

    elif request.form['hidden'] == 'casino':
        gold = random.randrange(50,100)
        chance = random.randrange(1,3)
        if chance == 1:
            session['total'] = session['total']+gold
            message = "You found "+str(gold)+" at Casino congratulations. (Time:"+str(time)+")"
            session['messages'].insert(0, message)
            return render_template('index.html')
        elif chance == 2:
            session['total'] = session['total']-gold
            message = "You lost "+str(gold)+" at Casino better luck next time. (Time:"+str(time)+")"
            session['messages'].insert(0, message)
            return render_template('index.html')

@app.route('/resetIt', methods=['post'])
def resetIt():
    session.clear()
    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True)