window.addEventListener("load", function(e){
    Push.create("Hello this is a notification",{
        body:"The website is ready!",
        icon: "img/js.png",
        timeout: 3000
    });
})