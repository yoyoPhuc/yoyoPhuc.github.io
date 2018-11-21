jQuery(document).ready(function() {

  $(".open-quick-menu").on("click", function() {
    $(".quick-menu").toggleClass("quick-menu-show");
    $(".fog-hide").toggleClass("fog-show");
  });

  $(".close-quick-menu").on("click", function() {
    $(".quick-menu").toggleClass("quick-menu-show");
    $(".fog-hide").toggleClass("fog-show");
  });

  $(".fog-hide").on("click", function() {
    $(".quick-menu").toggleClass("quick-menu-show");
    $(".fog-hide").toggleClass("fog-show");
  });

  $('.quick-menu li').click(function() {
    $(this).siblings('li').removeClass('active');
    $(this).addClass('active');
  });
});
