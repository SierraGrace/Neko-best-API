const button = document.querySelector(".btn");
const button2 = document.querySelector(".btn2");
const button3 = document.querySelector(".btn3");

const image = document.querySelector(".img");
const image2 = document.querySelector(".img2");
const image3 = document.querySelector(".img3");

const url = "https://nekos.best/api/v2/husbando";
const url2 = "https://nekos.best/api/v2/kitsune";
const url3 = "https://nekos.best/api/v2/waifu";

async function fetchHandler(number)
{
  if(number == 1)
  {
    try
    {
      const response = await fetch(url);
      const data = await response.json();

      image.src = data.results[0].url;
    }
    catch (error)
    {
      image.alt = "Incorrect API call";
    }
  }
  else if(number == 2)
  {
    try
    {
      const response = await fetch(url2);
      const data = await response.json();

      image2.src = data.results[0].url;
    }
    catch (error)
    {
      image2.alt = "Incorrect API call";
    }
  }
  else
  {
    try
    {
      const response = await fetch(url3);
      const data = await response.json();

      image3.src = data.results[0].url;
    }
    catch (error)
    {
      image3.alt = "Incorrect API call";
    }
  }
}

button.addEventListener("click", () => {
  let isLoaded = image.complete;

  if (isLoaded)
  {
    fetchHandler(1);
  }
});

button2.addEventListener("click", () => {
  let isLoaded = image2.complete;

  if (isLoaded)
  {
    fetchHandler(2);
  }
});

button3.addEventListener("click", () => {
  let isLoaded = image3.complete;

  if (isLoaded)
  {
    fetchHandler(3);
  }
});
