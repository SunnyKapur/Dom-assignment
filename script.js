let box = document.querySelector('#box')
let btn = document.querySelector('button')

let play = false
btn.addEventListener('click', function () {
    if (play === false) {
        box.style.animationName = 'rotate'
        btn.innerHTML = 'pause'
        play = true
    }else{
         box.style.animationName = ''
        btn.innerHTML = 'play'
        play = false
    }

})