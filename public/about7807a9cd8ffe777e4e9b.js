/*! For license information please see about7807a9cd8ffe777e4e9b.js.LICENSE.txt */
(() => {
  var t = {
      896: () => {
        var t = document.querySelector(".header__dark-mode"),
          n = document.querySelector("body"),
          e = localStorage.getItem("mode")
            ? localStorage.getItem("mode")
            : null;
        e && n.classList.add("dark-mode"),
          t.addEventListener("click", function () {
            n.classList.toggle("dark-mode"),
              e
                ? localStorage.setItem("mode", "")
                : localStorage.setItem("mode", "dark");
          });
      },
    },
    n = {};
  function e(r) {
    var o = n[r];
    if (void 0 !== o) return o.exports;
    var a = (n[r] = { exports: {} });
    return t[r](a, a.exports, e), a.exports;
  }
  (() => {
    "use strict";
    e(896);
    var t = document.querySelector(".loader");
    const n = function (n) {
      n ? t.classList.remove("hidden") : t.classList.add("hidden");
    };
    function r(t) {
      return (
        (r =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              }),
        r(t)
      );
    }
    function o() {
      o = function () {
        return t;
      };
      var t = {},
        n = Object.prototype,
        e = n.hasOwnProperty,
        a =
          Object.defineProperty ||
          function (t, n, e) {
            t[n] = e.value;
          },
        i = "function" == typeof Symbol ? Symbol : {},
        c = i.iterator || "@@iterator",
        u = i.asyncIterator || "@@asyncIterator",
        s = i.toStringTag || "@@toStringTag";
      function l(t, n, e) {
        return (
          Object.defineProperty(t, n, {
            value: e,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          }),
          t[n]
        );
      }
      try {
        l({}, "");
      } catch (t) {
        l = function (t, n, e) {
          return (t[n] = e);
        };
      }
      function f(t, n, e, r) {
        var o = n && n.prototype instanceof d ? n : d,
          i = Object.create(o.prototype),
          c = new O(r || []);
        return a(i, "_invoke", { value: _(t, e, c) }), i;
      }
      function h(t, n, e) {
        try {
          return { type: "normal", arg: t.call(n, e) };
        } catch (t) {
          return { type: "throw", arg: t };
        }
      }
      t.wrap = f;
      var p = {};
      function d() {}
      function v() {}
      function y() {}
      var m = {};
      l(m, c, function () {
        return this;
      });
      var g = Object.getPrototypeOf,
        w = g && g(g(k([])));
      w && w !== n && e.call(w, c) && (m = w);
      var b = (y.prototype = d.prototype = Object.create(m));
      function L(t) {
        ["next", "throw", "return"].forEach(function (n) {
          l(t, n, function (t) {
            return this._invoke(n, t);
          });
        });
      }
      function x(t, n) {
        function o(a, i, c, u) {
          var s = h(t[a], t, i);
          if ("throw" !== s.type) {
            var l = s.arg,
              f = l.value;
            return f && "object" == r(f) && e.call(f, "__await")
              ? n.resolve(f.__await).then(
                  function (t) {
                    o("next", t, c, u);
                  },
                  function (t) {
                    o("throw", t, c, u);
                  }
                )
              : n.resolve(f).then(
                  function (t) {
                    (l.value = t), c(l);
                  },
                  function (t) {
                    return o("throw", t, c, u);
                  }
                );
          }
          u(s.arg);
        }
        var i;
        a(this, "_invoke", {
          value: function (t, e) {
            function r() {
              return new n(function (n, r) {
                o(t, e, n, r);
              });
            }
            return (i = i ? i.then(r, r) : r());
          },
        });
      }
      function _(t, n, e) {
        var r = "suspendedStart";
        return function (o, a) {
          if ("executing" === r)
            throw new Error("Generator is already running");
          if ("completed" === r) {
            if ("throw" === o) throw a;
            return { value: void 0, done: !0 };
          }
          for (e.method = o, e.arg = a; ; ) {
            var i = e.delegate;
            if (i) {
              var c = E(i, e);
              if (c) {
                if (c === p) continue;
                return c;
              }
            }
            if ("next" === e.method) e.sent = e._sent = e.arg;
            else if ("throw" === e.method) {
              if ("suspendedStart" === r) throw ((r = "completed"), e.arg);
              e.dispatchException(e.arg);
            } else "return" === e.method && e.abrupt("return", e.arg);
            r = "executing";
            var u = h(t, n, e);
            if ("normal" === u.type) {
              if (((r = e.done ? "completed" : "suspendedYield"), u.arg === p))
                continue;
              return { value: u.arg, done: e.done };
            }
            "throw" === u.type &&
              ((r = "completed"), (e.method = "throw"), (e.arg = u.arg));
          }
        };
      }
      function E(t, n) {
        var e = n.method,
          r = t.iterator[e];
        if (void 0 === r)
          return (
            (n.delegate = null),
            ("throw" === e &&
              t.iterator.return &&
              ((n.method = "return"),
              (n.arg = void 0),
              E(t, n),
              "throw" === n.method)) ||
              ("return" !== e &&
                ((n.method = "throw"),
                (n.arg = new TypeError(
                  "The iterator does not provide a '" + e + "' method"
                )))),
            p
          );
        var o = h(r, t.iterator, n.arg);
        if ("throw" === o.type)
          return (n.method = "throw"), (n.arg = o.arg), (n.delegate = null), p;
        var a = o.arg;
        return a
          ? a.done
            ? ((n[t.resultName] = a.value),
              (n.next = t.nextLoc),
              "return" !== n.method && ((n.method = "next"), (n.arg = void 0)),
              (n.delegate = null),
              p)
            : a
          : ((n.method = "throw"),
            (n.arg = new TypeError("iterator result is not an object")),
            (n.delegate = null),
            p);
      }
      function S(t) {
        var n = { tryLoc: t[0] };
        1 in t && (n.catchLoc = t[1]),
          2 in t && ((n.finallyLoc = t[2]), (n.afterLoc = t[3])),
          this.tryEntries.push(n);
      }
      function j(t) {
        var n = t.completion || {};
        (n.type = "normal"), delete n.arg, (t.completion = n);
      }
      function O(t) {
        (this.tryEntries = [{ tryLoc: "root" }]),
          t.forEach(S, this),
          this.reset(!0);
      }
      function k(t) {
        if (t) {
          var n = t[c];
          if (n) return n.call(t);
          if ("function" == typeof t.next) return t;
          if (!isNaN(t.length)) {
            var r = -1,
              o = function n() {
                for (; ++r < t.length; )
                  if (e.call(t, r)) return (n.value = t[r]), (n.done = !1), n;
                return (n.value = void 0), (n.done = !0), n;
              };
            return (o.next = o);
          }
        }
        return { next: N };
      }
      function N() {
        return { value: void 0, done: !0 };
      }
      return (
        (v.prototype = y),
        a(b, "constructor", { value: y, configurable: !0 }),
        a(y, "constructor", { value: v, configurable: !0 }),
        (v.displayName = l(y, s, "GeneratorFunction")),
        (t.isGeneratorFunction = function (t) {
          var n = "function" == typeof t && t.constructor;
          return (
            !!n &&
            (n === v || "GeneratorFunction" === (n.displayName || n.name))
          );
        }),
        (t.mark = function (t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, y)
              : ((t.__proto__ = y), l(t, s, "GeneratorFunction")),
            (t.prototype = Object.create(b)),
            t
          );
        }),
        (t.awrap = function (t) {
          return { __await: t };
        }),
        L(x.prototype),
        l(x.prototype, u, function () {
          return this;
        }),
        (t.AsyncIterator = x),
        (t.async = function (n, e, r, o, a) {
          void 0 === a && (a = Promise);
          var i = new x(f(n, e, r, o), a);
          return t.isGeneratorFunction(e)
            ? i
            : i.next().then(function (t) {
                return t.done ? t.value : i.next();
              });
        }),
        L(b),
        l(b, s, "Generator"),
        l(b, c, function () {
          return this;
        }),
        l(b, "toString", function () {
          return "[object Generator]";
        }),
        (t.keys = function (t) {
          var n = Object(t),
            e = [];
          for (var r in n) e.push(r);
          return (
            e.reverse(),
            function t() {
              for (; e.length; ) {
                var r = e.pop();
                if (r in n) return (t.value = r), (t.done = !1), t;
              }
              return (t.done = !0), t;
            }
          );
        }),
        (t.values = k),
        (O.prototype = {
          constructor: O,
          reset: function (t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = "next"),
              (this.arg = void 0),
              this.tryEntries.forEach(j),
              !t)
            )
              for (var n in this)
                "t" === n.charAt(0) &&
                  e.call(this, n) &&
                  !isNaN(+n.slice(1)) &&
                  (this[n] = void 0);
          },
          stop: function () {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
          },
          dispatchException: function (t) {
            if (this.done) throw t;
            var n = this;
            function r(e, r) {
              return (
                (i.type = "throw"),
                (i.arg = t),
                (n.next = e),
                r && ((n.method = "next"), (n.arg = void 0)),
                !!r
              );
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var a = this.tryEntries[o],
                i = a.completion;
              if ("root" === a.tryLoc) return r("end");
              if (a.tryLoc <= this.prev) {
                var c = e.call(a, "catchLoc"),
                  u = e.call(a, "finallyLoc");
                if (c && u) {
                  if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                  if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                } else if (c) {
                  if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                } else {
                  if (!u)
                    throw new Error("try statement without catch or finally");
                  if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                }
              }
            }
          },
          abrupt: function (t, n) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var o = this.tryEntries[r];
              if (
                o.tryLoc <= this.prev &&
                e.call(o, "finallyLoc") &&
                this.prev < o.finallyLoc
              ) {
                var a = o;
                break;
              }
            }
            a &&
              ("break" === t || "continue" === t) &&
              a.tryLoc <= n &&
              n <= a.finallyLoc &&
              (a = null);
            var i = a ? a.completion : {};
            return (
              (i.type = t),
              (i.arg = n),
              a
                ? ((this.method = "next"), (this.next = a.finallyLoc), p)
                : this.complete(i)
            );
          },
          complete: function (t, n) {
            if ("throw" === t.type) throw t.arg;
            return (
              "break" === t.type || "continue" === t.type
                ? (this.next = t.arg)
                : "return" === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = "return"),
                  (this.next = "end"))
                : "normal" === t.type && n && (this.next = n),
              p
            );
          },
          finish: function (t) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var e = this.tryEntries[n];
              if (e.finallyLoc === t)
                return this.complete(e.completion, e.afterLoc), j(e), p;
            }
          },
          catch: function (t) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var e = this.tryEntries[n];
              if (e.tryLoc === t) {
                var r = e.completion;
                if ("throw" === r.type) {
                  var o = r.arg;
                  j(e);
                }
                return o;
              }
            }
            throw new Error("illegal catch attempt");
          },
          delegateYield: function (t, n, e) {
            return (
              (this.delegate = { iterator: k(t), resultName: n, nextLoc: e }),
              "next" === this.method && (this.arg = void 0),
              p
            );
          },
        }),
        t
      );
    }
    function a(t, n, e, r, o, a, i) {
      try {
        var c = t[a](i),
          u = c.value;
      } catch (t) {
        return void e(t);
      }
      c.done ? n(u) : Promise.resolve(u).then(r, o);
    }
    const i = (function () {
      var t,
        e =
          ((t = o().mark(function t(e) {
            var r, a;
            return o().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    return n(!0), (t.next = 3), fetch(e);
                  case 3:
                    if ((r = t.sent).ok) {
                      t.next = 7;
                      break;
                    }
                    throw (n(!1), new Error("Something went wrong :("));
                  case 7:
                    return (t.next = 9), r.json();
                  case 9:
                    return (a = t.sent), n(!1), t.abrupt("return", a);
                  case 12:
                  case "end":
                    return t.stop();
                }
            }, t);
          })),
          function () {
            var n = this,
              e = arguments;
            return new Promise(function (r, o) {
              var i = t.apply(n, e);
              function c(t) {
                a(i, r, o, c, u, "next", t);
              }
              function u(t) {
                a(i, r, o, c, u, "throw", t);
              }
              c(void 0);
            });
          });
      return function (t) {
        return e.apply(this, arguments);
      };
    })();
    document.querySelector(".cards");
    var c = document.querySelector(".country-info"),
      u = window.location.search,
      s = new URLSearchParams(u).get("country");
    i("https://restcountries.com/v3.1/".concat(s))
      .then(function (t) {
        !(function (t) {
          var n = t.population,
            e = t.borders,
            r = t.capital,
            o = t.flags,
            a = t.name,
            i = t.region,
            u = t.tld,
            s = t.currencies,
            l = t.languages,
            f = t.subregion;
          console.log(e);
          var h = Object.values(a.nativeName)[0].official,
            p = Object.values(s)[0].name,
            d = Object.values(l);
          c.innerHTML =
            '\n\n        \n    <img\n        class="country-info__img"\n        src='
              .concat(
                o.svg,
                '\n        alt="germany-flag"\n        width="560"\n        height="400"\n    />\n  <div class="country-info__content">\n    <h2>'
              )
              .concat(
                a.common,
                '</h2>\n    <ul class="country-info__list">\n      <li class="country-info__item">\n        <p class="name">\n          Native Name: \n          <span>'
              )
              .concat(
                h,
                '</span>\n        </p>\n        <p class="population">\n          Population:\n          <span>'
              )
              .concat(
                n,
                '</span>\n        </p>\n        <p class="region">\n          Region:\n          <span>'
              )
              .concat(
                i,
                '</span>\n        </p>\n        <p class="sub-region">\n          Sub Region:\n          <span>'
              )
              .concat(
                f,
                '</span>\n        </p>\n        <p class="capital">\n          Capital:\n          <span>'
              )
              .concat(
                r,
                '</span>\n        </p>\n      </li>\n      <li class="country-info__item">\n        <p class="name">\n          Top Level Domain:\n          <span>'
              )
              .concat(
                u,
                '</span>\n        </p>\n        <p class="population">\n          Currencies:\n          <span>'
              )
              .concat(
                p,
                '</span>\n        </p>\n        <p class="region">\n          Languages:\n          <span>'
              )
              .concat(
                d,
                '</span>\n        </p>\n      </li>\n    </ul>\n\n    <div class="country-info__borders">\n      <h3>Border Countries:</h3>\n        '
              )
              .concat(
                e
                  ? e.map(function (t) {
                      return '\n            <a href="./about.html?country=/alpha/'
                        .concat(t, '">')
                        .concat(t, "</a>\n            ");
                    })
                  : "No Borders",
                "\n    </div>\n  </div>\n\n\n    "
              );
        })(t[0]);
      })
      .catch(function (t) {
        alert(t.message);
      });
  })();
})();
