const shop = []; 

function addToShop(productName, productDescription, productPrice) {  
    shop.push({ name: productName, description: productDescription, price: productPrice });  
    displayCart(); 
}  

function displayCart() {  
    const cartContainer = document.getElementsByClassName("carts")[0];  
    cartContainer.innerHTML = ""; 

    let totalAmount = 0;

 
    shop.forEach((item, index) => {  
        const cartItem = document.createElement("div");  
        cartItem.className = "cart-item";  
        cartItem.innerHTML = `  
            ${item.name} - ${item.price} تومان  
            <button class="remove-btn" onclick="removeFromCart(${index})">حذف</button>  
        `;  
        cartContainer.appendChild(cartItem);  
        totalAmount += item.price; 
    });  


    const totalSummary = document.createElement("div");  
    totalSummary.className = "cart-summary";  
    totalSummary.innerText = `مجموع هزینه: ${totalAmount} تومان`;  
    cartContainer.appendChild(totalSummary);  
}  

function removeFromCart(index) {  
    shop.splice(index, 1);
    displayCart(); 
}  

function searchProducts() {  
    const searchTerm = document.getElementById('search-bar').value.toLowerCase();  
    const productDivs = document.getElementsByClassName('product');  

    for (let i = 0; i < productDivs.length; i++) {  
        const productName = productDivs[i].getElementsByTagName('h4')[0].innerText.toLowerCase();  
        if (productName.includes(searchTerm)) {  
            productDivs[i].style.display = 'block'; 
        } else {  
            productDivs[i].style.display = 'none';  
        }  
    }  
}
