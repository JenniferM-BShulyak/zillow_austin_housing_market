// Initialize Page with first plot
function init_line() {
    data = [{
        x:[1,2,3,4,5],
        y:[2,4,8,16,32]
    }];
    Plotly.newPlot("plot", data);
}

// Call updateLineGraph() when _____ is done
d3.selectALL(________).on("change", updateLineGraph());

// Function to change plot with event is triggered
function updateLineGraph() {
    // Select the dropdown menu
    let toggle = d3.select(______)
    
    // Assign the value of the event to a variable
    let toggleChoice = toggle.property("value")

    // Grab what the x and y values will now be
    // How will data be pulled from SQL? 
    let x = [];
    let y = [];

    if (toggleChoice === "Zestimate") {
        x = [1,2,3,4,5];
        y = [2,4,8,16,32];
    }

    else if (toggleChoice === "Percent Change") {
        x = [1,2,3,4,5];
        y = [3,9,27,81,243];
    }

    // Update the plot
    Plotly.restyle("plot", "x", [x]);
    Plotly.restyle("plot", "y", [y]);

}

init_line()