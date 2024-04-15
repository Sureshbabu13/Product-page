
const colorSelector = document.getElementById('color-selector');
const tshirtImage = document.getElementById('tshirt-image');
const addToCartButton = document.getElementById('add-to-cart');


const colorToImage = {
    red: 'red_tshirt.jpg',
    blue: 'blue_tshirt.jpg',
    green: 'green_tshirt.jpg'
};


colorSelector.addEventListener('change', () => {
    const selectedColor = colorSelector.value;
    tshirtImage.src = colorToImage[selectedColor];
});


addToCartButton.addEventListener('click', () => {
   
    console.log('Product added to cart successfully!');
});
