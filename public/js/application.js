$(document).ready(function() {
  $('#signup').click(function(e) {
    e.preventDefault();
    $("#signup-form").toggle();
    $("#login-form").hide();
  });

  $('#login').click(function(e) {
    e.preventDefault();
    $("#login-form").toggle();
    $("#signup-form").hide();
  });

  $('#logout').click(function(e) {
    e.preventDefault();
    console.log(e.target);
    $link = $(e.target);
    $.ajax({
      url: $link.attr('href'),
      type: 'GET',
    })
    .done(function(welcomePartical) {
      $('header').replaceWith(welcomePartical);
    });

  });

  $('.cancel-btn').click(function(e) {
    e.preventDefault();
    $(e.target).closest('form').toggle();
  });

  $('#login-form').submit(function(e) {
    e.preventDefault();
    $form = $(e.target);
    $.ajax({
      url: $form.attr('action'),
      type: $form.attr('method'),
      data: $form.serialize(),
    })
    .done(function(welcomePartical) {
      $form.toggle(400);
      $('header').replaceWith(welcomePartical);
    });
  });

  $('#signup-form').submit(function(e) {
    e.preventDefault();
    $form = $(e.target);
    $.ajax({
      url: $form.attr('action'),
      type: $form.attr('method'),
      data: $form.serialize(),
    })
    .done(function(welcomePartical) {
      $form.toggle(400);
      $('header').replaceWith(welcomePartical);
    });
  });
});
