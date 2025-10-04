document.addEventListener("DOMContentLoaded", () => {
    const splitTypes = document.querySelectorAll(".textoAnimado");

    splitTypes.forEach((char, i) => {
      const text = new SplitType(char, { types: "words, chars" });

      gsap.from(text.chars, {
        scrollTrigger: {
          trigger: char,
          start: "top 50%",
          end: "top top",
          scrub: true,
        },
        opacity: 0.3, // 0.3
        stagger: 0.1,
      });
    });
  });