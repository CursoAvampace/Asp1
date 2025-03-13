// MODAL funcionalidad

// Selecciona el modal y sus partes
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const modalClose = document.querySelector('.modal-close');

// Función para cerrar el modal
modalClose.addEventListener('click', () => {
  modal.style.display = 'none';
  modalBody.innerHTML = '';
  modalBody.parentElement.classList.remove('modal-objetivos');
});

// Cierra el modal si se hace clic fuera del contenido
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
    modalBody.innerHTML = '';
    modalBody.parentElement.classList.remove('modal-objetivos');
  }
});

// Agregar evento de click a todas las imágenes con clase "clickable"
const clickableImages = document.querySelectorAll('.clickable');
clickableImages.forEach(img => {
  img.addEventListener('click', (e) => {
    const panel = e.target.closest('.panel');
    // Si el panel es "Objetivos", mostrar el contenido textual oculto en el modal
    if (panel && panel.id === 'panel-objetivos') {
      const hiddenContent = panel.querySelector('.hidden-content').cloneNode(true);
      hiddenContent.style.display = "block";  // Aseguramos que se muestre en el modal
      const title = document.createElement('h2');
      title.textContent = "Objetivos - Detalle";
      modalBody.innerHTML = '';
      modalBody.appendChild(title);
      modalBody.appendChild(hiddenContent);
      // Aplicar estilo especial para Objetivos
      modal.querySelector('.modal-content').classList.add('modal-objetivos');
    } else {
      // Para otros paneles, mostrar la imagen en grande con efecto 3D
      const imgSrc = e.target.getAttribute('src');
      const imgAlt = e.target.getAttribute('alt');
      const largeImg = document.createElement('img');
      largeImg.src = imgSrc;
      largeImg.alt = imgAlt;
      largeImg.style.width = '100%';
      largeImg.style.boxShadow = '0 8px 16px rgba(0,0,0,0.4)';
      modalBody.innerHTML = '';
      modalBody.appendChild(largeImg);
    }
    modal.style.display = 'block';
  });
});

// Agregar la fecha actual al footer
window.addEventListener('load', () => {
  const currentDateElement = document.getElementById('current-date');
  if (currentDateElement) {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    currentDateElement.textContent = today.toLocaleDateString('es-ES', options);
  }
});
