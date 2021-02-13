'use strict';

const dgram = require("dgram");

class Dingzdevice {
	//instance?
	constructor (adapter,mac,ip,dip_config,has_pir){
		this.name = adapter.name;
		this.instance = adapter.instance;
		this.mac = mac;
		this.ip = ip;
		this.dip_config = dip_config;
		this.has_pir = has_pir;
		this.devicename = "DINGZ#" + this.mac;
	}
	log.silly(JSON.stringify(this);
	createDevice() {
		//instance?
		await this.name.instance.setObjectAsync(this.devicename, {
                type: "device",
                common: {
                    name: this.devicename
                },
                native: {}
            }); 
		
	}
	
	createDeviceInfo() {
		
		
	}
	
	createShades(){
		
	}
	
	createDimmers() {
		
		
	}
	createActions(){
		
	}
	
	createSensors(){
		
		
	}
	
	
}

// command: start/stop
class DingzListener {
	
	constructor(ad){
		this.ad = ad;
		this.name = ad.name;
		this.instance = ad.instance;
		this.configpath =	'system.adapter.'+this.name+'.'+this.instance;
		
	}
	// create udp server
	start() {
        this.devices = new Map();
        this.server = dgram.createSocket("udp4");
        this.server.on("error", err => {
            log.error("UDP listener error " + err);
        });
        this.server.on("message", (msg, rinfo) => {
            log.info("found " + msg + " from " + rinfo.address);
            if (msg.length == 8) {
                const mac = msg.subarray(0, 5);
                if (!this.devices.has(mac.toString())) {
                    const dingzID = msg[6];
                    if (dingzID == 108) {
                        this.devices.set(mac.toString(), rinfo);
                    }
                }
            }
			this.ad.log.info(JSON.stringify(this.devices));
        });
    }
    listen() {
        this.server.bind(7979);
    }
    stop() {
        this.server.close();
    }		
	update() {
		// transfer data into config object
		
		//read device data from config
		let var1 = getObject(this.configpath);
		let devicelist = var1.native.devices;
		this.ad.log.info(JSON.stringify(devicelist));
		this.ad.log.info(JSON.stringify(this.ad.config.native.devices));
		// system.adapter.dingz.0.native.url
		
	}	

	
}
exports.DingzListener = DingzListener;
exports.Dingzdevice = Dingzdevice; 