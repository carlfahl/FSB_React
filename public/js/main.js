$(document).ready(function() {
  console.log("We are linked to the static js file.");

  $(".delete").on('click', function () {
    var bearId = $(this).attr('id').slice(4);
    console.log(bearId);
    $.ajax({
      url: '/api/bears/'+bearId,
      method: 'DELETE',
    }).done(function (data) {
      console.log(data);
      window.location = "/bears";
    });
  });

  $('#newBear').submit(function () {
    var name = $("#name").val();
    var species = $('#species').val();
    var age = $('#age').val();
    var weight = $('#weight').val();
    var location = $('#location').val();
    var attitude = $('#attitude').val();

    $.ajax({
      url: '/api/bears',
      method: 'POST',
      data: {
        name: name,
        species: species,
        age: age,
        weight: weight,
        location: location,
        attitude: attitude
      }
    }).done(function (data) {
      console.log(data);
      window.location = "/bears";
    })
  });

  $('.update').on('click', function () {
    var bearId = $(this).attr('id').slice(7);
    console.log(bearId);
    $.get('/api/bears/'+bearId).done(function (data) {
      console.log(data);
      $('#name').val(data.name);
    });
  });

});
