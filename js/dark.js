const $html = document.querySelector('html', 'header')
const $checkbox = document.querySelector('#switch')


$checkbox.addEventListener('change', function(){
    $html.classList.toggle('dark-mode')
})
