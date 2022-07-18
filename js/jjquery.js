$(document).ready(function(){
     $('.carousel').carousel(
    {
      interval:6000;  
    });
    //show color option div when click on the cog
    $(".cog-check").click(function(){
        $(".color-option").show();
    });
    //change theme color on click
    $(".color-option ul li")
    .eq(0).css("background","#b00c09").end()
    .eq(1).css("background","#E426D5").end()
    .eq(2).css("background","#009AFF").end()
    .eq(3).css("background","#FFD500").end()
});