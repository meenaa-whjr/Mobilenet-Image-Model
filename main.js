//making the webcam
Webcam.set({width:300,height:300,image_format:"png",png_quality:90});
//webcam and snapshot divs being stored in variables
var webcam_div = document.getElementById("actual_webcam_div_id");
var snapshot_div = document.getElementById("actual_snapshot_div_id");
//set webcam
Webcam.attach(webcam_div);
//take snapshot
function takesnapshot(){
    Webcam.snap(function(img_name)
    {document.getElementById("actual_snapshot_div_id").innerHTML="<img id='image' src='"+img_name+"'>"}
    )
}
//logging ml5 version
console.log("ML5 version: "+ml5.version+".");
//linking model
var model=ml5.imageClassifier("MobileNet",mobileloaded);
//mobile loaded function
function mobileloaded(){
    console.log("MobileNet model loaded succesfully.");
}
//analyze snapshot
function analyzesnapshot(){
    var image = document.getElementById("image");
    model.classify(image,consoleresults);
}
//console results
function consoleresults(error,result){
    if(error){
        console.error(error);
    }
    else{
        console.log(result);
        //display results
document.getElementById("results_span").innerHTML=result[0].label+", "+result[1].label+", "+result[2].label;
    }
}
