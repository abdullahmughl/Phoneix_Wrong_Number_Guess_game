/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../deps/phoenix/priv/static/phoenix.js":
/*!**********************************************!*\
  !*** ../deps/phoenix/priv/static/phoenix.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (e, t) {
   true ? module.exports = t() : undefined;
}(this, function () {
  return function (e) {
    var t = {};

    function n(i) {
      if (t[i]) return t[i].exports;
      var o = t[i] = {
        i: i,
        l: !1,
        exports: {}
      };
      return e[i].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: i
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var i = Object.create(null);
      if (n.r(i), Object.defineProperty(i, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var o in e) n.d(i, o, function (t) {
        return e[t];
      }.bind(null, o));
      return i;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 0);
  }([function (e, t, n) {
    (function (t) {
      e.exports = t.Phoenix = n(2);
    }).call(this, n(1));
  }, function (e, t) {
    var n;

    n = function () {
      return this;
    }();

    try {
      n = n || new Function("return this")();
    } catch (e) {
      "object" == typeof window && (n = window);
    }

    e.exports = n;
  }, function (e, t, n) {
    "use strict";

    function i(e) {
      return function (e) {
        if (Array.isArray(e)) return a(e);
      }(e) || function (e) {
        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
      }(e) || s(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function o(e) {
      return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }

    function r(e, t) {
      return function (e) {
        if (Array.isArray(e)) return e;
      }(e) || function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
        var n = [],
            i = !0,
            o = !1,
            r = void 0;

        try {
          for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (n.push(s.value), !t || n.length !== t); i = !0);
        } catch (e) {
          o = !0, r = e;
        } finally {
          try {
            i || null == a.return || a.return();
          } finally {
            if (o) throw r;
          }
        }

        return n;
      }(e, t) || s(e, t) || function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function s(e, t) {
      if (e) {
        if ("string" == typeof e) return a(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0;
      }
    }

    function a(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];

      return i;
    }

    function c(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function u(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }

    function h(e, t, n) {
      return t && u(e.prototype, t), n && u(e, n), e;
    }

    n.r(t), n.d(t, "Channel", function () {
      return O;
    }), n.d(t, "Serializer", function () {
      return _;
    }), n.d(t, "Socket", function () {
      return H;
    }), n.d(t, "LongPoll", function () {
      return U;
    }), n.d(t, "Ajax", function () {
      return D;
    }), n.d(t, "Presence", function () {
      return M;
    });

    var l = "undefined" != typeof self ? self : null,
        f = "undefined" != typeof window ? window : null,
        d = l || f || void 0,
        p = 0,
        v = 1,
        y = 2,
        m = 3,
        g = "closed",
        k = "errored",
        b = "joined",
        j = "joining",
        T = "leaving",
        C = "phx_close",
        R = "phx_error",
        E = "phx_join",
        w = "phx_reply",
        S = "phx_leave",
        A = "longpoll",
        L = "websocket",
        x = function (e) {
      if ("function" == typeof e) return e;
      return function () {
        return e;
      };
    },
        P = function () {
      function e(t, n, i, o) {
        c(this, e), this.channel = t, this.event = n, this.payload = i || function () {
          return {};
        }, this.receivedResp = null, this.timeout = o, this.timeoutTimer = null, this.recHooks = [], this.sent = !1;
      }

      return h(e, [{
        key: "resend",
        value: function (e) {
          this.timeout = e, this.reset(), this.send();
        }
      }, {
        key: "send",
        value: function () {
          this.hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
            topic: this.channel.topic,
            event: this.event,
            payload: this.payload(),
            ref: this.ref,
            join_ref: this.channel.joinRef()
          }));
        }
      }, {
        key: "receive",
        value: function (e, t) {
          return this.hasReceived(e) && t(this.receivedResp.response), this.recHooks.push({
            status: e,
            callback: t
          }), this;
        }
      }, {
        key: "reset",
        value: function () {
          this.cancelRefEvent(), this.ref = null, this.refEvent = null, this.receivedResp = null, this.sent = !1;
        }
      }, {
        key: "matchReceive",
        value: function (e) {
          var t = e.status,
              n = e.response;
          e.ref;
          this.recHooks.filter(function (e) {
            return e.status === t;
          }).forEach(function (e) {
            return e.callback(n);
          });
        }
      }, {
        key: "cancelRefEvent",
        value: function () {
          this.refEvent && this.channel.off(this.refEvent);
        }
      }, {
        key: "cancelTimeout",
        value: function () {
          clearTimeout(this.timeoutTimer), this.timeoutTimer = null;
        }
      }, {
        key: "startTimeout",
        value: function () {
          var e = this;
          this.timeoutTimer && this.cancelTimeout(), this.ref = this.channel.socket.makeRef(), this.refEvent = this.channel.replyEventName(this.ref), this.channel.on(this.refEvent, function (t) {
            e.cancelRefEvent(), e.cancelTimeout(), e.receivedResp = t, e.matchReceive(t);
          }), this.timeoutTimer = setTimeout(function () {
            e.trigger("timeout", {});
          }, this.timeout);
        }
      }, {
        key: "hasReceived",
        value: function (e) {
          return this.receivedResp && this.receivedResp.status === e;
        }
      }, {
        key: "trigger",
        value: function (e, t) {
          this.channel.trigger(this.refEvent, {
            status: e,
            response: t
          });
        }
      }]), e;
    }(),
        O = function () {
      function e(t, n, i) {
        var o = this;
        c(this, e), this.state = g, this.topic = t, this.params = x(n || {}), this.socket = i, this.bindings = [], this.bindingRef = 0, this.timeout = this.socket.timeout, this.joinedOnce = !1, this.joinPush = new P(this, E, this.params, this.timeout), this.pushBuffer = [], this.stateChangeRefs = [], this.rejoinTimer = new N(function () {
          o.socket.isConnected() && o.rejoin();
        }, this.socket.rejoinAfterMs), this.stateChangeRefs.push(this.socket.onError(function () {
          return o.rejoinTimer.reset();
        })), this.stateChangeRefs.push(this.socket.onOpen(function () {
          o.rejoinTimer.reset(), o.isErrored() && o.rejoin();
        })), this.joinPush.receive("ok", function () {
          o.state = b, o.rejoinTimer.reset(), o.pushBuffer.forEach(function (e) {
            return e.send();
          }), o.pushBuffer = [];
        }), this.joinPush.receive("error", function () {
          o.state = k, o.socket.isConnected() && o.rejoinTimer.scheduleTimeout();
        }), this.onClose(function () {
          o.rejoinTimer.reset(), o.socket.hasLogger() && o.socket.log("channel", "close ".concat(o.topic, " ").concat(o.joinRef())), o.state = g, o.socket.remove(o);
        }), this.onError(function (e) {
          o.socket.hasLogger() && o.socket.log("channel", "error ".concat(o.topic), e), o.isJoining() && o.joinPush.reset(), o.state = k, o.socket.isConnected() && o.rejoinTimer.scheduleTimeout();
        }), this.joinPush.receive("timeout", function () {
          o.socket.hasLogger() && o.socket.log("channel", "timeout ".concat(o.topic, " (").concat(o.joinRef(), ")"), o.joinPush.timeout), new P(o, S, x({}), o.timeout).send(), o.state = k, o.joinPush.reset(), o.socket.isConnected() && o.rejoinTimer.scheduleTimeout();
        }), this.on(w, function (e, t) {
          o.trigger(o.replyEventName(t), e);
        });
      }

      return h(e, [{
        key: "join",
        value: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.timeout;
          if (this.joinedOnce) throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");
          return this.timeout = e, this.joinedOnce = !0, this.rejoin(), this.joinPush;
        }
      }, {
        key: "onClose",
        value: function (e) {
          this.on(C, e);
        }
      }, {
        key: "onError",
        value: function (e) {
          return this.on(R, function (t) {
            return e(t);
          });
        }
      }, {
        key: "on",
        value: function (e, t) {
          var n = this.bindingRef++;
          return this.bindings.push({
            event: e,
            ref: n,
            callback: t
          }), n;
        }
      }, {
        key: "off",
        value: function (e, t) {
          this.bindings = this.bindings.filter(function (n) {
            return !(n.event === e && (void 0 === t || t === n.ref));
          });
        }
      }, {
        key: "canPush",
        value: function () {
          return this.socket.isConnected() && this.isJoined();
        }
      }, {
        key: "push",
        value: function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.timeout;
          if (t = t || {}, !this.joinedOnce) throw new Error("tried to push '".concat(e, "' to '").concat(this.topic, "' before joining. Use channel.join() before pushing events"));
          var i = new P(this, e, function () {
            return t;
          }, n);
          return this.canPush() ? i.send() : (i.startTimeout(), this.pushBuffer.push(i)), i;
        }
      }, {
        key: "leave",
        value: function () {
          var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.timeout;
          this.rejoinTimer.reset(), this.joinPush.cancelTimeout(), this.state = T;

          var n = function () {
            e.socket.hasLogger() && e.socket.log("channel", "leave ".concat(e.topic)), e.trigger(C, "leave");
          },
              i = new P(this, S, x({}), t);

          return i.receive("ok", function () {
            return n();
          }).receive("timeout", function () {
            return n();
          }), i.send(), this.canPush() || i.trigger("ok", {}), i;
        }
      }, {
        key: "onMessage",
        value: function (e, t, n) {
          return t;
        }
      }, {
        key: "isMember",
        value: function (e, t, n, i) {
          return this.topic === e && (!i || i === this.joinRef() || (this.socket.hasLogger() && this.socket.log("channel", "dropping outdated message", {
            topic: e,
            event: t,
            payload: n,
            joinRef: i
          }), !1));
        }
      }, {
        key: "joinRef",
        value: function () {
          return this.joinPush.ref;
        }
      }, {
        key: "rejoin",
        value: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.timeout;
          this.isLeaving() || (this.socket.leaveOpenTopic(this.topic), this.state = j, this.joinPush.resend(e));
        }
      }, {
        key: "trigger",
        value: function (e, t, n, i) {
          var o = this.onMessage(e, t, n, i);
          if (t && !o) throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");

          for (var r = this.bindings.filter(function (t) {
            return t.event === e;
          }), s = 0; s < r.length; s++) {
            r[s].callback(o, n, i || this.joinRef());
          }
        }
      }, {
        key: "replyEventName",
        value: function (e) {
          return "chan_reply_".concat(e);
        }
      }, {
        key: "isClosed",
        value: function () {
          return this.state === g;
        }
      }, {
        key: "isErrored",
        value: function () {
          return this.state === k;
        }
      }, {
        key: "isJoined",
        value: function () {
          return this.state === b;
        }
      }, {
        key: "isJoining",
        value: function () {
          return this.state === j;
        }
      }, {
        key: "isLeaving",
        value: function () {
          return this.state === T;
        }
      }]), e;
    }(),
        _ = {
      HEADER_LENGTH: 1,
      META_LENGTH: 4,
      KINDS: {
        push: 0,
        reply: 1,
        broadcast: 2
      },
      encode: function (e, t) {
        if (e.payload.constructor === ArrayBuffer) return t(this.binaryEncode(e));
        var n = [e.join_ref, e.ref, e.topic, e.event, e.payload];
        return t(JSON.stringify(n));
      },
      decode: function (e, t) {
        if (e.constructor === ArrayBuffer) return t(this.binaryDecode(e));
        var n = r(JSON.parse(e), 5);
        return t({
          join_ref: n[0],
          ref: n[1],
          topic: n[2],
          event: n[3],
          payload: n[4]
        });
      },
      binaryEncode: function (e) {
        var t = e.join_ref,
            n = e.ref,
            i = e.event,
            o = e.topic,
            r = e.payload,
            s = this.META_LENGTH + t.length + n.length + o.length + i.length,
            a = new ArrayBuffer(this.HEADER_LENGTH + s),
            c = new DataView(a),
            u = 0;
        c.setUint8(u++, this.KINDS.push), c.setUint8(u++, t.length), c.setUint8(u++, n.length), c.setUint8(u++, o.length), c.setUint8(u++, i.length), Array.from(t, function (e) {
          return c.setUint8(u++, e.charCodeAt(0));
        }), Array.from(n, function (e) {
          return c.setUint8(u++, e.charCodeAt(0));
        }), Array.from(o, function (e) {
          return c.setUint8(u++, e.charCodeAt(0));
        }), Array.from(i, function (e) {
          return c.setUint8(u++, e.charCodeAt(0));
        });
        var h = new Uint8Array(a.byteLength + r.byteLength);
        return h.set(new Uint8Array(a), 0), h.set(new Uint8Array(r), a.byteLength), h.buffer;
      },
      binaryDecode: function (e) {
        var t = new DataView(e),
            n = t.getUint8(0),
            i = new TextDecoder();

        switch (n) {
          case this.KINDS.push:
            return this.decodePush(e, t, i);

          case this.KINDS.reply:
            return this.decodeReply(e, t, i);

          case this.KINDS.broadcast:
            return this.decodeBroadcast(e, t, i);
        }
      },
      decodePush: function (e, t, n) {
        var i = t.getUint8(1),
            o = t.getUint8(2),
            r = t.getUint8(3),
            s = this.HEADER_LENGTH + this.META_LENGTH - 1,
            a = n.decode(e.slice(s, s + i));
        s += i;
        var c = n.decode(e.slice(s, s + o));
        s += o;
        var u = n.decode(e.slice(s, s + r));
        return s += r, {
          join_ref: a,
          ref: null,
          topic: c,
          event: u,
          payload: e.slice(s, e.byteLength)
        };
      },
      decodeReply: function (e, t, n) {
        var i = t.getUint8(1),
            o = t.getUint8(2),
            r = t.getUint8(3),
            s = t.getUint8(4),
            a = this.HEADER_LENGTH + this.META_LENGTH,
            c = n.decode(e.slice(a, a + i));
        a += i;
        var u = n.decode(e.slice(a, a + o));
        a += o;
        var h = n.decode(e.slice(a, a + r));
        a += r;
        var l = n.decode(e.slice(a, a + s));
        a += s;
        var f = e.slice(a, e.byteLength);
        return {
          join_ref: c,
          ref: u,
          topic: h,
          event: w,
          payload: {
            status: l,
            response: f
          }
        };
      },
      decodeBroadcast: function (e, t, n) {
        var i = t.getUint8(1),
            o = t.getUint8(2),
            r = this.HEADER_LENGTH + 2,
            s = n.decode(e.slice(r, r + i));
        r += i;
        var a = n.decode(e.slice(r, r + o));
        return r += o, {
          join_ref: null,
          ref: null,
          topic: s,
          event: a,
          payload: e.slice(r, e.byteLength)
        };
      }
    },
        H = function () {
      function e(t) {
        var n = this,
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        c(this, e), this.stateChangeCallbacks = {
          open: [],
          close: [],
          error: [],
          message: []
        }, this.channels = [], this.sendBuffer = [], this.ref = 0, this.timeout = i.timeout || 1e4, this.transport = i.transport || d.WebSocket || U, this.defaultEncoder = _.encode.bind(_), this.defaultDecoder = _.decode.bind(_), this.closeWasClean = !1, this.unloaded = !1, this.binaryType = i.binaryType || "arraybuffer", this.transport !== U ? (this.encode = i.encode || this.defaultEncoder, this.decode = i.decode || this.defaultDecoder) : (this.encode = this.defaultEncoder, this.decode = this.defaultDecoder), f && f.addEventListener && f.addEventListener("beforeunload", function (e) {
          n.conn && (n.unloaded = !0, n.abnormalClose("unloaded"));
        }), this.heartbeatIntervalMs = i.heartbeatIntervalMs || 3e4, this.rejoinAfterMs = function (e) {
          return i.rejoinAfterMs ? i.rejoinAfterMs(e) : [1e3, 2e3, 5e3][e - 1] || 1e4;
        }, this.reconnectAfterMs = function (e) {
          return n.unloaded ? 100 : i.reconnectAfterMs ? i.reconnectAfterMs(e) : [10, 50, 100, 150, 200, 250, 500, 1e3, 2e3][e - 1] || 5e3;
        }, this.logger = i.logger || null, this.longpollerTimeout = i.longpollerTimeout || 2e4, this.params = x(i.params || {}), this.endPoint = "".concat(t, "/").concat(L), this.vsn = i.vsn || "2.0.0", this.heartbeatTimer = null, this.pendingHeartbeatRef = null, this.reconnectTimer = new N(function () {
          n.teardown(function () {
            return n.connect();
          });
        }, this.reconnectAfterMs);
      }

      return h(e, [{
        key: "protocol",
        value: function () {
          return location.protocol.match(/^https/) ? "wss" : "ws";
        }
      }, {
        key: "endPointURL",
        value: function () {
          var e = D.appendParams(D.appendParams(this.endPoint, this.params()), {
            vsn: this.vsn
          });
          return "/" !== e.charAt(0) ? e : "/" === e.charAt(1) ? "".concat(this.protocol(), ":").concat(e) : "".concat(this.protocol(), "://").concat(location.host).concat(e);
        }
      }, {
        key: "disconnect",
        value: function (e, t, n) {
          this.closeWasClean = !0, this.reconnectTimer.reset(), this.teardown(e, t, n);
        }
      }, {
        key: "connect",
        value: function (e) {
          var t = this;
          e && (console && console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"), this.params = x(e)), this.conn || (this.closeWasClean = !1, this.conn = new this.transport(this.endPointURL()), this.conn.binaryType = this.binaryType, this.conn.timeout = this.longpollerTimeout, this.conn.onopen = function () {
            return t.onConnOpen();
          }, this.conn.onerror = function (e) {
            return t.onConnError(e);
          }, this.conn.onmessage = function (e) {
            return t.onConnMessage(e);
          }, this.conn.onclose = function (e) {
            return t.onConnClose(e);
          });
        }
      }, {
        key: "log",
        value: function (e, t, n) {
          this.logger(e, t, n);
        }
      }, {
        key: "hasLogger",
        value: function () {
          return null !== this.logger;
        }
      }, {
        key: "onOpen",
        value: function (e) {
          var t = this.makeRef();
          return this.stateChangeCallbacks.open.push([t, e]), t;
        }
      }, {
        key: "onClose",
        value: function (e) {
          var t = this.makeRef();
          return this.stateChangeCallbacks.close.push([t, e]), t;
        }
      }, {
        key: "onError",
        value: function (e) {
          var t = this.makeRef();
          return this.stateChangeCallbacks.error.push([t, e]), t;
        }
      }, {
        key: "onMessage",
        value: function (e) {
          var t = this.makeRef();
          return this.stateChangeCallbacks.message.push([t, e]), t;
        }
      }, {
        key: "onConnOpen",
        value: function () {
          this.hasLogger() && this.log("transport", "connected to ".concat(this.endPointURL())), this.unloaded = !1, this.closeWasClean = !1, this.flushSendBuffer(), this.reconnectTimer.reset(), this.resetHeartbeat(), this.stateChangeCallbacks.open.forEach(function (e) {
            return (0, r(e, 2)[1])();
          });
        }
      }, {
        key: "heartbeatTimeout",
        value: function () {
          this.pendingHeartbeatRef && (this.pendingHeartbeatRef = null, this.hasLogger() && this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), this.abnormalClose("heartbeat timeout"));
        }
      }, {
        key: "resetHeartbeat",
        value: function () {
          var e = this;
          this.conn && this.conn.skipHeartbeat || (this.pendingHeartbeatRef = null, clearTimeout(this.heartbeatTimer), setTimeout(function () {
            return e.sendHeartbeat();
          }, this.heartbeatIntervalMs));
        }
      }, {
        key: "teardown",
        value: function (e, t, n) {
          var i = this;
          if (!this.conn) return e && e();
          this.waitForBufferDone(function () {
            i.conn && (t ? i.conn.close(t, n || "") : i.conn.close()), i.waitForSocketClosed(function () {
              i.conn && (i.conn.onclose = function () {}, i.conn = null), e && e();
            });
          });
        }
      }, {
        key: "waitForBufferDone",
        value: function (e) {
          var t = this,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          5 !== n && this.conn && this.conn.bufferedAmount ? setTimeout(function () {
            t.waitForBufferDone(e, n + 1);
          }, 150 * n) : e();
        }
      }, {
        key: "waitForSocketClosed",
        value: function (e) {
          var t = this,
              n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
          5 !== n && this.conn && this.conn.readyState !== m ? setTimeout(function () {
            t.waitForSocketClosed(e, n + 1);
          }, 150 * n) : e();
        }
      }, {
        key: "onConnClose",
        value: function (e) {
          this.hasLogger() && this.log("transport", "close", e), this.triggerChanError(), clearTimeout(this.heartbeatTimer), this.closeWasClean || this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach(function (t) {
            return (0, r(t, 2)[1])(e);
          });
        }
      }, {
        key: "onConnError",
        value: function (e) {
          this.hasLogger() && this.log("transport", e), this.triggerChanError(), this.stateChangeCallbacks.error.forEach(function (t) {
            return (0, r(t, 2)[1])(e);
          });
        }
      }, {
        key: "triggerChanError",
        value: function () {
          this.channels.forEach(function (e) {
            e.isErrored() || e.isLeaving() || e.isClosed() || e.trigger(R);
          });
        }
      }, {
        key: "connectionState",
        value: function () {
          switch (this.conn && this.conn.readyState) {
            case p:
              return "connecting";

            case v:
              return "open";

            case y:
              return "closing";

            default:
              return "closed";
          }
        }
      }, {
        key: "isConnected",
        value: function () {
          return "open" === this.connectionState();
        }
      }, {
        key: "remove",
        value: function (e) {
          this.off(e.stateChangeRefs), this.channels = this.channels.filter(function (t) {
            return t.joinRef() !== e.joinRef();
          });
        }
      }, {
        key: "off",
        value: function (e) {
          for (var t in this.stateChangeCallbacks) this.stateChangeCallbacks[t] = this.stateChangeCallbacks[t].filter(function (t) {
            var n = r(t, 1)[0];
            return -1 === e.indexOf(n);
          });
        }
      }, {
        key: "channel",
        value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = new O(e, t, this);
          return this.channels.push(n), n;
        }
      }, {
        key: "push",
        value: function (e) {
          var t = this;

          if (this.hasLogger()) {
            var n = e.topic,
                i = e.event,
                o = e.payload,
                r = e.ref,
                s = e.join_ref;
            this.log("push", "".concat(n, " ").concat(i, " (").concat(s, ", ").concat(r, ")"), o);
          }

          this.isConnected() ? this.encode(e, function (e) {
            return t.conn.send(e);
          }) : this.sendBuffer.push(function () {
            return t.encode(e, function (e) {
              return t.conn.send(e);
            });
          });
        }
      }, {
        key: "makeRef",
        value: function () {
          var e = this.ref + 1;
          return e === this.ref ? this.ref = 0 : this.ref = e, this.ref.toString();
        }
      }, {
        key: "sendHeartbeat",
        value: function () {
          var e = this;
          this.pendingHeartbeatRef && !this.isConnected() || (this.pendingHeartbeatRef = this.makeRef(), this.push({
            topic: "phoenix",
            event: "heartbeat",
            payload: {},
            ref: this.pendingHeartbeatRef
          }), this.heartbeatTimer = setTimeout(function () {
            return e.heartbeatTimeout();
          }, this.heartbeatIntervalMs));
        }
      }, {
        key: "abnormalClose",
        value: function (e) {
          this.closeWasClean = !1, this.isConnected() && this.conn.close(1e3, e);
        }
      }, {
        key: "flushSendBuffer",
        value: function () {
          this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach(function (e) {
            return e();
          }), this.sendBuffer = []);
        }
      }, {
        key: "onConnMessage",
        value: function (e) {
          var t = this;
          this.decode(e.data, function (e) {
            var n = e.topic,
                i = e.event,
                o = e.payload,
                s = e.ref,
                a = e.join_ref;
            s && s === t.pendingHeartbeatRef && (clearTimeout(t.heartbeatTimer), t.pendingHeartbeatRef = null, setTimeout(function () {
              return t.sendHeartbeat();
            }, t.heartbeatIntervalMs)), t.hasLogger() && t.log("receive", "".concat(o.status || "", " ").concat(n, " ").concat(i, " ").concat(s && "(" + s + ")" || ""), o);

            for (var c = 0; c < t.channels.length; c++) {
              var u = t.channels[c];
              u.isMember(n, i, o, a) && u.trigger(i, o, s, a);
            }

            for (var h = 0; h < t.stateChangeCallbacks.message.length; h++) {
              (0, r(t.stateChangeCallbacks.message[h], 2)[1])(e);
            }
          });
        }
      }, {
        key: "leaveOpenTopic",
        value: function (e) {
          var t = this.channels.find(function (t) {
            return t.topic === e && (t.isJoined() || t.isJoining());
          });
          t && (this.hasLogger() && this.log("transport", 'leaving duplicate topic "'.concat(e, '"')), t.leave());
        }
      }]), e;
    }(),
        U = function () {
      function e(t) {
        c(this, e), this.endPoint = null, this.token = null, this.skipHeartbeat = !0, this.onopen = function () {}, this.onerror = function () {}, this.onmessage = function () {}, this.onclose = function () {}, this.pollEndpoint = this.normalizeEndpoint(t), this.readyState = p, this.poll();
      }

      return h(e, [{
        key: "normalizeEndpoint",
        value: function (e) {
          return e.replace("ws://", "http://").replace("wss://", "https://").replace(new RegExp("(.*)/" + L), "$1/" + A);
        }
      }, {
        key: "endpointURL",
        value: function () {
          return D.appendParams(this.pollEndpoint, {
            token: this.token
          });
        }
      }, {
        key: "closeAndRetry",
        value: function () {
          this.close(), this.readyState = p;
        }
      }, {
        key: "ontimeout",
        value: function () {
          this.onerror("timeout"), this.closeAndRetry();
        }
      }, {
        key: "poll",
        value: function () {
          var e = this;
          this.readyState !== v && this.readyState !== p || D.request("GET", this.endpointURL(), "application/json", null, this.timeout, this.ontimeout.bind(this), function (t) {
            if (t) {
              var n = t.status,
                  i = t.token,
                  o = t.messages;
              e.token = i;
            } else n = 0;

            switch (n) {
              case 200:
                o.forEach(function (t) {
                  setTimeout(function () {
                    e.onmessage({
                      data: t
                    });
                  }, 0);
                }), e.poll();
                break;

              case 204:
                e.poll();
                break;

              case 410:
                e.readyState = v, e.onopen(), e.poll();
                break;

              case 403:
                e.onerror(), e.close();
                break;

              case 0:
              case 500:
                e.onerror(), e.closeAndRetry();
                break;

              default:
                throw new Error("unhandled poll status ".concat(n));
            }
          });
        }
      }, {
        key: "send",
        value: function (e) {
          var t = this;
          D.request("POST", this.endpointURL(), "application/json", e, this.timeout, this.onerror.bind(this, "timeout"), function (e) {
            e && 200 === e.status || (t.onerror(e && e.status), t.closeAndRetry());
          });
        }
      }, {
        key: "close",
        value: function (e, t) {
          this.readyState = m, this.onclose();
        }
      }]), e;
    }(),
        D = function () {
      function e() {
        c(this, e);
      }

      return h(e, null, [{
        key: "request",
        value: function (e, t, n, i, o, r, s) {
          if (d.XDomainRequest) {
            var a = new XDomainRequest();
            this.xdomainRequest(a, e, t, i, o, r, s);
          } else {
            var c = new d.XMLHttpRequest();
            this.xhrRequest(c, e, t, n, i, o, r, s);
          }
        }
      }, {
        key: "xdomainRequest",
        value: function (e, t, n, i, o, r, s) {
          var a = this;
          e.timeout = o, e.open(t, n), e.onload = function () {
            var t = a.parseJSON(e.responseText);
            s && s(t);
          }, r && (e.ontimeout = r), e.onprogress = function () {}, e.send(i);
        }
      }, {
        key: "xhrRequest",
        value: function (e, t, n, i, o, r, s, a) {
          var c = this;
          e.open(t, n, !0), e.timeout = r, e.setRequestHeader("Content-Type", i), e.onerror = function () {
            a && a(null);
          }, e.onreadystatechange = function () {
            if (e.readyState === c.states.complete && a) {
              var t = c.parseJSON(e.responseText);
              a(t);
            }
          }, s && (e.ontimeout = s), e.send(o);
        }
      }, {
        key: "parseJSON",
        value: function (e) {
          if (!e || "" === e) return null;

          try {
            return JSON.parse(e);
          } catch (t) {
            return console && console.log("failed to parse JSON response", e), null;
          }
        }
      }, {
        key: "serialize",
        value: function (e, t) {
          var n = [];

          for (var i in e) if (e.hasOwnProperty(i)) {
            var r = t ? "".concat(t, "[").concat(i, "]") : i,
                s = e[i];
            "object" === o(s) ? n.push(this.serialize(s, r)) : n.push(encodeURIComponent(r) + "=" + encodeURIComponent(s));
          }

          return n.join("&");
        }
      }, {
        key: "appendParams",
        value: function (e, t) {
          if (0 === Object.keys(t).length) return e;
          var n = e.match(/\?/) ? "&" : "?";
          return "".concat(e).concat(n).concat(this.serialize(t));
        }
      }]), e;
    }();

    D.states = {
      complete: 4
    };

    var M = function () {
      function e(t) {
        var n = this,
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        c(this, e);
        var o = i.events || {
          state: "presence_state",
          diff: "presence_diff"
        };
        this.state = {}, this.pendingDiffs = [], this.channel = t, this.joinRef = null, this.caller = {
          onJoin: function () {},
          onLeave: function () {},
          onSync: function () {}
        }, this.channel.on(o.state, function (t) {
          var i = n.caller,
              o = i.onJoin,
              r = i.onLeave,
              s = i.onSync;
          n.joinRef = n.channel.joinRef(), n.state = e.syncState(n.state, t, o, r), n.pendingDiffs.forEach(function (t) {
            n.state = e.syncDiff(n.state, t, o, r);
          }), n.pendingDiffs = [], s();
        }), this.channel.on(o.diff, function (t) {
          var i = n.caller,
              o = i.onJoin,
              r = i.onLeave,
              s = i.onSync;
          n.inPendingSyncState() ? n.pendingDiffs.push(t) : (n.state = e.syncDiff(n.state, t, o, r), s());
        });
      }

      return h(e, [{
        key: "onJoin",
        value: function (e) {
          this.caller.onJoin = e;
        }
      }, {
        key: "onLeave",
        value: function (e) {
          this.caller.onLeave = e;
        }
      }, {
        key: "onSync",
        value: function (e) {
          this.caller.onSync = e;
        }
      }, {
        key: "list",
        value: function (t) {
          return e.list(this.state, t);
        }
      }, {
        key: "inPendingSyncState",
        value: function () {
          return !this.joinRef || this.joinRef !== this.channel.joinRef();
        }
      }], [{
        key: "syncState",
        value: function (e, t, n, i) {
          var o = this,
              r = this.clone(e),
              s = {},
              a = {};
          return this.map(r, function (e, n) {
            t[e] || (a[e] = n);
          }), this.map(t, function (e, t) {
            var n = r[e];

            if (n) {
              var i = t.metas.map(function (e) {
                return e.phx_ref;
              }),
                  c = n.metas.map(function (e) {
                return e.phx_ref;
              }),
                  u = t.metas.filter(function (e) {
                return c.indexOf(e.phx_ref) < 0;
              }),
                  h = n.metas.filter(function (e) {
                return i.indexOf(e.phx_ref) < 0;
              });
              u.length > 0 && (s[e] = t, s[e].metas = u), h.length > 0 && (a[e] = o.clone(n), a[e].metas = h);
            } else s[e] = t;
          }), this.syncDiff(r, {
            joins: s,
            leaves: a
          }, n, i);
        }
      }, {
        key: "syncDiff",
        value: function (e, t, n, o) {
          var r = t.joins,
              s = t.leaves,
              a = this.clone(e);
          return n || (n = function () {}), o || (o = function () {}), this.map(r, function (e, t) {
            var o = a[e];

            if (a[e] = t, o) {
              var r,
                  s = a[e].metas.map(function (e) {
                return e.phx_ref;
              }),
                  c = o.metas.filter(function (e) {
                return s.indexOf(e.phx_ref) < 0;
              });
              (r = a[e].metas).unshift.apply(r, i(c));
            }

            n(e, o, t);
          }), this.map(s, function (e, t) {
            var n = a[e];

            if (n) {
              var i = t.metas.map(function (e) {
                return e.phx_ref;
              });
              n.metas = n.metas.filter(function (e) {
                return i.indexOf(e.phx_ref) < 0;
              }), o(e, n, t), 0 === n.metas.length && delete a[e];
            }
          }), a;
        }
      }, {
        key: "list",
        value: function (e, t) {
          return t || (t = function (e, t) {
            return t;
          }), this.map(e, function (e, n) {
            return t(e, n);
          });
        }
      }, {
        key: "map",
        value: function (e, t) {
          return Object.getOwnPropertyNames(e).map(function (n) {
            return t(n, e[n]);
          });
        }
      }, {
        key: "clone",
        value: function (e) {
          return JSON.parse(JSON.stringify(e));
        }
      }]), e;
    }(),
        N = function () {
      function e(t, n) {
        c(this, e), this.callback = t, this.timerCalc = n, this.timer = null, this.tries = 0;
      }

      return h(e, [{
        key: "reset",
        value: function () {
          this.tries = 0, clearTimeout(this.timer);
        }
      }, {
        key: "scheduleTimeout",
        value: function () {
          var e = this;
          clearTimeout(this.timer), this.timer = setTimeout(function () {
            e.tries = e.tries + 1, e.callback();
          }, this.timerCalc(this.tries + 1));
        }
      }]), e;
    }();
  }]);
});

/***/ }),

/***/ "../deps/phoenix_html/priv/static/phoenix_html.js":
/*!********************************************************!*\
  !*** ../deps/phoenix_html/priv/static/phoenix_html.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  var PolyfillEvent = eventConstructor();

  function eventConstructor() {
    if (typeof window.CustomEvent === "function") return window.CustomEvent; // IE<=9 Support

    function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    return CustomEvent;
  }

  function buildHiddenInput(name, value) {
    var input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    return input;
  }

  function handleClick(element) {
    var to = element.getAttribute("data-to"),
        method = buildHiddenInput("_method", element.getAttribute("data-method")),
        csrf = buildHiddenInput("_csrf_token", element.getAttribute("data-csrf")),
        form = document.createElement("form"),
        target = element.getAttribute("target");
    form.method = element.getAttribute("data-method") === "get" ? "get" : "post";
    form.action = to;
    form.style.display = "hidden";
    if (target) form.target = target;
    form.appendChild(csrf);
    form.appendChild(method);
    document.body.appendChild(form);
    form.submit();
  }

  window.addEventListener("click", function (e) {
    var element = e.target;

    while (element && element.getAttribute) {
      var phoenixLinkEvent = new PolyfillEvent('phoenix.link.click', {
        "bubbles": true,
        "cancelable": true
      });

      if (!element.dispatchEvent(phoenixLinkEvent)) {
        e.preventDefault();
        e.stopImmediatePropagation();
        return false;
      }

      if (element.getAttribute("data-method")) {
        handleClick(element);
        e.preventDefault();
        return false;
      } else {
        element = element.parentNode;
      }
    }
  }, false);
  window.addEventListener('phoenix.link.click', function (e) {
    var message = e.target.getAttribute("data-confirm");

    if (message && !window.confirm(message)) {
      e.preventDefault();
    }
  }, false);
})();

/***/ }),

/***/ "../deps/phoenix_live_view/priv/static/phoenix_live_view.js":
/*!******************************************************************!*\
  !*** ../deps/phoenix_live_view/priv/static/phoenix_live_view.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (e, t) {
   true ? module.exports = t() : undefined;
}(this, function () {
  return function (e) {
    var t = {};

    function n(i) {
      if (t[i]) return t[i].exports;
      var r = t[i] = {
        i: i,
        l: !1,
        exports: {}
      };
      return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, i) {
      n.o(e, t) || Object.defineProperty(e, t, {
        configurable: !1,
        enumerable: !0,
        get: i
      });
    }, n.r = function (e) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 2);
  }([function (e, t, n) {
    "use strict";

    n.r(t);
    var i,
        r = 11;
    var o = "http://www.w3.org/1999/xhtml",
        a = "undefined" == typeof document ? void 0 : document,
        u = !!a && "content" in a.createElement("template"),
        s = !!a && a.createRange && "createContextualFragment" in a.createRange();

    function c(e) {
      return e = e.trim(), u ? function (e) {
        var t = a.createElement("template");
        return t.innerHTML = e, t.content.childNodes[0];
      }(e) : s ? function (e) {
        return i || (i = a.createRange()).selectNode(a.body), i.createContextualFragment(e).childNodes[0];
      }(e) : function (e) {
        var t = a.createElement("body");
        return t.innerHTML = e, t.childNodes[0];
      }(e);
    }

    function l(e, t) {
      var n,
          i,
          r = e.nodeName,
          o = t.nodeName;
      return r === o || (n = r.charCodeAt(0), i = o.charCodeAt(0), n <= 90 && i >= 97 ? r === o.toUpperCase() : i <= 90 && n >= 97 && o === r.toUpperCase());
    }

    function d(e, t, n) {
      e[n] !== t[n] && (e[n] = t[n], e[n] ? e.setAttribute(n, "") : e.removeAttribute(n));
    }

    var h = {
      OPTION: function (e, t) {
        var n = e.parentNode;

        if (n) {
          var i = n.nodeName.toUpperCase();
          "OPTGROUP" === i && (i = (n = n.parentNode) && n.nodeName.toUpperCase()), "SELECT" !== i || n.hasAttribute("multiple") || (e.hasAttribute("selected") && !t.selected && (e.setAttribute("selected", "selected"), e.removeAttribute("selected")), n.selectedIndex = -1);
        }

        d(e, t, "selected");
      },
      INPUT: function (e, t) {
        d(e, t, "checked"), d(e, t, "disabled"), e.value !== t.value && (e.value = t.value), t.hasAttribute("value") || e.removeAttribute("value");
      },
      TEXTAREA: function (e, t) {
        var n = t.value;
        e.value !== n && (e.value = n);
        var i = e.firstChild;

        if (i) {
          var r = i.nodeValue;
          if (r == n || !n && r == e.placeholder) return;
          i.nodeValue = n;
        }
      },
      SELECT: function (e, t) {
        if (!t.hasAttribute("multiple")) {
          for (var n, i, r = -1, o = 0, a = e.firstChild; a;) if ("OPTGROUP" === (i = a.nodeName && a.nodeName.toUpperCase())) a = (n = a).firstChild;else {
            if ("OPTION" === i) {
              if (a.hasAttribute("selected")) {
                r = o;
                break;
              }

              o++;
            }

            !(a = a.nextSibling) && n && (a = n.nextSibling, n = null);
          }

          e.selectedIndex = r;
        }
      }
    },
        f = 1,
        v = 11,
        p = 3,
        g = 8;

    function m() {}

    function y(e) {
      if (e) return e.getAttribute && e.getAttribute("id") || e.id;
    }

    var k = function (e) {
      return function (t, n, i) {
        if (i || (i = {}), "string" == typeof n) if ("#document" === t.nodeName || "HTML" === t.nodeName || "BODY" === t.nodeName) {
          var r = n;
          (n = a.createElement("html")).innerHTML = r;
        } else n = c(n);
        var u = i.getNodeKey || y,
            s = i.onBeforeNodeAdded || m,
            d = i.onNodeAdded || m,
            k = i.onBeforeElUpdated || m,
            b = i.onElUpdated || m,
            w = i.onBeforeNodeDiscarded || m,
            E = i.onNodeDiscarded || m,
            S = i.onBeforeElChildrenUpdated || m,
            A = !0 === i.childrenOnly,
            x = Object.create(null),
            C = [];

        function P(e) {
          C.push(e);
        }

        function L(e, t, n) {
          !1 !== w(e) && (t && t.removeChild(e), E(e), function e(t, n) {
            if (t.nodeType === f) for (var i = t.firstChild; i;) {
              var r = void 0;
              n && (r = u(i)) ? P(r) : (E(i), i.firstChild && e(i, n)), i = i.nextSibling;
            }
          }(e, n));
        }

        function I(e) {
          d(e);

          for (var t = e.firstChild; t;) {
            var n = t.nextSibling,
                i = u(t);

            if (i) {
              var r = x[i];
              r && l(t, r) ? (t.parentNode.replaceChild(r, t), T(r, t)) : I(t);
            } else I(t);

            t = n;
          }
        }

        function T(t, n, i) {
          var r = u(n);

          if (r && delete x[r], !i) {
            if (!1 === k(t, n)) return;
            if (e(t, n), b(t), !1 === S(t, n)) return;
          }

          "TEXTAREA" !== t.nodeName ? function (e, t) {
            var n,
                i,
                r,
                o,
                c,
                d = t.firstChild,
                v = e.firstChild;

            e: for (; d;) {
              for (o = d.nextSibling, n = u(d); v;) {
                if (r = v.nextSibling, d.isSameNode && d.isSameNode(v)) {
                  d = o, v = r;
                  continue e;
                }

                i = u(v);
                var m = v.nodeType,
                    y = void 0;

                if (m === d.nodeType && (m === f ? (n ? n !== i && ((c = x[n]) ? r === c ? y = !1 : (e.insertBefore(c, v), i ? P(i) : L(v, e, !0), v = c) : y = !1) : i && (y = !1), (y = !1 !== y && l(v, d)) && T(v, d)) : m !== p && m != g || (y = !0, v.nodeValue !== d.nodeValue && (v.nodeValue = d.nodeValue))), y) {
                  d = o, v = r;
                  continue e;
                }

                i ? P(i) : L(v, e, !0), v = r;
              }

              if (n && (c = x[n]) && l(c, d)) e.appendChild(c), T(c, d);else {
                var k = s(d);
                !1 !== k && (k && (d = k), d.actualize && (d = d.actualize(e.ownerDocument || a)), e.appendChild(d), I(d));
              }
              d = o, v = r;
            }

            !function (e, t, n) {
              for (; t;) {
                var i = t.nextSibling;
                (n = u(t)) ? P(n) : L(t, e, !0), t = i;
              }
            }(e, v, i);
            var b = h[e.nodeName];
            b && b(e, t);
          }(t, n) : h.TEXTAREA(t, n);
        }

        !function e(t) {
          if (t.nodeType === f || t.nodeType === v) for (var n = t.firstChild; n;) {
            var i = u(n);
            i && (x[i] = n), e(n), n = n.nextSibling;
          }
        }(t);
        var D = t,
            _ = D.nodeType,
            N = n.nodeType;
        if (!A) if (_ === f) N === f ? l(t, n) || (E(t), D = function (e, t) {
          for (var n = e.firstChild; n;) {
            var i = n.nextSibling;
            t.appendChild(n), n = i;
          }

          return t;
        }(t, function (e, t) {
          return t && t !== o ? a.createElementNS(t, e) : a.createElement(e);
        }(n.nodeName, n.namespaceURI))) : D = n;else if (_ === p || _ === g) {
          if (N === _) return D.nodeValue !== n.nodeValue && (D.nodeValue = n.nodeValue), D;
          D = n;
        }
        if (D === n) E(t);else {
          if (n.isSameNode && n.isSameNode(D)) return;
          if (T(D, n, A), C) for (var R = 0, O = C.length; R < O; R++) {
            var j = x[C[R]];
            j && L(j, j.parentNode, !1);
          }
        }
        return !A && D !== t && t.parentNode && (D.actualize && (D = D.actualize(t.ownerDocument || a)), t.parentNode.replaceChild(D, t)), D;
      };
    }(function (e, t) {
      var n,
          i,
          o,
          a,
          u = t.attributes;

      if (t.nodeType !== r && e.nodeType !== r) {
        for (var s = u.length - 1; s >= 0; s--) i = (n = u[s]).name, o = n.namespaceURI, a = n.value, o ? (i = n.localName || i, e.getAttributeNS(o, i) !== a && ("xmlns" === n.prefix && (i = n.name), e.setAttributeNS(o, i, a))) : e.getAttribute(i) !== a && e.setAttribute(i, a);

        for (var c = e.attributes, l = c.length - 1; l >= 0; l--) i = (n = c[l]).name, (o = n.namespaceURI) ? (i = n.localName || i, t.hasAttributeNS(o, i) || e.removeAttributeNS(o, i)) : t.hasAttribute(i) || e.removeAttribute(i);
      }
    });

    function b(e) {
      return L(e) || E(e) || I(e) || P();
    }

    function w(e) {
      return function (e) {
        if (Array.isArray(e)) return T(e);
      }(e) || E(e) || I(e) || function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }();
    }

    function E(e) {
      if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e);
    }

    function S(e, t) {
      var n = Object.keys(e);

      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        t && (i = i.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })), n.push.apply(n, i);
      }

      return n;
    }

    function A(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2 ? S(Object(n), !0).forEach(function (t) {
          x(e, t, n[t]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
      }

      return e;
    }

    function x(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n, e;
    }

    function C(e, t) {
      return L(e) || function (e, t) {
        if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
        var n = [],
            i = !0,
            r = !1,
            o = void 0;

        try {
          for (var a, u = e[Symbol.iterator](); !(i = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
        } catch (e) {
          r = !0, o = e;
        } finally {
          try {
            i || null == u.return || u.return();
          } finally {
            if (r) throw o;
          }
        }

        return n;
      }(e, t) || I(e, t) || P();
    }

    function P() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    function L(e) {
      if (Array.isArray(e)) return e;
    }

    function I(e, t) {
      if (e) {
        if ("string" == typeof e) return T(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? T(e, t) : void 0;
      }
    }

    function T(e, t) {
      (null == t || t > e.length) && (t = e.length);

      for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];

      return i;
    }

    function D(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function _(e, t) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n];
        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
      }
    }

    function N(e, t, n) {
      return t && _(e.prototype, t), n && _(e, n), e;
    }

    function R(e) {
      "@babel/helpers - typeof";

      return (R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }

    n.d(t, "debug", function () {
      return X;
    }), n.d(t, "Rendered", function () {
      return se;
    }), n.d(t, "LiveSocket", function () {
      return ce;
    }), n.d(t, "Browser", function () {
      return le;
    }), n.d(t, "DOM", function () {
      return de;
    }), n.d(t, "View", function () {
      return ve;
    });

    var O = [1e3, 3e3],
        j = "data-phx-view",
        H = ["phx-click-loading", "phx-change-loading", "phx-submit-loading", "phx-keydown-loading", "phx-keyup-loading", "phx-blur-loading", "phx-focus-loading"],
        M = "data-phx-component",
        F = "data-phx-ref",
        U = "data-phx-upload-ref",
        B = "[".concat(j, "]"),
        J = ["text", "textarea", "number", "email", "password", "search", "tel", "url", "date", "time"],
        V = ["checkbox", "radio"],
        W = 1,
        q = "phx-",
        z = {
      debounce: 300,
      throttle: 300
    },
        K = function (e, t) {
      return console.error && console.error(e, t);
    };

    var X = function (e, t, n, i) {
      e.liveSocket.isDebugEnabled() && console.log("".concat(e.id, " ").concat(t, ": ").concat(n, " - "), i);
    },
        $ = function (e) {
      return "function" == typeof e ? e : function () {
        return e;
      };
    },
        G = function (e) {
      return JSON.parse(JSON.stringify(e));
    },
        Y = function (e, t, n) {
      do {
        if (e.matches("[".concat(t, "]"))) return e;
        e = e.parentElement || e.parentNode;
      } while (null !== e && 1 === e.nodeType && !(n && n.isSameNode(e) || e.matches(B)));

      return null;
    },
        Q = function (e) {
      return null !== e && "object" === R(e) && !(e instanceof Array);
    },
        Z = function (e) {
      for (var t in e) return !1;

      return !0;
    },
        ee = function (e, t) {
      return e && t(e);
    },
        te = function () {
      function e(t, n, i) {
        D(this, e), this.ref = re.genFileRef(n), this.fileEl = t, this.file = n, this.view = i, this.meta = null, this._isCancelled = !1, this._isDone = !1, this._progress = 0, this._lastProgressSent = -1, this._onDone = function () {};
      }

      return N(e, null, [{
        key: "isActive",
        value: function (e, t) {
          var n = void 0 === t._phxRef,
              i = e.getAttribute("data-phx-active-refs").split(",").indexOf(re.genFileRef(t)) >= 0;
          return t.size > 0 && (n || i);
        }
      }, {
        key: "isPreflighted",
        value: function (e, t) {
          var n = e.getAttribute("data-phx-preflighted-refs").split(",").indexOf(re.genFileRef(t)) >= 0;
          return n && this.isActive(e, t);
        }
      }]), N(e, [{
        key: "metadata",
        value: function () {
          return this.meta;
        }
      }, {
        key: "progress",
        value: function (e) {
          var t = this;
          this._progress = Math.floor(e), this._progress > this._lastProgressSent && (this._progress >= 100 ? (this._progress = 100, this._lastProgressSent = 100, this._isDone = !0, this.view.pushFileProgress(this.fileEl, this.ref, 100, function () {
            re.untrackFile(t.fileEl, t.file), t._onDone();
          })) : (this._lastProgressSent = this._progress, this.view.pushFileProgress(this.fileEl, this.ref, this._progress)));
        }
      }, {
        key: "cancel",
        value: function () {
          this._isCancelled = !0, this._isDone = !0, this._onDone();
        }
      }, {
        key: "isDone",
        value: function () {
          return this._isDone;
        }
      }, {
        key: "error",
        value: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "failed";
          re.clearFiles(this.fileEl), this.view.pushFileProgress(this.fileEl, this.ref, {
            error: e
          });
        }
      }, {
        key: "onDone",
        value: function (e) {
          this._onDone = e;
        }
      }, {
        key: "toPreflightPayload",
        value: function () {
          return {
            last_modified: this.file.lastModified,
            name: this.file.name,
            size: this.file.size,
            type: this.file.type,
            ref: this.ref
          };
        }
      }, {
        key: "uploader",
        value: function (e) {
          if (this.meta.uploader) {
            var t = e[this.meta.uploader] || K("no uploader configured for ".concat(this.meta.uploader));
            return {
              name: this.meta.uploader,
              callback: t
            };
          }

          return {
            name: "channel",
            callback: oe
          };
        }
      }, {
        key: "zipPostFlight",
        value: function (e) {
          this.meta = e.entries[this.ref], this.meta || K("no preflight upload response returned with ref ".concat(this.ref), {
            input: this.fileEl,
            response: e
          });
        }
      }]), e;
    }(),
        ne = {
      LiveFileUpload: {
        preflightedRefs: function () {
          return this.el.getAttribute("data-phx-preflighted-refs");
        },
        mounted: function () {
          this.preflightedWas = this.preflightedRefs();
        },
        updated: function () {
          var e = this.preflightedRefs();
          this.preflightedWas !== e && (this.preflightedWas = e, "" === e && this.__view.cancelSubmit(this.el.form));
        }
      }
    };

    ne.LiveImgPreview = {
      mounted: function () {
        var e = this;
        this.ref = this.el.getAttribute("data-phx-entry-ref"), this.inputEl = document.getElementById(this.el.getAttribute(U)), re.getEntryDataURL(this.inputEl, this.ref, function (t) {
          return e.el.src = t;
        });
      }
    };

    var ie = 0,
        re = function () {
      function e(t, n, i) {
        D(this, e), this.view = n, this.onComplete = i, this._entries = Array.from(e.filesAwaitingPreflight(t) || []).map(function (e) {
          return new te(t, e, n);
        }), this.numEntriesInProgress = this._entries.length;
      }

      return N(e, null, [{
        key: "genFileRef",
        value: function (e) {
          var t = e._phxRef;
          return void 0 !== t ? t : (e._phxRef = (ie++).toString(), e._phxRef);
        }
      }, {
        key: "getEntryDataURL",
        value: function (e, t, n) {
          var i = this,
              r = this.activeFiles(e).find(function (e) {
            return i.genFileRef(e) === t;
          }),
              o = new FileReader();
          o.onload = function (e) {
            return n(e.target.result);
          }, o.readAsDataURL(r);
        }
      }, {
        key: "hasUploadsInProgress",
        value: function (e) {
          var t = 0;
          return de.findUploadInputs(e).forEach(function (e) {
            e.getAttribute("data-phx-preflighted-refs") !== e.getAttribute("data-phx-done-refs") && t++;
          }), t > 0;
        }
      }, {
        key: "serializeUploads",
        value: function (e) {
          var t = this,
              n = {};
          return this.activeFiles(e, "serialize").forEach(function (i) {
            var r = {
              path: e.name
            },
                o = e.getAttribute(U);
            n[o] = n[o] || [], r.ref = t.genFileRef(i), r.name = i.name, r.type = i.type, r.size = i.size, n[o].push(r);
          }), n;
        }
      }, {
        key: "clearFiles",
        value: function (e) {
          e.value = null, e.removeAttribute(U), de.putPrivate(e, "files", []);
        }
      }, {
        key: "untrackFile",
        value: function (e, t) {
          de.putPrivate(e, "files", de.private(e, "files").filter(function (e) {
            return !Object.is(e, t);
          }));
        }
      }, {
        key: "trackFiles",
        value: function (e, t) {
          var n = this;

          if (null !== e.getAttribute("multiple")) {
            var i = t.filter(function (t) {
              return !n.activeFiles(e).find(function (e) {
                return Object.is(e, t);
              });
            });
            de.putPrivate(e, "files", this.activeFiles(e).concat(i)), e.value = null;
          } else de.putPrivate(e, "files", t);
        }
      }, {
        key: "activeFileInputs",
        value: function (e) {
          var t = this,
              n = de.findUploadInputs(e);
          return Array.from(n).filter(function (e) {
            return e.files && t.activeFiles(e).length > 0;
          });
        }
      }, {
        key: "activeFiles",
        value: function (e) {
          return (de.private(e, "files") || []).filter(function (t) {
            return te.isActive(e, t);
          });
        }
      }, {
        key: "inputsAwaitingPreflight",
        value: function (e) {
          var t = this,
              n = de.findUploadInputs(e);
          return Array.from(n).filter(function (e) {
            return t.filesAwaitingPreflight(e).length > 0;
          });
        }
      }, {
        key: "filesAwaitingPreflight",
        value: function (e) {
          return this.activeFiles(e).filter(function (t) {
            return !te.isPreflighted(e, t);
          });
        }
      }]), N(e, [{
        key: "entries",
        value: function () {
          return this._entries;
        }
      }, {
        key: "initAdapterUpload",
        value: function (e, t, n) {
          var i = this;
          this._entries = this._entries.map(function (t) {
            return t.zipPostFlight(e), t.onDone(function () {
              i.numEntriesInProgress--, 0 === i.numEntriesInProgress && i.onComplete();
            }), t;
          });

          var r = this._entries.reduce(function (e, t) {
            var i = t.uploader(n.uploaders),
                r = i.name,
                o = i.callback;
            return e[r] = e[r] || {
              callback: o,
              entries: []
            }, e[r].entries.push(t), e;
          }, {});

          for (var o in r) {
            var a = r[o];
            (0, a.callback)(a.entries, t, e, n);
          }
        }
      }]), e;
    }(),
        oe = function (e, t, n, i) {
      e.forEach(function (e) {
        new ae(e, n.config.chunk_size, i).upload();
      });
    },
        ae = function () {
      function e(t, n, i) {
        D(this, e), this.liveSocket = i, this.entry = t, this.offset = 0, this.chunkSize = n, this.chunkTimer = null, this.uploadChannel = i.channel("lvu:".concat(t.ref), {
          token: t.metadata()
        });
      }

      return N(e, [{
        key: "error",
        value: function (e) {
          clearTimeout(this.chunkTimer), this.uploadChannel.leave(), this.entry.error(e);
        }
      }, {
        key: "upload",
        value: function () {
          var e = this;
          this.uploadChannel.onError(function (t) {
            return e.error(t);
          }), this.uploadChannel.join().receive("ok", function (t) {
            return e.readNextChunk();
          }).receive("error", function (t) {
            return e.error(t);
          });
        }
      }, {
        key: "isDone",
        value: function () {
          return this.offset >= this.entry.file.size;
        }
      }, {
        key: "readNextChunk",
        value: function () {
          var e = this,
              t = new window.FileReader(),
              n = this.entry.file.slice(this.offset, this.chunkSize + this.offset);
          t.onload = function (t) {
            if (null !== t.target.error) return K("Read error: " + t.target.error);
            e.offset += t.target.result.byteLength, e.pushChunk(t.target.result);
          }, t.readAsArrayBuffer(n);
        }
      }, {
        key: "pushChunk",
        value: function (e) {
          var t = this;
          this.uploadChannel.isJoined() && this.uploadChannel.push("chunk", e).receive("ok", function () {
            t.entry.progress(t.offset / t.entry.file.size * 100), t.isDone() || (t.chunkTimer = setTimeout(function () {
              return t.readNextChunk();
            }, t.liveSocket.getLatencySim() || 0));
          });
        }
      }]), e;
    }(),
        ue = function (e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = new FormData(e),
          i = [];
      n.forEach(function (e, t, n) {
        e instanceof File && i.push(t);
      }), i.forEach(function (e) {
        return n.delete(e);
      });

      var r,
          o = new URLSearchParams(),
          a = function (e) {
        if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
          if (Array.isArray(e) || (e = I(e))) {
            var t = 0,
                n = function () {};

            return {
              s: n,
              n: function () {
                return t >= e.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: e[t++]
                };
              },
              e: function (e) {
                throw e;
              },
              f: n
            };
          }

          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }

        var i,
            r,
            o = !0,
            a = !1;
        return {
          s: function () {
            i = e[Symbol.iterator]();
          },
          n: function () {
            var e = i.next();
            return o = e.done, e;
          },
          e: function (e) {
            a = !0, r = e;
          },
          f: function () {
            try {
              o || null == i.return || i.return();
            } finally {
              if (a) throw r;
            }
          }
        };
      }(n.entries());

      try {
        for (a.s(); !(r = a.n()).done;) {
          var u = C(r.value, 2),
              s = u[0],
              c = u[1];
          o.append(s, c);
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }

      for (var l in t) o.append(l, t[l]);

      return o.toString();
    },
        se = function () {
      function e(t, n) {
        D(this, e), this.viewId = t, this.rendered = {}, this.mergeDiff(n);
      }

      return N(e, null, [{
        key: "extract",
        value: function (e) {
          var t = e.r,
              n = e.e,
              i = e.t;
          return delete e.r, delete e.e, delete e.t, {
            diff: e,
            title: i,
            reply: t || null,
            events: n || []
          };
        }
      }]), N(e, [{
        key: "parentViewId",
        value: function () {
          return this.viewId;
        }
      }, {
        key: "toString",
        value: function (e) {
          return this.recursiveToString(this.rendered, this.rendered.c, e);
        }
      }, {
        key: "recursiveToString",
        value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.c,
              n = arguments.length > 2 ? arguments[2] : void 0,
              i = {
            buffer: "",
            components: t,
            onlyCids: n = n ? new Set(n) : null
          };
          return this.toOutputBuffer(e, i), i.buffer;
        }
      }, {
        key: "componentCIDs",
        value: function (e) {
          return Object.keys(e.c || {}).map(function (e) {
            return parseInt(e);
          });
        }
      }, {
        key: "isComponentOnlyDiff",
        value: function (e) {
          return !!e.c && 1 === Object.keys(e).length;
        }
      }, {
        key: "getComponent",
        value: function (e, t) {
          return e.c[t];
        }
      }, {
        key: "mergeDiff",
        value: function (e) {
          var t = e.c,
              n = {};

          if (delete e.c, this.rendered = this.mutableMerge(this.rendered, e), this.rendered.c = this.rendered.c || {}, t) {
            var i = this.rendered.c;

            for (var r in t) t[r] = this.cachedFindComponent(r, t[r], i, t, n);

            for (var o in t) i[o] = t[o];

            e.c = t;
          }
        }
      }, {
        key: "cachedFindComponent",
        value: function (e, t, n, i, r) {
          if (r[e]) return r[e];
          var o,
              a,
              u,
              s = t.s;
          return "number" == typeof s ? (a = (u = s > 0 ? this.cachedFindComponent(s, i[s], n, i, r) : n[-s]).s, (o = this.cloneMerge(u, t)).s = a) : o = void 0 !== t.s ? t : this.cloneMerge(n[e] || {}, t), r[e] = o, o;
        }
      }, {
        key: "mutableMerge",
        value: function (e, t) {
          return void 0 !== t.s ? t : (this.doMutableMerge(e, t), e);
        }
      }, {
        key: "doMutableMerge",
        value: function (e, t) {
          for (var n in t) {
            var i = t[n],
                r = e[n];
            Q(i) && void 0 === i.s && Q(r) ? this.doMutableMerge(r, i) : e[n] = i;
          }
        }
      }, {
        key: "cloneMerge",
        value: function (e, t) {
          var n = A(A({}, e), t);

          for (var i in n) {
            var r = t[i],
                o = e[i];
            Q(r) && void 0 === r.s && Q(o) && (n[i] = this.cloneMerge(o, r));
          }

          return n;
        }
      }, {
        key: "componentToString",
        value: function (e) {
          return this.recursiveCIDToString(this.rendered.c, e);
        }
      }, {
        key: "pruneCIDs",
        value: function (e) {
          var t = this;
          e.forEach(function (e) {
            return delete t.rendered.c[e];
          });
        }
      }, {
        key: "get",
        value: function () {
          return this.rendered;
        }
      }, {
        key: "isNewFingerprint",
        value: function () {
          return !!(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).s;
        }
      }, {
        key: "toOutputBuffer",
        value: function (e, t) {
          if (e.d) return this.comprehensionToBuffer(e, t);
          var n = e.s;
          t.buffer += n[0];

          for (var i = 1; i < n.length; i++) this.dynamicToBuffer(e[i - 1], t), t.buffer += n[i];
        }
      }, {
        key: "comprehensionToBuffer",
        value: function (e, t) {
          for (var n = e.d, i = e.s, r = 0; r < n.length; r++) {
            var o = n[r];
            t.buffer += i[0];

            for (var a = 1; a < i.length; a++) this.dynamicToBuffer(o[a - 1], t), t.buffer += i[a];
          }
        }
      }, {
        key: "dynamicToBuffer",
        value: function (e, t) {
          "number" == typeof e ? t.buffer += this.recursiveCIDToString(t.components, e, t.onlyCids) : Q(e) ? this.toOutputBuffer(e, t) : t.buffer += e;
        }
      }, {
        key: "recursiveCIDToString",
        value: function (e, t, n) {
          var i = this,
              r = e[t] || K("no component for CID ".concat(t), e),
              o = document.createElement("template");
          o.innerHTML = this.recursiveToString(r, e, n);
          var a = o.content,
              u = n && !n.has(t),
              s = C(Array.from(a.childNodes).reduce(function (e, n, r) {
            var a = C(e, 2),
                s = a[0],
                c = a[1];
            return n.nodeType === Node.ELEMENT_NODE ? n.getAttribute(M) ? [s, !0] : (n.setAttribute(M, t), n.id || (n.id = "".concat(i.parentViewId(), "-").concat(t, "-").concat(r)), u && (n.setAttribute("data-phx-skip", ""), n.innerHTML = ""), [!0, c]) : "" !== n.nodeValue.trim() ? (K("only HTML element tags are allowed at the root of components.\n\n" + 'got: "'.concat(n.nodeValue.trim(), '"\n\n') + "within:\n", o.innerHTML.trim()), n.replaceWith(i.createSpan(n.nodeValue, t)), [!0, c]) : (n.remove(), [s, c]);
          }, [!1, !1]), 2),
              c = s[0],
              l = s[1];
          return c || l ? !c && l ? (K("expected at least one HTML element tag directly inside a component, but only subcomponents were found. A component must render at least one HTML tag directly inside itself.", o.innerHTML.trim()), o.innerHTML) : o.innerHTML : (K("expected at least one HTML element tag inside a component, but the component is empty:\n", o.innerHTML.trim()), this.createSpan("", t).outerHTML);
        }
      }, {
        key: "createSpan",
        value: function (e, t) {
          var n = document.createElement("span");
          return n.innerText = e, n.setAttribute(M, t), n;
        }
      }]), e;
    }(),
        ce = function () {
      function e(t, n) {
        var i = this,
            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (D(this, e), this.unloaded = !1, !n || "Object" === n.constructor.name) throw new Error('\n      a phoenix Socket must be provided as the second argument to the LiveSocket constructor. For example:\n\n          import {Socket} from "phoenix"\n          import {LiveSocket} from "phoenix_live_view"\n          let liveSocket = new LiveSocket("/live", Socket, {...})\n      ');
        this.socket = new n(t, r), this.bindingPrefix = r.bindingPrefix || q, this.opts = r, this.params = $(r.params || {}), this.viewLogger = r.viewLogger, this.metadataCallbacks = r.metadata || {}, this.defaults = Object.assign(G(z), r.defaults || {}), this.activeElement = null, this.prevActive = null, this.silenced = !1, this.main = null, this.linkRef = 1, this.roots = {}, this.href = window.location.href, this.pendingLink = null, this.currentLocation = G(window.location), this.hooks = r.hooks || {}, this.uploaders = r.uploaders || {}, this.loaderTimeout = r.loaderTimeout || W, this.localStorage = r.localStorage || window.localStorage, this.sessionStorage = r.sessionStorage || window.sessionStorage, this.boundTopLevelEvents = !1, this.domCallbacks = Object.assign({
          onNodeAdded: $(),
          onBeforeElUpdated: $()
        }, r.dom || {}), window.addEventListener("pagehide", function (e) {
          i.unloaded = !0;
        }), this.socket.onOpen(function () {
          i.isUnloaded() && window.location.reload();
        });
      }

      return N(e, [{
        key: "isProfileEnabled",
        value: function () {
          return "true" === this.sessionStorage.getItem("phx:live-socket:profiling");
        }
      }, {
        key: "isDebugEnabled",
        value: function () {
          return "true" === this.sessionStorage.getItem("phx:live-socket:debug");
        }
      }, {
        key: "enableDebug",
        value: function () {
          this.sessionStorage.setItem("phx:live-socket:debug", "true");
        }
      }, {
        key: "enableProfiling",
        value: function () {
          this.sessionStorage.setItem("phx:live-socket:profiling", "true");
        }
      }, {
        key: "disableDebug",
        value: function () {
          this.sessionStorage.removeItem("phx:live-socket:debug");
        }
      }, {
        key: "disableProfiling",
        value: function () {
          this.sessionStorage.removeItem("phx:live-socket:profiling");
        }
      }, {
        key: "enableLatencySim",
        value: function (e) {
          this.enableDebug(), console.log("latency simulator enabled for the duration of this browser session. Call disableLatencySim() to disable"), this.sessionStorage.setItem("phx:live-socket:latency-sim", e);
        }
      }, {
        key: "disableLatencySim",
        value: function () {
          this.sessionStorage.removeItem("phx:live-socket:latency-sim");
        }
      }, {
        key: "getLatencySim",
        value: function () {
          var e = this.sessionStorage.getItem("phx:live-socket:latency-sim");
          return e ? parseInt(e) : null;
        }
      }, {
        key: "getSocket",
        value: function () {
          return this.socket;
        }
      }, {
        key: "connect",
        value: function () {
          var e = this,
              t = function () {
            e.joinRootViews() && (e.bindTopLevelEvents(), e.socket.connect());
          };

          ["complete", "loaded", "interactive"].indexOf(document.readyState) >= 0 ? t() : document.addEventListener("DOMContentLoaded", function () {
            return t();
          });
        }
      }, {
        key: "disconnect",
        value: function (e) {
          this.socket.disconnect(e);
        }
      }, {
        key: "triggerDOM",
        value: function (e, t) {
          var n;
          (n = this.domCallbacks)[e].apply(n, w(t));
        }
      }, {
        key: "time",
        value: function (e, t) {
          if (!this.isProfileEnabled() || !console.time) return t();
          console.time(e);
          var n = t();
          return console.timeEnd(e), n;
        }
      }, {
        key: "log",
        value: function (e, t, n) {
          if (this.viewLogger) {
            var i = C(n(), 2),
                r = i[0],
                o = i[1];
            this.viewLogger(e, t, r, o);
          } else if (this.isDebugEnabled()) {
            var a = C(n(), 2),
                u = a[0],
                s = a[1];
            X(e, t, u, s);
          }
        }
      }, {
        key: "onChannel",
        value: function (e, t, n) {
          var i = this;
          e.on(t, function (e) {
            var t = i.getLatencySim();
            t ? (console.log("simulating ".concat(t, "ms of latency from server to client")), setTimeout(function () {
              return n(e);
            }, t)) : n(e);
          });
        }
      }, {
        key: "wrapPush",
        value: function (e, t, n) {
          var i = this,
              r = this.getLatencySim(),
              o = e.joinCount;
          if (!r) return t.timeout ? n().receive("timeout", function () {
            e.joinCount === o && i.reloadWithJitter(e, function () {
              i.log(e, "timeout", function () {
                return ["received timeout while communicating with server. Falling back to hard refresh for recovery"];
              });
            });
          }) : n();
          console.log("simulating ".concat(r, "ms of latency from client to server"));
          var a = {
            receives: [],
            receive: function (e, t) {
              this.receives.push([e, t]);
            }
          };
          return setTimeout(function () {
            a.receives.reduce(function (e, t) {
              var n = C(t, 2),
                  i = n[0],
                  r = n[1];
              return e.receive(i, r);
            }, n());
          }, r), a;
        }
      }, {
        key: "reloadWithJitter",
        value: function (e, t) {
          var n = this;
          e.destroy(), this.disconnect();
          var i = O[0],
              r = O[1],
              o = Math.floor(Math.random() * (r - i + 1)) + i,
              a = le.updateLocal(this.localStorage, e.name(), "consecutive-reloads", 0, function (e) {
            return e + 1;
          });
          t ? t() : this.log(e, "join", function () {
            return ["encountered ".concat(a, " consecutive reloads")];
          }), a > 10 && (this.log(e, "join", function () {
            return ["exceeded ".concat(10, " consecutive reloads. Entering failsafe mode")];
          }), o = 3e4), setTimeout(function () {
            n.hasPendingLink() ? window.location = n.pendingLink : window.location.reload();
          }, o);
        }
      }, {
        key: "getHookCallbacks",
        value: function (e) {
          return e && e.startsWith("Phoenix.") ? ne[e.split(".")[1]] : this.hooks[e];
        }
      }, {
        key: "isUnloaded",
        value: function () {
          return this.unloaded;
        }
      }, {
        key: "isConnected",
        value: function () {
          return this.socket.isConnected();
        }
      }, {
        key: "getBindingPrefix",
        value: function () {
          return this.bindingPrefix;
        }
      }, {
        key: "binding",
        value: function (e) {
          return "".concat(this.getBindingPrefix()).concat(e);
        }
      }, {
        key: "channel",
        value: function (e, t) {
          return this.socket.channel(e, t);
        }
      }, {
        key: "joinRootViews",
        value: function () {
          var e = this,
              t = !1;
          return de.all(document, "".concat(B, ":not([").concat("data-phx-parent-id", "])"), function (n) {
            if (!e.getRootById(n.id)) {
              var i = e.joinRootView(n, e.getHref());
              e.root = e.root || i, n.getAttribute("data-phx-main") && (e.main = i);
            }

            t = !0;
          }), t;
        }
      }, {
        key: "redirect",
        value: function (e, t) {
          this.disconnect(), le.redirect(e, t);
        }
      }, {
        key: "replaceMain",
        value: function (e, t) {
          var n = this,
              i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.setPendingLink(e),
              o = this.main.el;
          this.main.showLoader(this.loaderTimeout), this.main.destroy(), le.fetchPage(e, function (a, u) {
            if (200 !== a) return n.redirect(e);
            var s = document.createElement("template");
            s.innerHTML = u;
            var c = s.content.childNodes[0];
            if (!c || !n.isPhxView(c)) return n.redirect(e);
            n.joinRootView(c, e, t, function (e, t) {
              1 === t && (n.commitPendingLink(r) ? (o.replaceWith(e.el), n.main = e, i && i()) : e.destroy());
            });
          });
        }
      }, {
        key: "isPhxView",
        value: function (e) {
          return e.getAttribute && null !== e.getAttribute(j);
        }
      }, {
        key: "joinRootView",
        value: function (e, t, n, i) {
          var r = new ve(e, this, null, t, n);
          return this.roots[r.id] = r, r.join(i), r;
        }
      }, {
        key: "owner",
        value: function (e, t) {
          var n = this,
              i = ee(e.closest(B), function (e) {
            return n.getViewByEl(e);
          });
          i && t(i);
        }
      }, {
        key: "withinOwners",
        value: function (e, t) {
          var n = this;
          this.owner(e, function (i) {
            var r = e.getAttribute(n.binding("target"));
            null === r ? t(i, e) : i.withinTargets(r, t);
          });
        }
      }, {
        key: "getViewByEl",
        value: function (e) {
          var t = e.getAttribute("data-phx-root-id");
          return ee(this.getRootById(t), function (t) {
            return t.getDescendentByEl(e);
          });
        }
      }, {
        key: "getRootById",
        value: function (e) {
          return this.roots[e];
        }
      }, {
        key: "destroyAllViews",
        value: function () {
          for (var e in this.roots) this.roots[e].destroy(), delete this.roots[e];
        }
      }, {
        key: "destroyViewByEl",
        value: function (e) {
          var t = this.getRootById(e.getAttribute("data-phx-root-id"));
          t && t.destroyDescendent(e.id);
        }
      }, {
        key: "setActiveElement",
        value: function (e) {
          var t = this;

          if (this.activeElement !== e) {
            this.activeElement = e;

            var n = function () {
              e === t.activeElement && (t.activeElement = null), e.removeEventListener("mouseup", t), e.removeEventListener("touchend", t);
            };

            e.addEventListener("mouseup", n), e.addEventListener("touchend", n);
          }
        }
      }, {
        key: "getActiveElement",
        value: function () {
          return document.activeElement === document.body ? this.activeElement || document.activeElement : document.activeElement || document.body;
        }
      }, {
        key: "dropActiveElement",
        value: function (e) {
          this.prevActive && e.ownsElement(this.prevActive) && (this.prevActive = null);
        }
      }, {
        key: "restorePreviouslyActiveFocus",
        value: function () {
          this.prevActive && this.prevActive !== document.body && this.prevActive.focus();
        }
      }, {
        key: "blurActiveElement",
        value: function () {
          this.prevActive = this.getActiveElement(), this.prevActive !== document.body && this.prevActive.blur();
        }
      }, {
        key: "bindTopLevelEvents",
        value: function () {
          var e = this;
          this.boundTopLevelEvents || (this.boundTopLevelEvents = !0, document.body.addEventListener("click", function () {}), window.addEventListener("pageshow", function (t) {
            t.persisted && (e.getSocket().disconnect(), e.withPageLoading({
              to: window.location.href,
              kind: "redirect"
            }), window.location.reload());
          }, !0), this.bindClicks(), this.bindNav(), this.bindForms(), this.bind({
            keyup: "keyup",
            keydown: "keydown"
          }, function (t, n, i, r, o, a, u) {
            var s = r.getAttribute(e.binding("key")),
                c = t.key && t.key.toLowerCase();
            s && s.toLowerCase() !== c || i.pushKey(r, o, n, a, A({
              key: t.key
            }, e.eventMeta(n, t, r)));
          }), this.bind({
            blur: "focusout",
            focus: "focusin"
          }, function (t, n, i, r, o, a, u) {
            u || i.pushEvent(n, r, o, a, e.eventMeta(n, t, r));
          }), this.bind({
            blur: "blur",
            focus: "focus"
          }, function (t, n, i, r, o, a, u) {
            u && "window" !== !u && i.pushEvent(n, r, o, a, e.eventMeta(n, t, r));
          }), window.addEventListener("dragover", function (e) {
            return e.preventDefault();
          }), window.addEventListener("drop", function (t) {
            t.preventDefault();
            var n = ee(Y(t.target, e.binding("drop-target")), function (t) {
              return t.getAttribute(e.binding("drop-target"));
            }),
                i = n && document.getElementById(n),
                r = Array.from(t.dataTransfer.files || []);
            i && !i.disabled && 0 !== r.length && i.files instanceof FileList && (re.trackFiles(i, r), i.dispatchEvent(new Event("input", {
              bubbles: !0
            })));
          }));
        }
      }, {
        key: "eventMeta",
        value: function (e, t, n) {
          var i = this.metadataCallbacks[e];
          return i ? i(t, n) : {};
        }
      }, {
        key: "setPendingLink",
        value: function (e) {
          return this.linkRef++, this.pendingLink = e, this.linkRef;
        }
      }, {
        key: "commitPendingLink",
        value: function (e) {
          return this.linkRef === e && (this.href = this.pendingLink, this.pendingLink = null, !0);
        }
      }, {
        key: "getHref",
        value: function () {
          return this.href;
        }
      }, {
        key: "hasPendingLink",
        value: function () {
          return !!this.pendingLink;
        }
      }, {
        key: "bind",
        value: function (e, t) {
          var n = this,
              i = function (i) {
            var r = e[i];
            n.on(r, function (e) {
              var r = n.binding(i),
                  o = n.binding("window-".concat(i)),
                  a = e.target.getAttribute && e.target.getAttribute(r);
              a ? n.debounce(e.target, e, function () {
                n.withinOwners(e.target, function (n, r) {
                  t(e, i, n, e.target, r, a, null);
                });
              }) : de.all(document, "[".concat(o, "]"), function (r) {
                var a = r.getAttribute(o);
                n.debounce(r, e, function () {
                  n.withinOwners(r, function (n, o) {
                    t(e, i, n, r, o, a, "window");
                  });
                });
              });
            });
          };

          for (var r in e) i(r);
        }
      }, {
        key: "bindClicks",
        value: function () {
          this.bindClick("click", "click", !1), this.bindClick("mousedown", "capture-click", !0);
        }
      }, {
        key: "bindClick",
        value: function (e, t, n) {
          var i = this,
              r = this.binding(t);
          window.addEventListener(e, function (e) {
            if (i.isConnected()) {
              var t = null,
                  o = (t = n ? e.target.matches("[".concat(r, "]")) ? e.target : e.target.querySelector("[".concat(r, "]")) : Y(e.target, r)) && t.getAttribute(r);
              o && ("#" === t.getAttribute("href") && e.preventDefault(), i.debounce(t, e, function () {
                i.withinOwners(t, function (n, r) {
                  n.pushEvent("click", t, r, o, i.eventMeta("click", e, t));
                });
              }));
            }
          }, n);
        }
      }, {
        key: "bindNav",
        value: function () {
          var e = this;

          if (le.canPushState()) {
            history.scrollRestoration && (history.scrollRestoration = "manual");
            var t = null;
            window.addEventListener("scroll", function (e) {
              clearTimeout(t), t = setTimeout(function () {
                le.updateCurrentState(function (e) {
                  return Object.assign(e, {
                    scroll: window.scrollY
                  });
                });
              }, 100);
            }), window.addEventListener("popstate", function (t) {
              if (e.registerNewLocation(window.location)) {
                var n = t.state || {},
                    i = n.type,
                    r = n.id,
                    o = n.root,
                    a = n.scroll,
                    u = window.location.href;
                e.main.isConnected() && "patch" === i && r === e.main.id ? e.main.pushLinkPatch(u, null) : e.replaceMain(u, null, function () {
                  o && e.replaceRootHistory(), "number" == typeof a && setTimeout(function () {
                    window.scrollTo(0, a);
                  }, 0);
                });
              }
            }, !1), window.addEventListener("click", function (t) {
              var n = Y(t.target, "data-phx-link"),
                  i = n && n.getAttribute("data-phx-link"),
                  r = t.metaKey || t.ctrlKey || 1 === t.button;

              if (i && e.isConnected() && e.main && !r) {
                var o = n.href,
                    a = n.getAttribute("data-phx-link-state");
                if (t.preventDefault(), e.pendingLink !== o) if ("patch" === i) e.pushHistoryPatch(o, a, n);else {
                  if ("redirect" !== i) throw new Error("expected ".concat("data-phx-link", ' to be "patch" or "redirect", got: ').concat(i));
                  e.historyRedirect(o, a);
                }
              }
            }, !1);
          }
        }
      }, {
        key: "withPageLoading",
        value: function (e, t) {
          de.dispatchEvent(window, "phx:page-loading-start", e);

          var n = function () {
            return de.dispatchEvent(window, "phx:page-loading-stop", e);
          };

          return t ? t(n) : n;
        }
      }, {
        key: "pushHistoryPatch",
        value: function (e, t, n) {
          var i = this;
          this.withPageLoading({
            to: e,
            kind: "patch"
          }, function (r) {
            i.main.pushLinkPatch(e, n, function (n) {
              i.historyPatch(e, t, n), r();
            });
          });
        }
      }, {
        key: "historyPatch",
        value: function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.setPendingLink(e);
          this.commitPendingLink(n) && (le.pushState(t, {
            type: "patch",
            id: this.main.id
          }, e), this.registerNewLocation(window.location));
        }
      }, {
        key: "historyRedirect",
        value: function (e, t, n) {
          var i = this,
              r = window.scrollY;
          this.withPageLoading({
            to: e,
            kind: "redirect"
          }, function (o) {
            i.replaceMain(e, n, function () {
              le.pushState(t, {
                type: "redirect",
                id: i.main.id,
                scroll: r
              }, e), i.registerNewLocation(window.location), o();
            });
          });
        }
      }, {
        key: "replaceRootHistory",
        value: function () {
          le.pushState("replace", {
            root: !0,
            type: "patch",
            id: this.main.id
          });
        }
      }, {
        key: "registerNewLocation",
        value: function (e) {
          var t = this.currentLocation;
          return t.pathname + t.search !== e.pathname + e.search && (this.currentLocation = G(e), !0);
        }
      }, {
        key: "bindForms",
        value: function () {
          var e = this,
              t = 0;
          this.on("submit", function (t) {
            var n = t.target.getAttribute(e.binding("submit"));
            n && (t.preventDefault(), t.target.disabled = !0, e.withinOwners(t.target, function (e, i) {
              return e.submitForm(t.target, i, n);
            }));
          }, !1);

          for (var n = function () {
            var n = r[i];
            e.on(n, function (i) {
              var r = i.target,
                  o = r.form && r.form.getAttribute(e.binding("change"));

              if (o && ("number" !== r.type || !r.validity || !r.validity.badInput)) {
                var a = t;
                t++;
                var u = de.private(r, "prev-iteration") || {},
                    s = u.at,
                    c = u.type;
                s === a - 1 && n !== c || (de.putPrivate(r, "prev-iteration", {
                  at: a,
                  type: n
                }), e.debounce(r, i, function () {
                  e.withinOwners(r.form, function (t, n) {
                    de.putPrivate(r, "phx-has-focused", !0), de.isTextualInput(r) || e.setActiveElement(r), t.pushInput(r, n, o, i.target);
                  });
                }));
              }
            }, !1);
          }, i = 0, r = ["change", "input"]; i < r.length; i++) n();
        }
      }, {
        key: "debounce",
        value: function (e, t, n) {
          var i = this.binding("debounce"),
              r = this.binding("throttle"),
              o = this.defaults.debounce.toString(),
              a = this.defaults.throttle.toString();
          de.debounce(e, t, i, o, r, a, n);
        }
      }, {
        key: "silenceEvents",
        value: function (e) {
          this.silenced = !0, e(), this.silenced = !1;
        }
      }, {
        key: "on",
        value: function (e, t) {
          var n = this;
          window.addEventListener(e, function (e) {
            n.silenced || t(e);
          });
        }
      }]), e;
    }(),
        le = {
      canPushState: function () {
        return void 0 !== history.pushState;
      },
      dropLocal: function (e, t, n) {
        return e.removeItem(this.localKey(t, n));
      },
      updateLocal: function (e, t, n, i, r) {
        var o = this.getLocal(e, t, n),
            a = this.localKey(t, n),
            u = null === o ? i : r(o);
        return e.setItem(a, JSON.stringify(u)), u;
      },
      getLocal: function (e, t, n) {
        return JSON.parse(e.getItem(this.localKey(t, n)));
      },
      fetchPage: function (e, t) {
        var n = new XMLHttpRequest();
        n.open("GET", e, !0), n.timeout = 3e4, n.setRequestHeader("content-type", "text/html"), n.setRequestHeader("cache-control", "max-age=0, no-cache, no-store, must-revalidate, post-check=0, pre-check=0"), n.setRequestHeader("x-requested-with", "live-link"), n.onerror = function () {
          return t(400);
        }, n.ontimeout = function () {
          return t(504);
        }, n.onreadystatechange = function () {
          if (4 === n.readyState) {
            var i = new URL(e),
                r = i.pathname + i.search,
                o = ee(n.getResponseHeader("x-response-url") || n.responseURL, function (e) {
              return new URL(e);
            }),
                a = o ? o.pathname + o.search : null;
            return "live-link" !== n.getResponseHeader("x-requested-with") ? t(400) : null === o || a != r ? t(302) : 200 !== n.status ? t(n.status) : void t(200, n.responseText);
          }
        }, n.send();
      },
      updateCurrentState: function (e) {
        this.canPushState() && history.replaceState(e(history.state || {}), "", window.location.href);
      },
      pushState: function (e, t, n) {
        if (this.canPushState()) {
          if (n !== window.location.href) {
            if ("redirect" == t.type && t.scroll) {
              var i = history.state || {};
              i.scroll = t.scroll, history.replaceState(i, "", window.location.href);
            }

            delete t.scroll, history[e + "State"](t, "", n || null);
            var r = this.getHashTargetEl(window.location.hash);
            r ? r.scrollIntoView() : "redirect" === t.type && window.scroll(0, 0);
          }
        } else this.redirect(n);
      },
      setCookie: function (e, t) {
        document.cookie = "".concat(e, "=").concat(t);
      },
      getCookie: function (e) {
        return document.cookie.replace(new RegExp("(?:(?:^|.*;s*)".concat(e, "s*=s*([^;]*).*$)|^.*$")), "$1");
      },
      redirect: function (e, t) {
        t && le.setCookie("__phoenix_flash__", t + "; max-age=60000; path=/"), window.location = e;
      },
      localKey: function (e, t) {
        return "".concat(e, "-").concat(t);
      },
      getHashTargetEl: function (e) {
        var t = e.toString().substring(1);
        if ("" !== t) return document.getElementById(t) || document.querySelector('a[name="'.concat(t, '"]'));
      }
    },
        de = {
      byId: function (e) {
        return document.getElementById(e) || K("no id found for ".concat(e));
      },
      removeClass: function (e, t) {
        e.classList.remove(t), 0 === e.classList.length && e.removeAttribute("class");
      },
      all: function (e, t, n) {
        var i = Array.from(e.querySelectorAll(t));
        return n ? i.forEach(n) : i;
      },
      childNodeLength: function (e) {
        var t = document.createElement("template");
        return t.innerHTML = e, t.content.childElementCount;
      },
      isUploadInput: function (e) {
        return "file" === e.type && null !== e.getAttribute(U);
      },
      findUploadInputs: function (e) {
        return this.all(e, 'input[type="file"]['.concat(U, "]"));
      },
      findComponentNodeList: function (e, t) {
        return this.filterWithinSameLiveView(this.all(e, "[".concat(M, '="').concat(t, '"]')), e);
      },
      isPhxDestroyed: function (e) {
        return !(!e.id || !de.private(e, "destroyed"));
      },
      markPhxChildDestroyed: function (e) {
        e.setAttribute("data-phx-session", ""), this.putPrivate(e, "destroyed", !0);
      },
      findPhxChildrenInFragment: function (e, t) {
        var n = document.createElement("template");
        return n.innerHTML = e, this.findPhxChildren(n.content, t);
      },
      isIgnored: function (e, t) {
        return "ignore" === (e.getAttribute(t) || e.getAttribute("data-phx-update"));
      },
      isPhxUpdate: function (e, t, n) {
        return e.getAttribute && n.indexOf(e.getAttribute(t)) >= 0;
      },
      findPhxChildren: function (e, t) {
        return this.all(e, "".concat(B, "[").concat("data-phx-parent-id", '="').concat(t, '"]'));
      },
      findParentCIDs: function (e, t) {
        var n = this,
            i = new Set(t);
        return t.reduce(function (t, i) {
          var r = "[".concat(M, '="').concat(i, '"] [').concat(M, "]");
          return n.filterWithinSameLiveView(n.all(e, r), e).map(function (e) {
            return parseInt(e.getAttribute(M));
          }).forEach(function (e) {
            return t.delete(e);
          }), t;
        }, i);
      },
      filterWithinSameLiveView: function (e, t) {
        var n = this;
        return t.querySelector(B) ? e.filter(function (e) {
          return n.withinSameLiveView(e, t);
        }) : e;
      },
      withinSameLiveView: function (e, t) {
        for (; e = e.parentNode;) {
          if (e.isSameNode(t)) return !0;
          if (e.getAttribute(j)) return !1;
        }
      },
      private: function (e, t) {
        return e.phxPrivate && e.phxPrivate[t];
      },
      deletePrivate: function (e, t) {
        e.phxPrivate && delete e.phxPrivate[t];
      },
      putPrivate: function (e, t, n) {
        e.phxPrivate || (e.phxPrivate = {}), e.phxPrivate[t] = n;
      },
      copyPrivates: function (e, t) {
        t.phxPrivate && (e.phxPrivate = G(t.phxPrivate));
      },
      putTitle: function (e) {
        var t = document.querySelector("title").dataset,
            n = t.prefix,
            i = t.suffix;
        document.title = "".concat(n || "").concat(e).concat(i || "");
      },
      debounce: function (e, t, n, i, r, o, a) {
        var u = this,
            s = e.getAttribute(n),
            c = e.getAttribute(r);
        "" === s && (s = i), "" === c && (c = o);
        var l = s || c;

        switch (l) {
          case null:
            return a();

          case "blur":
            return void (this.once(e, "debounce-blur") && e.addEventListener("blur", function () {
              return a();
            }));

          default:
            var d = parseInt(l),
                h = this.incCycle(e, "debounce-trigger", function () {
              return c ? u.deletePrivate(e, "throttled") : a();
            });
            if (isNaN(d)) return K("invalid throttle/debounce value: ".concat(l));

            if (c) {
              var f = !1;

              if ("keydown" === t.type) {
                var v = this.private(e, "debounce-prev-key");
                this.putPrivate(e, "debounce-prev-key", t.key), f = v !== t.key;
              }

              if (!f && this.private(e, "throttled")) return !1;
              a(), this.putPrivate(e, "throttled", !0), setTimeout(function () {
                return u.triggerCycle(e, "debounce-trigger");
              }, d);
            } else setTimeout(function () {
              return u.triggerCycle(e, "debounce-trigger", h);
            }, d);

            var p = e.form;
            p && this.once(p, "bind-debounce") && p.addEventListener("submit", function (e) {
              Array.from(new FormData(p).entries(), function (e) {
                var t = C(e, 2),
                    n = t[0],
                    i = (t[1], p.querySelector('[name="'.concat(n, '"]')));
                u.incCycle(i, "debounce-trigger"), u.deletePrivate(i, "throttled");
              });
            }), this.once(e, "bind-debounce") && e.addEventListener("blur", function (t) {
              return u.triggerCycle(e, "debounce-trigger");
            });
        }
      },
      triggerCycle: function (e, t, n) {
        var i = C(this.private(e, t), 2),
            r = i[0],
            o = i[1];
        n || (n = r), n === r && (this.incCycle(e, t), o());
      },
      once: function (e, t) {
        return !0 !== this.private(e, t) && (this.putPrivate(e, t, !0), !0);
      },
      incCycle: function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {},
            i = C(this.private(e, t) || [0, n], 2),
            r = i[0];
        i[1];
        return r++, this.putPrivate(e, t, [r, n]), r;
      },
      discardError: function (e, t, n) {
        var i = t.getAttribute && t.getAttribute(n),
            r = i && e.querySelector('[id="'.concat(i, '"], [name="').concat(i, '"]'));
        r && (this.private(r, "phx-has-focused") || this.private(r.form, "phx-has-submitted") || t.classList.add("phx-no-feedback"));
      },
      showError: function (e, t) {
        var n = this;
        (e.id || e.name) && this.all(e.form, "[".concat(t, '="').concat(e.id, '"], [').concat(t, '="').concat(e.name, '"]'), function (e) {
          n.removeClass(e, "phx-no-feedback");
        });
      },
      isPhxChild: function (e) {
        return e.getAttribute && e.getAttribute("data-phx-parent-id");
      },
      dispatchEvent: function (e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = new CustomEvent(t, {
          bubbles: !0,
          cancelable: !0,
          detail: n
        });
        e.dispatchEvent(i);
      },
      cloneNode: function (e, t) {
        if (void 0 === t) return e.cloneNode(!0);
        var n = e.cloneNode(!1);
        return n.innerHTML = t, n;
      },
      mergeAttrs: function (e, t) {
        for (var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = n.exclude || [], r = n.isIgnored, o = t.attributes, a = o.length - 1; a >= 0; a--) {
          var u = o[a].name;
          i.indexOf(u) < 0 && e.setAttribute(u, t.getAttribute(u));
        }

        for (var s = e.attributes, c = s.length - 1; c >= 0; c--) {
          var l = s[c].name;
          r ? l.startsWith("data-") && !t.hasAttribute(l) && e.removeAttribute(l) : t.hasAttribute(l) || e.removeAttribute(l);
        }
      },
      mergeFocusedInput: function (e, t) {
        e instanceof HTMLSelectElement || de.mergeAttrs(e, t, {
          except: ["value"]
        }), t.readOnly ? e.setAttribute("readonly", !0) : e.removeAttribute("readonly");
      },
      hasSelectionRange: function (e) {
        return e.setSelectionRange && ("text" === e.type || "textarea" === e.type);
      },
      restoreFocus: function (e, t, n) {
        if (de.isTextualInput(e)) {
          var i = e.matches(":focus");
          e.readOnly && e.blur(), i || e.focus(), this.hasSelectionRange(e) && e.setSelectionRange(t, n);
        }
      },
      isFormInput: function (e) {
        return /^(?:input|select|textarea)$/i.test(e.tagName) && "button" !== e.type;
      },
      syncAttrsToProps: function (e) {
        e instanceof HTMLInputElement && V.indexOf(e.type.toLocaleLowerCase()) >= 0 && (e.checked = null !== e.getAttribute("checked"));
      },
      isTextualInput: function (e) {
        return J.indexOf(e.type) >= 0;
      },
      isNowTriggerFormExternal: function (e, t) {
        return e.getAttribute && null !== e.getAttribute(t);
      },
      syncPendingRef: function (e, t, n) {
        var i = e.getAttribute(F);
        return null === i || (de.isFormInput(e) || null !== e.getAttribute(n) ? (de.isUploadInput(e) && de.mergeAttrs(e, t, {
          isIgnored: !0
        }), de.putPrivate(e, F, t), !1) : (H.forEach(function (n) {
          e.classList.contains(n) && t.classList.add(n);
        }), t.setAttribute(F, i), !0));
      },
      cleanChildNodes: function (e, t) {
        if (de.isPhxUpdate(e, t, ["append", "prepend"])) {
          var n = [];
          e.childNodes.forEach(function (e) {
            e.id || (e.nodeType === Node.TEXT_NODE && "" === e.nodeValue.trim() || K("only HTML element tags with an id are allowed inside containers with phx-update.\n\n" + 'removing illegal node: "'.concat((e.outerHTML || e.nodeValue).trim(), '"\n\n')), n.push(e));
          }), n.forEach(function (e) {
            return e.remove();
          });
        }
      }
    },
        he = function () {
      function e(t, n, i) {
        D(this, e);
        var r = new Set(),
            o = new Set(w(n.children).map(function (e) {
          return e.id;
        })),
            a = [];
        Array.from(t.children).forEach(function (e) {
          if (e.id && (r.add(e.id), o.has(e.id))) {
            var t = e.previousElementSibling && e.previousElementSibling.id;
            a.push({
              elementId: e.id,
              previousElementId: t
            });
          }
        }), this.containerId = n.id, this.updateType = i, this.elementsToModify = a, this.elementIdsToAdd = w(o).filter(function (e) {
          return !r.has(e);
        });
      }

      return N(e, [{
        key: "perform",
        value: function () {
          var e = de.byId(this.containerId);
          this.elementsToModify.forEach(function (t) {
            t.previousElementId ? ee(document.getElementById(t.previousElementId), function (e) {
              ee(document.getElementById(t.elementId), function (t) {
                t.previousElementSibling && t.previousElementSibling.id == e.id || e.insertAdjacentElement("afterend", t);
              });
            }) : ee(document.getElementById(t.elementId), function (t) {
              null == t.previousElementSibling || e.insertAdjacentElement("afterbegin", t);
            });
          }), "prepend" == this.updateType && this.elementIdsToAdd.reverse().forEach(function (t) {
            ee(document.getElementById(t), function (t) {
              return e.insertAdjacentElement("afterbegin", t);
            });
          });
        }
      }]), e;
    }(),
        fe = function () {
      function e(t, n, i, r, o) {
        D(this, e), this.view = t, this.liveSocket = t.liveSocket, this.container = n, this.id = i, this.rootID = t.root.id, this.html = r, this.targetCID = o, this.cidPatch = "number" == typeof this.targetCID, this.callbacks = {
          beforeadded: [],
          beforeupdated: [],
          beforephxChildAdded: [],
          afteradded: [],
          afterupdated: [],
          afterdiscarded: [],
          afterphxChildAdded: []
        };
      }

      return N(e, null, [{
        key: "patchEl",
        value: function (e, t, n) {
          k(e, t, {
            childrenOnly: !1,
            onBeforeElUpdated: function (e, t) {
              if (n && n.isSameNode(e) && de.isFormInput(e)) return de.mergeFocusedInput(e, t), !1;
            }
          });
        }
      }]), N(e, [{
        key: "before",
        value: function (e, t) {
          this.callbacks["before".concat(e)].push(t);
        }
      }, {
        key: "after",
        value: function (e, t) {
          this.callbacks["after".concat(e)].push(t);
        }
      }, {
        key: "trackBefore",
        value: function (e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];

          this.callbacks["before".concat(e)].forEach(function (e) {
            return e.apply(void 0, n);
          });
        }
      }, {
        key: "trackAfter",
        value: function (e) {
          for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];

          this.callbacks["after".concat(e)].forEach(function (e) {
            return e.apply(void 0, n);
          });
        }
      }, {
        key: "markPrunableContentForRemoval",
        value: function () {
          de.all(this.container, "[phx-update=append] > *, [phx-update=prepend] > *", function (e) {
            e.setAttribute("data-phx-remove", "");
          });
        }
      }, {
        key: "perform",
        value: function () {
          var e = this,
              t = this.view,
              n = this.liveSocket,
              i = this.container,
              r = this.html,
              o = this.isCIDPatch() ? this.targetCIDContainer(r) : i;

          if (!this.isCIDPatch() || o) {
            var a = n.getActiveElement(),
                u = a && de.hasSelectionRange(a) ? a : {},
                s = u.selectionStart,
                c = u.selectionEnd,
                l = n.binding("update"),
                d = n.binding("feedback-for"),
                h = n.binding("disable-with"),
                f = n.binding("trigger-action"),
                v = [],
                p = [],
                g = [],
                m = null,
                y = n.time("premorph container prep", function () {
              return e.buildDiffHTML(i, r, l, o);
            });
            return this.trackBefore("added", i), this.trackBefore("updated", i, i), n.time("morphdom", function () {
              k(o, y, {
                childrenOnly: null === o.getAttribute(M),
                getNodeKey: function (e) {
                  return de.isPhxDestroyed(e) ? null : e.id;
                },
                onBeforeNodeAdded: function (t) {
                  return de.discardError(o, t, d), e.trackBefore("added", t), t;
                },
                onNodeAdded: function (n) {
                  de.isNowTriggerFormExternal(n, f) && (m = n), de.isPhxChild(n) && t.ownsElement(n) && e.trackAfter("phxChildAdded", n), v.push(n);
                },
                onNodeDiscarded: function (t) {
                  de.isPhxChild(t) && n.destroyViewByEl(t), e.trackAfter("discarded", t);
                },
                onBeforeNodeDiscarded: function (t) {
                  return !(!t.getAttribute || null === t.getAttribute("data-phx-remove")) || (null === t.parentNode || !de.isPhxUpdate(t.parentNode, l, ["append", "prepend"]) || !t.id) && !e.skipCIDSibling(t);
                },
                onElUpdated: function (e) {
                  de.isNowTriggerFormExternal(e, f) && (m = e), p.push(e);
                },
                onBeforeElUpdated: function (t, n) {
                  if (de.cleanChildNodes(n, l), e.skipCIDSibling(n)) return !1;
                  if (de.isIgnored(t, l)) return e.trackBefore("updated", t, n), de.mergeAttrs(t, n, {
                    isIgnored: !0
                  }), p.push(t), !1;
                  if ("number" === t.type && t.validity && t.validity.badInput) return !1;
                  if (!de.syncPendingRef(t, n, h)) return de.isUploadInput(t) && (e.trackBefore("updated", t, n), p.push(t)), !1;

                  if (de.isPhxChild(n)) {
                    var i = t.getAttribute("data-phx-session");
                    return de.mergeAttrs(t, n, {
                      exclude: ["data-phx-static"]
                    }), "" !== i && t.setAttribute("data-phx-session", i), t.setAttribute("data-phx-root-id", e.rootID), !1;
                  }

                  return de.copyPrivates(n, t), de.discardError(o, n, d), a && t.isSameNode(a) && de.isFormInput(t) && !e.forceFocusedSelectUpdate(t, n) ? (e.trackBefore("updated", t, n), de.mergeFocusedInput(t, n), de.syncAttrsToProps(t), p.push(t), !1) : (de.isPhxUpdate(n, l, ["append", "prepend"]) && g.push(new he(t, n, n.getAttribute(l))), de.syncAttrsToProps(n), e.trackBefore("updated", t, n), !0);
                }
              });
            }), n.isDebugEnabled() && function () {
              for (var e = new Set(), t = document.querySelectorAll("*[id]"), n = 0, i = t.length; n < i; n++) e.has(t[n].id) ? console.error("Multiple IDs detected: ".concat(t[n].id, ". Ensure unique element ids.")) : e.add(t[n].id);
            }(), g.length > 0 && n.time("post-morph append/prepend restoration", function () {
              g.forEach(function (e) {
                return e.perform();
              });
            }), n.silenceEvents(function () {
              return de.restoreFocus(a, s, c);
            }), de.dispatchEvent(document, "phx:update"), v.forEach(function (t) {
              return e.trackAfter("added", t);
            }), p.forEach(function (t) {
              return e.trackAfter("updated", t);
            }), m && (n.disconnect(), m.submit()), !0;
          }
        }
      }, {
        key: "forceFocusedSelectUpdate",
        value: function (e, t) {
          var n = ["select", "select-one", "select-multiple"].find(function (t) {
            return t === e.type;
          });
          return !0 === e.multiple || n && e.innerHTML != t.innerHTML;
        }
      }, {
        key: "isCIDPatch",
        value: function () {
          return this.cidPatch;
        }
      }, {
        key: "skipCIDSibling",
        value: function (e) {
          return e.nodeType === Node.ELEMENT_NODE && null !== e.getAttribute("data-phx-skip");
        }
      }, {
        key: "targetCIDContainer",
        value: function (e) {
          if (this.isCIDPatch()) {
            var t = b(de.findComponentNodeList(this.container, this.targetCID)),
                n = t[0];
            return 0 === t.slice(1).length && 1 === de.childNodeLength(e) ? n : n && n.parentNode;
          }
        }
      }, {
        key: "buildDiffHTML",
        value: function (e, t, n, i) {
          var r = this,
              o = this.isCIDPatch(),
              a = o && i.getAttribute(M) === this.targetCID.toString();
          if (!o || a) return t;
          var u = null,
              s = document.createElement("template");
          u = de.cloneNode(i);
          var c = b(de.findComponentNodeList(u, this.targetCID)),
              l = c[0],
              d = c.slice(1);
          return s.innerHTML = t, d.forEach(function (e) {
            return e.remove();
          }), Array.from(u.childNodes).forEach(function (e) {
            e.id && e.nodeType === Node.ELEMENT_NODE && e.getAttribute(M) !== r.targetCID.toString() && (e.setAttribute("data-phx-skip", ""), e.innerHTML = "");
          }), Array.from(s.content.childNodes).forEach(function (e) {
            return u.insertBefore(e, l);
          }), l.remove(), u.outerHTML;
        }
      }]), e;
    }(),
        ve = function () {
      function e(t, n, i, r, o) {
        var a = this;
        D(this, e), this.liveSocket = n, this.flash = o, this.parent = i, this.root = i ? i.root : this, this.el = t, this.id = this.el.id, this.view = this.el.getAttribute(j), this.ref = 0, this.childJoins = 0, this.loaderTimer = null, this.pendingDiffs = [], this.pruningCIDs = [], this.href = r, this.joinCount = this.parent ? this.parent.joinCount - 1 : 0, this.joinPending = !0, this.destroyed = !1, this.joinCallback = function () {}, this.stopCallback = function () {}, this.pendingJoinOps = this.parent ? null : [], this.viewHooks = {}, this.uploaders = {}, this.formSubmits = [], this.children = this.parent ? null : {}, this.root.children[this.id] = {}, this.channel = this.liveSocket.channel("lv:".concat(this.id), function () {
          return {
            url: a.href,
            params: a.connectParams(),
            session: a.getSession(),
            static: a.getStatic(),
            flash: a.flash
          };
        }), this.showLoader(this.liveSocket.loaderTimeout), this.bindChannel();
      }

      return N(e, [{
        key: "isMain",
        value: function () {
          return this.liveSocket.main === this;
        }
      }, {
        key: "connectParams",
        value: function () {
          var e = this.liveSocket.params(this.view),
              t = de.all(document, "[".concat(this.binding("track-static"), "]")).map(function (e) {
            return e.src || e.href;
          }).filter(function (e) {
            return "string" == typeof e;
          });
          return t.length > 0 && (e._track_static = t), e._mounts = this.joinCount, e;
        }
      }, {
        key: "name",
        value: function () {
          return this.view;
        }
      }, {
        key: "isConnected",
        value: function () {
          return this.channel.canPush();
        }
      }, {
        key: "getSession",
        value: function () {
          return this.el.getAttribute("data-phx-session");
        }
      }, {
        key: "getStatic",
        value: function () {
          var e = this.el.getAttribute("data-phx-static");
          return "" === e ? null : e;
        }
      }, {
        key: "destroy",
        value: function () {
          var e = this,
              t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function () {};
          this.destroyAllChildren(), this.destroyed = !0, delete this.root.children[this.id], this.parent && delete this.root.children[this.parent.id][this.id], clearTimeout(this.loaderTimer);

          var n = function () {
            for (var n in t(), e.viewHooks) e.destroyHook(e.viewHooks[n]);
          };

          de.markPhxChildDestroyed(this.el), this.log("destroyed", function () {
            return ["the child has been removed from the parent"];
          }), this.channel.leave().receive("ok", n).receive("error", n).receive("timeout", n);
        }
      }, {
        key: "setContainerClasses",
        value: function () {
          var e;
          this.el.classList.remove("phx-connected", "phx-disconnected", "phx-error"), (e = this.el.classList).add.apply(e, arguments);
        }
      }, {
        key: "isLoading",
        value: function () {
          return this.el.classList.contains("phx-disconnected");
        }
      }, {
        key: "showLoader",
        value: function (e) {
          var t = this;
          if (clearTimeout(this.loaderTimer), e) this.loaderTimer = setTimeout(function () {
            return t.showLoader();
          }, e);else {
            for (var n in this.viewHooks) this.viewHooks[n].__disconnected();

            this.setContainerClasses("phx-disconnected");
          }
        }
      }, {
        key: "hideLoader",
        value: function () {
          clearTimeout(this.loaderTimer), this.setContainerClasses("phx-connected");
        }
      }, {
        key: "triggerReconnected",
        value: function () {
          for (var e in this.viewHooks) this.viewHooks[e].__reconnected();
        }
      }, {
        key: "log",
        value: function (e, t) {
          this.liveSocket.log(this, e, t);
        }
      }, {
        key: "withinTargets",
        value: function (e, t) {
          var n = this;
          if (e instanceof HTMLElement) return this.liveSocket.owner(e, function (n) {
            return t(n, e);
          });

          if (/^(0|[1-9]\d*)$/.test(e)) {
            var i = de.findComponentNodeList(this.el, e);
            0 === i.length ? K("no component found matching phx-target of ".concat(e)) : t(this, i[0]);
          } else {
            var r = Array.from(document.querySelectorAll(e));
            0 === r.length && K('nothing found matching the phx-target selector "'.concat(e, '"')), r.forEach(function (e) {
              return n.liveSocket.owner(e, function (n) {
                return t(n, e);
              });
            });
          }
        }
      }, {
        key: "applyDiff",
        value: function (e, t, n) {
          this.log(e, function () {
            return ["", G(t)];
          });
          var i = se.extract(t),
              r = i.diff,
              o = i.reply,
              a = i.events,
              u = i.title;
          return u && de.putTitle(u), n({
            diff: r,
            reply: o,
            events: a
          }), o;
        }
      }, {
        key: "onJoin",
        value: function (e) {
          var t = this,
              n = e.rendered;
          this.childJoins = 0, this.joinPending = !0, this.flash = null, le.dropLocal(this.liveSocket.localStorage, this.name(), "consecutive-reloads"), this.applyDiff("mount", n, function (n) {
            var i = n.diff,
                r = n.events;
            t.rendered = new se(t.id, i);
            var o = t.renderContainer(null, "join");
            t.dropPendingRefs();
            var a = t.formsForRecovery(o);
            t.joinCount++, a.length > 0 ? a.forEach(function (e, n) {
              t.pushFormRecovery(e, function (e) {
                n === a.length - 1 && t.onJoinComplete(e, o, r);
              });
            }) : t.onJoinComplete(e, o, r);
          });
        }
      }, {
        key: "dropPendingRefs",
        value: function () {
          de.all(this.el, "[".concat(F, "]"), function (e) {
            return e.removeAttribute(F);
          });
        }
      }, {
        key: "onJoinComplete",
        value: function (e, t, n) {
          var i = this,
              r = e.live_patch;
          if (this.joinCount > 1 || this.parent && !this.parent.isJoinPending()) return this.applyJoinPatch(r, t, n);
          0 === de.findPhxChildrenInFragment(t, this.id).filter(function (e) {
            var t = e.id && i.el.querySelector("#".concat(e.id)),
                n = t && t.getAttribute("data-phx-static");
            return n && e.setAttribute("data-phx-static", n), i.joinChild(e);
          }).length ? this.parent ? (this.root.pendingJoinOps.push([this, function () {
            return i.applyJoinPatch(r, t, n);
          }]), this.parent.ackJoin(this)) : (this.onAllChildJoinsComplete(), this.applyJoinPatch(r, t, n)) : this.root.pendingJoinOps.push([this, function () {
            return i.applyJoinPatch(r, t, n);
          }]);
        }
      }, {
        key: "attachTrueDocEl",
        value: function () {
          this.el = de.byId(this.id), this.el.setAttribute("data-phx-root-id", this.root.id);
        }
      }, {
        key: "dispatchEvents",
        value: function (e) {
          e.forEach(function (e) {
            var t = C(e, 2),
                n = t[0],
                i = t[1];
            window.dispatchEvent(new CustomEvent("phx:hook:".concat(n), {
              detail: i
            }));
          });
        }
      }, {
        key: "applyJoinPatch",
        value: function (e, t, n) {
          var i = this;
          this.attachTrueDocEl();
          var r = new fe(this, this.el, this.id, t, null);

          if (r.markPrunableContentForRemoval(), this.performPatch(r, !1), this.joinNewChildren(), de.all(this.el, "[".concat(this.binding("hook"), "], [data-phx-").concat("hook", "]"), function (e) {
            var t = i.addHook(e);
            t && t.__mounted();
          }), this.joinPending = !1, this.dispatchEvents(n), this.applyPendingUpdates(), e) {
            var o = e.kind,
                a = e.to;
            this.liveSocket.historyPatch(a, o);
          }

          this.hideLoader(), this.joinCount > 1 && this.triggerReconnected(), this.stopCallback();
        }
      }, {
        key: "triggerBeforeUpdateHook",
        value: function (e, t) {
          this.liveSocket.triggerDOM("onBeforeElUpdated", [e, t]);
          var n = this.getHook(e),
              i = n && de.isIgnored(e, this.binding("update"));
          if (n && !e.isEqualNode(t) && (!i || !function (e, t) {
            return JSON.stringify(e) === JSON.stringify(t);
          }(e.dataset, t.dataset))) return n.__beforeUpdate(), n;
        }
      }, {
        key: "performPatch",
        value: function (e, t) {
          var n = this,
              i = [],
              r = !1,
              o = new Set();
          return e.after("added", function (e) {
            n.liveSocket.triggerDOM("onNodeAdded", [e]);
            var t = n.addHook(e);
            t && t.__mounted();
          }), e.after("phxChildAdded", function (e) {
            return r = !0;
          }), e.before("updated", function (e, t) {
            n.triggerBeforeUpdateHook(e, t) && o.add(e.id);
          }), e.after("updated", function (e) {
            o.has(e.id) && n.getHook(e).__updated();
          }), e.after("discarded", function (e) {
            var t = n.componentID(e);
            "number" == typeof t && -1 === i.indexOf(t) && i.push(t);
            var r = n.getHook(e);
            r && n.destroyHook(r);
          }), e.perform(), t && this.maybePushComponentsDestroyed(i), r;
        }
      }, {
        key: "joinNewChildren",
        value: function () {
          var e = this;
          de.findPhxChildren(this.el, this.id).forEach(function (t) {
            return e.joinChild(t);
          });
        }
      }, {
        key: "getChildById",
        value: function (e) {
          return this.root.children[this.id][e];
        }
      }, {
        key: "getDescendentByEl",
        value: function (e) {
          return e.id === this.id ? this : this.children[e.getAttribute("data-phx-parent-id")][e.id];
        }
      }, {
        key: "destroyDescendent",
        value: function (e) {
          for (var t in this.root.children) for (var n in this.root.children[t]) if (n === e) return this.root.children[t][n].destroy();
        }
      }, {
        key: "joinChild",
        value: function (t) {
          if (!this.getChildById(t.id)) {
            var n = new e(t, this.liveSocket, this);
            return this.root.children[this.id][n.id] = n, n.join(), this.childJoins++, !0;
          }
        }
      }, {
        key: "isJoinPending",
        value: function () {
          return this.joinPending;
        }
      }, {
        key: "ackJoin",
        value: function (e) {
          this.childJoins--, 0 === this.childJoins && (this.parent ? this.parent.ackJoin(this) : this.onAllChildJoinsComplete());
        }
      }, {
        key: "onAllChildJoinsComplete",
        value: function () {
          this.joinCallback(), this.pendingJoinOps.forEach(function (e) {
            var t = C(e, 2),
                n = t[0],
                i = t[1];
            n.isDestroyed() || i();
          }), this.pendingJoinOps = [];
        }
      }, {
        key: "update",
        value: function (e, t) {
          var n = this;
          if (this.isJoinPending() || this.liveSocket.hasPendingLink()) return this.pendingDiffs.push({
            diff: e,
            events: t
          });
          this.rendered.mergeDiff(e);
          var i = !1;
          this.rendered.isComponentOnlyDiff(e) ? this.liveSocket.time("component patch complete", function () {
            de.findParentCIDs(n.el, n.rendered.componentCIDs(e)).forEach(function (t) {
              n.componentPatch(n.rendered.getComponent(e, t), t) && (i = !0);
            });
          }) : Z(e) || this.liveSocket.time("full patch complete", function () {
            var t = n.renderContainer(e, "update"),
                r = new fe(n, n.el, n.id, t, null);
            i = n.performPatch(r, !0);
          }), this.dispatchEvents(t), i && this.joinNewChildren();
        }
      }, {
        key: "renderContainer",
        value: function (e, t) {
          var n = this;
          return this.liveSocket.time("toString diff (".concat(t, ")"), function () {
            var t = n.el.tagName,
                i = e ? n.rendered.componentCIDs(e).concat(n.pruningCIDs) : null,
                r = n.rendered.toString(i);
            return "<".concat(t, ">").concat(r, "</").concat(t, ">");
          });
        }
      }, {
        key: "componentPatch",
        value: function (e, t) {
          if (Z(e)) return !1;
          var n = this.rendered.componentToString(t),
              i = new fe(this, this.el, this.id, n, t);
          return this.performPatch(i, !0);
        }
      }, {
        key: "getHook",
        value: function (e) {
          return this.viewHooks[ge.elementID(e)];
        }
      }, {
        key: "addHook",
        value: function (e) {
          if (!ge.elementID(e) && e.getAttribute) {
            var t = e.getAttribute("data-phx-".concat("hook")) || e.getAttribute(this.binding("hook"));

            if (!t || this.ownsElement(e)) {
              var n = this.liveSocket.getHookCallbacks(t);

              if (n) {
                e.id || K('no DOM ID for hook "'.concat(t, '". Hooks require a unique ID on each element.'), e);
                var i = new ge(this, e, n);
                return this.viewHooks[ge.elementID(i.el)] = i, i;
              }

              null !== t && K('unknown hook found for "'.concat(t, '"'), e);
            }
          }
        }
      }, {
        key: "destroyHook",
        value: function (e) {
          e.__destroyed(), e.__cleanup__(), delete this.viewHooks[ge.elementID(e.el)];
        }
      }, {
        key: "applyPendingUpdates",
        value: function () {
          var e = this;
          this.pendingDiffs.forEach(function (t) {
            var n = t.diff,
                i = t.events;
            return e.update(n, i);
          }), this.pendingDiffs = [];
        }
      }, {
        key: "onChannel",
        value: function (e, t) {
          var n = this;
          this.liveSocket.onChannel(this.channel, e, function (e) {
            n.isJoinPending() ? n.root.pendingJoinOps.push([n, function () {
              return t(e);
            }]) : t(e);
          });
        }
      }, {
        key: "bindChannel",
        value: function () {
          var e = this;
          this.liveSocket.onChannel(this.channel, "diff", function (t) {
            e.applyDiff("update", t, function (t) {
              var n = t.diff,
                  i = t.events;
              return e.update(n, i);
            });
          }), this.onChannel("redirect", function (t) {
            var n = t.to,
                i = t.flash;
            return e.onRedirect({
              to: n,
              flash: i
            });
          }), this.onChannel("live_patch", function (t) {
            return e.onLivePatch(t);
          }), this.onChannel("live_redirect", function (t) {
            return e.onLiveRedirect(t);
          }), this.channel.onError(function (t) {
            return e.onError(t);
          }), this.channel.onClose(function (t) {
            return e.onClose(t);
          });
        }
      }, {
        key: "destroyAllChildren",
        value: function () {
          for (var e in this.root.children[this.id]) this.getChildById(e).destroy();
        }
      }, {
        key: "onLiveRedirect",
        value: function (e) {
          var t = e.to,
              n = e.kind,
              i = e.flash,
              r = this.expandURL(t);
          this.liveSocket.historyRedirect(r, n, i);
        }
      }, {
        key: "onLivePatch",
        value: function (e) {
          var t = e.to,
              n = e.kind;
          this.href = this.expandURL(t), this.liveSocket.historyPatch(t, n);
        }
      }, {
        key: "expandURL",
        value: function (e) {
          return e.startsWith("/") ? "".concat(window.location.protocol, "//").concat(window.location.host).concat(e) : e;
        }
      }, {
        key: "onRedirect",
        value: function (e) {
          var t = e.to,
              n = e.flash;
          this.liveSocket.redirect(t, n);
        }
      }, {
        key: "isDestroyed",
        value: function () {
          return this.destroyed;
        }
      }, {
        key: "join",
        value: function (e) {
          var t = this;
          this.parent || (this.stopCallback = this.liveSocket.withPageLoading({
            to: this.href,
            kind: "initial"
          })), this.joinCallback = function () {
            return e && e(t, t.joinCount);
          }, this.liveSocket.wrapPush(this, {
            timeout: !1
          }, function () {
            return t.channel.join().receive("ok", function (e) {
              return t.onJoin(e);
            }).receive("error", function (e) {
              return t.onJoinError(e);
            }).receive("timeout", function () {
              return t.onJoinError({
                reason: "timeout"
              });
            });
          });
        }
      }, {
        key: "onJoinError",
        value: function (e) {
          return (e.redirect || e.live_redirect) && (this.joinPending = !1, this.channel.leave()), e.redirect ? this.onRedirect(e.redirect) : e.live_redirect ? this.onLiveRedirect(e.live_redirect) : (this.log("error", function () {
            return ["unable to join", e];
          }), this.liveSocket.reloadWithJitter(this));
        }
      }, {
        key: "onClose",
        value: function (e) {
          if (!this.isDestroyed()) {
            if (this.isJoinPending() && "hidden" !== document.visibilityState || this.liveSocket.hasPendingLink() && "leave" !== e) return this.liveSocket.reloadWithJitter(this);
            this.destroyAllChildren(), this.liveSocket.dropActiveElement(this), document.activeElement && document.activeElement.blur(), this.liveSocket.isUnloaded() && this.showLoader(200);
          }
        }
      }, {
        key: "onError",
        value: function (e) {
          this.onClose(e), this.log("error", function () {
            return ["view crashed", e];
          }), this.liveSocket.isUnloaded() || this.displayError();
        }
      }, {
        key: "displayError",
        value: function () {
          this.isMain() && de.dispatchEvent(window, "phx:page-loading-start", {
            to: this.href,
            kind: "error"
          }), this.showLoader(), this.setContainerClasses("phx-disconnected", "phx-error");
        }
      }, {
        key: "pushWithReply",
        value: function (e, t, n) {
          var i = this,
              r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function () {};

          if (this.isConnected()) {
            var o = C(e ? e() : [null, []], 2),
                a = o[0],
                u = C(o[1], 1)[0],
                s = function () {};

            return u && null !== u.getAttribute(this.binding("page-loading")) && (s = this.liveSocket.withPageLoading({
              kind: "element",
              target: u
            })), "number" != typeof n.cid && delete n.cid, this.liveSocket.wrapPush(this, {
              timeout: !0
            }, function () {
              return i.channel.push(t, n, 3e4).receive("ok", function (e) {
                var t = null;
                null !== a && i.undoRefs(a), e.diff && (t = i.applyDiff("update", e.diff, function (e) {
                  var t = e.diff,
                      n = e.events;
                  i.update(t, n);
                })), e.redirect && i.onRedirect(e.redirect), e.live_patch && i.onLivePatch(e.live_patch), e.live_redirect && i.onLiveRedirect(e.live_redirect), s(), r(e, t);
              });
            });
          }
        }
      }, {
        key: "undoRefs",
        value: function (e) {
          var t = this;
          de.all(this.el, "[".concat(F, '="').concat(e, '"]'), function (e) {
            e.removeAttribute(F), null !== e.getAttribute("data-phx-readonly") && (e.readOnly = !1, e.removeAttribute("data-phx-readonly")), null !== e.getAttribute("data-phx-disabled") && (e.disabled = !1, e.removeAttribute("data-phx-disabled")), H.forEach(function (t) {
              return de.removeClass(e, t);
            });
            var n = e.getAttribute("data-phx-disable-with-restore");
            null !== n && (e.innerText = n, e.removeAttribute("data-phx-disable-with-restore"));
            var i = de.private(e, F);

            if (i) {
              var r = t.triggerBeforeUpdateHook(e, i);
              fe.patchEl(e, i, t.liveSocket.getActiveElement()), r && r.__updated(), de.deletePrivate(e, F);
            }
          });
        }
      }, {
        key: "putRef",
        value: function (e, t) {
          var n = this.ref++,
              i = this.binding("disable-with");
          return e.forEach(function (e) {
            e.classList.add("phx-".concat(t, "-loading")), e.setAttribute(F, n);
            var r = e.getAttribute(i);
            null !== r && (e.getAttribute("data-phx-disable-with-restore") || e.setAttribute("data-phx-disable-with-restore", e.innerText), e.innerText = r);
          }), [n, e];
        }
      }, {
        key: "componentID",
        value: function (e) {
          var t = e.getAttribute && e.getAttribute(M);
          return t ? parseInt(t) : null;
        }
      }, {
        key: "targetComponentID",
        value: function (e, t) {
          return e.getAttribute(this.binding("target")) ? this.closestComponentID(t) : null;
        }
      }, {
        key: "closestComponentID",
        value: function (e) {
          var t = this;
          return e ? ee(e.closest("[".concat(M, "]")), function (e) {
            return t.ownsElement(e) && t.componentID(e);
          }) : null;
        }
      }, {
        key: "pushHookEvent",
        value: function (e, t, n, i) {
          if (!this.isConnected()) return this.log("hook", function () {
            return ["unable to push hook event. LiveView not connected", t, n];
          }), !1;
          var r = C(this.putRef([], "hook"), 2),
              o = r[0],
              a = r[1];
          return this.pushWithReply(function () {
            return [o, a];
          }, "event", {
            type: "hook",
            event: t,
            value: n,
            cid: this.closestComponentID(e)
          }, function (e, t) {
            return i(t, o);
          }), o;
        }
      }, {
        key: "extractMeta",
        value: function (e, t) {
          for (var n = this.binding("value-"), i = 0; i < e.attributes.length; i++) {
            var r = e.attributes[i].name;
            r.startsWith(n) && (t[r.replace(n, "")] = e.getAttribute(r));
          }

          return void 0 !== e.value && (t.value = e.value, "INPUT" === e.tagName && V.indexOf(e.type) >= 0 && !e.checked && delete t.value), t;
        }
      }, {
        key: "pushEvent",
        value: function (e, t, n, i, r) {
          var o = this;
          this.pushWithReply(function () {
            return o.putRef([t], e);
          }, "event", {
            type: e,
            event: i,
            value: this.extractMeta(t, r),
            cid: this.targetComponentID(t, n)
          });
        }
      }, {
        key: "pushKey",
        value: function (e, t, n, i, r) {
          var o = this;
          this.pushWithReply(function () {
            return o.putRef([e], n);
          }, "event", {
            type: n,
            event: i,
            value: this.extractMeta(e, r),
            cid: this.targetComponentID(e, t)
          });
        }
      }, {
        key: "pushFileProgress",
        value: function (e, t, n) {
          var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function () {};
          this.liveSocket.withinOwners(e.form, function (r, o) {
            r.pushWithReply(null, "progress", {
              event: e.getAttribute(r.binding("progress")),
              ref: e.getAttribute(U),
              entry_ref: t,
              progress: n,
              cid: r.targetComponentID(e.form, o)
            }, i);
          });
        }
      }, {
        key: "pushInput",
        value: function (e, t, n, i, r) {
          var o = this,
              a = this.targetComponentID(e.form, t),
              u = function () {
            return o.putRef([e, e.form], "change");
          },
              s = ue(e.form, {
            _target: i.name
          });

          e.files && e.files.length > 0 && re.trackFiles(e, Array.from(e.files));
          var c = {
            type: "form",
            event: n,
            value: s,
            uploads: re.serializeUploads(e),
            cid: a
          };
          this.pushWithReply(u, "event", c, function (n) {
            if (de.showError(e, o.liveSocket.binding("feedback-for")), de.isUploadInput(e) && null !== e.getAttribute("data-phx-auto-upload")) {
              if (re.filesAwaitingPreflight(e).length > 0) {
                var i = C(u(), 2),
                    s = i[0];
                i[1];
                o.uploadFiles(e.form, t, s, a, function (t) {
                  r && r(n), o.triggerAwaitingSubmit(e.form);
                });
              }
            } else r && r(n);
          });
        }
      }, {
        key: "triggerAwaitingSubmit",
        value: function (e) {
          var t = this.getScheduledSubmit(e);

          if (t) {
            var n = C(t, 3),
                i = (n[0], n[1], n[2]);
            this.cancelSubmit(e), i();
          }
        }
      }, {
        key: "getScheduledSubmit",
        value: function (e) {
          return this.formSubmits.find(function (t) {
            var n = C(t, 2),
                i = n[0];
            n[1];
            return i.isSameNode(e);
          });
        }
      }, {
        key: "scheduleSubmit",
        value: function (e, t, n) {
          if (this.getScheduledSubmit(e)) return !0;
          this.formSubmits.push([e, t, n]);
        }
      }, {
        key: "cancelSubmit",
        value: function (e) {
          var t = this;
          this.formSubmits = this.formSubmits.filter(function (n) {
            var i = C(n, 3),
                r = i[0],
                o = i[1];
            i[2];
            return !r.isSameNode(e) || (t.undoRefs(o), !1);
          });
        }
      }, {
        key: "pushFormSubmit",
        value: function (e, t, n, i) {
          var r = this,
              o = function (e) {
            return !(Y(e, "".concat(r.binding("update"), "=ignore"), e.form) || Y(e, "data-phx-update=ignore", e.form));
          },
              a = function (e) {
            return e.hasAttribute(r.binding("disable-with"));
          },
              u = function (e) {
            return "BUTTON" == e.tagName;
          },
              s = function (e) {
            return ["INPUT", "TEXTAREA", "SELECT"].includes(e.tagName);
          },
              c = function () {
            var t = Array.from(e.elements),
                n = t.filter(a),
                i = t.filter(u).filter(o),
                c = t.filter(s).filter(o);
            return i.forEach(function (e) {
              e.setAttribute("data-phx-disabled", e.disabled), e.disabled = !0;
            }), c.forEach(function (e) {
              e.setAttribute("data-phx-readonly", e.readOnly), e.readOnly = !0, e.files && (e.setAttribute("data-phx-disabled", e.disabled), e.disabled = !0);
            }), e.setAttribute(r.binding("page-loading"), ""), r.putRef([e].concat(n).concat(i).concat(c), "submit");
          },
              l = this.targetComponentID(e, t);

          if (re.hasUploadsInProgress(e)) {
            var d = C(c(), 2),
                h = d[0];
            d[1];
            return this.scheduleSubmit(e, h, function () {
              return r.pushFormSubmit(e, t, n, i);
            });
          }

          if (re.inputsAwaitingPreflight(e).length > 0) {
            var f = C(c(), 2),
                v = f[0],
                p = f[1],
                g = function () {
              return [v, p];
            };

            this.uploadFiles(e, t, v, l, function (t) {
              var o = ue(e, {});
              r.pushWithReply(g, "event", {
                type: "form",
                event: n,
                value: o,
                cid: l
              }, i);
            });
          } else {
            var m = ue(e);
            this.pushWithReply(c, "event", {
              type: "form",
              event: n,
              value: m,
              cid: l
            }, i);
          }
        }
      }, {
        key: "uploadFiles",
        value: function (e, t, n, i, r) {
          var o = this,
              a = this.joinCount;
          re.activeFileInputs(e).forEach(function (e) {
            var i = new re(e, o, r);
            o.uploaders[e] = i;
            var u = i.entries().map(function (e) {
              return e.toPreflightPayload();
            }),
                s = {
              ref: e.getAttribute(U),
              entries: u,
              cid: o.targetComponentID(e.form, t)
            };
            o.log("upload", function () {
              return ["sending preflight request", s];
            }), o.pushWithReply(null, "allow_upload", s, function (e) {
              if (o.log("upload", function () {
                return ["got preflight response", e];
              }), e.error) {
                o.undoRefs(n);
                var t = C(e.error, 2),
                    r = t[0],
                    u = t[1];
                o.log("upload", function () {
                  return ["error for entry ".concat(r), u];
                });
              } else {
                i.initAdapterUpload(e, function (e) {
                  o.channel.onError(function () {
                    o.joinCount === a && e();
                  });
                }, o.liveSocket);
              }
            });
          });
        }
      }, {
        key: "pushFormRecovery",
        value: function (e, t) {
          var n = this;
          this.liveSocket.withinOwners(e, function (i, r) {
            var o = e.elements[0],
                a = e.getAttribute(n.binding("auto-recover")) || e.getAttribute(n.binding("change"));
            i.pushInput(o, r, a, o, t);
          });
        }
      }, {
        key: "pushLinkPatch",
        value: function (e, t, n) {
          var i = this,
              r = this.liveSocket.setPendingLink(e),
              o = t ? function () {
            return i.putRef([t], "click");
          } : null;
          this.pushWithReply(o, "link", {
            url: e
          }, function (t) {
            t.link_redirect ? i.liveSocket.replaceMain(e, null, n, r) : (i.liveSocket.commitPendingLink(r) && (i.href = e), i.applyPendingUpdates(), n && n(r));
          }).receive("timeout", function () {
            return i.liveSocket.redirect(window.location.href);
          });
        }
      }, {
        key: "formsForRecovery",
        value: function (e) {
          var t = this;
          if (0 === this.joinCount) return [];
          var n = this.binding("change"),
              i = document.createElement("template");
          return i.innerHTML = e, de.all(this.el, "form[".concat(n, "]")).filter(function (e) {
            return t.ownsElement(e);
          }).filter(function (e) {
            return e.elements.length > 0;
          }).filter(function (e) {
            return "ignore" !== e.getAttribute(t.binding("auto-recover"));
          }).filter(function (e) {
            return i.content.querySelector("form[".concat(n, '="').concat(e.getAttribute(n), '"]'));
          });
        }
      }, {
        key: "maybePushComponentsDestroyed",
        value: function (e) {
          var t,
              n = this,
              i = e.filter(function (e) {
            return 0 === de.findComponentNodeList(n.el, e).length;
          });
          i.length > 0 && ((t = this.pruningCIDs).push.apply(t, w(i)), this.pushWithReply(null, "cids_will_destroy", {
            cids: i
          }, function () {
            n.pruningCIDs = n.pruningCIDs.filter(function (e) {
              return -1 !== i.indexOf(e);
            });
            var e = i.filter(function (e) {
              return 0 === de.findComponentNodeList(n.el, e).length;
            });
            e.length > 0 && n.pushWithReply(null, "cids_destroyed", {
              cids: e
            }, function (e) {
              n.rendered.pruneCIDs(e.cids);
            });
          }));
        }
      }, {
        key: "ownsElement",
        value: function (e) {
          return e.getAttribute("data-phx-parent-id") === this.id || ee(e.closest(B), function (e) {
            return e.id;
          }) === this.id;
        }
      }, {
        key: "submitForm",
        value: function (e, t, n) {
          var i = this;
          de.putPrivate(e, "phx-has-submitted", !0), this.liveSocket.blurActiveElement(this), this.pushFormSubmit(e, t, n, function () {
            i.liveSocket.restorePreviouslyActiveFocus();
          });
        }
      }, {
        key: "binding",
        value: function (e) {
          return this.liveSocket.binding(e);
        }
      }]), e;
    }(),
        pe = 1,
        ge = function () {
      function e(t, n, i) {
        for (var r in D(this, e), this.__view = t, this.__liveSocket = t.liveSocket, this.__callbacks = i, this.__listeners = new Set(), this.__isDisconnected = !1, this.el = n, this.viewName = t.name(), this.el.phxHookId = this.constructor.makeID(), this.__callbacks) this[r] = this.__callbacks[r];
      }

      return N(e, null, [{
        key: "makeID",
        value: function () {
          return pe++;
        }
      }, {
        key: "elementID",
        value: function (e) {
          return e.phxHookId;
        }
      }]), N(e, [{
        key: "__mounted",
        value: function () {
          this.mounted && this.mounted();
        }
      }, {
        key: "__updated",
        value: function () {
          this.updated && this.updated();
        }
      }, {
        key: "__beforeUpdate",
        value: function () {
          this.beforeUpdate && this.beforeUpdate();
        }
      }, {
        key: "__destroyed",
        value: function () {
          this.destroyed && this.destroyed();
        }
      }, {
        key: "__reconnected",
        value: function () {
          this.__isDisconnected && (this.__isDisconnected = !1, this.reconnected && this.reconnected());
        }
      }, {
        key: "__disconnected",
        value: function () {
          this.__isDisconnected = !0, this.disconnected && this.disconnected();
        }
      }, {
        key: "pushEvent",
        value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function () {};
          return this.__view.pushHookEvent(null, e, t, n);
        }
      }, {
        key: "pushEventTo",
        value: function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
              i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : function () {};
          return this.__view.withinTargets(e, function (e, r) {
            return e.pushHookEvent(r, t, n, i);
          });
        }
      }, {
        key: "handleEvent",
        value: function (e, t) {
          var n = function (n, i) {
            return i ? e : t(n.detail);
          };

          return window.addEventListener("phx:hook:".concat(e), n), this.__listeners.add(n), n;
        }
      }, {
        key: "removeHandleEvent",
        value: function (e) {
          var t = e(null, !0);
          window.removeEventListener("phx:hook:".concat(t), e), this.__listeners.delete(e);
        }
      }, {
        key: "__cleanup__",
        value: function () {
          var e = this;

          this.__listeners.forEach(function (t) {
            return e.removeHandleEvent(t);
          });
        }
      }]), e;
    }();

    t.default = ce;
  }, function (e, t) {
    var n;

    n = function () {
      return this;
    }();

    try {
      n = n || Function("return this")() || (0, eval)("this");
    } catch (e) {
      "object" == typeof window && (n = window);
    }

    e.exports = n;
  }, function (e, t, n) {
    (function (t) {
      t.Phoenix || (t.Phoenix = {}), e.exports = t.Phoenix.LiveView = n(0);
    }).call(this, n(1));
  }]);
});

/***/ }),

/***/ "./css/app.scss":
/*!**********************!*\
  !*** ./css/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/app.scss */ "./css/app.scss");
/* harmony import */ var _css_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_app_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var phoenix_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! phoenix_html */ "../deps/phoenix_html/priv/static/phoenix_html.js");
/* harmony import */ var phoenix_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(phoenix_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var phoenix__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! phoenix */ "../deps/phoenix/priv/static/phoenix.js");
/* harmony import */ var phoenix__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(phoenix__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nprogress */ "./node_modules/nprogress/nprogress.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var phoenix_live_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! phoenix_live_view */ "../deps/phoenix_live_view/priv/static/phoenix_live_view.js");
/* harmony import */ var phoenix_live_view__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(phoenix_live_view__WEBPACK_IMPORTED_MODULE_4__);
/***
 * Excerpted from "Programming Phoenix LiveView",
 * published by The Pragmatic Bookshelf.
 * Copyrights apply to this code. It may not be used to create training material,
 * courses, books, articles, and the like. Contact us if you are in doubt.
 * We make no guarantees that this code is fit for any purpose.
 * Visit http://www.pragmaticprogrammer.com/titles/liveview for more book information.
***/
// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
 // webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import deps with the dep name or local files with a relative path, for example:
//
//     import {Socket} from "phoenix"
//     import socket from "./socket"
//





var csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");
var liveSocket = new phoenix_live_view__WEBPACK_IMPORTED_MODULE_4__["LiveSocket"]("/live", phoenix__WEBPACK_IMPORTED_MODULE_2__["Socket"], {
  params: {
    _csrf_token: csrfToken
  }
}); // Show progress bar on live navigation and form submits

window.addEventListener("phx:page-loading-start", function (info) {
  return nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.start();
});
window.addEventListener("phx:page-loading-stop", function (info) {
  return nprogress__WEBPACK_IMPORTED_MODULE_3___default.a.done();
}); // connect if there are any LiveViews on the page

liveSocket.connect(); // expose liveSocket on window for web console debug logs and latency simulation:
// >> liveSocket.enableDebug()
// >> liveSocket.enableLatencySim(1000)

window.liveSocket = liveSocket;

/***/ }),

/***/ "./node_modules/nprogress/nprogress.js":
/*!*********************************************!*\
  !*** ./node_modules/nprogress/nprogress.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */

;(function(root, factory) {

  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})(this, function() {
  var NProgress = {};

  NProgress.version = '0.2.0';

  var Settings = NProgress.settings = {
    minimum: 0.08,
    easing: 'ease',
    positionUsing: '',
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    showSpinner: true,
    barSelector: '[role="bar"]',
    spinnerSelector: '[role="spinner"]',
    parent: 'body',
    template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
  };

  /**
   * Updates configuration.
   *
   *     NProgress.configure({
   *       minimum: 0.1
   *     });
   */
  NProgress.configure = function(options) {
    var key, value;
    for (key in options) {
      value = options[key];
      if (value !== undefined && options.hasOwnProperty(key)) Settings[key] = value;
    }

    return this;
  };

  /**
   * Last number.
   */

  NProgress.status = null;

  /**
   * Sets the progress bar status, where `n` is a number from `0.0` to `1.0`.
   *
   *     NProgress.set(0.4);
   *     NProgress.set(1.0);
   */

  NProgress.set = function(n) {
    var started = NProgress.isStarted();

    n = clamp(n, Settings.minimum, 1);
    NProgress.status = (n === 1 ? null : n);

    var progress = NProgress.render(!started),
        bar      = progress.querySelector(Settings.barSelector),
        speed    = Settings.speed,
        ease     = Settings.easing;

    progress.offsetWidth; /* Repaint */

    queue(function(next) {
      // Set positionUsing if it hasn't already been set
      if (Settings.positionUsing === '') Settings.positionUsing = NProgress.getPositioningCSS();

      // Add transition
      css(bar, barPositionCSS(n, speed, ease));

      if (n === 1) {
        // Fade out
        css(progress, { 
          transition: 'none', 
          opacity: 1 
        });
        progress.offsetWidth; /* Repaint */

        setTimeout(function() {
          css(progress, { 
            transition: 'all ' + speed + 'ms linear', 
            opacity: 0 
          });
          setTimeout(function() {
            NProgress.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(next, speed);
      }
    });

    return this;
  };

  NProgress.isStarted = function() {
    return typeof NProgress.status === 'number';
  };

  /**
   * Shows the progress bar.
   * This is the same as setting the status to 0%, except that it doesn't go backwards.
   *
   *     NProgress.start();
   *
   */
  NProgress.start = function() {
    if (!NProgress.status) NProgress.set(0);

    var work = function() {
      setTimeout(function() {
        if (!NProgress.status) return;
        NProgress.trickle();
        work();
      }, Settings.trickleSpeed);
    };

    if (Settings.trickle) work();

    return this;
  };

  /**
   * Hides the progress bar.
   * This is the *sort of* the same as setting the status to 100%, with the
   * difference being `done()` makes some placebo effect of some realistic motion.
   *
   *     NProgress.done();
   *
   * If `true` is passed, it will show the progress bar even if its hidden.
   *
   *     NProgress.done(true);
   */

  NProgress.done = function(force) {
    if (!force && !NProgress.status) return this;

    return NProgress.inc(0.3 + 0.5 * Math.random()).set(1);
  };

  /**
   * Increments by a random amount.
   */

  NProgress.inc = function(amount) {
    var n = NProgress.status;

    if (!n) {
      return NProgress.start();
    } else {
      if (typeof amount !== 'number') {
        amount = (1 - n) * clamp(Math.random() * n, 0.1, 0.95);
      }

      n = clamp(n + amount, 0, 0.994);
      return NProgress.set(n);
    }
  };

  NProgress.trickle = function() {
    return NProgress.inc(Math.random() * Settings.trickleRate);
  };

  /**
   * Waits for all supplied jQuery promises and
   * increases the progress as the promises resolve.
   *
   * @param $promise jQUery Promise
   */
  (function() {
    var initial = 0, current = 0;

    NProgress.promise = function($promise) {
      if (!$promise || $promise.state() === "resolved") {
        return this;
      }

      if (current === 0) {
        NProgress.start();
      }

      initial++;
      current++;

      $promise.always(function() {
        current--;
        if (current === 0) {
            initial = 0;
            NProgress.done();
        } else {
            NProgress.set((initial - current) / initial);
        }
      });

      return this;
    };

  })();

  /**
   * (Internal) renders the progress bar markup based on the `template`
   * setting.
   */

  NProgress.render = function(fromStart) {
    if (NProgress.isRendered()) return document.getElementById('nprogress');

    addClass(document.documentElement, 'nprogress-busy');
    
    var progress = document.createElement('div');
    progress.id = 'nprogress';
    progress.innerHTML = Settings.template;

    var bar      = progress.querySelector(Settings.barSelector),
        perc     = fromStart ? '-100' : toBarPerc(NProgress.status || 0),
        parent   = document.querySelector(Settings.parent),
        spinner;
    
    css(bar, {
      transition: 'all 0 linear',
      transform: 'translate3d(' + perc + '%,0,0)'
    });

    if (!Settings.showSpinner) {
      spinner = progress.querySelector(Settings.spinnerSelector);
      spinner && removeElement(spinner);
    }

    if (parent != document.body) {
      addClass(parent, 'nprogress-custom-parent');
    }

    parent.appendChild(progress);
    return progress;
  };

  /**
   * Removes the element. Opposite of render().
   */

  NProgress.remove = function() {
    removeClass(document.documentElement, 'nprogress-busy');
    removeClass(document.querySelector(Settings.parent), 'nprogress-custom-parent');
    var progress = document.getElementById('nprogress');
    progress && removeElement(progress);
  };

  /**
   * Checks if the progress bar is rendered.
   */

  NProgress.isRendered = function() {
    return !!document.getElementById('nprogress');
  };

  /**
   * Determine which positioning CSS rule to use.
   */

  NProgress.getPositioningCSS = function() {
    // Sniff on document.body.style
    var bodyStyle = document.body.style;

    // Sniff prefixes
    var vendorPrefix = ('WebkitTransform' in bodyStyle) ? 'Webkit' :
                       ('MozTransform' in bodyStyle) ? 'Moz' :
                       ('msTransform' in bodyStyle) ? 'ms' :
                       ('OTransform' in bodyStyle) ? 'O' : '';

    if (vendorPrefix + 'Perspective' in bodyStyle) {
      // Modern browsers with 3D support, e.g. Webkit, IE10
      return 'translate3d';
    } else if (vendorPrefix + 'Transform' in bodyStyle) {
      // Browsers without 3D support, e.g. IE9
      return 'translate';
    } else {
      // Browsers without translate() support, e.g. IE7-8
      return 'margin';
    }
  };

  /**
   * Helpers
   */

  function clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  /**
   * (Internal) converts a percentage (`0..1`) to a bar translateX
   * percentage (`-100%..0%`).
   */

  function toBarPerc(n) {
    return (-1 + n) * 100;
  }


  /**
   * (Internal) returns the correct CSS for changing the bar's
   * position given an n percentage, and speed and ease from Settings
   */

  function barPositionCSS(n, speed, ease) {
    var barCSS;

    if (Settings.positionUsing === 'translate3d') {
      barCSS = { transform: 'translate3d('+toBarPerc(n)+'%,0,0)' };
    } else if (Settings.positionUsing === 'translate') {
      barCSS = { transform: 'translate('+toBarPerc(n)+'%,0)' };
    } else {
      barCSS = { 'margin-left': toBarPerc(n)+'%' };
    }

    barCSS.transition = 'all '+speed+'ms '+ease;

    return barCSS;
  }

  /**
   * (Internal) Queues a function to be executed.
   */

  var queue = (function() {
    var pending = [];
    
    function next() {
      var fn = pending.shift();
      if (fn) {
        fn(next);
      }
    }

    return function(fn) {
      pending.push(fn);
      if (pending.length == 1) next();
    };
  })();

  /**
   * (Internal) Applies css properties to an element, similar to the jQuery 
   * css method.
   *
   * While this helper does assist with vendor prefixed property names, it 
   * does not perform any manipulation of values prior to setting styles.
   */

  var css = (function() {
    var cssPrefixes = [ 'Webkit', 'O', 'Moz', 'ms' ],
        cssProps    = {};

    function camelCase(string) {
      return string.replace(/^-ms-/, 'ms-').replace(/-([\da-z])/gi, function(match, letter) {
        return letter.toUpperCase();
      });
    }

    function getVendorProp(name) {
      var style = document.body.style;
      if (name in style) return name;

      var i = cssPrefixes.length,
          capName = name.charAt(0).toUpperCase() + name.slice(1),
          vendorName;
      while (i--) {
        vendorName = cssPrefixes[i] + capName;
        if (vendorName in style) return vendorName;
      }

      return name;
    }

    function getStyleProp(name) {
      name = camelCase(name);
      return cssProps[name] || (cssProps[name] = getVendorProp(name));
    }

    function applyCss(element, prop, value) {
      prop = getStyleProp(prop);
      element.style[prop] = value;
    }

    return function(element, properties) {
      var args = arguments,
          prop, 
          value;

      if (args.length == 2) {
        for (prop in properties) {
          value = properties[prop];
          if (value !== undefined && properties.hasOwnProperty(prop)) applyCss(element, prop, value);
        }
      } else {
        applyCss(element, args[1], args[2]);
      }
    }
  })();

  /**
   * (Internal) Determines if an element or space separated list of class names contains a class name.
   */

  function hasClass(element, name) {
    var list = typeof element == 'string' ? element : classList(element);
    return list.indexOf(' ' + name + ' ') >= 0;
  }

  /**
   * (Internal) Adds a class to an element.
   */

  function addClass(element, name) {
    var oldList = classList(element),
        newList = oldList + name;

    if (hasClass(oldList, name)) return; 

    // Trim the opening space.
    element.className = newList.substring(1);
  }

  /**
   * (Internal) Removes a class from an element.
   */

  function removeClass(element, name) {
    var oldList = classList(element),
        newList;

    if (!hasClass(element, name)) return;

    // Replace the class name.
    newList = oldList.replace(' ' + name + ' ', ' ');

    // Trim the opening and closing spaces.
    element.className = newList.substring(1, newList.length - 1);
  }

  /**
   * (Internal) Gets a space separated list of the class names on the element. 
   * The list is wrapped with a single space on each end to facilitate finding 
   * matches within the list.
   */

  function classList(element) {
    return (' ' + (element.className || '') + ' ').replace(/\s+/gi, ' ');
  }

  /**
   * (Internal) Removes an element from the DOM.
   */

  function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
  }

  return NProgress;
});



/***/ }),

/***/ 0:
/*!*************************!*\
  !*** multi ./js/app.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./js/app.js */"./js/app.js");


/***/ })

/******/ });
//# sourceMappingURL=app.js.map