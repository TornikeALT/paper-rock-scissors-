const computerChoice = document.getElementById('computer-choice');
const yourChoice = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
const myButtons = document.querySelectorAll("button");
let computerChoices;
let randomNum;
let result;
let userChoice;

myButtons.forEach(randomNum =>randomNum.addEventListener('click', (e) =>{
    userChoice = e.target.id;
    yourChoice.innerHTML =  userChoice;
    randomNumber();
    getResult();
}));

function randomNumber(){
    randomNum = Math.floor(Math.random()*3) + 1;
    if(randomNum === 1){
        computerChoices = 'ჭა'
    }
    if(randomNum === 2){
        computerChoices = 'მაკრატელი'
    }
    if(randomNum === 3){
        computerChoices = 'ქაღალდი'
    }
    computerChoice.innerHTML= computerChoices;
}

function getResult(){
    if(computerChoices === userChoice){
        result = 'ფრე , ჰაჯიმე 😛'
    }
    if (computerChoices === 'ჭა' && userChoice ==='მაკრატელი'){
        result = 'წააგე 😢!'
    }
    if (computerChoices === 'ჭა' && userChoice ==='ქაღალდი'){
        result = 'გილოცავ , შენ მოიგე 😎!'
    }
    if (computerChoices === 'მაკრატელი' && userChoice ==='ქაღალდი'){
        result = 'წააგე 😢!'
    }
    if (computerChoices === 'ქაღალდი' && userChoice ==='მაკრატელი'){
        result = 'გილოცავ , შენ მოიგე 😎!'
    }
    if (computerChoices === 'მაკრატელი' && userChoice ==='ჭა'){
        result = 'გილოცავ , შენ მოიგე 😎!'
    }
    if (computerChoices === 'ქაღალდი' && userChoice ==='ჭა'){
        result = 'წააგე 😢!'
    }
    resultDisplay.innerHTML = result;
}

