function setup() {
    canvas = createCanvas(500, 300);
    canvas.center();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/XLiI83swy/model.json', modelLoaded);
    video = createCapture(VIDEO);
    video.hide();
}
function modelLoaded() {
    console.log("Model Loaded!");
}
function draw() {
    image(video, 0, 0, 500, 300);
    classifier.classify(video, gotResult); 
}
function gotResult(error, results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("familymembername").innerHTML = results[0].label;
        document.getElementById("familymemberaccuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}