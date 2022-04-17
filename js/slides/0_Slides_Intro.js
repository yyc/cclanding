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

});

var lambda_endpoint = "https://j46mchgy76.execute-api.ap-southeast-1.amazonaws.com/default/climatecommons-post-question";

SLIDES.push({

	//id: "preloader",
	onstart: function(self){

		var o = self.objects;

		// Splash in background
		self.add({ id:"splash", type:"Splash" });

		// TITLE TEXT
		self.add({
			id:"logo", type:"ImageBox",
			x:350, y:-60,
			h: 250, w: 250,
			src: "assets/CC-logo-white.png"
		});
		self.add({
			id:"subtitle", type:"TextBox",
			x:152, y:170, width:650,
			align:"center", color:"#ddd", size:25,
			text_id:"subtitle"
		});

		self.add({
			id:"question_box", type:"TextareaBox",
			x:267, y: 355, width:420, h: 80,
			align:"center", color:"#fff", size:20,
			text_id:"placeholder"
		});

		// Button
		self.add({
			id:"submit_button", type:"Button", x:382, y:440,
			text_id:"submit",
			active:true
		});

		self.add({
			id:"insta", type:"ImageBox",
			x:470, y:500,
			h: 25, w: 25,
			src: "assets/instagram.png"
		});

		o.submit_button.config.onclick = ()=> {
			let question = o.question_box.dom.value;
			
			o.question_box.dom.disabled = true;
			fetch(lambda_endpoint, {
				method: "POST",
				mode: "cors",
				headers: {
					'Content-Type': 'application/json'
					// 'Content-Type': 'application/x-www-form-urlencoded',
				},
				body: JSON.stringify({"message": question})
			}).then(res => {
				o.submit_button.dom.disabled = true;
				o.submit_button.setText("thankyou");
			})

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