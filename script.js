function changeColor() {
    //alert("Ai apasat butonul");
    let button = document.getElementById('myBtn');
    switch (button.className) {
        case 'btn btn-danger mt-0':
            button.className = 'btn btn-warning mt-0';
            break;
        case 'btn btn-warning mt-0':
            button.className = 'btn btn-success mt-0';
            break;
        case 'btn btn-success mt-0':
            button.className = 'btn btn-danger mt-0';
    }
}