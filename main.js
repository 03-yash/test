const form = document.querySelector("form");

const size = document.querySelector("#size");
const input = document.querySelector("#input");
const img = document.querySelector("img");

const fetching = async (e) => {
  e.preventDefault();
  const response = await fetch(
    `http://api.qrserver.com/v1/create-qr-code/?size=${size.value}&data=${input.value}`
  );
  console.log(response);
  img.setAttribute("src", response.url);
  form.reset();
};

form.addEventListener("submit", fetching);
