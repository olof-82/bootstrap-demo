"use strict";

$(function() {

  $('#alertMe').on("click", function(event){
    event.preventDefault();
    $('#successAlert').slideDown();
  });
});
