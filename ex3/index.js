//Fix this so place holder width defines input width.
// var input=$('input');
// input.setAttribute('size',input.getAttribute('placeholder').length);

$('#textClick').click(function () {
  $('#textEcho').html($('#textInput').val());
})
