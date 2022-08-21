jQuery(document).ready(function($) {
  var d = new Date();
  if (d.getMilliseconds() % 2 == 0) {
  $("a.split_link").attr("href", "/sheets/lp13/sp");
  console.log("split_lp13");
  }
  else {
  $("a.split_link").attr("href", "/sheets/ksp/sp");
  console.log("split_ksp");
  }
});