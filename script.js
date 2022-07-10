$(document).ready(function(){

  // Mobile Menu 
  $("#mobile-menu").click(function(){
    $("#mobile-menu").toggleClass("active");
    $(".overlay").toggleClass("active");
    $(".navbar__links").toggleClass("active")
  });

  // Mobile Hero Display
  let imgCounter = 1;

  //Next Button Function
  $(".icon.next").click(function(){
    
    if (imgCounter >= 4){
      imgCounter = 0;
    }

    imgCounter++;
    $(".display")[0].src = `/images/image-product-${imgCounter}.jpg`

  });

  //Previous Button Function
  $(".icon.previous").click(function(){

    if (imgCounter <= 1){
      imgCounter = 5;
    }

    imgCounter--;
    $(".display")[0].src = `/images/image-product-${imgCounter}.jpg`
    
  });

  //Modal Open Function 
  $(".cart").click(function(){
    $(".navbar__modal").addClass("active");
    $("#mobile-menu").toggleClass("lock");
  })

  //Modal Close Function
  $(".fa-solid").click(function(){
    $(".navbar__modal").removeClass("active");
  })

  //Item Count
  let itemCount = 0;

  //Plus - Minus Function
  $(".plus").click(function(){

    itemCount++;
    $(".amount").text(itemCount);

  })

  $(".minus").click(function(){
    
    if(itemCount == 0) return;
    itemCount--;
    $(".amount").text(itemCount);

  })

  //Adding to Cart
  $(".add-cart").click(function(){
    if(itemCount == 0) return;
    $(".modal-empty").addClass("hide");
    $(".modal-content").addClass("show");
    $(".modal-btn").addClass("show");

    totalAmount = itemCount * 125;
    $(".modal-content .unit").text(itemCount);
    $(".modal-content .total-amount").text(`$${totalAmount}`);
    $(".noti").text(itemCount);
    $(".noti").addClass("show");

  })

  //Emptying Cart
  $(".empty-cart").click(function(){

    $(".modal-empty").removeClass("hide");
    $(".modal-content").removeClass("show");
    $(".modal-btn").removeClass("show");
    itemCount = 0;
    $(".amount").text(itemCount);
    $(".noti").text(itemCount);
    $(".noti").removeClass("show");

  })


})