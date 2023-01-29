// $(document).ready(function() {
//     $("#stream1_btn").on("click", function() {
//         $(".stream1").removeClass('highlight_stream');
//         $(".stream2").removeClass('highlight_stream');
//         $(".stream3").removeClass('highlight_stream');
//         $(".stream1").addClass('highlight_stream');
//    });
//    $("#stream2_btn").on("click", function() {
//         $(".stream1").removeClass('highlight_stream');
//         $(".stream2").removeClass('highlight_stream');
//         $(".stream3").removeClass('highlight_stream');
//         $(".stream2").addClass('highlight_stream');
//    });
//    $("#stream3_btn").on("click", function() {
//         $(".stream1").removeClass('highlight_stream');
//         $(".stream2").removeClass('highlight_stream');
//         $(".stream3").removeClass('highlight_stream');
//         $(".stream3").addClass('highlight_stream');
//    });
// }); 

$(document).ready(function() {
     $(".box").on("click", function() {
          var classNames = $(this).attr("class").split(" ");
          $("." + classNames[1]).css("background.color", "red");
     });
});