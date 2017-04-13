// Grove Indoor Environment Kit for Intel® Edison
// components API

// Load Mongoose OS GPIO API
load('api_gpio.js');
load('api_adc.js');

let Grove = {
  Button: {
    attach: function(pin, handler) {
      GPIO.set_button_handler(pin, GPIO.PULL_UP, GPIO.INT_EDGE_NEG, 50,
                              handler, true);
    },
  },
  _motionHandler: undefined,
  MotionSensor: {
    attach: function(pin, handler) {
      GPIO.set_mode(pin, GPIO.MODE_INPUT);
      GPIO.set_int_handler(pin, GPIO.INT_EDGE_POS, handler, null);
      GPIO.enable_int(pin);
      Grove._motionHandler = handler;
    },
  },
  LightSensor: {
    get: function(pin) {
      return ADC.read(pin);
    },
  },
  MoistureSensor: {
    get: function(pin) {
      return ADC.read(pin);
    },
  },
};
