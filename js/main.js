const adviceId = document.querySelector('#advice-id');
const adviceContainer = document.querySelector('#advice-container');
const button = document.querySelector('#button');

const URL = 'https://api.adviceslip.com/advice';

document.addEventListener('DOMContentLoaded', randomAdvice);
button.addEventListener('click', randomAdvice);

async function fetchData(url) {
    const response = await fetch(url)
    const data = await response.json();

    return data;
};

async function randomAdvice() {
    const data = await fetchData(URL);

    adviceId.innerText = `ADVICE #${data.slip.id}`;
    adviceContainer.innerText = `${data.slip.advice}`;
};