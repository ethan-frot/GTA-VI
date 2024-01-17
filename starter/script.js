const slides = [
    {
        title: 'Vice City',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit neque quis quam volutpat, at commodo nibh scelerisque. Fusce elit augue, vulputate sit amet blandit nec, pharetra vitae diam. Nam eget vestibulum ex. Curabitur turpis erat, vehicula et sollicitudin rutrum, varius eu magna. ',
    },
    {
        title: 'Second slide',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit neque quis quam volutpat, at commodo nibh scelerisque. Fusce elit augue, vulputate sit amet blandit nec, pharetra vitae diam. Nam eget vestibulum ex. Curabitur turpis erat, vehicula et sollicitudin rutrum, varius eu magna. ',
    },
    {
        title: 'Third slide',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit neque quis quam volutpat, at commodo nibh scelerisque. Fusce elit augue, vulputate sit amet blandit nec, pharetra vitae diam. Nam eget vestibulum ex. Curabitur turpis erat, vehicula et sollicitudin rutrum, varius eu magna. ',
    },
    {
        title: 'Fourth slide',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit neque quis quam volutpat, at commodo nibh scelerisque. Fusce elit augue, vulputate sit amet blandit nec, pharetra vitae diam. Nam eget vestibulum ex. Curabitur turpis erat, vehicula et sollicitudin rutrum, varius eu magna. ',
    },
    {
        title: 'Fifth slide',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit neque quis quam volutpat, at commodo nibh scelerisque. Fusce elit augue, vulputate sit amet blandit nec, pharetra vitae diam. Nam eget vestibulum ex. Curabitur turpis erat, vehicula et sollicitudin rutrum, varius eu magna. ',
    },
    {
        title: 'Sixth slide',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit neque quis quam volutpat, at commodo nibh scelerisque. Fusce elit augue, vulputate sit amet blandit nec, pharetra vitae diam. Nam eget vestibulum ex. Curabitur turpis erat, vehicula et sollicitudin rutrum, varius eu magna. ',
    },
    {
        title: 'Seventh slide',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit neque quis quam volutpat, at commodo nibh scelerisque. Fusce elit augue, vulputate sit amet blandit nec, pharetra vitae diam. Nam eget vestibulum ex. Curabitur turpis erat, vehicula et sollicitudin rutrum, varius eu magna. ',
    },
]


/*
 * 1. Hidden loader
 */

// Selectionner la classe .close
const btnClose = document.querySelector('.close');
console.log("Select btnClose : ", btnClose);
// Ajouter un écouteur d'événement sur l'élément .close
btnClose.addEventListener('click' , function(){
    // const loaderParent = btnClose.closest('#loader')
    // const loaderParent = btnClose.parentElement
    const loaderParent = document.querySelector('#loader');
    console.log("loaderParent : ", loaderParent);
    
    // loaderParent.style.display = 'none';
    // ajouter la classe hidden à l'élément loader
    loaderParent.classList.add('hidden');
})

/*
 * 2. Show Cards
 */

// browse datas into slides array
    // create a div element card
    // insert into the DOM (slides-container)

const slidesContainer = document.querySelector('#slides-container');

slides.forEach(function(slideData, index){
    console.log("slideData : ", slideData);
    console.log("index : ", index);

    const divCol = document.createElement('div');
    divCol.classList.add('col-md-4');

    divCol.innerHTML = `
        <div class="card">
            <img
                src="images/slide${index + 1}.png"
                class="card-img-top"
                alt="..."
            />
            <div class="card-body">
                <h5 class="card-title">
                    ${slideData.title}
                </h5>
                <p class="card-text">
                    ${slideData.text}
                </p>
            </div>
        </div> 
    `
    console.log("divCol : ", divCol);
    slidesContainer.appendChild(divCol);
    
    const card = divCol.querySelector('.card');
    card.addEventListener('click', function(){
        showSlide(index);
    })
})

function showSlide(index){
    const carouselContainer = document.querySelector('.carousel-container');
    carouselContainer.style.backgroundImage = `url(images/slide${index + 1}.png)`;
    
    revalElement('title', index);
    revalElement('text', index);
    
    const cardList = carouselContainer.querySelectorAll('.card')
    cardList.forEach(function(card){
        card.classList.remove('active');
    })
    const activeCardIntoDOM = cardList[index]
    activeCardIntoDOM.classList.add('active');
}

function revalElement(elementTag, index){
    const elementSlider = document.querySelector(`#${elementTag}`);
    elementSlider.textContent = slides[index][elementTag];

    const capitalizedElementTag = elementTag.charAt(0).toUpperCase() + elementTag.slice(1);
    console.log("capitalizedElementTag : ", capitalizedElementTag);
    const className = `reval${capitalizedElementTag}`

    elementSlider.classList.add(className);

    setTimeout(function(){
        elementSlider.classList.remove(className);
    }, 600);
}

showSlide(0);

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

/*
 * 3. Click Card
 */

// Add event listener on card
    // get the image src
    // get the title and text
    // set the image src to the carousel background
    // set the title and text to the carousel title and text


        /*
        * 4. Reveal Class
        */
        // add revalTitle and revalText class to the title and text
        // remove revalTitle and revalText class to the title and text after 500ms

        /*
        * 5. Active Card
        */
        // add active class to the card


/*
 * 6. Scroll Action
 */
const leftAction = document.querySelector('.left-action');
const rightAction = document.querySelector('.right-action');
const cardList = document.querySelector('.card-list');
let currentPosition = 0;

leftAction.addEventListener('click', function(){
    console.log("leftAction click");
    if(currentPosition > -1200) currentPosition -= 300
    
    console.log("currentPosition : ", currentPosition);
    // translate element with css property transform: translate(-100px);
    cardList.style.transform = `translate(${currentPosition}px)`;
})