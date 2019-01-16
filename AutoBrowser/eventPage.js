var tabobj = {
    url:"https://www.facebook.com",
    active :false
};
var winobj ={
    url : ["https://www.google.com"],
    incognito : false,
    focused : true
};
var getInfo ={
    populate : true
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.env == "dev1"){
        console.log("inside if");
        
        chrome.windows.create(winobj, function(window){
            tabobj.windowId  = window.id;
            console.log(window);
            var domload = false;
            chrome.tabs.executeScript(null,{
                code: 'var domload = '+domload+';'
            },function(){
                chrome.tabs.executeScript(null,{
                    file: "loadscript.js"
                })
            })
            
            // chrome.tabs.create(tabobj,function(tab){
            //     console.log(tab);
            // });
        });
    }
    sendResponse({status: "Message Received"});
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.domload == true){
        chrome.tabs.create(tabobj,function(tab){
            console.log(tab);
        });
    }
});