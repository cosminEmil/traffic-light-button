function changeToRed() {
    let button = document.getElementById('myBtn');
    button.className = 'btn btn-danger mt-0';
    setTimeout(changeToYellow, 10 * 1000, button);
}

function changeToYellow(button) {
    button.className = 'btn btn-warning mt-0';
    setTimeout(changeToGreen, 10 * 1000, button);
}

function changeToGreen(button) {
    button.className = 'btn btn-success mt-0';
    setTimeout(changeToRed, 10 * 1000);
}