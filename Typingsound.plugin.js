//META{"name":"typingSoundPlugin"}*//
var typingSoundPlugin = (_ => {
    return class typingSoundPlugin {
        getName() { return "typingSoundPlugin"; }
        getDescription() { return "Makes some sounds when typing"; }
        getVersion() { return "0.5"; }
        getAuthor() { return "Superpowers04, Recreation of Jiik's old one"; }

        constructor () { this.changelog = {};}
        load() {document.addEventListener("keydown", this.contextEvent = e => this.onkeydown(e));     }

        start() {}

        onkeydown(e){
        	var returncode = true;
    		var disabledkeys = [27,17,18,9,112,113,114,115,116,117,118,119,120,121,122,123]; // You can add custom keys to this array, https://keycode.info/ can be used to figure out what key corrasponds to which keycode under 'event.which'
    		for (var i = 0; i < disabledkeys.length; i++) {
    			if (e.keyCode == disabledkeys[i]) return;
    		}
       		if(e.keyCode == 8) {
       			//Change this to anything for backspace
	       		var tssound = new Audio();
				tssound.src = "https://cdn.discordapp.com/attachments/602366197740339215/699550591235653632/bs.wav";
				tssound.play();
			}
			else {
				var tssound = new Audio();
				//Change this to anything for normal typing
				tssound.src = "https://cdn.discordapp.com/attachments/602366197740339215/699550026313105418/ts4.wav";
				tssound.play();
			}
       	}
       	unload() {}
        stop() {document.removeEventListener("keydown", this.contextEvent);}
    }
})();
