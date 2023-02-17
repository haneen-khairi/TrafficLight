const Colors = [
  { color: "red", status: "Stop" },
  { color: "yellow", status: "Stop" },
  { color: "green", status: "Go" },
];

var statusBox = document.getElementById('statusBox');
let colorsIndex = 0;
function changeTrafficLight(){
  
  const trafficColor = Colors[colorsIndex];
var colorMe = document.getElementById(trafficColor.color).style.backgroundColor = trafficColor.color;
// console.log(colorMe);
for (let j= 0; j < Colors.length ; j++){
  if(j !== colorsIndex){
    document.getElementById(Colors[j].color).style.backgroundColor = "black";
// console.log(colorsIndex);
  
    statusBox.innerHTML = trafficColor.status;
// console.log(statusBox.innerHTML);
  }
}
colorsIndex++;
if(colorsIndex >= Colors.length){
  colorsIndex =0 ;
}
// console.log(colorsIndex); 
}
setInterval(changeTrafficLight,3000);

 
































