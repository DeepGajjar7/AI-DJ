var song="";
var leftwristx=0;
var leftwristy=0;
var rightwristx=0;
var rightwristy=0;
var scoreleftwrist;

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
    fill("#FF0000")
    stroke("#FF0000");
    if (scoreleftwrist>0.2){
        
    
    circle(leftwristx,leftwristy,20);
    isNumberleftwristy=Number(leftwristy)
    removedecimals=floor(isNumberleftwristy)
    volume=removedecimals/500
    song.setVolume(volume)
    document.getElementById("volume").innerHTML="Volume= "+volume
    }
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
        rightwristx=results[0].pose.rightWrist.x;
        rightwristy=results[0].pose.rightWrist.y;
        scoreleftwrist=results[0].pose.keypoints[9].score;
        
    }
}







