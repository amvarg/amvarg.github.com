//user alerted w instructions — make sure u comment this back in!!
// alert("How do you define your generation?\n\nUse the draggable images to the right to create a\ncollage that you feel defines your generation.");

// target elements with the "draggable" class
interact('.draggable')
    .draggable({
        inertia: true,
        modifiers: [
            interact.modifiers.restrictRect({
                restriction: 'parent',
                endOnly: true
            })
        ],

        autoScroll: true,

        listeners: {
            move: dragMoveListener,
        }
    })
// stuff directly from interact.js documentation
function dragMoveListener(event) {
    var target = event.target
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
}

window.dragMoveListener = dragMoveListener


// ui update - drop 1 
function updateInterface1() {
    var subjectIdNode = document.getElementById('drop1');
    var bgColor = document.getElementById('frame');
    var update1 = document.getElementById('update1');
    var value = subjectIdNode.options[subjectIdNode.selectedIndex].text;
    document.getElementById("update1").innerHTML = `${value}`;
    bgColor.style.backgroundColor = "rgba(67, 208, 82, 0.1)";
}
// ui update - drop 2
function updateInterface2() {
    var subjectIdNode = document.getElementById('drop2');
    var bgColor = document.getElementById('frame');
    var update2 = document.getElementById('update2');
    var value = subjectIdNode.options[subjectIdNode.selectedIndex].text;
    document.getElementById("update2").innerHTML = `${value}`;
    bgColor.style.backgroundColor = "rgba(67, 91, 208, 0.1)";
}

// ui update - drop 3
function updateInterface3() {
    var subjectIdNode = document.getElementById('drop3');
    var bgColor = document.getElementById('frame');
    var update3 = document.getElementById('update3');
    var value = subjectIdNode.options[subjectIdNode.selectedIndex].text;
    document.getElementById("update3").innerHTML = `${value}`;
    bgColor.style.backgroundColor = "rgba(240, 223, 42, 0.1)";
}
console.log('reading js!!!!');

