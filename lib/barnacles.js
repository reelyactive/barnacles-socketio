/**
 * Copyright reelyActive 2019-2021
 * We believe in an open Internet of Things
 */


const socketio = require('socket.io');


const DEFAULT_PORT = 3001;


/**
 * BarnaclesSocketIO Class
 * Detects events and sends notifications.
 */
class BarnaclesSocketIO {

  /**
   * BarnaclesSocketIO constructor
   * @param {Object} options The options as a JSON object.
   * @constructor
   */
  constructor(options) {
    options = options || {};

    // Use the provided socket.io instance
    if(options.io) {
      this.io = options.io;
    }

    // Use the provided server
    else if(options.server) {
      this.io = socketio(options.server);
    }

    // Have socket.io create a new server on the given port
    else {
      let port = options.port || DEFAULT_PORT;
      this.io = socketio();
      this.io.listen(port);
    }
  }

  /**
   * Handle an outbound raddec.
   * @param {Raddec} raddec The outbound raddec.
   */
  handleRaddec(raddec) {
    this.io.emit('raddec', raddec);
  }
}


module.exports = BarnaclesSocketIO;
