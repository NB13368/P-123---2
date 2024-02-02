noseX=0;
noseY=0;

function preload() {
    clown_nose = loadImage('https://i.postimg.cc/DyStZ3gP/319665161216211.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
    }
}

function draw() {
    image(video, 0, 0, 300, 300);
    //circle(noseX, noseY, 20);
    image(clown_nose, noseX-37, noseY-103, 90, 70);
}
function take_snapshot(){
    save('myFIlterImage.png');
}

