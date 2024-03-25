document.addEventListener("DOMContentLoaded", () => {
    fetch("https://animechan.xyz/api/random")
        .then(response => response.json())
        .then(data => anime(data))
        .catch(error => console.error("Error fetching anime:", error));
});

function anime(data) {
    const Content = document.getElementById("anime");
    const card = document.createElement("div");
    card.classList.add("col-md-4", "mb-3"); // Bootstrap classes for column width and margin
    const cardElement = `
        <div class="card">
            <div class="card-header">${data.anime}</div>
            <div class="card-body">
                <p class="card-text">Character: ${data.character}</p>
                <p class="card-text">Quote: ${data.quote}</p>
            </div>
        </div>
    `;
    card.innerHTML = cardElement;
    Content.appendChild(card);
}


const div = document.getElementsByTagName("div")[0];
const span = document.getElementsByTagName("")[0];

const changecolor = (event) => {
    event.target.style.color = `rgb(${Math.random()* 256},${Math.random() *256},${Math.random()* 256})`;
};
//console.log(getComputedStyle(event.target).color);

const removecolor =(event) =>{
    event.target.style.color = "";
};

div.addEventListener("mouseover", changecolor);
span.addEventListener("mouseover",changecolor);

div.addEventListener("mouseout", removecolor);
span.addEventListener("mouseout",removecolor);
