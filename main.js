function setup()
{
    video= createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.ml5.poseNet(video)
    poseNet.ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPose);
}
function draw()
{
    background('#9551e8');
}

function modelLoaded()
{
    console.log('poseNet Is Intialized!');
}