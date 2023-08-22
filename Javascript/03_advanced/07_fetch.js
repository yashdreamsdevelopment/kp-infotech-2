const btnEle = document.getElementById("fetchBtn");
const containerEle = document.getElementById("container");
const URL = "https://jsonplaceholder.typicode.com/comments";

const populatePosts = (data) => {
  const titleOfData = data.map((posts) => posts.email);

  titleOfData.forEach((text) => {
    const pEle = document.createElement("p");
    pEle.textContent = text;

    containerEle.appendChild(pEle);
  });
};

const fetchPosts = async () => {
  const response = await fetch(URL);
  const data = await response.json();

  populatePosts(data);
};

btnEle.addEventListener("click", fetchPosts);
