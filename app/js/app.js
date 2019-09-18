(function() {
  'use strict';
  
  document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById('modal-welcome');
    var modalPanel = document.getElementById('modal-panel');
    var modalCloseBtn = document.getElementById('modal-close');

    setTimeout(function() {
      modal.classList.add('modal--open');
    }, 500);

    document.addEventListener("click", function(evt) {
      var targetElement = evt.target;
  
      do {
        if (targetElement == modalPanel) {
          return;
        }

        targetElement = targetElement.parentNode;
      } while (targetElement);
  

      modal.classList.remove('modal--open');
    });

    modalCloseBtn.addEventListener('click', function() {
      modal.classList.remove('modal--open');
    });
  });

})();