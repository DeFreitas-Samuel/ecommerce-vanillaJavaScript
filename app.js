import data from "./data.js"

const productGrid = document.querySelector("#product-grid");
data.forEach(item => {
    const article = document.createElement('article');
    article.classList.add("product")
    article.innerHTML = `<img src="${item.img}" height="1000" width="1000">
                        <div class="product-info">
                            <h4 id="product-title">${item.title}</h4>
                            <h4>${item.price}</h4>
                            <p>${item.description}</p>
                            <div class="star-rating-product-info rating-0 star0" data-is-rated="false">
                                <button class="1star"></button>
                                <button class="2star"></button>
                                <button class="3star"></button>
                                <button class="4star"></button>
                                <button class="5star"></button>
                            </div>
                            <p style="color:red;">Reviews(${ Math.floor( Math.random() * (50 - 10) + 10)})</p>
                        </div>`
    productGrid.appendChild(article)
})


const starRatingButtons = document.querySelectorAll(".star-rating-product-info button");
const starRating = document.querySelectorAll(".star-rating-product-info");
starRatingButtons.forEach(item => item.addEventListener("mouseover", hoverRatingHandler));
starRating.forEach(item => item.addEventListener("mouseleave", dehoverRatingHandler));
starRatingButtons.forEach(item => item.addEventListener("click", setRating));

// @Desc This function handles the hovering aspect of the 5 star rating component
function hoverRatingHandler(event){
    let currentDiv = event.currentTarget.parentNode;
    
    let starButtonClassName = Array.from(event.currentTarget.classList)[0]
    let currentFixedRating = event.currentTarget.parentNode.classList[2];
    switch (starButtonClassName) {
        case '1star':
            currentDiv.className = ''
            currentDiv.classList.add('rating-1');
            currentDiv.classList.add('star-rating-product-info');
            currentDiv.classList.add(currentFixedRating);
            break;
        case '2star':
            currentDiv.className = ''
            currentDiv.classList.add('rating-2');
            currentDiv.classList.add('star-rating-product-info');
            currentDiv.classList.add(currentFixedRating);
            break;
        case '3star':
            currentDiv.className = ''
            currentDiv.classList.add('rating-3');
            currentDiv.classList.add('star-rating-product-info');
            currentDiv.classList.add(currentFixedRating);
            break;
        case '4star':
            currentDiv.className = ''
            currentDiv.classList.add('rating-4');
            currentDiv.classList.add('star-rating-product-info');
            currentDiv.classList.add(currentFixedRating);
            break;
        case '5star':
            currentDiv.className = ''
            currentDiv.classList.add('rating-5');
            currentDiv.classList.add('star-rating-product-info');
            currentDiv.classList.add(currentFixedRating);
            break;
        default:
            currentDiv.className = ''
            currentDiv.classList.add('rating-0');
            currentDiv.classList.add('star-rating-product-info');
            currentDiv.classList.add(currentFixedRating);
            break;
    }

}

// @Desc This function handles what happen when you dehover the 5 star rating component
function dehoverRatingHandler(event){
    let currentDiv = event.currentTarget;
    let clickedRating = currentDiv.classList[2]

    switch (clickedRating) {
        case 'star1':
            currentDiv.className = ''
            currentDiv.classList.add('rating-1');
            currentDiv.classList.add('star-rating-product-info');
            currentDiv.classList.add('star1');
            break;
        case 'star2':
            currentDiv.className = ''
            currentDiv.classList.add('rating-2');
            currentDiv.classList.add('star-rating-product-info');
            currentDiv.classList.add('star2');
            break;
        case 'star3':
            currentDiv.className = ''
            currentDiv.classList.add('rating-3');
            currentDiv.classList.add('star-rating-product-info');
            currentDiv.classList.add('star3');
            break;
        case 'star4':
            currentDiv.className = ''
            currentDiv.classList.add('rating-4');
            currentDiv.classList.add('star-rating-product-info');
            currentDiv.classList.add('star4');
            break;
        case 'star5':
            currentDiv.className = ''
            currentDiv.classList.add('rating-5');
            currentDiv.classList.add('star-rating-product-info');
            currentDiv.classList.add('star5');
            break;
        default:
            currentDiv.className = ''
            currentDiv.classList.add('rating-0');
            currentDiv.classList.add('star-rating-product-info');
            currentDiv.classList.add('star0');
            break;
    }
}

// @Desc This function sets a fixed rating once the user clicks one of the five stars of the product
function setRating(event){
    let currentDiv = event.currentTarget.parentNode;
    let starButtonClassName = Array.from(event.currentTarget.classList)[0];
    
  
    switch (starButtonClassName) {
        case '1star':
            currentDiv.className = ''
            currentDiv.classList.add('rating-1');
            currentDiv.classList.add('star-rating-product-info');
            currentDiv.classList.add('star1');
            if(currentDiv.dataset.isRated !== "true"){
                increaseRating(event);
            }
            currentDiv.dataset.isRated = "true";
            break;
        case '2star':
            currentDiv.className = ''
            currentDiv.classList.add('rating-2');
            currentDiv.classList.add('star-rating-product-info');
            currentDiv.classList.add('star2');
            if(currentDiv.dataset.isRated !== "true"){
                increaseRating(event);
            }
            currentDiv.dataset.isRated = "true";
            break;
        case '3star':
            currentDiv.className = ''
            currentDiv.classList.add('rating-3');
            currentDiv.classList.add('star-rating-product-info');
            currentDiv.classList.add('star3');
            if(currentDiv.dataset.isRated !== "true"){
                increaseRating(event);
            }
            currentDiv.dataset.isRated = "true";
            break;
        case '4star':
            currentDiv.className = ''
            currentDiv.classList.add('rating-4');
            currentDiv.classList.add('star-rating-product-info');
            currentDiv.classList.add('star4');
            if(currentDiv.dataset.isRated !== "true"){
                increaseRating(event);
            }
            currentDiv.dataset.isRated = "true";
            break;
        case '5star':
            currentDiv.className = ''
            currentDiv.classList.add('rating-5');
            currentDiv.classList.add('star-rating-product-info');
            currentDiv.classList.add('star5');
            if(currentDiv.dataset.isRated !== "true"){
                increaseRating(event);
            }
            currentDiv.dataset.isRated = "true";
            break;

    }
}


// @Desc This function increases the number of ratings provided
function increaseRating(event){
    let ratingText = event.currentTarget.parentNode.parentNode.querySelector("p[style]");
    let ratingNumber = parseInt(ratingText.innerHTML.match(/\d+/)[0])
    ratingNumber++;
    ratingText.innerHTML = `Reviews(${ratingNumber})`;
}