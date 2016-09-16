$(document).ready( function(){
  console.log("Loaded!")
  // displayDiv();
  // $('#nav').scrollspy({
  //               min: 721,
  //               max: $('#container').offset().top + $('#container').outerHeight(),
  //               onEnter: function(element, position) {
  //                   $("#nav").addClass('sticky');

  //               },
  //               onLeave: function(element, position) {
  //                   $("#nav").removeClass('sticky');
  //               }
  //           });
//-340 + ($(this).height()/2) + 'px';
 function sizeProductSections(){
    $('.hackathon-item .project-details').each(function(){
   var n = Math.abs(340/2 - ($(this).height()/2))+ 'px';
    $(this).css({
      'padding-top':   n
    });
});
  $('.hackathon-item .project-desc').each(function(){
    $(this).css({
      'top':  340/2 - ($(this).height()/2) + 'px'
    });
  });
  }

  $('.hackathon-item .project-desc').hover(function(e){
    $(this).siblings('.project-image').addClass('project-image-hover');
    e.stopPropagation();
  }, function(){
    $(this).siblings('.project-image').removeClass('project-image-hover');
  });




   $(window).resize(function(){
    sizeProductSections()
   });

   sizeProductSections();
});

// function displayDiv(){
//   $(".main-display-header").on('click', function(){
//     var divToDisplay = '"#'+ $(this).data('id') + '"';
//     $(divToDisplay).toggleClass('displayed')
//   });
// }
