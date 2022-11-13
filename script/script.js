`use strict`

const image = document.getElementById(`imgs`);
const hint = document.getElementById(`hint`);

const gussEl = document.getElementById(`guss`)
const Submit = document.getElementById(`submit`);
const history = document.getElementById('winner')

// globle veriable 


function randomwords(number){
    image.innerHTML = `<img src="/images/pic${random}.jpeg"
    alt="random Pictures" />`
    list = ['He rules','He is a celebrity','this animal uses trees to jump','He is super hero']
    if(number === 1){
        hint.innerText = list[0];
    }else if(number === 2){
        hint.innerText = list[1];
    }else if(number === 3){
        hint.innerText = list[2];
    }else if(number === 4){
        hint.innerText = list[3];
    }   
}





Submit.addEventListener('click',()=>{
    random = Math.trunc(Math.random()*4)+1
    if(gussEl.value === ''){
        alert('need to enter smoe thing')
    }else{
        
        randomwords(random)
        if(random === 1){
            if (gussEl.value === 'king'){
                history.innerText = 'correct guss'
            }
        }else if(random === 2){
            if (gussEl.value === 'rock'){
                history.innerText = 'correct guss'
            }
        }else if(random === 3){
            if (gussEl.value === 'monkey'){
                history.innerText = 'correct guss'
            }
        }else if(random === 4){
            if (gussEl.value === 'spider man'){
                history.innerText = 'correct guss'
            }
        }
    }
    
})





