Module.register("helloworld", {
	// Default module config.
	defaults: {
		text: "Enchatress Mirror!"
	},

	getTemplate: function () {
		return "Enchatress Mirror.njk";
	},

	getTemplateData: function () {
		return this.config;
	}
});
