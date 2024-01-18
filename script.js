const slides = [
  {
    title: "Vice City",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit neque quis quam volutpat, at commodo nibh scelerisque. Fusce elit augue, vulputate sit amet blandit nec, pharetra vitae diam. Nam eget vestibulum ex. Curabitur turpis erat, vehicula et sollicitudin rutrum, varius eu magna. ",
  },
  {
    title: "Second slide",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit neque quis quam volutpat, at commodo nibh scelerisque. Fusce elit augue, vulputate sit amet blandit nec, pharetra vitae diam. Nam eget vestibulum ex. Curabitur turpis erat, vehicula et sollicitudin rutrum, varius eu magna. ",
  },
  {
    title: "Third slide",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit neque quis quam volutpat, at commodo nibh scelerisque. Fusce elit augue, vulputate sit amet blandit nec, pharetra vitae diam. Nam eget vestibulum ex. Curabitur turpis erat, vehicula et sollicitudin rutrum, varius eu magna. ",
  },
  {
    title: "Fourth slide",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit neque quis quam volutpat, at commodo nibh scelerisque. Fusce elit augue, vulputate sit amet blandit nec, pharetra vitae diam. Nam eget vestibulum ex. Curabitur turpis erat, vehicula et sollicitudin rutrum, varius eu magna. ",
  },
  {
    title: "Fifth slide",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit neque quis quam volutpat, at commodo nibh scelerisque. Fusce elit augue, vulputate sit amet blandit nec, pharetra vitae diam. Nam eget vestibulum ex. Curabitur turpis erat, vehicula et sollicitudin rutrum, varius eu magna. ",
  },
  {
    title: "Sixth slide",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit neque quis quam volutpat, at commodo nibh scelerisque. Fusce elit augue, vulputate sit amet blandit nec, pharetra vitae diam. Nam eget vestibulum ex. Curabitur turpis erat, vehicula et sollicitudin rutrum, varius eu magna. ",
  },
  {
    title: "Seventh slide",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit neque quis quam volutpat, at commodo nibh scelerisque. Fusce elit augue, vulputate sit amet blandit nec, pharetra vitae diam. Nam eget vestibulum ex. Curabitur turpis erat, vehicula et sollicitudin rutrum, varius eu magna. ",
  },
];

/*
 * 1. Hidden loader
 */

// Selectionner la classe .close
const closeBtn = document.querySelector(".close");
// Ajouter un écouteur d'événement sur l'élément .close
// ajouter la classe hidden à l'élément loader
closeBtn.addEventListener("click", () => {
  const parent = closeBtn.parentNode;
  parent.classList.add("hidden");
  setTimeout(() => {
    clickCard(0);
  }, 1000);
});

/*
 * 2. Show Cards
 */

// browse datas into slides array
// create a div element card
// insert into the DOM (slides-container)

/* 

    # Templace card to insert in the DOM :

    <div class="col-md-4">
        <div class="card">
            <img
            src="image-link (***replace with slide data***)"
            class="card-img-top"
            alt="..."
            />
            <div class="card-body">
            <h5 class="card-title">
                Title (***replace with slide data***)
            </h5>
            <p class="card-text">
                Text (***replace with slide data***)
            </p>
            </div>
        </div> 
    </div> 
*/

const carouselContainer = document.querySelector(".carousel-container");
const slidesContainer = document.querySelector("#slides-container");

slides.forEach((slide, index) => {
  const slideElement = document.createElement("div");
  slideElement.classList.add("col-md-4");

  slideElement.innerHTML = `
        <div class="card">
            <img
            src="images/slide${index + 1}.png"
            class="card-img-top"
            alt="..."
            />
            <div class="card-body">
            <h5 class="card-title">${slide.title}</h5>
            <p class="card-text">
                ${slide.text}
            </p>
            </div>
        </div>
    `;

  slidesContainer.appendChild(slideElement);

  /*
   * 3. Click Card
   */

  // Add event listener on card
  // get the image src
  // get the title and text
  // set the image src to the carousel background
  // set the title and text to the carousel title and text

  const card = slideElement.querySelector(".card");

  card.addEventListener("click", () => {
    const srcImage = card.querySelector("img").src;
    carouselContainer.style.backgroundImage = `url(${srcImage})`;
    const cardList = document.querySelectorAll(".card");

    const title = document.querySelector("#title");
    const text = document.querySelector("#text");

    /*
     * 4. Reveal Class
     */
    // add revalTitle and revalText class to the title and text
    // remove revalTitle and revalText class to the title and text after 500ms
    title.innerHTML = card.querySelector(".card-title").innerHTML;
    title.classList.add("revalTitle");
    setTimeout(() => {
      title.classList.remove("revalTitle");
    }, 500);
    text.innerHTML = card.querySelector(".card-text").innerHTML;
    text.classList.add("revalText");
    setTimeout(() => {
      text.classList.remove("revalText");
    }, 500);

    /*
     * 5. Active Card
     */
    // add active class to the card
    cardList.forEach((card) => card.classList.remove("active"));
    card.classList.add("active");
  });
});

function clickCard(index) {
  const cardList = document.querySelectorAll(".card");
  cardList[index].click();
}

/*
 * 6. Scroll Action
 */
const leftAction = document.querySelector(".left-action");
const rightAction = document.querySelector(".right-action");
const cardListElement = document.querySelector(".card-list");

let currentPosition = 0;

leftAction.addEventListener("click", () => {
  if (currentPosition < 0) {
    currentPosition += 200;
    cardListElement.style.transform = `translateX(${currentPosition}px)`;
  }
});
rightAction.addEventListener("click", () => {
  if (currentPosition > -1000) {
    currentPosition -= 200;
    cardListElement.style.transform = `translateX(${currentPosition}px)`;
  }
});
