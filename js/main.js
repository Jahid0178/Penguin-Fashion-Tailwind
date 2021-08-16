// heading element
const heading = document.getElementsByTagName('h1');
console.log(heading);

// add click handler in heading buy now button and change header text
const headingBuyNowBtn = document.getElementById('heading-btn');
headingBuyNowBtn.addEventListener('click', function () {
    const headingChange = document.getElementById('heading-change');
    const headingChangeText = headingChange.innerText;
    headingChange.innerText = 'I AM PENGUIN';
    console.log(headingChangeText);
});