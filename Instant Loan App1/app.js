//slider inputs
$(document).on('input', '#amountRange', function() {
  $('#total').html("R" +$(this).val() );
});

$("#field1").change(function(){
  var amountEnterd=$(this).val();
    $('.total').text("R"+ amountEnterd);
  });

  $("#field").change(function(){
    var amountEnterd=$(this).val();
      $('.total').text("R"+ amountEnterd);
    });

$(".mRange1").change(function(){
  var numberOfMonths=$(this).val();
  console.log(numberOfMonths);
    $('#monthRange1').val(numberOfMonths);
  });
  
  $("#monthRange1").change(function(){
    var numberOfMonths=$(this).val();
      $('.mRange1').val(numberOfMonths);
    });
  
  
  
    $(".mRange2").change(function(){
      var numberOfMonths=$(this).val();
      console.log(numberOfMonths);
        $('#monthRange2').val(numberOfMonths);
      });
      
      $("#monthRange2").change(function(){
        var numberOfMonths=$(this).val();
          $('.mRange2').val(numberOfMonths);
        });
  

// switch content
$(document).ready(function(){
  $('.next').on('click', function(){

    var currentDiv = $('.active');
    var nextDiv = currentDiv.next();

        if(nextDiv.length){
             currentDiv.removeClass('active').css('z-index', -1);            
             nextDiv.removeClass('not-active');
             currentDiv.addClass('not-active');
  
          }
          else{
            var currentDiv = $('.not-active');
            var nextDiv = currentDiv.next();

            currentDiv.removeClass('not-active').css('z-index', 1);
            nextDiv.addClass('not-active');
            currentDiv.addClass('active');
         
          }

  });


});

