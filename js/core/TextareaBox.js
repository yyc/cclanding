function TextareaBox(config){

	var self = this;
	self.id = config.id;

	// Create DOM
	self.dom = document.createElement('TEXTAREA');
	self.dom.className = "object";
	self.dom.classList.add("textbox");
	if(config.required)  {
		self.dom.required = true;
	}

	self.dom.placeholder = Words.get(config.text_id)

	if(config.onchange) {
		self.dom.onchange = config.onchange;
	}

	console.log("textarea")

	// Customize
	_configText(config, self.dom);

	self.setTextID = function(id){
		self.dom.placeholder = Words.get(id)
	};


	// Add & Remove
	self.add = function(){ _add(self); };
	self.remove = function(){ _remove(self); };


}