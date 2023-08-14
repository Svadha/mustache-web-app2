function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
  }
function take_snapshot(){    
    save('myImage.png');
  }
  function preload(){

  }
  function draw(){

  }
  function modelLoaded(){
    console.log("modelLoaded");
  }
  function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}