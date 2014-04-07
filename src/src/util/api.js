define(['src/util/datatraversing', 'src/util/actionmanager'], function(Traversing, ActionManager) {

	var allScripts = [];
	var variableFilters;
	var viewLocked = false;

	function setVarFilter( name, element, filter ) {

		var self = this;

		if( ! filter ) {
			self.getRepositoryData().set( name, element );
			return;
		}

		require( [ filter ], function( filterFunction ) {

			self.getRepositoryData( ).set( name, filterFunction( element ) );
		} );
	}

	function setVar( name, element, jpath, filter ) {

		var self = this;
		self.repositoryData.set(name, null);

		switch( typeof element ) {
			case 'string':
				element = new DataObject( { type: "string", value: element } );
			break;
			case 'number':
				element = new DataObject( { type: "number", value: element } );
			break;
		}

		if( element && element.getChild ) {
			element.getChild( jpath, true ).done( function( returned ) {

				setVarFilter.call( self, name, returned, filter );
			} );	

		} else {
			console.warn("Vartiable " + name + " could not be set. Method getChild does not exist.")
			console.log( element );
			console.trace();
		}
	}

	function setHighlight( element, value ) {
            
            if(!element)
                return;
            
            if(element instanceof Array) {
                element = {_highlight:element};
            }

		if( typeof element._highlight == "undefined" ) {
			return;	
		}
		
		this.repositoryHighlights.set( element._highlight, value );
	}

	function setHighlightId( id, value ) {
		this.repositoryHighlights.set(id, value);
	}



	return {

		getRepositoryData: function() {
			return this.repositoryData;
		},

		setRepositoryData: function(repo) {
			this.repositoryData = repo;
		},

		getRepositoryHighlights: function() {
			return this.repositoryHighlights;
		},

		setRepositoryHighlights: function(repo) {
			this.repositoryHighlights = repo;
		},

		getRepositoryActions: function() {
			return this.repositoryActions;
		},

		setRepositoryActions: function(repo) {
			this.repositoryActions = repo;
		},

		setVar: setVar,
		setVariable: setVar,
		resetVariables: function() {
			this.repositoryData.reset();
		},

		getVar: function(name) {
			var data = this.repositoryData.get(name);
			if(data && data[1]) {
				return data[1];
			}
			return new DataObject({type:"undefined", value:undefined});
		},

		listenHighlight: function() {

			if( ! arguments[ 0 ] || typeof arguments[ 0 ]._highlight == "undefined" ) {
				return;
			}

			arguments[ 0 ] = arguments[ 0 ]._highlight;
			this.repositoryHighlights.listen.apply(this.repositoryHighlights, arguments);
		},

		killHighlight: function() {
			this.repositoryHighlights.kill.apply( this.repositoryHighlights, arguments );
		},

		highlight: setHighlight,
		highlightId: setHighlightId,
		setHighlight: setHighlight,

		doAction: function(key, value) {
			this.repositoryActions.set(key, value);	
		},

		executeAction: function(name, value) {

			ActionManager.execute( name, value );
		},

		getAllFilters: function( ) {

			return variableFilters;
		},

		setAllFilters: function( filters ) {
			variableFilters = filters;
		},

		viewLock: function() {
			viewLocked = true;
		},

		isViewLocked: function() {
			return viewLocked;
		}
	}
});