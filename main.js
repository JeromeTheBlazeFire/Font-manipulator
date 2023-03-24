noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas= createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw()
{
    document.getElementById("text_side").innerHTML="Width and height of Square will be="+difference+"px";
    background('#969A97');
    fill('red');
    textSize(difference);
    stroke('purple');
    text('Hola, como estas?',50,250)
}
function modelLoaded()
{
    console.log('PoseNet is Initialized');
}
function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX="+noseX+"noseY="+noseY);

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);

        console.log("leftWristX="+leftWristX+"rightWristX="+rightWristX+"difference="+difference);
    }     
}
