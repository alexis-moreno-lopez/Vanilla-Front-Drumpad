
const audio1 = document.querySelector('#prem')
const audio2 = document.querySelector('#sec')
const audio3 = document.querySelector('#tro')
const audio4 = document.querySelector('#qua')
const audio5 = document.querySelector('#cinq')
const audio6 = document.querySelector('#six')
const audio7 = document.querySelector('#sep')
const audio8 = document.querySelector('#hui')
const audio9 = document.querySelector('#neu')



let carteA = document.querySelector('#carteA')

document.addEventListener ('keydown', (e) => {
    if (e.key === 'a'){
        
        carteA.classList.add('playing');
    audio1.play()
    }
})

document.addEventListener ('keyup', (e) => {
    if (e.key === 'a') {
        carteA.classList.remove('playing');
    }
})

let carteZ = document.querySelector('#carteZ')

document.addEventListener ('keydown', (e) => {
    if (e.key === 'z'){
        
        carteZ.classList.add('playing');
    audio2.play()
    }
})

document.addEventListener ('keyup', (e) => {
    if (e.key === 'z') {
        carteZ.classList.remove('playing');
    }
})


let carteE = document.querySelector('#carteE')

document.addEventListener ('keydown', (e) => {
    if (e.key === 'e'){
        
        carteE.classList.add('playing');
    audio3.play()
    }
})

document.addEventListener ('keyup', (e) => {
    if (e.key === 'e') {
        carteE.classList.remove('playing');
    }
})
    
let carteQ = document.querySelector('#carteQ')

document.addEventListener ('keydown', (e) => {
    if (e.key === 'q'){
        
        carteQ.classList.add('playing');
    audio4.play()
    }
})

document.addEventListener ('keyup', (e) => {
    if (e.key === 'q') {
        carteQ.classList.remove('playing');
    }
})

let carteS = document.querySelector('#carteS')

document.addEventListener ('keydown', (e) => {
    if (e.key === 's'){
        
        carteS.classList.add('playing');
    audio5.play()
    }
})

document.addEventListener ('keyup', (e) => {
    if (e.key === 's') {
        carteS.classList.remove('playing');
    }
})


let carteD = document.querySelector('#carteD')

document.addEventListener ('keydown', (e) => {
    if (e.key === 'd'){
        
        carteD.classList.add('playing');
    audio6.play()
    }
})

document.addEventListener ('keyup', (e) => {
    if (e.key === 'd') {
        carteD.classList.remove('playing');
    }
})


let carteW = document.querySelector('#carteW')

document.addEventListener ('keydown', (e) => {
    if (e.key === 'w'){
        
        carteW.classList.add('playing');
    audio7.play()
    }
})

document.addEventListener ('keyup', (e) => {
    if (e.key === 'w') {
        carteW.classList.remove('playing');
    }
})

let carteX = document.querySelector('#carteX')

document.addEventListener ('keydown', (e) => {
    if (e.key === 'x'){
        
        carteX.classList.add('playing');
    audio8.play()
    }
})

document.addEventListener ('keyup', (e) => {
    if (e.key === 'x') {
        carteX.classList.remove('playing');
    }
})

let carteC = document.querySelector('#carteC')

document.addEventListener ('keydown', (e) => {
    if (e.key === 'c'){
        
        carteC.classList.add('playing');
    audio9.play()
    }
})

document.addEventListener ('keyup', (e) => {
    if (e.key === 'c') {
        carteC.classList.remove('playing');
    }
})



//keys.forEach(key => {
//key.addEventListner('click', () => {
        
  //  })
//})


//let keys = document.querySelectorAll('key')   //['A', 'Z', 'E', 'Q', 'S', 'D', 'W', 'X', 'C'];
//console.log(alpahabet[0])

//keys.addEventListner ('click', function () {

//})