song_1="";
song_2="";
score_leftwrist=0;
score_rightwrist=0;
status_song1="";
status_song2="";
rightWristX="";
rightWristY="";
function preload(){
    song_1=loadSound("believer.mp3");
    song_2=loadSound("faded.mp3");
}
function setup(){
    canvas=createCanvas(500,400);
    canvas.center();
    video= createCapture(VIDEO);
    video.hide();
    poseNet= ml5.poseNet(video,modelloaded());
poseNet.on('pose',gotposes);
}
function draw(){
    image(video,0,0,500,400);
    fill("red");
    stroke("red");
   status_song1= song_1.isPlaying();
    if(score_leftwrist>0.2){
        circle(leftWristX,leftWristY,20);
        song_2.stop();
        if(status_song1==false){
        song_1.play();
        document.getElementById("song_name").innerHTML="playing beliver";
        }
    }
   
    status_song2=song_2.isPlaying();
    if(score_rightwrist>0.2){
        circle(rightWristX,rightWristY,20);
        song_1.stop();
        if(status_song2==false){
        song_2.play();
        document.getElementById("song_name").innerHTML="playing faded";
        }
    }
}
function modelloaded(){
    console.log("modelloaded")
}


function gotposes(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        score_leftwrist=results[0].pose.keypoints[9].score;
        score_rightwrist=results[0].pose.keypoints[10].score;
        console.log("leftWristx ="+leftWristX+"leftWristY ="+leftWristY);
        console.log("rightWristx ="+rightWristX+"rightWristY ="+rightWristY);
    }
    }

