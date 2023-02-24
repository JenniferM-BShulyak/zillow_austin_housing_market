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

    if (toggleChoice === "zestimates") {
      
            d3.json("/zestimates").then((data) => 
            
            console.log(data))
            
            x = [1,2,3,4,5]
            y = [2,4,8,16,32]
        
        

        var update = {
            title: "Zestimates of Well Known Zipcodes",
            xaxis: {title: "Date"},
            yaxis: {title: "Zestimate in $"}
        };
    }

    else if (toggleChoice === "percentage") {
        x = [1,2,3,4,5];
        y = [3,9,27,81,243];

        var update = {
            title: "Percent Change in Zestimate of Well Known Zipcodes",
            xaxis: {title: "Date"},
            yaxis: {title: "Percent Change"}
        };
    }

    // Update the plot
    Plotly.restyle("lineplot", "x", [x]);
    Plotly.restyle("lineplot", "y", [y]);
    Plotly.relayout("lineplot", update)
}

init_line();