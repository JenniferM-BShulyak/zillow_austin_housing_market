# Zillow Austin Housing Market Analysis

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">Project Background & Purpose</a>
    </li>
    <li>
      <a href="#data">Data</a>
    </li>
    <li><a href="#tools-and-packages">Tools & Packages</a></li>
    <li><a href="#key-visuals">Key Visuals</a></li>
    <li><a href="project-findings">Project Findings</></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#references">References</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## Project Background and Purpose

The housing market in Austin has been changing rapidly as the Austin Metroplex swells. World wide events such as pandemics and financial crises can have a large impact on housing and rental prices. In addition, segregationalist policies still scar the city of Austin to this day, and Austin "has one of the highest rates of income segregation in the country." 

This project sought to see if projected housing prices and rental data would show past/current segregation patterns and evidence of gentrification in addition to visible changes during the 2008 financial crisis and the COVID Pandemic. In addition, future residents of the Austin Metroplex can search for the zipcodes where they can find the most affordable homes and rental options or the zipcodes for the best property investiments.   

Zehr, D. (n.d.). Inheriting inequality: Austin's segregation and gentrification. Statesman. Retrieved February 2023, from https://projects.statesman.com/news/economic-mobility/ 

<!-- DATA -->
## Data

Datasets were downloaded from https://www.zillow.com/research/data/ as CSVs
The following datasets were used: 
>1. ZHVI (zestimate) for single family homes in the mid-tier (35th - 65th percentile) 
>2. ZORI (home and apartment rental price) in the mid-tier (40th-60th percentile)  

More information about zillow: 
  * Zillow Home Value Index (ZHVI): A measure of the typical home value and market changes across a given region and housing type. It reflects the typical value for homes in the 35th to 65th percentile range. Available as a smoothed, seasonally adjusted measure and as a raw measure.
  * Zillow Observed Rent Index (ZORI): A smoothed measure of the typical observed market rate rent across a given region. ZORI is a repeat-rent index that is weighted to the rental housing stock to ensure representativeness across the entire market, not just those homes currently listed for-rent. The index is dollar-denominated by computing the mean of listed rents that fall into the 40th to 60th percentile range for all homes and apartments in a given region, which is once again weighted to reflect the rental housing stock.
  * ZHVI and ZORI definitions were taken from https://www.zillow.com/research/data/ 

<!-- TOOLS AND PACKAGES -->
## Tools & Packages

#### PostGre SQL
- Used to store data. 
#### Python 
- Data was cleaned and transformed in **initial_setup.ipynb** for database storage in Python and the package pandas was also utilized. The percent changes in zestimates and rental prices were calculated in the **percentage_change_setup.ipynb**.
- Flask used to set up API endpoints and a local server. 
#### JavaScript
- Used to make interactive visualizations with Plotly. 
- D3 was used to grab html information for events. 
#### HTML
- Used to format webpages and integrate Javascript. 
- Mapbox GL JS (Mapbox Boundries)

<!-- KEY VISUALS -->
## Key Visuals 

#### Lineplots looking at Zestimates and Rental Over Time
 * Visualization made using Plotly
 * Toggle between (1) Zestimates Over Time, (2) Percent Change in Zestimates Over Time, (3) Rental Prices Over Time, and (4) Percent Change in Rental Prices Over Time

![Screen Shot 2023-02-27 at 1 39 24 PM](https://user-images.githubusercontent.com/111457464/221666001-68a19df0-765d-44d4-9a0c-ce8219689954.png)
![Screen Shot 2023-02-27 at 1 38 58 PM](https://user-images.githubusercontent.com/111457464/221666027-a91a248c-6c63-4c17-8e8a-9ee0e4107114.png)

#### Summary Table
 * Compare key housing market metrics across different neighborhoods.
 * Search by Zipcode.
 
![Screen Shot 2023-02-27 at 1 44 07 PM](https://user-images.githubusercontent.com/111457464/221666799-96950e4c-1333-4565-a29c-c1e041cfc825.png)

#### Map View
 * View the average distribution of rent prices across the Austin area.
  ##### 2020
 ![image](https://github.com/JenniferM-BShulyak/zillow_austin_housing_market/blob/main/screenshots/rent_data_2020.png)

  ##### 2023
![image](https://github.com/JenniferM-BShulyak/zillow_austin_housing_market/blob/main/screenshots/rent_data_2023.png)

<!-- PROJECT FINDINGS -->
## Project Findings

 * Zestimates tend to follow a pattern where prices increase more rapidly in the summer months and increase more slowly (or they decrease) in the Winter months. This pattern lines up with the Texas school year as families are more likely to move during the Summer months which causes an increase in supply in the Summer. This pattern is not evident in rental prices; this could be due to a higher percentage of families inhabiting houses. 
 * There is a clear albeit minor delcine of zestimates starting in early 2008 and lasting through 2010 coinciding with the 2008 financial crisis. The housing market in Austin was not impacted to the same degree as a lot of the US. 
 * Between 2012 and 2016, there was a steady increase in the zestimates of homes hovering between 0.75-2.00% monthly increases. After 2016, the zestimates continued to rise, but to a lesser degree.
 * Black and Hispanic populations have historically resided in regions East of interstate 35. These regions have seen zestimate prices increase since 2014 at a more rapid rate (closer to 2.00% compared to 0.75%) to hisotrically similarly prices zipcodes and overtake some historically white regions of Austin such as Oak Hill 78749. Patterns in rental data are less clear. Otherwise, prices in all zipcodes have increases and followed similar patterns. 
 * After the start of the COVID pandemic, the change in zestimates became much more volatile while still following seasonal patterns. At times, the percent increase in zestimates rose to 4.5% each month. Rental prices initially declined, but have since risen rapidly. 

<!-- CONTACT -->
## Contact

#### Github
- [Jennifer Shulyak](https://github.com/JenniferM-BShulyak)
- [Omar Solis](https://github.com/oas95)
- [Jackson Blanton](https://github.com/JacksonBlanton)
- [Bobby McGraw](https://github.com/BMcGraw1215)
- [Joe Moreno](https://github.com/jrm33)

<!-- SOURCES -->
## Sources

Data Source: https://www.zillow.com/research/data/

