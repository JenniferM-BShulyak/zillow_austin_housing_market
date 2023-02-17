#Importing Functions
from flask import Flask, render_template
app = Flask(__name__)

#root
@app.route('/')
def html():
    return render_template('index.html')

#Grabbing data from SQL
#@app.route('/data')
#def SQL():
    #return 


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug = True)