(function() {
	tinymce.create('tinymce.plugins.ExpandButton', {
		init : function(ed, url) {
			ed.addButton('expandbutton', {
				title : 'Expand Section',
				image : url+'/expand.png',
				onclick : function() {
				  // TODO: This needs to be a toggle on/off
				  ed.formatter.register('expandformat', {
				    inline: 'div',
				    classes: 'expand'
				  });

				  ed.formatter.toggle('expandformat');
				}
			});
		},
		createControl : function(n, cm) {
			return null;
		},
		getInfo : function() {
			return {
				longname : "Expand Button",
				author : 'Joshua Rose',
				authorurl : 'http://marketing.uoregon.edu/',
				infourl : 'http://marketing.uoregon.edu/',
				version : "1.0"
			};
		}
	});
	tinymce.PluginManager.add('expandbutton', tinymce.plugins.ExpandButton);
})();