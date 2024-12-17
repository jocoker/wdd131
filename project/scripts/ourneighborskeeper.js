let reviewCount = parseInt(localStorage.getItem('reviewCount') || '0', 10);
localStorage.setItem('reviewCount', reviewCount);

document.querySelector('form').onsubmit = function (event) {
    event.preventDefault(); // Optional: Remove if default behavior is desired
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
    alert(`Thank you for your interest. We will reach out to you soon. Total reviews: ${reviewCount}`);
    // Redirect to review.html manually
    window.location.href = "ourneighborskeeper.html";
};


const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

const lastModified = document.getElementById("lastModif")
lastModified.textContent = document.lastModified;