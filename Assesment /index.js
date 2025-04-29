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

function goHome() {
  // Cambia la URL si tu main page se llama diferente
  window.location.href = "index.html";
}





  

