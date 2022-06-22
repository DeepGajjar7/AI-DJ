var song="";
var leftwristx=0;
var leftwristy=0;
var rightwristx=0;
var rightwristy=0;
var scoreleftwrist;
var scorerightwrist;

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
if (scorerightwrist>0.2){
    circle(rightwristx,rightwristy,20);
    if (rightwristy>0 && rightwristy<=100){
        song.rate(0.5);
        document.getElementById("speed").innerHTML="Speed = 0.5x"
    }

    if (rightwristy>100 && rightwristy<=200){
        song.rate(1);
        document.getElementById("speed").innerHTML="Speed = 1x"
    }

    if (rightwristy>200 && rightwristy<=300){
        song.rate(1.5);
        document.getElementById("speed").innerHTML="Speed = 1.5x"
    }

    if (rightwristy>300 && rightwristy<=400){
        song.rate(2);
        document.getElementById("speed").innerHTML="Speed = 2x"
    }

    if (rightwristy>400 && rightwristy<=500){
        song.rate(2.5);
        document.getElementById("speed").innerHTML="Speed = 2.5x"
    }
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
        scorerightwrist=results[0].pose.keypoints[10].score;
    }
}







