define( [ 'modules/default/defaultcontroller', 'src/util/api', 'src/util/versioning' ], function( Default, API, Versioning ) {
	
	/**
	 * Creates a new empty controller
	 * @class Controller
	 * @name Controller
	 * @constructor
	 */
	function controller() { };

	// Extends the default properties of the default controller
	controller.prototype = $.extend( true, {}, Default );


	/*
		Information about the module
	*/
	controller.prototype.moduleInformation = {
		moduleName: "Drag and drop",
		description: 'Drop a file or some content to load',
		author: 'Norman Pellet',
		date: '24.12.2013',
		license: 'MIT',
		cssClass: 'dragdrop'
	};
	


	/*
		Configuration of the input/output references of the module
	*/
	controller.prototype.references = {
		'file': {
			label: 'The dropped file',
			type: 'object'
		},

		'data': {
			label: 'The data of the dropped file'
		}
	};


	/*
		Configuration of the module for sending events, as a static object
	*/
	controller.prototype.events = {

		// List of all possible events
		'onDropped': {
			label: 'A file has been dropped',
			//refVariable: [ 'file' ],
			//refAction: [ 'file' ]
		},

		'onRead': {
			label: 'The file has been read',
			refVariable: [ /*'file',*/ 'data' ],
			//refAction: [ 'file', 'data' ]
		}
	};
	

	/*
		Configuration of the module for receiving events, as a static object
		In the form of 
	*/
	controller.prototype.variablesIn = [ ];

	/*
		Received actions
	*/
	controller.prototype.actionsIn = { };
	
		
	controller.prototype.configurationStructure = function(section) {
		
		return {
			groups: {
				group: {
					options: {
						type: 'list'
					},

					fields: {
					
						label: {
							type: 'text',
							title: 'Displayed text'
						}/*,

						filter: {
							type: 'jscode',
							title: 'Result data filter'
						}*/
					}
				},

				vars: {

					options: {
						type: 'table',
						multiple: true
					},

					fields: {

						extension: {
							type: "text",
							title: "File extension"
						},
						
						filetype: {
							type: "combo",
							title: "Read type",
							options: [{ title: "Text", key: "text"}, { title: "Base64 Encoded", key: "base64"}, { title: "Binary", key: "binary"} ]
						},

						type: {
							type: "text",
							title: "Force type"
						},

						variable: {
							type: "text",
							title: "Temporary variable"	
						}
					}
				}
			}
		};	
	};


	controller.prototype.configAliases = {
		'vartype': [ 'groups', 'group', 0, 'vartype', 0 ],
		'label': [ 'groups', 'group', 0, 'label', 0 ],
		//'filter': [ 'groups', 'group', 0, 'filter', 0 ],
		'vars': [ 'groups', 'vars', 0 ]
	};



	/**
	 *	Initializes the controller by setting the FileReader and setting the variable
	 *	after the read is done
	 */
	controller.prototype.init = function() {

		var self = this;
		this.reader = new FileReader();
		this.reader.onload = function(e) {

			var obj = e.target.result;
			if( self.lineCfg.type === "array" || self.lineCfg.type === "object" ) {

				try {
					obj = JSON.parse( obj, Versioning.getViewHandler( ).reviver );
				} catch( _ ) {

				}
			}

			obj = new DataObject({ type: self.lineCfg.type, value: obj }, true);
                        self.tmpVar(self.lineCfg.variable, obj);
			self.leased = false;
		};

		this.reader.onerror = function(e) {
			console.error(e);
			self.leased = false;
		};
	};


	/**
	 *	Called after a file is dropped
	 *
	 *	@param {File} file The dropped file
	 */
	controller.prototype.onDropped = function( file ) {

		//self.controller.fileReceived( obj );

		var ext = file.name.split( '.' ).pop(),
			cfg = this.module.getConfiguration('vars'),
			lineCfg;
                if(!cfg)
                    return console.warn("No extension configured");
		this.leased = true;
		for( var i = 0, l = cfg.length ; i < l ; i ++ ) {
			if( cfg[ i ].extension === ext) {
				this.lineCfg = lineCfg = cfg[ i ];
				break;
			}
		}

		if( ! lineCfg ) {
			return console.warn("Extension "+ext+" not configured");
		}
                
		switch( lineCfg.filetype ) {

			case 'text':
				this.reader.readAsText( file );
			break;

			case 'base64':
				this.reader.readAsDataURL( file );
			break;

			case 'binary':
				this.reader.readAsBinary( file );
			break;
		}
	};
        
        controller.prototype.tmpVar = function(name, obj) {
            this.module.model.tmpVars[name] = obj;
            this.setVarFromEvent('onRead', this.module.model.tmpVars, 'data');
        };

 	return controller;
});
