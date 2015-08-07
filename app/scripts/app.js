"use strict";

$(function() {

  $('#alertMe').on("click", function(event){
    event.preventDefault();
    $('#successAlert').slideDown();
  });

  $('a.pop').on("click", function (event) {
    event.preventDefault();

  });

  $('a.pop').popover();
  $('[rel="tooltip"]').tooltip();

});
