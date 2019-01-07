$(function(){
    $("#name").keyup(function(){
        $("#hw1").text("Hello "+$("#name").val());
        alert("Hello "+$("#name").val())
    })
})