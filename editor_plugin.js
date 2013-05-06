(function() {
	tinymce.create('tinymce.plugins.ExpandButton', {
		init : function(ed, url) {
			ed.addButton('expandbutton', {
				title : 'Expand Section',
				image : url+'/expand.png',
				onclick : function() {
          var dom = ed.dom;
          var selection = ed.selection;
          var range = dom.createRng();

          range.setStartBefore(dom.getParent(selection.getStart(), dom.isBlock));
          range.setEndAfter(dom.getParent(selection.getEnd(), dom.isBlock));

          var parentExpand = range.commonAncestorContainer;
          while(!(/\bexpand\b/.test(parentExpand.className) || /\bmceContentBody\b/.test(parentExpand.className))){
            parentExpand = parentExpand.parentElement;
          };
          try{
            if(/\bexpand\b/.test(parentExpand.className)){
              jQuery(parentExpand).children().each(
                (function(key, taco){
                  parentExpand.parentElement.insertBefore(taco, parentExpand);
                  this.counter -= 1;
                  if(this.counter <=0 ){
                    parentExpand.remove();
                  }
                }).bind({counter:parentExpand.children.length})
              );
            } else {
              var expandDiv = document.createElement('div');
              expandDiv.classList.add('expand');
              range.surroundContents(expandDiv);
            }
        } catch(err) {
          alert('You can not straddle the beginning or end of a expand section with another expand section!');
        };
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
