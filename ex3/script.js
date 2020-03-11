// Make the box blue when you click the button. (Here's some code to help you get started)

var button = document.getElementById("myButton");

button.addEventListener('click', function(){
    const curColor = document.getElementById('box').style.backgroundColor;

    if (curColor === 'red') {
        document.getElementById('box').style.backgroundColor = "blue";
    }
    else {
        document.getElementById('box').style.backgroundColor = "red";
    }
})
