var check = "fals";                                                                       /*first*/
function changeVal(el) {
    var qt = parseFloat(el.parent().children(".qt").html());
    var price = parseFloat(el.parent().children(".price").html());
    var eq = Math.round(price * qt * 100) / 100;
    el.parent().children(".full-price").html(eq + "");
    changeTotal();
}
function changeTotal() {                                                                 /*second*/
    var price = 0;
    $(".full-price").each(function (index) {
        // price += parseFloat($(".full-price").eq(index).html());
        price += parseFloat($(this).html());
    });
    price = Math.round(price * 100) / 100;
    // var tax = Math.round(price * 0.05 * 100) / 100
    var shipping = parseFloat($(".shipping span").html());
    var fullPrice = Math.round((price + shipping) * 100) / 100;
    if (price == 0) {
        fullPrice = 0;
    }
    $(".subtotal span").html('$ ' + price);
    // $("tex span").html(tax);
    $(".total span").html('$ ' + fullPrice);
}

function parsePrice(price) {
    // ...
}

$(document).ready(function () {                                                          /*third*/
    $(".remove").click(function () {
        var el = $(this);
        el.parent().parent().addClass("removed");
        window.setTimeout(
            function () {
                el.parent().parent().slideUp('fast', function () {
                    el.parent().parent().remove();
                    if ($(".product").length == 0) {
                        if (check) {
                            console.clear()
                        } else {
                            $("#cart").html("<h1> NO Books!</h1>");
                        }
                    }
                    changeTotal();
                });
            }, 150);
    });
    // $(".qt-plus").click(function () {
    //   child =  $(this).parent().children(".qt");
    //   if (parseInt(child.html()) <= 1) {
    //     child.html(parseInt(child.html()) + 1);
    // }
    //     $(this).parent().children(".full-price").addClass("added");
    //     var el = $(this);
    //     window.setTimeout(function () { el.parent().children(".full-price").removeClass("added"); changeVal(el); }, 150);
    // });
    $(".qt-plus").click(function () {
        $(this).parent().children(".qt").html(parseInt($(this).parent().children(".qt").html()) + 1);
        $(this).parent().children(".full-price").addClass("added");
        var el = $(this);
        window.setTimeout(function () {
            el.parent().children(".full-price").removeClass("added");
            changeVal(el);
        }, 150);
    });
    $(".qt-minus").click(function () {
        child = $(this).parent().children(".qt");
        if (parseInt(child.html()) > 1) {
            child.html(parseInt(child.html()) - 1);
        }
        $(this).parent().children(".full-price").addClass("minused");
        var el = $(this);
        window.setTimeout(function () {
            el.parent().children(".full-price").removeClass("minused");
            changeVal(el);
        }, 150);
    });
    window.setTimeout(function () { $(".is-open").removeClass("is-open") }, 1200);
});