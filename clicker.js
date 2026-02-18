//upgradek
let point = document.querySelector(".counter")
let cost1 = document.querySelector(".cost1")
let level1 = document.querySelector(".level1")
let level2 = document.querySelector(".level2")
let multip = document.querySelector(".multiplier")
let image = document.querySelector(".clicker")
let cost2 = document.querySelector(".cost2")
let cost3 = document.querySelector(".cost3")
let cost5 = document.querySelector(".cost5")
let rageInfo = document.querySelector(".rageInfo")
let autoInterval = null
let multiplier = 1
let automultiplier1 = 0
let automultiplier2 = 0
let level_1 = 1
let time = 0
let rageUnlocked = false
//upgradek

//hangok
var sound1 = new Audio();
var sound2 = new Audio();
var sound3 = new Audio();
sound3.src = "sounds/error.mp3";
//hangok

// rage modex
let rageActive = false
let rageCooldown = false
let rageTimeLeft = 0
let rageCooldownLeft = 0
let rageInterval = null
let rageCooldownInterval = null
let rageMultiplier = 3

function rage() {
    if (rageUnlocked){
        if (rageActive || rageCooldown) {
                return
        }
    
        rageActive = true
        rageCooldown = true
        rageTimeLeft = 15

        rageInterval = setInterval(rageActivated, 1000)
    }
    else {
        sound3.play()
    }
    
}

function rageActivated() {
    
    rageTimeLeft--

    if (rageTimeLeft <= 0) {
        clearInterval(rageInterval)
        rageActive = false
        rageCDStart()
    }
    else {
        rageInfo.innerHTML = "Time left: " + rageTimeLeft
    }
}

function rageCDStart() {

    rageCooldownLeft = 60
    rageCooldownInterval = setInterval(rageCDTime, 1000)
}

function rageCDTime() {

    rageCooldownLeft--

    if (rageCooldownLeft <= 0) {
        rageInfo.innerHTML = "READY"
        clearInterval(rageCooldownInterval)
        rageCooldown = false
    }
    else {
        rageInfo.innerHTML = "Cooldown: " + rageCooldownLeft
    }
}




//rage mode




function displayPoints(){
    let value = parseFloat(point.innerHTML) + multiplier
    if (rageActive) {
        value = parseFloat(point.innerHTML) + multiplier*rageMultiplier
    }
    point.innerHTML = Math.round(value * 100) / 100
    critstrike()
}


function upgrade1() {
    if (parseFloat(point.innerHTML) >=6.7 && level_1 === 1) {
        multip.innerHTML = "1.2x"
        cost1.innerHTML = 200
        multiplier = 1.2
        level1.innerHTML = "2"
        level_1 = 2
        point.innerHTML= parseFloat(point.innerHTML) -6.7
        point.innerHTML = Math.round(point.innerHTML * 100) / 100
    }
    else if (parseFloat(point.innerHTML) >=20.0 && level_1 === 2) {
        point.innerHTML= parseFloat(point.innerHTML) -20.0
        multip.innerHTML = "1.8x"
        cost1.innerHTML = 750
        multiplier = 1.8
        level_1 = 3
        level1.innerHTML = "3"
        point.innerHTML = Math.round(point.innerHTML * 100) / 100
    }
    else if (parseFloat(point.innerHTML) >=75.0 && level_1 === 3) {
        point.innerHTML= parseFloat(point.innerHTML) -75.0
        multip.innerHTML = "3x"
        cost1.innerHTML = 2000
        multiplier = 3
        level_1 = 4
        level1.innerHTML = "4"
        point.innerHTML = Math.round(point.innerHTML * 100) / 100
    }
    else if (parseFloat(point.innerHTML) >=200.0 && level_1 === 4) {
        point.innerHTML= parseFloat(point.innerHTML) -200.0
        multip.innerHTML = "5x"
        cost1.innerHTML = "-"
        multiplier = 5
        level_1 = 5
        level1.innerHTML = "MAX"
        point.innerHTML = Math.round(point.innerHTML * 100) / 100
    }
    else {
        sound3.play()
    }
}


function upgrade2() {
    if (parseFloat(point.innerHTML) >= 100 && level_1 === 5 && automultiplier1 === 0) {
        point.innerHTML= parseFloat(point.innerHTML)- 100
        automultiplier1 = 15
        cost2.innerHTML = "- UNLOCKED"
        autoInterval = setInterval(autoclick1, 1000)
        sound1.src = "sounds/soundeffect.ogg";
        point.innerHTML = Math.round(point.innerHTML * 100) / 100
    }
    else {
        sound3.play()
    }
}

function autoclick1() {
    let value = parseFloat(point.innerHTML) + automultiplier1
    point.innerHTML = Math.round(value * 100) / 100
    sound1.play()
}

function upgrade3() {
    if (parseFloat(point.innerHTML) >= 200 && level_1 === 5 && automultiplier2 === 0) {
        point.innerHTML= parseFloat(point.innerHTML)- 100
        automultiplier2 = 250
        cost3.innerHTML = "- UNLOCKED"
        autoInterval = setInterval(autoclick2, 5000)
        sound2.src = "sounds/bogos.wav";
        point.innerHTML = Math.round(point.innerHTML * 100) / 100
    }
    else {
        sound3.play()
    }
}

function autoclick2() {
    let value = parseFloat(point.innerHTML) + automultiplier2
    point.innerHTML = Math.round(value * 100) / 100
    sound2.play()
}

let level_2 = 1
let chance = document.querySelector(".chance")
let cost4 = document.querySelector(".cost4")
let critchance = 0

function upgrade4() {
    if (parseFloat(point.innerHTML) >=150 && level_2 === 1) {
        chance.innerHTML = "20%"
        critchance = 0.2
        cost4.innerHTML = 23000
        level2.innerHTML = "2"
        level_2 = 2
        point.innerHTML= parseFloat(point.innerHTML) -150
        point.innerHTML = Math.round(point.innerHTML * 100) / 100
    }
    else if (parseFloat(point.innerHTML) >=230 && level_2 === 2) {
        point.innerHTML= parseFloat(point.innerHTML) -230
        chance.innerHTML = "33%"
        critchance = 0.33
        cost4.innerHTML = 30000
        level_2 = 3
        level2.innerHTML = "3"
        point.innerHTML = Math.round(point.innerHTML * 100) / 100
    }
    else if (parseFloat(point.innerHTML) >=300 && level_2 === 3) {
        point.innerHTML= parseFloat(point.innerHTML) -300
        chance.innerHTML = "50%"
        critchance = 0.5
        cost4.innerHTML = 50000
        level_2 = 4
        level2.innerHTML = "4"
        point.innerHTML = Math.round(point.innerHTML * 100) / 100
    }
    else if (parseFloat(point.innerHTML) >=1000 && level_2 === 4) {
        point.innerHTML= parseFloat(point.innerHTML) -1000
        chance.innerHTML = "100%"
        critchance = 1
        cost4.innerHTML = "-"
        level_2 = 5
        level2.innerHTML = "MAX"
        point.innerHTML = Math.round(point.innerHTML * 100) / 100
    }
    else {
        sound3.play()
    }
}

function critstrike () {
    if (rageActive) {
        if (Math.random() < critchance)  {
            let value = parseFloat(point.innerHTML) + multiplier*rageMultiplier
            point.innerHTML = Math.round(value * 100) / 100
        }
    }
    else if (Math.random() < critchance)  {
        let value = parseFloat(point.innerHTML) + multiplier
        point.innerHTML = Math.round(value * 100) / 100
    }
    
}


function upgrade5() {
    if (!rageUnlocked && parseFloat(point.innerHTML) >= 750){
        point.innerHTML= parseFloat(point.innerHTML) -750
        rageUnlocked = true
        rageInfo.innerHTML = "READY"
        cost5.innerHTML = "- UNLOCKED"
        point.innerHTML = Math.round(point.innerHTML * 100) / 100
    }
    else {
        sound3.play()
    }
}



let paellaowned = false
let bullowned = false
let flamowned = false
let mikulaowned = false
let churrosowned = false
let costpaella = document.querySelector(".costpaella")
let costbull = document.querySelector(".costbull")
let costflam = document.querySelector(".costflam")
let costmikula = document.querySelector(".costmikula")
let costchurros = document.querySelector(".costchurros")




function shop(skin) {
    if (skin === "paella") {
        if (!paellaowned &&parseFloat(point.innerHTML) >= 500) {
            point.innerHTML= parseFloat(point.innerHTML)- 500
            image.src = "img/paella.png";
            costpaella.innerHTML = "OWNED"
            paellaowned = true
            point.innerHTML = Math.round(point.innerHTML * 100) / 100
        }
        else if (paellaowned) {
         image.src = "img/paella.png";
        }
        else {
        sound3.play()
    }
    }

    if (skin === "bull") {
        if (!bullowned &&parseFloat(point.innerHTML) >= 750) {
            point.innerHTML= parseFloat(point.innerHTML)- 750
            image.src = "img/bull.png";
            costbull.innerHTML = "OWNED"
            bullowned = true
            point.innerHTML = Math.round(point.innerHTML * 100) / 100
        }
        else if (bullowned) {
         image.src = "img/bull.png";
        }
        else {
        sound3.play()
    }
    }    

    if (skin === "flam") {
        if (!flamowned &&parseFloat(point.innerHTML) >= 1000) {
            point.innerHTML= parseFloat(point.innerHTML)- 1000
            image.src = "img/flamenco.png";
            costflam.innerHTML = "OWNED"
            flamowned = true
            point.innerHTML = Math.round(point.innerHTML * 100) / 100
        }
        else if (flamowned) {
         image.src = "img/flamenco.png";
        }
        else {
        sound3.play()
    }
    }  
    
    if (skin === "mikula") {
        if (!mikulaowned &&parseFloat(point.innerHTML) >= 1000) {
            point.innerHTML= parseFloat(point.innerHTML)- 1000
            image.src = "img/tapas.png";
            costmikula.innerHTML = "OWNED"
            mikulaowned = true
            point.innerHTML = Math.round(point.innerHTML * 100) / 100
        }
        else if (mikulaowned) {
         image.src = "img/tapas.png";
        }
        else {
        sound3.play()
    }
    }  
    if (skin === "churros") {
        if (!churrosowned &&parseFloat(point.innerHTML) >= 1000) {
            point.innerHTML= parseFloat(point.innerHTML)- 1000
            image.src = "img/churros.png";
            costchurros.innerHTML = "OWNED"
            churrosowned = true
            point.innerHTML = Math.round(point.innerHTML * 100) / 100
        }
        else if (churrosowned) {
         image.src = "img/churros.png";
        }
        else {
        sound3.play()
    }
    }  
}