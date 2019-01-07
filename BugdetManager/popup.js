$(function(){
    chrome.storage.sync.get(["total","limit"],function(budget){
        $("#total").text(budget.total);
        $("#limit").text(budget.limit);
    });
    $("#spendAmt").click(function(){
        chrome.storage.sync.get(["total","limit"],function(budget){
            var newTotal = 0;
            if(budget.total){
                newTotal += parseInt(budget.total);
            }
            var amount = $("#amt").val();
            if(amount){
                newTotal += parseInt(amount);
            }
           chrome.storage.sync.set({'total':newTotal},function(){
               console.log("limit "+budget.limit);
               console.log(budget.limit);
               if(amount && newTotal >= budget.limit){
                    var notifOptions = {    
                       type : 'basic',
                       iconUrl : 'icon48.png',
                       title : 'Limti Reached!!',
                       message : 'Ohh !! Notification Limit'
                    };
                   chrome.notifications.create('limitNotif',notifOptions);
                   chrome.notifications.clear('limitNotif');
               }
           }); 
           $("#total").text(newTotal);
           $("#amt").val('');
        })
    });
})