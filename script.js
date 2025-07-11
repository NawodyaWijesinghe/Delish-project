//HOME


const dots = document.querySelectorAll('.dot');
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    dots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
   
  });
});


const categoryButtons = document.querySelectorAll('.category-filters button');
categoryButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    categoryButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    console.log(`Filtering for: ${btn.textContent}`);
  });
});


const gallery = document.querySelector('.food-gallery-scroll');
const prevBtn = document.querySelector('.gallery-nav-arrows button[aria-label="Previous Image"]');
const nextBtn = document.querySelector('.gallery-nav-arrows button[aria-label="Next Image"]');

prevBtn.addEventListener('click', () => {
  gallery.scrollBy({
    left: -300,
    behavior: 'smooth'
  });
});
nextBtn.addEventListener('click', () => {
  gallery.scrollBy({
    left: 300,
    behavior: 'smooth'
  });
});


const reservationForm = document.querySelector('.reservation-form');
reservationForm.addEventListener('submit', e => {
  e.preventDefault();
  alert('Reservation submitted! We will contact you soon.');
});








//ABOUT US



document.querySelectorAll('.book-table, .book-table-button').forEach(button => {
  button.addEventListener('click', () => {
    alert("Redirecting to reservation section...");
    
  });
});


const eyeBox = document.querySelector('.red-box');
if (eyeBox) {
  eyeBox.addEventListener('click', () => {
    alert("Viewing full gallery feature coming soon!");
  });
}


const categoryDots = document.querySelectorAll('.category-dot');
categoryDots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    categoryDots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
    
  });
});


document.querySelector('.newsletter-form')?.addEventListener('submit', e => {
  e.preventDefault();
  const emailInput = e.target.querySelector('input[type="email"]');
  if (emailInput.value.trim() === '') {
    alert("Please enter a valid email address.");
  } else {
    alert(`Subscribed successfully with ${emailInput.value}`);
    emailInput.value = '';
  }
});






//CONTACT



document.querySelector('form')?.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('yourName').value.trim();
  const email = document.getElementById('emailAddress').value.trim();
  const subject = document.getElementById('selectSubject').value;
  const message = document.getElementById('yourMessage').value.trim();

  if (!name || !email || !subject || !message) {
    alert("❗ Please fill out all fields before submitting.");
    return;
  }

  
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert("📧 Please enter a valid email address.");
    return;
  }

  alert(`✅ Thank you, ${name}. Your message has been received!`);
  this.reset();
});


document.querySelectorAll('.book-btn, .book-table-button').forEach(button => {
  button.addEventListener('click', () => {
    alert("📅 Redirecting to reservation page...");
   
    
  });
});


document.querySelector('.newsletter-form')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const email = this.querySelector('input[type="email"]').value.trim();

  if (!email) {
    alert("✉️ Please enter your email address.");
    return;
  }

  alert(`📰 Subscribed successfully with ${email}`);
  this.reset();
});





//TEAM


const modal = document.getElementById("teamModal");
const modalImage = document.getElementById("modalImage");
const modalName = document.getElementById("modalName");
const modalRole = document.getElementById("modalRole");
const modalBio = document.getElementById("modalBio");
const closeBtn = document.querySelector(".close-button");

document.querySelectorAll(".team-member").forEach(member => {
  member.addEventListener("click", () => {
    const imgSrc = member.querySelector("img").src;
    const name = member.dataset.name;
    const role = member.dataset.role;
    const bio = member.dataset.bio;

    modalImage.src = imgSrc;
    modalName.textContent = name;
    modalRole.textContent = role;
    modalBio.textContent = bio;

    modal.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});



document.querySelectorAll('.book-btn, .book-table-button').forEach(button => {
  button.addEventListener('click', () => {
    alert("📅 Redirecting to reservation page...");
    
  });
});



document.querySelector(".newsletter-form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = this.querySelector('input[type="email"]').value.trim();

  if (!email) {
    alert("✉️ Please enter your email address.");
    return;
  }

  alert(`✅ Subscribed successfully with: ${email}`);
  this.reset();
});







//TEAM DETAILS


document.querySelector(".contact-me-button")?.addEventListener("click", () => {
  alert("📩 Thank you for your interest! We will contact you shortly.");
  
});


document.querySelectorAll('.book-btn, .book-table-button').forEach(button => {
  button.addEventListener('click', () => {
    alert("📅 Redirecting to the reservation page...");
  
  });
});


document.querySelector(".newsletter-form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const emailInput = this.querySelector('input[type="email"]');
  const email = emailInput.value.trim();

  if (!email) {
    alert("⚠️ Please enter a valid email address.");
    return;
  }

  alert(`✅ Subscribed successfully with: ${email}`);
  emailInput.value = "";
});




//RESAVATION


document.querySelector('.reservation-form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const numGuests = document.getElementById('numGuests').value.trim();
    const selectDate = document.getElementById('selectDate').value.trim();
    const selectTime = document.getElementById('selectTime').value.trim();
    const yourName = document.getElementById('yourName').value.trim();
    const email = document.getElementById('emailAddress').value.trim();
    const phone = document.getElementById('phoneNumber').value.trim();
    const message = document.getElementById('specialMessage').value.trim();

    if (!numGuests || !selectDate || !selectTime || !yourName || !email || !phone) {
        alert("⚠️ Please fill in all required fields.");
        return;
    }

    alert(`✅ Table booked successfully for ${yourName} on ${selectDate} at ${selectTime}.`);
    
    this.reset(); 
});


document.querySelectorAll('.book-btn, .book-table-button').forEach(btn => {
    btn.addEventListener('click', () => {
        alert("📅 Redirecting to reservation page...");
       
    });
});


document.querySelector('.newsletter-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const emailInput = this.querySelector('input[type="email"]');
    const email = emailInput.value.trim();

    if (!email) {
        alert("⚠️ Please enter your email address.");
        return;
    }

    alert(`📬 Subscribed successfully with: ${email}`);
    emailInput.value = "";
});





//BLOG


document.querySelector('.search-widget form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const keyword = this.querySelector('input[type="text"]').value.trim();
    if (keyword) {
        alert(`🔎 Searching for: "${keyword}"`);
    } else {
        alert("⚠️ Please enter a search keyword.");
    }
});


document.querySelectorAll('.pagination a')?.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const page = this.textContent.trim();
        alert(`📄 Switched to page ${page}`);
       
    });
});


document.querySelectorAll('.popular-tags .tag-button')?.forEach(tag => {
    tag.addEventListener('click', function (e) {
        e.preventDefault();
        alert(`🏷️ Filtered by tag: ${this.textContent.trim()}`);
    });
});


document.querySelectorAll('.book-btn, .book-table-button')?.forEach(btn => {
    btn.addEventListener('click', () => {
        alert("📅 Redirecting to reservation page...");
       
    });
});


document.querySelector('.newsletter-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value.trim();
    if (!email) {
        alert("⚠️ Please enter a valid email address.");
        return;
    }
    alert(`✅ Subscribed successfully with ${email}`);
    this.reset();
});


document.querySelectorAll('.read-more')?.forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        alert("📖 Read More clicked. Redirecting to full blog post...");
       
    });
});







//BLOG DETAILS


document.querySelector('.search-widget form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const keyword = this.querySelector('input[type="text"]').value.trim();
    if (keyword) {
        alert(`🔍 Searching for: "${keyword}"`);
    } else {
        alert("⚠️ Please enter a keyword.");
    }
});


document.querySelectorAll('.book-btn, .book-table-button')?.forEach(button => {
    button.addEventListener('click', () => {
        alert("📅 Booking page opening...");
        
    });
});


document.querySelector('.newsletter-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value.trim();
    if (!email) {
        alert("⚠️ Enter a valid email address.");
        return;
    }
    alert(`✅ Thank you! Subscribed with: ${email}`);
    this.reset();
});


document.querySelectorAll('.popular-tags .tag-button')?.forEach(tag => {
    tag.addEventListener('click', function (e) {
        e.preventDefault();
        alert(`🏷️ Filtering posts by: ${this.textContent}`);
    });
});


document.querySelectorAll('.reply-btn')?.forEach(replyBtn => {
    replyBtn.addEventListener('click', function (e) {
        e.preventDefault();
        alert("💬 Reply function coming soon!");
    });
});


document.querySelector('.reply-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const message = this.querySelector('textarea').value.trim();

    if (!name || !email || !message) {
        alert("⚠️ Please fill out all fields.");
        return;
    }

    alert(`✅ Thank you, ${name}! Your comment has been submitted.`);
    this.reset();
});


document.querySelectorAll('.tags-list a')?.forEach(tag => {
    tag.addEventListener('click', function (e) {
        e.preventDefault();
        alert(`🔖 You clicked tag: ${this.textContent}`);
    });
});





//GALARY


document.querySelectorAll('.book-btn, .book-table-button')?.forEach(button => {
    button.addEventListener('click', () => {
        alert("📅 Redirecting to table reservation...");
        // Optional: window.location.href = "reservation.html";
    });
});


document.querySelector('.newsletter-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value.trim();
    if (!email) {
        alert("⚠️ Please enter your email address.");
        return;
    }
    alert(`✅ Subscribed with: ${email}`);
    this.reset();
});


document.querySelectorAll('.food-gallery-item img')?.forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
        const modal = document.createElement('div');
        modal.style.position = 'fixed';
        modal.style.top = 0;
        modal.style.left = 0;
        modal.style.width = '100vw';
        modal.style.height = '100vh';
        modal.style.backgroundColor = 'rgba(0,0,0,0.8)';
        modal.style.display = 'flex';
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';
        modal.style.zIndex = 1000;

        const modalImg = document.createElement('img');
        modalImg.src = img.src;
        modalImg.style.maxWidth = '90%';
        modalImg.style.maxHeight = '90%';
        modalImg.style.border = '5px solid white';
        modalImg.style.borderRadius = '10px';

        modal.appendChild(modalImg);
        document.body.appendChild(modal);

        modal.addEventListener('click', () => {
            document.body.removeChild(modal);
        });
    });
});


document.querySelectorAll('.food-gallery-item.placeholder')?.forEach(placeholder => {
    placeholder.style.cursor = 'pointer';
    placeholder.addEventListener('click', () => {
        alert("🍴 This is a featured gallery section.");
    });
});





//MENU


document.querySelectorAll('.book-btn, .book-table-button').forEach(button => {
    button.addEventListener('click', () => {
        alert("🍽️ Redirecting to table reservation...");
      
    });
});


document.querySelector('.top-booking-form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const guests = document.getElementById('topNumGuests')?.value;
    const date = document.getElementById('topSelectDate')?.value;
    const time = document.getElementById('topSelectTime')?.value;

    if (!guests || !date || !time) {
        alert("⚠️ Please fill out all booking fields.");
        return;
    }

    alert(`✅ Booking submitted:\n👥 Guests: ${guests}\n📅 Date: ${date}\n⏰ Time: ${time}`);
    this.reset();
});


document.querySelector('.newsletter-form')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = this.querySelector('input[type="email"]').value.trim();
    if (!email) {
        alert("⚠️ Please enter your email address.");
        return;
    }

    alert(`✅ Subscribed with: ${email}`);
    this.reset();
});


document.querySelectorAll('.read-more-btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        alert("ℹ️ Read more clicked - coming soon!");
        
    });
});





//SHOP DETAILS


const decreaseBtn = document.getElementById('decrease-quantity');
const increaseBtn = document.getElementById('increase-quantity');
const quantityInput = document.getElementById('product-quantity');

decreaseBtn.addEventListener('click', () => {
  let currentVal = parseInt(quantityInput.value);
  if (currentVal > 1) {
    quantityInput.value = currentVal - 1;
  }
});

increaseBtn.addEventListener('click', () => {
  let currentVal = parseInt(quantityInput.value);
  quantityInput.value = currentVal + 1;
});


document.querySelector('.add-to-cart-btn').addEventListener('click', () => {
  const qty = quantityInput.value;
  alert(`Added ${qty} item(s) of Grilled Lemon Herb Chicken to your cart! 🛒`);
});


const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = {
  description: document.getElementById('description-content'),
  'additional-info': document.getElementById('additional-info-content'),
  review: document.getElementById('review-content'),
};

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
   
    tabButtons.forEach(btn => btn.classList.remove('active'));
   
    button.classList.add('active');

   
    Object.values(tabContents).forEach(content => content.style.display = 'none');

    
    const tab = button.getAttribute('data-tab');
    if (tabContents[tab]) {
      tabContents[tab].style.display = 'block';
    }
  });
});


document.querySelectorAll('.book-btn, .book-table-button').forEach(btn => {
  btn.addEventListener('click', () => {
    alert("Redirecting you to book a table! 🍽️");
   
  });
});


const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', e => {
  e.preventDefault();
  const emailInput = newsletterForm.querySelector('input[type="email"]');
  const email = emailInput.value.trim();

  if (email === '') {
    alert('Please enter your email address to subscribe.');
    return;
  }
  
  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert(`Thank you for subscribing with ${email}! 🎉`);
  newsletterForm.reset();
});





//SHOP


const bookTableButtons = document.querySelectorAll('.book-btn, .book-table-button');
bookTableButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Redirecting you to book a table! 🍽️');
    
  });
});


const NewsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailInput = newsletterForm.querySelector('input[type="email"]');
  const email = emailInput.value.trim();

  if (email === '') {
    alert('Please enter your email address to subscribe.');
    return;
  }

  
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  alert(`Thank you for subscribing with ${email}! 🎉`);
  newsletterForm.reset();
});















