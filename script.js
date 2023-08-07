// Add item & cost
$('#button').click(function() {
    var item = $('#item').val();
    var cost = $('#cost').val();
    $('.item-list').append('<li>' + item + '</li>');
    $('.receipt-list').append('<li>' + cost + '<li>');
    $('input[name=item]').val('');
    $('input[name=cost]').val('');
  });

// Clear List

$('#trash').click(function (){
    $('.item-list li').remove();
    $('.receipt-list li').remove();
});
