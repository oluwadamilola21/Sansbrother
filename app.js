const list = document.querySelector(".form-check");
const check = document.querySelector(".form-check-label");
list.addEventListener('click', function() {
    if(check.classList.contains('checked')) {
        check.classList.remove('checked')
    } else {
        check.classList.add('checked')
    }
  });