

function init(){
fetch(`${window.location.href.substring(0,21)}/rental_data`)
    .then(function(u){return u.json();})
    .then(function(json){jsondata = json
    console.log(jsondata)
    let zkey = Object.keys(jsondata)
    let Zkey = zkey.filter(e => e)
    let list = document.getElementById("Zips");
    Zkey.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText = item;
        list.appendChild(li);
    })})
}

let key = 78701
const urlbase = window.location.href.substring(0,21)

d3.selectAll("#search").on("click", function() {
    let SBVal = document.getElementById('searchbar').value
    let DDVal = document.getElementById('dropdownselector').value
    console.log(SBVal, DDVal)
    update(DDVal)
})

const Zidtags = ['.zipcodez', '.mostrecentz', '.avgz', '.lowestz', '.highestz'];
const Ridtags = ['.zipcoder', '.mostrecentr', '.avgr', '.lowestr', '.highestr'];


function Arrays(jsondata, tags, Selector){
    console.log(Selector)
    let arrayN = [];
    let zkey = Object.keys(jsondata)
    let Zkey = zkey.filter(e => e)
    let index = Zkey.indexOf(document.getElementById('searchbar').value)
    for(i in jsondata) {
        arrayN.push(jsondata[i])
    }
    console.log(index) //+
    console.log(arrayN) //+
    ZipCodeArray = Object.values(arrayN[index])
    ZipCodeArray.shift()
    console.log(ZipCodeArray)
    //for (var j = 0; j < arrayS.length; j++){
    //    arrayN.push(parseInt(arrayS[j]))
    //}
    //ZipCodeArray.pop()
    let arrayFiltered = ZipCodeArray.filter(e => e);

    console.log(arrayFiltered)
    let Total = 0

    arrayFiltered.forEach(element => {Total += element});
    console.log(Total)
    Avg = (Total/ZipCodeArray.length)

    if(Selector === 'USDOT'){
        console.log(Selector)
        SumStrings = [`Zip Code: ${key}`,`Most recent price: ${arrayFiltered[arrayFiltered.length-1]}$`, `Average price: ${Math.trunc(Avg)}$`, `Lowest price: ${Math.min(...arrayFiltered)}$`, `Highest price: ${Math.max(...arrayFiltered)}$`]
    }
    else{
        
        console.log(Selector)
        SumStrings = [`Zip Code: ${key}`,`Most recent change: ${arrayFiltered[arrayFiltered.length-1]}%`,`Average Change in %: ${Avg}%`,`Largest Drop: ${Math.min(...arrayFiltered)}%`,`Largest Increase: ${Math.max(...arrayFiltered)}%`]
    }

    d3.select(tags[0]).text(SumStrings[0]);
    d3.select(tags[1]).text(SumStrings[1]);
    d3.select(tags[2]).text(SumStrings[2]);
    d3.select(tags[3]).text(SumStrings[3]);
    d3.select(tags[4]).text(SumStrings[4]);

    arrayS = [];
    arrayN = [];
    arrayFiltered = [];
    Total = [];
    Avg = [];
}   

function update(Selector){
    console.log(Selector)
    if(Selector == 'USDOT'){
        console.log("there!")
        rentalfile = `${urlbase}/rental_data`
        zestyfile = `${urlbase}/zestimates`
    
    }
    else{
        console.log("Here!")
        rentalfile = `${urlbase}/rental_percentages`
        zestyfile = `${urlbase}/zestimates_percentages`
    }

    console.log(rentalfile, zestyfile)
    fetch(rentalfile)
        .then(function(u){return u.json();})
        .then(function(json){rjsondata = json
        console.log(rjsondata)
        let zkey = Object.keys(rjsondata)
        let Zkey = zkey.filter(e => e)
        console.log(Zkey)
        for(i in rjsondata){
            if(Zkey.includes(document.getElementById('searchbar').value)){
                key = document.getElementById('searchbar').value
            }
        }
        Arrays(rjsondata, Ridtags, Selector)
    });

    fetch(zestyfile)    
        .then(function(u){return u.json();})
        .then(function(json){zjsondata = json
        console.log(zjsondata)
        let zkey = Object.keys(zjsondata)
        let Zkey = zkey.filter(e => e)
        console.log(Zkey)
        for(i in zjsondata){
            if(Zkey.includes(document.getElementById('searchbar').value)){
                key = document.getElementById('searchbar').value
            }
        }
        Arrays(zjsondata, Zidtags, Selector)
    });
}

init()