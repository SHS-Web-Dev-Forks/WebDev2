function changeText() {
    document.getElementById("textChange").innerHTML = "<u style='background-color:red;'>Thanks for liking my Webpage</u>";
}
function findTotal() {
    var arr = document.getElementsByName('qty');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        if (parseInt(arr[i].value))
            tot += parseInt(arr[i].value);
    }
    document.getElementById('total').value = tot;
}

function scrollWindow() {
    window.scrollTo(0, 400);
}
