# zillow_austin_housing_market
### Project Background and Purpose
________________________________________

The housing market in Austin has been changing rapidly as the Austin Metroplex swells. World wide events such as pandemics and financial crises can have a large impact on housing and rental prices. In addition, segregationalist policies still scar the city of Austin to this day, and Austin "has one of the highest rates of income segregation in the country." 

This project sought to see if projected housing prices and rental data would show past/current segregation patterns and evidence of gentrification in addition to visible changes during the 2008 financial crisis and the COVID Pandemic.  

Zehr, D. (n.d.). Inheriting inequality: Austin's segregation and gentrification. Statesman. Retrieved February 2023, from https://projects.statesman.com/news/economic-mobility/ 

### Data
________________________________________

Datasets were downloaded from https://www.zillow.com/research/data/ as CSVs
The following datasets were used: 
>1. ZHVI (zestimate) for single family homes in the mid-tier (35th - 65th percentile) 
>2. ZORI (home and apartment rental price) in the mid-tier (40th-60th percentile)  

More information about zillow: 
  * Zillow Home Value Index (ZHVI): A measure of the typical home value and market changes across a given region and housing type. It reflects the typical value for homes in the 35th to 65th percentile range. Available as a smoothed, seasonally adjusted measure and as a raw measure.
  * Zillow Observed Rent Index (ZORI): A smoothed measure of the typical observed market rate rent across a given region. ZORI is a repeat-rent index that is weighted to the rental housing stock to ensure representativeness across the entire market, not just those homes currently listed for-rent. The index is dollar-denominated by computing the mean of listed rents that fall into the 40th to 60th percentile range for all homes and apartments in a given region, which is once again weighted to reflect the rental housing stock.
  * ZHVI and ZORI definitions were taken from https://www.zillow.com/research/data/ 

### Project Findings
________________________________________

There is a clear albeit minor delcine of zestimates starting in early 2008 and lasting through 2010 coinciding with the 2008 financial crisis.

Black and Hispanic populations have historically resided in regions East of interstate 35. These regions have seen zestimate prices increase since 2014 at a more rapid rate to hisotrically similarly prices zipcodes and overtake some historically white regions of Austin such as Oak Hill 78749. Patterns in rental data are less clear.


### Tools & Packages
________________________________________

#### PostGre SQL
- 
#### Python 
- pandas
- Flask
#### JavaScript
- d3
#### HTML
- mapbox GL JS (Mapbox Boundries)

### Key Visuals 
________________________________________

### Sources
________________________________________
