define(['modules/default/defaultview', 'forms/button', 'src/util/util', 'src/main/grid'], function(Default, Button, Util, Grid) {
	
	function view() {};
	view.prototype = $.extend(true, {}, Default, {

		init: function() {	

			var self = this,
				id = Util.getNextUniqueId(),
				done = false;

			this._id = id;

			this.dom = $('<div />', {  class: 'postit' }).css("font-family", this.module.getConfiguration("fontfamily")+", Arial");
			this.inside = $('<div>', { id: id, class: 'inside', contentEditable: 'true' }).bind('keyup', function() {

				if(self.instance) self.module.definition.text = self.instance.getData();
				self.module.getDomWrapper().height($(this).height() + 70);
				Grid.moduleResize(self.module);

				//console.log($(this).html());
			}).html(self.module.definition.text || '');
			
			require(['ckeditor'], function(CKEDITOR) {
				if(done)
					return;
				CKEDITOR.disableAutoInline = true;
				self.instance = CKEDITOR.inline(self._id, {
					extraPlugins:"mathjax"
				});
				done = true;
			});

			this.dom.html(this.inside);
			this.module.getDomContent().html(this.dom);

			
		},

		inDom: function() {
			
		},

		onResize: function() {},		
		blank: function() {},
		update: {

		},

		getDom: function() {
			return this.dom;
		},
		
		typeToScreen: {
			
		}
	});

	return view;
});