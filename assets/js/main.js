AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
  mirror: false,
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-neon-blue");
    link.classList.add("text-gray-300");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.remove("text-gray-300");
      link.classList.add("text-neon-blue");
    }
  });
});

const typingElements = document.querySelectorAll(".typing-animation");
typingElements.forEach((element, index) => {
  const text = element.textContent;
  element.textContent = "";

  setTimeout(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      element.textContent += text.charAt(i);
      i++;
      if (i > text.length) {
        clearInterval(typeInterval);
      }
    }, 100);
  }, index * 2000);
});

window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll(".animate-float");

  parallaxElements.forEach((element, index) => {
    const speed = 0.5 + index * 0.1;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});
