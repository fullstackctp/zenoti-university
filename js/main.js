// overlay card-1
$(document).ready(function () {
  $(".trigger1").click(function () {
    $("#overlay1").show();
  });

  $("#close1").click(function () {
    $("#overlay1").fadeOut(300);
  });
});

// overlay card-2
$(document).ready(function () {
  $(".trigger2").click(function () {
    $("#overlay2").show();
  });

  $("#close2").click(function () {
    $("#overlay2").fadeOut(300);
  });
});

// overlay card-3
$(document).ready(function () {
  $(".trigger3").click(function () {
    $("#overlay3").show();
  });

  $("#close3").click(function () {
    $("#overlay3").fadeOut(300);
  });
});

// overlay card-4
$(document).ready(function () {
  $(".trigger4").click(function () {
    $("#overlay4").show();
  });

  $("#close4").click(function () {
    $("#overlay4").fadeOut(300);
  });
});

// 5
$(document).ready(function () {
  $(".trigger5").click(function () {
    $("#overlay5").show();
  });

  $("#close5").click(function () {
    $("#overlay5").fadeOut(300);
  });
});


$(document).ready(function () {

  $(".collapsible").click(function () {
    $collapsible = $(this);
    if($(this).children().first().hasClass( "active" )) 
      {$(this).children().first().removeClass("active")}
    else
      $(this).children().first().addClass("active")
    //getting the next element
    $content = $collapsible.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
      $content.slideToggle(50);
});
});


$(document).ready(function () {

  $(".slider").click(function () {
    $slider = $(this);

    //getting the next element
    $content = $slider.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
   
           $content.toggle("slide");
   
});
});

