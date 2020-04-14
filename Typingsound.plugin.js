//META{"name":"typingSoundPlugin"}*//

// var typingSoundPlugin = (_ => { 
// 	return typingSoundPlugin() {
// 		load() {
// 			if($("#tsp-ts").length) return;
// 			$("head").append('<audio id="tsp-ts"><source src="https://betterdiscord.net/stuff/ts4.wav"></audio>');
// 			this.ts = $("#tsp-ts");
// 			if($("#tsp-bs").length) return;
// 			$("head").append('<audio id="tsp-bs"><source src="https://betterdiscord.net/stuff/bs.wav"></audio>');
// 			this.bs = $("#tsp-bs");
// 		}

// 		unload() {
// 			$("#tsp-ts").remove();
// 			$("#tsp-bs").remove();
// 		}

// 		start() {
// 			var self = this;
// 			docuemnt.addEventListener(this, textarea, "keydown"{
// 				self.ts.trigger("pause");
// 				self.bs.trigger("pause");
// 				self.ts.prop("currentTime", 0);
// 				self.bs.prop("currentTime", 0);
// 				self.ts.trigger("play");
// 		    }
// 			$(document).on("keypress.ts", function(e) {
// 				self.ts.trigger("pause");
// 				self.bs.trigger("pause");
// 				self.ts.prop("currentTime", 0);
// 				self.bs.prop("currentTime", 0);
// 				self.ts.trigger("play");
// 			});

// 			$(document).on("keydown.ts", function(e) {
// 				if(e.keyCode == 8) {
// 					self.bs.trigger("pause");
// 					self.bs.prop("currentTime", 0);
// 					self.bs.trigger("play");
// 					return;
// 				}
// 			});
// 		};

// 		stop() {
// 			$(document).off("keypress.ts");
// 			$(document).off("keydown.ts");
// 		};
// 	}
// };
var typingSoundPlugin = (_ => {
    return class typingSoundPlugin {
        getName() { return "typingSoundPlugin"; }
        getDescription() { return "typingSoundPlugin"; }
        getVersion() { return "0.4"; }
        getAuthor() { return "Superpowers04"; }

        constructor () { this.changelog = {};}
        load() {
		document.addEventListener("keydown", this.contextEvent = e => this.onkeydown(e));}

        start() {
        
        }
        onkeydown(e){
       		//console.log("Key pressed");
       		if(e.keyCode == 8) {
	       		var tssound = new Audio();
				tssound.src = "https://cdn.discordapp.com/attachments/602366197740339215/699550591235653632/bs.wav";
				tssound.play();
			}
			else {
				var tssound = new Audio();
				tssound.src = "https://cdn.discordapp.com/attachments/602366197740339215/699550026313105418/ts4.wav";
				tssound.play();
			}
       	}

       	unload() {
            
          
        }
        stop() {document.removeEventListener("keydown", this.contextEvent);}
    }
})();