status="";
img="";
function preload(){
    img=loadImage("ac.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status_Ac").innerHTML="status: detecting object";
}
function modelLoaded(){
    console.log(modelLoaded);
    status=true;
    objectDetector.detect(img,gotResult);

}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}
function back(){
    window.location="index.html";
}