var pRect = this.getPageBox("Media");
var pWidth = pRect[2] - pRect[0];
var pHeight = pRect[1] - pRect[3];

var left = 150;
var top = 30;
var width = 100;
var height = 30;

var txtFd = this.addField("Text1", "text", 0, [
  mmToPt(left),
  pHeight - mmToPt(top),
  mmToPt(left + width),
  pHeight - mmToPt(top + height),
]);

function mmToPt(mm) {
  return (mm * 72) / 25.4;
}
