"use strict";
function isPC() {
  for (
    var o = navigator.userAgent,
      i = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"],
      n = !0,
      r = 0,
      t = i.length;
    r < t;
    r++
  )
    if (o.indexOf(i[r]) > 0) {
      n = !1;
      break;
    }
  return n;
}
function isOldIE() {
  var o = navigator.appName,
    i = navigator.appVersion,
    n = i.split(";"),
    r = n[1].replace(/[ ]/g, "");
  if (
    "Microsoft Internet Explorer" == o &&
    ("MSIE6.0" == r || "MSIE7.0" == r || "MSIE8.0" == r || "MSIE9.0" == r)
  )
    return !0;
}
window.onload = function() {
  var o = "http://39.106.10.121/dist/static/html";
  return isPC()
    ? isOldIE()
      ? (alert("你当前浏览器无法正常加载页面，请升级浏览器"),
        (window.location.href = "https://browsehappy.com/"),
        !1)
      : void (window.location.href = o + "/demo.html")
    : ((window.location.href = o + "/error.html"), !1);
};
