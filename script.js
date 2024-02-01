console.log('Started');

$("li.dropdown-toggle").on("click", function (e) {
    const jThis = $(this);
    const menu = $(".dropdown-menu")
    if (jThis.hasClass("active")) {
        jThis.toggleClass('active')
    }
    else {
        jThis.toggleClass('active')
    }
});

$("ul.filter").children().on("click", function (e) {
    if (!$(e.target).hasClass("active")) {
        $(this).siblings().removeClass('active')
        $(this).toggleClass('active')
    }
});