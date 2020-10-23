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
		var path = oEvent.getSource().getBindingContext().getPath() + "/StatusID";
		this.getOwnerComponent().getModel().callFunction("/toActiveStatus",{
			method: "GET",
			success: function() {
				var iStatusNew = 1,
					iStatusActive = 2;
					  
				var iPreviousStatus = this.getOwnerComponent().getModel().getProperty(path);
				
				if(iPreviousStatus !== iStatusNew){
					sap.m.MessageToast.show("Status is already in Active state");	
				}else {
					this.getOwnerComponent().getModel().setProperty(path, iStatusActive);
					this.getOwnerComponent().getModel().submitChanges();
					this.getOwnerComponent().getModel().refresh();
				}
			}.bind(this),
			error: function() {
				sap.m.MessageToast.show("Error status!!!");
			}
		});                   
	}
});