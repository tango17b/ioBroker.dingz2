'use strict';

/*
 * Created with @iobroker/create-adapter v1.31.0
 */

// The adapter-core module gives you access to the core ioBroker functions
// you need to create an adapter
const utils = require('@iobroker/adapter-core');
//const dd = require('./lib/dingzdevice.js');

// Load your modules here, e.g.:
// const fs = require("fs");

class Dingz2 extends utils.Adapter {



}

// @ts-ignore parent is a valid property on module
if (module.parent) {
    // Export the constructor in compact mode
    /**
     * @param {Partial<utils.AdapterOptions>} [options={}]
     */
    module.exports = (options) => new Dingz2(options);
} else {
    // otherwise start the instance directly
    new Dingz2();
}