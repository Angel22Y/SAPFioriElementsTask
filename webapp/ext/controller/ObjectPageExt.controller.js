sap.ui.controller("dev.webapp.ext.controller.ObjectPageExt", {
	onInit: function () {
		this.extensionAPI.attachPageDataLoaded(function (oEvent) {
			sap.m.MessageToast.show(oEvent.context.getProperty("CategoryID"));
		});
	},

	onClickActionCategoriesHeader2: function (oEvent) {
		sap.m.MessageToast.show("Hello World!!");
	},
	onClickActionCategoriesSections1: function (oEvent) {
		this.getOwnerComponent().getModel().callFunction("/toActiveStatus",{
			method: "GET",
			success: function() {
				this.getView();
			}.bind(this),
			error: function() {
				sap.m.MessageToast.show("Error status!!!");
			}
		});                   
	}
});