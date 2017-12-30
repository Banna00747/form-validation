$(function() {

  $.validator.setDefaults({
    errorClass: 'help-block',
    highlight: function(element) {
      $(element)
        .closest('.form-group')
        .addClass('has-error');
    },
    unhighlight: function(element) {
      $(element)
        .closest('.form-group')
        .removeClass('has-error');
    }
  
  });

  $("#register-form").validate({
    rules: {
      email: {
        required: true,
        email: true,
        remote: "http://localhost:3000/"
      },
      firstName: {
        required: true,
        nowhitespace: true,
        lettersonly: true
      },
      secondName: {
        required: true,
        nowhitespace: true,
        lettersonly: true
      },
      mobile: {
        required: true,
        digits: true,
        phonesBD: true
      },
      address: {
        required: true
      }

  
    },
    messages: {
      email: {
        required: 'Please enter an email address.',
        email: 'Please enter a <em>valid</em> email address.'
        
      }
    }
  });

});