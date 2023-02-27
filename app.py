# Import functions
#import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, inspect
from flask import Flask, jsonify, render_template
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
    return render_template('index.html')




@app.route('/rental_data')
def rental_data():
    session = Session(engine)

    austin_metro = session.query(Austin_metro)
    austin_metro_data = [{k:v for k, v in row.__dict__.items() if k != '_sa_instance_state'} for row in austin_metro] 
    austin_metro_df = pd.DataFrame(austin_metro_data)
    austin_metro_df.set_index("dates", inplace=True)
    austin_metro_json = austin_metro_df.to_json()

    session.close()

   

    return austin_metro_json

@app.route('/rental_percentages')
def rental_percentages():
    session = Session(engine)

    austin_metro_percentages = session.query(Austin_metro_percentages)
    austin_metro_percentages_data = [{k:v for k, v in row.__dict__.items() if k != '_sa_instance_state'} for row in austin_metro_percentages] 
    austin_metro_percentages_df = pd.DataFrame(austin_metro_percentages_data)
    austin_metro_percentages_df.set_index("dates", inplace=True)
    austin_metro_percentages_json = austin_metro_percentages_df.to_json()

    session.close()

   

    return austin_metro_percentages_json
    


@app.route('/zestimates')
def zestimates():
    session = Session(engine)

    austin_zestimates = session.query(Austin_zestimates)
    austin_zestimates_data = [{k:v for k, v in row.__dict__.items() if k != '_sa_instance_state'} for row in austin_zestimates] 
    austin_zestimates_df = pd.DataFrame(austin_zestimates_data)
    austin_zestimates_df.set_index("dates", inplace=True)
    austin_zestimates_json = austin_zestimates_df.to_json()

    session.close()

   

    return austin_zestimates_json

@app.route('/zestimates_percentages')
def zestimates_percentages():
    session = Session(engine)

    austin_zestimates_percentages = session.query(Austin_zestimates_percentages)
    austin_zestimates_percentages_data = [{k:v for k, v in row.__dict__.items() if k != '_sa_instance_state'} for row in austin_zestimates_percentages] 
    austin_zestimates_percentages_df = pd.DataFrame(austin_zestimates_percentages_data)
    austin_zestimates_percentages_df.set_index("dates", inplace=True)
    austin_zestimates_percentages_json = austin_zestimates_percentages_df.to_json()

    session.close()

   

    return austin_zestimates_percentages_json

    
@app.route('/GraphingOverTime')
def visualization_1():
    return render_template('indexLineGraphsDraft.html')

@app.route('/SummaryComparison')
def visualization_2():
    return render_template('SummaryComparison.html')

# @app.route('/visualization_2')
# def visualization_2():
#     #return render_template('')

# @app.route('/visualization_3')
# def visualization_3():
#     #return render_template('')


if __name__ == "__main__":
    app.run(debug=True)