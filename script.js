let add = document.getElementById('increase')
let subtract = document.getElementById('decrease')
let int = document.getElementById('number')
let num = 0;

add.addEventListener('click', function() {
    num += 1;
    int.innerHTML = num;
})

subtract.addEventListener('click', function() {
    if (num == 0) {
        num -= 0
        int.innerHTML = num;
    } else {
        num -= 1;
        int.innerHTML = num;
    }

})

