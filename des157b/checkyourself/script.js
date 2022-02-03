let globalData;

async function getData() {
    const coffeeMood = await fetch('data/coffee.json');
    const data = await coffeeMood.json();
    globalData = data

    document.querySelector('#picker').innerHTML = selectList(data);

}

function selectList(data) {
    let html = '';
    const dataPoints = Object.keys(data);
    dataPoints.forEach(function (eachPoint) {
        console.log(eachPoint);
        if (eachPoint === "nothing") {
            html += `<option value = "${eachPoint}">${data[eachPoint].time}</option>`
        } else {
            html += `<option value = "${eachPoint}">${data[eachPoint].time} am</option>`
        }

    });
    return html;

}

document.querySelector("#picker").addEventListener('change', function () {
    const newValue = this.value;
    updateInterface(newValue, globalData);

})


function updateInterface(value, jsonData) {
    let html = '<p>';
    html += `I'm feeling ${jsonData[value].mood}`;
    html += '</p>';
    document.querySelector('#result').innerHTML = html;

    const mugs = document.querySelectorAll('.fa-mug-hot');

    mugs.forEach(function (eachMug) {
        eachMug.removeAttribute('style');
    });

    if (value == "nothing") {
        document.querySelector('#frame').removeAttribute('class');
    } else {
        const last = value.charAt(value.length - 1);
        document.querySelector(`#mug${last}`).style.animation = "pulsate 1s infinite";
        document.querySelector(`#frame`).className=`mug${last}`;

    }


}

getData();

