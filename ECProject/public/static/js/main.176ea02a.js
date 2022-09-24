/*! For license information please see main.176ea02a.js.LICENSE.txt */
!(function () {
  var e = {
      7757: function (e, t, r) {
        e.exports = r(9727);
      },
      4569: function (e, t, r) {
        e.exports = r(8036);
      },
      3381: function (e, t, r) {
        "use strict";
        var n = r(3589),
          o = r(7297),
          a = r(9301),
          i = r(9774),
          s = r(1804),
          c = r(9145),
          l = r(5411),
          u = r(6467);
        e.exports = function (e) {
          return new Promise(function (t, r) {
            var d = e.data,
              f = e.headers,
              p = e.responseType;
            n.isFormData(d) && delete f["Content-Type"];
            var m = new XMLHttpRequest();
            if (e.auth) {
              var h = e.auth.username || "",
                v = e.auth.password
                  ? unescape(encodeURIComponent(e.auth.password))
                  : "";
              f.Authorization = "Basic " + btoa(h + ":" + v);
            }
            var g = s(e.baseURL, e.url);
            function y() {
              if (m) {
                var n =
                    "getAllResponseHeaders" in m
                      ? c(m.getAllResponseHeaders())
                      : null,
                  a = {
                    data:
                      p && "text" !== p && "json" !== p
                        ? m.response
                        : m.responseText,
                    status: m.status,
                    statusText: m.statusText,
                    headers: n,
                    config: e,
                    request: m,
                  };
                o(t, r, a), (m = null);
              }
            }
            if (
              (m.open(
                e.method.toUpperCase(),
                i(g, e.params, e.paramsSerializer),
                !0
              ),
              (m.timeout = e.timeout),
              "onloadend" in m
                ? (m.onloadend = y)
                : (m.onreadystatechange = function () {
                    m &&
                      4 === m.readyState &&
                      (0 !== m.status ||
                        (m.responseURL &&
                          0 === m.responseURL.indexOf("file:"))) &&
                      setTimeout(y);
                  }),
              (m.onabort = function () {
                m &&
                  (r(u("Request aborted", e, "ECONNABORTED", m)), (m = null));
              }),
              (m.onerror = function () {
                r(u("Network Error", e, null, m)), (m = null);
              }),
              (m.ontimeout = function () {
                var t = "timeout of " + e.timeout + "ms exceeded";
                e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
                  r(
                    u(
                      t,
                      e,
                      e.transitional && e.transitional.clarifyTimeoutError
                        ? "ETIMEDOUT"
                        : "ECONNABORTED",
                      m
                    )
                  ),
                  (m = null);
              }),
              n.isStandardBrowserEnv())
            ) {
              var k =
                (e.withCredentials || l(g)) && e.xsrfCookieName
                  ? a.read(e.xsrfCookieName)
                  : void 0;
              k && (f[e.xsrfHeaderName] = k);
            }
            "setRequestHeader" in m &&
              n.forEach(f, function (e, t) {
                "undefined" === typeof d && "content-type" === t.toLowerCase()
                  ? delete f[t]
                  : m.setRequestHeader(t, e);
              }),
              n.isUndefined(e.withCredentials) ||
                (m.withCredentials = !!e.withCredentials),
              p && "json" !== p && (m.responseType = e.responseType),
              "function" === typeof e.onDownloadProgress &&
                m.addEventListener("progress", e.onDownloadProgress),
              "function" === typeof e.onUploadProgress &&
                m.upload &&
                m.upload.addEventListener("progress", e.onUploadProgress),
              e.cancelToken &&
                e.cancelToken.promise.then(function (e) {
                  m && (m.abort(), r(e), (m = null));
                }),
              d || (d = null),
              m.send(d);
          });
        };
      },
      8036: function (e, t, r) {
        "use strict";
        var n = r(3589),
          o = r(4049),
          a = r(3773),
          i = r(777);
        function s(e) {
          var t = new a(e),
            r = o(a.prototype.request, t);
          return n.extend(r, a.prototype, t), n.extend(r, t), r;
        }
        var c = s(r(221));
        (c.Axios = a),
          (c.create = function (e) {
            return s(i(c.defaults, e));
          }),
          (c.Cancel = r(9346)),
          (c.CancelToken = r(6857)),
          (c.isCancel = r(5517)),
          (c.all = function (e) {
            return Promise.all(e);
          }),
          (c.spread = r(8089)),
          (c.isAxiosError = r(9580)),
          (e.exports = c),
          (e.exports.default = c);
      },
      9346: function (e) {
        "use strict";
        function t(e) {
          this.message = e;
        }
        (t.prototype.toString = function () {
          return "Cancel" + (this.message ? ": " + this.message : "");
        }),
          (t.prototype.__CANCEL__ = !0),
          (e.exports = t);
      },
      6857: function (e, t, r) {
        "use strict";
        var n = r(9346);
        function o(e) {
          if ("function" !== typeof e)
            throw new TypeError("executor must be a function.");
          var t;
          this.promise = new Promise(function (e) {
            t = e;
          });
          var r = this;
          e(function (e) {
            r.reason || ((r.reason = new n(e)), t(r.reason));
          });
        }
        (o.prototype.throwIfRequested = function () {
          if (this.reason) throw this.reason;
        }),
          (o.source = function () {
            var e;
            return {
              token: new o(function (t) {
                e = t;
              }),
              cancel: e,
            };
          }),
          (e.exports = o);
      },
      5517: function (e) {
        "use strict";
        e.exports = function (e) {
          return !(!e || !e.__CANCEL__);
        };
      },
      3773: function (e, t, r) {
        "use strict";
        var n = r(3589),
          o = r(9774),
          a = r(7470),
          i = r(2733),
          s = r(777),
          c = r(7835),
          l = c.validators;
        function u(e) {
          (this.defaults = e),
            (this.interceptors = { request: new a(), response: new a() });
        }
        (u.prototype.request = function (e) {
          "string" === typeof e
            ? ((e = arguments[1] || {}).url = arguments[0])
            : (e = e || {}),
            (e = s(this.defaults, e)).method
              ? (e.method = e.method.toLowerCase())
              : this.defaults.method
              ? (e.method = this.defaults.method.toLowerCase())
              : (e.method = "get");
          var t = e.transitional;
          void 0 !== t &&
            c.assertOptions(
              t,
              {
                silentJSONParsing: l.transitional(l.boolean, "1.0.0"),
                forcedJSONParsing: l.transitional(l.boolean, "1.0.0"),
                clarifyTimeoutError: l.transitional(l.boolean, "1.0.0"),
              },
              !1
            );
          var r = [],
            n = !0;
          this.interceptors.request.forEach(function (t) {
            ("function" === typeof t.runWhen && !1 === t.runWhen(e)) ||
              ((n = n && t.synchronous), r.unshift(t.fulfilled, t.rejected));
          });
          var o,
            a = [];
          if (
            (this.interceptors.response.forEach(function (e) {
              a.push(e.fulfilled, e.rejected);
            }),
            !n)
          ) {
            var u = [i, void 0];
            for (
              Array.prototype.unshift.apply(u, r),
                u = u.concat(a),
                o = Promise.resolve(e);
              u.length;

            )
              o = o.then(u.shift(), u.shift());
            return o;
          }
          for (var d = e; r.length; ) {
            var f = r.shift(),
              p = r.shift();
            try {
              d = f(d);
            } catch (m) {
              p(m);
              break;
            }
          }
          try {
            o = i(d);
          } catch (m) {
            return Promise.reject(m);
          }
          for (; a.length; ) o = o.then(a.shift(), a.shift());
          return o;
        }),
          (u.prototype.getUri = function (e) {
            return (
              (e = s(this.defaults, e)),
              o(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
            );
          }),
          n.forEach(["delete", "get", "head", "options"], function (e) {
            u.prototype[e] = function (t, r) {
              return this.request(
                s(r || {}, { method: e, url: t, data: (r || {}).data })
              );
            };
          }),
          n.forEach(["post", "put", "patch"], function (e) {
            u.prototype[e] = function (t, r, n) {
              return this.request(s(n || {}, { method: e, url: t, data: r }));
            };
          }),
          (e.exports = u);
      },
      7470: function (e, t, r) {
        "use strict";
        var n = r(3589);
        function o() {
          this.handlers = [];
        }
        (o.prototype.use = function (e, t, r) {
          return (
            this.handlers.push({
              fulfilled: e,
              rejected: t,
              synchronous: !!r && r.synchronous,
              runWhen: r ? r.runWhen : null,
            }),
            this.handlers.length - 1
          );
        }),
          (o.prototype.eject = function (e) {
            this.handlers[e] && (this.handlers[e] = null);
          }),
          (o.prototype.forEach = function (e) {
            n.forEach(this.handlers, function (t) {
              null !== t && e(t);
            });
          }),
          (e.exports = o);
      },
      1804: function (e, t, r) {
        "use strict";
        var n = r(4044),
          o = r(9549);
        e.exports = function (e, t) {
          return e && !n(t) ? o(e, t) : t;
        };
      },
      6467: function (e, t, r) {
        "use strict";
        var n = r(6460);
        e.exports = function (e, t, r, o, a) {
          var i = new Error(e);
          return n(i, t, r, o, a);
        };
      },
      2733: function (e, t, r) {
        "use strict";
        var n = r(3589),
          o = r(2693),
          a = r(5517),
          i = r(221);
        function s(e) {
          e.cancelToken && e.cancelToken.throwIfRequested();
        }
        e.exports = function (e) {
          return (
            s(e),
            (e.headers = e.headers || {}),
            (e.data = o.call(e, e.data, e.headers, e.transformRequest)),
            (e.headers = n.merge(
              e.headers.common || {},
              e.headers[e.method] || {},
              e.headers
            )),
            n.forEach(
              ["delete", "get", "head", "post", "put", "patch", "common"],
              function (t) {
                delete e.headers[t];
              }
            ),
            (e.adapter || i.adapter)(e).then(
              function (t) {
                return (
                  s(e),
                  (t.data = o.call(e, t.data, t.headers, e.transformResponse)),
                  t
                );
              },
              function (t) {
                return (
                  a(t) ||
                    (s(e),
                    t &&
                      t.response &&
                      (t.response.data = o.call(
                        e,
                        t.response.data,
                        t.response.headers,
                        e.transformResponse
                      ))),
                  Promise.reject(t)
                );
              }
            )
          );
        };
      },
      6460: function (e) {
        "use strict";
        e.exports = function (e, t, r, n, o) {
          return (
            (e.config = t),
            r && (e.code = r),
            (e.request = n),
            (e.response = o),
            (e.isAxiosError = !0),
            (e.toJSON = function () {
              return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: this.config,
                code: this.code,
              };
            }),
            e
          );
        };
      },
      777: function (e, t, r) {
        "use strict";
        var n = r(3589);
        e.exports = function (e, t) {
          t = t || {};
          var r = {},
            o = ["url", "method", "data"],
            a = ["headers", "auth", "proxy", "params"],
            i = [
              "baseURL",
              "transformRequest",
              "transformResponse",
              "paramsSerializer",
              "timeout",
              "timeoutMessage",
              "withCredentials",
              "adapter",
              "responseType",
              "xsrfCookieName",
              "xsrfHeaderName",
              "onUploadProgress",
              "onDownloadProgress",
              "decompress",
              "maxContentLength",
              "maxBodyLength",
              "maxRedirects",
              "transport",
              "httpAgent",
              "httpsAgent",
              "cancelToken",
              "socketPath",
              "responseEncoding",
            ],
            s = ["validateStatus"];
          function c(e, t) {
            return n.isPlainObject(e) && n.isPlainObject(t)
              ? n.merge(e, t)
              : n.isPlainObject(t)
              ? n.merge({}, t)
              : n.isArray(t)
              ? t.slice()
              : t;
          }
          function l(o) {
            n.isUndefined(t[o])
              ? n.isUndefined(e[o]) || (r[o] = c(void 0, e[o]))
              : (r[o] = c(e[o], t[o]));
          }
          n.forEach(o, function (e) {
            n.isUndefined(t[e]) || (r[e] = c(void 0, t[e]));
          }),
            n.forEach(a, l),
            n.forEach(i, function (o) {
              n.isUndefined(t[o])
                ? n.isUndefined(e[o]) || (r[o] = c(void 0, e[o]))
                : (r[o] = c(void 0, t[o]));
            }),
            n.forEach(s, function (n) {
              n in t
                ? (r[n] = c(e[n], t[n]))
                : n in e && (r[n] = c(void 0, e[n]));
            });
          var u = o.concat(a).concat(i).concat(s),
            d = Object.keys(e)
              .concat(Object.keys(t))
              .filter(function (e) {
                return -1 === u.indexOf(e);
              });
          return n.forEach(d, l), r;
        };
      },
      7297: function (e, t, r) {
        "use strict";
        var n = r(6467);
        e.exports = function (e, t, r) {
          var o = r.config.validateStatus;
          r.status && o && !o(r.status)
            ? t(
                n(
                  "Request failed with status code " + r.status,
                  r.config,
                  null,
                  r.request,
                  r
                )
              )
            : e(r);
        };
      },
      2693: function (e, t, r) {
        "use strict";
        var n = r(3589),
          o = r(221);
        e.exports = function (e, t, r) {
          var a = this || o;
          return (
            n.forEach(r, function (r) {
              e = r.call(a, e, t);
            }),
            e
          );
        };
      },
      221: function (e, t, r) {
        "use strict";
        var n = r(3589),
          o = r(4341),
          a = r(6460),
          i = { "Content-Type": "application/x-www-form-urlencoded" };
        function s(e, t) {
          !n.isUndefined(e) &&
            n.isUndefined(e["Content-Type"]) &&
            (e["Content-Type"] = t);
        }
        var c = {
          transitional: {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1,
          },
          adapter: (function () {
            var e;
            return (
              ("undefined" !== typeof XMLHttpRequest ||
                ("undefined" !== typeof process &&
                  "[object process]" ===
                    Object.prototype.toString.call(process))) &&
                (e = r(3381)),
              e
            );
          })(),
          transformRequest: [
            function (e, t) {
              return (
                o(t, "Accept"),
                o(t, "Content-Type"),
                n.isFormData(e) ||
                n.isArrayBuffer(e) ||
                n.isBuffer(e) ||
                n.isStream(e) ||
                n.isFile(e) ||
                n.isBlob(e)
                  ? e
                  : n.isArrayBufferView(e)
                  ? e.buffer
                  : n.isURLSearchParams(e)
                  ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"),
                    e.toString())
                  : n.isObject(e) ||
                    (t && "application/json" === t["Content-Type"])
                  ? (s(t, "application/json"),
                    (function (e, t, r) {
                      if (n.isString(e))
                        try {
                          return (t || JSON.parse)(e), n.trim(e);
                        } catch (o) {
                          if ("SyntaxError" !== o.name) throw o;
                        }
                      return (r || JSON.stringify)(e);
                    })(e))
                  : e
              );
            },
          ],
          transformResponse: [
            function (e) {
              var t = this.transitional,
                r = t && t.silentJSONParsing,
                o = t && t.forcedJSONParsing,
                i = !r && "json" === this.responseType;
              if (i || (o && n.isString(e) && e.length))
                try {
                  return JSON.parse(e);
                } catch (s) {
                  if (i) {
                    if ("SyntaxError" === s.name)
                      throw a(s, this, "E_JSON_PARSE");
                    throw s;
                  }
                }
              return e;
            },
          ],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          validateStatus: function (e) {
            return e >= 200 && e < 300;
          },
          headers: { common: { Accept: "application/json, text/plain, */*" } },
        };
        n.forEach(["delete", "get", "head"], function (e) {
          c.headers[e] = {};
        }),
          n.forEach(["post", "put", "patch"], function (e) {
            c.headers[e] = n.merge(i);
          }),
          (e.exports = c);
      },
      4049: function (e) {
        "use strict";
        e.exports = function (e, t) {
          return function () {
            for (var r = new Array(arguments.length), n = 0; n < r.length; n++)
              r[n] = arguments[n];
            return e.apply(t, r);
          };
        };
      },
      9774: function (e, t, r) {
        "use strict";
        var n = r(3589);
        function o(e) {
          return encodeURIComponent(e)
            .replace(/%3A/gi, ":")
            .replace(/%24/g, "$")
            .replace(/%2C/gi, ",")
            .replace(/%20/g, "+")
            .replace(/%5B/gi, "[")
            .replace(/%5D/gi, "]");
        }
        e.exports = function (e, t, r) {
          if (!t) return e;
          var a;
          if (r) a = r(t);
          else if (n.isURLSearchParams(t)) a = t.toString();
          else {
            var i = [];
            n.forEach(t, function (e, t) {
              null !== e &&
                "undefined" !== typeof e &&
                (n.isArray(e) ? (t += "[]") : (e = [e]),
                n.forEach(e, function (e) {
                  n.isDate(e)
                    ? (e = e.toISOString())
                    : n.isObject(e) && (e = JSON.stringify(e)),
                    i.push(o(t) + "=" + o(e));
                }));
            }),
              (a = i.join("&"));
          }
          if (a) {
            var s = e.indexOf("#");
            -1 !== s && (e = e.slice(0, s)),
              (e += (-1 === e.indexOf("?") ? "?" : "&") + a);
          }
          return e;
        };
      },
      9549: function (e) {
        "use strict";
        e.exports = function (e, t) {
          return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
        };
      },
      9301: function (e, t, r) {
        "use strict";
        var n = r(3589);
        e.exports = n.isStandardBrowserEnv()
          ? {
              write: function (e, t, r, o, a, i) {
                var s = [];
                s.push(e + "=" + encodeURIComponent(t)),
                  n.isNumber(r) &&
                    s.push("expires=" + new Date(r).toGMTString()),
                  n.isString(o) && s.push("path=" + o),
                  n.isString(a) && s.push("domain=" + a),
                  !0 === i && s.push("secure"),
                  (document.cookie = s.join("; "));
              },
              read: function (e) {
                var t = document.cookie.match(
                  new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
                );
                return t ? decodeURIComponent(t[3]) : null;
              },
              remove: function (e) {
                this.write(e, "", Date.now() - 864e5);
              },
            }
          : {
              write: function () {},
              read: function () {
                return null;
              },
              remove: function () {},
            };
      },
      4044: function (e) {
        "use strict";
        e.exports = function (e) {
          return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e);
        };
      },
      9580: function (e) {
        "use strict";
        e.exports = function (e) {
          return "object" === typeof e && !0 === e.isAxiosError;
        };
      },
      5411: function (e, t, r) {
        "use strict";
        var n = r(3589);
        e.exports = n.isStandardBrowserEnv()
          ? (function () {
              var e,
                t = /(msie|trident)/i.test(navigator.userAgent),
                r = document.createElement("a");
              function o(e) {
                var n = e;
                return (
                  t && (r.setAttribute("href", n), (n = r.href)),
                  r.setAttribute("href", n),
                  {
                    href: r.href,
                    protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
                    host: r.host,
                    search: r.search ? r.search.replace(/^\?/, "") : "",
                    hash: r.hash ? r.hash.replace(/^#/, "") : "",
                    hostname: r.hostname,
                    port: r.port,
                    pathname:
                      "/" === r.pathname.charAt(0)
                        ? r.pathname
                        : "/" + r.pathname,
                  }
                );
              }
              return (
                (e = o(window.location.href)),
                function (t) {
                  var r = n.isString(t) ? o(t) : t;
                  return r.protocol === e.protocol && r.host === e.host;
                }
              );
            })()
          : function () {
              return !0;
            };
      },
      4341: function (e, t, r) {
        "use strict";
        var n = r(3589);
        e.exports = function (e, t) {
          n.forEach(e, function (r, n) {
            n !== t &&
              n.toUpperCase() === t.toUpperCase() &&
              ((e[t] = r), delete e[n]);
          });
        };
      },
      9145: function (e, t, r) {
        "use strict";
        var n = r(3589),
          o = [
            "age",
            "authorization",
            "content-length",
            "content-type",
            "etag",
            "expires",
            "from",
            "host",
            "if-modified-since",
            "if-unmodified-since",
            "last-modified",
            "location",
            "max-forwards",
            "proxy-authorization",
            "referer",
            "retry-after",
            "user-agent",
          ];
        e.exports = function (e) {
          var t,
            r,
            a,
            i = {};
          return e
            ? (n.forEach(e.split("\n"), function (e) {
                if (
                  ((a = e.indexOf(":")),
                  (t = n.trim(e.substr(0, a)).toLowerCase()),
                  (r = n.trim(e.substr(a + 1))),
                  t)
                ) {
                  if (i[t] && o.indexOf(t) >= 0) return;
                  i[t] =
                    "set-cookie" === t
                      ? (i[t] ? i[t] : []).concat([r])
                      : i[t]
                      ? i[t] + ", " + r
                      : r;
                }
              }),
              i)
            : i;
        };
      },
      8089: function (e) {
        "use strict";
        e.exports = function (e) {
          return function (t) {
            return e.apply(null, t);
          };
        };
      },
      7835: function (e, t, r) {
        "use strict";
        var n = r(8593),
          o = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach(
          function (e, t) {
            o[e] = function (r) {
              return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
            };
          }
        );
        var a = {},
          i = n.version.split(".");
        function s(e, t) {
          for (
            var r = t ? t.split(".") : i, n = e.split("."), o = 0;
            o < 3;
            o++
          ) {
            if (r[o] > n[o]) return !0;
            if (r[o] < n[o]) return !1;
          }
          return !1;
        }
        (o.transitional = function (e, t, r) {
          var o = t && s(t);
          function i(e, t) {
            return (
              "[Axios v" +
              n.version +
              "] Transitional option '" +
              e +
              "'" +
              t +
              (r ? ". " + r : "")
            );
          }
          return function (r, n, s) {
            if (!1 === e) throw new Error(i(n, " has been removed in " + t));
            return (
              o &&
                !a[n] &&
                ((a[n] = !0),
                console.warn(
                  i(
                    n,
                    " has been deprecated since v" +
                      t +
                      " and will be removed in the near future"
                  )
                )),
              !e || e(r, n, s)
            );
          };
        }),
          (e.exports = {
            isOlderVersion: s,
            assertOptions: function (e, t, r) {
              if ("object" !== typeof e)
                throw new TypeError("options must be an object");
              for (var n = Object.keys(e), o = n.length; o-- > 0; ) {
                var a = n[o],
                  i = t[a];
                if (i) {
                  var s = e[a],
                    c = void 0 === s || i(s, a, e);
                  if (!0 !== c)
                    throw new TypeError("option " + a + " must be " + c);
                } else if (!0 !== r) throw Error("Unknown option " + a);
              }
            },
            validators: o,
          });
      },
      3589: function (e, t, r) {
        "use strict";
        var n = r(4049),
          o = Object.prototype.toString;
        function a(e) {
          return "[object Array]" === o.call(e);
        }
        function i(e) {
          return "undefined" === typeof e;
        }
        function s(e) {
          return null !== e && "object" === typeof e;
        }
        function c(e) {
          if ("[object Object]" !== o.call(e)) return !1;
          var t = Object.getPrototypeOf(e);
          return null === t || t === Object.prototype;
        }
        function l(e) {
          return "[object Function]" === o.call(e);
        }
        function u(e, t) {
          if (null !== e && "undefined" !== typeof e)
            if (("object" !== typeof e && (e = [e]), a(e)))
              for (var r = 0, n = e.length; r < n; r++)
                t.call(null, e[r], r, e);
            else
              for (var o in e)
                Object.prototype.hasOwnProperty.call(e, o) &&
                  t.call(null, e[o], o, e);
        }
        e.exports = {
          isArray: a,
          isArrayBuffer: function (e) {
            return "[object ArrayBuffer]" === o.call(e);
          },
          isBuffer: function (e) {
            return (
              null !== e &&
              !i(e) &&
              null !== e.constructor &&
              !i(e.constructor) &&
              "function" === typeof e.constructor.isBuffer &&
              e.constructor.isBuffer(e)
            );
          },
          isFormData: function (e) {
            return "undefined" !== typeof FormData && e instanceof FormData;
          },
          isArrayBufferView: function (e) {
            return "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView
              ? ArrayBuffer.isView(e)
              : e && e.buffer && e.buffer instanceof ArrayBuffer;
          },
          isString: function (e) {
            return "string" === typeof e;
          },
          isNumber: function (e) {
            return "number" === typeof e;
          },
          isObject: s,
          isPlainObject: c,
          isUndefined: i,
          isDate: function (e) {
            return "[object Date]" === o.call(e);
          },
          isFile: function (e) {
            return "[object File]" === o.call(e);
          },
          isBlob: function (e) {
            return "[object Blob]" === o.call(e);
          },
          isFunction: l,
          isStream: function (e) {
            return s(e) && l(e.pipe);
          },
          isURLSearchParams: function (e) {
            return (
              "undefined" !== typeof URLSearchParams &&
              e instanceof URLSearchParams
            );
          },
          isStandardBrowserEnv: function () {
            return (
              ("undefined" === typeof navigator ||
                ("ReactNative" !== navigator.product &&
                  "NativeScript" !== navigator.product &&
                  "NS" !== navigator.product)) &&
              "undefined" !== typeof window &&
              "undefined" !== typeof document
            );
          },
          forEach: u,
          merge: function e() {
            var t = {};
            function r(r, n) {
              c(t[n]) && c(r)
                ? (t[n] = e(t[n], r))
                : c(r)
                ? (t[n] = e({}, r))
                : a(r)
                ? (t[n] = r.slice())
                : (t[n] = r);
            }
            for (var n = 0, o = arguments.length; n < o; n++)
              u(arguments[n], r);
            return t;
          },
          extend: function (e, t, r) {
            return (
              u(t, function (t, o) {
                e[o] = r && "function" === typeof t ? n(t, r) : t;
              }),
              e
            );
          },
          trim: function (e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
          },
          stripBOM: function (e) {
            return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e;
          },
        };
      },
      1694: function (e, t) {
        var r;
        !(function () {
          "use strict";
          var n = {}.hasOwnProperty;
          function o() {
            for (var e = [], t = 0; t < arguments.length; t++) {
              var r = arguments[t];
              if (r) {
                var a = typeof r;
                if ("string" === a || "number" === a) e.push(r);
                else if (Array.isArray(r)) {
                  if (r.length) {
                    var i = o.apply(null, r);
                    i && e.push(i);
                  }
                } else if ("object" === a)
                  if (r.toString === Object.prototype.toString)
                    for (var s in r) n.call(r, s) && r[s] && e.push(s);
                  else e.push(r.toString());
              }
            }
            return e.join(" ");
          }
          e.exports
            ? ((o.default = o), (e.exports = o))
            : void 0 ===
                (r = function () {
                  return o;
                }.apply(t, [])) || (e.exports = r);
        })();
      },
      2176: function (e) {
        "use strict";
        e.exports = function (e, t, r, n, o, a, i, s) {
          if (!e) {
            var c;
            if (void 0 === t)
              c = new Error(
                "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
              );
            else {
              var l = [r, n, o, a, i, s],
                u = 0;
              (c = new Error(
                t.replace(/%s/g, function () {
                  return l[u++];
                })
              )).name = "Invariant Violation";
            }
            throw ((c.framesToPop = 1), c);
          }
        };
      },
      888: function (e, t, r) {
        "use strict";
        var n = r(9047);
        function o() {}
        function a() {}
        (a.resetWarningCache = o),
          (e.exports = function () {
            function e(e, t, r, o, a, i) {
              if (i !== n) {
                var s = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                );
                throw ((s.name = "Invariant Violation"), s);
              }
            }
            function t() {
              return e;
            }
            e.isRequired = e;
            var r = {
              array: e,
              bigint: e,
              bool: e,
              func: e,
              number: e,
              object: e,
              string: e,
              symbol: e,
              any: e,
              arrayOf: t,
              element: e,
              elementType: e,
              instanceOf: t,
              node: e,
              objectOf: t,
              oneOf: t,
              oneOfType: t,
              shape: t,
              exact: t,
              checkPropTypes: a,
              resetWarningCache: o,
            };
            return (r.PropTypes = r), r;
          });
      },
      2007: function (e, t, r) {
        e.exports = r(888)();
      },
      9047: function (e) {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      4463: function (e, t, r) {
        "use strict";
        var n = r(2791),
          o = r(5296);
        function a(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              r = 1;
            r < arguments.length;
            r++
          )
            t += "&args[]=" + encodeURIComponent(arguments[r]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var i = new Set(),
          s = {};
        function c(e, t) {
          l(e, t), l(e + "Capture", t);
        }
        function l(e, t) {
          for (s[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
        }
        var u = !(
            "undefined" === typeof window ||
            "undefined" === typeof window.document ||
            "undefined" === typeof window.document.createElement
          ),
          d = Object.prototype.hasOwnProperty,
          f =
            /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
          p = {},
          m = {};
        function h(e, t, r, n, o, a, i) {
          (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
            (this.attributeName = n),
            (this.attributeNamespace = o),
            (this.mustUseProperty = r),
            (this.propertyName = e),
            (this.type = t),
            (this.sanitizeURL = a),
            (this.removeEmptyString = i);
        }
        var v = {};
        "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
          .split(" ")
          .forEach(function (e) {
            v[e] = new h(e, 0, !1, e, null, !1, !1);
          }),
          [
            ["acceptCharset", "accept-charset"],
            ["className", "class"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
          ].forEach(function (e) {
            var t = e[0];
            v[t] = new h(t, 1, !1, e[1], null, !1, !1);
          }),
          ["contentEditable", "draggable", "spellCheck", "value"].forEach(
            function (e) {
              v[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1);
            }
          ),
          [
            "autoReverse",
            "externalResourcesRequired",
            "focusable",
            "preserveAlpha",
          ].forEach(function (e) {
            v[e] = new h(e, 2, !1, e, null, !1, !1);
          }),
          "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
            .split(" ")
            .forEach(function (e) {
              v[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1);
            }),
          ["checked", "multiple", "muted", "selected"].forEach(function (e) {
            v[e] = new h(e, 3, !0, e, null, !1, !1);
          }),
          ["capture", "download"].forEach(function (e) {
            v[e] = new h(e, 4, !1, e, null, !1, !1);
          }),
          ["cols", "rows", "size", "span"].forEach(function (e) {
            v[e] = new h(e, 6, !1, e, null, !1, !1);
          }),
          ["rowSpan", "start"].forEach(function (e) {
            v[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1);
          });
        var g = /[\-:]([a-z])/g;
        function y(e) {
          return e[1].toUpperCase();
        }
        function k(e, t, r, n) {
          var o = v.hasOwnProperty(t) ? v[t] : null;
          (null !== o
            ? 0 !== o.type
            : n ||
              !(2 < t.length) ||
              ("o" !== t[0] && "O" !== t[0]) ||
              ("n" !== t[1] && "N" !== t[1])) &&
            ((function (e, t, r, n) {
              if (
                null === t ||
                "undefined" === typeof t ||
                (function (e, t, r, n) {
                  if (null !== r && 0 === r.type) return !1;
                  switch (typeof t) {
                    case "function":
                    case "symbol":
                      return !0;
                    case "boolean":
                      return (
                        !n &&
                        (null !== r
                          ? !r.acceptsBooleans
                          : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                            "aria-" !== e)
                      );
                    default:
                      return !1;
                  }
                })(e, t, r, n)
              )
                return !0;
              if (n) return !1;
              if (null !== r)
                switch (r.type) {
                  case 3:
                    return !t;
                  case 4:
                    return !1 === t;
                  case 5:
                    return isNaN(t);
                  case 6:
                    return isNaN(t) || 1 > t;
                }
              return !1;
            })(t, r, o, n) && (r = null),
            n || null === o
              ? (function (e) {
                  return (
                    !!d.call(m, e) ||
                    (!d.call(p, e) &&
                      (f.test(e) ? (m[e] = !0) : ((p[e] = !0), !1)))
                  );
                })(t) &&
                (null === r ? e.removeAttribute(t) : e.setAttribute(t, "" + r))
              : o.mustUseProperty
              ? (e[o.propertyName] = null === r ? 3 !== o.type && "" : r)
              : ((t = o.attributeName),
                (n = o.attributeNamespace),
                null === r
                  ? e.removeAttribute(t)
                  : ((r =
                      3 === (o = o.type) || (4 === o && !0 === r)
                        ? ""
                        : "" + r),
                    n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))));
        }
        "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new h(t, 1, !1, e, null, !1, !1);
          }),
          "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
            .split(" ")
            .forEach(function (e) {
              var t = e.replace(g, y);
              v[t] = new h(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
            }),
          ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
            var t = e.replace(g, y);
            v[t] = new h(
              t,
              1,
              !1,
              e,
              "http://www.w3.org/XML/1998/namespace",
              !1,
              !1
            );
          }),
          ["tabIndex", "crossOrigin"].forEach(function (e) {
            v[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1);
          }),
          (v.xlinkHref = new h(
            "xlinkHref",
            1,
            !1,
            "xlink:href",
            "http://www.w3.org/1999/xlink",
            !0,
            !1
          )),
          ["src", "href", "action", "formAction"].forEach(function (e) {
            v[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0);
          });
        var b = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          w = Symbol.for("react.element"),
          C = Symbol.for("react.portal"),
          x = Symbol.for("react.fragment"),
          P = Symbol.for("react.strict_mode"),
          S = Symbol.for("react.profiler"),
          B = Symbol.for("react.provider"),
          E = Symbol.for("react.context"),
          T = Symbol.for("react.forward_ref"),
          R = Symbol.for("react.suspense"),
          j = Symbol.for("react.suspense_list"),
          N = Symbol.for("react.memo"),
          O = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var _ = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var M = Symbol.iterator;
        function L(e) {
          return null === e || "object" !== typeof e
            ? null
            : "function" === typeof (e = (M && e[M]) || e["@@iterator"])
            ? e
            : null;
        }
        var D,
          I = Object.assign;
        function A(e) {
          if (void 0 === D)
            try {
              throw Error();
            } catch (r) {
              var t = r.stack.trim().match(/\n( *(at )?)/);
              D = (t && t[1]) || "";
            }
          return "\n" + D + e;
        }
        var U = !1;
        function z(e, t) {
          if (!e || U) return "";
          U = !0;
          var r = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t)
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" === typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (l) {
                  var n = l;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (l) {
                  n = l;
                }
                e.call(t.prototype);
              }
            else {
              try {
                throw Error();
              } catch (l) {
                n = l;
              }
              e();
            }
          } catch (l) {
            if (l && n && "string" === typeof l.stack) {
              for (
                var o = l.stack.split("\n"),
                  a = n.stack.split("\n"),
                  i = o.length - 1,
                  s = a.length - 1;
                1 <= i && 0 <= s && o[i] !== a[s];

              )
                s--;
              for (; 1 <= i && 0 <= s; i--, s--)
                if (o[i] !== a[s]) {
                  if (1 !== i || 1 !== s)
                    do {
                      if ((i--, 0 > --s || o[i] !== a[s])) {
                        var c = "\n" + o[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            c.includes("<anonymous>") &&
                            (c = c.replace("<anonymous>", e.displayName)),
                          c
                        );
                      }
                    } while (1 <= i && 0 <= s);
                  break;
                }
            }
          } finally {
            (U = !1), (Error.prepareStackTrace = r);
          }
          return (e = e ? e.displayName || e.name : "") ? A(e) : "";
        }
        function F(e) {
          switch (e.tag) {
            case 5:
              return A(e.type);
            case 16:
              return A("Lazy");
            case 13:
              return A("Suspense");
            case 19:
              return A("SuspenseList");
            case 0:
            case 2:
            case 15:
              return (e = z(e.type, !1));
            case 11:
              return (e = z(e.type.render, !1));
            case 1:
              return (e = z(e.type, !0));
            default:
              return "";
          }
        }
        function K(e) {
          if (null == e) return null;
          if ("function" === typeof e) return e.displayName || e.name || null;
          if ("string" === typeof e) return e;
          switch (e) {
            case x:
              return "Fragment";
            case C:
              return "Portal";
            case S:
              return "Profiler";
            case P:
              return "StrictMode";
            case R:
              return "Suspense";
            case j:
              return "SuspenseList";
          }
          if ("object" === typeof e)
            switch (e.$$typeof) {
              case E:
                return (e.displayName || "Context") + ".Consumer";
              case B:
                return (e._context.displayName || "Context") + ".Provider";
              case T:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case N:
                return null !== (t = e.displayName || null)
                  ? t
                  : K(e.type) || "Memo";
              case O:
                (t = e._payload), (e = e._init);
                try {
                  return K(e(t));
                } catch (r) {}
            }
          return null;
        }
        function V(e) {
          var t = e.type;
          switch (e.tag) {
            case 24:
              return "Cache";
            case 9:
              return (t.displayName || "Context") + ".Consumer";
            case 10:
              return (t._context.displayName || "Context") + ".Provider";
            case 18:
              return "DehydratedFragment";
            case 11:
              return (
                (e = (e = t.render).displayName || e.name || ""),
                t.displayName ||
                  ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
              );
            case 7:
              return "Fragment";
            case 5:
              return t;
            case 4:
              return "Portal";
            case 3:
              return "Root";
            case 6:
              return "Text";
            case 16:
              return K(t);
            case 8:
              return t === P ? "StrictMode" : "Mode";
            case 22:
              return "Offscreen";
            case 12:
              return "Profiler";
            case 21:
              return "Scope";
            case 13:
              return "Suspense";
            case 19:
              return "SuspenseList";
            case 25:
              return "TracingMarker";
            case 1:
            case 0:
            case 17:
            case 2:
            case 14:
            case 15:
              if ("function" === typeof t)
                return t.displayName || t.name || null;
              if ("string" === typeof t) return t;
          }
          return null;
        }
        function J(e) {
          switch (typeof e) {
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function H(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function W(e) {
          e._valueTracker ||
            (e._valueTracker = (function (e) {
              var t = H(e) ? "checked" : "value",
                r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                n = "" + e[t];
              if (
                !e.hasOwnProperty(t) &&
                "undefined" !== typeof r &&
                "function" === typeof r.get &&
                "function" === typeof r.set
              ) {
                var o = r.get,
                  a = r.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return o.call(this);
                    },
                    set: function (e) {
                      (n = "" + e), a.call(this, e);
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: r.enumerable }),
                  {
                    getValue: function () {
                      return n;
                    },
                    setValue: function (e) {
                      n = "" + e;
                    },
                    stopTracking: function () {
                      (e._valueTracker = null), delete e[t];
                    },
                  }
                );
              }
            })(e));
        }
        function G(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var r = t.getValue(),
            n = "";
          return (
            e && (n = H(e) ? (e.checked ? "true" : "false") : e.value),
            (e = n) !== r && (t.setValue(e), !0)
          );
        }
        function Q(e) {
          if (
            "undefined" ===
            typeof (e =
              e || ("undefined" !== typeof document ? document : void 0))
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch (t) {
            return e.body;
          }
        }
        function X(e, t) {
          var r = t.checked;
          return I({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != r ? r : e._wrapperState.initialChecked,
          });
        }
        function Y(e, t) {
          var r = null == t.defaultValue ? "" : t.defaultValue,
            n = null != t.checked ? t.checked : t.defaultChecked;
          (r = J(null != t.value ? t.value : r)),
            (e._wrapperState = {
              initialChecked: n,
              initialValue: r,
              controlled:
                "checkbox" === t.type || "radio" === t.type
                  ? null != t.checked
                  : null != t.value,
            });
        }
        function q(e, t) {
          null != (t = t.checked) && k(e, "checked", t, !1);
        }
        function $(e, t) {
          q(e, t);
          var r = J(t.value),
            n = t.type;
          if (null != r)
            "number" === n
              ? ((0 === r && "" === e.value) || e.value != r) &&
                (e.value = "" + r)
              : e.value !== "" + r && (e.value = "" + r);
          else if ("submit" === n || "reset" === n)
            return void e.removeAttribute("value");
          t.hasOwnProperty("value")
            ? ee(e, t.type, r)
            : t.hasOwnProperty("defaultValue") &&
              ee(e, t.type, J(t.defaultValue)),
            null == t.checked &&
              null != t.defaultChecked &&
              (e.defaultChecked = !!t.defaultChecked);
        }
        function Z(e, t, r) {
          if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var n = t.type;
            if (
              !(
                ("submit" !== n && "reset" !== n) ||
                (void 0 !== t.value && null !== t.value)
              )
            )
              return;
            (t = "" + e._wrapperState.initialValue),
              r || t === e.value || (e.value = t),
              (e.defaultValue = t);
          }
          "" !== (r = e.name) && (e.name = ""),
            (e.defaultChecked = !!e._wrapperState.initialChecked),
            "" !== r && (e.name = r);
        }
        function ee(e, t, r) {
          ("number" === t && Q(e.ownerDocument) === e) ||
            (null == r
              ? (e.defaultValue = "" + e._wrapperState.initialValue)
              : e.defaultValue !== "" + r && (e.defaultValue = "" + r));
        }
        var te = Array.isArray;
        function re(e, t, r, n) {
          if (((e = e.options), t)) {
            t = {};
            for (var o = 0; o < r.length; o++) t["$" + r[o]] = !0;
            for (r = 0; r < e.length; r++)
              (o = t.hasOwnProperty("$" + e[r].value)),
                e[r].selected !== o && (e[r].selected = o),
                o && n && (e[r].defaultSelected = !0);
          } else {
            for (r = "" + J(r), t = null, o = 0; o < e.length; o++) {
              if (e[o].value === r)
                return (
                  (e[o].selected = !0), void (n && (e[o].defaultSelected = !0))
                );
              null !== t || e[o].disabled || (t = e[o]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function ne(e, t) {
          if (null != t.dangerouslySetInnerHTML) throw Error(a(91));
          return I({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue,
          });
        }
        function oe(e, t) {
          var r = t.value;
          if (null == r) {
            if (((r = t.children), (t = t.defaultValue), null != r)) {
              if (null != t) throw Error(a(92));
              if (te(r)) {
                if (1 < r.length) throw Error(a(93));
                r = r[0];
              }
              t = r;
            }
            null == t && (t = ""), (r = t);
          }
          e._wrapperState = { initialValue: J(r) };
        }
        function ae(e, t) {
          var r = J(t.value),
            n = J(t.defaultValue);
          null != r &&
            ((r = "" + r) !== e.value && (e.value = r),
            null == t.defaultValue &&
              e.defaultValue !== r &&
              (e.defaultValue = r)),
            null != n && (e.defaultValue = "" + n);
        }
        function ie(e) {
          var t = e.textContent;
          t === e._wrapperState.initialValue &&
            "" !== t &&
            null !== t &&
            (e.value = t);
        }
        function se(e) {
          switch (e) {
            case "svg":
              return "http://www.w3.org/2000/svg";
            case "math":
              return "http://www.w3.org/1998/Math/MathML";
            default:
              return "http://www.w3.org/1999/xhtml";
          }
        }
        function ce(e, t) {
          return null == e || "http://www.w3.org/1999/xhtml" === e
            ? se(t)
            : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
            ? "http://www.w3.org/1999/xhtml"
            : e;
        }
        var le,
          ue,
          de =
            ((ue = function (e, t) {
              if (
                "http://www.w3.org/2000/svg" !== e.namespaceURI ||
                "innerHTML" in e
              )
                e.innerHTML = t;
              else {
                for (
                  (le = le || document.createElement("div")).innerHTML =
                    "<svg>" + t.valueOf().toString() + "</svg>",
                    t = le.firstChild;
                  e.firstChild;

                )
                  e.removeChild(e.firstChild);
                for (; t.firstChild; ) e.appendChild(t.firstChild);
              }
            }),
            "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction
              ? function (e, t, r, n) {
                  MSApp.execUnsafeLocalFunction(function () {
                    return ue(e, t);
                  });
                }
              : ue);
        function fe(e, t) {
          if (t) {
            var r = e.firstChild;
            if (r && r === e.lastChild && 3 === r.nodeType)
              return void (r.nodeValue = t);
          }
          e.textContent = t;
        }
        var pe = {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0,
          },
          me = ["Webkit", "ms", "Moz", "O"];
        function he(e, t, r) {
          return null == t || "boolean" === typeof t || "" === t
            ? ""
            : r ||
              "number" !== typeof t ||
              0 === t ||
              (pe.hasOwnProperty(e) && pe[e])
            ? ("" + t).trim()
            : t + "px";
        }
        function ve(e, t) {
          for (var r in ((e = e.style), t))
            if (t.hasOwnProperty(r)) {
              var n = 0 === r.indexOf("--"),
                o = he(r, t[r], n);
              "float" === r && (r = "cssFloat"),
                n ? e.setProperty(r, o) : (e[r] = o);
            }
        }
        Object.keys(pe).forEach(function (e) {
          me.forEach(function (t) {
            (t = t + e.charAt(0).toUpperCase() + e.substring(1)),
              (pe[t] = pe[e]);
          });
        });
        var ge = I(
          { menuitem: !0 },
          {
            area: !0,
            base: !0,
            br: !0,
            col: !0,
            embed: !0,
            hr: !0,
            img: !0,
            input: !0,
            keygen: !0,
            link: !0,
            meta: !0,
            param: !0,
            source: !0,
            track: !0,
            wbr: !0,
          }
        );
        function ye(e, t) {
          if (t) {
            if (
              ge[e] &&
              (null != t.children || null != t.dangerouslySetInnerHTML)
            )
              throw Error(a(137, e));
            if (null != t.dangerouslySetInnerHTML) {
              if (null != t.children) throw Error(a(60));
              if (
                "object" !== typeof t.dangerouslySetInnerHTML ||
                !("__html" in t.dangerouslySetInnerHTML)
              )
                throw Error(a(61));
            }
            if (null != t.style && "object" !== typeof t.style)
              throw Error(a(62));
          }
        }
        function ke(e, t) {
          if (-1 === e.indexOf("-")) return "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var be = null;
        function we(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Ce = null,
          xe = null,
          Pe = null;
        function Se(e) {
          if ((e = go(e))) {
            if ("function" !== typeof Ce) throw Error(a(280));
            var t = e.stateNode;
            t && ((t = ko(t)), Ce(e.stateNode, e.type, t));
          }
        }
        function Be(e) {
          xe ? (Pe ? Pe.push(e) : (Pe = [e])) : (xe = e);
        }
        function Ee() {
          if (xe) {
            var e = xe,
              t = Pe;
            if (((Pe = xe = null), Se(e), t))
              for (e = 0; e < t.length; e++) Se(t[e]);
          }
        }
        function Te(e, t) {
          return e(t);
        }
        function Re() {}
        var je = !1;
        function Ne(e, t, r) {
          if (je) return e(t, r);
          je = !0;
          try {
            return Te(e, t, r);
          } finally {
            (je = !1), (null !== xe || null !== Pe) && (Re(), Ee());
          }
        }
        function Oe(e, t) {
          var r = e.stateNode;
          if (null === r) return null;
          var n = ko(r);
          if (null === n) return null;
          r = n[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              (n = !n.disabled) ||
                (n = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !n);
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (r && "function" !== typeof r) throw Error(a(231, t, typeof r));
          return r;
        }
        var _e = !1;
        if (u)
          try {
            var Me = {};
            Object.defineProperty(Me, "passive", {
              get: function () {
                _e = !0;
              },
            }),
              window.addEventListener("test", Me, Me),
              window.removeEventListener("test", Me, Me);
          } catch (ue) {
            _e = !1;
          }
        function Le(e, t, r, n, o, a, i, s, c) {
          var l = Array.prototype.slice.call(arguments, 3);
          try {
            t.apply(r, l);
          } catch (u) {
            this.onError(u);
          }
        }
        var De = !1,
          Ie = null,
          Ae = !1,
          Ue = null,
          ze = {
            onError: function (e) {
              (De = !0), (Ie = e);
            },
          };
        function Fe(e, t, r, n, o, a, i, s, c) {
          (De = !1), (Ie = null), Le.apply(ze, arguments);
        }
        function Ke(e) {
          var t = e,
            r = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              0 !== (4098 & (t = e).flags) && (r = t.return), (e = t.return);
            } while (e);
          }
          return 3 === t.tag ? r : null;
        }
        function Ve(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function Je(e) {
          if (Ke(e) !== e) throw Error(a(188));
        }
        function He(e) {
          return null !==
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = Ke(e))) throw Error(a(188));
                return t !== e ? null : e;
              }
              for (var r = e, n = t; ; ) {
                var o = r.return;
                if (null === o) break;
                var i = o.alternate;
                if (null === i) {
                  if (null !== (n = o.return)) {
                    r = n;
                    continue;
                  }
                  break;
                }
                if (o.child === i.child) {
                  for (i = o.child; i; ) {
                    if (i === r) return Je(o), e;
                    if (i === n) return Je(o), t;
                    i = i.sibling;
                  }
                  throw Error(a(188));
                }
                if (r.return !== n.return) (r = o), (n = i);
                else {
                  for (var s = !1, c = o.child; c; ) {
                    if (c === r) {
                      (s = !0), (r = o), (n = i);
                      break;
                    }
                    if (c === n) {
                      (s = !0), (n = o), (r = i);
                      break;
                    }
                    c = c.sibling;
                  }
                  if (!s) {
                    for (c = i.child; c; ) {
                      if (c === r) {
                        (s = !0), (r = i), (n = o);
                        break;
                      }
                      if (c === n) {
                        (s = !0), (n = i), (r = o);
                        break;
                      }
                      c = c.sibling;
                    }
                    if (!s) throw Error(a(189));
                  }
                }
                if (r.alternate !== n) throw Error(a(190));
              }
              if (3 !== r.tag) throw Error(a(188));
              return r.stateNode.current === r ? e : t;
            })(e))
            ? We(e)
            : null;
        }
        function We(e) {
          if (5 === e.tag || 6 === e.tag) return e;
          for (e = e.child; null !== e; ) {
            var t = We(e);
            if (null !== t) return t;
            e = e.sibling;
          }
          return null;
        }
        var Ge = o.unstable_scheduleCallback,
          Qe = o.unstable_cancelCallback,
          Xe = o.unstable_shouldYield,
          Ye = o.unstable_requestPaint,
          qe = o.unstable_now,
          $e = o.unstable_getCurrentPriorityLevel,
          Ze = o.unstable_ImmediatePriority,
          et = o.unstable_UserBlockingPriority,
          tt = o.unstable_NormalPriority,
          rt = o.unstable_LowPriority,
          nt = o.unstable_IdlePriority,
          ot = null,
          at = null;
        var it = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 === (e >>>= 0) ? 32 : (31 - ((st(e) / ct) | 0)) | 0;
              },
          st = Math.log,
          ct = Math.LN2;
        var lt = 64,
          ut = 4194304;
        function dt(e) {
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ft(e, t) {
          var r = e.pendingLanes;
          if (0 === r) return 0;
          var n = 0,
            o = e.suspendedLanes,
            a = e.pingedLanes,
            i = 268435455 & r;
          if (0 !== i) {
            var s = i & ~o;
            0 !== s ? (n = dt(s)) : 0 !== (a &= i) && (n = dt(a));
          } else 0 !== (i = r & ~o) ? (n = dt(i)) : 0 !== a && (n = dt(a));
          if (0 === n) return 0;
          if (
            0 !== t &&
            t !== n &&
            0 === (t & o) &&
            ((o = n & -n) >= (a = t & -t) || (16 === o && 0 !== (4194240 & a)))
          )
            return t;
          if ((0 !== (4 & n) && (n |= 16 & r), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= n; 0 < t; )
              (o = 1 << (r = 31 - it(t))), (n |= e[r]), (t &= ~o);
          return n;
        }
        function pt(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
              return t + 250;
            case 8:
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function mt(e) {
          return 0 !== (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function ht(e) {
          for (var t = [], r = 0; 31 > r; r++) t.push(e);
          return t;
        }
        function vt(e, t, r) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - it(t))] = r);
        }
        function gt(e, t) {
          var r = (e.entangledLanes |= t);
          for (e = e.entanglements; r; ) {
            var n = 31 - it(r),
              o = 1 << n;
            (o & t) | (e[n] & t) && (e[n] |= t), (r &= ~o);
          }
        }
        var yt = 0;
        function kt(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 !== (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var bt,
          wt,
          Ct,
          xt,
          Pt,
          St = !1,
          Bt = [],
          Et = null,
          Tt = null,
          Rt = null,
          jt = new Map(),
          Nt = new Map(),
          Ot = [],
          _t =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
              " "
            );
        function Mt(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Et = null;
              break;
            case "dragenter":
            case "dragleave":
              Tt = null;
              break;
            case "mouseover":
            case "mouseout":
              Rt = null;
              break;
            case "pointerover":
            case "pointerout":
              jt.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Nt.delete(t.pointerId);
          }
        }
        function Lt(e, t, r, n, o, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: t,
                domEventName: r,
                eventSystemFlags: n,
                nativeEvent: a,
                targetContainers: [o],
              }),
              null !== t && null !== (t = go(t)) && wt(t),
              e)
            : ((e.eventSystemFlags |= n),
              (t = e.targetContainers),
              null !== o && -1 === t.indexOf(o) && t.push(o),
              e);
        }
        function Dt(e) {
          var t = vo(e.target);
          if (null !== t) {
            var r = Ke(t);
            if (null !== r)
              if (13 === (t = r.tag)) {
                if (null !== (t = Ve(r)))
                  return (
                    (e.blockedOn = t),
                    void Pt(e.priority, function () {
                      Ct(r);
                    })
                  );
              } else if (
                3 === t &&
                r.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === r.tag ? r.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function It(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var r = Gt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== r)
              return null !== (t = go(r)) && wt(t), (e.blockedOn = r), !1;
            var n = new (r = e.nativeEvent).constructor(r.type, r);
            (be = n), r.target.dispatchEvent(n), (be = null), t.shift();
          }
          return !0;
        }
        function At(e, t, r) {
          It(e) && r.delete(t);
        }
        function Ut() {
          (St = !1),
            null !== Et && It(Et) && (Et = null),
            null !== Tt && It(Tt) && (Tt = null),
            null !== Rt && It(Rt) && (Rt = null),
            jt.forEach(At),
            Nt.forEach(At);
        }
        function zt(e, t) {
          e.blockedOn === t &&
            ((e.blockedOn = null),
            St ||
              ((St = !0),
              o.unstable_scheduleCallback(o.unstable_NormalPriority, Ut)));
        }
        function Ft(e) {
          function t(t) {
            return zt(t, e);
          }
          if (0 < Bt.length) {
            zt(Bt[0], e);
            for (var r = 1; r < Bt.length; r++) {
              var n = Bt[r];
              n.blockedOn === e && (n.blockedOn = null);
            }
          }
          for (
            null !== Et && zt(Et, e),
              null !== Tt && zt(Tt, e),
              null !== Rt && zt(Rt, e),
              jt.forEach(t),
              Nt.forEach(t),
              r = 0;
            r < Ot.length;
            r++
          )
            (n = Ot[r]).blockedOn === e && (n.blockedOn = null);
          for (; 0 < Ot.length && null === (r = Ot[0]).blockedOn; )
            Dt(r), null === r.blockedOn && Ot.shift();
        }
        var Kt = b.ReactCurrentBatchConfig;
        function Vt(e, t, r, n) {
          var o = yt,
            a = Kt.transition;
          Kt.transition = null;
          try {
            (yt = 1), Ht(e, t, r, n);
          } finally {
            (yt = o), (Kt.transition = a);
          }
        }
        function Jt(e, t, r, n) {
          var o = yt,
            a = Kt.transition;
          Kt.transition = null;
          try {
            (yt = 4), Ht(e, t, r, n);
          } finally {
            (yt = o), (Kt.transition = a);
          }
        }
        function Ht(e, t, r, n) {
          var o = Gt(e, t, r, n);
          if (null === o) Kn(e, t, n, Wt, r), Mt(e, n);
          else if (
            (function (e, t, r, n, o) {
              switch (t) {
                case "focusin":
                  return (Et = Lt(Et, e, t, r, n, o)), !0;
                case "dragenter":
                  return (Tt = Lt(Tt, e, t, r, n, o)), !0;
                case "mouseover":
                  return (Rt = Lt(Rt, e, t, r, n, o)), !0;
                case "pointerover":
                  var a = o.pointerId;
                  return jt.set(a, Lt(jt.get(a) || null, e, t, r, n, o)), !0;
                case "gotpointercapture":
                  return (
                    (a = o.pointerId),
                    Nt.set(a, Lt(Nt.get(a) || null, e, t, r, n, o)),
                    !0
                  );
              }
              return !1;
            })(o, e, t, r, n)
          )
            n.stopPropagation();
          else if ((Mt(e, n), 4 & t && -1 < _t.indexOf(e))) {
            for (; null !== o; ) {
              var a = go(o);
              if (
                (null !== a && bt(a),
                null === (a = Gt(e, t, r, n)) && Kn(e, t, n, Wt, r),
                a === o)
              )
                break;
              o = a;
            }
            null !== o && n.stopPropagation();
          } else Kn(e, t, n, null, r);
        }
        var Wt = null;
        function Gt(e, t, r, n) {
          if (((Wt = null), null !== (e = vo((e = we(n))))))
            if (null === (t = Ke(e))) e = null;
            else if (13 === (r = t.tag)) {
              if (null !== (e = Ve(t))) return e;
              e = null;
            } else if (3 === r) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return 3 === t.tag ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          return (Wt = e), null;
        }
        function Qt(e) {
          switch (e) {
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 1;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "toggle":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 4;
            case "message":
              switch ($e()) {
                case Ze:
                  return 1;
                case et:
                  return 4;
                case tt:
                case rt:
                  return 16;
                case nt:
                  return 536870912;
                default:
                  return 16;
              }
            default:
              return 16;
          }
        }
        var Xt = null,
          Yt = null,
          qt = null;
        function $t() {
          if (qt) return qt;
          var e,
            t,
            r = Yt,
            n = r.length,
            o = "value" in Xt ? Xt.value : Xt.textContent,
            a = o.length;
          for (e = 0; e < n && r[e] === o[e]; e++);
          var i = n - e;
          for (t = 1; t <= i && r[n - t] === o[a - t]; t++);
          return (qt = o.slice(e, 1 < t ? 1 - t : void 0));
        }
        function Zt(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function er() {
          return !0;
        }
        function tr() {
          return !1;
        }
        function rr(e) {
          function t(t, r, n, o, a) {
            for (var i in ((this._reactName = t),
            (this._targetInst = n),
            (this.type = r),
            (this.nativeEvent = o),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(o) : o[i]));
            return (
              (this.isDefaultPrevented = (
                null != o.defaultPrevented
                  ? o.defaultPrevented
                  : !1 === o.returnValue
              )
                ? er
                : tr),
              (this.isPropagationStopped = tr),
              this
            );
          }
          return (
            I(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" !== typeof e.returnValue &&
                      (e.returnValue = !1),
                  (this.isDefaultPrevented = er));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" !== typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = er));
              },
              persist: function () {},
              isPersistent: er,
            }),
            t
          );
        }
        var nr,
          or,
          ar,
          ir = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          sr = rr(ir),
          cr = I({}, ir, { view: 0, detail: 0 }),
          lr = rr(cr),
          ur = I({}, cr, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Cr,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== ar &&
                    (ar && "mousemove" === e.type
                      ? ((nr = e.screenX - ar.screenX),
                        (or = e.screenY - ar.screenY))
                      : (or = nr = 0),
                    (ar = e)),
                  nr);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : or;
            },
          }),
          dr = rr(ur),
          fr = rr(I({}, ur, { dataTransfer: 0 })),
          pr = rr(I({}, cr, { relatedTarget: 0 })),
          mr = rr(
            I({}, ir, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          hr = I({}, ir, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
          vr = rr(hr),
          gr = rr(I({}, ir, { data: 0 })),
          yr = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          kr = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          br = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function wr(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = br[e]) && !!t[e];
        }
        function Cr() {
          return wr;
        }
        var xr = I({}, cr, {
            key: function (e) {
              if (e.key) {
                var t = yr[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = Zt(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? kr[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Cr,
            charCode: function (e) {
              return "keypress" === e.type ? Zt(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? Zt(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          }),
          Pr = rr(xr),
          Sr = rr(
            I({}, ur, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            })
          ),
          Br = rr(
            I({}, cr, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: Cr,
            })
          ),
          Er = rr(
            I({}, ir, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
          ),
          Tr = I({}, ur, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
          Rr = rr(Tr),
          jr = [9, 13, 27, 32],
          Nr = u && "CompositionEvent" in window,
          Or = null;
        u && "documentMode" in document && (Or = document.documentMode);
        var _r = u && "TextEvent" in window && !Or,
          Mr = u && (!Nr || (Or && 8 < Or && 11 >= Or)),
          Lr = String.fromCharCode(32),
          Dr = !1;
        function Ir(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== jr.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function Ar(e) {
          return "object" === typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Ur = !1;
        var zr = {
          color: !0,
          date: !0,
          datetime: !0,
          "datetime-local": !0,
          email: !0,
          month: !0,
          number: !0,
          password: !0,
          range: !0,
          search: !0,
          tel: !0,
          text: !0,
          time: !0,
          url: !0,
          week: !0,
        };
        function Fr(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!zr[e.type] : "textarea" === t;
        }
        function Kr(e, t, r, n) {
          Be(n),
            0 < (t = Jn(t, "onChange")).length &&
              ((r = new sr("onChange", "change", null, r, n)),
              e.push({ event: r, listeners: t }));
        }
        var Vr = null,
          Jr = null;
        function Hr(e) {
          Dn(e, 0);
        }
        function Wr(e) {
          if (G(yo(e))) return e;
        }
        function Gr(e, t) {
          if ("change" === e) return t;
        }
        var Qr = !1;
        if (u) {
          var Xr;
          if (u) {
            var Yr = "oninput" in document;
            if (!Yr) {
              var qr = document.createElement("div");
              qr.setAttribute("oninput", "return;"),
                (Yr = "function" === typeof qr.oninput);
            }
            Xr = Yr;
          } else Xr = !1;
          Qr = Xr && (!document.documentMode || 9 < document.documentMode);
        }
        function $r() {
          Vr && (Vr.detachEvent("onpropertychange", Zr), (Jr = Vr = null));
        }
        function Zr(e) {
          if ("value" === e.propertyName && Wr(Jr)) {
            var t = [];
            Kr(t, Jr, e, we(e)), Ne(Hr, t);
          }
        }
        function en(e, t, r) {
          "focusin" === e
            ? ($r(), (Jr = r), (Vr = t).attachEvent("onpropertychange", Zr))
            : "focusout" === e && $r();
        }
        function tn(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Wr(Jr);
        }
        function rn(e, t) {
          if ("click" === e) return Wr(t);
        }
        function nn(e, t) {
          if ("input" === e || "change" === e) return Wr(t);
        }
        var on =
          "function" === typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e === 1 / t)) ||
                  (e !== e && t !== t)
                );
              };
        function an(e, t) {
          if (on(e, t)) return !0;
          if (
            "object" !== typeof e ||
            null === e ||
            "object" !== typeof t ||
            null === t
          )
            return !1;
          var r = Object.keys(e),
            n = Object.keys(t);
          if (r.length !== n.length) return !1;
          for (n = 0; n < r.length; n++) {
            var o = r[n];
            if (!d.call(t, o) || !on(e[o], t[o])) return !1;
          }
          return !0;
        }
        function sn(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function cn(e, t) {
          var r,
            n = sn(e);
          for (e = 0; n; ) {
            if (3 === n.nodeType) {
              if (((r = e + n.textContent.length), e <= t && r >= t))
                return { node: n, offset: t - e };
              e = r;
            }
            e: {
              for (; n; ) {
                if (n.nextSibling) {
                  n = n.nextSibling;
                  break e;
                }
                n = n.parentNode;
              }
              n = void 0;
            }
            n = sn(n);
          }
        }
        function ln(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? ln(e, t.parentNode)
                  : "contains" in e
                  ? e.contains(t)
                  : !!e.compareDocumentPosition &&
                    !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function un() {
          for (var e = window, t = Q(); t instanceof e.HTMLIFrameElement; ) {
            try {
              var r = "string" === typeof t.contentWindow.location.href;
            } catch (n) {
              r = !1;
            }
            if (!r) break;
            t = Q((e = t.contentWindow).document);
          }
          return t;
        }
        function dn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        function fn(e) {
          var t = un(),
            r = e.focusedElem,
            n = e.selectionRange;
          if (
            t !== r &&
            r &&
            r.ownerDocument &&
            ln(r.ownerDocument.documentElement, r)
          ) {
            if (null !== n && dn(r))
              if (
                ((t = n.start),
                void 0 === (e = n.end) && (e = t),
                "selectionStart" in r)
              )
                (r.selectionStart = t),
                  (r.selectionEnd = Math.min(e, r.value.length));
              else if (
                (e =
                  ((t = r.ownerDocument || document) && t.defaultView) ||
                  window).getSelection
              ) {
                e = e.getSelection();
                var o = r.textContent.length,
                  a = Math.min(n.start, o);
                (n = void 0 === n.end ? a : Math.min(n.end, o)),
                  !e.extend && a > n && ((o = n), (n = a), (a = o)),
                  (o = cn(r, a));
                var i = cn(r, n);
                o &&
                  i &&
                  (1 !== e.rangeCount ||
                    e.anchorNode !== o.node ||
                    e.anchorOffset !== o.offset ||
                    e.focusNode !== i.node ||
                    e.focusOffset !== i.offset) &&
                  ((t = t.createRange()).setStart(o.node, o.offset),
                  e.removeAllRanges(),
                  a > n
                    ? (e.addRange(t), e.extend(i.node, i.offset))
                    : (t.setEnd(i.node, i.offset), e.addRange(t)));
              }
            for (t = [], e = r; (e = e.parentNode); )
              1 === e.nodeType &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
            for (
              "function" === typeof r.focus && r.focus(), r = 0;
              r < t.length;
              r++
            )
              ((e = t[r]).element.scrollLeft = e.left),
                (e.element.scrollTop = e.top);
          }
        }
        var pn = u && "documentMode" in document && 11 >= document.documentMode,
          mn = null,
          hn = null,
          vn = null,
          gn = !1;
        function yn(e, t, r) {
          var n =
            r.window === r
              ? r.document
              : 9 === r.nodeType
              ? r
              : r.ownerDocument;
          gn ||
            null == mn ||
            mn !== Q(n) ||
            ("selectionStart" in (n = mn) && dn(n)
              ? (n = { start: n.selectionStart, end: n.selectionEnd })
              : (n = {
                  anchorNode: (n = (
                    (n.ownerDocument && n.ownerDocument.defaultView) ||
                    window
                  ).getSelection()).anchorNode,
                  anchorOffset: n.anchorOffset,
                  focusNode: n.focusNode,
                  focusOffset: n.focusOffset,
                }),
            (vn && an(vn, n)) ||
              ((vn = n),
              0 < (n = Jn(hn, "onSelect")).length &&
                ((t = new sr("onSelect", "select", null, t, r)),
                e.push({ event: t, listeners: n }),
                (t.target = mn))));
        }
        function kn(e, t) {
          var r = {};
          return (
            (r[e.toLowerCase()] = t.toLowerCase()),
            (r["Webkit" + e] = "webkit" + t),
            (r["Moz" + e] = "moz" + t),
            r
          );
        }
        var bn = {
            animationend: kn("Animation", "AnimationEnd"),
            animationiteration: kn("Animation", "AnimationIteration"),
            animationstart: kn("Animation", "AnimationStart"),
            transitionend: kn("Transition", "TransitionEnd"),
          },
          wn = {},
          Cn = {};
        function xn(e) {
          if (wn[e]) return wn[e];
          if (!bn[e]) return e;
          var t,
            r = bn[e];
          for (t in r)
            if (r.hasOwnProperty(t) && t in Cn) return (wn[e] = r[t]);
          return e;
        }
        u &&
          ((Cn = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete bn.animationend.animation,
            delete bn.animationiteration.animation,
            delete bn.animationstart.animation),
          "TransitionEvent" in window || delete bn.transitionend.transition);
        var Pn = xn("animationend"),
          Sn = xn("animationiteration"),
          Bn = xn("animationstart"),
          En = xn("transitionend"),
          Tn = new Map(),
          Rn =
            "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " "
            );
        function jn(e, t) {
          Tn.set(e, t), c(t, [e]);
        }
        for (var Nn = 0; Nn < Rn.length; Nn++) {
          var On = Rn[Nn];
          jn(On.toLowerCase(), "on" + (On[0].toUpperCase() + On.slice(1)));
        }
        jn(Pn, "onAnimationEnd"),
          jn(Sn, "onAnimationIteration"),
          jn(Bn, "onAnimationStart"),
          jn("dblclick", "onDoubleClick"),
          jn("focusin", "onFocus"),
          jn("focusout", "onBlur"),
          jn(En, "onTransitionEnd"),
          l("onMouseEnter", ["mouseout", "mouseover"]),
          l("onMouseLeave", ["mouseout", "mouseover"]),
          l("onPointerEnter", ["pointerout", "pointerover"]),
          l("onPointerLeave", ["pointerout", "pointerover"]),
          c(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " "
            )
          ),
          c(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " "
            )
          ),
          c("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          c(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          c(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " "
            )
          ),
          c(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " "
            )
          );
        var _n =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " "
            ),
          Mn = new Set(
            "cancel close invalid load scroll toggle".split(" ").concat(_n)
          );
        function Ln(e, t, r) {
          var n = e.type || "unknown-event";
          (e.currentTarget = r),
            (function (e, t, r, n, o, i, s, c, l) {
              if ((Fe.apply(this, arguments), De)) {
                if (!De) throw Error(a(198));
                var u = Ie;
                (De = !1), (Ie = null), Ae || ((Ae = !0), (Ue = u));
              }
            })(n, t, void 0, e),
            (e.currentTarget = null);
        }
        function Dn(e, t) {
          t = 0 !== (4 & t);
          for (var r = 0; r < e.length; r++) {
            var n = e[r],
              o = n.event;
            n = n.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var i = n.length - 1; 0 <= i; i--) {
                  var s = n[i],
                    c = s.instance,
                    l = s.currentTarget;
                  if (((s = s.listener), c !== a && o.isPropagationStopped()))
                    break e;
                  Ln(o, s, l), (a = c);
                }
              else
                for (i = 0; i < n.length; i++) {
                  if (
                    ((c = (s = n[i]).instance),
                    (l = s.currentTarget),
                    (s = s.listener),
                    c !== a && o.isPropagationStopped())
                  )
                    break e;
                  Ln(o, s, l), (a = c);
                }
            }
          }
          if (Ae) throw ((e = Ue), (Ae = !1), (Ue = null), e);
        }
        function In(e, t) {
          var r = t[po];
          void 0 === r && (r = t[po] = new Set());
          var n = e + "__bubble";
          r.has(n) || (Fn(t, e, 2, !1), r.add(n));
        }
        function An(e, t, r) {
          var n = 0;
          t && (n |= 4), Fn(r, e, n, t);
        }
        var Un = "_reactListening" + Math.random().toString(36).slice(2);
        function zn(e) {
          if (!e[Un]) {
            (e[Un] = !0),
              i.forEach(function (t) {
                "selectionchange" !== t &&
                  (Mn.has(t) || An(t, !1, e), An(t, !0, e));
              });
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[Un] || ((t[Un] = !0), An("selectionchange", !1, t));
          }
        }
        function Fn(e, t, r, n) {
          switch (Qt(t)) {
            case 1:
              var o = Vt;
              break;
            case 4:
              o = Jt;
              break;
            default:
              o = Ht;
          }
          (r = o.bind(null, t, r, e)),
            (o = void 0),
            !_e ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (o = !0),
            n
              ? void 0 !== o
                ? e.addEventListener(t, r, { capture: !0, passive: o })
                : e.addEventListener(t, r, !0)
              : void 0 !== o
              ? e.addEventListener(t, r, { passive: o })
              : e.addEventListener(t, r, !1);
        }
        function Kn(e, t, r, n, o) {
          var a = n;
          if (0 === (1 & t) && 0 === (2 & t) && null !== n)
            e: for (;;) {
              if (null === n) return;
              var i = n.tag;
              if (3 === i || 4 === i) {
                var s = n.stateNode.containerInfo;
                if (s === o || (8 === s.nodeType && s.parentNode === o)) break;
                if (4 === i)
                  for (i = n.return; null !== i; ) {
                    var c = i.tag;
                    if (
                      (3 === c || 4 === c) &&
                      ((c = i.stateNode.containerInfo) === o ||
                        (8 === c.nodeType && c.parentNode === o))
                    )
                      return;
                    i = i.return;
                  }
                for (; null !== s; ) {
                  if (null === (i = vo(s))) return;
                  if (5 === (c = i.tag) || 6 === c) {
                    n = a = i;
                    continue e;
                  }
                  s = s.parentNode;
                }
              }
              n = n.return;
            }
          Ne(function () {
            var n = a,
              o = we(r),
              i = [];
            e: {
              var s = Tn.get(e);
              if (void 0 !== s) {
                var c = sr,
                  l = e;
                switch (e) {
                  case "keypress":
                    if (0 === Zt(r)) break e;
                  case "keydown":
                  case "keyup":
                    c = Pr;
                    break;
                  case "focusin":
                    (l = "focus"), (c = pr);
                    break;
                  case "focusout":
                    (l = "blur"), (c = pr);
                    break;
                  case "beforeblur":
                  case "afterblur":
                    c = pr;
                    break;
                  case "click":
                    if (2 === r.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    c = dr;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    c = fr;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    c = Br;
                    break;
                  case Pn:
                  case Sn:
                  case Bn:
                    c = mr;
                    break;
                  case En:
                    c = Er;
                    break;
                  case "scroll":
                    c = lr;
                    break;
                  case "wheel":
                    c = Rr;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    c = vr;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    c = Sr;
                }
                var u = 0 !== (4 & t),
                  d = !u && "scroll" === e,
                  f = u ? (null !== s ? s + "Capture" : null) : s;
                u = [];
                for (var p, m = n; null !== m; ) {
                  var h = (p = m).stateNode;
                  if (
                    (5 === p.tag &&
                      null !== h &&
                      ((p = h),
                      null !== f &&
                        null != (h = Oe(m, f)) &&
                        u.push(Vn(m, h, p))),
                    d)
                  )
                    break;
                  m = m.return;
                }
                0 < u.length &&
                  ((s = new c(s, l, null, r, o)),
                  i.push({ event: s, listeners: u }));
              }
            }
            if (0 === (7 & t)) {
              if (
                ((c = "mouseout" === e || "pointerout" === e),
                (!(s = "mouseover" === e || "pointerover" === e) ||
                  r === be ||
                  !(l = r.relatedTarget || r.fromElement) ||
                  (!vo(l) && !l[fo])) &&
                  (c || s) &&
                  ((s =
                    o.window === o
                      ? o
                      : (s = o.ownerDocument)
                      ? s.defaultView || s.parentWindow
                      : window),
                  c
                    ? ((c = n),
                      null !==
                        (l = (l = r.relatedTarget || r.toElement)
                          ? vo(l)
                          : null) &&
                        (l !== (d = Ke(l)) || (5 !== l.tag && 6 !== l.tag)) &&
                        (l = null))
                    : ((c = null), (l = n)),
                  c !== l))
              ) {
                if (
                  ((u = dr),
                  (h = "onMouseLeave"),
                  (f = "onMouseEnter"),
                  (m = "mouse"),
                  ("pointerout" !== e && "pointerover" !== e) ||
                    ((u = Sr),
                    (h = "onPointerLeave"),
                    (f = "onPointerEnter"),
                    (m = "pointer")),
                  (d = null == c ? s : yo(c)),
                  (p = null == l ? s : yo(l)),
                  ((s = new u(h, m + "leave", c, r, o)).target = d),
                  (s.relatedTarget = p),
                  (h = null),
                  vo(o) === n &&
                    (((u = new u(f, m + "enter", l, r, o)).target = p),
                    (u.relatedTarget = d),
                    (h = u)),
                  (d = h),
                  c && l)
                )
                  e: {
                    for (f = l, m = 0, p = u = c; p; p = Hn(p)) m++;
                    for (p = 0, h = f; h; h = Hn(h)) p++;
                    for (; 0 < m - p; ) (u = Hn(u)), m--;
                    for (; 0 < p - m; ) (f = Hn(f)), p--;
                    for (; m--; ) {
                      if (u === f || (null !== f && u === f.alternate)) break e;
                      (u = Hn(u)), (f = Hn(f));
                    }
                    u = null;
                  }
                else u = null;
                null !== c && Wn(i, s, c, u, !1),
                  null !== l && null !== d && Wn(i, d, l, u, !0);
              }
              if (
                "select" ===
                  (c =
                    (s = n ? yo(n) : window).nodeName &&
                    s.nodeName.toLowerCase()) ||
                ("input" === c && "file" === s.type)
              )
                var v = Gr;
              else if (Fr(s))
                if (Qr) v = nn;
                else {
                  v = tn;
                  var g = en;
                }
              else
                (c = s.nodeName) &&
                  "input" === c.toLowerCase() &&
                  ("checkbox" === s.type || "radio" === s.type) &&
                  (v = rn);
              switch (
                (v && (v = v(e, n))
                  ? Kr(i, v, r, o)
                  : (g && g(e, s, n),
                    "focusout" === e &&
                      (g = s._wrapperState) &&
                      g.controlled &&
                      "number" === s.type &&
                      ee(s, "number", s.value)),
                (g = n ? yo(n) : window),
                e)
              ) {
                case "focusin":
                  (Fr(g) || "true" === g.contentEditable) &&
                    ((mn = g), (hn = n), (vn = null));
                  break;
                case "focusout":
                  vn = hn = mn = null;
                  break;
                case "mousedown":
                  gn = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  (gn = !1), yn(i, r, o);
                  break;
                case "selectionchange":
                  if (pn) break;
                case "keydown":
                case "keyup":
                  yn(i, r, o);
              }
              var y;
              if (Nr)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var k = "onCompositionStart";
                      break e;
                    case "compositionend":
                      k = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      k = "onCompositionUpdate";
                      break e;
                  }
                  k = void 0;
                }
              else
                Ur
                  ? Ir(e, r) && (k = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === r.keyCode &&
                    (k = "onCompositionStart");
              k &&
                (Mr &&
                  "ko" !== r.locale &&
                  (Ur || "onCompositionStart" !== k
                    ? "onCompositionEnd" === k && Ur && (y = $t())
                    : ((Yt = "value" in (Xt = o) ? Xt.value : Xt.textContent),
                      (Ur = !0))),
                0 < (g = Jn(n, k)).length &&
                  ((k = new gr(k, e, null, r, o)),
                  i.push({ event: k, listeners: g }),
                  y ? (k.data = y) : null !== (y = Ar(r)) && (k.data = y))),
                (y = _r
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return Ar(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Dr = !0), Lr);
                        case "textInput":
                          return (e = t.data) === Lr && Dr ? null : e;
                        default:
                          return null;
                      }
                    })(e, r)
                  : (function (e, t) {
                      if (Ur)
                        return "compositionend" === e || (!Nr && Ir(e, t))
                          ? ((e = $t()), (qt = Yt = Xt = null), (Ur = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return Mr && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, r)) &&
                  0 < (n = Jn(n, "onBeforeInput")).length &&
                  ((o = new gr("onBeforeInput", "beforeinput", null, r, o)),
                  i.push({ event: o, listeners: n }),
                  (o.data = y));
            }
            Dn(i, t);
          });
        }
        function Vn(e, t, r) {
          return { instance: e, listener: t, currentTarget: r };
        }
        function Jn(e, t) {
          for (var r = t + "Capture", n = []; null !== e; ) {
            var o = e,
              a = o.stateNode;
            5 === o.tag &&
              null !== a &&
              ((o = a),
              null != (a = Oe(e, r)) && n.unshift(Vn(e, a, o)),
              null != (a = Oe(e, t)) && n.push(Vn(e, a, o))),
              (e = e.return);
          }
          return n;
        }
        function Hn(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag);
          return e || null;
        }
        function Wn(e, t, r, n, o) {
          for (var a = t._reactName, i = []; null !== r && r !== n; ) {
            var s = r,
              c = s.alternate,
              l = s.stateNode;
            if (null !== c && c === n) break;
            5 === s.tag &&
              null !== l &&
              ((s = l),
              o
                ? null != (c = Oe(r, a)) && i.unshift(Vn(r, c, s))
                : o || (null != (c = Oe(r, a)) && i.push(Vn(r, c, s)))),
              (r = r.return);
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var Gn = /\r\n?/g,
          Qn = /\u0000|\uFFFD/g;
        function Xn(e) {
          return ("string" === typeof e ? e : "" + e)
            .replace(Gn, "\n")
            .replace(Qn, "");
        }
        function Yn(e, t, r) {
          if (((t = Xn(t)), Xn(e) !== t && r)) throw Error(a(425));
        }
        function qn() {}
        var $n = null;
        function Zn(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" === typeof t.children ||
            "number" === typeof t.children ||
            ("object" === typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var eo = "function" === typeof setTimeout ? setTimeout : void 0,
          to = "function" === typeof clearTimeout ? clearTimeout : void 0,
          ro = "function" === typeof Promise ? Promise : void 0,
          no =
            "function" === typeof queueMicrotask
              ? queueMicrotask
              : "undefined" !== typeof ro
              ? function (e) {
                  return ro.resolve(null).then(e).catch(oo);
                }
              : eo;
        function oo(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function ao(e, t) {
          var r = t,
            n = 0;
          do {
            var o = r.nextSibling;
            if ((e.removeChild(r), o && 8 === o.nodeType))
              if ("/$" === (r = o.data)) {
                if (0 === n) return e.removeChild(o), void Ft(t);
                n--;
              } else ("$" !== r && "$?" !== r && "$!" !== r) || n++;
            r = o;
          } while (r);
          Ft(t);
        }
        function io(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
              if ("/$" === t) return null;
            }
          }
          return e;
        }
        function so(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var r = e.data;
              if ("$" === r || "$!" === r || "$?" === r) {
                if (0 === t) return e;
                t--;
              } else "/$" === r && t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        var co = Math.random().toString(36).slice(2),
          lo = "__reactFiber$" + co,
          uo = "__reactProps$" + co,
          fo = "__reactContainer$" + co,
          po = "__reactEvents$" + co,
          mo = "__reactListeners$" + co,
          ho = "__reactHandles$" + co;
        function vo(e) {
          var t = e[lo];
          if (t) return t;
          for (var r = e.parentNode; r; ) {
            if ((t = r[fo] || r[lo])) {
              if (
                ((r = t.alternate),
                null !== t.child || (null !== r && null !== r.child))
              )
                for (e = so(e); null !== e; ) {
                  if ((r = e[lo])) return r;
                  e = so(e);
                }
              return t;
            }
            r = (e = r).parentNode;
          }
          return null;
        }
        function go(e) {
          return !(e = e[lo] || e[fo]) ||
            (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
            ? null
            : e;
        }
        function yo(e) {
          if (5 === e.tag || 6 === e.tag) return e.stateNode;
          throw Error(a(33));
        }
        function ko(e) {
          return e[uo] || null;
        }
        var bo = [],
          wo = -1;
        function Co(e) {
          return { current: e };
        }
        function xo(e) {
          0 > wo || ((e.current = bo[wo]), (bo[wo] = null), wo--);
        }
        function Po(e, t) {
          wo++, (bo[wo] = e.current), (e.current = t);
        }
        var So = {},
          Bo = Co(So),
          Eo = Co(!1),
          To = So;
        function Ro(e, t) {
          var r = e.type.contextTypes;
          if (!r) return So;
          var n = e.stateNode;
          if (n && n.__reactInternalMemoizedUnmaskedChildContext === t)
            return n.__reactInternalMemoizedMaskedChildContext;
          var o,
            a = {};
          for (o in r) a[o] = t[o];
          return (
            n &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            a
          );
        }
        function jo(e) {
          return null !== (e = e.childContextTypes) && void 0 !== e;
        }
        function No() {
          xo(Eo), xo(Bo);
        }
        function Oo(e, t, r) {
          if (Bo.current !== So) throw Error(a(168));
          Po(Bo, t), Po(Eo, r);
        }
        function _o(e, t, r) {
          var n = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" !== typeof n.getChildContext)
          )
            return r;
          for (var o in (n = n.getChildContext()))
            if (!(o in t)) throw Error(a(108, V(e) || "Unknown", o));
          return I({}, r, n);
        }
        function Mo(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              So),
            (To = Bo.current),
            Po(Bo, e),
            Po(Eo, Eo.current),
            !0
          );
        }
        function Lo(e, t, r) {
          var n = e.stateNode;
          if (!n) throw Error(a(169));
          r
            ? ((e = _o(e, t, To)),
              (n.__reactInternalMemoizedMergedChildContext = e),
              xo(Eo),
              xo(Bo),
              Po(Bo, e))
            : xo(Eo),
            Po(Eo, r);
        }
        var Do = null,
          Io = !1,
          Ao = !1;
        function Uo(e) {
          null === Do ? (Do = [e]) : Do.push(e);
        }
        function zo() {
          if (!Ao && null !== Do) {
            Ao = !0;
            var e = 0,
              t = yt;
            try {
              var r = Do;
              for (yt = 1; e < r.length; e++) {
                var n = r[e];
                do {
                  n = n(!0);
                } while (null !== n);
              }
              (Do = null), (Io = !1);
            } catch (o) {
              throw (null !== Do && (Do = Do.slice(e + 1)), Ge(Ze, zo), o);
            } finally {
              (yt = t), (Ao = !1);
            }
          }
          return null;
        }
        var Fo = b.ReactCurrentBatchConfig;
        function Ko(e, t) {
          if (e && e.defaultProps) {
            for (var r in ((t = I({}, t)), (e = e.defaultProps)))
              void 0 === t[r] && (t[r] = e[r]);
            return t;
          }
          return t;
        }
        var Vo = Co(null),
          Jo = null,
          Ho = null,
          Wo = null;
        function Go() {
          Wo = Ho = Jo = null;
        }
        function Qo(e) {
          var t = Vo.current;
          xo(Vo), (e._currentValue = t);
        }
        function Xo(e, t, r) {
          for (; null !== e; ) {
            var n = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== n && (n.childLanes |= t))
                : null !== n && (n.childLanes & t) !== t && (n.childLanes |= t),
              e === r)
            )
              break;
            e = e.return;
          }
        }
        function Yo(e, t) {
          (Jo = e),
            (Wo = Ho = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 !== (e.lanes & t) && (gs = !0), (e.firstContext = null));
        }
        function qo(e) {
          var t = e._currentValue;
          if (Wo !== e)
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === Ho)
            ) {
              if (null === Jo) throw Error(a(308));
              (Ho = e), (Jo.dependencies = { lanes: 0, firstContext: e });
            } else Ho = Ho.next = e;
          return t;
        }
        var $o = null,
          Zo = !1;
        function ea(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function ta(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function ra(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function na(e, t) {
          var r = e.updateQueue;
          null !== r &&
            ((r = r.shared),
            null !== yc && 0 !== (1 & e.mode) && 0 === (2 & gc)
              ? (null === (e = r.interleaved)
                  ? ((t.next = t), null === $o ? ($o = [r]) : $o.push(r))
                  : ((t.next = e.next), (e.next = t)),
                (r.interleaved = t))
              : (null === (e = r.pending)
                  ? (t.next = t)
                  : ((t.next = e.next), (e.next = t)),
                (r.pending = t)));
        }
        function oa(e, t, r) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 !== (4194240 & r))
          ) {
            var n = t.lanes;
            (r |= n &= e.pendingLanes), (t.lanes = r), gt(e, r);
          }
        }
        function aa(e, t) {
          var r = e.updateQueue,
            n = e.alternate;
          if (null !== n && r === (n = n.updateQueue)) {
            var o = null,
              a = null;
            if (null !== (r = r.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: r.eventTime,
                  lane: r.lane,
                  tag: r.tag,
                  payload: r.payload,
                  callback: r.callback,
                  next: null,
                };
                null === a ? (o = a = i) : (a = a.next = i), (r = r.next);
              } while (null !== r);
              null === a ? (o = a = t) : (a = a.next = t);
            } else o = a = t;
            return (
              (r = {
                baseState: n.baseState,
                firstBaseUpdate: o,
                lastBaseUpdate: a,
                shared: n.shared,
                effects: n.effects,
              }),
              void (e.updateQueue = r)
            );
          }
          null === (e = r.lastBaseUpdate)
            ? (r.firstBaseUpdate = t)
            : (e.next = t),
            (r.lastBaseUpdate = t);
        }
        function ia(e, t, r, n) {
          var o = e.updateQueue;
          Zo = !1;
          var a = o.firstBaseUpdate,
            i = o.lastBaseUpdate,
            s = o.shared.pending;
          if (null !== s) {
            o.shared.pending = null;
            var c = s,
              l = c.next;
            (c.next = null), null === i ? (a = l) : (i.next = l), (i = c);
            var u = e.alternate;
            null !== u &&
              (s = (u = u.updateQueue).lastBaseUpdate) !== i &&
              (null === s ? (u.firstBaseUpdate = l) : (s.next = l),
              (u.lastBaseUpdate = c));
          }
          if (null !== a) {
            var d = o.baseState;
            for (i = 0, u = l = c = null, s = a; ; ) {
              var f = s.lane,
                p = s.eventTime;
              if ((n & f) === f) {
                null !== u &&
                  (u = u.next =
                    {
                      eventTime: p,
                      lane: 0,
                      tag: s.tag,
                      payload: s.payload,
                      callback: s.callback,
                      next: null,
                    });
                e: {
                  var m = e,
                    h = s;
                  switch (((f = t), (p = r), h.tag)) {
                    case 1:
                      if ("function" === typeof (m = h.payload)) {
                        d = m.call(p, d, f);
                        break e;
                      }
                      d = m;
                      break e;
                    case 3:
                      m.flags = (-65537 & m.flags) | 128;
                    case 0:
                      if (
                        null ===
                          (f =
                            "function" === typeof (m = h.payload)
                              ? m.call(p, d, f)
                              : m) ||
                        void 0 === f
                      )
                        break e;
                      d = I({}, d, f);
                      break e;
                    case 2:
                      Zo = !0;
                  }
                }
                null !== s.callback &&
                  0 !== s.lane &&
                  ((e.flags |= 64),
                  null === (f = o.effects) ? (o.effects = [s]) : f.push(s));
              } else
                (p = {
                  eventTime: p,
                  lane: f,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                }),
                  null === u ? ((l = u = p), (c = d)) : (u = u.next = p),
                  (i |= f);
              if (null === (s = s.next)) {
                if (null === (s = o.shared.pending)) break;
                (s = (f = s).next),
                  (f.next = null),
                  (o.lastBaseUpdate = f),
                  (o.shared.pending = null);
              }
            }
            if (
              (null === u && (c = d),
              (o.baseState = c),
              (o.firstBaseUpdate = l),
              (o.lastBaseUpdate = u),
              null !== (t = o.shared.interleaved))
            ) {
              o = t;
              do {
                (i |= o.lane), (o = o.next);
              } while (o !== t);
            } else null === a && (o.shared.lanes = 0);
            (Sc |= i), (e.lanes = i), (e.memoizedState = d);
          }
        }
        function sa(e, t, r) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var n = e[t],
                o = n.callback;
              if (null !== o) {
                if (((n.callback = null), (n = r), "function" !== typeof o))
                  throw Error(a(191, o));
                o.call(n);
              }
            }
        }
        var ca = new n.Component().refs;
        function la(e, t, r, n) {
          (r =
            null === (r = r(n, (t = e.memoizedState))) || void 0 === r
              ? t
              : I({}, t, r)),
            (e.memoizedState = r),
            0 === e.lanes && (e.updateQueue.baseState = r);
        }
        var ua = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && Ke(e) === e;
          },
          enqueueSetState: function (e, t, r) {
            e = e._reactInternals;
            var n = Kc(),
              o = Vc(e),
              a = ra(n, o);
            (a.payload = t),
              void 0 !== r && null !== r && (a.callback = r),
              na(e, a),
              null !== (t = Jc(e, o, n)) && oa(t, e, o);
          },
          enqueueReplaceState: function (e, t, r) {
            e = e._reactInternals;
            var n = Kc(),
              o = Vc(e),
              a = ra(n, o);
            (a.tag = 1),
              (a.payload = t),
              void 0 !== r && null !== r && (a.callback = r),
              na(e, a),
              null !== (t = Jc(e, o, n)) && oa(t, e, o);
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var r = Kc(),
              n = Vc(e),
              o = ra(r, n);
            (o.tag = 2),
              void 0 !== t && null !== t && (o.callback = t),
              na(e, o),
              null !== (t = Jc(e, n, r)) && oa(t, e, n);
          },
        };
        function da(e, t, r, n, o, a, i) {
          return "function" === typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(n, a, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !an(r, n) ||
                !an(o, a);
        }
        function fa(e, t, r) {
          var n = !1,
            o = So,
            a = t.contextType;
          return (
            "object" === typeof a && null !== a
              ? (a = qo(a))
              : ((o = jo(t) ? To : Bo.current),
                (a = (n = null !== (n = t.contextTypes) && void 0 !== n)
                  ? Ro(e, o)
                  : So)),
            (t = new t(r, a)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = ua),
            (e.stateNode = t),
            (t._reactInternals = e),
            n &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                o),
              (e.__reactInternalMemoizedMaskedChildContext = a)),
            t
          );
        }
        function pa(e, t, r, n) {
          (e = t.state),
            "function" === typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(r, n),
            "function" === typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(r, n),
            t.state !== e && ua.enqueueReplaceState(t, t.state, null);
        }
        function ma(e, t, r, n) {
          var o = e.stateNode;
          (o.props = r), (o.state = e.memoizedState), (o.refs = ca), ea(e);
          var a = t.contextType;
          "object" === typeof a && null !== a
            ? (o.context = qo(a))
            : ((a = jo(t) ? To : Bo.current), (o.context = Ro(e, a))),
            (o.state = e.memoizedState),
            "function" === typeof (a = t.getDerivedStateFromProps) &&
              (la(e, t, a, r), (o.state = e.memoizedState)),
            "function" === typeof t.getDerivedStateFromProps ||
              "function" === typeof o.getSnapshotBeforeUpdate ||
              ("function" !== typeof o.UNSAFE_componentWillMount &&
                "function" !== typeof o.componentWillMount) ||
              ((t = o.state),
              "function" === typeof o.componentWillMount &&
                o.componentWillMount(),
              "function" === typeof o.UNSAFE_componentWillMount &&
                o.UNSAFE_componentWillMount(),
              t !== o.state && ua.enqueueReplaceState(o, o.state, null),
              ia(e, r, o, n),
              (o.state = e.memoizedState)),
            "function" === typeof o.componentDidMount && (e.flags |= 4194308);
        }
        var ha = [],
          va = 0,
          ga = null,
          ya = 0,
          ka = [],
          ba = 0,
          wa = null,
          Ca = 1,
          xa = "";
        function Pa(e, t) {
          (ha[va++] = ya), (ha[va++] = ga), (ga = e), (ya = t);
        }
        function Sa(e, t, r) {
          (ka[ba++] = Ca), (ka[ba++] = xa), (ka[ba++] = wa), (wa = e);
          var n = Ca;
          e = xa;
          var o = 32 - it(n) - 1;
          (n &= ~(1 << o)), (r += 1);
          var a = 32 - it(t) + o;
          if (30 < a) {
            var i = o - (o % 5);
            (a = (n & ((1 << i) - 1)).toString(32)),
              (n >>= i),
              (o -= i),
              (Ca = (1 << (32 - it(t) + o)) | (r << o) | n),
              (xa = a + e);
          } else (Ca = (1 << a) | (r << o) | n), (xa = e);
        }
        function Ba(e) {
          null !== e.return && (Pa(e, 1), Sa(e, 1, 0));
        }
        function Ea(e) {
          for (; e === ga; )
            (ga = ha[--va]), (ha[va] = null), (ya = ha[--va]), (ha[va] = null);
          for (; e === wa; )
            (wa = ka[--ba]),
              (ka[ba] = null),
              (xa = ka[--ba]),
              (ka[ba] = null),
              (Ca = ka[--ba]),
              (ka[ba] = null);
        }
        var Ta = null,
          Ra = null,
          ja = !1,
          Na = null;
        function Oa(e, t) {
          var r = bl(5, null, null, 0);
          (r.elementType = "DELETED"),
            (r.stateNode = t),
            (r.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [r]), (e.flags |= 16))
              : t.push(r);
        }
        function _a(e, t) {
          switch (e.tag) {
            case 5:
              var r = e.type;
              return (
                null !==
                  (t =
                    1 !== t.nodeType ||
                    r.toLowerCase() !== t.nodeName.toLowerCase()
                      ? null
                      : t) &&
                ((e.stateNode = t), (Ta = e), (Ra = io(t.firstChild)), !0)
              );
            case 6:
              return (
                null !==
                  (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
                ((e.stateNode = t), (Ta = e), (Ra = null), !0)
              );
            case 13:
              return (
                null !== (t = 8 !== t.nodeType ? null : t) &&
                ((r = null !== wa ? { id: Ca, overflow: xa } : null),
                (e.memoizedState = {
                  dehydrated: t,
                  treeContext: r,
                  retryLane: 1073741824,
                }),
                ((r = bl(18, null, null, 0)).stateNode = t),
                (r.return = e),
                (e.child = r),
                (Ta = e),
                (Ra = null),
                !0)
              );
            default:
              return !1;
          }
        }
        function Ma(e) {
          return 0 !== (1 & e.mode) && 0 === (128 & e.flags);
        }
        function La(e) {
          if (ja) {
            var t = Ra;
            if (t) {
              var r = t;
              if (!_a(e, t)) {
                if (Ma(e)) throw Error(a(418));
                t = io(r.nextSibling);
                var n = Ta;
                t && _a(e, t)
                  ? Oa(n, r)
                  : ((e.flags = (-4097 & e.flags) | 2), (ja = !1), (Ta = e));
              }
            } else {
              if (Ma(e)) throw Error(a(418));
              (e.flags = (-4097 & e.flags) | 2), (ja = !1), (Ta = e);
            }
          }
        }
        function Da(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          Ta = e;
        }
        function Ia(e) {
          if (e !== Ta) return !1;
          if (!ja) return Da(e), (ja = !0), !1;
          var t;
          if (
            ((t = 3 !== e.tag) &&
              !(t = 5 !== e.tag) &&
              (t =
                "head" !== (t = e.type) &&
                "body" !== t &&
                !Zn(e.type, e.memoizedProps)),
            t && (t = Ra))
          ) {
            if (Ma(e)) {
              for (e = Ra; e; ) e = io(e.nextSibling);
              throw Error(a(418));
            }
            for (; t; ) Oa(e, t), (t = io(t.nextSibling));
          }
          if ((Da(e), 13 === e.tag)) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(a(317));
            e: {
              for (e = e.nextSibling, t = 0; e; ) {
                if (8 === e.nodeType) {
                  var r = e.data;
                  if ("/$" === r) {
                    if (0 === t) {
                      Ra = io(e.nextSibling);
                      break e;
                    }
                    t--;
                  } else ("$" !== r && "$!" !== r && "$?" !== r) || t++;
                }
                e = e.nextSibling;
              }
              Ra = null;
            }
          } else Ra = Ta ? io(e.stateNode.nextSibling) : null;
          return !0;
        }
        function Aa() {
          (Ra = Ta = null), (ja = !1);
        }
        function Ua(e) {
          null === Na ? (Na = [e]) : Na.push(e);
        }
        function za(e, t, r) {
          if (
            null !== (e = r.ref) &&
            "function" !== typeof e &&
            "object" !== typeof e
          ) {
            if (r._owner) {
              if ((r = r._owner)) {
                if (1 !== r.tag) throw Error(a(309));
                var n = r.stateNode;
              }
              if (!n) throw Error(a(147, e));
              var o = n,
                i = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" === typeof t.ref &&
                t.ref._stringRef === i
                ? t.ref
                : ((t = function (e) {
                    var t = o.refs;
                    t === ca && (t = o.refs = {}),
                      null === e ? delete t[i] : (t[i] = e);
                  }),
                  (t._stringRef = i),
                  t);
            }
            if ("string" !== typeof e) throw Error(a(284));
            if (!r._owner) throw Error(a(290, e));
          }
          return e;
        }
        function Fa(e, t) {
          throw (
            ((e = Object.prototype.toString.call(t)),
            Error(
              a(
                31,
                "[object Object]" === e
                  ? "object with keys {" + Object.keys(t).join(", ") + "}"
                  : e
              )
            ))
          );
        }
        function Ka(e) {
          return (0, e._init)(e._payload);
        }
        function Va(e) {
          function t(t, r) {
            if (e) {
              var n = t.deletions;
              null === n ? ((t.deletions = [r]), (t.flags |= 16)) : n.push(r);
            }
          }
          function r(r, n) {
            if (!e) return null;
            for (; null !== n; ) t(r, n), (n = n.sibling);
            return null;
          }
          function n(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function o(e, t) {
            return ((e = Cl(e, t)).index = 0), (e.sibling = null), e;
          }
          function i(t, r, n) {
            return (
              (t.index = n),
              e
                ? null !== (n = t.alternate)
                  ? (n = n.index) < r
                    ? ((t.flags |= 2), r)
                    : n
                  : ((t.flags |= 2), r)
                : ((t.flags |= 1048576), r)
            );
          }
          function s(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function c(e, t, r, n) {
            return null === t || 6 !== t.tag
              ? (((t = Bl(r, e.mode, n)).return = e), t)
              : (((t = o(t, r)).return = e), t);
          }
          function l(e, t, r, n) {
            var a = r.type;
            return a === x
              ? d(e, t, r.props.children, n, r.key)
              : null !== t &&
                (t.elementType === a ||
                  ("object" === typeof a &&
                    null !== a &&
                    a.$$typeof === O &&
                    Ka(a) === t.type))
              ? (((n = o(t, r.props)).ref = za(e, t, r)), (n.return = e), n)
              : (((n = xl(r.type, r.key, r.props, null, e.mode, n)).ref = za(
                  e,
                  t,
                  r
                )),
                (n.return = e),
                n);
          }
          function u(e, t, r, n) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== r.containerInfo ||
              t.stateNode.implementation !== r.implementation
              ? (((t = El(r, e.mode, n)).return = e), t)
              : (((t = o(t, r.children || [])).return = e), t);
          }
          function d(e, t, r, n, a) {
            return null === t || 7 !== t.tag
              ? (((t = Pl(r, e.mode, n, a)).return = e), t)
              : (((t = o(t, r)).return = e), t);
          }
          function f(e, t, r) {
            if (("string" === typeof t && "" !== t) || "number" === typeof t)
              return ((t = Bl("" + t, e.mode, r)).return = e), t;
            if ("object" === typeof t && null !== t) {
              switch (t.$$typeof) {
                case w:
                  return (
                    ((r = xl(t.type, t.key, t.props, null, e.mode, r)).ref = za(
                      e,
                      null,
                      t
                    )),
                    (r.return = e),
                    r
                  );
                case C:
                  return ((t = El(t, e.mode, r)).return = e), t;
                case O:
                  return f(e, (0, t._init)(t._payload), r);
              }
              if (te(t) || L(t))
                return ((t = Pl(t, e.mode, r, null)).return = e), t;
              Fa(e, t);
            }
            return null;
          }
          function p(e, t, r, n) {
            var o = null !== t ? t.key : null;
            if (("string" === typeof r && "" !== r) || "number" === typeof r)
              return null !== o ? null : c(e, t, "" + r, n);
            if ("object" === typeof r && null !== r) {
              switch (r.$$typeof) {
                case w:
                  return r.key === o ? l(e, t, r, n) : null;
                case C:
                  return r.key === o ? u(e, t, r, n) : null;
                case O:
                  return p(e, t, (o = r._init)(r._payload), n);
              }
              if (te(r) || L(r)) return null !== o ? null : d(e, t, r, n, null);
              Fa(e, r);
            }
            return null;
          }
          function m(e, t, r, n, o) {
            if (("string" === typeof n && "" !== n) || "number" === typeof n)
              return c(t, (e = e.get(r) || null), "" + n, o);
            if ("object" === typeof n && null !== n) {
              switch (n.$$typeof) {
                case w:
                  return l(
                    t,
                    (e = e.get(null === n.key ? r : n.key) || null),
                    n,
                    o
                  );
                case C:
                  return u(
                    t,
                    (e = e.get(null === n.key ? r : n.key) || null),
                    n,
                    o
                  );
                case O:
                  return m(e, t, r, (0, n._init)(n._payload), o);
              }
              if (te(n) || L(n))
                return d(t, (e = e.get(r) || null), n, o, null);
              Fa(t, n);
            }
            return null;
          }
          function h(o, a, s, c) {
            for (
              var l = null, u = null, d = a, h = (a = 0), v = null;
              null !== d && h < s.length;
              h++
            ) {
              d.index > h ? ((v = d), (d = null)) : (v = d.sibling);
              var g = p(o, d, s[h], c);
              if (null === g) {
                null === d && (d = v);
                break;
              }
              e && d && null === g.alternate && t(o, d),
                (a = i(g, a, h)),
                null === u ? (l = g) : (u.sibling = g),
                (u = g),
                (d = v);
            }
            if (h === s.length) return r(o, d), ja && Pa(o, h), l;
            if (null === d) {
              for (; h < s.length; h++)
                null !== (d = f(o, s[h], c)) &&
                  ((a = i(d, a, h)),
                  null === u ? (l = d) : (u.sibling = d),
                  (u = d));
              return ja && Pa(o, h), l;
            }
            for (d = n(o, d); h < s.length; h++)
              null !== (v = m(d, o, h, s[h], c)) &&
                (e &&
                  null !== v.alternate &&
                  d.delete(null === v.key ? h : v.key),
                (a = i(v, a, h)),
                null === u ? (l = v) : (u.sibling = v),
                (u = v));
            return (
              e &&
                d.forEach(function (e) {
                  return t(o, e);
                }),
              ja && Pa(o, h),
              l
            );
          }
          function v(o, s, c, l) {
            var u = L(c);
            if ("function" !== typeof u) throw Error(a(150));
            if (null == (c = u.call(c))) throw Error(a(151));
            for (
              var d = (u = null), h = s, v = (s = 0), g = null, y = c.next();
              null !== h && !y.done;
              v++, y = c.next()
            ) {
              h.index > v ? ((g = h), (h = null)) : (g = h.sibling);
              var k = p(o, h, y.value, l);
              if (null === k) {
                null === h && (h = g);
                break;
              }
              e && h && null === k.alternate && t(o, h),
                (s = i(k, s, v)),
                null === d ? (u = k) : (d.sibling = k),
                (d = k),
                (h = g);
            }
            if (y.done) return r(o, h), ja && Pa(o, v), u;
            if (null === h) {
              for (; !y.done; v++, y = c.next())
                null !== (y = f(o, y.value, l)) &&
                  ((s = i(y, s, v)),
                  null === d ? (u = y) : (d.sibling = y),
                  (d = y));
              return ja && Pa(o, v), u;
            }
            for (h = n(o, h); !y.done; v++, y = c.next())
              null !== (y = m(h, o, v, y.value, l)) &&
                (e &&
                  null !== y.alternate &&
                  h.delete(null === y.key ? v : y.key),
                (s = i(y, s, v)),
                null === d ? (u = y) : (d.sibling = y),
                (d = y));
            return (
              e &&
                h.forEach(function (e) {
                  return t(o, e);
                }),
              ja && Pa(o, v),
              u
            );
          }
          return function e(n, a, i, c) {
            if (
              ("object" === typeof i &&
                null !== i &&
                i.type === x &&
                null === i.key &&
                (i = i.props.children),
              "object" === typeof i && null !== i)
            ) {
              switch (i.$$typeof) {
                case w:
                  e: {
                    for (var l = i.key, u = a; null !== u; ) {
                      if (u.key === l) {
                        if ((l = i.type) === x) {
                          if (7 === u.tag) {
                            r(n, u.sibling),
                              ((a = o(u, i.props.children)).return = n),
                              (n = a);
                            break e;
                          }
                        } else if (
                          u.elementType === l ||
                          ("object" === typeof l &&
                            null !== l &&
                            l.$$typeof === O &&
                            Ka(l) === u.type)
                        ) {
                          r(n, u.sibling),
                            ((a = o(u, i.props)).ref = za(n, u, i)),
                            (a.return = n),
                            (n = a);
                          break e;
                        }
                        r(n, u);
                        break;
                      }
                      t(n, u), (u = u.sibling);
                    }
                    i.type === x
                      ? (((a = Pl(i.props.children, n.mode, c, i.key)).return =
                          n),
                        (n = a))
                      : (((c = xl(
                          i.type,
                          i.key,
                          i.props,
                          null,
                          n.mode,
                          c
                        )).ref = za(n, a, i)),
                        (c.return = n),
                        (n = c));
                  }
                  return s(n);
                case C:
                  e: {
                    for (u = i.key; null !== a; ) {
                      if (a.key === u) {
                        if (
                          4 === a.tag &&
                          a.stateNode.containerInfo === i.containerInfo &&
                          a.stateNode.implementation === i.implementation
                        ) {
                          r(n, a.sibling),
                            ((a = o(a, i.children || [])).return = n),
                            (n = a);
                          break e;
                        }
                        r(n, a);
                        break;
                      }
                      t(n, a), (a = a.sibling);
                    }
                    ((a = El(i, n.mode, c)).return = n), (n = a);
                  }
                  return s(n);
                case O:
                  return e(n, a, (u = i._init)(i._payload), c);
              }
              if (te(i)) return h(n, a, i, c);
              if (L(i)) return v(n, a, i, c);
              Fa(n, i);
            }
            return ("string" === typeof i && "" !== i) || "number" === typeof i
              ? ((i = "" + i),
                null !== a && 6 === a.tag
                  ? (r(n, a.sibling), ((a = o(a, i)).return = n), (n = a))
                  : (r(n, a), ((a = Bl(i, n.mode, c)).return = n), (n = a)),
                s(n))
              : r(n, a);
          };
        }
        var Ja = Va(!0),
          Ha = Va(!1),
          Wa = {},
          Ga = Co(Wa),
          Qa = Co(Wa),
          Xa = Co(Wa);
        function Ya(e) {
          if (e === Wa) throw Error(a(174));
          return e;
        }
        function qa(e, t) {
          switch ((Po(Xa, t), Po(Qa, e), Po(Ga, Wa), (e = t.nodeType))) {
            case 9:
            case 11:
              t = (t = t.documentElement) ? t.namespaceURI : ce(null, "");
              break;
            default:
              t = ce(
                (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
                (e = e.tagName)
              );
          }
          xo(Ga), Po(Ga, t);
        }
        function $a() {
          xo(Ga), xo(Qa), xo(Xa);
        }
        function Za(e) {
          Ya(Xa.current);
          var t = Ya(Ga.current),
            r = ce(t, e.type);
          t !== r && (Po(Qa, e), Po(Ga, r));
        }
        function ei(e) {
          Qa.current === e && (xo(Ga), xo(Qa));
        }
        var ti = Co(0);
        function ri(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var r = t.memoizedState;
              if (
                null !== r &&
                (null === (r = r.dehydrated) ||
                  "$?" === r.data ||
                  "$!" === r.data)
              )
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 !== (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var ni = [];
        function oi() {
          for (var e = 0; e < ni.length; e++)
            ni[e]._workInProgressVersionPrimary = null;
          ni.length = 0;
        }
        var ai = b.ReactCurrentDispatcher,
          ii = b.ReactCurrentBatchConfig,
          si = 0,
          ci = null,
          li = null,
          ui = null,
          di = !1,
          fi = !1,
          pi = 0,
          mi = 0;
        function hi() {
          throw Error(a(321));
        }
        function vi(e, t) {
          if (null === t) return !1;
          for (var r = 0; r < t.length && r < e.length; r++)
            if (!on(e[r], t[r])) return !1;
          return !0;
        }
        function gi(e, t, r, n, o, i) {
          if (
            ((si = i),
            (ci = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (ai.current = null === e || null === e.memoizedState ? Zi : es),
            (e = r(n, o)),
            fi)
          ) {
            i = 0;
            do {
              if (((fi = !1), (pi = 0), 25 <= i)) throw Error(a(301));
              (i += 1),
                (ui = li = null),
                (t.updateQueue = null),
                (ai.current = ts),
                (e = r(n, o));
            } while (fi);
          }
          if (
            ((ai.current = $i),
            (t = null !== li && null !== li.next),
            (si = 0),
            (ui = li = ci = null),
            (di = !1),
            t)
          )
            throw Error(a(300));
          return e;
        }
        function yi() {
          var e = 0 !== pi;
          return (pi = 0), e;
        }
        function ki() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === ui ? (ci.memoizedState = ui = e) : (ui = ui.next = e), ui
          );
        }
        function bi() {
          if (null === li) {
            var e = ci.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = li.next;
          var t = null === ui ? ci.memoizedState : ui.next;
          if (null !== t) (ui = t), (li = e);
          else {
            if (null === e) throw Error(a(310));
            (e = {
              memoizedState: (li = e).memoizedState,
              baseState: li.baseState,
              baseQueue: li.baseQueue,
              queue: li.queue,
              next: null,
            }),
              null === ui ? (ci.memoizedState = ui = e) : (ui = ui.next = e);
          }
          return ui;
        }
        function wi(e, t) {
          return "function" === typeof t ? t(e) : t;
        }
        function Ci(e) {
          var t = bi(),
            r = t.queue;
          if (null === r) throw Error(a(311));
          r.lastRenderedReducer = e;
          var n = li,
            o = n.baseQueue,
            i = r.pending;
          if (null !== i) {
            if (null !== o) {
              var s = o.next;
              (o.next = i.next), (i.next = s);
            }
            (n.baseQueue = o = i), (r.pending = null);
          }
          if (null !== o) {
            (i = o.next), (n = n.baseState);
            var c = (s = null),
              l = null,
              u = i;
            do {
              var d = u.lane;
              if ((si & d) === d)
                null !== l &&
                  (l = l.next =
                    {
                      lane: 0,
                      action: u.action,
                      hasEagerState: u.hasEagerState,
                      eagerState: u.eagerState,
                      next: null,
                    }),
                  (n = u.hasEagerState ? u.eagerState : e(n, u.action));
              else {
                var f = {
                  lane: d,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                };
                null === l ? ((c = l = f), (s = n)) : (l = l.next = f),
                  (ci.lanes |= d),
                  (Sc |= d);
              }
              u = u.next;
            } while (null !== u && u !== i);
            null === l ? (s = n) : (l.next = c),
              on(n, t.memoizedState) || (gs = !0),
              (t.memoizedState = n),
              (t.baseState = s),
              (t.baseQueue = l),
              (r.lastRenderedState = n);
          }
          if (null !== (e = r.interleaved)) {
            o = e;
            do {
              (i = o.lane), (ci.lanes |= i), (Sc |= i), (o = o.next);
            } while (o !== e);
          } else null === o && (r.lanes = 0);
          return [t.memoizedState, r.dispatch];
        }
        function xi(e) {
          var t = bi(),
            r = t.queue;
          if (null === r) throw Error(a(311));
          r.lastRenderedReducer = e;
          var n = r.dispatch,
            o = r.pending,
            i = t.memoizedState;
          if (null !== o) {
            r.pending = null;
            var s = (o = o.next);
            do {
              (i = e(i, s.action)), (s = s.next);
            } while (s !== o);
            on(i, t.memoizedState) || (gs = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (r.lastRenderedState = i);
          }
          return [i, n];
        }
        function Pi() {}
        function Si(e, t) {
          var r = ci,
            n = bi(),
            o = t(),
            i = !on(n.memoizedState, o);
          if (
            (i && ((n.memoizedState = o), (gs = !0)),
            (n = n.queue),
            Di(Ti.bind(null, r, n, e), [e]),
            n.getSnapshot !== t ||
              i ||
              (null !== ui && 1 & ui.memoizedState.tag))
          ) {
            if (
              ((r.flags |= 2048),
              Ni(9, Ei.bind(null, r, n, o, t), void 0, null),
              null === yc)
            )
              throw Error(a(349));
            0 !== (30 & si) || Bi(r, t, o);
          }
          return o;
        }
        function Bi(e, t, r) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: r }),
            null === (t = ci.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (ci.updateQueue = t),
                (t.stores = [e]))
              : null === (r = t.stores)
              ? (t.stores = [e])
              : r.push(e);
        }
        function Ei(e, t, r, n) {
          (t.value = r), (t.getSnapshot = n), Ri(t) && Jc(e, 1, -1);
        }
        function Ti(e, t, r) {
          return r(function () {
            Ri(t) && Jc(e, 1, -1);
          });
        }
        function Ri(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var r = t();
            return !on(e, r);
          } catch (n) {
            return !0;
          }
        }
        function ji(e) {
          var t = ki();
          return (
            "function" === typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: wi,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = Gi.bind(null, ci, e)),
            [t.memoizedState, e]
          );
        }
        function Ni(e, t, r, n) {
          return (
            (e = { tag: e, create: t, destroy: r, deps: n, next: null }),
            null === (t = ci.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (ci.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (r = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((n = r.next), (r.next = e), (e.next = n), (t.lastEffect = e)),
            e
          );
        }
        function Oi() {
          return bi().memoizedState;
        }
        function _i(e, t, r, n) {
          var o = ki();
          (ci.flags |= e),
            (o.memoizedState = Ni(1 | t, r, void 0, void 0 === n ? null : n));
        }
        function Mi(e, t, r, n) {
          var o = bi();
          n = void 0 === n ? null : n;
          var a = void 0;
          if (null !== li) {
            var i = li.memoizedState;
            if (((a = i.destroy), null !== n && vi(n, i.deps)))
              return void (o.memoizedState = Ni(t, r, a, n));
          }
          (ci.flags |= e), (o.memoizedState = Ni(1 | t, r, a, n));
        }
        function Li(e, t) {
          return _i(8390656, 8, e, t);
        }
        function Di(e, t) {
          return Mi(2048, 8, e, t);
        }
        function Ii(e, t) {
          return Mi(4, 2, e, t);
        }
        function Ai(e, t) {
          return Mi(4, 4, e, t);
        }
        function Ui(e, t) {
          return "function" === typeof t
            ? ((e = e()),
              t(e),
              function () {
                t(null);
              })
            : null !== t && void 0 !== t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function zi(e, t, r) {
          return (
            (r = null !== r && void 0 !== r ? r.concat([e]) : null),
            Mi(4, 4, Ui.bind(null, t, e), r)
          );
        }
        function Fi() {}
        function Ki(e, t) {
          var r = bi();
          t = void 0 === t ? null : t;
          var n = r.memoizedState;
          return null !== n && null !== t && vi(t, n[1])
            ? n[0]
            : ((r.memoizedState = [e, t]), e);
        }
        function Vi(e, t) {
          var r = bi();
          t = void 0 === t ? null : t;
          var n = r.memoizedState;
          return null !== n && null !== t && vi(t, n[1])
            ? n[0]
            : ((e = e()), (r.memoizedState = [e, t]), e);
        }
        function Ji(e, t) {
          var r = yt;
          (yt = 0 !== r && 4 > r ? r : 4), e(!0);
          var n = ii.transition;
          ii.transition = {};
          try {
            e(!1), t();
          } finally {
            (yt = r), (ii.transition = n);
          }
        }
        function Hi() {
          return bi().memoizedState;
        }
        function Wi(e, t, r) {
          var n = Vc(e);
          (r = {
            lane: n,
            action: r,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
            Qi(e)
              ? Xi(t, r)
              : (Yi(e, t, r),
                null !== (e = Jc(e, n, (r = Kc()))) && qi(e, t, n));
        }
        function Gi(e, t, r) {
          var n = Vc(e),
            o = {
              lane: n,
              action: r,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (Qi(e)) Xi(t, o);
          else {
            Yi(e, t, o);
            var a = e.alternate;
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  s = a(i, r);
                if (((o.hasEagerState = !0), (o.eagerState = s), on(s, i)))
                  return;
              } catch (c) {}
            null !== (e = Jc(e, n, (r = Kc()))) && qi(e, t, n);
          }
        }
        function Qi(e) {
          var t = e.alternate;
          return e === ci || (null !== t && t === ci);
        }
        function Xi(e, t) {
          fi = di = !0;
          var r = e.pending;
          null === r ? (t.next = t) : ((t.next = r.next), (r.next = t)),
            (e.pending = t);
        }
        function Yi(e, t, r) {
          null !== yc && 0 !== (1 & e.mode) && 0 === (2 & gc)
            ? (null === (e = t.interleaved)
                ? ((r.next = r), null === $o ? ($o = [t]) : $o.push(t))
                : ((r.next = e.next), (e.next = r)),
              (t.interleaved = r))
            : (null === (e = t.pending)
                ? (r.next = r)
                : ((r.next = e.next), (e.next = r)),
              (t.pending = r));
        }
        function qi(e, t, r) {
          if (0 !== (4194240 & r)) {
            var n = t.lanes;
            (r |= n &= e.pendingLanes), (t.lanes = r), gt(e, r);
          }
        }
        var $i = {
            readContext: qo,
            useCallback: hi,
            useContext: hi,
            useEffect: hi,
            useImperativeHandle: hi,
            useInsertionEffect: hi,
            useLayoutEffect: hi,
            useMemo: hi,
            useReducer: hi,
            useRef: hi,
            useState: hi,
            useDebugValue: hi,
            useDeferredValue: hi,
            useTransition: hi,
            useMutableSource: hi,
            useSyncExternalStore: hi,
            useId: hi,
            unstable_isNewReconciler: !1,
          },
          Zi = {
            readContext: qo,
            useCallback: function (e, t) {
              return (ki().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: qo,
            useEffect: Li,
            useImperativeHandle: function (e, t, r) {
              return (
                (r = null !== r && void 0 !== r ? r.concat([e]) : null),
                _i(4194308, 4, Ui.bind(null, t, e), r)
              );
            },
            useLayoutEffect: function (e, t) {
              return _i(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return _i(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var r = ki();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (r.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, r) {
              var n = ki();
              return (
                (t = void 0 !== r ? r(t) : t),
                (n.memoizedState = n.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (n.queue = e),
                (e = e.dispatch = Wi.bind(null, ci, e)),
                [n.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (ki().memoizedState = e);
            },
            useState: ji,
            useDebugValue: Fi,
            useDeferredValue: function (e) {
              var t = ji(e),
                r = t[0],
                n = t[1];
              return (
                Li(
                  function () {
                    var t = ii.transition;
                    ii.transition = {};
                    try {
                      n(e);
                    } finally {
                      ii.transition = t;
                    }
                  },
                  [e]
                ),
                r
              );
            },
            useTransition: function () {
              var e = ji(!1),
                t = e[0];
              return (
                (e = Ji.bind(null, e[1])), (ki().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, r) {
              var n = ci,
                o = ki();
              if (ja) {
                if (void 0 === r) throw Error(a(407));
                r = r();
              } else {
                if (((r = t()), null === yc)) throw Error(a(349));
                0 !== (30 & si) || Bi(n, t, r);
              }
              o.memoizedState = r;
              var i = { value: r, getSnapshot: t };
              return (
                (o.queue = i),
                Li(Ti.bind(null, n, i, e), [e]),
                (n.flags |= 2048),
                Ni(9, Ei.bind(null, n, i, r, t), void 0, null),
                r
              );
            },
            useId: function () {
              var e = ki(),
                t = yc.identifierPrefix;
              if (ja) {
                var r = xa;
                (t =
                  ":" +
                  t +
                  "R" +
                  (r = (Ca & ~(1 << (32 - it(Ca) - 1))).toString(32) + r)),
                  0 < (r = pi++) && (t += "H" + r.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (r = mi++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          es = {
            readContext: qo,
            useCallback: Ki,
            useContext: qo,
            useEffect: Di,
            useImperativeHandle: zi,
            useInsertionEffect: Ii,
            useLayoutEffect: Ai,
            useMemo: Vi,
            useReducer: Ci,
            useRef: Oi,
            useState: function () {
              return Ci(wi);
            },
            useDebugValue: Fi,
            useDeferredValue: function (e) {
              var t = Ci(wi),
                r = t[0],
                n = t[1];
              return (
                Di(
                  function () {
                    var t = ii.transition;
                    ii.transition = {};
                    try {
                      n(e);
                    } finally {
                      ii.transition = t;
                    }
                  },
                  [e]
                ),
                r
              );
            },
            useTransition: function () {
              return [Ci(wi)[0], bi().memoizedState];
            },
            useMutableSource: Pi,
            useSyncExternalStore: Si,
            useId: Hi,
            unstable_isNewReconciler: !1,
          },
          ts = {
            readContext: qo,
            useCallback: Ki,
            useContext: qo,
            useEffect: Di,
            useImperativeHandle: zi,
            useInsertionEffect: Ii,
            useLayoutEffect: Ai,
            useMemo: Vi,
            useReducer: xi,
            useRef: Oi,
            useState: function () {
              return xi(wi);
            },
            useDebugValue: Fi,
            useDeferredValue: function (e) {
              var t = xi(wi),
                r = t[0],
                n = t[1];
              return (
                Di(
                  function () {
                    var t = ii.transition;
                    ii.transition = {};
                    try {
                      n(e);
                    } finally {
                      ii.transition = t;
                    }
                  },
                  [e]
                ),
                r
              );
            },
            useTransition: function () {
              return [xi(wi)[0], bi().memoizedState];
            },
            useMutableSource: Pi,
            useSyncExternalStore: Si,
            useId: Hi,
            unstable_isNewReconciler: !1,
          };
        function rs(e, t) {
          try {
            var r = "",
              n = t;
            do {
              (r += F(n)), (n = n.return);
            } while (n);
            var o = r;
          } catch (a) {
            o = "\nError generating stack: " + a.message + "\n" + a.stack;
          }
          return { value: e, source: t, stack: o };
        }
        function ns(e, t) {
          try {
            console.error(t.value);
          } catch (r) {
            setTimeout(function () {
              throw r;
            });
          }
        }
        var os,
          as,
          is,
          ss = "function" === typeof WeakMap ? WeakMap : Map;
        function cs(e, t, r) {
          ((r = ra(-1, r)).tag = 3), (r.payload = { element: null });
          var n = t.value;
          return (
            (r.callback = function () {
              Oc || ((Oc = !0), (_c = n)), ns(0, t);
            }),
            r
          );
        }
        function ls(e, t, r) {
          (r = ra(-1, r)).tag = 3;
          var n = e.type.getDerivedStateFromError;
          if ("function" === typeof n) {
            var o = t.value;
            (r.payload = function () {
              return n(o);
            }),
              (r.callback = function () {
                ns(0, t);
              });
          }
          var a = e.stateNode;
          return (
            null !== a &&
              "function" === typeof a.componentDidCatch &&
              (r.callback = function () {
                ns(0, t),
                  "function" !== typeof n &&
                    (null === Mc ? (Mc = new Set([this])) : Mc.add(this));
                var e = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== e ? e : "",
                });
              }),
            r
          );
        }
        function us(e, t, r) {
          var n = e.pingCache;
          if (null === n) {
            n = e.pingCache = new ss();
            var o = new Set();
            n.set(t, o);
          } else void 0 === (o = n.get(t)) && ((o = new Set()), n.set(t, o));
          o.has(r) || (o.add(r), (e = ml.bind(null, e, t, r)), t.then(e, e));
        }
        function ds(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function fs(e, t, r, n, o) {
          return 0 === (1 & e.mode)
            ? (e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (r.flags |= 131072),
                  (r.flags &= -52805),
                  1 === r.tag &&
                    (null === r.alternate
                      ? (r.tag = 17)
                      : (((t = ra(-1, 1)).tag = 2), na(r, t))),
                  (r.lanes |= 1)),
              e)
            : ((e.flags |= 65536), (e.lanes = o), e);
        }
        function ps(e, t) {
          if (!ja)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var r = null; null !== t; )
                  null !== t.alternate && (r = t), (t = t.sibling);
                null === r ? (e.tail = null) : (r.sibling = null);
                break;
              case "collapsed":
                r = e.tail;
                for (var n = null; null !== r; )
                  null !== r.alternate && (n = r), (r = r.sibling);
                null === n
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (n.sibling = null);
            }
        }
        function ms(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            r = 0,
            n = 0;
          if (t)
            for (var o = e.child; null !== o; )
              (r |= o.lanes | o.childLanes),
                (n |= 14680064 & o.subtreeFlags),
                (n |= 14680064 & o.flags),
                (o.return = e),
                (o = o.sibling);
          else
            for (o = e.child; null !== o; )
              (r |= o.lanes | o.childLanes),
                (n |= o.subtreeFlags),
                (n |= o.flags),
                (o.return = e),
                (o = o.sibling);
          return (e.subtreeFlags |= n), (e.childLanes = r), t;
        }
        function hs(e, t, r) {
          var n = t.pendingProps;
          switch ((Ea(t), t.tag)) {
            case 2:
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
              return ms(t), null;
            case 1:
            case 17:
              return jo(t.type) && No(), ms(t), null;
            case 3:
              return (
                (n = t.stateNode),
                $a(),
                xo(Eo),
                xo(Bo),
                oi(),
                n.pendingContext &&
                  ((n.context = n.pendingContext), (n.pendingContext = null)),
                (null !== e && null !== e.child) ||
                  (Ia(t)
                    ? (t.flags |= 4)
                    : null === e ||
                      (e.memoizedState.isDehydrated && 0 === (256 & t.flags)) ||
                      ((t.flags |= 1024),
                      null !== Na && (Xc(Na), (Na = null)))),
                ms(t),
                null
              );
            case 5:
              ei(t);
              var o = Ya(Xa.current);
              if (((r = t.type), null !== e && null != t.stateNode))
                as(e, t, r, n),
                  e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              else {
                if (!n) {
                  if (null === t.stateNode) throw Error(a(166));
                  return ms(t), null;
                }
                if (((e = Ya(Ga.current)), Ia(t))) {
                  (n = t.stateNode), (r = t.type);
                  var i = t.memoizedProps;
                  switch (
                    ((n[lo] = t), (n[uo] = i), (e = 0 !== (1 & t.mode)), r)
                  ) {
                    case "dialog":
                      In("cancel", n), In("close", n);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      In("load", n);
                      break;
                    case "video":
                    case "audio":
                      for (o = 0; o < _n.length; o++) In(_n[o], n);
                      break;
                    case "source":
                      In("error", n);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      In("error", n), In("load", n);
                      break;
                    case "details":
                      In("toggle", n);
                      break;
                    case "input":
                      Y(n, i), In("invalid", n);
                      break;
                    case "select":
                      (n._wrapperState = { wasMultiple: !!i.multiple }),
                        In("invalid", n);
                      break;
                    case "textarea":
                      oe(n, i), In("invalid", n);
                  }
                  for (var c in (ye(r, i), (o = null), i))
                    if (i.hasOwnProperty(c)) {
                      var l = i[c];
                      "children" === c
                        ? "string" === typeof l
                          ? n.textContent !== l &&
                            (Yn(n.textContent, l, e), (o = ["children", l]))
                          : "number" === typeof l &&
                            n.textContent !== "" + l &&
                            (Yn(n.textContent, l, e),
                            (o = ["children", "" + l]))
                        : s.hasOwnProperty(c) &&
                          null != l &&
                          "onScroll" === c &&
                          In("scroll", n);
                    }
                  switch (r) {
                    case "input":
                      W(n), Z(n, i, !0);
                      break;
                    case "textarea":
                      W(n), ie(n);
                      break;
                    case "select":
                    case "option":
                      break;
                    default:
                      "function" === typeof i.onClick && (n.onclick = qn);
                  }
                  (n = o), (t.updateQueue = n), null !== n && (t.flags |= 4);
                } else {
                  (c = 9 === o.nodeType ? o : o.ownerDocument),
                    "http://www.w3.org/1999/xhtml" === e && (e = se(r)),
                    "http://www.w3.org/1999/xhtml" === e
                      ? "script" === r
                        ? (((e = c.createElement("div")).innerHTML =
                            "<script></script>"),
                          (e = e.removeChild(e.firstChild)))
                        : "string" === typeof n.is
                        ? (e = c.createElement(r, { is: n.is }))
                        : ((e = c.createElement(r)),
                          "select" === r &&
                            ((c = e),
                            n.multiple
                              ? (c.multiple = !0)
                              : n.size && (c.size = n.size)))
                      : (e = c.createElementNS(e, r)),
                    (e[lo] = t),
                    (e[uo] = n),
                    os(e, t),
                    (t.stateNode = e);
                  e: {
                    switch (((c = ke(r, n)), r)) {
                      case "dialog":
                        In("cancel", e), In("close", e), (o = n);
                        break;
                      case "iframe":
                      case "object":
                      case "embed":
                        In("load", e), (o = n);
                        break;
                      case "video":
                      case "audio":
                        for (o = 0; o < _n.length; o++) In(_n[o], e);
                        o = n;
                        break;
                      case "source":
                        In("error", e), (o = n);
                        break;
                      case "img":
                      case "image":
                      case "link":
                        In("error", e), In("load", e), (o = n);
                        break;
                      case "details":
                        In("toggle", e), (o = n);
                        break;
                      case "input":
                        Y(e, n), (o = X(e, n)), In("invalid", e);
                        break;
                      case "option":
                      default:
                        o = n;
                        break;
                      case "select":
                        (e._wrapperState = { wasMultiple: !!n.multiple }),
                          (o = I({}, n, { value: void 0 })),
                          In("invalid", e);
                        break;
                      case "textarea":
                        oe(e, n), (o = ne(e, n)), In("invalid", e);
                    }
                    for (i in (ye(r, o), (l = o)))
                      if (l.hasOwnProperty(i)) {
                        var u = l[i];
                        "style" === i
                          ? ve(e, u)
                          : "dangerouslySetInnerHTML" === i
                          ? null != (u = u ? u.__html : void 0) && de(e, u)
                          : "children" === i
                          ? "string" === typeof u
                            ? ("textarea" !== r || "" !== u) && fe(e, u)
                            : "number" === typeof u && fe(e, "" + u)
                          : "suppressContentEditableWarning" !== i &&
                            "suppressHydrationWarning" !== i &&
                            "autoFocus" !== i &&
                            (s.hasOwnProperty(i)
                              ? null != u && "onScroll" === i && In("scroll", e)
                              : null != u && k(e, i, u, c));
                      }
                    switch (r) {
                      case "input":
                        W(e), Z(e, n, !1);
                        break;
                      case "textarea":
                        W(e), ie(e);
                        break;
                      case "option":
                        null != n.value &&
                          e.setAttribute("value", "" + J(n.value));
                        break;
                      case "select":
                        (e.multiple = !!n.multiple),
                          null != (i = n.value)
                            ? re(e, !!n.multiple, i, !1)
                            : null != n.defaultValue &&
                              re(e, !!n.multiple, n.defaultValue, !0);
                        break;
                      default:
                        "function" === typeof o.onClick && (e.onclick = qn);
                    }
                    switch (r) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        n = !!n.autoFocus;
                        break e;
                      case "img":
                        n = !0;
                        break e;
                      default:
                        n = !1;
                    }
                  }
                  n && (t.flags |= 4);
                }
                null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
              }
              return ms(t), null;
            case 6:
              if (e && null != t.stateNode) is(0, t, e.memoizedProps, n);
              else {
                if ("string" !== typeof n && null === t.stateNode)
                  throw Error(a(166));
                if (((r = Ya(Xa.current)), Ya(Ga.current), Ia(t))) {
                  if (
                    ((n = t.stateNode),
                    (r = t.memoizedProps),
                    (n[lo] = t),
                    (i = n.nodeValue !== r) && null !== (e = Ta))
                  )
                    switch (((c = 0 !== (1 & e.mode)), e.tag)) {
                      case 3:
                        Yn(n.nodeValue, r, c);
                        break;
                      case 5:
                        !0 !== e.memoizedProps[void 0] && Yn(n.nodeValue, r, c);
                    }
                  i && (t.flags |= 4);
                } else
                  ((n = (9 === r.nodeType ? r : r.ownerDocument).createTextNode(
                    n
                  ))[lo] = t),
                    (t.stateNode = n);
              }
              return ms(t), null;
            case 13:
              if (
                (xo(ti),
                (n = t.memoizedState),
                ja &&
                  null !== Ra &&
                  0 !== (1 & t.mode) &&
                  0 === (128 & t.flags))
              ) {
                for (n = Ra; n; ) n = io(n.nextSibling);
                return Aa(), (t.flags |= 98560), t;
              }
              if (null !== n && null !== n.dehydrated) {
                if (((n = Ia(t)), null === e)) {
                  if (!n) throw Error(a(318));
                  if (
                    !(n = null !== (n = t.memoizedState) ? n.dehydrated : null)
                  )
                    throw Error(a(317));
                  n[lo] = t;
                } else
                  Aa(),
                    0 === (128 & t.flags) && (t.memoizedState = null),
                    (t.flags |= 4);
                return ms(t), null;
              }
              return (
                null !== Na && (Xc(Na), (Na = null)),
                0 !== (128 & t.flags)
                  ? ((t.lanes = r), t)
                  : ((n = null !== n),
                    (r = !1),
                    null === e ? Ia(t) : (r = null !== e.memoizedState),
                    n &&
                      !r &&
                      ((t.child.flags |= 8192),
                      0 !== (1 & t.mode) &&
                        (null === e || 0 !== (1 & ti.current)
                          ? 0 === xc && (xc = 3)
                          : ol())),
                    null !== t.updateQueue && (t.flags |= 4),
                    ms(t),
                    null)
              );
            case 4:
              return (
                $a(), null === e && zn(t.stateNode.containerInfo), ms(t), null
              );
            case 10:
              return Qo(t.type._context), ms(t), null;
            case 19:
              if ((xo(ti), null === (i = t.memoizedState))) return ms(t), null;
              if (((n = 0 !== (128 & t.flags)), null === (c = i.rendering)))
                if (n) ps(i, !1);
                else {
                  if (0 !== xc || (null !== e && 0 !== (128 & e.flags)))
                    for (e = t.child; null !== e; ) {
                      if (null !== (c = ri(e))) {
                        for (
                          t.flags |= 128,
                            ps(i, !1),
                            null !== (n = c.updateQueue) &&
                              ((t.updateQueue = n), (t.flags |= 4)),
                            t.subtreeFlags = 0,
                            n = r,
                            r = t.child;
                          null !== r;

                        )
                          (e = n),
                            ((i = r).flags &= 14680066),
                            null === (c = i.alternate)
                              ? ((i.childLanes = 0),
                                (i.lanes = e),
                                (i.child = null),
                                (i.subtreeFlags = 0),
                                (i.memoizedProps = null),
                                (i.memoizedState = null),
                                (i.updateQueue = null),
                                (i.dependencies = null),
                                (i.stateNode = null))
                              : ((i.childLanes = c.childLanes),
                                (i.lanes = c.lanes),
                                (i.child = c.child),
                                (i.subtreeFlags = 0),
                                (i.deletions = null),
                                (i.memoizedProps = c.memoizedProps),
                                (i.memoizedState = c.memoizedState),
                                (i.updateQueue = c.updateQueue),
                                (i.type = c.type),
                                (e = c.dependencies),
                                (i.dependencies =
                                  null === e
                                    ? null
                                    : {
                                        lanes: e.lanes,
                                        firstContext: e.firstContext,
                                      })),
                            (r = r.sibling);
                        return Po(ti, (1 & ti.current) | 2), t.child;
                      }
                      e = e.sibling;
                    }
                  null !== i.tail &&
                    qe() > Nc &&
                    ((t.flags |= 128),
                    (n = !0),
                    ps(i, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!n)
                  if (null !== (e = ri(c))) {
                    if (
                      ((t.flags |= 128),
                      (n = !0),
                      null !== (r = e.updateQueue) &&
                        ((t.updateQueue = r), (t.flags |= 4)),
                      ps(i, !0),
                      null === i.tail &&
                        "hidden" === i.tailMode &&
                        !c.alternate &&
                        !ja)
                    )
                      return ms(t), null;
                  } else
                    2 * qe() - i.renderingStartTime > Nc &&
                      1073741824 !== r &&
                      ((t.flags |= 128),
                      (n = !0),
                      ps(i, !1),
                      (t.lanes = 4194304));
                i.isBackwards
                  ? ((c.sibling = t.child), (t.child = c))
                  : (null !== (r = i.last) ? (r.sibling = c) : (t.child = c),
                    (i.last = c));
              }
              return null !== i.tail
                ? ((t = i.tail),
                  (i.rendering = t),
                  (i.tail = t.sibling),
                  (i.renderingStartTime = qe()),
                  (t.sibling = null),
                  (r = ti.current),
                  Po(ti, n ? (1 & r) | 2 : 1 & r),
                  t)
                : (ms(t), null);
            case 22:
            case 23:
              return (
                el(),
                (n = null !== t.memoizedState),
                null !== e &&
                  (null !== e.memoizedState) !== n &&
                  (t.flags |= 8192),
                n && 0 !== (1 & t.mode)
                  ? 0 !== (1073741824 & wc) &&
                    (ms(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : ms(t),
                null
              );
            case 24:
            case 25:
              return null;
          }
          throw Error(a(156, t.tag));
        }
        (os = function (e, t) {
          for (var r = t.child; null !== r; ) {
            if (5 === r.tag || 6 === r.tag) e.appendChild(r.stateNode);
            else if (4 !== r.tag && null !== r.child) {
              (r.child.return = r), (r = r.child);
              continue;
            }
            if (r === t) break;
            for (; null === r.sibling; ) {
              if (null === r.return || r.return === t) return;
              r = r.return;
            }
            (r.sibling.return = r.return), (r = r.sibling);
          }
        }),
          (as = function (e, t, r, n) {
            var o = e.memoizedProps;
            if (o !== n) {
              (e = t.stateNode), Ya(Ga.current);
              var a,
                i = null;
              switch (r) {
                case "input":
                  (o = X(e, o)), (n = X(e, n)), (i = []);
                  break;
                case "select":
                  (o = I({}, o, { value: void 0 })),
                    (n = I({}, n, { value: void 0 })),
                    (i = []);
                  break;
                case "textarea":
                  (o = ne(e, o)), (n = ne(e, n)), (i = []);
                  break;
                default:
                  "function" !== typeof o.onClick &&
                    "function" === typeof n.onClick &&
                    (e.onclick = qn);
              }
              for (u in (ye(r, n), (r = null), o))
                if (!n.hasOwnProperty(u) && o.hasOwnProperty(u) && null != o[u])
                  if ("style" === u) {
                    var c = o[u];
                    for (a in c)
                      c.hasOwnProperty(a) && (r || (r = {}), (r[a] = ""));
                  } else
                    "dangerouslySetInnerHTML" !== u &&
                      "children" !== u &&
                      "suppressContentEditableWarning" !== u &&
                      "suppressHydrationWarning" !== u &&
                      "autoFocus" !== u &&
                      (s.hasOwnProperty(u)
                        ? i || (i = [])
                        : (i = i || []).push(u, null));
              for (u in n) {
                var l = n[u];
                if (
                  ((c = null != o ? o[u] : void 0),
                  n.hasOwnProperty(u) && l !== c && (null != l || null != c))
                )
                  if ("style" === u)
                    if (c) {
                      for (a in c)
                        !c.hasOwnProperty(a) ||
                          (l && l.hasOwnProperty(a)) ||
                          (r || (r = {}), (r[a] = ""));
                      for (a in l)
                        l.hasOwnProperty(a) &&
                          c[a] !== l[a] &&
                          (r || (r = {}), (r[a] = l[a]));
                    } else r || (i || (i = []), i.push(u, r)), (r = l);
                  else
                    "dangerouslySetInnerHTML" === u
                      ? ((l = l ? l.__html : void 0),
                        (c = c ? c.__html : void 0),
                        null != l && c !== l && (i = i || []).push(u, l))
                      : "children" === u
                      ? ("string" !== typeof l && "number" !== typeof l) ||
                        (i = i || []).push(u, "" + l)
                      : "suppressContentEditableWarning" !== u &&
                        "suppressHydrationWarning" !== u &&
                        (s.hasOwnProperty(u)
                          ? (null != l && "onScroll" === u && In("scroll", e),
                            i || c === l || (i = []))
                          : (i = i || []).push(u, l));
              }
              r && (i = i || []).push("style", r);
              var u = i;
              (t.updateQueue = u) && (t.flags |= 4);
            }
          }),
          (is = function (e, t, r, n) {
            r !== n && (t.flags |= 4);
          });
        var vs = b.ReactCurrentOwner,
          gs = !1;
        function ys(e, t, r, n) {
          t.child = null === e ? Ha(t, null, r, n) : Ja(t, e.child, r, n);
        }
        function ks(e, t, r, n, o) {
          r = r.render;
          var a = t.ref;
          return (
            Yo(t, o),
            (n = gi(e, t, r, n, a, o)),
            (r = yi()),
            null === e || gs
              ? (ja && r && Ba(t), (t.flags |= 1), ys(e, t, n, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                Us(e, t, o))
          );
        }
        function bs(e, t, r, n, o) {
          if (null === e) {
            var a = r.type;
            return "function" !== typeof a ||
              wl(a) ||
              void 0 !== a.defaultProps ||
              null !== r.compare ||
              void 0 !== r.defaultProps
              ? (((e = xl(r.type, null, n, t, t.mode, o)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), ws(e, t, a, n, o));
          }
          if (((a = e.child), 0 === (e.lanes & o))) {
            var i = a.memoizedProps;
            if (
              (r = null !== (r = r.compare) ? r : an)(i, n) &&
              e.ref === t.ref
            )
              return Us(e, t, o);
          }
          return (
            (t.flags |= 1),
            ((e = Cl(a, n)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function ws(e, t, r, n, o) {
          if (null !== e && an(e.memoizedProps, n) && e.ref === t.ref) {
            if (((gs = !1), 0 === (e.lanes & o)))
              return (t.lanes = e.lanes), Us(e, t, o);
            0 !== (131072 & e.flags) && (gs = !0);
          }
          return Ps(e, t, r, n, o);
        }
        function Cs(e, t, r) {
          var n = t.pendingProps,
            o = n.children,
            a = null !== e ? e.memoizedState : null;
          if ("hidden" === n.mode)
            if (0 === (1 & t.mode))
              (t.memoizedState = { baseLanes: 0, cachePool: null }),
                Po(Cc, wc),
                (wc |= r);
            else {
              if (0 === (1073741824 & r))
                return (
                  (e = null !== a ? a.baseLanes | r : r),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e, cachePool: null }),
                  (t.updateQueue = null),
                  Po(Cc, wc),
                  (wc |= e),
                  null
                );
              (t.memoizedState = { baseLanes: 0, cachePool: null }),
                (n = null !== a ? a.baseLanes : r),
                Po(Cc, wc),
                (wc |= n);
            }
          else
            null !== a
              ? ((n = a.baseLanes | r), (t.memoizedState = null))
              : (n = r),
              Po(Cc, wc),
              (wc |= n);
          return ys(e, t, o, r), t.child;
        }
        function xs(e, t) {
          var r = t.ref;
          ((null === e && null !== r) || (null !== e && e.ref !== r)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function Ps(e, t, r, n, o) {
          var a = jo(r) ? To : Bo.current;
          return (
            (a = Ro(t, a)),
            Yo(t, o),
            (r = gi(e, t, r, n, a, o)),
            (n = yi()),
            null === e || gs
              ? (ja && n && Ba(t), (t.flags |= 1), ys(e, t, r, o), t.child)
              : ((t.updateQueue = e.updateQueue),
                (t.flags &= -2053),
                (e.lanes &= ~o),
                Us(e, t, o))
          );
        }
        function Ss(e, t, r, n, o) {
          if (jo(r)) {
            var a = !0;
            Mo(t);
          } else a = !1;
          if ((Yo(t, o), null === t.stateNode))
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              fa(t, r, n),
              ma(t, r, n, o),
              (n = !0);
          else if (null === e) {
            var i = t.stateNode,
              s = t.memoizedProps;
            i.props = s;
            var c = i.context,
              l = r.contextType;
            "object" === typeof l && null !== l
              ? (l = qo(l))
              : (l = Ro(t, (l = jo(r) ? To : Bo.current)));
            var u = r.getDerivedStateFromProps,
              d =
                "function" === typeof u ||
                "function" === typeof i.getSnapshotBeforeUpdate;
            d ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((s !== n || c !== l) && pa(t, i, n, l)),
              (Zo = !1);
            var f = t.memoizedState;
            (i.state = f),
              ia(t, n, i, o),
              (c = t.memoizedState),
              s !== n || f !== c || Eo.current || Zo
                ? ("function" === typeof u &&
                    (la(t, r, u, n), (c = t.memoizedState)),
                  (s = Zo || da(t, r, s, n, f, c, l))
                    ? (d ||
                        ("function" !== typeof i.UNSAFE_componentWillMount &&
                          "function" !== typeof i.componentWillMount) ||
                        ("function" === typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" === typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" === typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = n),
                      (t.memoizedState = c)),
                  (i.props = n),
                  (i.state = c),
                  (i.context = l),
                  (n = s))
                : ("function" === typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (n = !1));
          } else {
            (i = t.stateNode),
              ta(e, t),
              (s = t.memoizedProps),
              (l = t.type === t.elementType ? s : Ko(t.type, s)),
              (i.props = l),
              (d = t.pendingProps),
              (f = i.context),
              "object" === typeof (c = r.contextType) && null !== c
                ? (c = qo(c))
                : (c = Ro(t, (c = jo(r) ? To : Bo.current)));
            var p = r.getDerivedStateFromProps;
            (u =
              "function" === typeof p ||
              "function" === typeof i.getSnapshotBeforeUpdate) ||
              ("function" !== typeof i.UNSAFE_componentWillReceiveProps &&
                "function" !== typeof i.componentWillReceiveProps) ||
              ((s !== d || f !== c) && pa(t, i, n, c)),
              (Zo = !1),
              (f = t.memoizedState),
              (i.state = f),
              ia(t, n, i, o);
            var m = t.memoizedState;
            s !== d || f !== m || Eo.current || Zo
              ? ("function" === typeof p &&
                  (la(t, r, p, n), (m = t.memoizedState)),
                (l = Zo || da(t, r, l, n, f, m, c) || !1)
                  ? (u ||
                      ("function" !== typeof i.UNSAFE_componentWillUpdate &&
                        "function" !== typeof i.componentWillUpdate) ||
                      ("function" === typeof i.componentWillUpdate &&
                        i.componentWillUpdate(n, m, c),
                      "function" === typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(n, m, c)),
                    "function" === typeof i.componentDidUpdate &&
                      (t.flags |= 4),
                    "function" === typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" !== typeof i.componentDidUpdate ||
                      (s === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" !== typeof i.getSnapshotBeforeUpdate ||
                      (s === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = n),
                    (t.memoizedState = m)),
                (i.props = n),
                (i.state = m),
                (i.context = c),
                (n = l))
              : ("function" !== typeof i.componentDidUpdate ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" !== typeof i.getSnapshotBeforeUpdate ||
                  (s === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (n = !1));
          }
          return Bs(e, t, r, n, a, o);
        }
        function Bs(e, t, r, n, o, a) {
          xs(e, t);
          var i = 0 !== (128 & t.flags);
          if (!n && !i) return o && Lo(t, r, !1), Us(e, t, a);
          (n = t.stateNode), (vs.current = t);
          var s =
            i && "function" !== typeof r.getDerivedStateFromError
              ? null
              : n.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = Ja(t, e.child, null, a)),
                (t.child = Ja(t, null, s, a)))
              : ys(e, t, s, a),
            (t.memoizedState = n.state),
            o && Lo(t, r, !0),
            t.child
          );
        }
        function Es(e) {
          var t = e.stateNode;
          t.pendingContext
            ? Oo(0, t.pendingContext, t.pendingContext !== t.context)
            : t.context && Oo(0, t.context, !1),
            qa(e, t.containerInfo);
        }
        function Ts(e, t, r, n, o) {
          return Aa(), Ua(o), (t.flags |= 256), ys(e, t, r, n), t.child;
        }
        var Rs = { dehydrated: null, treeContext: null, retryLane: 0 };
        function js(e) {
          return { baseLanes: e, cachePool: null };
        }
        function Ns(e, t, r) {
          var n,
            o = t.pendingProps,
            i = ti.current,
            s = !1,
            c = 0 !== (128 & t.flags);
          if (
            ((n = c) ||
              (n = (null === e || null !== e.memoizedState) && 0 !== (2 & i)),
            n
              ? ((s = !0), (t.flags &= -129))
              : (null !== e && null === e.memoizedState) || (i |= 1),
            Po(ti, 1 & i),
            null === e)
          )
            return (
              La(t),
              null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
                ? (0 === (1 & t.mode)
                    ? (t.lanes = 1)
                    : "$!" === e.data
                    ? (t.lanes = 8)
                    : (t.lanes = 1073741824),
                  null)
                : ((i = o.children),
                  (e = o.fallback),
                  s
                    ? ((o = t.mode),
                      (s = t.child),
                      (i = { mode: "hidden", children: i }),
                      0 === (1 & o) && null !== s
                        ? ((s.childLanes = 0), (s.pendingProps = i))
                        : (s = Sl(i, o, 0, null)),
                      (e = Pl(e, o, r, null)),
                      (s.return = t),
                      (e.return = t),
                      (s.sibling = e),
                      (t.child = s),
                      (t.child.memoizedState = js(r)),
                      (t.memoizedState = Rs),
                      e)
                    : Os(t, i))
            );
          if (null !== (i = e.memoizedState)) {
            if (null !== (n = i.dehydrated)) {
              if (c)
                return 256 & t.flags
                  ? ((t.flags &= -257), Ls(e, t, r, Error(a(422))))
                  : null !== t.memoizedState
                  ? ((t.child = e.child), (t.flags |= 128), null)
                  : ((s = o.fallback),
                    (i = t.mode),
                    (o = Sl(
                      { mode: "visible", children: o.children },
                      i,
                      0,
                      null
                    )),
                    ((s = Pl(s, i, r, null)).flags |= 2),
                    (o.return = t),
                    (s.return = t),
                    (o.sibling = s),
                    (t.child = o),
                    0 !== (1 & t.mode) && Ja(t, e.child, null, r),
                    (t.child.memoizedState = js(r)),
                    (t.memoizedState = Rs),
                    s);
              if (0 === (1 & t.mode)) t = Ls(e, t, r, null);
              else if ("$!" === n.data) t = Ls(e, t, r, Error(a(419)));
              else if (((o = 0 !== (r & e.childLanes)), gs || o)) {
                if (null !== (o = yc)) {
                  switch (r & -r) {
                    case 4:
                      s = 2;
                      break;
                    case 16:
                      s = 8;
                      break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                      s = 32;
                      break;
                    case 536870912:
                      s = 268435456;
                      break;
                    default:
                      s = 0;
                  }
                  0 !== (o = 0 !== (s & (o.suspendedLanes | r)) ? 0 : s) &&
                    o !== i.retryLane &&
                    ((i.retryLane = o), Jc(e, o, -1));
                }
                ol(), (t = Ls(e, t, r, Error(a(421))));
              } else
                "$?" === n.data
                  ? ((t.flags |= 128),
                    (t.child = e.child),
                    (t = vl.bind(null, e)),
                    (n._reactRetry = t),
                    (t = null))
                  : ((r = i.treeContext),
                    (Ra = io(n.nextSibling)),
                    (Ta = t),
                    (ja = !0),
                    (Na = null),
                    null !== r &&
                      ((ka[ba++] = Ca),
                      (ka[ba++] = xa),
                      (ka[ba++] = wa),
                      (Ca = r.id),
                      (xa = r.overflow),
                      (wa = t)),
                    ((t = Os(t, t.pendingProps.children)).flags |= 4096));
              return t;
            }
            return s
              ? ((o = Ms(e, t, o.children, o.fallback, r)),
                (s = t.child),
                (i = e.child.memoizedState),
                (s.memoizedState =
                  null === i
                    ? js(r)
                    : { baseLanes: i.baseLanes | r, cachePool: null }),
                (s.childLanes = e.childLanes & ~r),
                (t.memoizedState = Rs),
                o)
              : ((r = _s(e, t, o.children, r)), (t.memoizedState = null), r);
          }
          return s
            ? ((o = Ms(e, t, o.children, o.fallback, r)),
              (s = t.child),
              (i = e.child.memoizedState),
              (s.memoizedState =
                null === i
                  ? js(r)
                  : { baseLanes: i.baseLanes | r, cachePool: null }),
              (s.childLanes = e.childLanes & ~r),
              (t.memoizedState = Rs),
              o)
            : ((r = _s(e, t, o.children, r)), (t.memoizedState = null), r);
        }
        function Os(e, t) {
          return (
            ((t = Sl(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function _s(e, t, r, n) {
          var o = e.child;
          return (
            (e = o.sibling),
            (r = Cl(o, { mode: "visible", children: r })),
            0 === (1 & t.mode) && (r.lanes = n),
            (r.return = t),
            (r.sibling = null),
            null !== e &&
              (null === (n = t.deletions)
                ? ((t.deletions = [e]), (t.flags |= 16))
                : n.push(e)),
            (t.child = r)
          );
        }
        function Ms(e, t, r, n, o) {
          var a = t.mode,
            i = (e = e.child).sibling,
            s = { mode: "hidden", children: r };
          return (
            0 === (1 & a) && t.child !== e
              ? (((r = t.child).childLanes = 0),
                (r.pendingProps = s),
                (t.deletions = null))
              : ((r = Cl(e, s)).subtreeFlags = 14680064 & e.subtreeFlags),
            null !== i ? (n = Cl(i, n)) : ((n = Pl(n, a, o, null)).flags |= 2),
            (n.return = t),
            (r.return = t),
            (r.sibling = n),
            (t.child = r),
            n
          );
        }
        function Ls(e, t, r, n) {
          return (
            null !== n && Ua(n),
            Ja(t, e.child, null, r),
            ((e = Os(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function Ds(e, t, r) {
          e.lanes |= t;
          var n = e.alternate;
          null !== n && (n.lanes |= t), Xo(e.return, t, r);
        }
        function Is(e, t, r, n, o) {
          var a = e.memoizedState;
          null === a
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: n,
                tail: r,
                tailMode: o,
              })
            : ((a.isBackwards = t),
              (a.rendering = null),
              (a.renderingStartTime = 0),
              (a.last = n),
              (a.tail = r),
              (a.tailMode = o));
        }
        function As(e, t, r) {
          var n = t.pendingProps,
            o = n.revealOrder,
            a = n.tail;
          if ((ys(e, t, n.children, r), 0 !== (2 & (n = ti.current))))
            (n = (1 & n) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 !== (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && Ds(e, r, t);
                else if (19 === e.tag) Ds(e, r, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break e;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            n &= 1;
          }
          if ((Po(ti, n), 0 === (1 & t.mode))) t.memoizedState = null;
          else
            switch (o) {
              case "forwards":
                for (r = t.child, o = null; null !== r; )
                  null !== (e = r.alternate) && null === ri(e) && (o = r),
                    (r = r.sibling);
                null === (r = o)
                  ? ((o = t.child), (t.child = null))
                  : ((o = r.sibling), (r.sibling = null)),
                  Is(t, !1, o, r, a);
                break;
              case "backwards":
                for (r = null, o = t.child, t.child = null; null !== o; ) {
                  if (null !== (e = o.alternate) && null === ri(e)) {
                    t.child = o;
                    break;
                  }
                  (e = o.sibling), (o.sibling = r), (r = o), (o = e);
                }
                Is(t, !0, r, null, a);
                break;
              case "together":
                Is(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function Us(e, t, r) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Sc |= t.lanes),
            0 === (r & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(a(153));
          if (null !== t.child) {
            for (
              r = Cl((e = t.child), e.pendingProps), t.child = r, r.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((r = r.sibling = Cl(e, e.pendingProps)).return = t);
            r.sibling = null;
          }
          return t.child;
        }
        function zs(e, t) {
          switch ((Ea(t), t.tag)) {
            case 1:
              return (
                jo(t.type) && No(),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 3:
              return (
                $a(),
                xo(Eo),
                xo(Bo),
                oi(),
                0 !== (65536 & (e = t.flags)) && 0 === (128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 5:
              return ei(t), null;
            case 13:
              if (
                (xo(ti),
                null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(a(340));
                Aa();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return xo(ti), null;
            case 4:
              return $a(), null;
            case 10:
              return Qo(t.type._context), null;
            case 22:
            case 23:
              return el(), null;
            default:
              return null;
          }
        }
        var Fs = !1,
          Ks = !1,
          Vs = "function" === typeof WeakSet ? WeakSet : Set,
          Js = null;
        function Hs(e, t) {
          var r = e.ref;
          if (null !== r)
            if ("function" === typeof r)
              try {
                r(null);
              } catch (n) {
                pl(e, t, n);
              }
            else r.current = null;
        }
        function Ws(e, t, r) {
          try {
            r();
          } catch (n) {
            pl(e, t, n);
          }
        }
        var Gs = !1;
        function Qs(e, t, r) {
          var n = t.updateQueue;
          if (null !== (n = null !== n ? n.lastEffect : null)) {
            var o = (n = n.next);
            do {
              if ((o.tag & e) === e) {
                var a = o.destroy;
                (o.destroy = void 0), void 0 !== a && Ws(t, r, a);
              }
              o = o.next;
            } while (o !== n);
          }
        }
        function Xs(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var r = (t = t.next);
            do {
              if ((r.tag & e) === e) {
                var n = r.create;
                r.destroy = n();
              }
              r = r.next;
            } while (r !== t);
          }
        }
        function Ys(e) {
          var t = e.ref;
          if (null !== t) {
            var r = e.stateNode;
            e.tag, (e = r), "function" === typeof t ? t(e) : (t.current = e);
          }
        }
        function qs(e, t, r) {
          if (at && "function" === typeof at.onCommitFiberUnmount)
            try {
              at.onCommitFiberUnmount(ot, t);
            } catch (i) {}
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                var n = (e = e.next);
                do {
                  var o = n,
                    a = o.destroy;
                  (o = o.tag),
                    void 0 !== a &&
                      (0 !== (2 & o) || 0 !== (4 & o)) &&
                      Ws(t, r, a),
                    (n = n.next);
                } while (n !== e);
              }
              break;
            case 1:
              if (
                (Hs(t, r),
                "function" === typeof (e = t.stateNode).componentWillUnmount)
              )
                try {
                  (e.props = t.memoizedProps),
                    (e.state = t.memoizedState),
                    e.componentWillUnmount();
                } catch (i) {
                  pl(t, r, i);
                }
              break;
            case 5:
              Hs(t, r);
              break;
            case 4:
              oc(e, t, r);
          }
        }
        function $s(e) {
          var t = e.alternate;
          null !== t && ((e.alternate = null), $s(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag &&
              null !== (t = e.stateNode) &&
              (delete t[lo],
              delete t[uo],
              delete t[po],
              delete t[mo],
              delete t[ho]),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null);
        }
        function Zs(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ec(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || Zs(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags) continue e;
              if (null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function tc(e) {
          e: {
            for (var t = e.return; null !== t; ) {
              if (Zs(t)) break e;
              t = t.return;
            }
            throw Error(a(160));
          }
          var r = t;
          switch (r.tag) {
            case 5:
              (t = r.stateNode),
                32 & r.flags && (fe(t, ""), (r.flags &= -33)),
                nc(e, (r = ec(e)), t);
              break;
            case 3:
            case 4:
              (t = r.stateNode.containerInfo), rc(e, (r = ec(e)), t);
              break;
            default:
              throw Error(a(161));
          }
        }
        function rc(e, t, r) {
          var n = e.tag;
          if (5 === n || 6 === n)
            (e = e.stateNode),
              t
                ? 8 === r.nodeType
                  ? r.parentNode.insertBefore(e, t)
                  : r.insertBefore(e, t)
                : (8 === r.nodeType
                    ? (t = r.parentNode).insertBefore(e, r)
                    : (t = r).appendChild(e),
                  (null !== (r = r._reactRootContainer) && void 0 !== r) ||
                    null !== t.onclick ||
                    (t.onclick = qn));
          else if (4 !== n && null !== (e = e.child))
            for (rc(e, t, r), e = e.sibling; null !== e; )
              rc(e, t, r), (e = e.sibling);
        }
        function nc(e, t, r) {
          var n = e.tag;
          if (5 === n || 6 === n)
            (e = e.stateNode), t ? r.insertBefore(e, t) : r.appendChild(e);
          else if (4 !== n && null !== (e = e.child))
            for (nc(e, t, r), e = e.sibling; null !== e; )
              nc(e, t, r), (e = e.sibling);
        }
        function oc(e, t, r) {
          for (var n, o, i = t, s = !1; ; ) {
            if (!s) {
              s = i.return;
              e: for (;;) {
                if (null === s) throw Error(a(160));
                switch (((n = s.stateNode), s.tag)) {
                  case 5:
                    o = !1;
                    break e;
                  case 3:
                  case 4:
                    (n = n.containerInfo), (o = !0);
                    break e;
                }
                s = s.return;
              }
              s = !0;
            }
            if (5 === i.tag || 6 === i.tag) {
              e: for (var c = e, l = i, u = r, d = l; ; )
                if ((qs(c, d, u), null !== d.child && 4 !== d.tag))
                  (d.child.return = d), (d = d.child);
                else {
                  if (d === l) break e;
                  for (; null === d.sibling; ) {
                    if (null === d.return || d.return === l) break e;
                    d = d.return;
                  }
                  (d.sibling.return = d.return), (d = d.sibling);
                }
              o
                ? ((c = n),
                  (l = i.stateNode),
                  8 === c.nodeType
                    ? c.parentNode.removeChild(l)
                    : c.removeChild(l))
                : n.removeChild(i.stateNode);
            } else if (18 === i.tag)
              o
                ? ((c = n),
                  (l = i.stateNode),
                  8 === c.nodeType
                    ? ao(c.parentNode, l)
                    : 1 === c.nodeType && ao(c, l),
                  Ft(c))
                : ao(n, i.stateNode);
            else if (4 === i.tag) {
              if (null !== i.child) {
                (n = i.stateNode.containerInfo),
                  (o = !0),
                  (i.child.return = i),
                  (i = i.child);
                continue;
              }
            } else if ((qs(e, i, r), null !== i.child)) {
              (i.child.return = i), (i = i.child);
              continue;
            }
            if (i === t) break;
            for (; null === i.sibling; ) {
              if (null === i.return || i.return === t) return;
              4 === (i = i.return).tag && (s = !1);
            }
            (i.sibling.return = i.return), (i = i.sibling);
          }
        }
        function ac(e, t) {
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              return Qs(3, t, t.return), Xs(3, t), void Qs(5, t, t.return);
            case 1:
            case 12:
            case 17:
              return;
            case 5:
              var r = t.stateNode;
              if (null != r) {
                var n = t.memoizedProps,
                  o = null !== e ? e.memoizedProps : n;
                e = t.type;
                var i = t.updateQueue;
                if (((t.updateQueue = null), null !== i)) {
                  for (
                    "input" === e &&
                      "radio" === n.type &&
                      null != n.name &&
                      q(r, n),
                      ke(e, o),
                      t = ke(e, n),
                      o = 0;
                    o < i.length;
                    o += 2
                  ) {
                    var s = i[o],
                      c = i[o + 1];
                    "style" === s
                      ? ve(r, c)
                      : "dangerouslySetInnerHTML" === s
                      ? de(r, c)
                      : "children" === s
                      ? fe(r, c)
                      : k(r, s, c, t);
                  }
                  switch (e) {
                    case "input":
                      $(r, n);
                      break;
                    case "textarea":
                      ae(r, n);
                      break;
                    case "select":
                      (e = r._wrapperState.wasMultiple),
                        (r._wrapperState.wasMultiple = !!n.multiple),
                        null != (i = n.value)
                          ? re(r, !!n.multiple, i, !1)
                          : e !== !!n.multiple &&
                            (null != n.defaultValue
                              ? re(r, !!n.multiple, n.defaultValue, !0)
                              : re(r, !!n.multiple, n.multiple ? [] : "", !1));
                  }
                  r[uo] = n;
                }
              }
              return;
            case 6:
              if (null === t.stateNode) throw Error(a(162));
              return void (t.stateNode.nodeValue = t.memoizedProps);
            case 3:
              return void (
                null !== e &&
                e.memoizedState.isDehydrated &&
                Ft(t.stateNode.containerInfo)
              );
            case 13:
            case 19:
              return void ic(t);
          }
          throw Error(a(163));
        }
        function ic(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var r = e.stateNode;
            null === r && (r = e.stateNode = new Vs()),
              t.forEach(function (t) {
                var n = gl.bind(null, e, t);
                r.has(t) || (r.add(t), t.then(n, n));
              });
          }
        }
        function sc(e, t, r) {
          (Js = e), cc(e, t, r);
        }
        function cc(e, t, r) {
          for (var n = 0 !== (1 & e.mode); null !== Js; ) {
            var o = Js,
              a = o.child;
            if (22 === o.tag && n) {
              var i = null !== o.memoizedState || Fs;
              if (!i) {
                var s = o.alternate,
                  c = (null !== s && null !== s.memoizedState) || Ks;
                s = Fs;
                var l = Ks;
                if (((Fs = i), (Ks = c) && !l))
                  for (Js = o; null !== Js; )
                    (c = (i = Js).child),
                      22 === i.tag && null !== i.memoizedState
                        ? dc(o)
                        : null !== c
                        ? ((c.return = i), (Js = c))
                        : dc(o);
                for (; null !== a; ) (Js = a), cc(a, t, r), (a = a.sibling);
                (Js = o), (Fs = s), (Ks = l);
              }
              lc(e);
            } else
              0 !== (8772 & o.subtreeFlags) && null !== a
                ? ((a.return = o), (Js = a))
                : lc(e);
          }
        }
        function lc(e) {
          for (; null !== Js; ) {
            var t = Js;
            if (0 !== (8772 & t.flags)) {
              var r = t.alternate;
              try {
                if (0 !== (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ks || Xs(5, t);
                      break;
                    case 1:
                      var n = t.stateNode;
                      if (4 & t.flags && !Ks)
                        if (null === r) n.componentDidMount();
                        else {
                          var o =
                            t.elementType === t.type
                              ? r.memoizedProps
                              : Ko(t.type, r.memoizedProps);
                          n.componentDidUpdate(
                            o,
                            r.memoizedState,
                            n.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      var i = t.updateQueue;
                      null !== i && sa(t, i, n);
                      break;
                    case 3:
                      var s = t.updateQueue;
                      if (null !== s) {
                        if (((r = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                            case 1:
                              r = t.child.stateNode;
                          }
                        sa(t, s, r);
                      }
                      break;
                    case 5:
                      var c = t.stateNode;
                      if (null === r && 4 & t.flags) {
                        r = c;
                        var l = t.memoizedProps;
                        switch (t.type) {
                          case "button":
                          case "input":
                          case "select":
                          case "textarea":
                            l.autoFocus && r.focus();
                            break;
                          case "img":
                            l.src && (r.src = l.src);
                        }
                      }
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                      break;
                    case 13:
                      if (null === t.memoizedState) {
                        var u = t.alternate;
                        if (null !== u) {
                          var d = u.memoizedState;
                          if (null !== d) {
                            var f = d.dehydrated;
                            null !== f && Ft(f);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(a(163));
                  }
                Ks || (512 & t.flags && Ys(t));
              } catch (p) {
                pl(t, t.return, p);
              }
            }
            if (t === e) {
              Js = null;
              break;
            }
            if (null !== (r = t.sibling)) {
              (r.return = t.return), (Js = r);
              break;
            }
            Js = t.return;
          }
        }
        function uc(e) {
          for (; null !== Js; ) {
            var t = Js;
            if (t === e) {
              Js = null;
              break;
            }
            var r = t.sibling;
            if (null !== r) {
              (r.return = t.return), (Js = r);
              break;
            }
            Js = t.return;
          }
        }
        function dc(e) {
          for (; null !== Js; ) {
            var t = Js;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var r = t.return;
                  try {
                    Xs(4, t);
                  } catch (c) {
                    pl(t, r, c);
                  }
                  break;
                case 1:
                  var n = t.stateNode;
                  if ("function" === typeof n.componentDidMount) {
                    var o = t.return;
                    try {
                      n.componentDidMount();
                    } catch (c) {
                      pl(t, o, c);
                    }
                  }
                  var a = t.return;
                  try {
                    Ys(t);
                  } catch (c) {
                    pl(t, a, c);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    Ys(t);
                  } catch (c) {
                    pl(t, i, c);
                  }
              }
            } catch (c) {
              pl(t, t.return, c);
            }
            if (t === e) {
              Js = null;
              break;
            }
            var s = t.sibling;
            if (null !== s) {
              (s.return = t.return), (Js = s);
              break;
            }
            Js = t.return;
          }
        }
        var fc,
          pc = Math.ceil,
          mc = b.ReactCurrentDispatcher,
          hc = b.ReactCurrentOwner,
          vc = b.ReactCurrentBatchConfig,
          gc = 0,
          yc = null,
          kc = null,
          bc = 0,
          wc = 0,
          Cc = Co(0),
          xc = 0,
          Pc = null,
          Sc = 0,
          Bc = 0,
          Ec = 0,
          Tc = null,
          Rc = null,
          jc = 0,
          Nc = 1 / 0,
          Oc = !1,
          _c = null,
          Mc = null,
          Lc = !1,
          Dc = null,
          Ic = 0,
          Ac = 0,
          Uc = null,
          zc = -1,
          Fc = 0;
        function Kc() {
          return 0 !== (6 & gc) ? qe() : -1 !== zc ? zc : (zc = qe());
        }
        function Vc(e) {
          return 0 === (1 & e.mode)
            ? 1
            : 0 !== (2 & gc) && 0 !== bc
            ? bc & -bc
            : null !== Fo.transition
            ? (0 === Fc &&
                ((e = lt), 0 === (4194240 & (lt <<= 1)) && (lt = 64), (Fc = e)),
              Fc)
            : 0 !== (e = yt)
            ? e
            : (e = void 0 === (e = window.event) ? 16 : Qt(e.type));
        }
        function Jc(e, t, r) {
          if (50 < Ac) throw ((Ac = 0), (Uc = null), Error(a(185)));
          var n = Hc(e, t);
          return null === n
            ? null
            : (vt(n, t, r),
              (0 !== (2 & gc) && n === yc) ||
                (n === yc &&
                  (0 === (2 & gc) && (Bc |= t), 4 === xc && Yc(n, bc)),
                Wc(n, r),
                1 === t &&
                  0 === gc &&
                  0 === (1 & e.mode) &&
                  ((Nc = qe() + 500), Io && zo())),
              n);
        }
        function Hc(e, t) {
          e.lanes |= t;
          var r = e.alternate;
          for (null !== r && (r.lanes |= t), r = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (r = e.alternate) && (r.childLanes |= t),
              (r = e),
              (e = e.return);
          return 3 === r.tag ? r.stateNode : null;
        }
        function Wc(e, t) {
          var r = e.callbackNode;
          !(function (e, t) {
            for (
              var r = e.suspendedLanes,
                n = e.pingedLanes,
                o = e.expirationTimes,
                a = e.pendingLanes;
              0 < a;

            ) {
              var i = 31 - it(a),
                s = 1 << i,
                c = o[i];
              -1 === c
                ? (0 !== (s & r) && 0 === (s & n)) || (o[i] = pt(s, t))
                : c <= t && (e.expiredLanes |= s),
                (a &= ~s);
            }
          })(e, t);
          var n = ft(e, e === yc ? bc : 0);
          if (0 === n)
            null !== r && Qe(r),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = n & -n), e.callbackPriority !== t)) {
            if ((null != r && Qe(r), 1 === t))
              0 === e.tag
                ? (function (e) {
                    (Io = !0), Uo(e);
                  })(qc.bind(null, e))
                : Uo(qc.bind(null, e)),
                no(function () {
                  0 === gc && zo();
                }),
                (r = null);
            else {
              switch (kt(n)) {
                case 1:
                  r = Ze;
                  break;
                case 4:
                  r = et;
                  break;
                case 16:
                default:
                  r = tt;
                  break;
                case 536870912:
                  r = nt;
              }
              r = yl(r, Gc.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = r);
          }
        }
        function Gc(e, t) {
          if (((zc = -1), (Fc = 0), 0 !== (6 & gc))) throw Error(a(327));
          var r = e.callbackNode;
          if (dl() && e.callbackNode !== r) return null;
          var n = ft(e, e === yc ? bc : 0);
          if (0 === n) return null;
          if (0 !== (30 & n) || 0 !== (n & e.expiredLanes) || t) t = al(e, n);
          else {
            t = n;
            var o = gc;
            gc |= 2;
            var i = nl();
            for ((yc === e && bc === t) || ((Nc = qe() + 500), tl(e, t)); ; )
              try {
                sl();
                break;
              } catch (c) {
                rl(e, c);
              }
            Go(),
              (mc.current = i),
              (gc = o),
              null !== kc ? (t = 0) : ((yc = null), (bc = 0), (t = xc));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (o = mt(e)) && ((n = o), (t = Qc(e, o))),
              1 === t)
            )
              throw ((r = Pc), tl(e, 0), Yc(e, n), Wc(e, qe()), r);
            if (6 === t) Yc(e, n);
            else {
              if (
                ((o = e.current.alternate),
                0 === (30 & n) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var r = t.updateQueue;
                        if (null !== r && null !== (r = r.stores))
                          for (var n = 0; n < r.length; n++) {
                            var o = r[n],
                              a = o.getSnapshot;
                            o = o.value;
                            try {
                              if (!on(a(), o)) return !1;
                            } catch (s) {
                              return !1;
                            }
                          }
                      }
                      if (((r = t.child), 16384 & t.subtreeFlags && null !== r))
                        (r.return = t), (t = r);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(o) &&
                  (2 === (t = al(e, n)) &&
                    0 !== (i = mt(e)) &&
                    ((n = i), (t = Qc(e, i))),
                  1 === t))
              )
                throw ((r = Pc), tl(e, 0), Yc(e, n), Wc(e, qe()), r);
              switch (((e.finishedWork = o), (e.finishedLanes = n), t)) {
                case 0:
                case 1:
                  throw Error(a(345));
                case 2:
                case 5:
                  ul(e, Rc);
                  break;
                case 3:
                  if (
                    (Yc(e, n),
                    (130023424 & n) === n && 10 < (t = jc + 500 - qe()))
                  ) {
                    if (0 !== ft(e, 0)) break;
                    if (((o = e.suspendedLanes) & n) !== n) {
                      Kc(), (e.pingedLanes |= e.suspendedLanes & o);
                      break;
                    }
                    e.timeoutHandle = eo(ul.bind(null, e, Rc), t);
                    break;
                  }
                  ul(e, Rc);
                  break;
                case 4:
                  if ((Yc(e, n), (4194240 & n) === n)) break;
                  for (t = e.eventTimes, o = -1; 0 < n; ) {
                    var s = 31 - it(n);
                    (i = 1 << s), (s = t[s]) > o && (o = s), (n &= ~i);
                  }
                  if (
                    ((n = o),
                    10 <
                      (n =
                        (120 > (n = qe() - n)
                          ? 120
                          : 480 > n
                          ? 480
                          : 1080 > n
                          ? 1080
                          : 1920 > n
                          ? 1920
                          : 3e3 > n
                          ? 3e3
                          : 4320 > n
                          ? 4320
                          : 1960 * pc(n / 1960)) - n))
                  ) {
                    e.timeoutHandle = eo(ul.bind(null, e, Rc), n);
                    break;
                  }
                  ul(e, Rc);
                  break;
                default:
                  throw Error(a(329));
              }
            }
          }
          return Wc(e, qe()), e.callbackNode === r ? Gc.bind(null, e) : null;
        }
        function Qc(e, t) {
          var r = Tc;
          return (
            e.current.memoizedState.isDehydrated && (tl(e, t).flags |= 256),
            2 !== (e = al(e, t)) && ((t = Rc), (Rc = r), null !== t && Xc(t)),
            e
          );
        }
        function Xc(e) {
          null === Rc ? (Rc = e) : Rc.push.apply(Rc, e);
        }
        function Yc(e, t) {
          for (
            t &= ~Ec,
              t &= ~Bc,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var r = 31 - it(t),
              n = 1 << r;
            (e[r] = -1), (t &= ~n);
          }
        }
        function qc(e) {
          if (0 !== (6 & gc)) throw Error(a(327));
          dl();
          var t = ft(e, 0);
          if (0 === (1 & t)) return Wc(e, qe()), null;
          var r = al(e, t);
          if (0 !== e.tag && 2 === r) {
            var n = mt(e);
            0 !== n && ((t = n), (r = Qc(e, n)));
          }
          if (1 === r) throw ((r = Pc), tl(e, 0), Yc(e, t), Wc(e, qe()), r);
          if (6 === r) throw Error(a(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            ul(e, Rc),
            Wc(e, qe()),
            null
          );
        }
        function $c(e, t) {
          var r = gc;
          gc |= 1;
          try {
            return e(t);
          } finally {
            0 === (gc = r) && ((Nc = qe() + 500), Io && zo());
          }
        }
        function Zc(e) {
          null !== Dc && 0 === Dc.tag && 0 === (6 & gc) && dl();
          var t = gc;
          gc |= 1;
          var r = vc.transition,
            n = yt;
          try {
            if (((vc.transition = null), (yt = 1), e)) return e();
          } finally {
            (yt = n), (vc.transition = r), 0 === (6 & (gc = t)) && zo();
          }
        }
        function el() {
          (wc = Cc.current), xo(Cc);
        }
        function tl(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var r = e.timeoutHandle;
          if ((-1 !== r && ((e.timeoutHandle = -1), to(r)), null !== kc))
            for (r = kc.return; null !== r; ) {
              var n = r;
              switch ((Ea(n), n.tag)) {
                case 1:
                  null !== (n = n.type.childContextTypes) &&
                    void 0 !== n &&
                    No();
                  break;
                case 3:
                  $a(), xo(Eo), xo(Bo), oi();
                  break;
                case 5:
                  ei(n);
                  break;
                case 4:
                  $a();
                  break;
                case 13:
                case 19:
                  xo(ti);
                  break;
                case 10:
                  Qo(n.type._context);
                  break;
                case 22:
                case 23:
                  el();
              }
              r = r.return;
            }
          if (
            ((yc = e),
            (kc = e = Cl(e.current, null)),
            (bc = wc = t),
            (xc = 0),
            (Pc = null),
            (Ec = Bc = Sc = 0),
            (Rc = Tc = null),
            null !== $o)
          ) {
            for (t = 0; t < $o.length; t++)
              if (null !== (n = (r = $o[t]).interleaved)) {
                r.interleaved = null;
                var o = n.next,
                  a = r.pending;
                if (null !== a) {
                  var i = a.next;
                  (a.next = o), (n.next = i);
                }
                r.pending = n;
              }
            $o = null;
          }
          return e;
        }
        function rl(e, t) {
          for (;;) {
            var r = kc;
            try {
              if ((Go(), (ai.current = $i), di)) {
                for (var n = ci.memoizedState; null !== n; ) {
                  var o = n.queue;
                  null !== o && (o.pending = null), (n = n.next);
                }
                di = !1;
              }
              if (
                ((si = 0),
                (ui = li = ci = null),
                (fi = !1),
                (pi = 0),
                (hc.current = null),
                null === r || null === r.return)
              ) {
                (xc = 1), (Pc = t), (kc = null);
                break;
              }
              e: {
                var i = e,
                  s = r.return,
                  c = r,
                  l = t;
                if (
                  ((t = bc),
                  (c.flags |= 32768),
                  null !== l &&
                    "object" === typeof l &&
                    "function" === typeof l.then)
                ) {
                  var u = l,
                    d = c,
                    f = d.tag;
                  if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                    var p = d.alternate;
                    p
                      ? ((d.updateQueue = p.updateQueue),
                        (d.memoizedState = p.memoizedState),
                        (d.lanes = p.lanes))
                      : ((d.updateQueue = null), (d.memoizedState = null));
                  }
                  var m = ds(s);
                  if (null !== m) {
                    (m.flags &= -257),
                      fs(m, s, c, 0, t),
                      1 & m.mode && us(i, u, t),
                      (l = u);
                    var h = (t = m).updateQueue;
                    if (null === h) {
                      var v = new Set();
                      v.add(l), (t.updateQueue = v);
                    } else h.add(l);
                    break e;
                  }
                  if (0 === (1 & t)) {
                    us(i, u, t), ol();
                    break e;
                  }
                  l = Error(a(426));
                } else if (ja && 1 & c.mode) {
                  var g = ds(s);
                  if (null !== g) {
                    0 === (65536 & g.flags) && (g.flags |= 256),
                      fs(g, s, c, 0, t),
                      Ua(l);
                    break e;
                  }
                }
                (i = l),
                  4 !== xc && (xc = 2),
                  null === Tc ? (Tc = [i]) : Tc.push(i),
                  (l = rs(l, c)),
                  (c = s);
                do {
                  switch (c.tag) {
                    case 3:
                      (c.flags |= 65536),
                        (t &= -t),
                        (c.lanes |= t),
                        aa(c, cs(0, l, t));
                      break e;
                    case 1:
                      i = l;
                      var y = c.type,
                        k = c.stateNode;
                      if (
                        0 === (128 & c.flags) &&
                        ("function" === typeof y.getDerivedStateFromError ||
                          (null !== k &&
                            "function" === typeof k.componentDidCatch &&
                            (null === Mc || !Mc.has(k))))
                      ) {
                        (c.flags |= 65536),
                          (t &= -t),
                          (c.lanes |= t),
                          aa(c, ls(c, i, t));
                        break e;
                      }
                  }
                  c = c.return;
                } while (null !== c);
              }
              ll(r);
            } catch (b) {
              (t = b), kc === r && null !== r && (kc = r = r.return);
              continue;
            }
            break;
          }
        }
        function nl() {
          var e = mc.current;
          return (mc.current = $i), null === e ? $i : e;
        }
        function ol() {
          (0 !== xc && 3 !== xc && 2 !== xc) || (xc = 4),
            null === yc ||
              (0 === (268435455 & Sc) && 0 === (268435455 & Bc)) ||
              Yc(yc, bc);
        }
        function al(e, t) {
          var r = gc;
          gc |= 2;
          var n = nl();
          for ((yc === e && bc === t) || tl(e, t); ; )
            try {
              il();
              break;
            } catch (o) {
              rl(e, o);
            }
          if ((Go(), (gc = r), (mc.current = n), null !== kc))
            throw Error(a(261));
          return (yc = null), (bc = 0), xc;
        }
        function il() {
          for (; null !== kc; ) cl(kc);
        }
        function sl() {
          for (; null !== kc && !Xe(); ) cl(kc);
        }
        function cl(e) {
          var t = fc(e.alternate, e, wc);
          (e.memoizedProps = e.pendingProps),
            null === t ? ll(e) : (kc = t),
            (hc.current = null);
        }
        function ll(e) {
          var t = e;
          do {
            var r = t.alternate;
            if (((e = t.return), 0 === (32768 & t.flags))) {
              if (null !== (r = hs(r, t, wc))) return void (kc = r);
            } else {
              if (null !== (r = zs(r, t)))
                return (r.flags &= 32767), void (kc = r);
              if (null === e) return (xc = 6), void (kc = null);
              (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            }
            if (null !== (t = t.sibling)) return void (kc = t);
            kc = t = e;
          } while (null !== t);
          0 === xc && (xc = 5);
        }
        function ul(e, t) {
          var r = yt,
            n = vc.transition;
          try {
            (vc.transition = null),
              (yt = 1),
              (function (e, t, r) {
                do {
                  dl();
                } while (null !== Dc);
                if (0 !== (6 & gc)) throw Error(a(327));
                var n = e.finishedWork,
                  o = e.finishedLanes;
                if (null === n) return null;
                if (
                  ((e.finishedWork = null),
                  (e.finishedLanes = 0),
                  n === e.current)
                )
                  throw Error(a(177));
                (e.callbackNode = null), (e.callbackPriority = 0);
                var i = n.lanes | n.childLanes;
                if (
                  ((function (e, t) {
                    var r = e.pendingLanes & ~t;
                    (e.pendingLanes = t),
                      (e.suspendedLanes = 0),
                      (e.pingedLanes = 0),
                      (e.expiredLanes &= t),
                      (e.mutableReadLanes &= t),
                      (e.entangledLanes &= t),
                      (t = e.entanglements);
                    var n = e.eventTimes;
                    for (e = e.expirationTimes; 0 < r; ) {
                      var o = 31 - it(r),
                        a = 1 << o;
                      (t[o] = 0), (n[o] = -1), (e[o] = -1), (r &= ~a);
                    }
                  })(e, i),
                  e === yc && ((kc = yc = null), (bc = 0)),
                  (0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags)) ||
                    Lc ||
                    ((Lc = !0),
                    yl(tt, function () {
                      return dl(), null;
                    })),
                  (i = 0 !== (15990 & n.flags)),
                  0 !== (15990 & n.subtreeFlags) || i)
                ) {
                  (i = vc.transition), (vc.transition = null);
                  var s = yt;
                  yt = 1;
                  var c = gc;
                  (gc |= 4),
                    (hc.current = null),
                    (function (e, t) {
                      if (dn((e = un()))) {
                        if ("selectionStart" in e)
                          var r = {
                            start: e.selectionStart,
                            end: e.selectionEnd,
                          };
                        else
                          e: {
                            var n =
                              (r =
                                ((r = e.ownerDocument) && r.defaultView) ||
                                window).getSelection && r.getSelection();
                            if (n && 0 !== n.rangeCount) {
                              r = n.anchorNode;
                              var o = n.anchorOffset,
                                i = n.focusNode;
                              n = n.focusOffset;
                              try {
                                r.nodeType, i.nodeType;
                              } catch (C) {
                                r = null;
                                break e;
                              }
                              var s = 0,
                                c = -1,
                                l = -1,
                                u = 0,
                                d = 0,
                                f = e,
                                p = null;
                              t: for (;;) {
                                for (
                                  var m;
                                  f !== r ||
                                    (0 !== o && 3 !== f.nodeType) ||
                                    (c = s + o),
                                    f !== i ||
                                      (0 !== n && 3 !== f.nodeType) ||
                                      (l = s + n),
                                    3 === f.nodeType &&
                                      (s += f.nodeValue.length),
                                    null !== (m = f.firstChild);

                                )
                                  (p = f), (f = m);
                                for (;;) {
                                  if (f === e) break t;
                                  if (
                                    (p === r && ++u === o && (c = s),
                                    p === i && ++d === n && (l = s),
                                    null !== (m = f.nextSibling))
                                  )
                                    break;
                                  p = (f = p).parentNode;
                                }
                                f = m;
                              }
                              r =
                                -1 === c || -1 === l
                                  ? null
                                  : { start: c, end: l };
                            } else r = null;
                          }
                        r = r || { start: 0, end: 0 };
                      } else r = null;
                      for (
                        $n = { focusedElem: e, selectionRange: r }, Js = t;
                        null !== Js;

                      )
                        if (
                          ((e = (t = Js).child),
                          0 !== (1028 & t.subtreeFlags) && null !== e)
                        )
                          (e.return = t), (Js = e);
                        else
                          for (; null !== Js; ) {
                            t = Js;
                            try {
                              var h = t.alternate;
                              if (0 !== (1024 & t.flags))
                                switch (t.tag) {
                                  case 0:
                                  case 11:
                                  case 15:
                                  case 5:
                                  case 6:
                                  case 4:
                                  case 17:
                                    break;
                                  case 1:
                                    if (null !== h) {
                                      var v = h.memoizedProps,
                                        g = h.memoizedState,
                                        y = t.stateNode,
                                        k = y.getSnapshotBeforeUpdate(
                                          t.elementType === t.type
                                            ? v
                                            : Ko(t.type, v),
                                          g
                                        );
                                      y.__reactInternalSnapshotBeforeUpdate = k;
                                    }
                                    break;
                                  case 3:
                                    var b = t.stateNode.containerInfo;
                                    if (1 === b.nodeType) b.textContent = "";
                                    else if (9 === b.nodeType) {
                                      var w = b.body;
                                      null != w && (w.textContent = "");
                                    }
                                    break;
                                  default:
                                    throw Error(a(163));
                                }
                            } catch (C) {
                              pl(t, t.return, C);
                            }
                            if (null !== (e = t.sibling)) {
                              (e.return = t.return), (Js = e);
                              break;
                            }
                            Js = t.return;
                          }
                      (h = Gs), (Gs = !1);
                    })(e, n),
                    (function (e, t) {
                      for (Js = t; null !== Js; ) {
                        var r = (t = Js).deletions;
                        if (null !== r)
                          for (var n = 0; n < r.length; n++) {
                            var o = r[n];
                            try {
                              oc(e, o, t);
                              var a = o.alternate;
                              null !== a && (a.return = null),
                                (o.return = null);
                            } catch (P) {
                              pl(o, t, P);
                            }
                          }
                        if (
                          ((r = t.child),
                          0 !== (12854 & t.subtreeFlags) && null !== r)
                        )
                          (r.return = t), (Js = r);
                        else
                          for (; null !== Js; ) {
                            t = Js;
                            try {
                              var i = t.flags;
                              if ((32 & i && fe(t.stateNode, ""), 512 & i)) {
                                var s = t.alternate;
                                if (null !== s) {
                                  var c = s.ref;
                                  null !== c &&
                                    ("function" === typeof c
                                      ? c(null)
                                      : (c.current = null));
                                }
                              }
                              if (8192 & i)
                                switch (t.tag) {
                                  case 13:
                                    if (null !== t.memoizedState) {
                                      var l = t.alternate;
                                      (null !== l &&
                                        null !== l.memoizedState) ||
                                        (jc = qe());
                                    }
                                    break;
                                  case 22:
                                    var u = null !== t.memoizedState,
                                      d = t.alternate,
                                      f =
                                        null !== d && null !== d.memoizedState;
                                    e: {
                                      o = u;
                                      for (var p = null, m = (n = r = t); ; ) {
                                        if (5 === m.tag) {
                                          if (null === p) {
                                            p = m;
                                            var h = m.stateNode;
                                            if (o) {
                                              var v = h.style;
                                              "function" ===
                                              typeof v.setProperty
                                                ? v.setProperty(
                                                    "display",
                                                    "none",
                                                    "important"
                                                  )
                                                : (v.display = "none");
                                            } else {
                                              var g = m.stateNode,
                                                y = m.memoizedProps.style,
                                                k =
                                                  void 0 !== y &&
                                                  null !== y &&
                                                  y.hasOwnProperty("display")
                                                    ? y.display
                                                    : null;
                                              g.style.display = he(
                                                "display",
                                                k
                                              );
                                            }
                                          }
                                        } else if (6 === m.tag)
                                          null === p &&
                                            (m.stateNode.nodeValue = o
                                              ? ""
                                              : m.memoizedProps);
                                        else if (
                                          ((22 !== m.tag && 23 !== m.tag) ||
                                            null === m.memoizedState ||
                                            m === n) &&
                                          null !== m.child
                                        ) {
                                          (m.child.return = m), (m = m.child);
                                          continue;
                                        }
                                        if (m === n) break;
                                        for (; null === m.sibling; ) {
                                          if (
                                            null === m.return ||
                                            m.return === n
                                          )
                                            break e;
                                          p === m && (p = null), (m = m.return);
                                        }
                                        p === m && (p = null),
                                          (m.sibling.return = m.return),
                                          (m = m.sibling);
                                      }
                                    }
                                    if (u && !f && 0 !== (1 & r.mode)) {
                                      Js = r;
                                      for (var b = r.child; null !== b; ) {
                                        for (r = Js = b; null !== Js; ) {
                                          var w = (n = Js).child;
                                          switch (n.tag) {
                                            case 0:
                                            case 11:
                                            case 14:
                                            case 15:
                                              Qs(4, n, n.return);
                                              break;
                                            case 1:
                                              Hs(n, n.return);
                                              var C = n.stateNode;
                                              if (
                                                "function" ===
                                                typeof C.componentWillUnmount
                                              ) {
                                                var x = n.return;
                                                try {
                                                  (C.props = n.memoizedProps),
                                                    (C.state = n.memoizedState),
                                                    C.componentWillUnmount();
                                                } catch (P) {
                                                  pl(n, x, P);
                                                }
                                              }
                                              break;
                                            case 5:
                                              Hs(n, n.return);
                                              break;
                                            case 22:
                                              if (null !== n.memoizedState) {
                                                uc(r);
                                                continue;
                                              }
                                          }
                                          null !== w
                                            ? ((w.return = n), (Js = w))
                                            : uc(r);
                                        }
                                        b = b.sibling;
                                      }
                                    }
                                }
                              switch (4102 & i) {
                                case 2:
                                  tc(t), (t.flags &= -3);
                                  break;
                                case 6:
                                  tc(t), (t.flags &= -3), ac(t.alternate, t);
                                  break;
                                case 4096:
                                  t.flags &= -4097;
                                  break;
                                case 4100:
                                  (t.flags &= -4097), ac(t.alternate, t);
                                  break;
                                case 4:
                                  ac(t.alternate, t);
                              }
                            } catch (P) {
                              pl(t, t.return, P);
                            }
                            if (null !== (r = t.sibling)) {
                              (r.return = t.return), (Js = r);
                              break;
                            }
                            Js = t.return;
                          }
                      }
                    })(e, n),
                    fn($n),
                    ($n = null),
                    (e.current = n),
                    sc(n, e, o),
                    Ye(),
                    (gc = c),
                    (yt = s),
                    (vc.transition = i);
                } else e.current = n;
                if (
                  (Lc && ((Lc = !1), (Dc = e), (Ic = o)),
                  0 === (i = e.pendingLanes) && (Mc = null),
                  (function (e) {
                    if (at && "function" === typeof at.onCommitFiberRoot)
                      try {
                        at.onCommitFiberRoot(
                          ot,
                          e,
                          void 0,
                          128 === (128 & e.current.flags)
                        );
                      } catch (t) {}
                  })(n.stateNode),
                  Wc(e, qe()),
                  null !== t)
                )
                  for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                    r(t[n]);
                if (Oc) throw ((Oc = !1), (e = _c), (_c = null), e);
                0 !== (1 & Ic) && 0 !== e.tag && dl(),
                  0 !== (1 & (i = e.pendingLanes))
                    ? e === Uc
                      ? Ac++
                      : ((Ac = 0), (Uc = e))
                    : (Ac = 0),
                  zo();
              })(e, t, r);
          } finally {
            (vc.transition = n), (yt = r);
          }
          return null;
        }
        function dl() {
          if (null !== Dc) {
            var e = kt(Ic),
              t = vc.transition,
              r = yt;
            try {
              if (((vc.transition = null), (yt = 16 > e ? 16 : e), null === Dc))
                var n = !1;
              else {
                if (((e = Dc), (Dc = null), (Ic = 0), 0 !== (6 & gc)))
                  throw Error(a(331));
                var o = gc;
                for (gc |= 4, Js = e.current; null !== Js; ) {
                  var i = Js,
                    s = i.child;
                  if (0 !== (16 & Js.flags)) {
                    var c = i.deletions;
                    if (null !== c) {
                      for (var l = 0; l < c.length; l++) {
                        var u = c[l];
                        for (Js = u; null !== Js; ) {
                          var d = Js;
                          switch (d.tag) {
                            case 0:
                            case 11:
                            case 15:
                              Qs(8, d, i);
                          }
                          var f = d.child;
                          if (null !== f) (f.return = d), (Js = f);
                          else
                            for (; null !== Js; ) {
                              var p = (d = Js).sibling,
                                m = d.return;
                              if (($s(d), d === u)) {
                                Js = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = m), (Js = p);
                                break;
                              }
                              Js = m;
                            }
                        }
                      }
                      var h = i.alternate;
                      if (null !== h) {
                        var v = h.child;
                        if (null !== v) {
                          h.child = null;
                          do {
                            var g = v.sibling;
                            (v.sibling = null), (v = g);
                          } while (null !== v);
                        }
                      }
                      Js = i;
                    }
                  }
                  if (0 !== (2064 & i.subtreeFlags) && null !== s)
                    (s.return = i), (Js = s);
                  else
                    e: for (; null !== Js; ) {
                      if (0 !== (2048 & (i = Js).flags))
                        switch (i.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Qs(9, i, i.return);
                        }
                      var y = i.sibling;
                      if (null !== y) {
                        (y.return = i.return), (Js = y);
                        break e;
                      }
                      Js = i.return;
                    }
                }
                var k = e.current;
                for (Js = k; null !== Js; ) {
                  var b = (s = Js).child;
                  if (0 !== (2064 & s.subtreeFlags) && null !== b)
                    (b.return = s), (Js = b);
                  else
                    e: for (s = k; null !== Js; ) {
                      if (0 !== (2048 & (c = Js).flags))
                        try {
                          switch (c.tag) {
                            case 0:
                            case 11:
                            case 15:
                              Xs(9, c);
                          }
                        } catch (C) {
                          pl(c, c.return, C);
                        }
                      if (c === s) {
                        Js = null;
                        break e;
                      }
                      var w = c.sibling;
                      if (null !== w) {
                        (w.return = c.return), (Js = w);
                        break e;
                      }
                      Js = c.return;
                    }
                }
                if (
                  ((gc = o),
                  zo(),
                  at && "function" === typeof at.onPostCommitFiberRoot)
                )
                  try {
                    at.onPostCommitFiberRoot(ot, e);
                  } catch (C) {}
                n = !0;
              }
              return n;
            } finally {
              (yt = r), (vc.transition = t);
            }
          }
          return !1;
        }
        function fl(e, t, r) {
          na(e, (t = cs(0, (t = rs(r, t)), 1))),
            (t = Kc()),
            null !== (e = Hc(e, 1)) && (vt(e, 1, t), Wc(e, t));
        }
        function pl(e, t, r) {
          if (3 === e.tag) fl(e, e, r);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                fl(t, e, r);
                break;
              }
              if (1 === t.tag) {
                var n = t.stateNode;
                if (
                  "function" === typeof t.type.getDerivedStateFromError ||
                  ("function" === typeof n.componentDidCatch &&
                    (null === Mc || !Mc.has(n)))
                ) {
                  na(t, (e = ls(t, (e = rs(r, e)), 1))),
                    (e = Kc()),
                    null !== (t = Hc(t, 1)) && (vt(t, 1, e), Wc(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function ml(e, t, r) {
          var n = e.pingCache;
          null !== n && n.delete(t),
            (t = Kc()),
            (e.pingedLanes |= e.suspendedLanes & r),
            yc === e &&
              (bc & r) === r &&
              (4 === xc ||
              (3 === xc && (130023424 & bc) === bc && 500 > qe() - jc)
                ? tl(e, 0)
                : (Ec |= r)),
            Wc(e, t);
        }
        function hl(e, t) {
          0 === t &&
            (0 === (1 & e.mode)
              ? (t = 1)
              : ((t = ut), 0 === (130023424 & (ut <<= 1)) && (ut = 4194304)));
          var r = Kc();
          null !== (e = Hc(e, t)) && (vt(e, t, r), Wc(e, r));
        }
        function vl(e) {
          var t = e.memoizedState,
            r = 0;
          null !== t && (r = t.retryLane), hl(e, r);
        }
        function gl(e, t) {
          var r = 0;
          switch (e.tag) {
            case 13:
              var n = e.stateNode,
                o = e.memoizedState;
              null !== o && (r = o.retryLane);
              break;
            case 19:
              n = e.stateNode;
              break;
            default:
              throw Error(a(314));
          }
          null !== n && n.delete(t), hl(e, r);
        }
        function yl(e, t) {
          return Ge(e, t);
        }
        function kl(e, t, r, n) {
          (this.tag = e),
            (this.key = r),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = n),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null);
        }
        function bl(e, t, r, n) {
          return new kl(e, t, r, n);
        }
        function wl(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Cl(e, t) {
          var r = e.alternate;
          return (
            null === r
              ? (((r = bl(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (r.type = e.type),
                (r.stateNode = e.stateNode),
                (r.alternate = e),
                (e.alternate = r))
              : ((r.pendingProps = t),
                (r.type = e.type),
                (r.flags = 0),
                (r.subtreeFlags = 0),
                (r.deletions = null)),
            (r.flags = 14680064 & e.flags),
            (r.childLanes = e.childLanes),
            (r.lanes = e.lanes),
            (r.child = e.child),
            (r.memoizedProps = e.memoizedProps),
            (r.memoizedState = e.memoizedState),
            (r.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (r.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (r.sibling = e.sibling),
            (r.index = e.index),
            (r.ref = e.ref),
            r
          );
        }
        function xl(e, t, r, n, o, i) {
          var s = 2;
          if (((n = e), "function" === typeof e)) wl(e) && (s = 1);
          else if ("string" === typeof e) s = 5;
          else
            e: switch (e) {
              case x:
                return Pl(r.children, o, i, t);
              case P:
                (s = 8), (o |= 8);
                break;
              case S:
                return (
                  ((e = bl(12, r, t, 2 | o)).elementType = S), (e.lanes = i), e
                );
              case R:
                return (
                  ((e = bl(13, r, t, o)).elementType = R), (e.lanes = i), e
                );
              case j:
                return (
                  ((e = bl(19, r, t, o)).elementType = j), (e.lanes = i), e
                );
              case _:
                return Sl(r, o, i, t);
              default:
                if ("object" === typeof e && null !== e)
                  switch (e.$$typeof) {
                    case B:
                      s = 10;
                      break e;
                    case E:
                      s = 9;
                      break e;
                    case T:
                      s = 11;
                      break e;
                    case N:
                      s = 14;
                      break e;
                    case O:
                      (s = 16), (n = null);
                      break e;
                  }
                throw Error(a(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = bl(s, r, t, o)).elementType = e),
            (t.type = n),
            (t.lanes = i),
            t
          );
        }
        function Pl(e, t, r, n) {
          return ((e = bl(7, e, n, t)).lanes = r), e;
        }
        function Sl(e, t, r, n) {
          return (
            ((e = bl(22, e, n, t)).elementType = _),
            (e.lanes = r),
            (e.stateNode = {}),
            e
          );
        }
        function Bl(e, t, r) {
          return ((e = bl(6, e, null, t)).lanes = r), e;
        }
        function El(e, t, r) {
          return (
            ((t = bl(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = r),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function Tl(e, t, r, n, o) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = -1),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = ht(0)),
            (this.expirationTimes = ht(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = ht(0)),
            (this.identifierPrefix = n),
            (this.onRecoverableError = o),
            (this.mutableSourceEagerHydrationData = null);
        }
        function Rl(e, t, r, n, o, a, i, s, c) {
          return (
            (e = new Tl(e, t, r, s, c)),
            1 === t ? ((t = 1), !0 === a && (t |= 8)) : (t = 0),
            (a = bl(3, null, null, t)),
            (e.current = a),
            (a.stateNode = e),
            (a.memoizedState = {
              element: n,
              isDehydrated: r,
              cache: null,
              transitions: null,
            }),
            ea(a),
            e
          );
        }
        function jl(e, t, r) {
          var n =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: C,
            key: null == n ? null : "" + n,
            children: e,
            containerInfo: t,
            implementation: r,
          };
        }
        function Nl(e) {
          if (!e) return So;
          e: {
            if (Ke((e = e._reactInternals)) !== e || 1 !== e.tag)
              throw Error(a(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (jo(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(a(171));
          }
          if (1 === e.tag) {
            var r = e.type;
            if (jo(r)) return _o(e, r, t);
          }
          return t;
        }
        function Ol(e, t, r, n, o, a, i, s, c) {
          return (
            ((e = Rl(r, n, !0, e, 0, a, 0, s, c)).context = Nl(null)),
            (r = e.current),
            ((a = ra((n = Kc()), (o = Vc(r)))).callback =
              void 0 !== t && null !== t ? t : null),
            na(r, a),
            (e.current.lanes = o),
            vt(e, o, n),
            Wc(e, n),
            e
          );
        }
        function _l(e, t, r, n) {
          var o = t.current,
            a = Kc(),
            i = Vc(o);
          return (
            (r = Nl(r)),
            null === t.context ? (t.context = r) : (t.pendingContext = r),
            ((t = ra(a, i)).payload = { element: e }),
            null !== (n = void 0 === n ? null : n) && (t.callback = n),
            na(o, t),
            null !== (e = Jc(o, i, a)) && oa(e, o, i),
            i
          );
        }
        function Ml(e) {
          return (e = e.current).child
            ? (e.child.tag, e.child.stateNode)
            : null;
        }
        function Ll(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var r = e.retryLane;
            e.retryLane = 0 !== r && r < t ? r : t;
          }
        }
        function Dl(e, t) {
          Ll(e, t), (e = e.alternate) && Ll(e, t);
        }
        fc = function (e, t, r) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps || Eo.current) gs = !0;
            else {
              if (0 === (e.lanes & r) && 0 === (128 & t.flags))
                return (
                  (gs = !1),
                  (function (e, t, r) {
                    switch (t.tag) {
                      case 3:
                        Es(t), Aa();
                        break;
                      case 5:
                        Za(t);
                        break;
                      case 1:
                        jo(t.type) && Mo(t);
                        break;
                      case 4:
                        qa(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        var n = t.type._context,
                          o = t.memoizedProps.value;
                        Po(Vo, n._currentValue), (n._currentValue = o);
                        break;
                      case 13:
                        if (null !== (n = t.memoizedState))
                          return null !== n.dehydrated
                            ? (Po(ti, 1 & ti.current), (t.flags |= 128), null)
                            : 0 !== (r & t.child.childLanes)
                            ? Ns(e, t, r)
                            : (Po(ti, 1 & ti.current),
                              null !== (e = Us(e, t, r)) ? e.sibling : null);
                        Po(ti, 1 & ti.current);
                        break;
                      case 19:
                        if (
                          ((n = 0 !== (r & t.childLanes)),
                          0 !== (128 & e.flags))
                        ) {
                          if (n) return As(e, t, r);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (o = t.memoizedState) &&
                            ((o.rendering = null),
                            (o.tail = null),
                            (o.lastEffect = null)),
                          Po(ti, ti.current),
                          n)
                        )
                          break;
                        return null;
                      case 22:
                      case 23:
                        return (t.lanes = 0), Cs(e, t, r);
                    }
                    return Us(e, t, r);
                  })(e, t, r)
                );
              gs = 0 !== (131072 & e.flags);
            }
          else (gs = !1), ja && 0 !== (1048576 & t.flags) && Sa(t, ya, t.index);
          switch (((t.lanes = 0), t.tag)) {
            case 2:
              var n = t.type;
              null !== e &&
                ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps);
              var o = Ro(t, Bo.current);
              Yo(t, r), (o = gi(null, t, n, e, o, r));
              var i = yi();
              return (
                (t.flags |= 1),
                "object" === typeof o &&
                null !== o &&
                "function" === typeof o.render &&
                void 0 === o.$$typeof
                  ? ((t.tag = 1),
                    (t.memoizedState = null),
                    (t.updateQueue = null),
                    jo(n) ? ((i = !0), Mo(t)) : (i = !1),
                    (t.memoizedState =
                      null !== o.state && void 0 !== o.state ? o.state : null),
                    ea(t),
                    (o.updater = ua),
                    (t.stateNode = o),
                    (o._reactInternals = t),
                    ma(t, n, e, r),
                    (t = Bs(null, t, n, !0, i, r)))
                  : ((t.tag = 0),
                    ja && i && Ba(t),
                    ys(null, t, o, r),
                    (t = t.child)),
                t
              );
            case 16:
              n = t.elementType;
              e: {
                switch (
                  (null !== e &&
                    ((e.alternate = null),
                    (t.alternate = null),
                    (t.flags |= 2)),
                  (e = t.pendingProps),
                  (n = (o = n._init)(n._payload)),
                  (t.type = n),
                  (o = t.tag =
                    (function (e) {
                      if ("function" === typeof e) return wl(e) ? 1 : 0;
                      if (void 0 !== e && null !== e) {
                        if ((e = e.$$typeof) === T) return 11;
                        if (e === N) return 14;
                      }
                      return 2;
                    })(n)),
                  (e = Ko(n, e)),
                  o)
                ) {
                  case 0:
                    t = Ps(null, t, n, e, r);
                    break e;
                  case 1:
                    t = Ss(null, t, n, e, r);
                    break e;
                  case 11:
                    t = ks(null, t, n, e, r);
                    break e;
                  case 14:
                    t = bs(null, t, n, Ko(n.type, e), r);
                    break e;
                }
                throw Error(a(306, n, ""));
              }
              return t;
            case 0:
              return (
                (n = t.type),
                (o = t.pendingProps),
                Ps(e, t, n, (o = t.elementType === n ? o : Ko(n, o)), r)
              );
            case 1:
              return (
                (n = t.type),
                (o = t.pendingProps),
                Ss(e, t, n, (o = t.elementType === n ? o : Ko(n, o)), r)
              );
            case 3:
              e: {
                if ((Es(t), null === e)) throw Error(a(387));
                (n = t.pendingProps),
                  (o = (i = t.memoizedState).element),
                  ta(e, t),
                  ia(t, n, null, r);
                var s = t.memoizedState;
                if (((n = s.element), i.isDehydrated)) {
                  if (
                    ((i = {
                      element: n,
                      isDehydrated: !1,
                      cache: s.cache,
                      transitions: s.transitions,
                    }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Ts(e, t, n, r, (o = Error(a(423))));
                    break e;
                  }
                  if (n !== o) {
                    t = Ts(e, t, n, r, (o = Error(a(424))));
                    break e;
                  }
                  for (
                    Ra = io(t.stateNode.containerInfo.firstChild),
                      Ta = t,
                      ja = !0,
                      Na = null,
                      r = Ha(t, null, n, r),
                      t.child = r;
                    r;

                  )
                    (r.flags = (-3 & r.flags) | 4096), (r = r.sibling);
                } else {
                  if ((Aa(), n === o)) {
                    t = Us(e, t, r);
                    break e;
                  }
                  ys(e, t, n, r);
                }
                t = t.child;
              }
              return t;
            case 5:
              return (
                Za(t),
                null === e && La(t),
                (n = t.type),
                (o = t.pendingProps),
                (i = null !== e ? e.memoizedProps : null),
                (s = o.children),
                Zn(n, o)
                  ? (s = null)
                  : null !== i && Zn(n, i) && (t.flags |= 32),
                xs(e, t),
                ys(e, t, s, r),
                t.child
              );
            case 6:
              return null === e && La(t), null;
            case 13:
              return Ns(e, t, r);
            case 4:
              return (
                qa(t, t.stateNode.containerInfo),
                (n = t.pendingProps),
                null === e ? (t.child = Ja(t, null, n, r)) : ys(e, t, n, r),
                t.child
              );
            case 11:
              return (
                (n = t.type),
                (o = t.pendingProps),
                ks(e, t, n, (o = t.elementType === n ? o : Ko(n, o)), r)
              );
            case 7:
              return ys(e, t, t.pendingProps, r), t.child;
            case 8:
            case 12:
              return ys(e, t, t.pendingProps.children, r), t.child;
            case 10:
              e: {
                if (
                  ((n = t.type._context),
                  (o = t.pendingProps),
                  (i = t.memoizedProps),
                  (s = o.value),
                  Po(Vo, n._currentValue),
                  (n._currentValue = s),
                  null !== i)
                )
                  if (on(i.value, s)) {
                    if (i.children === o.children && !Eo.current) {
                      t = Us(e, t, r);
                      break e;
                    }
                  } else
                    for (
                      null !== (i = t.child) && (i.return = t);
                      null !== i;

                    ) {
                      var c = i.dependencies;
                      if (null !== c) {
                        s = i.child;
                        for (var l = c.firstContext; null !== l; ) {
                          if (l.context === n) {
                            if (1 === i.tag) {
                              (l = ra(-1, r & -r)).tag = 2;
                              var u = i.updateQueue;
                              if (null !== u) {
                                var d = (u = u.shared).pending;
                                null === d
                                  ? (l.next = l)
                                  : ((l.next = d.next), (d.next = l)),
                                  (u.pending = l);
                              }
                            }
                            (i.lanes |= r),
                              null !== (l = i.alternate) && (l.lanes |= r),
                              Xo(i.return, r, t),
                              (c.lanes |= r);
                            break;
                          }
                          l = l.next;
                        }
                      } else if (10 === i.tag)
                        s = i.type === t.type ? null : i.child;
                      else if (18 === i.tag) {
                        if (null === (s = i.return)) throw Error(a(341));
                        (s.lanes |= r),
                          null !== (c = s.alternate) && (c.lanes |= r),
                          Xo(s, r, t),
                          (s = i.sibling);
                      } else s = i.child;
                      if (null !== s) s.return = i;
                      else
                        for (s = i; null !== s; ) {
                          if (s === t) {
                            s = null;
                            break;
                          }
                          if (null !== (i = s.sibling)) {
                            (i.return = s.return), (s = i);
                            break;
                          }
                          s = s.return;
                        }
                      i = s;
                    }
                ys(e, t, o.children, r), (t = t.child);
              }
              return t;
            case 9:
              return (
                (o = t.type),
                (n = t.pendingProps.children),
                Yo(t, r),
                (n = n((o = qo(o)))),
                (t.flags |= 1),
                ys(e, t, n, r),
                t.child
              );
            case 14:
              return (
                (o = Ko((n = t.type), t.pendingProps)),
                bs(e, t, n, (o = Ko(n.type, o)), r)
              );
            case 15:
              return ws(e, t, t.type, t.pendingProps, r);
            case 17:
              return (
                (n = t.type),
                (o = t.pendingProps),
                (o = t.elementType === n ? o : Ko(n, o)),
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (t.tag = 1),
                jo(n) ? ((e = !0), Mo(t)) : (e = !1),
                Yo(t, r),
                fa(t, n, o),
                ma(t, n, o, r),
                Bs(null, t, n, !0, e, r)
              );
            case 19:
              return As(e, t, r);
            case 22:
              return Cs(e, t, r);
          }
          throw Error(a(156, t.tag));
        };
        var Il =
          "function" === typeof reportError
            ? reportError
            : function (e) {
                console.error(e);
              };
        function Al(e) {
          this._internalRoot = e;
        }
        function Ul(e) {
          this._internalRoot = e;
        }
        function zl(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function Fl(e) {
          return !(
            !e ||
            (1 !== e.nodeType &&
              9 !== e.nodeType &&
              11 !== e.nodeType &&
              (8 !== e.nodeType ||
                " react-mount-point-unstable " !== e.nodeValue))
          );
        }
        function Kl() {}
        function Vl(e, t, r, n, o) {
          var a = r._reactRootContainer;
          if (a) {
            var i = a;
            if ("function" === typeof o) {
              var s = o;
              o = function () {
                var e = Ml(i);
                s.call(e);
              };
            }
            _l(t, i, e, o);
          } else
            i = (function (e, t, r, n, o) {
              if (o) {
                if ("function" === typeof n) {
                  var a = n;
                  n = function () {
                    var e = Ml(i);
                    a.call(e);
                  };
                }
                var i = Ol(t, n, e, 0, null, !1, 0, "", Kl);
                return (
                  (e._reactRootContainer = i),
                  (e[fo] = i.current),
                  zn(8 === e.nodeType ? e.parentNode : e),
                  Zc(),
                  i
                );
              }
              for (; (o = e.lastChild); ) e.removeChild(o);
              if ("function" === typeof n) {
                var s = n;
                n = function () {
                  var e = Ml(c);
                  s.call(e);
                };
              }
              var c = Rl(e, 0, !1, null, 0, !1, 0, "", Kl);
              return (
                (e._reactRootContainer = c),
                (e[fo] = c.current),
                zn(8 === e.nodeType ? e.parentNode : e),
                Zc(function () {
                  _l(t, c, r, n);
                }),
                c
              );
            })(r, t, e, o, n);
          return Ml(i);
        }
        (Ul.prototype.render = Al.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(a(409));
            _l(e, t, null, null);
          }),
          (Ul.prototype.unmount = Al.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                Zc(function () {
                  _l(null, e, null, null);
                }),
                  (t[fo] = null);
              }
            }),
          (Ul.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = xt();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var r = 0;
                r < Ot.length && 0 !== t && t < Ot[r].priority;
                r++
              );
              Ot.splice(r, 0, e), 0 === r && Dt(e);
            }
          }),
          (bt = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var r = dt(t.pendingLanes);
                  0 !== r &&
                    (gt(t, 1 | r),
                    Wc(t, qe()),
                    0 === (6 & gc) && ((Nc = qe() + 500), zo()));
                }
                break;
              case 13:
                var n = Kc();
                Zc(function () {
                  return Jc(e, 1, n);
                }),
                  Dl(e, 1);
            }
          }),
          (wt = function (e) {
            13 === e.tag && (Jc(e, 134217728, Kc()), Dl(e, 134217728));
          }),
          (Ct = function (e) {
            if (13 === e.tag) {
              var t = Kc(),
                r = Vc(e);
              Jc(e, r, t), Dl(e, r);
            }
          }),
          (xt = function () {
            return yt;
          }),
          (Pt = function (e, t) {
            var r = yt;
            try {
              return (yt = e), t();
            } finally {
              yt = r;
            }
          }),
          (Ce = function (e, t, r) {
            switch (t) {
              case "input":
                if (($(e, r), (t = r.name), "radio" === r.type && null != t)) {
                  for (r = e; r.parentNode; ) r = r.parentNode;
                  for (
                    r = r.querySelectorAll(
                      "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                    ),
                      t = 0;
                    t < r.length;
                    t++
                  ) {
                    var n = r[t];
                    if (n !== e && n.form === e.form) {
                      var o = ko(n);
                      if (!o) throw Error(a(90));
                      G(n), $(n, o);
                    }
                  }
                }
                break;
              case "textarea":
                ae(e, r);
                break;
              case "select":
                null != (t = r.value) && re(e, !!r.multiple, t, !1);
            }
          }),
          (Te = $c),
          (Re = Zc);
        var Jl = {
            usingClientEntryPoint: !1,
            Events: [go, yo, ko, Be, Ee, $c],
          },
          Hl = {
            findFiberByHostInstance: vo,
            bundleType: 0,
            version: "18.0.0-fc46dba67-20220329",
            rendererPackageName: "react-dom",
          },
          Wl = {
            bundleType: Hl.bundleType,
            version: Hl.version,
            rendererPackageName: Hl.rendererPackageName,
            rendererConfig: Hl.rendererConfig,
            overrideHookState: null,
            overrideHookStateDeletePath: null,
            overrideHookStateRenamePath: null,
            overrideProps: null,
            overridePropsDeletePath: null,
            overridePropsRenamePath: null,
            setErrorHandler: null,
            setSuspenseHandler: null,
            scheduleUpdate: null,
            currentDispatcherRef: b.ReactCurrentDispatcher,
            findHostInstanceByFiber: function (e) {
              return null === (e = He(e)) ? null : e.stateNode;
            },
            findFiberByHostInstance:
              Hl.findFiberByHostInstance ||
              function () {
                return null;
              },
            findHostInstancesForRefresh: null,
            scheduleRefresh: null,
            scheduleRoot: null,
            setRefreshHandler: null,
            getCurrentFiber: null,
            reconcilerVersion: "18.0.0-fc46dba67-20220329",
          };
        if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
          var Gl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!Gl.isDisabled && Gl.supportsFiber)
            try {
              (ot = Gl.inject(Wl)), (at = Gl);
            } catch (ue) {}
        }
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Jl),
          (t.createPortal = function (e, t) {
            var r =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : null;
            if (!zl(t)) throw Error(a(200));
            return jl(e, t, null, r);
          }),
          (t.createRoot = function (e, t) {
            if (!zl(e)) throw Error(a(299));
            var r = !1,
              n = "",
              o = Il;
            return (
              null !== t &&
                void 0 !== t &&
                (!0 === t.unstable_strictMode && (r = !0),
                void 0 !== t.identifierPrefix && (n = t.identifierPrefix),
                void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
              (t = Rl(e, 1, !1, null, 0, r, 0, n, o)),
              (e[fo] = t.current),
              zn(8 === e.nodeType ? e.parentNode : e),
              new Al(t)
            );
          }),
          (t.findDOMNode = function (e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternals;
            if (void 0 === t) {
              if ("function" === typeof e.render) throw Error(a(188));
              throw ((e = Object.keys(e).join(",")), Error(a(268, e)));
            }
            return (e = null === (e = He(t)) ? null : e.stateNode);
          }),
          (t.flushSync = function (e) {
            return Zc(e);
          }),
          (t.hydrate = function (e, t, r) {
            if (!Fl(t)) throw Error(a(200));
            return Vl(null, e, t, !0, r);
          }),
          (t.hydrateRoot = function (e, t, r) {
            if (!zl(e)) throw Error(a(405));
            var n = (null != r && r.hydratedSources) || null,
              o = !1,
              i = "",
              s = Il;
            if (
              (null !== r &&
                void 0 !== r &&
                (!0 === r.unstable_strictMode && (o = !0),
                void 0 !== r.identifierPrefix && (i = r.identifierPrefix),
                void 0 !== r.onRecoverableError && (s = r.onRecoverableError)),
              (t = Ol(t, null, e, 1, null != r ? r : null, o, 0, i, s)),
              (e[fo] = t.current),
              zn(e),
              n)
            )
              for (e = 0; e < n.length; e++)
                (o = (o = (r = n[e])._getVersion)(r._source)),
                  null == t.mutableSourceEagerHydrationData
                    ? (t.mutableSourceEagerHydrationData = [r, o])
                    : t.mutableSourceEagerHydrationData.push(r, o);
            return new Ul(t);
          }),
          (t.render = function (e, t, r) {
            if (!Fl(t)) throw Error(a(200));
            return Vl(null, e, t, !1, r);
          }),
          (t.unmountComponentAtNode = function (e) {
            if (!Fl(e)) throw Error(a(40));
            return (
              !!e._reactRootContainer &&
              (Zc(function () {
                Vl(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[fo] = null);
                });
              }),
              !0)
            );
          }),
          (t.unstable_batchedUpdates = $c),
          (t.unstable_renderSubtreeIntoContainer = function (e, t, r, n) {
            if (!Fl(r)) throw Error(a(200));
            if (null == e || void 0 === e._reactInternals) throw Error(a(38));
            return Vl(e, t, r, !1, n);
          }),
          (t.version = "18.0.0-fc46dba67-20220329");
      },
      4164: function (e, t, r) {
        "use strict";
        !(function e() {
          if (
            "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
            "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
            try {
              __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
            } catch (t) {
              console.error(t);
            }
        })(),
          (e.exports = r(4463));
      },
      3198: function (e) {
        "use strict";
        e.exports = function (e, t) {
          (e = e || []), (t = t || {});
          try {
            return new Blob(e, t);
          } catch (o) {
            if ("TypeError" !== o.name) throw o;
            for (
              var r = new (window.BlobBuilder ||
                  window.MSBlobBuilder ||
                  window.MozBlobBuilder ||
                  window.WebKitBlobBuilder)(),
                n = 0;
              n < e.length;
              n += 1
            )
              r.append(e[n]);
            return r.getBlob(t.type);
          }
        };
      },
      1002: function (e) {
        "use strict";
        function t() {
          (this.name = "NoVideoInputDevicesError"),
            (this.message = "No video input devices found");
        }
        (t.prototype = new Error()),
          (e.exports = { NoVideoInputDevicesError: t });
      },
      4012: function (e, t, r) {
        "use strict";
        var n = r(1002).NoVideoInputDevicesError;
        function o(e, t, r) {
          return e.length > 0
            ? e[0].deviceId
            : 1 == t.length || "user" == r
            ? t[0].deviceId
            : t[1].deviceId;
        }
        var a = function (e) {
          return "environment" == e
            ? /rear|back|environment/gi
            : /front|user|face/gi;
        };
        e.exports = {
          getDeviceId: function (e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : o;
            return new Promise(function (r, o) {
              var i = void 0;
              try {
                i = navigator.mediaDevices.enumerateDevices();
              } catch (s) {
                o(new n());
              }
              i.then(function (i) {
                var s = i.filter(function (e) {
                  return "videoinput" == e.kind;
                });
                if (s.length < 1) o(new n());
                else {
                  var c = a(e),
                    l = s.filter(function (e) {
                      var t = e.label;
                      return c.test(t);
                    });
                  r(t(l, s, e));
                }
              });
            });
          },
          getFacingModePattern: a,
        };
      },
      3212: function (e) {
        "use strict";
        e.exports = function (e, t, r) {
          var n = [];
          return (
            r.forEach(function (r) {
              e[r] != t[r] && n.push(r);
            }),
            n
          );
        };
      },
      3292: function (e, t, r) {
        "use strict";
        var n,
          o,
          a =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            },
          i = (function () {
            function e(e, t) {
              for (var r = 0; r < t.length; r++) {
                var n = t[r];
                (n.enumerable = n.enumerable || !1),
                  (n.configurable = !0),
                  "value" in n && (n.writable = !0),
                  Object.defineProperty(e, n.key, n);
              }
            }
            return function (t, r, n) {
              return r && e(t.prototype, r), n && e(t, n), t;
            };
          })();
        var s = r(2791),
          c = s.Component,
          l = r(2007),
          u = r(4012),
          d = u.getDeviceId,
          f = (u.getFacingModePattern, r(3212)),
          p = r(3198);
        r(9481);
        var m = p(
            [
              '!function(o,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.jsQR=e():o.jsQR=e()}("undefined"!=typeof self?self:this,function(){return function(o){function e(t){if(r[t])return r[t].exports;var c=r[t]={i:t,l:!1,exports:{}};return o[t].call(c.exports,c,c.exports,e),c.l=!0,c.exports}var r={};return e.m=o,e.c=r,e.d=function(o,r,t){e.o(o,r)||Object.defineProperty(o,r,{configurable:!1,enumerable:!0,get:t})},e.n=function(o){var r=o&&o.__esModule?function(){return o.default}:function(){return o};return e.d(r,"a",r),r},e.o=function(o,e){return Object.prototype.hasOwnProperty.call(o,e)},e.p="",e(e.s=3)}([function(o,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(){function o(o,e){this.width=e,this.height=o.length/e,this.data=o}return o.createEmpty=function(e,r){return new o(new Uint8ClampedArray(e*r),e)},o.prototype.get=function(o,e){return!(o<0||o>=this.width||e<0||e>=this.height)&&!!this.data[e*this.width+o]},o.prototype.set=function(o,e,r){this.data[e*this.width+o]=r?1:0},o.prototype.setRegion=function(o,e,r,t,c){for(var s=e;s<e+t;s++)for(var a=o;a<o+r;a++)this.set(a,s,!!c)},o}();e.BitMatrix=t},function(o,e,r){"use strict";function t(o,e){return o^e}Object.defineProperty(e,"__esModule",{value:!0});var c=r(2);e.addOrSubtractGF=t;var s=function(){function o(o,e,r){this.primitive=o,this.size=e,this.generatorBase=r,this.expTable=new Array(this.size),this.logTable=new Array(this.size);for(var t=1,s=0;s<this.size;s++)this.expTable[s]=t,(t*=2)>=this.size&&(t=(t^this.primitive)&this.size-1);for(var s=0;s<this.size-1;s++)this.logTable[this.expTable[s]]=s;this.zero=new c.default(this,Uint8ClampedArray.from([0])),this.one=new c.default(this,Uint8ClampedArray.from([1]))}return o.prototype.multiply=function(o,e){return 0===o||0===e?0:this.expTable[(this.logTable[o]+this.logTable[e])%(this.size-1)]},o.prototype.inverse=function(o){if(0===o)throw new Error("Can\'t invert 0");return this.expTable[this.size-this.logTable[o]-1]},o.prototype.buildMonomial=function(o,e){if(o<0)throw new Error("Invalid monomial degree less than 0");if(0===e)return this.zero;var r=new Uint8ClampedArray(o+1);return r[0]=e,new c.default(this,r)},o.prototype.log=function(o){if(0===o)throw new Error("Can\'t take log(0)");return this.logTable[o]},o.prototype.exp=function(o){return this.expTable[o]},o}();e.default=s},function(o,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=r(1),c=function(){function o(o,e){if(0===e.length)throw new Error("No coefficients.");this.field=o;var r=e.length;if(r>1&&0===e[0]){for(var t=1;t<r&&0===e[t];)t++;if(t===r)this.coefficients=o.zero.coefficients;else{this.coefficients=new Uint8ClampedArray(r-t);for(var c=0;c<this.coefficients.length;c++)this.coefficients[c]=e[t+c]}}else this.coefficients=e}return o.prototype.degree=function(){return this.coefficients.length-1},o.prototype.isZero=function(){return 0===this.coefficients[0]},o.prototype.getCoefficient=function(o){return this.coefficients[this.coefficients.length-1-o]},o.prototype.addOrSubtract=function(e){if(this.isZero())return e;if(e.isZero())return this;var r=this.coefficients,c=e.coefficients;r.length>c.length&&(n=[c,r],r=n[0],c=n[1]);for(var s=new Uint8ClampedArray(c.length),a=c.length-r.length,d=0;d<a;d++)s[d]=c[d];for(var d=a;d<c.length;d++)s[d]=t.addOrSubtractGF(r[d-a],c[d]);return new o(this.field,s);var n},o.prototype.multiply=function(e){if(0===e)return this.field.zero;if(1===e)return this;for(var r=this.coefficients.length,t=new Uint8ClampedArray(r),c=0;c<r;c++)t[c]=this.field.multiply(this.coefficients[c],e);return new o(this.field,t)},o.prototype.multiplyPoly=function(e){if(this.isZero()||e.isZero())return this.field.zero;for(var r=this.coefficients,c=r.length,s=e.coefficients,a=s.length,d=new Uint8ClampedArray(c+a-1),n=0;n<c;n++)for(var l=r[n],i=0;i<a;i++)d[n+i]=t.addOrSubtractGF(d[n+i],this.field.multiply(l,s[i]));return new o(this.field,d)},o.prototype.multiplyByMonomial=function(e,r){if(e<0)throw new Error("Invalid degree less than 0");if(0===r)return this.field.zero;for(var t=this.coefficients.length,c=new Uint8ClampedArray(t+e),s=0;s<t;s++)c[s]=this.field.multiply(this.coefficients[s],r);return new o(this.field,c)},o.prototype.evaluateAt=function(o){var e=0;if(0===o)return this.getCoefficient(0);var r=this.coefficients.length;if(1===o)return this.coefficients.forEach(function(o){e=t.addOrSubtractGF(e,o)}),e;e=this.coefficients[0];for(var c=1;c<r;c++)e=t.addOrSubtractGF(this.field.multiply(o,e),this.coefficients[c]);return e},o}();e.default=c},function(o,e,r){"use strict";function t(o){var e=n.locate(o);if(!e)return null;var r=d.extract(o,e),t=a.decode(r.matrix);return t?{binaryData:t.bytes,data:t.text,chunks:t.chunks,location:{topRightCorner:r.mappingFunction(e.dimension,0),topLeftCorner:r.mappingFunction(0,0),bottomRightCorner:r.mappingFunction(e.dimension,e.dimension),bottomLeftCorner:r.mappingFunction(0,e.dimension),topRightFinderPattern:e.topRight,topLeftFinderPattern:e.topLeft,bottomLeftFinderPattern:e.bottomLeft,bottomRightAlignmentPattern:e.alignmentPattern}}:null}function c(o,e,r,c){void 0===c&&(c={});var a=l;Object.keys(a||{}).forEach(function(o){a[o]=c[o]||a[o]});var d="attemptBoth"===a.inversionAttempts||"invertFirst"===a.inversionAttempts,n="onlyInvert"===a.inversionAttempts||"invertFirst"===a.inversionAttempts,i=s.binarize(o,e,r,d),B=i.binarized,k=i.inverted,u=t(n?k:B);return u||"attemptBoth"!==a.inversionAttempts&&"invertFirst"!==a.inversionAttempts||(u=t(n?B:k)),u}Object.defineProperty(e,"__esModule",{value:!0});var s=r(4),a=r(5),d=r(11),n=r(12),l={inversionAttempts:"attemptBoth"};c.default=c,e.default=c},function(o,e,r){"use strict";function t(o,e,r){return o<e?e:o>r?r:o}function c(o,e,r,c){if(o.length!==e*r*4)throw new Error("Malformed data passed to binarizer.");for(var l=new n(e,r),i=0;i<e;i++)for(var B=0;B<r;B++){var k=o[4*(B*e+i)+0],u=o[4*(B*e+i)+1],C=o[4*(B*e+i)+2];l.set(i,B,.2126*k+.7152*u+.0722*C)}for(var m=Math.ceil(e/a),f=Math.ceil(r/a),w=new n(m,f),P=0;P<f;P++)for(var v=0;v<m;v++){for(var h=0,p=1/0,y=0,B=0;B<a;B++)for(var i=0;i<a;i++){var b=l.get(v*a+i,P*a+B);h+=b,p=Math.min(p,b),y=Math.max(y,b)}var g=h/Math.pow(a,2);if(y-p<=d&&(g=p/2,P>0&&v>0)){var x=(w.get(v,P-1)+2*w.get(v-1,P)+w.get(v-1,P-1))/4;p<x&&(g=x)}w.set(v,P,g)}var M=s.BitMatrix.createEmpty(e,r),L=null;c&&(L=s.BitMatrix.createEmpty(e,r));for(var P=0;P<f;P++)for(var v=0;v<m;v++){for(var N=t(v,2,m-3),I=t(P,2,f-3),h=0,O=-2;O<=2;O++)for(var z=-2;z<=2;z++)h+=w.get(N+O,I+z);for(var S=h/25,O=0;O<a;O++)for(var z=0;z<a;z++){var i=v*a+O,B=P*a+z,X=l.get(i,B);M.set(i,B,X<=S),c&&L.set(i,B,!(X<=S))}}return c?{binarized:M,inverted:L}:{binarized:M}}Object.defineProperty(e,"__esModule",{value:!0});var s=r(0),a=8,d=24,n=function(){function o(o,e){this.width=o,this.data=new Uint8ClampedArray(o*e)}return o.prototype.get=function(o,e){return this.data[e*this.width+o]},o.prototype.set=function(o,e,r){this.data[e*this.width+o]=r},o}();e.binarize=c},function(o,e,r){"use strict";function t(o,e){for(var r=o^e,t=0;r;)t++,r&=r-1;return t}function c(o,e){return e<<1|o}function s(o){var e=17+4*o.versionNumber,r=k.BitMatrix.createEmpty(e,e);r.setRegion(0,0,9,9,!0),r.setRegion(e-8,0,8,9,!0),r.setRegion(0,e-8,9,8,!0);for(var t=0,c=o.alignmentPatternCenters;t<c.length;t++)for(var s=c[t],a=0,d=o.alignmentPatternCenters;a<d.length;a++){var n=d[a];6===s&&6===n||6===s&&n===e-7||s===e-7&&6===n||r.setRegion(s-2,n-2,5,5,!0)}return r.setRegion(6,9,1,e-17,!0),r.setRegion(9,6,e-17,1,!0),o.versionNumber>6&&(r.setRegion(e-11,0,3,6,!0),r.setRegion(0,e-11,6,3,!0)),r}function a(o,e,r){for(var t=w[r.dataMask],a=o.height,d=s(e),n=[],l=0,i=0,B=!0,k=a-1;k>0;k-=2){6===k&&k--;for(var u=0;u<a;u++)for(var C=B?a-1-u:u,m=0;m<2;m++){var f=k-m;if(!d.get(f,C)){i++;var P=o.get(f,C);t({y:C,x:f})&&(P=!P),l=c(P,l),8===i&&(n.push(l),i=0,l=0)}}B=!B}return n}function d(o){var e=o.height,r=Math.floor((e-17)/4);if(r<=6)return m.VERSIONS[r-1];for(var s=0,a=5;a>=0;a--)for(var d=e-9;d>=e-11;d--)s=c(o.get(d,a),s);for(var n=0,d=5;d>=0;d--)for(var a=e-9;a>=e-11;a--)n=c(o.get(d,a),n);for(var l,i=1/0,B=0,k=m.VERSIONS;B<k.length;B++){var u=k[B];if(u.infoBits===s||u.infoBits===n)return u;var C=t(s,u.infoBits);C<i&&(l=u,i=C),C=t(n,u.infoBits),C<i&&(l=u,i=C)}return i<=3?l:void 0}function n(o){for(var e=0,r=0;r<=8;r++)6!==r&&(e=c(o.get(r,8),e));for(var s=7;s>=0;s--)6!==s&&(e=c(o.get(8,s),e));for(var a=o.height,d=0,s=a-1;s>=a-7;s--)d=c(o.get(8,s),d);for(var r=a-8;r<a;r++)d=c(o.get(r,8),d);for(var n=1/0,l=null,i=0,B=f;i<B.length;i++){var k=B[i],u=k.bits,C=k.formatInfo;if(u===e||u===d)return C;var m=t(e,u);m<n&&(l=C,n=m),e!==d&&(m=t(d,u))<n&&(l=C,n=m)}return n<=3?l:null}function l(o,e,r){var t=e.errorCorrectionLevels[r],c=[],s=0;if(t.ecBlocks.forEach(function(o){for(var e=0;e<o.numBlocks;e++)c.push({numDataCodewords:o.dataCodewordsPerBlock,codewords:[]}),s+=o.dataCodewordsPerBlock+t.ecCodewordsPerBlock}),o.length<s)return null;o=o.slice(0,s);for(var a=t.ecBlocks[0].dataCodewordsPerBlock,d=0;d<a;d++)for(var n=0,l=c;n<l.length;n++){var i=l[n];i.codewords.push(o.shift())}if(t.ecBlocks.length>1)for(var B=t.ecBlocks[0].numBlocks,k=t.ecBlocks[1].numBlocks,d=0;d<k;d++)c[B+d].codewords.push(o.shift());for(;o.length>0;)for(var u=0,C=c;u<C.length;u++){var i=C[u];i.codewords.push(o.shift())}return c}function i(o){var e=d(o);if(!e)return null;var r=n(o);if(!r)return null;var t=a(o,e,r),c=l(t,e,r.errorCorrectionLevel);if(!c)return null;for(var s=c.reduce(function(o,e){return o+e.numDataCodewords},0),i=new Uint8ClampedArray(s),B=0,k=0,m=c;k<m.length;k++){var f=m[k],w=C.decode(f.codewords,f.codewords.length-f.numDataCodewords);if(!w)return null;for(var P=0;P<f.numDataCodewords;P++)i[B++]=w[P]}try{return u.decode(i,e.versionNumber)}catch(o){return null}}function B(o){if(null==o)return null;var e=i(o);if(e)return e;for(var r=0;r<o.width;r++)for(var t=r+1;t<o.height;t++)o.get(r,t)!==o.get(t,r)&&(o.set(r,t,!o.get(r,t)),o.set(t,r,!o.get(t,r)));return i(o)}Object.defineProperty(e,"__esModule",{value:!0});var k=r(0),u=r(6),C=r(9),m=r(10),f=[{bits:21522,formatInfo:{errorCorrectionLevel:1,dataMask:0}},{bits:20773,formatInfo:{errorCorrectionLevel:1,dataMask:1}},{bits:24188,formatInfo:{errorCorrectionLevel:1,dataMask:2}},{bits:23371,formatInfo:{errorCorrectionLevel:1,dataMask:3}},{bits:17913,formatInfo:{errorCorrectionLevel:1,dataMask:4}},{bits:16590,formatInfo:{errorCorrectionLevel:1,dataMask:5}},{bits:20375,formatInfo:{errorCorrectionLevel:1,dataMask:6}},{bits:19104,formatInfo:{errorCorrectionLevel:1,dataMask:7}},{bits:30660,formatInfo:{errorCorrectionLevel:0,dataMask:0}},{bits:29427,formatInfo:{errorCorrectionLevel:0,dataMask:1}},{bits:32170,formatInfo:{errorCorrectionLevel:0,dataMask:2}},{bits:30877,formatInfo:{errorCorrectionLevel:0,dataMask:3}},{bits:26159,formatInfo:{errorCorrectionLevel:0,dataMask:4}},{bits:25368,formatInfo:{errorCorrectionLevel:0,dataMask:5}},{bits:27713,formatInfo:{errorCorrectionLevel:0,dataMask:6}},{bits:26998,formatInfo:{errorCorrectionLevel:0,dataMask:7}},{bits:5769,formatInfo:{errorCorrectionLevel:3,dataMask:0}},{bits:5054,formatInfo:{errorCorrectionLevel:3,dataMask:1}},{bits:7399,formatInfo:{errorCorrectionLevel:3,dataMask:2}},{bits:6608,formatInfo:{errorCorrectionLevel:3,dataMask:3}},{bits:1890,formatInfo:{errorCorrectionLevel:3,dataMask:4}},{bits:597,formatInfo:{errorCorrectionLevel:3,dataMask:5}},{bits:3340,formatInfo:{errorCorrectionLevel:3,dataMask:6}},{bits:2107,formatInfo:{errorCorrectionLevel:3,dataMask:7}},{bits:13663,formatInfo:{errorCorrectionLevel:2,dataMask:0}},{bits:12392,formatInfo:{errorCorrectionLevel:2,dataMask:1}},{bits:16177,formatInfo:{errorCorrectionLevel:2,dataMask:2}},{bits:14854,formatInfo:{errorCorrectionLevel:2,dataMask:3}},{bits:9396,formatInfo:{errorCorrectionLevel:2,dataMask:4}},{bits:8579,formatInfo:{errorCorrectionLevel:2,dataMask:5}},{bits:11994,formatInfo:{errorCorrectionLevel:2,dataMask:6}},{bits:11245,formatInfo:{errorCorrectionLevel:2,dataMask:7}}],w=[function(o){return(o.y+o.x)%2==0},function(o){return o.y%2==0},function(o){return o.x%3==0},function(o){return(o.y+o.x)%3==0},function(o){return(Math.floor(o.y/2)+Math.floor(o.x/3))%2==0},function(o){return o.x*o.y%2+o.x*o.y%3==0},function(o){return(o.y*o.x%2+o.y*o.x%3)%2==0},function(o){return((o.y+o.x)%2+o.y*o.x%3)%2==0}];e.decode=B},function(o,e,r){"use strict";function t(o,e){for(var r=[],t="",c=[10,12,14][e],s=o.readBits(c);s>=3;){var a=o.readBits(10);if(a>=1e3)throw new Error("Invalid numeric value above 999");var d=Math.floor(a/100),n=Math.floor(a/10)%10,l=a%10;r.push(48+d,48+n,48+l),t+=d.toString()+n.toString()+l.toString(),s-=3}if(2===s){var a=o.readBits(7);if(a>=100)throw new Error("Invalid numeric value above 99");var d=Math.floor(a/10),n=a%10;r.push(48+d,48+n),t+=d.toString()+n.toString()}else if(1===s){var a=o.readBits(4);if(a>=10)throw new Error("Invalid numeric value above 9");r.push(48+a),t+=a.toString()}return{bytes:r,text:t}}function c(o,e){for(var r=[],t="",c=[9,11,13][e],s=o.readBits(c);s>=2;){var a=o.readBits(11),d=Math.floor(a/45),n=a%45;r.push(k[d].charCodeAt(0),k[n].charCodeAt(0)),t+=k[d]+k[n],s-=2}if(1===s){var d=o.readBits(6);r.push(k[d].charCodeAt(0)),t+=k[d]}return{bytes:r,text:t}}function s(o,e){for(var r=[],t="",c=[8,16,16][e],s=o.readBits(c),a=0;a<s;a++){var d=o.readBits(8);r.push(d)}try{t+=decodeURIComponent(r.map(function(o){return"%"+("0"+o.toString(16)).substr(-2)}).join(""))}catch(o){}return{bytes:r,text:t}}function a(o,e){for(var r=[],t="",c=[8,10,12][e],s=o.readBits(c),a=0;a<s;a++){var d=o.readBits(13),n=Math.floor(d/192)<<8|d%192;n+=n<7936?33088:49472,r.push(n>>8,255&n),t+=String.fromCharCode(i.shiftJISTable[n])}return{bytes:r,text:t}}function d(o,e){for(var r=new l.BitStream(o),d=e<=9?0:e<=26?1:2,i={text:"",bytes:[],chunks:[]};r.available()>=4;){var k=r.readBits(4);if(k===B.Terminator)return i;if(k===B.ECI)0===r.readBits(1)?i.chunks.push({type:n.ECI,assignmentNumber:r.readBits(7)}):0===r.readBits(1)?i.chunks.push({type:n.ECI,assignmentNumber:r.readBits(14)}):0===r.readBits(1)?i.chunks.push({type:n.ECI,assignmentNumber:r.readBits(21)}):i.chunks.push({type:n.ECI,assignmentNumber:-1});else if(k===B.Numeric){var u=t(r,d);i.text+=u.text,(w=i.bytes).push.apply(w,u.bytes),i.chunks.push({type:n.Numeric,text:u.text})}else if(k===B.Alphanumeric){var C=c(r,d);i.text+=C.text,(P=i.bytes).push.apply(P,C.bytes),i.chunks.push({type:n.Alphanumeric,text:C.text})}else if(k===B.Byte){var m=s(r,d);i.text+=m.text,(v=i.bytes).push.apply(v,m.bytes),i.chunks.push({type:n.Byte,bytes:m.bytes,text:m.text})}else if(k===B.Kanji){var f=a(r,d);i.text+=f.text,(h=i.bytes).push.apply(h,f.bytes),i.chunks.push({type:n.Kanji,bytes:f.bytes,text:f.text})}}var w,P,v,h}Object.defineProperty(e,"__esModule",{value:!0});var n,l=r(7),i=r(8);!function(o){o.Numeric="numeric",o.Alphanumeric="alphanumeric",o.Byte="byte",o.Kanji="kanji",o.ECI="eci"}(n=e.Mode||(e.Mode={}));var B;!function(o){o[o.Terminator=0]="Terminator",o[o.Numeric=1]="Numeric",o[o.Alphanumeric=2]="Alphanumeric",o[o.Byte=4]="Byte",o[o.Kanji=8]="Kanji",o[o.ECI=7]="ECI"}(B||(B={}));var k=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];e.decode=d},function(o,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(){function o(o){this.byteOffset=0,this.bitOffset=0,this.bytes=o}return o.prototype.readBits=function(o){if(o<1||o>32||o>this.available())throw new Error("Cannot read "+o.toString()+" bits");var e=0;if(this.bitOffset>0){var r=8-this.bitOffset,t=o<r?o:r,c=r-t,s=255>>8-t<<c;e=(this.bytes[this.byteOffset]&s)>>c,o-=t,this.bitOffset+=t,8===this.bitOffset&&(this.bitOffset=0,this.byteOffset++)}if(o>0){for(;o>=8;)e=e<<8|255&this.bytes[this.byteOffset],this.byteOffset++,o-=8;if(o>0){var c=8-o,s=255>>c<<c;e=e<<o|(this.bytes[this.byteOffset]&s)>>c,this.bitOffset+=o}}return e},o.prototype.available=function(){return 8*(this.bytes.length-this.byteOffset)-this.bitOffset},o}();e.BitStream=t},function(o,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.shiftJISTable={32:32,33:33,34:34,35:35,36:36,37:37,38:38,39:39,40:40,41:41,42:42,43:43,44:44,45:45,46:46,47:47,48:48,49:49,50:50,51:51,52:52,53:53,54:54,55:55,56:56,57:57,58:58,59:59,60:60,61:61,62:62,63:63,64:64,65:65,66:66,67:67,68:68,69:69,70:70,71:71,72:72,73:73,74:74,75:75,76:76,77:77,78:78,79:79,80:80,81:81,82:82,83:83,84:84,85:85,86:86,87:87,88:88,89:89,90:90,91:91,92:165,93:93,94:94,95:95,96:96,97:97,98:98,99:99,100:100,101:101,102:102,103:103,104:104,105:105,106:106,107:107,108:108,109:109,110:110,111:111,112:112,113:113,114:114,115:115,116:116,117:117,118:118,119:119,120:120,121:121,122:122,123:123,124:124,125:125,126:8254,33088:12288,33089:12289,33090:12290,33091:65292,33092:65294,33093:12539,33094:65306,33095:65307,33096:65311,33097:65281,33098:12443,33099:12444,33100:180,33101:65344,33102:168,33103:65342,33104:65507,33105:65343,33106:12541,33107:12542,33108:12445,33109:12446,33110:12291,33111:20189,33112:12293,33113:12294,33114:12295,33115:12540,33116:8213,33117:8208,33118:65295,33119:92,33120:12316,33121:8214,33122:65372,33123:8230,33124:8229,33125:8216,33126:8217,33127:8220,33128:8221,33129:65288,33130:65289,33131:12308,33132:12309,33133:65339,33134:65341,33135:65371,33136:65373,33137:12296,33138:12297,33139:12298,33140:12299,33141:12300,33142:12301,33143:12302,33144:12303,33145:12304,33146:12305,33147:65291,33148:8722,33149:177,33150:215,33152:247,33153:65309,33154:8800,33155:65308,33156:65310,33157:8806,33158:8807,33159:8734,33160:8756,33161:9794,33162:9792,33163:176,33164:8242,33165:8243,33166:8451,33167:65509,33168:65284,33169:162,33170:163,33171:65285,33172:65283,33173:65286,33174:65290,33175:65312,33176:167,33177:9734,33178:9733,33179:9675,33180:9679,33181:9678,33182:9671,33183:9670,33184:9633,33185:9632,33186:9651,33187:9650,33188:9661,33189:9660,33190:8251,33191:12306,33192:8594,33193:8592,33194:8593,33195:8595,33196:12307,33208:8712,33209:8715,33210:8838,33211:8839,33212:8834,33213:8835,33214:8746,33215:8745,33224:8743,33225:8744,33226:172,33227:8658,33228:8660,33229:8704,33230:8707,33242:8736,33243:8869,33244:8978,33245:8706,33246:8711,33247:8801,33248:8786,33249:8810,33250:8811,33251:8730,33252:8765,33253:8733,33254:8757,33255:8747,33256:8748,33264:8491,33265:8240,33266:9839,33267:9837,33268:9834,33269:8224,33270:8225,33271:182,33276:9711,33359:65296,33360:65297,33361:65298,33362:65299,33363:65300,33364:65301,33365:65302,33366:65303,33367:65304,33368:65305,33376:65313,33377:65314,33378:65315,33379:65316,33380:65317,33381:65318,33382:65319,33383:65320,33384:65321,33385:65322,33386:65323,33387:65324,33388:65325,33389:65326,33390:65327,33391:65328,33392:65329,33393:65330,33394:65331,33395:65332,33396:65333,33397:65334,33398:65335,33399:65336,33400:65337,33401:65338,33409:65345,33410:65346,33411:65347,33412:65348,33413:65349,33414:65350,33415:65351,33416:65352,33417:65353,33418:65354,33419:65355,33420:65356,33421:65357,33422:65358,33423:65359,33424:65360,33425:65361,33426:65362,33427:65363,33428:65364,33429:65365,33430:65366,33431:65367,33432:65368,33433:65369,33434:65370,33439:12353,33440:12354,33441:12355,33442:12356,33443:12357,33444:12358,33445:12359,33446:12360,33447:12361,33448:12362,33449:12363,33450:12364,33451:12365,33452:12366,33453:12367,33454:12368,33455:12369,33456:12370,33457:12371,33458:12372,33459:12373,33460:12374,33461:12375,33462:12376,33463:12377,33464:12378,33465:12379,33466:12380,33467:12381,33468:12382,33469:12383,33470:12384,33471:12385,33472:12386,33473:12387,33474:12388,33475:12389,33476:12390,33477:12391,33478:12392,33479:12393,33480:12394,33481:12395,33482:12396,33483:12397,33484:12398,33485:12399,33486:12400,33487:12401,33488:12402,33489:12403,33490:12404,33491:12405,33492:12406,33493:12407,33494:12408,33495:12409,33496:12410,33497:12411,33498:12412,33499:12413,33500:12414,33501:12415,33502:12416,33503:12417,33504:12418,33505:12419,33506:12420,33507:12421,33508:12422,33509:12423,33510:12424,33511:12425,33512:12426,33513:12427,33514:12428,33515:12429,33516:12430,33517:12431,33518:12432,33519:12433,33520:12434,33521:12435,33600:12449,33601:12450,33602:12451,33603:12452,33604:12453,33605:12454,33606:12455,33607:12456,33608:12457,33609:12458,33610:12459,33611:12460,33612:12461,33613:12462,33614:12463,33615:12464,33616:12465,33617:12466,33618:12467,33619:12468,33620:12469,33621:12470,33622:12471,33623:12472,33624:12473,33625:12474,33626:12475,33627:12476,33628:12477,33629:12478,33630:12479,33631:12480,33632:12481,33633:12482,33634:12483,33635:12484,33636:12485,33637:12486,33638:12487,33639:12488,33640:12489,33641:12490,33642:12491,33643:12492,33644:12493,33645:12494,33646:12495,33647:12496,33648:12497,33649:12498,33650:12499,33651:12500,33652:12501,33653:12502,33654:12503,33655:12504,33656:12505,33657:12506,33658:12507,33659:12508,33660:12509,33661:12510,33662:12511,33664:12512,33665:12513,33666:12514,33667:12515,33668:12516,33669:12517,33670:12518,33671:12519,33672:12520,33673:12521,33674:12522,33675:12523,33676:12524,33677:12525,33678:12526,33679:12527,33680:12528,33681:12529,33682:12530,33683:12531,33684:12532,33685:12533,33686:12534,33695:913,33696:914,33697:915,33698:916,33699:917,33700:918,33701:919,33702:920,33703:921,33704:922,33705:923,33706:924,33707:925,33708:926,33709:927,33710:928,33711:929,33712:931,33713:932,33714:933,33715:934,33716:935,33717:936,33718:937,33727:945,33728:946,33729:947,33730:948,33731:949,33732:950,33733:951,33734:952,33735:953,33736:954,33737:955,33738:956,33739:957,33740:958,33741:959,33742:960,33743:961,33744:963,33745:964,33746:965,33747:966,33748:967,33749:968,33750:969,33856:1040,33857:1041,33858:1042,33859:1043,33860:1044,33861:1045,33862:1025,33863:1046,33864:1047,33865:1048,33866:1049,33867:1050,33868:1051,33869:1052,33870:1053,33871:1054,33872:1055,33873:1056,33874:1057,33875:1058,33876:1059,33877:1060,33878:1061,33879:1062,33880:1063,33881:1064,33882:1065,33883:1066,33884:1067,33885:1068,33886:1069,33887:1070,33888:1071,33904:1072,33905:1073,33906:1074,33907:1075,33908:1076,33909:1077,33910:1105,33911:1078,33912:1079,33913:1080,33914:1081,33915:1082,33916:1083,33917:1084,33918:1085,33920:1086,33921:1087,33922:1088,33923:1089,33924:1090,33925:1091,33926:1092,33927:1093,33928:1094,33929:1095,33930:1096,33931:1097,33932:1098,33933:1099,33934:1100,33935:1101,33936:1102,33937:1103,33951:9472,33952:9474,33953:9484,33954:9488,33955:9496,33956:9492,33957:9500,33958:9516,33959:9508,33960:9524,33961:9532,33962:9473,33963:9475,33964:9487,33965:9491,33966:9499,33967:9495,33968:9507,33969:9523,33970:9515,33971:9531,33972:9547,33973:9504,33974:9519,33975:9512,33976:9527,33977:9535,33978:9501,33979:9520,33980:9509,33981:9528,33982:9538,34975:20124,34976:21782,34977:23043,34978:38463,34979:21696,34980:24859,34981:25384,34982:23030,34983:36898,34984:33909,34985:33564,34986:31312,34987:24746,34988:25569,34989:28197,34990:26093,34991:33894,34992:33446,34993:39925,34994:26771,34995:22311,34996:26017,34997:25201,34998:23451,34999:22992,35e3:34427,35001:39156,35002:32098,35003:32190,35004:39822,35005:25110,35006:31903,35007:34999,35008:23433,35009:24245,35010:25353,35011:26263,35012:26696,35013:38343,35014:38797,35015:26447,35016:20197,35017:20234,35018:20301,35019:20381,35020:20553,35021:22258,35022:22839,35023:22996,35024:23041,35025:23561,35026:24799,35027:24847,35028:24944,35029:26131,35030:26885,35031:28858,35032:30031,35033:30064,35034:31227,35035:32173,35036:32239,35037:32963,35038:33806,35039:34915,35040:35586,35041:36949,35042:36986,35043:21307,35044:20117,35045:20133,35046:22495,35047:32946,35048:37057,35049:30959,35050:19968,35051:22769,35052:28322,35053:36920,35054:31282,35055:33576,35056:33419,35057:39983,35058:20801,35059:21360,35060:21693,35061:21729,35062:22240,35063:23035,35064:24341,35065:39154,35066:28139,35067:32996,35068:34093,35136:38498,35137:38512,35138:38560,35139:38907,35140:21515,35141:21491,35142:23431,35143:28879,35144:32701,35145:36802,35146:38632,35147:21359,35148:40284,35149:31418,35150:19985,35151:30867,35152:33276,35153:28198,35154:22040,35155:21764,35156:27421,35157:34074,35158:39995,35159:23013,35160:21417,35161:28006,35162:29916,35163:38287,35164:22082,35165:20113,35166:36939,35167:38642,35168:33615,35169:39180,35170:21473,35171:21942,35172:23344,35173:24433,35174:26144,35175:26355,35176:26628,35177:27704,35178:27891,35179:27945,35180:29787,35181:30408,35182:31310,35183:38964,35184:33521,35185:34907,35186:35424,35187:37613,35188:28082,35189:30123,35190:30410,35191:39365,35192:24742,35193:35585,35194:36234,35195:38322,35196:27022,35197:21421,35198:20870,35200:22290,35201:22576,35202:22852,35203:23476,35204:24310,35205:24616,35206:25513,35207:25588,35208:27839,35209:28436,35210:28814,35211:28948,35212:29017,35213:29141,35214:29503,35215:32257,35216:33398,35217:33489,35218:34199,35219:36960,35220:37467,35221:40219,35222:22633,35223:26044,35224:27738,35225:29989,35226:20985,35227:22830,35228:22885,35229:24448,35230:24540,35231:25276,35232:26106,35233:27178,35234:27431,35235:27572,35236:29579,35237:32705,35238:35158,35239:40236,35240:40206,35241:40644,35242:23713,35243:27798,35244:33659,35245:20740,35246:23627,35247:25014,35248:33222,35249:26742,35250:29281,35251:20057,35252:20474,35253:21368,35254:24681,35255:28201,35256:31311,35257:38899,35258:19979,35259:21270,35260:20206,35261:20309,35262:20285,35263:20385,35264:20339,35265:21152,35266:21487,35267:22025,35268:22799,35269:23233,35270:23478,35271:23521,35272:31185,35273:26247,35274:26524,35275:26550,35276:27468,35277:27827,35278:28779,35279:29634,35280:31117,35281:31166,35282:31292,35283:31623,35284:33457,35285:33499,35286:33540,35287:33655,35288:33775,35289:33747,35290:34662,35291:35506,35292:22057,35293:36008,35294:36838,35295:36942,35296:38686,35297:34442,35298:20420,35299:23784,35300:25105,35301:29273,35302:30011,35303:33253,35304:33469,35305:34558,35306:36032,35307:38597,35308:39187,35309:39381,35310:20171,35311:20250,35312:35299,35313:22238,35314:22602,35315:22730,35316:24315,35317:24555,35318:24618,35319:24724,35320:24674,35321:25040,35322:25106,35323:25296,35324:25913,35392:39745,35393:26214,35394:26800,35395:28023,35396:28784,35397:30028,35398:30342,35399:32117,35400:33445,35401:34809,35402:38283,35403:38542,35404:35997,35405:20977,35406:21182,35407:22806,35408:21683,35409:23475,35410:23830,35411:24936,35412:27010,35413:28079,35414:30861,35415:33995,35416:34903,35417:35442,35418:37799,35419:39608,35420:28012,35421:39336,35422:34521,35423:22435,35424:26623,35425:34510,35426:37390,35427:21123,35428:22151,35429:21508,35430:24275,35431:25313,35432:25785,35433:26684,35434:26680,35435:27579,35436:29554,35437:30906,35438:31339,35439:35226,35440:35282,35441:36203,35442:36611,35443:37101,35444:38307,35445:38548,35446:38761,35447:23398,35448:23731,35449:27005,35450:38989,35451:38990,35452:25499,35453:31520,35454:27179,35456:27263,35457:26806,35458:39949,35459:28511,35460:21106,35461:21917,35462:24688,35463:25324,35464:27963,35465:28167,35466:28369,35467:33883,35468:35088,35469:36676,35470:19988,35471:39993,35472:21494,35473:26907,35474:27194,35475:38788,35476:26666,35477:20828,35478:31427,35479:33970,35480:37340,35481:37772,35482:22107,35483:40232,35484:26658,35485:33541,35486:33841,35487:31909,35488:21e3,35489:33477,35490:29926,35491:20094,35492:20355,35493:20896,35494:23506,35495:21002,35496:21208,35497:21223,35498:24059,35499:21914,35500:22570,35501:23014,35502:23436,35503:23448,35504:23515,35505:24178,35506:24185,35507:24739,35508:24863,35509:24931,35510:25022,35511:25563,35512:25954,35513:26577,35514:26707,35515:26874,35516:27454,35517:27475,35518:27735,35519:28450,35520:28567,35521:28485,35522:29872,35523:29976,35524:30435,35525:30475,35526:31487,35527:31649,35528:31777,35529:32233,35530:32566,35531:32752,35532:32925,35533:33382,35534:33694,35535:35251,35536:35532,35537:36011,35538:36996,35539:37969,35540:38291,35541:38289,35542:38306,35543:38501,35544:38867,35545:39208,35546:33304,35547:20024,35548:21547,35549:23736,35550:24012,35551:29609,35552:30284,35553:30524,35554:23721,35555:32747,35556:36107,35557:38593,35558:38929,35559:38996,35560:39e3,35561:20225,35562:20238,35563:21361,35564:21916,35565:22120,35566:22522,35567:22855,35568:23305,35569:23492,35570:23696,35571:24076,35572:24190,35573:24524,35574:25582,35575:26426,35576:26071,35577:26082,35578:26399,35579:26827,35580:26820,35648:27231,35649:24112,35650:27589,35651:27671,35652:27773,35653:30079,35654:31048,35655:23395,35656:31232,35657:32e3,35658:24509,35659:35215,35660:35352,35661:36020,35662:36215,35663:36556,35664:36637,35665:39138,35666:39438,35667:39740,35668:20096,35669:20605,35670:20736,35671:22931,35672:23452,35673:25135,35674:25216,35675:25836,35676:27450,35677:29344,35678:30097,35679:31047,35680:32681,35681:34811,35682:35516,35683:35696,35684:25516,35685:33738,35686:38816,35687:21513,35688:21507,35689:21931,35690:26708,35691:27224,35692:35440,35693:30759,35694:26485,35695:40653,35696:21364,35697:23458,35698:33050,35699:34384,35700:36870,35701:19992,35702:20037,35703:20167,35704:20241,35705:21450,35706:21560,35707:23470,35708:24339,35709:24613,35710:25937,35712:26429,35713:27714,35714:27762,35715:27875,35716:28792,35717:29699,35718:31350,35719:31406,35720:31496,35721:32026,35722:31998,35723:32102,35724:26087,35725:29275,35726:21435,35727:23621,35728:24040,35729:25298,35730:25312,35731:25369,35732:28192,35733:34394,35734:35377,35735:36317,35736:37624,35737:28417,35738:31142,35739:39770,35740:20136,35741:20139,35742:20140,35743:20379,35744:20384,35745:20689,35746:20807,35747:31478,35748:20849,35749:20982,35750:21332,35751:21281,35752:21375,35753:21483,35754:21932,35755:22659,35756:23777,35757:24375,35758:24394,35759:24623,35760:24656,35761:24685,35762:25375,35763:25945,35764:27211,35765:27841,35766:29378,35767:29421,35768:30703,35769:33016,35770:33029,35771:33288,35772:34126,35773:37111,35774:37857,35775:38911,35776:39255,35777:39514,35778:20208,35779:20957,35780:23597,35781:26241,35782:26989,35783:23616,35784:26354,35785:26997,35786:29577,35787:26704,35788:31873,35789:20677,35790:21220,35791:22343,35792:24062,35793:37670,35794:26020,35795:27427,35796:27453,35797:29748,35798:31105,35799:31165,35800:31563,35801:32202,35802:33465,35803:33740,35804:34943,35805:35167,35806:35641,35807:36817,35808:37329,35809:21535,35810:37504,35811:20061,35812:20534,35813:21477,35814:21306,35815:29399,35816:29590,35817:30697,35818:33510,35819:36527,35820:39366,35821:39368,35822:39378,35823:20855,35824:24858,35825:34398,35826:21936,35827:31354,35828:20598,35829:23507,35830:36935,35831:38533,35832:20018,35833:27355,35834:37351,35835:23633,35836:23624,35904:25496,35905:31391,35906:27795,35907:38772,35908:36705,35909:31402,35910:29066,35911:38536,35912:31874,35913:26647,35914:32368,35915:26705,35916:37740,35917:21234,35918:21531,35919:34219,35920:35347,35921:32676,35922:36557,35923:37089,35924:21350,35925:34952,35926:31041,35927:20418,35928:20670,35929:21009,35930:20804,35931:21843,35932:22317,35933:29674,35934:22411,35935:22865,35936:24418,35937:24452,35938:24693,35939:24950,35940:24935,35941:25001,35942:25522,35943:25658,35944:25964,35945:26223,35946:26690,35947:28179,35948:30054,35949:31293,35950:31995,35951:32076,35952:32153,35953:32331,35954:32619,35955:33550,35956:33610,35957:34509,35958:35336,35959:35427,35960:35686,35961:36605,35962:38938,35963:40335,35964:33464,35965:36814,35966:39912,35968:21127,35969:25119,35970:25731,35971:28608,35972:38553,35973:26689,35974:20625,35975:27424,35976:27770,35977:28500,35978:31348,35979:32080,35980:34880,35981:35363,35982:26376,35983:20214,35984:20537,35985:20518,35986:20581,35987:20860,35988:21048,35989:21091,35990:21927,35991:22287,35992:22533,35993:23244,35994:24314,35995:25010,35996:25080,35997:25331,35998:25458,35999:26908,36e3:27177,36001:29309,36002:29356,36003:29486,36004:30740,36005:30831,36006:32121,36007:30476,36008:32937,36009:35211,36010:35609,36011:36066,\n36012:36562,36013:36963,36014:37749,36015:38522,36016:38997,36017:39443,36018:40568,36019:20803,36020:21407,36021:21427,36022:24187,36023:24358,36024:28187,36025:28304,36026:29572,36027:29694,36028:32067,36029:33335,36030:35328,36031:35578,36032:38480,36033:20046,36034:20491,36035:21476,36036:21628,36037:22266,36038:22993,36039:23396,36040:24049,36041:24235,36042:24359,36043:25144,36044:25925,36045:26543,36046:28246,36047:29392,36048:31946,36049:34996,36050:32929,36051:32993,36052:33776,36053:34382,36054:35463,36055:36328,36056:37431,36057:38599,36058:39015,36059:40723,36060:20116,36061:20114,36062:20237,36063:21320,36064:21577,36065:21566,36066:23087,36067:24460,36068:24481,36069:24735,36070:26791,36071:27278,36072:29786,36073:30849,36074:35486,36075:35492,36076:35703,36077:37264,36078:20062,36079:39881,36080:20132,36081:20348,36082:20399,36083:20505,36084:20502,36085:20809,36086:20844,36087:21151,36088:21177,36089:21246,36090:21402,36091:21475,36092:21521,36160:21518,36161:21897,36162:22353,36163:22434,36164:22909,36165:23380,36166:23389,36167:23439,36168:24037,36169:24039,36170:24055,36171:24184,36172:24195,36173:24218,36174:24247,36175:24344,36176:24658,36177:24908,36178:25239,36179:25304,36180:25511,36181:25915,36182:26114,36183:26179,36184:26356,36185:26477,36186:26657,36187:26775,36188:27083,36189:27743,36190:27946,36191:28009,36192:28207,36193:28317,36194:30002,36195:30343,36196:30828,36197:31295,36198:31968,36199:32005,36200:32024,36201:32094,36202:32177,36203:32789,36204:32771,36205:32943,36206:32945,36207:33108,36208:33167,36209:33322,36210:33618,36211:34892,36212:34913,36213:35611,36214:36002,36215:36092,36216:37066,36217:37237,36218:37489,36219:30783,36220:37628,36221:38308,36222:38477,36224:38917,36225:39321,36226:39640,36227:40251,36228:21083,36229:21163,36230:21495,36231:21512,36232:22741,36233:25335,36234:28640,36235:35946,36236:36703,36237:40633,36238:20811,36239:21051,36240:21578,36241:22269,36242:31296,36243:37239,36244:40288,36245:40658,36246:29508,36247:28425,36248:33136,36249:29969,36250:24573,36251:24794,36252:39592,36253:29403,36254:36796,36255:27492,36256:38915,36257:20170,36258:22256,36259:22372,36260:22718,36261:23130,36262:24680,36263:25031,36264:26127,36265:26118,36266:26681,36267:26801,36268:28151,36269:30165,36270:32058,36271:33390,36272:39746,36273:20123,36274:20304,36275:21449,36276:21766,36277:23919,36278:24038,36279:24046,36280:26619,36281:27801,36282:29811,36283:30722,36284:35408,36285:37782,36286:35039,36287:22352,36288:24231,36289:25387,36290:20661,36291:20652,36292:20877,36293:26368,36294:21705,36295:22622,36296:22971,36297:23472,36298:24425,36299:25165,36300:25505,36301:26685,36302:27507,36303:28168,36304:28797,36305:37319,36306:29312,36307:30741,36308:30758,36309:31085,36310:25998,36311:32048,36312:33756,36313:35009,36314:36617,36315:38555,36316:21092,36317:22312,36318:26448,36319:32618,36320:36001,36321:20916,36322:22338,36323:38442,36324:22586,36325:27018,36326:32948,36327:21682,36328:23822,36329:22524,36330:30869,36331:40442,36332:20316,36333:21066,36334:21643,36335:25662,36336:26152,36337:26388,36338:26613,36339:31364,36340:31574,36341:32034,36342:37679,36343:26716,36344:39853,36345:31545,36346:21273,36347:20874,36348:21047,36416:23519,36417:25334,36418:25774,36419:25830,36420:26413,36421:27578,36422:34217,36423:38609,36424:30352,36425:39894,36426:25420,36427:37638,36428:39851,36429:30399,36430:26194,36431:19977,36432:20632,36433:21442,36434:23665,36435:24808,36436:25746,36437:25955,36438:26719,36439:29158,36440:29642,36441:29987,36442:31639,36443:32386,36444:34453,36445:35715,36446:36059,36447:37240,36448:39184,36449:26028,36450:26283,36451:27531,36452:20181,36453:20180,36454:20282,36455:20351,36456:21050,36457:21496,36458:21490,36459:21987,36460:22235,36461:22763,36462:22987,36463:22985,36464:23039,36465:23376,36466:23629,36467:24066,36468:24107,36469:24535,36470:24605,36471:25351,36472:25903,36473:23388,36474:26031,36475:26045,36476:26088,36477:26525,36478:27490,36480:27515,36481:27663,36482:29509,36483:31049,36484:31169,36485:31992,36486:32025,36487:32043,36488:32930,36489:33026,36490:33267,36491:35222,36492:35422,36493:35433,36494:35430,36495:35468,36496:35566,36497:36039,36498:36060,36499:38604,36500:39164,36501:27503,36502:20107,36503:20284,36504:20365,36505:20816,36506:23383,36507:23546,36508:24904,36509:25345,36510:26178,36511:27425,36512:28363,36513:27835,36514:29246,36515:29885,36516:30164,36517:30913,36518:31034,36519:32780,36520:32819,36521:33258,36522:33940,36523:36766,36524:27728,36525:40575,36526:24335,36527:35672,36528:40235,36529:31482,36530:36600,36531:23437,36532:38635,36533:19971,36534:21489,36535:22519,36536:22833,36537:23241,36538:23460,36539:24713,36540:28287,36541:28422,36542:30142,36543:36074,36544:23455,36545:34048,36546:31712,36547:20594,36548:26612,36549:33437,36550:23649,36551:34122,36552:32286,36553:33294,36554:20889,36555:23556,36556:25448,36557:36198,36558:26012,36559:29038,36560:31038,36561:32023,36562:32773,36563:35613,36564:36554,36565:36974,36566:34503,36567:37034,36568:20511,36569:21242,36570:23610,36571:26451,36572:28796,36573:29237,36574:37196,36575:37320,36576:37675,36577:33509,36578:23490,36579:24369,36580:24825,36581:20027,36582:21462,36583:23432,36584:25163,36585:26417,36586:27530,36587:29417,36588:29664,36589:31278,36590:33131,36591:36259,36592:37202,36593:39318,36594:20754,36595:21463,36596:21610,36597:23551,36598:25480,36599:27193,36600:32172,36601:38656,36602:22234,36603:21454,36604:21608,36672:23447,36673:23601,36674:24030,36675:20462,36676:24833,36677:25342,36678:27954,36679:31168,36680:31179,36681:32066,36682:32333,36683:32722,36684:33261,36685:33311,36686:33936,36687:34886,36688:35186,36689:35728,36690:36468,36691:36655,36692:36913,36693:37195,36694:37228,36695:38598,36696:37276,36697:20160,36698:20303,36699:20805,36700:21313,36701:24467,36702:25102,36703:26580,36704:27713,36705:28171,36706:29539,36707:32294,36708:37325,36709:37507,36710:21460,36711:22809,36712:23487,36713:28113,36714:31069,36715:32302,36716:31899,36717:22654,36718:29087,36719:20986,36720:34899,36721:36848,36722:20426,36723:23803,36724:26149,36725:30636,36726:31459,36727:33308,36728:39423,36729:20934,36730:24490,36731:26092,36732:26991,36733:27529,36734:28147,36736:28310,36737:28516,36738:30462,36739:32020,36740:24033,36741:36981,36742:37255,36743:38918,36744:20966,36745:21021,36746:25152,36747:26257,36748:26329,36749:28186,36750:24246,36751:32210,36752:32626,36753:26360,36754:34223,36755:34295,36756:35576,36757:21161,36758:21465,36759:22899,36760:24207,36761:24464,36762:24661,36763:37604,36764:38500,36765:20663,36766:20767,36767:21213,36768:21280,36769:21319,36770:21484,36771:21736,36772:21830,36773:21809,36774:22039,36775:22888,36776:22974,36777:23100,36778:23477,36779:23558,36780:23567,36781:23569,36782:23578,36783:24196,36784:24202,36785:24288,36786:24432,36787:25215,36788:25220,36789:25307,36790:25484,36791:25463,36792:26119,36793:26124,36794:26157,36795:26230,36796:26494,36797:26786,36798:27167,36799:27189,36800:27836,36801:28040,36802:28169,36803:28248,36804:28988,36805:28966,36806:29031,36807:30151,36808:30465,36809:30813,36810:30977,36811:31077,36812:31216,36813:31456,36814:31505,36815:31911,36816:32057,36817:32918,36818:33750,36819:33931,36820:34121,36821:34909,36822:35059,36823:35359,36824:35388,36825:35412,36826:35443,36827:35937,36828:36062,36829:37284,36830:37478,36831:37758,36832:37912,36833:38556,36834:38808,36835:19978,36836:19976,36837:19998,36838:20055,36839:20887,36840:21104,36841:22478,36842:22580,36843:22732,36844:23330,36845:24120,36846:24773,36847:25854,36848:26465,36849:26454,36850:27972,36851:29366,36852:30067,36853:31331,36854:33976,36855:35698,36856:37304,36857:37664,36858:22065,36859:22516,36860:39166,36928:25325,36929:26893,36930:27542,36931:29165,36932:32340,36933:32887,36934:33394,36935:35302,36936:39135,36937:34645,36938:36785,36939:23611,36940:20280,36941:20449,36942:20405,36943:21767,36944:23072,36945:23517,36946:23529,36947:24515,36948:24910,36949:25391,36950:26032,36951:26187,36952:26862,36953:27035,36954:28024,36955:28145,36956:30003,36957:30137,36958:30495,36959:31070,36960:31206,36961:32051,36962:33251,36963:33455,36964:34218,36965:35242,36966:35386,36967:36523,36968:36763,36969:36914,36970:37341,36971:38663,36972:20154,36973:20161,36974:20995,36975:22645,36976:22764,36977:23563,36978:29978,36979:23613,36980:33102,36981:35338,36982:36805,36983:38499,36984:38765,36985:31525,36986:35535,36987:38920,36988:37218,36989:22259,36990:21416,36992:36887,36993:21561,36994:22402,36995:24101,36996:25512,36997:27700,36998:28810,36999:30561,37e3:31883,37001:32736,37002:34928,37003:36930,37004:37204,37005:37648,37006:37656,37007:38543,37008:29790,37009:39620,37010:23815,37011:23913,37012:25968,37013:26530,37014:36264,37015:38619,37016:25454,37017:26441,37018:26905,37019:33733,37020:38935,37021:38592,37022:35070,37023:28548,37024:25722,37025:23544,37026:19990,37027:28716,37028:30045,37029:26159,37030:20932,37031:21046,37032:21218,37033:22995,37034:24449,37035:24615,37036:25104,37037:25919,37038:25972,37039:26143,37040:26228,37041:26866,37042:26646,37043:27491,37044:28165,37045:29298,37046:29983,37047:30427,37048:31934,37049:32854,37050:22768,37051:35069,37052:35199,37053:35488,37054:35475,37055:35531,37056:36893,37057:37266,37058:38738,37059:38745,37060:25993,37061:31246,37062:33030,37063:38587,37064:24109,37065:24796,37066:25114,37067:26021,37068:26132,37069:26512,37070:30707,37071:31309,37072:31821,37073:32318,37074:33034,37075:36012,37076:36196,37077:36321,37078:36447,37079:30889,37080:20999,37081:25305,37082:25509,37083:25666,37084:25240,37085:35373,37086:31363,37087:31680,37088:35500,37089:38634,37090:32118,37091:33292,37092:34633,37093:20185,37094:20808,37095:21315,37096:21344,37097:23459,37098:23554,37099:23574,37100:24029,37101:25126,37102:25159,37103:25776,37104:26643,37105:26676,37106:27849,37107:27973,37108:27927,37109:26579,37110:28508,37111:29006,37112:29053,37113:26059,37114:31359,37115:31661,37116:32218,37184:32330,37185:32680,37186:33146,37187:33307,37188:33337,37189:34214,37190:35438,37191:36046,37192:36341,37193:36984,37194:36983,37195:37549,37196:37521,37197:38275,37198:39854,37199:21069,37200:21892,37201:28472,37202:28982,37203:20840,37204:31109,37205:32341,37206:33203,37207:31950,37208:22092,37209:22609,37210:23720,37211:25514,37212:26366,37213:26365,37214:26970,37215:29401,37216:30095,37217:30094,37218:30990,37219:31062,37220:31199,37221:31895,37222:32032,37223:32068,37224:34311,37225:35380,37226:38459,37227:36961,37228:40736,37229:20711,37230:21109,37231:21452,37232:21474,37233:20489,37234:21930,37235:22766,37236:22863,37237:29245,37238:23435,37239:23652,37240:21277,37241:24803,37242:24819,37243:25436,37244:25475,37245:25407,37246:25531,37248:25805,37249:26089,37250:26361,37251:24035,37252:27085,37253:27133,37254:28437,37255:29157,37256:20105,37257:30185,37258:30456,37259:31379,37260:31967,37261:32207,37262:32156,37263:32865,37264:33609,37265:33624,37266:33900,37267:33980,37268:34299,37269:35013,37270:36208,37271:36865,37272:36973,37273:37783,37274:38684,37275:39442,37276:20687,37277:22679,37278:24974,37279:33235,37280:34101,37281:36104,37282:36896,37283:20419,37284:20596,37285:21063,37286:21363,37287:24687,37288:25417,37289:26463,37290:28204,37291:36275,37292:36895,37293:20439,37294:23646,37295:36042,37296:26063,37297:32154,37298:21330,37299:34966,37300:20854,37301:25539,37302:23384,37303:23403,37304:23562,37305:25613,37306:26449,37307:36956,37308:20182,37309:22810,37310:22826,37311:27760,37312:35409,37313:21822,37314:22549,37315:22949,37316:24816,37317:25171,37318:26561,37319:33333,37320:26965,37321:38464,37322:39364,37323:39464,37324:20307,37325:22534,37326:23550,37327:32784,37328:23729,37329:24111,37330:24453,37331:24608,37332:24907,37333:25140,37334:26367,37335:27888,37336:28382,37337:32974,37338:33151,37339:33492,37340:34955,37341:36024,37342:36864,37343:36910,37344:38538,37345:40667,37346:39899,37347:20195,37348:21488,37349:22823,37350:31532,37351:37261,37352:38988,37353:40441,37354:28381,37355:28711,37356:21331,37357:21828,37358:23429,37359:25176,37360:25246,37361:25299,37362:27810,37363:28655,37364:29730,37365:35351,37366:37944,37367:28609,37368:35582,37369:33592,37370:20967,37371:34552,37372:21482,37440:21481,37441:20294,37442:36948,37443:36784,37444:22890,37445:33073,37446:24061,37447:31466,37448:36799,37449:26842,37450:35895,37451:29432,37452:40008,37453:27197,37454:35504,37455:20025,37456:21336,37457:22022,37458:22374,37459:25285,37460:25506,37461:26086,37462:27470,37463:28129,37464:28251,37465:28845,37466:30701,37467:31471,37468:31658,37469:32187,37470:32829,37471:32966,37472:34507,37473:35477,37474:37723,37475:22243,37476:22727,37477:24382,37478:26029,37479:26262,37480:27264,37481:27573,37482:30007,37483:35527,37484:20516,37485:30693,37486:22320,37487:24347,37488:24677,37489:26234,37490:27744,37491:30196,37492:31258,37493:32622,37494:33268,37495:34584,37496:36933,37497:39347,37498:31689,37499:30044,37500:31481,37501:31569,37502:33988,37504:36880,37505:31209,37506:31378,37507:33590,37508:23265,37509:30528,37510:20013,37511:20210,37512:23449,37513:24544,37514:25277,37515:26172,37516:26609,37517:27880,37518:34411,37519:34935,37520:35387,37521:37198,37522:37619,37523:39376,37524:27159,37525:28710,37526:29482,37527:33511,37528:33879,37529:36015,37530:19969,37531:20806,37532:20939,37533:21899,37534:23541,37535:24086,37536:24115,37537:24193,37538:24340,37539:24373,37540:24427,37541:24500,37542:25074,37543:25361,37544:26274,37545:26397,37546:28526,37547:29266,37548:30010,37549:30522,37550:32884,37551:33081,37552:33144,37553:34678,37554:35519,37555:35548,37556:36229,37557:36339,37558:37530,37559:38263,37560:38914,37561:40165,37562:21189,37563:25431,37564:30452,37565:26389,37566:27784,37567:29645,37568:36035,37569:37806,37570:38515,37571:27941,37572:22684,37573:26894,37574:27084,37575:36861,37576:37786,37577:30171,37578:36890,37579:22618,37580:26626,37581:25524,37582:27131,37583:20291,37584:28460,37585:26584,37586:36795,37587:34086,37588:32180,37589:37716,37590:26943,37591:28528,37592:22378,37593:22775,37594:23340,37595:32044,37596:29226,37597:21514,37598:37347,37599:40372,37600:20141,37601:20302,37602:20572,37603:20597,37604:21059,37605:35998,37606:21576,37607:22564,37608:23450,37609:24093,37610:24213,37611:24237,37612:24311,37613:24351,37614:24716,37615:25269,37616:25402,37617:25552,37618:26799,37619:27712,37620:30855,37621:31118,37622:31243,37623:32224,37624:33351,37625:35330,37626:35558,37627:36420,37628:36883,37696:37048,37697:37165,37698:37336,37699:40718,37700:27877,37701:25688,37702:25826,37703:25973,37704:28404,37705:30340,37706:31515,37707:36969,37708:37841,37709:28346,37710:21746,37711:24505,37712:25764,37713:36685,37714:36845,37715:37444,37716:20856,37717:22635,37718:22825,37719:23637,37720:24215,37721:28155,37722:32399,37723:29980,37724:36028,37725:36578,37726:39003,37727:28857,37728:20253,37729:27583,37730:28593,37731:3e4,37732:38651,37733:20814,37734:21520,37735:22581,37736:22615,37737:22956,37738:23648,37739:24466,37740:26007,37741:26460,37742:28193,37743:30331,37744:33759,37745:36077,37746:36884,37747:37117,37748:37709,37749:30757,37750:30778,37751:21162,37752:24230,37753:22303,37754:22900,37755:24594,37756:20498,37757:20826,37758:20908,37760:20941,37761:20992,37762:21776,37763:22612,37764:22616,37765:22871,37766:23445,37767:23798,37768:23947,37769:24764,37770:25237,37771:25645,37772:26481,37773:26691,37774:26812,37775:26847,37776:30423,37777:28120,37778:28271,37779:28059,37780:28783,37781:29128,37782:24403,37783:30168,37784:31095,37785:31561,37786:31572,37787:31570,37788:31958,37789:32113,37790:21040,37791:33891,37792:34153,37793:34276,37794:35342,37795:35588,37796:35910,37797:36367,37798:36867,37799:36879,37800:37913,37801:38518,37802:38957,37803:39472,37804:38360,37805:20685,37806:21205,37807:21516,37808:22530,37809:23566,37810:24999,37811:25758,37812:27934,37813:30643,37814:31461,37815:33012,37816:33796,37817:36947,37818:37509,37819:23776,37820:40199,37821:21311,37822:24471,37823:24499,37824:28060,37825:29305,37826:30563,37827:31167,37828:31716,37829:27602,37830:29420,37831:35501,37832:26627,37833:27233,37834:20984,37835:31361,37836:26932,37837:23626,37838:40182,37839:33515,37840:23493,37841:37193,37842:28702,37843:22136,37844:23663,37845:24775,37846:25958,37847:27788,37848:35930,37849:36929,37850:38931,37851:21585,37852:26311,37853:37389,37854:22856,37855:37027,37856:20869,37857:20045,37858:20970,37859:34201,37860:35598,37861:28760,37862:25466,37863:37707,37864:26978,37865:39348,37866:32260,37867:30071,37868:21335,37869:26976,37870:36575,37871:38627,37872:27741,37873:20108,37874:23612,37875:24336,37876:36841,37877:21250,37878:36049,37879:32905,37880:34425,37881:24319,37882:26085,37883:20083,37884:20837,37952:22914,37953:23615,37954:38894,37955:20219,37956:22922,37957:24525,37958:35469,37959:28641,37960:31152,37961:31074,37962:23527,37963:33905,37964:29483,37965:29105,37966:24180,37967:24565,37968:25467,37969:25754,37970:29123,37971:31896,37972:20035,37973:24316,37974:20043,37975:22492,37976:22178,37977:24745,37978:28611,37979:32013,37980:33021,37981:33075,37982:33215,37983:36786,37984:35223,37985:34468,37986:24052,37987:25226,37988:25773,37989:35207,37990:26487,37991:27874,37992:27966,37993:29750,37994:30772,37995:23110,37996:32629,37997:33453,37998:39340,37999:20467,38e3:24259,38001:25309,38002:25490,38003:25943,38004:26479,38005:30403,38006:29260,38007:32972,38008:32954,38009:36649,38010:37197,38011:20493,38012:22521,38013:23186,38014:26757,38016:26995,38017:29028,38018:29437,38019:36023,38020:22770,38021:36064,38022:38506,38023:36889,38024:34687,38025:31204,38026:30695,38027:33833,38028:20271,38029:21093,38030:21338,38031:25293,38032:26575,38033:27850,38034:30333,38035:31636,38036:31893,38037:33334,38038:34180,38039:36843,38040:26333,38041:28448,38042:29190,38043:32283,38044:33707,38045:39361,38046:40614,38047:20989,38048:31665,38049:30834,38050:31672,38051:32903,38052:31560,38053:27368,38054:24161,38055:32908,38056:30033,38057:30048,38058:20843,38059:37474,38060:28300,38061:30330,38062:37271,38063:39658,38064:20240,38065:32624,38066:25244,38067:31567,38068:38309,38069:40169,38070:22138,38071:22617,38072:34532,38073:38588,38074:20276,38075:21028,38076:21322,38077:21453,38078:21467,38079:24070,38080:25644,38081:26001,38082:26495,38083:27710,38084:27726,38085:29256,38086:29359,38087:29677,38088:30036,38089:32321,38090:33324,38091:34281,38092:36009,38093:31684,38094:37318,38095:29033,38096:38930,38097:39151,38098:25405,38099:26217,38100:30058,38101:30436,38102:30928,38103:34115,38104:34542,38105:21290,38106:21329,38107:21542,38108:22915,38109:24199,38110:24444,38111:24754,38112:25161,38113:25209,38114:25259,38115:26e3,38116:27604,38117:27852,38118:30130,38119:30382,38120:30865,38121:31192,38122:32203,38123:32631,38124:32933,38125:34987,38126:35513,38127:36027,38128:36991,38129:38750,38130:39131,38131:27147,38132:31800,38133:20633,38134:23614,38135:24494,38136:26503,38137:27608,38138:29749,38139:30473,38140:32654,38208:40763,38209:26570,38210:31255,38211:21305,38212:30091,38213:39661,38214:24422,38215:33181,38216:33777,38217:32920,38218:24380,38219:24517,38220:30050,38221:31558,38222:36924,38223:26727,38224:23019,38225:23195,38226:32016,38227:30334,38228:35628,38229:20469,38230:24426,38231:27161,38232:27703,38233:28418,38234:29922,38235:31080,38236:34920,38237:35413,38238:35961,38239:24287,38240:25551,38241:30149,38242:31186,38243:33495,38244:37672,38245:37618,38246:33948,38247:34541,38248:39981,38249:21697,38250:24428,38251:25996,38252:27996,38253:28693,38254:36007,38255:36051,38256:38971,38257:25935,38258:29942,38259:19981,38260:20184,38261:22496,38262:22827,38263:23142,38264:23500,38265:20904,38266:24067,38267:24220,38268:24598,38269:25206,38270:25975,38272:26023,38273:26222,38274:28014,38275:29238,38276:31526,38277:33104,38278:33178,38279:33433,38280:35676,38281:36e3,38282:36070,38283:36212,38284:38428,38285:38468,38286:20398,38287:25771,38288:27494,38289:33310,38290:33889,38291:34154,38292:37096,38293:23553,38294:26963,38295:39080,38296:33914,38297:34135,38298:20239,38299:21103,38300:24489,38301:24133,38302:26381,38303:31119,38304:33145,38305:35079,38306:35206,38307:28149,38308:24343,38309:25173,38310:27832,38311:20175,38312:29289,38313:39826,38314:20998,38315:21563,38316:22132,38317:22707,38318:24996,38319:25198,38320:28954,38321:22894,38322:31881,38323:31966,38324:32027,38325:38640,38326:25991,38327:32862,38328:19993,38329:20341,38330:20853,38331:22592,38332:24163,38333:24179,38334:24330,38335:26564,38336:20006,38337:34109,38338:38281,38339:38491,38340:31859,38341:38913,38342:20731,38343:22721,38344:30294,38345:30887,38346:21029,38347:30629,38348:34065,38349:31622,38350:20559,38351:22793,38352:29255,38353:31687,38354:32232,38355:36794,38356:36820,38357:36941,38358:20415,38359:21193,38360:23081,38361:24321,38362:38829,38363:20445,38364:33303,38365:37610,38366:22275,38367:25429,38368:27497,38369:29995,38370:35036,38371:36628,38372:31298,38373:21215,38374:22675,38375:24917,38376:25098,38377:26286,38378:27597,38379:31807,38380:33769,38381:20515,38382:20472,38383:21253,38384:21574,38385:22577,38386:22857,38387:23453,38388:23792,38389:23791,38390:23849,38391:24214,38392:25265,38393:25447,38394:25918,38395:26041,38396:26379,38464:27861,38465:27873,38466:28921,38467:30770,38468:32299,38469:32990,38470:33459,38471:33804,38472:34028,38473:34562,38474:35090,38475:35370,38476:35914,38477:37030,38478:37586,38479:39165,38480:40179,38481:40300,38482:20047,38483:20129,38484:20621,38485:21078,38486:22346,38487:22952,38488:24125,38489:24536,38490:24537,38491:25151,38492:26292,38493:26395,38494:26576,38495:26834,38496:20882,38497:32033,38498:32938,38499:33192,38500:35584,38501:35980,38502:36031,38503:37502,38504:38450,38505:21536,38506:38956,38507:21271,38508:20693,38509:21340,38510:22696,38511:25778,38512:26420,38513:29287,38514:30566,38515:31302,38516:37350,38517:21187,38518:27809,38519:27526,38520:22528,38521:24140,38522:22868,38523:26412,38524:32763,38525:20961,38526:30406,38528:25705,38529:30952,38530:39764,38531:40635,38532:22475,38533:22969,38534:26151,38535:26522,38536:27598,38537:21737,38538:27097,38539:24149,38540:33180,38541:26517,38542:39850,38543:26622,38544:40018,38545:26717,38546:20134,38547:20451,38548:21448,38549:25273,38550:26411,38551:27819,38552:36804,38553:20397,38554:32365,38555:40639,38556:19975,38557:24930,38558:28288,38559:28459,38560:34067,38561:21619,38562:26410,38563:39749,38564:24051,38565:31637,38566:23724,38567:23494,38568:34588,38569:28234,38570:34001,38571:31252,38572:33032,38573:22937,38574:31885,38575:27665,38576:30496,38577:21209,38578:22818,38579:28961,38580:29279,38581:30683,38582:38695,38583:40289,38584:26891,38585:23167,38586:23064,38587:20901,38588:21517,38589:21629,38590:26126,38591:30431,38592:36855,38593:37528,38594:40180,38595:23018,38596:29277,38597:28357,38598:20813,38599:26825,38600:32191,38601:32236,38602:38754,38603:40634,38604:25720,38605:27169,38606:33538,38607:22916,38608:23391,38609:27611,38610:29467,38611:30450,38612:32178,38613:32791,38614:33945,38615:20786,38616:26408,38617:40665,38618:30446,38619:26466,38620:21247,38621:39173,38622:23588,38623:25147,38624:31870,38625:36016,38626:21839,38627:24758,38628:32011,38629:38272,38630:21249,38631:20063,38632:20918,38633:22812,38634:29242,38635:32822,38636:37326,38637:24357,38638:30690,38639:21380,38640:24441,38641:32004,38642:34220,38643:35379,38644:36493,38645:38742,38646:26611,38647:34222,38648:37971,38649:24841,38650:24840,38651:27833,38652:30290,38720:35565,38721:36664,38722:21807,38723:20305,38724:20778,38725:21191,38726:21451,38727:23461,38728:24189,38729:24736,38730:24962,38731:25558,38732:26377,38733:26586,38734:28263,38735:28044,38736:29494,38737:29495,38738:30001,38739:31056,38740:35029,38741:35480,38742:36938,38743:37009,38744:37109,38745:38596,38746:34701,38747:22805,38748:20104,38749:20313,38750:19982,38751:35465,38752:36671,38753:38928,38754:20653,38755:24188,38756:22934,38757:23481,38758:24248,38759:25562,38760:25594,38761:25793,38762:26332,38763:26954,38764:27096,38765:27915,38766:28342,38767:29076,38768:29992,38769:31407,38770:32650,38771:32768,38772:33865,38773:33993,38774:35201,38775:35617,38776:36362,38777:36965,38778:38525,38779:39178,38780:24958,38781:25233,38782:27442,38784:27779,38785:28020,38786:32716,38787:32764,38788:28096,38789:32645,38790:34746,38791:35064,38792:26469,38793:33713,38794:38972,38795:38647,38796:27931,38797:32097,38798:33853,38799:37226,38800:20081,38801:21365,38802:23888,38803:27396,38804:28651,38805:34253,38806:34349,38807:35239,38808:21033,38809:21519,38810:23653,38811:26446,38812:26792,38813:29702,38814:29827,38815:30178,38816:35023,38817:35041,38818:37324,38819:38626,38820:38520,38821:24459,38822:29575,38823:31435,38824:33870,38825:25504,38826:30053,38827:21129,38828:27969,38829:28316,38830:29705,38831:30041,38832:30827,38833:31890,38834:38534,38835:31452,38836:40845,38837:20406,38838:24942,38839:26053,38840:34396,38841:20102,38842:20142,38843:20698,38844:20001,38845:20940,38846:23534,38847:26009,38848:26753,38849:28092,38850:29471,38851:30274,38852:30637,38853:31260,38854:31975,38855:33391,38856:35538,38857:36988,38858:37327,38859:38517,38860:38936,38861:21147,38862:32209,38863:20523,38864:21400,38865:26519,38866:28107,38867:29136,38868:29747,38869:33256,38870:36650,38871:38563,38872:40023,38873:40607,38874:29792,38875:22593,38876:28057,38877:32047,38878:39006,38879:20196,38880:20278,38881:20363,38882:20919,38883:21169,38884:23994,38885:24604,38886:29618,38887:31036,38888:33491,38889:37428,38890:38583,38891:38646,38892:38666,38893:40599,38894:40802,38895:26278,38896:27508,38897:21015,38898:21155,38899:28872,38900:35010,38901:24265,38902:24651,38903:24976,38904:28451,38905:29001,38906:31806,38907:32244,38908:32879,38976:34030,38977:36899,38978:37676,38979:21570,38980:39791,38981:27347,38982:28809,38983:36034,38984:36335,38985:38706,38986:21172,38987:23105,38988:24266,38989:24324,38990:26391,38991:27004,38992:27028,38993:28010,38994:28431,38995:29282,38996:29436,38997:31725,38998:32769,38999:32894,39e3:34635,39001:37070,39002:20845,39003:40595,39004:31108,39005:32907,39006:37682,39007:35542,39008:20525,39009:21644,39010:35441,39011:27498,39012:36036,39013:33031,39014:24785,39015:26528,39016:40434,39017:20121,39018:20120,39019:39952,39020:35435,39021:34241,39022:34152,39023:26880,39024:28286,39025:30871,39026:33109,39071:24332,39072:19984,39073:19989,39074:20010,39075:20017,39076:20022,39077:20028,39078:20031,39079:20034,39080:20054,39081:20056,39082:20098,39083:20101,39084:35947,39085:20106,39086:33298,39087:24333,39088:20110,39089:20126,39090:20127,39091:20128,39092:20130,39093:20144,39094:20147,39095:20150,39096:20174,39097:20173,39098:20164,39099:20166,39100:20162,39101:20183,39102:20190,39103:20205,39104:20191,39105:20215,39106:20233,39107:20314,39108:20272,39109:20315,39110:20317,39111:20311,39112:20295,39113:20342,39114:20360,39115:20367,39116:20376,39117:20347,39118:20329,39119:20336,39120:20369,39121:20335,39122:20358,39123:20374,39124:20760,39125:20436,39126:20447,39127:20430,39128:20440,39129:20443,39130:20433,39131:20442,39132:20432,39133:20452,39134:20453,39135:20506,39136:20520,39137:20500,39138:20522,39139:20517,39140:20485,39141:20252,39142:20470,39143:20513,39144:20521,39145:20524,39146:20478,39147:20463,39148:20497,39149:20486,39150:20547,39151:20551,39152:26371,39153:20565,39154:20560,39155:20552,39156:20570,39157:20566,39158:20588,39159:20600,39160:20608,39161:20634,39162:20613,39163:20660,39164:20658,39232:20681,39233:20682,39234:20659,39235:20674,39236:20694,39237:20702,39238:20709,39239:20717,39240:20707,39241:20718,39242:20729,39243:20725,39244:20745,39245:20737,39246:20738,39247:20758,39248:20757,39249:20756,39250:20762,39251:20769,39252:20794,39253:20791,39254:20796,39255:20795,39256:20799,39257:20800,39258:20818,39259:20812,39260:20820,39261:20834,39262:31480,39263:20841,39264:20842,39265:20846,39266:20864,39267:20866,39268:22232,39269:20876,39270:20873,39271:20879,39272:20881,39273:20883,39274:20885,39275:20886,39276:20900,39277:20902,39278:20898,39279:20905,39280:20906,39281:20907,39282:20915,39283:20913,39284:20914,39285:20912,39286:20917,39287:20925,39288:20933,39289:20937,39290:20955,39291:20960,39292:34389,39293:20969,39294:20973,39296:20976,39297:20981,39298:20990,39299:20996,39300:21003,39301:21012,39302:21006,39303:21031,39304:21034,39305:21038,39306:21043,39307:21049,39308:21071,39309:21060,39310:21067,39311:21068,39312:21086,39313:21076,39314:21098,39315:21108,39316:21097,39317:21107,39318:21119,39319:21117,39320:21133,39321:21140,39322:21138,39323:21105,39324:21128,39325:21137,39326:36776,39327:36775,39328:21164,39329:21165,39330:21180,39331:21173,39332:21185,39333:21197,39334:21207,39335:21214,39336:21219,39337:21222,39338:39149,39339:21216,39340:21235,39341:21237,39342:21240,39343:21241,39344:21254,39345:21256,39346:30008,39347:21261,39348:21264,39349:21263,39350:21269,39351:21274,39352:21283,39353:21295,39354:21297,39355:21299,39356:21304,39357:21312,39358:21318,39359:21317,39360:19991,39361:21321,39362:21325,39363:20950,39364:21342,39365:21353,39366:21358,39367:22808,39368:21371,39369:21367,39370:21378,39371:21398,39372:21408,39373:21414,39374:21413,39375:21422,39376:21424,39377:21430,39378:21443,39379:31762,39380:38617,39381:21471,39382:26364,39383:29166,39384:21486,39385:21480,39386:21485,39387:21498,39388:21505,39389:21565,39390:21568,39391:21548,39392:21549,39393:21564,39394:21550,39395:21558,39396:21545,39397:21533,39398:21582,39399:21647,39400:21621,39401:21646,39402:21599,39403:21617,39404:21623,39405:21616,39406:21650,39407:21627,39408:21632,39409:21622,39410:21636,39411:21648,39412:21638,39413:21703,39414:21666,39415:21688,39416:21669,39417:21676,39418:21700,39419:21704,39420:21672,39488:21675,39489:21698,39490:21668,39491:21694,39492:21692,39493:21720,39494:21733,39495:21734,39496:21775,39497:21780,39498:21757,39499:21742,39500:21741,39501:21754,39502:21730,39503:21817,39504:21824,39505:21859,39506:21836,39507:21806,39508:21852,39509:21829,39510:21846,39511:21847,39512:21816,39513:21811,39514:21853,39515:21913,39516:21888,39517:21679,39518:21898,39519:21919,39520:21883,39521:21886,39522:21912,39523:21918,39524:21934,39525:21884,39526:21891,39527:21929,39528:21895,39529:21928,39530:21978,39531:21957,39532:21983,39533:21956,39534:21980,39535:21988,39536:21972,39537:22036,39538:22007,39539:22038,39540:22014,39541:22013,39542:22043,39543:22009,39544:22094,39545:22096,39546:29151,39547:22068,39548:22070,39549:22066,39550:22072,39552:22123,39553:22116,39554:22063,39555:22124,39556:22122,39557:22150,39558:22144,39559:22154,39560:22176,39561:22164,39562:22159,39563:22181,39564:22190,39565:22198,39566:22196,39567:22210,39568:22204,39569:22209,39570:22211,39571:22208,39572:22216,39573:22222,39574:22225,39575:22227,39576:22231,39577:22254,39578:22265,39579:22272,39580:22271,39581:22276,39582:22281,39583:22280,39584:22283,39585:22285,39586:22291,39587:22296,39588:22294,39589:21959,39590:22300,39591:22310,39592:22327,39593:22328,39594:22350,39595:22331,39596:22336,39597:22351,39598:22377,39599:22464,39600:22408,39601:22369,39602:22399,39603:22409,39604:22419,39605:22432,39606:22451,39607:22436,39608:22442,39609:22448,39610:22467,39611:22470,39612:22484,39613:22482,39614:22483,39615:22538,39616:22486,39617:22499,39618:22539,39619:22553,39620:22557,39621:22642,39622:22561,39623:22626,39624:22603,39625:22640,39626:27584,39627:22610,39628:22589,39629:22649,39630:22661,39631:22713,39632:22687,39633:22699,39634:22714,39635:22750,39636:22715,39637:22712,39638:22702,39639:22725,39640:22739,39641:22737,39642:22743,39643:22745,39644:22744,39645:22757,39646:22748,39647:22756,39648:22751,39649:22767,39650:22778,39651:22777,39652:22779,39653:22780,39654:22781,39655:22786,39656:22794,39657:22800,39658:22811,39659:26790,39660:22821,39661:22828,39662:22829,39663:22834,39664:22840,39665:22846,39666:31442,39667:22869,39668:22864,39669:22862,39670:22874,39671:22872,39672:22882,39673:22880,\n39674:22887,39675:22892,39676:22889,39744:22904,39745:22913,39746:22941,39747:20318,39748:20395,39749:22947,39750:22962,39751:22982,39752:23016,39753:23004,39754:22925,39755:23001,39756:23002,39757:23077,39758:23071,39759:23057,39760:23068,39761:23049,39762:23066,39763:23104,39764:23148,39765:23113,39766:23093,39767:23094,39768:23138,39769:23146,39770:23194,39771:23228,39772:23230,39773:23243,39774:23234,39775:23229,39776:23267,39777:23255,39778:23270,39779:23273,39780:23254,39781:23290,39782:23291,39783:23308,39784:23307,39785:23318,39786:23346,39787:23248,39788:23338,39789:23350,39790:23358,39791:23363,39792:23365,39793:23360,39794:23377,39795:23381,39796:23386,39797:23387,39798:23397,39799:23401,39800:23408,39801:23411,39802:23413,39803:23416,39804:25992,39805:23418,39806:23424,39808:23427,39809:23462,39810:23480,39811:23491,39812:23495,39813:23497,39814:23508,39815:23504,39816:23524,39817:23526,39818:23522,39819:23518,39820:23525,39821:23531,39822:23536,39823:23542,39824:23539,39825:23557,39826:23559,39827:23560,39828:23565,39829:23571,39830:23584,39831:23586,39832:23592,39833:23608,39834:23609,39835:23617,39836:23622,39837:23630,39838:23635,39839:23632,39840:23631,39841:23409,39842:23660,39843:23662,39844:20066,39845:23670,39846:23673,39847:23692,39848:23697,39849:23700,39850:22939,39851:23723,39852:23739,39853:23734,39854:23740,39855:23735,39856:23749,39857:23742,39858:23751,39859:23769,39860:23785,39861:23805,39862:23802,39863:23789,39864:23948,39865:23786,39866:23819,39867:23829,39868:23831,39869:23900,39870:23839,39871:23835,39872:23825,39873:23828,39874:23842,39875:23834,39876:23833,39877:23832,39878:23884,39879:23890,39880:23886,39881:23883,39882:23916,39883:23923,39884:23926,39885:23943,39886:23940,39887:23938,39888:23970,39889:23965,39890:23980,39891:23982,39892:23997,39893:23952,39894:23991,39895:23996,39896:24009,39897:24013,39898:24019,39899:24018,39900:24022,39901:24027,39902:24043,39903:24050,39904:24053,39905:24075,39906:24090,39907:24089,39908:24081,39909:24091,39910:24118,39911:24119,39912:24132,39913:24131,39914:24128,39915:24142,39916:24151,39917:24148,39918:24159,39919:24162,39920:24164,39921:24135,39922:24181,39923:24182,39924:24186,39925:40636,39926:24191,39927:24224,39928:24257,39929:24258,39930:24264,39931:24272,39932:24271,4e4:24278,40001:24291,40002:24285,40003:24282,40004:24283,40005:24290,40006:24289,40007:24296,40008:24297,40009:24300,40010:24305,40011:24307,40012:24304,40013:24308,40014:24312,40015:24318,40016:24323,40017:24329,40018:24413,40019:24412,40020:24331,40021:24337,40022:24342,40023:24361,40024:24365,40025:24376,40026:24385,40027:24392,40028:24396,40029:24398,40030:24367,40031:24401,40032:24406,40033:24407,40034:24409,40035:24417,40036:24429,40037:24435,40038:24439,40039:24451,40040:24450,40041:24447,40042:24458,40043:24456,40044:24465,40045:24455,40046:24478,40047:24473,40048:24472,40049:24480,40050:24488,40051:24493,40052:24508,40053:24534,40054:24571,40055:24548,40056:24568,40057:24561,40058:24541,40059:24755,40060:24575,40061:24609,40062:24672,40064:24601,40065:24592,40066:24617,40067:24590,40068:24625,40069:24603,40070:24597,40071:24619,40072:24614,40073:24591,40074:24634,40075:24666,40076:24641,40077:24682,40078:24695,40079:24671,40080:24650,40081:24646,40082:24653,40083:24675,40084:24643,40085:24676,40086:24642,40087:24684,40088:24683,40089:24665,40090:24705,40091:24717,40092:24807,40093:24707,40094:24730,40095:24708,40096:24731,40097:24726,40098:24727,40099:24722,40100:24743,40101:24715,40102:24801,40103:24760,40104:24800,40105:24787,40106:24756,40107:24560,40108:24765,40109:24774,40110:24757,40111:24792,40112:24909,40113:24853,40114:24838,40115:24822,40116:24823,40117:24832,40118:24820,40119:24826,40120:24835,40121:24865,40122:24827,40123:24817,40124:24845,40125:24846,40126:24903,40127:24894,40128:24872,40129:24871,40130:24906,40131:24895,40132:24892,40133:24876,40134:24884,40135:24893,40136:24898,40137:24900,40138:24947,40139:24951,40140:24920,40141:24921,40142:24922,40143:24939,40144:24948,40145:24943,40146:24933,40147:24945,40148:24927,40149:24925,40150:24915,40151:24949,40152:24985,40153:24982,40154:24967,40155:25004,40156:24980,40157:24986,40158:24970,40159:24977,40160:25003,40161:25006,40162:25036,40163:25034,40164:25033,40165:25079,40166:25032,40167:25027,40168:25030,40169:25018,40170:25035,40171:32633,40172:25037,40173:25062,40174:25059,40175:25078,40176:25082,40177:25076,40178:25087,40179:25085,40180:25084,40181:25086,40182:25088,40183:25096,40184:25097,40185:25101,40186:25100,40187:25108,40188:25115,40256:25118,40257:25121,40258:25130,40259:25134,40260:25136,40261:25138,40262:25139,40263:25153,40264:25166,40265:25182,40266:25187,40267:25179,40268:25184,40269:25192,40270:25212,40271:25218,40272:25225,40273:25214,40274:25234,40275:25235,40276:25238,40277:25300,40278:25219,40279:25236,40280:25303,40281:25297,40282:25275,40283:25295,40284:25343,40285:25286,40286:25812,40287:25288,40288:25308,40289:25292,40290:25290,40291:25282,40292:25287,40293:25243,40294:25289,40295:25356,40296:25326,40297:25329,40298:25383,40299:25346,40300:25352,40301:25327,40302:25333,40303:25424,40304:25406,40305:25421,40306:25628,40307:25423,40308:25494,40309:25486,40310:25472,40311:25515,40312:25462,40313:25507,40314:25487,40315:25481,40316:25503,40317:25525,40318:25451,40320:25449,40321:25534,40322:25577,40323:25536,40324:25542,40325:25571,40326:25545,40327:25554,40328:25590,40329:25540,40330:25622,40331:25652,40332:25606,40333:25619,40334:25638,40335:25654,40336:25885,40337:25623,40338:25640,40339:25615,40340:25703,40341:25711,40342:25718,40343:25678,40344:25898,40345:25749,40346:25747,40347:25765,40348:25769,40349:25736,40350:25788,40351:25818,40352:25810,40353:25797,40354:25799,40355:25787,40356:25816,40357:25794,40358:25841,40359:25831,40360:33289,40361:25824,40362:25825,40363:25260,40364:25827,40365:25839,40366:25900,40367:25846,40368:25844,40369:25842,40370:25850,40371:25856,40372:25853,40373:25880,40374:25884,40375:25861,40376:25892,40377:25891,40378:25899,40379:25908,40380:25909,40381:25911,40382:25910,40383:25912,40384:30027,40385:25928,40386:25942,40387:25941,40388:25933,40389:25944,40390:25950,40391:25949,40392:25970,40393:25976,40394:25986,40395:25987,40396:35722,40397:26011,40398:26015,40399:26027,40400:26039,40401:26051,40402:26054,40403:26049,40404:26052,40405:26060,40406:26066,40407:26075,40408:26073,40409:26080,40410:26081,40411:26097,40412:26482,40413:26122,40414:26115,40415:26107,40416:26483,40417:26165,40418:26166,40419:26164,40420:26140,40421:26191,40422:26180,40423:26185,40424:26177,40425:26206,40426:26205,40427:26212,40428:26215,40429:26216,40430:26207,40431:26210,40432:26224,40433:26243,40434:26248,40435:26254,40436:26249,40437:26244,40438:26264,40439:26269,40440:26305,40441:26297,40442:26313,40443:26302,40444:26300,40512:26308,40513:26296,40514:26326,40515:26330,40516:26336,40517:26175,40518:26342,40519:26345,40520:26352,40521:26357,40522:26359,40523:26383,40524:26390,40525:26398,40526:26406,40527:26407,40528:38712,40529:26414,40530:26431,40531:26422,40532:26433,40533:26424,40534:26423,40535:26438,40536:26462,40537:26464,40538:26457,40539:26467,40540:26468,40541:26505,40542:26480,40543:26537,40544:26492,40545:26474,40546:26508,40547:26507,40548:26534,40549:26529,40550:26501,40551:26551,40552:26607,40553:26548,40554:26604,40555:26547,40556:26601,40557:26552,40558:26596,40559:26590,40560:26589,40561:26594,40562:26606,40563:26553,40564:26574,40565:26566,40566:26599,40567:27292,40568:26654,40569:26694,40570:26665,40571:26688,40572:26701,40573:26674,40574:26702,40576:26803,40577:26667,40578:26713,40579:26723,40580:26743,40581:26751,40582:26783,40583:26767,40584:26797,40585:26772,40586:26781,40587:26779,40588:26755,40589:27310,40590:26809,40591:26740,40592:26805,40593:26784,40594:26810,40595:26895,40596:26765,40597:26750,40598:26881,40599:26826,40600:26888,40601:26840,40602:26914,40603:26918,40604:26849,40605:26892,40606:26829,40607:26836,40608:26855,40609:26837,40610:26934,40611:26898,40612:26884,40613:26839,40614:26851,40615:26917,40616:26873,40617:26848,40618:26863,40619:26920,40620:26922,40621:26906,40622:26915,40623:26913,40624:26822,40625:27001,40626:26999,40627:26972,40628:27e3,40629:26987,40630:26964,40631:27006,40632:26990,40633:26937,40634:26996,40635:26941,40636:26969,40637:26928,40638:26977,40639:26974,40640:26973,40641:27009,40642:26986,40643:27058,40644:27054,40645:27088,40646:27071,40647:27073,40648:27091,40649:27070,40650:27086,40651:23528,40652:27082,40653:27101,40654:27067,40655:27075,40656:27047,40657:27182,40658:27025,40659:27040,40660:27036,40661:27029,40662:27060,40663:27102,40664:27112,40665:27138,40666:27163,40667:27135,40668:27402,40669:27129,40670:27122,40671:27111,40672:27141,40673:27057,40674:27166,40675:27117,40676:27156,40677:27115,40678:27146,40679:27154,40680:27329,40681:27171,40682:27155,40683:27204,40684:27148,40685:27250,40686:27190,40687:27256,40688:27207,40689:27234,40690:27225,40691:27238,40692:27208,40693:27192,40694:27170,40695:27280,40696:27277,40697:27296,40698:27268,40699:27298,40700:27299,40768:27287,40769:34327,40770:27323,40771:27331,40772:27330,40773:27320,40774:27315,40775:27308,40776:27358,40777:27345,40778:27359,40779:27306,40780:27354,40781:27370,40782:27387,40783:27397,40784:34326,40785:27386,40786:27410,40787:27414,40788:39729,40789:27423,40790:27448,40791:27447,40792:30428,40793:27449,40794:39150,40795:27463,40796:27459,40797:27465,40798:27472,40799:27481,40800:27476,40801:27483,40802:27487,40803:27489,40804:27512,40805:27513,40806:27519,40807:27520,40808:27524,40809:27523,40810:27533,40811:27544,40812:27541,40813:27550,40814:27556,40815:27562,40816:27563,40817:27567,40818:27570,40819:27569,40820:27571,40821:27575,40822:27580,40823:27590,40824:27595,40825:27603,40826:27615,40827:27628,40828:27627,40829:27635,40830:27631,40832:40638,40833:27656,40834:27667,40835:27668,40836:27675,40837:27684,40838:27683,40839:27742,40840:27733,40841:27746,40842:27754,40843:27778,40844:27789,40845:27802,40846:27777,40847:27803,40848:27774,40849:27752,40850:27763,40851:27794,40852:27792,40853:27844,40854:27889,40855:27859,40856:27837,40857:27863,40858:27845,40859:27869,40860:27822,40861:27825,40862:27838,40863:27834,40864:27867,40865:27887,40866:27865,40867:27882,40868:27935,40869:34893,40870:27958,40871:27947,40872:27965,40873:27960,40874:27929,40875:27957,40876:27955,40877:27922,40878:27916,40879:28003,40880:28051,40881:28004,40882:27994,40883:28025,40884:27993,40885:28046,40886:28053,40887:28644,40888:28037,40889:28153,40890:28181,40891:28170,40892:28085,40893:28103,40894:28134,40895:28088,40896:28102,40897:28140,40898:28126,40899:28108,40900:28136,40901:28114,40902:28101,40903:28154,40904:28121,40905:28132,40906:28117,40907:28138,40908:28142,40909:28205,40910:28270,40911:28206,40912:28185,40913:28274,40914:28255,40915:28222,40916:28195,40917:28267,40918:28203,40919:28278,40920:28237,40921:28191,40922:28227,40923:28218,40924:28238,40925:28196,40926:28415,40927:28189,40928:28216,40929:28290,40930:28330,40931:28312,40932:28361,40933:28343,40934:28371,40935:28349,40936:28335,40937:28356,40938:28338,40939:28372,40940:28373,40941:28303,40942:28325,40943:28354,40944:28319,40945:28481,40946:28433,40947:28748,40948:28396,40949:28408,40950:28414,40951:28479,40952:28402,40953:28465,40954:28399,40955:28466,40956:28364,161:65377,162:65378,163:65379,164:65380,165:65381,166:65382,167:65383,168:65384,169:65385,170:65386,171:65387,172:65388,173:65389,174:65390,175:65391,176:65392,177:65393,178:65394,179:65395,180:65396,181:65397,182:65398,183:65399,184:65400,185:65401,186:65402,187:65403,188:65404,189:65405,190:65406,191:65407,192:65408,193:65409,194:65410,195:65411,196:65412,197:65413,198:65414,199:65415,200:65416,201:65417,202:65418,203:65419,204:65420,205:65421,206:65422,207:65423,208:65424,209:65425,210:65426,211:65427,212:65428,213:65429,214:65430,215:65431,216:65432,217:65433,218:65434,219:65435,220:65436,221:65437,222:65438,223:65439,57408:28478,57409:28435,57410:28407,57411:28550,57412:28538,57413:28536,57414:28545,57415:28544,57416:28527,57417:28507,57418:28659,57419:28525,57420:28546,57421:28540,57422:28504,57423:28558,57424:28561,57425:28610,57426:28518,57427:28595,57428:28579,57429:28577,57430:28580,57431:28601,57432:28614,57433:28586,57434:28639,57435:28629,57436:28652,57437:28628,57438:28632,57439:28657,57440:28654,57441:28635,57442:28681,57443:28683,57444:28666,57445:28689,57446:28673,57447:28687,57448:28670,57449:28699,57450:28698,57451:28532,57452:28701,57453:28696,57454:28703,57455:28720,57456:28734,57457:28722,57458:28753,57459:28771,57460:28825,57461:28818,57462:28847,57463:28913,57464:28844,57465:28856,57466:28851,57467:28846,57468:28895,57469:28875,57470:28893,57472:28889,57473:28937,57474:28925,57475:28956,57476:28953,57477:29029,57478:29013,57479:29064,57480:29030,57481:29026,57482:29004,57483:29014,57484:29036,57485:29071,57486:29179,57487:29060,57488:29077,57489:29096,57490:29100,57491:29143,57492:29113,57493:29118,57494:29138,57495:29129,57496:29140,57497:29134,57498:29152,57499:29164,57500:29159,57501:29173,57502:29180,57503:29177,57504:29183,57505:29197,57506:29200,57507:29211,57508:29224,57509:29229,57510:29228,57511:29232,57512:29234,57513:29243,57514:29244,57515:29247,57516:29248,57517:29254,57518:29259,57519:29272,57520:29300,57521:29310,57522:29314,57523:29313,57524:29319,57525:29330,57526:29334,57527:29346,57528:29351,57529:29369,57530:29362,57531:29379,57532:29382,57533:29380,57534:29390,57535:29394,57536:29410,57537:29408,57538:29409,57539:29433,57540:29431,57541:20495,57542:29463,57543:29450,57544:29468,57545:29462,57546:29469,57547:29492,57548:29487,57549:29481,57550:29477,57551:29502,57552:29518,57553:29519,57554:40664,57555:29527,57556:29546,57557:29544,57558:29552,57559:29560,57560:29557,57561:29563,57562:29562,57563:29640,57564:29619,57565:29646,57566:29627,57567:29632,57568:29669,57569:29678,57570:29662,57571:29858,57572:29701,57573:29807,57574:29733,57575:29688,57576:29746,57577:29754,57578:29781,57579:29759,57580:29791,57581:29785,57582:29761,57583:29788,57584:29801,57585:29808,57586:29795,57587:29802,57588:29814,57589:29822,57590:29835,57591:29854,57592:29863,57593:29898,57594:29903,57595:29908,57596:29681,57664:29920,57665:29923,57666:29927,57667:29929,57668:29934,57669:29938,57670:29936,57671:29937,57672:29944,57673:29943,57674:29956,57675:29955,57676:29957,57677:29964,57678:29966,57679:29965,57680:29973,57681:29971,57682:29982,57683:29990,57684:29996,57685:30012,57686:30020,57687:30029,57688:30026,57689:30025,57690:30043,57691:30022,57692:30042,57693:30057,57694:30052,57695:30055,57696:30059,57697:30061,57698:30072,57699:30070,57700:30086,57701:30087,57702:30068,57703:30090,57704:30089,57705:30082,57706:30100,57707:30106,57708:30109,57709:30117,57710:30115,57711:30146,57712:30131,57713:30147,57714:30133,57715:30141,57716:30136,57717:30140,57718:30129,57719:30157,57720:30154,57721:30162,57722:30169,57723:30179,57724:30174,57725:30206,57726:30207,57728:30204,57729:30209,57730:30192,57731:30202,57732:30194,57733:30195,57734:30219,57735:30221,57736:30217,57737:30239,57738:30247,57739:30240,57740:30241,57741:30242,57742:30244,57743:30260,57744:30256,57745:30267,57746:30279,57747:30280,57748:30278,57749:30300,57750:30296,57751:30305,57752:30306,57753:30312,57754:30313,57755:30314,57756:30311,57757:30316,57758:30320,57759:30322,57760:30326,57761:30328,57762:30332,57763:30336,57764:30339,57765:30344,57766:30347,57767:30350,57768:30358,57769:30355,57770:30361,57771:30362,57772:30384,57773:30388,57774:30392,57775:30393,57776:30394,57777:30402,57778:30413,57779:30422,57780:30418,57781:30430,57782:30433,57783:30437,57784:30439,57785:30442,57786:34351,57787:30459,57788:30472,57789:30471,57790:30468,57791:30505,57792:30500,57793:30494,57794:30501,57795:30502,57796:30491,57797:30519,57798:30520,57799:30535,57800:30554,57801:30568,57802:30571,57803:30555,57804:30565,57805:30591,57806:30590,57807:30585,57808:30606,57809:30603,57810:30609,57811:30624,57812:30622,57813:30640,57814:30646,57815:30649,57816:30655,57817:30652,57818:30653,57819:30651,57820:30663,57821:30669,57822:30679,57823:30682,57824:30684,57825:30691,57826:30702,57827:30716,57828:30732,57829:30738,57830:31014,57831:30752,57832:31018,57833:30789,57834:30862,57835:30836,57836:30854,57837:30844,57838:30874,57839:30860,57840:30883,57841:30901,57842:30890,57843:30895,57844:30929,57845:30918,57846:30923,57847:30932,57848:30910,57849:30908,57850:30917,57851:30922,57852:30956,57920:30951,57921:30938,57922:30973,57923:30964,57924:30983,57925:30994,57926:30993,57927:31001,57928:31020,57929:31019,57930:31040,57931:31072,57932:31063,57933:31071,57934:31066,57935:31061,57936:31059,57937:31098,57938:31103,57939:31114,57940:31133,57941:31143,57942:40779,57943:31146,57944:31150,57945:31155,57946:31161,57947:31162,57948:31177,57949:31189,57950:31207,57951:31212,57952:31201,57953:31203,57954:31240,57955:31245,57956:31256,57957:31257,57958:31264,57959:31263,57960:31104,57961:31281,57962:31291,57963:31294,57964:31287,57965:31299,57966:31319,57967:31305,57968:31329,57969:31330,57970:31337,57971:40861,57972:31344,57973:31353,57974:31357,57975:31368,57976:31383,57977:31381,57978:31384,57979:31382,57980:31401,57981:31432,57982:31408,57984:31414,57985:31429,57986:31428,57987:31423,57988:36995,57989:31431,57990:31434,57991:31437,57992:31439,57993:31445,57994:31443,57995:31449,57996:31450,57997:31453,57998:31457,57999:31458,58e3:31462,58001:31469,58002:31472,58003:31490,58004:31503,58005:31498,58006:31494,58007:31539,58008:31512,58009:31513,58010:31518,58011:31541,58012:31528,58013:31542,58014:31568,58015:31610,58016:31492,58017:31565,58018:31499,58019:31564,58020:31557,58021:31605,58022:31589,58023:31604,58024:31591,58025:31600,58026:31601,58027:31596,58028:31598,58029:31645,58030:31640,58031:31647,58032:31629,58033:31644,58034:31642,58035:31627,58036:31634,58037:31631,58038:31581,58039:31641,58040:31691,58041:31681,58042:31692,58043:31695,58044:31668,58045:31686,58046:31709,58047:31721,58048:31761,58049:31764,58050:31718,58051:31717,58052:31840,58053:31744,58054:31751,58055:31763,58056:31731,58057:31735,58058:31767,58059:31757,58060:31734,58061:31779,58062:31783,58063:31786,58064:31775,58065:31799,58066:31787,58067:31805,58068:31820,58069:31811,58070:31828,58071:31823,58072:31808,58073:31824,58074:31832,58075:31839,58076:31844,58077:31830,58078:31845,58079:31852,58080:31861,58081:31875,58082:31888,58083:31908,58084:31917,58085:31906,58086:31915,58087:31905,58088:31912,58089:31923,58090:31922,58091:31921,58092:31918,58093:31929,58094:31933,58095:31936,58096:31941,58097:31938,58098:31960,58099:31954,58100:31964,58101:31970,58102:39739,58103:31983,58104:31986,58105:31988,58106:31990,58107:31994,58108:32006,58176:32002,58177:32028,58178:32021,58179:32010,58180:32069,58181:32075,58182:32046,58183:32050,58184:32063,58185:32053,58186:32070,58187:32115,58188:32086,58189:32078,58190:32114,58191:32104,58192:32110,58193:32079,58194:32099,58195:32147,58196:32137,58197:32091,58198:32143,58199:32125,58200:32155,58201:32186,58202:32174,58203:32163,58204:32181,58205:32199,58206:32189,58207:32171,58208:32317,58209:32162,58210:32175,58211:32220,58212:32184,58213:32159,58214:32176,58215:32216,58216:32221,58217:32228,58218:32222,58219:32251,58220:32242,58221:32225,58222:32261,58223:32266,58224:32291,58225:32289,58226:32274,58227:32305,58228:32287,58229:32265,58230:32267,58231:32290,58232:32326,58233:32358,58234:32315,58235:32309,58236:32313,58237:32323,58238:32311,58240:32306,58241:32314,58242:32359,58243:32349,58244:32342,58245:32350,58246:32345,58247:32346,58248:32377,58249:32362,58250:32361,58251:32380,58252:32379,58253:32387,58254:32213,58255:32381,58256:36782,58257:32383,58258:32392,58259:32393,58260:32396,58261:32402,58262:32400,58263:32403,58264:32404,58265:32406,58266:32398,58267:32411,58268:32412,58269:32568,58270:32570,58271:32581,58272:32588,58273:32589,58274:32590,58275:32592,58276:32593,58277:32597,58278:32596,58279:32600,58280:32607,58281:32608,58282:32616,58283:32617,58284:32615,58285:32632,58286:32642,58287:32646,58288:32643,58289:32648,58290:32647,58291:32652,58292:32660,58293:32670,58294:32669,58295:32666,58296:32675,58297:32687,58298:32690,58299:32697,58300:32686,58301:32694,58302:32696,58303:35697,58304:32709,58305:32710,58306:32714,58307:32725,58308:32724,58309:32737,58310:32742,58311:32745,58312:32755,58313:32761,58314:39132,58315:32774,58316:32772,58317:32779,58318:32786,58319:32792,58320:32793,58321:32796,58322:32801,58323:32808,58324:32831,58325:32827,58326:32842,58327:32838,58328:32850,58329:32856,58330:32858,58331:32863,58332:32866,58333:32872,58334:32883,58335:32882,58336:32880,58337:32886,58338:32889,58339:32893,58340:32895,58341:32900,58342:32902,58343:32901,58344:32923,58345:32915,58346:32922,58347:32941,58348:20880,58349:32940,58350:32987,58351:32997,58352:32985,58353:32989,58354:32964,58355:32986,58356:32982,58357:33033,58358:33007,58359:33009,58360:33051,58361:33065,58362:33059,58363:33071,58364:33099,58432:38539,58433:33094,58434:33086,58435:33107,58436:33105,58437:33020,58438:33137,58439:33134,58440:33125,58441:33126,58442:33140,58443:33155,58444:33160,58445:33162,58446:33152,58447:33154,58448:33184,58449:33173,58450:33188,58451:33187,58452:33119,58453:33171,58454:33193,58455:33200,58456:33205,58457:33214,58458:33208,58459:33213,58460:33216,58461:33218,58462:33210,58463:33225,58464:33229,58465:33233,58466:33241,58467:33240,58468:33224,58469:33242,58470:33247,58471:33248,58472:33255,58473:33274,58474:33275,58475:33278,58476:33281,58477:33282,58478:33285,58479:33287,58480:33290,58481:33293,58482:33296,58483:33302,58484:33321,58485:33323,58486:33336,58487:33331,58488:33344,58489:33369,58490:33368,58491:33373,58492:33370,58493:33375,58494:33380,58496:33378,58497:33384,58498:33386,58499:33387,58500:33326,58501:33393,58502:33399,58503:33400,58504:33406,58505:33421,58506:33426,58507:33451,58508:33439,58509:33467,58510:33452,58511:33505,58512:33507,58513:33503,58514:33490,58515:33524,58516:33523,58517:33530,58518:33683,58519:33539,58520:33531,58521:33529,58522:33502,58523:33542,58524:33500,58525:33545,58526:33497,58527:33589,58528:33588,58529:33558,58530:33586,58531:33585,58532:33600,58533:33593,58534:33616,58535:33605,58536:33583,58537:33579,58538:33559,58539:33560,58540:33669,58541:33690,58542:33706,58543:33695,58544:33698,58545:33686,58546:33571,58547:33678,58548:33671,58549:33674,58550:33660,58551:33717,58552:33651,58553:33653,58554:33696,58555:33673,58556:33704,58557:33780,58558:33811,58559:33771,58560:33742,58561:33789,58562:33795,58563:33752,58564:33803,58565:33729,58566:33783,58567:33799,58568:33760,58569:33778,58570:33805,58571:33826,58572:33824,58573:33725,58574:33848,58575:34054,58576:33787,58577:33901,58578:33834,58579:33852,58580:34138,58581:33924,58582:33911,58583:33899,58584:33965,58585:33902,58586:33922,58587:33897,58588:33862,58589:33836,58590:33903,58591:33913,58592:33845,58593:33994,58594:33890,58595:33977,58596:33983,58597:33951,58598:34009,58599:33997,58600:33979,58601:34010,58602:34e3,58603:33985,58604:33990,58605:34006,58606:33953,58607:34081,58608:34047,58609:34036,58610:34071,58611:34072,58612:34092,58613:34079,58614:34069,58615:34068,58616:34044,58617:34112,58618:34147,58619:34136,58620:34120,58688:34113,58689:34306,58690:34123,58691:34133,58692:34176,58693:34212,58694:34184,58695:34193,58696:34186,58697:34216,58698:34157,58699:34196,58700:34203,58701:34282,58702:34183,58703:34204,58704:34167,58705:34174,58706:34192,58707:34249,58708:34234,58709:34255,58710:34233,58711:34256,58712:34261,58713:34269,58714:34277,58715:34268,58716:34297,58717:34314,58718:34323,58719:34315,58720:34302,58721:34298,58722:34310,58723:34338,58724:34330,58725:34352,58726:34367,58727:34381,58728:20053,58729:34388,58730:34399,58731:34407,58732:34417,58733:34451,58734:34467,58735:34473,58736:34474,58737:34443,58738:34444,58739:34486,58740:34479,58741:34500,58742:34502,58743:34480,58744:34505,58745:34851,58746:34475,58747:34516,58748:34526,58749:34537,58750:34540,58752:34527,58753:34523,58754:34543,58755:34578,58756:34566,58757:34568,58758:34560,58759:34563,58760:34555,58761:34577,58762:34569,58763:34573,58764:34553,58765:34570,58766:34612,58767:34623,58768:34615,58769:34619,58770:34597,58771:34601,58772:34586,58773:34656,58774:34655,58775:34680,58776:34636,58777:34638,58778:34676,58779:34647,58780:34664,58781:34670,58782:34649,58783:34643,58784:34659,58785:34666,58786:34821,58787:34722,58788:34719,58789:34690,58790:34735,58791:34763,58792:34749,58793:34752,58794:34768,58795:38614,58796:34731,58797:34756,58798:34739,58799:34759,58800:34758,58801:34747,58802:34799,58803:34802,58804:34784,58805:34831,58806:34829,58807:34814,58808:34806,58809:34807,58810:34830,58811:34770,58812:34833,58813:34838,58814:34837,58815:34850,58816:34849,58817:34865,58818:34870,58819:34873,58820:34855,58821:34875,58822:34884,58823:34882,58824:34898,58825:34905,58826:34910,58827:34914,58828:34923,58829:34945,58830:34942,58831:34974,58832:34933,58833:34941,58834:34997,58835:34930,58836:34946,58837:34967,58838:34962,58839:34990,58840:34969,58841:34978,58842:34957,58843:34980,58844:34992,58845:35007,58846:34993,58847:35011,58848:35012,58849:35028,58850:35032,58851:35033,58852:35037,58853:35065,58854:35074,58855:35068,58856:35060,58857:35048,58858:35058,58859:35076,58860:35084,58861:35082,58862:35091,58863:35139,58864:35102,58865:35109,58866:35114,58867:35115,58868:35137,58869:35140,58870:35131,58871:35126,58872:35128,58873:35148,58874:35101,58875:35168,58876:35166,58944:35174,58945:35172,58946:35181,58947:35178,58948:35183,58949:35188,58950:35191,58951:35198,58952:35203,58953:35208,58954:35210,58955:35219,58956:35224,58957:35233,58958:35241,58959:35238,58960:35244,58961:35247,58962:35250,58963:35258,58964:35261,58965:35263,58966:35264,58967:35290,58968:35292,58969:35293,58970:35303,58971:35316,58972:35320,58973:35331,58974:35350,58975:35344,58976:35340,58977:35355,58978:35357,58979:35365,58980:35382,58981:35393,58982:35419,58983:35410,58984:35398,58985:35400,58986:35452,58987:35437,58988:35436,58989:35426,58990:35461,58991:35458,58992:35460,58993:35496,58994:35489,58995:35473,58996:35493,58997:35494,58998:35482,58999:35491,59e3:35524,59001:35533,59002:35522,59003:35546,59004:35563,59005:35571,59006:35559,59008:35556,59009:35569,59010:35604,59011:35552,59012:35554,59013:35575,59014:35550,59015:35547,59016:35596,59017:35591,59018:35610,59019:35553,59020:35606,59021:35600,59022:35607,59023:35616,59024:35635,59025:38827,59026:35622,59027:35627,59028:35646,59029:35624,59030:35649,59031:35660,59032:35663,59033:35662,59034:35657,59035:35670,59036:35675,59037:35674,59038:35691,59039:35679,59040:35692,59041:35695,59042:35700,59043:35709,59044:35712,59045:35724,59046:35726,59047:35730,59048:35731,59049:35734,59050:35737,59051:35738,59052:35898,59053:35905,59054:35903,59055:35912,59056:35916,59057:35918,59058:35920,59059:35925,59060:35938,59061:35948,59062:35960,59063:35962,59064:35970,59065:35977,59066:35973,59067:35978,59068:35981,59069:35982,59070:35988,59071:35964,59072:35992,59073:25117,59074:36013,59075:36010,59076:36029,59077:36018,59078:36019,59079:36014,59080:36022,59081:36040,59082:36033,59083:36068,59084:36067,59085:36058,59086:36093,59087:36090,59088:36091,59089:36100,59090:36101,59091:36106,59092:36103,59093:36111,59094:36109,59095:36112,59096:40782,59097:36115,59098:36045,59099:36116,59100:36118,59101:36199,59102:36205,59103:36209,59104:36211,59105:36225,59106:36249,59107:36290,59108:36286,59109:36282,59110:36303,59111:36314,59112:36310,59113:36300,59114:36315,59115:36299,59116:36330,59117:36331,59118:36319,59119:36323,59120:36348,59121:36360,59122:36361,59123:36351,59124:36381,59125:36382,59126:36368,59127:36383,59128:36418,59129:36405,59130:36400,59131:36404,59132:36426,59200:36423,59201:36425,59202:36428,59203:36432,59204:36424,59205:36441,59206:36452,59207:36448,59208:36394,59209:36451,59210:36437,59211:36470,59212:36466,59213:36476,59214:36481,59215:36487,59216:36485,59217:36484,59218:36491,59219:36490,59220:36499,59221:36497,59222:36500,59223:36505,59224:36522,59225:36513,59226:36524,59227:36528,59228:36550,59229:36529,59230:36542,59231:36549,59232:36552,59233:36555,59234:36571,59235:36579,59236:36604,59237:36603,59238:36587,59239:36606,59240:36618,59241:36613,59242:36629,59243:36626,59244:36633,59245:36627,59246:36636,59247:36639,59248:36635,59249:36620,59250:36646,59251:36659,59252:36667,59253:36665,59254:36677,59255:36674,59256:36670,59257:36684,59258:36681,59259:36678,59260:36686,59261:36695,59262:36700,59264:36706,59265:36707,59266:36708,59267:36764,59268:36767,59269:36771,59270:36781,59271:36783,59272:36791,59273:36826,59274:36837,59275:36834,59276:36842,59277:36847,59278:36999,59279:36852,59280:36869,59281:36857,59282:36858,59283:36881,59284:36885,59285:36897,59286:36877,59287:36894,59288:36886,59289:36875,59290:36903,59291:36918,59292:36917,59293:36921,59294:36856,59295:36943,59296:36944,59297:36945,59298:36946,59299:36878,59300:36937,59301:36926,59302:36950,59303:36952,59304:36958,59305:36968,59306:36975,59307:36982,59308:38568,59309:36978,59310:36994,59311:36989,59312:36993,59313:36992,59314:37002,59315:37001,59316:37007,59317:37032,59318:37039,59319:37041,59320:37045,59321:37090,59322:37092,59323:25160,59324:37083,59325:37122,59326:37138,59327:37145,59328:37170,59329:37168,59330:37194,59331:37206,59332:37208,59333:37219,59334:37221,59335:37225,59336:37235,59337:37234,59338:37259,59339:37257,59340:37250,59341:37282,59342:37291,59343:37295,59344:37290,59345:37301,59346:37300,59347:37306,59348:37312,59349:37313,59350:37321,59351:37323,59352:37328,59353:37334,59354:37343,59355:37345,59356:37339,59357:37372,59358:37365,59359:37366,59360:37406,59361:37375,59362:37396,59363:37420,59364:37397,59365:37393,59366:37470,59367:37463,59368:37445,59369:37449,59370:37476,59371:37448,59372:37525,59373:37439,59374:37451,59375:37456,59376:37532,59377:37526,59378:37523,59379:37531,59380:37466,59381:37583,59382:37561,59383:37559,59384:37609,59385:37647,59386:37626,59387:37700,59388:37678,59456:37657,59457:37666,59458:37658,59459:37667,59460:37690,59461:37685,59462:37691,59463:37724,59464:37728,59465:37756,59466:37742,59467:37718,59468:37808,59469:37804,59470:37805,59471:37780,59472:37817,59473:37846,59474:37847,59475:37864,59476:37861,59477:37848,59478:37827,59479:37853,59480:37840,59481:37832,59482:37860,59483:37914,59484:37908,59485:37907,59486:37891,59487:37895,59488:37904,59489:37942,59490:37931,59491:37941,59492:37921,59493:37946,59494:37953,59495:37970,59496:37956,59497:37979,59498:37984,59499:37986,59500:37982,59501:37994,59502:37417,59503:38e3,59504:38005,59505:38007,59506:38013,59507:37978,59508:38012,59509:38014,59510:38017,59511:38015,59512:38274,59513:38279,59514:38282,59515:38292,59516:38294,59517:38296,59518:38297,59520:38304,59521:38312,59522:38311,59523:38317,59524:38332,59525:38331,59526:38329,59527:38334,59528:38346,59529:28662,59530:38339,59531:38349,59532:38348,59533:38357,59534:38356,59535:38358,59536:38364,59537:38369,59538:38373,59539:38370,59540:38433,59541:38440,59542:38446,59543:38447,59544:38466,59545:38476,59546:38479,59547:38475,59548:38519,59549:38492,59550:38494,59551:38493,59552:38495,59553:38502,59554:38514,59555:38508,59556:38541,59557:38552,59558:38549,59559:38551,59560:38570,59561:38567,59562:38577,59563:38578,59564:38576,59565:38580,59566:38582,59567:38584,59568:38585,59569:38606,59570:38603,59571:38601,59572:38605,59573:35149,59574:38620,59575:38669,59576:38613,59577:38649,59578:38660,59579:38662,59580:38664,59581:38675,59582:38670,59583:38673,59584:38671,59585:38678,59586:38681,59587:38692,59588:38698,59589:38704,59590:38713,59591:38717,59592:38718,59593:38724,59594:38726,59595:38728,59596:38722,59597:38729,59598:38748,59599:38752,59600:38756,59601:38758,59602:38760,59603:21202,59604:38763,59605:38769,59606:38777,59607:38789,59608:38780,59609:38785,59610:38778,59611:38790,59612:38795,59613:38799,59614:38800,59615:38812,59616:38824,59617:38822,59618:38819,59619:38835,59620:38836,59621:38851,59622:38854,59623:38856,\n59624:38859,59625:38876,59626:38893,59627:40783,59628:38898,59629:31455,59630:38902,59631:38901,59632:38927,59633:38924,59634:38968,59635:38948,59636:38945,59637:38967,59638:38973,59639:38982,59640:38991,59641:38987,59642:39019,59643:39023,59644:39024,59712:39025,59713:39028,59714:39027,59715:39082,59716:39087,59717:39089,59718:39094,59719:39108,59720:39107,59721:39110,59722:39145,59723:39147,59724:39171,59725:39177,59726:39186,59727:39188,59728:39192,59729:39201,59730:39197,59731:39198,59732:39204,59733:39200,59734:39212,59735:39214,59736:39229,59737:39230,59738:39234,59739:39241,59740:39237,59741:39248,59742:39243,59743:39249,59744:39250,59745:39244,59746:39253,59747:39319,59748:39320,59749:39333,59750:39341,59751:39342,59752:39356,59753:39391,59754:39387,59755:39389,59756:39384,59757:39377,59758:39405,59759:39406,59760:39409,59761:39410,59762:39419,59763:39416,59764:39425,59765:39439,59766:39429,59767:39394,59768:39449,59769:39467,59770:39479,59771:39493,59772:39490,59773:39488,59774:39491,59776:39486,59777:39509,59778:39501,59779:39515,59780:39511,59781:39519,59782:39522,59783:39525,59784:39524,59785:39529,59786:39531,59787:39530,59788:39597,59789:39600,59790:39612,59791:39616,59792:39631,59793:39633,59794:39635,59795:39636,59796:39646,59797:39647,59798:39650,59799:39651,59800:39654,59801:39663,59802:39659,59803:39662,59804:39668,59805:39665,59806:39671,59807:39675,59808:39686,59809:39704,59810:39706,59811:39711,59812:39714,59813:39715,59814:39717,59815:39719,59816:39720,59817:39721,59818:39722,59819:39726,59820:39727,59821:39730,59822:39748,59823:39747,59824:39759,59825:39757,59826:39758,59827:39761,59828:39768,59829:39796,59830:39827,59831:39811,59832:39825,59833:39830,59834:39831,59835:39839,59836:39840,59837:39848,59838:39860,59839:39872,59840:39882,59841:39865,59842:39878,59843:39887,59844:39889,59845:39890,59846:39907,59847:39906,59848:39908,59849:39892,59850:39905,59851:39994,59852:39922,59853:39921,59854:39920,59855:39957,59856:39956,59857:39945,59858:39955,59859:39948,59860:39942,59861:39944,59862:39954,59863:39946,59864:39940,59865:39982,59866:39963,59867:39973,59868:39972,59869:39969,59870:39984,59871:40007,59872:39986,59873:40006,59874:39998,59875:40026,59876:40032,59877:40039,59878:40054,59879:40056,59880:40167,59881:40172,59882:40176,59883:40201,59884:40200,59885:40171,59886:40195,59887:40198,59888:40234,59889:40230,59890:40367,59891:40227,59892:40223,59893:40260,59894:40213,59895:40210,59896:40257,59897:40255,59898:40254,59899:40262,59900:40264,59968:40285,59969:40286,59970:40292,59971:40273,59972:40272,59973:40281,59974:40306,59975:40329,59976:40327,59977:40363,59978:40303,59979:40314,59980:40346,59981:40356,59982:40361,59983:40370,59984:40388,59985:40385,59986:40379,59987:40376,59988:40378,59989:40390,59990:40399,59991:40386,59992:40409,59993:40403,59994:40440,59995:40422,59996:40429,59997:40431,59998:40445,59999:40474,6e4:40475,60001:40478,60002:40565,60003:40569,60004:40573,60005:40577,60006:40584,60007:40587,60008:40588,60009:40594,60010:40597,60011:40593,60012:40605,60013:40613,60014:40617,60015:40632,60016:40618,60017:40621,60018:38753,60019:40652,60020:40654,60021:40655,60022:40656,60023:40660,60024:40668,60025:40670,60026:40669,60027:40672,60028:40677,60029:40680,60030:40687,60032:40692,60033:40694,60034:40695,60035:40697,60036:40699,60037:40700,60038:40701,60039:40711,60040:40712,60041:30391,60042:40725,60043:40737,60044:40748,60045:40766,60046:40778,60047:40786,60048:40788,60049:40803,60050:40799,60051:40800,60052:40801,60053:40806,60054:40807,60055:40812,60056:40810,60057:40823,60058:40818,60059:40822,60060:40853,60061:40860,60062:40864,60063:22575,60064:27079,60065:36953,60066:29796,60067:20956,60068:29081}},function(o,e,r){"use strict";function t(o,e,r,t){e.degree()<r.degree()&&(w=[r,e],e=w[0],r=w[1]);for(var c=e,s=r,a=o.zero,d=o.one;s.degree()>=t/2;){var n=c,l=a;if(c=s,a=d,c.isZero())return null;s=n;for(var i=o.zero,B=c.getCoefficient(c.degree()),k=o.inverse(B);s.degree()>=c.degree()&&!s.isZero();){var u=s.degree()-c.degree(),C=o.multiply(s.getCoefficient(s.degree()),k);i=i.addOrSubtract(o.buildMonomial(u,C)),s=s.addOrSubtract(c.multiplyByMonomial(u,C))}if(d=i.multiplyPoly(a).addOrSubtract(l),s.degree()>=c.degree())return null}var m=d.getCoefficient(0);if(0===m)return null;var f=o.inverse(m);return[d.multiply(f),s.multiply(f)];var w}function c(o,e){var r=e.degree();if(1===r)return[e.getCoefficient(1)];for(var t=new Array(r),c=0,s=1;s<o.size&&c<r;s++)0===e.evaluateAt(s)&&(t[c]=o.inverse(s),c++);return c!==r?null:t}function s(o,e,r){for(var t=r.length,c=new Array(t),s=0;s<t;s++){for(var a=o.inverse(r[s]),n=1,l=0;l<t;l++)s!==l&&(n=o.multiply(n,d.addOrSubtractGF(1,o.multiply(r[l],a))));c[s]=o.multiply(e.evaluateAt(a),o.inverse(n)),0!==o.generatorBase&&(c[s]=o.multiply(c[s],a))}return c}function a(o,e){var r=new Uint8ClampedArray(o.length);r.set(o);for(var a=new d.default(285,256,0),l=new n.default(a,r),i=new Uint8ClampedArray(e),B=!1,k=0;k<e;k++){var u=l.evaluateAt(a.exp(k+a.generatorBase));i[i.length-1-k]=u,0!==u&&(B=!0)}if(!B)return r;var C=new n.default(a,i),m=t(a,a.buildMonomial(e,1),C,e);if(null===m)return null;var f=c(a,m[0]);if(null==f)return null;for(var w=s(a,m[1],f),P=0;P<f.length;P++){var v=r.length-1-a.log(f[P]);if(v<0)return null;r[v]=d.addOrSubtractGF(r[v],w[P])}return r}Object.defineProperty(e,"__esModule",{value:!0});var d=r(1),n=r(2);e.decode=a},function(o,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.VERSIONS=[{infoBits:null,versionNumber:1,alignmentPatternCenters:[],errorCorrectionLevels:[{ecCodewordsPerBlock:7,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:13,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:13}]},{ecCodewordsPerBlock:17,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:2,alignmentPatternCenters:[6,18],errorCorrectionLevels:[{ecCodewordsPerBlock:10,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:34}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:28}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:16}]}]},{infoBits:null,versionNumber:3,alignmentPatternCenters:[6,22],errorCorrectionLevels:[{ecCodewordsPerBlock:15,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:55}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:13}]}]},{infoBits:null,versionNumber:4,alignmentPatternCenters:[6,26],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:80}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:32}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:9}]}]},{infoBits:null,versionNumber:5,alignmentPatternCenters:[6,30],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:43}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:11},{numBlocks:2,dataCodewordsPerBlock:12}]}]},{infoBits:null,versionNumber:6,alignmentPatternCenters:[6,34],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68}]},{ecCodewordsPerBlock:16,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:27}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:31892,versionNumber:7,alignmentPatternCenters:[6,22,38],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:78}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:31}]},{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:13},{numBlocks:1,dataCodewordsPerBlock:14}]}]},{infoBits:34236,versionNumber:8,alignmentPatternCenters:[6,24,42],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:97}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:38},{numBlocks:2,dataCodewordsPerBlock:39}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:18},{numBlocks:2,dataCodewordsPerBlock:19}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:14},{numBlocks:2,dataCodewordsPerBlock:15}]}]},{infoBits:39577,versionNumber:9,alignmentPatternCenters:[6,26,46],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:12},{numBlocks:4,dataCodewordsPerBlock:13}]}]},{infoBits:42195,versionNumber:10,alignmentPatternCenters:[6,28,50],errorCorrectionLevels:[{ecCodewordsPerBlock:18,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:68},{numBlocks:2,dataCodewordsPerBlock:69}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:43},{numBlocks:1,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:15},{numBlocks:2,dataCodewordsPerBlock:16}]}]},{infoBits:48118,versionNumber:11,alignmentPatternCenters:[6,30,54],errorCorrectionLevels:[{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:81}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:50},{numBlocks:4,dataCodewordsPerBlock:51}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:22},{numBlocks:4,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:12},{numBlocks:8,dataCodewordsPerBlock:13}]}]},{infoBits:51042,versionNumber:12,alignmentPatternCenters:[6,32,58],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:92},{numBlocks:2,dataCodewordsPerBlock:93}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:36},{numBlocks:2,dataCodewordsPerBlock:37}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:20},{numBlocks:6,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:14},{numBlocks:4,dataCodewordsPerBlock:15}]}]},{infoBits:55367,versionNumber:13,alignmentPatternCenters:[6,34,62],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:37},{numBlocks:1,dataCodewordsPerBlock:38}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:20},{numBlocks:4,dataCodewordsPerBlock:21}]},{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:11},{numBlocks:4,dataCodewordsPerBlock:12}]}]},{infoBits:58893,versionNumber:14,alignmentPatternCenters:[6,26,46,66],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:40},{numBlocks:5,dataCodewordsPerBlock:41}]},{ecCodewordsPerBlock:20,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:16},{numBlocks:5,dataCodewordsPerBlock:17}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:5,dataCodewordsPerBlock:13}]}]},{infoBits:63784,versionNumber:15,alignmentPatternCenters:[6,26,48,70],errorCorrectionLevels:[{ecCodewordsPerBlock:22,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:87},{numBlocks:1,dataCodewordsPerBlock:88}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:41},{numBlocks:5,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:12},{numBlocks:7,dataCodewordsPerBlock:13}]}]},{infoBits:68472,versionNumber:16,alignmentPatternCenters:[6,26,50,74],errorCorrectionLevels:[{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:98},{numBlocks:1,dataCodewordsPerBlock:99}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:19},{numBlocks:2,dataCodewordsPerBlock:20}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:70749,versionNumber:17,alignmentPatternCenters:[6,30,54,78],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:1,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:22},{numBlocks:15,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:17,dataCodewordsPerBlock:15}]}]},{infoBits:76311,versionNumber:18,alignmentPatternCenters:[6,30,56,82],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:120},{numBlocks:1,dataCodewordsPerBlock:121}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:43},{numBlocks:4,dataCodewordsPerBlock:44}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:1,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:14},{numBlocks:19,dataCodewordsPerBlock:15}]}]},{infoBits:79154,versionNumber:19,alignmentPatternCenters:[6,30,58,86],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:113},{numBlocks:4,dataCodewordsPerBlock:114}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:44},{numBlocks:11,dataCodewordsPerBlock:45}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:21},{numBlocks:4,dataCodewordsPerBlock:22}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:9,dataCodewordsPerBlock:13},{numBlocks:16,dataCodewordsPerBlock:14}]}]},{infoBits:84390,versionNumber:20,alignmentPatternCenters:[6,34,62,90],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:107},{numBlocks:5,dataCodewordsPerBlock:108}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:41},{numBlocks:13,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:5,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:15},{numBlocks:10,dataCodewordsPerBlock:16}]}]},{infoBits:87683,versionNumber:21,alignmentPatternCenters:[6,28,50,72,94],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:116},{numBlocks:4,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:42}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:16},{numBlocks:6,dataCodewordsPerBlock:17}]}]},{infoBits:92361,versionNumber:22,alignmentPatternCenters:[6,26,50,74,98],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:111},{numBlocks:7,dataCodewordsPerBlock:112}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:24,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:13}]}]},{infoBits:96236,versionNumber:23,alignmentPatternCenters:[6,30,54,74,102],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:121},{numBlocks:5,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:47},{numBlocks:14,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:16,dataCodewordsPerBlock:15},{numBlocks:14,dataCodewordsPerBlock:16}]}]},{infoBits:102084,versionNumber:24,alignmentPatternCenters:[6,28,54,80,106],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:45},{numBlocks:14,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:24},{numBlocks:16,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:30,dataCodewordsPerBlock:16},{numBlocks:2,dataCodewordsPerBlock:17}]}]},{infoBits:102881,versionNumber:25,alignmentPatternCenters:[6,32,58,84,110],errorCorrectionLevels:[{ecCodewordsPerBlock:26,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:106},{numBlocks:4,dataCodewordsPerBlock:107}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:47},{numBlocks:13,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:13,dataCodewordsPerBlock:16}]}]},{infoBits:110507,versionNumber:26,alignmentPatternCenters:[6,30,58,86,114],errorCorrectionLevels:[{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:114},{numBlocks:2,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:46},{numBlocks:4,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:28,dataCodewordsPerBlock:22},{numBlocks:6,dataCodewordsPerBlock:23}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:33,dataCodewordsPerBlock:16},{numBlocks:4,dataCodewordsPerBlock:17}]}]},{infoBits:110734,versionNumber:27,alignmentPatternCenters:[6,34,62,90,118],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:45},{numBlocks:3,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:8,dataCodewordsPerBlock:23},{numBlocks:26,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:117786,versionNumber:28,alignmentPatternCenters:[6,26,50,74,98,122],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:117},{numBlocks:10,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:3,dataCodewordsPerBlock:45},{numBlocks:23,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:24},{numBlocks:31,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:31,dataCodewordsPerBlock:16}]}]},{infoBits:119615,versionNumber:29,alignmentPatternCenters:[6,30,54,78,102,126],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:7,dataCodewordsPerBlock:116},{numBlocks:7,dataCodewordsPerBlock:117}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:21,dataCodewordsPerBlock:45},{numBlocks:7,dataCodewordsPerBlock:46}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:1,dataCodewordsPerBlock:23},{numBlocks:37,dataCodewordsPerBlock:24}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:26,dataCodewordsPerBlock:16}]}]},{infoBits:126325,versionNumber:30,alignmentPatternCenters:[6,26,52,78,104,130],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:5,dataCodewordsPerBlock:115},{numBlocks:10,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:47},{numBlocks:10,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:15,dataCodewordsPerBlock:24},{numBlocks:25,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:25,dataCodewordsPerBlock:16}]}]},{infoBits:127568,versionNumber:31,alignmentPatternCenters:[6,30,56,82,108,134],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:3,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:46},{numBlocks:29,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:24},{numBlocks:1,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:23,dataCodewordsPerBlock:15},{numBlocks:28,dataCodewordsPerBlock:16}]}]},{infoBits:133589,versionNumber:32,alignmentPatternCenters:[6,34,60,86,112,138],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:24},{numBlocks:35,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:15},{numBlocks:35,dataCodewordsPerBlock:16}]}]},{infoBits:136944,versionNumber:33,alignmentPatternCenters:[6,30,58,86,114,142],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:115},{numBlocks:1,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:21,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:24},{numBlocks:19,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:11,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:141498,versionNumber:34,alignmentPatternCenters:[6,34,62,90,118,146],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:115},{numBlocks:6,dataCodewordsPerBlock:116}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:14,dataCodewordsPerBlock:46},{numBlocks:23,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:44,dataCodewordsPerBlock:24},{numBlocks:7,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:59,dataCodewordsPerBlock:16},{numBlocks:1,dataCodewordsPerBlock:17}]}]},{infoBits:145311,versionNumber:35,alignmentPatternCenters:[6,30,54,78,102,126,150],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:121},{numBlocks:7,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:12,dataCodewordsPerBlock:47},{numBlocks:26,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:39,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:22,dataCodewordsPerBlock:15},{numBlocks:41,dataCodewordsPerBlock:16}]}]},{infoBits:150283,versionNumber:36,alignmentPatternCenters:[6,24,50,76,102,128,154],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:121},{numBlocks:14,dataCodewordsPerBlock:122}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:6,dataCodewordsPerBlock:47},{numBlocks:34,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:46,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:2,dataCodewordsPerBlock:15},{numBlocks:64,dataCodewordsPerBlock:16}]}]},{infoBits:152622,versionNumber:37,alignmentPatternCenters:[6,28,54,80,106,132,158],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:17,dataCodewordsPerBlock:122},{numBlocks:4,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:29,dataCodewordsPerBlock:46},{numBlocks:14,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:49,dataCodewordsPerBlock:24},{numBlocks:10,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:24,dataCodewordsPerBlock:15},{numBlocks:46,dataCodewordsPerBlock:16}]}]},{infoBits:158308,versionNumber:38,alignmentPatternCenters:[6,32,58,84,110,136,162],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:4,dataCodewordsPerBlock:122},{numBlocks:18,dataCodewordsPerBlock:123}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:13,dataCodewordsPerBlock:46},{numBlocks:32,dataCodewordsPerBlock:47}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:48,dataCodewordsPerBlock:24},{numBlocks:14,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:42,dataCodewordsPerBlock:15},{numBlocks:32,dataCodewordsPerBlock:16}]}]},{infoBits:161089,versionNumber:39,alignmentPatternCenters:[6,26,54,82,110,138,166],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:117},{numBlocks:4,dataCodewordsPerBlock:118}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:40,dataCodewordsPerBlock:47},{numBlocks:7,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:43,dataCodewordsPerBlock:24},{numBlocks:22,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:10,dataCodewordsPerBlock:15},{numBlocks:67,dataCodewordsPerBlock:16}]}]},{infoBits:167017,versionNumber:40,alignmentPatternCenters:[6,30,58,86,114,142,170],errorCorrectionLevels:[{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:19,dataCodewordsPerBlock:118},{numBlocks:6,dataCodewordsPerBlock:119}]},{ecCodewordsPerBlock:28,ecBlocks:[{numBlocks:18,dataCodewordsPerBlock:47},{numBlocks:31,dataCodewordsPerBlock:48}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:34,dataCodewordsPerBlock:24},{numBlocks:34,dataCodewordsPerBlock:25}]},{ecCodewordsPerBlock:30,ecBlocks:[{numBlocks:20,dataCodewordsPerBlock:15},{numBlocks:61,dataCodewordsPerBlock:16}]}]}]},function(o,e,r){"use strict";function t(o,e,r,t){var c=o.x-e.x+r.x-t.x,s=o.y-e.y+r.y-t.y;if(0===c&&0===s)return{a11:e.x-o.x,a12:e.y-o.y,a13:0,a21:r.x-e.x,a22:r.y-e.y,a23:0,a31:o.x,a32:o.y,a33:1};var a=e.x-r.x,d=t.x-r.x,n=e.y-r.y,l=t.y-r.y,i=a*l-d*n,B=(c*l-d*s)/i,k=(a*s-c*n)/i;return{a11:e.x-o.x+B*e.x,a12:e.y-o.y+B*e.y,a13:B,a21:t.x-o.x+k*t.x,a22:t.y-o.y+k*t.y,a23:k,a31:o.x,a32:o.y,a33:1}}function c(o,e,r,c){var s=t(o,e,r,c);return{a11:s.a22*s.a33-s.a23*s.a32,a12:s.a13*s.a32-s.a12*s.a33,a13:s.a12*s.a23-s.a13*s.a22,a21:s.a23*s.a31-s.a21*s.a33,a22:s.a11*s.a33-s.a13*s.a31,a23:s.a13*s.a21-s.a11*s.a23,a31:s.a21*s.a32-s.a22*s.a31,a32:s.a12*s.a31-s.a11*s.a32,a33:s.a11*s.a22-s.a12*s.a21}}function s(o,e){return{a11:o.a11*e.a11+o.a21*e.a12+o.a31*e.a13,a12:o.a12*e.a11+o.a22*e.a12+o.a32*e.a13,a13:o.a13*e.a11+o.a23*e.a12+o.a33*e.a13,a21:o.a11*e.a21+o.a21*e.a22+o.a31*e.a23,a22:o.a12*e.a21+o.a22*e.a22+o.a32*e.a23,a23:o.a13*e.a21+o.a23*e.a22+o.a33*e.a23,a31:o.a11*e.a31+o.a21*e.a32+o.a31*e.a33,a32:o.a12*e.a31+o.a22*e.a32+o.a32*e.a33,a33:o.a13*e.a31+o.a23*e.a32+o.a33*e.a33}}function a(o,e){for(var r=c({x:3.5,y:3.5},{x:e.dimension-3.5,y:3.5},{x:e.dimension-6.5,y:e.dimension-6.5},{x:3.5,y:e.dimension-3.5}),a=t(e.topLeft,e.topRight,e.alignmentPattern,e.bottomLeft),n=s(a,r),l=d.BitMatrix.createEmpty(e.dimension,e.dimension),i=function(o,e){var r=n.a13*o+n.a23*e+n.a33;return{x:(n.a11*o+n.a21*e+n.a31)/r,y:(n.a12*o+n.a22*e+n.a32)/r}},B=0;B<e.dimension;B++)for(var k=0;k<e.dimension;k++){var u=k+.5,C=B+.5,m=i(u,C);l.set(k,B,o.get(Math.floor(m.x),Math.floor(m.y)))}return{matrix:l,mappingFunction:i}}Object.defineProperty(e,"__esModule",{value:!0});var d=r(0);e.extract=a},function(o,e,r){"use strict";function t(o){return o.reduce(function(o,e){return o+e})}function c(o,e,r){var t,c,s,a=C(o,e),d=C(e,r),n=C(o,r);return d>=a&&d>=n?(l=[e,o,r],t=l[0],c=l[1],s=l[2]):n>=d&&n>=a?(i=[o,e,r],t=i[0],c=i[1],s=i[2]):(B=[o,r,e],t=B[0],c=B[1],s=B[2]),(s.x-c.x)*(t.y-c.y)-(s.y-c.y)*(t.x-c.x)<0&&(k=[s,t],t=k[0],s=k[1]),{bottomLeft:t,topLeft:c,topRight:s};var l,i,B,k}function s(o,e,r,c){var s=(t(d(o,r,c,5))/7+t(d(o,e,c,5))/7+t(d(r,o,c,5))/7+t(d(e,o,c,5))/7)/4;if(s<1)throw new Error("Invalid module size");var a=Math.round(C(o,e)/s),n=Math.round(C(o,r)/s),l=Math.floor((a+n)/2)+7;switch(l%4){case 0:l++;break;case 2:l--}return{dimension:l,moduleSize:s}}function a(o,e,r,t){var c,s,a,d,n=[{x:Math.floor(o.x),y:Math.floor(o.y)}],l=Math.abs(e.y-o.y)>Math.abs(e.x-o.x);l?(c=Math.floor(o.y),s=Math.floor(o.x),a=Math.floor(e.y),d=Math.floor(e.x)):(c=Math.floor(o.x),s=Math.floor(o.y),a=Math.floor(e.x),d=Math.floor(e.y));for(var i=Math.abs(a-c),B=Math.abs(d-s),k=Math.floor(-i/2),u=c<a?1:-1,m=s<d?1:-1,f=!0,w=c,P=s;w!==a+u;w+=u){var v=l?P:w,h=l?w:P;if(r.get(v,h)!==f&&(f=!f,n.push({x:v,y:h}),n.length===t+1))break;if((k+=B)>0){if(P===d)break;P+=m,k-=i}}for(var p=[],y=0;y<t;y++)n[y]&&n[y+1]?p.push(C(n[y],n[y+1])):p.push(0);return p}function d(o,e,r,t){var c=e.y-o.y,s=e.x-o.x,d=a(o,e,r,Math.ceil(t/2)),n=a(o,{x:o.x-s,y:o.y-c},r,Math.ceil(t/2)),l=d.shift()+n.shift()-1;return(i=n.concat(l)).concat.apply(i,d);var i}function n(o,e){var r=t(o)/t(e),c=0;return e.forEach(function(e,t){c+=Math.pow(o[t]-e*r,2)}),{averageSize:r,error:c}}function l(o,e,r){try{var t=d(o,{x:-1,y:o.y},r,e.length),c=d(o,{x:o.x,y:-1},r,e.length),s={x:Math.max(0,o.x-o.y)-1,y:Math.max(0,o.y-o.x)-1},a=d(o,s,r,e.length),l={x:Math.min(r.width,o.x+o.y)+1,y:Math.min(r.height,o.y+o.x)+1},i=d(o,l,r,e.length),B=n(t,e),k=n(c,e),u=n(a,e),C=n(i,e),m=Math.sqrt(B.error*B.error+k.error*k.error+u.error*u.error+C.error*C.error),f=(B.averageSize+k.averageSize+u.averageSize+C.averageSize)/4;return m+(Math.pow(B.averageSize-f,2)+Math.pow(k.averageSize-f,2)+Math.pow(u.averageSize-f,2)+Math.pow(C.averageSize-f,2))/f}catch(o){return 1/0}}function i(o){for(var e=[],r=[],a=[],d=[],n=0;n<=o.height;n++)!function(c){for(var s=0,n=!1,l=[0,0,0,0,0],i=-1;i<=o.width;i++)!function(e){var a=o.get(e,c);if(a===n)s++;else{l=[l[1],l[2],l[3],l[4],s],s=1,n=a;var i=t(l)/7,B=Math.abs(l[0]-i)<i&&Math.abs(l[1]-i)<i&&Math.abs(l[2]-3*i)<3*i&&Math.abs(l[3]-i)<i&&Math.abs(l[4]-i)<i&&!a,C=t(l.slice(-3))/3,m=Math.abs(l[2]-C)<C&&Math.abs(l[3]-C)<C&&Math.abs(l[4]-C)<C&&a;if(B){var f=e-l[3]-l[4],w=f-l[2],P={startX:w,endX:f,y:c},v=r.filter(function(o){return w>=o.bottom.startX&&w<=o.bottom.endX||f>=o.bottom.startX&&w<=o.bottom.endX||w<=o.bottom.startX&&f>=o.bottom.endX&&l[2]/(o.bottom.endX-o.bottom.startX)<u&&l[2]/(o.bottom.endX-o.bottom.startX)>k});v.length>0?v[0].bottom=P:r.push({top:P,bottom:P})}if(m){var h=e-l[4],p=h-l[3],P={startX:p,y:c,endX:h},v=d.filter(function(o){return p>=o.bottom.startX&&p<=o.bottom.endX||h>=o.bottom.startX&&p<=o.bottom.endX||p<=o.bottom.startX&&h>=o.bottom.endX&&l[2]/(o.bottom.endX-o.bottom.startX)<u&&l[2]/(o.bottom.endX-o.bottom.startX)>k});v.length>0?v[0].bottom=P:d.push({top:P,bottom:P})}}}(i);e.push.apply(e,r.filter(function(o){return o.bottom.y!==c&&o.bottom.y-o.top.y>=2})),r=r.filter(function(o){return o.bottom.y===c}),a.push.apply(a,d.filter(function(o){return o.bottom.y!==c})),d=d.filter(function(o){return o.bottom.y===c})}(n);e.push.apply(e,r.filter(function(o){return o.bottom.y-o.top.y>=2})),a.push.apply(a,d);var i=e.filter(function(o){return o.bottom.y-o.top.y>=2}).map(function(e){var r=(e.top.startX+e.top.endX+e.bottom.startX+e.bottom.endX)/4,c=(e.top.y+e.bottom.y+1)/2;if(o.get(Math.round(r),Math.round(c))){\nvar s=[e.top.endX-e.top.startX,e.bottom.endX-e.bottom.startX,e.bottom.y-e.top.y+1],a=t(s)/s.length;return{score:l({x:Math.round(r),y:Math.round(c)},[1,1,3,1,1],o),x:r,y:c,size:a}}}).filter(function(o){return!!o}).sort(function(o,e){return o.score-e.score}).map(function(o,e,r){if(e>B)return null;var t=r.filter(function(o,r){return e!==r}).map(function(e){return{x:e.x,y:e.y,score:e.score+Math.pow(e.size-o.size,2)/o.size,size:e.size}}).sort(function(o,e){return o.score-e.score});if(t.length<2)return null;var c=o.score+t[0].score+t[1].score;return{points:[o].concat(t.slice(0,2)),score:c}}).filter(function(o){return!!o}).sort(function(o,e){return o.score-e.score});if(0===i.length)return null;var m,f,w=c(i[0].points[0],i[0].points[1],i[0].points[2]),P=w.topRight,v=w.topLeft,h=w.bottomLeft;try{L=s(v,P,h,o),m=L.dimension,f=L.moduleSize}catch(o){return null}var p={x:P.x-v.x+h.x,y:P.y-v.y+h.y},y=(C(v,h)+C(v,P))/2/f,b=1-3/y,g={x:v.x+b*(p.x-v.x),y:v.y+b*(p.y-v.y)},x=a.map(function(e){var r=(e.top.startX+e.top.endX+e.bottom.startX+e.bottom.endX)/4,c=(e.top.y+e.bottom.y+1)/2;if(o.get(Math.floor(r),Math.floor(c))){var s=[e.top.endX-e.top.startX,e.bottom.endX-e.bottom.startX,e.bottom.y-e.top.y+1];t(s);return{x:r,y:c,score:l({x:Math.floor(r),y:Math.floor(c)},[1,1,1],o)+C({x:r,y:c},g)}}}).filter(function(o){return!!o}).sort(function(o,e){return o.score-e.score}),M=y>=15&&x.length?x[0]:g;return{alignmentPattern:{x:M.x,y:M.y},bottomLeft:{x:h.x,y:h.y},dimension:m,topLeft:{x:v.x,y:v.y},topRight:{x:P.x,y:P.y}};var L}Object.defineProperty(e,"__esModule",{value:!0});var B=4,k=.5,u=1.5,C=function(o,e){return Math.sqrt(Math.pow(e.x-o.x,2)+Math.pow(e.y-o.y,2))};e.locate=i}]).default}),self.addEventListener("message",function(o){var e=jsQR(o.data.data,o.data.width,o.data.height);e?postMessage(e.data):postMessage(null)});',
            ],
            { type: "application/javascript" }
          ),
          h = ["delay", "legacyMode", "facingMode"];
        e.exports =
          ((o = n =
            (function (e) {
              function t(e) {
                !(function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, t);
                var r = (function (e, t) {
                  if (!e)
                    throw new ReferenceError(
                      "this hasn't been initialised - super() hasn't been called"
                    );
                  return !t ||
                    ("object" !== typeof t && "function" !== typeof t)
                    ? e
                    : t;
                })(
                  this,
                  (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)
                );
                return (
                  (r.els = {}),
                  (r.state = { mirrorVideo: !1 }),
                  (r.initiate = r.initiate.bind(r)),
                  (r.initiateLegacyMode = r.initiateLegacyMode.bind(r)),
                  (r.check = r.check.bind(r)),
                  (r.handleVideo = r.handleVideo.bind(r)),
                  (r.handleLoadStart = r.handleLoadStart.bind(r)),
                  (r.handleInputChange = r.handleInputChange.bind(r)),
                  (r.clearComponent = r.clearComponent.bind(r)),
                  (r.handleReaderLoad = r.handleReaderLoad.bind(r)),
                  (r.openImageDialog = r.openImageDialog.bind(r)),
                  (r.handleWorkerMessage = r.handleWorkerMessage.bind(r)),
                  (r.setRefFactory = r.setRefFactory.bind(r)),
                  r
                );
              }
              return (
                (function (e, t) {
                  if ("function" !== typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof t
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    t &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, t)
                        : (e.__proto__ = t));
                })(t, e),
                i(t, [
                  {
                    key: "componentDidMount",
                    value: function () {
                      (this.worker = new Worker(URL.createObjectURL(m))),
                        (this.worker.onmessage = this.handleWorkerMessage),
                        this.props.legacyMode
                          ? this.initiateLegacyMode()
                          : this.initiate();
                    },
                  },
                  {
                    key: "componentWillReceiveProps",
                    value: function (e) {
                      var t = f(this.props, e, h),
                        r = !0,
                        n = !1,
                        o = void 0;
                      try {
                        for (
                          var a, i = t[Symbol.iterator]();
                          !(r = (a = i.next()).done);
                          r = !0
                        ) {
                          var s = a.value;
                          if ("facingMode" == s) {
                            this.clearComponent(), this.initiate(e);
                            break;
                          }
                          if ("delay" == s)
                            0 != this.props.delay ||
                              e.legacyMode ||
                              (this.timeout = setTimeout(this.check, e.delay)),
                              0 == e.delay && clearTimeout(this.timeout);
                          else if ("legacyMode" == s) {
                            this.props.legacyMode && !e.legacyMode
                              ? (this.clearComponent(), this.initiate(e))
                              : (this.clearComponent(),
                                (this.componentDidUpdate =
                                  this.initiateLegacyMode));
                            break;
                          }
                        }
                      } catch (c) {
                        (n = !0), (o = c);
                      } finally {
                        try {
                          !r && i.return && i.return();
                        } finally {
                          if (n) throw o;
                        }
                      }
                    },
                  },
                  {
                    key: "shouldComponentUpdate",
                    value: function (e, t) {
                      return t !== this.state || f(this.props, e, h).length > 0;
                    },
                  },
                  {
                    key: "componentWillUnmount",
                    value: function () {
                      this.worker &&
                        (this.worker.terminate(), (this.worker = void 0)),
                        this.clearComponent();
                    },
                  },
                  {
                    key: "clearComponent",
                    value: function () {
                      this.timeout &&
                        (clearTimeout(this.timeout), (this.timeout = void 0)),
                        this.stopCamera && this.stopCamera(),
                        this.reader &&
                          this.reader.removeEventListener(
                            "load",
                            this.handleReaderLoad
                          ),
                        this.els.img &&
                          this.els.img.removeEventListener("load", this.check);
                    },
                  },
                  {
                    key: "initiate",
                    value: function () {
                      var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : this.props,
                        t = e.onError,
                        r = e.facingMode,
                        n = /firefox/i.test(navigator.userAgent),
                        o = {};
                      navigator.mediaDevices &&
                        "function" ===
                          typeof navigator.mediaDevices
                            .getSupportedConstraints &&
                        (o = navigator.mediaDevices.getSupportedConstraints());
                      var a = {};
                      o.facingMode && (a.facingMode = { ideal: r }),
                        o.frameRate && (a.frameRate = { ideal: 25, min: 10 });
                      var i =
                        o.facingMode || n
                          ? Promise.resolve(e.constraints || a)
                          : d(r).then(function (t) {
                              return Object.assign(
                                {},
                                { deviceId: t },
                                e.constraints
                              );
                            });
                      i.then(function (e) {
                        return navigator.mediaDevices.getUserMedia({
                          video: e,
                        });
                      })
                        .then(this.handleVideo)
                        .catch(t);
                    },
                  },
                  {
                    key: "handleVideo",
                    value: function (e) {
                      var t = this.els.preview,
                        r = this.props.facingMode;
                      if (!t) return setTimeout(this.handleVideo, 200, e);
                      void 0 !== (t || {}).srcObject
                        ? (t.srcObject = e)
                        : void 0 !== t.mozSrcObject
                        ? (t.mozSrcObject = e)
                        : window.URL.createObjectURL
                        ? (t.src = window.URL.createObjectURL(e))
                        : window.webkitURL
                        ? (t.src = window.webkitURL.createObjectURL(e))
                        : (t.src = e),
                        (t.playsInline = !0);
                      var n = e.getTracks()[0];
                      (this.stopCamera = n.stop.bind(n)),
                        t.addEventListener("loadstart", this.handleLoadStart),
                        this.setState({
                          mirrorVideo: "user" == r,
                          streamLabel: n.label,
                        });
                    },
                  },
                  {
                    key: "handleLoadStart",
                    value: function () {
                      var e = this.props,
                        t = e.delay,
                        r = e.onLoad,
                        n = this.state,
                        o = n.mirrorVideo,
                        a = n.streamLabel,
                        i = this.els.preview;
                      i.play(),
                        "function" == typeof r &&
                          r({ mirrorVideo: o, streamLabel: a }),
                        "number" == typeof t &&
                          (this.timeout = setTimeout(this.check, t)),
                        i.removeEventListener(
                          "loadstart",
                          this.handleLoadStart
                        );
                    },
                  },
                  {
                    key: "check",
                    value: function () {
                      var e = this.props,
                        t = e.legacyMode,
                        r = e.resolution,
                        n = e.delay,
                        o = this.els,
                        a = o.preview,
                        i = o.canvas,
                        s = o.img,
                        c = Math.floor(t ? s.naturalWidth : a.videoWidth),
                        l = Math.floor(t ? s.naturalHeight : a.videoHeight),
                        u = 0,
                        d = 0;
                      if (t) {
                        var f = r / (c > l ? c : l);
                        (l *= f), (c *= f), (i.width = c), (i.height = l);
                      } else {
                        var p = r / (c < l ? c : l);
                        (d = (((l *= p) - r) / 2) * -1),
                          (u = (((c *= p) - r) / 2) * -1),
                          (i.width = r),
                          (i.height = r);
                      }
                      var m = a && a.readyState === a.HAVE_ENOUGH_DATA;
                      if (t || m) {
                        var h = i.getContext("2d");
                        h.drawImage(t ? s : a, u, d, c, l);
                        var v = h.getImageData(0, 0, i.width, i.height);
                        this.worker.postMessage(v);
                      } else this.timeout = setTimeout(this.check, n);
                    },
                  },
                  {
                    key: "handleWorkerMessage",
                    value: function (e) {
                      var t = this.props,
                        r = t.onScan,
                        n = t.legacyMode,
                        o = t.delay;
                      r(e.data || null),
                        !n &&
                          "number" == typeof o &&
                          this.worker &&
                          (this.timeout = setTimeout(this.check, o));
                    },
                  },
                  {
                    key: "initiateLegacyMode",
                    value: function () {
                      (this.reader = new FileReader()),
                        this.reader.addEventListener(
                          "load",
                          this.handleReaderLoad
                        ),
                        this.els.img.addEventListener("load", this.check, !1),
                        (this.componentDidUpdate = void 0),
                        "function" == typeof this.props.onLoad &&
                          this.props.onLoad();
                    },
                  },
                  {
                    key: "handleInputChange",
                    value: function (e) {
                      var t = e.target.files[0];
                      this.reader.readAsDataURL(t);
                    },
                  },
                  {
                    key: "handleReaderLoad",
                    value: function (e) {
                      this.els.img.src = e.target.result;
                    },
                  },
                  {
                    key: "openImageDialog",
                    value: function () {
                      this.els.input.click();
                    },
                  },
                  {
                    key: "setRefFactory",
                    value: function (e) {
                      var t = this;
                      return function (r) {
                        t.els[e] = r;
                      };
                    },
                  },
                  {
                    key: "render",
                    value: function () {
                      var e = this.props,
                        t = e.style,
                        r = e.className,
                        n = e.onImageLoad,
                        o = e.legacyMode,
                        i = e.showViewFinder,
                        c = (e.facingMode, { display: "none" }),
                        l = {
                          top: 0,
                          left: 0,
                          display: "block",
                          position: "absolute",
                          overflow: "hidden",
                          width: "100%",
                          height: "100%",
                        },
                        u = a({}, l, {
                          objectFit: "cover",
                          transform: this.state.mirrorVideo
                            ? "scaleX(-1)"
                            : void 0,
                        }),
                        d = a({}, l, { objectFit: "scale-down" });
                      return s.createElement(
                        "section",
                        { className: r, style: t },
                        s.createElement(
                          "section",
                          {
                            style: {
                              overflow: "hidden",
                              position: "relative",
                              width: "100%",
                              paddingTop: "100%",
                            },
                          },
                          !o && i
                            ? s.createElement("div", {
                                style: {
                                  top: 0,
                                  left: 0,
                                  zIndex: 1,
                                  boxSizing: "border-box",
                                  border: "50px solid rgba(0, 0, 0, 0.3)",
                                  boxShadow:
                                    "inset 0 0 0 5px rgba(255, 0, 0, 0.5)",
                                  position: "absolute",
                                  width: "100%",
                                  height: "100%",
                                },
                              })
                            : null,
                          o
                            ? s.createElement("input", {
                                style: c,
                                type: "file",
                                accept: "image/*",
                                ref: this.setRefFactory("input"),
                                onChange: this.handleInputChange,
                              })
                            : null,
                          o
                            ? s.createElement("img", {
                                style: d,
                                ref: this.setRefFactory("img"),
                                onLoad: n,
                              })
                            : s.createElement("video", {
                                style: u,
                                ref: this.setRefFactory("preview"),
                              }),
                          s.createElement("canvas", {
                            style: c,
                            ref: this.setRefFactory("canvas"),
                          })
                        )
                      );
                    },
                  },
                ]),
                t
              );
            })(c)),
          (n.propTypes = {
            onScan: l.func.isRequired,
            onError: l.func.isRequired,
            onLoad: l.func,
            onImageLoad: l.func,
            delay: l.oneOfType([l.number, l.bool]),
            facingMode: l.oneOf(["user", "environment"]),
            legacyMode: l.bool,
            resolution: l.number,
            showViewFinder: l.bool,
            style: l.any,
            className: l.string,
            constraints: l.object,
          }),
          (n.defaultProps = {
            delay: 500,
            resolution: 600,
            facingMode: "environment",
            showViewFinder: !0,
            constraints: null,
          }),
          o);
      },
      6374: function (e, t, r) {
        "use strict";
        var n = r(2791),
          o = Symbol.for("react.element"),
          a = Symbol.for("react.fragment"),
          i = Object.prototype.hasOwnProperty,
          s =
            n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
              .ReactCurrentOwner,
          c = { key: !0, ref: !0, __self: !0, __source: !0 };
        function l(e, t, r) {
          var n,
            a = {},
            l = null,
            u = null;
          for (n in (void 0 !== r && (l = "" + r),
          void 0 !== t.key && (l = "" + t.key),
          void 0 !== t.ref && (u = t.ref),
          t))
            i.call(t, n) && !c.hasOwnProperty(n) && (a[n] = t[n]);
          if (e && e.defaultProps)
            for (n in (t = e.defaultProps)) void 0 === a[n] && (a[n] = t[n]);
          return {
            $$typeof: o,
            type: e,
            key: l,
            ref: u,
            props: a,
            _owner: s.current,
          };
        }
        (t.Fragment = a), (t.jsx = l), (t.jsxs = l);
      },
      9117: function (e, t) {
        "use strict";
        var r = Symbol.for("react.element"),
          n = Symbol.for("react.portal"),
          o = Symbol.for("react.fragment"),
          a = Symbol.for("react.strict_mode"),
          i = Symbol.for("react.profiler"),
          s = Symbol.for("react.provider"),
          c = Symbol.for("react.context"),
          l = Symbol.for("react.forward_ref"),
          u = Symbol.for("react.suspense"),
          d = Symbol.for("react.memo"),
          f = Symbol.for("react.lazy"),
          p = Symbol.iterator;
        var m = {
            isMounted: function () {
              return !1;
            },
            enqueueForceUpdate: function () {},
            enqueueReplaceState: function () {},
            enqueueSetState: function () {},
          },
          h = Object.assign,
          v = {};
        function g(e, t, r) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = r || m);
        }
        function y() {}
        function k(e, t, r) {
          (this.props = e),
            (this.context = t),
            (this.refs = v),
            (this.updater = r || m);
        }
        (g.prototype.isReactComponent = {}),
          (g.prototype.setState = function (e, t) {
            if ("object" !== typeof e && "function" !== typeof e && null != e)
              throw Error(
                "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
              );
            this.updater.enqueueSetState(this, e, t, "setState");
          }),
          (g.prototype.forceUpdate = function (e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate");
          }),
          (y.prototype = g.prototype);
        var b = (k.prototype = new y());
        (b.constructor = k), h(b, g.prototype), (b.isPureReactComponent = !0);
        var w = Array.isArray,
          C = Object.prototype.hasOwnProperty,
          x = { current: null },
          P = { key: !0, ref: !0, __self: !0, __source: !0 };
        function S(e, t, n) {
          var o,
            a = {},
            i = null,
            s = null;
          if (null != t)
            for (o in (void 0 !== t.ref && (s = t.ref),
            void 0 !== t.key && (i = "" + t.key),
            t))
              C.call(t, o) && !P.hasOwnProperty(o) && (a[o] = t[o]);
          var c = arguments.length - 2;
          if (1 === c) a.children = n;
          else if (1 < c) {
            for (var l = Array(c), u = 0; u < c; u++) l[u] = arguments[u + 2];
            a.children = l;
          }
          if (e && e.defaultProps)
            for (o in (c = e.defaultProps)) void 0 === a[o] && (a[o] = c[o]);
          return {
            $$typeof: r,
            type: e,
            key: i,
            ref: s,
            props: a,
            _owner: x.current,
          };
        }
        function B(e) {
          return "object" === typeof e && null !== e && e.$$typeof === r;
        }
        var E = /\/+/g;
        function T(e, t) {
          return "object" === typeof e && null !== e && null != e.key
            ? (function (e) {
                var t = { "=": "=0", ":": "=2" };
                return (
                  "$" +
                  e.replace(/[=:]/g, function (e) {
                    return t[e];
                  })
                );
              })("" + e.key)
            : t.toString(36);
        }
        function R(e, t, o, a, i) {
          var s = typeof e;
          ("undefined" !== s && "boolean" !== s) || (e = null);
          var c = !1;
          if (null === e) c = !0;
          else
            switch (s) {
              case "string":
              case "number":
                c = !0;
                break;
              case "object":
                switch (e.$$typeof) {
                  case r:
                  case n:
                    c = !0;
                }
            }
          if (c)
            return (
              (i = i((c = e))),
              (e = "" === a ? "." + T(c, 0) : a),
              w(i)
                ? ((o = ""),
                  null != e && (o = e.replace(E, "$&/") + "/"),
                  R(i, t, o, "", function (e) {
                    return e;
                  }))
                : null != i &&
                  (B(i) &&
                    (i = (function (e, t) {
                      return {
                        $$typeof: r,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner,
                      };
                    })(
                      i,
                      o +
                        (!i.key || (c && c.key === i.key)
                          ? ""
                          : ("" + i.key).replace(E, "$&/") + "/") +
                        e
                    )),
                  t.push(i)),
              1
            );
          if (((c = 0), (a = "" === a ? "." : a + ":"), w(e)))
            for (var l = 0; l < e.length; l++) {
              var u = a + T((s = e[l]), l);
              c += R(s, t, o, u, i);
            }
          else if (
            ((u = (function (e) {
              return null === e || "object" !== typeof e
                ? null
                : "function" === typeof (e = (p && e[p]) || e["@@iterator"])
                ? e
                : null;
            })(e)),
            "function" === typeof u)
          )
            for (e = u.call(e), l = 0; !(s = e.next()).done; )
              c += R((s = s.value), t, o, (u = a + T(s, l++)), i);
          else if ("object" === s)
            throw (
              ((t = String(e)),
              Error(
                "Objects are not valid as a React child (found: " +
                  ("[object Object]" === t
                    ? "object with keys {" + Object.keys(e).join(", ") + "}"
                    : t) +
                  "). If you meant to render a collection of children, use an array instead."
              ))
            );
          return c;
        }
        function j(e, t, r) {
          if (null == e) return e;
          var n = [],
            o = 0;
          return (
            R(e, n, "", "", function (e) {
              return t.call(r, e, o++);
            }),
            n
          );
        }
        function N(e) {
          if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 1), (e._result = t));
              },
              function (t) {
                (0 !== e._status && -1 !== e._status) ||
                  ((e._status = 2), (e._result = t));
              }
            ),
              -1 === e._status && ((e._status = 0), (e._result = t));
          }
          if (1 === e._status) return e._result.default;
          throw e._result;
        }
        var O = { current: null },
          _ = { transition: null },
          M = {
            ReactCurrentDispatcher: O,
            ReactCurrentBatchConfig: _,
            ReactCurrentOwner: x,
          };
        (t.Children = {
          map: j,
          forEach: function (e, t, r) {
            j(
              e,
              function () {
                t.apply(this, arguments);
              },
              r
            );
          },
          count: function (e) {
            var t = 0;
            return (
              j(e, function () {
                t++;
              }),
              t
            );
          },
          toArray: function (e) {
            return (
              j(e, function (e) {
                return e;
              }) || []
            );
          },
          only: function (e) {
            if (!B(e))
              throw Error(
                "React.Children.only expected to receive a single React element child."
              );
            return e;
          },
        }),
          (t.Component = g),
          (t.Fragment = o),
          (t.Profiler = i),
          (t.PureComponent = k),
          (t.StrictMode = a),
          (t.Suspense = u),
          (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M),
          (t.cloneElement = function (e, t, n) {
            if (null === e || void 0 === e)
              throw Error(
                "React.cloneElement(...): The argument must be a React element, but you passed " +
                  e +
                  "."
              );
            var o = h({}, e.props),
              a = e.key,
              i = e.ref,
              s = e._owner;
            if (null != t) {
              if (
                (void 0 !== t.ref && ((i = t.ref), (s = x.current)),
                void 0 !== t.key && (a = "" + t.key),
                e.type && e.type.defaultProps)
              )
                var c = e.type.defaultProps;
              for (l in t)
                C.call(t, l) &&
                  !P.hasOwnProperty(l) &&
                  (o[l] = void 0 === t[l] && void 0 !== c ? c[l] : t[l]);
            }
            var l = arguments.length - 2;
            if (1 === l) o.children = n;
            else if (1 < l) {
              c = Array(l);
              for (var u = 0; u < l; u++) c[u] = arguments[u + 2];
              o.children = c;
            }
            return {
              $$typeof: r,
              type: e.type,
              key: a,
              ref: i,
              props: o,
              _owner: s,
            };
          }),
          (t.createContext = function (e) {
            return (
              ((e = {
                $$typeof: c,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null,
                _defaultValue: null,
                _globalName: null,
              }).Provider = { $$typeof: s, _context: e }),
              (e.Consumer = e)
            );
          }),
          (t.createElement = S),
          (t.createFactory = function (e) {
            var t = S.bind(null, e);
            return (t.type = e), t;
          }),
          (t.createRef = function () {
            return { current: null };
          }),
          (t.forwardRef = function (e) {
            return { $$typeof: l, render: e };
          }),
          (t.isValidElement = B),
          (t.lazy = function (e) {
            return {
              $$typeof: f,
              _payload: { _status: -1, _result: e },
              _init: N,
            };
          }),
          (t.memo = function (e, t) {
            return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
          }),
          (t.startTransition = function (e) {
            var t = _.transition;
            _.transition = {};
            try {
              e();
            } finally {
              _.transition = t;
            }
          }),
          (t.unstable_act = function () {
            throw Error(
              "act(...) is not supported in production builds of React."
            );
          }),
          (t.useCallback = function (e, t) {
            return O.current.useCallback(e, t);
          }),
          (t.useContext = function (e) {
            return O.current.useContext(e);
          }),
          (t.useDebugValue = function () {}),
          (t.useDeferredValue = function (e) {
            return O.current.useDeferredValue(e);
          }),
          (t.useEffect = function (e, t) {
            return O.current.useEffect(e, t);
          }),
          (t.useId = function () {
            return O.current.useId();
          }),
          (t.useImperativeHandle = function (e, t, r) {
            return O.current.useImperativeHandle(e, t, r);
          }),
          (t.useInsertionEffect = function (e, t) {
            return O.current.useInsertionEffect(e, t);
          }),
          (t.useLayoutEffect = function (e, t) {
            return O.current.useLayoutEffect(e, t);
          }),
          (t.useMemo = function (e, t) {
            return O.current.useMemo(e, t);
          }),
          (t.useReducer = function (e, t, r) {
            return O.current.useReducer(e, t, r);
          }),
          (t.useRef = function (e) {
            return O.current.useRef(e);
          }),
          (t.useState = function (e) {
            return O.current.useState(e);
          }),
          (t.useSyncExternalStore = function (e, t, r) {
            return O.current.useSyncExternalStore(e, t, r);
          }),
          (t.useTransition = function () {
            return O.current.useTransition();
          }),
          (t.version = "18.0.0-fc46dba67-20220329");
      },
      2791: function (e, t, r) {
        "use strict";
        e.exports = r(9117);
      },
      184: function (e, t, r) {
        "use strict";
        e.exports = r(6374);
      },
      9727: function (e) {
        var t = (function (e) {
          "use strict";
          var t,
            r = Object.prototype,
            n = r.hasOwnProperty,
            o = "function" === typeof Symbol ? Symbol : {},
            a = o.iterator || "@@iterator",
            i = o.asyncIterator || "@@asyncIterator",
            s = o.toStringTag || "@@toStringTag";
          function c(e, t, r) {
            return (
              Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              e[t]
            );
          }
          try {
            c({}, "");
          } catch (N) {
            c = function (e, t, r) {
              return (e[t] = r);
            };
          }
          function l(e, t, r, n) {
            var o = t && t.prototype instanceof v ? t : v,
              a = Object.create(o.prototype),
              i = new T(n || []);
            return (
              (a._invoke = (function (e, t, r) {
                var n = d;
                return function (o, a) {
                  if (n === p) throw new Error("Generator is already running");
                  if (n === m) {
                    if ("throw" === o) throw a;
                    return j();
                  }
                  for (r.method = o, r.arg = a; ; ) {
                    var i = r.delegate;
                    if (i) {
                      var s = S(i, r);
                      if (s) {
                        if (s === h) continue;
                        return s;
                      }
                    }
                    if ("next" === r.method) r.sent = r._sent = r.arg;
                    else if ("throw" === r.method) {
                      if (n === d) throw ((n = m), r.arg);
                      r.dispatchException(r.arg);
                    } else "return" === r.method && r.abrupt("return", r.arg);
                    n = p;
                    var c = u(e, t, r);
                    if ("normal" === c.type) {
                      if (((n = r.done ? m : f), c.arg === h)) continue;
                      return { value: c.arg, done: r.done };
                    }
                    "throw" === c.type &&
                      ((n = m), (r.method = "throw"), (r.arg = c.arg));
                  }
                };
              })(e, r, i)),
              a
            );
          }
          function u(e, t, r) {
            try {
              return { type: "normal", arg: e.call(t, r) };
            } catch (N) {
              return { type: "throw", arg: N };
            }
          }
          e.wrap = l;
          var d = "suspendedStart",
            f = "suspendedYield",
            p = "executing",
            m = "completed",
            h = {};
          function v() {}
          function g() {}
          function y() {}
          var k = {};
          c(k, a, function () {
            return this;
          });
          var b = Object.getPrototypeOf,
            w = b && b(b(R([])));
          w && w !== r && n.call(w, a) && (k = w);
          var C = (y.prototype = v.prototype = Object.create(k));
          function x(e) {
            ["next", "throw", "return"].forEach(function (t) {
              c(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function P(e, t) {
            function r(o, a, i, s) {
              var c = u(e[o], e, a);
              if ("throw" !== c.type) {
                var l = c.arg,
                  d = l.value;
                return d && "object" === typeof d && n.call(d, "__await")
                  ? t.resolve(d.__await).then(
                      function (e) {
                        r("next", e, i, s);
                      },
                      function (e) {
                        r("throw", e, i, s);
                      }
                    )
                  : t.resolve(d).then(
                      function (e) {
                        (l.value = e), i(l);
                      },
                      function (e) {
                        return r("throw", e, i, s);
                      }
                    );
              }
              s(c.arg);
            }
            var o;
            this._invoke = function (e, n) {
              function a() {
                return new t(function (t, o) {
                  r(e, n, t, o);
                });
              }
              return (o = o ? o.then(a, a) : a());
            };
          }
          function S(e, r) {
            var n = e.iterator[r.method];
            if (n === t) {
              if (((r.delegate = null), "throw" === r.method)) {
                if (
                  e.iterator.return &&
                  ((r.method = "return"),
                  (r.arg = t),
                  S(e, r),
                  "throw" === r.method)
                )
                  return h;
                (r.method = "throw"),
                  (r.arg = new TypeError(
                    "The iterator does not provide a 'throw' method"
                  ));
              }
              return h;
            }
            var o = u(n, e.iterator, r.arg);
            if ("throw" === o.type)
              return (
                (r.method = "throw"), (r.arg = o.arg), (r.delegate = null), h
              );
            var a = o.arg;
            return a
              ? a.done
                ? ((r[e.resultName] = a.value),
                  (r.next = e.nextLoc),
                  "return" !== r.method && ((r.method = "next"), (r.arg = t)),
                  (r.delegate = null),
                  h)
                : a
              : ((r.method = "throw"),
                (r.arg = new TypeError("iterator result is not an object")),
                (r.delegate = null),
                h);
          }
          function B(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]),
              2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
              this.tryEntries.push(t);
          }
          function E(e) {
            var t = e.completion || {};
            (t.type = "normal"), delete t.arg, (e.completion = t);
          }
          function T(e) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              e.forEach(B, this),
              this.reset(!0);
          }
          function R(e) {
            if (e) {
              var r = e[a];
              if (r) return r.call(e);
              if ("function" === typeof e.next) return e;
              if (!isNaN(e.length)) {
                var o = -1,
                  i = function r() {
                    for (; ++o < e.length; )
                      if (n.call(e, o))
                        return (r.value = e[o]), (r.done = !1), r;
                    return (r.value = t), (r.done = !0), r;
                  };
                return (i.next = i);
              }
            }
            return { next: j };
          }
          function j() {
            return { value: t, done: !0 };
          }
          return (
            (g.prototype = y),
            c(C, "constructor", y),
            c(y, "constructor", g),
            (g.displayName = c(y, s, "GeneratorFunction")),
            (e.isGeneratorFunction = function (e) {
              var t = "function" === typeof e && e.constructor;
              return (
                !!t &&
                (t === g || "GeneratorFunction" === (t.displayName || t.name))
              );
            }),
            (e.mark = function (e) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, y)
                  : ((e.__proto__ = y), c(e, s, "GeneratorFunction")),
                (e.prototype = Object.create(C)),
                e
              );
            }),
            (e.awrap = function (e) {
              return { __await: e };
            }),
            x(P.prototype),
            c(P.prototype, i, function () {
              return this;
            }),
            (e.AsyncIterator = P),
            (e.async = function (t, r, n, o, a) {
              void 0 === a && (a = Promise);
              var i = new P(l(t, r, n, o), a);
              return e.isGeneratorFunction(r)
                ? i
                : i.next().then(function (e) {
                    return e.done ? e.value : i.next();
                  });
            }),
            x(C),
            c(C, s, "Generator"),
            c(C, a, function () {
              return this;
            }),
            c(C, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (e) {
              var t = [];
              for (var r in e) t.push(r);
              return (
                t.reverse(),
                function r() {
                  for (; t.length; ) {
                    var n = t.pop();
                    if (n in e) return (r.value = n), (r.done = !1), r;
                  }
                  return (r.done = !0), r;
                }
              );
            }),
            (e.values = R),
            (T.prototype = {
              constructor: T,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(E),
                  !e)
                )
                  for (var r in this)
                    "t" === r.charAt(0) &&
                      n.call(this, r) &&
                      !isNaN(+r.slice(1)) &&
                      (this[r] = t);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var r = this;
                function o(n, o) {
                  return (
                    (s.type = "throw"),
                    (s.arg = e),
                    (r.next = n),
                    o && ((r.method = "next"), (r.arg = t)),
                    !!o
                  );
                }
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                  var i = this.tryEntries[a],
                    s = i.completion;
                  if ("root" === i.tryLoc) return o("end");
                  if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"),
                      l = n.call(i, "finallyLoc");
                    if (c && l) {
                      if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                      if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                    } else if (c) {
                      if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                    } else {
                      if (!l)
                        throw new Error(
                          "try statement without catch or finally"
                        );
                      if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var o = this.tryEntries[r];
                  if (
                    o.tryLoc <= this.prev &&
                    n.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var a = o;
                    break;
                  }
                }
                a &&
                  ("break" === e || "continue" === e) &&
                  a.tryLoc <= t &&
                  t <= a.finallyLoc &&
                  (a = null);
                var i = a ? a.completion : {};
                return (
                  (i.type = e),
                  (i.arg = t),
                  a
                    ? ((this.method = "next"), (this.next = a.finallyLoc), h)
                    : this.complete(i)
                );
              },
              complete: function (e, t) {
                if ("throw" === e.type) throw e.arg;
                return (
                  "break" === e.type || "continue" === e.type
                    ? (this.next = e.arg)
                    : "return" === e.type
                    ? ((this.rval = this.arg = e.arg),
                      (this.method = "return"),
                      (this.next = "end"))
                    : "normal" === e.type && t && (this.next = t),
                  h
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var r = this.tryEntries[t];
                  if (r.finallyLoc === e)
                    return this.complete(r.completion, r.afterLoc), E(r), h;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var r = this.tryEntries[t];
                  if (r.tryLoc === e) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                      var o = n.arg;
                      E(r);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, r, n) {
                return (
                  (this.delegate = {
                    iterator: R(e),
                    resultName: r,
                    nextLoc: n,
                  }),
                  "next" === this.method && (this.arg = t),
                  h
                );
              },
            }),
            e
          );
        })(e.exports);
        try {
          regeneratorRuntime = t;
        } catch (r) {
          "object" === typeof globalThis
            ? (globalThis.regeneratorRuntime = t)
            : Function("r", "regeneratorRuntime = r")(t);
        }
      },
      8688: function (e, t, r) {
        "use strict";
        var n = r(7800);
        function o(e, t, r, o, a) {
          var i = n.writeRtpDescription(e.kind, t);
          if (
            ((i += n.writeIceParameters(e.iceGatherer.getLocalParameters())),
            (i += n.writeDtlsParameters(
              e.dtlsTransport.getLocalParameters(),
              "offer" === r ? "actpass" : a || "active"
            )),
            (i += "a=mid:" + e.mid + "\r\n"),
            e.rtpSender && e.rtpReceiver
              ? (i += "a=sendrecv\r\n")
              : e.rtpSender
              ? (i += "a=sendonly\r\n")
              : e.rtpReceiver
              ? (i += "a=recvonly\r\n")
              : (i += "a=inactive\r\n"),
            e.rtpSender)
          ) {
            var s = e.rtpSender._initialTrackId || e.rtpSender.track.id;
            e.rtpSender._initialTrackId = s;
            var c = "msid:" + (o ? o.id : "-") + " " + s + "\r\n";
            (i += "a=" + c),
              (i += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + c),
              e.sendEncodingParameters[0].rtx &&
                ((i +=
                  "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + c),
                (i +=
                  "a=ssrc-group:FID " +
                  e.sendEncodingParameters[0].ssrc +
                  " " +
                  e.sendEncodingParameters[0].rtx.ssrc +
                  "\r\n"));
          }
          return (
            (i +=
              "a=ssrc:" +
              e.sendEncodingParameters[0].ssrc +
              " cname:" +
              n.localCName +
              "\r\n"),
            e.rtpSender &&
              e.sendEncodingParameters[0].rtx &&
              (i +=
                "a=ssrc:" +
                e.sendEncodingParameters[0].rtx.ssrc +
                " cname:" +
                n.localCName +
                "\r\n"),
            i
          );
        }
        function a(e, t) {
          var r = { codecs: [], headerExtensions: [], fecMechanisms: [] },
            n = function (e, t) {
              e = parseInt(e, 10);
              for (var r = 0; r < t.length; r++)
                if (t[r].payloadType === e || t[r].preferredPayloadType === e)
                  return t[r];
            },
            o = function (e, t, r, o) {
              var a = n(e.parameters.apt, r),
                i = n(t.parameters.apt, o);
              return a && i && a.name.toLowerCase() === i.name.toLowerCase();
            };
          return (
            e.codecs.forEach(function (n) {
              for (var a = 0; a < t.codecs.length; a++) {
                var i = t.codecs[a];
                if (
                  n.name.toLowerCase() === i.name.toLowerCase() &&
                  n.clockRate === i.clockRate
                ) {
                  if (
                    "rtx" === n.name.toLowerCase() &&
                    n.parameters &&
                    i.parameters.apt &&
                    !o(n, i, e.codecs, t.codecs)
                  )
                    continue;
                  ((i = JSON.parse(JSON.stringify(i))).numChannels = Math.min(
                    n.numChannels,
                    i.numChannels
                  )),
                    r.codecs.push(i),
                    (i.rtcpFeedback = i.rtcpFeedback.filter(function (e) {
                      for (var t = 0; t < n.rtcpFeedback.length; t++)
                        if (
                          n.rtcpFeedback[t].type === e.type &&
                          n.rtcpFeedback[t].parameter === e.parameter
                        )
                          return !0;
                      return !1;
                    }));
                  break;
                }
              }
            }),
            e.headerExtensions.forEach(function (e) {
              for (var n = 0; n < t.headerExtensions.length; n++) {
                var o = t.headerExtensions[n];
                if (e.uri === o.uri) {
                  r.headerExtensions.push(o);
                  break;
                }
              }
            }),
            r
          );
        }
        function i(e, t, r) {
          return (
            -1 !==
            {
              offer: {
                setLocalDescription: ["stable", "have-local-offer"],
                setRemoteDescription: ["stable", "have-remote-offer"],
              },
              answer: {
                setLocalDescription: [
                  "have-remote-offer",
                  "have-local-pranswer",
                ],
                setRemoteDescription: [
                  "have-local-offer",
                  "have-remote-pranswer",
                ],
              },
            }[t][e].indexOf(r)
          );
        }
        function s(e, t) {
          var r = e.getRemoteCandidates().find(function (e) {
            return (
              t.foundation === e.foundation &&
              t.ip === e.ip &&
              t.port === e.port &&
              t.priority === e.priority &&
              t.protocol === e.protocol &&
              t.type === e.type
            );
          });
          return r || e.addRemoteCandidate(t), !r;
        }
        function c(e, t) {
          var r = new Error(t);
          return (
            (r.name = e),
            (r.code = {
              NotSupportedError: 9,
              InvalidStateError: 11,
              InvalidAccessError: 15,
              TypeError: void 0,
              OperationError: void 0,
            }[e]),
            r
          );
        }
        e.exports = function (e, t) {
          function r(t, r) {
            r.addTrack(t),
              r.dispatchEvent(
                new e.MediaStreamTrackEvent("addtrack", { track: t })
              );
          }
          function l(t, r, n, o) {
            var a = new Event("track");
            (a.track = r),
              (a.receiver = n),
              (a.transceiver = { receiver: n }),
              (a.streams = o),
              e.setTimeout(function () {
                t._dispatchEvent("track", a);
              });
          }
          var u = function (r) {
            var o = this,
              a = document.createDocumentFragment();
            if (
              ([
                "addEventListener",
                "removeEventListener",
                "dispatchEvent",
              ].forEach(function (e) {
                o[e] = a[e].bind(a);
              }),
              (this.canTrickleIceCandidates = null),
              (this.needNegotiation = !1),
              (this.localStreams = []),
              (this.remoteStreams = []),
              (this._localDescription = null),
              (this._remoteDescription = null),
              (this.signalingState = "stable"),
              (this.iceConnectionState = "new"),
              (this.connectionState = "new"),
              (this.iceGatheringState = "new"),
              (r = JSON.parse(JSON.stringify(r || {}))),
              (this.usingBundle = "max-bundle" === r.bundlePolicy),
              "negotiate" === r.rtcpMuxPolicy)
            )
              throw c(
                "NotSupportedError",
                "rtcpMuxPolicy 'negotiate' is not supported"
              );
            switch (
              (r.rtcpMuxPolicy || (r.rtcpMuxPolicy = "require"),
              r.iceTransportPolicy)
            ) {
              case "all":
              case "relay":
                break;
              default:
                r.iceTransportPolicy = "all";
            }
            switch (r.bundlePolicy) {
              case "balanced":
              case "max-compat":
              case "max-bundle":
                break;
              default:
                r.bundlePolicy = "balanced";
            }
            if (
              ((r.iceServers = (function (e, t) {
                var r = !1;
                return (e = JSON.parse(JSON.stringify(e))).filter(function (e) {
                  if (e && (e.urls || e.url)) {
                    var n = e.urls || e.url;
                    e.url &&
                      !e.urls &&
                      console.warn(
                        "RTCIceServer.url is deprecated! Use urls instead."
                      );
                    var o = "string" === typeof n;
                    return (
                      o && (n = [n]),
                      (n = n.filter(function (e) {
                        return 0 !== e.indexOf("turn:") ||
                          -1 === e.indexOf("transport=udp") ||
                          -1 !== e.indexOf("turn:[") ||
                          r
                          ? 0 === e.indexOf("stun:") &&
                              t >= 14393 &&
                              -1 === e.indexOf("?transport=udp")
                          : ((r = !0), !0);
                      })),
                      delete e.url,
                      (e.urls = o ? n[0] : n),
                      !!n.length
                    );
                  }
                });
              })(r.iceServers || [], t)),
              (this._iceGatherers = []),
              r.iceCandidatePoolSize)
            )
              for (var i = r.iceCandidatePoolSize; i > 0; i--)
                this._iceGatherers.push(
                  new e.RTCIceGatherer({
                    iceServers: r.iceServers,
                    gatherPolicy: r.iceTransportPolicy,
                  })
                );
            else r.iceCandidatePoolSize = 0;
            (this._config = r),
              (this.transceivers = []),
              (this._sdpSessionId = n.generateSessionId()),
              (this._sdpSessionVersion = 0),
              (this._dtlsRole = void 0),
              (this._isClosed = !1);
          };
          Object.defineProperty(u.prototype, "localDescription", {
            configurable: !0,
            get: function () {
              return this._localDescription;
            },
          }),
            Object.defineProperty(u.prototype, "remoteDescription", {
              configurable: !0,
              get: function () {
                return this._remoteDescription;
              },
            }),
            (u.prototype.onicecandidate = null),
            (u.prototype.onaddstream = null),
            (u.prototype.ontrack = null),
            (u.prototype.onremovestream = null),
            (u.prototype.onsignalingstatechange = null),
            (u.prototype.oniceconnectionstatechange = null),
            (u.prototype.onconnectionstatechange = null),
            (u.prototype.onicegatheringstatechange = null),
            (u.prototype.onnegotiationneeded = null),
            (u.prototype.ondatachannel = null),
            (u.prototype._dispatchEvent = function (e, t) {
              this._isClosed ||
                (this.dispatchEvent(t),
                "function" === typeof this["on" + e] && this["on" + e](t));
            }),
            (u.prototype._emitGatheringStateChange = function () {
              var e = new Event("icegatheringstatechange");
              this._dispatchEvent("icegatheringstatechange", e);
            }),
            (u.prototype.getConfiguration = function () {
              return this._config;
            }),
            (u.prototype.getLocalStreams = function () {
              return this.localStreams;
            }),
            (u.prototype.getRemoteStreams = function () {
              return this.remoteStreams;
            }),
            (u.prototype._createTransceiver = function (e, t) {
              var r = this.transceivers.length > 0,
                n = {
                  track: null,
                  iceGatherer: null,
                  iceTransport: null,
                  dtlsTransport: null,
                  localCapabilities: null,
                  remoteCapabilities: null,
                  rtpSender: null,
                  rtpReceiver: null,
                  kind: e,
                  mid: null,
                  sendEncodingParameters: null,
                  recvEncodingParameters: null,
                  stream: null,
                  associatedRemoteMediaStreams: [],
                  wantReceive: !0,
                };
              if (this.usingBundle && r)
                (n.iceTransport = this.transceivers[0].iceTransport),
                  (n.dtlsTransport = this.transceivers[0].dtlsTransport);
              else {
                var o = this._createIceAndDtlsTransports();
                (n.iceTransport = o.iceTransport),
                  (n.dtlsTransport = o.dtlsTransport);
              }
              return t || this.transceivers.push(n), n;
            }),
            (u.prototype.addTrack = function (t, r) {
              if (this._isClosed)
                throw c(
                  "InvalidStateError",
                  "Attempted to call addTrack on a closed peerconnection."
                );
              var n;
              if (
                this.transceivers.find(function (e) {
                  return e.track === t;
                })
              )
                throw c("InvalidAccessError", "Track already exists.");
              for (var o = 0; o < this.transceivers.length; o++)
                this.transceivers[o].track ||
                  this.transceivers[o].kind !== t.kind ||
                  (n = this.transceivers[o]);
              return (
                n || (n = this._createTransceiver(t.kind)),
                this._maybeFireNegotiationNeeded(),
                -1 === this.localStreams.indexOf(r) &&
                  this.localStreams.push(r),
                (n.track = t),
                (n.stream = r),
                (n.rtpSender = new e.RTCRtpSender(t, n.dtlsTransport)),
                n.rtpSender
              );
            }),
            (u.prototype.addStream = function (e) {
              var r = this;
              if (t >= 15025)
                e.getTracks().forEach(function (t) {
                  r.addTrack(t, e);
                });
              else {
                var n = e.clone();
                e.getTracks().forEach(function (e, t) {
                  var r = n.getTracks()[t];
                  e.addEventListener("enabled", function (e) {
                    r.enabled = e.enabled;
                  });
                }),
                  n.getTracks().forEach(function (e) {
                    r.addTrack(e, n);
                  });
              }
            }),
            (u.prototype.removeTrack = function (t) {
              if (this._isClosed)
                throw c(
                  "InvalidStateError",
                  "Attempted to call removeTrack on a closed peerconnection."
                );
              if (!(t instanceof e.RTCRtpSender))
                throw new TypeError(
                  "Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender."
                );
              var r = this.transceivers.find(function (e) {
                return e.rtpSender === t;
              });
              if (!r)
                throw c(
                  "InvalidAccessError",
                  "Sender was not created by this connection."
                );
              var n = r.stream;
              r.rtpSender.stop(),
                (r.rtpSender = null),
                (r.track = null),
                (r.stream = null),
                -1 ===
                  this.transceivers
                    .map(function (e) {
                      return e.stream;
                    })
                    .indexOf(n) &&
                  this.localStreams.indexOf(n) > -1 &&
                  this.localStreams.splice(this.localStreams.indexOf(n), 1),
                this._maybeFireNegotiationNeeded();
            }),
            (u.prototype.removeStream = function (e) {
              var t = this;
              e.getTracks().forEach(function (e) {
                var r = t.getSenders().find(function (t) {
                  return t.track === e;
                });
                r && t.removeTrack(r);
              });
            }),
            (u.prototype.getSenders = function () {
              return this.transceivers
                .filter(function (e) {
                  return !!e.rtpSender;
                })
                .map(function (e) {
                  return e.rtpSender;
                });
            }),
            (u.prototype.getReceivers = function () {
              return this.transceivers
                .filter(function (e) {
                  return !!e.rtpReceiver;
                })
                .map(function (e) {
                  return e.rtpReceiver;
                });
            }),
            (u.prototype._createIceGatherer = function (t, r) {
              var n = this;
              if (r && t > 0) return this.transceivers[0].iceGatherer;
              if (this._iceGatherers.length) return this._iceGatherers.shift();
              var o = new e.RTCIceGatherer({
                iceServers: this._config.iceServers,
                gatherPolicy: this._config.iceTransportPolicy,
              });
              return (
                Object.defineProperty(o, "state", {
                  value: "new",
                  writable: !0,
                }),
                (this.transceivers[t].bufferedCandidateEvents = []),
                (this.transceivers[t].bufferCandidates = function (e) {
                  var r = !e.candidate || 0 === Object.keys(e.candidate).length;
                  (o.state = r ? "completed" : "gathering"),
                    null !== n.transceivers[t].bufferedCandidateEvents &&
                      n.transceivers[t].bufferedCandidateEvents.push(e);
                }),
                o.addEventListener(
                  "localcandidate",
                  this.transceivers[t].bufferCandidates
                ),
                o
              );
            }),
            (u.prototype._gather = function (t, r) {
              var o = this,
                a = this.transceivers[r].iceGatherer;
              if (!a.onlocalcandidate) {
                var i = this.transceivers[r].bufferedCandidateEvents;
                (this.transceivers[r].bufferedCandidateEvents = null),
                  a.removeEventListener(
                    "localcandidate",
                    this.transceivers[r].bufferCandidates
                  ),
                  (a.onlocalcandidate = function (e) {
                    if (!(o.usingBundle && r > 0)) {
                      var i = new Event("icecandidate");
                      i.candidate = { sdpMid: t, sdpMLineIndex: r };
                      var s = e.candidate,
                        c = !s || 0 === Object.keys(s).length;
                      if (c)
                        ("new" !== a.state && "gathering" !== a.state) ||
                          (a.state = "completed");
                      else {
                        "new" === a.state && (a.state = "gathering"),
                          (s.component = 1),
                          (s.ufrag = a.getLocalParameters().usernameFragment);
                        var l = n.writeCandidate(s);
                        (i.candidate = Object.assign(
                          i.candidate,
                          n.parseCandidate(l)
                        )),
                          (i.candidate.candidate = l),
                          (i.candidate.toJSON = function () {
                            return {
                              candidate: i.candidate.candidate,
                              sdpMid: i.candidate.sdpMid,
                              sdpMLineIndex: i.candidate.sdpMLineIndex,
                              usernameFragment: i.candidate.usernameFragment,
                            };
                          });
                      }
                      var u = n.getMediaSections(o._localDescription.sdp);
                      (u[i.candidate.sdpMLineIndex] += c
                        ? "a=end-of-candidates\r\n"
                        : "a=" + i.candidate.candidate + "\r\n"),
                        (o._localDescription.sdp =
                          n.getDescription(o._localDescription.sdp) +
                          u.join(""));
                      var d = o.transceivers.every(function (e) {
                        return (
                          e.iceGatherer && "completed" === e.iceGatherer.state
                        );
                      });
                      "gathering" !== o.iceGatheringState &&
                        ((o.iceGatheringState = "gathering"),
                        o._emitGatheringStateChange()),
                        c || o._dispatchEvent("icecandidate", i),
                        d &&
                          (o._dispatchEvent(
                            "icecandidate",
                            new Event("icecandidate")
                          ),
                          (o.iceGatheringState = "complete"),
                          o._emitGatheringStateChange());
                    }
                  }),
                  e.setTimeout(function () {
                    i.forEach(function (e) {
                      a.onlocalcandidate(e);
                    });
                  }, 0);
              }
            }),
            (u.prototype._createIceAndDtlsTransports = function () {
              var t = this,
                r = new e.RTCIceTransport(null);
              r.onicestatechange = function () {
                t._updateIceConnectionState(), t._updateConnectionState();
              };
              var n = new e.RTCDtlsTransport(r);
              return (
                (n.ondtlsstatechange = function () {
                  t._updateConnectionState();
                }),
                (n.onerror = function () {
                  Object.defineProperty(n, "state", {
                    value: "failed",
                    writable: !0,
                  }),
                    t._updateConnectionState();
                }),
                { iceTransport: r, dtlsTransport: n }
              );
            }),
            (u.prototype._disposeIceAndDtlsTransports = function (e) {
              var t = this.transceivers[e].iceGatherer;
              t &&
                (delete t.onlocalcandidate,
                delete this.transceivers[e].iceGatherer);
              var r = this.transceivers[e].iceTransport;
              r &&
                (delete r.onicestatechange,
                delete this.transceivers[e].iceTransport);
              var n = this.transceivers[e].dtlsTransport;
              n &&
                (delete n.ondtlsstatechange,
                delete n.onerror,
                delete this.transceivers[e].dtlsTransport);
            }),
            (u.prototype._transceive = function (e, r, o) {
              var i = a(e.localCapabilities, e.remoteCapabilities);
              r &&
                e.rtpSender &&
                ((i.encodings = e.sendEncodingParameters),
                (i.rtcp = {
                  cname: n.localCName,
                  compound: e.rtcpParameters.compound,
                }),
                e.recvEncodingParameters.length &&
                  (i.rtcp.ssrc = e.recvEncodingParameters[0].ssrc),
                e.rtpSender.send(i)),
                o &&
                  e.rtpReceiver &&
                  i.codecs.length > 0 &&
                  ("video" === e.kind &&
                    e.recvEncodingParameters &&
                    t < 15019 &&
                    e.recvEncodingParameters.forEach(function (e) {
                      delete e.rtx;
                    }),
                  e.recvEncodingParameters.length
                    ? (i.encodings = e.recvEncodingParameters)
                    : (i.encodings = [{}]),
                  (i.rtcp = { compound: e.rtcpParameters.compound }),
                  e.rtcpParameters.cname &&
                    (i.rtcp.cname = e.rtcpParameters.cname),
                  e.sendEncodingParameters.length &&
                    (i.rtcp.ssrc = e.sendEncodingParameters[0].ssrc),
                  e.rtpReceiver.receive(i));
            }),
            (u.prototype.setLocalDescription = function (e) {
              var t,
                r,
                o = this;
              if (-1 === ["offer", "answer"].indexOf(e.type))
                return Promise.reject(
                  c("TypeError", 'Unsupported type "' + e.type + '"')
                );
              if (
                !i("setLocalDescription", e.type, o.signalingState) ||
                o._isClosed
              )
                return Promise.reject(
                  c(
                    "InvalidStateError",
                    "Can not set local " +
                      e.type +
                      " in state " +
                      o.signalingState
                  )
                );
              if ("offer" === e.type)
                (t = n.splitSections(e.sdp)),
                  (r = t.shift()),
                  t.forEach(function (e, t) {
                    var r = n.parseRtpParameters(e);
                    o.transceivers[t].localCapabilities = r;
                  }),
                  o.transceivers.forEach(function (e, t) {
                    o._gather(e.mid, t);
                  });
              else if ("answer" === e.type) {
                (t = n.splitSections(o._remoteDescription.sdp)),
                  (r = t.shift());
                var s = n.matchPrefix(r, "a=ice-lite").length > 0;
                t.forEach(function (e, t) {
                  var i = o.transceivers[t],
                    c = i.iceGatherer,
                    l = i.iceTransport,
                    u = i.dtlsTransport,
                    d = i.localCapabilities,
                    f = i.remoteCapabilities;
                  if (
                    !(
                      n.isRejected(e) &&
                      0 === n.matchPrefix(e, "a=bundle-only").length
                    ) &&
                    !i.rejected
                  ) {
                    var p = n.getIceParameters(e, r),
                      m = n.getDtlsParameters(e, r);
                    s && (m.role = "server"),
                      (o.usingBundle && 0 !== t) ||
                        (o._gather(i.mid, t),
                        "new" === l.state &&
                          l.start(c, p, s ? "controlling" : "controlled"),
                        "new" === u.state && u.start(m));
                    var h = a(d, f);
                    o._transceive(i, h.codecs.length > 0, !1);
                  }
                });
              }
              return (
                (o._localDescription = { type: e.type, sdp: e.sdp }),
                "offer" === e.type
                  ? o._updateSignalingState("have-local-offer")
                  : o._updateSignalingState("stable"),
                Promise.resolve()
              );
            }),
            (u.prototype.setRemoteDescription = function (o) {
              var u = this;
              if (-1 === ["offer", "answer"].indexOf(o.type))
                return Promise.reject(
                  c("TypeError", 'Unsupported type "' + o.type + '"')
                );
              if (
                !i("setRemoteDescription", o.type, u.signalingState) ||
                u._isClosed
              )
                return Promise.reject(
                  c(
                    "InvalidStateError",
                    "Can not set remote " +
                      o.type +
                      " in state " +
                      u.signalingState
                  )
                );
              var d = {};
              u.remoteStreams.forEach(function (e) {
                d[e.id] = e;
              });
              var f = [],
                p = n.splitSections(o.sdp),
                m = p.shift(),
                h = n.matchPrefix(m, "a=ice-lite").length > 0,
                v = n.matchPrefix(m, "a=group:BUNDLE ").length > 0;
              u.usingBundle = v;
              var g = n.matchPrefix(m, "a=ice-options:")[0];
              return (
                (u.canTrickleIceCandidates =
                  !!g && g.substr(14).split(" ").indexOf("trickle") >= 0),
                p.forEach(function (i, c) {
                  var l = n.splitLines(i),
                    p = n.getKind(i),
                    g =
                      n.isRejected(i) &&
                      0 === n.matchPrefix(i, "a=bundle-only").length,
                    y = l[0].substr(2).split(" ")[2],
                    k = n.getDirection(i, m),
                    b = n.parseMsid(i),
                    w = n.getMid(i) || n.generateIdentifier();
                  if (
                    g ||
                    ("application" === p &&
                      ("DTLS/SCTP" === y || "UDP/DTLS/SCTP" === y))
                  )
                    u.transceivers[c] = {
                      mid: w,
                      kind: p,
                      protocol: y,
                      rejected: !0,
                    };
                  else {
                    var C, x, P, S, B, E, T, R, j;
                    !g &&
                      u.transceivers[c] &&
                      u.transceivers[c].rejected &&
                      (u.transceivers[c] = u._createTransceiver(p, !0));
                    var N,
                      O,
                      _ = n.parseRtpParameters(i);
                    g ||
                      ((N = n.getIceParameters(i, m)),
                      ((O = n.getDtlsParameters(i, m)).role = "client")),
                      (T = n.parseRtpEncodingParameters(i));
                    var M = n.parseRtcpParameters(i),
                      L = n.matchPrefix(i, "a=end-of-candidates", m).length > 0,
                      D = n
                        .matchPrefix(i, "a=candidate:")
                        .map(function (e) {
                          return n.parseCandidate(e);
                        })
                        .filter(function (e) {
                          return 1 === e.component;
                        });
                    if (
                      (("offer" === o.type || "answer" === o.type) &&
                        !g &&
                        v &&
                        c > 0 &&
                        u.transceivers[c] &&
                        (u._disposeIceAndDtlsTransports(c),
                        (u.transceivers[c].iceGatherer =
                          u.transceivers[0].iceGatherer),
                        (u.transceivers[c].iceTransport =
                          u.transceivers[0].iceTransport),
                        (u.transceivers[c].dtlsTransport =
                          u.transceivers[0].dtlsTransport),
                        u.transceivers[c].rtpSender &&
                          u.transceivers[c].rtpSender.setTransport(
                            u.transceivers[0].dtlsTransport
                          ),
                        u.transceivers[c].rtpReceiver &&
                          u.transceivers[c].rtpReceiver.setTransport(
                            u.transceivers[0].dtlsTransport
                          )),
                      "offer" !== o.type || g)
                    ) {
                      if ("answer" === o.type && !g) {
                        (x = (C = u.transceivers[c]).iceGatherer),
                          (P = C.iceTransport),
                          (S = C.dtlsTransport),
                          (B = C.rtpReceiver),
                          (E = C.sendEncodingParameters),
                          (R = C.localCapabilities),
                          (u.transceivers[c].recvEncodingParameters = T),
                          (u.transceivers[c].remoteCapabilities = _),
                          (u.transceivers[c].rtcpParameters = M),
                          D.length &&
                            "new" === P.state &&
                            ((!h && !L) || (v && 0 !== c)
                              ? D.forEach(function (e) {
                                  s(C.iceTransport, e);
                                })
                              : P.setRemoteCandidates(D)),
                          (v && 0 !== c) ||
                            ("new" === P.state && P.start(x, N, "controlling"),
                            "new" === S.state && S.start(O)),
                          !a(
                            C.localCapabilities,
                            C.remoteCapabilities
                          ).codecs.filter(function (e) {
                            return "rtx" === e.name.toLowerCase();
                          }).length &&
                            C.sendEncodingParameters[0].rtx &&
                            delete C.sendEncodingParameters[0].rtx,
                          u._transceive(
                            C,
                            "sendrecv" === k || "recvonly" === k,
                            "sendrecv" === k || "sendonly" === k
                          ),
                          !B || ("sendrecv" !== k && "sendonly" !== k)
                            ? delete C.rtpReceiver
                            : ((j = B.track),
                              b
                                ? (d[b.stream] ||
                                    (d[b.stream] = new e.MediaStream()),
                                  r(j, d[b.stream]),
                                  f.push([j, B, d[b.stream]]))
                                : (d.default ||
                                    (d.default = new e.MediaStream()),
                                  r(j, d.default),
                                  f.push([j, B, d.default])));
                      }
                    } else {
                      ((C = u.transceivers[c] || u._createTransceiver(p)).mid =
                        w),
                        C.iceGatherer ||
                          (C.iceGatherer = u._createIceGatherer(c, v)),
                        D.length &&
                          "new" === C.iceTransport.state &&
                          (!L || (v && 0 !== c)
                            ? D.forEach(function (e) {
                                s(C.iceTransport, e);
                              })
                            : C.iceTransport.setRemoteCandidates(D)),
                        (R = e.RTCRtpReceiver.getCapabilities(p)),
                        t < 15019 &&
                          (R.codecs = R.codecs.filter(function (e) {
                            return "rtx" !== e.name;
                          })),
                        (E = C.sendEncodingParameters || [
                          { ssrc: 1001 * (2 * c + 2) },
                        ]);
                      var I,
                        A = !1;
                      if ("sendrecv" === k || "sendonly" === k) {
                        if (
                          ((A = !C.rtpReceiver),
                          (B =
                            C.rtpReceiver ||
                            new e.RTCRtpReceiver(C.dtlsTransport, p)),
                          A)
                        )
                          (j = B.track),
                            (b && "-" === b.stream) ||
                              (b
                                ? (d[b.stream] ||
                                    ((d[b.stream] = new e.MediaStream()),
                                    Object.defineProperty(d[b.stream], "id", {
                                      get: function () {
                                        return b.stream;
                                      },
                                    })),
                                  Object.defineProperty(j, "id", {
                                    get: function () {
                                      return b.track;
                                    },
                                  }),
                                  (I = d[b.stream]))
                                : (d.default ||
                                    (d.default = new e.MediaStream()),
                                  (I = d.default))),
                            I &&
                              (r(j, I), C.associatedRemoteMediaStreams.push(I)),
                            f.push([j, B, I]);
                      } else
                        C.rtpReceiver &&
                          C.rtpReceiver.track &&
                          (C.associatedRemoteMediaStreams.forEach(function (t) {
                            var r = t.getTracks().find(function (e) {
                              return e.id === C.rtpReceiver.track.id;
                            });
                            r &&
                              (function (t, r) {
                                r.removeTrack(t),
                                  r.dispatchEvent(
                                    new e.MediaStreamTrackEvent("removetrack", {
                                      track: t,
                                    })
                                  );
                              })(r, t);
                          }),
                          (C.associatedRemoteMediaStreams = []));
                      (C.localCapabilities = R),
                        (C.remoteCapabilities = _),
                        (C.rtpReceiver = B),
                        (C.rtcpParameters = M),
                        (C.sendEncodingParameters = E),
                        (C.recvEncodingParameters = T),
                        u._transceive(u.transceivers[c], !1, A);
                    }
                  }
                }),
                void 0 === u._dtlsRole &&
                  (u._dtlsRole = "offer" === o.type ? "active" : "passive"),
                (u._remoteDescription = { type: o.type, sdp: o.sdp }),
                "offer" === o.type
                  ? u._updateSignalingState("have-remote-offer")
                  : u._updateSignalingState("stable"),
                Object.keys(d).forEach(function (t) {
                  var r = d[t];
                  if (r.getTracks().length) {
                    if (-1 === u.remoteStreams.indexOf(r)) {
                      u.remoteStreams.push(r);
                      var n = new Event("addstream");
                      (n.stream = r),
                        e.setTimeout(function () {
                          u._dispatchEvent("addstream", n);
                        });
                    }
                    f.forEach(function (e) {
                      var t = e[0],
                        n = e[1];
                      r.id === e[2].id && l(u, t, n, [r]);
                    });
                  }
                }),
                f.forEach(function (e) {
                  e[2] || l(u, e[0], e[1], []);
                }),
                e.setTimeout(function () {
                  u &&
                    u.transceivers &&
                    u.transceivers.forEach(function (e) {
                      e.iceTransport &&
                        "new" === e.iceTransport.state &&
                        e.iceTransport.getRemoteCandidates().length > 0 &&
                        (console.warn(
                          "Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification"
                        ),
                        e.iceTransport.addRemoteCandidate({}));
                    });
                }, 4e3),
                Promise.resolve()
              );
            }),
            (u.prototype.close = function () {
              this.transceivers.forEach(function (e) {
                e.iceTransport && e.iceTransport.stop(),
                  e.dtlsTransport && e.dtlsTransport.stop(),
                  e.rtpSender && e.rtpSender.stop(),
                  e.rtpReceiver && e.rtpReceiver.stop();
              }),
                (this._isClosed = !0),
                this._updateSignalingState("closed");
            }),
            (u.prototype._updateSignalingState = function (e) {
              this.signalingState = e;
              var t = new Event("signalingstatechange");
              this._dispatchEvent("signalingstatechange", t);
            }),
            (u.prototype._maybeFireNegotiationNeeded = function () {
              var t = this;
              "stable" === this.signalingState &&
                !0 !== this.needNegotiation &&
                ((this.needNegotiation = !0),
                e.setTimeout(function () {
                  if (t.needNegotiation) {
                    t.needNegotiation = !1;
                    var e = new Event("negotiationneeded");
                    t._dispatchEvent("negotiationneeded", e);
                  }
                }, 0));
            }),
            (u.prototype._updateIceConnectionState = function () {
              var e,
                t = {
                  new: 0,
                  closed: 0,
                  checking: 0,
                  connected: 0,
                  completed: 0,
                  disconnected: 0,
                  failed: 0,
                };
              if (
                (this.transceivers.forEach(function (e) {
                  e.iceTransport && !e.rejected && t[e.iceTransport.state]++;
                }),
                (e = "new"),
                t.failed > 0
                  ? (e = "failed")
                  : t.checking > 0
                  ? (e = "checking")
                  : t.disconnected > 0
                  ? (e = "disconnected")
                  : t.new > 0
                  ? (e = "new")
                  : t.connected > 0
                  ? (e = "connected")
                  : t.completed > 0 && (e = "completed"),
                e !== this.iceConnectionState)
              ) {
                this.iceConnectionState = e;
                var r = new Event("iceconnectionstatechange");
                this._dispatchEvent("iceconnectionstatechange", r);
              }
            }),
            (u.prototype._updateConnectionState = function () {
              var e,
                t = {
                  new: 0,
                  closed: 0,
                  connecting: 0,
                  connected: 0,
                  completed: 0,
                  disconnected: 0,
                  failed: 0,
                };
              if (
                (this.transceivers.forEach(function (e) {
                  e.iceTransport &&
                    e.dtlsTransport &&
                    !e.rejected &&
                    (t[e.iceTransport.state]++, t[e.dtlsTransport.state]++);
                }),
                (t.connected += t.completed),
                (e = "new"),
                t.failed > 0
                  ? (e = "failed")
                  : t.connecting > 0
                  ? (e = "connecting")
                  : t.disconnected > 0
                  ? (e = "disconnected")
                  : t.new > 0
                  ? (e = "new")
                  : t.connected > 0 && (e = "connected"),
                e !== this.connectionState)
              ) {
                this.connectionState = e;
                var r = new Event("connectionstatechange");
                this._dispatchEvent("connectionstatechange", r);
              }
            }),
            (u.prototype.createOffer = function () {
              var r = this;
              if (r._isClosed)
                return Promise.reject(
                  c("InvalidStateError", "Can not call createOffer after close")
                );
              var a = r.transceivers.filter(function (e) {
                  return "audio" === e.kind;
                }).length,
                i = r.transceivers.filter(function (e) {
                  return "video" === e.kind;
                }).length,
                s = arguments[0];
              if (s) {
                if (s.mandatory || s.optional)
                  throw new TypeError(
                    "Legacy mandatory/optional constraints not supported."
                  );
                void 0 !== s.offerToReceiveAudio &&
                  (a =
                    !0 === s.offerToReceiveAudio
                      ? 1
                      : !1 === s.offerToReceiveAudio
                      ? 0
                      : s.offerToReceiveAudio),
                  void 0 !== s.offerToReceiveVideo &&
                    (i =
                      !0 === s.offerToReceiveVideo
                        ? 1
                        : !1 === s.offerToReceiveVideo
                        ? 0
                        : s.offerToReceiveVideo);
              }
              for (
                r.transceivers.forEach(function (e) {
                  "audio" === e.kind
                    ? --a < 0 && (e.wantReceive = !1)
                    : "video" === e.kind && --i < 0 && (e.wantReceive = !1);
                });
                a > 0 || i > 0;

              )
                a > 0 && (r._createTransceiver("audio"), a--),
                  i > 0 && (r._createTransceiver("video"), i--);
              var l = n.writeSessionBoilerplate(
                r._sdpSessionId,
                r._sdpSessionVersion++
              );
              r.transceivers.forEach(function (o, a) {
                var i = o.track,
                  s = o.kind,
                  c = o.mid || n.generateIdentifier();
                (o.mid = c),
                  o.iceGatherer ||
                    (o.iceGatherer = r._createIceGatherer(a, r.usingBundle));
                var l = e.RTCRtpSender.getCapabilities(s);
                t < 15019 &&
                  (l.codecs = l.codecs.filter(function (e) {
                    return "rtx" !== e.name;
                  })),
                  l.codecs.forEach(function (e) {
                    "H264" === e.name &&
                      void 0 === e.parameters["level-asymmetry-allowed"] &&
                      (e.parameters["level-asymmetry-allowed"] = "1"),
                      o.remoteCapabilities &&
                        o.remoteCapabilities.codecs &&
                        o.remoteCapabilities.codecs.forEach(function (t) {
                          e.name.toLowerCase() === t.name.toLowerCase() &&
                            e.clockRate === t.clockRate &&
                            (e.preferredPayloadType = t.payloadType);
                        });
                  }),
                  l.headerExtensions.forEach(function (e) {
                    (
                      (o.remoteCapabilities &&
                        o.remoteCapabilities.headerExtensions) ||
                      []
                    ).forEach(function (t) {
                      e.uri === t.uri && (e.id = t.id);
                    });
                  });
                var u = o.sendEncodingParameters || [
                  { ssrc: 1001 * (2 * a + 1) },
                ];
                i &&
                  t >= 15019 &&
                  "video" === s &&
                  !u[0].rtx &&
                  (u[0].rtx = { ssrc: u[0].ssrc + 1 }),
                  o.wantReceive &&
                    (o.rtpReceiver = new e.RTCRtpReceiver(o.dtlsTransport, s)),
                  (o.localCapabilities = l),
                  (o.sendEncodingParameters = u);
              }),
                "max-compat" !== r._config.bundlePolicy &&
                  (l +=
                    "a=group:BUNDLE " +
                    r.transceivers
                      .map(function (e) {
                        return e.mid;
                      })
                      .join(" ") +
                    "\r\n"),
                (l += "a=ice-options:trickle\r\n"),
                r.transceivers.forEach(function (e, t) {
                  (l += o(
                    e,
                    e.localCapabilities,
                    "offer",
                    e.stream,
                    r._dtlsRole
                  )),
                    (l += "a=rtcp-rsize\r\n"),
                    !e.iceGatherer ||
                      "new" === r.iceGatheringState ||
                      (0 !== t && r.usingBundle) ||
                      (e.iceGatherer.getLocalCandidates().forEach(function (e) {
                        (e.component = 1),
                          (l += "a=" + n.writeCandidate(e) + "\r\n");
                      }),
                      "completed" === e.iceGatherer.state &&
                        (l += "a=end-of-candidates\r\n"));
                });
              var u = new e.RTCSessionDescription({ type: "offer", sdp: l });
              return Promise.resolve(u);
            }),
            (u.prototype.createAnswer = function () {
              var r = this;
              if (r._isClosed)
                return Promise.reject(
                  c(
                    "InvalidStateError",
                    "Can not call createAnswer after close"
                  )
                );
              if (
                "have-remote-offer" !== r.signalingState &&
                "have-local-pranswer" !== r.signalingState
              )
                return Promise.reject(
                  c(
                    "InvalidStateError",
                    "Can not call createAnswer in signalingState " +
                      r.signalingState
                  )
                );
              var i = n.writeSessionBoilerplate(
                r._sdpSessionId,
                r._sdpSessionVersion++
              );
              r.usingBundle &&
                (i +=
                  "a=group:BUNDLE " +
                  r.transceivers
                    .map(function (e) {
                      return e.mid;
                    })
                    .join(" ") +
                  "\r\n"),
                (i += "a=ice-options:trickle\r\n");
              var s = n.getMediaSections(r._remoteDescription.sdp).length;
              r.transceivers.forEach(function (e, n) {
                if (!(n + 1 > s)) {
                  if (e.rejected)
                    return (
                      "application" === e.kind
                        ? "DTLS/SCTP" === e.protocol
                          ? (i += "m=application 0 DTLS/SCTP 5000\r\n")
                          : (i +=
                              "m=application 0 " +
                              e.protocol +
                              " webrtc-datachannel\r\n")
                        : "audio" === e.kind
                        ? (i +=
                            "m=audio 0 UDP/TLS/RTP/SAVPF 0\r\na=rtpmap:0 PCMU/8000\r\n")
                        : "video" === e.kind &&
                          (i +=
                            "m=video 0 UDP/TLS/RTP/SAVPF 120\r\na=rtpmap:120 VP8/90000\r\n"),
                      void (i +=
                        "c=IN IP4 0.0.0.0\r\na=inactive\r\na=mid:" +
                        e.mid +
                        "\r\n")
                    );
                  var c;
                  if (e.stream)
                    "audio" === e.kind
                      ? (c = e.stream.getAudioTracks()[0])
                      : "video" === e.kind &&
                        (c = e.stream.getVideoTracks()[0]),
                      c &&
                        t >= 15019 &&
                        "video" === e.kind &&
                        !e.sendEncodingParameters[0].rtx &&
                        (e.sendEncodingParameters[0].rtx = {
                          ssrc: e.sendEncodingParameters[0].ssrc + 1,
                        });
                  var l = a(e.localCapabilities, e.remoteCapabilities);
                  !l.codecs.filter(function (e) {
                    return "rtx" === e.name.toLowerCase();
                  }).length &&
                    e.sendEncodingParameters[0].rtx &&
                    delete e.sendEncodingParameters[0].rtx,
                    (i += o(e, l, "answer", e.stream, r._dtlsRole)),
                    e.rtcpParameters &&
                      e.rtcpParameters.reducedSize &&
                      (i += "a=rtcp-rsize\r\n");
                }
              });
              var l = new e.RTCSessionDescription({ type: "answer", sdp: i });
              return Promise.resolve(l);
            }),
            (u.prototype.addIceCandidate = function (e) {
              var t,
                r = this;
              return e && void 0 === e.sdpMLineIndex && !e.sdpMid
                ? Promise.reject(
                    new TypeError("sdpMLineIndex or sdpMid required")
                  )
                : new Promise(function (o, a) {
                    if (!r._remoteDescription)
                      return a(
                        c(
                          "InvalidStateError",
                          "Can not add ICE candidate without a remote description"
                        )
                      );
                    if (e && "" !== e.candidate) {
                      var i = e.sdpMLineIndex;
                      if (e.sdpMid)
                        for (var l = 0; l < r.transceivers.length; l++)
                          if (r.transceivers[l].mid === e.sdpMid) {
                            i = l;
                            break;
                          }
                      var u = r.transceivers[i];
                      if (!u)
                        return a(
                          c("OperationError", "Can not add ICE candidate")
                        );
                      if (u.rejected) return o();
                      var d =
                        Object.keys(e.candidate).length > 0
                          ? n.parseCandidate(e.candidate)
                          : {};
                      if (
                        "tcp" === d.protocol &&
                        (0 === d.port || 9 === d.port)
                      )
                        return o();
                      if (d.component && 1 !== d.component) return o();
                      if (
                        (0 === i ||
                          (i > 0 &&
                            u.iceTransport !==
                              r.transceivers[0].iceTransport)) &&
                        !s(u.iceTransport, d)
                      )
                        return a(
                          c("OperationError", "Can not add ICE candidate")
                        );
                      var f = e.candidate.trim();
                      0 === f.indexOf("a=") && (f = f.substr(2)),
                        ((t = n.getMediaSections(r._remoteDescription.sdp))[
                          i
                        ] +=
                          "a=" + (d.type ? f : "end-of-candidates") + "\r\n"),
                        (r._remoteDescription.sdp =
                          n.getDescription(r._remoteDescription.sdp) +
                          t.join(""));
                    } else for (var p = 0; p < r.transceivers.length && (r.transceivers[p].rejected || (r.transceivers[p].iceTransport.addRemoteCandidate({}), ((t = n.getMediaSections(r._remoteDescription.sdp))[p] += "a=end-of-candidates\r\n"), (r._remoteDescription.sdp = n.getDescription(r._remoteDescription.sdp) + t.join("")), !r.usingBundle)); p++);
                    o();
                  });
            }),
            (u.prototype.getStats = function (t) {
              if (t && t instanceof e.MediaStreamTrack) {
                var r = null;
                if (
                  (this.transceivers.forEach(function (e) {
                    e.rtpSender && e.rtpSender.track === t
                      ? (r = e.rtpSender)
                      : e.rtpReceiver &&
                        e.rtpReceiver.track === t &&
                        (r = e.rtpReceiver);
                  }),
                  !r)
                )
                  throw c("InvalidAccessError", "Invalid selector.");
                return r.getStats();
              }
              var n = [];
              return (
                this.transceivers.forEach(function (e) {
                  [
                    "rtpSender",
                    "rtpReceiver",
                    "iceGatherer",
                    "iceTransport",
                    "dtlsTransport",
                  ].forEach(function (t) {
                    e[t] && n.push(e[t].getStats());
                  });
                }),
                Promise.all(n).then(function (e) {
                  var t = new Map();
                  return (
                    e.forEach(function (e) {
                      e.forEach(function (e) {
                        t.set(e.id, e);
                      });
                    }),
                    t
                  );
                })
              );
            });
          [
            "RTCRtpSender",
            "RTCRtpReceiver",
            "RTCIceGatherer",
            "RTCIceTransport",
            "RTCDtlsTransport",
          ].forEach(function (t) {
            var r = e[t];
            if (r && r.prototype && r.prototype.getStats) {
              var n = r.prototype.getStats;
              r.prototype.getStats = function () {
                return n.apply(this).then(function (e) {
                  var t = new Map();
                  return (
                    Object.keys(e).forEach(function (r) {
                      var n;
                      (e[r].type =
                        {
                          inboundrtp: "inbound-rtp",
                          outboundrtp: "outbound-rtp",
                          candidatepair: "candidate-pair",
                          localcandidate: "local-candidate",
                          remotecandidate: "remote-candidate",
                        }[(n = e[r]).type] || n.type),
                        t.set(r, e[r]);
                    }),
                    t
                  );
                });
              };
            }
          });
          var d = ["createOffer", "createAnswer"];
          return (
            d.forEach(function (e) {
              var t = u.prototype[e];
              u.prototype[e] = function () {
                var e = arguments;
                return "function" === typeof e[0] || "function" === typeof e[1]
                  ? t.apply(this, [arguments[2]]).then(
                      function (t) {
                        "function" === typeof e[0] && e[0].apply(null, [t]);
                      },
                      function (t) {
                        "function" === typeof e[1] && e[1].apply(null, [t]);
                      }
                    )
                  : t.apply(this, arguments);
              };
            }),
            (d = [
              "setLocalDescription",
              "setRemoteDescription",
              "addIceCandidate",
            ]).forEach(function (e) {
              var t = u.prototype[e];
              u.prototype[e] = function () {
                var e = arguments;
                return "function" === typeof e[1] || "function" === typeof e[2]
                  ? t.apply(this, arguments).then(
                      function () {
                        "function" === typeof e[1] && e[1].apply(null);
                      },
                      function (t) {
                        "function" === typeof e[2] && e[2].apply(null, [t]);
                      }
                    )
                  : t.apply(this, arguments);
              };
            }),
            ["getStats"].forEach(function (e) {
              var t = u.prototype[e];
              u.prototype[e] = function () {
                var e = arguments;
                return "function" === typeof e[1]
                  ? t.apply(this, arguments).then(function () {
                      "function" === typeof e[1] && e[1].apply(null);
                    })
                  : t.apply(this, arguments);
              };
            }),
            u
          );
        };
      },
      6813: function (e, t) {
        "use strict";
        function r(e, t) {
          var r = e.length;
          e.push(t);
          e: for (; 0 < r; ) {
            var n = (r - 1) >>> 1,
              o = e[n];
            if (!(0 < a(o, t))) break e;
            (e[n] = t), (e[r] = o), (r = n);
          }
        }
        function n(e) {
          return 0 === e.length ? null : e[0];
        }
        function o(e) {
          if (0 === e.length) return null;
          var t = e[0],
            r = e.pop();
          if (r !== t) {
            e[0] = r;
            e: for (var n = 0, o = e.length, i = o >>> 1; n < i; ) {
              var s = 2 * (n + 1) - 1,
                c = e[s],
                l = s + 1,
                u = e[l];
              if (0 > a(c, r))
                l < o && 0 > a(u, c)
                  ? ((e[n] = u), (e[l] = r), (n = l))
                  : ((e[n] = c), (e[s] = r), (n = s));
              else {
                if (!(l < o && 0 > a(u, r))) break e;
                (e[n] = u), (e[l] = r), (n = l);
              }
            }
          }
          return t;
        }
        function a(e, t) {
          var r = e.sortIndex - t.sortIndex;
          return 0 !== r ? r : e.id - t.id;
        }
        if (
          "object" === typeof performance &&
          "function" === typeof performance.now
        ) {
          var i = performance;
          t.unstable_now = function () {
            return i.now();
          };
        } else {
          var s = Date,
            c = s.now();
          t.unstable_now = function () {
            return s.now() - c;
          };
        }
        var l = [],
          u = [],
          d = 1,
          f = null,
          p = 3,
          m = !1,
          h = !1,
          v = !1,
          g = "function" === typeof setTimeout ? setTimeout : null,
          y = "function" === typeof clearTimeout ? clearTimeout : null,
          k = "undefined" !== typeof setImmediate ? setImmediate : null;
        function b(e) {
          for (var t = n(u); null !== t; ) {
            if (null === t.callback) o(u);
            else {
              if (!(t.startTime <= e)) break;
              o(u), (t.sortIndex = t.expirationTime), r(l, t);
            }
            t = n(u);
          }
        }
        function w(e) {
          if (((v = !1), b(e), !h))
            if (null !== n(l)) (h = !0), _(C);
            else {
              var t = n(u);
              null !== t && M(w, t.startTime - e);
            }
        }
        function C(e, r) {
          (h = !1), v && ((v = !1), y(B), (B = -1)), (m = !0);
          var a = p;
          try {
            for (
              b(r), f = n(l);
              null !== f && (!(f.expirationTime > r) || (e && !R()));

            ) {
              var i = f.callback;
              if ("function" === typeof i) {
                (f.callback = null), (p = f.priorityLevel);
                var s = i(f.expirationTime <= r);
                (r = t.unstable_now()),
                  "function" === typeof s
                    ? (f.callback = s)
                    : f === n(l) && o(l),
                  b(r);
              } else o(l);
              f = n(l);
            }
            if (null !== f) var c = !0;
            else {
              var d = n(u);
              null !== d && M(w, d.startTime - r), (c = !1);
            }
            return c;
          } finally {
            (f = null), (p = a), (m = !1);
          }
        }
        "undefined" !== typeof navigator &&
          void 0 !== navigator.scheduling &&
          void 0 !== navigator.scheduling.isInputPending &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        var x,
          P = !1,
          S = null,
          B = -1,
          E = 5,
          T = -1;
        function R() {
          return !(t.unstable_now() - T < E);
        }
        function j() {
          if (null !== S) {
            var e = t.unstable_now();
            T = e;
            var r = !0;
            try {
              r = S(!0, e);
            } finally {
              r ? x() : ((P = !1), (S = null));
            }
          } else P = !1;
        }
        if ("function" === typeof k)
          x = function () {
            k(j);
          };
        else if ("undefined" !== typeof MessageChannel) {
          var N = new MessageChannel(),
            O = N.port2;
          (N.port1.onmessage = j),
            (x = function () {
              O.postMessage(null);
            });
        } else
          x = function () {
            g(j, 0);
          };
        function _(e) {
          (S = e), P || ((P = !0), x());
        }
        function M(e, r) {
          B = g(function () {
            e(t.unstable_now());
          }, r);
        }
        (t.unstable_IdlePriority = 5),
          (t.unstable_ImmediatePriority = 1),
          (t.unstable_LowPriority = 4),
          (t.unstable_NormalPriority = 3),
          (t.unstable_Profiling = null),
          (t.unstable_UserBlockingPriority = 2),
          (t.unstable_cancelCallback = function (e) {
            e.callback = null;
          }),
          (t.unstable_continueExecution = function () {
            h || m || ((h = !0), _(C));
          }),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (E = 0 < e ? Math.floor(1e3 / e) : 5);
          }),
          (t.unstable_getCurrentPriorityLevel = function () {
            return p;
          }),
          (t.unstable_getFirstCallbackNode = function () {
            return n(l);
          }),
          (t.unstable_next = function (e) {
            switch (p) {
              case 1:
              case 2:
              case 3:
                var t = 3;
                break;
              default:
                t = p;
            }
            var r = p;
            p = t;
            try {
              return e();
            } finally {
              p = r;
            }
          }),
          (t.unstable_pauseExecution = function () {}),
          (t.unstable_requestPaint = function () {}),
          (t.unstable_runWithPriority = function (e, t) {
            switch (e) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                e = 3;
            }
            var r = p;
            p = e;
            try {
              return t();
            } finally {
              p = r;
            }
          }),
          (t.unstable_scheduleCallback = function (e, o, a) {
            var i = t.unstable_now();
            switch (
              ("object" === typeof a && null !== a
                ? (a = "number" === typeof (a = a.delay) && 0 < a ? i + a : i)
                : (a = i),
              e)
            ) {
              case 1:
                var s = -1;
                break;
              case 2:
                s = 250;
                break;
              case 5:
                s = 1073741823;
                break;
              case 4:
                s = 1e4;
                break;
              default:
                s = 5e3;
            }
            return (
              (e = {
                id: d++,
                callback: o,
                priorityLevel: e,
                startTime: a,
                expirationTime: (s = a + s),
                sortIndex: -1,
              }),
              a > i
                ? ((e.sortIndex = a),
                  r(u, e),
                  null === n(l) &&
                    e === n(u) &&
                    (v ? (y(B), (B = -1)) : (v = !0), M(w, a - i)))
                : ((e.sortIndex = s), r(l, e), h || m || ((h = !0), _(C))),
              e
            );
          }),
          (t.unstable_shouldYield = R),
          (t.unstable_wrapCallback = function (e) {
            var t = p;
            return function () {
              var r = p;
              p = t;
              try {
                return e.apply(this, arguments);
              } finally {
                p = r;
              }
            };
          });
      },
      5296: function (e, t, r) {
        "use strict";
        e.exports = r(6813);
      },
      7800: function (e) {
        "use strict";
        var t = {
          generateIdentifier: function () {
            return Math.random().toString(36).substr(2, 10);
          },
        };
        (t.localCName = t.generateIdentifier()),
          (t.splitLines = function (e) {
            return e
              .trim()
              .split("\n")
              .map(function (e) {
                return e.trim();
              });
          }),
          (t.splitSections = function (e) {
            return e.split("\nm=").map(function (e, t) {
              return (t > 0 ? "m=" + e : e).trim() + "\r\n";
            });
          }),
          (t.getDescription = function (e) {
            var r = t.splitSections(e);
            return r && r[0];
          }),
          (t.getMediaSections = function (e) {
            var r = t.splitSections(e);
            return r.shift(), r;
          }),
          (t.matchPrefix = function (e, r) {
            return t.splitLines(e).filter(function (e) {
              return 0 === e.indexOf(r);
            });
          }),
          (t.parseCandidate = function (e) {
            for (
              var t,
                r = {
                  foundation: (t =
                    0 === e.indexOf("a=candidate:")
                      ? e.substring(12).split(" ")
                      : e.substring(10).split(" "))[0],
                  component: parseInt(t[1], 10),
                  protocol: t[2].toLowerCase(),
                  priority: parseInt(t[3], 10),
                  ip: t[4],
                  address: t[4],
                  port: parseInt(t[5], 10),
                  type: t[7],
                },
                n = 8;
              n < t.length;
              n += 2
            )
              switch (t[n]) {
                case "raddr":
                  r.relatedAddress = t[n + 1];
                  break;
                case "rport":
                  r.relatedPort = parseInt(t[n + 1], 10);
                  break;
                case "tcptype":
                  r.tcpType = t[n + 1];
                  break;
                case "ufrag":
                  (r.ufrag = t[n + 1]), (r.usernameFragment = t[n + 1]);
                  break;
                default:
                  r[t[n]] = t[n + 1];
              }
            return r;
          }),
          (t.writeCandidate = function (e) {
            var t = [];
            t.push(e.foundation),
              t.push(e.component),
              t.push(e.protocol.toUpperCase()),
              t.push(e.priority),
              t.push(e.address || e.ip),
              t.push(e.port);
            var r = e.type;
            return (
              t.push("typ"),
              t.push(r),
              "host" !== r &&
                e.relatedAddress &&
                e.relatedPort &&
                (t.push("raddr"),
                t.push(e.relatedAddress),
                t.push("rport"),
                t.push(e.relatedPort)),
              e.tcpType &&
                "tcp" === e.protocol.toLowerCase() &&
                (t.push("tcptype"), t.push(e.tcpType)),
              (e.usernameFragment || e.ufrag) &&
                (t.push("ufrag"), t.push(e.usernameFragment || e.ufrag)),
              "candidate:" + t.join(" ")
            );
          }),
          (t.parseIceOptions = function (e) {
            return e.substr(14).split(" ");
          }),
          (t.parseRtpMap = function (e) {
            var t = e.substr(9).split(" "),
              r = { payloadType: parseInt(t.shift(), 10) };
            return (
              (t = t[0].split("/")),
              (r.name = t[0]),
              (r.clockRate = parseInt(t[1], 10)),
              (r.channels = 3 === t.length ? parseInt(t[2], 10) : 1),
              (r.numChannels = r.channels),
              r
            );
          }),
          (t.writeRtpMap = function (e) {
            var t = e.payloadType;
            void 0 !== e.preferredPayloadType && (t = e.preferredPayloadType);
            var r = e.channels || e.numChannels || 1;
            return (
              "a=rtpmap:" +
              t +
              " " +
              e.name +
              "/" +
              e.clockRate +
              (1 !== r ? "/" + r : "") +
              "\r\n"
            );
          }),
          (t.parseExtmap = function (e) {
            var t = e.substr(9).split(" ");
            return {
              id: parseInt(t[0], 10),
              direction:
                t[0].indexOf("/") > 0 ? t[0].split("/")[1] : "sendrecv",
              uri: t[1],
            };
          }),
          (t.writeExtmap = function (e) {
            return (
              "a=extmap:" +
              (e.id || e.preferredId) +
              (e.direction && "sendrecv" !== e.direction
                ? "/" + e.direction
                : "") +
              " " +
              e.uri +
              "\r\n"
            );
          }),
          (t.parseFmtp = function (e) {
            for (
              var t, r = {}, n = e.substr(e.indexOf(" ") + 1).split(";"), o = 0;
              o < n.length;
              o++
            )
              r[(t = n[o].trim().split("="))[0].trim()] = t[1];
            return r;
          }),
          (t.writeFmtp = function (e) {
            var t = "",
              r = e.payloadType;
            if (
              (void 0 !== e.preferredPayloadType &&
                (r = e.preferredPayloadType),
              e.parameters && Object.keys(e.parameters).length)
            ) {
              var n = [];
              Object.keys(e.parameters).forEach(function (t) {
                e.parameters[t] ? n.push(t + "=" + e.parameters[t]) : n.push(t);
              }),
                (t += "a=fmtp:" + r + " " + n.join(";") + "\r\n");
            }
            return t;
          }),
          (t.parseRtcpFb = function (e) {
            var t = e.substr(e.indexOf(" ") + 1).split(" ");
            return { type: t.shift(), parameter: t.join(" ") };
          }),
          (t.writeRtcpFb = function (e) {
            var t = "",
              r = e.payloadType;
            return (
              void 0 !== e.preferredPayloadType && (r = e.preferredPayloadType),
              e.rtcpFeedback &&
                e.rtcpFeedback.length &&
                e.rtcpFeedback.forEach(function (e) {
                  t +=
                    "a=rtcp-fb:" +
                    r +
                    " " +
                    e.type +
                    (e.parameter && e.parameter.length
                      ? " " + e.parameter
                      : "") +
                    "\r\n";
                }),
              t
            );
          }),
          (t.parseSsrcMedia = function (e) {
            var t = e.indexOf(" "),
              r = { ssrc: parseInt(e.substr(7, t - 7), 10) },
              n = e.indexOf(":", t);
            return (
              n > -1
                ? ((r.attribute = e.substr(t + 1, n - t - 1)),
                  (r.value = e.substr(n + 1)))
                : (r.attribute = e.substr(t + 1)),
              r
            );
          }),
          (t.parseSsrcGroup = function (e) {
            var t = e.substr(13).split(" ");
            return {
              semantics: t.shift(),
              ssrcs: t.map(function (e) {
                return parseInt(e, 10);
              }),
            };
          }),
          (t.getMid = function (e) {
            var r = t.matchPrefix(e, "a=mid:")[0];
            if (r) return r.substr(6);
          }),
          (t.parseFingerprint = function (e) {
            var t = e.substr(14).split(" ");
            return { algorithm: t[0].toLowerCase(), value: t[1] };
          }),
          (t.getDtlsParameters = function (e, r) {
            return {
              role: "auto",
              fingerprints: t
                .matchPrefix(e + r, "a=fingerprint:")
                .map(t.parseFingerprint),
            };
          }),
          (t.writeDtlsParameters = function (e, t) {
            var r = "a=setup:" + t + "\r\n";
            return (
              e.fingerprints.forEach(function (e) {
                r += "a=fingerprint:" + e.algorithm + " " + e.value + "\r\n";
              }),
              r
            );
          }),
          (t.parseCryptoLine = function (e) {
            var t = e.substr(9).split(" ");
            return {
              tag: parseInt(t[0], 10),
              cryptoSuite: t[1],
              keyParams: t[2],
              sessionParams: t.slice(3),
            };
          }),
          (t.writeCryptoLine = function (e) {
            return (
              "a=crypto:" +
              e.tag +
              " " +
              e.cryptoSuite +
              " " +
              ("object" === typeof e.keyParams
                ? t.writeCryptoKeyParams(e.keyParams)
                : e.keyParams) +
              (e.sessionParams ? " " + e.sessionParams.join(" ") : "") +
              "\r\n"
            );
          }),
          (t.parseCryptoKeyParams = function (e) {
            if (0 !== e.indexOf("inline:")) return null;
            var t = e.substr(7).split("|");
            return {
              keyMethod: "inline",
              keySalt: t[0],
              lifeTime: t[1],
              mkiValue: t[2] ? t[2].split(":")[0] : void 0,
              mkiLength: t[2] ? t[2].split(":")[1] : void 0,
            };
          }),
          (t.writeCryptoKeyParams = function (e) {
            return (
              e.keyMethod +
              ":" +
              e.keySalt +
              (e.lifeTime ? "|" + e.lifeTime : "") +
              (e.mkiValue && e.mkiLength
                ? "|" + e.mkiValue + ":" + e.mkiLength
                : "")
            );
          }),
          (t.getCryptoParameters = function (e, r) {
            return t.matchPrefix(e + r, "a=crypto:").map(t.parseCryptoLine);
          }),
          (t.getIceParameters = function (e, r) {
            var n = t.matchPrefix(e + r, "a=ice-ufrag:")[0],
              o = t.matchPrefix(e + r, "a=ice-pwd:")[0];
            return n && o
              ? { usernameFragment: n.substr(12), password: o.substr(10) }
              : null;
          }),
          (t.writeIceParameters = function (e) {
            return (
              "a=ice-ufrag:" +
              e.usernameFragment +
              "\r\na=ice-pwd:" +
              e.password +
              "\r\n"
            );
          }),
          (t.parseRtpParameters = function (e) {
            for (
              var r = {
                  codecs: [],
                  headerExtensions: [],
                  fecMechanisms: [],
                  rtcp: [],
                },
                n = t.splitLines(e)[0].split(" "),
                o = 3;
              o < n.length;
              o++
            ) {
              var a = n[o],
                i = t.matchPrefix(e, "a=rtpmap:" + a + " ")[0];
              if (i) {
                var s = t.parseRtpMap(i),
                  c = t.matchPrefix(e, "a=fmtp:" + a + " ");
                switch (
                  ((s.parameters = c.length ? t.parseFmtp(c[0]) : {}),
                  (s.rtcpFeedback = t
                    .matchPrefix(e, "a=rtcp-fb:" + a + " ")
                    .map(t.parseRtcpFb)),
                  r.codecs.push(s),
                  s.name.toUpperCase())
                ) {
                  case "RED":
                  case "ULPFEC":
                    r.fecMechanisms.push(s.name.toUpperCase());
                }
              }
            }
            return (
              t.matchPrefix(e, "a=extmap:").forEach(function (e) {
                r.headerExtensions.push(t.parseExtmap(e));
              }),
              r
            );
          }),
          (t.writeRtpDescription = function (e, r) {
            var n = "";
            (n += "m=" + e + " "),
              (n += r.codecs.length > 0 ? "9" : "0"),
              (n += " UDP/TLS/RTP/SAVPF "),
              (n +=
                r.codecs
                  .map(function (e) {
                    return void 0 !== e.preferredPayloadType
                      ? e.preferredPayloadType
                      : e.payloadType;
                  })
                  .join(" ") + "\r\n"),
              (n += "c=IN IP4 0.0.0.0\r\n"),
              (n += "a=rtcp:9 IN IP4 0.0.0.0\r\n"),
              r.codecs.forEach(function (e) {
                (n += t.writeRtpMap(e)),
                  (n += t.writeFmtp(e)),
                  (n += t.writeRtcpFb(e));
              });
            var o = 0;
            return (
              r.codecs.forEach(function (e) {
                e.maxptime > o && (o = e.maxptime);
              }),
              o > 0 && (n += "a=maxptime:" + o + "\r\n"),
              (n += "a=rtcp-mux\r\n"),
              r.headerExtensions &&
                r.headerExtensions.forEach(function (e) {
                  n += t.writeExtmap(e);
                }),
              n
            );
          }),
          (t.parseRtpEncodingParameters = function (e) {
            var r,
              n = [],
              o = t.parseRtpParameters(e),
              a = -1 !== o.fecMechanisms.indexOf("RED"),
              i = -1 !== o.fecMechanisms.indexOf("ULPFEC"),
              s = t
                .matchPrefix(e, "a=ssrc:")
                .map(function (e) {
                  return t.parseSsrcMedia(e);
                })
                .filter(function (e) {
                  return "cname" === e.attribute;
                }),
              c = s.length > 0 && s[0].ssrc,
              l = t.matchPrefix(e, "a=ssrc-group:FID").map(function (e) {
                return e
                  .substr(17)
                  .split(" ")
                  .map(function (e) {
                    return parseInt(e, 10);
                  });
              });
            l.length > 0 && l[0].length > 1 && l[0][0] === c && (r = l[0][1]),
              o.codecs.forEach(function (e) {
                if ("RTX" === e.name.toUpperCase() && e.parameters.apt) {
                  var t = {
                    ssrc: c,
                    codecPayloadType: parseInt(e.parameters.apt, 10),
                  };
                  c && r && (t.rtx = { ssrc: r }),
                    n.push(t),
                    a &&
                      (((t = JSON.parse(JSON.stringify(t))).fec = {
                        ssrc: c,
                        mechanism: i ? "red+ulpfec" : "red",
                      }),
                      n.push(t));
                }
              }),
              0 === n.length && c && n.push({ ssrc: c });
            var u = t.matchPrefix(e, "b=");
            return (
              u.length &&
                ((u =
                  0 === u[0].indexOf("b=TIAS:")
                    ? parseInt(u[0].substr(7), 10)
                    : 0 === u[0].indexOf("b=AS:")
                    ? 1e3 * parseInt(u[0].substr(5), 10) * 0.95 - 16e3
                    : void 0),
                n.forEach(function (e) {
                  e.maxBitrate = u;
                })),
              n
            );
          }),
          (t.parseRtcpParameters = function (e) {
            var r = {},
              n = t
                .matchPrefix(e, "a=ssrc:")
                .map(function (e) {
                  return t.parseSsrcMedia(e);
                })
                .filter(function (e) {
                  return "cname" === e.attribute;
                })[0];
            n && ((r.cname = n.value), (r.ssrc = n.ssrc));
            var o = t.matchPrefix(e, "a=rtcp-rsize");
            (r.reducedSize = o.length > 0), (r.compound = 0 === o.length);
            var a = t.matchPrefix(e, "a=rtcp-mux");
            return (r.mux = a.length > 0), r;
          }),
          (t.parseMsid = function (e) {
            var r,
              n = t.matchPrefix(e, "a=msid:");
            if (1 === n.length)
              return {
                stream: (r = n[0].substr(7).split(" "))[0],
                track: r[1],
              };
            var o = t
              .matchPrefix(e, "a=ssrc:")
              .map(function (e) {
                return t.parseSsrcMedia(e);
              })
              .filter(function (e) {
                return "msid" === e.attribute;
              });
            return o.length > 0
              ? { stream: (r = o[0].value.split(" "))[0], track: r[1] }
              : void 0;
          }),
          (t.parseSctpDescription = function (e) {
            var r,
              n = t.parseMLine(e),
              o = t.matchPrefix(e, "a=max-message-size:");
            o.length > 0 && (r = parseInt(o[0].substr(19), 10)),
              isNaN(r) && (r = 65536);
            var a = t.matchPrefix(e, "a=sctp-port:");
            if (a.length > 0)
              return {
                port: parseInt(a[0].substr(12), 10),
                protocol: n.fmt,
                maxMessageSize: r,
              };
            if (t.matchPrefix(e, "a=sctpmap:").length > 0) {
              var i = t.matchPrefix(e, "a=sctpmap:")[0].substr(10).split(" ");
              return {
                port: parseInt(i[0], 10),
                protocol: i[1],
                maxMessageSize: r,
              };
            }
          }),
          (t.writeSctpDescription = function (e, t) {
            var r = [];
            return (
              (r =
                "DTLS/SCTP" !== e.protocol
                  ? [
                      "m=" +
                        e.kind +
                        " 9 " +
                        e.protocol +
                        " " +
                        t.protocol +
                        "\r\n",
                      "c=IN IP4 0.0.0.0\r\n",
                      "a=sctp-port:" + t.port + "\r\n",
                    ]
                  : [
                      "m=" +
                        e.kind +
                        " 9 " +
                        e.protocol +
                        " " +
                        t.port +
                        "\r\n",
                      "c=IN IP4 0.0.0.0\r\n",
                      "a=sctpmap:" + t.port + " " + t.protocol + " 65535\r\n",
                    ]),
              void 0 !== t.maxMessageSize &&
                r.push("a=max-message-size:" + t.maxMessageSize + "\r\n"),
              r.join("")
            );
          }),
          (t.generateSessionId = function () {
            return Math.random().toString().substr(2, 21);
          }),
          (t.writeSessionBoilerplate = function (e, r, n) {
            var o = void 0 !== r ? r : 2;
            return (
              "v=0\r\no=" +
              (n || "thisisadapterortc") +
              " " +
              (e || t.generateSessionId()) +
              " " +
              o +
              " IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\n"
            );
          }),
          (t.writeMediaSection = function (e, r, n, o) {
            var a = t.writeRtpDescription(e.kind, r);
            if (
              ((a += t.writeIceParameters(e.iceGatherer.getLocalParameters())),
              (a += t.writeDtlsParameters(
                e.dtlsTransport.getLocalParameters(),
                "offer" === n ? "actpass" : "active"
              )),
              (a += "a=mid:" + e.mid + "\r\n"),
              e.direction
                ? (a += "a=" + e.direction + "\r\n")
                : e.rtpSender && e.rtpReceiver
                ? (a += "a=sendrecv\r\n")
                : e.rtpSender
                ? (a += "a=sendonly\r\n")
                : e.rtpReceiver
                ? (a += "a=recvonly\r\n")
                : (a += "a=inactive\r\n"),
              e.rtpSender)
            ) {
              var i = "msid:" + o.id + " " + e.rtpSender.track.id + "\r\n";
              (a += "a=" + i),
                (a += "a=ssrc:" + e.sendEncodingParameters[0].ssrc + " " + i),
                e.sendEncodingParameters[0].rtx &&
                  ((a +=
                    "a=ssrc:" + e.sendEncodingParameters[0].rtx.ssrc + " " + i),
                  (a +=
                    "a=ssrc-group:FID " +
                    e.sendEncodingParameters[0].ssrc +
                    " " +
                    e.sendEncodingParameters[0].rtx.ssrc +
                    "\r\n"));
            }
            return (
              (a +=
                "a=ssrc:" +
                e.sendEncodingParameters[0].ssrc +
                " cname:" +
                t.localCName +
                "\r\n"),
              e.rtpSender &&
                e.sendEncodingParameters[0].rtx &&
                (a +=
                  "a=ssrc:" +
                  e.sendEncodingParameters[0].rtx.ssrc +
                  " cname:" +
                  t.localCName +
                  "\r\n"),
              a
            );
          }),
          (t.getDirection = function (e, r) {
            for (var n = t.splitLines(e), o = 0; o < n.length; o++)
              switch (n[o]) {
                case "a=sendrecv":
                case "a=sendonly":
                case "a=recvonly":
                case "a=inactive":
                  return n[o].substr(2);
              }
            return r ? t.getDirection(r) : "sendrecv";
          }),
          (t.getKind = function (e) {
            return t.splitLines(e)[0].split(" ")[0].substr(2);
          }),
          (t.isRejected = function (e) {
            return "0" === e.split(" ", 2)[1];
          }),
          (t.parseMLine = function (e) {
            var r = t.splitLines(e)[0].substr(2).split(" ");
            return {
              kind: r[0],
              port: parseInt(r[1], 10),
              protocol: r[2],
              fmt: r.slice(3).join(" "),
            };
          }),
          (t.parseOLine = function (e) {
            var r = t.matchPrefix(e, "o=")[0].substr(2).split(" ");
            return {
              username: r[0],
              sessionId: r[1],
              sessionVersion: parseInt(r[2], 10),
              netType: r[3],
              addressType: r[4],
              address: r[5],
            };
          }),
          (t.isValidSDP = function (e) {
            if ("string" !== typeof e || 0 === e.length) return !1;
            for (var r = t.splitLines(e), n = 0; n < r.length; n++)
              if (r[n].length < 2 || "=" !== r[n].charAt(1)) return !1;
            return !0;
          }),
          (e.exports = t);
      },
      2391: function (e) {
        "use strict";
        var t = function () {};
        e.exports = t;
      },
      9481: function (e, t, r) {
        "use strict";
        r.r(t),
          r.d(t, {
            default: function () {
              return ve;
            },
          });
        var n = {};
        r.r(n),
          r.d(n, {
            fixNegotiationNeeded: function () {
              return _;
            },
            shimAddTrackRemoveTrack: function () {
              return N;
            },
            shimAddTrackRemoveTrackWithNative: function () {
              return j;
            },
            shimGetDisplayMedia: function () {
              return P;
            },
            shimGetSendersWithDtmf: function () {
              return E;
            },
            shimGetStats: function () {
              return T;
            },
            shimGetUserMedia: function () {
              return x;
            },
            shimMediaStream: function () {
              return S;
            },
            shimOnTrack: function () {
              return B;
            },
            shimPeerConnection: function () {
              return O;
            },
            shimSenderReceiverGetStats: function () {
              return R;
            },
          });
        var o = {};
        r.r(o),
          r.d(o, {
            shimGetDisplayMedia: function () {
              return I;
            },
            shimGetUserMedia: function () {
              return D;
            },
            shimPeerConnection: function () {
              return A;
            },
            shimReplaceTrack: function () {
              return U;
            },
          });
        var a = {};
        r.r(a),
          r.d(a, {
            shimAddTransceiver: function () {
              return Q;
            },
            shimCreateAnswer: function () {
              return q;
            },
            shimCreateOffer: function () {
              return Y;
            },
            shimGetDisplayMedia: function () {
              return F;
            },
            shimGetParameters: function () {
              return X;
            },
            shimGetUserMedia: function () {
              return z;
            },
            shimOnTrack: function () {
              return K;
            },
            shimPeerConnection: function () {
              return V;
            },
            shimRTCDataChannel: function () {
              return G;
            },
            shimReceiverGetStats: function () {
              return H;
            },
            shimRemoveStream: function () {
              return W;
            },
            shimSenderGetStats: function () {
              return J;
            },
          });
        var i = {};
        r.r(i),
          r.d(i, {
            shimAudioContext: function () {
              return ie;
            },
            shimCallbacksAPI: function () {
              return ee;
            },
            shimConstraints: function () {
              return re;
            },
            shimCreateOfferLegacy: function () {
              return ae;
            },
            shimGetUserMedia: function () {
              return te;
            },
            shimLocalStreamsAPI: function () {
              return $;
            },
            shimRTCIceServerUrls: function () {
              return ne;
            },
            shimRemoteStreamsAPI: function () {
              return Z;
            },
            shimTrackEventTransceiver: function () {
              return oe;
            },
          });
        var s = {};
        r.r(s),
          r.d(s, {
            removeExtmapAllowMixed: function () {
              return pe;
            },
            shimAddIceCandidateNullOrEmpty: function () {
              return me;
            },
            shimConnectionState: function () {
              return fe;
            },
            shimMaxMessageSize: function () {
              return ue;
            },
            shimRTCIceCandidate: function () {
              return le;
            },
            shimSendThrowTypeError: function () {
              return de;
            },
          });
        var c = r(4942),
          l = !0,
          u = !0;
        function d(e, t, r) {
          var n = e.match(t);
          return n && n.length >= r && parseInt(n[r], 10);
        }
        function f(e, t, r) {
          if (e.RTCPeerConnection) {
            var n = e.RTCPeerConnection.prototype,
              o = n.addEventListener;
            n.addEventListener = function (e, n) {
              if (e !== t) return o.apply(this, arguments);
              var a = function (e) {
                var t = r(e);
                t && (n.handleEvent ? n.handleEvent(t) : n(t));
              };
              return (
                (this._eventMap = this._eventMap || {}),
                this._eventMap[t] || (this._eventMap[t] = new Map()),
                this._eventMap[t].set(n, a),
                o.apply(this, [e, a])
              );
            };
            var a = n.removeEventListener;
            (n.removeEventListener = function (e, r) {
              if (e !== t || !this._eventMap || !this._eventMap[t])
                return a.apply(this, arguments);
              if (!this._eventMap[t].has(r)) return a.apply(this, arguments);
              var n = this._eventMap[t].get(r);
              return (
                this._eventMap[t].delete(r),
                0 === this._eventMap[t].size && delete this._eventMap[t],
                0 === Object.keys(this._eventMap).length &&
                  delete this._eventMap,
                a.apply(this, [e, n])
              );
            }),
              Object.defineProperty(n, "on" + t, {
                get: function () {
                  return this["_on" + t];
                },
                set: function (e) {
                  this["_on" + t] &&
                    (this.removeEventListener(t, this["_on" + t]),
                    delete this["_on" + t]),
                    e && this.addEventListener(t, (this["_on" + t] = e));
                },
                enumerable: !0,
                configurable: !0,
              });
          }
        }
        function p(e) {
          return "boolean" !== typeof e
            ? new Error(
                "Argument type: " + typeof e + ". Please use a boolean."
              )
            : ((l = e),
              e ? "adapter.js logging disabled" : "adapter.js logging enabled");
        }
        function m(e) {
          return "boolean" !== typeof e
            ? new Error(
                "Argument type: " + typeof e + ". Please use a boolean."
              )
            : ((u = !e),
              "adapter.js deprecation warnings " +
                (e ? "disabled" : "enabled"));
        }
        function h() {
          if ("object" === typeof window) {
            if (l) return;
            "undefined" !== typeof console &&
              "function" === typeof console.log &&
              console.log.apply(console, arguments);
          }
        }
        function v(e, t) {
          u &&
            console.warn(e + " is deprecated, please use " + t + " instead.");
        }
        function g(e) {
          var t = { browser: null, version: null };
          if ("undefined" === typeof e || !e.navigator)
            return (t.browser = "Not a browser."), t;
          var r = e.navigator;
          if (r.mozGetUserMedia)
            (t.browser = "firefox"),
              (t.version = d(r.userAgent, /Firefox\/(\d+)\./, 1));
          else if (
            r.webkitGetUserMedia ||
            (!1 === e.isSecureContext &&
              e.webkitRTCPeerConnection &&
              !e.RTCIceGatherer)
          )
            (t.browser = "chrome"),
              (t.version = d(r.userAgent, /Chrom(e|ium)\/(\d+)\./, 2));
          else if (r.mediaDevices && r.userAgent.match(/Edge\/(\d+).(\d+)$/))
            (t.browser = "edge"),
              (t.version = d(r.userAgent, /Edge\/(\d+).(\d+)$/, 2));
          else {
            if (
              !e.RTCPeerConnection ||
              !r.userAgent.match(/AppleWebKit\/(\d+)\./)
            )
              return (t.browser = "Not a supported browser."), t;
            (t.browser = "safari"),
              (t.version = d(r.userAgent, /AppleWebKit\/(\d+)\./, 1)),
              (t.supportsUnifiedPlan =
                e.RTCRtpTransceiver &&
                "currentDirection" in e.RTCRtpTransceiver.prototype);
          }
          return t;
        }
        function y(e) {
          return "[object Object]" === Object.prototype.toString.call(e);
        }
        function k(e) {
          return y(e)
            ? Object.keys(e).reduce(function (t, r) {
                var n = y(e[r]),
                  o = n ? k(e[r]) : e[r],
                  a = n && !Object.keys(o).length;
                return void 0 === o || a
                  ? t
                  : Object.assign(t, (0, c.Z)({}, r, o));
              }, {})
            : e;
        }
        function b(e, t, r) {
          t &&
            !r.has(t.id) &&
            (r.set(t.id, t),
            Object.keys(t).forEach(function (n) {
              n.endsWith("Id")
                ? b(e, e.get(t[n]), r)
                : n.endsWith("Ids") &&
                  t[n].forEach(function (t) {
                    b(e, e.get(t), r);
                  });
            }));
        }
        function w(e, t, r) {
          var n = r ? "outbound-rtp" : "inbound-rtp",
            o = new Map();
          if (null === t) return o;
          var a = [];
          return (
            e.forEach(function (e) {
              "track" === e.type && e.trackIdentifier === t.id && a.push(e);
            }),
            a.forEach(function (t) {
              e.forEach(function (r) {
                r.type === n && r.trackId === t.id && b(e, r, o);
              });
            }),
            o
          );
        }
        var C = h;
        function x(e, t) {
          var r = e && e.navigator;
          if (r.mediaDevices) {
            var n = function (e) {
                if ("object" !== typeof e || e.mandatory || e.optional)
                  return e;
                var t = {};
                return (
                  Object.keys(e).forEach(function (r) {
                    if (
                      "require" !== r &&
                      "advanced" !== r &&
                      "mediaSource" !== r
                    ) {
                      var n = "object" === typeof e[r] ? e[r] : { ideal: e[r] };
                      void 0 !== n.exact &&
                        "number" === typeof n.exact &&
                        (n.min = n.max = n.exact);
                      var o = function (e, t) {
                        return e
                          ? e + t.charAt(0).toUpperCase() + t.slice(1)
                          : "deviceId" === t
                          ? "sourceId"
                          : t;
                      };
                      if (void 0 !== n.ideal) {
                        t.optional = t.optional || [];
                        var a = {};
                        "number" === typeof n.ideal
                          ? ((a[o("min", r)] = n.ideal),
                            t.optional.push(a),
                            ((a = {})[o("max", r)] = n.ideal),
                            t.optional.push(a))
                          : ((a[o("", r)] = n.ideal), t.optional.push(a));
                      }
                      void 0 !== n.exact && "number" !== typeof n.exact
                        ? ((t.mandatory = t.mandatory || {}),
                          (t.mandatory[o("", r)] = n.exact))
                        : ["min", "max"].forEach(function (e) {
                            void 0 !== n[e] &&
                              ((t.mandatory = t.mandatory || {}),
                              (t.mandatory[o(e, r)] = n[e]));
                          });
                    }
                  }),
                  e.advanced &&
                    (t.optional = (t.optional || []).concat(e.advanced)),
                  t
                );
              },
              o = function (e, o) {
                if (t.version >= 61) return o(e);
                if (
                  (e = JSON.parse(JSON.stringify(e))) &&
                  "object" === typeof e.audio
                ) {
                  var a = function (e, t, r) {
                    t in e && !(r in e) && ((e[r] = e[t]), delete e[t]);
                  };
                  a(
                    (e = JSON.parse(JSON.stringify(e))).audio,
                    "autoGainControl",
                    "googAutoGainControl"
                  ),
                    a(e.audio, "noiseSuppression", "googNoiseSuppression"),
                    (e.audio = n(e.audio));
                }
                if (e && "object" === typeof e.video) {
                  var i = e.video.facingMode;
                  i = i && ("object" === typeof i ? i : { ideal: i });
                  var s,
                    c = t.version < 66;
                  if (
                    i &&
                    ("user" === i.exact ||
                      "environment" === i.exact ||
                      "user" === i.ideal ||
                      "environment" === i.ideal) &&
                    (!r.mediaDevices.getSupportedConstraints ||
                      !r.mediaDevices.getSupportedConstraints().facingMode ||
                      c)
                  )
                    if (
                      (delete e.video.facingMode,
                      "environment" === i.exact || "environment" === i.ideal
                        ? (s = ["back", "rear"])
                        : ("user" !== i.exact && "user" !== i.ideal) ||
                          (s = ["front"]),
                      s)
                    )
                      return r.mediaDevices
                        .enumerateDevices()
                        .then(function (t) {
                          var r = (t = t.filter(function (e) {
                            return "videoinput" === e.kind;
                          })).find(function (e) {
                            return s.some(function (t) {
                              return e.label.toLowerCase().includes(t);
                            });
                          });
                          return (
                            !r &&
                              t.length &&
                              s.includes("back") &&
                              (r = t[t.length - 1]),
                            r &&
                              (e.video.deviceId = i.exact
                                ? { exact: r.deviceId }
                                : { ideal: r.deviceId }),
                            (e.video = n(e.video)),
                            C("chrome: " + JSON.stringify(e)),
                            o(e)
                          );
                        });
                  e.video = n(e.video);
                }
                return C("chrome: " + JSON.stringify(e)), o(e);
              },
              a = function (e) {
                return t.version >= 64
                  ? e
                  : {
                      name:
                        {
                          PermissionDeniedError: "NotAllowedError",
                          PermissionDismissedError: "NotAllowedError",
                          InvalidStateError: "NotAllowedError",
                          DevicesNotFoundError: "NotFoundError",
                          ConstraintNotSatisfiedError: "OverconstrainedError",
                          TrackStartError: "NotReadableError",
                          MediaDeviceFailedDueToShutdown: "NotAllowedError",
                          MediaDeviceKillSwitchOn: "NotAllowedError",
                          TabCaptureError: "AbortError",
                          ScreenCaptureError: "AbortError",
                          DeviceCaptureError: "AbortError",
                        }[e.name] || e.name,
                      message: e.message,
                      constraint: e.constraint || e.constraintName,
                      toString: function () {
                        return (
                          this.name + (this.message && ": ") + this.message
                        );
                      },
                    };
              };
            if (
              ((r.getUserMedia = function (e, t, n) {
                o(e, function (e) {
                  r.webkitGetUserMedia(e, t, function (e) {
                    n && n(a(e));
                  });
                });
              }.bind(r)),
              r.mediaDevices.getUserMedia)
            ) {
              var i = r.mediaDevices.getUserMedia.bind(r.mediaDevices);
              r.mediaDevices.getUserMedia = function (e) {
                return o(e, function (e) {
                  return i(e).then(
                    function (t) {
                      if (
                        (e.audio && !t.getAudioTracks().length) ||
                        (e.video && !t.getVideoTracks().length)
                      )
                        throw (
                          (t.getTracks().forEach(function (e) {
                            e.stop();
                          }),
                          new DOMException("", "NotFoundError"))
                        );
                      return t;
                    },
                    function (e) {
                      return Promise.reject(a(e));
                    }
                  );
                });
              };
            }
          }
        }
        function P(e, t) {
          (e.navigator.mediaDevices &&
            "getDisplayMedia" in e.navigator.mediaDevices) ||
            (e.navigator.mediaDevices &&
              ("function" === typeof t
                ? (e.navigator.mediaDevices.getDisplayMedia = function (r) {
                    return t(r).then(function (t) {
                      var n = r.video && r.video.width,
                        o = r.video && r.video.height,
                        a = r.video && r.video.frameRate;
                      return (
                        (r.video = {
                          mandatory: {
                            chromeMediaSource: "desktop",
                            chromeMediaSourceId: t,
                            maxFrameRate: a || 3,
                          },
                        }),
                        n && (r.video.mandatory.maxWidth = n),
                        o && (r.video.mandatory.maxHeight = o),
                        e.navigator.mediaDevices.getUserMedia(r)
                      );
                    });
                  })
                : console.error(
                    "shimGetDisplayMedia: getSourceId argument is not a function"
                  )));
        }
        function S(e) {
          e.MediaStream = e.MediaStream || e.webkitMediaStream;
        }
        function B(e) {
          if (
            "object" === typeof e &&
            e.RTCPeerConnection &&
            !("ontrack" in e.RTCPeerConnection.prototype)
          ) {
            Object.defineProperty(e.RTCPeerConnection.prototype, "ontrack", {
              get: function () {
                return this._ontrack;
              },
              set: function (e) {
                this._ontrack &&
                  this.removeEventListener("track", this._ontrack),
                  this.addEventListener("track", (this._ontrack = e));
              },
              enumerable: !0,
              configurable: !0,
            });
            var t = e.RTCPeerConnection.prototype.setRemoteDescription;
            e.RTCPeerConnection.prototype.setRemoteDescription = function () {
              var r = this;
              return (
                this._ontrackpoly ||
                  ((this._ontrackpoly = function (t) {
                    t.stream.addEventListener("addtrack", function (n) {
                      var o;
                      o = e.RTCPeerConnection.prototype.getReceivers
                        ? r.getReceivers().find(function (e) {
                            return e.track && e.track.id === n.track.id;
                          })
                        : { track: n.track };
                      var a = new Event("track");
                      (a.track = n.track),
                        (a.receiver = o),
                        (a.transceiver = { receiver: o }),
                        (a.streams = [t.stream]),
                        r.dispatchEvent(a);
                    }),
                      t.stream.getTracks().forEach(function (n) {
                        var o;
                        o = e.RTCPeerConnection.prototype.getReceivers
                          ? r.getReceivers().find(function (e) {
                              return e.track && e.track.id === n.id;
                            })
                          : { track: n };
                        var a = new Event("track");
                        (a.track = n),
                          (a.receiver = o),
                          (a.transceiver = { receiver: o }),
                          (a.streams = [t.stream]),
                          r.dispatchEvent(a);
                      });
                  }),
                  this.addEventListener("addstream", this._ontrackpoly)),
                t.apply(this, arguments)
              );
            };
          } else
            f(e, "track", function (e) {
              return (
                e.transceiver ||
                  Object.defineProperty(e, "transceiver", {
                    value: { receiver: e.receiver },
                  }),
                e
              );
            });
        }
        function E(e) {
          if (
            "object" === typeof e &&
            e.RTCPeerConnection &&
            !("getSenders" in e.RTCPeerConnection.prototype) &&
            "createDTMFSender" in e.RTCPeerConnection.prototype
          ) {
            var t = function (e, t) {
              return {
                track: t,
                get dtmf() {
                  return (
                    void 0 === this._dtmf &&
                      ("audio" === t.kind
                        ? (this._dtmf = e.createDTMFSender(t))
                        : (this._dtmf = null)),
                    this._dtmf
                  );
                },
                _pc: e,
              };
            };
            if (!e.RTCPeerConnection.prototype.getSenders) {
              e.RTCPeerConnection.prototype.getSenders = function () {
                return (
                  (this._senders = this._senders || []), this._senders.slice()
                );
              };
              var r = e.RTCPeerConnection.prototype.addTrack;
              e.RTCPeerConnection.prototype.addTrack = function (e, n) {
                var o = r.apply(this, arguments);
                return o || ((o = t(this, e)), this._senders.push(o)), o;
              };
              var n = e.RTCPeerConnection.prototype.removeTrack;
              e.RTCPeerConnection.prototype.removeTrack = function (e) {
                n.apply(this, arguments);
                var t = this._senders.indexOf(e);
                -1 !== t && this._senders.splice(t, 1);
              };
            }
            var o = e.RTCPeerConnection.prototype.addStream;
            e.RTCPeerConnection.prototype.addStream = function (e) {
              var r = this;
              (this._senders = this._senders || []),
                o.apply(this, [e]),
                e.getTracks().forEach(function (e) {
                  r._senders.push(t(r, e));
                });
            };
            var a = e.RTCPeerConnection.prototype.removeStream;
            e.RTCPeerConnection.prototype.removeStream = function (e) {
              var t = this;
              (this._senders = this._senders || []),
                a.apply(this, [e]),
                e.getTracks().forEach(function (e) {
                  var r = t._senders.find(function (t) {
                    return t.track === e;
                  });
                  r && t._senders.splice(t._senders.indexOf(r), 1);
                });
            };
          } else if (
            "object" === typeof e &&
            e.RTCPeerConnection &&
            "getSenders" in e.RTCPeerConnection.prototype &&
            "createDTMFSender" in e.RTCPeerConnection.prototype &&
            e.RTCRtpSender &&
            !("dtmf" in e.RTCRtpSender.prototype)
          ) {
            var i = e.RTCPeerConnection.prototype.getSenders;
            (e.RTCPeerConnection.prototype.getSenders = function () {
              var e = this,
                t = i.apply(this, []);
              return (
                t.forEach(function (t) {
                  return (t._pc = e);
                }),
                t
              );
            }),
              Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
                get: function () {
                  return (
                    void 0 === this._dtmf &&
                      ("audio" === this.track.kind
                        ? (this._dtmf = this._pc.createDTMFSender(this.track))
                        : (this._dtmf = null)),
                    this._dtmf
                  );
                },
              });
          }
        }
        function T(e) {
          if (e.RTCPeerConnection) {
            var t = e.RTCPeerConnection.prototype.getStats;
            e.RTCPeerConnection.prototype.getStats = function () {
              var e = this,
                r = Array.prototype.slice.call(arguments),
                n = r[0],
                o = r[1],
                a = r[2];
              if (arguments.length > 0 && "function" === typeof n)
                return t.apply(this, arguments);
              if (
                0 === t.length &&
                (0 === arguments.length || "function" !== typeof n)
              )
                return t.apply(this, []);
              var i = function (e) {
                  var t = {};
                  return (
                    e.result().forEach(function (e) {
                      var r = {
                        id: e.id,
                        timestamp: e.timestamp,
                        type:
                          {
                            localcandidate: "local-candidate",
                            remotecandidate: "remote-candidate",
                          }[e.type] || e.type,
                      };
                      e.names().forEach(function (t) {
                        r[t] = e.stat(t);
                      }),
                        (t[r.id] = r);
                    }),
                    t
                  );
                },
                s = function (e) {
                  return new Map(
                    Object.keys(e).map(function (t) {
                      return [t, e[t]];
                    })
                  );
                };
              if (arguments.length >= 2) {
                var c = function (e) {
                  o(s(i(e)));
                };
                return t.apply(this, [c, n]);
              }
              return new Promise(function (r, n) {
                t.apply(e, [
                  function (e) {
                    r(s(i(e)));
                  },
                  n,
                ]);
              }).then(o, a);
            };
          }
        }
        function R(e) {
          if (
            "object" === typeof e &&
            e.RTCPeerConnection &&
            e.RTCRtpSender &&
            e.RTCRtpReceiver
          ) {
            if (!("getStats" in e.RTCRtpSender.prototype)) {
              var t = e.RTCPeerConnection.prototype.getSenders;
              t &&
                (e.RTCPeerConnection.prototype.getSenders = function () {
                  var e = this,
                    r = t.apply(this, []);
                  return (
                    r.forEach(function (t) {
                      return (t._pc = e);
                    }),
                    r
                  );
                });
              var r = e.RTCPeerConnection.prototype.addTrack;
              r &&
                (e.RTCPeerConnection.prototype.addTrack = function () {
                  var e = r.apply(this, arguments);
                  return (e._pc = this), e;
                }),
                (e.RTCRtpSender.prototype.getStats = function () {
                  var e = this;
                  return this._pc.getStats().then(function (t) {
                    return w(t, e.track, !0);
                  });
                });
            }
            if (!("getStats" in e.RTCRtpReceiver.prototype)) {
              var n = e.RTCPeerConnection.prototype.getReceivers;
              n &&
                (e.RTCPeerConnection.prototype.getReceivers = function () {
                  var e = this,
                    t = n.apply(this, []);
                  return (
                    t.forEach(function (t) {
                      return (t._pc = e);
                    }),
                    t
                  );
                }),
                f(e, "track", function (e) {
                  return (e.receiver._pc = e.srcElement), e;
                }),
                (e.RTCRtpReceiver.prototype.getStats = function () {
                  var e = this;
                  return this._pc.getStats().then(function (t) {
                    return w(t, e.track, !1);
                  });
                });
            }
            if (
              "getStats" in e.RTCRtpSender.prototype &&
              "getStats" in e.RTCRtpReceiver.prototype
            ) {
              var o = e.RTCPeerConnection.prototype.getStats;
              e.RTCPeerConnection.prototype.getStats = function () {
                if (
                  arguments.length > 0 &&
                  arguments[0] instanceof e.MediaStreamTrack
                ) {
                  var t,
                    r,
                    n,
                    a = arguments[0];
                  return (
                    this.getSenders().forEach(function (e) {
                      e.track === a && (t ? (n = !0) : (t = e));
                    }),
                    this.getReceivers().forEach(function (e) {
                      return (
                        e.track === a && (r ? (n = !0) : (r = e)), e.track === a
                      );
                    }),
                    n || (t && r)
                      ? Promise.reject(
                          new DOMException(
                            "There are more than one sender or receiver for the track.",
                            "InvalidAccessError"
                          )
                        )
                      : t
                      ? t.getStats()
                      : r
                      ? r.getStats()
                      : Promise.reject(
                          new DOMException(
                            "There is no sender or receiver for the track.",
                            "InvalidAccessError"
                          )
                        )
                  );
                }
                return o.apply(this, arguments);
              };
            }
          }
        }
        function j(e) {
          e.RTCPeerConnection.prototype.getLocalStreams = function () {
            var e = this;
            return (
              (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
              Object.keys(this._shimmedLocalStreams).map(function (t) {
                return e._shimmedLocalStreams[t][0];
              })
            );
          };
          var t = e.RTCPeerConnection.prototype.addTrack;
          e.RTCPeerConnection.prototype.addTrack = function (e, r) {
            if (!r) return t.apply(this, arguments);
            this._shimmedLocalStreams = this._shimmedLocalStreams || {};
            var n = t.apply(this, arguments);
            return (
              this._shimmedLocalStreams[r.id]
                ? -1 === this._shimmedLocalStreams[r.id].indexOf(n) &&
                  this._shimmedLocalStreams[r.id].push(n)
                : (this._shimmedLocalStreams[r.id] = [r, n]),
              n
            );
          };
          var r = e.RTCPeerConnection.prototype.addStream;
          e.RTCPeerConnection.prototype.addStream = function (e) {
            var t = this;
            (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
              e.getTracks().forEach(function (e) {
                if (
                  t.getSenders().find(function (t) {
                    return t.track === e;
                  })
                )
                  throw new DOMException(
                    "Track already exists.",
                    "InvalidAccessError"
                  );
              });
            var n = this.getSenders();
            r.apply(this, arguments);
            var o = this.getSenders().filter(function (e) {
              return -1 === n.indexOf(e);
            });
            this._shimmedLocalStreams[e.id] = [e].concat(o);
          };
          var n = e.RTCPeerConnection.prototype.removeStream;
          e.RTCPeerConnection.prototype.removeStream = function (e) {
            return (
              (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
              delete this._shimmedLocalStreams[e.id],
              n.apply(this, arguments)
            );
          };
          var o = e.RTCPeerConnection.prototype.removeTrack;
          e.RTCPeerConnection.prototype.removeTrack = function (e) {
            var t = this;
            return (
              (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
              e &&
                Object.keys(this._shimmedLocalStreams).forEach(function (r) {
                  var n = t._shimmedLocalStreams[r].indexOf(e);
                  -1 !== n && t._shimmedLocalStreams[r].splice(n, 1),
                    1 === t._shimmedLocalStreams[r].length &&
                      delete t._shimmedLocalStreams[r];
                }),
              o.apply(this, arguments)
            );
          };
        }
        function N(e, t) {
          if (e.RTCPeerConnection) {
            if (e.RTCPeerConnection.prototype.addTrack && t.version >= 65)
              return j(e);
            var r = e.RTCPeerConnection.prototype.getLocalStreams;
            e.RTCPeerConnection.prototype.getLocalStreams = function () {
              var e = this,
                t = r.apply(this);
              return (
                (this._reverseStreams = this._reverseStreams || {}),
                t.map(function (t) {
                  return e._reverseStreams[t.id];
                })
              );
            };
            var n = e.RTCPeerConnection.prototype.addStream;
            e.RTCPeerConnection.prototype.addStream = function (t) {
              var r = this;
              if (
                ((this._streams = this._streams || {}),
                (this._reverseStreams = this._reverseStreams || {}),
                t.getTracks().forEach(function (e) {
                  if (
                    r.getSenders().find(function (t) {
                      return t.track === e;
                    })
                  )
                    throw new DOMException(
                      "Track already exists.",
                      "InvalidAccessError"
                    );
                }),
                !this._reverseStreams[t.id])
              ) {
                var o = new e.MediaStream(t.getTracks());
                (this._streams[t.id] = o),
                  (this._reverseStreams[o.id] = t),
                  (t = o);
              }
              n.apply(this, [t]);
            };
            var o = e.RTCPeerConnection.prototype.removeStream;
            (e.RTCPeerConnection.prototype.removeStream = function (e) {
              (this._streams = this._streams || {}),
                (this._reverseStreams = this._reverseStreams || {}),
                o.apply(this, [this._streams[e.id] || e]),
                delete this._reverseStreams[
                  this._streams[e.id] ? this._streams[e.id].id : e.id
                ],
                delete this._streams[e.id];
            }),
              (e.RTCPeerConnection.prototype.addTrack = function (t, r) {
                var n = this;
                if ("closed" === this.signalingState)
                  throw new DOMException(
                    "The RTCPeerConnection's signalingState is 'closed'.",
                    "InvalidStateError"
                  );
                var o = [].slice.call(arguments, 1);
                if (
                  1 !== o.length ||
                  !o[0].getTracks().find(function (e) {
                    return e === t;
                  })
                )
                  throw new DOMException(
                    "The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.",
                    "NotSupportedError"
                  );
                var a = this.getSenders().find(function (e) {
                  return e.track === t;
                });
                if (a)
                  throw new DOMException(
                    "Track already exists.",
                    "InvalidAccessError"
                  );
                (this._streams = this._streams || {}),
                  (this._reverseStreams = this._reverseStreams || {});
                var i = this._streams[r.id];
                if (i)
                  i.addTrack(t),
                    Promise.resolve().then(function () {
                      n.dispatchEvent(new Event("negotiationneeded"));
                    });
                else {
                  var s = new e.MediaStream([t]);
                  (this._streams[r.id] = s),
                    (this._reverseStreams[s.id] = r),
                    this.addStream(s);
                }
                return this.getSenders().find(function (e) {
                  return e.track === t;
                });
              }),
              ["createOffer", "createAnswer"].forEach(function (t) {
                var r = e.RTCPeerConnection.prototype[t],
                  n = (0, c.Z)({}, t, function () {
                    var e = this,
                      t = arguments,
                      n =
                        arguments.length && "function" === typeof arguments[0];
                    return n
                      ? r.apply(this, [
                          function (r) {
                            var n = s(e, r);
                            t[0].apply(null, [n]);
                          },
                          function (e) {
                            t[1] && t[1].apply(null, e);
                          },
                          arguments[2],
                        ])
                      : r.apply(this, arguments).then(function (t) {
                          return s(e, t);
                        });
                  });
                e.RTCPeerConnection.prototype[t] = n[t];
              });
            var a = e.RTCPeerConnection.prototype.setLocalDescription;
            e.RTCPeerConnection.prototype.setLocalDescription = function () {
              return arguments.length && arguments[0].type
                ? ((arguments[0] = l(this, arguments[0])),
                  a.apply(this, arguments))
                : a.apply(this, arguments);
            };
            var i = Object.getOwnPropertyDescriptor(
              e.RTCPeerConnection.prototype,
              "localDescription"
            );
            Object.defineProperty(
              e.RTCPeerConnection.prototype,
              "localDescription",
              {
                get: function () {
                  var e = i.get.apply(this);
                  return "" === e.type ? e : s(this, e);
                },
              }
            ),
              (e.RTCPeerConnection.prototype.removeTrack = function (e) {
                var t,
                  r = this;
                if ("closed" === this.signalingState)
                  throw new DOMException(
                    "The RTCPeerConnection's signalingState is 'closed'.",
                    "InvalidStateError"
                  );
                if (!e._pc)
                  throw new DOMException(
                    "Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.",
                    "TypeError"
                  );
                if (!(e._pc === this))
                  throw new DOMException(
                    "Sender was not created by this connection.",
                    "InvalidAccessError"
                  );
                (this._streams = this._streams || {}),
                  Object.keys(this._streams).forEach(function (n) {
                    r._streams[n].getTracks().find(function (t) {
                      return e.track === t;
                    }) && (t = r._streams[n]);
                  }),
                  t &&
                    (1 === t.getTracks().length
                      ? this.removeStream(this._reverseStreams[t.id])
                      : t.removeTrack(e.track),
                    this.dispatchEvent(new Event("negotiationneeded")));
              });
          }
          function s(e, t) {
            var r = t.sdp;
            return (
              Object.keys(e._reverseStreams || []).forEach(function (t) {
                var n = e._reverseStreams[t],
                  o = e._streams[n.id];
                r = r.replace(new RegExp(o.id, "g"), n.id);
              }),
              new RTCSessionDescription({ type: t.type, sdp: r })
            );
          }
          function l(e, t) {
            var r = t.sdp;
            return (
              Object.keys(e._reverseStreams || []).forEach(function (t) {
                var n = e._reverseStreams[t],
                  o = e._streams[n.id];
                r = r.replace(new RegExp(n.id, "g"), o.id);
              }),
              new RTCSessionDescription({ type: t.type, sdp: r })
            );
          }
        }
        function O(e, t) {
          !e.RTCPeerConnection &&
            e.webkitRTCPeerConnection &&
            (e.RTCPeerConnection = e.webkitRTCPeerConnection),
            e.RTCPeerConnection &&
              t.version < 53 &&
              [
                "setLocalDescription",
                "setRemoteDescription",
                "addIceCandidate",
              ].forEach(function (t) {
                var r = e.RTCPeerConnection.prototype[t],
                  n = (0, c.Z)({}, t, function () {
                    return (
                      (arguments[0] = new (
                        "addIceCandidate" === t
                          ? e.RTCIceCandidate
                          : e.RTCSessionDescription
                      )(arguments[0])),
                      r.apply(this, arguments)
                    );
                  });
                e.RTCPeerConnection.prototype[t] = n[t];
              });
        }
        function _(e, t) {
          f(e, "negotiationneeded", function (e) {
            var r = e.target;
            if (
              !(
                t.version < 72 ||
                (r.getConfiguration &&
                  "plan-b" === r.getConfiguration().sdpSemantics)
              ) ||
              "stable" === r.signalingState
            )
              return e;
          });
        }
        var M = r(8688),
          L = r.n(M);
        function D(e) {
          var t = e && e.navigator,
            r = t.mediaDevices.getUserMedia.bind(t.mediaDevices);
          t.mediaDevices.getUserMedia = function (e) {
            return r(e).catch(function (e) {
              return Promise.reject(
                (function (e) {
                  return {
                    name:
                      { PermissionDeniedError: "NotAllowedError" }[e.name] ||
                      e.name,
                    message: e.message,
                    constraint: e.constraint,
                    toString: function () {
                      return this.name;
                    },
                  };
                })(e)
              );
            });
          };
        }
        function I(e) {
          "getDisplayMedia" in e.navigator &&
            e.navigator.mediaDevices &&
            ((e.navigator.mediaDevices &&
              "getDisplayMedia" in e.navigator.mediaDevices) ||
              (e.navigator.mediaDevices.getDisplayMedia =
                e.navigator.getDisplayMedia.bind(e.navigator)));
        }
        function A(e, t) {
          if (
            e.RTCIceGatherer &&
            (e.RTCIceCandidate ||
              (e.RTCIceCandidate = function (e) {
                return e;
              }),
            e.RTCSessionDescription ||
              (e.RTCSessionDescription = function (e) {
                return e;
              }),
            t.version < 15025)
          ) {
            var r = Object.getOwnPropertyDescriptor(
              e.MediaStreamTrack.prototype,
              "enabled"
            );
            Object.defineProperty(e.MediaStreamTrack.prototype, "enabled", {
              set: function (e) {
                r.set.call(this, e);
                var t = new Event("enabled");
                (t.enabled = e), this.dispatchEvent(t);
              },
            });
          }
          e.RTCRtpSender &&
            !("dtmf" in e.RTCRtpSender.prototype) &&
            Object.defineProperty(e.RTCRtpSender.prototype, "dtmf", {
              get: function () {
                return (
                  void 0 === this._dtmf &&
                    ("audio" === this.track.kind
                      ? (this._dtmf = new e.RTCDtmfSender(this))
                      : "video" === this.track.kind && (this._dtmf = null)),
                  this._dtmf
                );
              },
            }),
            e.RTCDtmfSender &&
              !e.RTCDTMFSender &&
              (e.RTCDTMFSender = e.RTCDtmfSender);
          var n = L()(e, t.version);
          (e.RTCPeerConnection = function (e) {
            return (
              e &&
                e.iceServers &&
                ((e.iceServers = (function (e, t) {
                  var r = !1;
                  return (e = JSON.parse(JSON.stringify(e))).filter(function (
                    e
                  ) {
                    if (e && (e.urls || e.url)) {
                      var t = e.urls || e.url;
                      e.url &&
                        !e.urls &&
                        v("RTCIceServer.url", "RTCIceServer.urls");
                      var n = "string" === typeof t;
                      return (
                        n && (t = [t]),
                        (t = t.filter(function (e) {
                          if (0 === e.indexOf("stun:")) return !1;
                          var t =
                            e.startsWith("turn") &&
                            !e.startsWith("turn:[") &&
                            e.includes("transport=udp");
                          return t && !r ? ((r = !0), !0) : t && !r;
                        })),
                        delete e.url,
                        (e.urls = n ? t[0] : t),
                        !!t.length
                      );
                    }
                  });
                })(e.iceServers, t.version)),
                h("ICE servers after filtering:", e.iceServers)),
              new n(e)
            );
          }),
            (e.RTCPeerConnection.prototype = n.prototype);
        }
        function U(e) {
          e.RTCRtpSender &&
            !("replaceTrack" in e.RTCRtpSender.prototype) &&
            (e.RTCRtpSender.prototype.replaceTrack =
              e.RTCRtpSender.prototype.setTrack);
        }
        function z(e, t) {
          var r = e && e.navigator,
            n = e && e.MediaStreamTrack;
          if (
            ((r.getUserMedia = function (e, t, n) {
              v(
                "navigator.getUserMedia",
                "navigator.mediaDevices.getUserMedia"
              ),
                r.mediaDevices.getUserMedia(e).then(t, n);
            }),
            !(
              t.version > 55 &&
              "autoGainControl" in r.mediaDevices.getSupportedConstraints()
            ))
          ) {
            var o = function (e, t, r) {
                t in e && !(r in e) && ((e[r] = e[t]), delete e[t]);
              },
              a = r.mediaDevices.getUserMedia.bind(r.mediaDevices);
            if (
              ((r.mediaDevices.getUserMedia = function (e) {
                return (
                  "object" === typeof e &&
                    "object" === typeof e.audio &&
                    ((e = JSON.parse(JSON.stringify(e))),
                    o(e.audio, "autoGainControl", "mozAutoGainControl"),
                    o(e.audio, "noiseSuppression", "mozNoiseSuppression")),
                  a(e)
                );
              }),
              n && n.prototype.getSettings)
            ) {
              var i = n.prototype.getSettings;
              n.prototype.getSettings = function () {
                var e = i.apply(this, arguments);
                return (
                  o(e, "mozAutoGainControl", "autoGainControl"),
                  o(e, "mozNoiseSuppression", "noiseSuppression"),
                  e
                );
              };
            }
            if (n && n.prototype.applyConstraints) {
              var s = n.prototype.applyConstraints;
              n.prototype.applyConstraints = function (e) {
                return (
                  "audio" === this.kind &&
                    "object" === typeof e &&
                    ((e = JSON.parse(JSON.stringify(e))),
                    o(e, "autoGainControl", "mozAutoGainControl"),
                    o(e, "noiseSuppression", "mozNoiseSuppression")),
                  s.apply(this, [e])
                );
              };
            }
          }
        }
        function F(e, t) {
          (e.navigator.mediaDevices &&
            "getDisplayMedia" in e.navigator.mediaDevices) ||
            (e.navigator.mediaDevices &&
              (e.navigator.mediaDevices.getDisplayMedia = function (r) {
                if (!r || !r.video) {
                  var n = new DOMException(
                    "getDisplayMedia without video constraints is undefined"
                  );
                  return (
                    (n.name = "NotFoundError"), (n.code = 8), Promise.reject(n)
                  );
                }
                return (
                  !0 === r.video
                    ? (r.video = { mediaSource: t })
                    : (r.video.mediaSource = t),
                  e.navigator.mediaDevices.getUserMedia(r)
                );
              }));
        }
        function K(e) {
          "object" === typeof e &&
            e.RTCTrackEvent &&
            "receiver" in e.RTCTrackEvent.prototype &&
            !("transceiver" in e.RTCTrackEvent.prototype) &&
            Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
              get: function () {
                return { receiver: this.receiver };
              },
            });
        }
        function V(e, t) {
          if (
            "object" === typeof e &&
            (e.RTCPeerConnection || e.mozRTCPeerConnection)
          ) {
            !e.RTCPeerConnection &&
              e.mozRTCPeerConnection &&
              (e.RTCPeerConnection = e.mozRTCPeerConnection),
              t.version < 53 &&
                [
                  "setLocalDescription",
                  "setRemoteDescription",
                  "addIceCandidate",
                ].forEach(function (t) {
                  var r = e.RTCPeerConnection.prototype[t],
                    n = (0, c.Z)({}, t, function () {
                      return (
                        (arguments[0] = new (
                          "addIceCandidate" === t
                            ? e.RTCIceCandidate
                            : e.RTCSessionDescription
                        )(arguments[0])),
                        r.apply(this, arguments)
                      );
                    });
                  e.RTCPeerConnection.prototype[t] = n[t];
                });
            var r = {
                inboundrtp: "inbound-rtp",
                outboundrtp: "outbound-rtp",
                candidatepair: "candidate-pair",
                localcandidate: "local-candidate",
                remotecandidate: "remote-candidate",
              },
              n = e.RTCPeerConnection.prototype.getStats;
            e.RTCPeerConnection.prototype.getStats = function () {
              var e = Array.prototype.slice.call(arguments),
                o = e[0],
                a = e[1],
                i = e[2];
              return n
                .apply(this, [o || null])
                .then(function (e) {
                  if (t.version < 53 && !a)
                    try {
                      e.forEach(function (e) {
                        e.type = r[e.type] || e.type;
                      });
                    } catch (n) {
                      if ("TypeError" !== n.name) throw n;
                      e.forEach(function (t, n) {
                        e.set(
                          n,
                          Object.assign({}, t, { type: r[t.type] || t.type })
                        );
                      });
                    }
                  return e;
                })
                .then(a, i);
            };
          }
        }
        function J(e) {
          if (
            "object" === typeof e &&
            e.RTCPeerConnection &&
            e.RTCRtpSender &&
            (!e.RTCRtpSender || !("getStats" in e.RTCRtpSender.prototype))
          ) {
            var t = e.RTCPeerConnection.prototype.getSenders;
            t &&
              (e.RTCPeerConnection.prototype.getSenders = function () {
                var e = this,
                  r = t.apply(this, []);
                return (
                  r.forEach(function (t) {
                    return (t._pc = e);
                  }),
                  r
                );
              });
            var r = e.RTCPeerConnection.prototype.addTrack;
            r &&
              (e.RTCPeerConnection.prototype.addTrack = function () {
                var e = r.apply(this, arguments);
                return (e._pc = this), e;
              }),
              (e.RTCRtpSender.prototype.getStats = function () {
                return this.track
                  ? this._pc.getStats(this.track)
                  : Promise.resolve(new Map());
              });
          }
        }
        function H(e) {
          if (
            "object" === typeof e &&
            e.RTCPeerConnection &&
            e.RTCRtpSender &&
            (!e.RTCRtpSender || !("getStats" in e.RTCRtpReceiver.prototype))
          ) {
            var t = e.RTCPeerConnection.prototype.getReceivers;
            t &&
              (e.RTCPeerConnection.prototype.getReceivers = function () {
                var e = this,
                  r = t.apply(this, []);
                return (
                  r.forEach(function (t) {
                    return (t._pc = e);
                  }),
                  r
                );
              }),
              f(e, "track", function (e) {
                return (e.receiver._pc = e.srcElement), e;
              }),
              (e.RTCRtpReceiver.prototype.getStats = function () {
                return this._pc.getStats(this.track);
              });
          }
        }
        function W(e) {
          e.RTCPeerConnection &&
            !("removeStream" in e.RTCPeerConnection.prototype) &&
            (e.RTCPeerConnection.prototype.removeStream = function (e) {
              var t = this;
              v("removeStream", "removeTrack"),
                this.getSenders().forEach(function (r) {
                  r.track &&
                    e.getTracks().includes(r.track) &&
                    t.removeTrack(r);
                });
            });
        }
        function G(e) {
          e.DataChannel &&
            !e.RTCDataChannel &&
            (e.RTCDataChannel = e.DataChannel);
        }
        function Q(e) {
          if ("object" === typeof e && e.RTCPeerConnection) {
            var t = e.RTCPeerConnection.prototype.addTransceiver;
            t &&
              (e.RTCPeerConnection.prototype.addTransceiver = function () {
                this.setParametersPromises = [];
                var e = arguments[1],
                  r = e && "sendEncodings" in e;
                r &&
                  e.sendEncodings.forEach(function (e) {
                    if ("rid" in e) {
                      if (!/^[a-z0-9]{0,16}$/i.test(e.rid))
                        throw new TypeError("Invalid RID value provided.");
                    }
                    if (
                      "scaleResolutionDownBy" in e &&
                      !(parseFloat(e.scaleResolutionDownBy) >= 1)
                    )
                      throw new RangeError(
                        "scale_resolution_down_by must be >= 1.0"
                      );
                    if (
                      "maxFramerate" in e &&
                      !(parseFloat(e.maxFramerate) >= 0)
                    )
                      throw new RangeError("max_framerate must be >= 0.0");
                  });
                var n = t.apply(this, arguments);
                if (r) {
                  var o = n.sender,
                    a = o.getParameters();
                  (!("encodings" in a) ||
                    (1 === a.encodings.length &&
                      0 === Object.keys(a.encodings[0]).length)) &&
                    ((a.encodings = e.sendEncodings),
                    (o.sendEncodings = e.sendEncodings),
                    this.setParametersPromises.push(
                      o
                        .setParameters(a)
                        .then(function () {
                          delete o.sendEncodings;
                        })
                        .catch(function () {
                          delete o.sendEncodings;
                        })
                    ));
                }
                return n;
              });
          }
        }
        function X(e) {
          if ("object" === typeof e && e.RTCRtpSender) {
            var t = e.RTCRtpSender.prototype.getParameters;
            t &&
              (e.RTCRtpSender.prototype.getParameters = function () {
                var e = t.apply(this, arguments);
                return (
                  "encodings" in e ||
                    (e.encodings = [].concat(this.sendEncodings || [{}])),
                  e
                );
              });
          }
        }
        function Y(e) {
          if ("object" === typeof e && e.RTCPeerConnection) {
            var t = e.RTCPeerConnection.prototype.createOffer;
            e.RTCPeerConnection.prototype.createOffer = function () {
              var e = arguments,
                r = this;
              return this.setParametersPromises &&
                this.setParametersPromises.length
                ? Promise.all(this.setParametersPromises)
                    .then(function () {
                      return t.apply(r, e);
                    })
                    .finally(function () {
                      r.setParametersPromises = [];
                    })
                : t.apply(this, arguments);
            };
          }
        }
        function q(e) {
          if ("object" === typeof e && e.RTCPeerConnection) {
            var t = e.RTCPeerConnection.prototype.createAnswer;
            e.RTCPeerConnection.prototype.createAnswer = function () {
              var e = arguments,
                r = this;
              return this.setParametersPromises &&
                this.setParametersPromises.length
                ? Promise.all(this.setParametersPromises)
                    .then(function () {
                      return t.apply(r, e);
                    })
                    .finally(function () {
                      r.setParametersPromises = [];
                    })
                : t.apply(this, arguments);
            };
          }
        }
        function $(e) {
          if ("object" === typeof e && e.RTCPeerConnection) {
            if (
              ("getLocalStreams" in e.RTCPeerConnection.prototype ||
                (e.RTCPeerConnection.prototype.getLocalStreams = function () {
                  return (
                    this._localStreams || (this._localStreams = []),
                    this._localStreams
                  );
                }),
              !("addStream" in e.RTCPeerConnection.prototype))
            ) {
              var t = e.RTCPeerConnection.prototype.addTrack;
              (e.RTCPeerConnection.prototype.addStream = function (e) {
                var r = this;
                this._localStreams || (this._localStreams = []),
                  this._localStreams.includes(e) || this._localStreams.push(e),
                  e.getAudioTracks().forEach(function (n) {
                    return t.call(r, n, e);
                  }),
                  e.getVideoTracks().forEach(function (n) {
                    return t.call(r, n, e);
                  });
              }),
                (e.RTCPeerConnection.prototype.addTrack = function (e) {
                  for (
                    var r = this,
                      n = arguments.length,
                      o = new Array(n > 1 ? n - 1 : 0),
                      a = 1;
                    a < n;
                    a++
                  )
                    o[a - 1] = arguments[a];
                  return (
                    o &&
                      o.forEach(function (e) {
                        r._localStreams
                          ? r._localStreams.includes(e) ||
                            r._localStreams.push(e)
                          : (r._localStreams = [e]);
                      }),
                    t.apply(this, arguments)
                  );
                });
            }
            "removeStream" in e.RTCPeerConnection.prototype ||
              (e.RTCPeerConnection.prototype.removeStream = function (e) {
                var t = this;
                this._localStreams || (this._localStreams = []);
                var r = this._localStreams.indexOf(e);
                if (-1 !== r) {
                  this._localStreams.splice(r, 1);
                  var n = e.getTracks();
                  this.getSenders().forEach(function (e) {
                    n.includes(e.track) && t.removeTrack(e);
                  });
                }
              });
          }
        }
        function Z(e) {
          if (
            "object" === typeof e &&
            e.RTCPeerConnection &&
            ("getRemoteStreams" in e.RTCPeerConnection.prototype ||
              (e.RTCPeerConnection.prototype.getRemoteStreams = function () {
                return this._remoteStreams ? this._remoteStreams : [];
              }),
            !("onaddstream" in e.RTCPeerConnection.prototype))
          ) {
            Object.defineProperty(
              e.RTCPeerConnection.prototype,
              "onaddstream",
              {
                get: function () {
                  return this._onaddstream;
                },
                set: function (e) {
                  var t = this;
                  this._onaddstream &&
                    (this.removeEventListener("addstream", this._onaddstream),
                    this.removeEventListener("track", this._onaddstreampoly)),
                    this.addEventListener("addstream", (this._onaddstream = e)),
                    this.addEventListener(
                      "track",
                      (this._onaddstreampoly = function (e) {
                        e.streams.forEach(function (e) {
                          if (
                            (t._remoteStreams || (t._remoteStreams = []),
                            !t._remoteStreams.includes(e))
                          ) {
                            t._remoteStreams.push(e);
                            var r = new Event("addstream");
                            (r.stream = e), t.dispatchEvent(r);
                          }
                        });
                      })
                    );
                },
              }
            );
            var t = e.RTCPeerConnection.prototype.setRemoteDescription;
            e.RTCPeerConnection.prototype.setRemoteDescription = function () {
              var e = this;
              return (
                this._onaddstreampoly ||
                  this.addEventListener(
                    "track",
                    (this._onaddstreampoly = function (t) {
                      t.streams.forEach(function (t) {
                        if (
                          (e._remoteStreams || (e._remoteStreams = []),
                          !(e._remoteStreams.indexOf(t) >= 0))
                        ) {
                          e._remoteStreams.push(t);
                          var r = new Event("addstream");
                          (r.stream = t), e.dispatchEvent(r);
                        }
                      });
                    })
                  ),
                t.apply(e, arguments)
              );
            };
          }
        }
        function ee(e) {
          if ("object" === typeof e && e.RTCPeerConnection) {
            var t = e.RTCPeerConnection.prototype,
              r = t.createOffer,
              n = t.createAnswer,
              o = t.setLocalDescription,
              a = t.setRemoteDescription,
              i = t.addIceCandidate;
            (t.createOffer = function (e, t) {
              var n = arguments.length >= 2 ? arguments[2] : arguments[0],
                o = r.apply(this, [n]);
              return t ? (o.then(e, t), Promise.resolve()) : o;
            }),
              (t.createAnswer = function (e, t) {
                var r = arguments.length >= 2 ? arguments[2] : arguments[0],
                  o = n.apply(this, [r]);
                return t ? (o.then(e, t), Promise.resolve()) : o;
              });
            var s = function (e, t, r) {
              var n = o.apply(this, [e]);
              return r ? (n.then(t, r), Promise.resolve()) : n;
            };
            (t.setLocalDescription = s),
              (s = function (e, t, r) {
                var n = a.apply(this, [e]);
                return r ? (n.then(t, r), Promise.resolve()) : n;
              }),
              (t.setRemoteDescription = s),
              (s = function (e, t, r) {
                var n = i.apply(this, [e]);
                return r ? (n.then(t, r), Promise.resolve()) : n;
              }),
              (t.addIceCandidate = s);
          }
        }
        function te(e) {
          var t = e && e.navigator;
          if (t.mediaDevices && t.mediaDevices.getUserMedia) {
            var r = t.mediaDevices,
              n = r.getUserMedia.bind(r);
            t.mediaDevices.getUserMedia = function (e) {
              return n(re(e));
            };
          }
          !t.getUserMedia &&
            t.mediaDevices &&
            t.mediaDevices.getUserMedia &&
            (t.getUserMedia = function (e, r, n) {
              t.mediaDevices.getUserMedia(e).then(r, n);
            }.bind(t));
        }
        function re(e) {
          return e && void 0 !== e.video
            ? Object.assign({}, e, { video: k(e.video) })
            : e;
        }
        function ne(e) {
          if (e.RTCPeerConnection) {
            var t = e.RTCPeerConnection;
            (e.RTCPeerConnection = function (e, r) {
              if (e && e.iceServers) {
                for (var n = [], o = 0; o < e.iceServers.length; o++) {
                  var a = e.iceServers[o];
                  !a.hasOwnProperty("urls") && a.hasOwnProperty("url")
                    ? (v("RTCIceServer.url", "RTCIceServer.urls"),
                      ((a = JSON.parse(JSON.stringify(a))).urls = a.url),
                      delete a.url,
                      n.push(a))
                    : n.push(e.iceServers[o]);
                }
                e.iceServers = n;
              }
              return new t(e, r);
            }),
              (e.RTCPeerConnection.prototype = t.prototype),
              "generateCertificate" in t &&
                Object.defineProperty(
                  e.RTCPeerConnection,
                  "generateCertificate",
                  {
                    get: function () {
                      return t.generateCertificate;
                    },
                  }
                );
          }
        }
        function oe(e) {
          "object" === typeof e &&
            e.RTCTrackEvent &&
            "receiver" in e.RTCTrackEvent.prototype &&
            !("transceiver" in e.RTCTrackEvent.prototype) &&
            Object.defineProperty(e.RTCTrackEvent.prototype, "transceiver", {
              get: function () {
                return { receiver: this.receiver };
              },
            });
        }
        function ae(e) {
          var t = e.RTCPeerConnection.prototype.createOffer;
          e.RTCPeerConnection.prototype.createOffer = function (e) {
            if (e) {
              "undefined" !== typeof e.offerToReceiveAudio &&
                (e.offerToReceiveAudio = !!e.offerToReceiveAudio);
              var r = this.getTransceivers().find(function (e) {
                return "audio" === e.receiver.track.kind;
              });
              !1 === e.offerToReceiveAudio && r
                ? "sendrecv" === r.direction
                  ? r.setDirection
                    ? r.setDirection("sendonly")
                    : (r.direction = "sendonly")
                  : "recvonly" === r.direction &&
                    (r.setDirection
                      ? r.setDirection("inactive")
                      : (r.direction = "inactive"))
                : !0 !== e.offerToReceiveAudio ||
                  r ||
                  this.addTransceiver("audio"),
                "undefined" !== typeof e.offerToReceiveVideo &&
                  (e.offerToReceiveVideo = !!e.offerToReceiveVideo);
              var n = this.getTransceivers().find(function (e) {
                return "video" === e.receiver.track.kind;
              });
              !1 === e.offerToReceiveVideo && n
                ? "sendrecv" === n.direction
                  ? n.setDirection
                    ? n.setDirection("sendonly")
                    : (n.direction = "sendonly")
                  : "recvonly" === n.direction &&
                    (n.setDirection
                      ? n.setDirection("inactive")
                      : (n.direction = "inactive"))
                : !0 !== e.offerToReceiveVideo ||
                  n ||
                  this.addTransceiver("video");
            }
            return t.apply(this, arguments);
          };
        }
        function ie(e) {
          "object" !== typeof e ||
            e.AudioContext ||
            (e.AudioContext = e.webkitAudioContext);
        }
        var se = r(7800),
          ce = r.n(se);
        function le(e) {
          if (
            !(
              !e.RTCIceCandidate ||
              (e.RTCIceCandidate && "foundation" in e.RTCIceCandidate.prototype)
            )
          ) {
            var t = e.RTCIceCandidate;
            (e.RTCIceCandidate = function (e) {
              if (
                ("object" === typeof e &&
                  e.candidate &&
                  0 === e.candidate.indexOf("a=") &&
                  ((e = JSON.parse(JSON.stringify(e))).candidate =
                    e.candidate.substr(2)),
                e.candidate && e.candidate.length)
              ) {
                var r = new t(e),
                  n = ce().parseCandidate(e.candidate),
                  o = Object.assign(r, n);
                return (
                  (o.toJSON = function () {
                    return {
                      candidate: o.candidate,
                      sdpMid: o.sdpMid,
                      sdpMLineIndex: o.sdpMLineIndex,
                      usernameFragment: o.usernameFragment,
                    };
                  }),
                  o
                );
              }
              return new t(e);
            }),
              (e.RTCIceCandidate.prototype = t.prototype),
              f(e, "icecandidate", function (t) {
                return (
                  t.candidate &&
                    Object.defineProperty(t, "candidate", {
                      value: new e.RTCIceCandidate(t.candidate),
                      writable: "false",
                    }),
                  t
                );
              });
          }
        }
        function ue(e, t) {
          if (e.RTCPeerConnection) {
            "sctp" in e.RTCPeerConnection.prototype ||
              Object.defineProperty(e.RTCPeerConnection.prototype, "sctp", {
                get: function () {
                  return "undefined" === typeof this._sctp ? null : this._sctp;
                },
              });
            var r = function (e) {
                if (!e || !e.sdp) return !1;
                var t = ce().splitSections(e.sdp);
                return (
                  t.shift(),
                  t.some(function (e) {
                    var t = ce().parseMLine(e);
                    return (
                      t &&
                      "application" === t.kind &&
                      -1 !== t.protocol.indexOf("SCTP")
                    );
                  })
                );
              },
              n = function (e) {
                var t = e.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);
                if (null === t || t.length < 2) return -1;
                var r = parseInt(t[1], 10);
                return r !== r ? -1 : r;
              },
              o = function (e) {
                var r = 65536;
                return (
                  "firefox" === t.browser &&
                    (r =
                      t.version < 57
                        ? -1 === e
                          ? 16384
                          : 2147483637
                        : t.version < 60
                        ? 57 === t.version
                          ? 65535
                          : 65536
                        : 2147483637),
                  r
                );
              },
              a = function (e, r) {
                var n = 65536;
                "firefox" === t.browser && 57 === t.version && (n = 65535);
                var o = ce().matchPrefix(e.sdp, "a=max-message-size:");
                return (
                  o.length > 0
                    ? (n = parseInt(o[0].substr(19), 10))
                    : "firefox" === t.browser && -1 !== r && (n = 2147483637),
                  n
                );
              },
              i = e.RTCPeerConnection.prototype.setRemoteDescription;
            e.RTCPeerConnection.prototype.setRemoteDescription = function () {
              if (
                ((this._sctp = null), "chrome" === t.browser && t.version >= 76)
              ) {
                var e = this.getConfiguration(),
                  s = e.sdpSemantics;
                "plan-b" === s &&
                  Object.defineProperty(this, "sctp", {
                    get: function () {
                      return "undefined" === typeof this._sctp
                        ? null
                        : this._sctp;
                    },
                    enumerable: !0,
                    configurable: !0,
                  });
              }
              if (r(arguments[0])) {
                var c,
                  l = n(arguments[0]),
                  u = o(l),
                  d = a(arguments[0], l);
                c =
                  0 === u && 0 === d
                    ? Number.POSITIVE_INFINITY
                    : 0 === u || 0 === d
                    ? Math.max(u, d)
                    : Math.min(u, d);
                var f = {};
                Object.defineProperty(f, "maxMessageSize", {
                  get: function () {
                    return c;
                  },
                }),
                  (this._sctp = f);
              }
              return i.apply(this, arguments);
            };
          }
        }
        function de(e) {
          if (
            e.RTCPeerConnection &&
            "createDataChannel" in e.RTCPeerConnection.prototype
          ) {
            var t = e.RTCPeerConnection.prototype.createDataChannel;
            (e.RTCPeerConnection.prototype.createDataChannel = function () {
              var e = t.apply(this, arguments);
              return r(e, this), e;
            }),
              f(e, "datachannel", function (e) {
                return r(e.channel, e.target), e;
              });
          }
          function r(e, t) {
            var r = e.send;
            e.send = function () {
              var n = arguments[0],
                o = n.length || n.size || n.byteLength;
              if (
                "open" === e.readyState &&
                t.sctp &&
                o > t.sctp.maxMessageSize
              )
                throw new TypeError(
                  "Message too large (can send a maximum of " +
                    t.sctp.maxMessageSize +
                    " bytes)"
                );
              return r.apply(e, arguments);
            };
          }
        }
        function fe(e) {
          if (
            e.RTCPeerConnection &&
            !("connectionState" in e.RTCPeerConnection.prototype)
          ) {
            var t = e.RTCPeerConnection.prototype;
            Object.defineProperty(t, "connectionState", {
              get: function () {
                return (
                  { completed: "connected", checking: "connecting" }[
                    this.iceConnectionState
                  ] || this.iceConnectionState
                );
              },
              enumerable: !0,
              configurable: !0,
            }),
              Object.defineProperty(t, "onconnectionstatechange", {
                get: function () {
                  return this._onconnectionstatechange || null;
                },
                set: function (e) {
                  this._onconnectionstatechange &&
                    (this.removeEventListener(
                      "connectionstatechange",
                      this._onconnectionstatechange
                    ),
                    delete this._onconnectionstatechange),
                    e &&
                      this.addEventListener(
                        "connectionstatechange",
                        (this._onconnectionstatechange = e)
                      );
                },
                enumerable: !0,
                configurable: !0,
              }),
              ["setLocalDescription", "setRemoteDescription"].forEach(function (
                e
              ) {
                var r = t[e];
                t[e] = function () {
                  return (
                    this._connectionstatechangepoly ||
                      ((this._connectionstatechangepoly = function (e) {
                        var t = e.target;
                        if (t._lastConnectionState !== t.connectionState) {
                          t._lastConnectionState = t.connectionState;
                          var r = new Event("connectionstatechange", e);
                          t.dispatchEvent(r);
                        }
                        return e;
                      }),
                      this.addEventListener(
                        "iceconnectionstatechange",
                        this._connectionstatechangepoly
                      )),
                    r.apply(this, arguments)
                  );
                };
              });
          }
        }
        function pe(e, t) {
          if (
            e.RTCPeerConnection &&
            !("chrome" === t.browser && t.version >= 71) &&
            !("safari" === t.browser && t.version >= 605)
          ) {
            var r = e.RTCPeerConnection.prototype.setRemoteDescription;
            e.RTCPeerConnection.prototype.setRemoteDescription = function (t) {
              if (
                t &&
                t.sdp &&
                -1 !== t.sdp.indexOf("\na=extmap-allow-mixed")
              ) {
                var n = t.sdp
                  .split("\n")
                  .filter(function (e) {
                    return "a=extmap-allow-mixed" !== e.trim();
                  })
                  .join("\n");
                e.RTCSessionDescription && t instanceof e.RTCSessionDescription
                  ? (arguments[0] = new e.RTCSessionDescription({
                      type: t.type,
                      sdp: n,
                    }))
                  : (t.sdp = n);
              }
              return r.apply(this, arguments);
            };
          }
        }
        function me(e, t) {
          if (e.RTCPeerConnection && e.RTCPeerConnection.prototype) {
            var r = e.RTCPeerConnection.prototype.addIceCandidate;
            r &&
              0 !== r.length &&
              (e.RTCPeerConnection.prototype.addIceCandidate = function () {
                return arguments[0]
                  ? (("chrome" === t.browser && t.version < 78) ||
                      ("firefox" === t.browser && t.version < 68) ||
                      "safari" === t.browser) &&
                    arguments[0] &&
                    "" === arguments[0].candidate
                    ? Promise.resolve()
                    : r.apply(this, arguments)
                  : (arguments[1] && arguments[1].apply(null),
                    Promise.resolve());
              });
          }
        }
        var he = (function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = e.window,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {
                      shimChrome: !0,
                      shimFirefox: !0,
                      shimEdge: !0,
                      shimSafari: !0,
                    },
              c = h,
              l = g(t),
              u = {
                browserDetails: l,
                commonShim: s,
                extractVersion: d,
                disableLog: p,
                disableWarnings: m,
              };
            switch (l.browser) {
              case "chrome":
                if (!n || !O || !r.shimChrome)
                  return (
                    c("Chrome shim is not included in this adapter release."), u
                  );
                if (null === l.version)
                  return (
                    c("Chrome shim can not determine version, not shimming."), u
                  );
                c("adapter.js shimming chrome."),
                  (u.browserShim = n),
                  me(t, l),
                  x(t, l),
                  S(t),
                  O(t, l),
                  B(t),
                  N(t, l),
                  E(t),
                  T(t),
                  R(t),
                  _(t, l),
                  le(t),
                  fe(t),
                  ue(t, l),
                  de(t),
                  pe(t, l);
                break;
              case "firefox":
                if (!a || !V || !r.shimFirefox)
                  return (
                    c("Firefox shim is not included in this adapter release."),
                    u
                  );
                c("adapter.js shimming firefox."),
                  (u.browserShim = a),
                  me(t, l),
                  z(t, l),
                  V(t, l),
                  K(t),
                  W(t),
                  J(t),
                  H(t),
                  G(t),
                  Q(t),
                  X(t),
                  Y(t),
                  q(t),
                  le(t),
                  fe(t),
                  ue(t, l),
                  de(t);
                break;
              case "edge":
                if (!o || !A || !r.shimEdge)
                  return (
                    c("MS edge shim is not included in this adapter release."),
                    u
                  );
                c("adapter.js shimming edge."),
                  (u.browserShim = o),
                  D(t),
                  I(t),
                  A(t, l),
                  U(t),
                  ue(t, l),
                  de(t);
                break;
              case "safari":
                if (!i || !r.shimSafari)
                  return (
                    c("Safari shim is not included in this adapter release."), u
                  );
                c("adapter.js shimming safari."),
                  (u.browserShim = i),
                  me(t, l),
                  ne(t),
                  ae(t),
                  ee(t),
                  $(t),
                  Z(t),
                  oe(t),
                  te(t),
                  ie(t),
                  le(t),
                  ue(t, l),
                  de(t),
                  pe(t, l);
                break;
              default:
                c("Unsupported browser!");
            }
            return u;
          })({ window: "undefined" === typeof window ? void 0 : window }),
          ve = he;
      },
      3081: function (e, t, r) {
        "use strict";
        e.exports = r.p + "static/media/Sagor-Mahtab.9e3a9ac27f5441274c39.jpg";
      },
      4942: function (e, t, r) {
        "use strict";
        function n(e, t, r) {
          return (
            t in e
              ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[t] = r),
            e
          );
        }
        r.d(t, {
          Z: function () {
            return n;
          },
        });
      },
      8593: function (e) {
        "use strict";
        e.exports = JSON.parse(
          '{"_args":[["axios@0.21.4","D:\\\\Poralekha\\\\Codes\\\\Node\\\\js---Sagor-\\\\ECProject\\\\client"]],"_from":"axios@0.21.4","_id":"axios@0.21.4","_inBundle":false,"_integrity":"sha512-ut5vewkiu8jjGBdqpM44XxjuCjq9LAKeHVmoVfHVzy8eHgxxq8SbAVQNovDA8mVi05kP0Ea/n/UzcSHcTJQfNg==","_location":"/axios","_phantomChildren":{},"_requested":{"type":"version","registry":true,"raw":"axios@0.21.4","name":"axios","escapedName":"axios","rawSpec":"0.21.4","saveSpec":null,"fetchSpec":"0.21.4"},"_requiredBy":["/"],"_resolved":"https://registry.npmjs.org/axios/-/axios-0.21.4.tgz","_spec":"0.21.4","_where":"D:\\\\Poralekha\\\\Codes\\\\Node\\\\js---Sagor-\\\\ECProject\\\\client","author":{"name":"Matt Zabriskie"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"bugs":{"url":"https://github.com/axios/axios/issues"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}],"dependencies":{"follow-redirects":"^1.14.0"},"description":"Promise based HTTP client for the browser and node.js","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"homepage":"https://axios-http.com","jsdelivr":"dist/axios.min.js","keywords":["xhr","http","ajax","promise","node"],"license":"MIT","main":"index.js","name":"axios","repository":{"type":"git","url":"git+https://github.com/axios/axios.git"},"scripts":{"build":"NODE_ENV=production grunt build","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","examples":"node ./examples/server.js","fix":"eslint --fix lib/**/*.js","postversion":"git push && git push --tags","preversion":"npm test","start":"node ./sandbox/server.js","test":"grunt test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"},"typings":"./index.d.ts","unpkg":"dist/axios.min.js","version":"0.21.4"}'
        );
      },
    },
    t = {};
  function r(n) {
    var o = t[n];
    if (void 0 !== o) return o.exports;
    var a = (t[n] = { exports: {} });
    return e[n](a, a.exports, r), a.exports;
  }
  (r.n = function (e) {
    var t =
      e && e.__esModule
        ? function () {
            return e.default;
          }
        : function () {
            return e;
          };
    return r.d(t, { a: t }), t;
  }),
    (r.d = function (e, t) {
      for (var n in t)
        r.o(t, n) &&
          !r.o(e, n) &&
          Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
    }),
    (r.g = (function () {
      if ("object" === typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" === typeof window) return window;
      }
    })()),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.p = "/"),
    (function () {
      "use strict";
      var e,
        t = r(2791),
        n = r(4164);
      function o(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function a(e, t) {
        if (e) {
          if ("string" === typeof e) return o(e, t);
          var r = Object.prototype.toString.call(e).slice(8, -1);
          return (
            "Object" === r && e.constructor && (r = e.constructor.name),
            "Map" === r || "Set" === r
              ? Array.from(e)
              : "Arguments" === r ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
              ? o(e, t)
              : void 0
          );
        }
      }
      function i(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                o,
                a = [],
                i = !0,
                s = !1;
              try {
                for (
                  r = r.call(e);
                  !(i = (n = r.next()).done) &&
                  (a.push(n.value), !t || a.length !== t);
                  i = !0
                );
              } catch (c) {
                (s = !0), (o = c);
              } finally {
                try {
                  i || null == r.return || r.return();
                } finally {
                  if (s) throw o;
                }
              }
              return a;
            }
          })(e, t) ||
          a(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function s() {
        return (
          (s =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          s.apply(this, arguments)
        );
      }
      !(function (e) {
        (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
      })(e || (e = {}));
      var c = function (e) {
        return e;
      };
      var l = "beforeunload",
        u = "popstate";
      function d(e) {
        e.preventDefault(), (e.returnValue = "");
      }
      function f() {
        var e = [];
        return {
          get length() {
            return e.length;
          },
          push: function (t) {
            return (
              e.push(t),
              function () {
                e = e.filter(function (e) {
                  return e !== t;
                });
              }
            );
          },
          call: function (t) {
            e.forEach(function (e) {
              return e && e(t);
            });
          },
        };
      }
      function p() {
        return Math.random().toString(36).substr(2, 8);
      }
      function m(e) {
        var t = e.pathname,
          r = void 0 === t ? "/" : t,
          n = e.search,
          o = void 0 === n ? "" : n,
          a = e.hash,
          i = void 0 === a ? "" : a;
        return (
          o && "?" !== o && (r += "?" === o.charAt(0) ? o : "?" + o),
          i && "#" !== i && (r += "#" === i.charAt(0) ? i : "#" + i),
          r
        );
      }
      function h(e) {
        var t = {};
        if (e) {
          var r = e.indexOf("#");
          r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
          var n = e.indexOf("?");
          n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
            e && (t.pathname = e);
        }
        return t;
      }
      var v = (0, t.createContext)(null);
      var g = (0, t.createContext)(null);
      var y = (0, t.createContext)({ outlet: null, matches: [] });
      function k(e, t) {
        if (!e) throw new Error(t);
      }
      function b(e, t, r) {
        void 0 === r && (r = "/");
        var n = T(("string" === typeof t ? h(t) : t).pathname || "/", r);
        if (null == n) return null;
        var o = w(e);
        !(function (e) {
          e.sort(function (e, t) {
            return e.score !== t.score
              ? t.score - e.score
              : (function (e, t) {
                  var r =
                    e.length === t.length &&
                    e.slice(0, -1).every(function (e, r) {
                      return e === t[r];
                    });
                  return r ? e[e.length - 1] - t[t.length - 1] : 0;
                })(
                  e.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  }),
                  t.routesMeta.map(function (e) {
                    return e.childrenIndex;
                  })
                );
          });
        })(o);
        for (var a = null, i = 0; null == a && i < o.length; ++i)
          a = S(o[i], n);
        return a;
      }
      function w(e, t, r, n) {
        return (
          void 0 === t && (t = []),
          void 0 === r && (r = []),
          void 0 === n && (n = ""),
          e.forEach(function (e, o) {
            var a = {
              relativePath: e.path || "",
              caseSensitive: !0 === e.caseSensitive,
              childrenIndex: o,
              route: e,
            };
            a.relativePath.startsWith("/") &&
              (a.relativePath.startsWith(n) || k(!1),
              (a.relativePath = a.relativePath.slice(n.length)));
            var i = R([n, a.relativePath]),
              s = r.concat(a);
            e.children &&
              e.children.length > 0 &&
              (!0 === e.index && k(!1), w(e.children, t, s, i)),
              (null != e.path || e.index) &&
                t.push({ path: i, score: P(i, e.index), routesMeta: s });
          }),
          t
        );
      }
      var C = /^:\w+$/,
        x = function (e) {
          return "*" === e;
        };
      function P(e, t) {
        var r = e.split("/"),
          n = r.length;
        return (
          r.some(x) && (n += -2),
          t && (n += 2),
          r
            .filter(function (e) {
              return !x(e);
            })
            .reduce(function (e, t) {
              return e + (C.test(t) ? 3 : "" === t ? 1 : 10);
            }, n)
        );
      }
      function S(e, t) {
        for (
          var r = e.routesMeta, n = {}, o = "/", a = [], i = 0;
          i < r.length;
          ++i
        ) {
          var s = r[i],
            c = i === r.length - 1,
            l = "/" === o ? t : t.slice(o.length) || "/",
            u = B(
              { path: s.relativePath, caseSensitive: s.caseSensitive, end: c },
              l
            );
          if (!u) return null;
          Object.assign(n, u.params);
          var d = s.route;
          a.push({
            params: n,
            pathname: R([o, u.pathname]),
            pathnameBase: j(R([o, u.pathnameBase])),
            route: d,
          }),
            "/" !== u.pathnameBase && (o = R([o, u.pathnameBase]));
        }
        return a;
      }
      function B(e, t) {
        "string" === typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        var r = (function (e, t, r) {
            void 0 === t && (t = !1);
            void 0 === r && (r = !0);
            var n = [],
              o =
                "^" +
                e
                  .replace(/\/*\*?$/, "")
                  .replace(/^\/*/, "/")
                  .replace(/[\\.*+^$?{}|()[\]]/g, "\\$&")
                  .replace(/:(\w+)/g, function (e, t) {
                    return n.push(t), "([^\\/]+)";
                  });
            e.endsWith("*")
              ? (n.push("*"),
                (o += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : (o += r ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)");
            return [new RegExp(o, t ? void 0 : "i"), n];
          })(e.path, e.caseSensitive, e.end),
          n = i(r, 2),
          o = n[0],
          a = n[1],
          s = t.match(o);
        if (!s) return null;
        var c = s[0],
          l = c.replace(/(.)\/+$/, "$1"),
          u = s.slice(1);
        return {
          params: a.reduce(function (e, t, r) {
            if ("*" === t) {
              var n = u[r] || "";
              l = c.slice(0, c.length - n.length).replace(/(.)\/+$/, "$1");
            }
            return (
              (e[t] = (function (e, t) {
                try {
                  return decodeURIComponent(e);
                } catch (r) {
                  return e;
                }
              })(u[r] || "")),
              e
            );
          }, {}),
          pathname: c,
          pathnameBase: l,
          pattern: e,
        };
      }
      function E(e, t, r) {
        var n,
          o = "string" === typeof e ? h(e) : e,
          a = "" === e || "" === o.pathname ? "/" : o.pathname;
        if (null == a) n = r;
        else {
          var i = t.length - 1;
          if (a.startsWith("..")) {
            for (var s = a.split("/"); ".." === s[0]; ) s.shift(), (i -= 1);
            o.pathname = s.join("/");
          }
          n = i >= 0 ? t[i] : "/";
        }
        var c = (function (e, t) {
          void 0 === t && (t = "/");
          var r = "string" === typeof e ? h(e) : e,
            n = r.pathname,
            o = r.search,
            a = void 0 === o ? "" : o,
            i = r.hash,
            s = void 0 === i ? "" : i,
            c = n
              ? n.startsWith("/")
                ? n
                : (function (e, t) {
                    var r = t.replace(/\/+$/, "").split("/");
                    return (
                      e.split("/").forEach(function (e) {
                        ".." === e
                          ? r.length > 1 && r.pop()
                          : "." !== e && r.push(e);
                      }),
                      r.length > 1 ? r.join("/") : "/"
                    );
                  })(n, t)
              : t;
          return { pathname: c, search: N(a), hash: O(s) };
        })(o, n);
        return (
          a &&
            "/" !== a &&
            a.endsWith("/") &&
            !c.pathname.endsWith("/") &&
            (c.pathname += "/"),
          c
        );
      }
      function T(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        var r = e.charAt(t.length);
        return r && "/" !== r ? null : e.slice(t.length) || "/";
      }
      var R = function (e) {
          return e.join("/").replace(/\/\/+/g, "/");
        },
        j = function (e) {
          return e.replace(/\/+$/, "").replace(/^\/*/, "/");
        },
        N = function (e) {
          return e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : "";
        },
        O = function (e) {
          return e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "";
        };
      function _(e) {
        M() || k(!1);
        var r = (0, t.useContext)(v),
          n = r.basename,
          o = r.navigator,
          a = I(e),
          i = a.hash,
          s = a.pathname,
          c = a.search,
          l = s;
        if ("/" !== n) {
          var u = (function (e) {
              return "" === e || "" === e.pathname
                ? "/"
                : "string" === typeof e
                ? h(e).pathname
                : e.pathname;
            })(e),
            d = null != u && u.endsWith("/");
          l = "/" === s ? n + (d ? "/" : "") : R([n, s]);
        }
        return o.createHref({ pathname: l, search: c, hash: i });
      }
      function M() {
        return null != (0, t.useContext)(g);
      }
      function L() {
        return M() || k(!1), (0, t.useContext)(g).location;
      }
      function D() {
        M() || k(!1);
        var e = (0, t.useContext)(v),
          r = e.basename,
          n = e.navigator,
          o = (0, t.useContext)(y).matches,
          a = L().pathname,
          i = JSON.stringify(
            o.map(function (e) {
              return e.pathnameBase;
            })
          ),
          s = (0, t.useRef)(!1);
        (0, t.useEffect)(function () {
          s.current = !0;
        });
        var c = (0, t.useCallback)(
          function (e, t) {
            if ((void 0 === t && (t = {}), s.current))
              if ("number" !== typeof e) {
                var o = E(e, JSON.parse(i), a);
                "/" !== r && (o.pathname = R([r, o.pathname])),
                  (t.replace ? n.replace : n.push)(o, t.state);
              } else n.go(e);
          },
          [r, n, i, a]
        );
        return c;
      }
      function I(e) {
        var r = (0, t.useContext)(y).matches,
          n = L().pathname,
          o = JSON.stringify(
            r.map(function (e) {
              return e.pathnameBase;
            })
          );
        return (0, t.useMemo)(
          function () {
            return E(e, JSON.parse(o), n);
          },
          [e, o, n]
        );
      }
      function A(e, r) {
        return (
          void 0 === r && (r = []),
          null == e
            ? null
            : e.reduceRight(function (n, o, a) {
                return (0,
                t.createElement)(y.Provider, { children: void 0 !== o.route.element ? o.route.element : n, value: { outlet: n, matches: r.concat(e.slice(0, a + 1)) } });
              }, null)
        );
      }
      function U(e) {
        k(!1);
      }
      function z(r) {
        var n = r.basename,
          o = void 0 === n ? "/" : n,
          a = r.children,
          i = void 0 === a ? null : a,
          s = r.location,
          c = r.navigationType,
          l = void 0 === c ? e.Pop : c,
          u = r.navigator,
          d = r.static,
          f = void 0 !== d && d;
        M() && k(!1);
        var p = j(o),
          m = (0, t.useMemo)(
            function () {
              return { basename: p, navigator: u, static: f };
            },
            [p, u, f]
          );
        "string" === typeof s && (s = h(s));
        var y = s,
          b = y.pathname,
          w = void 0 === b ? "/" : b,
          C = y.search,
          x = void 0 === C ? "" : C,
          P = y.hash,
          S = void 0 === P ? "" : P,
          B = y.state,
          E = void 0 === B ? null : B,
          R = y.key,
          N = void 0 === R ? "default" : R,
          O = (0, t.useMemo)(
            function () {
              var e = T(w, p);
              return null == e
                ? null
                : { pathname: e, search: x, hash: S, state: E, key: N };
            },
            [p, w, x, S, E, N]
          );
        return null == O
          ? null
          : (0, t.createElement)(
              v.Provider,
              { value: m },
              (0, t.createElement)(g.Provider, {
                children: i,
                value: { location: O, navigationType: l },
              })
            );
      }
      function F(e) {
        var r = e.children,
          n = e.location;
        return (function (e, r) {
          M() || k(!1);
          var n,
            o = (0, t.useContext)(y).matches,
            a = o[o.length - 1],
            i = a ? a.params : {},
            s = (a && a.pathname, a ? a.pathnameBase : "/"),
            c = (a && a.route, L());
          if (r) {
            var l,
              u = "string" === typeof r ? h(r) : r;
            "/" === s ||
              (null == (l = u.pathname) ? void 0 : l.startsWith(s)) ||
              k(!1),
              (n = u);
          } else n = c;
          var d = n.pathname || "/",
            f = b(e, { pathname: "/" === s ? d : d.slice(s.length) || "/" });
          return A(
            f &&
              f.map(function (e) {
                return Object.assign({}, e, {
                  params: Object.assign({}, i, e.params),
                  pathname: R([s, e.pathname]),
                  pathnameBase:
                    "/" === e.pathnameBase ? s : R([s, e.pathnameBase]),
                });
              }),
            o
          );
        })(K(r), n);
      }
      function K(e) {
        var r = [];
        return (
          t.Children.forEach(e, function (e) {
            if ((0, t.isValidElement)(e))
              if (e.type !== t.Fragment) {
                e.type !== U && k(!1);
                var n = {
                  caseSensitive: e.props.caseSensitive,
                  element: e.props.element,
                  index: e.props.index,
                  path: e.props.path,
                };
                e.props.children && (n.children = K(e.props.children)),
                  r.push(n);
              } else r.push.apply(r, K(e.props.children));
          }),
          r
        );
      }
      function V(e, t, r, n, o, a, i) {
        try {
          var s = e[a](i),
            c = s.value;
        } catch (l) {
          return void r(l);
        }
        s.done ? t(c) : Promise.resolve(c).then(n, o);
      }
      function J(e) {
        return function () {
          var t = this,
            r = arguments;
          return new Promise(function (n, o) {
            var a = e.apply(t, r);
            function i(e) {
              V(a, n, o, i, s, "next", e);
            }
            function s(e) {
              V(a, n, o, i, s, "throw", e);
            }
            i(void 0);
          });
        };
      }
      var H = r(4942);
      function W(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function G(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? W(Object(r), !0).forEach(function (t) {
                (0, H.Z)(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : W(Object(r)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(r, t)
                );
              });
        }
        return e;
      }
      var Q = r(7757),
        X = r.n(Q);
      function Y(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = {},
          a = Object.keys(e);
        for (n = 0; n < a.length; n++)
          (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o;
      }
      function q(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = Y(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (n = 0; n < a.length; n++)
            (r = a[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) &&
                  (o[r] = e[r]));
        }
        return o;
      }
      var $ = r(1694),
        Z = r.n($),
        ee = r(184),
        te = ["xxl", "xl", "lg", "md", "sm", "xs"],
        re = t.createContext({ prefixes: {}, breakpoints: te });
      re.Consumer, re.Provider;
      function ne(e, r) {
        var n = (0, t.useContext)(re).prefixes;
        return e || n[r] || r;
      }
      function oe() {
        return (0, t.useContext)(re).breakpoints;
      }
      var ae = ["bsPrefix", "fluid", "as", "className"],
        ie = t.forwardRef(function (e, t) {
          var r = e.bsPrefix,
            n = e.fluid,
            o = e.as,
            a = void 0 === o ? "div" : o,
            i = e.className,
            s = q(e, ae),
            c = ne(r, "container"),
            l = "string" === typeof n ? "-".concat(n) : "-fluid";
          return (0,
          ee.jsx)(a, G(G({ ref: t }, s), {}, { className: Z()(i, n ? "".concat(c).concat(l) : c) }));
        });
      (ie.displayName = "Container"), (ie.defaultProps = { fluid: !1 });
      var se = ie,
        ce = ["bsPrefix", "className", "as"],
        le = t.forwardRef(function (e, t) {
          var r = e.bsPrefix,
            n = e.className,
            o = e.as,
            a = void 0 === o ? "div" : o,
            i = q(e, ce),
            s = ne(r, "row"),
            c = oe(),
            l = "".concat(s, "-cols"),
            u = [];
          return (
            c.forEach(function (e) {
              var t,
                r = i[e];
              delete i[e],
                (t = null != r && "object" === typeof r ? r.cols : r);
              var n = "xs" !== e ? "-".concat(e) : "";
              null != t && u.push("".concat(l).concat(n, "-").concat(t));
            }),
            (0, ee.jsx)(
              a,
              G(
                G({ ref: t }, i),
                {},
                { className: Z().apply(void 0, [n, s].concat(u)) }
              )
            )
          );
        });
      le.displayName = "Row";
      var ue = le,
        de = ["as", "bsPrefix", "className"],
        fe = ["className"];
      var pe = t.forwardRef(function (e, t) {
        var r = (function (e) {
            var t = e.as,
              r = e.bsPrefix,
              n = e.className,
              o = q(e, de);
            r = ne(r, "col");
            var a = oe(),
              i = [],
              s = [];
            return (
              a.forEach(function (e) {
                var t,
                  n,
                  a,
                  c = o[e];
                delete o[e],
                  "object" === typeof c && null != c
                    ? ((t = c.span), (n = c.offset), (a = c.order))
                    : (t = c);
                var l = "xs" !== e ? "-".concat(e) : "";
                t &&
                  i.push(
                    !0 === t
                      ? "".concat(r).concat(l)
                      : "".concat(r).concat(l, "-").concat(t)
                  ),
                  null != a && s.push("order".concat(l, "-").concat(a)),
                  null != n && s.push("offset".concat(l, "-").concat(n));
              }),
              [
                G(
                  G({}, o),
                  {},
                  { className: Z().apply(void 0, [n].concat(i, s)) }
                ),
                { as: t, bsPrefix: r, spans: i },
              ]
            );
          })(e),
          n = i(r, 2),
          o = n[0],
          a = o.className,
          s = q(o, fe),
          c = n[1],
          l = c.as,
          u = void 0 === l ? "div" : l,
          d = c.bsPrefix,
          f = c.spans;
        return (0,
        ee.jsx)(u, G(G({}, s), {}, { ref: t, className: Z()(a, !f.length && d) }));
      });
      pe.displayName = "Col";
      var me = pe,
        he = r(2007),
        ve = r.n(he),
        ge = ["as", "className", "type", "tooltip"],
        ye = { type: ve().string, tooltip: ve().bool, as: ve().elementType },
        ke = t.forwardRef(function (e, t) {
          var r = e.as,
            n = void 0 === r ? "div" : r,
            o = e.className,
            a = e.type,
            i = void 0 === a ? "valid" : a,
            s = e.tooltip,
            c = void 0 !== s && s,
            l = q(e, ge);
          return (0,
          ee.jsx)(n, G(G({}, l), {}, { ref: t, className: Z()(o, "".concat(i, "-").concat(c ? "tooltip" : "feedback")) }));
        });
      (ke.displayName = "Feedback"), (ke.propTypes = ye);
      var be = ke,
        we = t.createContext({}),
        Ce = [
          "id",
          "bsPrefix",
          "className",
          "type",
          "isValid",
          "isInvalid",
          "as",
        ],
        xe = t.forwardRef(function (e, r) {
          var n = e.id,
            o = e.bsPrefix,
            a = e.className,
            i = e.type,
            s = void 0 === i ? "checkbox" : i,
            c = e.isValid,
            l = void 0 !== c && c,
            u = e.isInvalid,
            d = void 0 !== u && u,
            f = e.as,
            p = void 0 === f ? "input" : f,
            m = q(e, Ce),
            h = (0, t.useContext)(we).controlId;
          return (
            (o = ne(o, "form-check-input")),
            (0, ee.jsx)(
              p,
              G(
                G({}, m),
                {},
                {
                  ref: r,
                  type: s,
                  id: n || h,
                  className: Z()(a, o, l && "is-valid", d && "is-invalid"),
                }
              )
            )
          );
        });
      xe.displayName = "FormCheckInput";
      var Pe = xe,
        Se = ["bsPrefix", "className", "htmlFor"],
        Be = t.forwardRef(function (e, r) {
          var n = e.bsPrefix,
            o = e.className,
            a = e.htmlFor,
            i = q(e, Se),
            s = (0, t.useContext)(we).controlId;
          return (
            (n = ne(n, "form-check-label")),
            (0, ee.jsx)(
              "label",
              G(G({}, i), {}, { ref: r, htmlFor: a || s, className: Z()(o, n) })
            )
          );
        });
      Be.displayName = "FormCheckLabel";
      var Ee = Be;
      var Te = [
          "id",
          "bsPrefix",
          "bsSwitchPrefix",
          "inline",
          "disabled",
          "isValid",
          "isInvalid",
          "feedbackTooltip",
          "feedback",
          "feedbackType",
          "className",
          "style",
          "title",
          "type",
          "label",
          "children",
          "as",
        ],
        Re = t.forwardRef(function (e, r) {
          var n = e.id,
            o = e.bsPrefix,
            a = e.bsSwitchPrefix,
            i = e.inline,
            s = void 0 !== i && i,
            c = e.disabled,
            l = void 0 !== c && c,
            u = e.isValid,
            d = void 0 !== u && u,
            f = e.isInvalid,
            p = void 0 !== f && f,
            m = e.feedbackTooltip,
            h = void 0 !== m && m,
            v = e.feedback,
            g = e.feedbackType,
            y = e.className,
            k = e.style,
            b = e.title,
            w = void 0 === b ? "" : b,
            C = e.type,
            x = void 0 === C ? "checkbox" : C,
            P = e.label,
            S = e.children,
            B = e.as,
            E = void 0 === B ? "input" : B,
            T = q(e, Te);
          (o = ne(o, "form-check")), (a = ne(a, "form-switch"));
          var R = (0, t.useContext)(we).controlId,
            j = (0, t.useMemo)(
              function () {
                return { controlId: n || R };
              },
              [R, n]
            ),
            N =
              (!S && null != P && !1 !== P) ||
              (function (e, r) {
                return t.Children.toArray(e).some(function (e) {
                  return t.isValidElement(e) && e.type === r;
                });
              })(S, Ee),
            O = (0, ee.jsx)(
              Pe,
              G(
                G({}, T),
                {},
                {
                  type: "switch" === x ? "checkbox" : x,
                  ref: r,
                  isValid: d,
                  isInvalid: p,
                  disabled: l,
                  as: E,
                }
              )
            );
          return (0,
          ee.jsx)(we.Provider, { value: j, children: (0, ee.jsx)("div", { style: k, className: Z()(y, N && o, s && "".concat(o, "-inline"), "switch" === x && a), children: S || (0, ee.jsxs)(ee.Fragment, { children: [O, N && (0, ee.jsx)(Ee, { title: w, children: P }), v && (0, ee.jsx)(be, { type: g, tooltip: h, children: v })] }) }) });
        });
      Re.displayName = "FormCheck";
      var je = Object.assign(Re, { Input: Pe, Label: Ee }),
        Ne = r(2391),
        Oe = r.n(Ne),
        _e = [
          "bsPrefix",
          "type",
          "size",
          "htmlSize",
          "id",
          "className",
          "isValid",
          "isInvalid",
          "plaintext",
          "readOnly",
          "as",
        ],
        Me = t.forwardRef(function (e, r) {
          var n,
            o,
            a = e.bsPrefix,
            i = e.type,
            s = e.size,
            c = e.htmlSize,
            l = e.id,
            u = e.className,
            d = e.isValid,
            f = void 0 !== d && d,
            p = e.isInvalid,
            m = void 0 !== p && p,
            h = e.plaintext,
            v = e.readOnly,
            g = e.as,
            y = void 0 === g ? "input" : g,
            k = q(e, _e),
            b = (0, t.useContext)(we).controlId;
          ((a = ne(a, "form-control")), h)
            ? (n = (0, H.Z)({}, "".concat(a, "-plaintext"), !0))
            : ((o = {}),
              (0, H.Z)(o, a, !0),
              (0, H.Z)(o, "".concat(a, "-").concat(s), s),
              (n = o));
          return (0,
          ee.jsx)(y, G(G({}, k), {}, { type: i, size: c, ref: r, readOnly: v, id: l || b, className: Z()(u, n, f && "is-valid", m && "is-invalid", "color" === i && "".concat(a, "-color")) }));
        });
      Me.displayName = "FormControl";
      var Le = Object.assign(Me, { Feedback: be }),
        De = /-(.)/g;
      var Ie = ["className", "bsPrefix", "as"],
        Ae = function (e) {
          return (
            e[0].toUpperCase() +
            ((t = e),
            t.replace(De, function (e, t) {
              return t.toUpperCase();
            })).slice(1)
          );
          var t;
        };
      function Ue(e) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = r.displayName,
          o = void 0 === n ? Ae(e) : n,
          a = r.Component,
          i = r.defaultProps,
          s = t.forwardRef(function (t, r) {
            var n = t.className,
              o = t.bsPrefix,
              i = t.as,
              s = void 0 === i ? a || "div" : i,
              c = q(t, Ie),
              l = ne(o, e);
            return (0, ee.jsx)(s, G({ ref: r, className: Z()(n, l) }, c));
          });
        return (s.defaultProps = i), (s.displayName = o), s;
      }
      var ze = Ue("form-floating"),
        Fe = ["controlId", "as"],
        Ke = t.forwardRef(function (e, r) {
          var n = e.controlId,
            o = e.as,
            a = void 0 === o ? "div" : o,
            i = q(e, Fe),
            s = (0, t.useMemo)(
              function () {
                return { controlId: n };
              },
              [n]
            );
          return (0,
          ee.jsx)(we.Provider, { value: s, children: (0, ee.jsx)(a, G(G({}, i), {}, { ref: r })) });
        });
      Ke.displayName = "FormGroup";
      var Ve = Ke,
        Je = [
          "as",
          "bsPrefix",
          "column",
          "visuallyHidden",
          "className",
          "htmlFor",
        ],
        He = t.forwardRef(function (e, r) {
          var n = e.as,
            o = void 0 === n ? "label" : n,
            a = e.bsPrefix,
            i = e.column,
            s = e.visuallyHidden,
            c = e.className,
            l = e.htmlFor,
            u = q(e, Je),
            d = (0, t.useContext)(we).controlId;
          a = ne(a, "form-label");
          var f = "col-form-label";
          "string" === typeof i &&
            (f = "".concat(f, " ").concat(f, "-").concat(i));
          var p = Z()(c, a, s && "visually-hidden", i && f);
          return (
            (l = l || d),
            i
              ? (0, ee.jsx)(
                  me,
                  G({ ref: r, as: "label", className: p, htmlFor: l }, u)
                )
              : (0, ee.jsx)(o, G({ ref: r, className: p, htmlFor: l }, u))
          );
        });
      (He.displayName = "FormLabel"),
        (He.defaultProps = { column: !1, visuallyHidden: !1 });
      var We = He,
        Ge = ["bsPrefix", "className", "id"],
        Qe = t.forwardRef(function (e, r) {
          var n = e.bsPrefix,
            o = e.className,
            a = e.id,
            i = q(e, Ge),
            s = (0, t.useContext)(we).controlId;
          return (
            (n = ne(n, "form-range")),
            (0, ee.jsx)(
              "input",
              G(
                G({}, i),
                {},
                { type: "range", ref: r, className: Z()(o, n), id: a || s }
              )
            )
          );
        });
      Qe.displayName = "FormRange";
      var Xe = Qe,
        Ye = [
          "bsPrefix",
          "size",
          "htmlSize",
          "className",
          "isValid",
          "isInvalid",
          "id",
        ],
        qe = t.forwardRef(function (e, r) {
          var n = e.bsPrefix,
            o = e.size,
            a = e.htmlSize,
            i = e.className,
            s = e.isValid,
            c = void 0 !== s && s,
            l = e.isInvalid,
            u = void 0 !== l && l,
            d = e.id,
            f = q(e, Ye),
            p = (0, t.useContext)(we).controlId;
          return (
            (n = ne(n, "form-select")),
            (0, ee.jsx)(
              "select",
              G(
                G({}, f),
                {},
                {
                  size: a,
                  ref: r,
                  className: Z()(
                    i,
                    n,
                    o && "".concat(n, "-").concat(o),
                    c && "is-valid",
                    u && "is-invalid"
                  ),
                  id: d || p,
                }
              )
            )
          );
        });
      qe.displayName = "FormSelect";
      var $e = qe,
        Ze = ["bsPrefix", "className", "as", "muted"],
        et = t.forwardRef(function (e, t) {
          var r = e.bsPrefix,
            n = e.className,
            o = e.as,
            a = void 0 === o ? "small" : o,
            i = e.muted,
            s = q(e, Ze);
          return (
            (r = ne(r, "form-text")),
            (0, ee.jsx)(
              a,
              G(
                G({}, s),
                {},
                { ref: t, className: Z()(n, r, i && "text-muted") }
              )
            )
          );
        });
      et.displayName = "FormText";
      var tt = et,
        rt = t.forwardRef(function (e, t) {
          return (0, ee.jsx)(je, G(G({}, e), {}, { ref: t, type: "switch" }));
        });
      rt.displayName = "Switch";
      var nt = Object.assign(rt, { Input: je.Input, Label: je.Label }),
        ot = ["bsPrefix", "className", "children", "controlId", "label"],
        at = t.forwardRef(function (e, t) {
          var r = e.bsPrefix,
            n = e.className,
            o = e.children,
            a = e.controlId,
            i = e.label,
            s = q(e, ot);
          return (
            (r = ne(r, "form-floating")),
            (0, ee.jsxs)(
              Ve,
              G(
                G({ ref: t, className: Z()(n, r), controlId: a }, s),
                {},
                {
                  children: [
                    o,
                    (0, ee.jsx)("label", { htmlFor: a, children: i }),
                  ],
                }
              )
            )
          );
        });
      at.displayName = "FloatingLabel";
      var it = at,
        st = ["className", "validated", "as"],
        ct = { _ref: ve().any, validated: ve().bool, as: ve().elementType },
        lt = t.forwardRef(function (e, t) {
          var r = e.className,
            n = e.validated,
            o = e.as,
            a = void 0 === o ? "form" : o,
            i = q(e, st);
          return (0,
          ee.jsx)(a, G(G({}, i), {}, { ref: t, className: Z()(r, n && "was-validated") }));
        });
      (lt.displayName = "Form"), (lt.propTypes = ct);
      var ut = Object.assign(lt, {
          Group: Ve,
          Control: Le,
          Floating: ze,
          Check: je,
          Switch: nt,
          Label: We,
          Text: tt,
          Range: Xe,
          Select: $e,
          FloatingLabel: it,
        }),
        dt = ["as", "disabled"];
      function ft(e) {
        var t = e.tagName,
          r = e.disabled,
          n = e.href,
          o = e.target,
          a = e.rel,
          i = e.onClick,
          s = e.tabIndex,
          c = void 0 === s ? 0 : s,
          l = e.type;
        t || (t = null != n || null != o || null != a ? "a" : "button");
        var u = { tagName: t };
        if ("button" === t) return [{ type: l || "button", disabled: r }, u];
        var d = function (e) {
          (r ||
            ("a" === t &&
              (function (e) {
                return !e || "#" === e.trim();
              })(n))) &&
            e.preventDefault(),
            r ? e.stopPropagation() : null == i || i(e);
        };
        return (
          "a" === t && (n || (n = "#"), r && (n = void 0)),
          [
            {
              role: "button",
              disabled: void 0,
              tabIndex: r ? void 0 : c,
              href: n,
              target: "a" === t ? o : void 0,
              "aria-disabled": r || void 0,
              rel: "a" === t ? a : void 0,
              onClick: d,
              onKeyDown: function (e) {
                " " === e.key && (e.preventDefault(), d(e));
              },
            },
            u,
          ]
        );
      }
      var pt = t.forwardRef(function (e, t) {
        var r = e.as,
          n = e.disabled,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, dt),
          a = i(ft(Object.assign({ tagName: r, disabled: n }, o)), 2),
          s = a[0],
          c = a[1].tagName;
        return (0, ee.jsx)(c, Object.assign({}, o, s, { ref: t }));
      });
      pt.displayName = "Button";
      var mt = pt,
        ht = ["as", "bsPrefix", "variant", "size", "active", "className"],
        vt = t.forwardRef(function (e, t) {
          var r = e.as,
            n = e.bsPrefix,
            o = e.variant,
            a = e.size,
            s = e.active,
            c = e.className,
            l = q(e, ht),
            u = ne(n, "btn"),
            d = i(ft(G({ tagName: r }, l)), 2),
            f = d[0],
            p = d[1].tagName;
          return (0,
          ee.jsx)(p, G(G(G({}, f), l), {}, { ref: t, className: Z()(c, u, s && "active", o && "".concat(u, "-").concat(o), a && "".concat(u, "-").concat(a), l.href && l.disabled && "disabled") }));
        });
      (vt.displayName = "Button"),
        (vt.defaultProps = { variant: "primary", active: !1, disabled: !1 });
      var gt = vt,
        yt = function (e) {
          var r = e.text,
            n = D(),
            o = i((0, t.useState)({ email: "", pass: "" }), 2),
            a = o[0],
            s = o[1],
            c = function (e) {
              var t = e.target,
                r = t.name,
                n = t.value;
              console.log(e.target), s(G(G({}, a), {}, (0, H.Z)({}, r, n)));
            },
            l = (function () {
              var e = J(
                X().mark(function e(t) {
                  var r, o, i, s;
                  return X().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              t.preventDefault(),
                              (r = a.email),
                              (o = a.pass),
                              (e.prev = 2),
                              (e.next = 5),
                              fetch(
                                "https://theghaplaman.herokuapp.com/api/v1/admin/login",
                                {
                                  method: "POST",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                  body: JSON.stringify({ email: r, pass: o }),
                                }
                              )
                            );
                          case 5:
                            return (i = e.sent), (e.next = 8), i.json();
                          case 8:
                            ((s = e.sent) &&
                              403 !== i.status &&
                              404 !== i.status) ||
                              alert(s.message),
                              "success" === s.status && n("/admin/dashboard"),
                              (e.next = 16);
                            break;
                          case 13:
                            (e.prev = 13), (e.t0 = e.catch(2)), alert(e.t0);
                          case 16:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 13]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return (0, ee.jsx)(ee.Fragment, {
            children: (0, ee.jsx)("section", {
              id: "adminInput",
              children: (0, ee.jsx)(se, {
                children: (0, ee.jsx)(ue, {
                  children: (0, ee.jsxs)(me, {
                    xl: 4,
                    className: "mx-auto",
                    children: [
                      (0, ee.jsx)("h2", {
                        className: "text-center mb-5",
                        children: r,
                      }),
                      (0, ee.jsxs)(ut, {
                        onSubmit: l,
                        children: [
                          (0, ee.jsx)(ut.Group, {
                            className: "mb-3 shadow py-2",
                            children: (0, ee.jsx)(ut.Control, {
                              type: "email",
                              placeholder: "Email Address",
                              value: a.email,
                              name: "email",
                              onChange: c,
                            }),
                          }),
                          (0, ee.jsx)(ut.Group, {
                            className: "mb-3 shadow py-2",
                            children: (0, ee.jsx)(ut.Control, {
                              type: "password",
                              placeholder: "Enter Password",
                              name: "pass",
                              value: a.pass,
                              onChange: c,
                            }),
                          }),
                          (0, ee.jsx)("div", {
                            className: "text-center",
                            children: (0, ee.jsx)(gt, {
                              type: "submit",
                              className: "btnStyle text-black fw-bold",
                              children: "Login",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        },
        kt = Function.prototype.bind.call(Function.prototype.call, [].slice);
      function bt(e, t) {
        return kt(e.querySelectorAll(t));
      }
      var wt = !(
          "undefined" === typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        Ct = !1,
        xt = !1;
      try {
        var Pt = {
          get passive() {
            return (Ct = !0);
          },
          get once() {
            return (xt = Ct = !0);
          },
        };
        wt &&
          (window.addEventListener("test", Pt, Pt),
          window.removeEventListener("test", Pt, !0));
      } catch (Aa) {}
      var St = function (e, t, r, n) {
        if (n && "boolean" !== typeof n && !xt) {
          var o = n.once,
            a = n.capture,
            i = r;
          !xt &&
            o &&
            ((i =
              r.__once ||
              function e(n) {
                this.removeEventListener(t, e, a), r.call(this, n);
              }),
            (r.__once = i)),
            e.addEventListener(t, i, Ct ? n : a);
        }
        e.addEventListener(t, r, n);
      };
      r(2176);
      function Bt(e) {
        return "default" + e.charAt(0).toUpperCase() + e.substr(1);
      }
      function Et(e) {
        var t = (function (e, t) {
          if ("object" !== typeof e || null === e) return e;
          var r = e[Symbol.toPrimitive];
          if (void 0 !== r) {
            var n = r.call(e, t || "default");
            if ("object" !== typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.");
          }
          return ("string" === t ? String : Number)(e);
        })(e, "string");
        return "symbol" === typeof t ? t : String(t);
      }
      function Tt(e, r, n) {
        var o = (0, t.useRef)(void 0 !== e),
          a = (0, t.useState)(r),
          i = a[0],
          s = a[1],
          c = void 0 !== e,
          l = o.current;
        return (
          (o.current = c),
          !c && l && i !== r && s(r),
          [
            c ? e : i,
            (0, t.useCallback)(
              function (e) {
                for (
                  var t = arguments.length,
                    r = new Array(t > 1 ? t - 1 : 0),
                    o = 1;
                  o < t;
                  o++
                )
                  r[o - 1] = arguments[o];
                n && n.apply(void 0, [e].concat(r)), s(e);
              },
              [n]
            ),
          ]
        );
      }
      function Rt() {
        var e = this.constructor.getDerivedStateFromProps(
          this.props,
          this.state
        );
        null !== e && void 0 !== e && this.setState(e);
      }
      function jt(e) {
        this.setState(
          function (t) {
            var r = this.constructor.getDerivedStateFromProps(e, t);
            return null !== r && void 0 !== r ? r : null;
          }.bind(this)
        );
      }
      function Nt(e, t) {
        try {
          var r = this.props,
            n = this.state;
          (this.props = e),
            (this.state = t),
            (this.__reactInternalSnapshotFlag = !0),
            (this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(r, n));
        } finally {
          (this.props = r), (this.state = n);
        }
      }
      (Rt.__suppressDeprecationWarning = !0),
        (jt.__suppressDeprecationWarning = !0),
        (Nt.__suppressDeprecationWarning = !0);
      var Ot = function (e) {
        var r = (0, t.useRef)(e);
        return (
          (0, t.useEffect)(
            function () {
              r.current = e;
            },
            [e]
          ),
          r
        );
      };
      function _t(e) {
        var r = Ot(e);
        return (0, t.useCallback)(
          function () {
            return r.current && r.current.apply(r, arguments);
          },
          [r]
        );
      }
      var Mt = t.createContext(null);
      function Lt() {
        return (0, t.useState)(null);
      }
      function Dt(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return o(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          a(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function It(e, t) {
        var r =
          ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!r) {
          if (
            Array.isArray(e) ||
            (r = a(e)) ||
            (t && e && "number" === typeof e.length)
          ) {
            r && (e = r);
            var n = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return n >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[n++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw new TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var i,
          s = !0,
          c = !1;
        return {
          s: function () {
            r = r.call(e);
          },
          n: function () {
            var e = r.next();
            return (s = e.done), e;
          },
          e: function (e) {
            (c = !0), (i = e);
          },
          f: function () {
            try {
              s || null == r.return || r.return();
            } finally {
              if (c) throw i;
            }
          },
        };
      }
      var At = Object.prototype.hasOwnProperty;
      function Ut(e, t, r) {
        var n,
          o = It(e.keys());
        try {
          for (o.s(); !(n = o.n()).done; ) if (zt((r = n.value), t)) return r;
        } catch (a) {
          o.e(a);
        } finally {
          o.f();
        }
      }
      function zt(e, t) {
        var r, n, o;
        if (e === t) return !0;
        if (e && t && (r = e.constructor) === t.constructor) {
          if (r === Date) return e.getTime() === t.getTime();
          if (r === RegExp) return e.toString() === t.toString();
          if (r === Array) {
            if ((n = e.length) === t.length) for (; n-- && zt(e[n], t[n]); );
            return -1 === n;
          }
          if (r === Set) {
            if (e.size !== t.size) return !1;
            var a,
              i = It(e);
            try {
              for (i.s(); !(a = i.n()).done; ) {
                if (
                  (o = n = a.value) &&
                  "object" === typeof o &&
                  !(o = Ut(t, o))
                )
                  return !1;
                if (!t.has(o)) return !1;
              }
            } catch (l) {
              i.e(l);
            } finally {
              i.f();
            }
            return !0;
          }
          if (r === Map) {
            if (e.size !== t.size) return !1;
            var s,
              c = It(e);
            try {
              for (c.s(); !(s = c.n()).done; ) {
                if (
                  (o = (n = s.value)[0]) &&
                  "object" === typeof o &&
                  !(o = Ut(t, o))
                )
                  return !1;
                if (!zt(n[1], t.get(o))) return !1;
              }
            } catch (l) {
              c.e(l);
            } finally {
              c.f();
            }
            return !0;
          }
          if (r === ArrayBuffer)
            (e = new Uint8Array(e)), (t = new Uint8Array(t));
          else if (r === DataView) {
            if ((n = e.byteLength) === t.byteLength)
              for (; n-- && e.getInt8(n) === t.getInt8(n); );
            return -1 === n;
          }
          if (ArrayBuffer.isView(e)) {
            if ((n = e.byteLength) === t.byteLength)
              for (; n-- && e[n] === t[n]; );
            return -1 === n;
          }
          if (!r || "object" === typeof e) {
            for (r in ((n = 0), e)) {
              if (At.call(e, r) && ++n && !At.call(t, r)) return !1;
              if (!(r in t) || !zt(e[r], t[r])) return !1;
            }
            return Object.keys(t).length === n;
          }
        }
        return e !== e && t !== t;
      }
      var Ft = function (e) {
        var r = (function () {
          var e = (0, t.useRef)(!0),
            r = (0, t.useRef)(function () {
              return e.current;
            });
          return (
            (0, t.useEffect)(function () {
              return (
                (e.current = !0),
                function () {
                  e.current = !1;
                }
              );
            }, []),
            r.current
          );
        })();
        return [
          e[0],
          (0, t.useCallback)(
            function (t) {
              if (r()) return e[1](t);
            },
            [r, e[1]]
          ),
        ];
      };
      function Kt(e) {
        return e.split("-")[0];
      }
      function Vt(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
          var t = e.ownerDocument;
          return (t && t.defaultView) || window;
        }
        return e;
      }
      function Jt(e) {
        return e instanceof Vt(e).Element || e instanceof Element;
      }
      function Ht(e) {
        return e instanceof Vt(e).HTMLElement || e instanceof HTMLElement;
      }
      function Wt(e) {
        return (
          "undefined" !== typeof ShadowRoot &&
          (e instanceof Vt(e).ShadowRoot || e instanceof ShadowRoot)
        );
      }
      var Gt = Math.max,
        Qt = Math.min,
        Xt = Math.round;
      function Yt(e, t) {
        void 0 === t && (t = !1);
        var r = e.getBoundingClientRect(),
          n = 1,
          o = 1;
        if (Ht(e) && t) {
          var a = e.offsetHeight,
            i = e.offsetWidth;
          i > 0 && (n = Xt(r.width) / i || 1),
            a > 0 && (o = Xt(r.height) / a || 1);
        }
        return {
          width: r.width / n,
          height: r.height / o,
          top: r.top / o,
          right: r.right / n,
          bottom: r.bottom / o,
          left: r.left / n,
          x: r.left / n,
          y: r.top / o,
        };
      }
      function qt(e) {
        var t = Yt(e),
          r = e.offsetWidth,
          n = e.offsetHeight;
        return (
          Math.abs(t.width - r) <= 1 && (r = t.width),
          Math.abs(t.height - n) <= 1 && (n = t.height),
          { x: e.offsetLeft, y: e.offsetTop, width: r, height: n }
        );
      }
      function $t(e, t) {
        var r = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (r && Wt(r)) {
          var n = t;
          do {
            if (n && e.isSameNode(n)) return !0;
            n = n.parentNode || n.host;
          } while (n);
        }
        return !1;
      }
      function Zt(e) {
        return e ? (e.nodeName || "").toLowerCase() : null;
      }
      function er(e) {
        return Vt(e).getComputedStyle(e);
      }
      function tr(e) {
        return ["table", "td", "th"].indexOf(Zt(e)) >= 0;
      }
      function rr(e) {
        return ((Jt(e) ? e.ownerDocument : e.document) || window.document)
          .documentElement;
      }
      function nr(e) {
        return "html" === Zt(e)
          ? e
          : e.assignedSlot || e.parentNode || (Wt(e) ? e.host : null) || rr(e);
      }
      function or(e) {
        return Ht(e) && "fixed" !== er(e).position ? e.offsetParent : null;
      }
      function ar(e) {
        for (
          var t = Vt(e), r = or(e);
          r && tr(r) && "static" === er(r).position;

        )
          r = or(r);
        return r &&
          ("html" === Zt(r) ||
            ("body" === Zt(r) && "static" === er(r).position))
          ? t
          : r ||
              (function (e) {
                var t =
                  -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                if (
                  -1 !== navigator.userAgent.indexOf("Trident") &&
                  Ht(e) &&
                  "fixed" === er(e).position
                )
                  return null;
                var r = nr(e);
                for (
                  Wt(r) && (r = r.host);
                  Ht(r) && ["html", "body"].indexOf(Zt(r)) < 0;

                ) {
                  var n = er(r);
                  if (
                    "none" !== n.transform ||
                    "none" !== n.perspective ||
                    "paint" === n.contain ||
                    -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                    (t && "filter" === n.willChange) ||
                    (t && n.filter && "none" !== n.filter)
                  )
                    return r;
                  r = r.parentNode;
                }
                return null;
              })(e) ||
              t;
      }
      function ir(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
      }
      function sr(e, t, r) {
        return Gt(e, Qt(t, r));
      }
      function cr(e) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
      }
      function lr(e, t) {
        return t.reduce(function (t, r) {
          return (t[r] = e), t;
        }, {});
      }
      var ur = "top",
        dr = "bottom",
        fr = "right",
        pr = "left",
        mr = "auto",
        hr = [ur, dr, fr, pr],
        vr = "start",
        gr = "end",
        yr = "viewport",
        kr = "popper",
        br = hr.reduce(function (e, t) {
          return e.concat([t + "-" + vr, t + "-" + gr]);
        }, []),
        wr = [].concat(hr, [mr]).reduce(function (e, t) {
          return e.concat([t, t + "-" + vr, t + "-" + gr]);
        }, []),
        Cr = [
          "beforeRead",
          "read",
          "afterRead",
          "beforeMain",
          "main",
          "afterMain",
          "beforeWrite",
          "write",
          "afterWrite",
        ];
      var xr = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t,
            r = e.state,
            n = e.name,
            o = e.options,
            a = r.elements.arrow,
            i = r.modifiersData.popperOffsets,
            s = Kt(r.placement),
            c = ir(s),
            l = [pr, fr].indexOf(s) >= 0 ? "height" : "width";
          if (a && i) {
            var u = (function (e, t) {
                return cr(
                  "number" !==
                    typeof (e =
                      "function" === typeof e
                        ? e(
                            Object.assign({}, t.rects, {
                              placement: t.placement,
                            })
                          )
                        : e)
                    ? e
                    : lr(e, hr)
                );
              })(o.padding, r),
              d = qt(a),
              f = "y" === c ? ur : pr,
              p = "y" === c ? dr : fr,
              m =
                r.rects.reference[l] +
                r.rects.reference[c] -
                i[c] -
                r.rects.popper[l],
              h = i[c] - r.rects.reference[c],
              v = ar(a),
              g = v
                ? "y" === c
                  ? v.clientHeight || 0
                  : v.clientWidth || 0
                : 0,
              y = m / 2 - h / 2,
              k = u[f],
              b = g - d[l] - u[p],
              w = g / 2 - d[l] / 2 + y,
              C = sr(k, w, b),
              x = c;
            r.modifiersData[n] =
              (((t = {})[x] = C), (t.centerOffset = C - w), t);
          }
        },
        effect: function (e) {
          var t = e.state,
            r = e.options.element,
            n = void 0 === r ? "[data-popper-arrow]" : r;
          null != n &&
            ("string" !== typeof n ||
              (n = t.elements.popper.querySelector(n))) &&
            $t(t.elements.popper, n) &&
            (t.elements.arrow = n);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
      };
      function Pr(e) {
        return e.split("-")[1];
      }
      var Sr = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function Br(e) {
        var t,
          r = e.popper,
          n = e.popperRect,
          o = e.placement,
          a = e.variation,
          i = e.offsets,
          s = e.position,
          c = e.gpuAcceleration,
          l = e.adaptive,
          u = e.roundOffsets,
          d = e.isFixed,
          f = i.x,
          p = void 0 === f ? 0 : f,
          m = i.y,
          h = void 0 === m ? 0 : m,
          v = "function" === typeof u ? u({ x: p, y: h }) : { x: p, y: h };
        (p = v.x), (h = v.y);
        var g = i.hasOwnProperty("x"),
          y = i.hasOwnProperty("y"),
          k = pr,
          b = ur,
          w = window;
        if (l) {
          var C = ar(r),
            x = "clientHeight",
            P = "clientWidth";
          if (
            (C === Vt(r) &&
              "static" !== er((C = rr(r))).position &&
              "absolute" === s &&
              ((x = "scrollHeight"), (P = "scrollWidth")),
            (C = C),
            o === ur || ((o === pr || o === fr) && a === gr))
          )
            (b = dr),
              (h -=
                (d && C === w && w.visualViewport
                  ? w.visualViewport.height
                  : C[x]) - n.height),
              (h *= c ? 1 : -1);
          if (o === pr || ((o === ur || o === dr) && a === gr))
            (k = fr),
              (p -=
                (d && C === w && w.visualViewport
                  ? w.visualViewport.width
                  : C[P]) - n.width),
              (p *= c ? 1 : -1);
        }
        var S,
          B = Object.assign({ position: s }, l && Sr),
          E =
            !0 === u
              ? (function (e) {
                  var t = e.x,
                    r = e.y,
                    n = window.devicePixelRatio || 1;
                  return { x: Xt(t * n) / n || 0, y: Xt(r * n) / n || 0 };
                })({ x: p, y: h })
              : { x: p, y: h };
        return (
          (p = E.x),
          (h = E.y),
          c
            ? Object.assign(
                {},
                B,
                (((S = {})[b] = y ? "0" : ""),
                (S[k] = g ? "0" : ""),
                (S.transform =
                  (w.devicePixelRatio || 1) <= 1
                    ? "translate(" + p + "px, " + h + "px)"
                    : "translate3d(" + p + "px, " + h + "px, 0)"),
                S)
              )
            : Object.assign(
                {},
                B,
                (((t = {})[b] = y ? h + "px" : ""),
                (t[k] = g ? p + "px" : ""),
                (t.transform = ""),
                t)
              )
        );
      }
      var Er = {
          name: "computeStyles",
          enabled: !0,
          phase: "beforeWrite",
          fn: function (e) {
            var t = e.state,
              r = e.options,
              n = r.gpuAcceleration,
              o = void 0 === n || n,
              a = r.adaptive,
              i = void 0 === a || a,
              s = r.roundOffsets,
              c = void 0 === s || s,
              l = {
                placement: Kt(t.placement),
                variation: Pr(t.placement),
                popper: t.elements.popper,
                popperRect: t.rects.popper,
                gpuAcceleration: o,
                isFixed: "fixed" === t.options.strategy,
              };
            null != t.modifiersData.popperOffsets &&
              (t.styles.popper = Object.assign(
                {},
                t.styles.popper,
                Br(
                  Object.assign({}, l, {
                    offsets: t.modifiersData.popperOffsets,
                    position: t.options.strategy,
                    adaptive: i,
                    roundOffsets: c,
                  })
                )
              )),
              null != t.modifiersData.arrow &&
                (t.styles.arrow = Object.assign(
                  {},
                  t.styles.arrow,
                  Br(
                    Object.assign({}, l, {
                      offsets: t.modifiersData.arrow,
                      position: "absolute",
                      adaptive: !1,
                      roundOffsets: c,
                    })
                  )
                )),
              (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-placement": t.placement,
              }));
          },
          data: {},
        },
        Tr = { passive: !0 };
      var Rr = {
          name: "eventListeners",
          enabled: !0,
          phase: "write",
          fn: function () {},
          effect: function (e) {
            var t = e.state,
              r = e.instance,
              n = e.options,
              o = n.scroll,
              a = void 0 === o || o,
              i = n.resize,
              s = void 0 === i || i,
              c = Vt(t.elements.popper),
              l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
            return (
              a &&
                l.forEach(function (e) {
                  e.addEventListener("scroll", r.update, Tr);
                }),
              s && c.addEventListener("resize", r.update, Tr),
              function () {
                a &&
                  l.forEach(function (e) {
                    e.removeEventListener("scroll", r.update, Tr);
                  }),
                  s && c.removeEventListener("resize", r.update, Tr);
              }
            );
          },
          data: {},
        },
        jr = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function Nr(e) {
        return e.replace(/left|right|bottom|top/g, function (e) {
          return jr[e];
        });
      }
      var Or = { start: "end", end: "start" };
      function _r(e) {
        return e.replace(/start|end/g, function (e) {
          return Or[e];
        });
      }
      function Mr(e) {
        var t = Vt(e);
        return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
      }
      function Lr(e) {
        return Yt(rr(e)).left + Mr(e).scrollLeft;
      }
      function Dr(e) {
        var t = er(e),
          r = t.overflow,
          n = t.overflowX,
          o = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(r + o + n);
      }
      function Ir(e) {
        return ["html", "body", "#document"].indexOf(Zt(e)) >= 0
          ? e.ownerDocument.body
          : Ht(e) && Dr(e)
          ? e
          : Ir(nr(e));
      }
      function Ar(e, t) {
        var r;
        void 0 === t && (t = []);
        var n = Ir(e),
          o = n === (null == (r = e.ownerDocument) ? void 0 : r.body),
          a = Vt(n),
          i = o ? [a].concat(a.visualViewport || [], Dr(n) ? n : []) : n,
          s = t.concat(i);
        return o ? s : s.concat(Ar(nr(i)));
      }
      function Ur(e) {
        return Object.assign({}, e, {
          left: e.x,
          top: e.y,
          right: e.x + e.width,
          bottom: e.y + e.height,
        });
      }
      function zr(e, t) {
        return t === yr
          ? Ur(
              (function (e) {
                var t = Vt(e),
                  r = rr(e),
                  n = t.visualViewport,
                  o = r.clientWidth,
                  a = r.clientHeight,
                  i = 0,
                  s = 0;
                return (
                  n &&
                    ((o = n.width),
                    (a = n.height),
                    /^((?!chrome|android).)*safari/i.test(
                      navigator.userAgent
                    ) || ((i = n.offsetLeft), (s = n.offsetTop))),
                  { width: o, height: a, x: i + Lr(e), y: s }
                );
              })(e)
            )
          : Jt(t)
          ? (function (e) {
              var t = Yt(e);
              return (
                (t.top = t.top + e.clientTop),
                (t.left = t.left + e.clientLeft),
                (t.bottom = t.top + e.clientHeight),
                (t.right = t.left + e.clientWidth),
                (t.width = e.clientWidth),
                (t.height = e.clientHeight),
                (t.x = t.left),
                (t.y = t.top),
                t
              );
            })(t)
          : Ur(
              (function (e) {
                var t,
                  r = rr(e),
                  n = Mr(e),
                  o = null == (t = e.ownerDocument) ? void 0 : t.body,
                  a = Gt(
                    r.scrollWidth,
                    r.clientWidth,
                    o ? o.scrollWidth : 0,
                    o ? o.clientWidth : 0
                  ),
                  i = Gt(
                    r.scrollHeight,
                    r.clientHeight,
                    o ? o.scrollHeight : 0,
                    o ? o.clientHeight : 0
                  ),
                  s = -n.scrollLeft + Lr(e),
                  c = -n.scrollTop;
                return (
                  "rtl" === er(o || r).direction &&
                    (s += Gt(r.clientWidth, o ? o.clientWidth : 0) - a),
                  { width: a, height: i, x: s, y: c }
                );
              })(rr(e))
            );
      }
      function Fr(e, t, r) {
        var n =
            "clippingParents" === t
              ? (function (e) {
                  var t = Ar(nr(e)),
                    r =
                      ["absolute", "fixed"].indexOf(er(e).position) >= 0 &&
                      Ht(e)
                        ? ar(e)
                        : e;
                  return Jt(r)
                    ? t.filter(function (e) {
                        return Jt(e) && $t(e, r) && "body" !== Zt(e);
                      })
                    : [];
                })(e)
              : [].concat(t),
          o = [].concat(n, [r]),
          a = o[0],
          i = o.reduce(function (t, r) {
            var n = zr(e, r);
            return (
              (t.top = Gt(n.top, t.top)),
              (t.right = Qt(n.right, t.right)),
              (t.bottom = Qt(n.bottom, t.bottom)),
              (t.left = Gt(n.left, t.left)),
              t
            );
          }, zr(e, a));
        return (
          (i.width = i.right - i.left),
          (i.height = i.bottom - i.top),
          (i.x = i.left),
          (i.y = i.top),
          i
        );
      }
      function Kr(e) {
        var t,
          r = e.reference,
          n = e.element,
          o = e.placement,
          a = o ? Kt(o) : null,
          i = o ? Pr(o) : null,
          s = r.x + r.width / 2 - n.width / 2,
          c = r.y + r.height / 2 - n.height / 2;
        switch (a) {
          case ur:
            t = { x: s, y: r.y - n.height };
            break;
          case dr:
            t = { x: s, y: r.y + r.height };
            break;
          case fr:
            t = { x: r.x + r.width, y: c };
            break;
          case pr:
            t = { x: r.x - n.width, y: c };
            break;
          default:
            t = { x: r.x, y: r.y };
        }
        var l = a ? ir(a) : null;
        if (null != l) {
          var u = "y" === l ? "height" : "width";
          switch (i) {
            case vr:
              t[l] = t[l] - (r[u] / 2 - n[u] / 2);
              break;
            case gr:
              t[l] = t[l] + (r[u] / 2 - n[u] / 2);
          }
        }
        return t;
      }
      function Vr(e, t) {
        void 0 === t && (t = {});
        var r = t,
          n = r.placement,
          o = void 0 === n ? e.placement : n,
          a = r.boundary,
          i = void 0 === a ? "clippingParents" : a,
          s = r.rootBoundary,
          c = void 0 === s ? yr : s,
          l = r.elementContext,
          u = void 0 === l ? kr : l,
          d = r.altBoundary,
          f = void 0 !== d && d,
          p = r.padding,
          m = void 0 === p ? 0 : p,
          h = cr("number" !== typeof m ? m : lr(m, hr)),
          v = u === kr ? "reference" : kr,
          g = e.rects.popper,
          y = e.elements[f ? v : u],
          k = Fr(Jt(y) ? y : y.contextElement || rr(e.elements.popper), i, c),
          b = Yt(e.elements.reference),
          w = Kr({
            reference: b,
            element: g,
            strategy: "absolute",
            placement: o,
          }),
          C = Ur(Object.assign({}, g, w)),
          x = u === kr ? C : b,
          P = {
            top: k.top - x.top + h.top,
            bottom: x.bottom - k.bottom + h.bottom,
            left: k.left - x.left + h.left,
            right: x.right - k.right + h.right,
          },
          S = e.modifiersData.offset;
        if (u === kr && S) {
          var B = S[o];
          Object.keys(P).forEach(function (e) {
            var t = [fr, dr].indexOf(e) >= 0 ? 1 : -1,
              r = [ur, dr].indexOf(e) >= 0 ? "y" : "x";
            P[e] += B[r] * t;
          });
        }
        return P;
      }
      var Jr = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            r = e.options,
            n = e.name;
          if (!t.modifiersData[n]._skip) {
            for (
              var o = r.mainAxis,
                a = void 0 === o || o,
                i = r.altAxis,
                s = void 0 === i || i,
                c = r.fallbackPlacements,
                l = r.padding,
                u = r.boundary,
                d = r.rootBoundary,
                f = r.altBoundary,
                p = r.flipVariations,
                m = void 0 === p || p,
                h = r.allowedAutoPlacements,
                v = t.options.placement,
                g = Kt(v),
                y =
                  c ||
                  (g === v || !m
                    ? [Nr(v)]
                    : (function (e) {
                        if (Kt(e) === mr) return [];
                        var t = Nr(e);
                        return [_r(e), t, _r(t)];
                      })(v)),
                k = [v].concat(y).reduce(function (e, r) {
                  return e.concat(
                    Kt(r) === mr
                      ? (function (e, t) {
                          void 0 === t && (t = {});
                          var r = t,
                            n = r.placement,
                            o = r.boundary,
                            a = r.rootBoundary,
                            i = r.padding,
                            s = r.flipVariations,
                            c = r.allowedAutoPlacements,
                            l = void 0 === c ? wr : c,
                            u = Pr(n),
                            d = u
                              ? s
                                ? br
                                : br.filter(function (e) {
                                    return Pr(e) === u;
                                  })
                              : hr,
                            f = d.filter(function (e) {
                              return l.indexOf(e) >= 0;
                            });
                          0 === f.length && (f = d);
                          var p = f.reduce(function (t, r) {
                            return (
                              (t[r] = Vr(e, {
                                placement: r,
                                boundary: o,
                                rootBoundary: a,
                                padding: i,
                              })[Kt(r)]),
                              t
                            );
                          }, {});
                          return Object.keys(p).sort(function (e, t) {
                            return p[e] - p[t];
                          });
                        })(t, {
                          placement: r,
                          boundary: u,
                          rootBoundary: d,
                          padding: l,
                          flipVariations: m,
                          allowedAutoPlacements: h,
                        })
                      : r
                  );
                }, []),
                b = t.rects.reference,
                w = t.rects.popper,
                C = new Map(),
                x = !0,
                P = k[0],
                S = 0;
              S < k.length;
              S++
            ) {
              var B = k[S],
                E = Kt(B),
                T = Pr(B) === vr,
                R = [ur, dr].indexOf(E) >= 0,
                j = R ? "width" : "height",
                N = Vr(t, {
                  placement: B,
                  boundary: u,
                  rootBoundary: d,
                  altBoundary: f,
                  padding: l,
                }),
                O = R ? (T ? fr : pr) : T ? dr : ur;
              b[j] > w[j] && (O = Nr(O));
              var _ = Nr(O),
                M = [];
              if (
                (a && M.push(N[E] <= 0),
                s && M.push(N[O] <= 0, N[_] <= 0),
                M.every(function (e) {
                  return e;
                }))
              ) {
                (P = B), (x = !1);
                break;
              }
              C.set(B, M);
            }
            if (x)
              for (
                var L = function (e) {
                    var t = k.find(function (t) {
                      var r = C.get(t);
                      if (r)
                        return r.slice(0, e).every(function (e) {
                          return e;
                        });
                    });
                    if (t) return (P = t), "break";
                  },
                  D = m ? 3 : 1;
                D > 0;
                D--
              ) {
                if ("break" === L(D)) break;
              }
            t.placement !== P &&
              ((t.modifiersData[n]._skip = !0),
              (t.placement = P),
              (t.reset = !0));
          }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
      };
      function Hr(e, t, r) {
        return (
          void 0 === r && (r = { x: 0, y: 0 }),
          {
            top: e.top - t.height - r.y,
            right: e.right - t.width + r.x,
            bottom: e.bottom - t.height + r.y,
            left: e.left - t.width - r.x,
          }
        );
      }
      function Wr(e) {
        return [ur, fr, dr, pr].some(function (t) {
          return e[t] >= 0;
        });
      }
      var Gr = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (e) {
          var t = e.state,
            r = e.options,
            n = e.name,
            o = r.offset,
            a = void 0 === o ? [0, 0] : o,
            i = wr.reduce(function (e, r) {
              return (
                (e[r] = (function (e, t, r) {
                  var n = Kt(e),
                    o = [pr, ur].indexOf(n) >= 0 ? -1 : 1,
                    a =
                      "function" === typeof r
                        ? r(Object.assign({}, t, { placement: e }))
                        : r,
                    i = a[0],
                    s = a[1];
                  return (
                    (i = i || 0),
                    (s = (s || 0) * o),
                    [pr, fr].indexOf(n) >= 0 ? { x: s, y: i } : { x: i, y: s }
                  );
                })(r, t.rects, a)),
                e
              );
            }, {}),
            s = i[t.placement],
            c = s.x,
            l = s.y;
          null != t.modifiersData.popperOffsets &&
            ((t.modifiersData.popperOffsets.x += c),
            (t.modifiersData.popperOffsets.y += l)),
            (t.modifiersData[n] = i);
        },
      };
      var Qr = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (e) {
          var t = e.state,
            r = e.options,
            n = e.name,
            o = r.mainAxis,
            a = void 0 === o || o,
            i = r.altAxis,
            s = void 0 !== i && i,
            c = r.boundary,
            l = r.rootBoundary,
            u = r.altBoundary,
            d = r.padding,
            f = r.tether,
            p = void 0 === f || f,
            m = r.tetherOffset,
            h = void 0 === m ? 0 : m,
            v = Vr(t, {
              boundary: c,
              rootBoundary: l,
              padding: d,
              altBoundary: u,
            }),
            g = Kt(t.placement),
            y = Pr(t.placement),
            k = !y,
            b = ir(g),
            w = "x" === b ? "y" : "x",
            C = t.modifiersData.popperOffsets,
            x = t.rects.reference,
            P = t.rects.popper,
            S =
              "function" === typeof h
                ? h(Object.assign({}, t.rects, { placement: t.placement }))
                : h,
            B =
              "number" === typeof S
                ? { mainAxis: S, altAxis: S }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, S),
            E = t.modifiersData.offset
              ? t.modifiersData.offset[t.placement]
              : null,
            T = { x: 0, y: 0 };
          if (C) {
            if (a) {
              var R,
                j = "y" === b ? ur : pr,
                N = "y" === b ? dr : fr,
                O = "y" === b ? "height" : "width",
                _ = C[b],
                M = _ + v[j],
                L = _ - v[N],
                D = p ? -P[O] / 2 : 0,
                I = y === vr ? x[O] : P[O],
                A = y === vr ? -P[O] : -x[O],
                U = t.elements.arrow,
                z = p && U ? qt(U) : { width: 0, height: 0 },
                F = t.modifiersData["arrow#persistent"]
                  ? t.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                K = F[j],
                V = F[N],
                J = sr(0, x[O], z[O]),
                H = k
                  ? x[O] / 2 - D - J - K - B.mainAxis
                  : I - J - K - B.mainAxis,
                W = k
                  ? -x[O] / 2 + D + J + V + B.mainAxis
                  : A + J + V + B.mainAxis,
                G = t.elements.arrow && ar(t.elements.arrow),
                Q = G ? ("y" === b ? G.clientTop || 0 : G.clientLeft || 0) : 0,
                X = null != (R = null == E ? void 0 : E[b]) ? R : 0,
                Y = _ + W - X,
                q = sr(p ? Qt(M, _ + H - X - Q) : M, _, p ? Gt(L, Y) : L);
              (C[b] = q), (T[b] = q - _);
            }
            if (s) {
              var $,
                Z = "x" === b ? ur : pr,
                ee = "x" === b ? dr : fr,
                te = C[w],
                re = "y" === w ? "height" : "width",
                ne = te + v[Z],
                oe = te - v[ee],
                ae = -1 !== [ur, pr].indexOf(g),
                ie = null != ($ = null == E ? void 0 : E[w]) ? $ : 0,
                se = ae ? ne : te - x[re] - P[re] - ie + B.altAxis,
                ce = ae ? te + x[re] + P[re] - ie - B.altAxis : oe,
                le =
                  p && ae
                    ? (function (e, t, r) {
                        var n = sr(e, t, r);
                        return n > r ? r : n;
                      })(se, te, ce)
                    : sr(p ? se : ne, te, p ? ce : oe);
              (C[w] = le), (T[w] = le - te);
            }
            t.modifiersData[n] = T;
          }
        },
        requiresIfExists: ["offset"],
      };
      function Xr(e, t, r) {
        void 0 === r && (r = !1);
        var n = Ht(t),
          o =
            Ht(t) &&
            (function (e) {
              var t = e.getBoundingClientRect(),
                r = Xt(t.width) / e.offsetWidth || 1,
                n = Xt(t.height) / e.offsetHeight || 1;
              return 1 !== r || 1 !== n;
            })(t),
          a = rr(t),
          i = Yt(e, o),
          s = { scrollLeft: 0, scrollTop: 0 },
          c = { x: 0, y: 0 };
        return (
          (n || (!n && !r)) &&
            (("body" !== Zt(t) || Dr(a)) &&
              (s = (function (e) {
                return e !== Vt(e) && Ht(e)
                  ? { scrollLeft: (t = e).scrollLeft, scrollTop: t.scrollTop }
                  : Mr(e);
                var t;
              })(t)),
            Ht(t)
              ? (((c = Yt(t, !0)).x += t.clientLeft), (c.y += t.clientTop))
              : a && (c.x = Lr(a))),
          {
            x: i.left + s.scrollLeft - c.x,
            y: i.top + s.scrollTop - c.y,
            width: i.width,
            height: i.height,
          }
        );
      }
      function Yr(e) {
        var t = new Map(),
          r = new Set(),
          n = [];
        function o(e) {
          r.add(e.name),
            []
              .concat(e.requires || [], e.requiresIfExists || [])
              .forEach(function (e) {
                if (!r.has(e)) {
                  var n = t.get(e);
                  n && o(n);
                }
              }),
            n.push(e);
        }
        return (
          e.forEach(function (e) {
            t.set(e.name, e);
          }),
          e.forEach(function (e) {
            r.has(e.name) || o(e);
          }),
          n
        );
      }
      function qr(e) {
        var t;
        return function () {
          return (
            t ||
              (t = new Promise(function (r) {
                Promise.resolve().then(function () {
                  (t = void 0), r(e());
                });
              })),
            t
          );
        };
      }
      var $r = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function Zr() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return !t.some(function (e) {
          return !(e && "function" === typeof e.getBoundingClientRect);
        });
      }
      function en(e) {
        void 0 === e && (e = {});
        var t = e,
          r = t.defaultModifiers,
          n = void 0 === r ? [] : r,
          o = t.defaultOptions,
          a = void 0 === o ? $r : o;
        return function (e, t, r) {
          void 0 === r && (r = a);
          var o = {
              placement: "bottom",
              orderedModifiers: [],
              options: Object.assign({}, $r, a),
              modifiersData: {},
              elements: { reference: e, popper: t },
              attributes: {},
              styles: {},
            },
            i = [],
            s = !1,
            c = {
              state: o,
              setOptions: function (r) {
                var s = "function" === typeof r ? r(o.options) : r;
                l(),
                  (o.options = Object.assign({}, a, o.options, s)),
                  (o.scrollParents = {
                    reference: Jt(e)
                      ? Ar(e)
                      : e.contextElement
                      ? Ar(e.contextElement)
                      : [],
                    popper: Ar(t),
                  });
                var u = (function (e) {
                  var t = Yr(e);
                  return Cr.reduce(function (e, r) {
                    return e.concat(
                      t.filter(function (e) {
                        return e.phase === r;
                      })
                    );
                  }, []);
                })(
                  (function (e) {
                    var t = e.reduce(function (e, t) {
                      var r = e[t.name];
                      return (
                        (e[t.name] = r
                          ? Object.assign({}, r, t, {
                              options: Object.assign({}, r.options, t.options),
                              data: Object.assign({}, r.data, t.data),
                            })
                          : t),
                        e
                      );
                    }, {});
                    return Object.keys(t).map(function (e) {
                      return t[e];
                    });
                  })([].concat(n, o.options.modifiers))
                );
                return (
                  (o.orderedModifiers = u.filter(function (e) {
                    return e.enabled;
                  })),
                  o.orderedModifiers.forEach(function (e) {
                    var t = e.name,
                      r = e.options,
                      n = void 0 === r ? {} : r,
                      a = e.effect;
                    if ("function" === typeof a) {
                      var s = a({ state: o, name: t, instance: c, options: n }),
                        l = function () {};
                      i.push(s || l);
                    }
                  }),
                  c.update()
                );
              },
              forceUpdate: function () {
                if (!s) {
                  var e = o.elements,
                    t = e.reference,
                    r = e.popper;
                  if (Zr(t, r)) {
                    (o.rects = {
                      reference: Xr(t, ar(r), "fixed" === o.options.strategy),
                      popper: qt(r),
                    }),
                      (o.reset = !1),
                      (o.placement = o.options.placement),
                      o.orderedModifiers.forEach(function (e) {
                        return (o.modifiersData[e.name] = Object.assign(
                          {},
                          e.data
                        ));
                      });
                    for (var n = 0; n < o.orderedModifiers.length; n++)
                      if (!0 !== o.reset) {
                        var a = o.orderedModifiers[n],
                          i = a.fn,
                          l = a.options,
                          u = void 0 === l ? {} : l,
                          d = a.name;
                        "function" === typeof i &&
                          (o =
                            i({ state: o, options: u, name: d, instance: c }) ||
                            o);
                      } else (o.reset = !1), (n = -1);
                  }
                }
              },
              update: qr(function () {
                return new Promise(function (e) {
                  c.forceUpdate(), e(o);
                });
              }),
              destroy: function () {
                l(), (s = !0);
              },
            };
          if (!Zr(e, t)) return c;
          function l() {
            i.forEach(function (e) {
              return e();
            }),
              (i = []);
          }
          return (
            c.setOptions(r).then(function (e) {
              !s && r.onFirstUpdate && r.onFirstUpdate(e);
            }),
            c
          );
        };
      }
      var tn = en({
          defaultModifiers: [
            {
              name: "hide",
              enabled: !0,
              phase: "main",
              requiresIfExists: ["preventOverflow"],
              fn: function (e) {
                var t = e.state,
                  r = e.name,
                  n = t.rects.reference,
                  o = t.rects.popper,
                  a = t.modifiersData.preventOverflow,
                  i = Vr(t, { elementContext: "reference" }),
                  s = Vr(t, { altBoundary: !0 }),
                  c = Hr(i, n),
                  l = Hr(s, o, a),
                  u = Wr(c),
                  d = Wr(l);
                (t.modifiersData[r] = {
                  referenceClippingOffsets: c,
                  popperEscapeOffsets: l,
                  isReferenceHidden: u,
                  hasPopperEscaped: d,
                }),
                  (t.attributes.popper = Object.assign(
                    {},
                    t.attributes.popper,
                    {
                      "data-popper-reference-hidden": u,
                      "data-popper-escaped": d,
                    }
                  ));
              },
            },
            {
              name: "popperOffsets",
              enabled: !0,
              phase: "read",
              fn: function (e) {
                var t = e.state,
                  r = e.name;
                t.modifiersData[r] = Kr({
                  reference: t.rects.reference,
                  element: t.rects.popper,
                  strategy: "absolute",
                  placement: t.placement,
                });
              },
              data: {},
            },
            Er,
            Rr,
            Gr,
            Jr,
            Qr,
            xr,
          ],
        }),
        rn = ["enabled", "placement", "strategy", "modifiers"];
      function nn(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = {},
          a = Object.keys(e);
        for (n = 0; n < a.length; n++)
          (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o;
      }
      var on = {
          name: "applyStyles",
          enabled: !1,
          phase: "afterWrite",
          fn: function () {},
        },
        an = {
          name: "ariaDescribedBy",
          enabled: !0,
          phase: "afterWrite",
          effect: function (e) {
            var t = e.state;
            return function () {
              var e = t.elements,
                r = e.reference,
                n = e.popper;
              if ("removeAttribute" in r) {
                var o = (r.getAttribute("aria-describedby") || "")
                  .split(",")
                  .filter(function (e) {
                    return e.trim() !== n.id;
                  });
                o.length
                  ? r.setAttribute("aria-describedby", o.join(","))
                  : r.removeAttribute("aria-describedby");
              }
            };
          },
          fn: function (e) {
            var t,
              r = e.state.elements,
              n = r.popper,
              o = r.reference,
              a =
                null == (t = n.getAttribute("role")) ? void 0 : t.toLowerCase();
            if (n.id && "tooltip" === a && "setAttribute" in o) {
              var i = o.getAttribute("aria-describedby");
              if (i && -1 !== i.split(",").indexOf(n.id)) return;
              o.setAttribute(
                "aria-describedby",
                i ? "".concat(i, ",").concat(n.id) : n.id
              );
            }
          },
        },
        sn = [];
      var cn = function (e, r) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          o = n.enabled,
          a = void 0 === o || o,
          s = n.placement,
          c = void 0 === s ? "bottom" : s,
          l = n.strategy,
          u = void 0 === l ? "absolute" : l,
          d = n.modifiers,
          f = void 0 === d ? sn : d,
          p = nn(n, rn),
          m = (0, t.useRef)(f),
          h = (0, t.useRef)(),
          v = (0, t.useCallback)(function () {
            var e;
            null == (e = h.current) || e.update();
          }, []),
          g = (0, t.useCallback)(function () {
            var e;
            null == (e = h.current) || e.forceUpdate();
          }, []),
          y = Ft(
            (0, t.useState)({
              placement: c,
              update: v,
              forceUpdate: g,
              attributes: {},
              styles: { popper: {}, arrow: {} },
            })
          ),
          k = i(y, 2),
          b = k[0],
          w = k[1],
          C = (0, t.useMemo)(
            function () {
              return {
                name: "updateStateModifier",
                enabled: !0,
                phase: "write",
                requires: ["computeStyles"],
                fn: function (e) {
                  var t = e.state,
                    r = {},
                    n = {};
                  Object.keys(t.elements).forEach(function (e) {
                    (r[e] = t.styles[e]), (n[e] = t.attributes[e]);
                  }),
                    w({
                      state: t,
                      styles: r,
                      attributes: n,
                      update: v,
                      forceUpdate: g,
                      placement: t.placement,
                    });
                },
              };
            },
            [v, g, w]
          ),
          x = (0, t.useMemo)(
            function () {
              return zt(m.current, f) || (m.current = f), m.current;
            },
            [f]
          );
        return (
          (0, t.useEffect)(
            function () {
              h.current &&
                a &&
                h.current.setOptions({
                  placement: c,
                  strategy: u,
                  modifiers: [].concat(Dt(x), [C, on]),
                });
            },
            [u, c, C, a, x]
          ),
          (0, t.useEffect)(
            function () {
              if (a && null != e && null != r)
                return (
                  (h.current = tn(
                    e,
                    r,
                    Object.assign({}, p, {
                      placement: c,
                      strategy: u,
                      modifiers: [].concat(Dt(x), [an, C]),
                    })
                  )),
                  function () {
                    null != h.current &&
                      (h.current.destroy(),
                      (h.current = void 0),
                      w(function (e) {
                        return Object.assign({}, e, {
                          attributes: {},
                          styles: { popper: {} },
                        });
                      }));
                  }
                );
            },
            [a, e, r]
          ),
          b
        );
      };
      function ln(e, t) {
        return e.contains
          ? e.contains(t)
          : e.compareDocumentPosition
          ? e === t || !!(16 & e.compareDocumentPosition(t))
          : void 0;
      }
      var un = function (e, t, r, n) {
        var o = n && "boolean" !== typeof n ? n.capture : n;
        e.removeEventListener(t, r, o),
          r.__once && e.removeEventListener(t, r.__once, o);
      };
      var dn = function (e, t, r, n) {
        return (
          St(e, t, r, n),
          function () {
            un(e, t, r, n);
          }
        );
      };
      function fn(e) {
        return (e && e.ownerDocument) || document;
      }
      var pn = function () {};
      function mn(e) {
        return 0 === e.button;
      }
      function hn(e) {
        return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
      }
      var vn = function (e) {
          return e && ("current" in e ? e.current : e);
        },
        gn = {
          click: "mousedown",
          mouseup: "mousedown",
          pointerup: "pointerdown",
        };
      var yn = function (e) {
        var r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : pn,
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          o = n.disabled,
          a = n.clickTrigger,
          i = void 0 === a ? "click" : a,
          s = (0, t.useRef)(!1),
          c = (0, t.useRef)(!1),
          l = (0, t.useCallback)(
            function (t) {
              var r = vn(e);
              Oe()(
                !!r,
                "ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"
              ),
                (s.current =
                  !r || hn(t) || !mn(t) || !!ln(r, t.target) || c.current),
                (c.current = !1);
            },
            [e]
          ),
          u = _t(function (t) {
            var r = vn(e);
            r && ln(r, t.target) && (c.current = !0);
          }),
          d = _t(function (e) {
            s.current || r(e);
          });
        (0, t.useEffect)(
          function () {
            if (!o && null != e) {
              var t = fn(vn(e)),
                r = (t.defaultView || window).event,
                n = null;
              gn[i] && (n = dn(t, gn[i], u, !0));
              var a = dn(t, i, l, !0),
                s = dn(t, i, function (e) {
                  e !== r ? d(e) : (r = void 0);
                }),
                c = [];
              return (
                "ontouchstart" in t.documentElement &&
                  (c = [].slice.call(t.body.children).map(function (e) {
                    return dn(e, "mousemove", pn);
                  })),
                function () {
                  null == n || n(),
                    a(),
                    s(),
                    c.forEach(function (e) {
                      return e();
                    });
                }
              );
            }
          },
          [e, o, i, l, u, d]
        );
      };
      function kn() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return Array.isArray(e)
          ? e
          : Object.keys(e).map(function (t) {
              return (e[t].name = t), e[t];
            });
      }
      function bn(e) {
        var t,
          r,
          n,
          o,
          a = e.enabled,
          i = e.enableEvents,
          s = e.placement,
          c = e.flip,
          l = e.offset,
          u = e.fixed,
          d = e.containerPadding,
          f = e.arrowElement,
          p = e.popperConfig,
          m = void 0 === p ? {} : p,
          h = (function (e) {
            var t = {};
            return Array.isArray(e)
              ? (null == e ||
                  e.forEach(function (e) {
                    t[e.name] = e;
                  }),
                t)
              : e || t;
          })(m.modifiers);
        return Object.assign({}, m, {
          placement: s,
          enabled: a,
          strategy: u ? "fixed" : m.strategy,
          modifiers: kn(
            Object.assign({}, h, {
              eventListeners: { enabled: i },
              preventOverflow: Object.assign({}, h.preventOverflow, {
                options: d
                  ? Object.assign(
                      { padding: d },
                      null == (t = h.preventOverflow) ? void 0 : t.options
                    )
                  : null == (r = h.preventOverflow)
                  ? void 0
                  : r.options,
              }),
              offset: {
                options: Object.assign(
                  { offset: l },
                  null == (n = h.offset) ? void 0 : n.options
                ),
              },
              arrow: Object.assign({}, h.arrow, {
                enabled: !!f,
                options: Object.assign(
                  {},
                  null == (o = h.arrow) ? void 0 : o.options,
                  { element: f }
                ),
              }),
              flip: Object.assign({ enabled: !!c }, h.flip),
            })
          ),
        });
      }
      var wn = ["children"];
      var Cn = function () {};
      function xn() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          r = (0, t.useContext)(Mt),
          n = Lt(),
          o = i(n, 2),
          a = o[0],
          s = o[1],
          c = (0, t.useRef)(!1),
          l = e.flip,
          u = e.offset,
          d = e.rootCloseEvent,
          f = e.fixed,
          p = void 0 !== f && f,
          m = e.placement,
          h = e.popperConfig,
          v = void 0 === h ? {} : h,
          g = e.enableEventListeners,
          y = void 0 === g || g,
          k = e.usePopper,
          b = void 0 === k ? !!r : k,
          w = null == (null == r ? void 0 : r.show) ? !!e.show : r.show;
        w && !c.current && (c.current = !0);
        var C = function (e) {
            null == r || r.toggle(!1, e);
          },
          x = r || {},
          P = x.placement,
          S = x.setMenu,
          B = x.menuElement,
          E = x.toggleElement,
          T = cn(
            E,
            B,
            bn({
              placement: m || P || "bottom-start",
              enabled: b,
              enableEvents: null == y ? w : y,
              offset: u,
              flip: l,
              fixed: p,
              arrowElement: a,
              popperConfig: v,
            })
          ),
          R = Object.assign(
            { ref: S || Cn, "aria-labelledby": null == E ? void 0 : E.id },
            T.attributes.popper,
            { style: T.styles.popper }
          ),
          j = {
            show: w,
            placement: P,
            hasShown: c.current,
            toggle: null == r ? void 0 : r.toggle,
            popper: b ? T : null,
            arrowProps: b
              ? Object.assign({ ref: s }, T.attributes.arrow, {
                  style: T.styles.arrow,
                })
              : {},
          };
        return yn(B, C, { clickTrigger: d, disabled: !w }), [R, j];
      }
      function Pn(e) {
        var t = e.children,
          r = i(
            xn(
              (function (e, t) {
                if (null == e) return {};
                var r,
                  n,
                  o = {},
                  a = Object.keys(e);
                for (n = 0; n < a.length; n++)
                  (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
                return o;
              })(e, wn)
            ),
            2
          ),
          n = r[0],
          o = r[1];
        return (0, ee.jsx)(ee.Fragment, { children: t(n, o) });
      }
      (Pn.displayName = "DropdownMenu"), (Pn.defaultProps = { usePopper: !0 });
      var Sn = Pn;
      function Bn(e, t, r, n) {
        Object.defineProperty(e, t, {
          get: r,
          set: n,
          enumerable: !0,
          configurable: !0,
        });
      }
      var En = {};
      Bn(En, "SSRProvider", function () {
        return jn;
      }),
        Bn(En, "useSSRSafeId", function () {
          return On;
        }),
        Bn(En, "useIsSSR", function () {
          return _n;
        });
      var Tn = { prefix: String(Math.round(1e10 * Math.random())), current: 0 },
        Rn = t.createContext(Tn);
      function jn(e) {
        var r = (0, t.useContext)(Rn),
          n = (0, t.useMemo)(
            function () {
              return {
                prefix:
                  r === Tn ? "" : "".concat(r.prefix, "-").concat(++r.current),
                current: 0,
              };
            },
            [r]
          );
        return t.createElement(Rn.Provider, { value: n }, e.children);
      }
      var Nn = Boolean(
        "undefined" !== typeof window &&
          window.document &&
          window.document.createElement
      );
      function On(e) {
        var r = (0, t.useContext)(Rn);
        return (
          r !== Tn ||
            Nn ||
            console.warn(
              "When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."
            ),
          (0, t.useMemo)(
            function () {
              return (
                e || "react-aria".concat(r.prefix, "-").concat(++r.current)
              );
            },
            [e]
          )
        );
      }
      function _n() {
        var e = (0, t.useContext)(Rn) !== Tn,
          r = i((0, t.useState)(e), 2),
          n = r[0],
          o = r[1];
        return (
          "undefined" !== typeof window &&
            e &&
            (0, t.useLayoutEffect)(function () {
              o(!1);
            }, []),
          n
        );
      }
      var Mn = function (e) {
          var t;
          return (
            "menu" ===
            (null == (t = e.getAttribute("role")) ? void 0 : t.toLowerCase())
          );
        },
        Ln = function () {};
      function Dn() {
        var e = On(),
          r = (0, t.useContext)(Mt) || {},
          n = r.show,
          o = void 0 !== n && n,
          a = r.toggle,
          i = void 0 === a ? Ln : a,
          s = r.setToggle,
          c = r.menuElement,
          l = (0, t.useCallback)(
            function (e) {
              i(!o, e);
            },
            [o, i]
          ),
          u = { id: e, ref: s || Ln, onClick: l, "aria-expanded": !!o };
        return (
          c && Mn(c) && (u["aria-haspopup"] = !0), [u, { show: o, toggle: i }]
        );
      }
      function In(e) {
        var t = e.children,
          r = i(Dn(), 2),
          n = r[0],
          o = r[1];
        return (0, ee.jsx)(ee.Fragment, { children: t(n, o) });
      }
      In.displayName = "DropdownToggle";
      var An = In,
        Un = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          return null != e ? String(e) : t || null;
        },
        zn = t.createContext(null),
        Fn = t.createContext(null);
      Fn.displayName = "NavContext";
      var Kn = Fn;
      function Vn(e) {
        return "".concat("data-rr-ui-").concat(e);
      }
      var Jn = ["eventKey", "disabled", "onClick", "active", "as"];
      function Hn(e) {
        var r = e.key,
          n = e.href,
          o = e.active,
          a = e.disabled,
          i = e.onClick,
          s = (0, t.useContext)(zn),
          c = ((0, t.useContext)(Kn) || {}).activeKey,
          l = Un(r, n),
          u = null == o && null != r ? Un(c) === l : o,
          d = _t(function (e) {
            a || (null == i || i(e), s && !e.isPropagationStopped() && s(l, e));
          });
        return [
          (0, H.Z)(
            { onClick: d, "aria-disabled": a || void 0, "aria-selected": u },
            Vn("dropdown-item"),
            ""
          ),
          { isActive: u },
        ];
      }
      var Wn = t.forwardRef(function (e, t) {
        var r = e.eventKey,
          n = e.disabled,
          o = e.onClick,
          a = e.active,
          s = e.as,
          c = void 0 === s ? mt : s,
          l = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, Jn),
          u = i(
            Hn({ key: r, href: l.href, disabled: n, onClick: o, active: a }),
            1
          )[0];
        return (0, ee.jsx)(c, Object.assign({}, l, { ref: t }, u));
      });
      Wn.displayName = "DropdownItem";
      var Gn = Wn,
        Qn = (0, t.createContext)(wt ? window : void 0);
      Qn.Provider;
      function Xn() {
        var e = (0, t.useReducer)(function (e) {
            return !e;
          }, !1)[1],
          r = (0, t.useRef)(null),
          n = (0, t.useCallback)(
            function (t) {
              (r.current = t), e();
            },
            [e]
          );
        return [r, n];
      }
      function Yn(e) {
        var r = e.defaultShow,
          n = e.show,
          o = e.onSelect,
          a = e.onToggle,
          s = e.itemSelector,
          c = void 0 === s ? "* [".concat(Vn("dropdown-item"), "]") : s,
          l = e.focusFirstItemOnShow,
          u = e.placement,
          d = void 0 === u ? "bottom-start" : u,
          f = e.children,
          p = (0, t.useContext)(Qn),
          m = i(Tt(n, r, a), 2),
          h = m[0],
          v = m[1],
          g = i(Xn(), 2),
          y = g[0],
          k = g[1],
          b = y.current,
          w = i(Xn(), 2),
          C = w[0],
          x = w[1],
          P = C.current,
          S = (function (e) {
            var r = (0, t.useRef)(null);
            return (
              (0, t.useEffect)(function () {
                r.current = e;
              }),
              r.current
            );
          })(h),
          B = (0, t.useRef)(null),
          E = (0, t.useRef)(!1),
          T = (0, t.useContext)(zn),
          R = (0, t.useCallback)(
            function (e, t) {
              var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : null == t
                  ? void 0
                  : t.type;
              v(e, { originalEvent: t, source: r });
            },
            [v]
          ),
          j = _t(function (e, t) {
            null == o || o(e, t),
              R(!1, t, "select"),
              t.isPropagationStopped() || null == T || T(e, t);
          }),
          N = (0, t.useMemo)(
            function () {
              return {
                toggle: R,
                placement: d,
                show: h,
                menuElement: b,
                toggleElement: P,
                setMenu: k,
                setToggle: x,
              };
            },
            [R, d, h, b, P, k, x]
          );
        b && S && !h && (E.current = b.contains(b.ownerDocument.activeElement));
        var O = _t(function () {
            P && P.focus && P.focus();
          }),
          _ = _t(function () {
            var e = B.current,
              t = l;
            if (
              (null == t && (t = !(!y.current || !Mn(y.current)) && "keyboard"),
              !1 !== t && ("keyboard" !== t || /^key.+$/.test(e)))
            ) {
              var r = bt(y.current, c)[0];
              r && r.focus && r.focus();
            }
          });
        (0, t.useEffect)(
          function () {
            h ? _() : E.current && ((E.current = !1), O());
          },
          [h, E, O, _]
        ),
          (0, t.useEffect)(function () {
            B.current = null;
          });
        var M = function (e, t) {
          if (!y.current) return null;
          var r = bt(y.current, c),
            n = r.indexOf(e) + t;
          return r[(n = Math.max(0, Math.min(n, r.length)))];
        };
        return (
          (function (e, r, n, o) {
            void 0 === o && (o = !1);
            var a = _t(n);
            (0, t.useEffect)(
              function () {
                var t = "function" === typeof e ? e() : e;
                return (
                  t.addEventListener(r, a, o),
                  function () {
                    return t.removeEventListener(r, a, o);
                  }
                );
              },
              [e]
            );
          })(
            (0, t.useCallback)(
              function () {
                return p.document;
              },
              [p]
            ),
            "keydown",
            function (e) {
              var t,
                r,
                n = e.key,
                o = e.target,
                a = null == (t = y.current) ? void 0 : t.contains(o),
                i = null == (r = C.current) ? void 0 : r.contains(o);
              if (
                (!/input|textarea/i.test(o.tagName) ||
                  !(
                    " " === n ||
                    ("Escape" !== n && a) ||
                    ("Escape" === n && "search" === o.type)
                  )) &&
                (a || i) &&
                ("Tab" !== n || (y.current && h))
              ) {
                B.current = e.type;
                var s = { originalEvent: e, source: e.type };
                switch (n) {
                  case "ArrowUp":
                    var c = M(o, -1);
                    return c && c.focus && c.focus(), void e.preventDefault();
                  case "ArrowDown":
                    if ((e.preventDefault(), h)) {
                      var l = M(o, 1);
                      l && l.focus && l.focus();
                    } else v(!0, s);
                    return;
                  case "Tab":
                    St(
                      o.ownerDocument,
                      "keyup",
                      function (e) {
                        var t;
                        (("Tab" !== e.key || e.target) &&
                          null != (t = y.current) &&
                          t.contains(e.target)) ||
                          v(!1, s);
                      },
                      { once: !0 }
                    );
                    break;
                  case "Escape":
                    "Escape" === n && (e.preventDefault(), e.stopPropagation()),
                      v(!1, s);
                }
              }
            }
          ),
          (0, ee.jsx)(zn.Provider, {
            value: j,
            children: (0, ee.jsx)(Mt.Provider, { value: N, children: f }),
          })
        );
      }
      (Yn.displayName = "Dropdown"),
        (Yn.Menu = Sn),
        (Yn.Toggle = An),
        (Yn.Item = Gn);
      var qn = Yn,
        $n = t.createContext({});
      $n.displayName = "DropdownContext";
      var Zn = $n;
      var eo =
          "undefined" !== typeof r.g &&
          r.g.navigator &&
          "ReactNative" === r.g.navigator.product,
        to =
          "undefined" !== typeof document || eo
            ? t.useLayoutEffect
            : t.useEffect;
      new WeakMap();
      var ro = ["onKeyDown"];
      var no = t.forwardRef(function (e, t) {
        var r,
          n = e.onKeyDown,
          o = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              o = {},
              a = Object.keys(e);
            for (n = 0; n < a.length; n++)
              (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
            return o;
          })(e, ro),
          a = i(ft(Object.assign({ tagName: "a" }, o)), 1)[0],
          s = _t(function (e) {
            a.onKeyDown(e), null == n || n(e);
          });
        return (((r = o.href) && "#" !== r.trim()) || o.role) &&
          "button" !== o.role
          ? (0, ee.jsx)("a", Object.assign({ ref: t }, o, { onKeyDown: n }))
          : (0, ee.jsx)("a", Object.assign({ ref: t }, o, a, { onKeyDown: s }));
      });
      no.displayName = "Anchor";
      var oo = no,
        ao = [
          "bsPrefix",
          "className",
          "eventKey",
          "disabled",
          "onClick",
          "active",
          "as",
        ],
        io = t.forwardRef(function (e, t) {
          var r = e.bsPrefix,
            n = e.className,
            o = e.eventKey,
            a = e.disabled,
            s = void 0 !== a && a,
            c = e.onClick,
            l = e.active,
            u = e.as,
            d = void 0 === u ? oo : u,
            f = q(e, ao),
            p = ne(r, "dropdown-item"),
            m = i(
              Hn({ key: o, href: f.href, disabled: s, onClick: c, active: l }),
              2
            ),
            h = m[0],
            v = m[1];
          return (0,
          ee.jsx)(d, G(G(G({}, f), h), {}, { ref: t, className: Z()(n, p, v.isActive && "active", s && "disabled") }));
        });
      io.displayName = "DropdownItem";
      var so = io,
        co = function (e) {
          return e && "function" !== typeof e
            ? function (t) {
                e.current = t;
              }
            : e;
        };
      var lo = function (e, r) {
          return (0, t.useMemo)(
            function () {
              return (function (e, t) {
                var r = co(e),
                  n = co(t);
                return function (e) {
                  r && r(e), n && n(e);
                };
              })(e, r);
            },
            [e, r]
          );
        },
        uo = t.createContext(null);
      uo.displayName = "InputGroupContext";
      var fo = uo,
        po = t.createContext(null);
      po.displayName = "NavbarContext";
      var mo = po;
      function ho(e, t) {
        return e;
      }
      var vo = [
        "bsPrefix",
        "className",
        "align",
        "rootCloseEvent",
        "flip",
        "show",
        "renderOnMount",
        "as",
        "popperConfig",
        "variant",
      ];
      function go(e, t, r) {
        var n = e
          ? r
            ? "bottom-start"
            : "bottom-end"
          : r
          ? "bottom-end"
          : "bottom-start";
        return (
          "up" === t
            ? (n = e
                ? r
                  ? "top-start"
                  : "top-end"
                : r
                ? "top-end"
                : "top-start")
            : "end" === t
            ? (n = e
                ? r
                  ? "left-end"
                  : "right-end"
                : r
                ? "left-start"
                : "right-start")
            : "start" === t &&
              (n = e
                ? r
                  ? "right-end"
                  : "left-end"
                : r
                ? "right-start"
                : "left-start"),
          n
        );
      }
      var yo = t.forwardRef(function (e, r) {
        var n = e.bsPrefix,
          o = e.className,
          a = e.align,
          s = e.rootCloseEvent,
          c = e.flip,
          l = e.show,
          u = e.renderOnMount,
          d = e.as,
          f = void 0 === d ? "div" : d,
          p = e.popperConfig,
          m = e.variant,
          h = q(e, vo),
          v = !1,
          g = (0, t.useContext)(mo),
          y = ne(n, "dropdown-menu"),
          k = (0, t.useContext)(Zn),
          b = k.align,
          w = k.drop,
          C = k.isRTL;
        a = a || b;
        var x = (0, t.useContext)(fo),
          P = [];
        if (a)
          if ("object" === typeof a) {
            var S = Object.keys(a);
            if (S.length) {
              var B = S[0],
                E = a[B];
              (v = "start" === E),
                P.push("".concat(y, "-").concat(B, "-").concat(E));
            }
          } else "end" === a && (v = !0);
        var T = go(v, w, C),
          R = i(
            xn({
              flip: c,
              rootCloseEvent: s,
              show: l,
              usePopper: !g && 0 === P.length,
              offset: [0, 2],
              popperConfig: p,
              placement: T,
            }),
            2
          ),
          j = R[0],
          N = R[1],
          O = N.hasShown,
          _ = N.popper,
          M = N.show,
          L = N.toggle;
        if (
          ((j.ref = lo(ho(r), j.ref)),
          to(
            function () {
              M && (null == _ || _.update());
            },
            [M]
          ),
          !O && !u && !x)
        )
          return null;
        "string" !== typeof f &&
          ((j.show = M),
          (j.close = function () {
            return null == L ? void 0 : L(!1);
          }),
          (j.align = a));
        var D = h.style;
        return (
          null != _ &&
            _.placement &&
            ((D = G(G({}, h.style), j.style)),
            (h["x-placement"] = _.placement)),
          (0, ee.jsx)(
            f,
            G(
              G(
                G(G({}, h), j),
                {},
                { style: D },
                (P.length || g) && { "data-bs-popper": "static" }
              ),
              {},
              {
                className: Z().apply(
                  void 0,
                  [
                    o,
                    y,
                    M && "show",
                    v && "".concat(y, "-end"),
                    m && "".concat(y, "-").concat(m),
                  ].concat(P)
                ),
              }
            )
          )
        );
      });
      (yo.displayName = "DropdownMenu"), (yo.defaultProps = { flip: !0 });
      var ko = yo,
        bo = ["bsPrefix", "split", "className", "childBsPrefix", "as"],
        wo = t.forwardRef(function (e, r) {
          var n = e.bsPrefix,
            o = e.split,
            a = e.className,
            s = e.childBsPrefix,
            c = e.as,
            l = void 0 === c ? gt : c,
            u = q(e, bo),
            d = ne(n, "dropdown-toggle"),
            f = (0, t.useContext)(Mt),
            p = (0, t.useContext)(fo);
          void 0 !== s && (u.bsPrefix = s);
          var m = i(Dn(), 1)[0];
          return (
            (m.ref = lo(m.ref, ho(r))),
            (0, ee.jsx)(
              l,
              G(
                G(
                  {
                    className: Z()(
                      a,
                      d,
                      o && "".concat(d, "-split"),
                      !!p && (null == f ? void 0 : f.show) && "show"
                    ),
                  },
                  m
                ),
                u
              )
            )
          );
        });
      wo.displayName = "DropdownToggle";
      var Co = wo,
        xo = [
          "bsPrefix",
          "drop",
          "show",
          "className",
          "align",
          "onSelect",
          "onToggle",
          "focusFirstItemOnShow",
          "as",
          "navbar",
          "autoClose",
        ],
        Po = Ue("dropdown-header", { defaultProps: { role: "heading" } }),
        So = Ue("dropdown-divider", {
          Component: "hr",
          defaultProps: { role: "separator" },
        }),
        Bo = Ue("dropdown-item-text", { Component: "span" }),
        Eo = t.forwardRef(function (e, r) {
          var n = (function (e, t) {
              return Object.keys(t).reduce(function (r, n) {
                var o,
                  a = r,
                  i = a[Bt(n)],
                  c = a[n],
                  l = Y(a, [Bt(n), n].map(Et)),
                  u = t[n],
                  d = Tt(c, i, e[u]),
                  f = d[0],
                  p = d[1];
                return s({}, l, (((o = {})[n] = f), (o[u] = p), o));
              }, e);
            })(e, { show: "onToggle" }),
            o = n.bsPrefix,
            a = n.drop,
            i = n.show,
            c = n.className,
            l = n.align,
            u = n.onSelect,
            d = n.onToggle,
            f = n.focusFirstItemOnShow,
            p = n.as,
            m = void 0 === p ? "div" : p,
            h = (n.navbar, n.autoClose),
            v = q(n, xo),
            g = (0, t.useContext)(fo),
            y = ne(o, "dropdown"),
            k = "rtl" === (0, t.useContext)(re).dir,
            b = _t(function (e, t) {
              var r;
              t.originalEvent.currentTarget !== document ||
                ("keydown" === t.source && "Escape" !== t.originalEvent.key) ||
                (t.source = "rootClose"),
                (r = t.source),
                (!1 === h
                  ? "click" === r
                  : "inside" === h
                  ? "rootClose" !== r
                  : "outside" !== h || "select" !== r) &&
                  (null == d || d(e, t));
            }),
            w = go("end" === l, a, k),
            C = (0, t.useMemo)(
              function () {
                return { align: l, drop: a, isRTL: k };
              },
              [l, a, k]
            );
          return (0,
          ee.jsx)(Zn.Provider, { value: C, children: (0, ee.jsx)(qn, { placement: w, show: i, onSelect: u, onToggle: b, focusFirstItemOnShow: f, itemSelector: ".".concat(y, "-item:not(.disabled):not(:disabled)"), children: g ? v.children : (0, ee.jsx)(m, G(G({}, v), {}, { ref: r, className: Z()(c, i && "show", (!a || "down" === a) && y, "up" === a && "dropup", "end" === a && "dropend", "start" === a && "dropstart") })) }) });
        });
      (Eo.displayName = "Dropdown"),
        (Eo.defaultProps = { navbar: !1, align: "start", autoClose: !0 });
      var To = Object.assign(Eo, {
          Toggle: Co,
          Menu: ko,
          Item: so,
          ItemText: Bo,
          Divider: So,
          Header: Po,
        }),
        Ro = {
          color: void 0,
          size: void 0,
          className: void 0,
          style: void 0,
          attr: void 0,
        },
        jo = t.createContext && t.createContext(Ro),
        No = function () {
          return (
            (No =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var o in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            No.apply(this, arguments)
          );
        },
        Oo = function (e, t) {
          var r = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (r[n] = e[n]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
              t.indexOf(n[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
                (r[n[o]] = e[n[o]]);
          }
          return r;
        };
      function _o(e) {
        return (
          e &&
          e.map(function (e, r) {
            return t.createElement(e.tag, No({ key: r }, e.attr), _o(e.child));
          })
        );
      }
      function Mo(e) {
        return function (r) {
          return t.createElement(
            Lo,
            No({ attr: No({}, e.attr) }, r),
            _o(e.child)
          );
        };
      }
      function Lo(e) {
        var r = function (r) {
          var n,
            o = e.attr,
            a = e.size,
            i = e.title,
            s = Oo(e, ["attr", "size", "title"]),
            c = a || r.size || "1em";
          return (
            r.className && (n = r.className),
            e.className && (n = (n ? n + " " : "") + e.className),
            t.createElement(
              "svg",
              No(
                {
                  stroke: "currentColor",
                  fill: "currentColor",
                  strokeWidth: "0",
                },
                r.attr,
                o,
                s,
                {
                  className: n,
                  style: No(
                    No({ color: e.color || r.color }, r.style),
                    e.style
                  ),
                  height: c,
                  width: c,
                  xmlns: "http://www.w3.org/2000/svg",
                }
              ),
              i && t.createElement("title", null, i),
              e.children
            )
          );
        };
        return void 0 !== jo
          ? t.createElement(jo.Consumer, null, function (e) {
              return r(e);
            })
          : r(Ro);
      }
      function Do(e) {
        return Mo({
          tag: "svg",
          attr: { viewBox: "0 0 512 512" },
          child: [
            {
              tag: "path",
              attr: {
                d: "M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z",
              },
            },
          ],
        })(e);
      }
      function Io() {
        return (
          (Io =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }),
          Io.apply(this, arguments)
        );
      }
      function Ao(e, t) {
        if (null == e) return {};
        var r,
          n,
          o = {},
          a = Object.keys(e);
        for (n = 0; n < a.length; n++)
          (r = a[n]), t.indexOf(r) >= 0 || (o[r] = e[r]);
        return o;
      }
      var Uo = [
        "onClick",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
      ];
      function zo(r) {
        var n = r.basename,
          o = r.children,
          a = r.window,
          v = (0, t.useRef)();
        null == v.current &&
          (v.current = (function (t) {
            void 0 === t && (t = {});
            var r = t.window,
              n = void 0 === r ? document.defaultView : r,
              o = n.history;
            function a() {
              var e = n.location,
                t = e.pathname,
                r = e.search,
                a = e.hash,
                i = o.state || {};
              return [
                i.idx,
                c({
                  pathname: t,
                  search: r,
                  hash: a,
                  state: i.usr || null,
                  key: i.key || "default",
                }),
              ];
            }
            var i = null;
            n.addEventListener(u, function () {
              if (i) w.call(i), (i = null);
              else {
                var t = e.Pop,
                  r = a(),
                  n = r[0],
                  o = r[1];
                if (w.length) {
                  if (null != n) {
                    var s = y - n;
                    s &&
                      ((i = {
                        action: t,
                        location: o,
                        retry: function () {
                          E(-1 * s);
                        },
                      }),
                      E(s));
                  }
                } else B(t);
              }
            });
            var v = e.Pop,
              g = a(),
              y = g[0],
              k = g[1],
              b = f(),
              w = f();
            function C(e) {
              return "string" === typeof e ? e : m(e);
            }
            function x(e, t) {
              return (
                void 0 === t && (t = null),
                c(
                  s(
                    { pathname: k.pathname, hash: "", search: "" },
                    "string" === typeof e ? h(e) : e,
                    { state: t, key: p() }
                  )
                )
              );
            }
            function P(e, t) {
              return [{ usr: e.state, key: e.key, idx: t }, C(e)];
            }
            function S(e, t, r) {
              return (
                !w.length || (w.call({ action: e, location: t, retry: r }), !1)
              );
            }
            function B(e) {
              v = e;
              var t = a();
              (y = t[0]), (k = t[1]), b.call({ action: v, location: k });
            }
            function E(e) {
              o.go(e);
            }
            null == y &&
              ((y = 0), o.replaceState(s({}, o.state, { idx: y }), ""));
            var T = {
              get action() {
                return v;
              },
              get location() {
                return k;
              },
              createHref: C,
              push: function t(r, a) {
                var i = e.Push,
                  s = x(r, a);
                if (
                  S(i, s, function () {
                    t(r, a);
                  })
                ) {
                  var c = P(s, y + 1),
                    l = c[0],
                    u = c[1];
                  try {
                    o.pushState(l, "", u);
                  } catch (d) {
                    n.location.assign(u);
                  }
                  B(i);
                }
              },
              replace: function t(r, n) {
                var a = e.Replace,
                  i = x(r, n);
                if (
                  S(a, i, function () {
                    t(r, n);
                  })
                ) {
                  var s = P(i, y),
                    c = s[0],
                    l = s[1];
                  o.replaceState(c, "", l), B(a);
                }
              },
              go: E,
              back: function () {
                E(-1);
              },
              forward: function () {
                E(1);
              },
              listen: function (e) {
                return b.push(e);
              },
              block: function (e) {
                var t = w.push(e);
                return (
                  1 === w.length && n.addEventListener(l, d),
                  function () {
                    t(), w.length || n.removeEventListener(l, d);
                  }
                );
              },
            };
            return T;
          })({ window: a }));
        var g = v.current,
          y = i((0, t.useState)({ action: g.action, location: g.location }), 2),
          k = y[0],
          b = y[1];
        return (
          (0, t.useLayoutEffect)(
            function () {
              return g.listen(b);
            },
            [g]
          ),
          (0, t.createElement)(z, {
            basename: n,
            children: o,
            location: k.location,
            navigationType: k.action,
            navigator: g,
          })
        );
      }
      var Fo = (0, t.forwardRef)(function (e, r) {
        var n = e.onClick,
          o = e.reloadDocument,
          a = e.replace,
          i = void 0 !== a && a,
          s = e.state,
          c = e.target,
          l = e.to,
          u = Ao(e, Uo),
          d = _(l),
          f = (function (e, r) {
            var n = void 0 === r ? {} : r,
              o = n.target,
              a = n.replace,
              i = n.state,
              s = D(),
              c = L(),
              l = I(e);
            return (0, t.useCallback)(
              function (t) {
                if (
                  0 === t.button &&
                  (!o || "_self" === o) &&
                  !(function (e) {
                    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                  })(t)
                ) {
                  t.preventDefault();
                  var r = !!a || m(c) === m(l);
                  s(e, { replace: r, state: i });
                }
              },
              [c, s, l, a, i, o, e]
            );
          })(l, { replace: i, state: s, target: c });
        return (0, t.createElement)(
          "a",
          Io({}, u, {
            href: d,
            onClick: function (e) {
              n && n(e), e.defaultPrevented || o || f(e);
            },
            ref: r,
            target: c,
          })
        );
      });
      var Ko = function (e) {
          var t = e.text;
          return (0, ee.jsx)(ee.Fragment, {
            children: (0, ee.jsx)("header", {
              id: "header",
              className: "py-3",
              children: (0, ee.jsx)(se, {
                children: (0, ee.jsxs)("div", {
                  className: "d-flex justify-content-between",
                  children: [
                    (0, ee.jsx)("div", {
                      className: "mx-auto",
                      children: (0, ee.jsx)(Fo, {
                        to: "/",
                        className: "text_link text-light",
                        children: t,
                      }),
                    }),
                    (0, ee.jsx)("div", {
                      children: (0, ee.jsxs)(To, {
                        children: [
                          (0, ee.jsx)(To.Toggle, {
                            variant: "success",
                            id: "dropdown-basic",
                            children: (0, ee.jsx)(Do, {}),
                          }),
                          (0, ee.jsx)(To.Menu, {
                            children: (0, ee.jsx)(To.Item, {
                              href: "#/action-1",
                              children: "Log Out",
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        Vo = function () {
          return (0, ee.jsxs)(ee.Fragment, {
            children: [
              (0, ee.jsx)(Ko, { text: "Election" }),
              (0, ee.jsx)(yt, {}),
            ],
          });
        },
        Jo = function (e) {
          var t = e.btnName,
            r = e.toPage,
            n = D();
          return (0, ee.jsx)(gt, {
            onClick: function () {
              n(r);
            },
            className: "btn_shadow",
            style: { backgroundColor: "#CF8181", color: "#000" },
            children: t,
          });
        },
        Ho = r(4569),
        Wo = r.n(Ho),
        Go = function () {
          return (
            (0, t.useEffect)(function () {}, []),
            fetch("https://banglaec.herokuapp.com/api/v1/admin/all-admins")
              .then(function (e) {
                return console.log(e);
              })
              .then(function (e) {
                return console.log(e);
              }),
            (0, ee.jsxs)(ee.Fragment, {
              children: [
                (0, ee.jsx)(Ko, { text: "Election" }),
                (0, ee.jsxs)(se, {
                  children: [
                    (0, ee.jsx)("h2", {
                      className: "text-center mt-5 mb-5",
                      children: "Admin",
                    }),
                    (0, ee.jsx)("h4", {
                      className: "text-end mt-1 pt-1",
                      children: "Room No 103",
                    }),
                    (0, ee.jsxs)("div", {
                      className: "text-center mt-3 mb-5",
                      children: [
                        (0, ee.jsx)("br", {}),
                        " ",
                        (0, ee.jsx)("br", {}),
                        (0, ee.jsx)(Jo, {
                          toPage: "/admin/vote",
                          btnName: "Vote Screen",
                        }),
                        (0, ee.jsx)("br", {}),
                        " ",
                        (0, ee.jsx)("br", {}),
                        (0, ee.jsx)(Jo, {
                          toPage: "/admin/verify-voter",
                          btnName: "Voter Verification",
                        }),
                        (0, ee.jsx)("br", {}),
                        " ",
                        (0, ee.jsx)("br", {}),
                        (0, ee.jsx)(Jo, {
                          toPage: "/admin/stats",
                          btnName: "Center Stats",
                        }),
                        (0, ee.jsx)("br", {}),
                        " ",
                        (0, ee.jsx)("br", {}),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        Qo = function (e) {
          return t.forwardRef(function (t, r) {
            return (0,
            ee.jsx)("div", G(G({}, t), {}, { ref: r, className: Z()(t.className, e) }));
          });
        },
        Xo = ["bsPrefix", "className", "variant", "as"],
        Yo = t.forwardRef(function (e, t) {
          var r = e.bsPrefix,
            n = e.className,
            o = e.variant,
            a = e.as,
            i = void 0 === a ? "img" : a,
            s = q(e, Xo),
            c = ne(r, "card-img");
          return (0,
          ee.jsx)(i, G({ ref: t, className: Z()(o ? "".concat(c, "-").concat(o) : c, n) }, s));
        });
      Yo.displayName = "CardImg";
      var qo = Yo,
        $o = t.createContext(null);
      $o.displayName = "CardHeaderContext";
      var Zo = $o,
        ea = ["bsPrefix", "className", "as"],
        ta = t.forwardRef(function (e, r) {
          var n = e.bsPrefix,
            o = e.className,
            a = e.as,
            i = void 0 === a ? "div" : a,
            s = q(e, ea),
            c = ne(n, "card-header"),
            l = (0, t.useMemo)(
              function () {
                return { cardHeaderBsPrefix: c };
              },
              [c]
            );
          return (0,
          ee.jsx)(Zo.Provider, { value: l, children: (0, ee.jsx)(i, G(G({ ref: r }, s), {}, { className: Z()(o, c) })) });
        });
      ta.displayName = "CardHeader";
      var ra = ta,
        na = [
          "bsPrefix",
          "className",
          "bg",
          "text",
          "border",
          "body",
          "children",
          "as",
        ],
        oa = Qo("h5"),
        aa = Qo("h6"),
        ia = Ue("card-body"),
        sa = Ue("card-title", { Component: oa }),
        ca = Ue("card-subtitle", { Component: aa }),
        la = Ue("card-link", { Component: "a" }),
        ua = Ue("card-text", { Component: "p" }),
        da = Ue("card-footer"),
        fa = Ue("card-img-overlay"),
        pa = t.forwardRef(function (e, t) {
          var r = e.bsPrefix,
            n = e.className,
            o = e.bg,
            a = e.text,
            i = e.border,
            s = e.body,
            c = e.children,
            l = e.as,
            u = void 0 === l ? "div" : l,
            d = q(e, na),
            f = ne(r, "card");
          return (0,
          ee.jsx)(u, G(G({ ref: t }, d), {}, { className: Z()(n, f, o && "bg-".concat(o), a && "text-".concat(a), i && "border-".concat(i)), children: s ? (0, ee.jsx)(ia, { children: c }) : c }));
        });
      (pa.displayName = "Card"), (pa.defaultProps = { body: !1 });
      var ma = Object.assign(pa, {
          Img: qo,
          Title: sa,
          Subtitle: ca,
          Body: ia,
          Link: la,
          Text: ua,
          Header: ra,
          Footer: da,
          ImgOverlay: fa,
        }),
        ha = function (e) {
          var t = e.title,
            r = e.imgSrc;
          return (0, ee.jsx)(ee.Fragment, {
            children: (0, ee.jsx)(me, {
              xl: 4,
              className: "qr_card mt-5 mx-auto",
              children: (0, ee.jsxs)(ma, {
                className: "text-center p-5",
                children: [
                  (0, ee.jsx)(ma.Title, { children: t }),
                  (0, ee.jsx)(ma.Img, {
                    className: "mx-auto shadow w-75 h-75",
                    src: r,
                  }),
                ],
              }),
            }),
          });
        },
        va = function () {
          return (0, ee.jsxs)(ee.Fragment, {
            children: [
              (0, ee.jsx)(Ko, { text: "Election" }),
              (0, ee.jsxs)(se, {
                children: [
                  (0, ee.jsx)("h2", {
                    className: "text-center mt-5 pt-5",
                    children: "Admin",
                  }),
                  (0, ee.jsx)("h4", {
                    className: "text-end mt-1 pt-1",
                    children: "Room No 103",
                  }),
                  (0, ee.jsxs)("div", {
                    className: "text-center",
                    children: [
                      (0, ee.jsx)(Jo, {
                        toPage: "/admin/dashboard",
                        btnName: "Home",
                      }),
                      (0, ee.jsx)(ha, {
                        title: "Scan here",
                        imgSrc:
                          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAklEQVR4AewaftIAAAOmSURBVO3BO45jSQADwWRB979y7hhr0CrgQVLPB4yIvzDzv8NMOcyUw0w5zJTDTDnMlMNMOcyUw0w5zJTDTDnMlMNMOcyUw0x58aYk/CSVJ5LQVG6S0FRaEm5UWhJ+kso7DjPlMFMOM+XFh6l8UhI+KQlNpam0JNyoPKHySUn4pMNMOcyUw0x58WVJeELliSTcqNwk4UblJglN5YkkPKHyTYeZcpgph5ny4h+j0pLQVJrKO1T+JYeZcpgph5ny4h+ThJskPKHSknCj8jc7zJTDTDnMlBdfpvKTVFoSblRukvBNKn+Sw0w5zJTDTHnxYUn4k6m0JDSVG5WWhCeS8Cc7zJTDTDnMlPgLf7EkvEOlJeEdKn+zw0w5zJTDTIm/8IYkNJWWhE9SuUlCU/mdkvBJKt90mCmHmXKYKS/epNKS0FRaEppKS0JTaUm4UWlJaCotCT9JpSXhRuUmCU3lHYeZcpgph5ny4k1JeEcSmkpLQlO5SUJTeULlJgk3Kk+oPJGEpvJJh5lymCmHmfLiw1RaEm5UWhKayjuS0FRukvCEyk0SmkpLwo1KU/mmw0w5zJTDTHnxZSrvSMI7VFoSblSeSMKNSktCU2lJuElCU/mkw0w5zJTDTHnxYUm4UXlCpSWhqdwkoancJKGptCQ0lZskPKFyo9KS0FTecZgph5lymCkvPkylJeEmCU2lJeEmCU2lqbQk3Ki0JDyRhKbSknCThKbykw4z5TBTDjPlxW+mcqPSknCThCdUblRuktBUWhKaSkvCTRJuVD7pMFMOM+UwU178sCTcqLQkNJWWhKbSkvCOJDSVmyTcJOFG5SYJLQlN5R2HmXKYKYeZEn/hL5aEJ1RaEm5UWhJuVJ5IwhMq33SYKYeZcpgpL96UhJ+k0lRuknCj0pLQkvCOJDSVG5Xf6TBTDjPlMFNefJjKJyXhJglN5YkkNJUnknCj8klJuFF5x2GmHGbKYaa8+LIkPKHyjiQ0lXck4YkkvCMJTaWptCR80mGmHGbKYaa8+Mcloak0lRuVloSm0pLQVFoSmspNEprKNx1mymGmHGbKi3+Myk0SblSeSEJTaUloKi0JTaWp/KTDTDnMlMNMefFlKt+kcpOEG5UnVG6S0FRuVFoSfqfDTDnMlMNMefFhSfhJSXhHEprKTRJuVFoSmkpLQlN5IgmfdJgph5lymCnxF2b+d5gph5lymCmHmXKYKYeZcpgph5lymCmHmXKYKYeZcpgph5lymCn/AYTxpxOlTAsoAAAAAElFTkSuQmCC",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        ga = [
          {
            id: 1,
            title: "Party A",
            imgSrc:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAklEQVR4AewaftIAAAN/SURBVO3BQY7kSAIDQfeA/v9lbh/mwJMAIZU9U7U0M38w84/DTDnMlMNMOcyUw0w5zJTDTDnMlMNMOcyUw0w5zJTDTDnMlMNMufiQyt+UhE+o3EnCHZU7SWgqf1MSPnGYKYeZcpgpFy9LwptU3pSEptJUWhLuJOGJJLxJ5U2HmXKYKYeZcvFlKk8k4QmVloSm0pLQknBHpSWhqbQkPKHyRBK+6TBTDjPlMFMufhmVOyotCU2lJaGp/GaHmXKYKYeZcvF/JglNpSXhThKaym9ymCmHmXKYKRdfloR/UxKaSktCU2lJaCpvSsJ/yWGmHGbKYaZcvEzl35SEptKS0FRaEppKS0JTeULlv+wwUw4z5TBTzB/8YCqfSMIdlZaE3+wwUw4z5TBTzB98QKUloam8KQnfpPKJJDSVNyXhmw4z5TBTDjPl4mUqd5JwR6Uloam8KQktCU3lE0l4QqUl4Y5KS8InDjPlMFMOM+XiQ0m4o9JU7iShqbQkPKHSktBUvknliSTcUfmmw0w5zJTDTLn4kMo3JeGOSkvCHZWWhDeptCS8KQlN5U2HmXKYKYeZcvGyJDSVO0loKm9KQlO5o9KS0FSeUPlEEprKNx1mymGmHGbKxctU7iShqdxJwidUWhKaSkvCE0loKi0JP8lhphxmymGmXLwsCXdUnlBpSWgqLQktCXeS0FRaEu6otCQ0lZ/kMFMOM+UwUy6+TKUloancSUJTeUKlJaGptCQ0lZaEOyotCU+otCQ0lZaENx1mymGmHGbKxZcl4U4S7qg8ofJNKk+oPJGEJ1RaEj5xmCmHmXKYKeYPfjCVJ5LwhMoTSXhC5U4S/qbDTDnMlMNMufiQyt+UhJaEpnJH5RNJaCp3VFoS7iShqbQkNJWWhE8cZsphphxmysXLkvAmlTsqLQlN5U4SvikJT6i0JDSVbzrMlMNMOcyUiy9TeSIJb0pCU2kqLQlN5QmVTyThThKaypsOM+UwUw4z5eKXU2lJaCp3ktBU7iShqfwkh5lymCmHmXLxyyXhCZU7Sbij8kQSmsqdJHzTYaYcZsphplx8WRK+KQlvSsITKp9QaUm4o/JNh5lymCmHmXLxMpW/SeVOEp5QeSIJb1JpSWhJaCpvOsyUw0w5zBTzBzP/OMyUw0w5zJTDTDnMlMNMOcyUw0w5zJTDTDnMlMNMOcyUw0w5zJT/AXNIdzTLQQaCAAAAAElFTkSuQmCC",
            voteCount: "176",
          },
          {
            id: 2,
            title: "Party B",
            imgSrc:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAklEQVR4AewaftIAAANuSURBVO3BQY7cWgIDweSD7n/lHC9mwZUAoVT97QYj4h/M/N9hphxmymGmHGbKYaYcZsphphxmymGmHGbKYaYcZsphphxmymGmXHwoCT9J5YkkNJVPJOGOSkvCT1L5xGGmHGbKYaZcvEzlTUn4piTcUbmj8oTKm5LwpsNMOcyUw0y5+LIkPKHyRBKeSEJTuZOEptKS0FSeSMITKt90mCmHmXKYKRe/jEpLwp0k3FFpSfjNDjPlMFMOM+Xil1NpSbijckelJeE3OcyUw0w5zJSLL1P5LyXhiSQ0lZaEN6n8TQ4z5TBTDjPl4mVJ+JuptCQ0lZaEptKS8EQS/maHmXKYKYeZcvEhlb9JEppKS8KbVO6o/EsOM+UwUw4zJf7BB5LQVFoS3qRyJwlN5YkkfEKlJeFNKt90mCmHmXKYKfEPXpSEpnInCU3lThK+SaUl4QmVTyShqdxJQlP5xGGmHGbKYaZcfFkSmkpTaUl4QuUTSWhJeFMSnlC5k4RvOsyUw0w5zJT4Bz8oCU3liSR8k8onktBUvikJTeUTh5lymCmHmXLxZUloKk8koam0JDSVloSmcicJTaUl4YkkfEKlJeGbDjPlMFMOM+XiQ0loKk3lThKaSlNpSXhTEprKEyotCU3lX3KYKYeZcpgpF1+WhKbSVO4koam8SaUloancSUJTaUn4lxxmymGmHGbKxQ9Lwh2VptKS0FQ+kYSm0pLQVO4koak8kYSm0pLQVN50mCmHmXKYKRdfpvJEEu6o/JeS8EQSnlB5IglN5ROHmXKYKYeZEv/gH5aEpvKmJDyh8kQS7qj8pMNMOcyUw0y5+FASfpJKU7mThDeptCTcSUJTuaPSktBUWhKayicOM+UwUw4z5eJlKm9Kwp0kNJWm0pLQVL5J5YkkNJWWhG86zJTDTDnMlIsvS8ITKm9Kwp0kNJWWhCeS8AmVOyotCW86zJTDTDnMlItfJgl3VFoS3qTSkvAvOcyUw0w5zJSLX07liSQ0lSeS8IRKS8IdlW86zJTDTDnMlIsvU/kmlTtJaCp3VFoSmkpLwieS0FTuJOGbDjPlMFMOM+XiZUn4SUm4o/IJlZaEpvKmJDSVptKS8KbDTDnMlMNMiX8w83+HmXKYKYeZcpgph5lymCmHmXKYKYeZcpgph5lymCmHmXKYKYeZ8j/LoXIhKSi5BQAAAABJRU5ErkJggg==",
            voteCount: "211",
          },
          {
            id: 3,
            title: "Party C",
            imgSrc:
              "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACECAYAAABRRIOnAAAAAklEQVR4AewaftIAAANvSURBVO3BQY7kRgADwWSh///l9B584EmAIPXYO2BE/IOZfx1mymGmHGbKYaYcZsphphxmymGmHGbKYaYcZsphphxmymGmHGbKh4eS8JNU7khCU3kiCVdUWhJ+ksoTh5lymCmHmfLhZSpvSsKbktBUWhKayhWVO1TelIQ3HWbKYaYcZsqHL0vCHSp3JKGp3JGEptKS0FRaEprKHUm4Q+WbDjPlMFMOM+XDL5OEptKS0FRaEppKS8Jvdpgph5lymCkffhmVKypXVK6otCT8JoeZcpgph5ny4ctUflIS3qTSkvAmlf+Tw0w5zJTDTPnwsiT8l1RaEppKS0JTaUloKi0JdyTh/+wwUw4z5TBTPjyk8n+m0pLQVJ5QuaLyNznMlMNMOcyU+AcPJKGptCS8SeWJJHyTSkvCm1S+6TBTDjPlMFM+/DCVloSm8qYk3KHSkvCEyh1JaCpXktBUnjjMlMNMOcyUDy9LQlNpSbgjCVdUWhKeSMKbknCHypUkfNNhphxmymGmxD94URLuUHkiCVdUriShqTyRhKbyTUloKk8cZsphphxmSvyDFyXhm1TuSEJTuZKEptKS8JNUWhKuqDxxmCmHmXKYKR8eSkJTuZKEO1S+KQlN5Q6VloSm8jc5zJTDTDnMlA8/TOWOJFxReUKlJaGpXElCU2lJ+JscZsphphxmyocvS8IVlSsqV5LQVJrKlSQ0lZaEpnIlCU3ljiQ0lZaEpvKmw0w5zJTDTPnwH0vCEyotCVdUnkjCHUm4Q+WOJDSVJw4z5TBTDjMl/sFfLAl3qNyRhDtU7kjCFZWfdJgph5lymCkfHkrCT1JpKi0JV5LwhEpLwpUkNJUrKi0JTaUloak8cZgph5lymCkfXqbypiRcScITKt+kckcSmkpLwjcdZsphphxmyocvS8IdKk+otCRcSUJTaUm4IwlPqFxRaUl402GmHGbKYaZ8+GWS0FSuJOFNKi0Jf5PDTDnMlMNM+fDLqLQkNJUrSWgqdyThDpWWhCsq33SYKYeZcpgpH75M5ZtUWhKeUGlJaCotCU8koalcScI3HWbKYaYcZsqHlyXhJyWhqbQkXFG5otKS0FTelISm0lRaEt50mCmHmXKYKfEPZv51mCmHmXKYKYeZcpgph5lymCmHmXKYKYeZcpgph5lymCmHmXKYKf8AeXJ4FQNXm5cAAAAASUVORK5CYII=",
            voteCount: "121",
          },
        ],
        ya = function () {
          var e = i((0, t.useState)(ga), 2),
            r = e[0],
            n =
              (e[1],
              r.sort(function () {
                return Math.random() - Math.random();
              }));
          return (0, ee.jsxs)(ee.Fragment, {
            children: [
              (0, ee.jsx)(Ko, { text: "Election" }),
              (0, ee.jsxs)(se, {
                children: [
                  (0, ee.jsx)("h2", {
                    className: "text-center mt-5 pt-5",
                    children: "Admin",
                  }),
                  (0, ee.jsx)("h4", {
                    className: "text-end mt-1 pt-1",
                    children: "Room No 103",
                  }),
                  (0, ee.jsxs)("div", {
                    className: "text-center",
                    children: [
                      (0, ee.jsx)(Jo, {
                        toPage: "/admin/dashboard",
                        btnName: "Home",
                      }),
                      (0, ee.jsx)(ue, {
                        children: n.map(function (e) {
                          return (0, ee.jsx)(ha, G({}, e), e.id);
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        ka = function (e) {
          var t = e.partyName,
            r = e.voteCount;
          return (0, ee.jsx)(ee.Fragment, {
            children: (0, ee.jsx)(me, {
              xl: 4,
              className: "qr_card",
              children: (0, ee.jsxs)(ma, {
                className: "text-center mt-5 p-5",
                children: [
                  (0, ee.jsx)(ma.Title, { className: "mb-5", children: t }),
                  (0, ee.jsxs)("h3", { children: [r, " Votes"] }),
                ],
              }),
            }),
          });
        },
        ba = function () {
          return (0, ee.jsxs)(ee.Fragment, {
            children: [
              (0, ee.jsx)(Ko, { text: "Election" }),
              (0, ee.jsxs)(se, {
                children: [
                  (0, ee.jsx)("h2", {
                    className: "text-center mt-5 pt-5",
                    children: "Admin",
                  }),
                  (0, ee.jsx)("h4", {
                    className: "text-end mt-1 pt-1",
                    children: "Room No 103",
                  }),
                  (0, ee.jsxs)("div", {
                    className: "text-center",
                    children: [
                      (0, ee.jsx)(Jo, {
                        toPage: "/admin/dashboard",
                        btnName: "Home",
                      }),
                      (0, ee.jsxs)(ue, {
                        children: [
                          (0, ee.jsx)(ka, {
                            linkBoshuk: "/admin/dashboard",
                            partyName: "Party A",
                            voteCount: "176",
                          }),
                          (0, ee.jsx)(ka, {
                            linkBoshuk: "/admin/dashboard",
                            partyName: "Party B",
                            voteCount: "211",
                          }),
                          (0, ee.jsx)(ka, {
                            linkBoshuk: "/admin/dashboard",
                            partyName: "Party C",
                            voteCount: "121",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        wa = function (e) {
          var t = e.text;
          return (0, ee.jsx)(ee.Fragment, {
            children: (0, ee.jsx)("section", {
              id: "userInput",
              children: (0, ee.jsx)(se, {
                children: (0, ee.jsx)(ue, {
                  children: (0, ee.jsxs)(me, {
                    xl: 4,
                    className: "mx-auto",
                    children: [
                      (0, ee.jsx)("h2", {
                        className: "text-center mb-5",
                        children: t,
                      }),
                      (0, ee.jsxs)(ut, {
                        children: [
                          (0, ee.jsx)(ut.Group, {
                            className: "mb-3 shadow py-2",
                            name: "NID",
                            children: (0, ee.jsx)(ut.Control, {
                              type: "number",
                              placeholder: "NID",
                            }),
                          }),
                          (0, ee.jsx)(ut.Group, {
                            className: "mb-3 shadow py-2",
                            children: (0, ee.jsx)(ut.Control, {
                              type: "text",
                              placeholder: "Email",
                              name: "email",
                            }),
                          }),
                          (0, ee.jsx)("div", {
                            className: "text-center",
                            children: (0, ee.jsx)(gt, {
                              type: "submit",
                              className: "btnStyle text-black fw-bold",
                              children: "Login",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          });
        },
        Ca = function () {
          var e = i((0, t.useState)(!1), 2);
          e[0], e[1];
          return (0, ee.jsxs)(ee.Fragment, {
            children: [
              (0, ee.jsx)(Ko, { text: "Election" }),
              (0, ee.jsx)(wa, {}),
            ],
          });
        },
        xa = function (e) {
          var t = e.text;
          return (0, ee.jsx)(ee.Fragment, {
            children: (0, ee.jsx)("section", {
              id: "userInput",
              children: (0, ee.jsxs)(se, {
                children: [
                  (0, ee.jsx)("p", {
                    className: "text-center",
                    children:
                      "Enter the OTP received to the contact +880-XXXXXXXXX",
                  }),
                  (0, ee.jsx)(ue, {
                    children: (0, ee.jsxs)(me, {
                      xl: 4,
                      className: "mx-auto",
                      children: [
                        (0, ee.jsx)("h2", {
                          className: "text-center mb-5",
                          children: t,
                        }),
                        (0, ee.jsxs)(ut, {
                          children: [
                            (0, ee.jsx)(ut.Group, {
                              className: "mb-3 shadow py-2",
                              name: "OTP",
                              children: (0, ee.jsx)(ut.Control, {
                                type: "number",
                                placeholder: "OTP",
                              }),
                            }),
                            (0, ee.jsx)("div", {
                              className: "text-center",
                              children: (0, ee.jsx)(gt, {
                                type: "submit",
                                className: "btnStyle text-black fw-bold",
                                children: "Login",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
          });
        },
        Pa = function () {
          return (0, ee.jsxs)(ee.Fragment, {
            children: [
              (0, ee.jsx)(Ko, { text: "Election" }),
              (0, ee.jsx)(xa, {}),
            ],
          });
        },
        Sa = r(3081),
        Ba = function (e) {
          var t = e.linkBoshuk;
          return (0, ee.jsx)(ee.Fragment, {
            children: (0, ee.jsx)("section", {
              className: "d-flex text-center mt-5 justify-content-center",
              id: "infoCard",
              children: (0, ee.jsx)(se, {
                children: (0, ee.jsx)(ue, {
                  children: (0, ee.jsx)(me, {
                    className: "mx-auto col-xl-4",
                    children: (0, ee.jsxs)(ma, {
                      className: "text-center shadow main_card",
                      children: [
                        (0, ee.jsx)("div", {
                          className: "card_image",
                          children: (0, ee.jsx)(ma.Img, {
                            className: "shadow",
                            src: Sa,
                          }),
                        }),
                        (0, ee.jsxs)(ma.Body, {
                          children: [
                            (0, ee.jsx)(ma.Title, {
                              className: "mb-5",
                              children: (0, ee.jsx)("strong", {
                                children: "Sagor Mahtab xD",
                              }),
                            }),
                            (0, ee.jsxs)("p", {
                              children: [
                                (0, ee.jsx)("strong", { children: "DOB : " }),
                                " date/boshbe/ekhane",
                              ],
                            }),
                            (0, ee.jsxs)("p", {
                              children: [
                                (0, ee.jsx)("strong", {
                                  children: "Address : ",
                                }),
                                " Address Jabe ekhane",
                              ],
                            }),
                            (0, ee.jsxs)("p", {
                              children: [
                                (0, ee.jsx)("strong", {
                                  children: "Center : ",
                                }),
                                " Omuk Center",
                              ],
                            }),
                            (0, ee.jsxs)("p", {
                              children: [
                                (0, ee.jsx)("strong", { children: "Room : " }),
                                " 103",
                              ],
                            }),
                            (0, ee.jsx)(Jo, { toPage: t, btnName: "Vote" }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            }),
          });
        },
        Ea = function () {
          return (0, ee.jsxs)(ee.Fragment, {
            children: [
              (0, ee.jsx)(Ko, { text: "Election" }),
              (0, ee.jsx)("div", { className: "text-center mt-5" }),
              (0, ee.jsx)(Ba, { linkBoshuk: "/user/scan" }),
            ],
          });
        },
        Ta = function () {
          return (0, ee.jsxs)(ee.Fragment, {
            children: [
              (0, ee.jsx)(Ko, { text: "Error" }),
              (0, ee.jsxs)("div", {
                className: "centerize",
                children: [
                  (0, ee.jsx)("h1", {
                    className: "mb-5",
                    children: "NOT FOUNDDDDDDDD",
                  }),
                  (0, ee.jsx)(Jo, { toPage: "/", btnName: "Back To Home" }),
                ],
              }),
            ],
          });
        },
        Ra = r(3292),
        ja = r.n(Ra),
        Na = function () {
          var e = i((0, t.useState)(null), 2),
            r = (e[0], e[1]),
            n = i((0, t.useState)(!1), 2),
            o = n[0],
            a = n[1],
            s = i((0, t.useState)(!1), 2),
            c = s[0],
            l = s[1],
            u = i((0, t.useState)(""), 2),
            d = (u[0], u[1]),
            f = i((0, t.useState)("environment"), 2),
            p = f[0],
            m = f[1],
            h = i((0, t.useState)(null), 2),
            v = (h[0], h[1]);
          function g(e) {
            return y.apply(this, arguments);
          }
          function y() {
            return (y = J(
              X().mark(function e(t) {
                var n, o, i, s, c, u;
                return X().wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (n = t.qr),
                            (o = void 0 === n ? "" : n),
                            (e.prev = 1),
                            l(!0),
                            (e.next = 5),
                            Wo().get(
                              "https://ucs-goma-backend.herokuapp.com/payement/scan?matricule=".concat(
                                o,
                                "&forThisYear=1"
                              )
                            )
                          );
                        case 5:
                          (i = e.sent),
                            console.log("scanned code", o),
                            (s = i.data),
                            (c = s.message),
                            (u = s.payement),
                            console.log(u),
                            c
                              ? (r(null), d(null), v(c), a(!0))
                              : (r({
                                  text: u.matricule,
                                  identite: ""
                                    .concat(u.nom, " ")
                                    .concat(u.postnom, " ")
                                    .concat(u.prenom),
                                  promotion: u.auditoire,
                                  annee: u.annee,
                                  frais: Number.parseFloat(u.totalPayer),
                                  total: Number.parseFloat(u.totalAPayer),
                                  recouvrement: "Premiere tranche",
                                  maxEncours: 800,
                                }),
                                a(!0)),
                            (e.next = 15);
                          break;
                        case 12:
                          (e.prev = 12), (e.t0 = e.catch(1)), console.log(e.t0);
                        case 15:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 12]]
                );
              })
            )).apply(this, arguments);
          }
          var k = (function () {
            var e = J(
              X().mark(function e(t) {
                return X().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (console.log("loaded data data", t),
                          !t || "" === t || o || c)
                        ) {
                          e.next = 5;
                          break;
                        }
                        return (
                          console.log("loaded >>>", t),
                          (e.next = 5),
                          g({ qr: t })
                        );
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
          return (0, ee.jsxs)("div", {
            className: "App",
            children: [
              (0, ee.jsx)("h1", {
                className: "mb-5",
                children: "Sagor Mahtab",
              }),
              (0, ee.jsxs)("select", {
                className: "mb-3",
                onChange: function (e) {
                  return m(e.target.value);
                },
                children: [
                  (0, ee.jsx)("option", {
                    value: "environment",
                    children: "Back Camera",
                  }),
                  (0, ee.jsx)("option", {
                    value: "user",
                    children: "Front Camera",
                  }),
                ],
              }),
              !o &&
                !c &&
                (0, ee.jsx)(ja(), {
                  facingMode: p,
                  delay: 500,
                  onError: function (e) {
                    console.error(e);
                  },
                  onScan: k,
                  style: { width: "200px", heigth: "100px" },
                }),
            ],
          });
        },
        Oa = function () {
          return (0, ee.jsxs)(ee.Fragment, {
            children: [
              (0, ee.jsx)(Ko, { text: "Election" }),
              (0, ee.jsx)("div", {
                className: "text-center mb-5 mt-5",
                children: (0, ee.jsx)(Jo, { toPage: "/", btnName: "Home" }),
              }),
              (0, ee.jsx)(Na, {}),
            ],
          });
        },
        _a = function () {
          return (0, ee.jsxs)(ee.Fragment, {
            children: [
              (0, ee.jsx)(Ko, { text: "Election" }),
              (0, ee.jsxs)("div", {
                className: "centerize",
                children: [
                  (0, ee.jsx)("h1", {
                    className: "mb-5",
                    children: "Successssssss!",
                  }),
                  (0, ee.jsx)(Jo, { toPage: "/", btnName: "Back To Home" }),
                ],
              }),
            ],
          });
        },
        Ma = function () {
          return (0, ee.jsxs)(ee.Fragment, {
            children: [
              (0, ee.jsx)(Ko, { text: "Election" }),
              ";",
              (0, ee.jsxs)("div", {
                className: "centerize",
                children: [
                  (0, ee.jsx)("h1", {
                    className: "mb-5",
                    children: "Hold the Button to confirm your vote",
                  }),
                  (0, ee.jsx)(Jo, { btnName: "CONFIRM" }),
                ],
              }),
            ],
          });
        },
        La = function () {
          var e = D(),
            r = i(
              (0, t.useState)({
                name: "",
                email: "",
                pass: "",
                room: "",
                tv: "",
                centerId: "",
              }),
              2
            ),
            n = r[0],
            o = r[1],
            a = function (e) {
              var t = e.target,
                r = t.name,
                a = t.value;
              o(G(G({}, n), {}, (0, H.Z)({}, r, a)));
            },
            s = (function () {
              var t = J(
                X().mark(function t(r) {
                  var o, a, i, s, c, l, u, d;
                  return X().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              r.preventDefault(),
                              (o = n.name),
                              (a = n.email),
                              (i = n.pass),
                              (s = n.room),
                              (c = n.tv),
                              (l = n.centerId),
                              (t.prev = 2),
                              (t.next = 5),
                              fetch(
                                "https://theghaplaman.herokuapp.com/api/v1/admin/new-admin",
                                {
                                  method: "POST",
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                  body: JSON.stringify({
                                    userName: o,
                                    email: a,
                                    pass: i,
                                    roomNumber: s,
                                    totalVoter: c,
                                    centerId: l,
                                  }),
                                }
                              )
                            );
                          case 5:
                            return (u = t.sent), (t.next = 8), u.json();
                          case 8:
                            (d = t.sent),
                              console.log(d),
                              (d && 403 !== u.status) || alert(d.message),
                              "success" === d.status && e("/admin/login"),
                              (t.next = 17);
                            break;
                          case 14:
                            (t.prev = 14), (t.t0 = t.catch(2)), alert(t.t0);
                          case 17:
                          case "end":
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[2, 14]]
                  );
                })
              );
              return function (e) {
                return t.apply(this, arguments);
              };
            })();
          return (0, ee.jsx)(ee.Fragment, {
            children: (0, ee.jsxs)("div", {
              className: "container my-5",
              children: [
                (0, ee.jsx)("div", {
                  className: "text-center  mb-5",
                  children: (0, ee.jsx)(Jo, {
                    toPage: "/admin/dashboard",
                    btnName: "Home",
                  }),
                }),
                (0, ee.jsx)("div", {
                  className: "row",
                  children: (0, ee.jsx)("div", {
                    className: "col-xl-8 mx-auto",
                    children: (0, ee.jsxs)(ut, {
                      onSubmit: s,
                      children: [
                        (0, ee.jsxs)(ue, {
                          className: "mb-3",
                          children: [
                            (0, ee.jsxs)(ut.Group, {
                              className: "mb-3",
                              children: [
                                (0, ee.jsx)(ut.Label, { children: "Name" }),
                                (0, ee.jsx)(ut.Control, {
                                  type: "text",
                                  name: "name",
                                  value: n.name,
                                  onChange: a,
                                }),
                              ],
                            }),
                            (0, ee.jsxs)(ut.Group, {
                              className: "mb-3",
                              children: [
                                (0, ee.jsx)(ut.Label, { children: "Email" }),
                                (0, ee.jsx)(ut.Control, {
                                  type: "email",
                                  name: "email",
                                  value: n.email,
                                  onChange: a,
                                }),
                              ],
                            }),
                            (0, ee.jsxs)(ut.Group, {
                              className: "mb-3",
                              children: [
                                (0, ee.jsx)(ut.Label, { children: "Password" }),
                                (0, ee.jsx)(ut.Control, {
                                  type: "password",
                                  name: "pass",
                                  value: n.pass,
                                  onChange: a,
                                }),
                              ],
                            }),
                            (0, ee.jsxs)(ut.Group, {
                              className: "mb-3",
                              children: [
                                (0, ee.jsx)(ut.Label, { children: "Room No" }),
                                (0, ee.jsx)(ut.Control, {
                                  type: "number",
                                  name: "room",
                                  value: n.room,
                                  onChange: a,
                                }),
                              ],
                            }),
                            (0, ee.jsxs)(ut.Group, {
                              className: "mb-3",
                              children: [
                                (0, ee.jsx)(ut.Label, {
                                  children: "Total Voter",
                                }),
                                (0, ee.jsx)(ut.Control, {
                                  type: "number",
                                  name: "tv",
                                  value: n.tv,
                                  onChange: a,
                                }),
                              ],
                            }),
                            (0, ee.jsxs)(ut.Group, {
                              className: "mb-3",
                              children: [
                                (0, ee.jsx)(ut.Label, { children: "Center" }),
                                (0, ee.jsx)(ut.Control, {
                                  type: "text",
                                  name: "centerId",
                                  value: n.centerId,
                                  onChange: a,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, ee.jsx)("div", {
                          className: "d-grid gap-2",
                          children: (0, ee.jsx)(gt, {
                            type: "submit",
                            className: "btn_shadow",
                            style: {
                              backgroundColor: "#CF8181",
                              color: "#000",
                            },
                            children: "Submit",
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        Da = function () {
          return (0, ee.jsxs)(ee.Fragment, {
            children: [
              (0, ee.jsx)(Ko, { text: "Election" }),
              (0, ee.jsx)(La, {}),
            ],
          });
        },
        Ia = function () {
          return (0, ee.jsx)(ee.Fragment, {
            children: (0, ee.jsxs)(F, {
              children: [
                (0, ee.jsx)(U, {
                  path: "/admin/dashboard",
                  element: (0, ee.jsx)(Go, {}),
                }),
                (0, ee.jsx)(U, {
                  path: "/admin/create",
                  element: (0, ee.jsx)(Da, {}),
                }),
                (0, ee.jsx)(U, {
                  path: "/admin/login",
                  element: (0, ee.jsx)(Vo, {}),
                }),
                (0, ee.jsx)(U, {
                  path: "/admin/verify-voter",
                  element: (0, ee.jsx)(va, {}),
                }),
                (0, ee.jsx)(U, {
                  path: "/admin/vote",
                  element: (0, ee.jsx)(ya, {}),
                }),
                (0, ee.jsx)(U, {
                  path: "/admin/stats",
                  element: (0, ee.jsx)(ba, {}),
                }),
                (0, ee.jsx)(U, { path: "/", element: (0, ee.jsx)(Ea, {}) }),
                (0, ee.jsx)(U, {
                  path: "/user/login",
                  element: (0, ee.jsx)(Ca, {}),
                }),
                (0, ee.jsx)(U, {
                  path: "/user/otp",
                  element: (0, ee.jsx)(Pa, {}),
                }),
                (0, ee.jsx)(U, {
                  path: "/user/scan",
                  element: (0, ee.jsx)(Oa, {}),
                }),
                (0, ee.jsx)(U, {
                  path: "/user/success",
                  element: (0, ee.jsx)(_a, {}),
                }),
                (0, ee.jsx)(U, {
                  path: "/user/confirm-vote",
                  element: (0, ee.jsx)(Ma, {}),
                }),
                (0, ee.jsx)(U, { path: "/*", element: (0, ee.jsx)(Ta, {}) }),
              ],
            }),
          });
        };
      n.render(
        (0, ee.jsx)(t.StrictMode, {
          children: (0, ee.jsx)(zo, { children: (0, ee.jsx)(Ia, {}) }),
        }),
        document.getElementById("root")
      );
    })();
})();
//# sourceMappingURL=main.176ea02a.js.map
