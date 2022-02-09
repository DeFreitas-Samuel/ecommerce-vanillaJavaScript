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
                            <div class="star-rating-product-info rating-0">
                                <button class="1star"></button>
                                <button class="2star"></button>
                                <button class="3star"></button>
                                <button class="4star"></button>
                                <button class="5star"></button>
                            </div>
                            <p style="color:red;" >Reviews(${ Math.floor( Math.random() * (50 - 10) + 10)})</p>
                        </div>`
    productGrid.appendChild(article)
})

const starRatingButtons = document.querySelectorAll(".star-rating-product-info button");
const starRating = document.querySelectorAll(".star-rating-product-info");
starRatingButtons.forEach(item => item.addEventListener("mouseover", changeRating));
starRating.forEach(item => item.addEventListener("mouseleave", restoreRating));

function changeRating(event){
    let currentDiv = event.currentTarget.parentNode;
    let starClassName = Array.from(event.currentTarget.classList)[0]
    switch (starClassName) {
        case '1star':
            currentDiv.className = ''
            currentDiv.classList.add('rating-1');
            currentDiv.classList.add('star-rating-product-info');
            break;
        case '2star':
            currentDiv.className = ''
            currentDiv.classList.add('rating-2');
            currentDiv.classList.add('star-rating-product-info');
            break;
        case '3star':
            currentDiv.className = ''
            currentDiv.classList.add('rating-3');
            currentDiv.classList.add('star-rating-product-info');
            break;
        case '4star':
            currentDiv.className = ''
            currentDiv.classList.add('rating-4');
            currentDiv.classList.add('star-rating-product-info');
            break;
        case '5star':
            currentDiv.className = ''
            currentDiv.classList.add('rating-5');
            currentDiv.classList.add('star-rating-product-info');
            break;
        default:
            currentDiv.className = ''
            currentDiv.classList.add('rating-0');
            currentDiv.classList.add('star-rating-product-info');
            break;
    }

}

function restoreRating(event){
    let currentDiv = event.currentTarget;
    currentDiv.className = ''
    currentDiv.classList.add('rating-0');
    currentDiv.classList.add('star-rating-product-info');
}