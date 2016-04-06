function vPIPPlayWithinImage(video, image, showclose) {
  var w = document.images[image].width + 2;
  var h = document.images[image].height + 2;
  var string1 = "width="+w+",height="+h + ",showclose=" + showclose ;
  
  // alert("border = " + document.images[image].border + "; size = " + w + "x" + h); //debug
  
  vPIPPlay(video, string1, '', '');
}

//function vPIPPlayWithinElement(video, element, showclose) {
//  var w = document.getElementById(element).width;
//  var h = document.getElementById(element).style.height;
//
//  var string1 = "width="+w+",height="+h + ",showclose=" + showclose ;
//
////  var string1 = document.getElementById(element).innerHTML;
//  
//  alert(string1); //debug
//  
//  // vPIPPlay(video, string1, '', '');
//}
