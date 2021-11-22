status = "";

img = "";

function preload()
{
img = loadImage("dinning.jpg");
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

fill("#301934");
stroke("#301934");
noFill();

text("table" , 40 , 210 , 90 , 100);
rect(5 , 190 , 400  , 250);

text("chair" , 90 , 160 , 90 , 100);
rect(50 , 150 , 180  , 220);

text("chair" , 320 , 210 , 90 , 100);
rect(250 , 210 , 210  , 220);




}

function gotResult(error , results)
{
if(error){
    console.error(error);
}

    console.log(results);
   

}


