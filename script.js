$(document).ready(function()
{

  var ArrTabuada = 
  [
    ArrSoma = 
    [
      ArrSoma01 = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21]
    ]
  ];

  // alert(ArrSoma01[7]);

  $('#main-nav button').click(function() 
  {
    $('section').css('display', 'none');

    if ( $(this).attr('id') == "nav-sum" ){$('#sum').slideDown("slow")}
    if ( $(this).attr('id') == "nav-sub" ){$('#sub').slideDown("slow")}
    if ( $(this).attr('id') == "nav-mul" ){$('#mul').slideDown("slow")}
    if ( $(this).attr('id') == "nav-div" ){$('#div').slideDown("slow")}
  });
});