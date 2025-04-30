// Código para abrir y cerrar el submenú del navbar
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuList = document.querySelector('.menu-list');
  
    if (menuToggle && menuList) {
      menuToggle.addEventListener('click', () => {
        if (menuList.style.display === 'flex') {
          menuList.style.display = 'none';
        } else {
          menuList.style.display = 'flex';
        }
      });
    }
  });

//page 7 information//

// Función para redirigir al inicio
function goHome() {
  window.location.href = "index.html";
}

// Función para redirigir a otras páginas
function goToPage(page) {
  window.location.href = page;
}





  

