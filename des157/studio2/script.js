(function(){
    'use strict';
    console.log('reading js :)')

    // text variables
    var plate1 = document.getElementById('plate1');
    var plate2 = document.getElementById('plate2');
    var plate3 = document.getElementById('plate3');
    var plate4 = document.getElementById('plate4');
    var plate5 = document.getElementById('plate5');
    var plate6 = document.getElementById('plate6');

    // overlay variables
    var amgross = document.getElementById('amgross');
    var mistake = document.getElementById('mistake');
    var alien = document.getElementById('alien');
    var gotxbox = document.getElementById('gotxbox');
    var mrsoup = document.getElementById('mrsoup');
    var yayelon = document.getElementById('yayelon');
    
    //mouseover functions
    plate1.addEventListener("mouseover", function(){
        amgross.style.display='block';
    })
    plate2.addEventListener("mouseover", function(){
        mistake.style.display='block';
    })
    plate3.addEventListener("mouseover", function(){
        alien.style.display='block';
    })
    plate4.addEventListener("mouseover", function(){
        gotxbox.style.display='block';
    })
    plate5.addEventListener("mouseover", function(){
        mrsoup.style.display='block';
    })
    plate6.addEventListener("mouseover", function(){
        yayelon.style.display='block';
    })


    //mouseout functions 
    plate1.addEventListener("mouseout", function(){
        amgross.style.display='none';
    })
    plate2.addEventListener("mouseout", function(){
        mistake.style.display='none';
    })
    plate3.addEventListener("mouseout", function(){
        alien.style.display='none';
    })
    plate4.addEventListener("mouseout", function(){
        gotxbox.style.display='none';
    })
    plate5.addEventListener("mouseout", function(){
        mrsoup.style.display='none';
    })
    plate6.addEventListener("mouseout", function(){
        yayelon.style.display='none';
    })
    
}());