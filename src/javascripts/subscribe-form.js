$('.subscribe-form__submit').on( 'click', function() {

    var emailComplete = false;
    var subscribeToComplete = false;
    var emailRegExp = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i);  // RegExp from http://www.regular-expressions.info/email.html

    if (emailRegExp.test( $('#fieldEmail').val()) ) {
        emailComplete = true;
        $('.js-email div.subscribe-form__error').hide();
    } else {
        $('.js-email div.subscribe-form__error').show();
    }

    if (emailComplete) {
        location = 'http://dewnrcomms.createsend.com/t/r/s/kudddhl/?' + $('.subscribe-form input').serialize();
    }

    return false;
});
