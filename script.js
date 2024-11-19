$(document).ready(function() {
  $('#btn-light').click(function() {
      $('body').removeClass('dark-mode').addClass('light-mode');
  });

  $('#btn-dark').click(function() {
      $('body').removeClass('light-mode').addClass('dark-mode');
  });
});
