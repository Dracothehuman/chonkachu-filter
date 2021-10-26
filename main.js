noseX = 0;
noseY = 0;



function preload(){
    creeper_aw_man = loadImage("https://i.postimg.cc/tCrHG2Rf/220px-Pikachu-artwork-for-Pok-mon-Red-and-Blue-webp.png");
}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    posenet=ml5.poseNet(video, modalLoaded);
    posenet.on('pose', gotPoses);
}
function modalLoaded(){
    console.log("PoseNet Initialized");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log(results[0].pose.nose.x);
        console.log(results[0].pose.nose.y);

        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
    }
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(creeper_aw_man, noseX, noseY, 50, 50);
}
function take_snapshot(){
    save("myFilteredImage.jpeg");
}