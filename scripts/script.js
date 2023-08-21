// set copyright year
const copyrightYear = document.getElementById("copyrightYear");

document.addEventListener("DOMContentLoaded", () => {
  const today = new Date();
  copyrightYear.innerHTML = `${today.getFullYear()}`;
});

// Set Categories
let categories = [];

// get unique categories from data
data.forEach((item) => {
  if (!categories.includes(item.category)) {
    categories.push(item.category);
  }
});

categories.unshift("all");

const categoryList = document.getElementById("categoryList");

categories.forEach((item) => {
  const li = document.createElement("li");
  li.className = `category-link ${item === "all" ? "selected" : ""}`;
  li.setAttribute("data-category", item);
  li.innerHTML = `${item.charAt(0).toUpperCase()}${item.slice(1)}${
    item === "all" ? "" : "s"
  }`;
  categoryList.append(li);
});

// Set Locations
let locations = [];

// get unique locations from data
data.forEach((item) => {
  if (!locations.includes(item.location)) {
    locations.push(item.location);
  }
});

const locationList = document.getElementById("locationList");

locations.forEach((item) => {
  const li = document.createElement("li");
  li.className = "location-link";
  li.setAttribute("data-location", item);
  li.innerHTML = item;
  locationList.append(li);
});

// set hamburger menu
const hamburgerMenu = document.getElementById("hamburgerMenu");

// show mobile menu
hamburgerMenu.addEventListener("click", () => {
  const menuList = document.getElementById("menuList");
  menuList.classList.toggle("show");
});

// display cards
const cardsSection = document.getElementById("cardsSection");

function displayCards(filteredData) {
  cardsSection.innerHTML = "";

  filteredData.forEach((item) => {
    let card;

    if (item.category === "hotel") {
      const hotel = new Hotel(item);
      card = hotel.getCard();
    }

    if (item.category === "mall") {
      const mall = new Mall(item);
      card = mall.getCard();
    }

    if (item.category === "salon") {
      const salon = new Salon(item);
      card = salon.getCard();
    }

    if (item.category === "hospital") {
      const hospital = new Hospital(item);
      card = hospital.getCard();
    }

    if (item.category === "school") {
      const school = new School(item);
      card = school.getCard();
    }

    cardsSection.append(card);
  });
}

// Add click event to category links to display correct data
const categoryLinks = document.getElementsByClassName("category-link");
let previousLink = document.querySelector(".selected");
let currentLink;

function styleCurrentLink(link) {
  currentLink = link;
  currentLink.classList.add("selected");
  previousLink.classList.remove("selected");
  previousLink = currentLink;
}

Array.from(categoryLinks).forEach((link) => {
  link.addEventListener("click", () => {
    const category = link.getAttribute("data-category");

    // setting style for current link
    styleCurrentLink(link);

    // filtering data
    let filteredData;
    if (category === "all") {
      filteredData = data;
    } else {
      filteredData = data.filter((item) => item.category === category);
    }
    displayCards(filteredData);
  });
});

// Add click event to location links to display correct data
const locationLinks = document.getElementsByClassName("location-link");

Array.from(locationLinks).forEach((link) => {
  link.addEventListener("click", () => {
    const location = link.getAttribute("data-location");

    // setting style for current link
    styleCurrentLink(link);

    // filtering data
    const filteredData = data.filter((item) => item.location === location);

    displayCards(filteredData);
  });
});

// sort by customer review

const customerRating = document.getElementById("customerRating");

customerRating.addEventListener("click", () => {
  // setting style for current link
  styleCurrentLink(customerRating);

  // filtering data
  const filteredData = [...data].sort(
    (item1, item2) => item2.rating - item1.rating
  );

  displayCards(filteredData);
});

displayCards(data);
