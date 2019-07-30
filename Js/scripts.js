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


$(document).ready(function(){
  $("#imag1").mouseover(function(){
    $(".imaje1").show();
  });
  $("#imag1").mouseout(function(){
    $(".imaje1").hide();
  });
});

$(document).ready(function(){
    $("#imag2").mouseover(function(){
      $(".imaje2").show();
    });
    $("#imag2").mouseout(function(){
      $(".imaje2").hide();
    });
  });

  $(document).ready(function(){
    $("#imag3").mouseover(function(){
      $(".imaje3").show();
    });
    $("#imag3").mouseout(function(){
      $(".imaje3").hide();
    });
  });

  $(document).ready(function(){
    $("#imag4").mouseover(function(){
      $(".imaje4").show();
    });
    $("#imag4").mouseout(function(){
      $(".imaje4").hide();
    });
  });

  $(document).ready(function(){
    $("#imag5").mouseover(function(){
      $(".imaje5").show();
    });
    $("#imag5").mouseout(function(){
      $(".imaje5").hide();
    });
  });

  $(document).ready(function(){
    $("#imag6").mouseover(function(){
      $(".imaje6").show();
    });
    $("#imag6").mouseout(function(){
      $(".imaje6").hide(); 
    });
  });

  $(document).ready(function(){
    $("#imag6").mouseover(function(){
      $(".imaje6").show();
    });
    $("#imag6").mouseout(function(){
      $(".imaje6").hide();
    });
  });

  $(document).ready(function(){
    $("#imag7").mouseover(function(){
      $(".imaje7").show();
    });
    $("#imag7").mouseout(function(){
      $(".imaje7").hide();
    });
  });

  $(document).ready(function(){
    $("#imag8").mouseover(function(){
      $(".imaje8").show();
    });
    $("#imag8").mouseout(function(){
      $(".imaje8").hide();
    });
  });


  