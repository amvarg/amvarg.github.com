(function(){
    'use strict';
    console.log(`reading js`);
    // dont mind this alert from the user test!
    // alert('Welcome to the user test! \nPlease complete the three following tasks:\n\n1. Fill out the form entirely.\n2. Submit your input, and output a poster.\n3. Reset the form and poster output.'); 
    
    // create variables for each user input 
    var myForm = document.querySelector(`#myForm`);
    var madlib = document.querySelector("#madlib");
    var incomplete = document.querySelector("#incomplete")
    var posterOverlay = document.querySelector("#posterOverlay")
    var artistName = document.querySelector("#artistName")
    var performing = document.querySelector("#performing")
    var fruitEmo = document.querySelector("#fruitEmo")
    var home = document.querySelector("#home")
    var dateYear = document.querySelector("#dateYear")
    var venueDate = document.querySelector("#venueDate")
    let selImg = document.querySelector('#selImg');
   
//    waiting for submit button to be pressed
    myForm.addEventListener('submit', function(event){
        event.preventDefault();

        //user input variables (remember them from above? :) )
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
        var when = document.querySelector('#when').value
        var selDrop = document.querySelector('select').value;
        var form = document.querySelector('form').value;
        
        //message 2 user
        var myText;

        // these could probably be condensed into functions but basically they output the poster based upon what "vibe was selected"
        
        if(adj1 && noun1 && fruit && emo && verb1 && noun2 && adj2 && room && hometown && num1 && num2 && when && selDrop === "hardcore"){
            myText =  `LIVE in concert. The ${adj1} ${noun1}, with special guests ${fruit} ${emo}. Performing their hit single ${verb1} on the ${noun2}. The ${adj2} ${room}. ${when}. ${hometown}, California. ${num1}:${num2} PM, Come feeling ${selDrop}.`;
            posterOverlay.style.display = "block";
            myForm.innerHTML="";//clears everything out
            artistName.innerHTML = ` The ${adj1} ${noun1}`;
            selImg.setAttribute('src', `images/hardcore.png`);
            performing.innerHTML = `Performing their hit single ${verb1} on the ${noun2}.`
            fruitEmo.innerHTML =`${fruit} ${emo}`;
            dateYear.innerHTML=`${when}.`;
            home.innerHTML =`${hometown}, California.`;
            venueDate.innerHTML = `The ${adj2} ${room}, ${num1}:${num2} PM.`
            console.log("hope u like ur poster :). this picture is one i took seeing the strokes at the forum with my best friend.")
            
        }
        else if (adj1 && noun1 && fruit && emo && verb1 && noun2 && adj2 && room && hometown && num1 && num2 && when && selDrop === "relaxed"){
            myText =  `LIVE in concert. The ${adj1} ${noun1}, with special guests ${fruit} ${emo}. Performing their hit single ${verb1} on the ${noun2}. The ${adj2} ${room}.${when}. ${hometown}, California. ${num1}:${num2} PM, Come feeling ${selDrop}.`;
            posterOverlay.style.display = "block";
            myForm.innerHTML="";//clears everything out
            artistName.innerHTML = ` The ${adj1} ${noun1}`;
            selImg.setAttribute('src', `images/relaxed.png`);
            performing.innerHTML = `Performing their hit single ${verb1} on the ${noun2}.`
            fruitEmo.innerHTML =`${fruit} ${emo}`;
            dateYear.innerHTML=`${when}.`;
            home.innerHTML =`${hometown}, California.`;
            venueDate.innerHTML = `The ${adj2} ${room}, ${num1}:${num2} PM.`
            console.log("hope u like ur poster :). this picture is one i took at an album release party for thuy.")

        }

        else if (adj1 && noun1 && fruit && emo && verb1 && noun2 && adj2 && room && hometown && num1 && num2 && when && selDrop === "danceable"){
            myText =  `LIVE in concert. The ${adj1} ${noun1}, with special guests ${fruit} ${emo}. Performing their hit single ${verb1} on the ${noun2}. The ${adj2} ${room}. ${when}. ${hometown}, California. ${num1}:${num2} PM, Come feeling ${selDrop}.`;
            posterOverlay.style.display = "block";
            myForm.innerHTML="";//clears everything out
            artistName.innerHTML = ` The ${adj1} ${noun1}`;
            selImg.setAttribute('src', `images/danceable.png`);
            performing.innerHTML = `Performing their hit single ${verb1} on the ${noun2}.`
            fruitEmo.innerHTML =`${fruit} ${emo}`;
            dateYear.innerHTML=`${when}.`;
            home.innerHTML =`${hometown}, California.`;
            venueDate.innerHTML = `The ${adj2} ${room}, ${num1}:${num2} PM.`
            console.log("hope u like ur poster :). this picture is one i took on my 21st bday @ micky's in weho!")
        }

        else if (adj1 && noun1 && fruit && emo && verb1 && noun2 && adj2 && room && hometown && num1 && num2 && when  && selDrop === "mind-blowing"){
            myText =  `LIVE in concert. The ${adj1} ${noun1}, with special guests ${fruit} ${emo}. Performing their hit single ${verb1} on the ${noun2}. The ${adj2} ${room}. ${when}. ${hometown}, California. ${num1}:${num2} PM, Come feeling ${selDrop}.`;
            posterOverlay.style.display = "block";
            myForm.innerHTML="";//clears everything out
            artistName.innerHTML = ` The ${adj1} ${noun1}`;
            selImg.setAttribute('src', `images/mind-blowing.png`);
            performing.innerHTML = `Performing their hit single ${verb1} on the ${noun2}.`
            fruitEmo.innerHTML =`${fruit} ${emo}`;
            dateYear.innerHTML=`${when}.`;
            home.innerHTML =`${hometown}, California.`;
            venueDate.innerHTML = `The ${adj2} ${room}, ${num1}:${num2} PM.`
            console.log("hope u like ur poster :). this picture is one i took seeing the band hippo campus at the novo.")
        }
// incomplete message called within html if button is pressed without all fields being included
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