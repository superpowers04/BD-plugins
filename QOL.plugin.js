//META{"name":"QualityofLifehacksforDiscord","website":"https://github.com/superpowers04/BD-plugins/","source":"https://raw.githubusercontent.com/superpowers04/BD-plugins/master/QOL.plugin.js"}*//

var QualityofLifehacksforDiscord = (_ => {
    return class QualityofLifehacksforDiscord {
        getName() { return "Quality of Life hacks for Discord"; }
        getDescription() { return "Removes some annoyances from discord's context menu"; }
        getVersion() { return "0.4"; }
        getAuthor() { return "Superpowers04"; }
        constructor () {
        }
        load() {}

        start() {
            document.addEventListener("contextmenu", this.contextEvent = e => this.onContextMenu(e));
        }
        onContextMenu(e) {
             //da-itemSubMenu
            var contexitem = "div.item-1Yvehc" //div.da-item
            // var contexitemarry = $( contexitem )
            
            var contexsubm = "div.itemSubMenu-1vN_Yn"
            var contexsubmarry = $( contexsubm )
            // var contexitemarryLength = contexitemarry.Length
            // var contexsubmarryLength = $( contexsubm ).Length

            //Remove Call button
            for (var i = 0; i < $(contexitem).length; i++) {
                if ( $( contexitem )[i]) {
                    if ($( contexitem )[i].innerText == "Call") {
                        $( contexitem )[i].outerHTML = "";  
                        i--
                    };
                };
                // if (contexitemarry[i].innerText == "Profile") {
                //     if ($("disabled-2xniQf")[0].innerText == "Mark As Read") {
                //         $("disabled-2xniQf")[i].outerHTML = "";
                //     }
                // };
            }   
            //Remove Invite to Server dropdown
            if ($( contexsubm )[0].outerText == "Invite to Server") {
                $( contexsubm )[0].outerHTML = "";
                    
            };
        }

        stop() {
            
            document.removeEventListener("contextmenu", this.contextEvent);
        }
    }
})();
