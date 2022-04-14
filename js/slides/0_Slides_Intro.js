/********************

0. Introduction
1. One Game
2. Repeated Game
3. One Tournament
4. Repeated Tournament
5. Making Mistaeks
6. Sandbox
7. Conclusion
X. Credits

Labels should be in the en.html folder

*********************/

Loader.addToManifest(Loader.manifest,{

	// CSS ASSETS
	cssAsset0: "assets/ui/button.png",
	cssAsset1: "assets/ui/button_short.png",
	cssAsset2: "assets/ui/button_long.png",
	cssAsset3: "assets/ui/sandbox_tabs.png",
	cssAsset4: "assets/ui/sandbox_incdec.png",
	cssAsset5: "assets/ui/slider_bg.png",
	cssAsset6: "assets/ui/slider_knob.png",
	cssAsset7: "assets/ui/sandbox_hats.png",
	cssAsset8: "assets/ui/scratch.png",
	cssAsset9: "assets/iterated/iterated_scoreboard.png",
	cssAsset10: "assets/tournament/peep_characters.png",
	cssAsset11: "assets/ui/sandbox_hats.png",
	cssAsset12: "assets/tournament/score_small.png",

	// Music!
	bg_music: "assets/sounds/bg_music.mp3",

	// IMAGE BOXES
	image1: "assets/evolution/evolution_intro.png",
	image2: "assets/conclusion/summary.png",
	image3: "assets/conclusion/truce.jpg",

});

SLIDES.push({

	//id: "preloader",
	onstart: function(self){

		var o = self.objects;

		// Splash in background
		self.add({ id:"splash", type:"Splash" });

		// TITLE TEXT
		self.add({
			id:"title", type:"TextBox",
			x:130, y:80, width:700,
			size:80, lineHeight:0.9, align:"center",
			text_id:"title"
		});
		self.add({
			id:"subtitle", type:"TextBox",
			x:267, y:240, width:420,
			align:"center", color:"#ddd", size:15,
			text_id:"subtitle"
		});

		self.add({
			id:"question", type:"TextBox",
			x:267, y: 290, width:420,
			align:"center", color:"#ddd", size:15,
			text_id:"question"
		});
		self.add({
			id:"question_box", type:"TextareaBox",
			x:267, y: 340, width:420, h: 80,
			align:"center", color:"#fff", size:15,
			text_id:"placeholder"
		});

		// Button
		self.add({
			id:"submit_button", type:"Button", x:382, y:430,
			text_id:"submit",
			active:true
		});
		o.submit_button.config.onclick = ()=> {
			alert(o.question_box.dom.value);
			publish("submit_form")
		}
	},
	onend: function(self){
		unlisten(self);
		self.remove("title");
		self.remove("subtitle");
		self.remove("loading_button");
	}

});

SLIDES.push({
	id: "intro",
	onjump: function(self){
		// Splash in background
		self.add({ id:"splash", type:"Splash" });
	},
	onstart: function(self){

		var o = self.objects;
		
		// Circular Wordbox
		self.add({
			id:"intro_text", type:"TextBox",
			x:130, y:10, width:700, height:500, align:"center",
			text_id:"intro"
		});

		// Button
		self.add({
			id:"intro_button", type:"Button", x:304, y:466, size:"long",
			text_id:"intro_button", 
			message:"slideshow/scratch"
		});

		_hide(o.intro_text); _fadeIn(o.intro_text, 200);
		_hide(o.intro_button); _fadeIn(o.intro_button, 700);

	},
	onend: function(self){
		self.clear();
	}

});