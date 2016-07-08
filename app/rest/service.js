import Ember from 'ember';

var keysFunc = Object.keys || Ember.keys;

const {
  Service,
  A : emberA,
  isNone,
  RSVP,
  $ : ember$,
  get
  } = Ember;


/**
 * Implements the basic Get, Put, Post, Delete
 *
 * TODO: Implement a handleResponse method to override.
 *
 */
export default Service.extend({

  namespace: undefined,

  contentType: "application/json; charset=utf-8",

  buildUrl: function (path) {
    if (path.toLowerCase().substr(0, 4) === "http") {
      return path;
    }

    var url = emberA();
    var namespace = this.get("namespace");
    var host = this.get("host");

    if (host) {
      url.push(host);
    }
    if (namespace) {
      url.push(namespace);
    }
    if (path) {
      url.push(path);
    }

    url = url.join("/");
    if (isNone(host) && url) {
      url = "/" + url;
    }

    return url;
  },

  "getRequest": function (path, options) {
    var requestType = "GET";
    options = options || {};

    var url = this.buildUrl(path, requestType, options);

    return this.ajax(requestType, url, options);
  },

  "getJson": function (path, options) {
    var requestType = "GET";
    options = options || {};

    var url = this.buildUrl(path, requestType, options);

    return this.ajax(requestType, url, options);
  },

  /**
   * PUT Function
   *
   * Options respects
   *     error: function(resolve, reject, jqXHR, textStatus, errorThrown);
   *     success: function(resolve, reject, data, textStatus, jqXHR);
   * @param path
   * @param data
   * @param options
   * @returns {exports.Promise}
   */
  "putJson": function (path, data, options) {
    var requestType = "PUT";
    options = options || {};
    options.data = data;

    var url = this.buildUrl(path, requestType, options);

    return this.ajax(requestType, url, options);
  },

  /**
   * Post Function
   *
   * Options respects
   *     error: function(resolve, reject, jqXHR, textStatus, errorThrown);
   *     success: function(resolve, reject, data, textStatus, jqXHR);
   * @param path
   * @param data
   * @param options
   * @returns {exports.Promise}
   */
  "postJson": function (path, data, options) {
    var requestType = "POST";
    options = options || {};
    options.data = data;

    var url = this.buildUrl(path, options);

    return this.ajax(requestType, url, options);
  },

  /**
   * Delete Function
   *
   * Options respects
   *     error: function(resolve, reject, jqXHR, textStatus, errorThrown);
   *     success: function(resolve, reject, data, textStatus, jqXHR);
   * @param path
   * @param data
   * @param options
   * @returns {exports.Promise}
   */
  "deleteJson": function (path, data, options) {
    var requestType = "DELETE";
    options = options || {};
    options.data = data;

    var url = this.buildUrl(path, requestType, options);

    return this.ajax(requestType, url, options);
  },

  ajaxOptions: function (url, type, options) {
    var hash = options || {};

    hash.url = url;
    hash.type = type;
    hash.dataType = options.dataType || 'json';
    hash.context = this;

    if (hash.data && type !== 'GET') {
      hash.contentType = options.contentType || this.get("contentType");
      hash.data = JSON.stringify(hash.data);
    }

    var headers = get(this, 'headers');
    if (headers !== undefined) {
      hash.beforeSend = function (xhr) {
        forEach.call(keysFunc(headers), function (key) {
          xhr.setRequestHeader(key, headers[key]);
        });
      };
    }

    return hash;
  },

  ajax: function (verb, url, options) {
    var self = this;

    return new RSVP.Promise(function (resolve, reject) {
      var hash = self.ajaxOptions(url, verb, options);

      hash.success = function (payload) {
        resolve(payload);
      };

      hash.error = function (jqXHR, textStatus, errorThrown) {
        var error = new Error(textStatus);
        error.jqXHR = jqXHR;
        error.cause = errorThrown;
        reject(error);
      };

      ember$.ajax(hash);
    });

  }

});
