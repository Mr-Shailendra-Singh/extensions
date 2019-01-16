console.log("dom load not finish "+domload)
// $(window).on("load",function () {
//     domload = true;
//     console.log("dom load finish "+domload);

//     //chrome.runtime.sendMessage({domload: domload});
// });

// $( document ).ready(function() {
//     domload = true;
//     console.log("dom ready finish "+domload);

//     //chrome.runtime.sendMessage({domload: domload});
// });

window.addEventListener("load", function(event) {
    console.log("All resources finished loading!");
});