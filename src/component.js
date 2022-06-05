export const postsData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    const condensedData = data.slice(0,5);
    const posts = document.querySelector(".posts");
    
    condensedData.forEach(element => {
      let card = document.createElement("div");
      let header = document.createElement("h3");
      let body = document.createElement("p");

      header.textContent = element.title;
      body.textContent = element.body;

      card.append(header);
      card.append(body);
      
      posts.append(card);
    });

  } catch (error) {
    console.error(error);
  }
}