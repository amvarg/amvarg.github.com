(function(){
    'use strict';
    console.log(`reading js!!!!`);

    alert('Welcome to the user test! \nPlease complete the three following tasks:\n\n1. Fill out the form entirely.\n2. Submit your input, and output a poster.\n3. Reset the form and poster output.');

    var myForm = document.querySelector(`#myForm`);
    var madlib = document.querySelector("#madlib");
    var incomplete = document.querySelector("#incomplete")
    var posterOverlay = document.querySelector("#posterOverlay")
    var artistName = document.querySelector("#artistName")
    var performing = document.querySelector("#performing")
    var fruitEmo = document.querySelector("#fruitEmo")
    var home = document.querySelector("#home")
    var venueDate = document.querySelector("#venueDate")
    let selImg = document.querySelector('#selImg');
   
   
    myForm.addEventListener('submit', function(event){
        event.preventDefault();

        //user input variables
        var adj1 = document.querySelector('#adj1').value;
        var noun1 = document.querySelector('#noun1').value;
        var fruit = document.querySelector('#fruit').value;
        var emo = document.querySelector('#emo').value;
        var verb1 = document.querySelector('#verb1').value;
        var noun2 = document.querySelector('#noun2').value;
        var adj2 = document.querySelector('#adj2').value;
        var room = document.querySelector('#room').value;
        var hometown = document.querySelector('#hometown').value;
        var num1 = document.querySelector('#num1').value;
        var num2 = document.querySelector('#num2').value;
        var selDrop = document.querySelector('select').value;
        
        //message 2 user
        var myText;

        // 
        if(adj1 && noun1 && fruit && emo && verb1 && noun2 && adj2 && room && hometown && num1 && num2 && selDrop === "hardcore"){
            myText =  `LIVE in concert. The ${adj1} ${noun1}, with special guests ${fruit} ${emo}. Performing their hit single ${verb1} on the ${noun2}. The ${adj2} ${room}. October 25, 1970. ${hometown}, California. ${num1}:${num2} PM, Come feeling ${selDrop}.`;
            posterOverlay.style.display = "block";
            myForm.innerHTML="";//clears everything out
            artistName.innerHTML = ` The ${adj1} ${noun1}`;
            selImg.setAttribute('src', `images/hardcore.png`);
            performing.innerHTML = `Performing their hit single ${verb1} on the ${noun2}.`
            fruitEmo.innerHTML =`${fruit} ${emo}`;
            home.innerHTML =`${hometown}, California.`;
            venueDate.innerHTML = `The ${adj2} ${room}, ${num1}:${num2} PM.`
            console.log("hope u like ur poster :). this picture is one i took seeing the strokes at the forum.")
            
        }
        else if (adj1 && noun1 && fruit && emo && verb1 && noun2 && adj2 && room && hometown && num1 && num2 && selDrop === "relaxed"){
            myText =  `LIVE in concert. The ${adj1} ${noun1}, with special guests ${fruit} ${emo}. Performing their hit single ${verb1} on the ${noun2}. The ${adj2} ${room}. October 25, 1970. ${hometown}, California. ${num1}:${num2} PM, Come feeling ${selDrop}.`;
            posterOverlay.style.display = "block";
            myForm.innerHTML="";//clears everything out
            artistName.innerHTML = ` The ${adj1} ${noun1}`;
            selImg.setAttribute('src', `images/relaxed.png`);
            performing.innerHTML = `Performing their hit single ${verb1} on the ${noun2}.`
            fruitEmo.innerHTML =`${fruit} ${emo}`;
            home.innerHTML =`${hometown}, California.`;
            venueDate.innerHTML = `The ${adj2} ${room}, ${num1}:${num2} PM.`
            console.log("hope u like ur poster :). this picture is one i took at an album release party.")

        }

        else if (adj1 && noun1 && fruit && emo && verb1 && noun2 && adj2 && room && hometown && num1 && num2 && selDrop === "danceable"){
            myText =  `LIVE in concert. The ${adj1} ${noun1}, with special guests ${fruit} ${emo}. Performing their hit single ${verb1} on the ${noun2}. The ${adj2} ${room}. October 25, 1970. ${hometown}, California. ${num1}:${num2} PM, Come feeling ${selDrop}.`;
            posterOverlay.style.display = "block";
            myForm.innerHTML="";//clears everything out
            artistName.innerHTML = ` The ${adj1} ${noun1}`;
            selImg.setAttribute('src', `images/danceable.png`);
            performing.innerHTML = `Performing their hit single ${verb1} on the ${noun2}.`
            fruitEmo.innerHTML =`${fruit} ${emo}`;
            home.innerHTML =`${hometown}, California.`;
            venueDate.innerHTML = `The ${adj2} ${room}, ${num1}:${num2} PM.`
            console.log("hope u like ur poster :). this picture is one i took on my 21st bday.")
        }

        else if (adj1 && noun1 && fruit && emo && verb1 && noun2 && adj2 && room && hometown && num1 && num2 && selDrop === "mind-blowing"){
            myText =  `LIVE in concert. The ${adj1} ${noun1}, with special guests ${fruit} ${emo}. Performing their hit single ${verb1} on the ${noun2}. The ${adj2} ${room}. October 25, 1970. ${hometown}, California. ${num1}:${num2} PM, Come feeling ${selDrop}.`;
            posterOverlay.style.display = "block";
            myForm.innerHTML="";//clears everything out
            artistName.innerHTML = ` The ${adj1} ${noun1}`;
            selImg.setAttribute('src', `images/mind-blowing.png`);
            performing.innerHTML = `Performing their hit single ${verb1} on the ${noun2}.`
            fruitEmo.innerHTML =`${fruit} ${emo}`;
            home.innerHTML =`${hometown}, California.`;
            venueDate.innerHTML = `The ${adj2} ${room}, ${num1}:${num2} PM.`
            console.log("hope u like ur poster :). this picture is one i took seeing the band hippo campus.")
        }

        else {
            myText =''
            incomplete.innerHTML = "Please complete the form so <br> I can make your Mad Lib!";
            
        }


        var formData = document.querySelectorAll("input[type=text]");
        for (var eachField of formData){
            eachField.value = "";
        }
    })

}());