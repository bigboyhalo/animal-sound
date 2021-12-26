function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true,video:false});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json",modelloaded);
}

function modelloaded(){
    console.log("modelloaded");
    classifier.classify(gotresults);
}
dog=0;
cat=0;
function gotresults(error,results){
if (error) {
    console.log(error);
}
else{
    console.log(results);
    document.getElementById("result_label").innerHTML="detected voice of:"+results[0].label;
    if (results[0].label=="Barking") {
        document.getElementById("animal_img").src="bark.gif";
    }
    else if (results[0].label=="Meowing") {
        document.getElementById("animal_img").src="meow.gif";
    }
    else{
        document.getElementById("animal_img").src="listen.gif";  
    }
}
}