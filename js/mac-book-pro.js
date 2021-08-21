//memory input 
document.getElementById('memory-input1').addEventListener('click', function () {
    const memoryInput = document.getElementById('extra-memory-cost');
    memoryInput.innerText = 0;

});
document.getElementById('memory-input2').addEventListener('click', function () {
    const memoryInput = document.getElementById('extra-memory-cost');
    memoryInput.innerText = 180;

});

// Storage Input
document.getElementById('storage-input1').addEventListener('click', function () {
    const memoryInput = document.getElementById('extra-storage-cost');
    memoryInput.innerText = 0;

});
document.getElementById('storage-input2').addEventListener('click', function () {
    const memoryInput = document.getElementById('extra-storage-cost');
    memoryInput.innerText = 100;

});
document.getElementById('storage-input3').addEventListener('click', function () {
    const memoryInput = document.getElementById('extra-storage-cost');
    memoryInput.innerText = 180;
});

// delivery option
document.getElementById('delivery-input').addEventListener('click', function () {
    const memoryInput = document.getElementById('delivery-charge');
    memoryInput.innerText = 0;
});
document.getElementById('delivery-charge-input').addEventListener('click', function () {
    const memoryInput = document.getElementById('delivery-charge');
    memoryInput.innerText = 20;
});
