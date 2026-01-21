(function () {
  "use strict";

  const $body = document.body;

  // Play initial animations on page load.
  window.addEventListener("load", () => {
    window.setTimeout(() => {
      $body.classList.remove("is-preload");
    }, 100);
  });

  // Mobile check (simplified)
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    );
  if (isMobile) {
    $body.classList.add("is-mobile");
  }

  // Smooth scroll for .scrolly links
  document.querySelectorAll(".scrolly").forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const offset = 100;
          const targetPosition =
            target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });
})();
