$(document).ready(function(){
$(".img1").click(function(){
    $("#p1").toggle();
    $(".img1").hide();
    $("#p1").show();
    });
$(".img2").click(function(){
    $("#p2").toggle();
    $(".img2").hide();
    $("#p2").show();
  });
$(".img3").click(function(){
    $("#p3").toggle();
    $(".img3").hide();
    $("#p3").show();
  });
  $("#p1").click(function(){
    $(".img1").toggle();
    $("#p1").hide();
    $(".img1").show();
  });
$("#p2").click(function(){
    $(".img2").toggle();
    $("#p2").hide();
    $(".img2").show();
  });
$("#p3").click(function(){
    $(".img3").toggle();
    $("#p3").hide();
    $(".img3").show();
  });
});

  $(document).ready(function(){
    $("#mybutton").click(function(messag){
        var name = document.getElementById("name").value;
        var messaje = document.getElementById("mybutton").value;{
           alert(name +' '+ "We Have Recieved Your Message!");
        }
    });
});
  