$(function(){
    $("#urlSubmit").click(function(){
        // chrome.extension.isAllowedIncognitoAccess(function(isallowed){
        //     console.log(isallowed);
        // });
        // //chrome.tts.speak('Please wait !! Google is opening');

        // // chrome.tabs.query({active : true, currentWindow: true},function(tabs){
        // //     chrome.tabs.sendMessage(tabs[0].id,{startspt: true});
        // // })
        // // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // //     console.log(tabs);
        // // }); 
        setTimeout(function(){
            chrome.runtime.sendMessage({url: $("#url").val(),env:"dev1"}, function(response) {
                console.log("message response " +response.status);
            });
        });
        
    });
})