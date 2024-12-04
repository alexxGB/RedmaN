let next = document.querySelector('.next') //Esta es la variable de siguiente
let prev = document.querySelector('.prev') //Esta es la variable de anterior

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
}) //Esta es la función que realiza al hacer click en siguiente

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1])
}) //Esta es la función que realiza al hacer click en anterior