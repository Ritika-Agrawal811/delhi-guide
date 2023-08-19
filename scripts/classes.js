class Hotel {
  constructor({ name, location, star, rating, price, category, image }) {
    this.name = name;
    this.location = location;
    this.star = star;
    this.rating = rating;
    this.price = price;
    this.category = category;
    this.image = image;
  }

  getCard() {
    const article = document.createElement("article");
    article.className = "hotel-card card";

    article.innerHTML = `
    <figure>
      <img
        src="images/${this.image}"
        alt="${this.name}"
      />
    </figure>
    <div class="card-content">
      <div class="flex-between">
        <h3>${this.name}</h3>
        <p class="price">₹${this.price}</p>
      </div>
      <div class="flex-gap">
        <p class="rating">
            ${this.rating}
            <span class="star"></span>
        </p>
        <p class="location">
            <i class="fa-solid fa-location-dot"></i>${this.location}
        </p>
      </div>
      <div class="details">
        <span><i class="fa-solid fa-bed"></i> ${this.star}-star hotel</span>
        <span><i class="fa-solid fa-mug-saucer"></i> Breakfast</span>
        <span><i class="fa-solid fa-wifi"></i> Free Wi-fi</span>
        <span><i class="fa-solid fa-utensils"></i> Restaurant</span>
        <span
          ><i class="fa-regular fa-snowflake"></i> Air
          conditioning</span
        >
        <span><i class="fa-solid fa-dumbbell"></i> Fitness Center</span>
      </div>
    </div>
    `;

    return article;
  }
}

class Mall {
  constructor({
    name,
    location,
    rating,
    openingTime,
    closingTime,
    category,
    image,
  }) {
    this.name = name;
    this.location = location;
    this.rating = rating;
    this.openingTime = openingTime;
    this.closingTime = closingTime;
    this.category = category;
    this.image = image;
  }

  getCard() {
    const article = document.createElement("article");
    article.className = "mall-card card";

    article.innerHTML = `
    <figure>
      <img
        src="images/${this.image}"
        alt="${this.name}"
      />
    </figure>
    <div class="card-content">
        <h3>${this.name}</h3>
        <div class="flex-gap">
        <p class="rating">
            ${this.rating}
            <span class="star"></span>
        </p>
        <p class="location">
            <i class="fa-solid fa-location-dot"></i> ${this.location}
        </p>
        </div>
        <div class="details">
        <p><i class="fa-solid fa-clock"></i> ${this.openingTime} A.M - ${this.closingTime} P.M</p>
        <p>
            In-store shopping &#9679; Dine-in &#9679; Cinema &#9679; Food
            Court
        </p>
        </div>
    </div>
    `;

    return article;
  }
}

class Salon {
  constructor({
    name,
    location,
    rating,
    openingTime,
    closingTime,
    years,
    category,
    image,
  }) {
    this.name = name;
    this.location = location;
    this.rating = rating;
    this.openingTime = openingTime;
    this.closingTime = closingTime;
    this.years = years;
    this.category = category;
    this.image = image;
  }

  getCard() {
    const article = document.createElement("article");
    article.className = "salon-card card";

    article.innerHTML = `
    <figure>
    <img
      src="images/${this.image}"
      alt="${this.name}"
    />
    </figure>
    <div class="card-content">
        <h3>${this.name}</h3>
        <div class="flex-gap">
        <p class="rating">
            ${this.rating}
            <span class="star"></span>
        </p>
        <p class="location">
            <i class="fa-solid fa-location-dot"></i> ${this.location}
        </p>
        </div>
        <div class="details">
        <p>
            <i class="fa-solid fa-calendar"></i> ${this.years}+ years in business
        </p>
        <p><i class="fa-solid fa-clock"></i> ${this.openingTime} A.M - ${this.closingTime} P.M</p>
        <p>
            <span>Services:</span> Tanning &#9679; Skin care &#9679;
            Shaving &#9679; Bridal services &#9679; Facials &#9679;
            Haircut &#9679; Waxing
        </p>
        </div>
    </div>
    `;

    return article;
  }
}

class Hospital {
  constructor({ name, location, rating, founded, category, image }) {
    this.name = name;
    this.location = location;
    this.rating = rating;
    this.founded = founded;
    this.category = category;
    this.image = image;
  }

  getCard() {
    const article = document.createElement("article");
    article.className = "salon-card card";

    article.innerHTML = `
    <figure>
    <img
      src="images/${this.image}"
      alt="${this.name}"
    />
    </figure>
    <div class="card-content">
        <h3>${this.name}</h3>
        <div class="flex-gap">
        <p class="rating">
            ${this.rating}
            <span class="star"></span>
        </p>
        <p class="location">
            <i class="fa-solid fa-location-dot"></i> ${this.location}
        </p>
        </div>
        <div class="details">
        <p><i class="fa-solid fa-clock"></i> Open 24 Hours</p>
        <p><i class="fa-solid fa-calendar"></i> Founded: ${this.founded}</p>
        <p>
            500+ Bedded &#9679; 24 Hours Ambulance Services &#9679; X-ray
            Services &#9679; Blood Group Test &#9679; ENT Checkup
            (General)
        </p>
        </div>
    </div>
    `;

    return article;
  }
}

class School {
  constructor({
    name,
    location,
    rating,
    principal,
    founded,
    faculty,
    category,
    image,
  }) {
    this.name = name;
    this.location = location;
    this.rating = rating;
    this.principal = principal;
    this.faculty = faculty;
    this.founded = founded;
    this.category = category;
    this.image = image;
  }

  getCard() {
    const article = document.createElement("article");
    article.className = "salon-card card";

    article.innerHTML = `
    <figure>
    <img
      src="images/${this.image}"
      alt="${this.name}"
    />
    </figure>
    <div class="card-content">
        <h3>${this.name}</h3>
        <div class="flex-gap">
        <p class="rating">
            ${this.rating}
            <span class="star"></span>
        </p>
        <p class="location">
            <i class="fa-solid fa-location-dot"></i> ${this.location}
        </p>
        </div>
        <div class="details">
        <p>
            <i class="fa-solid fa-school"></i> Principal: ${this.principal}
        </p>
        <p><i class="fa-solid fa-user-group"></i> Faculty: ${this.faculty}</p>
        <p><i class="fa-solid fa-calendar"></i> Founded: ${this.founded}</p>

        <p>
            Friendly & Supportive Staff &#9679; Clean Washrooms &#9679;
            English Medium
        </p>
        </div>
   </div>
    `;

    return article;
  }
}
