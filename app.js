import data from "./data.js"

const productGrid = document.querySelector("#product-grid");
console.log(productGrid)
data.forEach(item => {
    const article = document.createElement('article');
    article.classList.add("product")
    article.innerHTML = `<img src="${item.img}" height="1000" width="1000">
                        <h4>${item.title}</h4>
                        <p>${item.price}</p>
                        <p>${item.description}</p>`
    productGrid.appendChild(article)
})