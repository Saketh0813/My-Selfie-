var speechrecogniction = window.webkitSpeechRecognition;
var recognition = new speechrecogniction;

function Start(){
    document.getElementById("voiceinput").innerHTML = "";
    recognition.start();
    
}
recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("voiceinput").innerHTML = content;
    if(content == "take my selfie"){
        console.log("selife");
        speak();
        
    }
}

function speak(){
    var synth = window.speechSynthesis;
    SpeakData = "Your selfie will be taken in 4 seconds";
    var UtterThis = new SpeechSynthesisUtterance(SpeakData);
    synth.speak(UtterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        snapshot();
        save();

    },4000);
}

camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:400,
    image_format: 'png',
    png_quality: 9
});

function snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("selfie").innerHTML = '<img id="my_snapshot" src="'+data_uri+'">';

    })
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("my_snapshot").src;
    link.href = image;
    link.click();
}