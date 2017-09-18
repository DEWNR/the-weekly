var slideLeft = new Menu({
    wrapper: '#o-wrapper',
    type: 'slide-left',
    menuOpenerClass: '.c-button',
    maskId: '#c-mask'
});

var slideLeftBtn = document.querySelector('#c-button--slide-left');

slideLeftBtn.addEventListener('click', function(e) {
    e.preventDefault;
    slideLeft.open();
});


// Print
$('[data-js=print]').on('click', function() { window.print(); return false; });


// Email
$('[data-js=email]').on('click', function() {

    var mailSubject = encodeURI(thisPage.title);

    var mailBody = encodeURI('I thought you might like this post: '+thisPage.url);

    window.location.href = 'mailto:?subject='+mailSubject+'&body='+mailBody;

    return false;

});
