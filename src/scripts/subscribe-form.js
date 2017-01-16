// $("#campaign-monitor input[type='submit']").click(function() {
//
//     var emailComplete = false, subscribeToComplete = false;
//
//     var emailRegExp = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i);  // RegExp from http://www.regular-expressions.info/email.html
//
//
//     if (emailRegExp.test($("#fieldEmail").val())) {
//
//       emailComplete = true;
//
//       $(".js-email .seamless-form__error").addClass('seamless-form__error--inactive');
//
//     } else {
//
//       $(".js-email .seamless-form__error").removeClass('seamless-form__error--inactive');
//
//     }
//
//
//     if (emailComplete) {
//
//       location.href = "http://dewnrcomms.createsend.com/t/r/s/ihlldhy/?"+$("#campaign-monitor input").serialize();
//
//     }
//
//
//     return false;
//
// });
