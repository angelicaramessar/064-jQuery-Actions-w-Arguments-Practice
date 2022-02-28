// Guided Practice
$(".reply-yes").click(function() {  
    $(".homers-reply").text("Woo Hoo!");
    $(".reply-yes").css("background-color", "yellow");
});

//Independent Practice
$(".reply-no").click(function() {  
       $(".homers-reply").text("Doh!");
    $(".reply-no").css("background-color", "red");
    $("img").css("width", "300px",
                 "height","300px");
    
});

