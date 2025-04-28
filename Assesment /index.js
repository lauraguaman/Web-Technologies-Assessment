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
  