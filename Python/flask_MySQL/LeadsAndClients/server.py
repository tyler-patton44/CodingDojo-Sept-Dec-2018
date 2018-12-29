from flask import Flask, render_template, session, request, redirect
import datetime
app = Flask(__name__)

app.secret_key = 'GangGangGang'

from mySQLconnection import connectToMySQL
print(__name__)


@app.route('/')
def index():
    mysql = connectToMySQL('LeadsDB')
    clients = mysql.query_db("SELECT clients.first_name, clients.last_name, sum(leads.lead) as leads FROM clients JOIN leads on leads.clients_id = clients.id GROUP by clients.id;")
    session['clients'] = clients
    return render_template('index.html', clients=clients)

if __name__ == "__main__":
    app.run(debug=True)