$(document).ready(function(){
  $("#consulta").click(function(event) {
    event.preventDefault();
    var form = event.target;
    var nombre = "";
    var apellido = "";
    var email = "";
    var comment = "";
    var nombre = $("#first_name").val();
    var apellido = $("#last_name").val();
    var email = $("#email").val();
    var comment = $("#comment").val();
    if(nombre!=""&&apellido!=""&&email!=""&&comment!=""){
      var data = {
        "first_name": nombre,
        "last_name": apellido,
        "email": email,
        "comment": comment
      };
      $.ajax({
          type: "POST",
          url: "email/contacto.php",
          data: data,
          success: function(){
            console.log('success');
          },
          error:function () {
            console.log('error');
          }
      });
    }
    else {
      console.log('completar campos');
    }
});
});
