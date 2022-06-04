var showMore = document.querySelector('.js-dropdown')
var subNav = document.querySelector('.js-subnav')
var check = true

console.log(showMore)
console.log(subNav)

showMore.onclick = function (event) {
    event.preventDefault();
    if (check) {
        subNav.classList.add('show')
        check = !check
    } else {
        subNav.classList.remove('show')
        check = !check
    }
}
