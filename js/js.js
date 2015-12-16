var div,
tabItems=[
  "Plein",
  "de blocs, avec",
  "diverses tailles de contenu",
  "!"
];

function createBlocs(nbreBlocs,boite){
  for(var i = 1;i<=nbreBlocs;i++){
    div = $("<div>");
    div.css({
      "width":"4em"
    });
    div.text("bloc"+" "+i);
    $(boite).append(div);
    $(boite).css("align-items","flex-start");
  }
}

createBlocs(5,"#fDirection");
createBlocs(12,"#fWrap");
createBlocs(4,"#fJustify");
createBlocs(20,"#fAlignC");

function createItems(nbreItems,boite){
  for(var i=0;i<nbreItems;i++){
    div = $("<div>");
    div.css({
      "width":"4em",
      "margin-right":"1em"
    });
    div.text(tabItems[i]);
    $(boite).append(div);
  }
}
createItems(tabItems.length,fAlignI);

/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
-------------------  Flex-direction  -------------------------
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
$(".flexColumn").click(function(){
  $("#fDirection").css("flex-direction","column");
});

$(".flexColumnReverse").click(function(){
  $("#fDirection").css("flex-direction","column-reverse");
});

$(".flexRow").click(function(){
  $("#fDirection").css("flex-direction","row");
});

$(".flexRowReverse").click(function(){
  $("#fDirection").css("flex-direction","row-reverse");
});

/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
-------------------  Flex-wrap  -------------------------
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
$(".nowrap").click(function(){
  $("#fWrap").css("flex-wrap","nowrap");
});

$(".wrap").click(function(){
  $("#fWrap").css("flex-wrap","wrap");
});

$(".wrap-reverse").click(function(){
  $("#fWrap").css("flex-wrap","wrap-reverse");
});

/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
-------------------  Justify-content  -------------------------
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
$(".justifyStart").click(function(){
  $("#fJustify").css("justify-content","flex-start");

});

$(".justifyEnd").click(function(){
  $("#fJustify").css("justify-content","flex-end");
});

$(".center").click(function(){
  $("#fJustify").css("justify-content","center");
});

$(".spaceB").click(function(){
  $("#fJustify").css("justify-content","space-between");
});

$(".spaceA").click(function(){
  $("#fJustify").css("justify-content","space-around");
});

/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
-------------------  Align-items  -------------------------
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
$(".alignStart").click(function(){
  $("#fAlignI").css("align-items","flex-start");
});

$(".alignEnd").click(function(){
  $("#fAlignI").css("align-items","flex-end");
});

$(".alignStretch").click(function(){
  $("#fAlignI").css("align-items","stretch");
});

$(".alignCenter").click(function(){
  $("#fAlignI").css("align-items","center");
});

$(".baseline").click(function(){
  $("#fAlignI").css("align-items","baseline");
});

/*XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
-------------------  flex-wrap  -------------------------
XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX*/
function wrap(){
  $("#fAlignC").css("flex-wrap","wrap");
}
wrap();

$(".contentStart").click(function(){

  $("#fAlignC").css("align-content","flex-start");
});

$(".contentEnd").click(function(){
  $("#fAlignC").css("align-content","flex-end");
});

$(".contentCenter").click(function(){
  $("#fAlignC").css("align-content","center");
});

$(".contentB").click(function(){
  $("#fAlignC").css("align-content","space-between");
});

$(".contentA").click(function(){
  $("#fAlignC").css("align-content","space-around");
});

$(".contentStretch").click(function(){
  $("#fAlignC").css("align-items","inherit");
  $("#fAlignC").css("align-content","stretch");
});
