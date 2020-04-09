//META{"name":"QualityofLifehacksforDiscord","website":"https://github.com/superpowers04/BD-plugins/","source":"https://raw.githubusercontent.com/superpowers04/BD-plugins/master/QOL.plugin.js"}*//

var QualityofLifehacksforDiscord = (_ => {
    return class QualityofLifehacksforDiscord {
        getName() { return "Quality of Life hacks for Discord"; }
        getDescription() { return "Removes some annoyances from discord's context menu"; }
        getVersion() { return "0.3"; }
        getAuthor() { return "Superpowers04"; }
        constructor () {
        }
        load() {}

        start() {
            document.addEventListener("contextmenu", this.contextEvent = e => this.onContextMenu(e));
        }
        onContextMenu(e) {
            var contexserc = "div.item-1Yvehc" //div.da-item
            var contexarry = $( contexserc )
            var contexarryLength = contexarry.Length
            for (var i = 0; i < 4; i++) {
                
                if (contexarry[i].innerText == "Call") {
                    $( contexserc )[i].outerHTML = "";  
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
            for (var i = 0; i < contexarry.Length; i++) {
                $( contexserc )[i].outerHTML = "";
            }        
            var contexserc = "div.itemSubMenu-1vN_Yn" //da-itemSubMenu
            var contexarry = $( contexserc )
            var contexarryLength = $( "div.da-itemSubMenu" ).Length

            if ($( contexserc )[0].outerText == "Invite to Server") {
                $( contexserc )[0].outerHTML = "";
                    
            };
            // if ($( contexserc )[1].outerText == "Invite to Server") {
            //     $( contexserc )[1].outerHTML = "";
                    
            // };
                // if (contexarry[i].innerHTML()) return;
        }

        stop() {
            
            document.removeEventListener("contextmenu", this.contextEvent);
        }
    }
})();
