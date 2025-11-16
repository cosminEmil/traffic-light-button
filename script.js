let colors = ['btn btn-danger mt-0', 'btn btn-warning mt-0', 'btn btn-success mt-0']
let cnt = 0;

setInterval(() => {
    if (cnt == 3) {
        cnt = 0;
    }
    changeColor();
}, 10 * 1000);

function changeColor() {
    let btn = document.getElementById('myBtn');
    btn.className = colors[cnt];
    ++cnt;
}