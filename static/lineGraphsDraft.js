// Initialize Page with first plot
function init_line() {
    data = [{
        x:[1,2,3,4,5],
        y:[2,4,8,16,32]
    }];

    // Define Layout
    var layout = {
        title: "Zestimates of Well Known Zipcodes",
        xaxis: {title: "Date"},
        yaxis: {title: "Zestimate in $"}
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
    if (toggleChoice === "zestimates") {
      
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
// Zestimates 
function dataFormatting_z(data) {
    // 78739: Circle C 
    circleC = data["78739"]
    var xDates = [];
    var yCircleC = [];
    for (const [key, value] of Object.entries(circleC)) {
        xDates.push(key)
        yCircleC.push(value)
      }
    // 78703: Tarrytown/Mt Bonnell

    plotRestyle_z(xDates, yCircleC)

}

function plotRestyle_z(x_new, y_new) {

    var update = {
        title: "Zestimates of Well Known Zipcodes",
        xaxis: {title: "Date"},
        yaxis: {title: "Zestimate in $"}
    };
    // Update the plot
    Plotly.restyle("lineplot", "x", [x_new]);
    Plotly.restyle("lineplot", "y", [y_new]);
    Plotly.relayout("lineplot", update)
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
}
init_line();