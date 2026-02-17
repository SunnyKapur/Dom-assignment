let arr = [{
        team: "CSK",
        primaryColor: "yellow",
        secondaryColor: "green",
        fullName: "Channai Super King",
        captainName: "Ruturaj Gaikwad"
    },
    {
        team: "RCB",
        primaryColor: "red",
        secondaryColor: "black",
        fullName: "Royal Challengers Bengaluru",
        captainName: "Rajat Patidar"
    },
    {
        team: "MI",
        primaryColor: "blue",
        secondaryColor: "gold",
        fullName: "Mumbai Indians",
        captainName: "Hardik Pandya"
    },
    {
        team: "KKR",
        primaryColor: "purple",
        secondaryColor: "gold",
        fullName: "Kolkata Knight Riders",
        captainName: "Ajinkya Rahane"
    },
    {
        team: "SRH",
        primaryColor: "orange",
        secondaryColor: "black",
        fullName: "Sunrisers Hyderabad",
        captainName: "Pat Cummins"
    },
    {
        team: "DC",
        primaryColor: "red",
        secondaryColor: "yellow",
        fullName: "Delhi Capitals",
        captainName: "Axar Patel"
    },
    {
        team: "RR",
        primaryColor: "pink",
        secondaryColor: "blue",
        fullName: "Rajasthan Royals",
        captainName: "Riyan Parag"
    }
]


let h1 = document.querySelector('h1')
let btn = document.querySelector('button')
let h3 = document.querySelector('h3')
let h4 = document.querySelector('h4')


btn.addEventListener('click', function () {
    let num = Math.floor(Math.random()*arr.length)
    let teamWinner = arr[num]

    h1.innerHTML = teamWinner.team
    h1.style.backgroundColor = teamWinner.primaryColor
    h1.style.color = teamWinner.secondaryColor
    h3.innerHTML = teamWinner.captainName
    h4.innerHTML = teamWinner.fullName
})