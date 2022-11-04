function update(){
  var a = new Date();
  document.getElementById("time").innerText = a.getHours()+":"+a.getMinutes()+":"+a.getSeconds();
}
window.setInterval(update,1000);
update();
