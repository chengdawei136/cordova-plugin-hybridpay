
var
    exec = require('cordova/exec')
;


var Pay = function() {
};

Pay.pay = function(pay_type, pay_param, successCallback, errorCallback) {
	if (!pay_param && !pay_type) {
		errorCallback && errorCallback("Please enter order information");
	} else {
		exec(successCallback, errorCallback, "Lyxpay", "pay", [pay_type, pay_param]);
	}
};

/*
 Keyboard.styleDark = function(dark) {
 exec(null, null, "Keyboard", "styleDark", [dark]);
 };
 */

module.exports = Pay;



