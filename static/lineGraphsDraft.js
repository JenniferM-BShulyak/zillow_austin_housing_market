// Initialize Page with first plot
function init_line() {
    data = austinLove()
    // Define Layout
    var layout = {
        title: "Our Love of Austin",
        xaxis: {title: "Number of Years in Austin"},
        yaxis: {title: "Number of Hearts We Give Austin"}
    };
    
    Plotly.newPlot("lineplot", data, layout);
}

// Call updateLineGraph() when _____ is done
d3.selectAll("#toggleOptions").on("change", updateLineGraph);

// Function to change plot with event is triggered
function updateLineGraph() {
    // Select the dropdown menu
    let toggle = d3.select("#toggleOptions");
    
    // Assign the value of the event to a variable
    let toggleChoice = toggle.property("value");

    // Grab what the x and y values will now be
    // How will data be pulled from SQL? 
    let x = [];
    let y = [];
    console.log('BEFORE')
    if (toggleChoice === "AustinLove") {
        data = austinLove()
    
        // Define Layout
        var layout = {
            title: "Our Love of Austin",
            xaxis: {title: "Number of Years in Austin"},
            yaxis: {title: "Number of Hearts We Give Austin"}
        };
        // Graph new plot
        Plotly.newPlot("lineplot", data, layout);
        
    }
    else if (toggleChoice === "zestimates") {
      
            fetch('/zestimates').then(
                (response) => (response.json()).then(dataFormatting_z)
            )

    }

    else if (toggleChoice === "percentage") {
        fetch('/zestimates_percentages').then(
            (response) => (response.json()).then(dataFormatting_zpercent)
        )

    }

    
}
////////////////////////////////////////////////////
// Zestimates 
function dataFormatting_z(data) {
    // 78739: Circle C 
    circleC = data["78739"];
    var xDates = [];
    var yCircleC = [];
    for (const [key, value] of Object.entries(circleC)) {
        xDates.push(key)
        yCircleC.push(value)
      }
    var traceCircleC = {
        x: xDates,
        y: yCircleC,
        name: "CircleC 78739"
    }

    // 78703: Tarrytown/Mt Bonnell
    var tarryTown = data["78703"];
    var traceTarryTown = getTrace(tarryTown, "Tarry Town")

    // Set dataToGraph
    var dataToGraph = [traceCircleC, traceTarryTown]
    // Set layout
    var layout = {
        title: "Zestimates of Well Known Zipcodes",
        xaxis: {title: "Date"},
        yaxis: {title: "Zestimate in $"}
    };
    plotRestyle_z(dataToGraph, layout)

}

function plotRestyle_z(dataToGraph, layout) {

    Plotly.newPlot("lineplot", dataToGraph, layout);
    // Update the plot
    // Plotly.restyle("lineplot", "x", [x_new]);
    // Plotly.restyle("lineplot", "y", [y_new]);
    // Plotly.relayout("lineplot", update)
}

// Zestimate Percentage Change Over Time 
function dataFormatting_zpercent(data) {
    // 78739: Circle C 
    circleC = data["78739"]
    var xDates = [];
    var yCircleC = [];
    for (const [key, value] of Object.entries(circleC)) {
        xDates.push(key)
        yCircleC.push(value)
      }
    // 78703: Tarrytown/Mt Bonnell

    plotRestyle_zpercent(xDates, yCircleC)

}

function plotRestyle_zpercent(x_new, y_new) {

    var update = {
        title: "Percent Change in Zestimate of Well Known Zipcodes",
        xaxis: {title: "Date"},
        yaxis: {title: "Percent Change"}
    };
    // Update the plot
    Plotly.restyle("lineplot", "x", [x_new]);
    Plotly.restyle("lineplot", "y", [y_new]);
    Plotly.relayout("lineplot", update)
};

//Function to grab trace data:
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
        x:[1,2,3,4,5],
        y:[12,10,8,6,4],
        name: "Omar's"
    };
    var trace_jb = {
        x:[1,2,3,4,5],
        y:[1,4,9,15,10],
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