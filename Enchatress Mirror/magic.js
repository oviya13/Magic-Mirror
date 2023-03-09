Module.register("Enchatress Mirror", {
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