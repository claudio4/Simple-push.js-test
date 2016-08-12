window.addEventListener("load", function(e){
    Push.create("Hello this is a notification",{
        body:"The website is ready!",
        icon: "img/js.png",
        timeout: 3000
    });
    document.getElementById("open").addEventListener("click", function(e){
        e.stopPropagation();
        Push.create("You did it!", {
            body:"But you can't click me",
            icon: "img/js.png",
            timeout: 4000,
            onClick: function() {
                archivement();
                this.close();
            }
        })
    })
    document.getElementById("close").addEventListener("click", function(e) {
        e.stopPropagation();
        Push.clear();
    })
    function archivement(){
        Push.create("Archivement Unlocked!", {
            body: "Law breaker",
            icon: "img/law.png",
            timeout: 4000,
            onClick: function(){
                pleaseStop();
                this.close();
            }
        });
    function pleaseStop() {
        Push.create("Stop!", {
            body: "Stop or take the consequences",
            icon: "img/stop.png",
            timeout: 10000,
            onClick: function(){
                window.location = "about:blank";
                this.close();
            }
        });
    }
    }
})