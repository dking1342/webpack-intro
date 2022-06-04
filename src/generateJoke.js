import axios from "axios"

export const generateJoke = async () => {
  const config = {
    headers:{
      Accept:"application/json"
    }
  }
  try {
    const response = await axios.get("https://icanhazdadjoke.com",config);
    const data = await response.data.joke;
    document.getElementById("joke").innerHTML = data;
  } catch (error) {
    console.error(error);
  }
}

