import data from "./data.js"

const productGrid = document.querySelector("#product-grid");
console.log(productGrid)
data.forEach(item => {
    const article = document.createElement('article');
    article.classList.add("product")
    article.innerHTML = `<img src="${item.img}" height="1000" width="1000">
                        <div class="product-info">
                            <h4 id="product-title">${item.title}</h4>
                            <h4>${item.price}</h4>
                            <p>${item.description}</p>
                            <div class="star-rating-product-info">
                                <button></button>
                                <button></button>
                                <button></button>
                                <button></button>
                                <button></button>
                            </div>
                            <p style="color:red;" >Reviews(${ Math.floor( Math.random() * (50 - 10) + 10)})</p>
                        </div>`
    productGrid.appendChild(article)
})