!(function (e) {
    var t = {};
    function n(a) {
        if (t[a]) return t[a].exports;
        var i = (t[a] = { i: a, l: !1, exports: {} });
        return e[a].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    (n.m = e),
        (n.c = t),
        (n.d = function (e, t, a) {
            n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a });
        }),
        (n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 });
        }),
        (n.t = function (e, t) {
            if ((1 & t && (e = n(e)), 8 & t)) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var a = Object.create(null);
            if ((n.r(a), Object.defineProperty(a, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e))
                for (var i in e)
                    n.d(
                        a,
                        i,
                        function (t) {
                            return e[t];
                        }.bind(null, i)
                    );
            return a;
        }),
        (n.n = function (e) {
            var t =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return n.d(t, "a", t), t;
        }),
        (n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (n.p = ""),
        n((n.s = 129));
})([
    function (e, t, n) {
        var a;
        /*! jQuery v3.5.0 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/Tween,-effects/animatedSelector | (c) JS Foundation and other contributors | jquery.org/license */ !(function (
            t,
            n
        ) {
            "use strict";
            "object" == typeof e.exports
                ? (e.exports = t.document
                      ? n(t, !0)
                      : function (e) {
                            if (!e.document) throw new Error("jQuery requires a window with a document");
                            return n(e);
                        })
                : n(t);
        })("undefined" != typeof window ? window : this, function (n, i) {
            "use strict";
            var r = [],
                o = Object.getPrototypeOf,
                s = r.slice,
                c = r.flat
                    ? function (e) {
                          return r.flat.call(e);
                      }
                    : function (e) {
                          return r.concat.apply([], e);
                      },
                l = r.push,
                u = r.indexOf,
                d = {},
                h = d.toString,
                p = d.hasOwnProperty,
                f = p.toString,
                g = f.call(Object),
                m = {},
                v = function (e) {
                    return "function" == typeof e && "number" != typeof e.nodeType;
                },
                y = function (e) {
                    return null != e && e === e.window;
                },
                b = n.document,
                k = { type: !0, src: !0, nonce: !0, noModule: !0 };
            function S(e, t, n) {
                var a,
                    i,
                    r = (n = n || b).createElement("script");
                if (((r.text = e), t)) for (a in k) (i = t[a] || (t.getAttribute && t.getAttribute(a))) && r.setAttribute(a, i);
                n.head.appendChild(r).parentNode.removeChild(r);
            }
            function w(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[h.call(e)] || "object" : typeof e;
            }
            var C = "3.5.0 -ajax,-ajax/jsonp,-ajax/load,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-deprecated/ajax-event-alias,-effects,-effects/Tween,-effects/animatedSelector",
                P = function (e, t) {
                    return new P.fn.init(e, t);
                };
            function x(e) {
                var t = !!e && "length" in e && e.length,
                    n = w(e);
                return !v(e) && !y(e) && ("array" === n || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
            }
            (P.fn = P.prototype = {
                jquery: C,
                constructor: P,
                length: 0,
                toArray: function () {
                    return s.call(this);
                },
                get: function (e) {
                    return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
                },
                pushStack: function (e) {
                    var t = P.merge(this.constructor(), e);
                    return (t.prevObject = this), t;
                },
                each: function (e) {
                    return P.each(this, e);
                },
                map: function (e) {
                    return this.pushStack(
                        P.map(this, function (t, n) {
                            return e.call(t, n, t);
                        })
                    );
                },
                slice: function () {
                    return this.pushStack(s.apply(this, arguments));
                },
                first: function () {
                    return this.eq(0);
                },
                last: function () {
                    return this.eq(-1);
                },
                even: function () {
                    return this.pushStack(
                        P.grep(this, function (e, t) {
                            return (t + 1) % 2;
                        })
                    );
                },
                odd: function () {
                    return this.pushStack(
                        P.grep(this, function (e, t) {
                            return t % 2;
                        })
                    );
                },
                eq: function (e) {
                    var t = this.length,
                        n = +e + (e < 0 ? t : 0);
                    return this.pushStack(0 <= n && n < t ? [this[n]] : []);
                },
                end: function () {
                    return this.prevObject || this.constructor();
                },
                push: l,
                sort: r.sort,
                splice: r.splice,
            }),
                (P.extend = P.fn.extend = function () {
                    var e,
                        t,
                        n,
                        a,
                        i,
                        r,
                        o = arguments[0] || {},
                        s = 1,
                        c = arguments.length,
                        l = !1;
                    for ("boolean" == typeof o && ((l = o), (o = arguments[s] || {}), s++), "object" == typeof o || v(o) || (o = {}), s === c && ((o = this), s--); s < c; s++)
                        if (null != (e = arguments[s]))
                            for (t in e)
                                (a = e[t]),
                                    "__proto__" !== t &&
                                        o !== a &&
                                        (l && a && (P.isPlainObject(a) || (i = Array.isArray(a)))
                                            ? ((n = o[t]), (r = i && !Array.isArray(n) ? [] : i || P.isPlainObject(n) ? n : {}), (i = !1), (o[t] = P.extend(l, r, a)))
                                            : void 0 !== a && (o[t] = a));
                    return o;
                }),
                P.extend({
                    expando: "jQuery" + (C + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function (e) {
                        throw new Error(e);
                    },
                    noop: function () {},
                    isPlainObject: function (e) {
                        var t, n;
                        return !(!e || "[object Object]" !== h.call(e) || ((t = o(e)) && ("function" != typeof (n = p.call(t, "constructor") && t.constructor) || f.call(n) !== g)));
                    },
                    isEmptyObject: function (e) {
                        var t;
                        for (t in e) return !1;
                        return !0;
                    },
                    globalEval: function (e, t, n) {
                        S(e, { nonce: t && t.nonce }, n);
                    },
                    each: function (e, t) {
                        var n,
                            a = 0;
                        if (x(e)) for (n = e.length; a < n && !1 !== t.call(e[a], a, e[a]); a++);
                        else for (a in e) if (!1 === t.call(e[a], a, e[a])) break;
                        return e;
                    },
                    makeArray: function (e, t) {
                        var n = t || [];
                        return null != e && (x(Object(e)) ? P.merge(n, "string" == typeof e ? [e] : e) : l.call(n, e)), n;
                    },
                    inArray: function (e, t, n) {
                        return null == t ? -1 : u.call(t, e, n);
                    },
                    merge: function (e, t) {
                        for (var n = +t.length, a = 0, i = e.length; a < n; a++) e[i++] = t[a];
                        return (e.length = i), e;
                    },
                    grep: function (e, t, n) {
                        for (var a = [], i = 0, r = e.length, o = !n; i < r; i++) !t(e[i], i) !== o && a.push(e[i]);
                        return a;
                    },
                    map: function (e, t, n) {
                        var a,
                            i,
                            r = 0,
                            o = [];
                        if (x(e)) for (a = e.length; r < a; r++) null != (i = t(e[r], r, n)) && o.push(i);
                        else for (r in e) null != (i = t(e[r], r, n)) && o.push(i);
                        return c(o);
                    },
                    guid: 1,
                    support: m,
                }),
                "function" == typeof Symbol && (P.fn[Symbol.iterator] = r[Symbol.iterator]),
                P.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
                    d["[object " + t + "]"] = t.toLowerCase();
                });
            var T = (function (e) {
                var t,
                    n,
                    a,
                    i,
                    r,
                    o,
                    s,
                    c,
                    l,
                    u,
                    d,
                    h,
                    p,
                    f,
                    g,
                    m,
                    v,
                    y,
                    b,
                    k = "sizzle" + 1 * new Date(),
                    S = e.document,
                    w = 0,
                    C = 0,
                    P = ce(),
                    x = ce(),
                    T = ce(),
                    A = ce(),
                    N = function (e, t) {
                        return e === t && (d = !0), 0;
                    },
                    D = {}.hasOwnProperty,
                    O = [],
                    _ = O.pop,
                    M = O.push,
                    E = O.push,
                    R = O.slice,
                    L = function (e, t) {
                        for (var n = 0, a = e.length; n < a; n++) if (e[n] === t) return n;
                        return -1;
                    },
                    I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    j = "[\\x20\\t\\r\\n\\f]",
                    B = "(?:\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                    z = "\\[" + j + "*(" + B + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + B + "))|)" + j + "*\\]",
                    F = ":(" + B + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)",
                    K = new RegExp(j + "+", "g"),
                    G = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
                    V = new RegExp("^" + j + "*," + j + "*"),
                    H = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
                    q = new RegExp(j + "|>"),
                    W = new RegExp(F),
                    U = new RegExp("^" + B + "$"),
                    J = {
                        ID: new RegExp("^#(" + B + ")"),
                        CLASS: new RegExp("^\\.(" + B + ")"),
                        TAG: new RegExp("^(" + B + "|[*])"),
                        ATTR: new RegExp("^" + z),
                        PSEUDO: new RegExp("^" + F),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + I + ")$", "i"),
                        needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i"),
                    },
                    $ = /HTML$/i,
                    Z = /^(?:input|select|textarea|button)$/i,
                    Q = /^h\d$/i,
                    Y = /^[^{]+\{\s*\[native \w/,
                    X = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    ee = /[+~]/,
                    te = new RegExp("\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\([^\\r\\n\\f])", "g"),
                    ne = function (e, t) {
                        var n = "0x" + e.slice(1) - 65536;
                        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
                    },
                    ae = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    ie = function (e, t) {
                        return t ? ("\0" === e ? "ï¿½" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
                    },
                    re = function () {
                        h();
                    },
                    oe = ke(
                        function (e) {
                            return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                        },
                        { dir: "parentNode", next: "legend" }
                    );
                try {
                    E.apply((O = R.call(S.childNodes)), S.childNodes), O[S.childNodes.length].nodeType;
                } catch (t) {
                    E = {
                        apply: O.length
                            ? function (e, t) {
                                  M.apply(e, R.call(t));
                              }
                            : function (e, t) {
                                  for (var n = e.length, a = 0; (e[n++] = t[a++]); );
                                  e.length = n - 1;
                              },
                    };
                }
                function se(e, t, a, i) {
                    var r,
                        s,
                        l,
                        u,
                        d,
                        f,
                        v,
                        y = t && t.ownerDocument,
                        S = t ? t.nodeType : 9;
                    if (((a = a || []), "string" != typeof e || !e || (1 !== S && 9 !== S && 11 !== S))) return a;
                    if (!i && (h(t), (t = t || p), g)) {
                        if (11 !== S && (d = X.exec(e)))
                            if ((r = d[1])) {
                                if (9 === S) {
                                    if (!(l = t.getElementById(r))) return a;
                                    if (l.id === r) return a.push(l), a;
                                } else if (y && (l = y.getElementById(r)) && b(t, l) && l.id === r) return a.push(l), a;
                            } else {
                                if (d[2]) return E.apply(a, t.getElementsByTagName(e)), a;
                                if ((r = d[3]) && n.getElementsByClassName && t.getElementsByClassName) return E.apply(a, t.getElementsByClassName(r)), a;
                            }
                        if (n.qsa && !A[e + " "] && (!m || !m.test(e)) && (1 !== S || "object" !== t.nodeName.toLowerCase())) {
                            if (((v = e), (y = t), 1 === S && (q.test(e) || H.test(e)))) {
                                for (((y = (ee.test(e) && ve(t.parentNode)) || t) === t && n.scope) || ((u = t.getAttribute("id")) ? (u = u.replace(ae, ie)) : t.setAttribute("id", (u = k))), s = (f = o(e)).length; s--; )
                                    f[s] = (u ? "#" + u : ":scope") + " " + be(f[s]);
                                v = f.join(",");
                            }
                            try {
                                return E.apply(a, y.querySelectorAll(v)), a;
                            } catch (t) {
                                A(e, !0);
                            } finally {
                                u === k && t.removeAttribute("id");
                            }
                        }
                    }
                    return c(e.replace(G, "$1"), t, a, i);
                }
                function ce() {
                    var e = [];
                    return function t(n, i) {
                        return e.push(n + " ") > a.cacheLength && delete t[e.shift()], (t[n + " "] = i);
                    };
                }
                function le(e) {
                    return (e[k] = !0), e;
                }
                function ue(e) {
                    var t = p.createElement("fieldset");
                    try {
                        return !!e(t);
                    } catch (e) {
                        return !1;
                    } finally {
                        t.parentNode && t.parentNode.removeChild(t), (t = null);
                    }
                }
                function de(e, t) {
                    for (var n = e.split("|"), i = n.length; i--; ) a.attrHandle[n[i]] = t;
                }
                function he(e, t) {
                    var n = t && e,
                        a = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                    if (a) return a;
                    if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
                    return e ? 1 : -1;
                }
                function pe(e) {
                    return function (t) {
                        return "input" === t.nodeName.toLowerCase() && t.type === e;
                    };
                }
                function fe(e) {
                    return function (t) {
                        var n = t.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && t.type === e;
                    };
                }
                function ge(e) {
                    return function (t) {
                        return "form" in t
                            ? t.parentNode && !1 === t.disabled
                                ? "label" in t
                                    ? "label" in t.parentNode
                                        ? t.parentNode.disabled === e
                                        : t.disabled === e
                                    : t.isDisabled === e || (t.isDisabled !== !e && oe(t) === e)
                                : t.disabled === e
                            : "label" in t && t.disabled === e;
                    };
                }
                function me(e) {
                    return le(function (t) {
                        return (
                            (t = +t),
                            le(function (n, a) {
                                for (var i, r = e([], n.length, t), o = r.length; o--; ) n[(i = r[o])] && (n[i] = !(a[i] = n[i]));
                            })
                        );
                    });
                }
                function ve(e) {
                    return e && void 0 !== e.getElementsByTagName && e;
                }
                for (t in ((n = se.support = {}),
                (r = se.isXML = function (e) {
                    var t = e.namespaceURI,
                        n = (e.ownerDocument || e).documentElement;
                    return !$.test(t || (n && n.nodeName) || "HTML");
                }),
                (h = se.setDocument = function (e) {
                    var t,
                        i,
                        o = e ? e.ownerDocument || e : S;
                    return (
                        o != p &&
                            9 === o.nodeType &&
                            o.documentElement &&
                            ((f = (p = o).documentElement),
                            (g = !r(p)),
                            S != p && (i = p.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", re, !1) : i.attachEvent && i.attachEvent("onunload", re)),
                            (n.scope = ue(function (e) {
                                return f.appendChild(e).appendChild(p.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                            })),
                            (n.attributes = ue(function (e) {
                                return (e.className = "i"), !e.getAttribute("className");
                            })),
                            (n.getElementsByTagName = ue(function (e) {
                                return e.appendChild(p.createComment("")), !e.getElementsByTagName("*").length;
                            })),
                            (n.getElementsByClassName = Y.test(p.getElementsByClassName)),
                            (n.getById = ue(function (e) {
                                return (f.appendChild(e).id = k), !p.getElementsByName || !p.getElementsByName(k).length;
                            })),
                            n.getById
                                ? ((a.filter.ID = function (e) {
                                      var t = e.replace(te, ne);
                                      return function (e) {
                                          return e.getAttribute("id") === t;
                                      };
                                  }),
                                  (a.find.ID = function (e, t) {
                                      if (void 0 !== t.getElementById && g) {
                                          var n = t.getElementById(e);
                                          return n ? [n] : [];
                                      }
                                  }))
                                : ((a.filter.ID = function (e) {
                                      var t = e.replace(te, ne);
                                      return function (e) {
                                          var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                          return n && n.value === t;
                                      };
                                  }),
                                  (a.find.ID = function (e, t) {
                                      if (void 0 !== t.getElementById && g) {
                                          var n,
                                              a,
                                              i,
                                              r = t.getElementById(e);
                                          if (r) {
                                              if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                                              for (i = t.getElementsByName(e), a = 0; (r = i[a++]); ) if ((n = r.getAttributeNode("id")) && n.value === e) return [r];
                                          }
                                          return [];
                                      }
                                  })),
                            (a.find.TAG = n.getElementsByTagName
                                ? function (e, t) {
                                      return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0;
                                  }
                                : function (e, t) {
                                      var n,
                                          a = [],
                                          i = 0,
                                          r = t.getElementsByTagName(e);
                                      if ("*" === e) {
                                          for (; (n = r[i++]); ) 1 === n.nodeType && a.push(n);
                                          return a;
                                      }
                                      return r;
                                  }),
                            (a.find.CLASS =
                                n.getElementsByClassName &&
                                function (e, t) {
                                    if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
                                }),
                            (v = []),
                            (m = []),
                            (n.qsa = Y.test(p.querySelectorAll)) &&
                                (ue(function (e) {
                                    var t;
                                    (f.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                        e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + j + "*(?:''|\"\")"),
                                        e.querySelectorAll("[selected]").length || m.push("\\[" + j + "*(?:value|" + I + ")"),
                                        e.querySelectorAll("[id~=" + k + "-]").length || m.push("~="),
                                        (t = p.createElement("input")).setAttribute("name", ""),
                                        e.appendChild(t),
                                        e.querySelectorAll("[name='']").length || m.push("\\[" + j + "*name" + j + "*=" + j + "*(?:''|\"\")"),
                                        e.querySelectorAll(":checked").length || m.push(":checked"),
                                        e.querySelectorAll("a#" + k + "+*").length || m.push(".#.+[+~]"),
                                        e.querySelectorAll("\\\f"),
                                        m.push("[\\r\\n\\f]");
                                }),
                                ue(function (e) {
                                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                    var t = p.createElement("input");
                                    t.setAttribute("type", "hidden"),
                                        e.appendChild(t).setAttribute("name", "D"),
                                        e.querySelectorAll("[name=d]").length && m.push("name" + j + "*[*^$|!~]?="),
                                        2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                                        (f.appendChild(e).disabled = !0),
                                        2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                                        e.querySelectorAll("*,:x"),
                                        m.push(",.*:");
                                })),
                            (n.matchesSelector = Y.test((y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector))) &&
                                ue(function (e) {
                                    (n.disconnectedMatch = y.call(e, "*")), y.call(e, "[s!='']:x"), v.push("!=", F);
                                }),
                            (m = m.length && new RegExp(m.join("|"))),
                            (v = v.length && new RegExp(v.join("|"))),
                            (t = Y.test(f.compareDocumentPosition)),
                            (b =
                                t || Y.test(f.contains)
                                    ? function (e, t) {
                                          var n = 9 === e.nodeType ? e.documentElement : e,
                                              a = t && t.parentNode;
                                          return e === a || !(!a || 1 !== a.nodeType || !(n.contains ? n.contains(a) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(a)));
                                      }
                                    : function (e, t) {
                                          if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                          return !1;
                                      }),
                            (N = t
                                ? function (e, t) {
                                      if (e === t) return (d = !0), 0;
                                      var a = !e.compareDocumentPosition - !t.compareDocumentPosition;
                                      return (
                                          a ||
                                          (1 & (a = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!n.sortDetached && t.compareDocumentPosition(e) === a)
                                              ? e == p || (e.ownerDocument == S && b(S, e))
                                                  ? -1
                                                  : t == p || (t.ownerDocument == S && b(S, t))
                                                  ? 1
                                                  : u
                                                  ? L(u, e) - L(u, t)
                                                  : 0
                                              : 4 & a
                                              ? -1
                                              : 1)
                                      );
                                  }
                                : function (e, t) {
                                      if (e === t) return (d = !0), 0;
                                      var n,
                                          a = 0,
                                          i = e.parentNode,
                                          r = t.parentNode,
                                          o = [e],
                                          s = [t];
                                      if (!i || !r) return e == p ? -1 : t == p ? 1 : i ? -1 : r ? 1 : u ? L(u, e) - L(u, t) : 0;
                                      if (i === r) return he(e, t);
                                      for (n = e; (n = n.parentNode); ) o.unshift(n);
                                      for (n = t; (n = n.parentNode); ) s.unshift(n);
                                      for (; o[a] === s[a]; ) a++;
                                      return a ? he(o[a], s[a]) : o[a] == S ? -1 : s[a] == S ? 1 : 0;
                                  })),
                        p
                    );
                }),
                (se.matches = function (e, t) {
                    return se(e, null, null, t);
                }),
                (se.matchesSelector = function (e, t) {
                    if ((h(e), n.matchesSelector && g && !A[t + " "] && (!v || !v.test(t)) && (!m || !m.test(t))))
                        try {
                            var a = y.call(e, t);
                            if (a || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return a;
                        } catch (e) {
                            A(t, !0);
                        }
                    return 0 < se(t, p, null, [e]).length;
                }),
                (se.contains = function (e, t) {
                    return (e.ownerDocument || e) != p && h(e), b(e, t);
                }),
                (se.attr = function (e, t) {
                    (e.ownerDocument || e) != p && h(e);
                    var i = a.attrHandle[t.toLowerCase()],
                        r = i && D.call(a.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
                    return void 0 !== r ? r : n.attributes || !g ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
                }),
                (se.escape = function (e) {
                    return (e + "").replace(ae, ie);
                }),
                (se.error = function (e) {
                    throw new Error("Syntax error, unrecognized expression: " + e);
                }),
                (se.uniqueSort = function (e) {
                    var t,
                        a = [],
                        i = 0,
                        r = 0;
                    if (((d = !n.detectDuplicates), (u = !n.sortStable && e.slice(0)), e.sort(N), d)) {
                        for (; (t = e[r++]); ) t === e[r] && (i = a.push(r));
                        for (; i--; ) e.splice(a[i], 1);
                    }
                    return (u = null), e;
                }),
                (i = se.getText = function (e) {
                    var t,
                        n = "",
                        a = 0,
                        r = e.nodeType;
                    if (r) {
                        if (1 === r || 9 === r || 11 === r) {
                            if ("string" == typeof e.textContent) return e.textContent;
                            for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                        } else if (3 === r || 4 === r) return e.nodeValue;
                    } else for (; (t = e[a++]); ) n += i(t);
                    return n;
                }),
                ((a = se.selectors = {
                    cacheLength: 50,
                    createPseudo: le,
                    match: J,
                    attrHandle: {},
                    find: {},
                    relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                    preFilter: {
                        ATTR: function (e) {
                            return (e[1] = e[1].replace(te, ne)), (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                        },
                        CHILD: function (e) {
                            return (
                                (e[1] = e[1].toLowerCase()),
                                "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && se.error(e[0]),
                                e
                            );
                        },
                        PSEUDO: function (e) {
                            var t,
                                n = !e[6] && e[2];
                            return J.CHILD.test(e[0])
                                ? null
                                : (e[3] ? (e[2] = e[4] || e[5] || "") : n && W.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
                        },
                    },
                    filter: {
                        TAG: function (e) {
                            var t = e.replace(te, ne).toLowerCase();
                            return "*" === e
                                ? function () {
                                      return !0;
                                  }
                                : function (e) {
                                      return e.nodeName && e.nodeName.toLowerCase() === t;
                                  };
                        },
                        CLASS: function (e) {
                            var t = P[e + " "];
                            return (
                                t ||
                                ((t = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)")) &&
                                    P(e, function (e) {
                                        return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                                    }))
                            );
                        },
                        ATTR: function (e, t, n) {
                            return function (a) {
                                var i = se.attr(a, e);
                                return null == i
                                    ? "!=" === t
                                    : !t ||
                                          ((i += ""),
                                          "=" === t
                                              ? i === n
                                              : "!=" === t
                                              ? i !== n
                                              : "^=" === t
                                              ? n && 0 === i.indexOf(n)
                                              : "*=" === t
                                              ? n && -1 < i.indexOf(n)
                                              : "$=" === t
                                              ? n && i.slice(-n.length) === n
                                              : "~=" === t
                                              ? -1 < (" " + i.replace(K, " ") + " ").indexOf(n)
                                              : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
                            };
                        },
                        CHILD: function (e, t, n, a, i) {
                            var r = "nth" !== e.slice(0, 3),
                                o = "last" !== e.slice(-4),
                                s = "of-type" === t;
                            return 1 === a && 0 === i
                                ? function (e) {
                                      return !!e.parentNode;
                                  }
                                : function (t, n, c) {
                                      var l,
                                          u,
                                          d,
                                          h,
                                          p,
                                          f,
                                          g = r !== o ? "nextSibling" : "previousSibling",
                                          m = t.parentNode,
                                          v = s && t.nodeName.toLowerCase(),
                                          y = !c && !s,
                                          b = !1;
                                      if (m) {
                                          if (r) {
                                              for (; g; ) {
                                                  for (h = t; (h = h[g]); ) if (s ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                                  f = g = "only" === e && !f && "nextSibling";
                                              }
                                              return !0;
                                          }
                                          if (((f = [o ? m.firstChild : m.lastChild]), o && y)) {
                                              for (
                                                  b = (p = (l = (u = (d = (h = m)[k] || (h[k] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === w && l[1]) && l[2], h = p && m.childNodes[p];
                                                  (h = (++p && h && h[g]) || (b = p = 0) || f.pop());

                                              )
                                                  if (1 === h.nodeType && ++b && h === t) {
                                                      u[e] = [w, p, b];
                                                      break;
                                                  }
                                          } else if ((y && (b = p = (l = (u = (d = (h = t)[k] || (h[k] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] || [])[0] === w && l[1]), !1 === b))
                                              for (
                                                  ;
                                                  (h = (++p && h && h[g]) || (b = p = 0) || f.pop()) &&
                                                  ((s ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (y && ((u = (d = h[k] || (h[k] = {}))[h.uniqueID] || (d[h.uniqueID] = {}))[e] = [w, b]), h !== t));

                                              );
                                          return (b -= i) === a || (b % a == 0 && 0 <= b / a);
                                      }
                                  };
                        },
                        PSEUDO: function (e, t) {
                            var n,
                                i = a.pseudos[e] || a.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                            return i[k]
                                ? i(t)
                                : 1 < i.length
                                ? ((n = [e, e, "", t]),
                                  a.setFilters.hasOwnProperty(e.toLowerCase())
                                      ? le(function (e, n) {
                                            for (var a, r = i(e, t), o = r.length; o--; ) e[(a = L(e, r[o]))] = !(n[a] = r[o]);
                                        })
                                      : function (e) {
                                            return i(e, 0, n);
                                        })
                                : i;
                        },
                    },
                    pseudos: {
                        not: le(function (e) {
                            var t = [],
                                n = [],
                                a = s(e.replace(G, "$1"));
                            return a[k]
                                ? le(function (e, t, n, i) {
                                      for (var r, o = a(e, null, i, []), s = e.length; s--; ) (r = o[s]) && (e[s] = !(t[s] = r));
                                  })
                                : function (e, i, r) {
                                      return (t[0] = e), a(t, null, r, n), (t[0] = null), !n.pop();
                                  };
                        }),
                        has: le(function (e) {
                            return function (t) {
                                return 0 < se(e, t).length;
                            };
                        }),
                        contains: le(function (e) {
                            return (
                                (e = e.replace(te, ne)),
                                function (t) {
                                    return -1 < (t.textContent || i(t)).indexOf(e);
                                }
                            );
                        }),
                        lang: le(function (e) {
                            return (
                                U.test(e || "") || se.error("unsupported lang: " + e),
                                (e = e.replace(te, ne).toLowerCase()),
                                function (t) {
                                    var n;
                                    do {
                                        if ((n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1;
                                }
                            );
                        }),
                        target: function (t) {
                            var n = e.location && e.location.hash;
                            return n && n.slice(1) === t.id;
                        },
                        root: function (e) {
                            return e === f;
                        },
                        focus: function (e) {
                            return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                        },
                        enabled: ge(!1),
                        disabled: ge(!0),
                        checked: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                        },
                        selected: function (e) {
                            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                        },
                        empty: function (e) {
                            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function (e) {
                            return !a.pseudos.empty(e);
                        },
                        header: function (e) {
                            return Q.test(e.nodeName);
                        },
                        input: function (e) {
                            return Z.test(e.nodeName);
                        },
                        button: function (e) {
                            var t = e.nodeName.toLowerCase();
                            return ("input" === t && "button" === e.type) || "button" === t;
                        },
                        text: function (e) {
                            var t;
                            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                        },
                        first: me(function () {
                            return [0];
                        }),
                        last: me(function (e, t) {
                            return [t - 1];
                        }),
                        eq: me(function (e, t, n) {
                            return [n < 0 ? n + t : n];
                        }),
                        even: me(function (e, t) {
                            for (var n = 0; n < t; n += 2) e.push(n);
                            return e;
                        }),
                        odd: me(function (e, t) {
                            for (var n = 1; n < t; n += 2) e.push(n);
                            return e;
                        }),
                        lt: me(function (e, t, n) {
                            for (var a = n < 0 ? n + t : t < n ? t : n; 0 <= --a; ) e.push(a);
                            return e;
                        }),
                        gt: me(function (e, t, n) {
                            for (var a = n < 0 ? n + t : n; ++a < t; ) e.push(a);
                            return e;
                        }),
                    },
                }).pseudos.nth = a.pseudos.eq),
                { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                    a.pseudos[t] = pe(t);
                for (t in { submit: !0, reset: !0 }) a.pseudos[t] = fe(t);
                function ye() {}
                function be(e) {
                    for (var t = 0, n = e.length, a = ""; t < n; t++) a += e[t].value;
                    return a;
                }
                function ke(e, t, n) {
                    var a = t.dir,
                        i = t.next,
                        r = i || a,
                        o = n && "parentNode" === r,
                        s = C++;
                    return t.first
                        ? function (t, n, i) {
                              for (; (t = t[a]); ) if (1 === t.nodeType || o) return e(t, n, i);
                              return !1;
                          }
                        : function (t, n, c) {
                              var l,
                                  u,
                                  d,
                                  h = [w, s];
                              if (c) {
                                  for (; (t = t[a]); ) if ((1 === t.nodeType || o) && e(t, n, c)) return !0;
                              } else
                                  for (; (t = t[a]); )
                                      if (1 === t.nodeType || o)
                                          if (((u = (d = t[k] || (t[k] = {}))[t.uniqueID] || (d[t.uniqueID] = {})), i && i === t.nodeName.toLowerCase())) t = t[a] || t;
                                          else {
                                              if ((l = u[r]) && l[0] === w && l[1] === s) return (h[2] = l[2]);
                                              if (((u[r] = h)[2] = e(t, n, c))) return !0;
                                          }
                              return !1;
                          };
                }
                function Se(e) {
                    return 1 < e.length
                        ? function (t, n, a) {
                              for (var i = e.length; i--; ) if (!e[i](t, n, a)) return !1;
                              return !0;
                          }
                        : e[0];
                }
                function we(e, t, n, a, i) {
                    for (var r, o = [], s = 0, c = e.length, l = null != t; s < c; s++) (r = e[s]) && ((n && !n(r, a, i)) || (o.push(r), l && t.push(s)));
                    return o;
                }
                function Ce(e, t, n, a, i, r) {
                    return (
                        a && !a[k] && (a = Ce(a)),
                        i && !i[k] && (i = Ce(i, r)),
                        le(function (r, o, s, c) {
                            var l,
                                u,
                                d,
                                h = [],
                                p = [],
                                f = o.length,
                                g =
                                    r ||
                                    (function (e, t, n) {
                                        for (var a = 0, i = t.length; a < i; a++) se(e, t[a], n);
                                        return n;
                                    })(t || "*", s.nodeType ? [s] : s, []),
                                m = !e || (!r && t) ? g : we(g, h, e, s, c),
                                v = n ? (i || (r ? e : f || a) ? [] : o) : m;
                            if ((n && n(m, v, s, c), a)) for (l = we(v, p), a(l, [], s, c), u = l.length; u--; ) (d = l[u]) && (v[p[u]] = !(m[p[u]] = d));
                            if (r) {
                                if (i || e) {
                                    if (i) {
                                        for (l = [], u = v.length; u--; ) (d = v[u]) && l.push((m[u] = d));
                                        i(null, (v = []), l, c);
                                    }
                                    for (u = v.length; u--; ) (d = v[u]) && -1 < (l = i ? L(r, d) : h[u]) && (r[l] = !(o[l] = d));
                                }
                            } else (v = we(v === o ? v.splice(f, v.length) : v)), i ? i(null, o, v, c) : E.apply(o, v);
                        })
                    );
                }
                function Pe(e) {
                    for (
                        var t,
                            n,
                            i,
                            r = e.length,
                            o = a.relative[e[0].type],
                            s = o || a.relative[" "],
                            c = o ? 1 : 0,
                            u = ke(
                                function (e) {
                                    return e === t;
                                },
                                s,
                                !0
                            ),
                            d = ke(
                                function (e) {
                                    return -1 < L(t, e);
                                },
                                s,
                                !0
                            ),
                            h = [
                                function (e, n, a) {
                                    var i = (!o && (a || n !== l)) || ((t = n).nodeType ? u(e, n, a) : d(e, n, a));
                                    return (t = null), i;
                                },
                            ];
                        c < r;
                        c++
                    )
                        if ((n = a.relative[e[c].type])) h = [ke(Se(h), n)];
                        else {
                            if ((n = a.filter[e[c].type].apply(null, e[c].matches))[k]) {
                                for (i = ++c; i < r && !a.relative[e[i].type]; i++);
                                return Ce(1 < c && Se(h), 1 < c && be(e.slice(0, c - 1).concat({ value: " " === e[c - 2].type ? "*" : "" })).replace(G, "$1"), n, c < i && Pe(e.slice(c, i)), i < r && Pe((e = e.slice(i))), i < r && be(e));
                            }
                            h.push(n);
                        }
                    return Se(h);
                }
                return (
                    (ye.prototype = a.filters = a.pseudos),
                    (a.setFilters = new ye()),
                    (o = se.tokenize = function (e, t) {
                        var n,
                            i,
                            r,
                            o,
                            s,
                            c,
                            l,
                            u = x[e + " "];
                        if (u) return t ? 0 : u.slice(0);
                        for (s = e, c = [], l = a.preFilter; s; ) {
                            for (o in ((n && !(i = V.exec(s))) || (i && (s = s.slice(i[0].length) || s), c.push((r = []))),
                            (n = !1),
                            (i = H.exec(s)) && ((n = i.shift()), r.push({ value: n, type: i[0].replace(G, " ") }), (s = s.slice(n.length))),
                            a.filter))
                                !(i = J[o].exec(s)) || (l[o] && !(i = l[o](i))) || ((n = i.shift()), r.push({ value: n, type: o, matches: i }), (s = s.slice(n.length)));
                            if (!n) break;
                        }
                        return t ? s.length : s ? se.error(e) : x(e, c).slice(0);
                    }),
                    (s = se.compile = function (e, t) {
                        var n,
                            i,
                            r,
                            s,
                            c,
                            u,
                            d = [],
                            f = [],
                            m = T[e + " "];
                        if (!m) {
                            for (t || (t = o(e)), n = t.length; n--; ) (m = Pe(t[n]))[k] ? d.push(m) : f.push(m);
                            (m = T(
                                e,
                                ((i = f),
                                (s = 0 < (r = d).length),
                                (c = 0 < i.length),
                                (u = function (e, t, n, o, u) {
                                    var d,
                                        f,
                                        m,
                                        v = 0,
                                        y = "0",
                                        b = e && [],
                                        k = [],
                                        S = l,
                                        C = e || (c && a.find.TAG("*", u)),
                                        P = (w += null == S ? 1 : Math.random() || 0.1),
                                        x = C.length;
                                    for (u && (l = t == p || t || u); y !== x && null != (d = C[y]); y++) {
                                        if (c && d) {
                                            for (f = 0, t || d.ownerDocument == p || (h(d), (n = !g)); (m = i[f++]); )
                                                if (m(d, t || p, n)) {
                                                    o.push(d);
                                                    break;
                                                }
                                            u && (w = P);
                                        }
                                        s && ((d = !m && d) && v--, e && b.push(d));
                                    }
                                    if (((v += y), s && y !== v)) {
                                        for (f = 0; (m = r[f++]); ) m(b, k, t, n);
                                        if (e) {
                                            if (0 < v) for (; y--; ) b[y] || k[y] || (k[y] = _.call(o));
                                            k = we(k);
                                        }
                                        E.apply(o, k), u && !e && 0 < k.length && 1 < v + r.length && se.uniqueSort(o);
                                    }
                                    return u && ((w = P), (l = S)), b;
                                }),
                                s ? le(u) : u)
                            )).selector = e;
                        }
                        return m;
                    }),
                    (c = se.select = function (e, t, n, i) {
                        var r,
                            c,
                            l,
                            u,
                            d,
                            h = "function" == typeof e && e,
                            p = !i && o((e = h.selector || e));
                        if (((n = n || []), 1 === p.length)) {
                            if (2 < (c = p[0] = p[0].slice(0)).length && "ID" === (l = c[0]).type && 9 === t.nodeType && g && a.relative[c[1].type]) {
                                if (!(t = (a.find.ID(l.matches[0].replace(te, ne), t) || [])[0])) return n;
                                h && (t = t.parentNode), (e = e.slice(c.shift().value.length));
                            }
                            for (r = J.needsContext.test(e) ? 0 : c.length; r-- && ((l = c[r]), !a.relative[(u = l.type)]); )
                                if ((d = a.find[u]) && (i = d(l.matches[0].replace(te, ne), (ee.test(c[0].type) && ve(t.parentNode)) || t))) {
                                    if ((c.splice(r, 1), !(e = i.length && be(c)))) return E.apply(n, i), n;
                                    break;
                                }
                        }
                        return (h || s(e, p))(i, t, !g, n, !t || (ee.test(e) && ve(t.parentNode)) || t), n;
                    }),
                    (n.sortStable = k.split("").sort(N).join("") === k),
                    (n.detectDuplicates = !!d),
                    h(),
                    (n.sortDetached = ue(function (e) {
                        return 1 & e.compareDocumentPosition(p.createElement("fieldset"));
                    })),
                    ue(function (e) {
                        return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
                    }) ||
                        de("type|href|height|width", function (e, t, n) {
                            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                        }),
                    (n.attributes &&
                        ue(function (e) {
                            return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                        })) ||
                        de("value", function (e, t, n) {
                            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                        }),
                    ue(function (e) {
                        return null == e.getAttribute("disabled");
                    }) ||
                        de(I, function (e, t, n) {
                            var a;
                            if (!n) return !0 === e[t] ? t.toLowerCase() : (a = e.getAttributeNode(t)) && a.specified ? a.value : null;
                        }),
                    se
                );
            })(n);
            (P.find = T), (P.expr = T.selectors), (P.expr[":"] = P.expr.pseudos), (P.uniqueSort = P.unique = T.uniqueSort), (P.text = T.getText), (P.isXMLDoc = T.isXML), (P.contains = T.contains), (P.escapeSelector = T.escape);
            var A = function (e, t, n) {
                    for (var a = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                        if (1 === e.nodeType) {
                            if (i && P(e).is(n)) break;
                            a.push(e);
                        }
                    return a;
                },
                N = function (e, t) {
                    for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
                    return n;
                },
                D = P.expr.match.needsContext;
            function O(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
            }
            var _ = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function M(e, t, n) {
                return v(t)
                    ? P.grep(e, function (e, a) {
                          return !!t.call(e, a, e) !== n;
                      })
                    : t.nodeType
                    ? P.grep(e, function (e) {
                          return (e === t) !== n;
                      })
                    : "string" != typeof t
                    ? P.grep(e, function (e) {
                          return -1 < u.call(t, e) !== n;
                      })
                    : P.filter(t, e, n);
            }
            (P.filter = function (e, t, n) {
                var a = t[0];
                return (
                    n && (e = ":not(" + e + ")"),
                    1 === t.length && 1 === a.nodeType
                        ? P.find.matchesSelector(a, e)
                            ? [a]
                            : []
                        : P.find.matches(
                              e,
                              P.grep(t, function (e) {
                                  return 1 === e.nodeType;
                              })
                          )
                );
            }),
                P.fn.extend({
                    find: function (e) {
                        var t,
                            n,
                            a = this.length,
                            i = this;
                        if ("string" != typeof e)
                            return this.pushStack(
                                P(e).filter(function () {
                                    for (t = 0; t < a; t++) if (P.contains(i[t], this)) return !0;
                                })
                            );
                        for (n = this.pushStack([]), t = 0; t < a; t++) P.find(e, i[t], n);
                        return 1 < a ? P.uniqueSort(n) : n;
                    },
                    filter: function (e) {
                        return this.pushStack(M(this, e || [], !1));
                    },
                    not: function (e) {
                        return this.pushStack(M(this, e || [], !0));
                    },
                    is: function (e) {
                        return !!M(this, "string" == typeof e && D.test(e) ? P(e) : e || [], !1).length;
                    },
                });
            var E,
                R = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            ((P.fn.init = function (e, t, n) {
                var a, i;
                if (!e) return this;
                if (((n = n || E), "string" == typeof e)) {
                    if (!(a = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : R.exec(e)) || (!a[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                    if (a[1]) {
                        if (((t = t instanceof P ? t[0] : t), P.merge(this, P.parseHTML(a[1], t && t.nodeType ? t.ownerDocument || t : b, !0)), _.test(a[1]) && P.isPlainObject(t)))
                            for (a in t) v(this[a]) ? this[a](t[a]) : this.attr(a, t[a]);
                        return this;
                    }
                    return (i = b.getElementById(a[2])) && ((this[0] = i), (this.length = 1)), this;
                }
                return e.nodeType ? ((this[0] = e), (this.length = 1), this) : v(e) ? (void 0 !== n.ready ? n.ready(e) : e(P)) : P.makeArray(e, this);
            }).prototype = P.fn),
                (E = P(b));
            var L = /^(?:parents|prev(?:Until|All))/,
                I = { children: !0, contents: !0, next: !0, prev: !0 };
            function j(e, t) {
                for (; (e = e[t]) && 1 !== e.nodeType; );
                return e;
            }
            P.fn.extend({
                has: function (e) {
                    var t = P(e, this),
                        n = t.length;
                    return this.filter(function () {
                        for (var e = 0; e < n; e++) if (P.contains(this, t[e])) return !0;
                    });
                },
                closest: function (e, t) {
                    var n,
                        a = 0,
                        i = this.length,
                        r = [],
                        o = "string" != typeof e && P(e);
                    if (!D.test(e))
                        for (; a < i; a++)
                            for (n = this[a]; n && n !== t; n = n.parentNode)
                                if (n.nodeType < 11 && (o ? -1 < o.index(n) : 1 === n.nodeType && P.find.matchesSelector(n, e))) {
                                    r.push(n);
                                    break;
                                }
                    return this.pushStack(1 < r.length ? P.uniqueSort(r) : r);
                },
                index: function (e) {
                    return e ? ("string" == typeof e ? u.call(P(e), this[0]) : u.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                },
                add: function (e, t) {
                    return this.pushStack(P.uniqueSort(P.merge(this.get(), P(e, t))));
                },
                addBack: function (e) {
                    return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
                },
            }),
                P.each(
                    {
                        parent: function (e) {
                            var t = e.parentNode;
                            return t && 11 !== t.nodeType ? t : null;
                        },
                        parents: function (e) {
                            return A(e, "parentNode");
                        },
                        parentsUntil: function (e, t, n) {
                            return A(e, "parentNode", n);
                        },
                        next: function (e) {
                            return j(e, "nextSibling");
                        },
                        prev: function (e) {
                            return j(e, "previousSibling");
                        },
                        nextAll: function (e) {
                            return A(e, "nextSibling");
                        },
                        prevAll: function (e) {
                            return A(e, "previousSibling");
                        },
                        nextUntil: function (e, t, n) {
                            return A(e, "nextSibling", n);
                        },
                        prevUntil: function (e, t, n) {
                            return A(e, "previousSibling", n);
                        },
                        siblings: function (e) {
                            return N((e.parentNode || {}).firstChild, e);
                        },
                        children: function (e) {
                            return N(e.firstChild);
                        },
                        contents: function (e) {
                            return null != e.contentDocument && o(e.contentDocument) ? e.contentDocument : (O(e, "template") && (e = e.content || e), P.merge([], e.childNodes));
                        },
                    },
                    function (e, t) {
                        P.fn[e] = function (n, a) {
                            var i = P.map(this, t, n);
                            return "Until" !== e.slice(-5) && (a = n), a && "string" == typeof a && (i = P.filter(a, i)), 1 < this.length && (I[e] || P.uniqueSort(i), L.test(e) && i.reverse()), this.pushStack(i);
                        };
                    }
                );
            var B = /[^\x20\t\r\n\f]+/g;
            function z(e) {
                return e;
            }
            function F(e) {
                throw e;
            }
            function K(e, t, n, a) {
                var i;
                try {
                    e && v((i = e.promise)) ? i.call(e).done(t).fail(n) : e && v((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(a));
                } catch (e) {
                    n.apply(void 0, [e]);
                }
            }
            (P.Callbacks = function (e) {
                var t, n;
                e =
                    "string" == typeof e
                        ? ((t = e),
                          (n = {}),
                          P.each(t.match(B) || [], function (e, t) {
                              n[t] = !0;
                          }),
                          n)
                        : P.extend({}, e);
                var a,
                    i,
                    r,
                    o,
                    s = [],
                    c = [],
                    l = -1,
                    u = function () {
                        for (o = o || e.once, r = a = !0; c.length; l = -1) for (i = c.shift(); ++l < s.length; ) !1 === s[l].apply(i[0], i[1]) && e.stopOnFalse && ((l = s.length), (i = !1));
                        e.memory || (i = !1), (a = !1), o && (s = i ? [] : "");
                    },
                    d = {
                        add: function () {
                            return (
                                s &&
                                    (i && !a && ((l = s.length - 1), c.push(i)),
                                    (function t(n) {
                                        P.each(n, function (n, a) {
                                            v(a) ? (e.unique && d.has(a)) || s.push(a) : a && a.length && "string" !== w(a) && t(a);
                                        });
                                    })(arguments),
                                    i && !a && u()),
                                this
                            );
                        },
                        remove: function () {
                            return (
                                P.each(arguments, function (e, t) {
                                    for (var n; -1 < (n = P.inArray(t, s, n)); ) s.splice(n, 1), n <= l && l--;
                                }),
                                this
                            );
                        },
                        has: function (e) {
                            return e ? -1 < P.inArray(e, s) : 0 < s.length;
                        },
                        empty: function () {
                            return s && (s = []), this;
                        },
                        disable: function () {
                            return (o = c = []), (s = i = ""), this;
                        },
                        disabled: function () {
                            return !s;
                        },
                        lock: function () {
                            return (o = c = []), i || a || (s = i = ""), this;
                        },
                        locked: function () {
                            return !!o;
                        },
                        fireWith: function (e, t) {
                            return o || ((t = [e, (t = t || []).slice ? t.slice() : t]), c.push(t), a || u()), this;
                        },
                        fire: function () {
                            return d.fireWith(this, arguments), this;
                        },
                        fired: function () {
                            return !!r;
                        },
                    };
                return d;
            }),
                P.extend({
                    Deferred: function (e) {
                        var t = [
                                ["notify", "progress", P.Callbacks("memory"), P.Callbacks("memory"), 2],
                                ["resolve", "done", P.Callbacks("once memory"), P.Callbacks("once memory"), 0, "resolved"],
                                ["reject", "fail", P.Callbacks("once memory"), P.Callbacks("once memory"), 1, "rejected"],
                            ],
                            a = "pending",
                            i = {
                                state: function () {
                                    return a;
                                },
                                always: function () {
                                    return r.done(arguments).fail(arguments), this;
                                },
                                catch: function (e) {
                                    return i.then(null, e);
                                },
                                pipe: function () {
                                    var e = arguments;
                                    return P.Deferred(function (n) {
                                        P.each(t, function (t, a) {
                                            var i = v(e[a[4]]) && e[a[4]];
                                            r[a[1]](function () {
                                                var e = i && i.apply(this, arguments);
                                                e && v(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[a[0] + "With"](this, i ? [e] : arguments);
                                            });
                                        }),
                                            (e = null);
                                    }).promise();
                                },
                                then: function (e, a, i) {
                                    var r = 0;
                                    function o(e, t, a, i) {
                                        return function () {
                                            var s = this,
                                                c = arguments,
                                                l = function () {
                                                    var n, l;
                                                    if (!(e < r)) {
                                                        if ((n = a.apply(s, c)) === t.promise()) throw new TypeError("Thenable self-resolution");
                                                        (l = n && ("object" == typeof n || "function" == typeof n) && n.then),
                                                            v(l)
                                                                ? i
                                                                    ? l.call(n, o(r, t, z, i), o(r, t, F, i))
                                                                    : (r++, l.call(n, o(r, t, z, i), o(r, t, F, i), o(r, t, z, t.notifyWith)))
                                                                : (a !== z && ((s = void 0), (c = [n])), (i || t.resolveWith)(s, c));
                                                    }
                                                },
                                                u = i
                                                    ? l
                                                    : function () {
                                                          try {
                                                              l();
                                                          } catch (n) {
                                                              P.Deferred.exceptionHook && P.Deferred.exceptionHook(n, u.stackTrace), r <= e + 1 && (a !== F && ((s = void 0), (c = [n])), t.rejectWith(s, c));
                                                          }
                                                      };
                                            e ? u() : (P.Deferred.getStackHook && (u.stackTrace = P.Deferred.getStackHook()), n.setTimeout(u));
                                        };
                                    }
                                    return P.Deferred(function (n) {
                                        t[0][3].add(o(0, n, v(i) ? i : z, n.notifyWith)), t[1][3].add(o(0, n, v(e) ? e : z)), t[2][3].add(o(0, n, v(a) ? a : F));
                                    }).promise();
                                },
                                promise: function (e) {
                                    return null != e ? P.extend(e, i) : i;
                                },
                            },
                            r = {};
                        return (
                            P.each(t, function (e, n) {
                                var o = n[2],
                                    s = n[5];
                                (i[n[1]] = o.add),
                                    s &&
                                        o.add(
                                            function () {
                                                a = s;
                                            },
                                            t[3 - e][2].disable,
                                            t[3 - e][3].disable,
                                            t[0][2].lock,
                                            t[0][3].lock
                                        ),
                                    o.add(n[3].fire),
                                    (r[n[0]] = function () {
                                        return r[n[0] + "With"](this === r ? void 0 : this, arguments), this;
                                    }),
                                    (r[n[0] + "With"] = o.fireWith);
                            }),
                            i.promise(r),
                            e && e.call(r, r),
                            r
                        );
                    },
                    when: function (e) {
                        var t = arguments.length,
                            n = t,
                            a = Array(n),
                            i = s.call(arguments),
                            r = P.Deferred(),
                            o = function (e) {
                                return function (n) {
                                    (a[e] = this), (i[e] = 1 < arguments.length ? s.call(arguments) : n), --t || r.resolveWith(a, i);
                                };
                            };
                        if (t <= 1 && (K(e, r.done(o(n)).resolve, r.reject, !t), "pending" === r.state() || v(i[n] && i[n].then))) return r.then();
                        for (; n--; ) K(i[n], o(n), r.reject);
                        return r.promise();
                    },
                });
            var G = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            (P.Deferred.exceptionHook = function (e, t) {
                n.console && n.console.warn && e && G.test(e.name) && n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
            }),
                (P.readyException = function (e) {
                    n.setTimeout(function () {
                        throw e;
                    });
                });
            var V = P.Deferred();
            function H() {
                b.removeEventListener("DOMContentLoaded", H), n.removeEventListener("load", H), P.ready();
            }
            (P.fn.ready = function (e) {
                return (
                    V.then(e).catch(function (e) {
                        P.readyException(e);
                    }),
                    this
                );
            }),
                P.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function (e) {
                        (!0 === e ? --P.readyWait : P.isReady) || ((P.isReady = !0) !== e && 0 < --P.readyWait) || V.resolveWith(b, [P]);
                    },
                }),
                (P.ready.then = V.then),
                "complete" === b.readyState || ("loading" !== b.readyState && !b.documentElement.doScroll) ? n.setTimeout(P.ready) : (b.addEventListener("DOMContentLoaded", H), n.addEventListener("load", H));
            var q = function (e, t, n, a, i, r, o) {
                    var s = 0,
                        c = e.length,
                        l = null == n;
                    if ("object" === w(n)) for (s in ((i = !0), n)) q(e, t, s, n[s], !0, r, o);
                    else if (
                        void 0 !== a &&
                        ((i = !0),
                        v(a) || (o = !0),
                        l &&
                            (o
                                ? (t.call(e, a), (t = null))
                                : ((l = t),
                                  (t = function (e, t, n) {
                                      return l.call(P(e), n);
                                  }))),
                        t)
                    )
                        for (; s < c; s++) t(e[s], n, o ? a : a.call(e[s], s, t(e[s], n)));
                    return i ? e : l ? t.call(e) : c ? t(e[0], n) : r;
                },
                W = /^-ms-/,
                U = /-([a-z])/g;
            function J(e, t) {
                return t.toUpperCase();
            }
            function $(e) {
                return e.replace(W, "ms-").replace(U, J);
            }
            var Z = function (e) {
                return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
            };
            function Q() {
                this.expando = P.expando + Q.uid++;
            }
            (Q.uid = 1),
                (Q.prototype = {
                    cache: function (e) {
                        var t = e[this.expando];
                        return t || ((t = Object.create(null)), Z(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
                    },
                    set: function (e, t, n) {
                        var a,
                            i = this.cache(e);
                        if ("string" == typeof t) i[$(t)] = n;
                        else for (a in t) i[$(a)] = t[a];
                        return i;
                    },
                    get: function (e, t) {
                        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][$(t)];
                    },
                    access: function (e, t, n) {
                        return void 0 === t || (t && "string" == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
                    },
                    remove: function (e, t) {
                        var n,
                            a = e[this.expando];
                        if (void 0 !== a) {
                            if (void 0 !== t) {
                                n = (t = Array.isArray(t) ? t.map($) : (t = $(t)) in a ? [t] : t.match(B) || []).length;
                                for (; n--; ) delete a[t[n]];
                            }
                            (void 0 === t || P.isEmptyObject(a)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                        }
                    },
                    hasData: function (e) {
                        var t = e[this.expando];
                        return void 0 !== t && !P.isEmptyObject(t);
                    },
                });
            var Y = new Q(),
                X = new Q(),
                ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                te = /[A-Z]/g;
            function ne(e, t, n) {
                var a, i;
                if (void 0 === n && 1 === e.nodeType)
                    if (((a = "data-" + t.replace(te, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(a)))) {
                        try {
                            n = "true" === (i = n) || ("false" !== i && ("null" === i ? null : i === +i + "" ? +i : ee.test(i) ? JSON.parse(i) : i));
                        } catch (e) {}
                        X.set(e, t, n);
                    } else n = void 0;
                return n;
            }
            P.extend({
                hasData: function (e) {
                    return X.hasData(e) || Y.hasData(e);
                },
                data: function (e, t, n) {
                    return X.access(e, t, n);
                },
                removeData: function (e, t) {
                    X.remove(e, t);
                },
                _data: function (e, t, n) {
                    return Y.access(e, t, n);
                },
                _removeData: function (e, t) {
                    Y.remove(e, t);
                },
            }),
                P.fn.extend({
                    data: function (e, t) {
                        var n,
                            a,
                            i,
                            r = this[0],
                            o = r && r.attributes;
                        if (void 0 === e) {
                            if (this.length && ((i = X.get(r)), 1 === r.nodeType && !Y.get(r, "hasDataAttrs"))) {
                                for (n = o.length; n--; ) o[n] && 0 === (a = o[n].name).indexOf("data-") && ((a = $(a.slice(5))), ne(r, a, i[a]));
                                Y.set(r, "hasDataAttrs", !0);
                            }
                            return i;
                        }
                        return "object" == typeof e
                            ? this.each(function () {
                                  X.set(this, e);
                              })
                            : q(
                                  this,
                                  function (t) {
                                      var n;
                                      if (r && void 0 === t) return void 0 !== (n = X.get(r, e)) || void 0 !== (n = ne(r, e)) ? n : void 0;
                                      this.each(function () {
                                          X.set(this, e, t);
                                      });
                                  },
                                  null,
                                  t,
                                  1 < arguments.length,
                                  null,
                                  !0
                              );
                    },
                    removeData: function (e) {
                        return this.each(function () {
                            X.remove(this, e);
                        });
                    },
                }),
                P.extend({
                    queue: function (e, t, n) {
                        var a;
                        if (e) return (t = (t || "fx") + "queue"), (a = Y.get(e, t)), n && (!a || Array.isArray(n) ? (a = Y.access(e, t, P.makeArray(n))) : a.push(n)), a || [];
                    },
                    dequeue: function (e, t) {
                        t = t || "fx";
                        var n = P.queue(e, t),
                            a = n.length,
                            i = n.shift(),
                            r = P._queueHooks(e, t);
                        "inprogress" === i && ((i = n.shift()), a--),
                            i &&
                                ("fx" === t && n.unshift("inprogress"),
                                delete r.stop,
                                i.call(
                                    e,
                                    function () {
                                        P.dequeue(e, t);
                                    },
                                    r
                                )),
                            !a && r && r.empty.fire();
                    },
                    _queueHooks: function (e, t) {
                        var n = t + "queueHooks";
                        return (
                            Y.get(e, n) ||
                            Y.access(e, n, {
                                empty: P.Callbacks("once memory").add(function () {
                                    Y.remove(e, [t + "queue", n]);
                                }),
                            })
                        );
                    },
                }),
                P.fn.extend({
                    queue: function (e, t) {
                        var n = 2;
                        return (
                            "string" != typeof e && ((t = e), (e = "fx"), n--),
                            arguments.length < n
                                ? P.queue(this[0], e)
                                : void 0 === t
                                ? this
                                : this.each(function () {
                                      var n = P.queue(this, e, t);
                                      P._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && P.dequeue(this, e);
                                  })
                        );
                    },
                    dequeue: function (e) {
                        return this.each(function () {
                            P.dequeue(this, e);
                        });
                    },
                    clearQueue: function (e) {
                        return this.queue(e || "fx", []);
                    },
                    promise: function (e, t) {
                        var n,
                            a = 1,
                            i = P.Deferred(),
                            r = this,
                            o = this.length,
                            s = function () {
                                --a || i.resolveWith(r, [r]);
                            };
                        for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; o--; ) (n = Y.get(r[o], e + "queueHooks")) && n.empty && (a++, n.empty.add(s));
                        return s(), i.promise(t);
                    },
                });
            var ae = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                ie = new RegExp("^(?:([+-])=|)(" + ae + ")([a-z%]*)$", "i"),
                re = ["Top", "Right", "Bottom", "Left"],
                oe = b.documentElement,
                se = function (e) {
                    return P.contains(e.ownerDocument, e);
                },
                ce = { composed: !0 };
            oe.getRootNode &&
                (se = function (e) {
                    return P.contains(e.ownerDocument, e) || e.getRootNode(ce) === e.ownerDocument;
                });
            var le = function (e, t) {
                    return "none" === (e = t || e).style.display || ("" === e.style.display && se(e) && "none" === P.css(e, "display"));
                },
                ue = {};
            function de(e, t) {
                for (var n, a, i, r, o, s, c, l = [], u = 0, d = e.length; u < d; u++)
                    (a = e[u]).style &&
                        ((n = a.style.display),
                        t
                            ? ("none" === n && ((l[u] = Y.get(a, "display") || null), l[u] || (a.style.display = "")),
                              "" === a.style.display &&
                                  le(a) &&
                                  (l[u] =
                                      ((c = o = r = void 0),
                                      (o = (i = a).ownerDocument),
                                      (s = i.nodeName),
                                      (c = ue[s]) || ((r = o.body.appendChild(o.createElement(s))), (c = P.css(r, "display")), r.parentNode.removeChild(r), "none" === c && (c = "block"), (ue[s] = c)))))
                            : "none" !== n && ((l[u] = "none"), Y.set(a, "display", n)));
                for (u = 0; u < d; u++) null != l[u] && (e[u].style.display = l[u]);
                return e;
            }
            P.fn.extend({
                show: function () {
                    return de(this, !0);
                },
                hide: function () {
                    return de(this);
                },
                toggle: function (e) {
                    return "boolean" == typeof e
                        ? e
                            ? this.show()
                            : this.hide()
                        : this.each(function () {
                              le(this) ? P(this).show() : P(this).hide();
                          });
                },
            });
            var he,
                pe,
                fe = /^(?:checkbox|radio)$/i,
                ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                me = /^$|^module$|\/(?:java|ecma)script/i;
            (he = b.createDocumentFragment().appendChild(b.createElement("div"))),
                (pe = b.createElement("input")).setAttribute("type", "radio"),
                pe.setAttribute("checked", "checked"),
                pe.setAttribute("name", "t"),
                he.appendChild(pe),
                (m.checkClone = he.cloneNode(!0).cloneNode(!0).lastChild.checked),
                (he.innerHTML = "<textarea>x</textarea>"),
                (m.noCloneChecked = !!he.cloneNode(!0).lastChild.defaultValue),
                (he.innerHTML = "<option></option>"),
                (m.option = !!he.lastChild);
            var ve = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
            function ye(e, t) {
                var n;
                return (n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : []), void 0 === t || (t && O(e, t)) ? P.merge([e], n) : n;
            }
            function be(e, t) {
                for (var n = 0, a = e.length; n < a; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
            }
            (ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead), (ve.th = ve.td), m.option || (ve.optgroup = ve.option = [1, "<select multiple='multiple'>", "</select>"]);
            var ke = /<|&#?\w+;/;
            function Se(e, t, n, a, i) {
                for (var r, o, s, c, l, u, d = t.createDocumentFragment(), h = [], p = 0, f = e.length; p < f; p++)
                    if ((r = e[p]) || 0 === r)
                        if ("object" === w(r)) P.merge(h, r.nodeType ? [r] : r);
                        else if (ke.test(r)) {
                            for (o = o || d.appendChild(t.createElement("div")), s = (ge.exec(r) || ["", ""])[1].toLowerCase(), c = ve[s] || ve._default, o.innerHTML = c[1] + P.htmlPrefilter(r) + c[2], u = c[0]; u--; ) o = o.lastChild;
                            P.merge(h, o.childNodes), ((o = d.firstChild).textContent = "");
                        } else h.push(t.createTextNode(r));
                for (d.textContent = "", p = 0; (r = h[p++]); )
                    if (a && -1 < P.inArray(r, a)) i && i.push(r);
                    else if (((l = se(r)), (o = ye(d.appendChild(r), "script")), l && be(o), n)) for (u = 0; (r = o[u++]); ) me.test(r.type || "") && n.push(r);
                return d;
            }
            var we = /^key/,
                Ce = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                Pe = /^([^.]*)(?:\.(.+)|)/;
            function xe() {
                return !0;
            }
            function Te() {
                return !1;
            }
            function Ae(e, t) {
                return (
                    (e ===
                        (function () {
                            try {
                                return b.activeElement;
                            } catch (e) {}
                        })()) ==
                    ("focus" === t)
                );
            }
            function Ne(e, t, n, a, i, r) {
                var o, s;
                if ("object" == typeof t) {
                    for (s in ("string" != typeof n && ((a = a || n), (n = void 0)), t)) Ne(e, s, n, a, t[s], r);
                    return e;
                }
                if ((null == a && null == i ? ((i = n), (a = n = void 0)) : null == i && ("string" == typeof n ? ((i = a), (a = void 0)) : ((i = a), (a = n), (n = void 0))), !1 === i)) i = Te;
                else if (!i) return e;
                return (
                    1 === r &&
                        ((o = i),
                        ((i = function (e) {
                            return P().off(e), o.apply(this, arguments);
                        }).guid = o.guid || (o.guid = P.guid++))),
                    e.each(function () {
                        P.event.add(this, t, i, a, n);
                    })
                );
            }
            function De(e, t, n) {
                n
                    ? (Y.set(e, t, !1),
                      P.event.add(e, t, {
                          namespace: !1,
                          handler: function (e) {
                              var a,
                                  i,
                                  r = Y.get(this, t);
                              if (1 & e.isTrigger && this[t]) {
                                  if (r.length) (P.event.special[t] || {}).delegateType && e.stopPropagation();
                                  else if (((r = s.call(arguments)), Y.set(this, t, r), (a = n(this, t)), this[t](), r !== (i = Y.get(this, t)) || a ? Y.set(this, t, !1) : (i = {}), r !== i))
                                      return e.stopImmediatePropagation(), e.preventDefault(), i.value;
                              } else r.length && (Y.set(this, t, { value: P.event.trigger(P.extend(r[0], P.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation());
                          },
                      }))
                    : void 0 === Y.get(e, t) && P.event.add(e, t, xe);
            }
            (P.event = {
                global: {},
                add: function (e, t, n, a, i) {
                    var r,
                        o,
                        s,
                        c,
                        l,
                        u,
                        d,
                        h,
                        p,
                        f,
                        g,
                        m = Y.get(e);
                    if (Z(e))
                        for (
                            n.handler && ((n = (r = n).handler), (i = r.selector)),
                                i && P.find.matchesSelector(oe, i),
                                n.guid || (n.guid = P.guid++),
                                (c = m.events) || (c = m.events = Object.create(null)),
                                (o = m.handle) ||
                                    (o = m.handle = function (t) {
                                        return void 0 !== P && P.event.triggered !== t.type ? P.event.dispatch.apply(e, arguments) : void 0;
                                    }),
                                l = (t = (t || "").match(B) || [""]).length;
                            l--;

                        )
                            (p = g = (s = Pe.exec(t[l]) || [])[1]),
                                (f = (s[2] || "").split(".").sort()),
                                p &&
                                    ((d = P.event.special[p] || {}),
                                    (p = (i ? d.delegateType : d.bindType) || p),
                                    (d = P.event.special[p] || {}),
                                    (u = P.extend({ type: p, origType: g, data: a, handler: n, guid: n.guid, selector: i, needsContext: i && P.expr.match.needsContext.test(i), namespace: f.join(".") }, r)),
                                    (h = c[p]) || (((h = c[p] = []).delegateCount = 0), (d.setup && !1 !== d.setup.call(e, a, f, o)) || (e.addEventListener && e.addEventListener(p, o))),
                                    d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)),
                                    i ? h.splice(h.delegateCount++, 0, u) : h.push(u),
                                    (P.event.global[p] = !0));
                },
                remove: function (e, t, n, a, i) {
                    var r,
                        o,
                        s,
                        c,
                        l,
                        u,
                        d,
                        h,
                        p,
                        f,
                        g,
                        m = Y.hasData(e) && Y.get(e);
                    if (m && (c = m.events)) {
                        for (l = (t = (t || "").match(B) || [""]).length; l--; )
                            if (((p = g = (s = Pe.exec(t[l]) || [])[1]), (f = (s[2] || "").split(".").sort()), p)) {
                                for (d = P.event.special[p] || {}, h = c[(p = (a ? d.delegateType : d.bindType) || p)] || [], s = s[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = r = h.length; r--; )
                                    (u = h[r]),
                                        (!i && g !== u.origType) ||
                                            (n && n.guid !== u.guid) ||
                                            (s && !s.test(u.namespace)) ||
                                            (a && a !== u.selector && ("**" !== a || !u.selector)) ||
                                            (h.splice(r, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(e, u));
                                o && !h.length && ((d.teardown && !1 !== d.teardown.call(e, f, m.handle)) || P.removeEvent(e, p, m.handle), delete c[p]);
                            } else for (p in c) P.event.remove(e, p + t[l], n, a, !0);
                        P.isEmptyObject(c) && Y.remove(e, "handle events");
                    }
                },
                dispatch: function (e) {
                    var t,
                        n,
                        a,
                        i,
                        r,
                        o,
                        s = new Array(arguments.length),
                        c = P.event.fix(e),
                        l = (Y.get(this, "events") || Object.create(null))[c.type] || [],
                        u = P.event.special[c.type] || {};
                    for (s[0] = c, t = 1; t < arguments.length; t++) s[t] = arguments[t];
                    if (((c.delegateTarget = this), !u.preDispatch || !1 !== u.preDispatch.call(this, c))) {
                        for (o = P.event.handlers.call(this, c, l), t = 0; (i = o[t++]) && !c.isPropagationStopped(); )
                            for (c.currentTarget = i.elem, n = 0; (r = i.handlers[n++]) && !c.isImmediatePropagationStopped(); )
                                (c.rnamespace && !1 !== r.namespace && !c.rnamespace.test(r.namespace)) ||
                                    ((c.handleObj = r), (c.data = r.data), void 0 !== (a = ((P.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s)) && !1 === (c.result = a) && (c.preventDefault(), c.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, c), c.result;
                    }
                },
                handlers: function (e, t) {
                    var n,
                        a,
                        i,
                        r,
                        o,
                        s = [],
                        c = t.delegateCount,
                        l = e.target;
                    if (c && l.nodeType && !("click" === e.type && 1 <= e.button))
                        for (; l !== this; l = l.parentNode || this)
                            if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                                for (r = [], o = {}, n = 0; n < c; n++) void 0 === o[(i = (a = t[n]).selector + " ")] && (o[i] = a.needsContext ? -1 < P(i, this).index(l) : P.find(i, this, null, [l]).length), o[i] && r.push(a);
                                r.length && s.push({ elem: l, handlers: r });
                            }
                    return (l = this), c < t.length && s.push({ elem: l, handlers: t.slice(c) }), s;
                },
                addProp: function (e, t) {
                    Object.defineProperty(P.Event.prototype, e, {
                        enumerable: !0,
                        configurable: !0,
                        get: v(t)
                            ? function () {
                                  if (this.originalEvent) return t(this.originalEvent);
                              }
                            : function () {
                                  if (this.originalEvent) return this.originalEvent[e];
                              },
                        set: function (t) {
                            Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
                        },
                    });
                },
                fix: function (e) {
                    return e[P.expando] ? e : new P.Event(e);
                },
                special: {
                    load: { noBubble: !0 },
                    click: {
                        setup: function (e) {
                            var t = this || e;
                            return fe.test(t.type) && t.click && O(t, "input") && De(t, "click", xe), !1;
                        },
                        trigger: function (e) {
                            var t = this || e;
                            return fe.test(t.type) && t.click && O(t, "input") && De(t, "click"), !0;
                        },
                        _default: function (e) {
                            var t = e.target;
                            return (fe.test(t.type) && t.click && O(t, "input") && Y.get(t, "click")) || O(t, "a");
                        },
                    },
                    beforeunload: {
                        postDispatch: function (e) {
                            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                        },
                    },
                },
            }),
                (P.removeEvent = function (e, t, n) {
                    e.removeEventListener && e.removeEventListener(t, n);
                }),
                (P.Event = function (e, t) {
                    if (!(this instanceof P.Event)) return new P.Event(e, t);
                    e && e.type
                        ? ((this.originalEvent = e),
                          (this.type = e.type),
                          (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? xe : Te),
                          (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                          (this.currentTarget = e.currentTarget),
                          (this.relatedTarget = e.relatedTarget))
                        : (this.type = e),
                        t && P.extend(this, t),
                        (this.timeStamp = (e && e.timeStamp) || Date.now()),
                        (this[P.expando] = !0);
                }),
                (P.Event.prototype = {
                    constructor: P.Event,
                    isDefaultPrevented: Te,
                    isPropagationStopped: Te,
                    isImmediatePropagationStopped: Te,
                    isSimulated: !1,
                    preventDefault: function () {
                        var e = this.originalEvent;
                        (this.isDefaultPrevented = xe), e && !this.isSimulated && e.preventDefault();
                    },
                    stopPropagation: function () {
                        var e = this.originalEvent;
                        (this.isPropagationStopped = xe), e && !this.isSimulated && e.stopPropagation();
                    },
                    stopImmediatePropagation: function () {
                        var e = this.originalEvent;
                        (this.isImmediatePropagationStopped = xe), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
                    },
                }),
                P.each(
                    {
                        altKey: !0,
                        bubbles: !0,
                        cancelable: !0,
                        changedTouches: !0,
                        ctrlKey: !0,
                        detail: !0,
                        eventPhase: !0,
                        metaKey: !0,
                        pageX: !0,
                        pageY: !0,
                        shiftKey: !0,
                        view: !0,
                        char: !0,
                        code: !0,
                        charCode: !0,
                        key: !0,
                        keyCode: !0,
                        button: !0,
                        buttons: !0,
                        clientX: !0,
                        clientY: !0,
                        offsetX: !0,
                        offsetY: !0,
                        pointerId: !0,
                        pointerType: !0,
                        screenX: !0,
                        screenY: !0,
                        targetTouches: !0,
                        toElement: !0,
                        touches: !0,
                        which: function (e) {
                            var t = e.button;
                            return null == e.which && we.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && Ce.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                        },
                    },
                    P.event.addProp
                ),
                P.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                    P.event.special[e] = {
                        setup: function () {
                            return De(this, e, Ae), !1;
                        },
                        trigger: function () {
                            return De(this, e), !0;
                        },
                        delegateType: t,
                    };
                }),
                P.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
                    P.event.special[e] = {
                        delegateType: t,
                        bindType: t,
                        handle: function (e) {
                            var n,
                                a = e.relatedTarget,
                                i = e.handleObj;
                            return (a && (a === this || P.contains(this, a))) || ((e.type = i.origType), (n = i.handler.apply(this, arguments)), (e.type = t)), n;
                        },
                    };
                }),
                P.fn.extend({
                    on: function (e, t, n, a) {
                        return Ne(this, e, t, n, a);
                    },
                    one: function (e, t, n, a) {
                        return Ne(this, e, t, n, a, 1);
                    },
                    off: function (e, t, n) {
                        var a, i;
                        if (e && e.preventDefault && e.handleObj) return (a = e.handleObj), P(e.delegateTarget).off(a.namespace ? a.origType + "." + a.namespace : a.origType, a.selector, a.handler), this;
                        if ("object" == typeof e) {
                            for (i in e) this.off(i, t, e[i]);
                            return this;
                        }
                        return (
                            (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
                            !1 === n && (n = Te),
                            this.each(function () {
                                P.event.remove(this, e, n, t);
                            })
                        );
                    },
                });
            var Oe = /<script|<style|<link/i,
                _e = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function Ee(e, t) {
                return (O(e, "table") && O(11 !== t.nodeType ? t : t.firstChild, "tr") && P(e).children("tbody")[0]) || e;
            }
            function Re(e) {
                return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
            }
            function Le(e) {
                return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
            }
            function Ie(e, t) {
                var n, a, i, r, o, s;
                if (1 === t.nodeType) {
                    if (Y.hasData(e) && (s = Y.get(e).events)) for (i in (Y.remove(t, "handle events"), s)) for (n = 0, a = s[i].length; n < a; n++) P.event.add(t, i, s[i][n]);
                    X.hasData(e) && ((r = X.access(e)), (o = P.extend({}, r)), X.set(t, o));
                }
            }
            function je(e, t, n, a) {
                t = c(t);
                var i,
                    r,
                    o,
                    s,
                    l,
                    u,
                    d = 0,
                    h = e.length,
                    p = h - 1,
                    f = t[0],
                    g = v(f);
                if (g || (1 < h && "string" == typeof f && !m.checkClone && _e.test(f)))
                    return e.each(function (i) {
                        var r = e.eq(i);
                        g && (t[0] = f.call(this, i, r.html())), je(r, t, n, a);
                    });
                if (h && ((r = (i = Se(t, e[0].ownerDocument, !1, e, a)).firstChild), 1 === i.childNodes.length && (i = r), r || a)) {
                    for (s = (o = P.map(ye(i, "script"), Re)).length; d < h; d++) (l = i), d !== p && ((l = P.clone(l, !0, !0)), s && P.merge(o, ye(l, "script"))), n.call(e[d], l, d);
                    if (s)
                        for (u = o[o.length - 1].ownerDocument, P.map(o, Le), d = 0; d < s; d++)
                            (l = o[d]),
                                me.test(l.type || "") &&
                                    !Y.access(l, "globalEval") &&
                                    P.contains(u, l) &&
                                    (l.src && "module" !== (l.type || "").toLowerCase() ? P._evalUrl && !l.noModule && P._evalUrl(l.src, { nonce: l.nonce || l.getAttribute("nonce") }, u) : S(l.textContent.replace(Me, ""), l, u));
                }
                return e;
            }
            function Be(e, t, n) {
                for (var a, i = t ? P.filter(t, e) : e, r = 0; null != (a = i[r]); r++) n || 1 !== a.nodeType || P.cleanData(ye(a)), a.parentNode && (n && se(a) && be(ye(a, "script")), a.parentNode.removeChild(a));
                return e;
            }
            P.extend({
                htmlPrefilter: function (e) {
                    return e;
                },
                clone: function (e, t, n) {
                    var a,
                        i,
                        r,
                        o,
                        s,
                        c,
                        l,
                        u = e.cloneNode(!0),
                        d = se(e);
                    if (!(m.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || P.isXMLDoc(e)))
                        for (o = ye(u), a = 0, i = (r = ye(e)).length; a < i; a++)
                            (s = r[a]), "input" === (l = (c = o[a]).nodeName.toLowerCase()) && fe.test(s.type) ? (c.checked = s.checked) : ("input" !== l && "textarea" !== l) || (c.defaultValue = s.defaultValue);
                    if (t)
                        if (n) for (r = r || ye(e), o = o || ye(u), a = 0, i = r.length; a < i; a++) Ie(r[a], o[a]);
                        else Ie(e, u);
                    return 0 < (o = ye(u, "script")).length && be(o, !d && ye(e, "script")), u;
                },
                cleanData: function (e) {
                    for (var t, n, a, i = P.event.special, r = 0; void 0 !== (n = e[r]); r++)
                        if (Z(n)) {
                            if ((t = n[Y.expando])) {
                                if (t.events) for (a in t.events) i[a] ? P.event.remove(n, a) : P.removeEvent(n, a, t.handle);
                                n[Y.expando] = void 0;
                            }
                            n[X.expando] && (n[X.expando] = void 0);
                        }
                },
            }),
                P.fn.extend({
                    detach: function (e) {
                        return Be(this, e, !0);
                    },
                    remove: function (e) {
                        return Be(this, e);
                    },
                    text: function (e) {
                        return q(
                            this,
                            function (e) {
                                return void 0 === e
                                    ? P.text(this)
                                    : this.empty().each(function () {
                                          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                                      });
                            },
                            null,
                            e,
                            arguments.length
                        );
                    },
                    append: function () {
                        return je(this, arguments, function (e) {
                            (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Ee(this, e).appendChild(e);
                        });
                    },
                    prepend: function () {
                        return je(this, arguments, function (e) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var t = Ee(this, e);
                                t.insertBefore(e, t.firstChild);
                            }
                        });
                    },
                    before: function () {
                        return je(this, arguments, function (e) {
                            this.parentNode && this.parentNode.insertBefore(e, this);
                        });
                    },
                    after: function () {
                        return je(this, arguments, function (e) {
                            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                        });
                    },
                    empty: function () {
                        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (P.cleanData(ye(e, !1)), (e.textContent = ""));
                        return this;
                    },
                    clone: function (e, t) {
                        return (
                            (e = null != e && e),
                            (t = null == t ? e : t),
                            this.map(function () {
                                return P.clone(this, e, t);
                            })
                        );
                    },
                    html: function (e) {
                        return q(
                            this,
                            function (e) {
                                var t = this[0] || {},
                                    n = 0,
                                    a = this.length;
                                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                                if ("string" == typeof e && !Oe.test(e) && !ve[(ge.exec(e) || ["", ""])[1].toLowerCase()]) {
                                    e = P.htmlPrefilter(e);
                                    try {
                                        for (; n < a; n++) 1 === (t = this[n] || {}).nodeType && (P.cleanData(ye(t, !1)), (t.innerHTML = e));
                                        t = 0;
                                    } catch (e) {}
                                }
                                t && this.empty().append(e);
                            },
                            null,
                            e,
                            arguments.length
                        );
                    },
                    replaceWith: function () {
                        var e = [];
                        return je(
                            this,
                            arguments,
                            function (t) {
                                var n = this.parentNode;
                                P.inArray(this, e) < 0 && (P.cleanData(ye(this)), n && n.replaceChild(t, this));
                            },
                            e
                        );
                    },
                }),
                P.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
                    P.fn[e] = function (e) {
                        for (var n, a = [], i = P(e), r = i.length - 1, o = 0; o <= r; o++) (n = o === r ? this : this.clone(!0)), P(i[o])[t](n), l.apply(a, n.get());
                        return this.pushStack(a);
                    };
                });
            var ze = new RegExp("^(" + ae + ")(?!px)[a-z%]+$", "i"),
                Fe = function (e) {
                    var t = e.ownerDocument.defaultView;
                    return (t && t.opener) || (t = n), t.getComputedStyle(e);
                },
                Ke = function (e, t, n) {
                    var a,
                        i,
                        r = {};
                    for (i in t) (r[i] = e.style[i]), (e.style[i] = t[i]);
                    for (i in ((a = n.call(e)), t)) e.style[i] = r[i];
                    return a;
                },
                Ge = new RegExp(re.join("|"), "i");
            function Ve(e, t, n) {
                var a,
                    i,
                    r,
                    o,
                    s = e.style;
                return (
                    (n = n || Fe(e)) &&
                        ("" !== (o = n.getPropertyValue(t) || n[t]) || se(e) || (o = P.style(e, t)),
                        !m.pixelBoxStyles() && ze.test(o) && Ge.test(t) && ((a = s.width), (i = s.minWidth), (r = s.maxWidth), (s.minWidth = s.maxWidth = s.width = o), (o = n.width), (s.width = a), (s.minWidth = i), (s.maxWidth = r))),
                    void 0 !== o ? o + "" : o
                );
            }
            function He(e, t) {
                return {
                    get: function () {
                        if (!e()) return (this.get = t).apply(this, arguments);
                        delete this.get;
                    },
                };
            }
            !(function () {
                function e() {
                    if (u) {
                        (l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                            (u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                            oe.appendChild(l).appendChild(u);
                        var e = n.getComputedStyle(u);
                        (a = "1%" !== e.top),
                            (c = 12 === t(e.marginLeft)),
                            (u.style.right = "60%"),
                            (o = 36 === t(e.right)),
                            (i = 36 === t(e.width)),
                            (u.style.position = "absolute"),
                            (r = 12 === t(u.offsetWidth / 3)),
                            oe.removeChild(l),
                            (u = null);
                    }
                }
                function t(e) {
                    return Math.round(parseFloat(e));
                }
                var a,
                    i,
                    r,
                    o,
                    s,
                    c,
                    l = b.createElement("div"),
                    u = b.createElement("div");
                u.style &&
                    ((u.style.backgroundClip = "content-box"),
                    (u.cloneNode(!0).style.backgroundClip = ""),
                    (m.clearCloneStyle = "content-box" === u.style.backgroundClip),
                    P.extend(m, {
                        boxSizingReliable: function () {
                            return e(), i;
                        },
                        pixelBoxStyles: function () {
                            return e(), o;
                        },
                        pixelPosition: function () {
                            return e(), a;
                        },
                        reliableMarginLeft: function () {
                            return e(), c;
                        },
                        scrollboxSize: function () {
                            return e(), r;
                        },
                        reliableTrDimensions: function () {
                            var e, t, a, i;
                            return (
                                null == s &&
                                    ((e = b.createElement("table")),
                                    (t = b.createElement("tr")),
                                    (a = b.createElement("div")),
                                    (e.style.cssText = "position:absolute;left:-11111px"),
                                    (t.style.height = "1px"),
                                    (a.style.height = "9px"),
                                    oe.appendChild(e).appendChild(t).appendChild(a),
                                    (i = n.getComputedStyle(t)),
                                    (s = 3 < parseInt(i.height)),
                                    oe.removeChild(e)),
                                s
                            );
                        },
                    }));
            })();
            var qe = ["Webkit", "Moz", "ms"],
                We = b.createElement("div").style,
                Ue = {};
            function Je(e) {
                return (
                    P.cssProps[e] ||
                    Ue[e] ||
                    (e in We
                        ? e
                        : (Ue[e] =
                              (function (e) {
                                  for (var t = e[0].toUpperCase() + e.slice(1), n = qe.length; n--; ) if ((e = qe[n] + t) in We) return e;
                              })(e) || e))
                );
            }
            var $e,
                Ze,
                Qe = /^(none|table(?!-c[ea]).+)/,
                Ye = /^--/,
                Xe = { position: "absolute", visibility: "hidden", display: "block" },
                et = { letterSpacing: "0", fontWeight: "400" };
            function tt(e, t, n) {
                var a = ie.exec(t);
                return a ? Math.max(0, a[2] - (n || 0)) + (a[3] || "px") : t;
            }
            function nt(e, t, n, a, i, r) {
                var o = "width" === t ? 1 : 0,
                    s = 0,
                    c = 0;
                if (n === (a ? "border" : "content")) return 0;
                for (; o < 4; o += 2)
                    "margin" === n && (c += P.css(e, n + re[o], !0, i)),
                        a
                            ? ("content" === n && (c -= P.css(e, "padding" + re[o], !0, i)), "margin" !== n && (c -= P.css(e, "border" + re[o] + "Width", !0, i)))
                            : ((c += P.css(e, "padding" + re[o], !0, i)), "padding" !== n ? (c += P.css(e, "border" + re[o] + "Width", !0, i)) : (s += P.css(e, "border" + re[o] + "Width", !0, i)));
                return !a && 0 <= r && (c += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - c - s - 0.5)) || 0), c;
            }
            function at(e, t, n) {
                var a = Fe(e),
                    i = (!m.boxSizingReliable() || n) && "border-box" === P.css(e, "boxSizing", !1, a),
                    r = i,
                    o = Ve(e, t, a),
                    s = "offset" + t[0].toUpperCase() + t.slice(1);
                if (ze.test(o)) {
                    if (!n) return o;
                    o = "auto";
                }
                return (
                    ((!m.boxSizingReliable() && i) || (!m.reliableTrDimensions() && O(e, "tr")) || "auto" === o || (!parseFloat(o) && "inline" === P.css(e, "display", !1, a))) &&
                        e.getClientRects().length &&
                        ((i = "border-box" === P.css(e, "boxSizing", !1, a)), (r = s in e) && (o = e[s])),
                    (o = parseFloat(o) || 0) + nt(e, t, n || (i ? "border" : "content"), r, a, o) + "px"
                );
            }
            P.extend({
                cssHooks: {
                    opacity: {
                        get: function (e, t) {
                            if (t) {
                                var n = Ve(e, "opacity");
                                return "" === n ? "1" : n;
                            }
                        },
                    },
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0,
                },
                cssProps: {},
                style: function (e, t, n, a) {
                    if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                        var i,
                            r,
                            o,
                            s = $(t),
                            c = Ye.test(t),
                            l = e.style;
                        if ((c || (t = Je(s)), (o = P.cssHooks[t] || P.cssHooks[s]), void 0 === n)) return o && "get" in o && void 0 !== (i = o.get(e, !1, a)) ? i : l[t];
                        "string" == (r = typeof n) &&
                            (i = ie.exec(n)) &&
                            i[1] &&
                            ((n = (function (e, t, n, a) {
                                var i,
                                    r,
                                    o = 20,
                                    s = function () {
                                        return P.css(e, t, "");
                                    },
                                    c = s(),
                                    l = (n && n[3]) || (P.cssNumber[t] ? "" : "px"),
                                    u = e.nodeType && (P.cssNumber[t] || ("px" !== l && +c)) && ie.exec(P.css(e, t));
                                if (u && u[3] !== l) {
                                    for (c /= 2, l = l || u[3], u = +c || 1; o--; ) P.style(e, t, u + l), (1 - r) * (1 - (r = s() / c || 0.5)) <= 0 && (o = 0), (u /= r);
                                    (u *= 2), P.style(e, t, u + l), (n = n || []);
                                }
                                return n && ((u = +u || +c || 0), (i = n[1] ? u + (n[1] + 1) * n[2] : +n[2])), i;
                            })(e, t, i)),
                            (r = "number")),
                            null != n &&
                                n == n &&
                                ("number" !== r || c || (n += (i && i[3]) || (P.cssNumber[s] ? "" : "px")),
                                m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                                (o && "set" in o && void 0 === (n = o.set(e, n, a))) || (c ? l.setProperty(t, n) : (l[t] = n)));
                    }
                },
                css: function (e, t, n, a) {
                    var i,
                        r,
                        o,
                        s = $(t);
                    return (
                        Ye.test(t) || (t = Je(s)),
                        (o = P.cssHooks[t] || P.cssHooks[s]) && "get" in o && (i = o.get(e, !0, n)),
                        void 0 === i && (i = Ve(e, t, a)),
                        "normal" === i && t in et && (i = et[t]),
                        "" === n || n ? ((r = parseFloat(i)), !0 === n || isFinite(r) ? r || 0 : i) : i
                    );
                },
            }),
                P.each(["height", "width"], function (e, t) {
                    P.cssHooks[t] = {
                        get: function (e, n, a) {
                            if (n)
                                return !Qe.test(P.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                                    ? at(e, t, a)
                                    : Ke(e, Xe, function () {
                                          return at(e, t, a);
                                      });
                        },
                        set: function (e, n, a) {
                            var i,
                                r = Fe(e),
                                o = !m.scrollboxSize() && "absolute" === r.position,
                                s = (o || a) && "border-box" === P.css(e, "boxSizing", !1, r),
                                c = a ? nt(e, t, a, s, r) : 0;
                            return (
                                s && o && (c -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - nt(e, t, "border", !1, r) - 0.5)),
                                c && (i = ie.exec(n)) && "px" !== (i[3] || "px") && ((e.style[t] = n), (n = P.css(e, t))),
                                tt(0, n, c)
                            );
                        },
                    };
                }),
                (P.cssHooks.marginLeft = He(m.reliableMarginLeft, function (e, t) {
                    if (t)
                        return (
                            (parseFloat(Ve(e, "marginLeft")) ||
                                e.getBoundingClientRect().left -
                                    Ke(e, { marginLeft: 0 }, function () {
                                        return e.getBoundingClientRect().left;
                                    })) + "px"
                        );
                })),
                P.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
                    (P.cssHooks[e + t] = {
                        expand: function (n) {
                            for (var a = 0, i = {}, r = "string" == typeof n ? n.split(" ") : [n]; a < 4; a++) i[e + re[a] + t] = r[a] || r[a - 2] || r[0];
                            return i;
                        },
                    }),
                        "margin" !== e && (P.cssHooks[e + t].set = tt);
                }),
                P.fn.extend({
                    css: function (e, t) {
                        return q(
                            this,
                            function (e, t, n) {
                                var a,
                                    i,
                                    r = {},
                                    o = 0;
                                if (Array.isArray(t)) {
                                    for (a = Fe(e), i = t.length; o < i; o++) r[t[o]] = P.css(e, t[o], !1, a);
                                    return r;
                                }
                                return void 0 !== n ? P.style(e, t, n) : P.css(e, t);
                            },
                            e,
                            t,
                            1 < arguments.length
                        );
                    },
                }),
                (P.fn.delay = function (e, t) {
                    return (
                        (e = (P.fx && P.fx.speeds[e]) || e),
                        (t = t || "fx"),
                        this.queue(t, function (t, a) {
                            var i = n.setTimeout(t, e);
                            a.stop = function () {
                                n.clearTimeout(i);
                            };
                        })
                    );
                }),
                ($e = b.createElement("input")),
                (Ze = b.createElement("select").appendChild(b.createElement("option"))),
                ($e.type = "checkbox"),
                (m.checkOn = "" !== $e.value),
                (m.optSelected = Ze.selected),
                (($e = b.createElement("input")).value = "t"),
                ($e.type = "radio"),
                (m.radioValue = "t" === $e.value);
            var it,
                rt = P.expr.attrHandle;
            P.fn.extend({
                attr: function (e, t) {
                    return q(this, P.attr, e, t, 1 < arguments.length);
                },
                removeAttr: function (e) {
                    return this.each(function () {
                        P.removeAttr(this, e);
                    });
                },
            }),
                P.extend({
                    attr: function (e, t, n) {
                        var a,
                            i,
                            r = e.nodeType;
                        if (3 !== r && 8 !== r && 2 !== r)
                            return void 0 === e.getAttribute
                                ? P.prop(e, t, n)
                                : ((1 === r && P.isXMLDoc(e)) || (i = P.attrHooks[t.toLowerCase()] || (P.expr.match.bool.test(t) ? it : void 0)),
                                  void 0 !== n
                                      ? null === n
                                          ? void P.removeAttr(e, t)
                                          : i && "set" in i && void 0 !== (a = i.set(e, n, t))
                                          ? a
                                          : (e.setAttribute(t, n + ""), n)
                                      : i && "get" in i && null !== (a = i.get(e, t))
                                      ? a
                                      : null == (a = P.find.attr(e, t))
                                      ? void 0
                                      : a);
                    },
                    attrHooks: {
                        type: {
                            set: function (e, t) {
                                if (!m.radioValue && "radio" === t && O(e, "input")) {
                                    var n = e.value;
                                    return e.setAttribute("type", t), n && (e.value = n), t;
                                }
                            },
                        },
                    },
                    removeAttr: function (e, t) {
                        var n,
                            a = 0,
                            i = t && t.match(B);
                        if (i && 1 === e.nodeType) for (; (n = i[a++]); ) e.removeAttribute(n);
                    },
                }),
                (it = {
                    set: function (e, t, n) {
                        return !1 === t ? P.removeAttr(e, n) : e.setAttribute(n, n), n;
                    },
                }),
                P.each(P.expr.match.bool.source.match(/\w+/g), function (e, t) {
                    var n = rt[t] || P.find.attr;
                    rt[t] = function (e, t, a) {
                        var i,
                            r,
                            o = t.toLowerCase();
                        return a || ((r = rt[o]), (rt[o] = i), (i = null != n(e, t, a) ? o : null), (rt[o] = r)), i;
                    };
                });
            var ot = /^(?:input|select|textarea|button)$/i,
                st = /^(?:a|area)$/i;
            function ct(e) {
                return (e.match(B) || []).join(" ");
            }
            function lt(e) {
                return (e.getAttribute && e.getAttribute("class")) || "";
            }
            function ut(e) {
                return Array.isArray(e) ? e : ("string" == typeof e && e.match(B)) || [];
            }
            P.fn.extend({
                prop: function (e, t) {
                    return q(this, P.prop, e, t, 1 < arguments.length);
                },
                removeProp: function (e) {
                    return this.each(function () {
                        delete this[P.propFix[e] || e];
                    });
                },
            }),
                P.extend({
                    prop: function (e, t, n) {
                        var a,
                            i,
                            r = e.nodeType;
                        if (3 !== r && 8 !== r && 2 !== r)
                            return (
                                (1 === r && P.isXMLDoc(e)) || ((t = P.propFix[t] || t), (i = P.propHooks[t])),
                                void 0 !== n ? (i && "set" in i && void 0 !== (a = i.set(e, n, t)) ? a : (e[t] = n)) : i && "get" in i && null !== (a = i.get(e, t)) ? a : e[t]
                            );
                    },
                    propHooks: {
                        tabIndex: {
                            get: function (e) {
                                var t = P.find.attr(e, "tabindex");
                                return t ? parseInt(t, 10) : ot.test(e.nodeName) || (st.test(e.nodeName) && e.href) ? 0 : -1;
                            },
                        },
                    },
                    propFix: { for: "htmlFor", class: "className" },
                }),
                m.optSelected ||
                    (P.propHooks.selected = {
                        get: function (e) {
                            var t = e.parentNode;
                            return t && t.parentNode && t.parentNode.selectedIndex, null;
                        },
                        set: function (e) {
                            var t = e.parentNode;
                            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
                        },
                    }),
                P.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                    P.propFix[this.toLowerCase()] = this;
                }),
                P.fn.extend({
                    addClass: function (e) {
                        var t,
                            n,
                            a,
                            i,
                            r,
                            o,
                            s,
                            c = 0;
                        if (v(e))
                            return this.each(function (t) {
                                P(this).addClass(e.call(this, t, lt(this)));
                            });
                        if ((t = ut(e)).length)
                            for (; (n = this[c++]); )
                                if (((i = lt(n)), (a = 1 === n.nodeType && " " + ct(i) + " "))) {
                                    for (o = 0; (r = t[o++]); ) a.indexOf(" " + r + " ") < 0 && (a += r + " ");
                                    i !== (s = ct(a)) && n.setAttribute("class", s);
                                }
                        return this;
                    },
                    removeClass: function (e) {
                        var t,
                            n,
                            a,
                            i,
                            r,
                            o,
                            s,
                            c = 0;
                        if (v(e))
                            return this.each(function (t) {
                                P(this).removeClass(e.call(this, t, lt(this)));
                            });
                        if (!arguments.length) return this.attr("class", "");
                        if ((t = ut(e)).length)
                            for (; (n = this[c++]); )
                                if (((i = lt(n)), (a = 1 === n.nodeType && " " + ct(i) + " "))) {
                                    for (o = 0; (r = t[o++]); ) for (; -1 < a.indexOf(" " + r + " "); ) a = a.replace(" " + r + " ", " ");
                                    i !== (s = ct(a)) && n.setAttribute("class", s);
                                }
                        return this;
                    },
                    toggleClass: function (e, t) {
                        var n = typeof e,
                            a = "string" === n || Array.isArray(e);
                        return "boolean" == typeof t && a
                            ? t
                                ? this.addClass(e)
                                : this.removeClass(e)
                            : v(e)
                            ? this.each(function (n) {
                                  P(this).toggleClass(e.call(this, n, lt(this), t), t);
                              })
                            : this.each(function () {
                                  var t, i, r, o;
                                  if (a) for (i = 0, r = P(this), o = ut(e); (t = o[i++]); ) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                                  else (void 0 !== e && "boolean" !== n) || ((t = lt(this)) && Y.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Y.get(this, "__className__") || ""));
                              });
                    },
                    hasClass: function (e) {
                        var t,
                            n,
                            a = 0;
                        for (t = " " + e + " "; (n = this[a++]); ) if (1 === n.nodeType && -1 < (" " + ct(lt(n)) + " ").indexOf(t)) return !0;
                        return !1;
                    },
                });
            var dt = /\r/g;
            P.fn.extend({
                val: function (e) {
                    var t,
                        n,
                        a,
                        i = this[0];
                    return arguments.length
                        ? ((a = v(e)),
                          this.each(function (n) {
                              var i;
                              1 === this.nodeType &&
                                  (null == (i = a ? e.call(this, n, P(this).val()) : e)
                                      ? (i = "")
                                      : "number" == typeof i
                                      ? (i += "")
                                      : Array.isArray(i) &&
                                        (i = P.map(i, function (e) {
                                            return null == e ? "" : e + "";
                                        })),
                                  ((t = P.valHooks[this.type] || P.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value")) || (this.value = i));
                          }))
                        : i
                        ? (t = P.valHooks[i.type] || P.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value"))
                            ? n
                            : "string" == typeof (n = i.value)
                            ? n.replace(dt, "")
                            : null == n
                            ? ""
                            : n
                        : void 0;
                },
            }),
                P.extend({
                    valHooks: {
                        option: {
                            get: function (e) {
                                var t = P.find.attr(e, "value");
                                return null != t ? t : ct(P.text(e));
                            },
                        },
                        select: {
                            get: function (e) {
                                var t,
                                    n,
                                    a,
                                    i = e.options,
                                    r = e.selectedIndex,
                                    o = "select-one" === e.type,
                                    s = o ? null : [],
                                    c = o ? r + 1 : i.length;
                                for (a = r < 0 ? c : o ? r : 0; a < c; a++)
                                    if (((n = i[a]).selected || a === r) && !n.disabled && (!n.parentNode.disabled || !O(n.parentNode, "optgroup"))) {
                                        if (((t = P(n).val()), o)) return t;
                                        s.push(t);
                                    }
                                return s;
                            },
                            set: function (e, t) {
                                for (var n, a, i = e.options, r = P.makeArray(t), o = i.length; o--; ) ((a = i[o]).selected = -1 < P.inArray(P.valHooks.option.get(a), r)) && (n = !0);
                                return n || (e.selectedIndex = -1), r;
                            },
                        },
                    },
                }),
                P.each(["radio", "checkbox"], function () {
                    (P.valHooks[this] = {
                        set: function (e, t) {
                            if (Array.isArray(t)) return (e.checked = -1 < P.inArray(P(e).val(), t));
                        },
                    }),
                        m.checkOn ||
                            (P.valHooks[this].get = function (e) {
                                return null === e.getAttribute("value") ? "on" : e.value;
                            });
                }),
                (m.focusin = "onfocusin" in n);
            var ht = /^(?:focusinfocus|focusoutblur)$/,
                pt = function (e) {
                    e.stopPropagation();
                };
            P.extend(P.event, {
                trigger: function (e, t, a, i) {
                    var r,
                        o,
                        s,
                        c,
                        l,
                        u,
                        d,
                        h,
                        f = [a || b],
                        g = p.call(e, "type") ? e.type : e,
                        m = p.call(e, "namespace") ? e.namespace.split(".") : [];
                    if (
                        ((o = h = s = a = a || b),
                        3 !== a.nodeType &&
                            8 !== a.nodeType &&
                            !ht.test(g + P.event.triggered) &&
                            (-1 < g.indexOf(".") && ((g = (m = g.split(".")).shift()), m.sort()),
                            (l = g.indexOf(":") < 0 && "on" + g),
                            ((e = e[P.expando] ? e : new P.Event(g, "object" == typeof e && e)).isTrigger = i ? 2 : 3),
                            (e.namespace = m.join(".")),
                            (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                            (e.result = void 0),
                            e.target || (e.target = a),
                            (t = null == t ? [e] : P.makeArray(t, [e])),
                            (d = P.event.special[g] || {}),
                            i || !d.trigger || !1 !== d.trigger.apply(a, t)))
                    ) {
                        if (!i && !d.noBubble && !y(a)) {
                            for (c = d.delegateType || g, ht.test(c + g) || (o = o.parentNode); o; o = o.parentNode) f.push(o), (s = o);
                            s === (a.ownerDocument || b) && f.push(s.defaultView || s.parentWindow || n);
                        }
                        for (r = 0; (o = f[r++]) && !e.isPropagationStopped(); )
                            (h = o),
                                (e.type = 1 < r ? c : d.bindType || g),
                                (u = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && u.apply(o, t),
                                (u = l && o[l]) && u.apply && Z(o) && ((e.result = u.apply(o, t)), !1 === e.result && e.preventDefault());
                        return (
                            (e.type = g),
                            i ||
                                e.isDefaultPrevented() ||
                                (d._default && !1 !== d._default.apply(f.pop(), t)) ||
                                !Z(a) ||
                                (l &&
                                    v(a[g]) &&
                                    !y(a) &&
                                    ((s = a[l]) && (a[l] = null),
                                    (P.event.triggered = g),
                                    e.isPropagationStopped() && h.addEventListener(g, pt),
                                    a[g](),
                                    e.isPropagationStopped() && h.removeEventListener(g, pt),
                                    (P.event.triggered = void 0),
                                    s && (a[l] = s))),
                            e.result
                        );
                    }
                },
                simulate: function (e, t, n) {
                    var a = P.extend(new P.Event(), n, { type: e, isSimulated: !0 });
                    P.event.trigger(a, null, t);
                },
            }),
                P.fn.extend({
                    trigger: function (e, t) {
                        return this.each(function () {
                            P.event.trigger(e, t, this);
                        });
                    },
                    triggerHandler: function (e, t) {
                        var n = this[0];
                        if (n) return P.event.trigger(e, t, n, !0);
                    },
                }),
                m.focusin ||
                    P.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
                        var n = function (e) {
                            P.event.simulate(t, e.target, P.event.fix(e));
                        };
                        P.event.special[t] = {
                            setup: function () {
                                var a = this.ownerDocument || this.document || this,
                                    i = Y.access(a, t);
                                i || a.addEventListener(e, n, !0), Y.access(a, t, (i || 0) + 1);
                            },
                            teardown: function () {
                                var a = this.ownerDocument || this.document || this,
                                    i = Y.access(a, t) - 1;
                                i ? Y.access(a, t, i) : (a.removeEventListener(e, n, !0), Y.remove(a, t));
                            },
                        };
                    }),
                (P.parseXML = function (e) {
                    var t;
                    if (!e || "string" != typeof e) return null;
                    try {
                        t = new n.DOMParser().parseFromString(e, "text/xml");
                    } catch (e) {
                        t = void 0;
                    }
                    return (t && !t.getElementsByTagName("parsererror").length) || P.error("Invalid XML: " + e), t;
                });
            var ft,
                gt = /\[\]$/,
                mt = /\r?\n/g,
                vt = /^(?:submit|button|image|reset|file)$/i,
                yt = /^(?:input|select|textarea|keygen)/i;
            function bt(e, t, n, a) {
                var i;
                if (Array.isArray(t))
                    P.each(t, function (t, i) {
                        n || gt.test(e) ? a(e, i) : bt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, a);
                    });
                else if (n || "object" !== w(t)) a(e, t);
                else for (i in t) bt(e + "[" + i + "]", t[i], n, a);
            }
            (P.param = function (e, t) {
                var n,
                    a = [],
                    i = function (e, t) {
                        var n = v(t) ? t() : t;
                        a[a.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
                    };
                if (null == e) return "";
                if (Array.isArray(e) || (e.jquery && !P.isPlainObject(e)))
                    P.each(e, function () {
                        i(this.name, this.value);
                    });
                else for (n in e) bt(n, e[n], t, i);
                return a.join("&");
            }),
                P.fn.extend({
                    serialize: function () {
                        return P.param(this.serializeArray());
                    },
                    serializeArray: function () {
                        return this.map(function () {
                            var e = P.prop(this, "elements");
                            return e ? P.makeArray(e) : this;
                        })
                            .filter(function () {
                                var e = this.type;
                                return this.name && !P(this).is(":disabled") && yt.test(this.nodeName) && !vt.test(e) && (this.checked || !fe.test(e));
                            })
                            .map(function (e, t) {
                                var n = P(this).val();
                                return null == n
                                    ? null
                                    : Array.isArray(n)
                                    ? P.map(n, function (e) {
                                          return { name: t.name, value: e.replace(mt, "\r\n") };
                                      })
                                    : { name: t.name, value: n.replace(mt, "\r\n") };
                            })
                            .get();
                    },
                }),
                P.fn.extend({
                    wrapAll: function (e) {
                        var t;
                        return (
                            this[0] &&
                                (v(e) && (e = e.call(this[0])),
                                (t = P(e, this[0].ownerDocument).eq(0).clone(!0)),
                                this[0].parentNode && t.insertBefore(this[0]),
                                t
                                    .map(function () {
                                        for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                        return e;
                                    })
                                    .append(this)),
                            this
                        );
                    },
                    wrapInner: function (e) {
                        return v(e)
                            ? this.each(function (t) {
                                  P(this).wrapInner(e.call(this, t));
                              })
                            : this.each(function () {
                                  var t = P(this),
                                      n = t.contents();
                                  n.length ? n.wrapAll(e) : t.append(e);
                              });
                    },
                    wrap: function (e) {
                        var t = v(e);
                        return this.each(function (n) {
                            P(this).wrapAll(t ? e.call(this, n) : e);
                        });
                    },
                    unwrap: function (e) {
                        return (
                            this.parent(e)
                                .not("body")
                                .each(function () {
                                    P(this).replaceWith(this.childNodes);
                                }),
                            this
                        );
                    },
                }),
                (P.expr.pseudos.hidden = function (e) {
                    return !P.expr.pseudos.visible(e);
                }),
                (P.expr.pseudos.visible = function (e) {
                    return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
                }),
                (m.createHTMLDocument = (((ft = b.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === ft.childNodes.length)),
                (P.parseHTML = function (e, t, n) {
                    return "string" != typeof e
                        ? []
                        : ("boolean" == typeof t && ((n = t), (t = !1)),
                          t || (m.createHTMLDocument ? (((a = (t = b.implementation.createHTMLDocument("")).createElement("base")).href = b.location.href), t.head.appendChild(a)) : (t = b)),
                          (r = !n && []),
                          (i = _.exec(e)) ? [t.createElement(i[1])] : ((i = Se([e], t, r)), r && r.length && P(r).remove(), P.merge([], i.childNodes)));
                    var a, i, r;
                }),
                (P.offset = {
                    setOffset: function (e, t, n) {
                        var a,
                            i,
                            r,
                            o,
                            s,
                            c,
                            l = P.css(e, "position"),
                            u = P(e),
                            d = {};
                        "static" === l && (e.style.position = "relative"),
                            (s = u.offset()),
                            (r = P.css(e, "top")),
                            (c = P.css(e, "left")),
                            ("absolute" === l || "fixed" === l) && -1 < (r + c).indexOf("auto") ? ((o = (a = u.position()).top), (i = a.left)) : ((o = parseFloat(r) || 0), (i = parseFloat(c) || 0)),
                            v(t) && (t = t.call(e, n, P.extend({}, s))),
                            null != t.top && (d.top = t.top - s.top + o),
                            null != t.left && (d.left = t.left - s.left + i),
                            "using" in t ? t.using.call(e, d) : ("number" == typeof d.top && (d.top += "px"), "number" == typeof d.left && (d.left += "px"), u.css(d));
                    },
                }),
                P.fn.extend({
                    offset: function (e) {
                        if (arguments.length)
                            return void 0 === e
                                ? this
                                : this.each(function (t) {
                                      P.offset.setOffset(this, e, t);
                                  });
                        var t,
                            n,
                            a = this[0];
                        return a ? (a.getClientRects().length ? ((t = a.getBoundingClientRect()), (n = a.ownerDocument.defaultView), { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
                    },
                    position: function () {
                        if (this[0]) {
                            var e,
                                t,
                                n,
                                a = this[0],
                                i = { top: 0, left: 0 };
                            if ("fixed" === P.css(a, "position")) t = a.getBoundingClientRect();
                            else {
                                for (t = this.offset(), n = a.ownerDocument, e = a.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === P.css(e, "position"); ) e = e.parentNode;
                                e && e !== a && 1 === e.nodeType && (((i = P(e).offset()).top += P.css(e, "borderTopWidth", !0)), (i.left += P.css(e, "borderLeftWidth", !0)));
                            }
                            return { top: t.top - i.top - P.css(a, "marginTop", !0), left: t.left - i.left - P.css(a, "marginLeft", !0) };
                        }
                    },
                    offsetParent: function () {
                        return this.map(function () {
                            for (var e = this.offsetParent; e && "static" === P.css(e, "position"); ) e = e.offsetParent;
                            return e || oe;
                        });
                    },
                }),
                P.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
                    var n = "pageYOffset" === t;
                    P.fn[e] = function (a) {
                        return q(
                            this,
                            function (e, a, i) {
                                var r;
                                if ((y(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView), void 0 === i)) return r ? r[t] : e[a];
                                r ? r.scrollTo(n ? r.pageXOffset : i, n ? i : r.pageYOffset) : (e[a] = i);
                            },
                            e,
                            a,
                            arguments.length
                        );
                    };
                }),
                P.each(["top", "left"], function (e, t) {
                    P.cssHooks[t] = He(m.pixelPosition, function (e, n) {
                        if (n) return (n = Ve(e, t)), ze.test(n) ? P(e).position()[t] + "px" : n;
                    });
                }),
                P.each({ Height: "height", Width: "width" }, function (e, t) {
                    P.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, a) {
                        P.fn[a] = function (i, r) {
                            var o = arguments.length && (n || "boolean" != typeof i),
                                s = n || (!0 === i || !0 === r ? "margin" : "border");
                            return q(
                                this,
                                function (t, n, i) {
                                    var r;
                                    return y(t)
                                        ? 0 === a.indexOf("outer")
                                            ? t["inner" + e]
                                            : t.document.documentElement["client" + e]
                                        : 9 === t.nodeType
                                        ? ((r = t.documentElement), Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e]))
                                        : void 0 === i
                                        ? P.css(t, n, s)
                                        : P.style(t, n, i, s);
                                },
                                t,
                                o ? i : void 0,
                                o
                            );
                        };
                    });
                }),
                P.fn.extend({
                    bind: function (e, t, n) {
                        return this.on(e, null, t, n);
                    },
                    unbind: function (e, t) {
                        return this.off(e, null, t);
                    },
                    delegate: function (e, t, n, a) {
                        return this.on(t, e, n, a);
                    },
                    undelegate: function (e, t, n) {
                        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
                    },
                    hover: function (e, t) {
                        return this.mouseenter(e).mouseleave(t || e);
                    },
                }),
                P.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
                    P.fn[t] = function (e, n) {
                        return 0 < arguments.length ? this.on(t, null, e, n) : this.trigger(t);
                    };
                });
            var kt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            (P.proxy = function (e, t) {
                var n, a, i;
                if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), v(e)))
                    return (
                        (a = s.call(arguments, 2)),
                        ((i = function () {
                            return e.apply(t || this, a.concat(s.call(arguments)));
                        }).guid = e.guid = e.guid || P.guid++),
                        i
                    );
            }),
                (P.holdReady = function (e) {
                    e ? P.readyWait++ : P.ready(!0);
                }),
                (P.isArray = Array.isArray),
                (P.parseJSON = JSON.parse),
                (P.nodeName = O),
                (P.isFunction = v),
                (P.isWindow = y),
                (P.camelCase = $),
                (P.type = w),
                (P.now = Date.now),
                (P.isNumeric = function (e) {
                    var t = P.type(e);
                    return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
                }),
                (P.trim = function (e) {
                    return null == e ? "" : (e + "").replace(kt, "");
                }),
                void 0 ===
                    (a = function () {
                        return P;
                    }.apply(t, [])) || (e.exports = a);
            var St = n.jQuery,
                wt = n.$;
            return (
                (P.noConflict = function (e) {
                    return n.$ === P && (n.$ = wt), e && n.jQuery === P && (n.jQuery = St), P;
                }),
                void 0 === i && (n.jQuery = n.$ = P),
                P
            );
        });
    },
    function (e, t, n) {
        var a = n(2),
            i = n(8),
            r = n(15),
            o = n(12),
            s = n(19),
            c = function (e, t, n) {
                var l,
                    u,
                    d,
                    h,
                    p = e & c.F,
                    f = e & c.G,
                    g = e & c.S,
                    m = e & c.P,
                    v = e & c.B,
                    y = f ? a : g ? a[t] || (a[t] = {}) : (a[t] || {}).prototype,
                    b = f ? i : i[t] || (i[t] = {}),
                    k = b.prototype || (b.prototype = {});
                for (l in (f && (n = t), n))
                    (d = ((u = !p && y && void 0 !== y[l]) ? y : n)[l]), (h = v && u ? s(d, a) : m && "function" == typeof d ? s(Function.call, d) : d), y && o(y, l, d, e & c.U), b[l] != d && r(b, l, h), m && k[l] != d && (k[l] = d);
            };
        (a.core = i), (c.F = 1), (c.G = 2), (c.S = 4), (c.P = 8), (c.B = 16), (c.W = 32), (c.U = 64), (c.R = 128), (e.exports = c);
    },
    function (e, t) {
        var n = (e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")());
        "number" == typeof __g && (__g = n);
    },
    function (e, t) {
        e.exports = function (e) {
            try {
                return !!e();
            } catch (e) {
                return !0;
            }
        };
    },
    function (e, t, n) {
        var a = n(5);
        e.exports = function (e) {
            if (!a(e)) throw TypeError(e + " is not an object!");
            return e;
        };
    },
    function (e, t) {
        e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e;
        };
    },
    function (e, t, n) {
        var a = n(51)("wks"),
            i = n(31),
            r = n(2).Symbol,
            o = "function" == typeof r;
        (e.exports = function (e) {
            return a[e] || (a[e] = (o && r[e]) || (o ? r : i)("Symbol." + e));
        }).store = a;
    },
    function (e, t, n) {
        var a = n(21),
            i = Math.min;
        e.exports = function (e) {
            return e > 0 ? i(a(e), 9007199254740991) : 0;
        };
    },
    function (e, t) {
        var n = (e.exports = { version: "2.6.12" });
        "number" == typeof __e && (__e = n);
    },
    function (e, t, n) {
        e.exports = !n(3)(function () {
            return (
                7 !=
                Object.defineProperty({}, "a", {
                    get: function () {
                        return 7;
                    },
                }).a
            );
        });
    },
    function (e, t, n) {
        var a = n(4),
            i = n(92),
            r = n(28),
            o = Object.defineProperty;
        t.f = n(9)
            ? Object.defineProperty
            : function (e, t, n) {
                  if ((a(e), (t = r(t, !0)), a(n), i))
                      try {
                          return o(e, t, n);
                      } catch (e) {}
                  if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                  return "value" in n && (e[t] = n.value), e;
              };
    },
    function (e, t, n) {
        var a = n(26);
        e.exports = function (e) {
            return Object(a(e));
        };
    },
    function (e, t, n) {
        var a = n(2),
            i = n(15),
            r = n(14),
            o = n(31)("src"),
            s = n(134),
            c = ("" + s).split("toString");
        (n(8).inspectSource = function (e) {
            return s.call(e);
        }),
            (e.exports = function (e, t, n, s) {
                var l = "function" == typeof n;
                l && (r(n, "name") || i(n, "name", t)), e[t] !== n && (l && (r(n, o) || i(n, o, e[t] ? "" + e[t] : c.join(String(t)))), e === a ? (e[t] = n) : s ? (e[t] ? (e[t] = n) : i(e, t, n)) : (delete e[t], i(e, t, n)));
            })(Function.prototype, "toString", function () {
                return ("function" == typeof this && this[o]) || s.call(this);
            });
    },
    function (e, t, n) {
        var a = n(1),
            i = n(3),
            r = n(26),
            o = /"/g,
            s = function (e, t, n, a) {
                var i = String(r(e)),
                    s = "<" + t;
                return "" !== n && (s += " " + n + '="' + String(a).replace(o, "&quot;") + '"'), s + ">" + i + "</" + t + ">";
            };
        e.exports = function (e, t) {
            var n = {};
            (n[e] = t(s)),
                a(
                    a.P +
                        a.F *
                            i(function () {
                                var t = ""[e]('"');
                                return t !== t.toLowerCase() || t.split('"').length > 3;
                            }),
                    "String",
                    n
                );
        };
    },
    function (e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function (e, t) {
            return n.call(e, t);
        };
    },
    function (e, t, n) {
        var a = n(10),
            i = n(30);
        e.exports = n(9)
            ? function (e, t, n) {
                  return a.f(e, t, i(1, n));
              }
            : function (e, t, n) {
                  return (e[t] = n), e;
              };
    },
    function (e, t, n) {
        var a = n(47),
            i = n(26);
        e.exports = function (e) {
            return a(i(e));
        };
    },
    function (e, t, n) {
        "use strict";
        var a = n(3);
        e.exports = function (e, t) {
            return (
                !!e &&
                a(function () {
                    t ? e.call(null, function () {}, 1) : e.call(null);
                })
            );
        };
    },
    function (e, t, n) {
        var a, i;
        /*!
         * JavaScript Cookie v2.2.1
         * https://github.com/js-cookie/js-cookie
         *
         * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
         * Released under the MIT license
         */ !(function (r) {
            if ((void 0 === (i = "function" == typeof (a = r) ? a.call(t, n, t, e) : a) || (e.exports = i), !0, (e.exports = r()), !!0)) {
                var o = window.Cookies,
                    s = (window.Cookies = r());
                s.noConflict = function () {
                    return (window.Cookies = o), s;
                };
            }
        })(function () {
            function e() {
                for (var e = 0, t = {}; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var a in n) t[a] = n[a];
                }
                return t;
            }
            function t(e) {
                return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
            }
            return (function n(a) {
                function i() {}
                function r(t, n, r) {
                    if ("undefined" != typeof document) {
                        "number" == typeof (r = e({ path: "/" }, i.defaults, r)).expires && (r.expires = new Date(1 * new Date() + 864e5 * r.expires)), (r.expires = r.expires ? r.expires.toUTCString() : "");
                        try {
                            var o = JSON.stringify(n);
                            /^[\{\[]/.test(o) && (n = o);
                        } catch (e) {}
                        (n = a.write ? a.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent)),
                            (t = encodeURIComponent(String(t))
                                .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                                .replace(/[\(\)]/g, escape));
                        var s = "";
                        for (var c in r) r[c] && ((s += "; " + c), !0 !== r[c] && (s += "=" + r[c].split(";")[0]));
                        return (document.cookie = t + "=" + n + s);
                    }
                }
                function o(e, n) {
                    if ("undefined" != typeof document) {
                        for (var i = {}, r = document.cookie ? document.cookie.split("; ") : [], o = 0; o < r.length; o++) {
                            var s = r[o].split("="),
                                c = s.slice(1).join("=");
                            n || '"' !== c.charAt(0) || (c = c.slice(1, -1));
                            try {
                                var l = t(s[0]);
                                if (((c = (a.read || a)(c, l) || t(c)), n))
                                    try {
                                        c = JSON.parse(c);
                                    } catch (e) {}
                                if (((i[l] = c), e === l)) break;
                            } catch (e) {}
                        }
                        return e ? i[e] : i;
                    }
                }
                return (
                    (i.set = r),
                    (i.get = function (e) {
                        return o(e, !1);
                    }),
                    (i.getJSON = function (e) {
                        return o(e, !0);
                    }),
                    (i.remove = function (t, n) {
                        r(t, "", e(n, { expires: -1 }));
                    }),
                    (i.defaults = {}),
                    (i.withConverter = n),
                    i
                );
            })(function () {});
        });
    },
    function (e, t, n) {
        var a = n(20);
        e.exports = function (e, t, n) {
            if ((a(e), void 0 === t)) return e;
            switch (n) {
                case 1:
                    return function (n) {
                        return e.call(t, n);
                    };
                case 2:
                    return function (n, a) {
                        return e.call(t, n, a);
                    };
                case 3:
                    return function (n, a, i) {
                        return e.call(t, n, a, i);
                    };
            }
            return function () {
                return e.apply(t, arguments);
            };
        };
    },
    function (e, t) {
        e.exports = function (e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e;
        };
    },
    function (e, t) {
        var n = Math.ceil,
            a = Math.floor;
        e.exports = function (e) {
            return isNaN((e = +e)) ? 0 : (e > 0 ? a : n)(e);
        };
    },
    function (e, t, n) {
        var a = n(48),
            i = n(30),
            r = n(16),
            o = n(28),
            s = n(14),
            c = n(92),
            l = Object.getOwnPropertyDescriptor;
        t.f = n(9)
            ? l
            : function (e, t) {
                  if (((e = r(e)), (t = o(t, !0)), c))
                      try {
                          return l(e, t);
                      } catch (e) {}
                  if (s(e, t)) return i(!a.f.call(e, t), e[t]);
              };
    },
    function (e, t, n) {
        var a = n(1),
            i = n(8),
            r = n(3);
        e.exports = function (e, t) {
            var n = (i.Object || {})[e] || Object[e],
                o = {};
            (o[e] = t(n)),
                a(
                    a.S +
                        a.F *
                            r(function () {
                                n(1);
                            }),
                    "Object",
                    o
                );
        };
    },
    function (e, t, n) {
        var a = n(19),
            i = n(47),
            r = n(11),
            o = n(7),
            s = n(108);
        e.exports = function (e, t) {
            var n = 1 == e,
                c = 2 == e,
                l = 3 == e,
                u = 4 == e,
                d = 6 == e,
                h = 5 == e || d,
                p = t || s;
            return function (t, s, f) {
                for (var g, m, v = r(t), y = i(v), b = a(s, f, 3), k = o(y.length), S = 0, w = n ? p(t, k) : c ? p(t, 0) : void 0; k > S; S++)
                    if ((h || S in y) && ((m = b((g = y[S]), S, v)), e))
                        if (n) w[S] = m;
                        else if (m)
                            switch (e) {
                                case 3:
                                    return !0;
                                case 5:
                                    return g;
                                case 6:
                                    return S;
                                case 2:
                                    w.push(g);
                            }
                        else if (u) return !1;
                return d ? -1 : l || u ? u : w;
            };
        };
    },
    function (e, t) {
        var n = {}.toString;
        e.exports = function (e) {
            return n.call(e).slice(8, -1);
        };
    },
    function (e, t) {
        e.exports = function (e) {
            if (null == e) throw TypeError("Can't call method on  " + e);
            return e;
        };
    },
    function (e, t, n) {
        "use strict";
        if (n(9)) {
            var a = n(32),
                i = n(2),
                r = n(3),
                o = n(1),
                s = n(62),
                c = n(87),
                l = n(19),
                u = n(44),
                d = n(30),
                h = n(15),
                p = n(45),
                f = n(21),
                g = n(7),
                m = n(119),
                v = n(34),
                y = n(28),
                b = n(14),
                k = n(49),
                S = n(5),
                w = n(11),
                C = n(79),
                P = n(35),
                x = n(37),
                T = n(36).f,
                A = n(81),
                N = n(31),
                D = n(6),
                O = n(24),
                _ = n(52),
                M = n(50),
                E = n(83),
                R = n(42),
                L = n(55),
                I = n(43),
                j = n(82),
                B = n(110),
                z = n(10),
                F = n(22),
                K = z.f,
                G = F.f,
                V = i.RangeError,
                H = i.TypeError,
                q = i.Uint8Array,
                W = Array.prototype,
                U = c.ArrayBuffer,
                J = c.DataView,
                $ = O(0),
                Z = O(2),
                Q = O(3),
                Y = O(4),
                X = O(5),
                ee = O(6),
                te = _(!0),
                ne = _(!1),
                ae = E.values,
                ie = E.keys,
                re = E.entries,
                oe = W.lastIndexOf,
                se = W.reduce,
                ce = W.reduceRight,
                le = W.join,
                ue = W.sort,
                de = W.slice,
                he = W.toString,
                pe = W.toLocaleString,
                fe = D("iterator"),
                ge = D("toStringTag"),
                me = N("typed_constructor"),
                ve = N("def_constructor"),
                ye = s.CONSTR,
                be = s.TYPED,
                ke = s.VIEW,
                Se = O(1, function (e, t) {
                    return Te(M(e, e[ve]), t);
                }),
                we = r(function () {
                    return 1 === new q(new Uint16Array([1]).buffer)[0];
                }),
                Ce =
                    !!q &&
                    !!q.prototype.set &&
                    r(function () {
                        new q(1).set({});
                    }),
                Pe = function (e, t) {
                    var n = f(e);
                    if (n < 0 || n % t) throw V("Wrong offset!");
                    return n;
                },
                xe = function (e) {
                    if (S(e) && be in e) return e;
                    throw H(e + " is not a typed array!");
                },
                Te = function (e, t) {
                    if (!S(e) || !(me in e)) throw H("It is not a typed array constructor!");
                    return new e(t);
                },
                Ae = function (e, t) {
                    return Ne(M(e, e[ve]), t);
                },
                Ne = function (e, t) {
                    for (var n = 0, a = t.length, i = Te(e, a); a > n; ) i[n] = t[n++];
                    return i;
                },
                De = function (e, t, n) {
                    K(e, t, {
                        get: function () {
                            return this._d[n];
                        },
                    });
                },
                Oe = function (e) {
                    var t,
                        n,
                        a,
                        i,
                        r,
                        o,
                        s = w(e),
                        c = arguments.length,
                        u = c > 1 ? arguments[1] : void 0,
                        d = void 0 !== u,
                        h = A(s);
                    if (null != h && !C(h)) {
                        for (o = h.call(s), a = [], t = 0; !(r = o.next()).done; t++) a.push(r.value);
                        s = a;
                    }
                    for (d && c > 2 && (u = l(u, arguments[2], 2)), t = 0, n = g(s.length), i = Te(this, n); n > t; t++) i[t] = d ? u(s[t], t) : s[t];
                    return i;
                },
                _e = function () {
                    for (var e = 0, t = arguments.length, n = Te(this, t); t > e; ) n[e] = arguments[e++];
                    return n;
                },
                Me =
                    !!q &&
                    r(function () {
                        pe.call(new q(1));
                    }),
                Ee = function () {
                    return pe.apply(Me ? de.call(xe(this)) : xe(this), arguments);
                },
                Re = {
                    copyWithin: function (e, t) {
                        return B.call(xe(this), e, t, arguments.length > 2 ? arguments[2] : void 0);
                    },
                    every: function (e) {
                        return Y(xe(this), e, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    fill: function (e) {
                        return j.apply(xe(this), arguments);
                    },
                    filter: function (e) {
                        return Ae(this, Z(xe(this), e, arguments.length > 1 ? arguments[1] : void 0));
                    },
                    find: function (e) {
                        return X(xe(this), e, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    findIndex: function (e) {
                        return ee(xe(this), e, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    forEach: function (e) {
                        $(xe(this), e, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    indexOf: function (e) {
                        return ne(xe(this), e, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    includes: function (e) {
                        return te(xe(this), e, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    join: function (e) {
                        return le.apply(xe(this), arguments);
                    },
                    lastIndexOf: function (e) {
                        return oe.apply(xe(this), arguments);
                    },
                    map: function (e) {
                        return Se(xe(this), e, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    reduce: function (e) {
                        return se.apply(xe(this), arguments);
                    },
                    reduceRight: function (e) {
                        return ce.apply(xe(this), arguments);
                    },
                    reverse: function () {
                        for (var e, t = xe(this).length, n = Math.floor(t / 2), a = 0; a < n; ) (e = this[a]), (this[a++] = this[--t]), (this[t] = e);
                        return this;
                    },
                    some: function (e) {
                        return Q(xe(this), e, arguments.length > 1 ? arguments[1] : void 0);
                    },
                    sort: function (e) {
                        return ue.call(xe(this), e);
                    },
                    subarray: function (e, t) {
                        var n = xe(this),
                            a = n.length,
                            i = v(e, a);
                        return new (M(n, n[ve]))(n.buffer, n.byteOffset + i * n.BYTES_PER_ELEMENT, g((void 0 === t ? a : v(t, a)) - i));
                    },
                },
                Le = function (e, t) {
                    return Ae(this, de.call(xe(this), e, t));
                },
                Ie = function (e) {
                    xe(this);
                    var t = Pe(arguments[1], 1),
                        n = this.length,
                        a = w(e),
                        i = g(a.length),
                        r = 0;
                    if (i + t > n) throw V("Wrong length!");
                    for (; r < i; ) this[t + r] = a[r++];
                },
                je = {
                    entries: function () {
                        return re.call(xe(this));
                    },
                    keys: function () {
                        return ie.call(xe(this));
                    },
                    values: function () {
                        return ae.call(xe(this));
                    },
                },
                Be = function (e, t) {
                    return S(e) && e[be] && "symbol" != typeof t && t in e && String(+t) == String(t);
                },
                ze = function (e, t) {
                    return Be(e, (t = y(t, !0))) ? d(2, e[t]) : G(e, t);
                },
                Fe = function (e, t, n) {
                    return !(Be(e, (t = y(t, !0))) && S(n) && b(n, "value")) || b(n, "get") || b(n, "set") || n.configurable || (b(n, "writable") && !n.writable) || (b(n, "enumerable") && !n.enumerable) ? K(e, t, n) : ((e[t] = n.value), e);
                };
            ye || ((F.f = ze), (z.f = Fe)),
                o(o.S + o.F * !ye, "Object", { getOwnPropertyDescriptor: ze, defineProperty: Fe }),
                r(function () {
                    he.call({});
                }) &&
                    (he = pe = function () {
                        return le.call(this);
                    });
            var Ke = p({}, Re);
            p(Ke, je),
                h(Ke, fe, je.values),
                p(Ke, { slice: Le, set: Ie, constructor: function () {}, toString: he, toLocaleString: Ee }),
                De(Ke, "buffer", "b"),
                De(Ke, "byteOffset", "o"),
                De(Ke, "byteLength", "l"),
                De(Ke, "length", "e"),
                K(Ke, ge, {
                    get: function () {
                        return this[be];
                    },
                }),
                (e.exports = function (e, t, n, c) {
                    var l = e + ((c = !!c) ? "Clamped" : "") + "Array",
                        d = "get" + e,
                        p = "set" + e,
                        f = i[l],
                        v = f || {},
                        y = f && x(f),
                        b = !f || !s.ABV,
                        w = {},
                        C = f && f.prototype,
                        A = function (e, n) {
                            K(e, n, {
                                get: function () {
                                    return (function (e, n) {
                                        var a = e._d;
                                        return a.v[d](n * t + a.o, we);
                                    })(this, n);
                                },
                                set: function (e) {
                                    return (function (e, n, a) {
                                        var i = e._d;
                                        c && (a = (a = Math.round(a)) < 0 ? 0 : a > 255 ? 255 : 255 & a), i.v[p](n * t + i.o, a, we);
                                    })(this, n, e);
                                },
                                enumerable: !0,
                            });
                        };
                    b
                        ? ((f = n(function (e, n, a, i) {
                              u(e, f, l, "_d");
                              var r,
                                  o,
                                  s,
                                  c,
                                  d = 0,
                                  p = 0;
                              if (S(n)) {
                                  if (!(n instanceof U || "ArrayBuffer" == (c = k(n)) || "SharedArrayBuffer" == c)) return be in n ? Ne(f, n) : Oe.call(f, n);
                                  (r = n), (p = Pe(a, t));
                                  var v = n.byteLength;
                                  if (void 0 === i) {
                                      if (v % t) throw V("Wrong length!");
                                      if ((o = v - p) < 0) throw V("Wrong length!");
                                  } else if ((o = g(i) * t) + p > v) throw V("Wrong length!");
                                  s = o / t;
                              } else (s = m(n)), (r = new U((o = s * t)));
                              for (h(e, "_d", { b: r, o: p, l: o, e: s, v: new J(r) }); d < s; ) A(e, d++);
                          })),
                          (C = f.prototype = P(Ke)),
                          h(C, "constructor", f))
                        : (r(function () {
                              f(1);
                          }) &&
                              r(function () {
                                  new f(-1);
                              }) &&
                              L(function (e) {
                                  new f(), new f(null), new f(1.5), new f(e);
                              }, !0)) ||
                          ((f = n(function (e, n, a, i) {
                              var r;
                              return (
                                  u(e, f, l),
                                  S(n)
                                      ? n instanceof U || "ArrayBuffer" == (r = k(n)) || "SharedArrayBuffer" == r
                                          ? void 0 !== i
                                              ? new v(n, Pe(a, t), i)
                                              : void 0 !== a
                                              ? new v(n, Pe(a, t))
                                              : new v(n)
                                          : be in n
                                          ? Ne(f, n)
                                          : Oe.call(f, n)
                                      : new v(m(n))
                              );
                          })),
                          $(y !== Function.prototype ? T(v).concat(T(y)) : T(v), function (e) {
                              e in f || h(f, e, v[e]);
                          }),
                          (f.prototype = C),
                          a || (C.constructor = f));
                    var N = C[fe],
                        D = !!N && ("values" == N.name || null == N.name),
                        O = je.values;
                    h(f, me, !0),
                        h(C, be, l),
                        h(C, ke, !0),
                        h(C, ve, f),
                        (c ? new f(1)[ge] == l : ge in C) ||
                            K(C, ge, {
                                get: function () {
                                    return l;
                                },
                            }),
                        (w[l] = f),
                        o(o.G + o.W + o.F * (f != v), w),
                        o(o.S, l, { BYTES_PER_ELEMENT: t }),
                        o(
                            o.S +
                                o.F *
                                    r(function () {
                                        v.of.call(f, 1);
                                    }),
                            l,
                            { from: Oe, of: _e }
                        ),
                        "BYTES_PER_ELEMENT" in C || h(C, "BYTES_PER_ELEMENT", t),
                        o(o.P, l, Re),
                        I(l),
                        o(o.P + o.F * Ce, l, { set: Ie }),
                        o(o.P + o.F * !D, l, je),
                        a || C.toString == he || (C.toString = he),
                        o(
                            o.P +
                                o.F *
                                    r(function () {
                                        new f(1).slice();
                                    }),
                            l,
                            { slice: Le }
                        ),
                        o(
                            o.P +
                                o.F *
                                    (r(function () {
                                        return [1, 2].toLocaleString() != new f([1, 2]).toLocaleString();
                                    }) ||
                                        !r(function () {
                                            C.toLocaleString.call([1, 2]);
                                        })),
                            l,
                            { toLocaleString: Ee }
                        ),
                        (R[l] = D ? N : O),
                        a || D || h(C, fe, O);
                });
        } else e.exports = function () {};
    },
    function (e, t, n) {
        var a = n(5);
        e.exports = function (e, t) {
            if (!a(e)) return e;
            var n, i;
            if (t && "function" == typeof (n = e.toString) && !a((i = n.call(e)))) return i;
            if ("function" == typeof (n = e.valueOf) && !a((i = n.call(e)))) return i;
            if (!t && "function" == typeof (n = e.toString) && !a((i = n.call(e)))) return i;
            throw TypeError("Can't convert object to primitive value");
        };
    },
    function (e, t, n) {
        var a = n(31)("meta"),
            i = n(5),
            r = n(14),
            o = n(10).f,
            s = 0,
            c =
                Object.isExtensible ||
                function () {
                    return !0;
                },
            l = !n(3)(function () {
                return c(Object.preventExtensions({}));
            }),
            u = function (e) {
                o(e, a, { value: { i: "O" + ++s, w: {} } });
            },
            d = (e.exports = {
                KEY: a,
                NEED: !1,
                fastKey: function (e, t) {
                    if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                    if (!r(e, a)) {
                        if (!c(e)) return "F";
                        if (!t) return "E";
                        u(e);
                    }
                    return e[a].i;
                },
                getWeak: function (e, t) {
                    if (!r(e, a)) {
                        if (!c(e)) return !0;
                        if (!t) return !1;
                        u(e);
                    }
                    return e[a].w;
                },
                onFreeze: function (e) {
                    return l && d.NEED && c(e) && !r(e, a) && u(e), e;
                },
            });
    },
    function (e, t) {
        e.exports = function (e, t) {
            return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
        };
    },
    function (e, t) {
        var n = 0,
            a = Math.random();
        e.exports = function (e) {
            return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + a).toString(36));
        };
    },
    function (e, t) {
        e.exports = !1;
    },
    function (e, t, n) {
        var a = n(94),
            i = n(66);
        e.exports =
            Object.keys ||
            function (e) {
                return a(e, i);
            };
    },
    function (e, t, n) {
        var a = n(21),
            i = Math.max,
            r = Math.min;
        e.exports = function (e, t) {
            return (e = a(e)) < 0 ? i(e + t, 0) : r(e, t);
        };
    },
    function (e, t, n) {
        var a = n(4),
            i = n(95),
            r = n(66),
            o = n(65)("IE_PROTO"),
            s = function () {},
            c = function () {
                var e,
                    t = n(63)("iframe"),
                    a = r.length;
                for (t.style.display = "none", n(67).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object</script>"), e.close(), c = e.F; a--; ) delete c.prototype[r[a]];
                return c();
            };
        e.exports =
            Object.create ||
            function (e, t) {
                var n;
                return null !== e ? ((s.prototype = a(e)), (n = new s()), (s.prototype = null), (n[o] = e)) : (n = c()), void 0 === t ? n : i(n, t);
            };
    },
    function (e, t, n) {
        var a = n(94),
            i = n(66).concat("length", "prototype");
        t.f =
            Object.getOwnPropertyNames ||
            function (e) {
                return a(e, i);
            };
    },
    function (e, t, n) {
        var a = n(14),
            i = n(11),
            r = n(65)("IE_PROTO"),
            o = Object.prototype;
        e.exports =
            Object.getPrototypeOf ||
            function (e) {
                return (e = i(e)), a(e, r) ? e[r] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? o : null;
            };
    },
    function (e, t, n) {
        var a = n(6)("unscopables"),
            i = Array.prototype;
        null == i[a] && n(15)(i, a, {}),
            (e.exports = function (e) {
                i[a][e] = !0;
            });
    },
    function (e, t, n) {
        var a = n(5);
        e.exports = function (e, t) {
            if (!a(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!");
            return e;
        };
    },
    function (e, t, n) {
        var a = n(10).f,
            i = n(14),
            r = n(6)("toStringTag");
        e.exports = function (e, t, n) {
            e && !i((e = n ? e : e.prototype), r) && a(e, r, { configurable: !0, value: t });
        };
    },
    function (e, t, n) {
        var a = n(1),
            i = n(26),
            r = n(3),
            o = n(69),
            s = "[" + o + "]",
            c = RegExp("^" + s + s + "*"),
            l = RegExp(s + s + "*$"),
            u = function (e, t, n) {
                var i = {},
                    s = r(function () {
                        return !!o[e]() || "â€‹Â…" != "â€‹Â…"[e]();
                    }),
                    c = (i[e] = s ? t(d) : o[e]);
                n && (i[n] = c), a(a.P + a.F * s, "String", i);
            },
            d = (u.trim = function (e, t) {
                return (e = String(i(e))), 1 & t && (e = e.replace(c, "")), 2 & t && (e = e.replace(l, "")), e;
            });
        e.exports = u;
    },
    function (e, t) {
        e.exports = {};
    },
    function (e, t, n) {
        "use strict";
        var a = n(2),
            i = n(10),
            r = n(9),
            o = n(6)("species");
        e.exports = function (e) {
            var t = a[e];
            r &&
                t &&
                !t[o] &&
                i.f(t, o, {
                    configurable: !0,
                    get: function () {
                        return this;
                    },
                });
        };
    },
    function (e, t) {
        e.exports = function (e, t, n, a) {
            if (!(e instanceof t) || (void 0 !== a && a in e)) throw TypeError(n + ": incorrect invocation!");
            return e;
        };
    },
    function (e, t, n) {
        var a = n(12);
        e.exports = function (e, t, n) {
            for (var i in t) a(e, i, t[i], n);
            return e;
        };
    },
    function (e, t, n) {
        e.exports = (function () {
            "use strict";
            var e = {
                required: "This field is required",
                email: "This field requires a valid e-mail address",
                number: "This field requires a number",
                url: "This field requires a valid website URL",
                tel: "This field requires a valid telephone number",
                maxlength: "This fields length must be < ${1}",
                minlength: "This fields length must be > ${1}",
                min: "Minimum value for this field is ${1}",
                max: "Maximum value for this field is ${1}",
                pattern: "Input must match the pattern ${1}",
            };
            function t(e) {
                var t = arguments;
                return this.replace(/\${([^{}]*)}/g, function (e, n) {
                    return t[n];
                });
            }
            function n(e) {
                return e.pristine.self.form.querySelectorAll('input[name="' + e.getAttribute("name") + '"]:checked').length;
            }
            var a = { classTo: "form-group", errorClass: "has-danger", successClass: "has-success", errorTextParent: "form-group", errorTextTag: "div", errorTextClass: "text-help" },
                i = ["required", "min", "max", "minlength", "maxlength", "pattern"],
                r = {},
                o = function (t, n) {
                    (n.name = t), n.msg || (n.msg = e[t]), void 0 === n.priority && (n.priority = 1), (r[t] = n);
                };
            function s(e, n, o) {
                var s = this;
                function c(e, t, n, a) {
                    var i = r[n];
                    if (i && (e.push(i), a)) {
                        var o = a.split(",");
                        o.unshift(null), (t[n] = o);
                    }
                }
                function l(e) {
                    var n = [],
                        a = !0;
                    for (var i in e.validators) {
                        var r = e.validators[i],
                            o = e.params[r.name] ? e.params[r.name] : [];
                        if (((o[0] = e.input.value), !r.fn.apply(e.input, o))) {
                            a = !1;
                            var s = e.messages[r.name] || r.msg;
                            if ((n.push(t.apply(s, o)), !0 === r.halt)) break;
                        }
                    }
                    return (e.errors = n), a;
                }
                function u(e) {
                    if (e.errorElements) return e.errorElements;
                    var t = (function (e, t) {
                            for (; (e = e.parentElement) && !e.classList.contains(t); );
                            return e;
                        })(e.input, s.config.classTo),
                        n = null,
                        a = null;
                    return (
                        (n = s.config.classTo === s.config.errorTextParent ? t : t.querySelector(s.errorTextParent)) &&
                            ((a = n.querySelector(".pristine-error")) ||
                                (((a = document.createElement(s.config.errorTextTag)).className = "pristine-error " + s.config.errorTextClass), n.appendChild(a), (a.pristineDisplay = a.style.display))),
                        (e.errorElements = [t, a])
                    );
                }
                function d(e) {
                    var t = u(e),
                        n = t[0],
                        a = t[1];
                    n && (n.classList.remove(s.config.successClass), n.classList.add(s.config.errorClass)), a && ((a.innerHTML = e.errors.join("<br/>")), (a.style.display = a.pristineDisplay || ""));
                }
                function h(e) {
                    var t = (function (e) {
                        var t = u(e),
                            n = t[0],
                            a = t[1];
                        return n && (n.classList.remove(s.config.errorClass), n.classList.remove(s.config.successClass)), a && ((a.innerHTML = ""), (a.style.display = "none")), t;
                    })(e)[0];
                    t && t.classList.add(s.config.successClass);
                }
                return (
                    (function (e, t, n) {
                        e.setAttribute("novalidate", "true"),
                            (s.form = e),
                            (s.config = (function (e, t) {
                                for (var n in t) n in e || (e[n] = t[n]);
                                return e;
                            })(t || {}, a)),
                            (s.live = !(!1 === n)),
                            (s.fields = Array.from(e.querySelectorAll("input:not([type^=hidden]):not([type^=submit]), select, textarea")).map(
                                function (e) {
                                    var t = [],
                                        n = {},
                                        a = {};
                                    return (
                                        [].forEach.call(e.attributes, function (e) {
                                            if (/^data-pristine-/.test(e.name)) {
                                                var r = e.name.substr(14);
                                                if (r.endsWith("-message")) return void (a[r.slice(0, r.length - 8)] = e.value);
                                                "type" === r && (r = e.value), c(t, n, r, e.value);
                                            } else ~i.indexOf(e.name) ? c(t, n, e.name, e.value) : "type" === e.name && c(t, n, e.value);
                                        }),
                                        t.sort(function (e, t) {
                                            return t.priority - e.priority;
                                        }),
                                        s.live &&
                                            e.addEventListener(
                                                ~["radio", "checkbox"].indexOf(e.getAttribute("type")) ? "change" : "input",
                                                function (e) {
                                                    s.validate(e.target);
                                                }.bind(s)
                                            ),
                                        (e.pristine = { input: e, validators: t, params: n, messages: a, self: s })
                                    );
                                }.bind(s)
                            ));
                    })(e, n, o),
                    (s.validate = function (e, t) {
                        t = (e && !0 === t) || !0 === e;
                        var n = s.fields;
                        !0 !== e &&
                            !1 !== e &&
                            (e instanceof HTMLElement
                                ? (n = [e.pristine])
                                : (e instanceof NodeList || e instanceof (window.$ || Array) || e instanceof Array) &&
                                  (n = Array.from(e).map(function (e) {
                                      return e.pristine;
                                  })));
                        var a = !0;
                        for (var i in n) {
                            var r = n[i];
                            l(r) ? !t && h(r) : ((a = !1), !t && d(r));
                        }
                        return a;
                    }),
                    (s.getErrors = function (e) {
                        if (!e) {
                            for (var t = [], n = 0; n < s.fields.length; n++) {
                                var a = s.fields[n];
                                a.errors.length && t.push({ input: a.input, errors: a.errors });
                            }
                            return t;
                        }
                        return e.length ? e[0].pristine.errors : e.pristine.errors;
                    }),
                    (s.addValidator = function (e, t, n, a, i) {
                        e instanceof HTMLElement
                            ? (e.pristine.validators.push({ fn: t, msg: n, priority: a, halt: i }),
                              e.pristine.validators.sort(function (e, t) {
                                  return t.priority - e.priority;
                              }))
                            : console.warn("The parameter elem must be a dom element");
                    }),
                    (s.addError = function (e, t) {
                        (e = e.length ? e[0] : e).pristine.errors.push(t), d(e.pristine);
                    }),
                    (s.reset = function () {
                        for (var e in s.fields) s.fields[e].errorElements = null;
                        Array.from(s.form.querySelectorAll(".pristine-error")).map(function (e) {
                            e.parentNode.removeChild(e);
                        }),
                            Array.from(s.form.querySelectorAll("." + s.config.classTo)).map(function (e) {
                                e.classList.remove(s.config.successClass), e.classList.remove(s.config.errorClass);
                            });
                    }),
                    (s.destroy = function () {
                        s.reset(),
                            s.fields.forEach(function (e) {
                                delete e.input.pristine;
                            }),
                            (s.fields = []);
                    }),
                    (s.setGlobalConfig = function (e) {
                        a = e;
                    }),
                    s
                );
            }
            return (
                o("text", {
                    fn: function (e) {
                        return !0;
                    },
                    priority: 0,
                }),
                o("required", {
                    fn: function (e) {
                        return "radio" === this.type || "checkbox" === this.type ? n(this) : void 0 !== e && "" !== e;
                    },
                    priority: 99,
                    halt: !0,
                }),
                o("email", {
                    fn: function (e) {
                        return !e || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
                    },
                }),
                o("number", {
                    fn: function (e) {
                        return !e || !isNaN(parseFloat(e));
                    },
                    priority: 2,
                }),
                o("integer", {
                    fn: function (e) {
                        return e && /^\d+$/.test(e);
                    },
                }),
                o("minlength", {
                    fn: function (e, t) {
                        return !e || e.length >= parseInt(t);
                    },
                }),
                o("maxlength", {
                    fn: function (e, t) {
                        return !e || e.length <= parseInt(t);
                    },
                }),
                o("min", {
                    fn: function (e, t) {
                        return !e || ("checkbox" === this.type ? n(this) >= parseInt(t) : parseFloat(e) >= parseFloat(t));
                    },
                }),
                o("max", {
                    fn: function (e, t) {
                        return !e || ("checkbox" === this.type ? n(this) <= parseInt(t) : parseFloat(e) <= parseFloat(t));
                    },
                }),
                o("pattern", {
                    fn: function (e, t) {
                        var n = t.match(new RegExp("^/(.*?)/([gimy]*)$"));
                        return !e || new RegExp(n[1], n[2]).test(e);
                    },
                }),
                (s.addValidator = function (e, t, n, a, i) {
                    o(e, { fn: t, msg: n, priority: a, halt: i });
                }),
                s
            );
        })();
    },
    function (e, t, n) {
        var a = n(25);
        e.exports = Object("z").propertyIsEnumerable(0)
            ? Object
            : function (e) {
                  return "String" == a(e) ? e.split("") : Object(e);
              };
    },
    function (e, t) {
        t.f = {}.propertyIsEnumerable;
    },
    function (e, t, n) {
        var a = n(25),
            i = n(6)("toStringTag"),
            r =
                "Arguments" ==
                a(
                    (function () {
                        return arguments;
                    })()
                );
        e.exports = function (e) {
            var t, n, o;
            return void 0 === e
                ? "Undefined"
                : null === e
                ? "Null"
                : "string" ==
                  typeof (n = (function (e, t) {
                      try {
                          return e[t];
                      } catch (e) {}
                  })((t = Object(e)), i))
                ? n
                : r
                ? a(t)
                : "Object" == (o = a(t)) && "function" == typeof t.callee
                ? "Arguments"
                : o;
        };
    },
    function (e, t, n) {
        var a = n(4),
            i = n(20),
            r = n(6)("species");
        e.exports = function (e, t) {
            var n,
                o = a(e).constructor;
            return void 0 === o || null == (n = a(o)[r]) ? t : i(n);
        };
    },
    function (e, t, n) {
        var a = n(8),
            i = n(2),
            r = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
        (e.exports = function (e, t) {
            return r[e] || (r[e] = void 0 !== t ? t : {});
        })("versions", []).push({ version: a.version, mode: n(32) ? "pure" : "global", copyright: "Â© 2020 Denis Pushkarev (zloirock.ru)" });
    },
    function (e, t, n) {
        var a = n(16),
            i = n(7),
            r = n(34);
        e.exports = function (e) {
            return function (t, n, o) {
                var s,
                    c = a(t),
                    l = i(c.length),
                    u = r(o, l);
                if (e && n != n) {
                    for (; l > u; ) if ((s = c[u++]) != s) return !0;
                } else for (; l > u; u++) if ((e || u in c) && c[u] === n) return e || u || 0;
                return !e && -1;
            };
        };
    },
    function (e, t) {
        t.f = Object.getOwnPropertySymbols;
    },
    function (e, t, n) {
        var a = n(25);
        e.exports =
            Array.isArray ||
            function (e) {
                return "Array" == a(e);
            };
    },
    function (e, t, n) {
        var a = n(6)("iterator"),
            i = !1;
        try {
            var r = [7][a]();
            (r.return = function () {
                i = !0;
            }),
                Array.from(r, function () {
                    throw 2;
                });
        } catch (e) {}
        e.exports = function (e, t) {
            if (!t && !i) return !1;
            var n = !1;
            try {
                var r = [7],
                    o = r[a]();
                (o.next = function () {
                    return { done: (n = !0) };
                }),
                    (r[a] = function () {
                        return o;
                    }),
                    e(r);
            } catch (e) {}
            return n;
        };
    },
    function (e, t, n) {
        "use strict";
        var a = n(4);
        e.exports = function () {
            var e = a(this),
                t = "";
            return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.unicode && (t += "u"), e.sticky && (t += "y"), t;
        };
    },
    function (e, t, n) {
        "use strict";
        var a = n(49),
            i = RegExp.prototype.exec;
        e.exports = function (e, t) {
            var n = e.exec;
            if ("function" == typeof n) {
                var r = n.call(e, t);
                if ("object" != typeof r) throw new TypeError("RegExp exec method returned something other than an Object or null");
                return r;
            }
            if ("RegExp" !== a(e)) throw new TypeError("RegExp#exec called on incompatible receiver");
            return i.call(e, t);
        };
    },
    function (e, t, n) {
        "use strict";
        n(112);
        var a = n(12),
            i = n(15),
            r = n(3),
            o = n(26),
            s = n(6),
            c = n(84),
            l = s("species"),
            u = !r(function () {
                var e = /./;
                return (
                    (e.exec = function () {
                        var e = [];
                        return (e.groups = { a: "7" }), e;
                    }),
                    "7" !== "".replace(e, "$<a>")
                );
            }),
            d = (function () {
                var e = /(?:)/,
                    t = e.exec;
                e.exec = function () {
                    return t.apply(this, arguments);
                };
                var n = "ab".split(e);
                return 2 === n.length && "a" === n[0] && "b" === n[1];
            })();
        e.exports = function (e, t, n) {
            var h = s(e),
                p = !r(function () {
                    var t = {};
                    return (
                        (t[h] = function () {
                            return 7;
                        }),
                        7 != ""[e](t)
                    );
                }),
                f = p
                    ? !r(function () {
                          var t = !1,
                              n = /a/;
                          return (
                              (n.exec = function () {
                                  return (t = !0), null;
                              }),
                              "split" === e &&
                                  ((n.constructor = {}),
                                  (n.constructor[l] = function () {
                                      return n;
                                  })),
                              n[h](""),
                              !t
                          );
                      })
                    : void 0;
            if (!p || !f || ("replace" === e && !u) || ("split" === e && !d)) {
                var g = /./[h],
                    m = n(o, h, ""[e], function (e, t, n, a, i) {
                        return t.exec === c ? (p && !i ? { done: !0, value: g.call(t, n, a) } : { done: !0, value: e.call(n, t, a) }) : { done: !1 };
                    }),
                    v = m[0],
                    y = m[1];
                a(String.prototype, e, v),
                    i(
                        RegExp.prototype,
                        h,
                        2 == t
                            ? function (e, t) {
                                  return y.call(e, this, t);
                              }
                            : function (e) {
                                  return y.call(e, this);
                              }
                    );
            }
        };
    },
    function (e, t, n) {
        var a = n(19),
            i = n(107),
            r = n(79),
            o = n(4),
            s = n(7),
            c = n(81),
            l = {},
            u = {};
        ((t = e.exports = function (e, t, n, d, h) {
            var p,
                f,
                g,
                m,
                v = h
                    ? function () {
                          return e;
                      }
                    : c(e),
                y = a(n, d, t ? 2 : 1),
                b = 0;
            if ("function" != typeof v) throw TypeError(e + " is not iterable!");
            if (r(v)) {
                for (p = s(e.length); p > b; b++) if ((m = t ? y(o((f = e[b]))[0], f[1]) : y(e[b])) === l || m === u) return m;
            } else for (g = v.call(e); !(f = g.next()).done; ) if ((m = i(g, y, f.value, t)) === l || m === u) return m;
        }).BREAK = l),
            (t.RETURN = u);
    },
    function (e, t, n) {
        var a = n(2).navigator;
        e.exports = (a && a.userAgent) || "";
    },
    function (e, t, n) {
        "use strict";
        var a = n(2),
            i = n(1),
            r = n(12),
            o = n(45),
            s = n(29),
            c = n(59),
            l = n(44),
            u = n(5),
            d = n(3),
            h = n(55),
            p = n(40),
            f = n(70);
        e.exports = function (e, t, n, g, m, v) {
            var y = a[e],
                b = y,
                k = m ? "set" : "add",
                S = b && b.prototype,
                w = {},
                C = function (e) {
                    var t = S[e];
                    r(
                        S,
                        e,
                        "delete" == e || "has" == e
                            ? function (e) {
                                  return !(v && !u(e)) && t.call(this, 0 === e ? 0 : e);
                              }
                            : "get" == e
                            ? function (e) {
                                  return v && !u(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
                              }
                            : "add" == e
                            ? function (e) {
                                  return t.call(this, 0 === e ? 0 : e), this;
                              }
                            : function (e, n) {
                                  return t.call(this, 0 === e ? 0 : e, n), this;
                              }
                    );
                };
            if (
                "function" == typeof b &&
                (v ||
                    (S.forEach &&
                        !d(function () {
                            new b().entries().next();
                        })))
            ) {
                var P = new b(),
                    x = P[k](v ? {} : -0, 1) != P,
                    T = d(function () {
                        P.has(1);
                    }),
                    A = h(function (e) {
                        new b(e);
                    }),
                    N =
                        !v &&
                        d(function () {
                            for (var e = new b(), t = 5; t--; ) e[k](t, t);
                            return !e.has(-0);
                        });
                A ||
                    (((b = t(function (t, n) {
                        l(t, b, e);
                        var a = f(new y(), t, b);
                        return null != n && c(n, m, a[k], a), a;
                    })).prototype = S),
                    (S.constructor = b)),
                    (T || N) && (C("delete"), C("has"), m && C("get")),
                    (N || x) && C(k),
                    v && S.clear && delete S.clear;
            } else (b = g.getConstructor(t, e, m, k)), o(b.prototype, n), (s.NEED = !0);
            return p(b, e), (w[e] = b), i(i.G + i.W + i.F * (b != y), w), v || g.setStrong(b, e, m), b;
        };
    },
    function (e, t, n) {
        for (
            var a,
                i = n(2),
                r = n(15),
                o = n(31),
                s = o("typed_array"),
                c = o("view"),
                l = !(!i.ArrayBuffer || !i.DataView),
                u = l,
                d = 0,
                h = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");
            d < 9;

        )
            (a = i[h[d++]]) ? (r(a.prototype, s, !0), r(a.prototype, c, !0)) : (u = !1);
        e.exports = { ABV: l, CONSTR: u, TYPED: s, VIEW: c };
    },
    function (e, t, n) {
        var a = n(5),
            i = n(2).document,
            r = a(i) && a(i.createElement);
        e.exports = function (e) {
            return r ? i.createElement(e) : {};
        };
    },
    function (e, t, n) {
        t.f = n(6);
    },
    function (e, t, n) {
        var a = n(51)("keys"),
            i = n(31);
        e.exports = function (e) {
            return a[e] || (a[e] = i(e));
        };
    },
    function (e, t) {
        e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
    },
    function (e, t, n) {
        var a = n(2).document;
        e.exports = a && a.documentElement;
    },
    function (e, t, n) {
        var a = n(5),
            i = n(4),
            r = function (e, t) {
                if ((i(e), !a(t) && null !== t)) throw TypeError(t + ": can't set as prototype!");
            };
        e.exports = {
            set:
                Object.setPrototypeOf ||
                ("__proto__" in {}
                    ? (function (e, t, a) {
                          try {
                              (a = n(19)(Function.call, n(22).f(Object.prototype, "__proto__").set, 2))(e, []), (t = !(e instanceof Array));
                          } catch (e) {
                              t = !0;
                          }
                          return function (e, n) {
                              return r(e, n), t ? (e.__proto__ = n) : a(e, n), e;
                          };
                      })({}, !1)
                    : void 0),
            check: r,
        };
    },
    function (e, t) {
        e.exports = "\t\n\v\f\r Â áš€á Žâ€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€¯âŸã€€\u2028\u2029\ufeff";
    },
    function (e, t, n) {
        var a = n(5),
            i = n(68).set;
        e.exports = function (e, t, n) {
            var r,
                o = t.constructor;
            return o !== n && "function" == typeof o && (r = o.prototype) !== n.prototype && a(r) && i && i(e, r), e;
        };
    },
    function (e, t, n) {
        "use strict";
        var a = n(21),
            i = n(26);
        e.exports = function (e) {
            var t = String(i(this)),
                n = "",
                r = a(e);
            if (r < 0 || r == 1 / 0) throw RangeError("Count can't be negative");
            for (; r > 0; (r >>>= 1) && (t += t)) 1 & r && (n += t);
            return n;
        };
    },
    function (e, t) {
        e.exports =
            Math.sign ||
            function (e) {
                return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1;
            };
    },
    function (e, t) {
        var n = Math.expm1;
        e.exports =
            !n || n(10) > 22025.465794806718 || n(10) < 22025.465794806718 || -2e-17 != n(-2e-17)
                ? function (e) {
                      return 0 == (e = +e) ? e : e > -1e-6 && e < 1e-6 ? e + (e * e) / 2 : Math.exp(e) - 1;
                  }
                : n;
    },
    function (e, t, n) {
        var a = n(21),
            i = n(26);
        e.exports = function (e) {
            return function (t, n) {
                var r,
                    o,
                    s = String(i(t)),
                    c = a(n),
                    l = s.length;
                return c < 0 || c >= l
                    ? e
                        ? ""
                        : void 0
                    : (r = s.charCodeAt(c)) < 55296 || r > 56319 || c + 1 === l || (o = s.charCodeAt(c + 1)) < 56320 || o > 57343
                    ? e
                        ? s.charAt(c)
                        : r
                    : e
                    ? s.slice(c, c + 2)
                    : o - 56320 + ((r - 55296) << 10) + 65536;
            };
        };
    },
    function (e, t, n) {
        "use strict";
        var a = n(32),
            i = n(1),
            r = n(12),
            o = n(15),
            s = n(42),
            c = n(106),
            l = n(40),
            u = n(37),
            d = n(6)("iterator"),
            h = !([].keys && "next" in [].keys()),
            p = function () {
                return this;
            };
        e.exports = function (e, t, n, f, g, m, v) {
            c(n, t, f);
            var y,
                b,
                k,
                S = function (e) {
                    if (!h && e in x) return x[e];
                    switch (e) {
                        case "keys":
                        case "values":
                            return function () {
                                return new n(this, e);
                            };
                    }
                    return function () {
                        return new n(this, e);
                    };
                },
                w = t + " Iterator",
                C = "values" == g,
                P = !1,
                x = e.prototype,
                T = x[d] || x["@@iterator"] || (g && x[g]),
                A = T || S(g),
                N = g ? (C ? S("entries") : A) : void 0,
                D = ("Array" == t && x.entries) || T;
            if (
                (D && (k = u(D.call(new e()))) !== Object.prototype && k.next && (l(k, w, !0), a || "function" == typeof k[d] || o(k, d, p)),
                C &&
                    T &&
                    "values" !== T.name &&
                    ((P = !0),
                    (A = function () {
                        return T.call(this);
                    })),
                (a && !v) || (!h && !P && x[d]) || o(x, d, A),
                (s[t] = A),
                (s[w] = p),
                g)
            )
                if (((y = { values: C ? A : S("values"), keys: m ? A : S("keys"), entries: N }), v)) for (b in y) b in x || r(x, b, y[b]);
                else i(i.P + i.F * (h || P), t, y);
            return y;
        };
    },
    function (e, t, n) {
        var a = n(77),
            i = n(26);
        e.exports = function (e, t, n) {
            if (a(t)) throw TypeError("String#" + n + " doesn't accept regex!");
            return String(i(e));
        };
    },
    function (e, t, n) {
        var a = n(5),
            i = n(25),
            r = n(6)("match");
        e.exports = function (e) {
            var t;
            return a(e) && (void 0 !== (t = e[r]) ? !!t : "RegExp" == i(e));
        };
    },
    function (e, t, n) {
        var a = n(6)("match");
        e.exports = function (e) {
            var t = /./;
            try {
                "/./"[e](t);
            } catch (n) {
                try {
                    return (t[a] = !1), !"/./"[e](t);
                } catch (e) {}
            }
            return !0;
        };
    },
    function (e, t, n) {
        var a = n(42),
            i = n(6)("iterator"),
            r = Array.prototype;
        e.exports = function (e) {
            return void 0 !== e && (a.Array === e || r[i] === e);
        };
    },
    function (e, t, n) {
        "use strict";
        var a = n(10),
            i = n(30);
        e.exports = function (e, t, n) {
            t in e ? a.f(e, t, i(0, n)) : (e[t] = n);
        };
    },
    function (e, t, n) {
        var a = n(49),
            i = n(6)("iterator"),
            r = n(42);
        e.exports = n(8).getIteratorMethod = function (e) {
            if (null != e) return e[i] || e["@@iterator"] || r[a(e)];
        };
    },
    function (e, t, n) {
        "use strict";
        var a = n(11),
            i = n(34),
            r = n(7);
        e.exports = function (e) {
            for (var t = a(this), n = r(t.length), o = arguments.length, s = i(o > 1 ? arguments[1] : void 0, n), c = o > 2 ? arguments[2] : void 0, l = void 0 === c ? n : i(c, n); l > s; ) t[s++] = e;
            return t;
        };
    },
    function (e, t, n) {
        "use strict";
        var a = n(38),
            i = n(111),
            r = n(42),
            o = n(16);
        (e.exports = n(75)(
            Array,
            "Array",
            function (e, t) {
                (this._t = o(e)), (this._i = 0), (this._k = t);
            },
            function () {
                var e = this._t,
                    t = this._k,
                    n = this._i++;
                return !e || n >= e.length ? ((this._t = void 0), i(1)) : i(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]);
            },
            "values"
        )),
            (r.Arguments = r.Array),
            a("keys"),
            a("values"),
            a("entries");
    },
    function (e, t, n) {
        "use strict";
        var a,
            i,
            r = n(56),
            o = RegExp.prototype.exec,
            s = String.prototype.replace,
            c = o,
            l = ((a = /a/), (i = /b*/g), o.call(a, "a"), o.call(i, "a"), 0 !== a.lastIndex || 0 !== i.lastIndex),
            u = void 0 !== /()??/.exec("")[1];
        (l || u) &&
            (c = function (e) {
                var t,
                    n,
                    a,
                    i,
                    c = this;
                return (
                    u && (n = new RegExp("^" + c.source + "$(?!\\s)", r.call(c))),
                    l && (t = c.lastIndex),
                    (a = o.call(c, e)),
                    l && a && (c.lastIndex = c.global ? a.index + a[0].length : t),
                    u &&
                        a &&
                        a.length > 1 &&
                        s.call(a[0], n, function () {
                            for (i = 1; i < arguments.length - 2; i++) void 0 === arguments[i] && (a[i] = void 0);
                        }),
                    a
                );
            }),
            (e.exports = c);
    },
    function (e, t, n) {
        "use strict";
        var a = n(74)(!0);
        e.exports = function (e, t, n) {
            return t + (n ? a(e, t).length : 1);
        };
    },
    function (e, t, n) {
        var a,
            i,
            r,
            o = n(19),
            s = n(100),
            c = n(67),
            l = n(63),
            u = n(2),
            d = u.process,
            h = u.setImmediate,
            p = u.clearImmediate,
            f = u.MessageChannel,
            g = u.Dispatch,
            m = 0,
            v = {},
            y = function () {
                var e = +this;
                if (v.hasOwnProperty(e)) {
                    var t = v[e];
                    delete v[e], t();
                }
            },
            b = function (e) {
                y.call(e.data);
            };
        (h && p) ||
            ((h = function (e) {
                for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++]);
                return (
                    (v[++m] = function () {
                        s("function" == typeof e ? e : Function(e), t);
                    }),
                    a(m),
                    m
                );
            }),
            (p = function (e) {
                delete v[e];
            }),
            "process" == n(25)(d)
                ? (a = function (e) {
                      d.nextTick(o(y, e, 1));
                  })
                : g && g.now
                ? (a = function (e) {
                      g.now(o(y, e, 1));
                  })
                : f
                ? ((r = (i = new f()).port2), (i.port1.onmessage = b), (a = o(r.postMessage, r, 1)))
                : u.addEventListener && "function" == typeof postMessage && !u.importScripts
                ? ((a = function (e) {
                      u.postMessage(e + "", "*");
                  }),
                  u.addEventListener("message", b, !1))
                : (a =
                      "onreadystatechange" in l("script")
                          ? function (e) {
                                c.appendChild(l("script")).onreadystatechange = function () {
                                    c.removeChild(this), y.call(e);
                                };
                            }
                          : function (e) {
                                setTimeout(o(y, e, 1), 0);
                            })),
            (e.exports = { set: h, clear: p });
    },
    function (e, t, n) {
        "use strict";
        var a = n(2),
            i = n(9),
            r = n(32),
            o = n(62),
            s = n(15),
            c = n(45),
            l = n(3),
            u = n(44),
            d = n(21),
            h = n(7),
            p = n(119),
            f = n(36).f,
            g = n(10).f,
            m = n(82),
            v = n(40),
            y = a.ArrayBuffer,
            b = a.DataView,
            k = a.Math,
            S = a.RangeError,
            w = a.Infinity,
            C = y,
            P = k.abs,
            x = k.pow,
            T = k.floor,
            A = k.log,
            N = k.LN2,
            D = i ? "_b" : "buffer",
            O = i ? "_l" : "byteLength",
            _ = i ? "_o" : "byteOffset";
        function M(e, t, n) {
            var a,
                i,
                r,
                o = new Array(n),
                s = 8 * n - t - 1,
                c = (1 << s) - 1,
                l = c >> 1,
                u = 23 === t ? x(2, -24) - x(2, -77) : 0,
                d = 0,
                h = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
            for (
                (e = P(e)) != e || e === w
                    ? ((i = e != e ? 1 : 0), (a = c))
                    : ((a = T(A(e) / N)),
                      e * (r = x(2, -a)) < 1 && (a--, (r *= 2)),
                      (e += a + l >= 1 ? u / r : u * x(2, 1 - l)) * r >= 2 && (a++, (r /= 2)),
                      a + l >= c ? ((i = 0), (a = c)) : a + l >= 1 ? ((i = (e * r - 1) * x(2, t)), (a += l)) : ((i = e * x(2, l - 1) * x(2, t)), (a = 0)));
                t >= 8;
                o[d++] = 255 & i, i /= 256, t -= 8
            );
            for (a = (a << t) | i, s += t; s > 0; o[d++] = 255 & a, a /= 256, s -= 8);
            return (o[--d] |= 128 * h), o;
        }
        function E(e, t, n) {
            var a,
                i = 8 * n - t - 1,
                r = (1 << i) - 1,
                o = r >> 1,
                s = i - 7,
                c = n - 1,
                l = e[c--],
                u = 127 & l;
            for (l >>= 7; s > 0; u = 256 * u + e[c], c--, s -= 8);
            for (a = u & ((1 << -s) - 1), u >>= -s, s += t; s > 0; a = 256 * a + e[c], c--, s -= 8);
            if (0 === u) u = 1 - o;
            else {
                if (u === r) return a ? NaN : l ? -w : w;
                (a += x(2, t)), (u -= o);
            }
            return (l ? -1 : 1) * a * x(2, u - t);
        }
        function R(e) {
            return (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0];
        }
        function L(e) {
            return [255 & e];
        }
        function I(e) {
            return [255 & e, (e >> 8) & 255];
        }
        function j(e) {
            return [255 & e, (e >> 8) & 255, (e >> 16) & 255, (e >> 24) & 255];
        }
        function B(e) {
            return M(e, 52, 8);
        }
        function z(e) {
            return M(e, 23, 4);
        }
        function F(e, t, n) {
            g(e.prototype, t, {
                get: function () {
                    return this[n];
                },
            });
        }
        function K(e, t, n, a) {
            var i = p(+n);
            if (i + t > e[O]) throw S("Wrong index!");
            var r = e[D]._b,
                o = i + e[_],
                s = r.slice(o, o + t);
            return a ? s : s.reverse();
        }
        function G(e, t, n, a, i, r) {
            var o = p(+n);
            if (o + t > e[O]) throw S("Wrong index!");
            for (var s = e[D]._b, c = o + e[_], l = a(+i), u = 0; u < t; u++) s[c + u] = l[r ? u : t - u - 1];
        }
        if (o.ABV) {
            if (
                !l(function () {
                    y(1);
                }) ||
                !l(function () {
                    new y(-1);
                }) ||
                l(function () {
                    return new y(), new y(1.5), new y(NaN), "ArrayBuffer" != y.name;
                })
            ) {
                for (
                    var V,
                        H = ((y = function (e) {
                            return u(this, y), new C(p(e));
                        }).prototype = C.prototype),
                        q = f(C),
                        W = 0;
                    q.length > W;

                )
                    (V = q[W++]) in y || s(y, V, C[V]);
                r || (H.constructor = y);
            }
            var U = new b(new y(2)),
                J = b.prototype.setInt8;
            U.setInt8(0, 2147483648),
                U.setInt8(1, 2147483649),
                (!U.getInt8(0) && U.getInt8(1)) ||
                    c(
                        b.prototype,
                        {
                            setInt8: function (e, t) {
                                J.call(this, e, (t << 24) >> 24);
                            },
                            setUint8: function (e, t) {
                                J.call(this, e, (t << 24) >> 24);
                            },
                        },
                        !0
                    );
        } else
            (y = function (e) {
                u(this, y, "ArrayBuffer");
                var t = p(e);
                (this._b = m.call(new Array(t), 0)), (this[O] = t);
            }),
                (b = function (e, t, n) {
                    u(this, b, "DataView"), u(e, y, "DataView");
                    var a = e[O],
                        i = d(t);
                    if (i < 0 || i > a) throw S("Wrong offset!");
                    if (i + (n = void 0 === n ? a - i : h(n)) > a) throw S("Wrong length!");
                    (this[D] = e), (this[_] = i), (this[O] = n);
                }),
                i && (F(y, "byteLength", "_l"), F(b, "buffer", "_b"), F(b, "byteLength", "_l"), F(b, "byteOffset", "_o")),
                c(b.prototype, {
                    getInt8: function (e) {
                        return (K(this, 1, e)[0] << 24) >> 24;
                    },
                    getUint8: function (e) {
                        return K(this, 1, e)[0];
                    },
                    getInt16: function (e) {
                        var t = K(this, 2, e, arguments[1]);
                        return (((t[1] << 8) | t[0]) << 16) >> 16;
                    },
                    getUint16: function (e) {
                        var t = K(this, 2, e, arguments[1]);
                        return (t[1] << 8) | t[0];
                    },
                    getInt32: function (e) {
                        return R(K(this, 4, e, arguments[1]));
                    },
                    getUint32: function (e) {
                        return R(K(this, 4, e, arguments[1])) >>> 0;
                    },
                    getFloat32: function (e) {
                        return E(K(this, 4, e, arguments[1]), 23, 4);
                    },
                    getFloat64: function (e) {
                        return E(K(this, 8, e, arguments[1]), 52, 8);
                    },
                    setInt8: function (e, t) {
                        G(this, 1, e, L, t);
                    },
                    setUint8: function (e, t) {
                        G(this, 1, e, L, t);
                    },
                    setInt16: function (e, t) {
                        G(this, 2, e, I, t, arguments[2]);
                    },
                    setUint16: function (e, t) {
                        G(this, 2, e, I, t, arguments[2]);
                    },
                    setInt32: function (e, t) {
                        G(this, 4, e, j, t, arguments[2]);
                    },
                    setUint32: function (e, t) {
                        G(this, 4, e, j, t, arguments[2]);
                    },
                    setFloat32: function (e, t) {
                        G(this, 4, e, z, t, arguments[2]);
                    },
                    setFloat64: function (e, t) {
                        G(this, 8, e, B, t, arguments[2]);
                    },
                });
        v(y, "ArrayBuffer"), v(b, "DataView"), s(b.prototype, o.VIEW, !0), (t.ArrayBuffer = y), (t.DataView = b);
    },
    function (e, t) {
        var n = (e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")());
        "number" == typeof __g && (__g = n);
    },
    function (e, t) {
        e.exports = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e;
        };
    },
    function (e, t, n) {
        e.exports = !n(124)(function () {
            return (
                7 !=
                Object.defineProperty({}, "a", {
                    get: function () {
                        return 7;
                    },
                }).a
            );
        });
    },
    function (e, t) {
        const n = (e, t = 2) => {
            const n = 10 ** t;
            return Math.round(e * n) / n;
        };
        class a {
            constructor(e = null) {
                this.state = e || {
                    lineItems: [],
                    taxRate: 0,
                    taxDescription: "",
                    taxCalculated: !1,
                    subTotal: 0,
                    shippingSurcharge: 0,
                    shippingTotal: 0,
                    taxTotal: 0,
                    lineItemTotal: 0,
                    discountType: "",
                    discountValue: 0,
                    discountTotal: 0,
                    discountSubtotal: 0,
                    discountFreeShipping: !1,
                    freeShippingMinimum: 999999999,
                    total: 0,
                };
            }
            get lineItems() {
                return this.state.lineItems.map((e) => Object.assign({}, e));
            }
            get taxRate() {
                return this.state.taxRate;
            }
            get taxDescription() {
                return this.state.taxDescription;
            }
            get taxCalculated() {
                return this.state.taxCalculated;
            }
            get lineItemTotal() {
                return this.state.lineItemTotal;
            }
            get subTotal() {
                return this.state.subTotal;
            }
            get shippingSurcharge() {
                return this.state.shippingSurcharge;
            }
            get shippingTotal() {
                return this.state.shippingTotal;
            }
            get taxTotal() {
                return this.state.taxTotal;
            }
            get discountType() {
                return this.state.discountType;
            }
            get discountValue() {
                return this.state.discountValue;
            }
            get discountTotal() {
                return this.state.discountTotal;
            }
            get beforeTaxAndShipping() {
                return this.state.subTotal - this.state.discountTotal;
            }
            get discountSubtotal() {
                return this.state.discountSubtotal;
            }
            get discountFreeShipping() {
                return this.state.discountFreeShipping;
            }
            get freeShippingMinimum() {
                return this.state.freeShippingMinimum;
            }
            get total() {
                return this.state.total;
            }
            toJSON() {
                return JSON.stringify(this.asJSON());
            }
            asJSON() {
                return this.state;
            }
            isEmpty() {
                return 0 === this.state.lineItems.length;
            }
            *eachItem() {
                for (let e = 0; e < this.state.lineItems.length; e++) yield this.state.lineItems[e];
            }
            totalSavings() {
                let e = 0,
                    t = 0;
                const n = { compareAtTotal: null, lineItemTotal: null, totalSavings: null, totalSavingsPct: null };
                for (let a = 0; a < this.state.lineItems.length; a++) {
                    const i = this.lineItems[a],
                        r = parseFloat(i.price),
                        o = parseFloat(i.compareAtPrice);
                    if (!("number" == typeof o && o > r)) return n;
                    (e += o * i.quantity), (t += r * i.quantity);
                }
                if (0 === e) return n;
                const a = e - t;
                let i = e > 0 ? 100 * (1 - t / e) : null;
                return (i = Math.abs(i - Math.round(i)) < 0.01 ? Math.round(i) : Math.floor(i)), { compareAtTotal: e, lineItemTotal: t, totalSavings: a, totalSavingsPct: i };
            }
            calculateSubTotal() {
                (this.state.subTotal = 0),
                    (this.state.discountSubtotal = 0),
                    (this.state.lineItemTotal = 0),
                    (this.state.shippingTotal = this.state.shippingSurcharge),
                    this.state.lineItems.forEach((e) => {
                        const t = e.price * e.quantity,
                            n = e.shippingRatePerItem * e.quantity;
                        (this.state.subTotal += t), (this.state.shippingTotal += n), (this.state.lineItemTotal += t), e.discountable && (this.state.discountSubtotal += e.price * e.quantity);
                    }),
                    this.state.discountFreeShipping && (this.state.shippingTotal = 0),
                    this.state.subTotal >= this.state.freeShippingMinimum && (this.state.shippingTotal = 0);
            }
            removeDiscount() {
                (this.state.discountType = ""), (this.state.discountValue = 0), (this.state.discountFreeShipping = !1), this.calculate();
            }
            calculateDiscount() {
                (this.state.discountTotal = 0),
                    "fixed_amount" === this.state.discountType && (this.state.discountTotal = this.state.discountValue),
                    "percentage" === this.state.discountType && ((this.state.discountTotal = this.state.discountSubtotal * this.state.discountValue), (this.state.discountTotal = n(this.state.discountTotal))),
                    this.state.discountTotal > this.state.subTotal && (this.state.discountTotal = this.state.subTotal);
            }
            getVariantQuantity(e) {
                e = parseFloat(e);
                for (let t = 0; t < this.state.lineItems.length; t++) {
                    const n = this.state.lineItems[t];
                    if (parseFloat(n.variantId) === e) return parseFloat(n.quantity);
                }
                return 0;
            }
            setVariantQuantity(e, t) {
                e = parseFloat(e);
                for (let n = 0; n < this.state.lineItems.length; n++) {
                    const a = this.state.lineItems[n];
                    if (a.variantId === e) return (a.quantity = t), void this.calculate();
                }
            }
            highestValueVariantId() {
                if (0 === this.state.lineItems.length) return null;
                let e = 0,
                    t = null;
                for (let n = 0; n < this.state.lineItems.length; n++) {
                    const a = this.state.lineItems[n],
                        i = parseFloat(a.price);
                    isNaN(i) || (i > e && ((e = i), (t = a.variantId)));
                }
                return t;
            }
            hasVariant(e) {
                return this.state.lineItems.map((e) => parseFloat(e.variantId)).indexOf(parseFloat(e)) > -1;
            }
            removeLineItem(e) {
                (this.state.lineItems = this.state.lineItems.filter((t) => parseFloat(t.variantId) != parseFloat(e))), this.calculate();
            }
            clearLineItems() {
                (this.state.lineItems = []), this.calculate();
            }
            calculate() {
                this.calculateSubTotal(),
                    this.calculateDiscount(),
                    (this.state.total = this.state.subTotal - this.state.discountTotal + this.state.taxTotal + this.state.shippingTotal),
                    (this.state.taxableAmount = this.state.total - this.state.taxTotal),
                    (this.state.taxableAmount = n(this.state.taxableAmount)),
                    (this.state.total = n(this.state.total)),
                    (this.state.subTotal = n(this.state.subTotal)),
                    (this.state.discountTotal = n(this.state.discountTotal)),
                    (this.state.taxTotal = n(this.state.taxTotal)),
                    (this.state.shippingTotal = n(this.state.shippingTotal));
            }
            setFreeShippingMinimum(e) {
                (this.state.freeShippingMinimum = e), this.calculate();
            }
            setShippingSurcharge(e) {
                (this.state.shippingSurcharge = e), this.calculate();
            }
            setDiscount(e, t, n) {
                (this.state.discountType = e), (this.state.discountValue = t), (this.state.discountFreeShipping = !0 === n), this.calculate();
            }
            getDiscount() {
                return { discountTotal: this.state.discountTotal, discountType: this.state.discountType, discountValue: this.state.discountValue, discountFreeShipping: this.state.discountFreeShipping };
            }
            addLineItem(e, t, n, a, i, r, o, s, c, l, u, d) {
                const h = n;
                (i = parseFloat(i)),
                    (r = parseInt(r)),
                    (e = parseInt(e)),
                    (c = parseFloat(c) || null),
                    (o = parseFloat(o) || 0),
                    this.state.lineItems.push({
                        productTitle: t,
                        variantTitle: h,
                        variantId: e,
                        title: n,
                        subtitle: a,
                        price: i,
                        quantity: r,
                        shippingRatePerItem: o,
                        discountable: s,
                        compareAtPrice: c,
                        productImage: l,
                        displayName: u,
                        renewalPeriodDays: d,
                    }),
                    this.calculate();
            }
            setTax(e, t, n) {
                (this.state.taxDescription = e), (this.state.taxRate = parseFloat(t)), (this.state.taxTotal = parseFloat(n)), (this.state.taxCalculated = !0), this.calculate();
            }
        }
        (a.fromJSON = (e) => new a(JSON.parse(e))), (e.exports = a);
    },
    function (e, t, n) {
        e.exports =
            !n(9) &&
            !n(3)(function () {
                return (
                    7 !=
                    Object.defineProperty(n(63)("div"), "a", {
                        get: function () {
                            return 7;
                        },
                    }).a
                );
            });
    },
    function (e, t, n) {
        var a = n(2),
            i = n(8),
            r = n(32),
            o = n(64),
            s = n(10).f;
        e.exports = function (e) {
            var t = i.Symbol || (i.Symbol = r ? {} : a.Symbol || {});
            "_" == e.charAt(0) || e in t || s(t, e, { value: o.f(e) });
        };
    },
    function (e, t, n) {
        var a = n(14),
            i = n(16),
            r = n(52)(!1),
            o = n(65)("IE_PROTO");
        e.exports = function (e, t) {
            var n,
                s = i(e),
                c = 0,
                l = [];
            for (n in s) n != o && a(s, n) && l.push(n);
            for (; t.length > c; ) a(s, (n = t[c++])) && (~r(l, n) || l.push(n));
            return l;
        };
    },
    function (e, t, n) {
        var a = n(10),
            i = n(4),
            r = n(33);
        e.exports = n(9)
            ? Object.defineProperties
            : function (e, t) {
                  i(e);
                  for (var n, o = r(t), s = o.length, c = 0; s > c; ) a.f(e, (n = o[c++]), t[n]);
                  return e;
              };
    },
    function (e, t, n) {
        var a = n(16),
            i = n(36).f,
            r = {}.toString,
            o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
        e.exports.f = function (e) {
            return o && "[object Window]" == r.call(e)
                ? (function (e) {
                      try {
                          return i(e);
                      } catch (e) {
                          return o.slice();
                      }
                  })(e)
                : i(a(e));
        };
    },
    function (e, t, n) {
        "use strict";
        var a = n(9),
            i = n(33),
            r = n(53),
            o = n(48),
            s = n(11),
            c = n(47),
            l = Object.assign;
        e.exports =
            !l ||
            n(3)(function () {
                var e = {},
                    t = {},
                    n = Symbol(),
                    a = "abcdefghijklmnopqrst";
                return (
                    (e[n] = 7),
                    a.split("").forEach(function (e) {
                        t[e] = e;
                    }),
                    7 != l({}, e)[n] || Object.keys(l({}, t)).join("") != a
                );
            })
                ? function (e, t) {
                      for (var n = s(e), l = arguments.length, u = 1, d = r.f, h = o.f; l > u; )
                          for (var p, f = c(arguments[u++]), g = d ? i(f).concat(d(f)) : i(f), m = g.length, v = 0; m > v; ) (p = g[v++]), (a && !h.call(f, p)) || (n[p] = f[p]);
                      return n;
                  }
                : l;
    },
    function (e, t) {
        e.exports =
            Object.is ||
            function (e, t) {
                return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
            };
    },
    function (e, t, n) {
        "use strict";
        var a = n(20),
            i = n(5),
            r = n(100),
            o = [].slice,
            s = {},
            c = function (e, t, n) {
                if (!(t in s)) {
                    for (var a = [], i = 0; i < t; i++) a[i] = "a[" + i + "]";
                    s[t] = Function("F,a", "return new F(" + a.join(",") + ")");
                }
                return s[t](e, n);
            };
        e.exports =
            Function.bind ||
            function (e) {
                var t = a(this),
                    n = o.call(arguments, 1),
                    s = function () {
                        var a = n.concat(o.call(arguments));
                        return this instanceof s ? c(t, a.length, a) : r(t, a, e);
                    };
                return i(t.prototype) && (s.prototype = t.prototype), s;
            };
    },
    function (e, t) {
        e.exports = function (e, t, n) {
            var a = void 0 === n;
            switch (t.length) {
                case 0:
                    return a ? e() : e.call(n);
                case 1:
                    return a ? e(t[0]) : e.call(n, t[0]);
                case 2:
                    return a ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
                case 3:
                    return a ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
                case 4:
                    return a ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3]);
            }
            return e.apply(n, t);
        };
    },
    function (e, t, n) {
        var a = n(2).parseInt,
            i = n(41).trim,
            r = n(69),
            o = /^[-+]?0[xX]/;
        e.exports =
            8 !== a(r + "08") || 22 !== a(r + "0x16")
                ? function (e, t) {
                      var n = i(String(e), 3);
                      return a(n, t >>> 0 || (o.test(n) ? 16 : 10));
                  }
                : a;
    },
    function (e, t, n) {
        var a = n(2).parseFloat,
            i = n(41).trim;
        e.exports =
            1 / a(n(69) + "-0") != -1 / 0
                ? function (e) {
                      var t = i(String(e), 3),
                          n = a(t);
                      return 0 === n && "-" == t.charAt(0) ? -0 : n;
                  }
                : a;
    },
    function (e, t, n) {
        var a = n(25);
        e.exports = function (e, t) {
            if ("number" != typeof e && "Number" != a(e)) throw TypeError(t);
            return +e;
        };
    },
    function (e, t, n) {
        var a = n(5),
            i = Math.floor;
        e.exports = function (e) {
            return !a(e) && isFinite(e) && i(e) === e;
        };
    },
    function (e, t) {
        e.exports =
            Math.log1p ||
            function (e) {
                return (e = +e) > -1e-8 && e < 1e-8 ? e - (e * e) / 2 : Math.log(1 + e);
            };
    },
    function (e, t, n) {
        "use strict";
        var a = n(35),
            i = n(30),
            r = n(40),
            o = {};
        n(15)(o, n(6)("iterator"), function () {
            return this;
        }),
            (e.exports = function (e, t, n) {
                (e.prototype = a(o, { next: i(1, n) })), r(e, t + " Iterator");
            });
    },
    function (e, t, n) {
        var a = n(4);
        e.exports = function (e, t, n, i) {
            try {
                return i ? t(a(n)[0], n[1]) : t(n);
            } catch (t) {
                var r = e.return;
                throw (void 0 !== r && a(r.call(e)), t);
            }
        };
    },
    function (e, t, n) {
        var a = n(224);
        e.exports = function (e, t) {
            return new (a(e))(t);
        };
    },
    function (e, t, n) {
        var a = n(20),
            i = n(11),
            r = n(47),
            o = n(7);
        e.exports = function (e, t, n, s, c) {
            a(t);
            var l = i(e),
                u = r(l),
                d = o(l.length),
                h = c ? d - 1 : 0,
                p = c ? -1 : 1;
            if (n < 2)
                for (;;) {
                    if (h in u) {
                        (s = u[h]), (h += p);
                        break;
                    }
                    if (((h += p), c ? h < 0 : d <= h)) throw TypeError("Reduce of empty array with no initial value");
                }
            for (; c ? h >= 0 : d > h; h += p) h in u && (s = t(s, u[h], h, l));
            return s;
        };
    },
    function (e, t, n) {
        "use strict";
        var a = n(11),
            i = n(34),
            r = n(7);
        e.exports =
            [].copyWithin ||
            function (e, t) {
                var n = a(this),
                    o = r(n.length),
                    s = i(e, o),
                    c = i(t, o),
                    l = arguments.length > 2 ? arguments[2] : void 0,
                    u = Math.min((void 0 === l ? o : i(l, o)) - c, o - s),
                    d = 1;
                for (c < s && s < c + u && ((d = -1), (c += u - 1), (s += u - 1)); u-- > 0; ) c in n ? (n[s] = n[c]) : delete n[s], (s += d), (c += d);
                return n;
            };
    },
    function (e, t) {
        e.exports = function (e, t) {
            return { value: t, done: !!e };
        };
    },
    function (e, t, n) {
        "use strict";
        var a = n(84);
        n(1)({ target: "RegExp", proto: !0, forced: a !== /./.exec }, { exec: a });
    },
    function (e, t, n) {
        n(9) && "g" != /./g.flags && n(10).f(RegExp.prototype, "flags", { configurable: !0, get: n(56) });
    },
    function (e, t, n) {
        "use strict";
        var a,
            i,
            r,
            o,
            s = n(32),
            c = n(2),
            l = n(19),
            u = n(49),
            d = n(1),
            h = n(5),
            p = n(20),
            f = n(44),
            g = n(59),
            m = n(50),
            v = n(86).set,
            y = n(244)(),
            b = n(115),
            k = n(245),
            S = n(60),
            w = n(116),
            C = c.TypeError,
            P = c.process,
            x = P && P.versions,
            T = (x && x.v8) || "",
            A = c.Promise,
            N = "process" == u(P),
            D = function () {},
            O = (i = b.f),
            _ = !!(function () {
                try {
                    var e = A.resolve(1),
                        t = ((e.constructor = {})[n(6)("species")] = function (e) {
                            e(D, D);
                        });
                    return (N || "function" == typeof PromiseRejectionEvent) && e.then(D) instanceof t && 0 !== T.indexOf("6.6") && -1 === S.indexOf("Chrome/66");
                } catch (e) {}
            })(),
            M = function (e) {
                var t;
                return !(!h(e) || "function" != typeof (t = e.then)) && t;
            },
            E = function (e, t) {
                if (!e._n) {
                    e._n = !0;
                    var n = e._c;
                    y(function () {
                        for (
                            var a = e._v,
                                i = 1 == e._s,
                                r = 0,
                                o = function (t) {
                                    var n,
                                        r,
                                        o,
                                        s = i ? t.ok : t.fail,
                                        c = t.resolve,
                                        l = t.reject,
                                        u = t.domain;
                                    try {
                                        s
                                            ? (i || (2 == e._h && I(e), (e._h = 1)),
                                              !0 === s ? (n = a) : (u && u.enter(), (n = s(a)), u && (u.exit(), (o = !0))),
                                              n === t.promise ? l(C("Promise-chain cycle")) : (r = M(n)) ? r.call(n, c, l) : c(n))
                                            : l(a);
                                    } catch (e) {
                                        u && !o && u.exit(), l(e);
                                    }
                                };
                            n.length > r;

                        )
                            o(n[r++]);
                        (e._c = []), (e._n = !1), t && !e._h && R(e);
                    });
                }
            },
            R = function (e) {
                v.call(c, function () {
                    var t,
                        n,
                        a,
                        i = e._v,
                        r = L(e);
                    if (
                        (r &&
                            ((t = k(function () {
                                N ? P.emit("unhandledRejection", i, e) : (n = c.onunhandledrejection) ? n({ promise: e, reason: i }) : (a = c.console) && a.error && a.error("Unhandled promise rejection", i);
                            })),
                            (e._h = N || L(e) ? 2 : 1)),
                        (e._a = void 0),
                        r && t.e)
                    )
                        throw t.v;
                });
            },
            L = function (e) {
                return 1 !== e._h && 0 === (e._a || e._c).length;
            },
            I = function (e) {
                v.call(c, function () {
                    var t;
                    N ? P.emit("rejectionHandled", e) : (t = c.onrejectionhandled) && t({ promise: e, reason: e._v });
                });
            },
            j = function (e) {
                var t = this;
                t._d || ((t._d = !0), ((t = t._w || t)._v = e), (t._s = 2), t._a || (t._a = t._c.slice()), E(t, !0));
            },
            B = function (e) {
                var t,
                    n = this;
                if (!n._d) {
                    (n._d = !0), (n = n._w || n);
                    try {
                        if (n === e) throw C("Promise can't be resolved itself");
                        (t = M(e))
                            ? y(function () {
                                  var a = { _w: n, _d: !1 };
                                  try {
                                      t.call(e, l(B, a, 1), l(j, a, 1));
                                  } catch (e) {
                                      j.call(a, e);
                                  }
                              })
                            : ((n._v = e), (n._s = 1), E(n, !1));
                    } catch (e) {
                        j.call({ _w: n, _d: !1 }, e);
                    }
                }
            };
        _ ||
            ((A = function (e) {
                f(this, A, "Promise", "_h"), p(e), a.call(this);
                try {
                    e(l(B, this, 1), l(j, this, 1));
                } catch (e) {
                    j.call(this, e);
                }
            }),
            ((a = function (e) {
                (this._c = []), (this._a = void 0), (this._s = 0), (this._d = !1), (this._v = void 0), (this._h = 0), (this._n = !1);
            }).prototype = n(45)(A.prototype, {
                then: function (e, t) {
                    var n = O(m(this, A));
                    return (n.ok = "function" != typeof e || e), (n.fail = "function" == typeof t && t), (n.domain = N ? P.domain : void 0), this._c.push(n), this._a && this._a.push(n), this._s && E(this, !1), n.promise;
                },
                catch: function (e) {
                    return this.then(void 0, e);
                },
            })),
            (r = function () {
                var e = new a();
                (this.promise = e), (this.resolve = l(B, e, 1)), (this.reject = l(j, e, 1));
            }),
            (b.f = O = function (e) {
                return e === A || e === o ? new r(e) : i(e);
            })),
            d(d.G + d.W + d.F * !_, { Promise: A }),
            n(40)(A, "Promise"),
            n(43)("Promise"),
            (o = n(8).Promise),
            d(d.S + d.F * !_, "Promise", {
                reject: function (e) {
                    var t = O(this);
                    return (0, t.reject)(e), t.promise;
                },
            }),
            d(d.S + d.F * (s || !_), "Promise", {
                resolve: function (e) {
                    return w(s && this === o ? A : this, e);
                },
            }),
            d(
                d.S +
                    d.F *
                        !(
                            _ &&
                            n(55)(function (e) {
                                A.all(e).catch(D);
                            })
                        ),
                "Promise",
                {
                    all: function (e) {
                        var t = this,
                            n = O(t),
                            a = n.resolve,
                            i = n.reject,
                            r = k(function () {
                                var n = [],
                                    r = 0,
                                    o = 1;
                                g(e, !1, function (e) {
                                    var s = r++,
                                        c = !1;
                                    n.push(void 0),
                                        o++,
                                        t.resolve(e).then(function (e) {
                                            c || ((c = !0), (n[s] = e), --o || a(n));
                                        }, i);
                                }),
                                    --o || a(n);
                            });
                        return r.e && i(r.v), n.promise;
                    },
                    race: function (e) {
                        var t = this,
                            n = O(t),
                            a = n.reject,
                            i = k(function () {
                                g(e, !1, function (e) {
                                    t.resolve(e).then(n.resolve, a);
                                });
                            });
                        return i.e && a(i.v), n.promise;
                    },
                }
            );
    },
    function (e, t, n) {
        "use strict";
        var a = n(20);
        function i(e) {
            var t, n;
            (this.promise = new e(function (e, a) {
                if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                (t = e), (n = a);
            })),
                (this.resolve = a(t)),
                (this.reject = a(n));
        }
        e.exports.f = function (e) {
            return new i(e);
        };
    },
    function (e, t, n) {
        var a = n(4),
            i = n(5),
            r = n(115);
        e.exports = function (e, t) {
            if ((a(e), i(t) && t.constructor === e)) return t;
            var n = r.f(e);
            return (0, n.resolve)(t), n.promise;
        };
    },
    function (e, t, n) {
        "use strict";
        var a = n(10).f,
            i = n(35),
            r = n(45),
            o = n(19),
            s = n(44),
            c = n(59),
            l = n(75),
            u = n(111),
            d = n(43),
            h = n(9),
            p = n(29).fastKey,
            f = n(39),
            g = h ? "_s" : "size",
            m = function (e, t) {
                var n,
                    a = p(t);
                if ("F" !== a) return e._i[a];
                for (n = e._f; n; n = n.n) if (n.k == t) return n;
            };
        e.exports = {
            getConstructor: function (e, t, n, l) {
                var u = e(function (e, a) {
                    s(e, u, t, "_i"), (e._t = t), (e._i = i(null)), (e._f = void 0), (e._l = void 0), (e[g] = 0), null != a && c(a, n, e[l], e);
                });
                return (
                    r(u.prototype, {
                        clear: function () {
                            for (var e = f(this, t), n = e._i, a = e._f; a; a = a.n) (a.r = !0), a.p && (a.p = a.p.n = void 0), delete n[a.i];
                            (e._f = e._l = void 0), (e[g] = 0);
                        },
                        delete: function (e) {
                            var n = f(this, t),
                                a = m(n, e);
                            if (a) {
                                var i = a.n,
                                    r = a.p;
                                delete n._i[a.i], (a.r = !0), r && (r.n = i), i && (i.p = r), n._f == a && (n._f = i), n._l == a && (n._l = r), n[g]--;
                            }
                            return !!a;
                        },
                        forEach: function (e) {
                            f(this, t);
                            for (var n, a = o(e, arguments.length > 1 ? arguments[1] : void 0, 3); (n = n ? n.n : this._f); ) for (a(n.v, n.k, this); n && n.r; ) n = n.p;
                        },
                        has: function (e) {
                            return !!m(f(this, t), e);
                        },
                    }),
                    h &&
                        a(u.prototype, "size", {
                            get: function () {
                                return f(this, t)[g];
                            },
                        }),
                    u
                );
            },
            def: function (e, t, n) {
                var a,
                    i,
                    r = m(e, t);
                return r ? (r.v = n) : ((e._l = r = { i: (i = p(t, !0)), k: t, v: n, p: (a = e._l), n: void 0, r: !1 }), e._f || (e._f = r), a && (a.n = r), e[g]++, "F" !== i && (e._i[i] = r)), e;
            },
            getEntry: m,
            setStrong: function (e, t, n) {
                l(
                    e,
                    t,
                    function (e, n) {
                        (this._t = f(e, t)), (this._k = n), (this._l = void 0);
                    },
                    function () {
                        for (var e = this._k, t = this._l; t && t.r; ) t = t.p;
                        return this._t && (this._l = t = t ? t.n : this._t._f) ? u(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v]) : ((this._t = void 0), u(1));
                    },
                    n ? "entries" : "values",
                    !n,
                    !0
                ),
                    d(t);
            },
        };
    },
    function (e, t, n) {
        "use strict";
        var a = n(45),
            i = n(29).getWeak,
            r = n(4),
            o = n(5),
            s = n(44),
            c = n(59),
            l = n(24),
            u = n(14),
            d = n(39),
            h = l(5),
            p = l(6),
            f = 0,
            g = function (e) {
                return e._l || (e._l = new m());
            },
            m = function () {
                this.a = [];
            },
            v = function (e, t) {
                return h(e.a, function (e) {
                    return e[0] === t;
                });
            };
        (m.prototype = {
            get: function (e) {
                var t = v(this, e);
                if (t) return t[1];
            },
            has: function (e) {
                return !!v(this, e);
            },
            set: function (e, t) {
                var n = v(this, e);
                n ? (n[1] = t) : this.a.push([e, t]);
            },
            delete: function (e) {
                var t = p(this.a, function (t) {
                    return t[0] === e;
                });
                return ~t && this.a.splice(t, 1), !!~t;
            },
        }),
            (e.exports = {
                getConstructor: function (e, t, n, r) {
                    var l = e(function (e, a) {
                        s(e, l, t, "_i"), (e._t = t), (e._i = f++), (e._l = void 0), null != a && c(a, n, e[r], e);
                    });
                    return (
                        a(l.prototype, {
                            delete: function (e) {
                                if (!o(e)) return !1;
                                var n = i(e);
                                return !0 === n ? g(d(this, t)).delete(e) : n && u(n, this._i) && delete n[this._i];
                            },
                            has: function (e) {
                                if (!o(e)) return !1;
                                var n = i(e);
                                return !0 === n ? g(d(this, t)).has(e) : n && u(n, this._i);
                            },
                        }),
                        l
                    );
                },
                def: function (e, t, n) {
                    var a = i(r(t), !0);
                    return !0 === a ? g(e).set(t, n) : (a[e._i] = n), e;
                },
                ufstore: g,
            });
    },
    function (e, t, n) {
        var a = n(21),
            i = n(7);
        e.exports = function (e) {
            if (void 0 === e) return 0;
            var t = a(e),
                n = i(t);
            if (t !== n) throw RangeError("Wrong length!");
            return n;
        };
    },
    function (e, t, n) {
        var a = n(36),
            i = n(53),
            r = n(4),
            o = n(2).Reflect;
        e.exports =
            (o && o.ownKeys) ||
            function (e) {
                var t = a.f(r(e)),
                    n = i.f;
                return n ? t.concat(n(e)) : t;
            };
    },
    function (e, t, n) {
        var a = n(7),
            i = n(71),
            r = n(26);
        e.exports = function (e, t, n, o) {
            var s = String(r(e)),
                c = s.length,
                l = void 0 === n ? " " : String(n),
                u = a(t);
            if (u <= c || "" == l) return s;
            var d = u - c,
                h = i.call(l, Math.ceil(d / l.length));
            return h.length > d && (h = h.slice(0, d)), o ? h + s : s + h;
        };
    },
    function (e, t, n) {
        var a = n(9),
            i = n(33),
            r = n(16),
            o = n(48).f;
        e.exports = function (e) {
            return function (t) {
                for (var n, s = r(t), c = i(s), l = c.length, u = 0, d = []; l > u; ) (n = c[u++]), (a && !o.call(s, n)) || d.push(e ? [n, s[n]] : s[n]);
                return d;
            };
        };
    },
    function (e, t) {
        var n = (e.exports = { version: "2.6.12" });
        "number" == typeof __e && (__e = n);
    },
    function (e, t) {
        e.exports = function (e) {
            try {
                return !!e();
            } catch (e) {
                return !0;
            }
        };
    },
    function (e, t, n) {
        var a,
            i = function (e) {
                var t = {
                    addEvent: function (e, t, n, a) {
                        e.addEventListener
                            ? e.addEventListener(t, n, !1)
                            : e.attachEvent &&
                              ((e["e" + t + n] = n),
                              (e[t + n] = function () {
                                  e["e" + t + n](window.event, a);
                              }),
                              e.attachEvent("on" + t, e[t + n]));
                    },
                    removeEvent: function (e, t, n) {
                        e.removeEventListener ? e.removeEventListener(t, n) : e.attachEvent && e.detachEvent(t);
                    },
                    input: "",
                    pattern: "38384040373937396665",
                    keydownHandler: function (e, n) {
                        if ((n && (t = n), (t.input += e ? e.keyCode : event.keyCode), t.input.length > t.pattern.length && (t.input = t.input.substr(t.input.length - t.pattern.length)), t.input === t.pattern))
                            return t.code(t._currentLink), (t.input = ""), e.preventDefault(), !1;
                    },
                    load: function (e) {
                        (this._currentLink = e), this.addEvent(document, "keydown", this.keydownHandler, this), this.iphone.load(e);
                    },
                    unload: function () {
                        this.removeEvent(document, "keydown", this.keydownHandler), this.iphone.unload();
                    },
                    code: function (e) {
                        window.location = e;
                    },
                    iphone: {
                        start_x: 0,
                        start_y: 0,
                        stop_x: 0,
                        stop_y: 0,
                        tap: !1,
                        capture: !1,
                        orig_keys: "",
                        keys: ["UP", "UP", "DOWN", "DOWN", "LEFT", "RIGHT", "LEFT", "RIGHT", "TAP", "TAP"],
                        input: [],
                        code: function (e) {
                            t.code(e);
                        },
                        touchmoveHandler: function (e) {
                            if (1 === e.touches.length && !0 === t.iphone.capture) {
                                var n = e.touches[0];
                                (t.iphone.stop_x = n.pageX), (t.iphone.stop_y = n.pageY), (t.iphone.tap = !1), (t.iphone.capture = !1), t.iphone.check_direction();
                            }
                        },
                        touchendHandler: function () {
                            if ((t.iphone.input.push(t.iphone.check_direction()), t.iphone.input.length > t.iphone.keys.length && t.iphone.input.shift(), t.iphone.input.length === t.iphone.keys.length)) {
                                for (var e = !0, n = 0; n < t.iphone.keys.length; n++) t.iphone.input[n] !== t.iphone.keys[n] && (e = !1);
                                e && t.iphone.code(t._currentLink);
                            }
                        },
                        touchstartHandler: function (e) {
                            (t.iphone.start_x = e.changedTouches[0].pageX), (t.iphone.start_y = e.changedTouches[0].pageY), (t.iphone.tap = !0), (t.iphone.capture = !0);
                        },
                        load: function (e) {
                            (this.orig_keys = this.keys), t.addEvent(document, "touchmove", this.touchmoveHandler), t.addEvent(document, "touchend", this.touchendHandler, !1), t.addEvent(document, "touchstart", this.touchstartHandler);
                        },
                        unload: function () {
                            t.removeEvent(document, "touchmove", this.touchmoveHandler), t.removeEvent(document, "touchend", this.touchendHandler), t.removeEvent(document, "touchstart", this.touchstartHandler);
                        },
                        check_direction: function () {
                            return (
                                (x_magnitude = Math.abs(this.start_x - this.stop_x)),
                                (y_magnitude = Math.abs(this.start_y - this.stop_y)),
                                (x = this.start_x - this.stop_x < 0 ? "RIGHT" : "LEFT"),
                                (y = this.start_y - this.stop_y < 0 ? "DOWN" : "UP"),
                                (result = x_magnitude > y_magnitude ? x : y),
                                (result = !0 === this.tap ? "TAP" : result),
                                result
                            );
                        },
                    },
                };
                return "string" == typeof e && t.load(e), "function" == typeof e && ((t.code = e), t.load()), t;
            };
        void 0 !== e.exports
            ? (e.exports = i)
            : void 0 ===
                  (a = function () {
                      return i;
                  }.apply(t, [])) || (e.exports = a);
    },
    function (e, t, n) {
        "use strict";
        const a = new Uint32Array(65536),
            i = (e, t) => {
                if (e.length > t.length) {
                    const n = t;
                    (t = e), (e = n);
                }
                return 0 === e.length
                    ? t.length
                    : e.length <= 32
                    ? ((e, t) => {
                          const n = e.length,
                              i = t.length,
                              r = 1 << (n - 1);
                          let o = -1,
                              s = 0,
                              c = n,
                              l = n;
                          for (; l--; ) a[e.charCodeAt(l)] |= 1 << l;
                          for (l = 0; l < i; l++) {
                              let e = a[t.charCodeAt(l)];
                              const n = e | s;
                              (e |= ((e & o) + o) ^ o), (s |= ~(e | o)), (o &= e), s & r && c++, o & r && c--, (s = (s << 1) | 1), (o = (o << 1) | ~(n | s)), (s &= n);
                          }
                          for (l = n; l--; ) a[e.charCodeAt(l)] = 0;
                          return c;
                      })(e, t)
                    : ((e, t) => {
                          const n = e.length,
                              i = t.length,
                              r = [],
                              o = [],
                              s = Math.ceil(n / 32),
                              c = Math.ceil(i / 32);
                          let l = i;
                          for (let e = 0; e < s; e++) (o[e] = -1), (r[e] = 0);
                          let u = 0;
                          for (; u < c - 1; u++) {
                              let s = 0,
                                  c = -1;
                              const d = 32 * u,
                                  h = Math.min(32, i) + d;
                              for (let e = d; e < h; e++) a[t.charCodeAt(e)] |= 1 << e;
                              l = i;
                              for (let t = 0; t < n; t++) {
                                  const n = a[e.charCodeAt(t)],
                                      i = (o[(t / 32) | 0] >>> t) & 1,
                                      l = (r[(t / 32) | 0] >>> t) & 1,
                                      u = n | s,
                                      d = ((((n | l) & c) + c) ^ c) | n | l;
                                  let h = s | ~(d | c),
                                      p = c & d;
                                  (h >>> 31) ^ i && (o[(t / 32) | 0] ^= 1 << t), (p >>> 31) ^ l && (r[(t / 32) | 0] ^= 1 << t), (h = (h << 1) | i), (p = (p << 1) | l), (c = p | ~(u | h)), (s = h & u);
                              }
                              for (let e = d; e < h; e++) a[t.charCodeAt(e)] = 0;
                          }
                          let d = 0,
                              h = -1;
                          const p = 32 * u,
                              f = Math.min(32, i - p) + p;
                          for (let e = p; e < f; e++) a[t.charCodeAt(e)] |= 1 << e;
                          l = i;
                          for (let t = 0; t < n; t++) {
                              const n = a[e.charCodeAt(t)],
                                  s = (o[(t / 32) | 0] >>> t) & 1,
                                  c = (r[(t / 32) | 0] >>> t) & 1,
                                  u = n | d,
                                  p = ((((n | c) & h) + h) ^ h) | n | c;
                              let f = d | ~(p | h),
                                  g = h & p;
                              (l += (f >>> (i - 1)) & 1),
                                  (l -= (g >>> (i - 1)) & 1),
                                  (f >>> 31) ^ s && (o[(t / 32) | 0] ^= 1 << t),
                                  (g >>> 31) ^ c && (r[(t / 32) | 0] ^= 1 << t),
                                  (f = (f << 1) | s),
                                  (g = (g << 1) | c),
                                  (h = g | ~(u | f)),
                                  (d = f & u);
                          }
                          for (let e = p; e < f; e++) a[t.charCodeAt(e)] = 0;
                          return l;
                      })(e, t);
            };
        e.exports = {
            closest: (e, t) => {
                let n = 1 / 0,
                    a = 0;
                for (let r = 0; r < t.length; r++) {
                    const o = i(e, t[r]);
                    o < n && ((n = o), (a = r));
                }
                return t[a];
            },
            distance: i,
        };
    },
    function (e, t) {
        function n(t) {
            return (
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? ((e.exports = n = function (e) {
                          return typeof e;
                      }),
                      (e.exports.default = e.exports),
                      (e.exports.__esModule = !0))
                    : ((e.exports = n = function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      }),
                      (e.exports.default = e.exports),
                      (e.exports.__esModule = !0)),
                n(t)
            );
        }
        (e.exports = n), (e.exports.default = e.exports), (e.exports.__esModule = !0);
    },
    ,
    function (e, t, n) {
        n(130), (e.exports = n(321));
    },
    function (e, t, n) {
        "use strict";
        n(131);
        var a,
            i = (a = n(303)) && a.__esModule ? a : { default: a };
        i.default._babelPolyfill &&
            "undefined" != typeof console &&
            console.warn &&
            console.warn(
                "@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning."
            ),
            (i.default._babelPolyfill = !0);
    },
    function (e, t, n) {
        "use strict";
        n(132), n(275), n(277), n(280), n(282), n(284), n(286), n(288), n(290), n(292), n(294), n(296), n(298), n(302);
    },
    function (e, t, n) {
        n(133),
            n(136),
            n(137),
            n(138),
            n(139),
            n(140),
            n(141),
            n(142),
            n(143),
            n(144),
            n(145),
            n(146),
            n(147),
            n(148),
            n(149),
            n(150),
            n(151),
            n(152),
            n(153),
            n(154),
            n(155),
            n(156),
            n(157),
            n(158),
            n(159),
            n(160),
            n(161),
            n(162),
            n(163),
            n(164),
            n(165),
            n(166),
            n(167),
            n(168),
            n(169),
            n(170),
            n(171),
            n(172),
            n(173),
            n(174),
            n(175),
            n(176),
            n(177),
            n(179),
            n(180),
            n(181),
            n(182),
            n(183),
            n(184),
            n(185),
            n(186),
            n(187),
            n(188),
            n(189),
            n(190),
            n(191),
            n(192),
            n(193),
            n(194),
            n(195),
            n(196),
            n(197),
            n(198),
            n(199),
            n(200),
            n(201),
            n(202),
            n(203),
            n(204),
            n(205),
            n(206),
            n(207),
            n(208),
            n(209),
            n(210),
            n(211),
            n(212),
            n(214),
            n(215),
            n(217),
            n(218),
            n(219),
            n(220),
            n(221),
            n(222),
            n(223),
            n(225),
            n(226),
            n(227),
            n(228),
            n(229),
            n(230),
            n(231),
            n(232),
            n(233),
            n(234),
            n(235),
            n(236),
            n(237),
            n(83),
            n(238),
            n(112),
            n(239),
            n(113),
            n(240),
            n(241),
            n(242),
            n(243),
            n(114),
            n(246),
            n(247),
            n(248),
            n(249),
            n(250),
            n(251),
            n(252),
            n(253),
            n(254),
            n(255),
            n(256),
            n(257),
            n(258),
            n(259),
            n(260),
            n(261),
            n(262),
            n(263),
            n(264),
            n(265),
            n(266),
            n(267),
            n(268),
            n(269),
            n(270),
            n(271),
            n(272),
            n(273),
            n(274),
            (e.exports = n(8));
    },
    function (e, t, n) {
        "use strict";
        var a = n(2),
            i = n(14),
            r = n(9),
            o = n(1),
            s = n(12),
            c = n(29).KEY,
            l = n(3),
            u = n(51),
            d = n(40),
            h = n(31),
            p = n(6),
            f = n(64),
            g = n(93),
            m = n(135),
            v = n(54),
            y = n(4),
            b = n(5),
            k = n(11),
            S = n(16),
            w = n(28),
            C = n(30),
            P = n(35),
            x = n(96),
            T = n(22),
            A = n(53),
            N = n(10),
            D = n(33),
            O = T.f,
            _ = N.f,
            M = x.f,
            E = a.Symbol,
            R = a.JSON,
            L = R && R.stringify,
            I = p("_hidden"),
            j = p("toPrimitive"),
            B = {}.propertyIsEnumerable,
            z = u("symbol-registry"),
            F = u("symbols"),
            K = u("op-symbols"),
            G = Object.prototype,
            V = "function" == typeof E && !!A.f,
            H = a.QObject,
            q = !H || !H.prototype || !H.prototype.findChild,
            W =
                r &&
                l(function () {
                    return (
                        7 !=
                        P(
                            _({}, "a", {
                                get: function () {
                                    return _(this, "a", { value: 7 }).a;
                                },
                            })
                        ).a
                    );
                })
                    ? function (e, t, n) {
                          var a = O(G, t);
                          a && delete G[t], _(e, t, n), a && e !== G && _(G, t, a);
                      }
                    : _,
            U = function (e) {
                var t = (F[e] = P(E.prototype));
                return (t._k = e), t;
            },
            J =
                V && "symbol" == typeof E.iterator
                    ? function (e) {
                          return "symbol" == typeof e;
                      }
                    : function (e) {
                          return e instanceof E;
                      },
            $ = function (e, t, n) {
                return (
                    e === G && $(K, t, n),
                    y(e),
                    (t = w(t, !0)),
                    y(n),
                    i(F, t) ? (n.enumerable ? (i(e, I) && e[I][t] && (e[I][t] = !1), (n = P(n, { enumerable: C(0, !1) }))) : (i(e, I) || _(e, I, C(1, {})), (e[I][t] = !0)), W(e, t, n)) : _(e, t, n)
                );
            },
            Z = function (e, t) {
                y(e);
                for (var n, a = m((t = S(t))), i = 0, r = a.length; r > i; ) $(e, (n = a[i++]), t[n]);
                return e;
            },
            Q = function (e) {
                var t = B.call(this, (e = w(e, !0)));
                return !(this === G && i(F, e) && !i(K, e)) && (!(t || !i(this, e) || !i(F, e) || (i(this, I) && this[I][e])) || t);
            },
            Y = function (e, t) {
                if (((e = S(e)), (t = w(t, !0)), e !== G || !i(F, t) || i(K, t))) {
                    var n = O(e, t);
                    return !n || !i(F, t) || (i(e, I) && e[I][t]) || (n.enumerable = !0), n;
                }
            },
            X = function (e) {
                for (var t, n = M(S(e)), a = [], r = 0; n.length > r; ) i(F, (t = n[r++])) || t == I || t == c || a.push(t);
                return a;
            },
            ee = function (e) {
                for (var t, n = e === G, a = M(n ? K : S(e)), r = [], o = 0; a.length > o; ) !i(F, (t = a[o++])) || (n && !i(G, t)) || r.push(F[t]);
                return r;
            };
        V ||
            (s(
                (E = function () {
                    if (this instanceof E) throw TypeError("Symbol is not a constructor!");
                    var e = h(arguments.length > 0 ? arguments[0] : void 0),
                        t = function (n) {
                            this === G && t.call(K, n), i(this, I) && i(this[I], e) && (this[I][e] = !1), W(this, e, C(1, n));
                        };
                    return r && q && W(G, e, { configurable: !0, set: t }), U(e);
                }).prototype,
                "toString",
                function () {
                    return this._k;
                }
            ),
            (T.f = Y),
            (N.f = $),
            (n(36).f = x.f = X),
            (n(48).f = Q),
            (A.f = ee),
            r && !n(32) && s(G, "propertyIsEnumerable", Q, !0),
            (f.f = function (e) {
                return U(p(e));
            })),
            o(o.G + o.W + o.F * !V, { Symbol: E });
        for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne; ) p(te[ne++]);
        for (var ae = D(p.store), ie = 0; ae.length > ie; ) g(ae[ie++]);
        o(o.S + o.F * !V, "Symbol", {
            for: function (e) {
                return i(z, (e += "")) ? z[e] : (z[e] = E(e));
            },
            keyFor: function (e) {
                if (!J(e)) throw TypeError(e + " is not a symbol!");
                for (var t in z) if (z[t] === e) return t;
            },
            useSetter: function () {
                q = !0;
            },
            useSimple: function () {
                q = !1;
            },
        }),
            o(o.S + o.F * !V, "Object", {
                create: function (e, t) {
                    return void 0 === t ? P(e) : Z(P(e), t);
                },
                defineProperty: $,
                defineProperties: Z,
                getOwnPropertyDescriptor: Y,
                getOwnPropertyNames: X,
                getOwnPropertySymbols: ee,
            });
        var re = l(function () {
            A.f(1);
        });
        o(o.S + o.F * re, "Object", {
            getOwnPropertySymbols: function (e) {
                return A.f(k(e));
            },
        }),
            R &&
                o(
                    o.S +
                        o.F *
                            (!V ||
                                l(function () {
                                    var e = E();
                                    return "[null]" != L([e]) || "{}" != L({ a: e }) || "{}" != L(Object(e));
                                })),
                    "JSON",
                    {
                        stringify: function (e) {
                            for (var t, n, a = [e], i = 1; arguments.length > i; ) a.push(arguments[i++]);
                            if (((n = t = a[1]), (b(t) || void 0 !== e) && !J(e)))
                                return (
                                    v(t) ||
                                        (t = function (e, t) {
                                            if (("function" == typeof n && (t = n.call(this, e, t)), !J(t))) return t;
                                        }),
                                    (a[1] = t),
                                    L.apply(R, a)
                                );
                        },
                    }
                ),
            E.prototype[j] || n(15)(E.prototype, j, E.prototype.valueOf),
            d(E, "Symbol"),
            d(Math, "Math", !0),
            d(a.JSON, "JSON", !0);
    },
    function (e, t, n) {
        e.exports = n(51)("native-function-to-string", Function.toString);
    },
    function (e, t, n) {
        var a = n(33),
            i = n(53),
            r = n(48);
        e.exports = function (e) {
            var t = a(e),
                n = i.f;
            if (n) for (var o, s = n(e), c = r.f, l = 0; s.length > l; ) c.call(e, (o = s[l++])) && t.push(o);
            return t;
        };
    },
    function (e, t, n) {
        var a = n(1);
        a(a.S, "Object", { create: n(35) });
    },
    function (e, t, n) {
        var a = n(1);
        a(a.S + a.F * !n(9), "Object", { defineProperty: n(10).f });
    },
    function (e, t, n) {
        var a = n(1);
        a(a.S + a.F * !n(9), "Object", { defineProperties: n(95) });
    },
    function (e, t, n) {
        var a = n(16),
            i = n(22).f;
        n(23)("getOwnPropertyDescriptor", function () {
            return function (e, t) {
                return i(a(e), t);
            };
        });
    },
    function (e, t, n) {
        var a = n(11),
            i = n(37);
        n(23)("getPrototypeOf", function () {
            return function (e) {
                return i(a(e));
            };
        });
    },
    function (e, t, n) {
        var a = n(11),
            i = n(33);
        n(23)("keys", function () {
            return function (e) {
                return i(a(e));
            };
        });
    },
    function (e, t, n) {
        n(23)("getOwnPropertyNames", function () {
            return n(96).f;
        });
    },
    function (e, t, n) {
        var a = n(5),
            i = n(29).onFreeze;
        n(23)("freeze", function (e) {
            return function (t) {
                return e && a(t) ? e(i(t)) : t;
            };
        });
    },
    function (e, t, n) {
        var a = n(5),
            i = n(29).onFreeze;
        n(23)("seal", function (e) {
            return function (t) {
                return e && a(t) ? e(i(t)) : t;
            };
        });
    },
    function (e, t, n) {
        var a = n(5),
            i = n(29).onFreeze;
        n(23)("preventExtensions", function (e) {
            return function (t) {
                return e && a(t) ? e(i(t)) : t;
            };
        });
    },
    function (e, t, n) {
        var a = n(5);
        n(23)("isFrozen", function (e) {
            return function (t) {
                return !a(t) || (!!e && e(t));
            };
        });
    },
    function (e, t, n) {
        var a = n(5);
        n(23)("isSealed", function (e) {
            return function (t) {
                return !a(t) || (!!e && e(t));
            };
        });
    },
    function (e, t, n) {
        var a = n(5);
        n(23)("isExtensible", function (e) {
            return function (t) {
                return !!a(t) && (!e || e(t));
            };
        });
    },
    function (e, t, n) {
        var a = n(1);
        a(a.S + a.F, "Object", { assign: n(97) });
    },
    function (e, t, n) {
        var a = n(1);
        a(a.S, "Object", { is: n(98) });
    },
    function (e, t, n) {
        var a = n(1);
        a(a.S, "Object", { setPrototypeOf: n(68).set });
    },
    function (e, t, n) {
        "use strict";
        var a = n(49),
            i = {};
        (i[n(6)("toStringTag")] = "z"),
            i + "" != "[object z]" &&
                n(12)(
                    Object.prototype,
                    "toString",
                    function () {
                        return "[object " + a(this) + "]";
                    },
                    !0
                );
    },
    function (e, t, n) {
        var a = n(1);
        a(a.P, "Function", { bind: n(99) });
    },
    function (e, t, n) {
        var a = n(10).f,
            i = Function.prototype,
            r = /^\s*function ([^ (]*)/;
        "name" in i ||
            (n(9) &&
                a(i, "name", {
                    configurable: !0,
                    get: function () {
                        try {
                            return ("" + this).match(r)[1];
                        } catch (e) {
                            return "";
                        }
                    },
                }));
    },
    function (e, t, n) {
        "use strict";
        var a = n(5),
            i = n(37),
            r = n(6)("hasInstance"),
            o = Function.prototype;
        r in o ||
            n(10).f(o, r, {
                value: function (e) {
                    if ("function" != typeof this || !a(e)) return !1;
                    if (!a(this.prototype)) return e instanceof this;
                    for (; (e = i(e)); ) if (this.prototype === e) return !0;
                    return !1;
                },
            });
    },
    function (e, t, n) {
        var a = n(1),
            i = n(101);
        a(a.G + a.F * (parseInt != i), { parseInt: i });
    },
    function (e, t, n) {
        var a = n(1),
            i = n(102);
        a(a.G + a.F * (parseFloat != i), { parseFloat: i });
    },
    function (e, t, n) {
        "use strict";
        var a = n(2),
            i = n(14),
            r = n(25),
            o = n(70),
            s = n(28),
            c = n(3),
            l = n(36).f,
            u = n(22).f,
            d = n(10).f,
            h = n(41).trim,
            p = a.Number,
            f = p,
            g = p.prototype,
            m = "Number" == r(n(35)(g)),
            v = "trim" in String.prototype,
            y = function (e) {
                var t = s(e, !1);
                if ("string" == typeof t && t.length > 2) {
                    var n,
                        a,
                        i,
                        r = (t = v ? t.trim() : h(t, 3)).charCodeAt(0);
                    if (43 === r || 45 === r) {
                        if (88 === (n = t.charCodeAt(2)) || 120 === n) return NaN;
                    } else if (48 === r) {
                        switch (t.charCodeAt(1)) {
                            case 66:
                            case 98:
                                (a = 2), (i = 49);
                                break;
                            case 79:
                            case 111:
                                (a = 8), (i = 55);
                                break;
                            default:
                                return +t;
                        }
                        for (var o, c = t.slice(2), l = 0, u = c.length; l < u; l++) if ((o = c.charCodeAt(l)) < 48 || o > i) return NaN;
                        return parseInt(c, a);
                    }
                }
                return +t;
            };
        if (!p(" 0o1") || !p("0b1") || p("+0x1")) {
            p = function (e) {
                var t = arguments.length < 1 ? 0 : e,
                    n = this;
                return n instanceof p &&
                    (m
                        ? c(function () {
                              g.valueOf.call(n);
                          })
                        : "Number" != r(n))
                    ? o(new f(y(t)), n, p)
                    : y(t);
            };
            for (
                var b, k = n(9) ? l(f) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), S = 0;
                k.length > S;
                S++
            )
                i(f, (b = k[S])) && !i(p, b) && d(p, b, u(f, b));
            (p.prototype = g), (g.constructor = p), n(12)(a, "Number", p);
        }
    },
    function (e, t, n) {
        "use strict";
        var a = n(1),
            i = n(21),
            r = n(103),
            o = n(71),
            s = (1).toFixed,
            c = Math.floor,
            l = [0, 0, 0, 0, 0, 0],
            u = "Number.toFixed: incorrect invocation!",
            d = function (e, t) {
                for (var n = -1, a = t; ++n < 6; ) (a += e * l[n]), (l[n] = a % 1e7), (a = c(a / 1e7));
            },
            h = function (e) {
                for (var t = 6, n = 0; --t >= 0; ) (n += l[t]), (l[t] = c(n / e)), (n = (n % e) * 1e7);
            },
            p = function () {
                for (var e = 6, t = ""; --e >= 0; )
                    if ("" !== t || 0 === e || 0 !== l[e]) {
                        var n = String(l[e]);
                        t = "" === t ? n : t + o.call("0", 7 - n.length) + n;
                    }
                return t;
            },
            f = function (e, t, n) {
                return 0 === t ? n : t % 2 == 1 ? f(e, t - 1, n * e) : f(e * e, t / 2, n);
            };
        a(
            a.P +
                a.F *
                    ((!!s && ("0.000" !== (8e-5).toFixed(3) || "1" !== (0.9).toFixed(0) || "1.25" !== (1.255).toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0))) ||
                        !n(3)(function () {
                            s.call({});
                        })),
            "Number",
            {
                toFixed: function (e) {
                    var t,
                        n,
                        a,
                        s,
                        c = r(this, u),
                        l = i(e),
                        g = "",
                        m = "0";
                    if (l < 0 || l > 20) throw RangeError(u);
                    if (c != c) return "NaN";
                    if (c <= -1e21 || c >= 1e21) return String(c);
                    if ((c < 0 && ((g = "-"), (c = -c)), c > 1e-21))
                        if (
                            ((n =
                                (t =
                                    (function (e) {
                                        for (var t = 0, n = e; n >= 4096; ) (t += 12), (n /= 4096);
                                        for (; n >= 2; ) (t += 1), (n /= 2);
                                        return t;
                                    })(c * f(2, 69, 1)) - 69) < 0
                                    ? c * f(2, -t, 1)
                                    : c / f(2, t, 1)),
                            (n *= 4503599627370496),
                            (t = 52 - t) > 0)
                        ) {
                            for (d(0, n), a = l; a >= 7; ) d(1e7, 0), (a -= 7);
                            for (d(f(10, a, 1), 0), a = t - 1; a >= 23; ) h(1 << 23), (a -= 23);
                            h(1 << a), d(1, 1), h(2), (m = p());
                        } else d(0, n), d(1 << -t, 0), (m = p() + o.call("0", l));
                    return (m = l > 0 ? g + ((s = m.length) <= l ? "0." + o.call("0", l - s) + m : m.slice(0, s - l) + "." + m.slice(s - l)) : g + m);
                },
            }
        );
    },
    function (e, t, n) {
        "use strict";
        var a = n(1),
            i = n(3),
            r = n(103),
            o = (1).toPrecision;
        a(
            a.P +
                a.F *
                    (i(function () {
                        return "1" !== o.call(1, void 0);
                    }) ||
                        !i(function () {
                            o.call({});
                        })),
            "Number",
            {
                toPrecision: function (e) {
                    var t = r(this, "Number#toPrecision: incorrect invocation!");
                    return void 0 === e ? o.call(t) : o.call(t, e);
                },
            }
        );
    },
    function (e, t, n) {
        var a = n(1);
        a(a.S, "Number", { EPSILON: Math.pow(2, -52) });
    },
    function (e, t, n) {
        var a = n(1),
            i = n(2).isFinite;
        a(a.S, "Number", {
            isFinite: function (e) {
                return "number" == typeof e && i(e);
            },
        });
    },
    function (e, t, n) {
        var a = n(1);
        a(a.S, "Number", { isInteger: n(104) });
    },
    function (e, t, n) {
        var a = n(1);
        a(a.S, "Number", {
            isNaN: function (e) {
                return e != e;
            },
        });
    },
    function (e, t, n) {
        var a = n(1),
            i = n(104),
            r = Math.abs;
        a(a.S, "Number", {
            isSafeInteger: function (e) {
                return i(e) && r(e) <= 9007199254740991;
            },
        });
    },
    function (e, t, n) {
        var a = n(1);
        a(a.S, "Number", { MAX_SAFE_INTEGER: 9007199254740991 });
    },
    function (e, t, n) {
        var a = n(1);
        a(a.S, "Number", { MIN_SAFE_INTEGER: -9007199254740991 });
    },
    function (e, t, n) {
        var a = n(1),
            i = n(102);
        a(a.S + a.F * (Number.parseFloat != i), "Number", { parseFloat: i });
    },
    function (e, t, n) {
        var a = n(1),
            i = n(101);
        a(a.S + a.F * (Number.parseInt != i), "Number", { parseInt: i });
    },
    function (e, t, n) {
        var a = n(1),
            i = n(105),
            r = Math.sqrt,
            o = Math.acosh;
        a(a.S + a.F * !(o && 710 == Math.floor(o(Number.MAX_VALUE)) && o(1 / 0) == 1 / 0), "Math", {
            acosh: function (e) {
                return (e = +e) < 1 ? NaN : e > 94906265.62425156 ? Math.log(e) + Math.LN2 : i(e - 1 + r(e - 1) * r(e + 1));
            },
        });
    },
    function (e, t, n) {
        var a = n(1),
            i = Math.asinh;
        a(a.S + a.F * !(i && 1 / i(0) > 0), "Math", {
            asinh: function e(t) {
                return isFinite((t = +t)) && 0 != t ? (t < 0 ? -e(-t) : Math.log(t + Math.sqrt(t * t + 1))) : t;
            },
        });
    },
    function (e, t, n) {
        var a = n(1),
            i = Math.atanh;
        a(a.S + a.F * !(i && 1 / i(-0) < 0), "Math", {
            atanh: function (e) {
                return 0 == (e = +e) ? e : Math.log((1 + e) / (1 - e)) / 2;
            },
        });
    },
    function (e, t, n) {
        var a = n(1),
            i = n(72);
        a(a.S, "Math", {
            cbrt: function (e) {
                return i((e = +e)) * Math.pow(Math.abs(e), 1 / 3);
            },
        });
    },
    function (e, t, n) {
        var a = n(1);
        a(a.S, "Math", {
            clz32: function (e) {
                return (e >>>= 0) ? 31 - Math.floor(Math.log(e + 0.5) * Math.LOG2E) : 32;
            },
        });
    },
    function (e, t, n) {
        var a = n(1),
            i = Math.exp;
        a(a.S, "Math", {
            cosh: function (e) {
                return (i((e = +e)) + i(-e)) / 2;
            },
        });
    },
    function (e, t, n) {
        var a = n(1),
            i = n(73);
        a(a.S + a.F * (i != Math.expm1), "Math", { expm1: i });
    },
    function (e, t, n) {
        var a = n(1);
        a(a.S, "Math", { fround: n(178) });
    },
    function (e, t, n) {
        var a = n(72),
            i = Math.pow,
            r = i(2, -52),
            o = i(2, -23),
            s = i(2, 127) * (2 - o),
            c = i(2, -126);
        e.exports =
            Math.fround ||
            function (e) {
                var t,
                    n,
                    i = Math.abs(e),
                    l = a(e);
                return i < c ? l * (i / c / o + 1 / r - 1 / r) * c * o : (n = (t = (1 + o / r) * i) - (t - i)) > s || n != n ? l * (1 / 0) : l * n;
            };
    },
    function (e, t, n) {
        var a = n(1),
            i = Math.abs;
        a(a.S, "Math", {
            hypot: function (e, t) {
                for (var n, a, r = 0, o = 0, s = arguments.length, c = 0; o < s; ) c < (n = i(arguments[o++])) ? ((r = r * (a = c / n) * a + 1), (c = n)) : (r += n > 0 ? (a = n / c) * a : n);
                return c === 1 / 0 ? 1 / 0 : c * Math.sqrt(r);
            },
        });
    },
    function (e, t, n) {
        var a = n(1),
            i = Math.imul;
        a(
            a.S +
                a.F *
                    n(3)(function () {
                        return -5 != i(4294967295, 5) || 2 != i.length;
                    }),
            "Math",
            {
                imul: function (e, t) {
                    var n = +e,
                        a = +t,
                        i = 65535 & n,
                        r = 65535 & a;
                    return 0 | (i * r + ((((65535 & (n >>> 16)) * r + i * (65535 & (a >>> 16))) << 16) >>> 0));
                },
            }
        );
    },
    function (e, t, n) {
        var a = n(1);
        a(a.S, "Math", {
            log10: function (e) {
                return Math.log(e) * Math.LOG10E;
            },
        });
    },
    function (e, t, n) {
        var a = n(1);
        a(a.S, "Math", { log1p: n(105) });
    },
    function (e, t, n) {
        var a = n(1);
        a(a.S, "Math", {
            log2: function (e) {
                return Math.log(e) / Math.LN2;
            },
        });
    },
    function (e, t, n) {
        var a = n(1);
        a(a.S, "Math", { sign: n(72) });
    },
    function (e, t, n) {
        var a = n(1),
            i = n(73),
            r = Math.exp;
        a(
            a.S +
                a.F *
                    n(3)(function () {
                        return -2e-17 != !Math.sinh(-2e-17);
                    }),
            "Math",
            {
                sinh: function (e) {
                    return Math.abs((e = +e)) < 1 ? (i(e) - i(-e)) / 2 : (r(e - 1) - r(-e - 1)) * (Math.E / 2);
                },
            }
        );
    },
    function (e, t, n) {
        var a = n(1),
            i = n(73),
            r = Math.exp;
        a(a.S, "Math", {
            tanh: function (e) {
                var t = i((e = +e)),
                    n = i(-e);
                return t == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (t - n) / (r(e) + r(-e));
            },
        });
    },
    function (e, t, n) {
        var a = n(1);
        a(a.S, "Math", {
            trunc: function (e) {
                return (e > 0 ? Math.floor : Math.ceil)(e);
            },
        });
    },
    function (e, t, n) {
        var a = n(1),
            i = n(34),
            r = String.fromCharCode,
            o = String.fromCodePoint;
        a(a.S + a.F * (!!o && 1 != o.length), "String", {
            fromCodePoint: function (e) {
                for (var t, n = [], a = arguments.length, o = 0; a > o; ) {
                    if (((t = +arguments[o++]), i(t, 1114111) !== t)) throw RangeError(t + " is not a valid code point");
                    n.push(t < 65536 ? r(t) : r(55296 + ((t -= 65536) >> 10), (t % 1024) + 56320));
                }
                return n.join("");
            },
        });
    },
    function (e, t, n) {
        var a = n(1),
            i = n(16),
            r = n(7);
        a(a.S, "String", {
            raw: function (e) {
                for (var t = i(e.raw), n = r(t.length), a = arguments.length, o = [], s = 0; n > s; ) o.push(String(t[s++])), s < a && o.push(String(arguments[s]));
                return o.join("");
            },
        });
    },
    function (e, t, n) {
        "use strict";
        n(41)("trim", function (e) {
            return function () {
                return e(this, 3);
            };
        });
    },
    function (e, t, n) {
        "use strict";
        var a = n(74)(!0);
        n(75)(
            String,
            "String",
            function (e) {
                (this._t = String(e)), (this._i = 0);
            },
            function () {
                var e,
                    t = this._t,
                    n = this._i;
                return n >= t.length ? { value: void 0, done: !0 } : ((e = a(t, n)), (this._i += e.length), { value: e, done: !1 });
            }
        );
    },
    function (e, t, n) {
        "use strict";
        var a = n(1),
            i = n(74)(!1);
        a(a.P, "String", {
            codePointAt: function (e) {
                return i(this, e);
            },
        });
    },
    function (e, t, n) {
        "use strict";
        var a = n(1),
            i = n(7),
            r = n(76),
            o = "".endsWith;
        a(a.P + a.F * n(78)("endsWith"), "String", {
            endsWith: function (e) {
                var t = r(this, e, "endsWith"),
                    n = arguments.length > 1 ? arguments[1] : void 0,
                    a = i(t.length),
                    s = void 0 === n ? a : Math.min(i(n), a),
                    c = String(e);
                return o ? o.call(t, c, s) : t.slice(s - c.length, s) === c;
            },
        });
    },
    function (e, t, n) {
        "use strict";
        var a = n(1),
            i = n(76);
        a(a.P + a.F * n(78)("includes"), "String", {
            includes: function (e) {
                return !!~i(this, e, "includes").indexOf(e, arguments.length > 1 ? arguments[1] : void 0);
            },
        });
    },
    function (e, t, n) {
        var a = n(1);
        a(a.P, "String", { repeat: n(71) });
    },
    function (e, t, n) {
        "use strict";
        var a = n(1),
            i = n(7),
            r = n(76),
            o = "".startsWith;
        a(a.P + a.F * n(78)("startsWith"), "String", {
            startsWith: function (e) {
                var t = r(this, e, "startsWith"),
                    n = i(Math.min(arguments.length > 1 ? arguments[1] : void 0, t.length)),
                    a = String(e);
                return o ? o.call(t, a, n) : t.slice(n, n + a.length) === a;
            },
        });
    },
    function (e, t, n) {
        "use strict";
        n(13)("anchor", function (e) {
            return function (t) {
                return e(this, "a", "name", t);
            };
        });
    },
    function (e, t, n) {
        "use strict";
        n(13)("big", function (e) {
            return function () {
                return e(this, "big", "", "");
            };
        });
    },
    function (e, t, n) {
        "use strict";
        n(13)("blink", function (e) {
            return function () {
                return e(this, "blink", "", "");
            };
        });
    },
    function (e, t, n) {
        "use strict";
        n(13)("bold", function (e) {
            return function () {
                return e(this, "b", "", "");
            };
        });
    },
    function (e, t, n) {
        "use strict";
        n(13)("fixed", function (e) {
            return function () {
                return e(this, "tt", "", "");
            };
        });
    },
    function (e, t, n) {
        "use strict";
        n(13)("fontcolor", function (e) {
            return function (t) {
                return e(this, "font", "color", t);
            };
        });
    },
    function (e, t, n) {
        "use strict";
        n(13)("fontsize", function (e) {
            return function (t) {
                return e(this, "font", "size", t);
            };
        });
    },
    function (e, t, n) {
        "use strict";
        n(13)("italics", function (e) {
            return function () {
                return e(this, "i", "", "");
            };
        });
    },
    function (e, t, n) {
        "use strict";
        n(13)("link", function (e) {
            return function (t) {
                return e(this, "a", "href", t);
            };
        });
    },
    function (e, t, n) {
        "use strict";
        n(13)("small", function (e) {
            return function () {
                return e(this, "small", "", "");
            };
        });
    },
    function (e, t, n) {
        "use strict";
        n(13)("strike", function (e) {
            return function () {
                return e(this, "strike", "", "");
            };
        });
    },
    function (e, t, n) {
        "use strict";
        n(13)("sub", function (e) {
            return function () {
                return e(this, "sub", "", "");
            };
        });
    },
    function (e, t, n) {
        "use strict";
        n(13)("sup", function (e) {
            return function () {
                return e(this, "sup", "", "");
            };
        });
    },
    function (e, t, n) {
        var a = n(1);
        a(a.S, "Date", {
            now: function () {
                return new Date().getTime();
            },
        });
    },
    function (e, t, n) {
        "use strict";
        var a = n(1),
            i = n(11),
            r = n(28);
        a(
            a.P +
                a.F *
                    n(3)(function () {
                        return (
                            null !== new Date(NaN).toJSON() ||
                            1 !==
                                Date.prototype.toJSON.call({
                                    toISOString: function () {
                                        return 1;
                                    },
                                })
                        );
                    }),
            "Date",
            {
                toJSON: function (e) {
                    var t = i(this),
                        n = r(t);
                    return "number" != typeof n || isFinite(n) ? t.toISOString() : null;
                },
            }
        );
    },
    function (e, t, n) {
        var a = n(1),
            i = n(213);
        a(a.P + a.F * (Date.prototype.toISOString !== i), "Date", { toISOString: i });
    },
    function (e, t, n) {
        "use strict";
        var a = n(3),
            i = Date.prototype.getTime,
            r = Date.prototype.toISOString,
            o = function (e) {
                return e > 9 ? e : "0" + e;
            };
        e.exports =
            a(function () {
                return "0385-07-25T07:06:39.999Z" != r.call(new Date(-50000000000001));
            }) ||
            !a(function () {
                r.call(new Date(NaN));
            })
                ? function () {
                      if (!isFinite(i.call(this))) throw RangeError("Invalid time value");
                      var e = this,
                          t = e.getUTCFullYear(),
                          n = e.getUTCMilliseconds(),
                          a = t < 0 ? "-" : t > 9999 ? "+" : "";
                      return (
                          a +
                          ("00000" + Math.abs(t)).slice(a ? -6 : -4) +
                          "-" +
                          o(e.getUTCMonth() + 1) +
                          "-" +
                          o(e.getUTCDate()) +
                          "T" +
                          o(e.getUTCHours()) +
                          ":" +
                          o(e.getUTCMinutes()) +
                          ":" +
                          o(e.getUTCSeconds()) +
                          "." +
                          (n > 99 ? n : "0" + o(n)) +
                          "Z"
                      );
                  }
                : r;
    },
    function (e, t, n) {
        var a = Date.prototype,
            i = a.toString,
            r = a.getTime;
        new Date(NaN) + "" != "Invalid Date" &&
            n(12)(a, "toString", function () {
                var e = r.call(this);
                return e == e ? i.call(this) : "Invalid Date";
            });
    },
    function (e, t, n) {
        var a = n(6)("toPrimitive"),
            i = Date.prototype;
        a in i || n(15)(i, a, n(216));
    },
    function (e, t, n) {
        "use strict";
        var a = n(4),
            i = n(28);
        e.exports = function (e) {
            if ("string" !== e && "number" !== e && "default" !== e) throw TypeError("Incorrect hint");
            return i(a(this), "number" != e);
        };
    },
    function (e, t, n) {
        var a = n(1);
        a(a.S, "Array", { isArray: n(54) });
    },
    function (e, t, n) {
        "use strict";
        var a = n(19),
            i = n(1),
            r = n(11),
            o = n(107),
            s = n(79),
            c = n(7),
            l = n(80),
            u = n(81);
        i(
            i.S +
                i.F *
                    !n(55)(function (e) {
                        Array.from(e);
                    }),
            "Array",
            {
                from: function (e) {
                    var t,
                        n,
                        i,
                        d,
                        h = r(e),
                        p = "function" == typeof this ? this : Array,
                        f = arguments.length,
                        g = f > 1 ? arguments[1] : void 0,
                        m = void 0 !== g,
                        v = 0,
                        y = u(h);
                    if ((m && (g = a(g, f > 2 ? arguments[2] : void 0, 2)), null == y || (p == Array && s(y)))) for (n = new p((t = c(h.length))); t > v; v++) l(n, v, m ? g(h[v], v) : h[v]);
                    else for (d = y.call(h), n = new p(); !(i = d.next()).done; v++) l(n, v, m ? o(d, g, [i.value, v], !0) : i.value);
                    return (n.length = v), n;
                },
            }
        );
    },
    function (e, t, n) {
        "use strict";
        var a = n(1),
            i = n(80);
        a(
            a.S +
                a.F *
                    n(3)(function () {
                        function e() {}
                        return !(Array.of.call(e) instanceof e);
                    }),
            "Array",
            {
                of: function () {
                    for (var e = 0, t = arguments.length, n = new ("function" == typeof this ? this : Array)(t); t > e; ) i(n, e, arguments[e++]);
                    return (n.length = t), n;
                },
            }
        );
    },
    function (e, t, n) {
        "use strict";
        var a = n(1),
            i = n(16),
            r = [].join;
        a(a.P + a.F * (n(47) != Object || !n(17)(r)), "Array", {
            join: function (e) {
                return r.call(i(this), void 0 === e ? "," : e);
            },
        });
    },
    function (e, t, n) {
        "use strict";
        var a = n(1),
            i = n(67),
            r = n(25),
            o = n(34),
            s = n(7),
            c = [].slice;
        a(
            a.P +
                a.F *
                    n(3)(function () {
                        i && c.call(i);
                    }),
            "Array",
            {
                slice: function (e, t) {
                    var n = s(this.length),
                        a = r(this);
                    if (((t = void 0 === t ? n : t), "Array" == a)) return c.call(this, e, t);
                    for (var i = o(e, n), l = o(t, n), u = s(l - i), d = new Array(u), h = 0; h < u; h++) d[h] = "String" == a ? this.charAt(i + h) : this[i + h];
                    return d;
                },
            }
        );
    },
    function (e, t, n) {
        "use strict";
        var a = n(1),
            i = n(20),
            r = n(11),
            o = n(3),
            s = [].sort,
            c = [1, 2, 3];
        a(
            a.P +
                a.F *
                    (o(function () {
                        c.sort(void 0);
                    }) ||
                        !o(function () {
                            c.sort(null);
                        }) ||
                        !n(17)(s)),
            "Array",
            {
                sort: function (e) {
                    return void 0 === e ? s.call(r(this)) : s.call(r(this), i(e));
                },
            }
        );
    },
    function (e, t, n) {
        "use strict";
        var a = n(1),
            i = n(24)(0),
            r = n(17)([].forEach, !0);
        a(a.P + a.F * !r, "Array", {
            forEach: function (e) {
                return i(this, e, arguments[1]);
            },
        });
    },
    function (e, t, n) {
        var a = n(5),
            i = n(54),
            r = n(6)("species");
        e.exports = function (e) {
            var t;
            return i(e) && ("function" != typeof (t = e.constructor) || (t !== Array && !i(t.prototype)) || (t = void 0), a(t) && null === (t = t[r]) && (t = void 0)), void 0 === t ? Array : t;
        };
    },
    function (e, t, n) {
        "use strict";
        var a = n(1),
            i = n(24)(1);
        a(a.P + a.F * !n(17)([].map, !0), "Array", {
            map: function (e) {
                return i(this, e, arguments[1]);
            },
        });
    },
    function (e, t, n) {
        "use strict";
        var a = n(1),
            i = n(24)(2);
        a(a.P + a.F * !n(17)([].filter, !0), "Array", {
            filter: function (e) {
                return i(this, e, arguments[1]);
            },
        });
    },
    function (e, t, n) {
        "use strict";
        var a = n(1),
            i = n(24)(3);
        a(a.P + a.F * !n(17)([].some, !0), "Array", {
            some: function (e) {
                return i(this, e, arguments[1]);
            },
        });
    },
    function (e, t, n) {
        "use strict";
        var a = n(1),
            i = n(24)(4);
        a(a.P + a.F * !n(17)([].every, !0), "Array", {
            every: function (e) {
                return i(this, e, arguments[1]);
            },
        });
    },
    function (e, t, n) {
        "use strict";
        var a = n(1),
            i = n(109);
        a(a.P + a.F * !n(17)([].reduce, !0), "Array", {
            reduce: function (e) {
                return i(this, e, arguments.length, arguments[1], !1);
            },
        });
    },
    function (e, t, n) {
        "use strict";
        var a = n(1),
            i = n(109);
        a(a.P + a.F * !n(17)([].reduceRight, !0), "Array", {
            reduceRight: function (e) {
                return i(this, e, arguments.length, arguments[1], !0);
            },
        });
    },
    function (e, t, n) {
        "use strict";
        var a = n(1),
            i = n(52)(!1),
            r = [].indexOf,
            o = !!r && 1 / [1].indexOf(1, -0) < 0;
        a(a.P + a.F * (o || !n(17)(r)), "Array", {
            indexOf: function (e) {
                return o ? r.apply(this, arguments) || 0 : i(this, e, arguments[1]);
            },
        });
    },
    function (e, t, n) {
        "use strict";
        var a = n(1),
            i = n(16),
            r = n(21),
            o = n(7),
            s = [].lastIndexOf,
            c = !!s && 1 / [1].lastIndexOf(1, -0) < 0;
        a(a.P + a.F * (c || !n(17)(s)), "Array", {
            lastIndexOf: function (e) {
                if (c) return s.apply(this, arguments) || 0;
                var t = i(this),
                    n = o(t.length),
                    a = n - 1;
                for (arguments.length > 1 && (a = Math.min(a, r(arguments[1]))), a < 0 && (a = n + a); a >= 0; a--) if (a in t && t[a] === e) return a || 0;
                return -1;
            },
        });
    },
    function (e, t, n) {
        var a = n(1);
        a(a.P, "Array", { copyWithin: n(110) }), n(38)("copyWithin");
    },
    function (e, t, n) {
        var a = n(1);
        a(a.P, "Array", { fill: n(82) }), n(38)("fill");
    },
    function (e, t, n) {
        "use strict";
        var a = n(1),
            i = n(24)(5),
            r = !0;
        "find" in [] &&
            Array(1).find(function () {
                r = !1;
            }),
            a(a.P + a.F * r, "Array", {
                find: function (e) {
                    return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
                },
            }),
            n(38)("find");
    },
    function (e, t, n) {
        "use strict";
        var a = n(1),
            i = n(24)(6),
            r = "findIndex",
            o = !0;
        r in [] &&
            Array(1)[r](function () {
                o = !1;
            }),
            a(a.P + a.F * o, "Array", {
                findIndex: function (e) {
                    return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
                },
            }),
            n(38)(r);
    },
    function (e, t, n) {
        n(43)("Array");
    },
    function (e, t, n) {
        var a = n(2),
            i = n(70),
            r = n(10).f,
            o = n(36).f,
            s = n(77),
            c = n(56),
            l = a.RegExp,
            u = l,
            d = l.prototype,
            h = /a/g,
            p = /a/g,
            f = new l(h) !== h;
        if (
            n(9) &&
            (!f ||
                n(3)(function () {
                    return (p[n(6)("match")] = !1), l(h) != h || l(p) == p || "/a/i" != l(h, "i");
                }))
        ) {
            l = function (e, t) {
                var n = this instanceof l,
                    a = s(e),
                    r = void 0 === t;
                return !n && a && e.constructor === l && r ? e : i(f ? new u(a && !r ? e.source : e, t) : u((a = e instanceof l) ? e.source : e, a && r ? c.call(e) : t), n ? this : d, l);
            };
            for (
                var g = function (e) {
                        (e in l) ||
                            r(l, e, {
                                configurable: !0,
                                get: function () {
                                    return u[e];
                                },
                                set: function (t) {
                                    u[e] = t;
                                },
                            });
                    },
                    m = o(u),
                    v = 0;
                m.length > v;

            )
                g(m[v++]);
            (d.constructor = l), (l.prototype = d), n(12)(a, "RegExp", l);
        }
        n(43)("RegExp");
    },
    function (e, t, n) {
        "use strict";
        n(113);
        var a = n(4),
            i = n(56),
            r = n(9),
            o = /./.toString,
            s = function (e) {
                n(12)(RegExp.prototype, "toString", e, !0);
            };
        n(3)(function () {
            return "/a/b" != o.call({ source: "a", flags: "b" });
        })
            ? s(function () {
                  var e = a(this);
                  return "/".concat(e.source, "/", "flags" in e ? e.flags : !r && e instanceof RegExp ? i.call(e) : void 0);
              })
            : "toString" != o.name &&
              s(function () {
                  return o.call(this);
              });
    },
    function (e, t, n) {
        "use strict";
        var a = n(4),
            i = n(7),
            r = n(85),
            o = n(57);
        n(58)("match", 1, function (e, t, n, s) {
            return [
                function (n) {
                    var a = e(this),
                        i = null == n ? void 0 : n[t];
                    return void 0 !== i ? i.call(n, a) : new RegExp(n)[t](String(a));
                },
                function (e) {
                    var t = s(n, e, this);
                    if (t.done) return t.value;
                    var c = a(e),
                        l = String(this);
                    if (!c.global) return o(c, l);
                    var u = c.unicode;
                    c.lastIndex = 0;
                    for (var d, h = [], p = 0; null !== (d = o(c, l)); ) {
                        var f = String(d[0]);
                        (h[p] = f), "" === f && (c.lastIndex = r(l, i(c.lastIndex), u)), p++;
                    }
                    return 0 === p ? null : h;
                },
            ];
        });
    },
    function (e, t, n) {
        "use strict";
        var a = n(4),
            i = n(11),
            r = n(7),
            o = n(21),
            s = n(85),
            c = n(57),
            l = Math.max,
            u = Math.min,
            d = Math.floor,
            h = /\$([$&`']|\d\d?|<[^>]*>)/g,
            p = /\$([$&`']|\d\d?)/g;
        n(58)("replace", 2, function (e, t, n, f) {
            return [
                function (a, i) {
                    var r = e(this),
                        o = null == a ? void 0 : a[t];
                    return void 0 !== o ? o.call(a, r, i) : n.call(String(r), a, i);
                },
                function (e, t) {
                    var i = f(n, e, this, t);
                    if (i.done) return i.value;
                    var d = a(e),
                        h = String(this),
                        p = "function" == typeof t;
                    p || (t = String(t));
                    var m = d.global;
                    if (m) {
                        var v = d.unicode;
                        d.lastIndex = 0;
                    }
                    for (var y = []; ; ) {
                        var b = c(d, h);
                        if (null === b) break;
                        if ((y.push(b), !m)) break;
                        "" === String(b[0]) && (d.lastIndex = s(h, r(d.lastIndex), v));
                    }
                    for (var k, S = "", w = 0, C = 0; C < y.length; C++) {
                        b = y[C];
                        for (var P = String(b[0]), x = l(u(o(b.index), h.length), 0), T = [], A = 1; A < b.length; A++) T.push(void 0 === (k = b[A]) ? k : String(k));
                        var N = b.groups;
                        if (p) {
                            var D = [P].concat(T, x, h);
                            void 0 !== N && D.push(N);
                            var O = String(t.apply(void 0, D));
                        } else O = g(P, h, x, T, N, t);
                        x >= w && ((S += h.slice(w, x) + O), (w = x + P.length));
                    }
                    return S + h.slice(w);
                },
            ];
            function g(e, t, a, r, o, s) {
                var c = a + e.length,
                    l = r.length,
                    u = p;
                return (
                    void 0 !== o && ((o = i(o)), (u = h)),
                    n.call(s, u, function (n, i) {
                        var s;
                        switch (i.charAt(0)) {
                            case "$":
                                return "$";
                            case "&":
                                return e;
                            case "`":
                                return t.slice(0, a);
                            case "'":
                                return t.slice(c);
                            case "<":
                                s = o[i.slice(1, -1)];
                                break;
                            default:
                                var u = +i;
                                if (0 === u) return n;
                                if (u > l) {
                                    var h = d(u / 10);
                                    return 0 === h ? n : h <= l ? (void 0 === r[h - 1] ? i.charAt(1) : r[h - 1] + i.charAt(1)) : n;
                                }
                                s = r[u - 1];
                        }
                        return void 0 === s ? "" : s;
                    })
                );
            }
        });
    },
    function (e, t, n) {
        "use strict";
        var a = n(4),
            i = n(98),
            r = n(57);
        n(58)("search", 1, function (e, t, n, o) {
            return [
                function (n) {
                    var a = e(this),
                        i = null == n ? void 0 : n[t];
                    return void 0 !== i ? i.call(n, a) : new RegExp(n)[t](String(a));
                },
                function (e) {
                    var t = o(n, e, this);
                    if (t.done) return t.value;
                    var s = a(e),
                        c = String(this),
                        l = s.lastIndex;
                    i(l, 0) || (s.lastIndex = 0);
                    var u = r(s, c);
                    return i(s.lastIndex, l) || (s.lastIndex = l), null === u ? -1 : u.index;
                },
            ];
        });
    },
    function (e, t, n) {
        "use strict";
        var a = n(77),
            i = n(4),
            r = n(50),
            o = n(85),
            s = n(7),
            c = n(57),
            l = n(84),
            u = n(3),
            d = Math.min,
            h = [].push,
            p = "length",
            f = !u(function () {
                RegExp(4294967295, "y");
            });
        n(58)("split", 2, function (e, t, n, u) {
            var g;
            return (
                (g =
                    "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1)[p] || 2 != "ab".split(/(?:ab)*/)[p] || 4 != ".".split(/(.?)(.?)/)[p] || ".".split(/()()/)[p] > 1 || "".split(/.?/)[p]
                        ? function (e, t) {
                              var i = String(this);
                              if (void 0 === e && 0 === t) return [];
                              if (!a(e)) return n.call(i, e, t);
                              for (
                                  var r,
                                      o,
                                      s,
                                      c = [],
                                      u = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""),
                                      d = 0,
                                      f = void 0 === t ? 4294967295 : t >>> 0,
                                      g = new RegExp(e.source, u + "g");
                                  (r = l.call(g, i)) && !((o = g.lastIndex) > d && (c.push(i.slice(d, r.index)), r[p] > 1 && r.index < i[p] && h.apply(c, r.slice(1)), (s = r[0][p]), (d = o), c[p] >= f));

                              )
                                  g.lastIndex === r.index && g.lastIndex++;
                              return d === i[p] ? (!s && g.test("")) || c.push("") : c.push(i.slice(d)), c[p] > f ? c.slice(0, f) : c;
                          }
                        : "0".split(void 0, 0)[p]
                        ? function (e, t) {
                              return void 0 === e && 0 === t ? [] : n.call(this, e, t);
                          }
                        : n),
                [
                    function (n, a) {
                        var i = e(this),
                            r = null == n ? void 0 : n[t];
                        return void 0 !== r ? r.call(n, i, a) : g.call(String(i), n, a);
                    },
                    function (e, t) {
                        var a = u(g, e, this, t, g !== n);
                        if (a.done) return a.value;
                        var l = i(e),
                            h = String(this),
                            p = r(l, RegExp),
                            m = l.unicode,
                            v = (l.ignoreCase ? "i" : "") + (l.multiline ? "m" : "") + (l.unicode ? "u" : "") + (f ? "y" : "g"),
                            y = new p(f ? l : "^(?:" + l.source + ")", v),
                            b = void 0 === t ? 4294967295 : t >>> 0;
                        if (0 === b) return [];
                        if (0 === h.length) return null === c(y, h) ? [h] : [];
                        for (var k = 0, S = 0, w = []; S < h.length; ) {
                            y.lastIndex = f ? S : 0;
                            var C,
                                P = c(y, f ? h : h.slice(S));
                            if (null === P || (C = d(s(y.lastIndex + (f ? 0 : S)), h.length)) === k) S = o(h, S, m);
                            else {
                                if ((w.push(h.slice(k, S)), w.length === b)) return w;
                                for (var x = 1; x <= P.length - 1; x++) if ((w.push(P[x]), w.length === b)) return w;
                                S = k = C;
                            }
                        }
                        return w.push(h.slice(k)), w;
                    },
                ]
            );
        });
    },
    function (e, t, n) {
        var a = n(2),
            i = n(86).set,
            r = a.MutationObserver || a.WebKitMutationObserver,
            o = a.process,
            s = a.Promise,
            c = "process" == n(25)(o);
        e.exports = function () {
            var e,
                t,
                n,
                l = function () {
                    var a, i;
                    for (c && (a = o.domain) && a.exit(); e; ) {
                        (i = e.fn), (e = e.next);
                        try {
                            i();
                        } catch (a) {
                            throw (e ? n() : (t = void 0), a);
                        }
                    }
                    (t = void 0), a && a.enter();
                };
            if (c)
                n = function () {
                    o.nextTick(l);
                };
            else if (!r || (a.navigator && a.navigator.standalone))
                if (s && s.resolve) {
                    var u = s.resolve(void 0);
                    n = function () {
                        u.then(l);
                    };
                } else
                    n = function () {
                        i.call(a, l);
                    };
            else {
                var d = !0,
                    h = document.createTextNode("");
                new r(l).observe(h, { characterData: !0 }),
                    (n = function () {
                        h.data = d = !d;
                    });
            }
            return function (a) {
                var i = { fn: a, next: void 0 };
                t && (t.next = i), e || ((e = i), n()), (t = i);
            };
        };
    },
    function (e, t) {
        e.exports = function (e) {
            try {
                return { e: !1, v: e() };
            } catch (e) {
                return { e: !0, v: e };
            }
        };
    },
    function (e, t, n) {
        "use strict";
        var a = n(117),
            i = n(39);
        e.exports = n(61)(
            "Map",
            function (e) {
                return function () {
                    return e(this, arguments.length > 0 ? arguments[0] : void 0);
                };
            },
            {
                get: function (e) {
                    var t = a.getEntry(i(this, "Map"), e);
                    return t && t.v;
                },
                set: function (e, t) {
                    return a.def(i(this, "Map"), 0 === e ? 0 : e, t);
                },
            },
            a,
            !0
        );
    },
    function (e, t, n) {
        "use strict";
        var a = n(117),
            i = n(39);
        e.exports = n(61)(
            "Set",
            function (e) {
                return function () {
                    return e(this, arguments.length > 0 ? arguments[0] : void 0);
                };
            },
            {
                add: function (e) {
                    return a.def(i(this, "Set"), (e = 0 === e ? 0 : e), e);
                },
            },
            a
        );
    },
    function (e, t, n) {
        "use strict";
        var a,
            i = n(2),
            r = n(24)(0),
            o = n(12),
            s = n(29),
            c = n(97),
            l = n(118),
            u = n(5),
            d = n(39),
            h = n(39),
            p = !i.ActiveXObject && "ActiveXObject" in i,
            f = s.getWeak,
            g = Object.isExtensible,
            m = l.ufstore,
            v = function (e) {
                return function () {
                    return e(this, arguments.length > 0 ? arguments[0] : void 0);
                };
            },
            y = {
                get: function (e) {
                    if (u(e)) {
                        var t = f(e);
                        return !0 === t ? m(d(this, "WeakMap")).get(e) : t ? t[this._i] : void 0;
                    }
                },
                set: function (e, t) {
                    return l.def(d(this, "WeakMap"), e, t);
                },
            },
            b = (e.exports = n(61)("WeakMap", v, y, l, !0, !0));
        h &&
            p &&
            (c((a = l.getConstructor(v, "WeakMap")).prototype, y),
            (s.NEED = !0),
            r(["delete", "has", "get", "set"], function (e) {
                var t = b.prototype,
                    n = t[e];
                o(t, e, function (t, i) {
                    if (u(t) && !g(t)) {
                        this._f || (this._f = new a());
                        var r = this._f[e](t, i);
                        return "set" == e ? this : r;
                    }
                    return n.call(this, t, i);
                });
            }));
    },
    function (e, t, n) {
        "use strict";
        var a = n(118),
            i = n(39);
        n(61)(
            "WeakSet",
            function (e) {
                return function () {
                    return e(this, arguments.length > 0 ? arguments[0] : void 0);
                };
            },
            {
                add: function (e) {
                    return a.def(i(this, "WeakSet"), e, !0);
                },
            },
            a,
            !1,
            !0
        );
    },
    function (e, t, n) {
        "use strict";
        var a = n(1),
            i = n(62),
            r = n(87),
            o = n(4),
            s = n(34),
            c = n(7),
            l = n(5),
            u = n(2).ArrayBuffer,
            d = n(50),
            h = r.ArrayBuffer,
            p = r.DataView,
            f = i.ABV && u.isView,
            g = h.prototype.slice,
            m = i.VIEW;
        a(a.G + a.W + a.F * (u !== h), { ArrayBuffer: h }),
            a(a.S + a.F * !i.CONSTR, "ArrayBuffer", {
                isView: function (e) {
                    return (f && f(e)) || (l(e) && m in e);
                },
            }),
            a(
                a.P +
                    a.U +
                    a.F *
                        n(3)(function () {
                            return !new h(2).slice(1, void 0).byteLength;
                        }),
                "ArrayBuffer",
                {
                    slice: function (e, t) {
                        if (void 0 !== g && void 0 === t) return g.call(o(this), e);
                        for (var n = o(this).byteLength, a = s(e, n), i = s(void 0 === t ? n : t, n), r = new (d(this, h))(c(i - a)), l = new p(this), u = new p(r), f = 0; a < i; ) u.setUint8(f++, l.getUint8(a++));
                        return r;
                    },
                }
            ),
            n(43)("ArrayBuffer");
    },
    function (e, t, n) {
        var a = n(1);
        a(a.G + a.W + a.F * !n(62).ABV, { DataView: n(87).DataView });
    },
    function (e, t, n) {
        n(27)("Int8", 1, function (e) {
            return function (t, n, a) {
                return e(this, t, n, a);
            };
        });
    },
    function (e, t, n) {
        n(27)("Uint8", 1, function (e) {
            return function (t, n, a) {
                return e(this, t, n, a);
            };
        });
    },
    function (e, t, n) {
        n(27)(
            "Uint8",
            1,
            function (e) {
                return function (t, n, a) {
                    return e(this, t, n, a);
                };
            },
            !0
        );
    },
    function (e, t, n) {
        n(27)("Int16", 2, function (e) {
            return function (t, n, a) {
                return e(this, t, n, a);
            };
        });
    },
    function (e, t, n) {
        n(27)("Uint16", 2, function (e) {
            return function (t, n, a) {
                return e(this, t, n, a);
            };
        });
    },
    function (e, t, n) {
        n(27)("Int32", 4, function (e) {
            return function (t, n, a) {
                return e(this, t, n, a);
            };
        });
    },
    function (e, t, n) {
        n(27)("Uint32", 4, function (e) {
            return function (t, n, a) {
                return e(this, t, n, a);
            };
        });
    },
    function (e, t, n) {
        n(27)("Float32", 4, function (e) {
            return function (t, n, a) {
                return e(this, t, n, a);
            };
        });
    },
    function (e, t, n) {
        n(27)("Float64", 8, function (e) {
            return function (t, n, a) {
                return e(this, t, n, a);
            };
        });
    },
    function (e, t, n) {
        var a = n(1),
            i = n(20),
            r = n(4),
            o = (n(2).Reflect || {}).apply,
            s = Function.apply;
        a(
            a.S +
                a.F *
                    !n(3)(function () {
                        o(function () {});
                    }),
            "Reflect",
            {
                apply: function (e, t, n) {
                    var a = i(e),
                        c = r(n);
                    return o ? o(a, t, c) : s.call(a, t, c);
                },
            }
        );
    },
    function (e, t, n) {
        var a = n(1),
            i = n(35),
            r = n(20),
            o = n(4),
            s = n(5),
            c = n(3),
            l = n(99),
            u = (n(2).Reflect || {}).construct,
            d = c(function () {
                function e() {}
                return !(u(function () {}, [], e) instanceof e);
            }),
            h = !c(function () {
                u(function () {});
            });
        a(a.S + a.F * (d || h), "Reflect", {
            construct: function (e, t) {
                r(e), o(t);
                var n = arguments.length < 3 ? e : r(arguments[2]);
                if (h && !d) return u(e, t, n);
                if (e == n) {
                    switch (t.length) {
                        case 0:
                            return new e();
                        case 1:
                            return new e(t[0]);
                        case 2:
                            return new e(t[0], t[1]);
                        case 3:
                            return new e(t[0], t[1], t[2]);
                        case 4:
                            return new e(t[0], t[1], t[2], t[3]);
                    }
                    var a = [null];
                    return a.push.apply(a, t), new (l.apply(e, a))();
                }
                var c = n.prototype,
                    p = i(s(c) ? c : Object.prototype),
                    f = Function.apply.call(e, p, t);
                return s(f) ? f : p;
            },
        });
    },
    function (e, t, n) {
        var a = n(10),
            i = n(1),
            r = n(4),
            o = n(28);
        i(
            i.S +
                i.F *
                    n(3)(function () {
                        Reflect.defineProperty(a.f({}, 1, { value: 1 }), 1, { value: 2 });
                    }),
            "Reflect",
            {
                defineProperty: function (e, t, n) {
                    r(e), (t = o(t, !0)), r(n);
                    try {
                        return a.f(e, t, n), !0;
                    } catch (e) {
                        return !1;
                    }
                },
            }
        );
    },
    function (e, t, n) {
        var a = n(1),
            i = n(22).f,
            r = n(4);
        a(a.S, "Reflect", {
            deleteProperty: function (e, t) {
                var n = i(r(e), t);
                return !(n && !n.configurable) && delete e[t];
            },
        });
    },
    function (e, t, n) {
        "use strict";
        var a = n(1),
            i = n(4),
            r = function (e) {
                (this._t = i(e)), (this._i = 0);
                var t,
                    n = (this._k = []);
                for (t in e) n.push(t);
            };
        n(106)(r, "Object", function () {
            var e,
                t = this._k;
            do {
                if (this._i >= t.length) return { value: void 0, done: !0 };
            } while (!((e = t[this._i++]) in this._t));
            return { value: e, done: !1 };
        }),
            a(a.S, "Reflect", {
                enumerate: function (e) {
                    return new r(e);
                },
            });
    },
    function (e, t, n) {
        var a = n(22),
            i = n(37),
            r = n(14),
            o = n(1),
            s = n(5),
            c = n(4);
        o(o.S, "Reflect", {
            get: function e(t, n) {
                var o,
                    l,
                    u = arguments.length < 3 ? t : arguments[2];
                return c(t) === u ? t[n] : (o = a.f(t, n)) ? (r(o, "value") ? o.value : void 0 !== o.get ? o.get.call(u) : void 0) : s((l = i(t))) ? e(l, n, u) : void 0;
            },
        });
    },
    function (e, t, n) {
        var a = n(22),
            i = n(1),
            r = n(4);
        i(i.S, "Reflect", {
            getOwnPropertyDescriptor: function (e, t) {
                return a.f(r(e), t);
            },
        });
    },
    function (e, t, n) {
        var a = n(1),
            i = n(37),
            r = n(4);
        a(a.S, "Reflect", {
            getPrototypeOf: function (e) {
                return i(r(e));
            },
        });
    },
    function (e, t, n) {
        var a = n(1);
        a(a.S, "Reflect", {
            has: function (e, t) {
                return t in e;
            },
        });
    },
    function (e, t, n) {
        var a = n(1),
            i = n(4),
            r = Object.isExtensible;
        a(a.S, "Reflect", {
            isExtensible: function (e) {
                return i(e), !r || r(e);
            },
        });
    },
    function (e, t, n) {
        var a = n(1);
        a(a.S, "Reflect", { ownKeys: n(120) });
    },
    function (e, t, n) {
        var a = n(1),
            i = n(4),
            r = Object.preventExtensions;
        a(a.S, "Reflect", {
            preventExtensions: function (e) {
                i(e);
                try {
                    return r && r(e), !0;
                } catch (e) {
                    return !1;
                }
            },
        });
    },
    function (e, t, n) {
        var a = n(10),
            i = n(22),
            r = n(37),
            o = n(14),
            s = n(1),
            c = n(30),
            l = n(4),
            u = n(5);
        s(s.S, "Reflect", {
            set: function e(t, n, s) {
                var d,
                    h,
                    p = arguments.length < 4 ? t : arguments[3],
                    f = i.f(l(t), n);
                if (!f) {
                    if (u((h = r(t)))) return e(h, n, s, p);
                    f = c(0);
                }
                if (o(f, "value")) {
                    if (!1 === f.writable || !u(p)) return !1;
                    if ((d = i.f(p, n))) {
                        if (d.get || d.set || !1 === d.writable) return !1;
                        (d.value = s), a.f(p, n, d);
                    } else a.f(p, n, c(0, s));
                    return !0;
                }
                return void 0 !== f.set && (f.set.call(p, s), !0);
            },
        });
    },
    function (e, t, n) {
        var a = n(1),
            i = n(68);
        i &&
            a(a.S, "Reflect", {
                setPrototypeOf: function (e, t) {
                    i.check(e, t);
                    try {
                        return i.set(e, t), !0;
                    } catch (e) {
                        return !1;
                    }
                },
            });
    },
    function (e, t, n) {
        n(276), (e.exports = n(8).Array.includes);
    },
    function (e, t, n) {
        "use strict";
        var a = n(1),
            i = n(52)(!0);
        a(a.P, "Array", {
            includes: function (e) {
                return i(this, e, arguments.length > 1 ? arguments[1] : void 0);
            },
        }),
            n(38)("includes");
    },
    function (e, t, n) {
        n(278), (e.exports = n(8).Array.flatMap);
    },
    function (e, t, n) {
        "use strict";
        var a = n(1),
            i = n(279),
            r = n(11),
            o = n(7),
            s = n(20),
            c = n(108);
        a(a.P, "Array", {
            flatMap: function (e) {
                var t,
                    n,
                    a = r(this);
                return s(e), (t = o(a.length)), (n = c(a, 0)), i(n, a, a, t, 0, 1, e, arguments[1]), n;
            },
        }),
            n(38)("flatMap");
    },
    function (e, t, n) {
        "use strict";
        var a = n(54),
            i = n(5),
            r = n(7),
            o = n(19),
            s = n(6)("isConcatSpreadable");
        e.exports = function e(t, n, c, l, u, d, h, p) {
            for (var f, g, m = u, v = 0, y = !!h && o(h, p, 3); v < l; ) {
                if (v in c) {
                    if (((f = y ? y(c[v], v, n) : c[v]), (g = !1), i(f) && (g = void 0 !== (g = f[s]) ? !!g : a(f)), g && d > 0)) m = e(t, n, f, r(f.length), m, d - 1) - 1;
                    else {
                        if (m >= 9007199254740991) throw TypeError();
                        t[m] = f;
                    }
                    m++;
                }
                v++;
            }
            return m;
        };
    },
    function (e, t, n) {
        n(281), (e.exports = n(8).String.padStart);
    },
    function (e, t, n) {
        "use strict";
        var a = n(1),
            i = n(121),
            r = n(60),
            o = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r);
        a(a.P + a.F * o, "String", {
            padStart: function (e) {
                return i(this, e, arguments.length > 1 ? arguments[1] : void 0, !0);
            },
        });
    },
    function (e, t, n) {
        n(283), (e.exports = n(8).String.padEnd);
    },
    function (e, t, n) {
        "use strict";
        var a = n(1),
            i = n(121),
            r = n(60),
            o = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(r);
        a(a.P + a.F * o, "String", {
            padEnd: function (e) {
                return i(this, e, arguments.length > 1 ? arguments[1] : void 0, !1);
            },
        });
    },
    function (e, t, n) {
        n(285), (e.exports = n(8).String.trimLeft);
    },
    function (e, t, n) {
        "use strict";
        n(41)(
            "trimLeft",
            function (e) {
                return function () {
                    return e(this, 1);
                };
            },
            "trimStart"
        );
    },
    function (e, t, n) {
        n(287), (e.exports = n(8).String.trimRight);
    },
    function (e, t, n) {
        "use strict";
        n(41)(
            "trimRight",
            function (e) {
                return function () {
                    return e(this, 2);
                };
            },
            "trimEnd"
        );
    },
    function (e, t, n) {
        n(289), (e.exports = n(64).f("asyncIterator"));
    },
    function (e, t, n) {
        n(93)("asyncIterator");
    },
    function (e, t, n) {
        n(291), (e.exports = n(8).Object.getOwnPropertyDescriptors);
    },
    function (e, t, n) {
        var a = n(1),
            i = n(120),
            r = n(16),
            o = n(22),
            s = n(80);
        a(a.S, "Object", {
            getOwnPropertyDescriptors: function (e) {
                for (var t, n, a = r(e), c = o.f, l = i(a), u = {}, d = 0; l.length > d; ) void 0 !== (n = c(a, (t = l[d++]))) && s(u, t, n);
                return u;
            },
        });
    },
    function (e, t, n) {
        n(293), (e.exports = n(8).Object.values);
    },
    function (e, t, n) {
        var a = n(1),
            i = n(122)(!1);
        a(a.S, "Object", {
            values: function (e) {
                return i(e);
            },
        });
    },
    function (e, t, n) {
        n(295), (e.exports = n(8).Object.entries);
    },
    function (e, t, n) {
        var a = n(1),
            i = n(122)(!0);
        a(a.S, "Object", {
            entries: function (e) {
                return i(e);
            },
        });
    },
    function (e, t, n) {
        "use strict";
        n(114), n(297), (e.exports = n(8).Promise.finally);
    },
    function (e, t, n) {
        "use strict";
        var a = n(1),
            i = n(8),
            r = n(2),
            o = n(50),
            s = n(116);
        a(a.P + a.R, "Promise", {
            finally: function (e) {
                var t = o(this, i.Promise || r.Promise),
                    n = "function" == typeof e;
                return this.then(
                    n
                        ? function (n) {
                              return s(t, e()).then(function () {
                                  return n;
                              });
                          }
                        : e,
                    n
                        ? function (n) {
                              return s(t, e()).then(function () {
                                  throw n;
                              });
                          }
                        : e
                );
            },
        });
    },
    function (e, t, n) {
        n(299), n(300), n(301), (e.exports = n(8));
    },
    function (e, t, n) {
        var a = n(2),
            i = n(1),
            r = n(60),
            o = [].slice,
            s = /MSIE .\./.test(r),
            c = function (e) {
                return function (t, n) {
                    var a = arguments.length > 2,
                        i = !!a && o.call(arguments, 2);
                    return e(
                        a
                            ? function () {
                                  ("function" == typeof t ? t : Function(t)).apply(this, i);
                              }
                            : t,
                        n
                    );
                };
            };
        i(i.G + i.B + i.F * s, { setTimeout: c(a.setTimeout), setInterval: c(a.setInterval) });
    },
    function (e, t, n) {
        var a = n(1),
            i = n(86);
        a(a.G + a.B, { setImmediate: i.set, clearImmediate: i.clear });
    },
    function (e, t, n) {
        for (
            var a = n(83),
                i = n(33),
                r = n(12),
                o = n(2),
                s = n(15),
                c = n(42),
                l = n(6),
                u = l("iterator"),
                d = l("toStringTag"),
                h = c.Array,
                p = {
                    CSSRuleList: !0,
                    CSSStyleDeclaration: !1,
                    CSSValueList: !1,
                    ClientRectList: !1,
                    DOMRectList: !1,
                    DOMStringList: !1,
                    DOMTokenList: !0,
                    DataTransferItemList: !1,
                    FileList: !1,
                    HTMLAllCollection: !1,
                    HTMLCollection: !1,
                    HTMLFormElement: !1,
                    HTMLSelectElement: !1,
                    MediaList: !0,
                    MimeTypeArray: !1,
                    NamedNodeMap: !1,
                    NodeList: !0,
                    PaintRequestList: !1,
                    Plugin: !1,
                    PluginArray: !1,
                    SVGLengthList: !1,
                    SVGNumberList: !1,
                    SVGPathSegList: !1,
                    SVGPointList: !1,
                    SVGStringList: !1,
                    SVGTransformList: !1,
                    SourceBufferList: !1,
                    StyleSheetList: !0,
                    TextTrackCueList: !1,
                    TextTrackList: !1,
                    TouchList: !1,
                },
                f = i(p),
                g = 0;
            g < f.length;
            g++
        ) {
            var m,
                v = f[g],
                y = p[v],
                b = o[v],
                k = b && b.prototype;
            if (k && (k[u] || s(k, u, h), k[d] || s(k, d, v), (c[v] = h), y)) for (m in a) k[m] || r(k, m, a[m], !0);
        }
    },
    function (e, t, n) {
        var a = (function (e) {
            "use strict";
            var t = Object.prototype,
                n = t.hasOwnProperty,
                a = "function" == typeof Symbol ? Symbol : {},
                i = a.iterator || "@@iterator",
                r = a.asyncIterator || "@@asyncIterator",
                o = a.toStringTag || "@@toStringTag";
            function s(e, t, n, a) {
                var i = t && t.prototype instanceof u ? t : u,
                    r = Object.create(i.prototype),
                    o = new w(a || []);
                return (
                    (r._invoke = (function (e, t, n) {
                        var a = "suspendedStart";
                        return function (i, r) {
                            if ("executing" === a) throw new Error("Generator is already running");
                            if ("completed" === a) {
                                if ("throw" === i) throw r;
                                return P();
                            }
                            for (n.method = i, n.arg = r; ; ) {
                                var o = n.delegate;
                                if (o) {
                                    var s = b(o, n);
                                    if (s) {
                                        if (s === l) continue;
                                        return s;
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if ("suspendedStart" === a) throw ((a = "completed"), n.arg);
                                    n.dispatchException(n.arg);
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                a = "executing";
                                var u = c(e, t, n);
                                if ("normal" === u.type) {
                                    if (((a = n.done ? "completed" : "suspendedYield"), u.arg === l)) continue;
                                    return { value: u.arg, done: n.done };
                                }
                                "throw" === u.type && ((a = "completed"), (n.method = "throw"), (n.arg = u.arg));
                            }
                        };
                    })(e, n, o)),
                    r
                );
            }
            function c(e, t, n) {
                try {
                    return { type: "normal", arg: e.call(t, n) };
                } catch (e) {
                    return { type: "throw", arg: e };
                }
            }
            e.wrap = s;
            var l = {};
            function u() {}
            function d() {}
            function h() {}
            var p = {};
            p[i] = function () {
                return this;
            };
            var f = Object.getPrototypeOf,
                g = f && f(f(C([])));
            g && g !== t && n.call(g, i) && (p = g);
            var m = (h.prototype = u.prototype = Object.create(p));
            function v(e) {
                ["next", "throw", "return"].forEach(function (t) {
                    e[t] = function (e) {
                        return this._invoke(t, e);
                    };
                });
            }
            function y(e, t) {
                var a;
                this._invoke = function (i, r) {
                    function o() {
                        return new t(function (a, o) {
                            !(function a(i, r, o, s) {
                                var l = c(e[i], e, r);
                                if ("throw" !== l.type) {
                                    var u = l.arg,
                                        d = u.value;
                                    return d && "object" == typeof d && n.call(d, "__await")
                                        ? t.resolve(d.__await).then(
                                              function (e) {
                                                  a("next", e, o, s);
                                              },
                                              function (e) {
                                                  a("throw", e, o, s);
                                              }
                                          )
                                        : t.resolve(d).then(
                                              function (e) {
                                                  (u.value = e), o(u);
                                              },
                                              function (e) {
                                                  return a("throw", e, o, s);
                                              }
                                          );
                                }
                                s(l.arg);
                            })(i, r, a, o);
                        });
                    }
                    return (a = a ? a.then(o, o) : o());
                };
            }
            function b(e, t) {
                var n = e.iterator[t.method];
                if (void 0 === n) {
                    if (((t.delegate = null), "throw" === t.method)) {
                        if (e.iterator.return && ((t.method = "return"), (t.arg = void 0), b(e, t), "throw" === t.method)) return l;
                        (t.method = "throw"), (t.arg = new TypeError("The iterator does not provide a 'throw' method"));
                    }
                    return l;
                }
                var a = c(n, e.iterator, t.arg);
                if ("throw" === a.type) return (t.method = "throw"), (t.arg = a.arg), (t.delegate = null), l;
                var i = a.arg;
                return i
                    ? i.done
                        ? ((t[e.resultName] = i.value), (t.next = e.nextLoc), "return" !== t.method && ((t.method = "next"), (t.arg = void 0)), (t.delegate = null), l)
                        : i
                    : ((t.method = "throw"), (t.arg = new TypeError("iterator result is not an object")), (t.delegate = null), l);
            }
            function k(e) {
                var t = { tryLoc: e[0] };
                1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
            }
            function S(e) {
                var t = e.completion || {};
                (t.type = "normal"), delete t.arg, (e.completion = t);
            }
            function w(e) {
                (this.tryEntries = [{ tryLoc: "root" }]), e.forEach(k, this), this.reset(!0);
            }
            function C(e) {
                if (e) {
                    var t = e[i];
                    if (t) return t.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                        var a = -1,
                            r = function t() {
                                for (; ++a < e.length; ) if (n.call(e, a)) return (t.value = e[a]), (t.done = !1), t;
                                return (t.value = void 0), (t.done = !0), t;
                            };
                        return (r.next = r);
                    }
                }
                return { next: P };
            }
            function P() {
                return { value: void 0, done: !0 };
            }
            return (
                (d.prototype = m.constructor = h),
                (h.constructor = d),
                (h[o] = d.displayName = "GeneratorFunction"),
                (e.isGeneratorFunction = function (e) {
                    var t = "function" == typeof e && e.constructor;
                    return !!t && (t === d || "GeneratorFunction" === (t.displayName || t.name));
                }),
                (e.mark = function (e) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : ((e.__proto__ = h), o in e || (e[o] = "GeneratorFunction")), (e.prototype = Object.create(m)), e;
                }),
                (e.awrap = function (e) {
                    return { __await: e };
                }),
                v(y.prototype),
                (y.prototype[r] = function () {
                    return this;
                }),
                (e.AsyncIterator = y),
                (e.async = function (t, n, a, i, r) {
                    void 0 === r && (r = Promise);
                    var o = new y(s(t, n, a, i), r);
                    return e.isGeneratorFunction(n)
                        ? o
                        : o.next().then(function (e) {
                              return e.done ? e.value : o.next();
                          });
                }),
                v(m),
                (m[o] = "Generator"),
                (m[i] = function () {
                    return this;
                }),
                (m.toString = function () {
                    return "[object Generator]";
                }),
                (e.keys = function (e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return (
                        t.reverse(),
                        function n() {
                            for (; t.length; ) {
                                var a = t.pop();
                                if (a in e) return (n.value = a), (n.done = !1), n;
                            }
                            return (n.done = !0), n;
                        }
                    );
                }),
                (e.values = C),
                (w.prototype = {
                    constructor: w,
                    reset: function (e) {
                        if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = void 0), (this.done = !1), (this.delegate = null), (this.method = "next"), (this.arg = void 0), this.tryEntries.forEach(S), !e))
                            for (var t in this) "t" === t.charAt(0) && n.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0);
                    },
                    stop: function () {
                        this.done = !0;
                        var e = this.tryEntries[0].completion;
                        if ("throw" === e.type) throw e.arg;
                        return this.rval;
                    },
                    dispatchException: function (e) {
                        if (this.done) throw e;
                        var t = this;
                        function a(n, a) {
                            return (o.type = "throw"), (o.arg = e), (t.next = n), a && ((t.method = "next"), (t.arg = void 0)), !!a;
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var r = this.tryEntries[i],
                                o = r.completion;
                            if ("root" === r.tryLoc) return a("end");
                            if (r.tryLoc <= this.prev) {
                                var s = n.call(r, "catchLoc"),
                                    c = n.call(r, "finallyLoc");
                                if (s && c) {
                                    if (this.prev < r.catchLoc) return a(r.catchLoc, !0);
                                    if (this.prev < r.finallyLoc) return a(r.finallyLoc);
                                } else if (s) {
                                    if (this.prev < r.catchLoc) return a(r.catchLoc, !0);
                                } else {
                                    if (!c) throw new Error("try statement without catch or finally");
                                    if (this.prev < r.finallyLoc) return a(r.finallyLoc);
                                }
                            }
                        }
                    },
                    abrupt: function (e, t) {
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var i = this.tryEntries[a];
                            if (i.tryLoc <= this.prev && n.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var r = i;
                                break;
                            }
                        }
                        r && ("break" === e || "continue" === e) && r.tryLoc <= t && t <= r.finallyLoc && (r = null);
                        var o = r ? r.completion : {};
                        return (o.type = e), (o.arg = t), r ? ((this.method = "next"), (this.next = r.finallyLoc), l) : this.complete(o);
                    },
                    complete: function (e, t) {
                        if ("throw" === e.type) throw e.arg;
                        return (
                            "break" === e.type || "continue" === e.type
                                ? (this.next = e.arg)
                                : "return" === e.type
                                ? ((this.rval = this.arg = e.arg), (this.method = "return"), (this.next = "end"))
                                : "normal" === e.type && t && (this.next = t),
                            l
                        );
                    },
                    finish: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), l;
                        }
                    },
                    catch: function (e) {
                        for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                            var n = this.tryEntries[t];
                            if (n.tryLoc === e) {
                                var a = n.completion;
                                if ("throw" === a.type) {
                                    var i = a.arg;
                                    S(n);
                                }
                                return i;
                            }
                        }
                        throw new Error("illegal catch attempt");
                    },
                    delegateYield: function (e, t, n) {
                        return (this.delegate = { iterator: C(e), resultName: t, nextLoc: n }), "next" === this.method && (this.arg = void 0), l;
                    },
                }),
                e
            );
        })(e.exports);
        try {
            regeneratorRuntime = a;
        } catch (e) {
            Function("r", "regeneratorRuntime = r")(a);
        }
    },
    function (e, t, n) {
        n(304), (e.exports = n(123).global);
    },
    function (e, t, n) {
        var a = n(305);
        a(a.G, { global: n(88) });
    },
    function (e, t, n) {
        var a = n(88),
            i = n(123),
            r = n(306),
            o = n(308),
            s = n(315),
            c = function (e, t, n) {
                var l,
                    u,
                    d,
                    h = e & c.F,
                    p = e & c.G,
                    f = e & c.S,
                    g = e & c.P,
                    m = e & c.B,
                    v = e & c.W,
                    y = p ? i : i[t] || (i[t] = {}),
                    b = y.prototype,
                    k = p ? a : f ? a[t] : (a[t] || {}).prototype;
                for (l in (p && (n = t), n))
                    ((u = !h && k && void 0 !== k[l]) && s(y, l)) ||
                        ((d = u ? k[l] : n[l]),
                        (y[l] =
                            p && "function" != typeof k[l]
                                ? n[l]
                                : m && u
                                ? r(d, a)
                                : v && k[l] == d
                                ? (function (e) {
                                      var t = function (t, n, a) {
                                          if (this instanceof e) {
                                              switch (arguments.length) {
                                                  case 0:
                                                      return new e();
                                                  case 1:
                                                      return new e(t);
                                                  case 2:
                                                      return new e(t, n);
                                              }
                                              return new e(t, n, a);
                                          }
                                          return e.apply(this, arguments);
                                      };
                                      return (t.prototype = e.prototype), t;
                                  })(d)
                                : g && "function" == typeof d
                                ? r(Function.call, d)
                                : d),
                        g && (((y.virtual || (y.virtual = {}))[l] = d), e & c.R && b && !b[l] && o(b, l, d)));
            };
        (c.F = 1), (c.G = 2), (c.S = 4), (c.P = 8), (c.B = 16), (c.W = 32), (c.U = 64), (c.R = 128), (e.exports = c);
    },
    function (e, t, n) {
        var a = n(307);
        e.exports = function (e, t, n) {
            if ((a(e), void 0 === t)) return e;
            switch (n) {
                case 1:
                    return function (n) {
                        return e.call(t, n);
                    };
                case 2:
                    return function (n, a) {
                        return e.call(t, n, a);
                    };
                case 3:
                    return function (n, a, i) {
                        return e.call(t, n, a, i);
                    };
            }
            return function () {
                return e.apply(t, arguments);
            };
        };
    },
    function (e, t) {
        e.exports = function (e) {
            if ("function" != typeof e) throw TypeError(e + " is not a function!");
            return e;
        };
    },
    function (e, t, n) {
        var a = n(309),
            i = n(314);
        e.exports = n(90)
            ? function (e, t, n) {
                  return a.f(e, t, i(1, n));
              }
            : function (e, t, n) {
                  return (e[t] = n), e;
              };
    },
    function (e, t, n) {
        var a = n(310),
            i = n(311),
            r = n(313),
            o = Object.defineProperty;
        t.f = n(90)
            ? Object.defineProperty
            : function (e, t, n) {
                  if ((a(e), (t = r(t, !0)), a(n), i))
                      try {
                          return o(e, t, n);
                      } catch (e) {}
                  if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                  return "value" in n && (e[t] = n.value), e;
              };
    },
    function (e, t, n) {
        var a = n(89);
        e.exports = function (e) {
            if (!a(e)) throw TypeError(e + " is not an object!");
            return e;
        };
    },
    function (e, t, n) {
        e.exports =
            !n(90) &&
            !n(124)(function () {
                return (
                    7 !=
                    Object.defineProperty(n(312)("div"), "a", {
                        get: function () {
                            return 7;
                        },
                    }).a
                );
            });
    },
    function (e, t, n) {
        var a = n(89),
            i = n(88).document,
            r = a(i) && a(i.createElement);
        e.exports = function (e) {
            return r ? i.createElement(e) : {};
        };
    },
    function (e, t, n) {
        var a = n(89);
        e.exports = function (e, t) {
            if (!a(e)) return e;
            var n, i;
            if (t && "function" == typeof (n = e.toString) && !a((i = n.call(e)))) return i;
            if ("function" == typeof (n = e.valueOf) && !a((i = n.call(e)))) return i;
            if (!t && "function" == typeof (n = e.toString) && !a((i = n.call(e)))) return i;
            throw TypeError("Can't convert object to primitive value");
        };
    },
    function (e, t) {
        e.exports = function (e, t) {
            return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t };
        };
    },
    function (e, t) {
        var n = {}.hasOwnProperty;
        e.exports = function (e, t) {
            return n.call(e, t);
        };
    },
    function (e, t, n) {
        "use strict";
        var a =
            (this && this.__importDefault) ||
            function (e) {
                return e && e.__esModule ? e : { default: e };
            };
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i = a(n(317)),
            r = a(n(318)),
            o = function (e, t) {
                return (t = t.toLowerCase()), e.code.toLowerCase() == t || e.name.toLowerCase() == t || e.dial_code.toLowerCase() == t;
            };
        function s() {
            return i.default;
        }
        (t.getCountries = s),
            (t.getCountry = function (e) {
                for (var t = s(), n = 0; n < t.length; n++) if (o(t[n], e)) return t[n];
                return null;
            }),
            (t.getFilteredCountries = function (e) {
                for (var t = s(), n = [], a = 0, i = e; a < i.length; a++)
                    for (var r = i[a], c = 0; c < t.length; c++)
                        if (o(t[c], r)) {
                            n.push(t[c]);
                            break;
                        }
                return n;
            }),
            (t.getStates = function (e) {
                try {
                    return r.default[e];
                } catch (e) {
                    return "Invalid country code";
                }
            });
    },
    function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        t.default = [
            { name: "Afghanistan", code: "af", dial_code: "+93" },
            { name: "Albania", code: "al", dial_code: "+355" },
            { name: "Algeria", code: "dz", dial_code: "+213" },
            { name: "Andorra", code: "ad", dial_code: "+376" },
            { name: "Angola", code: "ao", dial_code: "+244" },
            { name: "Anguilla", code: "ai", dial_code: "+1264" },
            { name: "Antigua and Barbuda", code: "ag", dial_code: "+1268" },
            { name: "Argentina", code: "ar", dial_code: "+54" },
            { name: "Armenia", code: "am", dial_code: "+374" },
            { name: "Aruba", code: "aw", dial_code: "+297" },
            { name: "Australia", code: "au", dial_code: "+61" },
            { name: "Austria", code: "at", dial_code: "+43" },
            { name: "Azerbaijan", code: "az", dial_code: "+994" },
            { name: "Bahamas", code: "bs", dial_code: "+1242" },
            { name: "Bahrain", code: "bh", dial_code: "+973" },
            { name: "Bangladesh", code: "bd", dial_code: "+880" },
            { name: "Barbados", code: "bb", dial_code: "+1246" },
            { name: "Belarus", code: "by", dial_code: "+375" },
            { name: "Belgium", code: "be", dial_code: "+32" },
            { name: "Belize", code: "bz", dial_code: "+501" },
            { name: "Benin", code: "bj", dial_code: "+229" },
            { name: "Bermuda", code: "bm", dial_code: "+1441" },
            { name: "Bhutan", code: "bt", dial_code: "+975" },
            { name: "Bolivia", code: "bo", dial_code: "+591" },
            { name: "Bosnia and Herzegovina", code: "ba", dial_code: "+387" },
            { name: "Botswana", code: "bw", dial_code: "+267" },
            { name: "Brazil", code: "br", dial_code: "+55" },
            { name: "Brunei Darussalam", code: "bn", dial_code: "+673" },
            { name: "Bulgaria", code: "bg", dial_code: "+359" },
            { name: "Burkina Faso", code: "bf", dial_code: "+226" },
            { name: "Burundi", code: "bi", dial_code: "+257" },
            { name: "Cambodia", code: "kh", dial_code: "+855" },
            { name: "Cameroon", code: "cm", dial_code: "+237" },
            { name: "Canada", code: "ca", dial_code: "+1" },
            { name: "Cape Verde", code: "cv", dial_code: "+238" },
            { name: "Cayman Islands", code: "ky", dial_code: "+ 345" },
            { name: "Central African Republic", code: "cf", dial_code: "+236" },
            { name: "Chad", code: "td", dial_code: "+235" },
            { name: "Chile", code: "cl", dial_code: "+56" },
            { name: "China", code: "cn", dial_code: "+86" },
            { name: "Christmas Island", code: "cx", dial_code: "+61" },
            { name: "Cocos (Keeling) Islands", code: "cc", dial_code: "+61" },
            { name: "Colombia", code: "co", dial_code: "+57" },
            { name: "Comoros", code: "km", dial_code: "+269" },
            { name: "Congo", code: "cg", dial_code: "+242" },
            { name: "Cook Islands", code: "ck", dial_code: "+682" },
            { name: "Costa Rica", code: "cr", dial_code: "+506" },
            { name: "Cote D'Ivoire", code: "ci", dial_code: "+225" },
            { name: "Croatia", code: "hr", dial_code: "+385" },
            { name: "Cuba", code: "cu", dial_code: "+53" },
            { name: "Cyprus", code: "cy", dial_code: "+537" },
            { name: "Czech Republic", code: "cz", dial_code: "+420" },
            { name: "Democratic Republic of the Congo", code: "cd", dial_code: "+243" },
            { name: "Denmark", code: "dk", dial_code: "+45" },
            { name: "Djibouti", code: "dj", dial_code: "+253" },
            { name: "Dominica", code: "dm", dial_code: "+1767" },
            { name: "Dominican Republic", code: "do", dial_code: "+1849" },
            { name: "Ecuador", code: "ec", dial_code: "+593" },
            { name: "Egypt", code: "eg", dial_code: "+20" },
            { name: "El Salvador", code: "sv", dial_code: "+503" },
            { name: "Equatorial Guinea", code: "gq", dial_code: "+240" },
            { name: "Eritrea", code: "er", dial_code: "+291" },
            { name: "Estonia", code: "ee", dial_code: "+372" },
            { name: "Ethiopia", code: "et", dial_code: "+251" },
            { name: "Falkland Islands", code: "fk", dial_code: "+500" },
            { name: "Faroe Islands", code: "fo", dial_code: "+298" },
            { name: "Federated States of Micronesia", code: "fm", dial_code: "+691" },
            { name: "Fiji", code: "fj", dial_code: "+679" },
            { name: "Finland", code: "fi", dial_code: "+358" },
            { name: "France", code: "fr", dial_code: "+33" },
            { name: "French Guiana", code: "gf", dial_code: "+594" },
            { name: "French Polynesia", code: "pf", dial_code: "+689" },
            { name: "French Southern Territories", code: "tf", dial_code: "+262" },
            { name: "Gabon", code: "ga", dial_code: "+241" },
            { name: "Gambia", code: "gm", dial_code: "+220" },
            { name: "Georgia", code: "ge", dial_code: "+995" },
            { name: "Germany", code: "de", dial_code: "+49" },
            { name: "Ghana", code: "gh", dial_code: "+233" },
            { name: "Gibraltar", code: "gi", dial_code: "+350" },
            { name: "Great Britain (UK)", code: "gb", dial_code: "+44" },
            { name: "Greece", code: "gr", dial_code: "+30" },
            { name: "Greenland", code: "gl", dial_code: "+299" },
            { name: "Grenada", code: "gd", dial_code: "+1473" },
            { name: "Guadeloupe", code: "gp", dial_code: "+590" },
            { name: "Guatemala", code: "gt", dial_code: "+502" },
            { name: "Guinea", code: "gn", dial_code: "+224" },
            { name: "Guinea-Bissau", code: "gw", dial_code: "+245" },
            { name: "Guyana", code: "gy", dial_code: "+595" },
            { name: "Haiti", code: "ht", dial_code: "+509" },
            { name: "Honduras", code: "hn", dial_code: "+504" },
            { name: "Hong Kong", code: "hk", dial_code: "+852" },
            { name: "Hungary", code: "hu", dial_code: "+36" },
            { name: "Iceland", code: "is", dial_code: "+354" },
            { name: "India", code: "in", dial_code: "+91" },
            { name: "Indonesia", code: "id", dial_code: "+62" },
            { name: "Iran", code: "ir", dial_code: "+98" },
            { name: "Iraq", code: "iq", dial_code: "+964" },
            { name: "Ireland", code: "ie", dial_code: "+353" },
            { name: "Israel", code: "il", dial_code: "+972" },
            { name: "Italy", code: "it", dial_code: "+39" },
            { name: "Jamaica", code: "jm", dial_code: "+1876" },
            { name: "Japan", code: "jp", dial_code: "+81" },
            { name: "Jordan", code: "jo", dial_code: "+962" },
            { name: "Kazakhstan", code: "kz", dial_code: "+7 7" },
            { name: "Kenya", code: "ke", dial_code: "+254" },
            { name: "Kiribati", code: "ki", dial_code: "+686" },
            { name: "North Korea", code: "kp", dial_code: "+850" },
            { name: "South Korea", code: "kr", dial_code: "+82" },
            { name: "Kuwait", code: "kw", dial_code: "+965" },
            { name: "Kyrgyzstan", code: "kg", dial_code: "+996" },
            { name: "Laos", code: "la", dial_code: "+856" },
            { name: "Latvia", code: "lv", dial_code: "+371" },
            { name: "Lebanon", code: "lb", dial_code: "+961" },
            { name: "Lesotho", code: "ls", dial_code: "+266" },
            { name: "Liberia", code: "lr", dial_code: "+231" },
            { name: "Libya", code: "ly", dial_code: "+218" },
            { name: "Liechtenstein", code: "li", dial_code: "+423" },
            { name: "Lithuania", code: "lt", dial_code: "+370" },
            { name: "Luxembourg", code: "lu", dial_code: "+352" },
            { name: "Macao", code: "mo", dial_code: "+853" },
            { name: "Macedonia", code: "mk", dial_code: "+389" },
            { name: "Madagascar", code: "mg", dial_code: "+261" },
            { name: "Malawi", code: "mw", dial_code: "+265" },
            { name: "Malaysia", code: "my", dial_code: "+60" },
            { name: "Maldives", code: "mv", dial_code: "+960" },
            { name: "Mali", code: "ml", dial_code: "+223" },
            { name: "Malta", code: "mt", dial_code: "+356" },
            { name: "Marshall Islands", code: "mh", dial_code: "+692" },
            { name: "Martinique", code: "mq", dial_code: "+596" },
            { name: "Mauritania", code: "mr", dial_code: "+222" },
            { name: "Mauritius", code: "mu", dial_code: "+230" },
            { name: "Mayotte", code: "yt", dial_code: "+262" },
            { name: "Mexico", code: "mx", dial_code: "+52" },
            { name: "Moldova", code: "md", dial_code: "+373" },
            { name: "Monaco", code: "mc", dial_code: "+377" },
            { name: "Mongolia", code: "mn", dial_code: "+976" },
            { name: "Montserrat", code: "ms", dial_code: "+1664" },
            { name: "Morocco", code: "ma", dial_code: "+212" },
            { name: "Mozambique", code: "mz", dial_code: "+258" },
            { name: "Myanmar", code: "mm", dial_code: "+95" },
            { name: "Namibia", code: "na", dial_code: "+264" },
            { name: "Nauru", code: "nr", dial_code: "+674" },
            { name: "Nepal", code: "np", dial_code: "+977" },
            { name: "Netherlands", code: "nl", dial_code: "+31" },
            { name: "Netherlands Antilles", code: "an", dial_code: "+599" },
            { name: "New Caledonia", code: "nc", dial_code: "+687" },
            { name: "New Zealand", code: "nz", dial_code: "+64" },
            { name: "Nicaragua", code: "ni", dial_code: "+505" },
            { name: "Niger", code: "ne", dial_code: "+227" },
            { name: "Nigeria", code: "ng", dial_code: "+234" },
            { name: "Niue", code: "nu", dial_code: "+683" },
            { name: "Norfolk Island", code: "nf", dial_code: "+672" },
            { name: "Northern Mariana Islands", code: "mp", dial_code: "+1670" },
            { name: "Norway", code: "no", dial_code: "+47" },
            { name: "NULL", code: "gg", dial_code: "+44" },
            { name: "Oman", code: "om", dial_code: "+968" },
            { name: "Pakistan", code: "pk", dial_code: "+92" },
            { name: "Palau", code: "pw", dial_code: "+680" },
            { name: "Palestinian Territory", code: "ps", dial_code: "+970" },
            { name: "Panama", code: "pa", dial_code: "+507" },
            { name: "Papua New Guinea", code: "pg", dial_code: "+675" },
            { name: "Paraguay", code: "py", dial_code: "+595" },
            { name: "Peru", code: "pe", dial_code: "+51" },
            { name: "Philippines", code: "ph", dial_code: "+63" },
            { name: "Pitcairn", code: "pn", dial_code: "+872" },
            { name: "Poland", code: "pl", dial_code: "+48" },
            { name: "Portugal", code: "pt", dial_code: "+351" },
            { name: "Qatar", code: "qa", dial_code: "+974" },
            { name: "Reunion", code: "re", dial_code: "+262" },
            { name: "Romania", code: "ro", dial_code: "+40" },
            { name: "Russian Federation", code: "ru", dial_code: "+7" },
            { name: "Rwanda", code: "rw", dial_code: "+250" },
            { name: "S. Georgia and S. Sandwich Islands", code: "gs", dial_code: "+500" },
            { name: "Saint Helena", code: "sh", dial_code: "+290" },
            { name: "Saint Kitts and Nevis", code: "kn", dial_code: "+1869" },
            { name: "Saint Lucia", code: "lc", dial_code: "+1758" },
            { name: "Saint Pierre and Miquelon", code: "pm", dial_code: "+508" },
            { name: "Saint Vincent and the Grenadines", code: "vc", dial_code: "+1784" },
            { name: "Samoa", code: "ws", dial_code: "+685" },
            { name: "San Marino", code: "sm", dial_code: "+378" },
            { name: "Sao Tome and Principe", code: "st", dial_code: "+239" },
            { name: "Saudi Arabia", code: "sa", dial_code: "+966" },
            { name: "Senegal", code: "sn", dial_code: "+221" },
            { name: "Seychelles", code: "sc", dial_code: "+248" },
            { name: "Sierra Leone", code: "sl", dial_code: "+232" },
            { name: "Singapore", code: "sg", dial_code: "+65" },
            { name: "Slovakia", code: "sk", dial_code: "+421" },
            { name: "Slovenia", code: "si", dial_code: "+386" },
            { name: "Solomon Islands", code: "sb", dial_code: "+677" },
            { name: "Somalia", code: "so", dial_code: "+252" },
            { name: "South Africa", code: "za", dial_code: "+27" },
            { name: "Spain", code: "es", dial_code: "+34" },
            { name: "Sri Lanka", code: "lk", dial_code: "+94" },
            { name: "Sudan", code: "sd", dial_code: "+249" },
            { name: "Suriname", code: "sr", dial_code: "+597" },
            { name: "Svalbard and Jan Mayen", code: "sj", dial_code: "+47" },
            { name: "Swaziland", code: "sz", dial_code: "+268" },
            { name: "Sweden", code: "se", dial_code: "+46" },
            { name: "Switzerland", code: "ch", dial_code: "+41" },
            { name: "Syria", code: "sy", dial_code: "+963" },
            { name: "Taiwan", code: "tw", dial_code: "+886" },
            { name: "Tajikistan", code: "tj", dial_code: "+992" },
            { name: "Tanzania", code: "tz", dial_code: "+255" },
            { name: "Thailand", code: "th", dial_code: "+66" },
            { name: "Togo", code: "tg", dial_code: "+228" },
            { name: "Tokelau", code: "tk", dial_code: "+690" },
            { name: "Tonga", code: "to", dial_code: "+676" },
            { name: "Trinidad and Tobago", code: "tt", dial_code: "+1868" },
            { name: "Tunisia", code: "tn", dial_code: "+216" },
            { name: "Turkey", code: "tr", dial_code: "+90" },
            { name: "Turkmenistan", code: "tm", dial_code: "+993" },
            { name: "Turks and Caicos Islands", code: "tc", dial_code: "+1649" },
            { name: "Tuvalu", code: "tv", dial_code: "+688" },
            { name: "Uganda", code: "ug", dial_code: "+256" },
            { name: "Ukraine", code: "ua", dial_code: "+380" },
            { name: "United Arab Emirates", code: "ae", dial_code: "+971" },
            { name: "United States of America", code: "us", dial_code: "+1" },
            { name: "Uruguay", code: "uy", dial_code: "+598" },
            { name: "Uzbekistan", code: "uz", dial_code: "+998" },
            { name: "Vanuatu", code: "vu", dial_code: "+678" },
            { name: "Venezuela", code: "ve", dial_code: "+58" },
            { name: "Viet Nam", code: "vn", dial_code: "+84" },
            { name: "Virgin Islands (British)", code: "vg", dial_code: "+1284" },
            { name: "Virgin Islands (U.S.)", code: "vi", dial_code: "+1340" },
            { name: "Wallis and Futuna", code: "wf", dial_code: "+681" },
            { name: "Western Sahara", code: "eh", dial_code: "+212" },
            { name: "Yemen", code: "ye", dial_code: "+967" },
            { name: "Zambia", code: "zm", dial_code: "+260" },
            { name: "Zimbabwe", code: "zw", dial_code: "+263" },
        ];
    },
    function (e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        t.default = {
            af: [
                "Badakhshan",
                "Badghis",
                "Balkh",
                "Daykundi Province",
                "Farah",
                "Faryab Province",
                "Helmand",
                "Herat",
                "Kandahar",
                "Kunduz",
                "Nangarhar",
                "Panjshir",
                "Parwan",
                "Samangan",
                "Sar-e Pul",
                "Uruzgan",
                "Velayat-e Khowst",
                "Velayat-e Nurestan",
                "Wardak",
                "Wilayat-e Baghlan",
                "Wilayat-e Bamyan",
                "Wilayat-e Ghazni",
                "Wilayat-e Ghor",
                "Wilayat-e Jowzjan",
                "Wilayat-e Kabul",
                "Wilayat-e Kapisa",
                "Wilayat-e Kunar",
                "Wilayat-e Laghman",
                "Wilayat-e Logar",
                "Wilayat-e Nimroz",
                "Wilayat-e Paktika",
                "Wilayat-e Paktiya",
                "Wilayat-e Takhar",
                "Wilayat-e Zabul",
            ],
            al: [
                "Qarku i Beratit",
                "Qarku i Dibres",
                "Qarku i Durresit",
                "Qarku i Elbasanit",
                "Qarku i Fierit",
                "Qarku i Gjirokastres",
                "Qarku i Korces",
                "Qarku i Kukesit",
                "Qarku i Lezhes",
                "Qarku i Shkodres",
                "Qarku i Tiranes",
                "Qarku i Vlores",
            ],
            dz: [
                "Adrar",
                "Annaba",
                "El Bayadh",
                "El Oued",
                "El Tarf",
                "Illizi",
                "Oran",
                "Oum el Bouaghi",
                "Wilaya d' Alger",
                "Wilaya de Ain Defla",
                "Wilaya de Ain Temouchent",
                "Wilaya de Batna",
                "Wilaya de Bechar",
                "Wilaya de Bejaia",
                "Wilaya de Biskra",
                "Wilaya de Blida",
                "Wilaya de Bordj Bou Arreridj",
                "Wilaya de Bouira",
                "Wilaya de Boumerdes",
                "Wilaya de Chlef",
                "Wilaya de Constantine",
                "Wilaya de Djelfa",
                "Wilaya de Ghardaia",
                "Wilaya de Guelma",
                "Wilaya de Jijel",
                "Wilaya de Khenchela",
                "Wilaya de Laghouat",
                "Wilaya de M'Sila",
                "Wilaya de Mascara",
                "Wilaya de Medea",
                "Wilaya de Mila",
                "Wilaya de Mostaganem",
                "Wilaya de Naama",
                "Wilaya de Ouargla",
                "Wilaya de Relizane",
                "Wilaya de Saida",
                "Wilaya de Setif",
                "Wilaya de Sidi Bel Abbes",
                "Wilaya de Skikda",
                "Wilaya de Souk Ahras",
                "Wilaya de Tamanrasset",
                "Wilaya de Tebessa",
                "Wilaya de Tiaret",
                "Wilaya de Tindouf",
                "Wilaya de Tipaza",
                "Wilaya de Tissemsilt",
                "Wilaya de Tizi Ouzo",
                "Wilaya de Tlemcen",
            ],
            ad: ["Andorra la Vella", "Canillo", "Encamp", "Escaldes-Engordany", "La Massana", "Ordino", "Sant Julia de Loria"],
            ao: [
                "Bengo Province",
                "Benguela",
                "Cabinda",
                "Cuanza Norte Province",
                "Cunene Province",
                "Huambo",
                "Huila Province",
                "Kuando Kubango",
                "Kwanza Sul",
                "Luanda Province",
                "Lunda Norte Province",
                "Lunda Sul",
                "Malanje Province",
                "Moxico",
                "Namibe Province",
                "Provincia do Bie",
                "Provincia do Uige",
                "Zaire",
            ],
            ai: ["Blowing Point", "East End", "George Hill", "Island Harbour", "North Hill", "North Side", "Sandy Ground", "Sandy Hill", "South Hill", "Stoney Ground", "The Farrington", "The Quarter", "The Valley", "West End"],
            ag: ["Barbuda", "Parish of Saint George", "Parish of Saint John", "Parish of Saint Mary", "Parish of Saint Paul", "Parish of Saint Peter", "Parish of Saint Philip", "Redonda"],
            ar: [
                "Catamarca Province",
                "Chaco Province",
                "Chubut Province",
                "Ciudad Autonoma de Buenos Aires",
                "Cordoba Province",
                "Corrientes Province",
                "Entre Rios Province",
                "Formosa Province",
                "Jujuy Province",
                "La Pampa Province",
                "La Rioja Province",
                "Mendoza Province",
                "Misiones Province",
                "Neuquen Province",
                "Provincia de Buenos Aires",
                "Rio Negro Province",
                "Salta Province",
                "San Juan Province",
                "San Luis Province",
                "Santa Cruz Province",
                "Santa Fe Province",
                "Santiago del Estero Province",
                "Tierra del Fuego Province",
                "Tucuman Province",
            ],
            am: ["Aragatsotni Marz", "Ararati Marz", "Armaviri Marz", "Geghark'unik'i Marz", "Kotayk'i Marz", "Lorru Marz", "Shiraki Marz", "Syunik'i Marz", "Tavushi Marz", "Vayots' Dzor", "Yerevan"],
            aw: [],
            au: ["Australian Capital Territory", "Northern Territory", "State of New South Wales", "State of Queensland", "State of South Australia", "State of Tasmania", "State of Victoria", "State of Western Australia"],
            at: ["Burgenland", "Kaernten", "Niederoesterreich", "Oberoesterreich", "Salzburg", "Steiermark", "Tirol", "Vorarlberg", "Wien"],
            az: [
                "Absheron Rayon",
                "Aghdam Rayon",
                "Aghdash Rayon",
                "Aghjabadi Rayon",
                "Aghstafa Rayon",
                "Aghsu Rayon",
                "Astara District",
                "Baku City",
                "Balakan Rayon",
                "Barda Rayon",
                "Beylagan Rayon",
                "Bilasuvar Rayon",
                "Dashkasan Rayon",
                "Fizuli Rayon",
                "Gadabay Rayon",
                "Ganja City",
                "Gobustan Rayon",
                "Goranboy Rayon",
                "Goychay Rayon",
                "Goygol Rayon",
                "Hajigabul Rayon",
                "Imishli Rayon",
                "Ismayilli Rayon",
                "Jabrayil District",
                "Jalilabad",
                "Kalbajar District",
                "Khachmaz Rayon",
                "Khizi Rayon",
                "Khojavend District",
                "Kurdamir Rayon",
                "Lacin Rayon",
                "Lankaran Rayon",
                "Lankaran Sahari",
                "Lerik Rayon",
                "Masally District",
                "Mingacevir City",
                "Naftalan City",
                "Nakhchivan",
                "Nakhchivan Autonomous Republic",
                "Neftchala Rayon",
                "Oghuz Rayon",
                "Qabala Rayon",
                "Qakh Rayon",
                "Qazakh Rayon",
                "Quba Rayon",
                "Qubadli Rayon",
                "Qusar Rayon",
                "Saatly Rayon",
                "Sabirabad Rayon",
                "Salyan Rayon",
                "Samukh Rayon",
                "Shabran Rayon",
                "Shaki city",
                "Shaki Rayon",
                "Shamakhi Rayon",
                "Shamkir Rayon",
                "Shirvan",
                "Shusha",
                "Siazan Rayon",
                "Sumqayit City",
                "Susa Rayon",
                "Tartar Rayon",
                "Tovuz Rayon",
                "Ujar Rayon",
                "Xankandi Sahari",
                "Xocali Rayon",
                "Yardymli Rayon",
                "Yevlakh City",
                "Yevlakh Rayon",
                "Zangilan Rayon",
                "Zaqatala Rayon",
                "Zardab Rayon",
            ],
            bs: [
                "Acklins Island District",
                "Berry Islands District",
                "Bimini District",
                "Black Point District",
                "Cat Island",
                "Central Abaco District",
                "Central Andros District",
                "Central Eleuthera District",
                "City of Freeport District",
                "Crooked Island and Long Cay District",
                "East Grand Bahama District",
                "Exuma District",
                "Grand Cay District",
                "Harbour Island District",
                "Hope Town District",
                "Inagua",
                "Long Island",
                "Mangrove Cay",
                "Mayaguana District",
                "Moore's Island District",
                "New Providence District",
                "North Abaco District",
                "North Andros District",
                "North Eleuthera District",
                "Ragged Island District",
                "Rum Cay",
                "San Salvador District",
                "South Abaco District",
                "South Andros",
                "South Eleuthera",
                "Spanish Wells District",
                "West Grand Bahama District",
            ],
            bh: ["Capital Governorate", "Muharraq Governorate", "Northern Governorate", "Southern Governorate"],
            bd: ["Barisal Division", "Chittagong", "Dhaka Division", "Khulna Division", "Mymensingh Division", "Rajshahi Division", "Rangpur Division", "Sylhet Division"],
            bb: ["Christ Church", "Saint Andrew", "Saint George", "Saint James", "Saint John", "Saint Joseph", "Saint Lucy", "Saint Michael", "Saint Peter", "Saint Philip", "Saint Thomas"],
            by: ["Brest Oblast", "Gomel Oblast", "Grodno Oblast", "Horad Minsk", "Minsk Oblast", "Mogilyov Oblast", "Vitebsk Oblast"],
            be: ["Bruxelles-Capitale", "Flanders", "Wallonia"],
            bz: ["Belize District", "Cayo District", "Corozal District", "Orange Walk District", "Stann Creek District", "Toledo District"],
            bj: ["Alibori", "Atakora Department", "Atlantique Department", "Borgou Department", "Collines Department", "Departement de l'Oueme", "Donga", "Kouffo Department", "Littoral", "Mono", "Plateau Department", "Zou Department"],
            bm: ["Devonshire Parish", "Hamilton", "Paget Parish", "Pembroke Parish", "Saint George", "Saint George's Parish", "Sandys Parish", "Smith's Parish", "Southampton Parish", "Warwick Parish"],
            bt: [
                "Bumthang Dzongkhag",
                "Chhukha Dzongkhag",
                "Dagana Dzongkhag",
                "Gasa",
                "Haa Dzongkhag",
                "Lhuentse Dzongkhag",
                "Mongar Dzongkhag",
                "Paro Dzongkhag",
                "Pemagatshel Dzongkhag",
                "Punakha Dzongkhag",
                "Samdrup Jongkhar Dzongkhag",
                "Samtse Dzongkhag",
                "Sarpang Dzongkhag",
                "Thimphu Dzongkhag",
                "Trashi Yangste",
                "Trashigang Dzongkhag",
                "Trongsa Dzongkhag",
                "Tsirang Dzongkhag",
                "Wangdue Phodrang Dzongkhag",
                "Zhemgang Dzongkhag",
            ],
            bo: [
                "Departamento de Chuquisaca",
                "Departamento de Cochabamba",
                "Departamento de La Paz",
                "Departamento de Oruro",
                "Departamento de Pando",
                "Departamento de Potosi",
                "Departamento de Santa Cruz",
                "Departamento de Tarija",
                "El Beni",
            ],
            ba: ["Brcko", "Federation of Bosnia and Herzegovina", "Republika Srpska"],
            bw: ["Central District", "Ghanzi District", "Kgalagadi District", "Kgatleng District", "Kweneng District", "North East District", "North West District", "South East District", "Southern District"],
            br: [
                "Acre",
                "Alagoas",
                "Amapa",
                "Amazonas",
                "Bahia",
                "Ceara",
                "Espirito Santo",
                "Federal District",
                "Goias",
                "Maranhao",
                "Mato Grosso",
                "Mato Grosso do Sul",
                "Minas Gerais",
                "Para",
                "Paraiba",
                "Parana",
                "Pernambuco",
                "Piaui",
                "Rio de Janeiro",
                "Rio Grande do Norte",
                "Rio Grande do Sul",
                "Rondonia",
                "Roraima",
                "Santa Catarina",
                "Sao Paulo",
                "Sergipe",
                "Tocantins",
            ],
            bn: ["Belait District", "Brunei and Muara District", "Temburong District", "Tutong District"],
            bg: [
                "Blagoevgrad",
                "Burgas",
                "Gabrovo",
                "Haskovo",
                "Lovech",
                "Oblast Dobrich",
                "Oblast Kardzhali",
                "Oblast Kyustendil",
                "Oblast Montana",
                "Oblast Pleven",
                "Oblast Razgrad",
                "Oblast Ruse",
                "Oblast Shumen",
                "Oblast Silistra",
                "Oblast Sliven",
                "Oblast Smolyan",
                "Oblast Stara Zagora",
                "Oblast Targovishte",
                "Oblast Veliko Tarnovo",
                "Oblast Vidin",
                "Oblast Vratsa",
                "Oblast Yambol",
                "Pazardzhik",
                "Pernik",
                "Plovdiv",
                "Sofia",
                "Sofia-Grad",
                "Varna",
            ],
            bf: ["Boucle du Mouhoun Region", "Cascades Region", "Centre", "Centre-Est", "Centre-Nord", "Centre-Ouest", "Centre-Sud", "Est", "High-Basins Region", "Nord", "Plateau-Central", "Sahel", "Southwest Region"],
            bi: [
                "Bubanza Province",
                "Bujumbura Mairie Province",
                "Bujumbura Rural Province",
                "Bururi Province",
                "Cankuzo Province",
                "Cibitoke Province",
                "Gitega Province",
                "Karuzi Province",
                "Kayanza Province",
                "Kirundo Province",
                "Makamba Province",
                "Muramvya Province",
                "Muyinga Province",
                "Ngozi Province",
                "Province de Mwaro",
                "Rumonge Province",
                "Rutana Province",
                "Ruyigi Province",
            ],
            kh: [
                "Banteay Meanchey",
                "Battambang",
                "Kampong Cham",
                "Kampong Chhnang",
                "Kampong Spe",
                "Kampong Thom",
                "Kampot",
                "Kandal",
                "Kep",
                "Koh Kong",
                "Kratie",
                "Mondolkiri",
                "Otar Meanchey",
                "Pailin",
                "Phnom Penh",
                "Preah Vihear",
                "Prey Veng",
                "Pursat",
                "Ratanakiri",
                "Siem Reap",
                "Sihanoukville",
                "Stung Treng",
                "Svay Rieng",
                "Takeo",
                "Tboung Khmum",
            ],
            cm: ["Adamaoua Region", "Centre Region", "East Region", "Far North Region", "Littoral Region", "North Region", "North-West Region", "South Region", "South-West Region", "West Region"],
            ca: [
                "Alberta",
                "British Columbia",
                "Manitoba",
                "New Brunswick/Nouveau-Brunswick",
                "Newfoundland and Labrador",
                "Northwest Territories",
                "Nova Scotia",
                "Nunavut",
                "Ontario",
                "Prince Edward Island",
                "Quebec",
                "Saskatchewan",
                "Yukon",
            ],
            cv: [
                "Concelho da Boa Vista",
                "Concelho da Brava",
                "Concelho da Praia",
                "Concelho da Ribeira Brava",
                "Concelho da Ribeira Grande",
                "Concelho de Ribeira Grande de Santiago",
                "Concelho de Santa Catarina",
                "Concelho de Santa Catarina do Fogo",
                "Concelho de Santa Cruz",
                "Concelho de Sao Domingos",
                "Concelho de Sao Miguel",
                "Concelho de Sao Salvador do Mundo",
                "Concelho de Sao Vicente",
                "Concelho do Maio",
                "Concelho do Paul",
                "Concelho do Porto Novo",
                "Concelho do Sao Filipe",
                "Concelho do Tarrafal",
                "Concelho do Tarrafal de Sao Nicola",
                "Concelho dos Mosteiros",
                "Sal Municipality",
                "Sao Lourenco dos Orgaos",
            ],
            ky: ["Bodden Town", "East End", "George Town", "North Side", "Sister Island", "West Bay"],
            cf: [
                "Bamingui-Bangoran",
                "Basse-Kotto",
                "Commune de Bangui",
                "Haut-Mbomo",
                "Haute-Kotto",
                "Lobaye",
                "Mambere-Kadei",
                "Mbomo",
                "Ombella-Mpoko",
                "Ouaka",
                "Ouham",
                "Prefecture de l'Ouham-Pende",
                "Prefecture de la Kemo",
                "Prefecture de la Nana-Grebizi",
                "Prefecture de la Nana-Mambere",
                "Prefecture de la Sangha-Mbaere",
                "Vakaga",
            ],
            td: [
                "Barh el Gazel",
                "Batha Region",
                "Borkou Region",
                "Chari-Baguirmi Region",
                "Ennedi-Est",
                "Ennedi-Ouest",
                "Guera Region",
                "Hadjer-Lamis",
                "Kanem Region",
                "Lac Region",
                "Logone Occidental Region",
                "Logone Oriental Region",
                "Mandoul",
                "Mayo-Kebbi East Region",
                "Mayo-Kebbi West Region",
                "Moyen-Chari Region",
                "Ouaddai Region",
                "Region de la Ville de N'Djamena",
                "Salamat Region",
                "Sila",
                "Tandjile Region",
                "Tibesti Region",
                "Wadi Fira Region",
            ],
            cl: [
                "Antofagasta",
                "Atacama",
                "Aysen",
                "Coquimbo",
                "Los Lagos",
                "Maule",
                "Region de Arica y Parinacota",
                "Region de la Araucania",
                "Region de Los Rios",
                "Region de Magallanes y de la Antartica Chilena",
                "Region de Tarapaca",
                "Region de Valparaiso",
                "Region del Biobio",
                "Region del Libertador General Bernardo O'Higgins",
                "Region Metropolitana de Santiago",
            ],
            cn: [
                "Anhui Sheng",
                "Beijing Shi",
                "Chongqing Shi",
                "Fujian Sheng",
                "Gansu Sheng",
                "Guangdong Sheng",
                "Guangxi Zhuangzu Zizhiq",
                "Guizhou Sheng",
                "Hainan Sheng",
                "Hebei Sheng",
                "Heilongjiang Sheng",
                "Henan Sheng",
                "Hubei Sheng",
                "Hunan Sheng",
                "Inner Mongolia Autonomous Region",
                "Jiangsu Sheng",
                "Jiangxi Sheng",
                "Jilin Sheng",
                "Liaoning Sheng",
                "Ningxia Huizu Zizhiq",
                "Qinghai Sheng",
                "Shaanxi",
                "Shandong Sheng",
                "Shanghai Shi",
                "Shanxi Sheng",
                "Sichuan Sheng",
                "Tianjin Shi",
                "Tibet Autonomous Region",
                "Xinjiang Uygur Zizhiq",
                "Yunnan Sheng",
                "Zhejiang Sheng",
            ],
            cx: [],
            cc: [],
            co: [
                "Amazonas",
                "Departamento de Antioquia",
                "Departamento de Arauca",
                "Departamento de Bolivar",
                "Departamento de Boyaca",
                "Departamento de Caldas",
                "Departamento de Casanare",
                "Departamento de Cordoba",
                "Departamento de Cundinamarca",
                "Departamento de La Guajira",
                "Departamento de Narino",
                "Departamento de Norte de Santander",
                "Departamento de Risaralda",
                "Departamento de Santander",
                "Departamento de Sucre",
                "Departamento de Tolima",
                "Departamento del Atlantico",
                "Departamento del Caqueta",
                "Departamento del Cauca",
                "Departamento del Cesar",
                "Departamento del Choco",
                "Departamento del Guainia",
                "Departamento del Guaviare",
                "Departamento del Huila",
                "Departamento del Magdalena",
                "Departamento del Meta",
                "Departamento del Putumayo",
                "Departamento del Valle del Cauca",
                "Departamento del Vaupes",
                "Departamento del Vichada",
                "Distrito Capital de Bogota",
                "Providencia y Santa Catalina, Departamento de Archipielago de San Andres",
                "Quindio Department",
            ],
            km: ["Grande Comore", "Moheli", "Ndzuwani"],
            cg: ["Commune de Brazzaville", "Cuvette", "Cuvette-Ouest", "Lekoumo", "Likouala", "Plateaux", "Pointe-Noire", "Pool", "Region de la Bouenza", "Region du Kouilo", "Region du Niari", "Sangha"],
            ck: ["Aitutaki", "Ati", "Ma'uke", "Mangaia", "Manihiki", "Mitiaro", "Palmerston", "Penrhyn", "Pukapuka", "Rakahanga", "Rarotonga"],
            cr: ["Provincia de Alajuela", "Provincia de Cartago", "Provincia de Guanacaste", "Provincia de Heredia", "Provincia de Limon", "Provincia de Puntarenas", "Provincia de San Jose"],
            ci: ["Abidjan", "Bas-Sassandra", "Comoe", "Denguele", "Goh-Djiboua", "Lacs", "Lagunes", "Montagnes", "Sassandra-Marahoue", "Savanes", "Vallee du Bandama", "Woroba", "Yamoussoukro Autonomous District", "Zanzan"],
            hr: [
                "Bjelovarsko-Bilogorska Zupanija",
                "Brodsko-Posavska Zupanija",
                "Dubrovacko-Neretvanska Zupanija",
                "Grad Zagreb",
                "Istarska Zupanija",
                "Karlovacka Zupanija",
                "Koprivnicko-Krizevacka Zupanija",
                "Krapinsko-Zagorska Zupanija",
                "Licko-Senjska Zupanija",
                "Megimurska Zupanija",
                "Osjecko-Baranjska Zupanija",
                "Pozesko-Slavonska Zupanija",
                "Primorsko-Goranska Zupanija",
                "Sibensko-Kninska Zupanija",
                "Sisacko-Moslavacka Zupanija",
                "Splitsko-Dalmatinska Zupanija",
                "Varazdinska Zupanija",
                "Viroviticko-Podravska Zupanija",
                "Vukovarsko-Srijemska Zupanija",
                "Zadarska Zupanija",
                "Zagreb County",
            ],
            cu: [
                "Artemisa",
                "La Habana",
                "Las Tunas",
                "Municipio Especial Isla de la Juventud",
                "Provincia de Camagueey",
                "Provincia de Ciego de Avila",
                "Provincia de Cienfuegos",
                "Provincia de Guantanamo",
                "Provincia de Holguin",
                "Provincia de Matanzas",
                "Provincia de Pinar del Rio",
                "Provincia de Sancti Spiritus",
                "Provincia de Santiago de Cuba",
                "Provincia de Villa Clara",
                "Provincia Granma",
                "Provincia Mayabeque",
            ],
            cy: ["Eparchia Ammochosto", "Eparchia Keryneias", "Eparchia Larnakas", "Eparchia Lefkosias", "Eparchia Lemeso", "Eparchia Pafo"],
            cz: [
                "Hlavni mesto Praha",
                "Jihocesky kraj",
                "Jihomoravsky kraj",
                "Karlovarsky kraj",
                "Kraj Vysocina",
                "Kralovehradecky kraj",
                "Liberecky kraj",
                "Moravskoslezsky kraj",
                "Olomoucky kraj",
                "Pardubicky kraj",
                "Plzensky kraj",
                "Stredocesky kraj",
                "Ustecky kraj",
                "Zlinsky kraj",
            ],
            cd: [
                "Bas Uele",
                "Haut Uele",
                "Haut-Lomani",
                "Ituri",
                "Kasai District",
                "Kasai-Central",
                "Kinshasa City",
                "Kwango",
                "Kwil",
                "Lomami",
                "Lualaba",
                "Mai Ndombe",
                "Mongala",
                "Province de l'Equateur",
                "Province du Haut-Katanga",
                "Province du Kasai Oriental",
                "Province du Kongo Central",
                "Province du Maniema",
                "Province du Nord-Kiv",
                "Province du Nord-Ubangi",
                "Province du Sud-Ubangi",
                "Sankur",
                "South Kivu Province",
                "Tanganika",
                "Tshopo",
                "Tshuapa",
            ],
            dk: ["North Denmark Region", "Region Hovedstaden", "Region Midtjylland", "Region Sjaelland", "Region Syddanmark"],
            dj: ["Ali Sabieh Region", "Arta Region", "Dikhil", "Djibouti Region", "Obock", "Tadjourah"],
            dm: ["Saint Andrew", "Saint David", "Saint George", "Saint John", "Saint Joseph", "Saint Luke", "Saint Mark", "Saint Patrick", "Saint Paul", "Saint Peter"],
            do: [
                "Distrito Nacional",
                "Provincia de Azua",
                "Provincia de Baoruco",
                "Provincia de Barahona",
                "Provincia de Dajabon",
                "Provincia de El Seibo",
                "Provincia de Elias Pina",
                "Provincia de Hato Mayor",
                "Provincia de Hermanas Mirabal",
                "Provincia de Independencia",
                "Provincia de La Altagracia",
                "Provincia de La Romana",
                "Provincia de La Vega",
                "Provincia de Monsenor Nouel",
                "Provincia de Monte Cristi",
                "Provincia de Monte Plata",
                "Provincia de Pedernales",
                "Provincia de Peravia",
                "Provincia de Puerto Plata",
                "Provincia de San Cristobal",
                "Provincia de San Jose de Ocoa",
                "Provincia de San Juan",
                "Provincia de San Pedro de Macoris",
                "Provincia de Santiago",
                "Provincia de Santiago Rodriguez",
                "Provincia de Santo Domingo",
                "Provincia de Valverde",
                "Provincia Duarte",
                "Provincia Espaillat",
                "Provincia Maria Trinidad Sanchez",
                "Provincia Sanchez Ramirez",
                "Samana Province",
            ],
            ec: [
                "Provincia de Bolivar",
                "Provincia de Cotopaxi",
                "Provincia de El Oro",
                "Provincia de Esmeraldas",
                "Provincia de Francisco de Orellana",
                "Provincia de Galapagos",
                "Provincia de Imbabura",
                "Provincia de Loja",
                "Provincia de Los Rios",
                "Provincia de Manabi",
                "Provincia de Morona-Santiago",
                "Provincia de Napo",
                "Provincia de Pichincha",
                "Provincia de Santa Elena",
                "Provincia de Santo Domingo de los Tsachilas",
                "Provincia de Sucumbios",
                "Provincia de Zamora-Chinchipe",
                "Provincia del Azuay",
                "Provincia del Canar",
                "Provincia del Carchi",
                "Provincia del Chimborazo",
                "Provincia del Guayas",
                "Provincia del Pastaza",
                "Provincia del Tungurahua",
            ],
            eg: [
                "As Suways",
                "Beheira Governorate",
                "Cairo Governorate",
                "Damietta Governorate",
                "Ismailia Governorate",
                "Kafr ash Shaykh",
                "Muhafazat ad Daqahliyah",
                "Muhafazat al Fayyum",
                "Muhafazat al Gharbiyah",
                "Muhafazat al Iskandariyah",
                "Muhafazat al Jizah",
                "Muhafazat al Minufiyah",
                "Muhafazat al Minya",
                "Muhafazat al Qalyubiyah",
                "Muhafazat al Uqsur",
                "Muhafazat al Wadi al Jadid",
                "Muhafazat ash Sharqiyah",
                "Muhafazat Aswan",
                "Muhafazat Asyut",
                "Muhafazat Bani Suwayf",
                "Muhafazat Bur Sa'id",
                "Muhafazat Matruh",
                "Muhafazat Qina",
                "Muhafazat Shamal Sina'",
                "Muhafazat Suhaj",
                "Red Sea Governorate",
                "South Sinai Governorate",
            ],
            sv: [
                "Departamento de Ahuachapan",
                "Departamento de Cabanas",
                "Departamento de Chalatenango",
                "Departamento de Cuscatlan",
                "Departamento de La Libertad",
                "Departamento de La Paz",
                "Departamento de La Union",
                "Departamento de Morazan",
                "Departamento de San Miguel",
                "Departamento de San Salvador",
                "Departamento de San Vicente",
                "Departamento de Santa Ana",
                "Departamento de Sonsonate",
                "Departamento de Usulutan",
            ],
            gq: ["Provincia de Annobon", "Provincia de Bioko Norte", "Provincia de Bioko Sur", "Provincia de Centro Sur", "Provincia de Kie-Ntem", "Provincia de Litoral", "Provincia de Wele-Nzas"],
            er: ["Anseba Region", "Debub Region", "Gash-Barka Region", "Maekel Region", "Northern Red Sea Region", "Southern Red Sea Region"],
            ee: ["Harjumaa", "Hiiumaa", "Ida-Virumaa", "Jarvamaa", "Jogevamaa", "Laane-Virumaa", "Laeaenemaa", "Paernumaa", "Polvamaa", "Raplamaa", "Saaremaa", "Tartumaa", "Valgamaa", "Viljandimaa", "Vorumaa"],
            et: [
                "Adis Abeba Astedader",
                "Afar Region",
                "Amhara Region",
                "Benishangul-Gumuz Region",
                "Dire Dawa Region",
                "Gambela Region",
                "Harari Region",
                "Oromiya Region",
                "Somali Region",
                "Southern Nations, Nationalities, and People's Region",
                "Tigray Region",
            ],
            fk: [],
            fo: ["Eysturoyar sysla", "Nordoyar sysla", "Sandoyar Sysla", "Streymoyar Sysla", "Suduroyar sysla", "Vaga Sysla"],
            fm: ["State of Chuuk", "State of Kosrae", "State of Pohnpei", "State of Yap"],
            fj: ["Central Division", "Eastern Division", "Northern Division", "Rotuma", "Western Division"],
            fi: [
                "Etela-Pohjanmaa",
                "Etelae-Karjala",
                "Kainu",
                "Kanta-Haeme",
                "Keski-Pohjanmaa",
                "Keski-Suomi",
                "Kymenlaakso",
                "Lapland",
                "Paijanne-Tavastland",
                "Pirkanmaa",
                "Pohjanmaa",
                "Pohjois-Karjala",
                "Pohjois-Pohjanmaa",
                "Pohjois-Savo",
                "Satakunta",
                "Southern Savonia",
                "Uusimaa",
                "Varsinais-Suomi",
            ],
            fr: [
                "Auvergne-Rhone-Alpes",
                "Bourgogne-Franche-Comte",
                "Bretagne",
                "Centre-Val de Loire",
                "Corse",
                "Grand-Est",
                "Hauts-de-France",
                "Ile-de-France",
                "Normandy",
                "Nouvelle-Aquitaine",
                "Occitanie",
                "Pays de la Loire",
                "Provence-Alpes-Cote d'Azur",
            ],
            gf: ["Guyane"],
            pf: ["Iles Australes", "Iles du Vent", "Iles Marquises", "Iles Sous-le-Vent", "Iles Tuamotu-Gambier"],
            tf: ["Archipel des Crozet", "Archipel des Kerguelen", "Iles Eparses de l'ocean Indien", "Iles Saint-Paul et Nouvelle-Amsterdam", "La Terre-Adelie"],
            ga: [
                "Estuaire",
                "Province de l'Ogooue-Ivindo",
                "Province de l'Ogooue-Lolo",
                "Province de l'Ogooue-Maritime",
                "Province de la Ngounie",
                "Province de la Nyanga",
                "Province du Haut-Ogooue",
                "Province du Moyen-Ogooue",
                "Province du Woleu-Ntem",
            ],
            gm: ["Banjul", "Central River", "Lower River Division", "North Bank", "Upper River", "West Coast"],
            ge: ["Abkhazia", "Ajaria", "Guria", "Imereti", "K'alak'i T'bilisi", "Kakheti", "Kvemo Kartli", "Mtskheta-Mtianeti", "Racha-Lechkhumi and Kvemo Svaneti", "Samegrelo-Zemo Svanetis Mkhare", "Samtskhe-Javakheti", "Shida Kartli"],
            de: [
                "Baden-Wuerttemberg Region",
                "Bavaria",
                "Brandenburg",
                "Bremen",
                "Free and Hanseatic City of Hamburg",
                "Hessen",
                "Land Berlin",
                "Lower Saxony",
                "Mecklenburg-Western Pomerania",
                "Nordrhein-Westfalen",
                "Rheinland-Pfalz",
                "Saarland",
                "Saxony",
                "Saxony-Anhalt",
                "Schleswig-Holstein",
                "Thuringia",
            ],
            gh: ["Ashanti Region", "Brong-Ahafo Region", "Central Region", "Eastern Region", "Greater Accra Region", "Northern Region", "Upper East Region", "Upper West Region", "Volta Region", "Western Region"],
            gi: [],
            gb: ["England", "Northern Ireland", "Scotland", "Wales"],
            gr: [
                "Attica",
                "Central Greece",
                "Central Macedonia",
                "Crete",
                "Eastern Macedonia and Thrace",
                "Epirus",
                "Ionian Islands",
                "Mount Athos",
                "North Aegean",
                "Peloponnese",
                "South Aegean",
                "Thessaly",
                "Western Greece",
                "Western Macedonia",
            ],
            gl: ["Kujalleq", "Qaasuitsup", "Qeqqata", "Sermersooq"],
            gd: ["Carriacou and Petite Martinique", "Saint Andrew", "Saint David", "Saint George", "Saint John", "Saint Mark", "Saint Patrick"],
            gp: ["Guadeloupe"],
            gt: [
                "Departamento de Alta Verapaz",
                "Departamento de Baja Verapaz",
                "Departamento de Chimaltenango",
                "Departamento de Chiquimula",
                "Departamento de El Progreso",
                "Departamento de Escuintla",
                "Departamento de Guatemala",
                "Departamento de Huehuetenango",
                "Departamento de Izabal",
                "Departamento de Jalapa",
                "Departamento de Jutiapa",
                "Departamento de Quetzaltenango",
                "Departamento de Retalhule",
                "Departamento de Sacatepequez",
                "Departamento de San Marcos",
                "Departamento de Santa Rosa",
                "Departamento de Solola",
                "Departamento de Suchitepequez",
                "Departamento de Totonicapan",
                "Departamento de Zacapa",
                "Departamento del Peten",
                "Departamento del Quiche",
            ],
            gn: ["Boke Region", "Conakry Region", "Faranah Region", "Kankan Region", "Kindia Region", "Labe Region", "Mamou Region", "Nzerekore Region"],
            gw: ["Bafata", "Biombo", "Bissau Region", "Bolama", "Cacheu Region", "Gab", "Oio Region", "Quinara", "Tombali"],
            gy: [
                "Barima-Waini Region",
                "Cuyuni-Mazaruni Region",
                "Demerara-Mahaica Region",
                "East Berbice-Corentyne Region",
                "Essequibo Islands-West Demerara Region",
                "Mahaica-Berbice Region",
                "Pomeroon-Supenaam Region",
                "Potaro-Siparuni Region",
                "Upper Demerara-Berbice Region",
                "Upper Takutu-Upper Essequibo Region",
            ],
            ht: ["Centre", "Departement de l'Artibonite", "Departement de l'Ouest", "Departement de Nippes", "Departement du Nord-Est", "Grandans", "Nord", "Nord-Ouest", "Sud", "Sud-Est"],
            hn: [
                "Departamento de Atlantida",
                "Departamento de Choluteca",
                "Departamento de Colon",
                "Departamento de Comayagua",
                "Departamento de Copan",
                "Departamento de Cortes",
                "Departamento de El Paraiso",
                "Departamento de Francisco Morazan",
                "Departamento de Gracias a Dios",
                "Departamento de Intibuca",
                "Departamento de Islas de la Bahia",
                "Departamento de La Paz",
                "Departamento de Lempira",
                "Departamento de Ocotepeque",
                "Departamento de Olancho",
                "Departamento de Santa Barbara",
                "Departamento de Valle",
                "Departamento de Yoro",
            ],
            hk: [
                "Central and Western District",
                "Eastern",
                "Islands District",
                "Kowloon City",
                "Kwai Tsing",
                "Kwun Tong",
                "North",
                "Sai Kung District",
                "Sha Tin",
                "Sham Shui Po",
                "Southern",
                "Tai Po District",
                "Tsuen Wan District",
                "Tuen Mun",
                "Wan Chai",
                "Wong Tai Sin",
                "Yau Tsim Mong",
                "Yuen Long District",
            ],
            hu: [
                "Bacs-Kiskun county",
                "Baranya county",
                "Bekes County",
                "Borsod-Abauj Zemplen county",
                "Budapest",
                "Csongrad megye",
                "Fejer megye",
                "Gyor-Moson-Sopron megye",
                "Hajdu-Bihar",
                "Heves megye",
                "Jasz-Nagykun-Szolnok",
                "Komarom-Esztergom",
                "Nograd megye",
                "Pest megye",
                "Somogy megye",
                "Szabolcs-Szatmar-Bereg",
                "Tolna megye",
                "Vas megye",
                "Veszprem megye",
                "Zala megye",
            ],
            is: ["Austurland", "Hoefudborgarsvaedi", "Nordurland Eystra", "Nordurland Vestra", "Sudurland", "Sudurnes", "Vestfirdir", "Vesturland"],
            in: [
                "Assam",
                "Goa",
                "Madhya Pradesh",
                "Manipur",
                "Meghalaya",
                "Mizoram",
                "National Capital Territory of Delhi",
                "Sikkim",
                "State of Andhra Pradesh",
                "State of Arunachal Pradesh",
                "State of Bihar",
                "State of Chhattisgarh",
                "State of Gujarat",
                "State of Haryana",
                "State of Himachal Pradesh",
                "State of Jammu and Kashmir",
                "State of Jharkhand",
                "State of Karnataka",
                "State of Kerala",
                "State of Maharashtra",
                "State of Nagaland",
                "State of Odisha",
                "State of Punjab",
                "State of Rajasthan",
                "State of Tamil Nad",
                "State of Uttarakhand",
                "Telangana",
                "Tripura",
                "Union Territory of Andaman and Nicobar Islands",
                "Union Territory of Chandigarh",
                "Union Territory of Dadra and Nagar Haveli",
                "Union Territory of Daman and Di",
                "Union Territory of Lakshadweep",
                "Union Territory of Puducherry",
                "Uttar Pradesh",
                "West Bengal",
            ],
            id: [
                "Banten",
                "Daerah Istimewa Yogyakarta",
                "Daerah Khusus Ibukota Jakarta",
                "Jawa Barat",
                "Jawa Timur",
                "Kepulauan Bangka Belitung",
                "Nanggroe Aceh Darussalam Province",
                "North Kalimantan",
                "Propinsi Bengkul",
                "Provinsi Bali",
                "Provinsi Gorontalo",
                "Provinsi Jambi",
                "Provinsi Jawa Tengah",
                "Provinsi Kalimantan Barat",
                "Provinsi Kalimantan Selatan",
                "Provinsi Kalimantan Tengah",
                "Provinsi Kalimantan Timur",
                "Provinsi Kepulauan Ria",
                "Provinsi Lampung",
                "Provinsi Maluk",
                "Provinsi Maluku Utara",
                "Provinsi Nusa Tenggara Timur",
                "Provinsi Papua",
                "Provinsi Papua Barat",
                "Provinsi Ria",
                "Provinsi Sulawesi Barat",
                "Provinsi Sulawesi Selatan",
                "Provinsi Sumatera Barat",
                "Sulawesi Tengah",
                "Sulawesi Tenggara",
                "Sulawesi Utara",
                "Sumatera Selatan",
                "Sumatera Utara",
                "West Nusa Tenggara",
            ],
            ir: [
                "Alborz",
                "Bushehr",
                "East Azerbaijan",
                "Fars",
                "Hormozgan",
                "Isfahan",
                "Kerman",
                "Khuzestan",
                "Ostan-e Ardabil",
                "Ostan-e Azarbayjan-e Gharbi",
                "Ostan-e Chahar Mahal va Bakhtiari",
                "Ostan-e Gilan",
                "Ostan-e Golestan",
                "Ostan-e Hamadan",
                "Ostan-e Ilam",
                "Ostan-e Kermanshah",
                "Ostan-e Khorasan-e Jonubi",
                "Ostan-e Khorasan-e Razavi",
                "Ostan-e Khorasan-e Shomali",
                "Ostan-e Kohgiluyeh va Bowyer Ahmad",
                "Ostan-e Kordestan",
                "Ostan-e Lorestan",
                "Ostan-e Markazi",
                "Ostan-e Mazandaran",
                "Ostan-e Qazvin",
                "Ostan-e Semnan",
                "Ostan-e Tehran",
                "Ostan-e Zanjan",
                "Qom",
                "Sistan and Baluchestan",
                "Yazd",
            ],
            iq: [
                "An Najaf",
                "Dihok",
                "Diyala",
                "Muhafazat al Anbar",
                "Muhafazat al Basrah",
                "Muhafazat al Muthanna",
                "Muhafazat al Qadisiyah",
                "Muhafazat Arbil",
                "Muhafazat as Sulaymaniyah",
                "Muhafazat Babil",
                "Muhafazat Baghdad",
                "Muhafazat Dhi Qar",
                "Muhafazat Karbala'",
                "Muhafazat Kirkuk",
                "Muhafazat Maysan",
                "Muhafazat Ninawa",
                "Muhafazat Salah ad Din",
                "Muhafazat Wasit",
            ],
            ie: ["Connaught", "Leinster", "Munster", "Ulster"],
            il: ["Central District", "Haifa", "Jerusalem", "Northern District", "Southern District", "Tel Aviv District"],
            it: [
                "Abruzzo",
                "Basilicata",
                "Calabria",
                "Campania",
                "Emilia-Romagna",
                "Friuli Venezia Giulia",
                "Lazio",
                "Liguria",
                "Lombardia",
                "Marche",
                "Molise",
                "Piemonte",
                "Puglia",
                "Regione Autonoma Valle d'Aosta",
                "Sardegna",
                "Sicilia",
                "Toscana",
                "Trentino-Alto Adige",
                "Umbria",
                "Veneto",
            ],
            jm: ["Clarendon", "Kingston", "Manchester", "Parish of Hanover", "Parish of Saint Ann", "Portland", "Saint Andrew", "Saint Catherine", "Saint Elizabeth", "Saint James", "Saint Mary", "Saint Thomas", "Trelawny", "Westmoreland"],
            jp: [
                "Aichi-ken",
                "Akita",
                "Aomori-ken",
                "Chiba-ken",
                "Ehime",
                "Fukui",
                "Fukuoka Prefecture",
                "Fukushima-ken",
                "Gif",
                "Gunma-ken",
                "Hiroshima-ken",
                "Hokkaido",
                "Hyogo",
                "Ibaraki",
                "Ishikawa-ken",
                "Iwate",
                "Kagawa-ken",
                "Kagoshima-ken",
                "Kanagawa",
                "Kochi Prefecture",
                "Kumamoto",
                "Kyoto Prefecture",
                "Mie-ken",
                "Miyagi-ken",
                "Miyazaki",
                "Nagano-ken",
                "Nagasaki Prefecture",
                "Nara-ken",
                "Niigata-ken",
                "Oita Prefecture",
                "Okayama-ken",
                "Okinawa",
                "Osaka-f",
                "Saga-ken",
                "Saitama-ken",
                "Shiga",
                "Shimane-ken",
                "Shizuoka",
                "Tochigi",
                "Tokushima-ken",
                "Tokyo Prefecture",
                "Tottori",
                "Toyama-ken",
                "Wakayama",
                "Yamagata-ken",
                "Yamaguchi",
                "Yamanashi",
            ],
            jo: ["Ajloun", "Al Karak", "Al Mafraq", "Amman Governorate", "Irbid", "Jerash", "Muhafazat al 'Aqabah", "Muhafazat al Balqa'", "Muhafazat at Tafilah", "Muhafazat az Zarqa'", "Muhafazat Ma'an", "Muhafazat Madaba"],
            kz: [
                "Aktyubinskaya Oblast'",
                "Almaty Oblysy",
                "Almaty Qalasy",
                "Aqmola Oblysy",
                "Astana Qalasy",
                "Atyrau Oblysy",
                "Baikonur",
                "East Kazakhstan",
                "Mangistauskaya Oblast'",
                "North Kazakhstan",
                "Pavlodar Oblysy",
                "Qaraghandy Oblysy",
                "Qostanay Oblysy",
                "Qyzylorda Oblysy",
                "South Kazakhstan",
                "West Kazakhstan",
                "Zhambyl Oblysy",
            ],
            ke: [
                "Baringo District",
                "Bomet District",
                "Bungoma District",
                "Busia District",
                "Embu District",
                "Garissa District",
                "Homa Bay District",
                "Isiolo District",
                "Kajiado District",
                "Kakamega District",
                "Kericho District",
                "Kiambu District",
                "Kilifi District",
                "Kirinyaga District",
                "Kisii District",
                "Kisum",
                "Kitui District",
                "Kwale District",
                "Laikipia District",
                "Lam",
                "Machakos District",
                "Makueni District",
                "Mandera District",
                "Marakwet District",
                "Marsabit District",
                "Mer",
                "Migori District",
                "Mombasa District",
                "Murang'a District",
                "Nairobi Province",
                "Nakuru District",
                "Nandi South District",
                "Narok District",
                "Nyamira District",
                "Nyandarua District",
                "Nyeri District",
                "Samburu District",
                "Siaya District",
                "Taita Taveta District",
                "Tana River District",
                "Tharaka District",
                "Trans Nzoia District",
                "Turkana District",
                "Uasin Gish",
                "Vihiga District",
                "Wajir District",
                "West Pokot District",
            ],
            ki: ["Gilbert Islands", "Line Islands", "Phoenix Islands"],
            kp: ["Chagang-do", "Hambuk", "Hamnam", "Hwanghae-bukto", "Hwanghae-namdo", "Kangwon-do", "P'yongan-bukto", "P'yongan-namdo", "Pyongyang", "Rason", "Ryanggang"],
            kr: [
                "Busan",
                "Chungcheongbuk-do",
                "Chungcheongnam-do",
                "Daeg",
                "Daejeon",
                "Gangwon-do",
                "Gwangj",
                "Gyeonggi-do",
                "Gyeongsangbuk-do",
                "Gyeongsangnam-do",
                "Incheon",
                "Jeju-do",
                "Jeollabuk-do",
                "Jeollanam-do",
                "Sejong-si",
                "Seoul",
                "Ulsan",
            ],
            kw: ["Al Asimah Governorate", "Muhafazat al Ahmadi", "Muhafazat al Farwaniyah", "Muhafazat al Jahra'", "Muhafazat Hawalli", "Muhafazat Mubarak al Kabir"],
            kg: ["Batken", "Chuyskaya Oblast'", "Gorod Bishkek", "Issyk-Kul Region", "Jalal-Abad oblast", "Naryn oblast", "Osh City", "Osh Oblasty", "Talas"],
            la: [
                "Attap",
                "Bolikhamxai",
                "Champasak",
                "Houaphan",
                "Khammouan",
                "Khoueng Bokeo",
                "Khoueng Oudomxai",
                "Khoueng Phongsali",
                "Khoueng Savannakhet",
                "Khoueng Xekong",
                "Louangnamtha",
                "Luang Prabang Province",
                "Salavan",
                "Vientiane Prefecture",
                "Vientiane Province",
                "Xaignabouli",
                "Xaisomboun Province",
                "Xiangkhouang",
            ],
            lv: [
                "Adazu Novads",
                "Aglonas Novads",
                "Aizkraukles Rajons",
                "Aizputes Novads",
                "Aknistes Novads",
                "Alojas Novads",
                "Alsungas Novads",
                "Aluksnes Novads",
                "Amatas Novads",
                "Apes Novads",
                "Auces Novads",
                "Babites Novads",
                "Baldones Novads",
                "Baltinavas Novads",
                "Balvu Novads",
                "Bauskas Novads",
                "Beverinas Novads",
                "Brocenu Novads",
                "Burtnieku Novads",
                "Carnikavas Novads",
                "Cesu Novads",
                "Cesvaines Novads",
                "Ciblas Novads",
                "Dagdas Novads",
                "Daugavpils",
                "Daugavpils municipality",
                "Dobeles Rajons",
                "Dundagas Novads",
                "Durbes Novads",
                "Engures Novads",
                "Erglu Novads",
                "Garkalne Municipality",
                "Grobinas Novads",
                "Gulbenes Rajons",
                "Iecavas Novads",
                "Ikskiles Novads",
                "Ilukstes Novads",
                "Incukalna Novads",
                "Jaunjelgavas Novads",
                "Jaunpiebalgas Novads",
                "Jaunpils Novads",
                "Jekabpils",
                "Jekabpils Municipality",
                "Jelgava",
                "Jelgavas Rajons",
                "Jurmala",
                "Kandavas Novads",
                "Karsavas Novads",
                "Keguma Novads",
                "Kekavas Novads",
                "Kocenu Novads",
                "Kokneses Novads",
                "Kraslavas Rajons",
                "Krimuldas Novads",
                "Krustpils Novads",
                "Kuldigas Rajons",
                "Lielvardes Novads",
                "Liepaja",
                "Ligatnes Novads",
                "Limbazu Rajons",
                "Livanu Novads",
                "Lubanas Novads",
                "Ludzas Rajons",
                "Madona Municipality",
                "Malpils Novads",
                "Marupes Novads",
                "Mazsalacas Novads",
                "Mersraga Novads",
                "Nauksenu Novads",
                "Neretas Novads",
                "Nicas Novads",
                "Ogres novads",
                "Olaines Novads",
                "Ozolnieku Novads",
                "Pargaujas Novads",
                "Pavilostas Novads",
                "Plavinu Novads",
                "Preili Municipality",
                "Priekules Novads",
                "Priekuli Municipality",
                "Raunas Novads",
                "Rezekne",
                "Rezeknes Novads",
                "Riebinu Novads",
                "Riga",
                "Rojas Novads",
                "Ropazu Novads",
                "Rucavas Novads",
                "Rugaju Novads",
                "Rujienas Novads",
                "Rundales Novads",
                "Salacgrivas Novads",
                "Salas Novads",
                "Salaspils Novads",
                "Saldus Municipality",
                "Saulkrastu Novads",
                "Sejas Novads",
                "Siguldas Novads",
                "Skriveru Novads",
                "Skrundas Novads",
                "Smiltenes Novads",
                "Stopinu Novads",
                "Strencu Novads",
                "Talsi Municipality",
                "Tervetes Novads",
                "Tukuma Rajons",
                "Vainodes Novads",
                "Valka Municipality",
                "Valmiera District",
                "Varaklanu Novads",
                "Varkavas Novads",
                "Vecpiebalgas Novads",
                "Vecumnieku Novads",
                "Ventspils",
                "Ventspils Municipality",
                "Viesites Novads",
                "Vilakas Novads",
                "Vilanu Novads",
                "Zilupes Novads",
            ],
            lb: ["Beyrouth", "Mohafazat Aakkar", "Mohafazat Baalbek-Hermel", "Mohafazat Beqaa", "Mohafazat Liban-Nord", "Mohafazat Liban-Sud", "Mohafazat Mont-Liban", "Mohafazat Nabatiye"],
            ls: ["Berea", "Butha-Buthe", "Leribe District", "Mafeteng District", "Maser", "Mohale's Hoek District", "Mokhotlong", "Qacha's Nek", "Quthing", "Thaba-Tseka"],
            lr: [
                "Bomi County",
                "Bong County",
                "Gbarpolu County",
                "Grand Bassa County",
                "Grand Cape Mount County",
                "Grand Gedeh County",
                "Grand Kru County",
                "Lofa County",
                "Margibi County",
                "Maryland County",
                "Montserrado County",
                "Nimba County",
                "River Cess County",
                "River Gee County",
                "Sinoe County",
            ],
            ly: [
                "Al Jufrah",
                "Al Kufrah",
                "Al Marj",
                "Al Marqab",
                "Darnah",
                "Jabal al Gharbi District",
                "Murzuq",
                "Sha`biyat Nalut",
                "Sha'biyat al Butnan",
                "Sha'biyat al Jabal al Akhdar",
                "Sha'biyat al Jafarah",
                "Sha'biyat al Wahat",
                "Sha'biyat an Nuqat al Khams",
                "Sha'biyat az Zawiyah",
                "Sha'biyat Banghazi",
                "Sha'biyat Ghat",
                "Sha'biyat Misratah",
                "Sha'biyat Sabha",
                "Sha'biyat Wadi al Hayat",
                "Sha'biyat Wadi ash Shati'",
                "Surt",
                "Tripoli",
            ],
            li: ["Balzers", "Eschen", "Gamprin", "Mauren", "Planken", "Ruggell", "Schaan", "Schellenberg", "Triesen", "Triesenberg", "Vaduz"],
            lt: ["Alytus County", "Kaunas County", "Klaipeda County", "Marijampole County", "Panevezys", "Siauliai County", "Taurage County", "Telsiu apskritis", "Utena County", "Vilniaus apskritis"],
            lu: ["Canton d'Echternach", "Canton d'Esch-sur-Alzette", "Capellen", "Clervaux", "Diekirch", "Grevenmacher", "Luxembourg", "Mersch", "Redange", "Remich", "Vianden", "Wiltz"],
            mo: [],
            mk: [
                "Aerodrom",
                "Berovo",
                "Bitola",
                "Bogdanci",
                "Bogovinje",
                "Bosilovo",
                "Brvenica",
                "Butel",
                "Cair",
                "Cesinovo-Oblesevo",
                "Debar",
                "Debarca",
                "Demir Hisar",
                "Demir Kapija",
                "Dolneni",
                "Drugovo",
                "Gazi Baba",
                "Gevgelija",
                "Gostivar",
                "Grad Skopje",
                "Gradsko",
                "Ilinden",
                "Jegunovce",
                "Karbinci",
                "Kavadarci",
                "Kisela Voda",
                "Kratovo",
                "Kriva Palanka",
                "Kumanovo",
                "Lozovo",
                "Makedonska Kamenica",
                "Makedonski Brod",
                "Mogila",
                "Negotino",
                "Novaci",
                "Novo Selo",
                "Ohrid",
                "Opstina Aracinovo",
                "Opstina Caska",
                "Opstina Centar",
                "Opstina Centar Zupa",
                "Opstina Cucer-Sandevo",
                "Opstina Delcevo",
                "Opstina Dojran",
                "Opstina Gjorce Petrov",
                "Opstina Karpos",
                "Opstina Kicevo",
                "Opstina Kocani",
                "Opstina Konce",
                "Opstina Krivogastani",
                "Opstina Krusevo",
                "Opstina Lipkovo",
                "Opstina Mavrovo i Rostusa",
                "Opstina Pehcevo",
                "Opstina Probistip",
                "Opstina Radovis",
                "Opstina Rankovce",
                "Opstina Sopiste",
                "Opstina Staro Nagoricane",
                "Opstina Stip",
                "Opstina Studenicani",
                "Opstina Vevcani",
                "Opstina Vranestica",
                "Opstina Vrapciste",
                "Opstina Zelino",
                "Oslomej",
                "Petrovec",
                "Plasnica",
                "Prilep",
                "Resen",
                "Rosoman",
                "Saraj",
                "Struga",
                "Strumica",
                "Suto Orizari",
                "Sveti Nikole",
                "Tearce",
                "Tetovo",
                "Valandovo",
                "Vasilevo",
                "Veles",
                "Vinica",
                "Zajas",
                "Zelenikovo",
                "Zrnovci",
            ],
            mg: [
                "Alaotra Mangoro Region",
                "Amoron'i Mania Region",
                "Analamanga Region",
                "Analanjirofo Region",
                "Androy Region",
                "Anosy Region",
                "Atsimo-Andrefana Region",
                "Atsimo-Atsinanana Region",
                "Atsinanana Region",
                "Betsiboka Region",
                "Boeny Region",
                "Bongolava Region",
                "Diana Region",
                "Haute Matsiatra Region",
                "Ihorombe Region",
                "Itasy Region",
                "Melaky Region",
                "Menabe Region",
                "Sava Region",
                "Sofia Region",
                "Vakinankaratra Region",
                "Vatovavy Fitovinany Region",
            ],
            mw: ["Central Region", "Northern Region", "Southern Region"],
            my: ["Johor", "Kedah", "Kelantan", "Kuala Lumpur", "Labuan", "Melaka", "Negeri Sembilan", "Pahang", "Perak", "Perlis", "Pulau Pinang", "Putrajaya", "Sabah", "Sarawak", "Selangor", "Terenggan"],
            mv: [
                "Alifu Atholh",
                "Baa Atholh",
                "Dhaalu Atholh",
                "Faafu Atholh",
                "Gaafu Alifu Atholh",
                "Gaafu Dhaalu Atholh",
                "Gnaviyani Atholh",
                "Haa Alifu Atholh",
                "Haa Dhaalu Atholh",
                "Kaafu Atoll",
                "Laamu Atholh",
                "Lhaviyani Atholh",
                "Meemu Atholh",
                "Noonu Atoll",
                "Raa Atholh",
                "Seenu Atholh",
                "Shaviyani Atholh",
                "Southern Ari Atoll",
                "Thaa Atholh",
                "Vaavu Atholh",
            ],
            ml: ["Bamako Region", "Gao Region", "Kayes Region", "Kidal Region", "Koulikoro Region", "Mopti Region", "Segou Region", "Sikasso Region", "Tombouctou Region"],
            mt: [
                "Attard",
                "Balzan",
                "Birkirkara",
                "Birzebbuga",
                "Bormla",
                "Dingli",
                "Ghajnsielem",
                "Hal Gharghur",
                "Hal Ghaxaq",
                "Haz-Zabbar",
                "Haz-Zebbug",
                "Il-Belt Valletta",
                "Il-Birg",
                "Il-Fgura",
                "Il-Fontana",
                "Il-Furjana",
                "Il-Gudja",
                "Il-Gzira",
                "Il-Hamrun",
                "Il-Kalkara",
                "Il-Marsa",
                "Il-Mellieha",
                "Il-Mosta",
                "Il-Munxar",
                "Il-Qala",
                "Il-Qrendi",
                "In-Nadur",
                "In-Naxxar",
                "Ir-Rabat",
                "Is-Siggiewi",
                "Is-Swieqi",
                "Ix-Xaghra",
                "Ix-Xewkija",
                "Ix-Xghajra",
                "Iz-Zebbug",
                "Iz-Zejtun",
                "Iz-Zurrieq",
                "Kirkop",
                "L-Gharb",
                "L-Ghasri",
                "L-Iklin",
                "L-Imdina",
                "L-Imgarr",
                "L-Imqabba",
                "L-Imsida",
                "L-Imtarfa",
                "L-Isla",
                "Lija",
                "Luqa",
                "Marsaskala",
                "Marsaxlokk",
                "Paola",
                "Pembroke",
                "Qormi",
                "Safi",
                "Saint John",
                "Saint Julian's",
                "Saint Lawrence",
                "Saint Lucia",
                "Saint Paul's Bay",
                "Saint Venera",
                "Sannat",
                "Ta' Kercem",
                "Ta' Xbiex",
                "Tal-Pieta",
                "Tarxien",
                "Tas-Sliema",
                "Victoria",
            ],
            mh: [
                "Ailinginae Atoll",
                "Ailinglaplap Atoll",
                "Ailuk Atoll",
                "Arno Atoll",
                "Aur Atoll",
                "Bikar Atoll",
                "Bikini Atoll",
                "Bokak Atoll",
                "Ebon Atoll",
                "Enewetak Atoll",
                "Erikub Atoll",
                "Jabat Island",
                "Jaluit Atoll",
                "Jemo Island",
                "Kili Island",
                "Kwajalein Atoll",
                "Lae Atoll",
                "Lib Island",
                "Likiep Atoll",
                "Majuro Atoll",
                "Maloelap Atoll",
                "Mejit Island",
                "Mili Atoll",
                "Namdrik Atoll",
                "Namu Atoll",
                "Rongelap Atoll",
                "Rongrik Atoll",
                "Taka Atoll",
                "Ujae Atoll",
                "Ujelang Atoll",
                "Utrik Atoll",
                "Wotho Atoll",
                "Wotje Atoll",
            ],
            mq: ["Martinique"],
            mr: [
                "Adrar",
                "Assaba",
                "Brakna",
                "Dakhlet Nouadhibo",
                "Gorgol",
                "Guidimaka",
                "Hodh ech Chargui",
                "Hodh El Gharbi",
                "Inchiri",
                "Nouakchott Nord",
                "Nouakchott Ouest",
                "Nouakchott Sud",
                "Tagant",
                "Tiris Zemmour",
                "Wilaya du Trarza",
            ],
            mu: [
                "Agalega Islands",
                "Black River District",
                "Cargados Carajos",
                "Flacq District",
                "Grand Port District",
                "Moka District",
                "Pamplemousses District",
                "Plaines Wilhems District",
                "Port Louis District",
                "Riviere du Rempart District",
                "Rodrigues",
                "Savanne District",
            ],
            yt: ["Acoua", "Bandraboua", "Bandrele", "Boueni", "Chiconi", "Chirongui", "Dembeni", "Dzaoudzi", "Kani-Keli", "Koungo", "M'Tsangamouji", "Mamoudzo", "Mtsamboro", "Ouangani", "Pamandzi", "Sada", "Tsingoni"],
            mx: [
                "Ciudad de Mexico",
                "Estado de Aguascalientes",
                "Estado de Baja California",
                "Estado de Baja California Sur",
                "Estado de Campeche",
                "Estado de Chiapas",
                "Estado de Chihuahua",
                "Estado de Coahuila de Zaragoza",
                "Estado de Colima",
                "Estado de Durango",
                "Estado de Guanajuato",
                "Estado de Guerrero",
                "Estado de Hidalgo",
                "Estado de Jalisco",
                "Estado de Mexico",
                "Estado de Michoacan de Ocampo",
                "Estado de Morelos",
                "Estado de Nayarit",
                "Estado de Nuevo Leon",
                "Estado de Oaxaca",
                "Estado de Puebla",
                "Estado de Queretaro",
                "Estado de Quintana Roo",
                "Estado de San Luis Potosi",
                "Estado de Sinaloa",
                "Estado de Sonora",
                "Estado de Tabasco",
                "Estado de Tamaulipas",
                "Estado de Tlaxcala",
                "Estado de Veracruz-Llave",
                "Estado de Yucatan",
                "Estado de Zacatecas",
            ],
            md: [
                "Anenii Noi",
                "Basarabeasca",
                "Briceni",
                "Cantemir",
                "Cimislia",
                "Criuleni",
                "Donduseni",
                "Falesti",
                "Floresti",
                "Gagauzia",
                "Glodeni",
                "Hincesti",
                "Ialoveni",
                "Leova",
                "Municipiul Balti",
                "Municipiul Bender",
                "Municipiul Chisina",
                "Nisporeni",
                "Orhei",
                "Raionul Cahul",
                "Raionul Calarasi",
                "Raionul Causeni",
                "Raionul Drochia",
                "Raionul Dubasari",
                "Raionul Edinet",
                "Raionul Ocnita",
                "Raionul Soroca",
                "Raionul Stefan Voda",
                "Raionul Straseni",
                "Raionul Ungheni",
                "Rezina",
                "Riscani",
                "Singerei",
                "Soldanesti",
                "Taraclia",
                "Telenesti",
                "Unitatea Teritoriala din Stinga Nistrului",
            ],
            mc: ["Commune de Monaco"],
            mn: [
                "Arhangay Aymag",
                "Bayan-OElgiy Aymag",
                "Bayanhongor Aymag",
                "Bulgan",
                "Darhan-Uul Aymag",
                "Dornod Aymag",
                "Dornogovi Aymag",
                "Dundgovi Aymag",
                "Dzavhan Aymag",
                "Govi-Altay Aymag",
                "Govi-Sumber",
                "Hentiy Aymag",
                "Hovd",
                "Hovsgol Aymag",
                "OEmnoegovi Province",
                "OEvoerhangay Aymag",
                "Orhon Aymag",
                "Selenge Aymag",
                "Suhbaatar Aymag",
                "Tov Aymag",
                "Ulaanbaatar Hot",
                "Uvs Aymag",
            ],
            ms: ["Parish of Saint Anthony", "Parish of Saint Georges", "Parish of Saint Peter"],
            ma: [
                "Beni Mellal-Khenifra",
                "Casablanca-Settat",
                "Dakhla-Oued Ed-Dahab",
                "Draa-Tafilalet",
                "Fes-Meknes",
                "Guelmim-Oued Noun",
                "Laayoune-Sakia El Hamra",
                "Marrakesh-Safi",
                "Oriental",
                "Rabat-Sale-Kenitra",
                "Souss-Massa",
                "Tanger-Tetouan-Al Hoceima",
            ],
            mz: ["Cabo Delgado Province", "Cidade de Maputo", "Gaza Province", "Inhambane Province", "Manica Province", "Maputo Province", "Nampula", "Niassa Province", "Provincia de Zambezia", "Sofala Province", "Tete"],
            mm: [
                "Ayeyawady Region",
                "Bago Region",
                "Chin State",
                "Kachin State",
                "Kayah State",
                "Kayin State",
                "Magway Region",
                "Mandalay Region",
                "Mon State",
                "Nay Pyi Taw",
                "Rakhine State",
                "Sagaing Region",
                "Shan State",
                "Taninthayi Region",
                "Yangon Region",
            ],
            na: ["Erongo", "Hardap", "Karas", "Kavango East Region", "Kavango West Region", "Khomas", "Kunene", "Ohangwena", "Omaheke", "Omusati", "Oshana", "Oshikoto", "Otjozondjupa", "Zambezi Region"],
            nr: [
                "Aiwo District",
                "Anabar District",
                "Anetan District",
                "Anibare District",
                "Baiti District",
                "Boe District",
                "Buada District",
                "Denigomodu District",
                "Ewa District",
                "Ijuw District",
                "Meneng District",
                "Nibok District",
                "Uaboe District",
                "Yaren",
            ],
            np: ["Madhya Pashchimanchal", "Madhyamanchal", "Pashchimanchal", "Patheka", "Purwanchal", "Sudur Pashchimanchal"],
            nl: [
                "Provincie Drenthe",
                "Provincie Flevoland",
                "Provincie Friesland",
                "Provincie Gelderland",
                "Provincie Groningen",
                "Provincie Limburg",
                "Provincie Noord-Brabant",
                "Provincie Noord-Holland",
                "Provincie Overijssel",
                "Provincie Utrecht",
                "Provincie Zeeland",
                "Provincie Zuid-Holland",
            ],
            an: [],
            nc: ["Province des iles Loyaute", "Province Nord", "Province Sud"],
            nz: [
                "Auckland",
                "Bay of Plenty",
                "Canterbury",
                "Chatham Islands",
                "Gisborne",
                "Hawke's Bay",
                "Manawatu-Wanganui",
                "Marlborough",
                "Nelson",
                "Northland",
                "Otago",
                "Southland",
                "Taranaki",
                "Tasman",
                "Waikato",
                "Wellington",
                "West Coast",
            ],
            ni: [
                "Costa Caribe Sur",
                "Departamento de Boaco",
                "Departamento de Carazo",
                "Departamento de Chinandega",
                "Departamento de Chontales",
                "Departamento de Esteli",
                "Departamento de Granada",
                "Departamento de Jinotega",
                "Departamento de Leon",
                "Departamento de Madriz",
                "Departamento de Managua",
                "Departamento de Masaya",
                "Departamento de Matagalpa",
                "Departamento de Nueva Segovia",
                "Departamento de Rio San Juan",
                "Departamento de Rivas",
                "North Atlantic Autonomous Region (RAAN)",
            ],
            ne: ["Agadez", "Diffa", "Dosso Region", "Maradi", "Niamey", "Tahoua", "Tillaberi Region", "Zinder"],
            ng: [
                "Abia State",
                "Adamawa State",
                "Akwa Ibom State",
                "Anambra State",
                "Bauchi State",
                "Bayelsa State",
                "Benue State",
                "Borno State",
                "Cross River State",
                "Delta State",
                "Ebonyi State",
                "Edo",
                "Ekiti State",
                "Enugu State",
                "Federal Capital Territory",
                "Gombe State",
                "Imo State",
                "Jigawa State",
                "Kaduna State",
                "Kano State",
                "Katsina State",
                "Kebbi State",
                "Kogi State",
                "Kwara State",
                "Lagos State",
                "Nasarawa State",
                "Niger State",
                "Ogun State",
                "Ondo State",
                "Osun State",
                "Oyo State",
                "Plateau State",
                "Rivers State",
                "Sokoto State",
                "Taraba State",
                "Yobe State",
                "Zamfara State",
            ],
            nu: [],
            nf: [],
            mp: ["Northern Islands Municipality", "Rota Municipality", "Saipan Municipality", "Tinian Municipality"],
            no: [
                "Akershus fylke",
                "Aust-Agder fylke",
                "Buskerud fylke",
                "Finnmark Fylke",
                "Hedmark fylke",
                "Hordaland Fylke",
                "More og Romsdal fylke",
                "Nord-Trondelag Fylke",
                "Nordland Fylke",
                "Oppland fylke",
                "Oslo County",
                "Ostfold fylke",
                "Rogaland Fylke",
                "Sogn og Fjordane Fylke",
                "Sor-Trondelag Fylke",
                "Telemark fylke",
                "Troms Fylke",
                "Vest-Agder Fylke",
                "Vestfold fylke",
            ],
            gg: ["Alderney", "Castel", "Forest", "Saint Andrew", "Saint Martin", "Saint Peter Port", "Saint Pierre du Bois", "Saint Sampson", "Saint Saviour", "Torteval", "Vale"],
            om: [
                "Al Batinah North Governorate",
                "Al Batinah South Governorate",
                "Ash Sharqiyah South",
                "Az Zahirah",
                "Muhafazat ad Dakhiliyah",
                "Muhafazat al Buraymi",
                "Muhafazat al Wusta",
                "Muhafazat Masqat",
                "Muhafazat Shamal ash Sharqiyah",
                "Muhafazat Zufar",
                "Musandam",
            ],
            pk: ["Azad Kashmir", "Balochistan", "Federally Administered Tribal Areas", "Gilgit-Baltistan", "Islamabad", "Khyber Pakhtunkhwa Province", "Punjab Province", "Sindh"],
            pw: [
                "State of Aimeliik",
                "State of Airai",
                "State of Angaur",
                "State of Hatohobei",
                "State of Kayangel",
                "State of Koror",
                "State of Melekeok",
                "State of Ngaraard",
                "State of Ngarchelong",
                "State of Ngardma",
                "State of Ngatpang",
                "State of Ngchesar",
                "State of Ngeremlengui",
                "State of Ngiwal",
                "State of Peleli",
                "State of Sonsorol",
            ],
            ps: ["Gaza Strip", "West Bank"],
            pa: [
                "Embera-Wounaan",
                "Guna Yala",
                "Ngoebe-Bugle",
                "Panama Oeste",
                "Provincia de Bocas del Toro",
                "Provincia de Chiriqui",
                "Provincia de Cocle",
                "Provincia de Colon",
                "Provincia de Herrera",
                "Provincia de Los Santos",
                "Provincia de Panama",
                "Provincia de Veraguas",
                "Provincia del Darien",
            ],
            pg: [
                "Bougainville",
                "Central Province",
                "Chimbu Province",
                "East New Britain Province",
                "East Sepik Province",
                "Eastern Highlands Province",
                "Enga Province",
                "Gulf Province",
                "Hela",
                "Jiwaka",
                "Madang Province",
                "Manus Province",
                "Milne Bay Province",
                "Morobe Province",
                "National Capital District",
                "New Ireland Province",
                "Northern Province",
                "Southern Highlands Province",
                "West New Britain Province",
                "West Sepik Province",
                "Western Highlands Province",
                "Western Province",
            ],
            py: [
                "Asuncion",
                "Departamento Central",
                "Departamento de Alto Paraguay",
                "Departamento de Boqueron",
                "Departamento de Caaguaz",
                "Departamento de Caazapa",
                "Departamento de Canindey",
                "Departamento de Concepcion",
                "Departamento de Itapua",
                "Departamento de la Cordillera",
                "Departamento de Misiones",
                "Departamento de Neembuc",
                "Departamento de Paraguari",
                "Departamento de Presidente Hayes",
                "Departamento de San Pedro",
                "Departamento del Alto Parana",
                "Departamento del Amambay",
                "Departamento del Guaira",
            ],
            pe: [
                "Amazonas",
                "Ancash",
                "Apurimac",
                "Arequipa",
                "Ayacucho",
                "Cajamarca",
                "Callao",
                "Cusco",
                "Departamento de Moquegua",
                "Huancavelica",
                "Ica",
                "Junin",
                "La Libertad",
                "Lambayeque",
                "Lima",
                "Loreto",
                "Madre de Dios",
                "Pasco",
                "Piura",
                "Provincia de Lima",
                "Puno",
                "Region de Huanuco",
                "Region de San Martin",
                "Tacna",
                "Tumbes",
                "Ucayali",
            ],
            ph: [
                "Autonomous Region in Muslim Mindanao",
                "Bicol",
                "Cagayan Valley",
                "Calabarzon",
                "Caraga",
                "Central Luzon",
                "Central Visayas",
                "Cordillera Administrative Region",
                "Davao",
                "Eastern Visayas",
                "Ilocos",
                "Mimaropa",
                "National Capital Region",
                "Negros Island Region",
                "Northern Mindanao",
                "Soccsksargen",
                "Western Visayas",
                "Zamboanga Peninsula",
            ],
            pn: [],
            pl: [
                "Wojewodztwo Dolnoslaskie",
                "Wojewodztwo Kujawsko-Pomorskie",
                "Wojewodztwo Lodzkie",
                "Wojewodztwo Lubelskie",
                "Wojewodztwo Lubuskie",
                "Wojewodztwo Malopolskie",
                "Wojewodztwo Mazowieckie",
                "Wojewodztwo Opolskie",
                "Wojewodztwo Podkarpackie",
                "Wojewodztwo Podlaskie",
                "Wojewodztwo Pomorskie",
                "Wojewodztwo Slaskie",
                "Wojewodztwo Swietokrzyskie",
                "Wojewodztwo Warminsko-Mazurskie",
                "Wojewodztwo Wielkopolskie",
                "Wojewodztwo Zachodniopomorskie",
            ],
            pt: [
                "Azores",
                "Distrito da Guarda",
                "Distrito de Aveiro",
                "Distrito de Beja",
                "Distrito de Braga",
                "Distrito de Braganca",
                "Distrito de Castelo Branco",
                "Distrito de Coimbra",
                "Distrito de Evora",
                "Distrito de Faro",
                "Distrito de Leiria",
                "Distrito de Lisboa",
                "Distrito de Portalegre",
                "Distrito de Santarem",
                "Distrito de Setubal",
                "Distrito de Viana do Castelo",
                "Distrito de Vila Real",
                "Distrito de Vise",
                "Distrito do Porto",
                "Madeira",
            ],
            qa: ["Al Wakrah", "Baladiyat ad Dawhah", "Baladiyat al Khawr wa adh Dhakhirah", "Baladiyat ar Rayyan", "Baladiyat ash Shamal", "Baladiyat az Za'ayin", "Baladiyat Umm Salal"],
            re: ["Reunion"],
            ro: [
                "Arad",
                "Bihor",
                "Bucuresti",
                "Constanta",
                "Covasna",
                "Dolj",
                "Giurgi",
                "Gorj",
                "Harghita",
                "Hunedoara",
                "Ilfov",
                "Judetul Alba",
                "Judetul Arges",
                "Judetul Baca",
                "Judetul Bistrita-Nasaud",
                "Judetul Botosani",
                "Judetul Braila",
                "Judetul Brasov",
                "Judetul Buza",
                "Judetul Calarasi",
                "Judetul Caras-Severin",
                "Judetul Cluj",
                "Judetul Dambovita",
                "Judetul Galati",
                "Judetul Ialomita",
                "Judetul Iasi",
                "Judetul Maramures",
                "Judetul Mehedinti",
                "Judetul Mures",
                "Judetul Neamt",
                "Judetul Salaj",
                "Judetul Sibi",
                "Judetul Timis",
                "Judetul Valcea",
                "Olt",
                "Prahova",
                "Satu Mare",
                "Suceava",
                "Teleorman",
                "Tulcea",
                "Vaslui",
                "Vrancea",
            ],
            ru: [
                "Altayskiy Kray",
                "Amurskaya Oblast'",
                "Arkhangel'skaya Oblast'",
                "Astrakhanskaya Oblast'",
                "Bashkortostan",
                "Belgorodskaya Oblast'",
                "Bryanskaya Oblast'",
                "Chechenskaya Respublika",
                "Chelyabinskaya Oblast'",
                "Chukotskiy Avtonomnyy Okrug",
                "Chuvashskaya Respublika",
                "Dagestan",
                "Irkutskaya Oblast'",
                "Ivanovskaya Oblast'",
                "Kabardino-Balkarskaya Respublika",
                "Kaliningradskaya Oblast'",
                "Kalmykiya",
                "Kaluzhskaya Oblast'",
                "Kamtchatski Kray",
                "Karachayevo-Cherkesiya",
                "Kemerovskaya Oblast'",
                "Khabarovskiy Kray",
                "Khanty-Mansiyskiy Avtonomnyy Okrug-Yugra",
                "Kirovskaya Oblast'",
                "Komi",
                "Kostromskaya Oblast'",
                "Krasnodarskiy Kray",
                "Krasnoyarskiy Kray",
                "Kurganskaya Oblast'",
                "Kurskaya Oblast'",
                "Leningradskaya Oblast'",
                "Lipetskaya Oblast'",
                "Magadanskaya Oblast'",
                "Moscow Oblast",
                "Moskva",
                "Murmanskaya Oblast'",
                "Nenetskiy Avtonomnyy Okrug",
                "Nizhegorodskaya Oblast'",
                "North Ossetia",
                "Novgorodskaya Oblast'",
                "Novosibirskaya Oblast'",
                "Omskaya Oblast'",
                "Orenburgskaya Oblast'",
                "Orlovskaya Oblast'",
                "Penzenskaya Oblast'",
                "Perm Krai",
                "Primorskiy Kray",
                "Pskovskaya Oblast'",
                "Respublika Adygeya",
                "Respublika Altay",
                "Respublika Buryatiya",
                "Respublika Ingushetiya",
                "Respublika Kareliya",
                "Respublika Khakasiya",
                "Respublika Mariy-El",
                "Respublika Mordoviya",
                "Respublika Sakha (Yakutiya)",
                "Respublika Tyva",
                "Rostovskaya Oblast'",
                "Ryazanskaya Oblast'",
                "Sakhalinskaya Oblast'",
                "Samarskaya Oblast'",
                "Sankt-Peterburg",
                "Saratovskaya Oblast'",
                "Smolenskaya Oblast'",
                "Stavropol'skiy Kray",
                "Sverdlovskaya Oblast'",
                "Tambovskaya Oblast'",
                "Tatarstan",
                "Tomskaya Oblast'",
                "Tul'skaya Oblast'",
                "Tverskaya Oblast'",
                "Tyumenskaya Oblast'",
                "Udmurtskaya Respublika",
                "Ulyanovsk Oblast",
                "Vladimirskaya Oblast'",
                "Volgogradskaya Oblast'",
                "Vologodskaya Oblast'",
                "Voronezhskaya Oblast'",
                "Yamalo-Nenetskiy Avtonomnyy Okrug",
                "Yaroslavskaya Oblast'",
                "Yevreyskaya Avtonomnaya Oblast'",
                "Zabaykal'skiy Kray",
            ],
            rw: ["Eastern Province", "Kigali Province", "Northern Province", "Southern Province", "Western Province"],
            gs: [],
            sh: ["Ascension", "Saint Helena", "Tristan da Cunha"],
            kn: [
                "Christ Church Nichola Town",
                "Saint Anne Sandy Point",
                "Saint George Basseterre",
                "Saint George Gingerland",
                "Saint James Windward",
                "Saint John Capesterre",
                "Saint John Figtree",
                "Saint Mary Cayon",
                "Saint Paul Capesterre",
                "Saint Paul Charlestown",
                "Saint Peter Basseterre",
                "Saint Thomas Lowland",
                "Saint Thomas Middle Island",
                "Trinity Palmetto Point",
            ],
            lc: ["Anse-la-Raye", "Canaries", "Castries", "Choiseul", "Dennery", "Gros-Islet", "Laborie", "Micoud", "Soufriere", "Vieux-Fort"],
            pm: ["Commune de Saint-Pierre", "Miquelon-Langlade"],
            vc: ["Grenadines", "Parish of Charlotte", "Parish of Saint Andrew", "Parish of Saint David", "Parish of Saint George", "Parish of Saint Patrick"],
            ws: ["A'ana", "Aiga-i-le-Tai", "Atua", "Fa'asaleleaga", "Gaga'emauga", "Gagaifomauga", "Palauli", "Satupa'itea", "Tuamasaga", "Va'a-o-Fonoti", "Vaisigano"],
            sm: ["Castello di Acquaviva", "Castello di Borgo Maggiore", "Castello di Domagnano", "Castello di Faetano", "Castello di Fiorentino", "Castello di Montegiardino", "Castello di San Marino Citta", "Chiesanuova", "Serravalle"],
            st: ["Principe", "Sao Tome"],
            sa: [
                "Al Jawf",
                "Al Madinah al Munawwarah",
                "Al Mintaqah ash Sharqiyah",
                "Al-Qassim Province",
                "Hai'l Region",
                "Jizan Region",
                "Makkah Province",
                "Mintaqat 'Asir",
                "Mintaqat al Bahah",
                "Mintaqat al Hudud ash Shamaliyah",
                "Mintaqat ar Riyad",
                "Mintaqat Najran",
                "Mintaqat Tabuk",
            ],
            sn: ["Dakar", "Diourbel", "Fatick", "Kaolack", "Kolda", "Louga", "Matam", "Region de Kaffrine", "Region de Kedougo", "Region de Sedhio", "Region de Thies", "Saint-Louis", "Tambacounda", "Ziguinchor"],
            sc: [
                "Anse aux Pins",
                "Anse Boilea",
                "Anse Etoile",
                "Anse Royale",
                "Au Cap",
                "Baie Lazare",
                "Baie Sainte Anne",
                "Beau Vallon",
                "Bel Air",
                "Bel Ombre",
                "Cascade",
                "English River",
                "Glacis",
                "Grand Anse Mahe",
                "Grand Anse Praslin",
                "Inner Islands",
                "Les Mamelles",
                "Mont Buxton",
                "Mont Fleuri",
                "Plaisance",
                "Pointe Larue",
                "Port Glaud",
                "Roche Caiman",
                "Saint Louis",
                "Takamaka",
            ],
            sl: ["Eastern Province", "Northern Province", "Southern Province", "Western Area"],
            sg: [
                "Central Singapore Community Development Council",
                "North East Community Development Region",
                "North West Community Development Council",
                "South East Community Development Council",
                "South West Community Development Council",
            ],
            sk: ["Banska Bystrica", "Bratislava", "Kosice", "Nitra", "Presov", "Trencin", "Trnava", "Zilina"],
            si: [
                "Ankaran",
                "Beltinci",
                "Benedikt",
                "Bistrica ob Sotli",
                "Bloke",
                "Bohinj",
                "Borovnica",
                "Brda",
                "Brezovica",
                "Cankova",
                "Celje",
                "Cerklje na Gorenjskem",
                "Cerknica",
                "Cerkno",
                "Cerkvenjak",
                "Cirkulane",
                "Destrnik",
                "Dobje",
                "Dobrepolje",
                "Dobrna",
                "Dobrova-Polhov Gradec",
                "Dobrovnik",
                "Dol pri Ljubljani",
                "Dolenjske Toplice",
                "Dornava",
                "Dravograd",
                "Duplek",
                "Gorenja Vas-Poljane",
                "Gorje",
                "Gornja Radgona",
                "Gornji Grad",
                "Gornji Petrovci",
                "Grad",
                "Grosuplje",
                "Hajdina",
                "Hodos",
                "Horjul",
                "Hrastnik",
                "Hrpelje-Kozina",
                "Idrija",
                "Ig",
                "Ilirska Bistrica",
                "Izola",
                "Jesenice",
                "Jezersko",
                "Kamnik",
                "Kanal",
                "Kobilje",
                "Komen",
                "Komenda",
                "Koper",
                "Kostanjevica na Krki",
                "Kostel",
                "Kozje",
                "Kranj",
                "Kranjska Gora",
                "Kungota",
                "Kuzma",
                "Lenart",
                "Lendava",
                "Litija",
                "Ljubno",
                "Ljutomer",
                "Log-Dragomer",
                "Logatec",
                "Lovrenc na Pohorj",
                "Lukovica",
                "Makole",
                "Maribor",
                "Markovci",
                "Medvode",
                "Mestna Obcina Ljubljana",
                "Mestna Obcina Novo mesto",
                "Metlika",
                "Miren-Kostanjevica",
                "Mirna",
                "Mislinja",
                "Mokronog-Trebelno",
                "Moravske Toplice",
                "Mozirje",
                "Murska Sobota",
                "Muta",
                "Naklo",
                "Nazarje",
                "Nova Gorica",
                "Obcina Ajdovscina",
                "Obcina Apace",
                "Obcina Bled",
                "Obcina Bovec",
                "Obcina Braslovce",
                "Obcina Brezice",
                "Obcina Crensovci",
                "Obcina Crna na Koroskem",
                "Obcina Crnomelj",
                "Obcina Divaca",
                "Obcina Domzale",
                "Obcina Gorisnica",
                "Obcina Hoce-Slivnica",
                "Obcina Ivancna Gorica",
                "Obcina Jursinci",
                "Obcina Kidricevo",
                "Obcina Kobarid",
                "Obcina Kocevje",
                "Obcina Krizevci",
                "Obcina Krsko",
                "Obcina Lasko",
                "Obcina Loska Dolina",
                "Obcina Loski Potok",
                "Obcina Luce",
                "Obcina Majsperk",
                "Obcina Menges",
                "Obcina Mezica",
                "Obcina Miklavz na Dravskem Polj",
                "Obcina Mirna Pec",
                "Obcina Moravce",
                "Obcina Ormoz",
                "Obcina Podcetrtek",
                "Obcina Poljcane",
                "Obcina Race-Fram",
                "Obcina Radece",
                "Obcina Ravne na Koroskem",
                "Obcina Razkrizje",
                "Obcina Recica ob Savinji",
                "Obcina Rence-Vogrsko",
                "Obcina Rogaska Slatina",
                "Obcina Rogasovci",
                "Obcina Ruse",
                "Obcina Salovci",
                "Obcina Semic",
                "Obcina Sempeter-Vrtojba",
                "Obcina Sencur",
                "Obcina Sentilj",
                "Obcina Sentjernej",
                "Obcina Sentjur",
                "Obcina Sentrupert",
                "Obcina Sezana",
                "Obcina Skocjan",
                "Obcina Skofja Loka",
                "Obcina Skofljica",
                "Obcina Smarje pri Jelsah",
                "Obcina Smarjeske Toplice",
                "Obcina Smartno ob Paki",
                "Obcina Smartno pri Litiji",
                "Obcina Sodrazica",
                "Obcina Solcava",
                "Obcina Sostanj",
                "Obcina Sredisce ob Dravi",
                "Obcina Starse",
                "Obcina Store",
                "Obcina Straza",
                "Obcina Sveti Andraz v Slovenskih Goricah",
                "Obcina Sveti Jurij ob Scavnici",
                "Obcina Sveti Tomaz",
                "Obcina Tisina",
                "Obcina Tolmin",
                "Obcina Trnovska vas",
                "Obcina Trzic",
                "Obcina Turnisce",
                "Obcina Velike Lasce",
                "Obcina Verzej",
                "Obcina Zalec",
                "Obcina Zavrc",
                "Obcina Zelezniki",
                "Obcina Zetale",
                "Obcina Ziri",
                "Obcina Zirovnica",
                "Obcina Zrece",
                "Obcina Zuzemberk",
                "Odranci",
                "Oplotnica",
                "Osilnica",
                "Pesnica",
                "Piran",
                "Pivka",
                "Podlehnik",
                "Podvelka",
                "Polzela",
                "Postojna",
                "Prebold",
                "Preddvor",
                "Prevalje",
                "Ptuj",
                "Puconci",
                "Radenci",
                "Radlje ob Dravi",
                "Radovljica",
                "Ribnica",
                "Ribnica na Pohorj",
                "Rogatec",
                "Selnica ob Dravi",
                "Sevnica",
                "Slovenj Gradec",
                "Slovenska Bistrica",
                "Slovenske Konjice",
                "Sveta Ana",
                "Sveta Trojica v Slovenskih Goricah",
                "Sveti Jurij v Slovenskih Goricah",
                "Tabor",
                "Trbovlje",
                "Trebnje",
                "Trzin",
                "Velenje",
                "Velika Polana",
                "Videm",
                "Vipava",
                "Vitanje",
                "Vodice",
                "Vojnik",
                "Vransko",
                "Vrhnika",
                "Vuzenica",
                "Zagorje ob Savi",
            ],
            sb: ["Central Province", "Choiseul", "Guadalcanal Province", "Honiara", "Isabel Province", "Makira-Ulawa Province", "Malaita Province", "Rennell and Bellona", "Temotu Province", "Western Province"],
            so: [
                "Gobolka Awdal",
                "Gobolka Bakool",
                "Gobolka Banaadir",
                "Gobolka Bari",
                "Gobolka Bay",
                "Gobolka Galguduud",
                "Gobolka Gedo",
                "Gobolka Hiiraan",
                "Gobolka Jubbada Dhexe",
                "Gobolka Jubbada Hoose",
                "Gobolka Mudug",
                "Gobolka Nugaal",
                "Gobolka Sanaag",
                "Gobolka Shabeellaha Dhexe",
                "Gobolka Shabeellaha Hoose",
                "Gobolka Sool",
                "Gobolka Togdheer",
                "Gobolka Woqooyi Galbeed",
            ],
            za: ["Eastern Cape", "Free State", "Gauteng", "Limpopo", "Mpumalanga", "Province of KwaZulu-Natal", "Province of North West", "Province of Northern Cape", "Western Cape"],
            es: [
                "Andalucia",
                "Aragon",
                "Canary Islands",
                "Cantabria",
                "Castilla y Leon",
                "Castilla-La Mancha",
                "Catalunya",
                "Ceuta",
                "Comunidad de Madrid",
                "Comunitat Autonoma de les Illes Balears",
                "Comunitat Valenciana",
                "Euskal Autonomia Erkidegoa",
                "Extremadura",
                "Galicia",
                "La Rioja",
                "Melilla",
                "Navarra",
                "Principality of Asturias",
                "Region de Murcia",
            ],
            lk: ["Central Province", "Eastern Province", "North Central Province", "North Western Province", "Northern Province", "Province of Sabaragamuwa", "Province of Uva", "Southern Province", "Western Province"],
            sd: [
                "Al Jazirah State",
                "Al Qadarif State",
                "Blue Nile",
                "Central Darfur State",
                "East Darfur",
                "Kassala State",
                "Khartoum",
                "North Darfur",
                "North Kordofan",
                "Northern",
                "Red Sea",
                "River Nile",
                "Sennar",
                "South Darfur",
                "South Kordofan",
                "West Darfur",
                "West Kordofan State",
                "White Nile",
            ],
            sr: ["Distrikt Brokopondo", "Distrikt Commewijne", "Distrikt Coronie", "Distrikt Marowijne", "Distrikt Nickerie", "Distrikt Para", "Distrikt Paramaribo", "Distrikt Saramacca", "Distrikt Sipaliwini", "Distrikt Wanica"],
            sj: ["Jan Mayen", "Svalbard"],
            sz: ["Hhohho District", "Lubombo District", "Manzini District", "Shiselweni District"],
            se: [
                "Blekinge",
                "Dalarna",
                "Gaevleborgs laen",
                "Gotland",
                "Halland",
                "Jaemtlands laen",
                "Joenkoepings laen",
                "Kalmar",
                "Kronoberg",
                "Norrbotten",
                "OErebro laen",
                "OEstergoetlands laen",
                "Skane laen",
                "Soedermanlands laen",
                "Stockholm",
                "Uppsala",
                "Vaermlands laen",
                "Vaesterbottens laen",
                "Vaesternorrlands laen",
                "Vaestmanlands laen",
                "Vaestra Goetalands laen",
            ],
            ch: [
                "Canton de Berne",
                "Canton de Fribourg",
                "Canton de Vaud",
                "Canton du Valais",
                "Geneve",
                "Jura",
                "Kanton Aarga",
                "Kanton Appenzell Ausserrhoden",
                "Kanton Appenzell Innerrhoden",
                "Kanton Basel-Landschaft",
                "Kanton Basel-Stadt",
                "Kanton Glarus",
                "Kanton Graubunden",
                "Kanton Luzern",
                "Kanton Nidwalden",
                "Kanton Obwalden",
                "Kanton Schaffhausen",
                "Kanton Schwyz",
                "Kanton Solothurn",
                "Kanton St. Gallen",
                "Kanton Thurga",
                "Kanton Uri",
                "Kanton Zug",
                "Kanton Zurich",
                "Neuchatel",
                "Ticino",
            ],
            sy: [
                "Al-Hasakah Governorate",
                "Aleppo Governorate",
                "Ar-Raqqah Governorate",
                "As-Suwayda Governorate",
                "Damascus Governorate",
                "Daraa Governorate",
                "Deir ez-Zor Governorate",
                "Hama Governorate",
                "Homs Governorate",
                "Idlib Governorate",
                "Latakia Governorate",
                "Muhafazat Rif Dimashq",
                "Quneitra Governorate",
                "Tartus Governorate",
            ],
            tw: ["Fukien", "Kaohsiung", "Taipei", "Taiwan"],
            tj: ["Districts of Republican Subordination", "Dushanbe", "Viloyati Khatlon", "Viloyati Mukhtori Kuhistoni Badakhshon", "Viloyati Sughd"],
            tz: [
                "Arusha Region",
                "Coast Region",
                "Dar es Salaam Region",
                "Dodoma Region",
                "Geita Region",
                "Iringa Region",
                "Kagera Region",
                "Katavi Region",
                "Kigoma Region",
                "Kilimanjaro Region",
                "Lindi Region",
                "Manyara Region",
                "Mara Region",
                "Mbeya Region",
                "Morogoro Region",
                "Mtwara Region",
                "Mwanza Region",
                "Njombe Region",
                "Pemba North Region",
                "Pemba South Region",
                "Rukwa Region",
                "Ruvuma Region",
                "Shinyanga Region",
                "Simiyu Region",
                "Singida Region",
                "Tabora Region",
                "Tanga Region",
                "Zanzibar Central/South Region",
                "Zanzibar North Region",
                "Zanzibar Urban/West Region",
            ],
            th: [
                "Bangkok",
                "Changwat Amnat Charoen",
                "Changwat Ang Thong",
                "Changwat Bueng Kan",
                "Changwat Buri Ram",
                "Changwat Chachoengsao",
                "Changwat Chai Nat",
                "Changwat Chaiyaphum",
                "Changwat Chanthaburi",
                "Changwat Chiang Rai",
                "Changwat Chon Buri",
                "Changwat Chumphon",
                "Changwat Kalasin",
                "Changwat Kamphaeng Phet",
                "Changwat Kanchanaburi",
                "Changwat Khon Kaen",
                "Changwat Krabi",
                "Changwat Lampang",
                "Changwat Lamphun",
                "Changwat Loei",
                "Changwat Lop Buri",
                "Changwat Mae Hong Son",
                "Changwat Maha Sarakham",
                "Changwat Mukdahan",
                "Changwat Nakhon Nayok",
                "Changwat Nakhon Pathom",
                "Changwat Nakhon Phanom",
                "Changwat Nakhon Ratchasima",
                "Changwat Nakhon Sawan",
                "Changwat Nakhon Si Thammarat",
                "Changwat Nan",
                "Changwat Narathiwat",
                "Changwat Nong Bua Lamph",
                "Changwat Nong Khai",
                "Changwat Nonthaburi",
                "Changwat Pathum Thani",
                "Changwat Pattani",
                "Changwat Phangnga",
                "Changwat Phatthalung",
                "Changwat Phayao",
                "Changwat Phetchabun",
                "Changwat Phetchaburi",
                "Changwat Phichit",
                "Changwat Phitsanulok",
                "Changwat Phra Nakhon Si Ayutthaya",
                "Changwat Phrae",
                "Changwat Prachin Buri",
                "Changwat Prachuap Khiri Khan",
                "Changwat Ranong",
                "Changwat Ratchaburi",
                "Changwat Rayong",
                "Changwat Roi Et",
                "Changwat Sa Kaeo",
                "Changwat Sakon Nakhon",
                "Changwat Samut Prakan",
                "Changwat Samut Sakhon",
                "Changwat Samut Songkhram",
                "Changwat Saraburi",
                "Changwat Satun",
                "Changwat Si Sa Ket",
                "Changwat Sing Buri",
                "Changwat Songkhla",
                "Changwat Sukhothai",
                "Changwat Suphan Buri",
                "Changwat Surat Thani",
                "Changwat Surin",
                "Changwat Tak",
                "Changwat Trang",
                "Changwat Trat",
                "Changwat Ubon Ratchathani",
                "Changwat Udon Thani",
                "Changwat Uthai Thani",
                "Changwat Uttaradit",
                "Changwat Yala",
                "Changwat Yasothon",
                "Chiang Mai Province",
                "Phuket Province",
            ],
            tg: ["Centrale", "Kara", "Maritime", "Plateaux", "Savanes"],
            tk: ["Ataf", "Fakaofo", "Nukunon"],
            to: ["Eua", "Ha`apai", "Niuas", "Tongatap", "Vava'"],
            tt: [
                "Arima",
                "Chaguanas",
                "City of Port of Spain",
                "Couva-Tabaquite-Talparo",
                "Diego Martin",
                "Mayaro",
                "Penal/Debe",
                "Point Fortin",
                "Princes Town",
                "San Fernando",
                "San Juan/Laventille",
                "Sangre Grande",
                "Siparia",
                "Tobago",
                "Tunapuna/Piarco",
            ],
            tn: [
                "Gafsa Governorate",
                "Gouvernorat de Beja",
                "Gouvernorat de Ben Arous",
                "Gouvernorat de Bizerte",
                "Gouvernorat de Gabes",
                "Gouvernorat de Jendouba",
                "Gouvernorat de Kairouan",
                "Gouvernorat de Kasserine",
                "Gouvernorat de Kebili",
                "Gouvernorat de Kef",
                "Gouvernorat de l'Ariana",
                "Gouvernorat de Mahdia",
                "Gouvernorat de Medenine",
                "Gouvernorat de Monastir",
                "Gouvernorat de Nabeul",
                "Gouvernorat de Sfax",
                "Gouvernorat de Sidi Bouzid",
                "Gouvernorat de Siliana",
                "Gouvernorat de Sousse",
                "Gouvernorat de Tozeur",
                "Gouvernorat de Tunis",
                "Gouvernorat de Zaghouan",
                "Manouba",
                "Tataouine",
            ],
            tr: [
                "Adana",
                "Adiyaman",
                "Afyonkarahisar",
                "Agri",
                "Aksaray",
                "Amasya",
                "Ankara",
                "Antalya",
                "Ardahan",
                "Artvin",
                "Aydin",
                "Balikesir",
                "Bartin",
                "Batman",
                "Bayburt",
                "Bilecik",
                "Bingoel",
                "Bitlis",
                "Bol",
                "Burdur",
                "Bursa",
                "Canakkale",
                "Cankiri",
                "Corum",
                "Denizli",
                "Diyarbakir",
                "Duezce",
                "Edirne",
                "Elazig",
                "Erzincan",
                "Erzurum",
                "Eskisehir",
                "Gaziantep",
                "Giresun",
                "Guemueshane",
                "Hakkari",
                "Hatay",
                "Igdir",
                "Isparta",
                "Istanbul",
                "Izmir",
                "Kahramanmaras",
                "Karabuek",
                "Karaman",
                "Kars",
                "Kastamon",
                "Kayseri",
                "Kilis",
                "Kirikkale",
                "Kirklareli",
                "Kirsehir",
                "Kocaeli",
                "Konya",
                "Kuetahya",
                "Malatya",
                "Manisa",
                "Mardin",
                "Mersin",
                "Mugla",
                "Mus",
                "Nevsehir",
                "Nigde",
                "Ord",
                "Osmaniye",
                "Rize",
                "Sakarya",
                "Samsun",
                "Sanliurfa",
                "Siirt",
                "Sinop",
                "Sirnak",
                "Sivas",
                "Tekirdag",
                "Tokat",
                "Trabzon",
                "Tunceli",
                "Usak",
                "Van",
                "Yalova",
                "Yozgat",
                "Zonguldak",
            ],
            tm: ["Ahal", "Ashgabat", "Balkan", "Dasoguz Welayaty", "Lebap", "Mary"],
            tc: [],
            tv: ["Funafuti", "Nanumanga", "Nanumea", "Niutao", "Nui", "Nukufeta", "Nukulaelae", "Vaitup"],
            ug: ["Central Region", "Eastern Region", "Northern Region", "Western Region"],
            ua: [
                "Cherkas'ka Oblast'",
                "Chernihivs'ka Oblast'",
                "Chernivets'ka Oblast'",
                "Dnipropetrovska Oblast'",
                "Donets'ka Oblast'",
                "Gorod Sevastopol",
                "Ivano-Frankivs'ka Oblast'",
                "Kharkivs'ka Oblast'",
                "Khersons'ka Oblast'",
                "Khmel'nyts'ka Oblast'",
                "Kirovohrads'ka Oblast'",
                "Kyiv Oblast",
                "L'vivs'ka Oblast'",
                "Luhans'ka Oblast'",
                "Misto Kyyiv",
                "Mykolayivs'ka Oblast'",
                "Odes'ka Oblast'",
                "Poltavs'ka Oblast'",
                "Republic of Crimea",
                "Rivnens'ka Oblast'",
                "Sums'ka Oblast'",
                "Ternopil's'ka Oblast'",
                "Vinnyts'ka Oblast'",
                "Volyns'ka Oblast'",
                "Zakarpattia Oblast",
                "Zaporiz'ka Oblast'",
                "Zhytomyrs'ka Oblast'",
            ],
            ae: ["`Ajman", "Abu Zaby", "Al Fujayrah", "Ash Shariqah", "Dubai", "Ra's al Khaymah", "Umm al Qaywayn"],
            us: [
                "Alabama",
                "Alaska",
                "Arizona",
                "Arkansas",
                "California",
                "Colorado",
                "Connecticut",
                "Delaware",
                "District of Columbia",
                "Florida",
                "Georgia",
                "Hawaii",
                "Idaho",
                "Illinois",
                "Indiana",
                "Iowa",
                "Kansas",
                "Kentucky",
                "Louisiana",
                "Maine",
                "Maryland",
                "Massachusetts",
                "Michigan",
                "Minnesota",
                "Mississippi",
                "Missouri",
                "Montana",
                "Nebraska",
                "Nevada",
                "New Hampshire",
                "New Jersey",
                "New Mexico",
                "New York",
                "North Carolina",
                "North Dakota",
                "Ohio",
                "Oklahoma",
                "Oregon",
                "Pennsylvania",
                "Rhode Island",
                "South Carolina",
                "South Dakota",
                "Tennessee",
                "Texas",
                "Utah",
                "Vermont",
                "Virginia",
                "Washington",
                "West Virginia",
                "Wisconsin",
                "Wyoming",
            ],
            uy: [
                "Departamento de Artigas",
                "Departamento de Canelones",
                "Departamento de Cerro Largo",
                "Departamento de Colonia",
                "Departamento de Durazno",
                "Departamento de Flores",
                "Departamento de Florida",
                "Departamento de Lavalleja",
                "Departamento de Maldonado",
                "Departamento de Montevideo",
                "Departamento de Paysand",
                "Departamento de Rio Negro",
                "Departamento de Rivera",
                "Departamento de Rocha",
                "Departamento de Salto",
                "Departamento de San Jose",
                "Departamento de Soriano",
                "Departamento de Tacuarembo",
                "Departamento de Treinta y Tres",
            ],
            uz: [
                "Andijan",
                "Bukhara Province",
                "Fergana",
                "Jizzakh Province",
                "Karakalpakstan",
                "Namangan Province",
                "Navoiy Province",
                "Qashqadaryo Province",
                "Samarqand Viloyati",
                "Sirdaryo",
                "Surxondaryo Viloyati",
                "Toshkent Shahri",
                "Toshkent Viloyati",
                "Xorazm Viloyati",
            ],
            vu: ["Malampa Province", "Penama Province", "Sanma Province", "Shefa Province", "Tafea Province", "Torba Province"],
            ve: [
                "Delta Amacuro",
                "Dependencias Federales",
                "Distrito Capital",
                "Estado Amazonas",
                "Estado Anzoategui",
                "Estado Apure",
                "Estado Aragua",
                "Estado Barinas",
                "Estado Bolivar",
                "Estado Carabobo",
                "Estado Cojedes",
                "Estado Falcon",
                "Estado Guarico",
                "Estado Lara",
                "Estado Merida",
                "Estado Monagas",
                "Estado Nueva Esparta",
                "Estado Portuguesa",
                "Estado Sucre",
                "Estado Tachira",
                "Estado Trujillo",
                "Estado Vargas",
                "Estado Yaracuy",
                "Estado Zulia",
                "Miranda",
            ],
            vn: [
                "An Giang",
                "Dak Nong",
                "Gia Lai",
                "Hau Giang",
                "Ho Chi Minh City",
                "Kon Tum",
                "Long An",
                "Thanh Pho Can Tho",
                "Thanh Pho GJa Nang",
                "Thanh Pho Ha Noi",
                "Thanh Pho Hai Phong",
                "Tinh Ba Ria-Vung Ta",
                "Tinh Bac Giang",
                "Tinh Bac Kan",
                "Tinh Bac Lie",
                "Tinh Bac Ninh",
                "Tinh Ben Tre",
                "Tinh Binh Duong",
                "Tinh Binh GJinh",
                "Tinh Binh Phuoc",
                "Tinh Binh Thuan",
                "Tinh Ca Ma",
                "Tinh Cao Bang",
                "Tinh Dien Bien",
                "Tinh GJak Lak",
                "Tinh GJong Nai",
                "Tinh GJong Thap",
                "Tinh Ha Giang",
                "Tinh Ha Nam",
                "Tinh Ha Tinh",
                "Tinh Hai Duong",
                "Tinh Hoa Binh",
                "Tinh Hung Yen",
                "Tinh Khanh Hoa",
                "Tinh Kien Giang",
                "Tinh Lai Cha",
                "Tinh Lam GJong",
                "Tinh Lang Son",
                "Tinh Lao Cai",
                "Tinh Nam GJinh",
                "Tinh Nghe An",
                "Tinh Ninh Binh",
                "Tinh Ninh Thuan",
                "Tinh Phu Tho",
                "Tinh Phu Yen",
                "Tinh Quang Binh",
                "Tinh Quang Nam",
                "Tinh Quang Ngai",
                "Tinh Quang Ninh",
                "Tinh Quang Tri",
                "Tinh Soc Trang",
                "Tinh Son La",
                "Tinh Tay Ninh",
                "Tinh Thai Binh",
                "Tinh Thai Nguyen",
                "Tinh Thanh Hoa",
                "Tinh Thua Thien-Hue",
                "Tinh Tien Giang",
                "Tinh Tra Vinh",
                "Tinh Tuyen Quang",
                "Tinh Vinh Long",
                "Tinh Vinh Phuc",
                "Tinh Yen Bai",
            ],
            vg: [],
            vi: ["Saint Croix Island", "Saint John Island", "Saint Thomas Island"],
            wf: ["Alo", "Sigave", "Uvea"],
            eh: [],
            ye: [
                "Al Bayda Governorate",
                "Al Mahrah",
                "Al Mahwit",
                "Amanat Al Asimah",
                "Ibb",
                "Muhafazat `Amran",
                "Muhafazat 'Adan",
                "Muhafazat Abyan",
                "Muhafazat ad Dali'",
                "Muhafazat al Hudaydah",
                "Muhafazat al Jawf",
                "Muhafazat Dhamar",
                "Muhafazat Hadramawt",
                "Muhafazat Hajjah",
                "Muhafazat Lahij",
                "Muhafazat Ma'rib",
                "Muhafazat Raymah",
                "Muhafazat Sa'dah",
                "Muhafazat Ta`izz",
                "Sanaa",
                "Shabwah",
                "Socotra",
            ],
            zm: ["Central Province", "Copperbelt Province", "Eastern Province", "Luapula Province", "Lusaka Province", "Muchinga Province", "North-Western Province", "Northern Province", "Southern Province", "Western Province"],
            zw: [
                "Bulawayo Province",
                "Harare Province",
                "Manicaland Province",
                "Mashonaland Central Province",
                "Mashonaland East Province",
                "Mashonaland West Province",
                "Masvingo Province",
                "Matabeleland North Province",
                "Matabeleland South Province",
                "Midlands Province",
            ],
        };
    },
    function (e) {
        e.exports = JSON.parse(
            '{"AL":"Alabama","AK":"Alaska","AS":"American Samoa","AZ":"Arizona","AR":"Arkansas","CA":"California","CO":"Colorado","CT":"Connecticut","DE":"Delaware","DC":"District Of Columbia","FM":"Federated States Of Micronesia","FL":"Florida","GA":"Georgia","GU":"Guam","HI":"Hawaii","ID":"Idaho","IL":"Illinois","IN":"Indiana","IA":"Iowa","KS":"Kansas","KY":"Kentucky","LA":"Louisiana","ME":"Maine","MH":"Marshall Islands","MD":"Maryland","MA":"Massachusetts","MI":"Michigan","MN":"Minnesota","MS":"Mississippi","MO":"Missouri","MT":"Montana","NE":"Nebraska","NV":"Nevada","NH":"New Hampshire","NJ":"New Jersey","NM":"New Mexico","NY":"New York","NC":"North Carolina","ND":"North Dakota","MP":"Northern Mariana Islands","OH":"Ohio","OK":"Oklahoma","OR":"Oregon","PW":"Palau","PA":"Pennsylvania","PR":"Puerto Rico","RI":"Rhode Island","SC":"South Carolina","SD":"South Dakota","TN":"Tennessee","TX":"Texas","UT":"Utah","VT":"Vermont","VI":"Virgin Islands","VA":"Virginia","WA":"Washington","WV":"West Virginia","WI":"Wisconsin","WY":"Wyoming"}'
        );
    },
    function (e) {
        e.exports = JSON.parse(
            '{"AB":"Alberta","BC":"British Columbia","MB":"Manitoba","NB":"New Brunswick","NL":"Newfoundland and Labrador","NT":"Northwest Territories","NS":"Nova Scotia","NU":"Nunavut","ON":"Ontario","PE":"Prince Edward Island","QC":"Quebec","SK":"Saskatchewan","YT":"Yukon Territory"}'
        );
    },
    function (e, t, n) {
        "use strict";
        function a(e) {
            const t = +new Date() - window.startupOffset;
            console.log(`[RTC +${t}] ${e}`);
        }
        n.r(t), (window.startupOffset = window.startupOffset || +new Date());
        var i = n(0),
            r = n.n(i),
            o = ("undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) || ("undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)),
            s = new Uint8Array(16);
        function c() {
            if (!o) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return o(s);
        }
        for (var l = [], u = 0; u < 256; ++u) l[u] = (u + 256).toString(16).substr(1);
        var d = function (e, t) {
            var n = t || 0,
                a = l;
            return [a[e[n++]], a[e[n++]], a[e[n++]], a[e[n++]], "-", a[e[n++]], a[e[n++]], "-", a[e[n++]], a[e[n++]], "-", a[e[n++]], a[e[n++]], "-", a[e[n++]], a[e[n++]], a[e[n++]], a[e[n++]], a[e[n++]], a[e[n++]]].join("");
        };
        var h = function (e, t, n) {
                var a = (t && n) || 0;
                "string" == typeof e && ((t = "binary" === e ? new Array(16) : null), (e = null));
                var i = (e = e || {}).random || (e.rng || c)();
                if (((i[6] = (15 & i[6]) | 64), (i[8] = (63 & i[8]) | 128), t)) for (var r = 0; r < 16; ++r) t[a + r] = i[r];
                return t || d(i);
            },
            p = n(18),
            f = n.n(p);
        window.Cookies = f.a;
        window.resetCookie = () => {
            f.a.set("checkoutSessionCookie", h(), { expires: 1 }), window.location.reload();
        };
        class g {
            constructor(e) {
                (this.props = e), this.getSessionId();
            }
            getSessionId() {
                this.sessionId = f.a.get("checkoutSessionCookie");
                const e = "string" == typeof this.props.recoveryCartId && this.props.recoveryCartId.length > 5;
                (void 0 === this.sessionId || this.props.resetCookie || e) && ((this.sessionId = h()), f.a.set("checkoutSessionCookie", this.sessionId, { expires: 1 })), a("SessionID = " + this.sessionId);
            }
            initBraintree(e) {
                return this.apiRequest(`braintree/${this.sessionId}/init`, { method: "POST", body: JSON.stringify(e) }, {});
            }
            initKlarna(e) {
                return this.apiRequest(`klarna/${this.sessionId}/init`, { method: "POST", body: JSON.stringify(e) }, {});
            }
            initAfterpay(e) {
                return this.apiRequest(`afterpay/${this.sessionId}/init`, { method: "POST", body: JSON.stringify(e) }, {});
            }
            localizeAfterpay(e) {
                return this.apiRequest(`afterpay/${this.sessionId}/localize`, { method: "POST", body: JSON.stringify(e) }, {});
            }
            klarnaCheckout(e) {
                return this.apiRequest(`klarna/${this.sessionId}/checkout`, { method: "POST", body: JSON.stringify(e) }, {});
            }
            validateAddress(e) {
                return this.apiRequest("addresses/validate", { method: "POST", body: JSON.stringify(e) }, {});
            }
            getKlaviyoData() {
                return this.apiRequest(`cart/${this.sessionId}/klaviyo_data`);
            }
            saveValues(e) {
                return this.apiRequest(`cart/${this.sessionId}/fast_cart`, { method: "POST", body: JSON.stringify({ action: "save_values", actionData: { savedValues: e } }) }, {});
            }
            commitApplePay(e) {
                return this.apiRequest(`applepay/${this.sessionId}/commit`, { method: "POST", body: JSON.stringify(e) }, {});
            }
            getApplepaySession(e) {
                return this.apiRequest(`applepay/${this.sessionId}/init`, { method: "POST", body: JSON.stringify(e) }, {});
            }
            addToAttentive(e) {
                return this.apiRequest("attentive", { method: "POST", body: JSON.stringify(e) }, {});
            }
            getPixelData() {
                return this.apiRequest(`cart/${this.sessionId}/pixel_data`);
            }
            sendEvent(e = {}) {
                return (e.sessionCartId = e.sessionCartId || this.sessionId), this.apiRequest("events/" + this.sessionId, { method: "POST", body: JSON.stringify(e) }, {});
            }
            completeStripeIntent(e) {
                return this.apiRequest(`stripe/${this.sessionId}/complete_intent`, { method: "POST", body: JSON.stringify(e) }, {});
            }
            getMeta() {
                return this.apiRequest("meta");
            }
            setupStripeIntent() {
                return this.apiRequest(`stripe/${this.sessionId}/create_intent`);
            }
            idealStripeIntent(e) {
                return this.apiRequest(`stripe/${this.sessionId}/ideal_create_intent`, { method: "POST", body: JSON.stringify(e) }, {});
            }
            bancontactStripeIntent(e) {
                return this.apiRequest(`stripe/${this.sessionId}/bancontact_create_intent`, { method: "POST", body: JSON.stringify(e) }, {});
            }
            walletStripeIntent() {
                return this.apiRequest(`stripe/${this.sessionId}/wallet_create_intent`);
            }
            walletCompleteStripeIntent(e) {
                return this.apiRequest(`stripe/${this.sessionId}/wallet_complete_intent`, { method: "POST", body: JSON.stringify(e) }, {});
            }
            walletRequestObject() {
                return this.apiRequest(`stripe/${this.sessionId}/wallet_request_object`);
            }
            walletShipping(e) {
                return this.apiRequest(`stripe/${this.sessionId}/wallet_shipping`, { method: "POST", body: JSON.stringify(e) }, {});
            }
            charge(e) {
                return this.apiRequest(`cart/${this.sessionId}/charge`, { method: "POST", body: JSON.stringify(e) }, {});
            }
            setCountry(e) {
                return this.apiRequest(`cart/${this.sessionId}/fast_cart`, { method: "POST", body: JSON.stringify({ action: "set_shipping_zone", actionData: { country: e } }) }, {});
            }
            setNextUrl(e) {
                return this.apiRequest(`cart/${this.sessionId}/set_next_url`, { method: "POST", body: JSON.stringify({ nextUrl: e }) }, {});
            }
            confirmPaypal() {
                return this.apiRequest(`paypal/${this.sessionId}/confirm`, { method: "GET" }, {});
            }
            toggleAddon(e) {
                return this.apiRequest(`cart/${this.sessionId}/fast_cart`, { method: "POST", body: JSON.stringify({ action: "toggle_addon", actionData: { variantId: e } }) }, {});
            }
            getReceipt(e) {
                return this.apiRequest(`cart/${this.sessionId}/receipt`, {}, e);
            }
            getBrowserEvents(e) {
                return this.apiRequest("browser_events/" + this.sessionId, {}, e);
            }
            getCart(e) {
                return this.apiRequest(`cart/${this.sessionId}/fast_cart`, { method: "POST", body: JSON.stringify({ action: "show", actionData: { ...e } }) }, {});
            }
            acceptUpsell(e) {
                return this.apiRequest(`cart/${this.sessionId}/fast_cart`, { method: "POST", body: JSON.stringify({ action: "accept_upsell", actionData: e }) }, {});
            }
            setVariantQuantities(e) {
                return this.apiRequest(`cart/${this.sessionId}/fast_cart`, { method: "POST", body: JSON.stringify({ action: "set_variant_quantities", actionData: { variantQuantities: e } }) }, {});
            }
            setCurrentVariant(e) {
                return this.apiRequest(`cart/${this.sessionId}/fast_cart`, { method: "POST", body: JSON.stringify({ action: "set_primary_variant", actionData: { variantId: e } }) }, {});
            }
            removeCoupon() {
                return this.apiRequest(`cart/${this.sessionId}/fast_cart`, { method: "POST", body: JSON.stringify({ action: "remove_coupon", actionData: {} }) }, {});
            }
            applyCoupon(e) {
                return this.apiRequest(`cart/${this.sessionId}/fast_cart`, { method: "POST", body: JSON.stringify({ action: "apply_coupon", actionData: { code: e } }) }, {});
            }
            async apiRequest(e, t = {}, n = {}) {
                const a = new URL(`https://${this.props.apiEndpoint}/v1/${e}`);
                a.search = new URLSearchParams(n).toString();
                const i = Object.assign({ method: "get", mode: "cors", headers: { "Content-Type": "application/json" } }, t),
                    r = await fetch(a, i);
                return await r.json();
            }
        }
        function m(e, t) {
            for (let n of document.querySelectorAll(e)) n.innerHTML = t;
        }
        const v = n(316),
            y = n(319),
            b = n(320);
        window.csp = v;
        var k = function (e) {
            !(function () {
                m(
                    '[name="cc_exp_month"]',
                    '\n    <option value="">- Select Exp Month -</option>\n    <option value="1">01 - January</option>\n    <option value="2">02 - Febuary</option>\n    <option value="3">03 - March</option>\n    <option value="4">04 - April</option>\n    <option value="5">05 - May</option>\n    <option value="6">06 - June</option>\n    <option value="7">07 - July</option>\n    <option value="8">08 - August</option>\n    <option value="9">09 - September</option>\n    <option value="10">10 - October</option>\n    <option value="11">11 - November</option>\n    <option value="12">12 - December</option>\n  '
                );
                let e = '<option value="">- Select Exp Year -</option>';
                const t = new Date().getFullYear();
                for (let n = t; n < t + 25; n++) e += `<option value="${n}">${n}</option>`;
                m('[name="cc_exp_year"]', e);
            })(),
                (function (e) {
                    let t = [],
                        n = !1;
                    e && e.shippingZones && ((t = e.shippingZones), t.indexOf("DEFAULT") > -1 && (n = !0));
                    let a = "",
                        i = v.getCountries();
                    i.push({ name: "United Kingdom", code: "gb" }), i.sort((e, t) => (e.name > t.name ? 1 : -1));
                    for (const e of i) {
                        const i = e.code.toUpperCase(),
                            r = "United States of America" === e.name ? "United States" : e.name;
                        (n || t.indexOf(i) > -1) && (a += `<option value=${i}>${r}</option>`);
                    }
                    m('[name="billing_country"],[name="shipping_country"],[name="paypal_checkout_country"],[name="stripe_checkout_country"]', a);
                })(e);
        };
        var S = n(46),
            w = n.n(S);
        const C = () => {
                const e = new Event("checkout_failed");
                document.dispatchEvent(e);
            },
            P = {};
        let x = !0;
        const T = { classTo: "form-group", errorClass: "checkout-invalid-field", successClass: "checkout-valid-field", errorTextParent: "form-group", errorTextTag: "div", errorTextClass: "checkout-validation-help-text" };
        function A(e, t, n = "data-pristine-required", a = 1) {
            const i = `input[name='${t}'], select[name='${t}']`;
            r()(e)
                .find(i)
                .toArray()
                .forEach((e) => e.setAttribute(n, a));
        }
        function N() {
            Array.from(document.getElementsByClassName("checkout-paypal-form")).forEach((e) => {
                A(e, "paypal_checkout_country");
                const t = h();
                r()(e).data({ "pristine-uuid": t }), (P[t] = new w.a(e, T));
            }),
                (function () {
                    const e = ["email", "shipping_first_name", "shipping_last_name", "shipping_address1", "shipping_city", "shipping_state", "shipping_postal_code", "shipping_country", "paypal_checkout_country", "stripe_checkout_country"],
                        t = ["billing_first_name", "billing_last_name", "billing_address1", "billing_city", "billing_state", "billing_postal_code", "billing_country"],
                        n = ["cc_number", "cc_exp_month", "cc_exp_year", "cc_cvv"];
                    Array.from(document.getElementsByClassName("checkout-combo-form")).forEach((a) => {
                        const i = h();
                        r()(a).find("[data-pristine-required-billing]").toArray();
                        var o, s;
                        e.forEach((e) => A(a, e)),
                            t.forEach((e) => A(a, e, "data-pristine-required-billing")),
                            n.forEach((e) => A(a, e, "data-pristine-required-combo-credit")),
                            r()(a).data({ "pristine-uuid": i }),
                            (P[i] = new w.a(a, T)),
                            (o = P),
                            (s = i),
                            r()(document).on("change", 'input[name="combo_mode"]', (e) => {
                                o[s].reset();
                                const t = r()(e.currentTarget).closest("form");
                                ["checkout-combo-credit", "checkout-combo-paypal", "checkout-combo-klarna", "checkout-combo-ideal", "checkout-combo-none", "checkout-combo-bancontact"].forEach((e) => {
                                    r()(t).removeClass(e);
                                });
                                let n = r()(t).find('input[name="combo_mode"]:checked').val() || "none";
                                r()(t).addClass("checkout-combo-" + n);
                            });
                        let c = r()(a).find('input[name="combo_mode"]:checked').val() || "none";
                        r()(a).addClass("checkout-combo-" + c);
                    });
                })();
        }
        function D(e) {
            !(function (e = "us") {
                e = e.toLowerCase();
                let t = '<option value="">- Select State -</option>';
                if ("us" === e) for (const [e, n] of Object.entries(y)) t += `<option value="${e}">${n}</option>`;
                else if ("ca" === e) for (const [e, n] of Object.entries(b)) t += `<option value="${e}">${n}</option>`;
                else {
                    let n = v.getStates(e);
                    "au" === e && (n = n.map((e) => e.replace(/^State of /, ""))),
                        n && n.length
                            ? n.forEach((e) => {
                                  t += `<option value="${e}">${e}</option>`;
                              })
                            : (t += '<option value="N/A">N/A</option>');
                }
                try {
                    m('select[name="shipping_state"], select[name="billing_state"], .shipping_state', t);
                } catch {}
            })(e);
            const t = r()('[name="billing_country"],[name="shipping_country"],[name="paypal_checkout_country"],[name="stripe_checkout_country"]');
            for (let n = 0; n < t.length; n++) r()(t[n]).val(e);
        }
        w.a.addValidator(
            "required-billing",
            function (e) {
                return !!x || e.length;
            },
            "This field is required",
            5,
            !1
        ),
            w.a.addValidator(
                "required-combo-credit",
                function (e) {
                    let t = r()(document).find('input[name="combo_mode"]:checked').val();
                    return void 0 === t && (t = r()(document).find('input[name="combo_mode"]').val()), "credit" !== t || e.length;
                },
                "This field is required",
                5,
                !1
            );
        var O = function (e) {
            var t;
            r()("[name='billing_use_shipping']").on("click", (e) => {
                (x = "true" === e.target.value), x ? r()(".checkout-use-billing-address").removeClass("checkout-use-billing-address") : r()(e.target).closest("form").addClass("checkout-use-billing-address");
            }),
                (function () {
                    const e = [
                            "email",
                            "shipping_first_name",
                            "shipping_last_name",
                            "shipping_address1",
                            "shipping_city",
                            "shipping_state",
                            "shipping_postal_code",
                            "shipping_country",
                            "cc_number",
                            "cc_exp_month",
                            "cc_exp_year",
                            "cc_cvv",
                            "paypal_checkout_country",
                            "stripe_checkout_country",
                        ],
                        t = ["billing_first_name", "billing_last_name", "billing_address1", "billing_city", "billing_state", "billing_postal_code", "billing_country"];
                    Array.from(document.getElementsByClassName("checkout-credit-card-form")).forEach((n) => {
                        e.forEach((e) => A(n, e)), t.forEach((e) => A(n, e, "data-pristine-required-billing"));
                        const a = h();
                        r()(n).data({ "pristine-uuid": a }), (P[a] = new w.a(n, T));
                    });
                })(),
                N(),
                (t = e.changeCountryHandler),
                r()('[name="billing_country"],[name="shipping_country"],[name="paypal_checkout_country"],[name="stripe_checkout_country"]').on("change", (e) => {
                    D(e.target.value), t(e);
                }),
                (function (e) {
                    r()(document).on("click", ".checkout-submit-paypal", (t) => {
                        const n = r()(t.currentTarget).closest("form").data("pristine-uuid");
                        return t.preventDefault(), P[n].validate() ? e.paypalSubmitHandler(t) : C(), !1;
                    }),
                        r()(document).on("click", ".checkout-submit-credit-card", (t) => {
                            const n = r()(t.currentTarget).closest("form").data("pristine-uuid");
                            return t.preventDefault(), P[n].validate() ? e.creditCardFormHandler(t) : C(), !1;
                        }),
                        r()(document).on("click", ".checkout-submit-combo", (t) => {
                            const n = r()(t.currentTarget).closest("form").data("pristine-uuid");
                            return t.preventDefault(), P[n].validate() ? e.comboHandler(t) : C(), !1;
                        });
                })(e),
                D(e.shippingZone);
        };
        function _(e) {
            return (
                (function (e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n;
                    }
                })(e) ||
                (function (e) {
                    if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
                })(e) ||
                (function () {
                    throw new TypeError("Invalid attempt to spread non-iterable instance");
                })()
            );
        }
        var stripeURL = "https://js.stripe.com/v3",
            E = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
            R = "loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",
            L = null,
            I = function (e) {
                return null !== L
                    ? L
                    : (L = new Promise(function (t, n) {
                          if ("undefined" != typeof window)
                              if ((window.Stripe && e && console.warn(R), window.Stripe)) t(window.Stripe);
                              else
                                  try {
                                      var a = (function () {
                                          for (var e = document.querySelectorAll('script[src^="'.concat(stripeURL, '"]')), t = 0; t < e.length; t++) {
                                              var n = e[t];
                                              if (E.test(n.src)) return n;
                                          }
                                          return null;
                                      })();
                                      a && e
                                          ? console.warn(R)
                                          : a ||
                                            (a = (function (e) {
                                                var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
                                                    n = document.createElement("script");
                                                n.src = "".concat(stripeURL).concat(t);
                                                var a = document.head || document.body;
                                                if (!a) throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
                                                return a.appendChild(n), n;
                                            })(e)),
                                          a.addEventListener("load", function () {
                                              window.Stripe ? t(window.Stripe) : n(new Error("Stripe.js not available"));
                                          }),
                                          a.addEventListener("error", function () {
                                              n(new Error("Failed to load Stripe.js"));
                                          });
                                  } catch (e) {
                                      return void n(e);
                                  }
                          else t(null);
                      }));
            },
            j = function (e, t) {
                if (null === e) return null;
                var n = e.apply(void 0, _(t));
                return (
                    (function (e) {
                        e && e._registerWrapper && e._registerWrapper({ name: "stripe-js", version: "1.5.0" });
                    })(n),
                    n
                );
            },
            B = Promise.resolve().then(function () {
                return I(null);
            }),
            z = !1;
        B.catch(function (e) {
            z || console.warn(e);
        });
        var F = n(125),
            K = n.n(F),
            G = async function () {
                const e = async () => {
                    console.log("TEST MODE TRIGGERED");
                    const e = await this.apiClient.charge({ combo_mode: "fe15057324967b500dd7913ba05e91fa" });
                    e && "error" in e ? alert(e.error) : (window.location = this.getNextUrl());
                };
                (window.testCheckout = function () {
                    setTimeout(async () => {
                        await e();
                    }, 15);
                }),
                    K()(e);
            },
            V = n(126),
            H = n(91),
            q = n.n(H);
        let W = null;
        const U = () => "string" == typeof W.facebookAppId && W.facebookAppId.length > 0;
        let J = null;
        const Z = () => "string" == typeof J.gaMeasurementId && J.gaMeasurementId.length > 0;
        let Q = null;
        const Y = (e) => {
                (window._learnq = window._learnq || []), window._learnq.push(e);
            },
            X = () => "string" == typeof Q.klaviyoPubKey && Q.klaviyoPubKey.length > 0;
        let ee = null;
        let te = null;
        const ne = () => "string" == typeof te.refersionPubKey && te.refersionPubKey.length > 0,
            ae = async (e) => {
                void 0 !== window._refersion
                    ? _refersion(function () {
                          _rfsn._addCart(e.sessionCartId);
                      })
                    : setTimeout(() => {
                          ae(e);
                      }, 500);
            };
        let ie = null;
        const re = [
                {
                    setup: async (e) => {
                        if (((W = e), U())) {
                            a("Configuring Facebook");
                            const e = "string" == typeof W.facebookPixelId && W.facebookPixelId.length > 0 ? W.facebookPixelId : W.facebookAppId;
                            a("Facebook Pixel ID: " + e),
                                (function (e, t, n, a, i, r, o) {
                                    e.fbq ||
                                        ((i = e.fbq = function () {
                                            i.callMethod ? i.callMethod.apply(i, arguments) : i.queue.push(arguments);
                                        }),
                                        e._fbq || (e._fbq = i),
                                        (i.push = i),
                                        (i.loaded = !0),
                                        (i.version = "2.0"),
                                        (i.queue = []),
                                        ((r = t.createElement(n)).async = !0),
                                        (r.src = "https://connect.facebook.net/en_US/fbevents.js"),
                                        (o = t.getElementsByTagName(n)[0]).parentNode.insertBefore(r, o));
                                })(window, document, "script"),
                                fbq("init", e, { external_id: W.sessionId });
                        }
                    },
                    fire: async (e) => {
                        if (U())
                            switch (e.eventType) {
                                case "page_view":
                                    return (async (e) => {
                                        fbq("track", "PageView", {}, { eventID: e.eventId });
                                    })(e);
                                case "accepted_upsell":
                                case "checkout_started":
                                    return (async (e) => {})();
                            }
                    },
                },
                {
                    setup: async (e) => {
                        if (((J = e), Z())) {
                            a("Configuring Google");
                            const e = document.getElementsByTagName("head")[0],
                                t = document.createElement("script");
                            (t.async = !0),
                                (t.src = "https://www.googletagmanager.com/gtag/js?id=" + J.gaMeasurementId),
                                e.appendChild(t),
                                (window.dataLayer = window.dataLayer || []),
                                (window.gtag = function () {
                                    dataLayer.push(arguments);
                                }),
                                window.gtag("js", new Date()),
                                window.gtag("config", J.gaMeasurementId, { send_page_view: !1 });
                        }
                    },
                    fire: async (e) => {
                        if (Z())
                            switch (e.eventType) {
                                case "page_view":
                                    return (async (e) => {
                                        gtag("event", "page_view");
                                    })();
                                case "accepted_upsell":
                                    return (async (e) => {
                                        gtag("event", "accepted-upsell", { transaction_id: e.sessionCartId, event_category: "ecommerce", event_label: e.upsellPageName, value: e.value, currency: e.currency });
                                    })(e);
                                case "checkout_started":
                                    return (async (e) => {})();
                                case "checked_out":
                                    return (async (e) => {
                                        gtag("event", "purchase", { transaction_id: e.sessionCartId, value: e.subTotalValue, currency: e.currency });
                                    })(e);
                            }
                    },
                },
                {
                    setup: async (e) => {
                        if (((Q = e), X())) {
                            a("Configuring Klaviyo");
                            const e = document.getElementsByTagName("head")[0],
                                t = document.createElement("script");
                            (t.src = "https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=" + Q.klaviyoPubKey), e.appendChild(t);
                        }
                    },
                    fire: async (e) => {
                        if (X())
                            switch (e.eventType) {
                                case "page_view":
                                    return (async (e) => {
                                        Y(["track", "Active On Site", { $event_id: e.eventId, locale: e.locale }]);
                                    })(e);
                                case "accepted_upsell":
                                    return (async (e) => {})();
                                case "checkout_started":
                                    return (async (e) => {
                                        "string" == typeof e.email && e.email.length > 1 && Y(["identify", { $email: e.email, locale: e.locale }]);
                                        const t = await Q.apiClient.getKlaviyoData();
                                        (t.sessionCartId = e.sessionCartId),
                                            (t.cartBaseUrl = `${window.location.protocol}://${window.location.hostname}${window.location.pathname}`),
                                            (t.cartUrlHostname = window.location.hostname),
                                            (t.cartUrlPath = window.location.pathname),
                                            (t.cartUrlSearch = window.location.search.replace(/\?/, "")),
                                            (t.cartUrlHash = window.location.hash),
                                            (t.ccproduct = window.location.href),
                                            (t.cartUrl = window.location.href),
                                            (t.primaryVariantId = e.primaryVariantId),
                                            (t.$event_id = e.eventId),
                                            Y(["track", "Started Checkout", t]);
                                    })(e);
                            }
                    },
                },
                {
                    setup: async (e) => {
                        a("Initializing Server Events"), (ee = e);
                    },
                    fire: async (e) => {
                        !0 !== e.no_server && ee.apiClient.sendEvent(e);
                    },
                },
                {
                    setup: async (e) => {
                        (te = e),
                            ne() &&
                                setTimeout(() => {
                                    a("Configuring Refersion");
                                    const e = document.getElementsByTagName("head")[0],
                                        t = document.createElement("script");
                                    (t.src = `//www.refersion.com/tracker/v3/${te.refersionPubKey}.js`), (t.async = !1), e.appendChild(t);
                                }, 2500);
                    },
                    fire: async (e) => {
                        if (ne())
                            switch (e.eventType) {
                                case "page_view":
                                    return ae(e);
                            }
                    },
                },
                {
                    setup: async (e) => {
                        (ie = e),
                            a("Configuring Segment"),
                            "string" == typeof ie.segmentKey &&
                                ie.segmentKey.length > 0 &&
                                (function () {
                                    var e = (window.analytics = window.analytics || []);
                                    if (!e.initialize)
                                        if (e.invoked) window.console && console.error && console.error("Segment snippet included twice.");
                                        else {
                                            (e.invoked = !0),
                                                (e.methods = [
                                                    "trackSubmit",
                                                    "trackClick",
                                                    "trackLink",
                                                    "trackForm",
                                                    "pageview",
                                                    "identify",
                                                    "reset",
                                                    "group",
                                                    "track",
                                                    "ready",
                                                    "alias",
                                                    "debug",
                                                    "page",
                                                    "once",
                                                    "off",
                                                    "on",
                                                    "addSourceMiddleware",
                                                    "addIntegrationMiddleware",
                                                    "setAnonymousId",
                                                    "addDestinationMiddleware",
                                                ]),
                                                (e.factory = function (t) {
                                                    return function () {
                                                        var n = Array.prototype.slice.call(arguments);
                                                        return n.unshift(t), e.push(n), e;
                                                    };
                                                });
                                            for (var t = 0; t < e.methods.length; t++) {
                                                var n = e.methods[t];
                                                e[n] = e.factory(n);
                                            }
                                            (e.load = function (t, n) {
                                                var a = document.createElement("script");
                                                (a.type = "text/javascript"), (a.async = !0), (a.src = "https://cdn.segment.com/analytics.js/v1/" + t + "/analytics.min.js");
                                                var i = document.getElementsByTagName("script")[0];
                                                i.parentNode.insertBefore(a, i), (e._loadOptions = n);
                                            }),
                                                (e._writeKey = "SR5fJGw6kHSjLdm6Xl3ypvU00bzac7no"),
                                                (e.SNIPPET_VERSION = "4.13.2"),
                                                e.load(ie.segmentKey),
                                                e.page();
                                        }
                                })();
                    },
                    fire: async () => {},
                },
            ],
            oe = {};
        async function se(e) {
            a("Initializing Event System"), await Promise.all([re.map((t) => t.setup(e))]), a("Event System Ready");
        }
        function ce(e) {
            if ("string" != typeof e) return e;
            if (e.match(/^http(s)*:/)) return e;
            {
                const t = document.createElement("a");
                return (t.href = e), t.href;
            }
        }
        class le {
            constructor(e) {
                (this.props = e), (this.session = null), (this.klarnaContainer = document.getElementsByClassName("checkout-klarna-container")[0]), this.klarnaContainer && this.setup();
            }
            loadSnippet(e) {
                this.klarnaContainer.innerHTML = e;
                const t = this.klarnaContainer.getElementsByTagName("script");
                for (let e = 0; e < t.length; e++) {
                    const n = t[e].parentNode,
                        a = document.createElement("script");
                    (a.type = "text/javascript"), (a.text = t[e].text), n.removeChild(t[e]), n.appendChild(a);
                }
            }
            async updateCountry(e) {
                await this.loadKlarnaPayments(e), console.log("Klarna handler " + e);
            }
            disableKlarna() {
                [...document.querySelectorAll('input[name="combo_mode"][value="klarna"]')].forEach((e) => (e.checked = !1)),
                    document.getElementsByTagName("body")[0].classList.add("klarna-disabled"),
                    document.getElementsByTagName("body")[0].classList.remove("klarna-enabled");
            }
            async loadKlarnaPayments(e) {
                console.log(`loadKlarnaPayments ${e} ${this.klarnaMethod}`),
                    Klarna.Payments.load({ container: this.klarnaContainer, payment_method_category: this.klarnaMethod }, { purchase_country: e }, function (e) {
                        console.log(e),
                            e.show_form
                                ? (document.getElementsByTagName("body")[0].classList.add("klarna-enabled"), document.getElementsByTagName("body")[0].classList.remove("klarna-disabled"), console.log("Klarna successfully loaded"))
                                : this.disableKlarna();
                    });
            }
            async authorize(e) {
                console.log("Calling apiClient.initKlarna");
                const t = {
                    purchase_country: e.billing.country,
                    billing_address: {
                        given_name: e.billing.first_name,
                        family_name: e.billing.last_name,
                        email: e.email,
                        street_address: e.billing.address1,
                        street_address2: e.billing.address2,
                        postal_code: e.billing.postal_code,
                        city: e.billing.city,
                        region: e.billing.state,
                        phone: e.billing.phone,
                        country: e.billing.country,
                    },
                    shipping_address: {
                        given_name: e.shipping.first_name,
                        family_name: e.shipping.last_name,
                        email: e.email,
                        street_address: e.shipping.address1,
                        street_address2: e.shipping.address2,
                        postal_code: e.shipping.postal_code,
                        city: e.shipping.city,
                        region: e.shipping.state,
                        phone: e.shipping.phone,
                        country: e.shipping.country,
                    },
                };
                (await this.props.apiClient.klarnaCheckout({ ccData: e })).cart
                    ? window.Klarna.Payments.authorize({ payment_method_category: this.klarnaMethod }, t, async (t) => {
                          if ((console.log("Maybe?"), console.log(t), t.approved)) {
                              const n = await this.props.apiClient.klarnaCheckout({ ccData: e, authorization: t, session: this.session });
                              !0 === n.success && (window.location = this.nextUrl), console.log(n);
                          }
                      })
                    : alert("Unable to process this Klarna transaction");
            }
            async klarnaAsyncCallback() {
                if (((this.session = await this.props.apiClient.initKlarna()), console.log(this.session), !this.session.client_token)) return console.log("Disabling Klarna"), void this.disableKlarna();
                window.Klarna.Payments.init({ client_token: this.session.client_token }), await this.loadKlarnaPayments(checkout.klarnaHandler.props.initialCart.shippingZone);
            }
            setup() {
                a("Configuring Klarna"),
                    (window.klarnaAsyncCallback = this.klarnaAsyncCallback.bind(this)),
                    (this.klarnaMethod = this.klarnaContainer.dataset.paymentMethod),
                    (this.nextUrl = ce(this.klarnaContainer.dataset.checkoutNextUrl));
                const e = document.getElementsByTagName("head")[0],
                    t = document.createElement("script");
                (t.src = "https://x.klarnacdn.net/kp/lib/v1/api.js"), (t.async = !1), e.appendChild(t);
            }
        }
        class ue {
            async initAfterpay() {
                this.initButton &&
                    AfterPay.initializeForPopup({
                        countryCode: this.cart.shippingZone,
                        onCommenceCheckout: this.onCommenceCheckout.bind(this),
                        onShippingAddressChange: this.onShippingAddressChange.bind(this),
                        shippingOptionRequired: !0,
                        onComplete: this.onComplete.bind(this),
                        target: "#rtc-afterpay-init-button",
                        shippingOptionRequired: !0,
                    });
            }
            async setupWidget() {
                new AfterPay.Widgets.PaymentSchedule({ token: this.token, target: "#rtc-afterpay-widget", locale: "en-US", onReady: function (e) {}, onChange: function (e) {}, onError: function (e) {} });
            }
            async onCommenceCheckout(e) {
                const t = await this.apiClient.initAfterpay({ origin: window.location.href });
                (this.token = t.token), e.resolve(t.token);
            }
            async onShippingAddressChange(e, t) {
                console.log("onShippingAddressChange"), console.log(e);
                const n = await this.apiClient.localizeAfterpay(e);
                t.resolve(n.options);
            }
            async onComplete(e) {
                "SUCCESS" === e.data.status && (this.setupWidget(), (this.readyToCheckout = !0), (this.initButton.style.display = "none"), (this.completeButton.style.display = "block"));
            }
            loadScript() {
                const e = document.getElementsByTagName("head")[0],
                    t = document.createElement("script");
                (t.type = "text/javascript"),
                    "sandbox" === checkout.settings.afterpayMode ? (t.src = "https://portal.sandbox.afterpay.com/afterpay.js") : (t.src = "https://js.afterpay.com/afterpay-1.x.js"),
                    (t.onload = this.initAfterpay.bind(this)),
                    e.appendChild(t);
            }
            constructor(e) {
                (this.initButton = document.getElementById("rtc-afterpay-init-button")),
                    (this.completeButton = document.getElementById("rtc-afterpay-complete-button")),
                    (this.widget = document.getElementById("rtc-afterpay-widget")),
                    (this.readyToCheckout = !0),
                    (this.apiClient = e.apiClient),
                    (this.settings = e.settings),
                    (this.cart = e.cart),
                    (this.doCharge = e.doCharge),
                    this.initButton && this.loadScript(),
                    $(document).on("click", "#rtc-afterpay-complete-button", async (e) => {
                        if (this.readyToCheckout) {
                            (await this.doCharge({ afterpayOrderToken: this.token })) && (window.location = document.getElementById("rtc-afterpay-complete-button").dataset.nextUrl);
                        }
                    });
            }
        }
        function de(e) {
            [...document.getElementsByClassName("checkout-timer")].forEach((t) =>
                (function (e, t) {
                    let n = +new Date(),
                        a = parseInt(e.dataset.timerDuration);
                    const i = e.dataset.timerPersistenceId;
                    if ("string" == typeof i) {
                        const e = `${t}_${i}`,
                            a = parseInt(f.a.get(e));
                        a > 0 ? (n = a) : f.a.set(e, n);
                    }
                    const r = setInterval(() => {
                        let t = parseInt(a - Math.round((+new Date() - n) / 1e3));
                        t <= 0 && ((t = 0), clearInterval(r));
                        const i = Math.floor(t / 3600);
                        t -= 3600 * i;
                        const o = Math.floor(t / 60);
                        (t -= 60 * o),
                            (e.innerText = [i, o, t]
                                .map((e) => e.toString().padStart(2, "0"))
                                .join(":")
                                .replace(/^00:/, ""));
                    }, 1e3);
                })(t, e)
            );
        }
        async function he(e) {
            const t = new TextEncoder().encode(e),
                n = await crypto.subtle.digest("SHA-256", t);
            return Array.from(new Uint8Array(n))
                .map((e) => e.toString(16).padStart(2, "0"))
                .join("");
        }
        function pe(e) {
            return (pe =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                      })(e);
        }
        function fe(e, t, n) {
            return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
        }
        function ge(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? Object(arguments[t]) : {},
                    a = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (a = a.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        })
                    )),
                    a.forEach(function (t) {
                        fe(e, t, n[t]);
                    });
            }
            return e;
        }
        function me(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }
        function ve(e, t) {
            for (var n = 0; n < t.length; n++) {
                var a = t[n];
                (a.enumerable = a.enumerable || !1), (a.configurable = !0), "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
            }
        }
        function ye(e, t, n) {
            return t && ve(e.prototype, t), n && ve(e, n), e;
        }
        var be = n(127),
            ke = n.n(be);
        function Se(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
        }
        function we(e, t) {
            return !t || ("object" !== ke()(t) && "function" != typeof t) ? Se(e) : t;
        }
        function Ce(e) {
            return (Ce = Object.setPrototypeOf
                ? Object.getPrototypeOf
                : function (e) {
                      return e.__proto__ || Object.getPrototypeOf(e);
                  })(e);
        }
        function Pe(e, t) {
            return (Pe =
                Object.setPrototypeOf ||
                function (e, t) {
                    return (e.__proto__ = t), e;
                })(e, t);
        }
        function xe(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), t && Pe(e, t);
        }
        var Te = {
                type: "logger",
                log: function (e) {
                    this.output("log", e);
                },
                warn: function (e) {
                    this.output("warn", e);
                },
                error: function (e) {
                    this.output("error", e);
                },
                output: function (e, t) {
                    console && console[e] && console[e].apply(console, t);
                },
            },
            Ae = new ((function () {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    me(this, e), this.init(t, n);
                }
                return (
                    ye(e, [
                        {
                            key: "init",
                            value: function (e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                (this.prefix = t.prefix || "i18next:"), (this.logger = e || Te), (this.options = t), (this.debug = t.debug);
                            },
                        },
                        {
                            key: "setDebug",
                            value: function (e) {
                                this.debug = e;
                            },
                        },
                        {
                            key: "log",
                            value: function () {
                                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                return this.forward(t, "log", "", !0);
                            },
                        },
                        {
                            key: "warn",
                            value: function () {
                                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                return this.forward(t, "warn", "", !0);
                            },
                        },
                        {
                            key: "error",
                            value: function () {
                                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                return this.forward(t, "error", "");
                            },
                        },
                        {
                            key: "deprecate",
                            value: function () {
                                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                return this.forward(t, "warn", "WARNING DEPRECATED: ", !0);
                            },
                        },
                        {
                            key: "forward",
                            value: function (e, t, n, a) {
                                return a && !this.debug ? null : ("string" == typeof e[0] && (e[0] = "".concat(n).concat(this.prefix, " ").concat(e[0])), this.logger[t](e));
                            },
                        },
                        {
                            key: "create",
                            value: function (t) {
                                return new e(this.logger, ge({}, { prefix: "".concat(this.prefix, ":").concat(t, ":") }, this.options));
                            },
                        },
                    ]),
                    e
                );
            })())(),
            Ne = (function () {
                function e() {
                    me(this, e), (this.observers = {});
                }
                return (
                    ye(e, [
                        {
                            key: "on",
                            value: function (e, t) {
                                var n = this;
                                return (
                                    e.split(" ").forEach(function (e) {
                                        (n.observers[e] = n.observers[e] || []), n.observers[e].push(t);
                                    }),
                                    this
                                );
                            },
                        },
                        {
                            key: "off",
                            value: function (e, t) {
                                this.observers[e] &&
                                    (t
                                        ? (this.observers[e] = this.observers[e].filter(function (e) {
                                              return e !== t;
                                          }))
                                        : delete this.observers[e]);
                            },
                        },
                        {
                            key: "emit",
                            value: function (e) {
                                for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
                                if (this.observers[e]) {
                                    var i = [].concat(this.observers[e]);
                                    i.forEach(function (e) {
                                        e.apply(void 0, n);
                                    });
                                }
                                if (this.observers["*"]) {
                                    var r = [].concat(this.observers["*"]);
                                    r.forEach(function (t) {
                                        t.apply(t, [e].concat(n));
                                    });
                                }
                            },
                        },
                    ]),
                    e
                );
            })();
        function De() {
            var e,
                t,
                n = new Promise(function (n, a) {
                    (e = n), (t = a);
                });
            return (n.resolve = e), (n.reject = t), n;
        }
        function Oe(e) {
            return null == e ? "" : "" + e;
        }
        function _e(e, t, n) {
            e.forEach(function (e) {
                t[e] && (n[e] = t[e]);
            });
        }
        function Me(e, t, n) {
            function a(e) {
                return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e;
            }
            function i() {
                return !e || "string" == typeof e;
            }
            for (var r = "string" != typeof t ? [].concat(t) : t.split("."); r.length > 1; ) {
                if (i()) return {};
                var o = a(r.shift());
                !e[o] && n && (e[o] = new n()), (e = Object.prototype.hasOwnProperty.call(e, o) ? e[o] : {});
            }
            return i() ? {} : { obj: e, k: a(r.shift()) };
        }
        function Ee(e, t, n) {
            var a = Me(e, t, Object);
            a.obj[a.k] = n;
        }
        function Re(e, t) {
            var n = Me(e, t),
                a = n.obj,
                i = n.k;
            if (a) return a[i];
        }
        function Le(e, t, n) {
            var a = Re(e, n);
            return void 0 !== a ? a : Re(t, n);
        }
        function Ie(e, t, n) {
            for (var a in t)
                "__proto__" !== a && "constructor" !== a && (a in e ? ("string" == typeof e[a] || e[a] instanceof String || "string" == typeof t[a] || t[a] instanceof String ? n && (e[a] = t[a]) : Ie(e[a], t[a], n)) : (e[a] = t[a]));
            return e;
        }
        function je(e) {
            return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
        }
        var Be = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;", "/": "&#x2F;" };
        function ze(e) {
            return "string" == typeof e
                ? e.replace(/[&<>"'\/]/g, function (e) {
                      return Be[e];
                  })
                : e;
        }
        var Fe = "undefined" != typeof window && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1;
        function Ke(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
            if (e) {
                if (e[t]) return e[t];
                for (var a = t.split(n), i = e, r = 0; r < a.length; ++r) {
                    if ("string" == typeof i[a[r]] && r + 1 < a.length) return;
                    if (void 0 === i[a[r]]) {
                        for (var o = 2, s = a.slice(r, r + o).join(n), c = i[s]; void 0 === c && a.length > r + o; ) o++, (c = i[(s = a.slice(r, r + o).join(n))]);
                        if (void 0 === c) return;
                        if ("string" == typeof c) return c;
                        if (s && "string" == typeof c[s]) return c[s];
                        var l = a.slice(r + o).join(n);
                        return l ? Ke(c, l, n) : void 0;
                    }
                    i = i[a[r]];
                }
                return i;
            }
        }
        var Ge = (function (e) {
                function t(e) {
                    var n,
                        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { ns: ["translation"], defaultNS: "translation" };
                    return (
                        me(this, t),
                        (n = we(this, Ce(t).call(this))),
                        Fe && Ne.call(Se(n)),
                        (n.data = e || {}),
                        (n.options = a),
                        void 0 === n.options.keySeparator && (n.options.keySeparator = "."),
                        void 0 === n.options.ignoreJSONStructure && (n.options.ignoreJSONStructure = !0),
                        n
                    );
                }
                return (
                    xe(t, e),
                    ye(t, [
                        {
                            key: "addNamespaces",
                            value: function (e) {
                                this.options.ns.indexOf(e) < 0 && this.options.ns.push(e);
                            },
                        },
                        {
                            key: "removeNamespaces",
                            value: function (e) {
                                var t = this.options.ns.indexOf(e);
                                t > -1 && this.options.ns.splice(t, 1);
                            },
                        },
                        {
                            key: "getResource",
                            value: function (e, t, n) {
                                var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                                    i = void 0 !== a.keySeparator ? a.keySeparator : this.options.keySeparator,
                                    r = void 0 !== a.ignoreJSONStructure ? a.ignoreJSONStructure : this.options.ignoreJSONStructure,
                                    o = [e, t];
                                n && "string" != typeof n && (o = o.concat(n)), n && "string" == typeof n && (o = o.concat(i ? n.split(i) : n)), e.indexOf(".") > -1 && (o = e.split("."));
                                var s = Re(this.data, o);
                                return s || !r || "string" != typeof n ? s : Ke(this.data && this.data[e] && this.data[e][t], n, i);
                            },
                        },
                        {
                            key: "addResource",
                            value: function (e, t, n, a) {
                                var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : { silent: !1 },
                                    r = this.options.keySeparator;
                                void 0 === r && (r = ".");
                                var o = [e, t];
                                n && (o = o.concat(r ? n.split(r) : n)), e.indexOf(".") > -1 && ((a = t), (t = (o = e.split("."))[1])), this.addNamespaces(t), Ee(this.data, o, a), i.silent || this.emit("added", e, t, n, a);
                            },
                        },
                        {
                            key: "addResources",
                            value: function (e, t, n) {
                                var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : { silent: !1 };
                                for (var i in n) ("string" != typeof n[i] && "[object Array]" !== Object.prototype.toString.apply(n[i])) || this.addResource(e, t, i, n[i], { silent: !0 });
                                a.silent || this.emit("added", e, t, n);
                            },
                        },
                        {
                            key: "addResourceBundle",
                            value: function (e, t, n, a, i) {
                                var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : { silent: !1 },
                                    o = [e, t];
                                e.indexOf(".") > -1 && ((a = n), (n = t), (t = (o = e.split("."))[1])), this.addNamespaces(t);
                                var s = Re(this.data, o) || {};
                                a ? Ie(s, n, i) : (s = ge({}, s, n)), Ee(this.data, o, s), r.silent || this.emit("added", e, t, n);
                            },
                        },
                        {
                            key: "removeResourceBundle",
                            value: function (e, t) {
                                this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t);
                            },
                        },
                        {
                            key: "hasResourceBundle",
                            value: function (e, t) {
                                return void 0 !== this.getResource(e, t);
                            },
                        },
                        {
                            key: "getResourceBundle",
                            value: function (e, t) {
                                return t || (t = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? ge({}, {}, this.getResource(e, t)) : this.getResource(e, t);
                            },
                        },
                        {
                            key: "getDataByLanguage",
                            value: function (e) {
                                return this.data[e];
                            },
                        },
                        {
                            key: "toJSON",
                            value: function () {
                                return this.data;
                            },
                        },
                    ]),
                    t
                );
            })(Ne),
            Ve = {
                processors: {},
                addPostProcessor: function (e) {
                    this.processors[e.name] = e;
                },
                handle: function (e, t, n, a, i) {
                    var r = this;
                    return (
                        e.forEach(function (e) {
                            r.processors[e] && (t = r.processors[e].process(t, n, a, i));
                        }),
                        t
                    );
                },
            },
            He = {},
            qe = (function (e) {
                function t(e) {
                    var n,
                        a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (
                        me(this, t),
                        (n = we(this, Ce(t).call(this))),
                        Fe && Ne.call(Se(n)),
                        _e(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, Se(n)),
                        (n.options = a),
                        void 0 === n.options.keySeparator && (n.options.keySeparator = "."),
                        (n.logger = Ae.create("translator")),
                        n
                    );
                }
                return (
                    xe(t, e),
                    ye(
                        t,
                        [
                            {
                                key: "changeLanguage",
                                value: function (e) {
                                    e && (this.language = e);
                                },
                            },
                            {
                                key: "exists",
                                value: function (e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { interpolation: {} },
                                        n = this.resolve(e, t);
                                    return n && void 0 !== n.res;
                                },
                            },
                            {
                                key: "extractFromKey",
                                value: function (e, t) {
                                    var n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
                                    void 0 === n && (n = ":");
                                    var a = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                                        i = t.ns || this.options.defaultNS;
                                    if (n && e.indexOf(n) > -1) {
                                        var r = e.match(this.interpolator.nestingRegexp);
                                        if (r && r.length > 0) return { key: e, namespaces: i };
                                        var o = e.split(n);
                                        (n !== a || (n === a && this.options.ns.indexOf(o[0]) > -1)) && (i = o.shift()), (e = o.join(a));
                                    }
                                    return "string" == typeof i && (i = [i]), { key: e, namespaces: i };
                                },
                            },
                            {
                                key: "translate",
                                value: function (e, n, a) {
                                    var i = this;
                                    if (("object" !== pe(n) && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), n || (n = {}), null == e)) return "";
                                    Array.isArray(e) || (e = [String(e)]);
                                    var r = void 0 !== n.keySeparator ? n.keySeparator : this.options.keySeparator,
                                        o = this.extractFromKey(e[e.length - 1], n),
                                        s = o.key,
                                        c = o.namespaces,
                                        l = c[c.length - 1],
                                        u = n.lng || this.language,
                                        d = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                                    if (u && "cimode" === u.toLowerCase()) {
                                        if (d) {
                                            var h = n.nsSeparator || this.options.nsSeparator;
                                            return l + h + s;
                                        }
                                        return s;
                                    }
                                    var p = this.resolve(e, n),
                                        f = p && p.res,
                                        g = (p && p.usedKey) || s,
                                        m = (p && p.exactUsedKey) || s,
                                        v = Object.prototype.toString.apply(f),
                                        y = ["[object Number]", "[object Function]", "[object RegExp]"],
                                        b = void 0 !== n.joinArrays ? n.joinArrays : this.options.joinArrays,
                                        k = !this.i18nFormat || this.i18nFormat.handleAsObject,
                                        S = "string" != typeof f && "boolean" != typeof f && "number" != typeof f;
                                    if (k && f && S && y.indexOf(v) < 0 && ("string" != typeof b || "[object Array]" !== v)) {
                                        if (!n.returnObjects && !this.options.returnObjects)
                                            return (
                                                this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!"),
                                                this.options.returnedObjectHandler ? this.options.returnedObjectHandler(g, f, ge({}, n, { ns: c })) : "key '".concat(s, " (").concat(this.language, ")' returned an object instead of string.")
                                            );
                                        if (r) {
                                            var w = "[object Array]" === v,
                                                C = w ? [] : {},
                                                P = w ? m : g;
                                            for (var x in f)
                                                if (Object.prototype.hasOwnProperty.call(f, x)) {
                                                    var T = "".concat(P).concat(r).concat(x);
                                                    (C[x] = this.translate(T, ge({}, n, { joinArrays: !1, ns: c }))), C[x] === T && (C[x] = f[x]);
                                                }
                                            f = C;
                                        }
                                    } else if (k && "string" == typeof b && "[object Array]" === v) (f = f.join(b)) && (f = this.extendTranslation(f, e, n, a));
                                    else {
                                        var A = !1,
                                            N = !1,
                                            D = void 0 !== n.count && "string" != typeof n.count,
                                            O = t.hasDefaultValue(n),
                                            _ = D ? this.pluralResolver.getSuffix(u, n.count) : "",
                                            M = n["defaultValue".concat(_)] || n.defaultValue;
                                        !this.isValidLookup(f) && O && ((A = !0), (f = M)), this.isValidLookup(f) || ((N = !0), (f = s));
                                        var E = O && M !== f && this.options.updateMissing;
                                        if (N || A || E) {
                                            if ((this.logger.log(E ? "updateKey" : "missingKey", u, l, s, E ? M : f), r)) {
                                                var R = this.resolve(s, ge({}, n, { keySeparator: !1 }));
                                                R &&
                                                    R.res &&
                                                    this.logger.warn(
                                                        "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
                                                    );
                                            }
                                            var L = [],
                                                I = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
                                            if ("fallback" === this.options.saveMissingTo && I && I[0]) for (var j = 0; j < I.length; j++) L.push(I[j]);
                                            else "all" === this.options.saveMissingTo ? (L = this.languageUtils.toResolveHierarchy(n.lng || this.language)) : L.push(n.lng || this.language);
                                            var B = function (e, t, a) {
                                                i.options.missingKeyHandler
                                                    ? i.options.missingKeyHandler(e, l, t, E ? a : f, E, n)
                                                    : i.backendConnector && i.backendConnector.saveMissing && i.backendConnector.saveMissing(e, l, t, E ? a : f, E, n),
                                                    i.emit("missingKey", e, l, t, f);
                                            };
                                            this.options.saveMissing &&
                                                (this.options.saveMissingPlurals && D
                                                    ? L.forEach(function (e) {
                                                          i.pluralResolver.getSuffixes(e).forEach(function (t) {
                                                              B([e], s + t, n["defaultValue".concat(t)] || M);
                                                          });
                                                      })
                                                    : B(L, s, M));
                                        }
                                        (f = this.extendTranslation(f, e, n, p, a)),
                                            N && f === s && this.options.appendNamespaceToMissingKey && (f = "".concat(l, ":").concat(s)),
                                            N && this.options.parseMissingKeyHandler && (f = this.options.parseMissingKeyHandler(f));
                                    }
                                    return f;
                                },
                            },
                            {
                                key: "extendTranslation",
                                value: function (e, t, n, a, i) {
                                    var r = this;
                                    if (this.i18nFormat && this.i18nFormat.parse) e = this.i18nFormat.parse(e, n, a.usedLng, a.usedNS, a.usedKey, { resolved: a });
                                    else if (!n.skipInterpolation) {
                                        n.interpolation && this.interpolator.init(ge({}, n, { interpolation: ge({}, this.options.interpolation, n.interpolation) }));
                                        var o,
                                            s = (n.interpolation && n.interpolation.skipOnVariables) || this.options.interpolation.skipOnVariables;
                                        if (s) {
                                            var c = e.match(this.interpolator.nestingRegexp);
                                            o = c && c.length;
                                        }
                                        var l = n.replace && "string" != typeof n.replace ? n.replace : n;
                                        if ((this.options.interpolation.defaultVariables && (l = ge({}, this.options.interpolation.defaultVariables, l)), (e = this.interpolator.interpolate(e, l, n.lng || this.language, n)), s)) {
                                            var u = e.match(this.interpolator.nestingRegexp);
                                            o < (u && u.length) && (n.nest = !1);
                                        }
                                        !1 !== n.nest &&
                                            (e = this.interpolator.nest(
                                                e,
                                                function () {
                                                    for (var e = arguments.length, a = new Array(e), o = 0; o < e; o++) a[o] = arguments[o];
                                                    return i && i[0] === a[0] && !n.context ? (r.logger.warn("It seems you are nesting recursively key: ".concat(a[0], " in key: ").concat(t[0])), null) : r.translate.apply(r, a.concat([t]));
                                                },
                                                n
                                            )),
                                            n.interpolation && this.interpolator.reset();
                                    }
                                    var d = n.postProcess || this.options.postProcess,
                                        h = "string" == typeof d ? [d] : d;
                                    return null != e && h && h.length && !1 !== n.applyPostProcessor && (e = Ve.handle(h, e, t, this.options && this.options.postProcessPassResolved ? ge({ i18nResolved: a }, n) : n, this)), e;
                                },
                            },
                            {
                                key: "resolve",
                                value: function (e) {
                                    var t,
                                        n,
                                        a,
                                        i,
                                        r,
                                        o = this,
                                        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    return (
                                        "string" == typeof e && (e = [e]),
                                        e.forEach(function (e) {
                                            if (!o.isValidLookup(t)) {
                                                var c = o.extractFromKey(e, s),
                                                    l = c.key;
                                                n = l;
                                                var u = c.namespaces;
                                                o.options.fallbackNS && (u = u.concat(o.options.fallbackNS));
                                                var d = void 0 !== s.count && "string" != typeof s.count,
                                                    h = void 0 !== s.context && ("string" == typeof s.context || "number" == typeof s.context) && "" !== s.context,
                                                    p = s.lngs ? s.lngs : o.languageUtils.toResolveHierarchy(s.lng || o.language, s.fallbackLng);
                                                u.forEach(function (e) {
                                                    o.isValidLookup(t) ||
                                                        ((r = e),
                                                        !He["".concat(p[0], "-").concat(e)] &&
                                                            o.utils &&
                                                            o.utils.hasLoadedNamespace &&
                                                            !o.utils.hasLoadedNamespace(r) &&
                                                            ((He["".concat(p[0], "-").concat(e)] = !0),
                                                            o.logger.warn(
                                                                'key "'.concat(n, '" for languages "').concat(p.join(", "), '" won\'t get resolved as namespace "').concat(r, '" was not yet loaded'),
                                                                "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                                                            )),
                                                        p.forEach(function (n) {
                                                            if (!o.isValidLookup(t)) {
                                                                i = n;
                                                                var r,
                                                                    c,
                                                                    u = l,
                                                                    p = [u];
                                                                if (o.i18nFormat && o.i18nFormat.addLookupKeys) o.i18nFormat.addLookupKeys(p, l, n, e, s);
                                                                else
                                                                    d && (r = o.pluralResolver.getSuffix(n, s.count)),
                                                                        d && h && p.push(u + r),
                                                                        h && p.push((u += "".concat(o.options.contextSeparator).concat(s.context))),
                                                                        d && p.push((u += r));
                                                                for (; (c = p.pop()); ) o.isValidLookup(t) || ((a = c), (t = o.getResource(n, e, c, s)));
                                                            }
                                                        }));
                                                });
                                            }
                                        }),
                                        { res: t, usedKey: n, exactUsedKey: a, usedLng: i, usedNS: r }
                                    );
                                },
                            },
                            {
                                key: "isValidLookup",
                                value: function (e) {
                                    return !(void 0 === e || (!this.options.returnNull && null === e) || (!this.options.returnEmptyString && "" === e));
                                },
                            },
                            {
                                key: "getResource",
                                value: function (e, t, n) {
                                    var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                                    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, a) : this.resourceStore.getResource(e, t, n, a);
                                },
                            },
                        ],
                        [
                            {
                                key: "hasDefaultValue",
                                value: function (e) {
                                    for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t) && "defaultValue" === t.substring(0, "defaultValue".length) && void 0 !== e[t]) return !0;
                                    return !1;
                                },
                            },
                        ]
                    ),
                    t
                );
            })(Ne);
        function We(e) {
            return e.charAt(0).toUpperCase() + e.slice(1);
        }
        var Ue = (function () {
                function e(t) {
                    me(this, e), (this.options = t), (this.whitelist = this.options.supportedLngs || !1), (this.supportedLngs = this.options.supportedLngs || !1), (this.logger = Ae.create("languageUtils"));
                }
                return (
                    ye(e, [
                        {
                            key: "getScriptPartFromCode",
                            value: function (e) {
                                if (!e || e.indexOf("-") < 0) return null;
                                var t = e.split("-");
                                return 2 === t.length ? null : (t.pop(), "x" === t[t.length - 1].toLowerCase() ? null : this.formatLanguageCode(t.join("-")));
                            },
                        },
                        {
                            key: "getLanguagePartFromCode",
                            value: function (e) {
                                if (!e || e.indexOf("-") < 0) return e;
                                var t = e.split("-");
                                return this.formatLanguageCode(t[0]);
                            },
                        },
                        {
                            key: "formatLanguageCode",
                            value: function (e) {
                                if ("string" == typeof e && e.indexOf("-") > -1) {
                                    var t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
                                        n = e.split("-");
                                    return (
                                        this.options.lowerCaseLng
                                            ? (n = n.map(function (e) {
                                                  return e.toLowerCase();
                                              }))
                                            : 2 === n.length
                                            ? ((n[0] = n[0].toLowerCase()), (n[1] = n[1].toUpperCase()), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = We(n[1].toLowerCase())))
                                            : 3 === n.length &&
                                              ((n[0] = n[0].toLowerCase()),
                                              2 === n[1].length && (n[1] = n[1].toUpperCase()),
                                              "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()),
                                              t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = We(n[1].toLowerCase())),
                                              t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = We(n[2].toLowerCase()))),
                                        n.join("-")
                                    );
                                }
                                return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e;
                            },
                        },
                        {
                            key: "isWhitelisted",
                            value: function (e) {
                                return (
                                    this.logger.deprecate("languageUtils.isWhitelisted", 'function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it\'s usage asap.'),
                                    this.isSupportedCode(e)
                                );
                            },
                        },
                        {
                            key: "isSupportedCode",
                            value: function (e) {
                                return (
                                    ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)),
                                    !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
                                );
                            },
                        },
                        {
                            key: "getBestMatchFromCodes",
                            value: function (e) {
                                var t,
                                    n = this;
                                return e
                                    ? (e.forEach(function (e) {
                                          if (!t) {
                                              var a = n.formatLanguageCode(e);
                                              (n.options.supportedLngs && !n.isSupportedCode(a)) || (t = a);
                                          }
                                      }),
                                      !t &&
                                          this.options.supportedLngs &&
                                          e.forEach(function (e) {
                                              if (!t) {
                                                  var a = n.getLanguagePartFromCode(e);
                                                  if (n.isSupportedCode(a)) return (t = a);
                                                  t = n.options.supportedLngs.find(function (e) {
                                                      if (0 === e.indexOf(a)) return e;
                                                  });
                                              }
                                          }),
                                      t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]),
                                      t)
                                    : null;
                            },
                        },
                        {
                            key: "getFallbackCodes",
                            value: function (e, t) {
                                if (!e) return [];
                                if (("function" == typeof e && (e = e(t)), "string" == typeof e && (e = [e]), "[object Array]" === Object.prototype.toString.apply(e))) return e;
                                if (!t) return e.default || [];
                                var n = e[t];
                                return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e[this.getLanguagePartFromCode(t)]), n || (n = e.default), n || [];
                            },
                        },
                        {
                            key: "toResolveHierarchy",
                            value: function (e, t) {
                                var n = this,
                                    a = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
                                    i = [],
                                    r = function (e) {
                                        e && (n.isSupportedCode(e) ? i.push(e) : n.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)));
                                    };
                                return (
                                    "string" == typeof e && e.indexOf("-") > -1
                                        ? ("languageOnly" !== this.options.load && r(this.formatLanguageCode(e)),
                                          "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && r(this.getScriptPartFromCode(e)),
                                          "currentOnly" !== this.options.load && r(this.getLanguagePartFromCode(e)))
                                        : "string" == typeof e && r(this.formatLanguageCode(e)),
                                    a.forEach(function (e) {
                                        i.indexOf(e) < 0 && r(n.formatLanguageCode(e));
                                    }),
                                    i
                                );
                            },
                        },
                    ]),
                    e
                );
            })(),
            Je = [
                { lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"], nr: [1, 2], fc: 1 },
                {
                    lngs: [
                        "af",
                        "an",
                        "ast",
                        "az",
                        "bg",
                        "bn",
                        "ca",
                        "da",
                        "de",
                        "dev",
                        "el",
                        "en",
                        "eo",
                        "es",
                        "et",
                        "eu",
                        "fi",
                        "fo",
                        "fur",
                        "fy",
                        "gl",
                        "gu",
                        "ha",
                        "hi",
                        "hu",
                        "hy",
                        "ia",
                        "it",
                        "kk",
                        "kn",
                        "ku",
                        "lb",
                        "mai",
                        "ml",
                        "mn",
                        "mr",
                        "nah",
                        "nap",
                        "nb",
                        "ne",
                        "nl",
                        "nn",
                        "no",
                        "nso",
                        "pa",
                        "pap",
                        "pms",
                        "ps",
                        "pt-PT",
                        "rm",
                        "sco",
                        "se",
                        "si",
                        "so",
                        "son",
                        "sq",
                        "sv",
                        "sw",
                        "ta",
                        "te",
                        "tk",
                        "ur",
                        "yo",
                    ],
                    nr: [1, 2],
                    fc: 2,
                },
                { lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"], nr: [1], fc: 3 },
                { lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"], nr: [1, 2, 5], fc: 4 },
                { lngs: ["ar"], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
                { lngs: ["cs", "sk"], nr: [1, 2, 5], fc: 6 },
                { lngs: ["csb", "pl"], nr: [1, 2, 5], fc: 7 },
                { lngs: ["cy"], nr: [1, 2, 3, 8], fc: 8 },
                { lngs: ["fr"], nr: [1, 2], fc: 9 },
                { lngs: ["ga"], nr: [1, 2, 3, 7, 11], fc: 10 },
                { lngs: ["gd"], nr: [1, 2, 3, 20], fc: 11 },
                { lngs: ["is"], nr: [1, 2], fc: 12 },
                { lngs: ["jv"], nr: [0, 1], fc: 13 },
                { lngs: ["kw"], nr: [1, 2, 3, 4], fc: 14 },
                { lngs: ["lt"], nr: [1, 2, 10], fc: 15 },
                { lngs: ["lv"], nr: [1, 2, 0], fc: 16 },
                { lngs: ["mk"], nr: [1, 2], fc: 17 },
                { lngs: ["mnk"], nr: [0, 1, 2], fc: 18 },
                { lngs: ["mt"], nr: [1, 2, 11, 20], fc: 19 },
                { lngs: ["or"], nr: [2, 1], fc: 2 },
                { lngs: ["ro"], nr: [1, 2, 20], fc: 20 },
                { lngs: ["sl"], nr: [5, 1, 2, 3], fc: 21 },
                { lngs: ["he", "iw"], nr: [1, 2, 20, 21], fc: 22 },
            ],
            $e = {
                1: function (e) {
                    return Number(e > 1);
                },
                2: function (e) {
                    return Number(1 != e);
                },
                3: function (e) {
                    return 0;
                },
                4: function (e) {
                    return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2);
                },
                5: function (e) {
                    return Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5);
                },
                6: function (e) {
                    return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2);
                },
                7: function (e) {
                    return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2);
                },
                8: function (e) {
                    return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3);
                },
                9: function (e) {
                    return Number(e >= 2);
                },
                10: function (e) {
                    return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4);
                },
                11: function (e) {
                    return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3);
                },
                12: function (e) {
                    return Number(e % 10 != 1 || e % 100 == 11);
                },
                13: function (e) {
                    return Number(0 !== e);
                },
                14: function (e) {
                    return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3);
                },
                15: function (e) {
                    return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2);
                },
                16: function (e) {
                    return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2);
                },
                17: function (e) {
                    return Number(1 == e || (e % 10 == 1 && e % 100 != 11) ? 0 : 1);
                },
                18: function (e) {
                    return Number(0 == e ? 0 : 1 == e ? 1 : 2);
                },
                19: function (e) {
                    return Number(1 == e ? 0 : 0 == e || (e % 100 > 1 && e % 100 < 11) ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3);
                },
                20: function (e) {
                    return Number(1 == e ? 0 : 0 == e || (e % 100 > 0 && e % 100 < 20) ? 1 : 2);
                },
                21: function (e) {
                    return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0);
                },
                22: function (e) {
                    return Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3);
                },
            };
        function Ze() {
            var e = {};
            return (
                Je.forEach(function (t) {
                    t.lngs.forEach(function (n) {
                        e[n] = { numbers: t.nr, plurals: $e[t.fc] };
                    });
                }),
                e
            );
        }
        var Qe = (function () {
                function e(t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    me(this, e), (this.languageUtils = t), (this.options = n), (this.logger = Ae.create("pluralResolver")), (this.rules = Ze());
                }
                return (
                    ye(e, [
                        {
                            key: "addRule",
                            value: function (e, t) {
                                this.rules[e] = t;
                            },
                        },
                        {
                            key: "getRule",
                            value: function (e) {
                                return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)];
                            },
                        },
                        {
                            key: "needsPlural",
                            value: function (e) {
                                var t = this.getRule(e);
                                return t && t.numbers.length > 1;
                            },
                        },
                        {
                            key: "getPluralFormsOfKey",
                            value: function (e, t) {
                                return this.getSuffixes(e).map(function (e) {
                                    return t + e;
                                });
                            },
                        },
                        {
                            key: "getSuffixes",
                            value: function (e) {
                                var t = this,
                                    n = this.getRule(e);
                                return n
                                    ? n.numbers.map(function (n) {
                                          return t.getSuffix(e, n);
                                      })
                                    : [];
                            },
                        },
                        {
                            key: "getSuffix",
                            value: function (e, t) {
                                var n = this,
                                    a = this.getRule(e);
                                if (a) {
                                    var i = a.noAbs ? a.plurals(t) : a.plurals(Math.abs(t)),
                                        r = a.numbers[i];
                                    this.options.simplifyPluralSuffix && 2 === a.numbers.length && 1 === a.numbers[0] && (2 === r ? (r = "plural") : 1 === r && (r = ""));
                                    var o = function () {
                                        return n.options.prepend && r.toString() ? n.options.prepend + r.toString() : r.toString();
                                    };
                                    return "v1" === this.options.compatibilityJSON
                                        ? 1 === r
                                            ? ""
                                            : "number" == typeof r
                                            ? "_plural_".concat(r.toString())
                                            : o()
                                        : "v2" === this.options.compatibilityJSON || (this.options.simplifyPluralSuffix && 2 === a.numbers.length && 1 === a.numbers[0])
                                        ? o()
                                        : this.options.prepend && i.toString()
                                        ? this.options.prepend + i.toString()
                                        : i.toString();
                                }
                                return this.logger.warn("no plural rule found for: ".concat(e)), "";
                            },
                        },
                    ]),
                    e
                );
            })(),
            Ye = (function () {
                function e() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    me(this, e),
                        (this.logger = Ae.create("interpolator")),
                        (this.options = t),
                        (this.format =
                            (t.interpolation && t.interpolation.format) ||
                            function (e) {
                                return e;
                            }),
                        this.init(t);
                }
                return (
                    ye(e, [
                        {
                            key: "init",
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                e.interpolation || (e.interpolation = { escapeValue: !0 });
                                var t = e.interpolation;
                                (this.escape = void 0 !== t.escape ? t.escape : ze),
                                    (this.escapeValue = void 0 === t.escapeValue || t.escapeValue),
                                    (this.useRawValueToEscape = void 0 !== t.useRawValueToEscape && t.useRawValueToEscape),
                                    (this.prefix = t.prefix ? je(t.prefix) : t.prefixEscaped || "{{"),
                                    (this.suffix = t.suffix ? je(t.suffix) : t.suffixEscaped || "}}"),
                                    (this.formatSeparator = t.formatSeparator ? t.formatSeparator : t.formatSeparator || ","),
                                    (this.unescapePrefix = t.unescapeSuffix ? "" : t.unescapePrefix || "-"),
                                    (this.unescapeSuffix = this.unescapePrefix ? "" : t.unescapeSuffix || ""),
                                    (this.nestingPrefix = t.nestingPrefix ? je(t.nestingPrefix) : t.nestingPrefixEscaped || je("$t(")),
                                    (this.nestingSuffix = t.nestingSuffix ? je(t.nestingSuffix) : t.nestingSuffixEscaped || je(")")),
                                    (this.nestingOptionsSeparator = t.nestingOptionsSeparator ? t.nestingOptionsSeparator : t.nestingOptionsSeparator || ","),
                                    (this.maxReplaces = t.maxReplaces ? t.maxReplaces : 1e3),
                                    (this.alwaysFormat = void 0 !== t.alwaysFormat && t.alwaysFormat),
                                    this.resetRegExp();
                            },
                        },
                        {
                            key: "reset",
                            value: function () {
                                this.options && this.init(this.options);
                            },
                        },
                        {
                            key: "resetRegExp",
                            value: function () {
                                var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
                                this.regexp = new RegExp(e, "g");
                                var t = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
                                this.regexpUnescape = new RegExp(t, "g");
                                var n = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
                                this.nestingRegexp = new RegExp(n, "g");
                            },
                        },
                        {
                            key: "interpolate",
                            value: function (e, t, n, a) {
                                var i,
                                    r,
                                    o,
                                    s = this,
                                    c = (this.options && this.options.interpolation && this.options.interpolation.defaultVariables) || {};
                                function l(e) {
                                    return e.replace(/\$/g, "$$$$");
                                }
                                var u = function (e) {
                                    if (e.indexOf(s.formatSeparator) < 0) {
                                        var i = Le(t, c, e);
                                        return s.alwaysFormat ? s.format(i, void 0, n, ge({}, a, t, { interpolationkey: e })) : i;
                                    }
                                    var r = e.split(s.formatSeparator),
                                        o = r.shift().trim(),
                                        l = r.join(s.formatSeparator).trim();
                                    return s.format(Le(t, c, o), l, n, ge({}, a, t, { interpolationkey: o }));
                                };
                                this.resetRegExp();
                                var d = (a && a.missingInterpolationHandler) || this.options.missingInterpolationHandler,
                                    h = (a && a.interpolation && a.interpolation.skipOnVariables) || this.options.interpolation.skipOnVariables;
                                return (
                                    [
                                        {
                                            regex: this.regexpUnescape,
                                            safeValue: function (e) {
                                                return l(e);
                                            },
                                        },
                                        {
                                            regex: this.regexp,
                                            safeValue: function (e) {
                                                return s.escapeValue ? l(s.escape(e)) : l(e);
                                            },
                                        },
                                    ].forEach(function (t) {
                                        for (o = 0; (i = t.regex.exec(e)); ) {
                                            if (void 0 === (r = u(i[1].trim())))
                                                if ("function" == typeof d) {
                                                    var n = d(e, i, a);
                                                    r = "string" == typeof n ? n : "";
                                                } else {
                                                    if (h) {
                                                        r = i[0];
                                                        continue;
                                                    }
                                                    s.logger.warn("missed to pass in variable ".concat(i[1], " for interpolating ").concat(e)), (r = "");
                                                }
                                            else "string" == typeof r || s.useRawValueToEscape || (r = Oe(r));
                                            var c = t.safeValue(r);
                                            if (((e = e.replace(i[0], c)), h ? ((t.regex.lastIndex += c.length), (t.regex.lastIndex -= i[0].length)) : (t.regex.lastIndex = 0), ++o >= s.maxReplaces)) break;
                                        }
                                    }),
                                    e
                                );
                            },
                        },
                        {
                            key: "nest",
                            value: function (e, t) {
                                var n,
                                    a,
                                    i = this,
                                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                    o = ge({}, r);
                                function s(e, t) {
                                    var n = this.nestingOptionsSeparator;
                                    if (e.indexOf(n) < 0) return e;
                                    var a = e.split(new RegExp("".concat(n, "[ ]*{"))),
                                        i = "{".concat(a[1]);
                                    (e = a[0]), (i = (i = this.interpolate(i, o)).replace(/'/g, '"'));
                                    try {
                                        (o = JSON.parse(i)), t && (o = ge({}, t, o));
                                    } catch (t) {
                                        return this.logger.warn("failed parsing options string in nesting for key ".concat(e), t), "".concat(e).concat(n).concat(i);
                                    }
                                    return delete o.defaultValue, e;
                                }
                                for (o.applyPostProcessor = !1, delete o.defaultValue; (n = this.nestingRegexp.exec(e)); ) {
                                    var c = [],
                                        l = !1;
                                    if (-1 !== n[0].indexOf(this.formatSeparator) && !/{.*}/.test(n[1])) {
                                        var u = n[1].split(this.formatSeparator).map(function (e) {
                                            return e.trim();
                                        });
                                        (n[1] = u.shift()), (c = u), (l = !0);
                                    }
                                    if ((a = t(s.call(this, n[1].trim(), o), o)) && n[0] === e && "string" != typeof a) return a;
                                    "string" != typeof a && (a = Oe(a)),
                                        a || (this.logger.warn("missed to resolve ".concat(n[1], " for nesting ").concat(e)), (a = "")),
                                        l &&
                                            (a = c.reduce(function (e, t) {
                                                return i.format(e, t, r.lng, ge({}, r, { interpolationkey: n[1].trim() }));
                                            }, a.trim())),
                                        (e = e.replace(n[0], a)),
                                        (this.regexp.lastIndex = 0);
                                }
                                return e;
                            },
                        },
                    ]),
                    e
                );
            })();
        var Xe = (function (e) {
            function t(e, n, a) {
                var i,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                return (
                    me(this, t),
                    (i = we(this, Ce(t).call(this))),
                    Fe && Ne.call(Se(i)),
                    (i.backend = e),
                    (i.store = n),
                    (i.services = a),
                    (i.languageUtils = a.languageUtils),
                    (i.options = r),
                    (i.logger = Ae.create("backendConnector")),
                    (i.state = {}),
                    (i.queue = []),
                    i.backend && i.backend.init && i.backend.init(a, r.backend, r),
                    i
                );
            }
            return (
                xe(t, e),
                ye(t, [
                    {
                        key: "queueLoad",
                        value: function (e, t, n, a) {
                            var i = this,
                                r = [],
                                o = [],
                                s = [],
                                c = [];
                            return (
                                e.forEach(function (e) {
                                    var a = !0;
                                    t.forEach(function (t) {
                                        var s = "".concat(e, "|").concat(t);
                                        !n.reload && i.store.hasResourceBundle(e, t)
                                            ? (i.state[s] = 2)
                                            : i.state[s] < 0 || (1 === i.state[s] ? o.indexOf(s) < 0 && o.push(s) : ((i.state[s] = 1), (a = !1), o.indexOf(s) < 0 && o.push(s), r.indexOf(s) < 0 && r.push(s), c.indexOf(t) < 0 && c.push(t)));
                                    }),
                                        a || s.push(e);
                                }),
                                (r.length || o.length) && this.queue.push({ pending: o, loaded: {}, errors: [], callback: a }),
                                { toLoad: r, pending: o, toLoadLanguages: s, toLoadNamespaces: c }
                            );
                        },
                    },
                    {
                        key: "loaded",
                        value: function (e, t, n) {
                            var a = e.split("|"),
                                i = a[0],
                                r = a[1];
                            t && this.emit("failedLoading", i, r, t), n && this.store.addResourceBundle(i, r, n), (this.state[e] = t ? -1 : 2);
                            var o = {};
                            this.queue.forEach(function (n) {
                                var a, s, c, l, u, d;
                                (a = n.loaded),
                                    (s = r),
                                    (l = Me(a, [i], Object)),
                                    (u = l.obj),
                                    (d = l.k),
                                    (u[d] = u[d] || []),
                                    c && (u[d] = u[d].concat(s)),
                                    c || u[d].push(s),
                                    (function (e, t) {
                                        for (var n = e.indexOf(t); -1 !== n; ) e.splice(n, 1), (n = e.indexOf(t));
                                    })(n.pending, e),
                                    t && n.errors.push(t),
                                    0 !== n.pending.length ||
                                        n.done ||
                                        (Object.keys(n.loaded).forEach(function (e) {
                                            o[e] || (o[e] = []),
                                                n.loaded[e].length &&
                                                    n.loaded[e].forEach(function (t) {
                                                        o[e].indexOf(t) < 0 && o[e].push(t);
                                                    });
                                        }),
                                        (n.done = !0),
                                        n.errors.length ? n.callback(n.errors) : n.callback());
                            }),
                                this.emit("loaded", o),
                                (this.queue = this.queue.filter(function (e) {
                                    return !e.done;
                                }));
                        },
                    },
                    {
                        key: "read",
                        value: function (e, t, n) {
                            var a = this,
                                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 350,
                                o = arguments.length > 5 ? arguments[5] : void 0;
                            return e.length
                                ? this.backend[n](e, t, function (s, c) {
                                      s && c && i < 5
                                          ? setTimeout(function () {
                                                a.read.call(a, e, t, n, i + 1, 2 * r, o);
                                            }, r)
                                          : o(s, c);
                                  })
                                : o(null, {});
                        },
                    },
                    {
                        key: "prepareLoading",
                        value: function (e, t) {
                            var n = this,
                                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                i = arguments.length > 3 ? arguments[3] : void 0;
                            if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), i && i();
                            "string" == typeof e && (e = this.languageUtils.toResolveHierarchy(e)), "string" == typeof t && (t = [t]);
                            var r = this.queueLoad(e, t, a, i);
                            if (!r.toLoad.length) return r.pending.length || i(), null;
                            r.toLoad.forEach(function (e) {
                                n.loadOne(e);
                            });
                        },
                    },
                    {
                        key: "load",
                        value: function (e, t, n) {
                            this.prepareLoading(e, t, {}, n);
                        },
                    },
                    {
                        key: "reload",
                        value: function (e, t, n) {
                            this.prepareLoading(e, t, { reload: !0 }, n);
                        },
                    },
                    {
                        key: "loadOne",
                        value: function (e) {
                            var t = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                a = e.split("|"),
                                i = a[0],
                                r = a[1];
                            this.read(i, r, "read", void 0, void 0, function (a, o) {
                                a && t.logger.warn("".concat(n, "loading namespace ").concat(r, " for language ").concat(i, " failed"), a),
                                    !a && o && t.logger.log("".concat(n, "loaded namespace ").concat(r, " for language ").concat(i), o),
                                    t.loaded(e, a, o);
                            });
                        },
                    },
                    {
                        key: "saveMissing",
                        value: function (e, t, n, a, i) {
                            var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                            this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t)
                                ? this.logger.warn(
                                      'did not save key "'.concat(n, '" as the namespace "').concat(t, '" was not yet loaded'),
                                      "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
                                  )
                                : null != n && "" !== n && (this.backend && this.backend.create && this.backend.create(e, t, n, a, null, ge({}, r, { isUpdate: i })), e && e[0] && this.store.addResource(e[0], t, n, a));
                        },
                    },
                ]),
                t
            );
        })(Ne);
        function et() {
            return {
                debug: !1,
                initImmediate: !0,
                ns: ["translation"],
                defaultNS: ["translation"],
                fallbackLng: ["dev"],
                fallbackNS: !1,
                whitelist: !1,
                nonExplicitWhitelist: !1,
                supportedLngs: !1,
                nonExplicitSupportedLngs: !1,
                load: "all",
                preload: !1,
                simplifyPluralSuffix: !0,
                keySeparator: ".",
                nsSeparator: ":",
                pluralSeparator: "_",
                contextSeparator: "_",
                partialBundledLanguages: !1,
                saveMissing: !1,
                updateMissing: !1,
                saveMissingTo: "fallback",
                saveMissingPlurals: !0,
                missingKeyHandler: !1,
                missingInterpolationHandler: !1,
                postProcess: !1,
                postProcessPassResolved: !1,
                returnNull: !0,
                returnEmptyString: !0,
                returnObjects: !1,
                joinArrays: !1,
                returnedObjectHandler: !1,
                parseMissingKeyHandler: !1,
                appendNamespaceToMissingKey: !1,
                appendNamespaceToCIMode: !1,
                overloadTranslationOptionHandler: function (e) {
                    var t = {};
                    if (("object" === pe(e[1]) && (t = e[1]), "string" == typeof e[1] && (t.defaultValue = e[1]), "string" == typeof e[2] && (t.tDescription = e[2]), "object" === pe(e[2]) || "object" === pe(e[3]))) {
                        var n = e[3] || e[2];
                        Object.keys(n).forEach(function (e) {
                            t[e] = n[e];
                        });
                    }
                    return t;
                },
                interpolation: {
                    escapeValue: !0,
                    format: function (e, t, n, a) {
                        return e;
                    },
                    prefix: "{{",
                    suffix: "}}",
                    formatSeparator: ",",
                    unescapePrefix: "-",
                    nestingPrefix: "$t(",
                    nestingSuffix: ")",
                    nestingOptionsSeparator: ",",
                    maxReplaces: 1e3,
                    skipOnVariables: !1,
                },
            };
        }
        function tt(e) {
            return (
                "string" == typeof e.ns && (e.ns = [e.ns]),
                "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]),
                "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]),
                e.whitelist && (e.whitelist && e.whitelist.indexOf("cimode") < 0 && (e.whitelist = e.whitelist.concat(["cimode"])), (e.supportedLngs = e.whitelist)),
                e.nonExplicitWhitelist && (e.nonExplicitSupportedLngs = e.nonExplicitWhitelist),
                e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])),
                e
            );
        }
        function nt() {}
        var at = new ((function (e) {
                function t() {
                    var e,
                        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        a = arguments.length > 1 ? arguments[1] : void 0;
                    if ((me(this, t), (e = we(this, Ce(t).call(this))), Fe && Ne.call(Se(e)), (e.options = tt(n)), (e.services = {}), (e.logger = Ae), (e.modules = { external: [] }), a && !e.isInitialized && !n.isClone)) {
                        if (!e.options.initImmediate) return e.init(n, a), we(e, Se(e));
                        setTimeout(function () {
                            e.init(n, a);
                        }, 0);
                    }
                    return e;
                }
                return (
                    xe(t, e),
                    ye(t, [
                        {
                            key: "init",
                            value: function () {
                                var e = this,
                                    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    n = arguments.length > 1 ? arguments[1] : void 0;
                                function a(e) {
                                    return e ? ("function" == typeof e ? new e() : e) : null;
                                }
                                if (
                                    ("function" == typeof t && ((n = t), (t = {})),
                                    t.whitelist && !t.supportedLngs && this.logger.deprecate("whitelist", 'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.'),
                                    t.nonExplicitWhitelist &&
                                        !t.nonExplicitSupportedLngs &&
                                        this.logger.deprecate("whitelist", 'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.'),
                                    (this.options = ge({}, et(), this.options, tt(t))),
                                    (this.format = this.options.interpolation.format),
                                    n || (n = nt),
                                    !this.options.isClone)
                                ) {
                                    this.modules.logger ? Ae.init(a(this.modules.logger), this.options) : Ae.init(null, this.options);
                                    var i = new Ue(this.options);
                                    this.store = new Ge(this.options.resources, this.options);
                                    var r = this.services;
                                    (r.logger = Ae),
                                        (r.resourceStore = this.store),
                                        (r.languageUtils = i),
                                        (r.pluralResolver = new Qe(i, { prepend: this.options.pluralSeparator, compatibilityJSON: this.options.compatibilityJSON, simplifyPluralSuffix: this.options.simplifyPluralSuffix })),
                                        (r.interpolator = new Ye(this.options)),
                                        (r.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
                                        (r.backendConnector = new Xe(a(this.modules.backend), r.resourceStore, r, this.options)),
                                        r.backendConnector.on("*", function (t) {
                                            for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i];
                                            e.emit.apply(e, [t].concat(a));
                                        }),
                                        this.modules.languageDetector && ((r.languageDetector = a(this.modules.languageDetector)), r.languageDetector.init(r, this.options.detection, this.options)),
                                        this.modules.i18nFormat && ((r.i18nFormat = a(this.modules.i18nFormat)), r.i18nFormat.init && r.i18nFormat.init(this)),
                                        (this.translator = new qe(this.services, this.options)),
                                        this.translator.on("*", function (t) {
                                            for (var n = arguments.length, a = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) a[i - 1] = arguments[i];
                                            e.emit.apply(e, [t].concat(a));
                                        }),
                                        this.modules.external.forEach(function (t) {
                                            t.init && t.init(e);
                                        });
                                }
                                if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                                    var o = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                                    o.length > 0 && "dev" !== o[0] && (this.options.lng = o[0]);
                                }
                                this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined");
                                var s = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
                                s.forEach(function (t) {
                                    e[t] = function () {
                                        var n;
                                        return (n = e.store)[t].apply(n, arguments);
                                    };
                                });
                                var c = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
                                c.forEach(function (t) {
                                    e[t] = function () {
                                        var n;
                                        return (n = e.store)[t].apply(n, arguments), e;
                                    };
                                });
                                var l = De(),
                                    u = function () {
                                        var t = function (t, a) {
                                            e.isInitialized && !e.initializedStoreOnce && e.logger.warn("init: i18next is already initialized. You should call init just once!"),
                                                (e.isInitialized = !0),
                                                e.options.isClone || e.logger.log("initialized", e.options),
                                                e.emit("initialized", e.options),
                                                l.resolve(a),
                                                n(t, a);
                                        };
                                        if (e.languages && "v1" !== e.options.compatibilityAPI && !e.isInitialized) return t(null, e.t.bind(e));
                                        e.changeLanguage(e.options.lng, t);
                                    };
                                return this.options.resources || !this.options.initImmediate ? u() : setTimeout(u, 0), l;
                            },
                        },
                        {
                            key: "loadResources",
                            value: function (e) {
                                var t = this,
                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nt,
                                    a = n,
                                    i = "string" == typeof e ? e : this.language;
                                if (("function" == typeof e && (a = e), !this.options.resources || this.options.partialBundledLanguages)) {
                                    if (i && "cimode" === i.toLowerCase()) return a();
                                    var r = [],
                                        o = function (e) {
                                            e &&
                                                t.services.languageUtils.toResolveHierarchy(e).forEach(function (e) {
                                                    r.indexOf(e) < 0 && r.push(e);
                                                });
                                        };
                                    if (i) o(i);
                                    else {
                                        var s = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                                        s.forEach(function (e) {
                                            return o(e);
                                        });
                                    }
                                    this.options.preload &&
                                        this.options.preload.forEach(function (e) {
                                            return o(e);
                                        }),
                                        this.services.backendConnector.load(r, this.options.ns, a);
                                } else a(null);
                            },
                        },
                        {
                            key: "reloadResources",
                            value: function (e, t, n) {
                                var a = De();
                                return (
                                    e || (e = this.languages),
                                    t || (t = this.options.ns),
                                    n || (n = nt),
                                    this.services.backendConnector.reload(e, t, function (e) {
                                        a.resolve(), n(e);
                                    }),
                                    a
                                );
                            },
                        },
                        {
                            key: "use",
                            value: function (e) {
                                if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                                if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                                return (
                                    "backend" === e.type && (this.modules.backend = e),
                                    ("logger" === e.type || (e.log && e.warn && e.error)) && (this.modules.logger = e),
                                    "languageDetector" === e.type && (this.modules.languageDetector = e),
                                    "i18nFormat" === e.type && (this.modules.i18nFormat = e),
                                    "postProcessor" === e.type && Ve.addPostProcessor(e),
                                    "3rdParty" === e.type && this.modules.external.push(e),
                                    this
                                );
                            },
                        },
                        {
                            key: "changeLanguage",
                            value: function (e, t) {
                                var n = this;
                                this.isLanguageChangingTo = e;
                                var a = De();
                                this.emit("languageChanging", e);
                                var i = function (i) {
                                    e || i || !n.services.languageDetector || (i = []);
                                    var r = "string" == typeof i ? i : n.services.languageUtils.getBestMatchFromCodes(i);
                                    r &&
                                        (n.language || ((n.language = r), (n.languages = n.services.languageUtils.toResolveHierarchy(r))),
                                        n.translator.language || n.translator.changeLanguage(r),
                                        n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(r)),
                                        n.loadResources(r, function (e) {
                                            !(function (e, i) {
                                                i
                                                    ? ((n.language = i),
                                                      (n.languages = n.services.languageUtils.toResolveHierarchy(i)),
                                                      n.translator.changeLanguage(i),
                                                      (n.isLanguageChangingTo = void 0),
                                                      n.emit("languageChanged", i),
                                                      n.logger.log("languageChanged", i))
                                                    : (n.isLanguageChangingTo = void 0),
                                                    a.resolve(function () {
                                                        return n.t.apply(n, arguments);
                                                    }),
                                                    t &&
                                                        t(e, function () {
                                                            return n.t.apply(n, arguments);
                                                        });
                                            })(e, r);
                                        });
                                };
                                return (
                                    e || !this.services.languageDetector || this.services.languageDetector.async
                                        ? !e && this.services.languageDetector && this.services.languageDetector.async
                                            ? this.services.languageDetector.detect(i)
                                            : i(e)
                                        : i(this.services.languageDetector.detect()),
                                    a
                                );
                            },
                        },
                        {
                            key: "getFixedT",
                            value: function (e, t) {
                                var n = this,
                                    a = function e(t, a) {
                                        var i;
                                        if ("object" !== pe(a)) {
                                            for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), s = 2; s < r; s++) o[s - 2] = arguments[s];
                                            i = n.options.overloadTranslationOptionHandler([t, a].concat(o));
                                        } else i = ge({}, a);
                                        return (i.lng = i.lng || e.lng), (i.lngs = i.lngs || e.lngs), (i.ns = i.ns || e.ns), n.t(t, i);
                                    };
                                return "string" == typeof e ? (a.lng = e) : (a.lngs = e), (a.ns = t), a;
                            },
                        },
                        {
                            key: "t",
                            value: function () {
                                var e;
                                return this.translator && (e = this.translator).translate.apply(e, arguments);
                            },
                        },
                        {
                            key: "exists",
                            value: function () {
                                var e;
                                return this.translator && (e = this.translator).exists.apply(e, arguments);
                            },
                        },
                        {
                            key: "setDefaultNamespace",
                            value: function (e) {
                                this.options.defaultNS = e;
                            },
                        },
                        {
                            key: "hasLoadedNamespace",
                            value: function (e) {
                                var t = this,
                                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
                                if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
                                var a = this.languages[0],
                                    i = !!this.options && this.options.fallbackLng,
                                    r = this.languages[this.languages.length - 1];
                                if ("cimode" === a.toLowerCase()) return !0;
                                var o = function (e, n) {
                                    var a = t.services.backendConnector.state["".concat(e, "|").concat(n)];
                                    return -1 === a || 2 === a;
                                };
                                if (n.precheck) {
                                    var s = n.precheck(this, o);
                                    if (void 0 !== s) return s;
                                }
                                return !!this.hasResourceBundle(a, e) || !this.services.backendConnector.backend || !(!o(a, e) || (i && !o(r, e)));
                            },
                        },
                        {
                            key: "loadNamespaces",
                            value: function (e, t) {
                                var n = this,
                                    a = De();
                                return this.options.ns
                                    ? ("string" == typeof e && (e = [e]),
                                      e.forEach(function (e) {
                                          n.options.ns.indexOf(e) < 0 && n.options.ns.push(e);
                                      }),
                                      this.loadResources(function (e) {
                                          a.resolve(), t && t(e);
                                      }),
                                      a)
                                    : (t && t(), Promise.resolve());
                            },
                        },
                        {
                            key: "loadLanguages",
                            value: function (e, t) {
                                var n = De();
                                "string" == typeof e && (e = [e]);
                                var a = this.options.preload || [],
                                    i = e.filter(function (e) {
                                        return a.indexOf(e) < 0;
                                    });
                                return i.length
                                    ? ((this.options.preload = a.concat(i)),
                                      this.loadResources(function (e) {
                                          n.resolve(), t && t(e);
                                      }),
                                      n)
                                    : (t && t(), Promise.resolve());
                            },
                        },
                        {
                            key: "dir",
                            value: function (e) {
                                if ((e || (e = this.languages && this.languages.length > 0 ? this.languages[0] : this.language), !e)) return "rtl";
                                return [
                                    "ar",
                                    "shu",
                                    "sqr",
                                    "ssh",
                                    "xaa",
                                    "yhd",
                                    "yud",
                                    "aao",
                                    "abh",
                                    "abv",
                                    "acm",
                                    "acq",
                                    "acw",
                                    "acx",
                                    "acy",
                                    "adf",
                                    "ads",
                                    "aeb",
                                    "aec",
                                    "afb",
                                    "ajp",
                                    "apc",
                                    "apd",
                                    "arb",
                                    "arq",
                                    "ars",
                                    "ary",
                                    "arz",
                                    "auz",
                                    "avl",
                                    "ayh",
                                    "ayl",
                                    "ayn",
                                    "ayp",
                                    "bbz",
                                    "pga",
                                    "he",
                                    "iw",
                                    "ps",
                                    "pbt",
                                    "pbu",
                                    "pst",
                                    "prp",
                                    "prd",
                                    "ug",
                                    "ur",
                                    "ydd",
                                    "yds",
                                    "yih",
                                    "ji",
                                    "yi",
                                    "hbo",
                                    "men",
                                    "xmn",
                                    "fa",
                                    "jpr",
                                    "peo",
                                    "pes",
                                    "prs",
                                    "dv",
                                    "sam",
                                ].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) >= 0
                                    ? "rtl"
                                    : "ltr";
                            },
                        },
                        {
                            key: "createInstance",
                            value: function () {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    n = arguments.length > 1 ? arguments[1] : void 0;
                                return new t(e, n);
                            },
                        },
                        {
                            key: "cloneInstance",
                            value: function () {
                                var e = this,
                                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : nt,
                                    i = ge({}, this.options, n, { isClone: !0 }),
                                    r = new t(i),
                                    o = ["store", "services", "language"];
                                return (
                                    o.forEach(function (t) {
                                        r[t] = e[t];
                                    }),
                                    (r.services = ge({}, this.services)),
                                    (r.services.utils = { hasLoadedNamespace: r.hasLoadedNamespace.bind(r) }),
                                    (r.translator = new qe(r.services, r.options)),
                                    r.translator.on("*", function (e) {
                                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
                                        r.emit.apply(r, [e].concat(n));
                                    }),
                                    r.init(i, a),
                                    (r.translator.options = r.options),
                                    (r.translator.backendConnector.services.utils = { hasLoadedNamespace: r.hasLoadedNamespace.bind(r) }),
                                    r
                                );
                            },
                        },
                        {
                            key: "toJSON",
                            value: function () {
                                return { options: this.options, store: this.store, language: this.language, languages: this.languages };
                            },
                        },
                    ]),
                    t
                );
            })(Ne))(),
            it = [],
            rt = it.forEach,
            ot = it.slice;
        function st(e) {
            return (
                rt.call(ot.call(arguments, 1), function (t) {
                    if (t) for (var n in t) void 0 === e[n] && (e[n] = t[n]);
                }),
                e
            );
        }
        var ct = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
            lt = function (e, t, n) {
                var a = n || {};
                a.path = a.path || "/";
                var i = e + "=" + encodeURIComponent(t);
                if (a.maxAge > 0) {
                    var r = a.maxAge - 0;
                    if (isNaN(r)) throw new Error("maxAge should be a Number");
                    i += "; Max-Age=" + Math.floor(r);
                }
                if (a.domain) {
                    if (!ct.test(a.domain)) throw new TypeError("option domain is invalid");
                    i += "; Domain=" + a.domain;
                }
                if (a.path) {
                    if (!ct.test(a.path)) throw new TypeError("option path is invalid");
                    i += "; Path=" + a.path;
                }
                if (a.expires) {
                    if ("function" != typeof a.expires.toUTCString) throw new TypeError("option expires is invalid");
                    i += "; Expires=" + a.expires.toUTCString();
                }
                if ((a.httpOnly && (i += "; HttpOnly"), a.secure && (i += "; Secure"), a.sameSite))
                    switch ("string" == typeof a.sameSite ? a.sameSite.toLowerCase() : a.sameSite) {
                        case !0:
                            i += "; SameSite=Strict";
                            break;
                        case "lax":
                            i += "; SameSite=Lax";
                            break;
                        case "strict":
                            i += "; SameSite=Strict";
                            break;
                        case "none":
                            i += "; SameSite=None";
                            break;
                        default:
                            throw new TypeError("option sameSite is invalid");
                    }
                return i;
            },
            ut = function (e, t, n, a) {
                var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : { path: "/", sameSite: "strict" };
                n && ((i.expires = new Date()), i.expires.setTime(i.expires.getTime() + 60 * n * 1e3)), a && (i.domain = a), (document.cookie = lt(e, encodeURIComponent(t), i));
            },
            dt = function (e) {
                for (var t = e + "=", n = document.cookie.split(";"), a = 0; a < n.length; a++) {
                    for (var i = n[a]; " " === i.charAt(0); ) i = i.substring(1, i.length);
                    if (0 === i.indexOf(t)) return i.substring(t.length, i.length);
                }
                return null;
            },
            ht = {
                name: "cookie",
                lookup: function (e) {
                    var t;
                    if (e.lookupCookie && "undefined" != typeof document) {
                        var n = dt(e.lookupCookie);
                        n && (t = n);
                    }
                    return t;
                },
                cacheUserLanguage: function (e, t) {
                    t.lookupCookie && "undefined" != typeof document && ut(t.lookupCookie, e, t.cookieMinutes, t.cookieDomain, t.cookieOptions);
                },
            },
            pt = {
                name: "querystring",
                lookup: function (e) {
                    var t;
                    if ("undefined" != typeof window)
                        for (var n = window.location.search.substring(1).split("&"), a = 0; a < n.length; a++) {
                            var i = n[a].indexOf("=");
                            if (i > 0) n[a].substring(0, i) === e.lookupQuerystring && (t = n[a].substring(i + 1));
                        }
                    return t;
                },
            },
            ft = null,
            gt = function () {
                if (null !== ft) return ft;
                try {
                    ft = "undefined" !== window && null !== window.localStorage;
                    window.localStorage.setItem("i18next.translate.boo", "foo"), window.localStorage.removeItem("i18next.translate.boo");
                } catch (e) {
                    ft = !1;
                }
                return ft;
            },
            mt = {
                name: "localStorage",
                lookup: function (e) {
                    var t;
                    if (e.lookupLocalStorage && gt()) {
                        var n = window.localStorage.getItem(e.lookupLocalStorage);
                        n && (t = n);
                    }
                    return t;
                },
                cacheUserLanguage: function (e, t) {
                    t.lookupLocalStorage && gt() && window.localStorage.setItem(t.lookupLocalStorage, e);
                },
            },
            vt = null,
            yt = function () {
                if (null !== vt) return vt;
                try {
                    vt = "undefined" !== window && null !== window.sessionStorage;
                    window.sessionStorage.setItem("i18next.translate.boo", "foo"), window.sessionStorage.removeItem("i18next.translate.boo");
                } catch (e) {
                    vt = !1;
                }
                return vt;
            },
            bt = {
                name: "sessionStorage",
                lookup: function (e) {
                    var t;
                    if (e.lookupSessionStorage && yt()) {
                        var n = window.sessionStorage.getItem(e.lookupSessionStorage);
                        n && (t = n);
                    }
                    return t;
                },
                cacheUserLanguage: function (e, t) {
                    t.lookupSessionStorage && yt() && window.sessionStorage.setItem(t.lookupSessionStorage, e);
                },
            },
            kt = {
                name: "navigator",
                lookup: function (e) {
                    var t = [];
                    if ("undefined" != typeof navigator) {
                        if (navigator.languages) for (var n = 0; n < navigator.languages.length; n++) t.push(navigator.languages[n]);
                        navigator.userLanguage && t.push(navigator.userLanguage), navigator.language && t.push(navigator.language);
                    }
                    return t.length > 0 ? t : void 0;
                },
            },
            St = {
                name: "htmlTag",
                lookup: function (e) {
                    var t,
                        n = e.htmlTag || ("undefined" != typeof document ? document.documentElement : null);
                    return n && "function" == typeof n.getAttribute && (t = n.getAttribute("lang")), t;
                },
            },
            wt = {
                name: "path",
                lookup: function (e) {
                    var t;
                    if ("undefined" != typeof window) {
                        var n = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
                        if (n instanceof Array)
                            if ("number" == typeof e.lookupFromPathIndex) {
                                if ("string" != typeof n[e.lookupFromPathIndex]) return;
                                t = n[e.lookupFromPathIndex].replace("/", "");
                            } else t = n[0].replace("/", "");
                    }
                    return t;
                },
            },
            Ct = {
                name: "subdomain",
                lookup: function (e) {
                    var t;
                    if ("undefined" != typeof window) {
                        var n = window.location.href.match(/(?:http[s]*\:\/\/)*(.*?)\.(?=[^\/]*\..{2,5})/gi);
                        n instanceof Array &&
                            (t =
                                "number" == typeof e.lookupFromSubdomainIndex
                                    ? n[e.lookupFromSubdomainIndex].replace("http://", "").replace("https://", "").replace(".", "")
                                    : n[0].replace("http://", "").replace("https://", "").replace(".", ""));
                    }
                    return t;
                },
            };
        var Pt = (function () {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                me(this, e), (this.type = "languageDetector"), (this.detectors = {}), this.init(t, n);
            }
            return (
                ye(e, [
                    {
                        key: "init",
                        value: function (e) {
                            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            (this.services = e),
                                (this.options = st(t, this.options || {}, {
                                    order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag"],
                                    lookupQuerystring: "lng",
                                    lookupCookie: "i18next",
                                    lookupLocalStorage: "i18nextLng",
                                    lookupSessionStorage: "i18nextLng",
                                    caches: ["localStorage"],
                                    excludeCacheFor: ["cimode"],
                                })),
                                this.options.lookupFromUrlIndex && (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
                                (this.i18nOptions = n),
                                this.addDetector(ht),
                                this.addDetector(pt),
                                this.addDetector(mt),
                                this.addDetector(bt),
                                this.addDetector(kt),
                                this.addDetector(St),
                                this.addDetector(wt),
                                this.addDetector(Ct);
                        },
                    },
                    {
                        key: "addDetector",
                        value: function (e) {
                            this.detectors[e.name] = e;
                        },
                    },
                    {
                        key: "detect",
                        value: function (e) {
                            var t = this;
                            e || (e = this.options.order);
                            var n = [];
                            return (
                                e.forEach(function (e) {
                                    if (t.detectors[e]) {
                                        var a = t.detectors[e].lookup(t.options);
                                        a && "string" == typeof a && (a = [a]), a && (n = n.concat(a));
                                    }
                                }),
                                this.services.languageUtils.getBestMatchFromCodes ? n : n.length > 0 ? n[0] : null
                            );
                        },
                    },
                    {
                        key: "cacheUserLanguage",
                        value: function (e, t) {
                            var n = this;
                            t || (t = this.options.caches),
                                t &&
                                    ((this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(e) > -1) ||
                                        t.forEach(function (t) {
                                            n.detectors[t] && n.detectors[t].cacheUserLanguage(e, n.options);
                                        }));
                        },
                    },
                ]),
                e
            );
        })();
        Pt.type = "languageDetector";
        var xt = Pt;
        const Tt = {
            de: {
                translation: {
                    cart: {
                        discountLabel: "Rabatt",
                        shippingLabel: "Versand",
                        subtotalLabel: "Zwischensumme",
                        grandTotalLabel: "Gesamtsumme",
                        taxLabel: "Steuer",
                        genericProcessingError: "Beim Versuch, die Zahlung zu verarbeiten, ist ein Fehler aufgetreten.",
                    },
                    braintree: { missingCreditCardFields: "Bitte fÃ¼llen Sie alle Zahlungsfelder aus und versuchen Sie es erneut" },
                },
            },
            en: {
                translation: {
                    cart: {
                        discountLabel: "Discount",
                        shippingLabel: "Shipping",
                        subtotalLabel: "Subtotal",
                        grandTotalLabel: "Grand Total",
                        taxLabel: "Tax",
                        vatIncluded: "VAT Included",
                        taxPendingMessage: "Plus applicable taxes",
                        genericProcessingError: "An error occurred while trying to process your payment",
                        freeShipping: "FREE SHIPPING",
                    },
                    braintree: { missingCreditCardFields: "Please fill in all payment fields and try again" },
                },
            },
            es: {
                translation: {
                    cart: {
                        discountLabel: "Descuento",
                        shippingLabel: "EnvÃ­o",
                        subtotalLabel: "Subtotal",
                        grandTotalLabel: "Total",
                        taxLabel: "Impuestos",
                        genericProcessingError: "OcurriÃ³ un error al tratar de procesar su pago, intÃ©ntelo de nuevo",
                    },
                    braintree: { missingCreditCardFields: "Rellene todos los campos de pago y vuelva a intentarlo" },
                },
            },
            it: {
                translation: {
                    cart: {
                        discountLabel: "Aconto",
                        shippingLabel: "Spedizione",
                        subtotalLabel: "Subtotale",
                        grandTotalLabel: "Totale generale",
                        taxLabel: "Imposte",
                        genericProcessingError: "Si Ã¨ verificato un errore durante il tentativo di elaborare il pagamento",
                    },
                    braintree: { missingCreditCardFields: "Compila tutti i campi di pagamento e riprova" },
                },
            },
            fi: {
                translation: {
                    cart: { discountLabel: "Alennus", shippingLabel: "Toimitus", subtotalLabel: "VÃ¤lisumma", grandTotalLabel: "Kaikki yhteensÃ¤", taxLabel: "Vero", genericProcessingError: "Maksusi kÃ¤sittelyssÃ¤ tapahtui virhe" },
                    braintree: { missingCreditCardFields: "TÃ¤ytÃ¤ kaikki maksukentÃ¤t ja yritÃ¤ uudelleen" },
                },
            },
            fr: {
                translation: {
                    cart: {
                        discountLabel: "RÃ©duction",
                        shippingLabel: "Livraison",
                        subtotalLabel: "Sous-total",
                        grandTotalLabel: "Total final",
                        taxLabel: "dont TVA",
                        genericProcessingError: "Une erreur est survenue lors de la tentative de traitement de votre paiement",
                    },
                    braintree: { missingCreditCardFields: "Veuillez remplir tous les champs de paiement et rÃ©essayer" },
                },
            },
            nl: {
                translation: {
                    cart: {
                        discountLabel: "Korting",
                        shippingLabel: "Verzending",
                        subtotalLabel: "Subtotaal",
                        grandTotalLabel: "Eindtotaal",
                        taxLabel: "Btw",
                        genericProcessingError: "Er is een fout opgetreden tijdens het verwerken van je betaling.",
                    },
                    braintree: { missingCreditCardFields: "Vul alle betalingsvelden in en probeer het opnieuw" },
                },
            },
            pt: {
                translation: {
                    cart: { discountLabel: "Desconto", shippingLabel: "Frete", subtotalLabel: "Subtotal", grandTotalLabel: "Total", taxLabel: "Imposto", genericProcessingError: "Um erro ocorreu na tentativa de processar o seu pagamento" },
                    braintree: { missingCreditCardFields: "Por favor, preencha todos os campos de pagamento e tente novamente" },
                },
            },
        };
        let At = null;
        function Nt() {
            return At || (at.use(xt).init({ fallbackLng: "en", resources: Tt }), (At = !0)), at;
        }
        const Dt = Nt();
        function Ot(e, t) {
            return t.showComparePricing && e.totalComparePrice > 0
                ? `<tr class="product-line">\n          <td>${e.imageTag}${e.titleWithQty}</td>\n          <td class="checkout-money">\n            <div class="compare-at-price">\n              ${e.totalComparePriceFormatted}\n            </div>\n            ${e.totalPriceFormatted}\n          </td>\n        </tr>`
                : `<tr class="product-line">\n          <td>${e.imageTag}${e.titleWithQty}</td>\n          <td class="checkout-money">${e.totalPriceFormatted}</td>\n        </tr>`;
        }
        function _t(e) {
            let t = "";
            e.currencyCart.lineItems;
            return (
                (t += '<table style="width: 100%">'),
                (t += "<tbody>"),
                (t += (function (e) {
                    const t = e.lineItemHtmlFn ? e.lineItemHtmlFn : Ot;
                    return e.currencyCart.lineItems
                        .map((n) => {
                            const a = Object.assign({}, n);
                            return (
                                (a.imageTag = ""),
                                e.showProductImages && "string" == typeof a.productImage && a.productImage.length > 0 && (a.imageTag = `<img src="${a.productImage}" alt="${a.title}"></img>`),
                                (a.titleWithQty = a.title),
                                a.quantity > 1 && (a.titleWithQty = `${a.quantity} x ${a.titleWithQty}`),
                                (a.totalPrice = a.price * a.quantity),
                                (a.totalPriceFormatted = e.currencyFormatter(a.totalPrice)),
                                (a.comparePrice = a.comparePrice || 0),
                                (a.totalComparePrice = a.compareAtPrice * a.quantity),
                                (a.totalComparePriceFormatted = e.currencyFormatter(a.totalComparePrice)),
                                t(a, e)
                            );
                        })
                        .join("");
                })(e)),
                (t += (function (e) {
                    let t = e.currencyFormatter(e.currencyCart.subTotal);
                    return `<tr class="subtotal-line">\n            <td>${Dt.t("cart.subtotalLabel")}</td>\n            <td class="checkout-money">${t}</td>\n          </tr>`;
                })(e)),
                (t += (function (e) {
                    if (0 === e.currencyCart.discountTotal) return "";
                    const t = e.currencyFormatter(-1 * e.currencyCart.discountTotal);
                    return `<tr class="discount-line">\n            <td>${Dt.t("cart.discountLabel")}</td>\n            <td class="checkout-money">${t}</td>\n          </tr>`;
                })(e)),
                (t += (function (e) {
                    const t = !e.currencyCart.shippingTotal || e.currencyCart.shippingTotal < 0.01 ? Dt.t("cart.freeShipping") : e.currencyFormatter(e.currencyCart.shippingTotal);
                    return `<tr class="shipping-line">\n            <td>${Dt.t("cart.shippingLabel")}</td>\n            <td class="checkout-money">${t}</td>\n          </tr>`;
                })(e)),
                (t += (function (e) {
                    if (!e.currencyCart.state.taxCalculated) return "";
                    let t = e.currencyFormatter(e.currencyCart.taxTotal);
                    return `<tr class="tax-line">\n            <td>${Dt.t("cart.taxLabel")}</td>\n            <td class="checkout-money">${t}</td>\n          </tr>`;
                })(e)),
                (t += (function (e) {
                    let t = e.currencyFormatter(e.currencyCart.total);
                    return e.showVatIncluded
                        ? `<tr class="total-line">\n              <td>${Dt.t("cart.grandTotalLabel")}<div class="taxPendingMessage"><span class="asterisk">*</span>${Dt.t(
                              "cart.vatIncluded"
                          )}</div></td>\n              <td class="checkout-money">${t}<span class="asterisk">*</span></td>\n            </tr>`
                        : e.showTaxPendingMessage && !e.currencyCart.state.taxCalculated
                        ? `<tr class="total-line">\n              <td>${Dt.t("cart.grandTotalLabel")}<div class="taxPendingMessage"><span class="asterisk">*</span>${Dt.t(
                              "cart.taxPendingMessage"
                          )}</div></td>\n              <td class="checkout-money">${t}<span class="asterisk">*</span></td>\n            </tr>`
                        : `<tr class="total-line">\n              <td>${Dt.t("cart.grandTotalLabel")}</td>\n              <td class="checkout-money">${t}</td>\n            </tr>`;
                })(e)),
                (t += "</tbody>"),
                (t += "</table>"),
                t
            );
        }
        function Mt(e) {
            let t = "";
            return (
                (t += "<table>"),
                (t += "<tbody>"),
                (t += `<tr><td colSpan="3">${e.first_name} ${e.last_name}</td></tr>`),
                e.address1 && (t += `<tr><td colSpan="3">${e.address1}</td></tr>`),
                e.address2 && (t += `<tr><td colSpan="3">${e.address2}</td></tr>`),
                (t += `<tr><td>${e.city}</td><td>${e.province}</td><td>${e.zip}</td></tr>`),
                (t += "</tbody>"),
                (t += "</table>"),
                t
            );
        }
        class Et {
            constructor(e) {
                a("Exposing methods on RTC Global");
                (this.log = a),
                    (this.acceptUpsellVariants = e.acceptUpsellGridData.bind(e)),
                    (this.setCurrentVariant = e.setCurrentVariantManual.bind(e)),
                    (this.formatCurrency = e.currencyFormatter.bind(e)),
                    (this.jQuery = e.jQuery),
                    ["setVariantQuantities", "getVariantQuantities", "currentShippingZone", "setNextUrlFn", "removeCoupon", "applyCoupon", "currentCouponCode", "getVariantData", "setLineItemHtmlFn"].forEach((t) => {
                        e[t] ? (this[t] = "function" == typeof e[t] ? e[t].bind(e) : e[t]) : a(`WARNING: '${t}' is missing from internal object, cannot expose`);
                    });
            }
        }
        const Rt = Nt();
        class Lt {
            constructor() {
                if ((a("Initializing....."), this.load_settings(), "string" == typeof this.settings.recoveryCartId)) {
                    let e = new URL(window.location.href);
                    e.searchParams.delete("recoveryCartId"), window.history.pushState({}, "", e.href);
                }
                (this.jQuery = r.a),
                    (this.apiClient = new g(this.settings)),
                    (this.cart = null),
                    (this.settings.sessionId = this.apiClient.sessionId),
                    (this.splitDecisions = (function (e) {
                        const t = "splittest_" + e,
                            n = f.a.get(t),
                            i = "string" == typeof n ? JSON.parse(n) : {},
                            r = {};
                        document.querySelectorAll(".checkout-split-test").forEach((e) => {
                            const t = e.dataset.splitId;
                            (r[t] = r[t] || []), r[t].push(e.dataset.splitValue);
                        });
                        for (let [e, t] of Object.entries(r))
                            (i[e] = i[e] || t[Math.floor(Math.random() * t.length)]),
                                a(`Split Testing id: ${e} value: ${i[e]}`),
                                document.querySelectorAll(`.checkout-split-test[data-split-id="${e}"][data-split-value="${i[e]}"]`).forEach((e) => {
                                    e.style.display = "block";
                                });
                        return f.a.set(t, JSON.stringify(i), { expires: 1 }), i;
                    })(this.settings.sessionId)),
                    (this.settings.splitDecisions = JSON.stringify(this.splitDecisions)),
                    (this.lineItemHtmlFn = null),
                    (this.nextUrlFn = null),
                    this.settings.nextUrl && this.settings.nextUrl.indexOf("{sessionId}") > -1 && (this.settings.nextUrl = this.settings.nextUrl.replace("{sessionId}", this.apiClient.sessionId)),
                    (this.isReceipt = this.settings.isReceiptPage || r()(".checkout-billing-address").length > 0 || r()(".checkout-shipping-address").length > 0),
                    (this.settings.estimateTax = this.isReceipt),
                    (this.firedPixels = []),
                    (this.pixelListeners = []),
                    (this.ccLock = !1),
                    (this.stripeLock = !1),
                    (this.ready = !1),
                    this.setupGlobals();
            }
            getVariantData(e) {
                const t = Object.assign({}, this.pricingData[e], this.pricingData[e].presentmentPrices[this.cart.cartCurrency]);
                delete t.presentmentPrices, (t.shippingRate = 0), (t.shippingRateFormatted = "");
                try {
                    t.shippingRates[this.cart.shippingZone] ? (t.shippingRate = t.shippingRates[this.cart.shippingZone]) : (t.shippingRate = t.shippingRates.DEFAULT || 0), (t.shippingRateFormatted = this.currencyFormatter(t.shippingRate));
                } catch (e) {
                    console.log(e);
                }
                return (
                    delete t.shippingRates,
                    ["price", "compareAtPrice", "compareSavings"].forEach((e) => {
                        const n = parseFloat(t[e]);
                        n && !isNaN(n) && (t[e + "Formatted"] = this.currencyFormatter(n));
                    }),
                    t
                );
            }
            eventsCommon() {
                return {
                    ip: this.settings.ipAddress,
                    userAgent: this.settings.userAgent,
                    sessionCartId: this.settings.sessionId,
                    advertorialPageName: this.cart.advertorialPageName,
                    landingPageName: this.cart.landingPageName,
                    auxPageName: this.cart.auxPageName,
                    funnelName: this.cart.funnelName,
                    pageParams: this.cart.checkoutPageParams,
                    country: this.cart.shippingZone,
                    primaryVariantId: this.cart.primaryVariantId,
                    splitDecisions: this.splitDecisions,
                    locale: this.cart.locale,
                    parentSessionCartId: this.cart.parentSessionCartId,
                    facebookPixelId: this.cart.facebookPixelId,
                    checkoutPageName: this.cart.checkoutPageName,
                };
            }
            setupGlobals() {
                (window.checkout = this),
                    (window.checkoutData = this.settings),
                    (window.checkoutData.cart = {}),
                    (window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || []),
                    window.checkoutReadyCallbacks.push(async () => {
                        this.fireCheckoutUpdateCallbacks();
                    }),
                    window.checkoutReadyCallbacks.push(async () => {
                        a("Initialization Complete");
                    }),
                    (window.apiClient = this.apiClient),
                    (window.checkoutUpdateCallbacks = window.checkoutUpdateCallbacks || []);
            }
            async setupCouponField() {
                r()(document).on("click", ".checkout-coupon-button", async () => {
                    const e = r()(".checkout-coupon-field").val(),
                        t = await this.apiClient.applyCoupon(e.trim());
                    this.setCart(t);
                }),
                    r()(document).on("click", ".checkout-remove-coupon", async () => {
                        const e = await this.apiClient.removeCoupon();
                        this.setCart(e);
                    }),
                    r()(document).on("keypress", ".checkout-coupon-field", async (e) => {
                        if (13 === e.which) {
                            const e = r()(".checkout-coupon-field").val(),
                                t = await this.apiClient.applyCoupon(e.trim());
                            this.setCart(t);
                        }
                    });
            }
            currentShippingZone() {
                return this.cart.shippingZone;
            }
            currentCouponCode() {
                return this.cart.couponCode;
            }
            async setupReceiptPage() {
                this.isReceipt && (m(".checkout-billing-address", Mt(this.cart.billingAddress)), m(".checkout-shipping-address", Mt(this.cart.shippingAddress)));
            }
            async addPixel(e) {
                (e = e.bind(this)), this.pixelListeners.push(e);
                for (let t = 0; t < this.firedPixels.length; t++) await e(this.firedPixels[t]);
            }
            async firePixel(e) {
                this.firedPixels.push(e),
                    await (async function (e) {
                        return e.eventId
                            ? e.eventId in oe
                                ? (console.warn("Event Ignored: Duplicate"), void console.warn(JSON.stringify(e, null, 4)))
                                : ((oe[e.eventId] = !0), void (await Promise.all([re.map((t) => t.fire(e))])))
                            : (console.warn("Event Ignored: no event ID"), void console.warn(JSON.stringify(e, null, 4)));
                    })(e);
                for (let t = 0; t < this.pixelListeners.length; t++) {
                    let n = this.pixelListeners[t];
                    try {
                        await n(e);
                    } catch (e) {
                        console.log("Failed to fire Pixel"), console.log(e);
                    }
                }
            }
            async firePixels() {
                const e = await this.apiClient.getBrowserEvents();
                if ("events" in e) for (let t = 0; t < e.events.length; t++) await this.firePixel(Object.assign({}, e.events[t], { no_server: !0 }));
            }
            async initBraintree() {
                if (null === document.getElementById("braintree-cc-number")) return;
                const e = document.getElementById("braintree-cc-number"),
                    t = document.getElementById("braintree-expiry"),
                    n = document.getElementById("braintree-cvv"),
                    i = "" + new Date().getUTCFullYear();
                let r = "1111 1111 1111 1111",
                    o = "123",
                    s = "12/" + i.substr(2, 2);
                e && (r = e.dataset.placeholder || r), t && (s = t.dataset.placeholder || s), n && (o = n.dataset.placeholder || o), (this.braintreeToken = await this.apiClient.initBraintree());
                const c = document.getElementsByTagName("head")[0],
                    l = document.createElement("script"),
                    u = document.createElement("script");
                (l.src = "https://js.braintreegateway.com/web/3.44.2/js/client.min.js"),
                    (u.src = "https://js.braintreegateway.com/web/3.44.2/js/hosted-fields.min.js"),
                    (l.async = !1),
                    (u.async = !1),
                    (u.onload = () => {
                        window.braintree.hostedFields.create(
                            {
                                authorization: this.braintreeToken.clientToken,
                                styles: { input: { color: "#3A3A3A" }, ".number": { "font-family": "monospace" }, ".valid": { color: "green" }, ".invalid": { color: "red" } },
                                fields: { number: { selector: "#braintree-cc-number", placeholder: r }, cvv: { selector: "#braintree-cvv", placeholder: o }, expirationDate: { selector: "#braintree-expiry", placeholder: s } },
                            },
                            (e, t) => {
                                e ? console.log(e) : (this.braintreeHostedFieldsInstance = t);
                            }
                        );
                    }),
                    c.appendChild(l),
                    c.appendChild(u),
                    a("Braintree initialized");
            }
            async initStripeCommon() {
                (this.stripe =
                    this.stripe ||
                    (await (function () {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return (
                            (z = !0),
                            B.then(function (e) {
                                return j(e, t);
                            })
                        );
                    })(this.settings.stripePublicKey))),
                    (this.stripeElements = this.stripeElements || this.stripe.elements());
            }
            async initStripe() {
                null !== document.getElementById("stripe-cc-number") &&
                    (await this.initStripeCommon(),
                    (this.cardNumberElement = this.stripeElements.create("cardNumber", { showIcon: !0 })),
                    this.cardNumberElement.mount("#stripe-cc-number"),
                    (this.cardExpElement = this.stripeElements.create("cardExpiry")),
                    this.cardExpElement.mount("#stripe-exp"),
                    (this.cardCvvElement = this.stripeElements.create("cardCvc")),
                    this.cardCvvElement.mount("#stripe-cvv"),
                    a("Stripe Initialized"));
            }
            async completeStripeWallet(e, t) {
                console.log("completeStripeWallet"), console.log(e);
                const n = e.shippingAddress;
                let a = n.recipient.split(" "),
                    i = a.shift(),
                    r = a.join(" ");
                r && r.trim && (r = r.trim()), i && i.trim && (i = i.trim()), "" === i && (i = "Unknown"), "" === r && (r = "Unknown");
                const o = { shipping: { first_name: i, last_name: r, address1: n.addressLine[0], address2: n.addressLine[1] || "", city: n.city, state: n.region, postal_code: n.postalCode, country: n.country, phone: n.phone } };
                (o.billing = o.shipping), (o.stripe_intent = t.paymentIntent), (o.email = e.payerEmail);
                let s = null;
                try {
                    s = await this.apiClient.charge(o);
                } catch (e) {
                    return alert(Rt.t("cart.genericProcessingError")), void C();
                }
                !s || "error" in s ? (alert(s.error), C()) : (window.location = this.getNextUrl());
            }
            async initStripeBancontact() {
                null !== document.getElementById("checkout-bancontact-container") && (a("Initializing Stripe bancontact"), await this.initStripeCommon());
            }
            async bancontactSubmitHandler(e) {
                e.preventDefault();
                const t = r()(e.currentTarget).closest("form")[0],
                    n = this.extractCcData(t),
                    a = ce(r()("#checkout-bancontact-container").data("checkout-next-url")),
                    i = ce(r()("#checkout-bancontact-container").data("checkout-fail-url")),
                    o = await this.apiClient.bancontactStripeIntent({ ccData: n, nextUrl: a, failUrl: i });
                console.log(n), console.log(o);
                const s = { payment_method: { billing_details: { email: n.email, name: `${n.billing.first_name} ${n.billing.last_name}` } }, return_url: o.return_url };
                console.log(s), this.stripe.confirmBancontactPayment(o.client_secret, s), console.log(e);
            }
            async initStripeIdeal() {
                null !== document.getElementById("checkout-ideal-container") &&
                    (a("Initializing Stripe iDeal"),
                    await this.initStripeCommon(),
                    (this.idealBankEle = this.stripeElements.create("idealBank", {})),
                    this.idealBankEle.mount("#checkout-ideal-container"),
                    this.idealBankEle.on("change", (e) => {
                        this.idealBankChoice = e.value;
                    }));
            }
            async idealSubmitHandler(e) {
                if ((e.preventDefault(), !this.idealBankChoice)) return void alert("Please choose your bank to continue checkout");
                const t = r()(e.currentTarget).closest("form")[0],
                    n = this.extractCcData(t),
                    a = ce(r()("#checkout-ideal-container").data("checkout-next-url")),
                    i = ce(r()("#checkout-ideal-container").data("checkout-fail-url")),
                    o = await this.apiClient.idealStripeIntent({ ccData: n, nextUrl: a, failUrl: i });
                console.log(n), console.log(o);
                const s = { payment_method: { ideal: this.idealBankEle, billing_details: { email: n.email, name: `${n.billing.first_name} ${n.billing.last_name}` } }, return_url: o.return_url };
                console.log(s), this.stripe.confirmIdealPayment(o.client_secret, s), console.log(e);
            }
            async initStripeWallet() {
                if (null === document.getElementById("stripe-wallet-button")) return;
                let e = null;
                await this.initStripeCommon();
                const t = await checkout.apiClient.walletRequestObject();
                if (!t || !t.reqObj) return;
                let n = null;
                try {
                    n = this.stripe.paymentRequest(t.reqObj);
                } catch (e) {
                    return void a("Unable to initialize stripe payment request: " + e);
                }
                const i = this.stripeElements.create("paymentRequestButton", { paymentRequest: n });
                n.canMakePayment().then(function (e) {
                    e ? i.mount("#stripe-wallet-button") : (document.getElementById("stripe-wallet-button").style.display = "none");
                }),
                    n.on("shippingaddresschange", async (e) => {
                        try {
                            const t = await this.apiClient.walletShipping({ shippingAddress: e.shippingAddress });
                            console.log("Updating from response"), e.updateWith({ status: "success", displayItems: t.displayItems, shippingOptions: t.shippingOptions, total: t.total });
                        } catch (t) {
                            console.log("ERR!"), console.log(t), e.updateWith({ status: "invalid_shipping_address" });
                        }
                    }),
                    n.on("paymentmethod", async (t) => {
                        (e = await this.apiClient.walletStripeIntent()),
                            console.log("Intent"),
                            console.log(e),
                            this.stripe.confirmCardPayment(e.client_secret, { payment_method: t.paymentMethod.id }, { handleActions: !1 }).then(async (n) => {
                                n.error
                                    ? t.complete("fail")
                                    : (t.complete("success"),
                                      "requires_action" === n.paymentIntent.status
                                          ? this.stripe.confirmCardPayment(e.client_secret).then(async (e) => {
                                                e.error ? console.log("FAIL") : await this.completeStripeWallet(t, e);
                                            })
                                          : await this.completeStripeWallet(t, n));
                            });
                    }),
                    a("Stripe Wallet Initialized");
            }
            async fireReadyCallbacks() {
                if ((a("Firing Cart Ready Callbacks"), window.checkoutReadyCallbacks && window.checkoutReadyCallbacks.length)) {
                    for (let e = 0; e < window.checkoutReadyCallbacks.length; e++) window.checkoutReadyCallbacks[e]();
                    window.checkoutReadyCallbacks.push = async (e) => {
                        await e();
                    };
                }
                this.ready = !0;
            }
            setupNavigateNextUrl() {
                var e, t, n;
                (e = ".checkout-navigate-next-url"),
                    (t = "click"),
                    (n = () => {
                        window.location = this.getNextUrl();
                    }),
                    document.addEventListener(t, (t) => {
                        t.target.matches(e) && n(t);
                    });
            }
            async init() {
                const e = this.loadPricing();
                de(this.apiClient.sessionId),
                    null !== this.settings.forceVariantId && a("Forcing Variant " + this.settings.forceVariantId),
                    await this.loadCart(),
                    parseFloat(this.cart.facebookPixelId) > 0 && (this.settings.facebookPixelId = this.cart.facebookPixelId),
                    k(this.settings),
                    this.setupCouponField(),
                    this.setupRemoveVariantButtons(),
                    this.setupUpsellGrid(),
                    this.setupNavigateNextUrl();
                const t = {
                    shippingZone: this.cart.shippingZone,
                    paypalSubmitHandler: this.paypalSubmitHandler.bind(this),
                    changeCountryHandler: this.changeCountryHandler.bind(this),
                    creditCardFormHandler: this.creditCardFormHandler.bind(this),
                    comboHandler: this.comboHandler.bind(this),
                };
                await Promise.all([se({ apiClient: this.apiClient, ...this.settings }), this.initStripe(), this.initBraintree()]),
                    await this.initStripeWallet(),
                    await this.initStripeIdeal(),
                    await this.initStripeBancontact(),
                    (this.afterpayHandler = new ue({ apiClient: this.apiClient, settings: this.settings, cart: this.cart, doCharge: this.doCharge.bind(this) })),
                    (this.klarnaHandler = new le({ initialCart: this.cart, apiClient: this.apiClient })),
                    O(t),
                    this.drawCart(),
                    this.setCurrentVariant(),
                    this.setupSelectVariantHandler(),
                    this.setupAddonButtons(),
                    this.setupUpsellListeners(),
                    this.setupEmailListener(),
                    this.setupReceiptPage(),
                    this.setupQuantitySelects(),
                    this.setupQuantityButtons(),
                    this.setupPaypalConfirm(),
                    await e,
                    (window.RTC = new Et(this)),
                    this.fireReadyCallbacks(),
                    setTimeout(async () => {
                        await this.sendPageViewEvent(), G.call(this, this), this.firePixels();
                    }, 50),
                    setTimeout(async () => {
                        const e = Cookies.get("_fbp");
                        "string" == typeof e && e.length > 0 && (await checkout.apiClient.saveValues({ fbp: e }));
                    }, 5e3);
            }
            async setupEmailListener() {
                r()("[name='email']").on("blur", (e) => {
                    this.onEmailBlur(e);
                });
            }
            async fetchStripeIntent() {
                this.settings.stripeIntent = await this.apiClient.setupStripeIntent();
            }
            extractCcData(e) {
                const t = { accepts_marketing: !1, accepts_attentive: !1, shipping: {}, billing: {} },
                    n = e.elements,
                    a = (e) => {
                        const t = e.split("_");
                        return t.shift(), t.join("_");
                    };
                for (let e = 0; e < n.length; e++) {
                    const i = n[e];
                    "billing_use_shipping" === i.name && i.checked && (t.billing_use_shipping = "true" === i.value),
                        i.name.startsWith("shipping")
                            ? (t.shipping[a(i.name)] = i.value)
                            : i.name.startsWith("billing")
                            ? (t.billing[a(i.name)] = i.value)
                            : i.name.startsWith("accepts_marketing")
                            ? (t.accepts_marketing = i.checked)
                            : i.name.startsWith("debug_gateway")
                            ? (t.debug_gateway = i.value)
                            : i.name.startsWith("accepts_attentive")
                            ? (t.accepts_attentive = i.checked)
                            : "" !== i.name && (t[i.name] = i.value);
                }
                return (
                    "string" == typeof t.cc_number && (t.cc_number = t.cc_number.replace(/[^0-9]/g, "")),
                    "string" == typeof t.cc_cvv && (t.cc_cvv = t.cc_cvv.replace(/[^0-9]/g, "")),
                    t.billing_use_shipping && (t.billing = Object.assign({}, t.shipping)),
                    t
                );
            }
            applyPricingData() {
                if (!this.cart || !this.pricingData) return;
                if (this.appliedPricingData) return;
                this.appliedPricingData = !0;
                const e = {
                    ".checkout-price": "price",
                    ".checkout-compare-price": "compareAtPrice",
                    ".checkout-product-title": "productTitle",
                    ".checkout-variant-title": "variantTitle",
                    ".checkout-compare-price-savings": "compareSavings",
                    ".checkout-compare-price-savings-pct": "compareSavingsPct",
                };
                for (let [t, n] of Object.entries(e))
                    [...document.querySelectorAll(t)].forEach((e) => {
                        const i = e.dataset.variantId;
                        if (this.pricingData[i] && this.pricingData[i][n]) {
                            let r = this.pricingData[i][n];
                            if ("price" === n || "compareAtPrice" === n || "compareSavings" === n) {
                                r = this.pricingData[i].presentmentPrices[this.cart.cartCurrency][n];
                                const o = parseFloat(e.dataset.divideBy || "1");
                                o <= 0 ? a(`WARNING: ${t} for ${i} has a divide-by <= 0, ignoring`) : (r /= o), (r = this.currencyFormatter(parseFloat(r)));
                            }
                            e.innerHTML = r;
                        }
                    });
                [...document.querySelectorAll(".checkout-variant-image")].forEach((e) => {
                    const t = e.dataset.variantId;
                    if (this.pricingData[t] && this.pricingData[t].image) {
                        const n = document.createElement("img");
                        (n.src = this.pricingData[t].image), e.appendChild(n);
                    }
                }),
                    [...document.querySelectorAll(".checkout-full-title")].forEach((e) => {
                        const t = e.dataset.variantId;
                        if (this.pricingData[t] && this.pricingData[t].productTitle && this.pricingData[t].variantTitle) {
                            const n = this.pricingData[t].productTitle + " " + this.pricingData[t].variantTitle;
                            e.innerHTML = n;
                        }
                    });
                const t = ".checkout-track-stock" + (this.settings.trackStockGlobal ? ", [data-variant-id]" : "");
                [...document.querySelectorAll(t)].forEach((e) => {
                    const t = e.dataset.variantId;
                    if (this.pricingData[t]) {
                        const n = !0 === this.pricingData[t].inStock ? "checkout-in-stock" : "checkout-out-of-stock";
                        e.classList.add(n), this.pricingData[t].inStock || ("BUTTON" !== e.tagName && "SELECT" !== e.tagName && "OPTION" !== e.tagName) || (e.disabled = !0);
                    }
                });
            }
            async loadPricing() {
                try {
                    const e = checkout.settings.apiEndpoint.replace(/^api\./, "cdn."),
                        t = await fetch(`https://${e}/cafcb58f5f7280959b1327dc8606de30c450e4e1213dbae22afb3004be13f498.json`);
                    (this.pricingData = Object.freeze(await t.json())), this.applyPricingData();
                } catch (e) {
                    console.log(e);
                }
            }
            isCheckoutPage() {
                return r()("form.checkout-paypal-form, form.checkout-credit-card-form, form.checkout-credit-card-form, form.checkout-combo-form").length > 0;
            }
            setupPaypalConfirm() {
                r()(document).on("click", ".checkout-paypal-confirm", async () => {
                    await this.apiClient.confirmPaypal(), (window.location = this.cart.nextUrl);
                });
            }
            async sendPageViewEvent() {
                const e = this.normalizedTimestamp(),
                    t = `page_view:${this.settings.sessionId}:${e}:${window.location.href}`,
                    n = await he(t),
                    a = {
                        eventType: "page_view",
                        url: window.location.href,
                        pageTitle: document.title,
                        referrer: document.referrer,
                        eventId: n,
                        eventSourceUrl: window.location.href,
                        createdAt: e,
                        isCheckoutPage: this.isCheckoutPage(),
                        ...this.eventsCommon(),
                    };
                return (
                    "string" == typeof this.settings.landingPageName && this.settings.landingPageName.length > 0 && (a.pageType = "lander"),
                    "string" == typeof this.settings.upsellPageName && this.settings.upsellPageName.length > 0 && ((a.pageType = "upsell"), (a.upsellPageName = this.settings.upsellPageName)),
                    "string" == typeof this.settings.advertorialPageName && this.settings.advertorialPageName.length > 0 && ((a.pageType = "advertorial"), (a.advertorialPageName = this.settings.advertorialPageName)),
                    this.firePixel(a)
                );
            }
            async sendCheckoutStarted(e) {
                const t = this.settings.sessionId + ":checkout_started",
                    n = {
                        eventType: "checkout_started",
                        email: e,
                        eventId: await he(t),
                        currency: "USD",
                        value: this.cart.localCart.subTotal,
                        eventSourceUrl: window.location.href,
                        createdAt: this.normalizedTimestamp(),
                        ...this.eventsCommon(),
                    };
                return this.firePixel(n);
            }
            async onEmailBlur(e) {
                const t = r()(e.currentTarget).val();
                if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase()))
                    return this.sendCheckoutStarted(t.toLowerCase());
            }
            async stripeCreditCardFormHandler(e) {
                if (this.stripeLock) return;
                this.stripeLock = !0;
                const t = this.extractCcData(e),
                    n = {
                        email: t.email,
                        name: `${t.billing.first_name} ${t.billing.last_name}`,
                        phone: t.billing.phone,
                        address: { city: t.billing.city, country: t.billing.country, state: t.billing.state, postal_code: t.billing.postal_code, line1: t.billing.address1, line2: t.billing.address2 },
                    };
                (n.phone && "" !== n.phone) || delete n.phone, await this.fetchStripeIntent();
                const a = await this.stripe.confirmCardSetup(this.settings.stripeIntent.client_secret, { payment_method: { billing_details: n, card: this.cardNumberElement } });
                if (a.error) a.error.message && alert(a.error.message), C(), (this.stripeLock = !1);
                else {
                    let e = null;
                    try {
                        e = await this.apiClient.charge({ ...t, stripe_intent: a.setupIntent });
                    } catch (e) {
                        return alert(Rt.t("cart.genericProcessingError")), C(), void (this.stripeLock = !1);
                    }
                    !e || "error" in a ? (alert(a.error), C(), (this.stripeLock = !1)) : (window.location = this.getNextUrl());
                }
            }
            getNextUrl() {
                return ce(this.nextUrlFn ? this.nextUrlFn(this.cart) : this.settings.nextUrl);
            }
            setNextUrlFn(e) {
                this.nextUrlFn = e;
            }
            async validateCcFormAddress(e) {
                try {
                    const t = await this.apiClient.validateAddress({ address: { address1: e.address1, address2: e.address2, city: e.city, province: e.state, zip: e.postal_code } });
                    return t.zip && ((t.postal_code = t.zip), delete t.zip), t.province && ((t.state = t.province), delete t.province), t;
                } catch (e) {
                    return console.log(e), null;
                }
            }
            addressAlert(e) {
                let t = "" + e.address1;
                return e.address2 && e.address2.length > 0 && (t += "\n" + e.address2), (t += `\n${e.city}, ${e.state} ${e.postal_code}`), t;
            }
            async handleNonStripeCreditCard(e) {
                if (this.ccLock) return;
                this.ccLock = !0;
                const t = this.extractCcData(e);
                if ("true" === this.settings.userAddressCorrect && "US" === t.shipping.country && void 0 !== this.apiClient.validateAddress) {
                    const e = await this.validateCcFormAddress(t.shipping);
                    if (e)
                        if (0 === Object.keys(e).length) {
                            let e = "The USPS was unable to find this address:\n\n";
                            if (((e += this.addressAlert(t.shipping)), (e += "\n\nClick Ok to use Anyways."), !window.confirm(e))) return (this.ccLock = !1), !1;
                        } else {
                            const n = Object.assign({}, t.shipping, e),
                                a = Object.assign({}, t.shipping),
                                i = Object(V.distance)(this.addressAlert(a).toLowerCase(), this.addressAlert(n).toLowerCase()),
                                r = t.shipping.postal_code === n.postal_code && t.shipping.state === n.state && i < 3;
                            let o = "The USPS has suggested this address\n\n";
                            (o += this.addressAlert(n)), (o += "\n\nClick Ok to Accept."), (r || window.confirm(o)) && ((t.shipping = Object.assign({}, n)), t.billing_use_shipping && (t.billing = Object.assign({}, t.shipping)));
                        }
                }
                if (r()(e).find("#braintree-cc-number").length > 0)
                    try {
                        t.braintreeTokenization = await this.braintreeHostedFieldsInstance.tokenize();
                    } catch (e) {
                        return (this.ccLock = !1), C(), void alert(Rt.t("braintree.missingCreditCardFields"));
                    }
                let n = null;
                try {
                    n = await this.apiClient.charge(t);
                } catch (e) {
                    (this.ccLock = !1), alert(Rt.t("cart.genericProcessingError")), C();
                }
                !n || "error" in n ? ((this.ccLock = !1), alert(n.error), C()) : (window.location = this.getNextUrl());
            }
            async doCharge(e) {
                if (this.ccLock) return;
                this.ccLock = !0;
                let t = null;
                try {
                    t = await this.apiClient.charge(e);
                } catch (e) {
                    return (this.ccLock = !1), alert(Rt.t("cart.genericProcessingError")), C(), !1;
                }
                return !(!t || "error" in t) || ((this.ccLock = !1), alert(t.error), C(), !1);
            }
            async klarnaComboHandler(e) {
                console.log(e);
                const t = r()(e.currentTarget).closest("form")[0];
                console.log(t);
                const n = this.extractCcData(t);
                this.klarnaHandler.authorize(n);
            }
            async comboHandler(e) {
                console.log('comboHandler(e)', e);
                const t = r()(e.currentTarget).closest("form");
                let n = r()(t).find("input[name='combo_mode']:checked").val();
                return (
                    n || (n = r()(t).find("input[name='combo_mode']").val()),
                    e.preventDefault(),
                    "credit" === n
                        ? this.creditCardFormHandler(e)
                        : "klarna" === n
                        ? this.klarnaComboHandler(e)
                        : "paypal" === n
                        ? this.paypalSubmitHandler(e)
                        : "ideal" === n
                        ? this.idealSubmitHandler(e)
                        : "bancontact" === n
                        ? this.bancontactSubmitHandler(e)
                        : void 0
                );
            }
            async creditCardFormHandler(e) {
                const t = r()(e.currentTarget).closest("form");
                if (t.find("#stripe-cc-number").length > 0) return this.stripeCreditCardFormHandler(t[0]);
                if (t.find('input[name="cc_number"]').length > 0 || t.find('div[id="braintree-cc-number"]').length > 0) return this.handleNonStripeCreditCard(t[0]);
                throw "Unknown Credit Card";
            }
            normalizedTimestamp() {
                return +new Date() + this.clientTimestampDrift;
            }
            async paypalSubmitHandler() {
                await Promise.all([this.sendCheckoutStarted(), this.apiClient.setNextUrl(this.getNextUrl())]);
                const e = `https://${this.settings.apiEndpoint}/v1/paypal/${await this.apiClient.sessionId}/init`;
                window.location = e;
            }
            async changeCountryHandler(e) {
                const t = await this.apiClient.setCountry(e.currentTarget.value);
                this.setCart(t), this.klarnaHandler.updateCountry(e.currentTarget.value);
            }
            async applyCoupon(e) {
                "string" == typeof e && this.currentCouponCode() !== e.toUpperCase() && this.setCart(await this.apiClient.applyCoupon(e));
            }
            async removeCoupon(e) {
                this.currentCouponCode() && this.setCart(await this.apiClient.removeCoupon());
            }
            fireCheckoutUpdateCallbacks() {
                window.checkoutUpdateCallbacks.map((e) => e(this.cart));
            }
            setCart(e) {
                e && (e.localCart = new q.a(e.localCart)),
                    e.currencyCart && (e.currencyCart = new q.a(e.currencyCart)),
                    (this.cart = Object.freeze(e)),
                    (this.currencyFormatter = new Intl.NumberFormat(this.cart.locale, { style: "currency", currency: this.cart.cartCurrency }).format),
                    this.applyPricingData(),
                    (window.checkoutData.cart = e),
                    this.drawCart(),
                    window.RTC && this.fireCheckoutUpdateCallbacks();
            }
            load_settings() {
                this.settings = {};
                const e = new URLSearchParams(window.location.search);
                (this.settings.urlCoupon = e.get("coupon")),
                    (this.settings.forceVariantId = e.get("forceVariantId") || r()('meta[name="checkout-force-variant-id"]').attr("content") || null),
                    (this.settings.recoveryCartId = e.get("recoveryCartId")),
                    (this.settings.resetCookie = "true" === e.get("resetCookie")),
                    (this.settings.forceShippingZone = e.get("forceShippingZone") || ""),
                    (this.settings.debugForeignCurrency = e.get("debugForeignCurrency") || "false"),
                    (this.settings.isReceiptPage = "true" === r()('meta[name="checkout-receipt-page"]').attr("content")),
                    (this.settings.apiEndpoint = r()('meta[name="checkout-api-endpoint"]').attr("content")),
                    (this.settings.facebookPixelId = r()('meta[name="checkout-facebook-pixel"]').attr("content")),
                    (this.settings.defaultVariantId = r()('meta[name="checkout-default-variant-id"]').attr("content")),
                    (this.settings.defaultAddons = r()('meta[name="checkout-default-addons"]').attr("content") || ""),
                    (this.settings.nextUrl = r()('meta[name="checkout-next-url"]').attr("content")),
                    (this.settings.landingPageName = r()('meta[name="checkout-landing-page-name"]').attr("content") || ""),
                    (this.settings.auxPageName = r()('meta[name="checkout-aux-page-name"]').attr("content") || ""),
                    (this.settings.upsellPageName = r()('meta[name="checkout-upsell-page-name"]').attr("content") || ""),
                    (this.settings.funnelName = r()('meta[name="checkout-funnel-name"]').attr("content") || ""),
                    (this.settings.checkoutPageName = r()('meta[name="checkout-page-name"]').attr("content") || ""),
                    (this.settings.orderTag = r()('meta[name="checkout-order-tag"]').attr("content") || ""),
                    (this.settings.advertorialPageName = r()('meta[name="checkout-advertorial-page-name"]').attr("content") || ""),
                    (this.settings.paypalConfirmUrl = ce(r()('meta[name="checkout-paypal-confirm-url"]').attr("content") || "")),
                    (this.settings.trackStockGlobal = "true" === r()('meta[name="checkout-track-stock-global"]').attr("content")),
                    (this.settings.checkoutPage = window.location.href);
                const t = {};
                for (const [n, a] of e.entries()) t[n] = a;
                this.settings.checkoutPageParams = JSON.stringify(t);
            }
            updateSubtotal() {
                if (this.cart && this.cart.currencyCart) {
                    let e = parseFloat(this.cart.currencyCart.lineItemTotal),
                        t = parseFloat(this.cart.currencyCart.subTotal),
                        n = parseFloat(this.cart.currencyCart.total),
                        a = parseFloat(this.cart.currencyCart.discountTotal);
                    r()(".checkout-total-value").html(this.currencyFormatter(n)),
                        r()(".checkout-subtotal-value").html(this.currencyFormatter(t)),
                        r()(".checkout-subtotal-with-discounts-value").html(this.currencyFormatter(t - a)),
                        r()(".checkout-discount-value").html(this.currencyFormatter(a)),
                        r()(".checkout-total-line-item-value").html(this.currencyFormatter(e));
                    const i = this.cart.currencyCart.totalSavings();
                    i.totalSavings && r()(".checkout-total-savings-value").html(this.currencyFormatter(i.totalSavings)),
                        i.totalSavingsPct && r()(".checkout-total-savings-pct").html(i.totalSavingsPct),
                        i.compareAtTotal && r()(".checkout-total-compare-value").html(this.currencyFormatter(i.compareAtTotal));
                }
            }
            drawCart() {
                this.updateAddonButtons(),
                    this.updateVariantQuantityFields(),
                    this.updateSubtotal(),
                    "" !== this.cart.localCart.discountType ? (r()(".checkout-coupon-field").hide(), r()(".checkout-coupon-button").hide()) : (r()(".checkout-coupon-field").show(), r()(".checkout-coupon-button").show());
                for (let e of document.querySelectorAll(".checkout-cart-display")) {
                    const t = "true" === e.dataset.showTaxPendingMessage,
                        n = "true" === e.dataset.showComparePricing,
                        a = "true" === e.dataset.showProductImages,
                        i = "true" === e.dataset.showVatIncluded;
                    e.innerHTML = _t({
                        currencyCart: this.cart.currencyCart,
                        showTaxPendingMessage: t,
                        showComparePricing: n,
                        showProductImages: a,
                        showVatIncluded: i,
                        currencyFormatter: this.currencyFormatter,
                        lineItemHtmlFn: this.lineItemHtmlFn,
                    });
                }
            }
            async setLineItemHtmlFn(e) {
                (this.lineItemHtmlFn = e), this.drawCart();
            }
            async handleAddCoupon(e) {
                e.preventDefault();
                const t = prompt("Enter Coupon Code");
                t ? this.setCart(await this.apiClient.applyCoupon(t)) : console.log("Coupon cancel");
            }
            async loadCart() {
                const e = await this.apiClient.getCart(this.settings);
                (this.settings = Object.assign({}, this.settings, e.meta)), (this.clientTimestampDrift = e.meta.serverNow - +new Date()), a("Cart Loaded"), this.setCart(e.cart);
            }
            setCurrentVariant() {
                r()(".checkout-selected-variant").removeClass("checkout-selected-variant"),
                    r()(`.checkout-select-variant[data-variant-id="${this.cart.primaryVariantId}"]`).addClass("checkout-selected-variant"),
                    r()(`.checkout-variant-target[data-variant-id="${this.cart.primaryVariantId}"]`).addClass("checkout-selected-variant");
            }
            async setCurrentVariantManual(e) {
                this.currentVariant = e;
                const t = await this.apiClient.setCurrentVariant(e);
                return "error" in t ? t : (this.setCart(t), this.setCurrentVariant(), this.drawCart(), this.cart);
            }
            setupUpsellListeners() {
                let e = !1;
                r()("form.checkout-accept-upsell").on("submit", async (t) => {
                    if ((t.preventDefault(), e)) return;
                    (e = !0), console.log(t.currentTarget);
                    const n = {
                        upsellType: r()(t.currentTarget).data("upsell-type"),
                        nextUrl: r()(t.currentTarget).data("next-url"),
                        upsellParam1: r()(t.currentTarget).find("[name='upsellParam1']").val(),
                        upsellParam2: r()(t.currentTarget).find("[name='upsellParam2']").val(),
                        upsellPageName: this.settings.upsellPageName,
                        upsellUrl: window.location.href,
                    };
                    return (
                        console.log(JSON.stringify(n, null, 4)), await this.apiClient.acceptUpsell(n), this.nextUrlFn ? (window.location = this.nextUrlFn(this.cart)) : (window.location = r()(t.currentTarget).data("next-url")), (e = !1), !1
                    );
                }),
                    r()(".checkout-debug").on("click", () => {
                        alert(this.apiClient.sessionId);
                    }),
                    r()("div.checkout-accept-upsell, button.checkout-accept-upsell, a.checkout-accept-upsell").on("click", async (t) => {
                        if ((t.preventDefault(), e)) return;
                        e = !0;
                        const n = {
                            upsellType: r()(t.currentTarget).data("upsell-type"),
                            upsellParam1: r()(t.currentTarget).data("upsell-param1"),
                            upsellParam2: r()(t.currentTarget).data("upsell-param2"),
                            nextUrl: r()(t.currentTarget).data("next-url"),
                            upsellPageName: this.settings.upsellPageName,
                            upsellUrl: window.location.href,
                        };
                        return await this.apiClient.acceptUpsell(n), this.nextUrlFn ? (window.location = this.nextUrlFn(this.cart)) : (window.location = r()(t.currentTarget).data("next-url")), (e = !1), !1;
                    });
            }
            async acceptUpsellGridData(e) {
                const t = { upsellType: "add-grid", variants: e, upsellPageName: this.settings.upsellPageName };
                return this.apiClient.acceptUpsell(t);
            }
            setupUpsellGrid() {
                let e = !1;
                const t = async () => {
                    const e = [...document.querySelectorAll(".checkout-upsell-grid-selector"), ...document.querySelectorAll(".checkout-upsell-quantity-display")];
                    let t = 0,
                        n = 0;
                    for (let a = 0; a < e.length; a++) {
                        const i = e[a],
                            o = r()(i).data("variant-id"),
                            s = "SELECT" === i.tagName ? parseFloat(r()(i).val()) : parseFloat(r()(i).html());
                        if (s > 0)
                            try {
                                const e = this.getVariantData(o);
                                e && e.compareAtPrice && (n += parseFloat(e.compareAtPrice) * s), e && e.price && (t += parseFloat(e.price) * s);
                            } catch (e) {
                                console.log(e), console.log("Upsell grid could not find pricing for " + o);
                            }
                    }
                    r()(".checkout-upsell-grid-total").html(this.currencyFormatter(t)), r()(".checkout-upsell-grid-compare-total").html(this.currencyFormatter(n));
                };
                t(),
                    r()(document).on("click", ".checkout-upsell-quantity-increase", async (e) => {
                        const n = r()(e.currentTarget).data("variant-id"),
                            a = parseFloat(r()(e.currentTarget).data("quantity-increment")) || 1,
                            i = parseFloat(r()(e.currentTarget).data("quantity-max")) || 999,
                            o = document.querySelector(`.checkout-upsell-quantity-display[data-variant-id="${n}"]`),
                            s = parseFloat(o.innerText),
                            c = Math.min(i, s + a);
                        c !== s && ((o.innerText = c), console.log(`increase ${n} upto ${i} max, cur=${s}, new=${c}`), t());
                    }),
                    r()(document).on("click", ".checkout-upsell-quantity-decrease", async (e) => {
                        const n = r()(e.currentTarget).data("variant-id"),
                            a = parseFloat(r()(e.currentTarget).data("quantity-increment")) || 1,
                            i = parseFloat(r()(e.currentTarget).data("quantity-min")) || 0,
                            o = document.querySelector(`.checkout-upsell-quantity-display[data-variant-id="${n}"]`),
                            s = parseFloat(o.innerText),
                            c = Math.max(i, s - a);
                        c !== s && ((o.innerText = c), console.log(`increase ${n} downto ${i} max, cur=${s}, new=${c}`), t());
                    }),
                    r()(document).on("change", ".checkout-upsell-grid-selector", async (e) => {
                        t();
                    }),
                    r()(document).on("click", ".checkout-submit-upsell-grid", async (t) => {
                        if ((t.preventDefault(), e)) return;
                        e = !0;
                        const n = r()(t.currentTarget).parent(".checkout-accept-upsell-grid");
                        if (!n) return !1;
                        const a = { upsellType: "add-grid", variants: {}, upsellPageName: this.settings.upsellPageName },
                            i = r()(n).find(".checkout-upsell-grid-selector").toArray();
                        for (let e = 0; e < i.length; e++) {
                            const t = i[e],
                                n = r()(t).data("variant-id"),
                                o = parseFloat(r()(t).val());
                            o > 0 && (a.variants[n] = o);
                        }
                        const o = r()(n).find(".checkout-upsell-quantity-display").toArray();
                        for (let e = 0; e < o.length; e++) {
                            const t = o[e],
                                n = r()(t).data("variant-id"),
                                i = parseFloat(r()(t).html());
                            i > 0 && (a.variants[n] = i);
                        }
                        return Object.keys(a.variants).length > 0 && (await this.apiClient.acceptUpsell(a), this.nextUrlFn ? (window.location = this.nextUrlFn(this.cart)) : (window.location = r()(n).data("next-url"))), (e = !1), !1;
                    });
            }
            updateVariantQuantityFields() {
                r()(".checkout-variant-quantity-selector").val(0),
                    r()(".checkout-quantity-display").html(0),
                    this.cart.localCart &&
                        this.cart.localCart.lineItems.forEach((e) => {
                            const t = e.variantId;
                            r()(`.checkout-variant-quantity-selector[data-variant-id="${t}"]`).val(e.quantity), r()(`.checkout-quantity-display[data-variant-id="${t}"]`).html(e.quantity);
                        });
            }
            setupQuantitySelects() {
                r()(document).on("change", ".checkout-variant-quantity-selector", async () => {
                    const e = {},
                        t = r()(".checkout-variant-quantity-selector").toArray();
                    for (const n of t) {
                        const t = r()(n).data("variant-id"),
                            a = r()(n).val();
                        e[t] = a;
                    }
                    this.setCart(await this.apiClient.setVariantQuantities(e));
                });
            }
            getVariantQuantities() {
                const e = {};
                return this.cart.localCart.lineItems.map((t) => (e[t.variantId] = t.quantity)), e;
            }
            async setVariantQuantities(e) {
                const t = this.getVariantQuantities();
                let n = !1;
                for (const [a, i] of Object.entries(e)) t[a] != i && (n = !0);
                n && this.setCart(await this.apiClient.setVariantQuantities(e));
            }
            setupQuantityButtons() {
                r()(document).on("click", ".checkout-quantity-increase", async (e) => {
                    const t = r()(e.currentTarget).data("variant-id"),
                        n = parseFloat(r()(e.currentTarget).data("quantity-max")) || 999,
                        a = this.cart.localCart.getVariantQuantity(t),
                        i = Math.min(n, a + 1);
                    i !== a && this.setCart(await this.apiClient.setVariantQuantities({ [t]: i }));
                }),
                    r()(document).on("click", ".checkout-quantity-decrease", async (e) => {
                        const t = r()(e.currentTarget).data("variant-id"),
                            n = parseFloat(r()(e.currentTarget).data("quantity-min")) || 0,
                            a = this.cart.localCart.getVariantQuantity(t),
                            i = Math.max(n, a - 1);
                        i !== a && this.setCart(await this.apiClient.setVariantQuantities({ [t]: i }));
                    });
            }
            updateAddonButtons() {
                r()(".checkout-selected-addon").removeClass("checkout-selected-addon"),
                    this.cart.localCart &&
                        this.cart.localCart.lineItems.forEach((e) => {
                            const t = e.variantId;
                            r()(`.checkout-addon-toggle[data-variant-id="${t}"]`).addClass("checkout-selected-addon");
                        });
            }
            setupRemoveVariantButtons() {
                r()(document).on("click", ".checkout-remove-variant", async (e) => {
                    const t = r()(e.currentTarget).data("variant-id");
                    0 != this.cart.localCart.getVariantQuantity(t) && this.setCart(await this.apiClient.setVariantQuantities({ [t]: 0 }));
                });
            }
            setupAddonButtons() {
                let e = !1;
                r()(".checkout-addon-toggle").on("click", async (t) => {
                    if (e) return;
                    (e = !0), r()(t.currentTarget).toggleClass("checkout-selected-addon");
                    const n = r()(t.currentTarget).data("variant-id");
                    this.setCart(await this.apiClient.toggleAddon(n)), this.setCurrentVariant(), (e = !1);
                });
            }
            setupSelectVariantHandler() {
                let e = !1;
                r()(".checkout-select-variant").on("click", async (t) => {
                    if (e) return;
                    e = !0;
                    const n = r()(t.currentTarget).data("variant-id");
                    r()(".checkout-selected-variant").removeClass("checkout-selected-variant"),
                        r()(`.checkout-select-variant[data-variant-id=${n}]`).addClass("checkout-selected-variant"),
                        r()(`.checkout-variant-target[data-variant-id=${n}]`).addClass("checkout-selected-variant"),
                        this.setCart(await this.apiClient.setCurrentVariant(n)),
                        this.setCurrentVariant(),
                        (e = !1);
                });
            }
        }
        (Lt.addPixel = function (e) {
            (window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || []),
                window.checkoutReadyCallbacks.push(() => {
                    window.checkout.addPixel(e);
                });
        }),
            (Lt.setNextUrlFn = function (e) {
                console.log("setNextUrlFn"),
                    (window.checkoutReadyCallbacks = window.checkoutReadyCallbacks || []),
                    window.checkoutReadyCallbacks.push(() => {
                        window.checkout.setNextUrlFn(e);
                    });
            }),
            (window.Checkout = Lt),
            r()(async function () {
                new Lt().init();
            });
    },
]);
//# sourceMappingURL=cart_bundle.js.map
