/** @format */

$(function () {
  //nice scroll
  $("html").niceScroll();
  $(".carousel").carousel({
    interval: 6000,
  });
  //show color option div when click on the cog
  $(".cog-check").click(function () {
    $(".color-option").fadeToggle();
  });
  //change theme color on click
  var colorLi = $(".color-option ul li");

  $(".color-option ul li")
    .eq(0)
    .css("backgroundColor", "#b00c09")
    .end()
    .eq(1)
    .css("backgroundColor", "#E426D5")
    .end()
    .eq(2)
    .css("backgroundColor", "#009AFF")
    .end()
    .eq(3)
    .css("backgroundColor", "#FFD500");

  colorLi.click(function () {
    $("link[href*='theme']").attr("href", $(this).attr("data-value"));
  });

  //Loading Screen

  $(".loading-overlay .spinner").fadeOut(1000, function () {
    $("body").css("overflow", "auto");
    $(this)
      .parent()
      .fadeOut(1000, function () {
        $(this).remove();
      });
  });
});
//cashing scroll top element
var scrollButton = $("#scroll-top");
$(window).scroll(function () {
  console.log($(this).scrollTop());
  if ($(window).scrollTop() >= 700) {
    scrollButton.show();
  } else {
    scrollButton.hide();
  }
});
scrollButton.click(function () {
  $("html,body").animate({ scrollTop: 0 }, 600);
});
