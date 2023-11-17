const cookie = document.querySelector('#cookie')
const retryBtn = document.querySelector('#retryBtn')
const luckPhrase = document.querySelector('section p')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')

const luck = [
    'Alguns biscoitos da sorte não contêm nenhuma sorte',
    'Volte depois... estou dormindo (sim, biscoitos da sorte também precisam de seu sono)',
    'Sua sorte diz que você precisa fazer uma doação. Dê ela para o chef',
    'Pare de enrolar - comece amanhã',
    'Gravidez é um presente. E no seu caso também vai ser uma surpresa',
    'O cordeiro ajoelha-se para mamar.',
    'Se o problema tem solução, não esquente a cabeça, porque tem solução. Se não tem solução, não esquente a cabeça, porque não tem solução.'
]

/*events*/

cookie.addEventListener('click', handleClick)
retryBtn.addEventListener('click', handleRetryClick)

/*funções*/

function handleClick(){
    toggleScreen()
}

function handleRetryClick(){
    toggleScreen()

    let randomNumber = Math.floor(Math.random()*(luck.length))
    luckPhrase.innerText = luck[randomNumber] //irá pegar as frases aleatoriamente no array
}


function toggleScreen(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}