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

var lambda_endpoint = "https://j46mchgy76.execute-api.ap-southeast-1.amazonaws.com/prod/climatecommons-post-question";

SLIDES.push({

	//id: "preloader",
	onstart: function(self){

		var o = self.objects;

		// Splash in background
		self.add({ id:"splash", type:"Splash" });

		// TITLE TEXT
		self.add({
			id:"logo", type:"ImageBox",
			x:355, y:-140,
			h: 250, w: 250,
			src: "assets/CC-logo-white.png"
		});
		self.add({
			id:"subtitle", type:"TextBox",
			x:95, y:110, width:750,
			align:"center", color:"#ddd", size:30,
			text_id:"subtitle"
		});

		self.add({
			id:"question_box", type:"TextareaBox",
			x:255, y: 329, width:450, h: 108,
			align:"center", color:"#fff",
			text_id:"placeholder"
		});

		// Button
		self.add({
			id:"submit_button", type:"Button", x:378, y:472,
			text_id:"submit",
			active:true
		});

		self.add({
			id:"insta_text", type:"TextBox",
			x:152, y:574,
			width:650,
			align:"center", color:"#fff", size:18,
			text_id:"insta_text"
		});
		o.insta_text.dom.classList.add("share")


		o.submit_button.config.onclick = ()=> {
			let question = o.question_box.dom.value;
			if(!question)  {
				 // do nothing if no question was entered
				 console.log("early returning")
				return;
			}
			o.question_box.dom.disabled = true;
			o.submit_button.config.active = false;
			fetch(lambda_endpoint, {
				method: "POST",
				mode: "cors",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({"message": question})
			}).then(res => {
				o.question_box.dom.disabled = false;
				o.question_box.setTextID("thankyou");
				o.question_box.dom.value = "";
			}).catch(err => {
				console.error(err)
				alert("Something went wrong when submitting your reponse! Please try again.")
				o.question_box.dom.disabled = false;
				o.submit_button.config.active = true;
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