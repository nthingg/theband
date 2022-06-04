var header = document.getElementById('header');
var mobileMenu = document.getElementById('moblie-menu');
var currentHeight = header.clientHeight;

//onclick dong mo menu
mobileMenu.onclick = function () {
    var isClosed = header.clientHeight === currentHeight;
    if (isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

//tu dong dong menu sau khi chon
var menuItems = document.querySelectorAll('#navbar li a[href*="#"]')
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    menuItem.onclick = function (event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (isParentMenu) {
            event.preventDefault();      
        } else {
            header.style.height = null;
        }
    }
}