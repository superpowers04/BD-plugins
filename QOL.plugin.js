//META{"name":"QualityofLifehacksforDiscord","website":"https://github.com/superpowers04/BD-plugins/","source":"https://raw.githubusercontent.com/superpowers04/BD-plugins/master/QOL.plugin.js"}*//
var QualityofLifehacksforDiscord = (_ => {
    return class QualityofLifehacksforDiscord {
        getName() { return "Quality of Life hacks for Discord"; }
        getDescription() { return "Removes some annoyances from discord's context menu"; }
        getVersion() { return "0.5"; }
        getAuthor() { return "Superpowers04"; }
        constructor () {
        }
        load() {}

        start() {
            document.addEventListener("contextmenu", this.contextEvent = e => this.onContextMenu(e));
        }
        onContextMenu(e) {
            var contexitem = "div.item-1Yvehc"
            
            var contexsubm = "div.itemSubMenu-1vN_Yn"
            var contexsubmarry = $( contexsubm )
            //Remove Call button
            for (var i = 0; i < $(contexitem).length; i++) {
                if ( $( contexitem )[i]) {
                    if ($( contexitem )[i].id == "Call" || $( contexitem )[i].id == "通話" ) {
                        $( contexitem )[i].outerHTML = "";  
                        i--
                    };
                };
            }   
            //Remove Invite to Server dropdown
            if ($( contexsubm )[0].id == "user-context-invite-to-server") {
                $( contexsubm )[0].outerHTML = "";
                    
            };
        }

        stop() {
            document.removeEventListener("contextmenu", this.contextEvent);
        }
    }
})();
