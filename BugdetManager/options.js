$(function(){
    chrome.storage.sync.get(["limit","total"],function(budget){
        $("#limit").val(budget.limit);
        $("#total").val(budget.total);
    });

    $("#saveLimit").click(function(){
        var limitVar = $("#limit").val();
        if(limit){
            chrome.storage.sync.set({'limit':limitVar},function(){
                close();
            });
        }
    });

    $("#resetTotal").click(function(){
        chrome.storage.sync.set({'total':0},function(){
            $("#total").val(0);
            var notifOptions = {    
                type : 'basic',
                iconUrl : 'icon48.png',
                title : 'Total Reset!!',
                message : 'Total Has been Reset'
             };
            chrome.notifications.create('limitNotif',notifOptions);
            chrome.notifications.clear('limitNotif');
        });
    });
})