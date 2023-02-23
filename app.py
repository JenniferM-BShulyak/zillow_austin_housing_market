# Import functions
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, inspect
from flask import Flask, jsonify
import pandas as pd

# Create connection
engine = create_engine('postgresql://postgres:Jb631834@localhost:5432/Austin_Housing')

# Reflect tables
Base = automap_base()
Base.prepare(autoload_with=engine, reflect = True)
Base.classes.keys()


# Tables
Austin_metro = Base.classes.austin_metro
Austin_metro_percentages = Base.classes.austin_metro_percentages
Austin_zestimates = Base.classes.austin_zestimates
Austin_zestimates_percentages = Base.classes.austin_zestimates_percentages

# Create app
app = Flask(__name__)

# Create app routes
@app.route('/')
def page_name():
    return jsonify() # add routes


if __name__ == "__main__":
    app.run(debug=True)

@app.route('/vis_map_data')
def map_data():
    session = Session(engine)

    austin_metro = session.query(Austin_metro)
    austin_metro_data = [{k:v for k, v in row.__dict__.items() if k != '_sa_instance_state'} for row in austin_metro] 
    austin_metro_json = pd.DataFrame(austin_metro_data).to_json

    austin_metro_percentages = session.query(Austin_metro_percentages)

    austin_zestimates = session.query(Austin_zestimates)

    austin_zestimates_percentages_first = session.query(Austin_zestimates_percentages)
    

    session.close()

   

    return 
    