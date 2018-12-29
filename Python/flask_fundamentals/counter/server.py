from flask import Flask, render_template, session, request, redirect
app = Flask(__name__)
app.secret_key = 'GangGangGang'
counter = 0

print(__name__)

@app.route('/')
def index():
    if 'counter' not in session:
        session['counter'] = 0
    
    session['counter'] = session['counter'] + 1
    print(session['counter'])
    
    return render_template('index.html')

@app.route('/add', methods=['POST'])
def add():
    session['counter'] = session['counter'] + 1
    return redirect('/')

@app.route('/destroy', methods=['POST'])
def destroy():
    session.clear()
    return redirect('/')


if __name__ == "__main__":
    app.run(debug=True)