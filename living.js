status = "";

img = "";

function preload()
{
img = loadImage("living.jpg");
}


function setup()
{
    canvas = createCanvas(480,480);
    canvas.center();
    Coco = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Object Detected";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    
}



function draw()
{
image(img , 0 , 0 , 480 , 480);   

fill("#00008B");
stroke("#00008B");
noFill();

text("sofa" , 10 , 100 , 90 , 100);
rect(5 , 90 , 400  , 190);

text("table" , 320 , 430 , 90 , 100);
rect(100 , 250 , 250  , 220);






}

function gotResult(error , results)
{
if(error){
    console.error(error);
}

    console.log(results);
   

}


