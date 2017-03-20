'use strict';

var $ = require('jquery');
var utils = require('../utils.js');

module.exports = function () {
  $('#contact_submit').click(function(event) {
    event.preventDefault();
    var nombre = '';
    var apellido = '';
    var email = '';
    var comment = '';

    nombre = $('#first_name').val();
    apellido = $('#last_name').val();
    email = $('#email').val();
    comment = $('#comment').val();

    if (nombre !== '' && apellido !== '' && email !== '' && comment !== '') {
      var data = {
        'first_name': nombre,
        'last_name': apellido,
        'email': email,
        'comment': comment
      };
      $.ajax({
        type: 'POST',
        url: 'assets/email/contacto.php',
        data: data,
        success: function () {
          var cbsend = $('.cb-send');
          cbsend.addClass('square-success').fadeIn();
          cbsend.children().html('Éxito<span>Gracias por enviarnos tu consulta</span>');
        },
        error: function () {
          var cbsend = $('.cb-send');
          cbsend.addClass('square-error').fadeIn();
          cbsend.children().html('Error<span>Mensaje no enviado</span>');
        }
      });
    } else {
      if (nombre === '') {
        $('#first_name').parent().addClass('square-error');
      }
      if (apellido === '') {
        $('#last_name').parent().addClass('square-error');
      }
      if (!utils.validateEmail(email)) {
        $('#email').parent().addClass('square-error');
      }
      if (comment === '') {
        $('#comment').parent().addClass('square-error');
      }
    }
  });
};
