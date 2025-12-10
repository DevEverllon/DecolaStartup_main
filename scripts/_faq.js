const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  const header = accordion.querySelector(".accordion-header");
  const body = accordion.querySelector(".accordion-body");

  header.addEventListener("click", () => {

    // FECHA TODOS OS OUTROS ACORDES
    accordions.forEach((item) => {
      if (item !== accordion) {
        item.querySelector(".accordion-body").classList.remove("active");
        item.querySelector(".accordion-header").classList.remove("active");
      }
    });

    // ABRE OU FECHA O QUE FOI CLICADO
    body.classList.toggle("active");
    header.classList.toggle("active");
  });
});
