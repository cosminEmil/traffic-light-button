setInterval(function changeColor() {
    //alert("Ai apasat butonul");
    let button = document.getElementById('myBtn');

    if (button.className == 'btn btn-danger mt-0') {
        button.className = 'btn btn-warning mt-0';
    } else if (button.className == 'btn btn-warning mt-0') {
        button.className = 'btn btn-success mt-0';
    } else if (button.className == 'btn btn-success mt-0') {
        button.className = 'btn btn-danger mt-0';
    }
    //alert("a juns aici");
}, 10*1000);