window.onscroll = function() {
  const header = Prime.Document.queryFirst('header');
  if (window.pageYOffset > 500) {
    header.addClass('gray').addClass('animate');
  } else {
    header.removeClass('gray').removeClass('animate');
  }
};