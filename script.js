// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector("#navbar").offsetHeight;
        const targetPosition =
          targetElement.getBoundingClientRect().top +
          window.pageYOffset -
          headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Navbar background change on scroll
  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 100) {
      navbar.style.backgroundColor = "rgba(44, 62, 80, 0.95)";
      navbar.style.backdropFilter = "blur(10px)";
    } else {
      navbar.style.backgroundColor = "var(--primary-color)";
      navbar.style.backdropFilter = "none";
    }
  });

  // Animation on scroll
  function checkScroll() {
    const elements = document.querySelectorAll(
      ".work-sample, .case-study, .credential, .reference"
    );

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  }

  // Initialize elements for animation
  const animatedElements = document.querySelectorAll(
    ".work-sample, .case-study, .credential, .reference"
  );
  animatedElements.forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  });

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Check on initial load

  // Download resume button functionality
  document.addEventListener("DOMContentLoaded", function () {
    var resumeLink = document.getElementById("view-resume");
    if (resumeLink) {
      resumeLink.addEventListener("click", function (e) {
        e.preventDefault();
        var url = resumeLink.href;
        var win = window.open(encodeURI(url), "_blank");
        if (win) {
          try {
            win.opener = null;
          } catch (err) {
            /* ignore */
          }
        }
      });
    }
  });

  // Form handling for contact (if added later)
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert(
        "Thank you for your message! In a real implementation, this would send your message."
      );
      contactForm.reset();
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Get the button
  const backToTopButton = document.getElementById("backToTopBtn");

  // Function to toggle button visibility based on scroll position
  function toggleBackToTopButton() {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  }

  // Function to scroll to top smoothly
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  // Show/hide button when scrolling
  window.addEventListener("scroll", toggleBackToTopButton);

  // Scroll to top when button is clicked
  backToTopButton.addEventListener("click", scrollToTop);
});
