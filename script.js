function add() {
    let x = document.getElementById('add');
    let y = 5 + 3;
    x.outerHTML = y;
}

function sub() {
    let x = document.getElementById('sub');
    let y = 5 - 3;
    x.outerHTML = y;
}

function mult() {
    let x = document.getElementById('mult');
    let y = 5 * 3;
    x.outerHTML = y;
}

function div() {
    let x = document.getElementById('div');
    let y = 5 / 3;
    x.outerHTML = y;
}