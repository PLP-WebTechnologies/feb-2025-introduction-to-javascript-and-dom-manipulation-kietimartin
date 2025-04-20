// changing title style
const title = document.getElementById('title');
title.style.backgroundColor = "grey";
title.style.color = "white";
title.style.textAlign = "center";


// adding a new paragraph to the div container
const container = document.getElementById("container");
container.innerHTML = "<p>Added content.</p>";


// ADDING A NEW LIST ITEM EACH TIME THE BUTTON IS CLICKED
const list = document.getElementById("list");
const addbtn = document.getElementById("add");
// function for adding items
addbtn.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = "New list item";
    list.appendChild(newItem);
})

// photo changer code
const images = [
    "https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/270557/pexels-photo-270557.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&w=600"
];

let currentIndex = 0;
const photoElement = document.getElementById('photo');

// function to change the photo
function changePhoto() {
    currentIndex = (currentIndex + 1) % images.length;
    photoElement.src = images[currentIndex];
}

setInterval(changePhoto, 3000);

// changing footer style
const footer = document.getElementById("footer");
footer.style.textAlign = "center";
footer.style.backgroundColor = "grey";
footer.style.color = "white";``