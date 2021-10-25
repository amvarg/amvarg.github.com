(function(){
    'use strict';
    console.log(`reading js`);

    var myForm = document.querySelector(`#myForm`);
    var madlib = document.querySelector("#madlib");

   

    // selDrop.addEventListener('submit', function(event){
    //     event.preventDefault();
    //     console.log(selDrop.value);
    // })
   
    myForm.addEventListener('submit', function(event){
        event.preventDefault();
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
        
        var myText;

      
        if(adj1 && noun1 && fruit && emo && verb1 && noun2 && adj2 && room && hometown && num1 && num2){
            myText =  `LIVE in concert. The ${adj1} ${noun1}, with special guests ${fruit} ${emo}. Performing their hit single ${verb1} on the ${noun2}. The ${adj2} ${room}. October 25, 1970. ${hometown}, California. ${num1}:${num2} PM, Come feeling ${selDrop}.`;
    
        }
        else {
            myText =     'Please complete the form so I can make your Mad Lib!'
        }

        madlib.innerHTML = myText;
        // madlib.innerHTML = testAnother;

        var formData = document.querySelectorAll("input[type=text]");
        for (var eachField of formData){
            eachField.value = "";
        }
    })

}());