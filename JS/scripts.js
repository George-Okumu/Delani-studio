$(document).ready(function(){
    $("#design-image").click(function(){
      $("#design-image").slideDown("1500").hide("1000");
      $("#design").show();
    });
    $("#design").click(function(){
      $("#design").fadeOut("1500");
      $("#design-image").slideDown("1500");
    });
  });

  $(document).ready(function(){
    $("#development-image").click(function(){
      $("#development-image").slideDown('1500').hide('1000');
      $("#development").show('1500');
    });
    $("#development").click(function(){
      $("#development").fadeOut('1500');
      $("#development-image").slideDown('1500');
    });
  });

  $(document).ready(function(){
    $("#product-image").click(function(){
      $("#product-image").slideDown('1500').hide('1000');
      $("#product").show('1500');
    });
    $("#product").click(function(){
      $("#product").fadeOut('1500');
      $("#product-image").slideDown('1500');
    });
  });