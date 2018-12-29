from flask import Flask, render_template
app = Flask(__name__)

print(__name__)

@app.route('/')
def hello_world():
    student_info = (
        {'name' : 'Tyler', 'age' : 35},
        {'name' : 'John', 'age' : 25},
        {'name' : 'Max', 'age' : 16},
        {'name' : 'Brent', 'age' : 47}
    );

    return  render_template('index.html', name = "Tyler Patton", mylist=[1,6,9], students = student_info)


if __name__ == "__main__":
    app.run(debug=True)
