import generateJoke from "./generateJoke";
import './styles/main.scss'
import  logo from './assets/Alx-min.jpg';

const logoImg = document.getElementById('logoImg');
logoImg.src = logo

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke); 
generateJoke();