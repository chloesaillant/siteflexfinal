
/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                      ---Order---
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
$(".red1").click(function(){
  $("#redO").css("order","1");
});

$(".red2").click(function(){
  $("#redO").css("order","2");
});

$(".red3").click(function(){
  $("#redO").css("order","3");
});

$(".orange1").click(function(){
  $("#orangeO").css("order","1");
});

$(".orange2").click(function(){
  $("#orangeO").css("order","2");
});

$(".orange3").click(function(){
  $("#orangeO").css("order","3");
});

$(".yellow1").click(function(){
  $("#yellowO").css("order","1");
});

$(".yellow2").click(function(){
  $("#yellowO").css("order","2");
});

$(".yellow3").click(function(){
  $("#yellowO").css("order","3");
});

$(".resetO").click(function(){
  $("#yellowO").css("order","0");
  $("#orangeO").css("order","0");
  $("#redO").css("order","0");
});

/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                      ---Flex-grow---
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
$(".redG1").click(function(){
  $("#redGrow").css("flex-grow","1");
});

$(".redG2").click(function(){
  $("#redGrow").css("flex-grow","2");
});

$(".orangeG1").click(function(){
  $("#orangeGrow").css("flex-grow","1");
});

$(".orangeG2").click(function(){
  $("#orangeGrow").css("flex-grow","2");
});

$(".yellowG1").click(function(){
  $("#yellowGrow").css("flex-grow","1");
});

$(".yellowG2").click(function(){
  $("#yellowGrow").css("flex-grow","2");
});

$(".resetG").click(function(){
  $("#yellowGrow").css("flex-grow","0");
  $("#orangeGrow").css("flex-grow","0");
  $("#redGrow").css("flex-grow","0");
});
/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                      ---shrink---
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/

$(".shrink").click(function(){
  $("#fShrink").addClass("taille");
  $("#fShrink").css("width","400px");
});

$(".resetShrink").click(function(){
  $("#fShrink").removeClass("taille");
  $("#fShrink").css("width","600px");
});

/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
                      ---align self---
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
$(".autoself").click(function(){
  $("#orangeSelf").css({
    "align-self":"auto",
    "height":"80px"
  });
});

$(".startself").click(function(){
  $("#orangeSelf").css({
    "align-self":"flex-start",
    "height":"80px"
  });
});

$(".endself").click(function(){
  $("#orangeSelf").css({
    "align-self":"flex-end",
    "height":"80px"
  });
});

$(".centerself").click(function(){
  $("#orangeSelf").css({
    "align-self":"center",
    "height":"80px"
  });
});

$(".baseself").click(function(){
  $("#orangeSelf").css({
    "align-self":"baseline",
    "height":"80px"
  });
});

$(".stretchself").click(function(){
  $("#orangeSelf").css("align-self","stretch");
  $("#orangeSelf").css("height",'inherit');
});
