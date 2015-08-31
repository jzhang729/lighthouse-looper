var image;

$(function(){

$.ajax({
  url: 'https://api.instagram.com/v1/tags/lighthouse/media/recent?client_id=78d31567139a448a88aa3cf9c0db7b30',
  dataType: 'jsonp',
  method: 'get',
  success: function(output) {
    image = output.data;
    console.log(image)
    for(var i=0; i < image.length; i++) {
      imgUrl = image[i].images.standard_resolution.url
      imgCaption = image[i].caption.text
      imgCommentCount = image[i].comments.count
      imgLikeCount = image[i].likes.count

      setTimeout(function(imgUrl,imgCaption,imgCommentCount,imgLikeCount){
        $("#slideshow-item").attr("src", imgUrl);
        $("#caption").text(imgCaption);
        $("#commentcount").text(imgCommentCount);
        $("#likecount").text(imgLikeCount);
      },i*3000,imgUrl,imgCaption,imgCommentCount,imgLikeCount);
    }
  }
})

});