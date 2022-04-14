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

	console.log("textarea")

	// Customize
	_configText(config, self.dom);

	// Add & Remove
	self.add = function(){ _add(self); };
	self.remove = function(){ _remove(self); };

}
console.log("is this even being created")