let count =0;
function increaseCount(){
    count++;
    displayCount();
    checkCountValue();
}

function checkCountValue() {
    if (count % 10 == 0) {
      alert(`Your post gained ${count} followers! Congratulations!`);
    }
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count; // Display the count in the HTML
}