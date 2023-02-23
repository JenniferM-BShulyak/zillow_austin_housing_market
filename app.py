# Import functions
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, inspect
from flask import Flask, jsonify

# Create connection
engine = create_engine('postgresql://postgres:Jb631834@localhost:5432/Austin_Housing')

# Reflect tables
Base = automap_base()
Base.prepare(autoload_with=engine, reflect = True)
Base.classes.keys()
session = Session(engine)

# Tables
austin_metro = Base.classes.austin_metro
austin_metro_percentages = Base.classes.austin_metro_percentages
austin_zestimates = Base.classes.austin_zestimates
austin_zestimates_percentages = Base.classes.austin_zestimates_percentages

# Create app
app = Flask(__name__)

# Create app routes
@app.route('/')
def page_name():
    return jsonify() # add routes

austin_metro.__dict__
austin_metro_percentages.__dict__
austin_zestimates.__dict__
austin_zestimates_percentages.__dict__

austin_metro_first = session.query(austin_metro).first()
austin_metro_first.__dict__

austin_metro_percentages_first = session.query(austin_metro_percentages).first()
austin_metro_percentages_first.__dict__

austin_zestimates_first = session.query(austin_zestimates).first()
austin_zestimates_first.__dict__

austin_zestimates_percentages_first = session.query(austin_zestimates_percentages).first()
austin_zestimates_percentages_first.__dict__

session.close()

if __name__ == "__main__":
    app.run(debug=True)