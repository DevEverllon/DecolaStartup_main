var swiper = new Swiper("#mySwiper-portfolio", {
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000, // tempo entre slides (em milissegundos)
    disableOnInteraction: false, // continua mesmo após o usuário interagir
  },
  loop: true, // faz o carrossel voltar ao início automaticamente
  breakpoints: {
    920: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});


gsap.from(".swiper-slide1", {
    y: -50,
    opacity: 0,
    duration: 1.2,
    scale: 0.5,
    // stagger: 0.15,
    ease: "power.out",
    
    // Para fazer a animação quando rolar para cima ou para baixo:
    scrollTrigger: {
        opacity: 0,
        trigger: ".swiper-slide1",
        start: "top 90%",
        toggleActions: "play reverse play reverse"
    }
});