status="";
img="";
object=[];
function preload(){
    img=loadImage("fan.jpg");
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status_Fan").innerHTML="status: detecting object";
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
        object=results;
        console.log(results);
    }
}
function draw(){
    image(img,0,0,640,420);
    if(status!=""){
        for(i=0;i<object.length;i++){
            document.getElementById("status_Fan").innerHTML="object detected";
            document.getElementById("numberAc").innerHTML="object detected are"+object.length;
            fill("#FF0000");
            percent=floor(object[i].confidence*100);
            text(object[i].label+" "+percent+"%",object[i].x,object[i].y);
            noFill();
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
        }
    }
}
function back(){
    window.location="index.html";
}