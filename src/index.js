import { generateJoke } from "./generateJoke";
import "./styles/main.scss";
import laugh from "./assets/laugh.jpg";

const laughImg = document.getElementById("laughImg");
laughImg.src = laugh;
generateJoke();

const jokeBtn = document.getElementById("jokeBtn");
jokeBtn.addEventListener("click",generateJoke);

