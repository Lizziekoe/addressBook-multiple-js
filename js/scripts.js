$(document).ready(function() {
  $("#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("#new-first-name").val();
    var inputtedLastName  = $("#new-last-name").val();

    var inputtedStreet    = $("#new-street").val();
    var inputtedCity      = $("#new-city").val();
    var inputtedState     = $("#new-state").val();
    var inputtedZip       = $("#new-zip").val();

    var newAddress = { street: inputtedStreet,
                       city: inputtedCity,
                       state: inputtedState,
                       zip: inputtedZip,
                        fullAddress: function() {
                         return this.street +
                         ", " +
                         this.city +
                         ", " +
                         this.state +
                         " " +
                         this.zip;
                       }
                     };

    var newContact = { firstName: inputtedFirstName,
                       lastName: inputtedLastName,
                       address: newAddress.fullAddress()
                      };

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>")


    $("#new-first-name").val("");
    $("#new-last-name").val("");
    $("#new-street").val("");
    $(".new-city").val("");
    $(".new-state").val("");
    $(".new-zip").val("");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".address").text(newContact.address);
    });
  });

  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
    '<div class="form-group">' +
    '<label for="new-street">Street</label>' +
    '<input type="text" class="form-control new-street">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="new-city">City</label>' +
    '<input type="text" class="form-control new-city">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="new-state">State</label>' +
    '<input type="text" class="form-control new-state">' +
    '</div>' +
    '</div>' + '<div class="new-zip">' + '<div class="form-group">' +
    '<label for="new-zip">Zip</label>' +
    '<input type="text" class="form-control new-zip">' +
    '</div>' + '</div>');
  });
});
