
goog.provide("node.crypto.Hmac.Buffer");

/**
 * @constructor
 */
node.crypto.Hmac.Buffer = function() {};

/**
 * @type {number|null}
 */
node.crypto.Hmac.Buffer.prototype.poolSize = null;

/**
 * @param {string} b
 */
node.crypto.Hmac.Buffer.prototype.isBuffer = function(b) {
  return node.crypto.Hmac.Buffer.core_.isBuffer.apply(node.crypto.Hmac.Buffer.core_, arguments);
};

/**
 *
 */
node.crypto.Hmac.Buffer.prototype.byteLength = function() {
  return node.crypto.Hmac.Buffer.core_.byteLength.apply(node.crypto.Hmac.Buffer.core_, arguments);
};


/**
 * @private
 * @type {*}
 */
node.crypto.Hmac.Buffer.core_ = require("crypto").Hmac.Buffer;