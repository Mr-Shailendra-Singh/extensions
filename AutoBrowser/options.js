$(function(){
    try {
        var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        var recognition = new SpeechRecognition();
        
    }catch(e){
        console.log("error");
    }

    $("#saveLimit").click(function(){
        recognition.stop();
        recognition.start();
    });

    recognition.onstart = function() { 
        console.log('Voice recognition activated. Try speaking into the microphone.');
      }
      
    recognition.onspeechend = function() {
        console.log('You were quiet for a while so voice recognition turned itself off.');
      }
      
    recognition.onerror = function(event) {
        console.log(event);
      }
    recognition.onresult = function(event) {
        var current = event.resultIndex;
        var transcript = event.results[current][0].transcript;
      
      }
})