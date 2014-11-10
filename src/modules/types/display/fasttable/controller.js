define(['modules/types/display/jqgrid/controller'], function (Controller) {

    function ControllerExtended() {
    }

    ControllerExtended.prototype = new Controller();

    ControllerExtended.prototype.moduleInformation = {
        moduleName: 'Fast table',
        description: 'Displays a fast grid',
        author: 'Norman Pellet',
        date: '24.12.2013',
        license: 'MIT',
        cssClass: 'fasttable'
    };

    ControllerExtended.prototype.references.showList = {
        label: 'Array of display flags',
        type: 'array'
    };

    ControllerExtended.prototype.variablesIn.push('showList');
    ControllerExtended.prototype.actionsIn.toggleOff = 'Toggle row off';

    return ControllerExtended;
});