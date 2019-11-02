"use strict";

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

!function (e) {
  var t = {};

  function r(n) {
    if (t[n]) return t[n].exports;
    var o = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
  }

  r.m = e, r.c = t, r.d = function (e, t, n) {
    r.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, r.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, r.t = function (e, t) {
    if (1 & t && (e = r(e)), 8 & t) return e;
    if (4 & t && "object" == typeof e && e && e.__esModule) return e;
    var n = Object.create(null);
    if (r.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var o in e) r.d(n, o, function (t) {
      return e[t];
    }.bind(null, o));
    return n;
  }, r.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };
    return r.d(t, "a", t), t;
  }, r.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, r.p = "", r(r.s = 0);
}([function (e, t, r) {
  "use strict";

  r.r(t);
  const n = {
    cash: [4e4, 5e3, 30400, 12e3],
    eu: ["SRL", "PLO", "J&K"],
    rus: ["RusAuto", "SBO"]
  };
  let o = new class {
    constructor(e) {
      this.cash = e;
    }

    calcCash() {
      for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
        e[_key] = arguments[_key];
      }

      return e.reduce((e, t) => e + t);
    }

    getMoney() {
      return this.calcCash(this.cash);
    }

  }(n.cash),
      s = new class {
    constructor(e) {
      this.employersNames = e.filter(e => e.length > 0 && "" != e.length).map(e => e.toLowerCase().trim());
    }

    getEmployersNames() {
      return this.employersNames;
    }

  }(["Alex", "", "ludmila", "Viktor", "", "oleg", "iNna", "Ivan", "Alex", "Olga", " Ann"]);
  new class {
    constructor() {
      let {
        owner: e,
        director: t = "Victor",
        cash: r,
        emp: n
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.owner = e, this.director = t, this.cash = r, this.emp = n;
    }

    printMakeBusiness() {
      const {
        eu: e,
        rus: t
      } = n,
            r = e.concat(t, "unexpected sponsor");
      console.log("We have a business. Owner: ".concat(this.owner, ", director: ").concat(this.director, ". Our budget: ").concat(this.cash, ". And our employers: \n        ").concat(this.emp)), console.log("And we have a sponsors: "), console.log(...r), console.log("Note. Be careful with ".concat(e[0], ". It's a huge risk."));
    }

  }({
    owner: "Sam",
    cash: o.getMoney(),
    emp: s.getEmployersNames()
  }).printMakeBusiness();
}]);