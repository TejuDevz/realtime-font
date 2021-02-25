leftWrist = 0;
rightWrist = 0;
diffrence = 0;

function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(550, 550);
  canvas.position(750, 150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on("pose", gotPoses);
}

function modelLoaded() {
  console.log("PoseNet is Initialized!");
}

function gotPoses(results) {
  if (results.length > 0) {
    //console.log(results)

    leftWrist = results[0].pose.leftWrist.x;
    rightWrist = results[0].pose.rightWrist.x;
    diffrence = floor(leftWrist - rightWrist);
  }
}

function draw() {
  background("#ff00ff");
  document.getElementById("square_size").innerHTML =
    "size of text = " + diffrence;
  fill("white");
  textSize(diffrence);
  text("Text", 275, 275);
}
