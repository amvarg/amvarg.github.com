let globalData;

async function getData() {
    const coffeeMood = await fetch('data/coffee.json');
    const data = await coffeeMood.json();
    globalData = data

    document.querySelector('#picker').innerHTML = selectList(data);

}

function selectList(data) {
    let html = '<option>---</option>';
    const dataPoints = Object.keys(data);
    dataPoints.forEach(function (eachPoint) {
        html += `<option value = "${eachPoint}">${data[eachPoint].time} am</option>`
    });
    return html;

}

document.querySelector("#picker").addEventListener('change', function () {
    const newValue = this.value;
    updateInterface(newValue, globalData);
    //    how does this work here

})

function updateInterface(value, jsonData) {
    let html = '<p>';
    html += `I'm feeling ${jsonData[value].mood}`;
    html += '</p>';
    document.querySelector('#result').innerHTML = html;
    // switching based on time key
    if (jsonData[value].time === "7:30") {
        document.querySelector('#frame').style.backgroundColor = "darkred";
        document.querySelector('#mug1').style.animation = "pulsate 1s infinite";
    } else if (jsonData[value].time === "7:55") {
        document.querySelector('#frame').style.backgroundColor = "brown";
        document.querySelector('#mug1').style.animation = "";
        document.querySelector('#mug2').style.animation = "pulsate 1s infinite";
    } else if (jsonData[value].time === "8:20") {
        document.querySelector('#frame').style.backgroundColor = "indianred";
        document.querySelector('#mug1').style.animation = "";
        document.querySelector('#mug2').style.animation = "";
        document.querySelector('#mug3').style.animation = "pulsate 1s infinite";
    } else if (jsonData[value].time === "8:45") {
        document.querySelector('#frame').style.backgroundColor = "khaki";
        document.querySelector('#mug1').style.animation = "";
        document.querySelector('#mug2').style.animation = "";
        document.querySelector('#mug3').style.animation = "";
        document.querySelector('#mug4').style.animation = "pulsate 1s infinite";
    } else if (jsonData[value].time === "9:10") {
        document.querySelector('#frame').style.backgroundColor = "limegreen";
        document.querySelector('#mug1').style.animation = "";
        document.querySelector('#mug2').style.animation = "";
        document.querySelector('#mug3').style.animation = "";
        document.querySelector('#mug4').style.animation = "";
        document.querySelector('#mug5').style.animation = "pulsate 1s infinite";
    } else if (jsonData[value].time === "9:45") {
        document.querySelector('#frame').style.backgroundColor = "palegoldenrod";
        document.querySelector('#mug1').style.animation = "";
        document.querySelector('#mug2').style.animation = "";
        document.querySelector('#mug3').style.animation = "";
        document.querySelector('#mug4').style.animation = "";
        document.querySelector('#mug5').style.animation = "";
        document.querySelector('#mug6').style.animation = "pulsate 1s infinite";
    }else if (jsonData[value].time === "10:20") {
        document.querySelector('#frame').style.backgroundColor = "rosybrown";
        document.querySelector('#mug1').style.animation = "";
        document.querySelector('#mug2').style.animation = "";
        document.querySelector('#mug3').style.animation = "";
        document.querySelector('#mug4').style.animation = "";
        document.querySelector('#mug5').style.animation = "";
        document.querySelector('#mug6').style.animation = "";
        document.querySelector('#mug7').style.animation = "pulsate 1s infinite";
    }else if (jsonData[value].time === "10:20") {
        document.querySelector('#frame').style.backgroundColor = "rosybrown";
        document.querySelector('#mug1').style.animation = "";
        document.querySelector('#mug2').style.animation = "";
        document.querySelector('#mug3').style.animation = "";
        document.querySelector('#mug4').style.animation = "";
        document.querySelector('#mug5').style.animation = "";
        document.querySelector('#mug6').style.animation = "";
        document.querySelector('#mug7').style.animation = "pulsate 1s infinite";
    }else if (jsonData[value].time === "11:15") {
        document.querySelector('#frame').style.backgroundColor = "sienna";
        document.querySelector('#mug1').style.animation = "";
        document.querySelector('#mug2').style.animation = "";
        document.querySelector('#mug3').style.animation = "";
        document.querySelector('#mug4').style.animation = "";
        document.querySelector('#mug5').style.animation = "";
        document.querySelector('#mug6').style.animation = "";
        document.querySelector('#mug7').style.animation = "";
        document.querySelector('#mug8').style.animation = "pulsate 1s infinite";
    }else if (jsonData[value].time === "11:15") {
        document.querySelector('#frame').style.backgroundColor = "sienna";
        document.querySelector('#mug1').style.animation = "";
        document.querySelector('#mug2').style.animation = "";
        document.querySelector('#mug3').style.animation = "";
        document.querySelector('#mug4').style.animation = "";
        document.querySelector('#mug5').style.animation = "";
        document.querySelector('#mug6').style.animation = "";
        document.querySelector('#mug7').style.animation = "";
        document.querySelector('#mug8').style.animation = "pulsate 1s infinite";
    }else if (jsonData[value].time === "11:35") {
        document.querySelector('#frame').style.backgroundColor = "orangered";
        document.querySelector('#mug1').style.animation = "";
        document.querySelector('#mug2').style.animation = "";
        document.querySelector('#mug3').style.animation = "";
        document.querySelector('#mug4').style.animation = "";
        document.querySelector('#mug5').style.animation = "";
        document.querySelector('#mug6').style.animation = "";
        document.querySelector('#mug7').style.animation = "";
        document.querySelector('#mug8').style.animation = "";
        document.querySelector('#mug9').style.animation = "pulsate 1s infinite";
    }else{
        document.querySelector('#mug1').style.animation = "";
        document.querySelector('#mug2').style.animation = "";
        document.querySelector('#mug3').style.animation = "";
        document.querySelector('#mug4').style.animation = "";
        document.querySelector('#mug5').style.animation = "";
        document.querySelector('#mug6').style.animation = "";
        document.querySelector('#mug7').style.animation = "";
        document.querySelector('#mug8').style.animation = "";
        document.querySelector('#mug9').style.animation = "";
    }



}

getData();

