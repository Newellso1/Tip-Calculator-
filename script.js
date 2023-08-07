let receiptItems = [];
let billTotal = 0

function addBill(receiptItems) {
    billTotal = 0
    for (let i = 0; i < receiptItems.length; i++) {
        billTotal += receiptItems[i];
    }
};



// Add item & cost
$('#button').click(function () {
    var item = $('#item').val();
    var cost = $('#cost').val();
    $('.item-list').append('<li>' + item + '</li>');
    $('.receipt-list').append('<li>' + cost + '<li>');
    let costNumber = parseInt($('input[name=cost]').val());
    receiptItems.push(costNumber);
    addBill(receiptItems);
    $('input[name=item]').val('');
    $('input[name=cost]').val('');
});

$('#button').click(function () {
    $('#totalCost').html(billTotal);
})

// Clear List

$('#trash').click(function () {
    $('.item-list li').remove();
    $('.receipt-list li').remove();
    receiptItems = [];
});
