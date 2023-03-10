// Initialize Page with first plot
function init_line() {
    data = austinLove()
    // Define austinLove Layout
    var layout = {
        title: "Our Love of Austin",
        xaxis: {title: "Number of Years in Austin"},
        yaxis: {title: "Number of Hearts We Give Austin"}
    };
    // Plot austinLove
    Plotly.newPlot("lineplot", data, layout);
};

// Call updateLineGraph() when _____ is done
d3.selectAll("#toggleOptions").on("change", updateLineGraph);

// Function to change plot with event is triggered
function updateLineGraph() {
    // Select the dropdown menu
    let toggle = d3.select("#toggleOptions");
    
    // Assign the value of the event to a variable
    let toggleChoice = toggle.property("value");

    // Toggle options
    //Toggle for "Homepage" AustinLove
    if (toggleChoice === "AustinLove") {
        var data = austinLove();    // Grab Austin Love data
    
        // Define Layout
        var layout = {
            title: "Our Love of Austin",
            xaxis: {title: "Number of Years in Austin"},
            yaxis: {title: "Number of Hearts We Give Austin"}
        };
        // Graph new plot
        Plotly.newPlot("lineplot", data, layout);
         }

    // Toggle for Zestimates
    else if (toggleChoice === "zestimates") {
        // Fetch the zestimate data from the zestimates route
        // FIRST fetch the data, THEN convert it to json, THEN send it to the formatting function
        fetch('/zestimates').then(
            (response) => (response.json()).then(dataFormatting_z)  
        ) }

    // Toggle for percentage change in zestimates 
    else if (toggleChoice === "zPercentChange") {
        // Fetch the zestimate data from the zestimates route
        // FIRST fetch the data, THEN convert it to json, THEN send it to the formatting function
        fetch('/zestimates_percentages').then(
            (response) => (response.json()).then(dataFormatting_zpercent)
        )  }
        
    // Toggle for rental prices 
    else if (toggleChoice === "rental") {
        // Fetch the rentals data from the rentals route
        // FIRST fetch the data, THEN convert it to json, THEN send it to the formatting function
        fetch('/rental_data').then(
            (response) => (response.json()).then(dataFormatting_rentals)
        )  }
    
    // Toggle for rental prices 
    else if (toggleChoice === "rPercentChange") {
        // Fetch the rentals data from the rentals route
        // FIRST fetch the data, THEN convert it to json, THEN send it to the formatting function
        fetch('/rental_percentages').then(
            (response) => (response.json()).then(dataFormatting_rPercent)
        )  }
    
};
////////////////////////////////////////////////////

// Zestimates Function: function to grab data, format data, and plot data for the zestimates over time
function dataFormatting_z(data) {
    // Send data to grabAxes function to prepare it for plotting
    var dataToGraph = grabAxes(data);
    // Set layout
    var layout = {
        title: "Zestimates of Well Known Zipcodes",
        xaxis: {title: "Date"},
        yaxis: {title: "Zestimate in $"}
    };
    // Plot it! 
    Plotly.newPlot("lineplot", dataToGraph, layout);
};

// Percent Change in Zestimates Function: function to grab data, format data, and plot data for the Zestimate Percentage Change Over Time 
function dataFormatting_zpercent(data) {
    // Send data to grabAxes function to prepare it for plotting
    var dataToGraph = grabAxes(data);
    // Set layout
    var layout = {
        title: "Percent Change in Zestimate of Well Known Zipcodes",
        xaxis: {title: "Date"},
        yaxis: {title: "Percent Change"}
    };
    // Plot it! 
    Plotly.newPlot("lineplot", dataToGraph, layout);
};

// Rentals Function: function to grab data, format data, and plot data for the rental prices over time
function dataFormatting_rentals(data) {
    // Send data to grabAxes function to prepare it for plotting
    var dataToGraph = grabAxes(data);
    // Set layout
    var layout = {
        title: "Rental Prices of Well Known Zipcodes",
        xaxis: {title: "Date"},
        yaxis: {title: "Rental Price in $"}
    };
    // Plot it! 
    Plotly.newPlot("lineplot", dataToGraph, layout);
};

// Rentals Function: function to grab data, format data, and plot data for the rental prices over time
function dataFormatting_rPercent(data) {
    // Send data to grabAxes function to prepare it for plotting
    var dataToGraph = grabAxes(data);
    // Set layout
    var layout = {
        title: "Percent Change in Rental Prices of Well Known Zipcodes",
        xaxis: {title: "Date"},
        yaxis: {title: "Percent Change"}
    };
    // Plot it! 
    Plotly.newPlot("lineplot", dataToGraph, layout);
};

///////////////////////////////////////////////////
//Function to grab trace values:
function getTrace(zipData, zip) {
    var xZip = [];
    var yZip = [];
    for (const [key, value] of Object.entries(zipData)) {
        xZip.push(key);
        yZip.push(value);
      };
    var trace = {
        x: xZip,
        y: yZip,
        name: zip
    };
    return trace
};

// Function to grab data
function grabAxes(data) {

    // 78749: Oak Hill
    var oakHill = data["78749"];
    var traceOakHill = getTrace(oakHill, "Oak Hill 78749");
    // 78703: Tarrytown/Mt Bonnell
    var tarryTown = data["78703"];
    var traceTarryTown = getTrace(tarryTown, "Tarry Town 78703");
    // 78759: Arboretum 
    var arboretum = data["78759"];
    var traceArboretum = getTrace(arboretum, "Arboretum 78759");
    // 78758 North Austin
    var northAustin = data["78758"];
    var traceNorthAustin = getTrace(northAustin, "North Austin 78758");
    // 78723 MLK
    var mlk = data["78723"];
    var traceMLK = getTrace(mlk, "MLK/Mueller 78723");
    // 78741 Riverside
    var riverSide = data["78741"];
    var traceRiverSide = getTrace(riverSide, "Riverside 78741");
    // 78745 South Austin
    var southAustin = data["78745"];
    var traceSouthAustin = getTrace(southAustin, "South Austin 78745")
    // 78702 East Caesar Chavez 
    var eCC = data["78702"];
    var traceeCC = getTrace(eCC, "East Caesar Chavez 78702")



    // Set dataToGraph
    var dataToGraph = [traceOakHill, traceTarryTown, traceArboretum, traceNorthAustin, traceMLK, traceRiverSide, traceSouthAustin, traceeCC];
    return dataToGraph
};
///////////////////////////////////////////////
// Function to graph our love of Austin
function austinLove() {
    var trace_js = {
        x:[1,2,3,4,5,6,7,8,9,10,11],
        y:[1,2,4,8,16,32,30,28,30,34,36],
        name: "Jenn's"
    };
    var trace_b = {
        x:[1,2,3,4,5],
        y:[2,4,6,8,10],
        name: "Bobby's"
    };
    var trace_o = {
        x:[1,2,3],
        y:[12,10,8],
        name: "Omar's"
    };
    var trace_jb = {
        x:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23],
        y:[1,4,9,10,10,11,12,13,14,15,16,17,18,20,22,25,27,29,30,36,50,55,60],
        name: "Jackson's"
    };
    var trace_jm = {
        x:[1,2,3,4,5],
        y:[20,10,6,12,15],
        name: "Joe's"
    };
    var data = [trace_js, trace_b, trace_o, trace_jb, trace_jm];

    
    return data
};

init_line();