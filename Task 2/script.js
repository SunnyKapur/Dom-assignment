let allImgs = [
    './bheem.png',
    './chutki.png',
    './dholu.png',
    './kaliya.png'
]

let box = document.querySelector('#box')
let btn = document.querySelector('button')

btn.addEventListener('click', function () {
    let num = Math.floor(Math.random() * allImgs.length)

    let img = document.createElement('img')
    img.src = allImgs[num]

    box.appendChild(img)
    img.style.height = '100px'
    box.style.position = "relative"
    img.style.position = 'absolute'

    img.style.left = Math.random() * (box.clientWidth - 100) + "px"
    img.style.top = Math.random() * (box.clientHeight - 100) + 'px'
})