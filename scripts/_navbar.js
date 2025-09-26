function menuMobile() {
  const body = document.body;
  const navbar = document.querySelector(".navbar");
  const menuToggle = document.querySelector(".menu-mobile");
  const menuLinks = document.querySelector(".nav-links");
  const btnLink = document.querySelector(".nav-button-link");
  const socialMediaIcons = document.querySelector(".social-media");

  if (menuToggle && menuLinks) {
    menuToggle.addEventListener("click", () => {
      menuLinks.classList.toggle(".active"); // Adiciona a classe 'active' aos links de navegação

      if (btnLink) {
        btnLink.classList.toggle("inactive-button"); // Adiciona a classe 'inactive-button' ao botão

        socialMediaIcons.classList.toggle("inactive-button"); // Adiciona a classe 'inactive-button' aos ícones de mídia social
      }
      body.classList.toggle("no-scroll"); // Adiciona a classe 'no-scroll' ao body para desativar o scroll
    });
  }

    // Melhoria para UI/UX e correção do fechamento ao clicar fora do menu mobile
    document.addEventListener("click", (event) => {
      // Verifica se o menu está aberto
      const menuIsOpen = menuLinks.classList.contains("active") || menuLinks.classList.contains(".active");
      
      // Verifica se o clique foi dentro do menu ou do botão de toggle
      const isClickInsideMenu = navbar.contains(event.target);

      if (menuIsOpen && !isClickInsideMenu) {
        menuLinks.classList.remove("active");
        menuLinks.classList.remove(".active"); // Remove ambas as possíveis classes

        if (btnLink) {
          btnLink.classList.toggle("inactive-button");
        }
        if (socialMediaIcons) {
          socialMediaIcons.classList.toggle("inactive-button");
        }
        body.classList.toggle("no-scroll");
      }
    });
}
menuMobile(); // Chama a função para ativar o menu mobile





















// Seleciona o botão hambúrguer e os links de navegação
const navToggle = document.querySelector(".menu-mobile");
const navLinks = document.querySelector(".nav-links");

// Adiciona um ouvinte de evento de clique ao botão hambúrguer
navToggle.addEventListener("click", () => {
  // Alterna a classe 'active' nos links de navegação
  navLinks.classList.toggle("active");
});

const menu = document.querySelector(".navbar");

let lastScrolly = window.scrollY; // Pega a posição atual do scroll]

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY; // Pega a posição atual do scroll

  if (currentScrollY > lastScrolly && currentScrollY > 10) {
    menu.classList.add("navbar-hidden"); // Adiciona a classe para esconder o menu
  } else {
    menu.classList.remove("navbar-hidden"); // Remove a classe para mostrar o menu
  }

  lastScrolly = currentScrollY; // Atualiza a última posição de rolagem
});

// Adiciona um pequeno buffer para evitar flickering ao rolar para cima
// Isso ajuda a garantir que o menu não desapareça imediatamente ao rolar um pouco para cima
// e melhora a experiência do usuário.
