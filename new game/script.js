const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById('guessInput');
const submitGuess = document.getElementById('submitGuess');
const message = document.getElementById('message');

submitGuess.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);
    attempts++;

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = "Խնդրում ենք մուտքագրել 1-ից 100 միջակայքում գտնվող վավեր թիվ։";
    } else if (userGuess === randomNumber) {
        message.textContent = `Շնորհավորում ենք։ Դուք գուշակեցիք ${randomNumber} թիվը ${attempts} փորձից!`;
        submitGuess.disabled = true;
    } else if (userGuess < randomNumber) {
        message.textContent = "ավելի շատ է! նորից փորձիր.";
    } else {
        message.textContent = "ավելի քիչ է! նորից փորձիր.";
    }
});