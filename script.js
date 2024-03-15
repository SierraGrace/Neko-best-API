const button = document.querySelector(".btn");
const image = document.querySelector(".img");
const url = "https://nekos.best/api/v2/neko";

async function fetchHandler()
{
  try
  {
  	const response = await fetch(url);
    const data = await response.json();
    image.src = data.results[0].url;
  }
  catch (error)
  {
    console.log(error);
  }
}

button.addEventListener("click", () => {
  let isLoaded = image.complete;

  if (isLoaded)
  {
    fetchHandler();
  }
});