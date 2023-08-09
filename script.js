let receiptItems = [];
let billTotal = 0;

const poor = 1.05;
const good = 1.1;
const amazing = 1.25;

function addBill(receiptItems) {
  billTotal = 0;
  for (let i = 0; i < receiptItems.length; i++) {
    billTotal += receiptItems[i];
  }
}

// Add item & cost
$("#button").click(function () {
  var item = $("#item").val();
  var cost = $("#cost").val();
  $(".item-list").append("<li>" + item + "</li>");
  $(".receipt-list").append("<li>" + cost + "<li>");
  let costNumber = parseFloat($("input[name=cost]").val());
  receiptItems.push(costNumber);
  addBill(receiptItems);
  $("input[name=item]").val("");
  $("input[name=cost]").val("");
});

$("#button").click(function () {
  $("#totalCost").html(billTotal);
});

// Clear List & Total

$("#trash").click(function () {
  $(".item-list li").remove();
  $(".receipt-list li").remove();
  $("#totalCost").html("");
  $("#tipTotal").html("");
  receiptItems = [];
});

// Poor tip

$("#poor").click(function () {
  $("#tipTotal").html((billTotal * poor).toFixed(2));
});

// Good Tip

$("#good").click(function () {
  $("#tipTotal").html((billTotal * good).toFixed(2));
});

// Amazing Tip

$("#amazing").click(function () {
  $("#tipTotal").html((billTotal * amazing).toFixed(2));
});
