(function () {

    AOS.init({
        easing: 'ease-in-out-back',
        duration: 1500,
        offset: 215
    });

    $(".grow").hover(function (e) {
        $(this).find(".video").get(0).play();
    });

    var bLazy = new Blazy({
        breakpoints: [{
            width: 550,
            src: 'data-src-extra-small'
        },
        {
            width: 767,
            src: 'data-src-small'
        },
        {
            width: 991,
            src: 'data-src-medium'
        }]
        , success: function(element){}
    });
})();
