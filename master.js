status = "";

img = "";

function preload()
{
img = loadImage("master.jpg");
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

fill("#FFAE42");
stroke("#FFAE42");
noFill();

text("bed" , 40 , 140 , 90 , 100);
rect(5 , 120 , 470  , 220);

text("lamp" , 90 , 160 , 90 , 100);
rect(90 , 20 , 90  , 220);

text("book" , 310 , 390 , 90 , 100);
rect(220 , 310 , 120  , 100);


}

function gotResult(error , results)
{
if(error){
    console.error(error);
}

    console.log(results);
   

}


