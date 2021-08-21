// Memory Input 
const memory8GB = document.getElementById('8GB-memory');
const memory16GB = document.getElementById('16GB-memory');
const extraMemoryCost = document.getElementById('extra-memory-cost');

// Storage Input
const ssd256GB = document.getElementById('256GB-SSD-storage');
const ssd512GB = document.getElementById('512GB-SSD-storage');
const ssd1TB = document.getElementById('1TB-SSD-storage');
const extraStorageCost = document.getElementById('extra-storage-cost');

// Delivery Input
const freeDelivery = document.getElementById('free-delivery');
const paidDelivery = document.getElementById('paid-delivery');
const extraDeliveryCost = document.getElementById('delivery-charge');

// Total update
const bestPrice = document.getElementById('best-price');
const totalPrice = document.getElementById('total-price');
function updateTotal() {
    const memoryCost = parseInt(extraMemoryCost.innerText);
    const storageCost = parseInt(extraStorageCost.innerText)
    const deliveryCost = parseInt(extraDeliveryCost.innerText);
    const total = parseInt(bestPrice.innerText);
    const newTotal = memoryCost + storageCost + deliveryCost + total;
    totalPrice.innerText = newTotal;
    promoTotal.innerText = totalPrice.innerText;
}
memory8GB.addEventListener('click', function () {
    extraMemoryCost.innerText = "0"
    updateTotal()
});
memory16GB.addEventListener('click', function () {
    extraMemoryCost.innerText = "180"
    updateTotal()
});

// Storage Cost
ssd256GB.addEventListener('click', function () {
    extraStorageCost.innerText = "0"
    updateTotal()
});
ssd512GB.addEventListener('click', function () {
    extraStorageCost.innerText = "100"
    updateTotal()
});
ssd1TB.addEventListener('click', function () {
    extraStorageCost.innerText = "180"
    updateTotal()
});

// Delivery Cost
freeDelivery.addEventListener('click', function () {
    extraDeliveryCost.innerText = "0"
    updateTotal()
})
paidDelivery.addEventListener('click', function () {
    extraDeliveryCost.innerText = "20"
    updateTotal()
});

// Promo Section 

const promoInputField = document.getElementById('promo-input');
const promoButton = document.getElementById('promo-button');
const promoTotal = document.getElementById('promo-discount-total');

function addPromoCode() {
    const promo = promoInputField.value;
    if (promo == 'stevekaku') {
        const promoTotalPrice = totalPrice.innerText;
        const tax = parseInt(promoTotalPrice) * 0.2;
        promoTotal.innerText = promoTotalPrice - tax;
    }
    else {
        alert('please enter valid promo code')
    }
    promoInputField.value = "";
}
// Promo Button

promoButton.addEventListener('click', function () {
    addPromoCode()

});


