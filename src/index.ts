import "../src/styles.css";
import { formData } from "./forms";

const form = document.querySelector("form")!;


form.addEventListener("submit",(e)=>{
  e.preventDefault();
  const data = formData(form);
  const nameElement = document.querySelector(".name-output")!;
  nameElement.textContent = `Hello my name is ${data.name}. I am ${data.age} years old and you can reach me at ${data.email}`;
})