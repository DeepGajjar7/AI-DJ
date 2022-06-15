var song="";
var leftwristx=0;
var leftwristy=0;
var rightwristx=0;
var rightwristy=0;

function preload(){
    song=loadSound("music.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelloaded)
    posenet.on('pose',gotposes)
}

function draw(){
    image (video,0,0,600,500);
}

function play() {
    song.play();
    song.setVolume(1)
    song.rate(1)
}

function modelloaded(){
    console.log("model is loaded")
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        leftwristx=results[0].pose.leftWrist.x;
        leftwristy=results[0].pose.leftWrist.y;
        rightwristx=results[0].pose.righttWrist.x;
        rightwristy=results[0].pose.righttWrist.y;
    }
}







