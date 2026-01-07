// ================================
// MOBILE NAVBAR TOGGLE
// ================================
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// ================================
// SCROLL REVEAL ANIMATION
// ================================
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach((el, index) => {
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            // Delay for smooth stagger effect
            setTimeout(() => {
                el.classList.add("active");
            }, index * 120);
        }
    });
}



// Run on scroll
window.addEventListener("scroll", revealOnScroll);

// Run once on load
revealOnScroll();


// ================================
// ACTIVE NAV LINK
// ================================
const navLinksAll = document.querySelectorAll(".nav-links a");
const currentPage = window.location.pathname.split("/").pop();

navLinksAll.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.classList.add("active");
    }
});

// Loading screen
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }
});

// Scroll to top button
const scrollBtn = document.getElementById("scrollTopBtn");

if (scrollBtn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


// ================================
// IMAGE MODAL
// ================================
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeModal = document.querySelector(".close-modal");

document.querySelectorAll(".gallery-item img").forEach(img => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    });
});

if (closeModal) {
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });
}

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
// ================================
// DARK MODE
// ================================
const darkToggle = document.getElementById("darkToggle");

// Apply saved theme on load
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

// Toggle theme on click
if (darkToggle) {
    darkToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        // Save preference
        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });
}

// ================================
// PROFILE TOC SCROLL SPY
// ================================
const tocLinks = document.querySelectorAll(".profile-toc a");

window.addEventListener("scroll", () => {
  let current = "";

  document.querySelectorAll("section[id]").forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  tocLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
