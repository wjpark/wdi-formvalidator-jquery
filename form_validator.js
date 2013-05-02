function validateEmail(email) {
  var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(email)) {
      return true;
    } else {
      return false;
    }
}

$(document).ready(function(){
  var name;
  var age;
  var phone;
  var email;
  var isFormValid = false;

  $('#name').bind('blur submit', function(event){
    event.preventDefault();
    name = $(this).val();
    var nameLength = name.length;
    if(nameLength <= 3){
      $('#name_warning').removeClass("hidden");
      $(this).focus();
    } else {
      isFormValid = true;
      $('#name_warning').addClass("hidden");
    }
  });

  $('#age').bind('blur submit', function(event){
    event.preventDefault();
    age = $(this).val();
    if(!($.isNumeric(age) && age >0)){
      $('#age_warning').removeClass("hidden");
      $(this).focus();
    } else {
      isFormValid = true;
      $('#age_warning').addClass("hidden");
    }
  });

  $('#phone').bind('blur submit', function(event){
    event.preventDefault();
    phone = $(this).val();
    var phoneLength = phone.length;
    console.log($.isNumeric(phone));
    if(!($.isNumeric(phone) && phoneLength === 10)){
      $('#phone_warning').removeClass("hidden");
      $(this).focus();
    } else {
      isFormValid = true;
      $('#phone_warning').addClass("hidden");
    }
  });

  $('#email').bind('blur submit', function(event){
    event.preventDefault();
    email = $(this).val();
    if(!validateEmail(email)) {
      $('#email_warning').removeClass("hidden");
      $(this).focus();
    } else {
      isFormValid = true;
      $('#email_warning').addClass("hidden");
    }
  });

  $('form').on('submit', function(event){
    event.preventDefault();


    $('input').each (function(){
      if ($.trim($(this).val()).length === 0){
        $(this).next('p').removeClass("hidden");
      } else {
        $(this).next('p').addClass("hidden");
        isFormValid = true;
      }
    });
    if (isFormValid === true){
      $('#li_name').html("name:" + name);
      $('#li_age').html("age:" + age);
      $('#li_phone').html("phone:" + phone);
      $('#li_email').html("email" + email);
    }
  });
});













