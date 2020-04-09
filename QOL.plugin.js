//META{"name":"QualityofLifehacksforDiscord",,"authorId":"267737465152864256","website":"https://github.com/superpowers04/BD-plugins/","source":"https://github.com/superpowers04/BD-plugins/blob/master/QOL.plugin.js"}*//

class QualityofLifehacksforDiscord {

    getName() { return "Quality of Life hacks for Discord"; }
    getDescription() { return "Removes some annoyances from discord's context menu"; }
    getVersion() { return "0.1"; }
    getAuthor() { return "Superpowers04"; }
    getChanges() {
        return {

        };
    }

    load() {}

    start() {
        document.addEventListener("contextmenu", this.contextEvent = e => this.onContextMenu(e));
    }




    onContextMenu(e) {
        var contexserc = "div.da-item"
        var contexarry = $( contexserc )
        var contexarryLength = contexarry.Length
        for (var i = 0; i < 4; i++) {
            
            if (contexarry[i].innerText == "Call") {
                $( contexserc )[i].outerHTML = "";
                // $( contexserc )[i].clientHeight = 0;
                
            };
            if (contexarry[i].innerText == "Profile") {
                if (contexarry[1].innerText == "Mark As Read") {
                    $( contexserc )[i].outerHTML = "";
            }
                
            };
        }
        var contexserc = "div.da-disabled"
        var contexarry = $( contexserc )
        var contexarryLength = contexarry.Length
        for (var i = 0; i < 4; i++) {
            $( contexserc )[i].outerHTML = "";
        }
        var contexarryLength = $( "div.da-itemSubMenu" ).Length

        if ($( "div.da-itemSubMenu" )[0].innerText == "Invite to Server") {
            $( "div.da-itemSubMenu" )[0].outerHTML = "";
                
        };
        if ($( "div.da-itemSubMenu" )[1].innerText == "Invite to Server") {
            $( "div.da-itemSubMenu" )[1].outerHTML = "";
                
        };
            // if (contexarry[i].innerHTML()) return;
    }

    stop() {
        
        document.removeEventListener("contextmenu", this.contextEvent);
    }

}
