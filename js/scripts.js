$(function(){
  $(".form").submit(function(event){
    event.preventDefault();
    var word = $("#word").val();
    var animal = $("#animal").val();
    var color = $("#color").val();
    var arrayFav = [animal, color, word];
    var arrayFavs = [];


    arrayFavs.push(arrayFav[1]);
    arrayFavs.push(arrayFav[0]);
    arrayFavs.push(arrayFav[2]);

    $(".color").text(arrayFavs[0]);
    $(".animal").text(arrayFavs[1]);
    $(".word").text(arrayFavs[2]);

  });
});
