document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    // Remove 'active' from all links (optional for nav menus)
    document
      .querySelectorAll(".nav-link")
      .forEach((l) => l.classList.remove("active"));

    // Add 'active' to the clicked one
    this.classList.add("active");
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // const burger = document.querySelector('.md:hidden');
  // const menu = document.querySelector('nav .hidden');

  // burger.addEventListener('click', () => {
  //   menu.classList.toggle('active');
  // });

  // Intersection Observer for fade-up animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach((element) => {
    observer.observe(element);
  });

  // Carousel functionality (for About page)
  const carouselSlide = document.querySelector('.carousel-slide');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  const dots = document.querySelectorAll('.dot');
  let currentIndex = 0;
  const totalItems = carouselItems ? carouselItems.length : 0;
  const itemWidth = 100 / totalItems;

  if (carouselSlide) {
    function updateCarousel() {
      carouselSlide.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach((dot, index) => {
        dot.classList.toggle('bg-[#d3ac6c]', index === currentIndex);
        dot.classList.toggle('bg-white', index !== currentIndex);
      });
    }

    prevBtn.addEventListener('click', () => {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
      updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
      currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
      updateCarousel();
    });

    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
      });
    });

    setInterval(() => {
      currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
      updateCarousel();
    }, 5000);
  }

  // Lightbox functionality (for Gallery page)
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightbox-image');

  function openLightbox(src, alt) {
    lightboxImage.src = src;
    lightboxImage.alt = alt;
    lightbox.classList.remove('hidden');
  }

  function closeLightbox() {
    lightbox.classList.add('hidden');
  }

  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => openLightbox(img.src, img.alt));
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
});

const video = document.getElementById("video");
    video.playbackRate = 0.8; // 0.5x speed = half the normal speed