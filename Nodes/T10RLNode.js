'use strict';

let eventEmitter = require('../lib/lutronEvents.js');
let lutronEmitter = eventEmitter.lutronEmitter;

const nodeDefId = 'T10RL';

module.exports = function(Polyglot) {
  const logger = Polyglot.logger;

  const T10RLButtonNode = require('./T10RLButtonNode.js')(Polyglot);

  class T10RLNode extends Polyglot.Node {
    constructor(polyInterface, primary, address, name) {
      super(nodeDefId, polyInterface, primary, address, name);

      this.hint = '0x01020900'; // Example for a Dimmer switch

      this.commands = {
        QUERY: this.query,
      };

      this.drivers = {
        ST: {value: '1', uom: 2},
        GPV: {value: '15', uom: 25},
      };

      this.lutronId = this.address.split('_')[1];
      this.setDriver('ST', 1, true, true);
      this.setDriver('GPV', 15, true, true);
      
      // T5RL Has 12 Scene Buttons
      for (let button = 1; button <= 12; button++) {
        this._address = this.address + '_' + button;
        const result = this.polyInterface.addNode(
          new T10RLButtonNode(this.polyInterface, this.address,
            this._address, 'Scene ' + button)
        );
      }      
    }

    query() {
      // lutronEmitter.emit('query', this.lutronId);
      this.setDriver('ST', 1);
      this.setDriver('GPV', 15);
    }
  }

  // Required so that the interface can find this Node class using the nodeDefId
  T10RLNode.nodeDefId = nodeDefId;

  return T10RLNode;
};
