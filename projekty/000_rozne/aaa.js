(function() {
    var e;
    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype)
            return a;
        a[b] = c.value;
        return a
    }
    ;
    function ca(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math)
                return c
        }
        throw Error("Cannot find global object");
    }
    var p = ca(this);
    function q(a, b) {
        if (b)
            a: {
                var c = p;
                a = a.split(".");
                for (var d = 0; d < a.length - 1; d++) {
                    var f = a[d];
                    if (!(f in c))
                        break a;
                    c = c[f]
                }
                a = a[a.length - 1];
                d = c[a];
                b = b(d);
                b != d && null != b && ba(c, a, {
                    configurable: !0,
                    writable: !0,
                    value: b
                })
            }
    }
    q("Symbol", function(a) {
        function b(g) {
            if (this instanceof b)
                throw new TypeError("Symbol is not a constructor");
            return new c(d + (g || "") + "_" + f++,g)
        }
        function c(g, h) {
            this.og = g;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: h
            })
        }
        if (a)
            return a;
        c.prototype.toString = function() {
            return this.og
        }
        ;
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_"
          , f = 0;
        return b
    });
    q("Symbol.iterator", function(a) {
        if (a)
            return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = p[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return da(aa(this))
                }
            })
        }
        return a
    });
    function da(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        }
        ;
        return a
    }
    function t(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    }
    function ea(a) {
        if (!(a instanceof Array)) {
            a = t(a);
            for (var b, c = []; !(b = a.next()).done; )
                c.push(b.value);
            a = c
        }
        return a
    }
    var fa = "function" == typeof Object.create ? Object.create : function(a) {
        function b() {}
        b.prototype = a;
        return new b
    }
    , ha;
    if ("function" == typeof Object.setPrototypeOf)
        ha = Object.setPrototypeOf;
    else {
        var ia;
        a: {
            var ja = {
                a: !0
            }
              , ka = {};
            try {
                ka.__proto__ = ja;
                ia = ka.a;
                break a
            } catch (a) {}
            ia = !1
        }
        ha = ia ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b)
                throw new TypeError(a + " is not extensible");
            return a
        }
        : null
    }
    var la = ha;
    function u(a, b) {
        a.prototype = fa(b.prototype);
        a.prototype.constructor = a;
        if (la)
            la(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else
                        a[c] = b[c];
        a.Ok = b.prototype
    }
    function ma() {
        this.tc = !1;
        this.ab = null;
        this.Je = void 0;
        this.Nb = 1;
        this.ef = this.Ng = 0;
        this.ec = null
    }
    function na(a) {
        if (a.tc)
            throw new TypeError("Generator is already running");
        a.tc = !0
    }
    ma.prototype.yc = function(a) {
        this.Je = a
    }
    ;
    ma.prototype.Hc = function(a) {
        this.ec = {
            hh: a,
            Gh: !0
        };
        this.Nb = this.Ng || this.ef
    }
    ;
    ma.prototype.return = function(a) {
        this.ec = {
            return: a
        };
        this.Nb = this.ef
    }
    ;
    function oa(a) {
        this.s = new ma;
        this.ai = a
    }
    oa.prototype.yc = function(a) {
        na(this.s);
        if (this.s.ab)
            return pa(this, this.s.ab.next, a, this.s.yc);
        this.s.yc(a);
        return qa(this)
    }
    ;
    function ra(a, b) {
        na(a.s);
        var c = a.s.ab;
        if (c)
            return pa(a, "return"in c ? c["return"] : function(d) {
                return {
                    value: d,
                    done: !0
                }
            }
            , b, a.s.return);
        a.s.return(b);
        return qa(a)
    }
    oa.prototype.Hc = function(a) {
        na(this.s);
        if (this.s.ab)
            return pa(this, this.s.ab["throw"], a, this.s.yc);
        this.s.Hc(a);
        return qa(this)
    }
    ;
    function pa(a, b, c, d) {
        try {
            var f = b.call(a.s.ab, c);
            if (!(f instanceof Object))
                throw new TypeError("Iterator result " + f + " is not an object");
            if (!f.done)
                return a.s.tc = !1,
                f;
            var g = f.value
        } catch (h) {
            return a.s.ab = null,
            a.s.Hc(h),
            qa(a)
        }
        a.s.ab = null;
        d.call(a.s, g);
        return qa(a)
    }
    function qa(a) {
        for (; a.s.Nb; )
            try {
                var b = a.ai(a.s);
                if (b)
                    return a.s.tc = !1,
                    {
                        value: b.value,
                        done: !1
                    }
            } catch (c) {
                a.s.Je = void 0,
                a.s.Hc(c)
            }
        a.s.tc = !1;
        if (a.s.ec) {
            b = a.s.ec;
            a.s.ec = null;
            if (b.Gh)
                throw b.hh;
            return {
                value: b.return,
                done: !0
            }
        }
        return {
            value: void 0,
            done: !0
        }
    }
    function sa(a) {
        this.next = function(b) {
            return a.yc(b)
        }
        ;
        this.throw = function(b) {
            return a.Hc(b)
        }
        ;
        this.return = function(b) {
            return ra(a, b)
        }
        ;
        this[Symbol.iterator] = function() {
            return this
        }
    }
    function ta(a, b) {
        b = new sa(new oa(b));
        la && a.prototype && la(b, a.prototype);
        return b
    }
    function ua(a, b) {
        a instanceof String && (a += "");
        var c = 0
          , d = !1
          , f = {
            next: function() {
                if (!d && c < a.length) {
                    var g = c++;
                    return {
                        value: b(g, a[g]),
                        done: !1
                    }
                }
                d = !0;
                return {
                    done: !0,
                    value: void 0
                }
            }
        };
        f[Symbol.iterator] = function() {
            return f
        }
        ;
        return f
    }
    q("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return ua(this, function(b) {
                return b
            })
        }
    });
    q("Promise", function(a) {
        function b(h) {
            this.Yb = 0;
            this.Ec = void 0;
            this.Qb = [];
            this.Ef = !1;
            var k = this.Md();
            try {
                h(k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        }
        function c() {
            this.Pa = null
        }
        function d(h) {
            return h instanceof b ? h : new b(function(k) {
                k(h)
            }
            )
        }
        if (a)
            return a;
        c.prototype.Ne = function(h) {
            if (null == this.Pa) {
                this.Pa = [];
                var k = this;
                this.Oe(function() {
                    k.ih()
                })
            }
            this.Pa.push(h)
        }
        ;
        var f = p.setTimeout;
        c.prototype.Oe = function(h) {
            f(h, 0)
        }
        ;
        c.prototype.ih = function() {
            for (; this.Pa && this.Pa.length; ) {
                var h = this.Pa;
                this.Pa = [];
                for (var k = 0; k < h.length; ++k) {
                    var l = h[k];
                    h[k] = null;
                    try {
                        l()
                    } catch (m) {
                        this.vg(m)
                    }
                }
            }
            this.Pa = null
        }
        ;
        c.prototype.vg = function(h) {
            this.Oe(function() {
                throw h;
            })
        }
        ;
        b.prototype.Md = function() {
            function h(m) {
                return function(n) {
                    l || (l = !0,
                    m.call(k, n))
                }
            }
            var k = this
              , l = !1;
            return {
                resolve: h(this.gi),
                reject: h(this.ve)
            }
        }
        ;
        b.prototype.gi = function(h) {
            if (h === this)
                this.ve(new TypeError("A Promise cannot resolve to itself"));
            else if (h instanceof b)
                this.ni(h);
            else {
                a: switch (typeof h) {
                case "object":
                    var k = null != h;
                    break a;
                case "function":
                    k = !0;
                    break a;
                default:
                    k = !1
                }
                k ? this.fi(h) : this.kf(h)
            }
        }
        ;
        b.prototype.fi = function(h) {
            var k = void 0;
            try {
                k = h.then
            } catch (l) {
                this.ve(l);
                return
            }
            "function" == typeof k ? this.oi(k, h) : this.kf(h)
        }
        ;
        b.prototype.ve = function(h) {
            this.cg(2, h)
        }
        ;
        b.prototype.kf = function(h) {
            this.cg(1, h)
        }
        ;
        b.prototype.cg = function(h, k) {
            if (0 != this.Yb)
                throw Error("Cannot settle(" + h + ", " + k + "): Promise already settled in state" + this.Yb);
            this.Yb = h;
            this.Ec = k;
            2 === this.Yb && this.ki();
            this.jh()
        }
        ;
        b.prototype.ki = function() {
            var h = this;
            f(function() {
                if (h.Zh()) {
                    var k = p.console;
                    "undefined" !== typeof k && k.error(h.Ec)
                }
            }, 1)
        }
        ;
        b.prototype.Zh = function() {
            if (this.Ef)
                return !1;
            var h = p.CustomEvent
              , k = p.Event
              , l = p.dispatchEvent;
            if ("undefined" === typeof l)
                return !0;
            "function" === typeof h ? h = new h("unhandledrejection",{
                cancelable: !0
            }) : "function" === typeof k ? h = new k("unhandledrejection",{
                cancelable: !0
            }) : (h = p.document.createEvent("CustomEvent"),
            h.initCustomEvent("unhandledrejection", !1, !0, h));
            h.promise = this;
            h.reason = this.Ec;
            return l(h)
        }
        ;
        b.prototype.jh = function() {
            if (null != this.Qb) {
                for (var h = 0; h < this.Qb.length; ++h)
                    g.Ne(this.Qb[h]);
                this.Qb = null
            }
        }
        ;
        var g = new c;
        b.prototype.ni = function(h) {
            var k = this.Md();
            h.Oc(k.resolve, k.reject)
        }
        ;
        b.prototype.oi = function(h, k) {
            var l = this.Md();
            try {
                h.call(k, l.resolve, l.reject)
            } catch (m) {
                l.reject(m)
            }
        }
        ;
        b.prototype.then = function(h, k) {
            function l(w, z) {
                return "function" == typeof w ? function(T) {
                    try {
                        m(w(T))
                    } catch (G) {
                        n(G)
                    }
                }
                : z
            }
            var m, n, r = new b(function(w, z) {
                m = w;
                n = z
            }
            );
            this.Oc(l(h, m), l(k, n));
            return r
        }
        ;
        b.prototype.catch = function(h) {
            return this.then(void 0, h)
        }
        ;
        b.prototype.Oc = function(h, k) {
            function l() {
                switch (m.Yb) {
                case 1:
                    h(m.Ec);
                    break;
                case 2:
                    k(m.Ec);
                    break;
                default:
                    throw Error("Unexpected state: " + m.Yb);
                }
            }
            var m = this;
            null == this.Qb ? g.Ne(l) : this.Qb.push(l);
            this.Ef = !0
        }
        ;
        b.resolve = d;
        b.reject = function(h) {
            return new b(function(k, l) {
                l(h)
            }
            )
        }
        ;
        b.race = function(h) {
            return new b(function(k, l) {
                for (var m = t(h), n = m.next(); !n.done; n = m.next())
                    d(n.value).Oc(k, l)
            }
            )
        }
        ;
        b.all = function(h) {
            var k = t(h)
              , l = k.next();
            return l.done ? d([]) : new b(function(m, n) {
                function r(T) {
                    return function(G) {
                        w[T] = G;
                        z--;
                        0 == z && m(w)
                    }
                }
                var w = []
                  , z = 0;
                do
                    w.push(void 0),
                    z++,
                    d(l.value).Oc(r(w.length - 1), n),
                    l = k.next();
                while (!l.done)
            }
            )
        }
        ;
        return b
    });
    q("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    });
    q("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    q("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var f = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + f, 0)); c < f; c++) {
                var g = d[c];
                if (g === b || Object.is(g, b))
                    return !0
            }
            return !1
        }
    });
    function va(a, b, c) {
        if (null == a)
            throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp)
            throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    q("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== va(this, b, "includes").indexOf(b, c || 0)
        }
    });
    function wa(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    var ya = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var f in d)
                    wa(d, f) && (a[f] = d[f])
        }
        return a
    }
    ;
    q("Object.assign", function(a) {
        return a || ya
    });
    q("Array.from", function(a) {
        return a ? a : function(b, c, d) {
            c = null != c ? c : function(k) {
                return k
            }
            ;
            var f = []
              , g = "undefined" != typeof Symbol && Symbol.iterator && b[Symbol.iterator];
            if ("function" == typeof g) {
                b = g.call(b);
                for (var h = 0; !(g = b.next()).done; )
                    f.push(c.call(d, g.value, h++))
            } else
                for (g = b.length,
                h = 0; h < g; h++)
                    f.push(c.call(d, b[h], h));
            return f
        }
    });
    q("WeakMap", function(a) {
        function b(l) {
            this.pc = (k += Math.random() + 1).toString();
            if (l) {
                l = t(l);
                for (var m; !(m = l.next()).done; )
                    m = m.value,
                    this.set(m[0], m[1])
            }
        }
        function c() {}
        function d(l) {
            var m = typeof l;
            return "object" === m && null !== l || "function" === m
        }
        function f(l) {
            if (!wa(l, h)) {
                var m = new c;
                ba(l, h, {
                    value: m
                })
            }
        }
        function g(l) {
            var m = Object[l];
            m && (Object[l] = function(n) {
                if (n instanceof c)
                    return n;
                Object.isExtensible(n) && f(n);
                return m(n)
            }
            )
        }
        if (function() {
            if (!a || !Object.seal)
                return !1;
            try {
                var l = Object.seal({})
                  , m = Object.seal({})
                  , n = new a([[l, 2], [m, 3]]);
                if (2 != n.get(l) || 3 != n.get(m))
                    return !1;
                n.delete(l);
                n.set(m, 4);
                return !n.has(l) && 4 == n.get(m)
            } catch (r) {
                return !1
            }
        }())
            return a;
        var h = "$jscomp_hidden_" + Math.random();
        g("freeze");
        g("preventExtensions");
        g("seal");
        var k = 0;
        b.prototype.set = function(l, m) {
            if (!d(l))
                throw Error("Invalid WeakMap key");
            f(l);
            if (!wa(l, h))
                throw Error("WeakMap key fail: " + l);
            l[h][this.pc] = m;
            return this
        }
        ;
        b.prototype.get = function(l) {
            return d(l) && wa(l, h) ? l[h][this.pc] : void 0
        }
        ;
        b.prototype.has = function(l) {
            return d(l) && wa(l, h) && wa(l[h], this.pc)
        }
        ;
        b.prototype.delete = function(l) {
            return d(l) && wa(l, h) && wa(l[h], this.pc) ? delete l[h][this.pc] : !1
        }
        ;
        return b
    });
    q("Map", function(a) {
        function b() {
            var k = {};
            return k.previous = k.next = k.head = k
        }
        function c(k, l) {
            var m = k.Ea;
            return da(function() {
                if (m) {
                    for (; m.head != k.Ea; )
                        m = m.previous;
                    for (; m.next != m.head; )
                        return m = m.next,
                        {
                            done: !1,
                            value: l(m)
                        };
                    m = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }
        function d(k, l) {
            var m = l && typeof l;
            "object" == m || "function" == m ? g.has(l) ? m = g.get(l) : (m = "" + ++h,
            g.set(l, m)) : m = "p_" + l;
            var n = k.mc[m];
            if (n && wa(k.mc, m))
                for (k = 0; k < n.length; k++) {
                    var r = n[k];
                    if (l !== l && r.key !== r.key || l === r.key)
                        return {
                            id: m,
                            list: n,
                            index: k,
                            Y: r
                        }
                }
            return {
                id: m,
                list: n,
                index: -1,
                Y: void 0
            }
        }
        function f(k) {
            this.mc = {};
            this.Ea = b();
            this.size = 0;
            if (k) {
                k = t(k);
                for (var l; !(l = k.next()).done; )
                    l = l.value,
                    this.set(l[0], l[1])
            }
        }
        if (function() {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal)
                return !1;
            try {
                var k = Object.seal({
                    x: 4
                })
                  , l = new a(t([[k, "s"]]));
                if ("s" != l.get(k) || 1 != l.size || l.get({
                    x: 4
                }) || l.set({
                    x: 4
                }, "t") != l || 2 != l.size)
                    return !1;
                var m = l.entries()
                  , n = m.next();
                if (n.done || n.value[0] != k || "s" != n.value[1])
                    return !1;
                n = m.next();
                return n.done || 4 != n.value[0].x || "t" != n.value[1] || !m.next().done ? !1 : !0
            } catch (r) {
                return !1
            }
        }())
            return a;
        var g = new WeakMap;
        f.prototype.set = function(k, l) {
            k = 0 === k ? 0 : k;
            var m = d(this, k);
            m.list || (m.list = this.mc[m.id] = []);
            m.Y ? m.Y.value = l : (m.Y = {
                next: this.Ea,
                previous: this.Ea.previous,
                head: this.Ea,
                key: k,
                value: l
            },
            m.list.push(m.Y),
            this.Ea.previous.next = m.Y,
            this.Ea.previous = m.Y,
            this.size++);
            return this
        }
        ;
        f.prototype.delete = function(k) {
            k = d(this, k);
            return k.Y && k.list ? (k.list.splice(k.index, 1),
            k.list.length || delete this.mc[k.id],
            k.Y.previous.next = k.Y.next,
            k.Y.next.previous = k.Y.previous,
            k.Y.head = null,
            this.size--,
            !0) : !1
        }
        ;
        f.prototype.clear = function() {
            this.mc = {};
            this.Ea = this.Ea.previous = b();
            this.size = 0
        }
        ;
        f.prototype.has = function(k) {
            return !!d(this, k).Y
        }
        ;
        f.prototype.get = function(k) {
            return (k = d(this, k).Y) && k.value
        }
        ;
        f.prototype.entries = function() {
            return c(this, function(k) {
                return [k.key, k.value]
            })
        }
        ;
        f.prototype.keys = function() {
            return c(this, function(k) {
                return k.key
            })
        }
        ;
        f.prototype.values = function() {
            return c(this, function(k) {
                return k.value
            })
        }
        ;
        f.prototype.forEach = function(k, l) {
            for (var m = this.entries(), n; !(n = m.next()).done; )
                n = n.value,
                k.call(l, n[1], n[0], this)
        }
        ;
        f.prototype[Symbol.iterator] = f.prototype.entries;
        var h = 0;
        return f
    });
    q("Array.prototype.values", function(a) {
        return a ? a : function() {
            return ua(this, function(b, c) {
                return c
            })
        }
    });
    q("Set", function(a) {
        function b(c) {
            this.Aa = new Map;
            if (c) {
                c = t(c);
                for (var d; !(d = c.next()).done; )
                    this.add(d.value)
            }
            this.size = this.Aa.size
        }
        if (function() {
            if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal)
                return !1;
            try {
                var c = Object.seal({
                    x: 4
                })
                  , d = new a(t([c]));
                if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                    x: 4
                }) != d || 2 != d.size)
                    return !1;
                var f = d.entries()
                  , g = f.next();
                if (g.done || g.value[0] != c || g.value[1] != c)
                    return !1;
                g = f.next();
                return g.done || g.value[0] == c || 4 != g.value[0].x || g.value[1] != g.value[0] ? !1 : f.next().done
            } catch (h) {
                return !1
            }
        }())
            return a;
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.Aa.set(c, c);
            this.size = this.Aa.size;
            return this
        }
        ;
        b.prototype.delete = function(c) {
            c = this.Aa.delete(c);
            this.size = this.Aa.size;
            return c
        }
        ;
        b.prototype.clear = function() {
            this.Aa.clear();
            this.size = 0
        }
        ;
        b.prototype.has = function(c) {
            return this.Aa.has(c)
        }
        ;
        b.prototype.entries = function() {
            return this.Aa.entries()
        }
        ;
        b.prototype.values = function() {
            return this.Aa.values()
        }
        ;
        b.prototype.keys = b.prototype.values;
        b.prototype[Symbol.iterator] = b.prototype.values;
        b.prototype.forEach = function(c, d) {
            var f = this;
            this.Aa.forEach(function(g) {
                return c.call(d, g, g, f)
            })
        }
        ;
        return b
    });
    q("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = va(this, b, "startsWith");
            b += "";
            var f = d.length
              , g = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var h = 0; h < g && c < f; )
                if (d[c++] != b[h++])
                    return !1;
            return h >= g
        }
    });
    q("Array.prototype.fill", function(a) {
        return a ? a : function(b, c, d) {
            var f = this.length || 0;
            0 > c && (c = Math.max(0, f + c));
            if (null == d || d > f)
                d = f;
            d = Number(d);
            0 > d && (d = Math.max(0, f + d));
            for (c = Number(c || 0); c < d; c++)
                this[c] = b;
            return this
        }
    });
    function za(a) {
        return a ? a : Array.prototype.fill
    }
    q("Int8Array.prototype.fill", za);
    q("Uint8Array.prototype.fill", za);
    q("Uint8ClampedArray.prototype.fill", za);
    q("Int16Array.prototype.fill", za);
    q("Uint16Array.prototype.fill", za);
    q("Int32Array.prototype.fill", za);
    q("Uint32Array.prototype.fill", za);
    q("Float32Array.prototype.fill", za);
    q("Float64Array.prototype.fill", za);
    function Aa(a) {
        var b = a.length + 1;
        return document.cookie.split(";").map(function(c) {
            return c.trim()
        }).filter(function(c) {
            return c.substring(0, b) === a + "="
        }).map(function(c) {
            return decodeURIComponent(c.substring(b))
        })[0]
    }
    function Ba(a) {
        var b;
        return null !== (b = Aa(a)) && void 0 !== b ? b : ""
    }
    function Ca(a, b, c) {
        var d = new Date;
        d.setTime(d.getTime() + 1E3 * c);
        document.cookie = a + "=" + b + "; expires=" + d.toUTCString() + "; path=/"
    }
    ;function Da(a) {
        var b = "";
        null === a.match(/^[a-zA-Z]+:\/\//) && (b = "/");
        return "" + b + a
    }
    function Ea(a) {
        for (var b = new FormData, c = t(Object.keys(a)), d = c.next(); !d.done; d = c.next())
            d = d.value,
            b.append(d, a[d]);
        return b
    }
    function Fa(a) {
        switch (a.readyState) {
        case 0:
            return "request not sent";
        case 4:
            switch (a.status) {
            case 0:
                return "network error";
            case 400:
                return "bad request";
            case 401:
                return "unauthorized";
            case 403:
                return "access denied";
            case 404:
                return "not found";
            case 429:
                return "request throttled";
            case 500:
                return "server error";
            default:
                return "unknown status " + a.status
            }
        default:
            return "unknown ready state " + a.readyState
        }
    }
    function Ga(a) {
        var b = Error.call(this, Fa(a));
        this.message = b.message;
        "stack"in b && (this.stack = b.stack);
        var c = this;
        this.ng = a;
        this.toString = function() {
            return "XhrError: " + c.message
        }
    }
    u(Ga, Error);
    function Ha(a) {
        return 200 <= a && 299 >= a || 1223 === a
    }
    function Ia(a) {
        var b = 6E4;
        b = void 0 === b ? 6E4 : b;
        var c = new XMLHttpRequest;
        return [c, new Promise(function(d, f) {
            c.open("GET", Da(a));
            c.withCredentials = !0;
            c.onerror = function() {
                f(new Ga(c))
            }
            ;
            c.onload = function() {
                Ha(c.status) ? d(c) : f(new Ga(c))
            }
            ;
            c.timeout = b;
            c.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            c.send()
        }
        )]
    }
    function v(a, b) {
        var c = b instanceof FormData ? b : Ea(b);
        b = Ja(c);
        void 0 === b ? x("CSRF token is undefined", {
            cookies: document.cookie
        }) : c.set("csrfmiddlewaretoken", b);
        return new Promise(function(d, f) {
            var g = new XMLHttpRequest;
            g.open("POST", Da(a), !0);
            g.withCredentials = !0;
            g.onerror = function() {
                f(new Ga(g))
            }
            ;
            g.onload = function() {
                Ha(g.status) ? d(g) : f(new Ga(g))
            }
            ;
            g.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            g.send(c)
        }
        )
    }
    function Ja(a) {
        var b;
        a.has("csrfmiddlewaretoken") && (b = a.get("csrfmiddlewaretoken"));
        return void 0 !== Aa("csrftoken") ? Aa("csrftoken") : b
    }
    ;var Ka;
    function y() {
        if (void 0 === Ka) {
            var a = !0;
            try {
                window.localStorage.setItem("cbModernizr", "cbModernizr"),
                window.localStorage.removeItem("cbModernizr")
            } catch (b) {
                a = !1
            }
            Ka = a
        }
        return Ka
    }
    Object.prototype.hasOwnProperty.call(window, "onorientationchange");
    var La;
    function Ma() {
        if (void 0 !== La)
            return La;
        try {
            var a = Object.defineProperty({}, "passive", {
                get: function() {
                    La = !0
                }
            });
            window.addEventListener("testPassive", function() {}, a);
            window.removeEventListener("testPassive", function() {}, a);
            void 0 === La && (La = !1)
        } catch (b) {
            La = !1
        }
        return La
    }
    var Na, Oa = !1;
    window.setTimeout(function() {
        Oa = !0
    }, 200);
    function Pa() {
        if (Qa() && /WebKit/i.test(navigator.userAgent) && !/CriOS/i.test(navigator.userAgent))
            return !0;
        var a = !1;
        void 0 !== window.safari && void 0 !== window.safari.pushNotification && (a = "[object SafariRemoteNotification]" === window.safari.pushNotification.toString());
        return /constructor/i.test(window.HTMLElement) || a
    }
    function Ra() {
        return (/iPad/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && 1 < navigator.maxTouchPoints) && void 0 === window.MSStream
    }
    function Sa() {
        return /iPhone/i.test(navigator.userAgent) && void 0 === window.MSStream
    }
    function Ta() {
        return /iPod/i.test(navigator.userAgent) && void 0 === window.MSStream
    }
    function Qa() {
        return Ta() || Sa() || Ra()
    }
    function Ua() {
        if (Qa()) {
            var a = navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);
            return null === a ? void 0 : parseInt(a[1])
        }
    }
    function Va() {
        return /Android|webOS|BlackBerry|IEMobile|Opera Mini|SamsungBrowser/i.test(navigator.userAgent) || Qa()
    }
    function Wa() {
        var a = "unload";
        Qa() && Pa() && (a = "pagehide");
        return a
    }
    var Xa;
    (new Promise(function(a) {
        if (void 0 !== Xa)
            a(Xa);
        else {
            var b = new Image;
            b.onerror = function() {
                a(!1)
            }
            ;
            b.onload = function() {
                Xa = 2 !== b.width;
                a(Xa)
            }
            ;
            b.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QAiRXhpZgAASUkqAAgAAAABABIBAwABAAAABgASAAAAAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAABAAIDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+/iiiigD/2Q=="
        }
    }
    )).then(function(a) {
        Xa = a
    }).catch();
    var Ya = {}
      , Za = {};
    function $a(a) {
        return Number.isNaN(Number(a)) ? 0 : Number(a)
    }
    function A(a, b, c, d, f) {
        d = void 0 === d ? !1 : d;
        f = void 0 === f ? !1 : f;
        if (b === window)
            var g = Ya[a] = $a(Ya[a]) + 1;
        else if (b === document)
            g = Za[a] = $a(Za[a]) + 1;
        else if (b instanceof HTMLElement) {
            var h = "data-listener-count-" + a;
            g = $a(b.getAttribute(h)) + 1;
            b.setAttribute(h, "" + g)
        } else
            g = 1;
        42 < g && B('event listener "' + a + '" has too many listeners. Element: ' + (b === document ? "document" : b === window ? "window" : b.outerHTML.split(">")[0] + ">"), {
            listeners: g,
            "max-listeners": 42
        });
        void 0 !== window.addEventListener ? (d = Ma() ? {
            capture: d,
            passive: f
        } : d,
        b.addEventListener(a, c, d)) : void 0 !== window.attachEvent ? b.attachEvent("on" + a, c) : x("Could not resolve addEventListenerPoly( " + a + " ) to " + b)
    }
    function ab(a, b, c) {
        var d = void 0 === d ? !1 : d;
        var f = void 0 === f ? !1 : f;
        a = t(a);
        for (var g = a.next(); !g.done; g = a.next())
            A(g.value, b, c, d, f)
    }
    function C(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        var f = void 0 === f ? !1 : f;
        if (b === window)
            var g = Ya[a] = $a(Ya[a]) - 1;
        else if (b === document)
            g = Za[a] = $a(Za[a]) - 1;
        else if (b instanceof HTMLElement) {
            var h = "data-listener-count-" + a;
            g = $a(b.getAttribute(h)) - 1;
            b.setAttribute(h, "" + g)
        } else
            g = 1;
        0 > g && x('event listener "' + a + '" removed without being added', {
            listeners: g
        });
        void 0 !== window.removeEventListener ? (d = Ma() ? {
            capture: d,
            passive: f
        } : d,
        b.removeEventListener(a, c, d)) : void 0 !== window.detachEvent ? b.detachEvent("on" + a, c) : x("Could not resolve removeEventListenerPoly( " + a + " ) from " + b)
    }
    ;function bb(a, b) {
        return null === a || void 0 === a || "" === a ? null === b || void 0 === b ? "" : b : a
    }
    ;function cb(a) {
        a = db(a);
        a !== document.location.search && "replaceState"in window.history && window.history.replaceState("", "", bb(a, location.pathname))
    }
    function db(a) {
        var b = new URLSearchParams(window.location.search);
        a.forEach(function(c, d) {
            "" === c ? b.delete(d) : b.set(d, c)
        });
        a = b.toString().replace(/%2C/g, ",");
        return "" === a ? "" : "?" + a
    }
    function eb(a) {
        for (var b = "", c = t(Object.keys(a)), d = c.next(); !d.done; d = c.next()) {
            d = d.value;
            "" !== b && (b += "&");
            var f = a[d];
            void 0 === f && (f = "");
            b += encodeURIComponent(d) + "=" + encodeURIComponent(f)
        }
        return b
    }
    function fb() {
        var a = window.location.search;
        0 < a.length && "?" === a[0] && (a = a.slice(1));
        var b = {};
        a = t(a.split("&"));
        for (var c = a.next(); !c.done; c = a.next())
            c = c.value,
            c.includes("=") && (c = c.split("="),
            0 < c[0].length && (b[decodeURIComponent(c[0])] = 0 < c[1].length ? decodeURIComponent(c[1]) : void 0));
        return b
    }
    ;var gb = window.newrelic, hb;
    function D(a, b, c) {
        b = void 0 === b ? {} : b;
        try {
            -1 !== ib && (b.PlayerVol = ib);
            -1 !== (0 === ib ? 0 : jb) && (b.TipVol = 0 === ib ? 0 : jb);
            var d = {
                "attributes.room_user": void 0
            }, f;
            for (f in b)
                d["attributes." + f] = b[f];
            if (void 0 !== c && c && void 0 !== window.performance && void 0 !== window.performance.now) {
                var g = window.performance.now();
                d["attributes.timeSinceLoad"] = g / 1E3;
                d["attributes.timeSinceLoadMS"] = g
            }
            void 0 !== hb && (d["attributes.currentMode"] = hb);
            fb();
            void 0 !== gb && (d === {} ? gb.addPageAction(a) : gb.addPageAction(a, d))
        } catch (h) {
            x("New Relic Error in addPageAction: " + h)
        }
    }
    function kb() {
        C("load", window, kb);
        for (var a = t(document.getElementsByTagName("script")), b = a.next(); !b.done; b = a.next())
            b = b.value,
            null !== b.src.match(/https:\/\/js-agent\.newrelic\.com\/.*/) && A("error", b, function() {
                x("Ad blocker stopped analytics collection");
                v("api/adblocker/", {})
            })
    }
    var jb = -1
      , ib = -1;
    A("load", window, kb);
    var E = window.gettext;
    void 0 === E && (B("gettext is undefined."),
    E = function(a) {
        return a
    }
    );
    var lb = window.ngettext;
    void 0 === lb && (B("ngettext is undefined."),
    lb = function(a, b, c) {
        return 1 < c ? b : a
    }
    );
    var mb = window.interpolate;
    void 0 === mb && (B("interpolate is undefined."),
    mb = function(a) {
        return a
    }
    );
    E("SEND PM");
    E("Send PM");
    E("You must be a supporter, fan club member, or moderator to send this private message.");
    E("You must be a supporter, fan club member, moderator, or have received a tip today from this user to send this private message.");
    E("Sign up for a");
    E("Supporter Membership");
    E("Join Chaturbate's community.");
    E("Chat live, follow broadcasters, access private shows, or earn money!");
    E("Sign Up Free");
    E("Chat Color");
    E("Font Family");
    E("Font Size");
    E("Show Emoticons");
    E("Autocomplete Delay");
    E("Sort Users");
    E("Highest Token Color");
    E("Chat Allowed By");
    E("Moderators Expire After");
    E("Silence Other Age-Verified Broadcasters");
    E("Yes, Always");
    E("Tip Volume");
    E("Use New Tip Alerts");
    E("View/Edit Ignored Users");
    var nb = E("THE ACT OF MASTURBATING WHILE CHATTING ONLINE");
    E("CHAT ROOMS");
    E("BETA");
    E("TAGS");
    E("EARN FREE TOKENS");
    E("MY COLLECTION");
    var ob = E("My Collection")
      , pb = E("Log in");
    E("Log In");
    var qb = E("Sign Up");
    E("Sign up");
    E("Include an optional message:");
    E("Optional message:");
    E("Send Tip");
    E("SEND TIP");
    E("Send a tip");
    E("Send tip to broadcaster");
    E("Public Tipping");
    E("Username is visible to all users.");
    E("Anonymous Tipping");
    E("Username only visible to broadcaster.");
    E("Send Anonymous Tip");
    E("Sending...");
    E("Click OK to continue to supporter signup.");
    E("Include optional message");
    E("Tip note...");
    E("Tap to chat...");
    E("This broadcaster doesn't accept tips.");
    E("Purchase Tokens");
    var rb = E("Upgrade");
    E("Upgrade now");
    E("Supporter");
    E("Basic Member");
    E("MY PROFILE");
    E("LOG OUT");
    E("SEND FEEDBACK");
    var sb = E("My Profile")
      , tb = E("Live Chat Support")
      , ub = E("Log Out")
      , vb = E("Are you sure you want to log out?")
      , wb = E("Send Feedback");
    E("Status");
    E("You have:");
    E("Get More");
    E("Get more tokens");
    E("Get More Tokens");
    E("Chat disconnected. The broadcaster has set a new password on this room.");
    E("Private");
    E("Start Private Show");
    E("Spy on Private Show");
    E("Private show has started.");
    E("Private show has finished.");
    E("Private show has been declined.");
    E("Cancel Private Request");
    E("Cannot cancel private show. Please try again in a few seconds.");
    E("Leave Private Show");
    E("Private show request has been sent. Waiting on broadcaster to approve.");
    E("Broadcaster has returned from away mode.");
    E("You were disconnected because you have joined this room again.");
    E("The broadcaster has kicked you from the room.");
    E("You were kicked from the room.");
    E("signup to chat");
    E("About Me");
    E("Wish List");
    E("PURCHASED");
    E("OR");
    E("Photos and Videos");
    E("Real Name");
    E("Followers");
    E("I am");
    E("We are");
    E("Birthday");
    E("Birth Date");
    E("Age");
    E("Date");
    E("Action");
    E("Body Type");
    E("Body Decorations");
    E("Interested In");
    E("Location");
    E("Language(s)");
    E("Last Broadcast");
    E("Languages");
    E("Smoke Drink");
    E("Smoke / Drink");
    E("User has no available BIO");
    E("Bio and Free Webcam");
    E("Unable to submit");
    E("Submitting...");
    E("Loading");
    var xb = E("loading");
    E("SETTINGS");
    E("Settings");
    E("Chat settings saved");
    E("CHAT");
    E("SEND");
    E("Send");
    E("TIP");
    E("Tip");
    E("Users");
    E("USERS");
    E("a user");
    E("Report Abuse");
    E("REPORT ABUSE");
    E("Room");
    E("More Rooms");
    E("spy private show");
    var yb = E("Unfollow");
    E("unfollow");
    var zb = E("Follow");
    E("Notify me");
    E("Always");
    E("Auto");
    E("Never");
    E("Refresh Rooms");
    E("Women");
    E("WOMEN");
    E("women");
    E("Men");
    E("MEN");
    E("men");
    E("Trans");
    E("TRANS");
    E("Couples");
    E("COUPLES");
    E("couples");
    E("Followed");
    E("FOLLOWED");
    E("SPY SHOWS");
    E("SAVE");
    E("Save");
    E("Standard Emoticons");
    E("Recently used");
    E("Smileys & People");
    E("Animals & Nature");
    E("Food & Drink");
    E("Activities");
    E("Travel & Places");
    E("Objects");
    E("Symbols");
    E("Flags");
    E("Upload");
    E("Tone");
    E("Your current balance:");
    E("Balance:");
    E("Token Balance");
    E("You currently have: ");
    E("WARNING: This room has a low satisfaction rating.");
    E("TIP AT YOUR OWN RISK!");
    E("Enter tip amount:");
    E("Invalid tip amount!");
    E("Amount:");
    E("Toggle this window with CTRL-S");
    E("Leave open after tipping");
    E("Select One");
    E("Please select a reason");
    E("Loading user list");
    E("refresh userlist");
    E("Send private message");
    E("Mention this user");
    E("HIDE ALL ADS NOW");
    E("Powered by ExoticAds<br>Buy/Sell Traffic");
    E("Show More");
    E("Pics & Videos");
    E("Pictures");
    E("Videos");
    E("Social Media");
    E("Unique Registered Viewers Watching");
    E("Points");
    E("Current Hour's Top Cams");
    E("Every hour, the cam with the most points wins a $10 prize. The cam in 2nd place wins a $5 prize.");
    E("Apps & Bots");
    E("Customize your chat room experience by launching an app or using bots to make your room unique. Explore a wide array of options, or even write your own app with javascript at the <a href='/apps/' target='_blank' rel='noopener noreferrer'>Apps and Bots page</a>.");
    E("Games");
    E("dismiss this message");
    E("Only 5 #hashtags will be applied");
    var Ab = E("dismiss")
      , Bb = E("Register later")
      , Cb = E("Already have an account?")
      , Db = E("Login here");
    E("Please sign in using the form below");
    var Eb = E("Username")
      , Fb = E("Password");
    E("Prove you are human");
    var Gb = E("Keep me logged in")
      , Hb = E("Forgot password?");
    E("Incorrect password");
    E("Incorrect captcha");
    E("Create Free Account");
    E("We've improved Chaturbate's mobile site by adding these feature(s):");
    E("Satisfaction Voting");
    E("Visit the ");
    E("mobile site");
    E("survey");
    E(" again, or give us some ");
    E("feedback");
    E(" on why you left.");
    E("Or ");
    var Ib = E("or");
    E("the mobile site");
    E("Follower browser notifications");
    E("Would you like to receive browser notifications when a broadcaster you follow comes online?");
    E("Subscription failure. Please try again from the Settings & Privacy page on your profile.");
    E("Yes");
    E("Not now");
    E("This room requires a password.");
    E("Login to room");
    E("Moderators");
    E("Remove Moderators");
    E("Non-Moderators");
    E("Remove Ignored Users");
    E("Unignore this user");
    E("Unignored Users");
    E("Ignore");
    E("Ignore this user");
    E("Report this message");
    E("Ignored Users");
    E("Click on a user to unignore them.");
    E("Select a user from the list to unignore them.");
    E("Click on a user to revoke their moderator status.");
    E("You must be logged in to ignore a user");
    E("Room is currently offline");
    E("Follow broadcasters to receive instant notifications when they come online.");
    E("UNFOLLOW");
    E("FOLLOW");
    E("Share");
    E("Bio");
    E("Contest Stats");
    E("Settings & Privacy");
    E("Settings saved");
    E("Token Stats");
    E("Memberships");
    E("Submit feedback to broadcaster");
    E("Optional comment for broadcaster:");
    E("Submitted");
    E("SATISFIED?");
    E("Satisfied?");
    E("SCAN CAMS");
    E("NEXT CAM");
    E("SCAN / NEXT");
    E("SCAN");
    E("SKIP CAM");
    E("EXIT SCANNING");
    E("Token Linkcodes");
    E("Earn up to 10 tokens for every registered user and 500 tokens for users who broadcast (broadcasters must earn $20.00 before they qualify).");
    E("Please send to chaturbate using one of the link codes below.");
    E("Embed Chaturbate's Top Cam on Your Webpage");
    E("the affiliate program stats");
    E("See details about tokens earned in ");
    E('Your browser is outdated and may not function correctly. Update it for the best Chaturbate experience and new features. <br> We recommend <a href="https://www.google.com/chrome/">Chrome</a>, <a href="https://www.mozilla.org/firefox/">Firefox</a>, or <a href="https://www.microsoft.com/edge">Edge</a>');
    E('Add an extra layer of protection to your account by setting up 2-Step Verification at the <a href="/security/">Security Center</a>');
    E("Silence for 6 hours");
    E("Remove Silence");
    E("Theater Mode");
    E("Full Screen");
    E("Exit Full Screen");
    E("Split Mode");
    E("unknown");
    var Jb = E("Show All")
      , Kb = E(" to follow your favorite broadcasters and see when they are live.")
      , Lb = E("Follow your favorite broadcasters to see when they are live.");
    E("Promote your room");
    E("Not enough tokens.");
    E("Purchase more tokens");
    E("You are no longer eligible to promote your room.");
    E("User promotion currently unavailable - please check your settings.");
    E("You must be logged in to promote your room.");
    E("You must be broadcasting to promote your room.");
    E("Get More Viewers");
    E("Add your room to a rotating promoted spot on the homepage for 5 minutes.");
    E("details");
    E("Promote now");
    E("In Progress");
    E("Get more tokens");
    E("Current price");
    E("Setting up user promotion...");
    E("Promotion ending...");
    E("Unknown error occurred while retrieving promotion purchase price. Please try again.");
    E("Unknown error occurred while purchasing user promotion. Please try again.");
    E("Loading new pricing...");
    E("Announce you're online");
    E("Announce again in ");
    E("You have 1 follower");
    E("Send email and browser notifications to your followers.");
    E("Add a photo");
    E("Update photo");
    E("Must be non-nude");
    E("Recommended size: 1280 x 720 px");
    E("Shown in notification and featured emails");
    E("Send notifications");
    E("In Progress");
    E("New photos must be approved. If not approved in 15 minutes, email notifications will be sent without a photo.");
    E("You have no followers to notify.");
    E("Are you sure you want to notify your followers without an image?");
    E("Please use a jpeg, gif, or png image.");
    E("Image must not be larger than 10 megabytes.");
    E("A notification has already been sent.");
    E("Something went wrong after submit. Please try again.");
    E("Something went wrong during submit. Please try again.");
    E("Image must be at least 200px wide and 200px tall.");
    E("Image is too wide.");
    E("Image is too tall.");
    E("Please wait until all pending notifications have been sent.");
    E("Remove approved photo?");
    E("Sorry, this feature is not supported in your browser. Please upgrade to a modern browser like Chrome or Firefox.");
    E("Close");
    E("Cancel");
    E("cancel");
    E("CANCEL");
    E("SUBMIT");
    E("Submit");
    E("You have unsaved changes, are you sure you want to leave this page?");
    E("Choose a category");
    E("Abuse Report");
    E("Broadcaster is underage");
    E("Broadcaster is advertising");
    E("Broadcaster is abusive");
    E("Broadcaster is intoxicated");
    E("Using a toy that is too large");
    E("Asking for offline payments");
    E("Broadcasting in public");
    E("Broadcasting in service uniform");
    E("Broadcaster is sleeping");
    E("Broadcaster is wrong gender");
    E("Other");
    E("Please choose a category");
    E("Additional comments:");
    E("Please add a description");
    E("Message is inappropriate");
    E("Message is rude towards the broadcaster");
    E("Message is spam");
    E("Other (please describe):");
    E("User is inappropriate");
    E("User is rude towards the broadcaster");
    E("User is spam");
    E("Other (please describe):");
    E("Report");
    E("REPORT");
    E("Unable to send report.");
    E("Too many reports sent. Try slowing down.");
    E("There was an error requesting your private show. Please try again.");
    E("There was an error requesting your spy show. Please try again.");
    E("Private Shows");
    E("Are you sure?");
    E("This broadcaster allows private show recordings, so you will receive a recorded video of this show in your collection.");
    E("You may continue chatting while you wait for the broadcaster to return.");
    E("Performer Is Away");
    E("Group Show");
    E("LEAVE PRIVATE SHOW");
    E("CANCEL PRIVATE REQUEST");
    E("START PRIVATE SHOW");
    E("SPY PRIVATE SHOW");
    E("LEAVE SPY SHOW");
    E("Private Show");
    E("Private Show in Progress");
    E("This feature is not currently enabled on your device.");
    E('You must be logged in to enter a private show. Click "OK" to login.');
    E('You must be logged in to spy on a private show. Click "OK" to login.');
    E("Spy has been disabled by the broadcaster");
    E("More Rooms Like This");
    E("Here are some trending rooms instead:");
    E("RECOMMENDED");
    E("OFFLINE");
    E("EXHIBITIONIST");
    E("NEW");
    E("HD");
    E("HD+");
    E("IN PRIVATE");
    E("GAMING");
    E("CHATURBATING");
    E("BROADCASTING");
    E("HIDDEN - STAFF ONLY");
    var Mb = E("View on Twitter")
      , Nb = E("Show tips and messages")
      , Ob = E("How Can We Improve?")
      , Pb = E("Updates");
    E("This user has not added any photos or videos yet.");
    E("This user has not added any photos yet.");
    E("This user has not added any videos yet.");
    E("More Pics");
    E("More Videos");
    E("More Pics & Videos");
    E("FAN");
    E("CLUB");
    E("Tokens");
    E("Token");
    E("Uploaded");
    E("If you already purchased this photo set, try reloading the page to view it.");
    E("If you already purchased this video, try reloading the page to view it.");
    E("minutes");
    E("seconds");
    E("or");
    E("View Hi-Res Image");
    E('You must be logged in to purchase this photo set.  Click "OK" to login.');
    E('You must be logged in to view hi-res images.  Click "OK" to login.');
    E('You must be logged in to purchase this video.  Click "OK" to login.');
    E('Click "OK" to get more tokens.');
    E("Upload more Photos");
    E("Re-Order Items");
    E("Change video thumbnail image");
    E("Edit Details");
    E("Compliance");
    E("Deactivate");
    E("STAFF");
    E("Audio is disabled.");
    E("Audio muted to remove music");
    E("Enable Audio");
    E("(Check compliance for eligibility before enabling)");
    E("(Removes this item from being seen on the bio but does not remove from anyone's MyCollection.  To remove from MyCollections, reject in Compliance instead of deactivating.)");
    E("FAILED");
    E("PENDING");
    E("APPROVAL");
    E("VIDEO");
    E("PROCESSING");
    E("ERROR");
    E("Failed Approval");
    E("Please delete or edit offending items.");
    E("Open in new window");
    E("iPad has failed to setup the broadcast. Please try again.");
    E("Please check your internet connection or close other applications");
    E("No camera found.");
    E("Permission to use your camera and microphone is currently denied.");
    E("We need permission to use your camera and microphone in order to proceed.");
    E("Visit our <a class=\"hrefColor\" target='_blank' href='https://support.chaturbate.com/hc/en-us/articles/360040862791'>support page</a> for help enabling your devices.");
    E("Request Device Permissions");
    E("support page");
    E("Make sure there are no other broadcast tabs open.");
    E("Low FPS");
    E("Are you sure you want to leave?");
    E('This private show has ended. To give you\ntime to prepare, you are now shown as "Away" to\nthose in your room. To return and be visible on\ncam, click "Exit Away Mode" below.');
    E("Exit Away Mode");
    E("Could not get devices");
    E("Turn your device 180 degrees.");
    E("Turn your device into landscape mode.");
    E("Camera");
    E("Resolution");
    E("Microphone");
    E("Input Level");
    E("Mute");
    E("None (Silent)");
    E("Start Broadcasting");
    E("Stop Broadcasting");
    E("You Are Away");
    E("For high quality streams we strongly recommend");
    E("Use external software (OBS)");
    E("Please wait. Connecting in");
    E("Could not start broadcast");
    E("Welcome back");
    E("Could not setup preview. Please make any possible adjustments and reload the page");
    E("Could not setup broadcast");
    E("My Cam Preview");
    E("Cam To Cam");
    E("Stop Cam To Cam");
    E("Unable to share cam: You are already broadcasting from another window or tab");
    E("Your cam will not be visible to other users.");
    E("The cam icon will turn orange when the broadcaster is viewing you.");
    E("Error sharing cam");
    E("Error sharing cam: Timed out trying to connect");
    E("Error viewing cam");
    E("Unable to share cam: Make sure you are connected to chat and the broadcast is playing");
    E("Unable to share cam: Broadcaster is in a private show");
    E("You are not allowed to share your cam with this user");
    E("Sharing your cam is only available to users who have purchased tokens. Click OK to purchase tokens now.");
    E("Sharing your cam will remove your room password");
    E("Viewer ");
    E(" started sharing their cam");
    E(" stopped sharing their cam");
    E(" started viewing your cam");
    E(" stopped viewing your cam");
    E("is currently viewing your cam");
    E("is not currently viewing your cam");
    E("Muted");
    E("Close Cam");
    E("Block Cam");
    E("Pop Out Cam");
    E("Report Cam");
    E("Are you sure you want to block");
    E("User is broadcasting in public");
    E("User is rude/abusive");
    E("User is intoxicated");
    E("User is sleeping");
    E("User is spamming");
    E("User is underage");
    E("My Cam");
    E("View Cam");
    E("Stop Viewing Cam");
    E("Unable to view cam: A maximum of five cams can be viewed at once");
    E("Unable to view cam: This viewer is no longer sharing their cam");
    E("Leaving this page will end your cam. Click OK to proceed.");
    E("has left the room.");
    E("Follow to be notified when online.");
    var Qb = E("Describe your issue or share your ideas:")
      , Rb = E("Some account and system information may be sent to %SITE_NAME%. We will use the information you give us to help address technical issues to improve our services, subject to our Privacy Policy and Terms of Service.")
      , Sb = E("Send feedback")
      , Tb = E("Add screenshot")
      , Ub = E("Scroll down to capture lower on the page")
      , Vb = E("Scroll up to capture higher on the page")
      , Wb = E("Click to highlight or hide info")
      , Xb = E("Highlight issues with orange or hide sensitive info with black. Hit the ESC key to finish.")
      , Yb = E("Highlight issue")
      , Zb = E("Hide sensitive info")
      , $b = E("Permission to capture screen not granted")
      , ac = E("Could not capture screen")
      , bc = E("Please take screenshot again after resizing")
      , cc = E("Your feedback has been sent! Thank you for your feedback.")
      , dc = E("Something went wrong. Please try again later.")
      , ec = E("Please wait before submitting more feedback.")
      , fc = E("Unable to submit feedback. Please contact support.")
      , gc = E("Done");
    E("Watching");
    E("Deny Private");
    E("Accept Private");
    E("Return to Public Chat");
    E("Your private show has ended.");
    E("Your camera will remain hidden until you re-enter public chat.");
    E("You're about to stop the group show. Do you want to continue?");
    E("You're about to stop the private show. Do you want to continue?");
    E("Error broadcasting");
    E("Font Settings");
    E("Emoticons Settings");
    E("Users Settings");
    E("Notifications Settings");
    E("Other Settings");
    E("You have no users ignored.");
    E("Back to Settings");
    E("Notify on Entry For");
    E("Notify on Leave For");
    var hc = E("No new updates");
    E("The video is currently being processed.  It may take several minutes depending on the size of the video.");
    E("The video is damaged or its format is not supported.");
    E("Please delete this video and reupload again.");
    var ic = E("You must be a supporter to use this feature.");
    E("To disable, go to ");
    E(' on the homepage and uncheck "Enable floating player".');
    E("Options");
    E('You must be logged in to Follow. Click "OK" to login.');
    var jc = E("Log in or sign up to use this feature")
      , kc = E("Log in to continue")
      , lc = E("Don't have an account yet?");
    E("Tipped Tons");
    E("1000+ tokens in the past 2 weeks");
    E("Tipped Lots");
    E("250+ tokens in the past 2 weeks");
    E("Tipped Recently");
    E("50+ tokens in the past 2 weeks");
    E("Purchased Tokens");
    E("Has bought tokens");
    E("Fan Club Member");
    E("Moderator");
    E("Broadcaster");
    E('<a class="hrefColor" href="/supporter/upgrade/" >Upgrade to supporter</a> for no ads, private messaging, and more!');
    E("Outbound Tip");
    E("Tip From");
    E("Transfer tokens to cash");
    E("Transfer tokens to advertising credit");
    E("Referred Member");
    E("Admin Adjustment");
    E("This has been resolved by an administrator");
    E("email");
    E("Email");
    E("Spy Show");
    E("Fan Club Membership");
    E("Broadcaster Rules: Tokens are the only form of payment allowed. You may promote your personal website as long as it does not offer video chat. Do not provide your Skype or Yahoo Messenger to anyone, and do not ask users to chat with you elsewhere.");
    E("Use External Encoder to Broadcast");
    E("Broadcast yourself using Open Broadcaster Software (OBS)");
    E("Accept");
    E("Decline");
    E("User(s) Token Rate");
    E("Private Show Stats");
    E("Exit Private Show");
    E("Use the Apps & Bots tab below to select an app and up to 5 bots to enhance your room.");
    E('You must <a class="hrefColor" href="/accounts/age_verification/"> submit age verification </a> to enable the ability to receive tokens while broadcasting.');
    E("Disabled");
    E("Allowed");
    E("Privates");
    E("Broadcaster's Guide");
    E("Age Verification");
    E('All persons appearing on your cam must have approved <a href="/accounts/age_verification/" style="color:#0A5A83">age verification</a> on file prior to appearing.');
    E("Tutorial Videos");
    E('Users and broadcasters have created <a href="https://vimeo.com/chaturbate" target="_blank" style="color:#0A5A83">videos</a> to teach you how to Chaturbate and earn money. You can view them on <a href="https://vimeo.com/chaturbate" target="_blank" style="color:#0A5A83">Chaturbate\'s Vimeo channel</a>.');
    E("Money Making Tips");
    E("Get an HD camera to receive the HD tag on your room.");
    E("Members love hearing you. Make sure to turn your microphone on and greet users by name.");
    E("Ask your users to type ':tipher' in order to enable emoticons that encourage members to tip");
    E("Grow Your User Base");
    E("Encourage viewers to 'Follow' you.");
    E("Send private messages to blue users and use the [Tab Key] to switch between PM windows.");
    E("Update your bio with colors and feature top tippers and longest fan club members.");
    E("Encourage users to raise their spending limits and get 200 tokens for free.");
    E("Broadcast on a known schedule so your biggest fans always know when to find you.");
    E("Fan Clubs");
    E('Enable your fan club in the "Settings & Privacy" tab to earn extra income.');
    E("Click On a Username To");
    E("Send a user a PM");
    E("Add/Remove a Moderator");
    E("Ignore a user's messages");
    E("Silence a user for 6 hours");
    E("Kick/Ban a user for 30 days");
    E("Assign Moderators");
    E("Those you trust can help monitor your chat room and silence troublemakers");
    E("Change Room Subject");
    E("Click on the room subject at the top of your broadcast to change the text, list token goals, and input all other forms of useful information.");
    E('<span style="background-color: #FF3;">Tips Are Highlighted</span>');
    E("Be sure to thank those who are generous enough to tip you.");
    E("Username Colors");
    E('<span style="color: #DC5500">Orange</span> names are Broadcasters');
    E('<span style="color: #ff0000">Red</span> names are Moderators');
    E('<span style="color: #090">Green</span> names are fan club members');
    E('<span style="color: #804baa">Dark Purple</span> names have tipped at least 1000 tokens in the past 2 weeks');
    E('<span style="color: #be6aff">Light Purple</span> names have tipped at least 250 tokens in the past 2 weeks');
    E('<span style="color: #009">Dark Blue</span> names have tipped at least 50 tokens in the past 2 weeks');
    E('<span style="color: #69A">Light Blue</span> names own or have purchased tokens');
    E('<span style="color: #666">Grey</span> names have no tokens');
    E("Checking Stats");
    E('Click on the "Contest Stats" and "Token Stats" tabs to see how much money you\'ve earned broadcasting.');
    E("Trouble Broadcasting?");
    E('Ensure you are running the latest version of your browser, we recommend Chrome, Firefox or Safari. If you are still having issues, <a href="https://support.chaturbate.com/hc/en-us/requests/new" style="color:#0A5A83">contact support</a>.');
    E("My Broadcast");
    E("Your room is password protected. Users may not enter your room unless they know your password. To remove your password, edit your settings & privacy.");
    E("Kick/Ban");
    E("Remove Moderator Status");
    E("Promote to Moderator");
    E("WARNING: Never show or share your broadcast token with anyone!");
    E("Your broadcast token");
    E("RTMP/OBS Broadcasting Information");
    E("Click here to view our OBS Setup Guide");
    E("Important Information");
    E("Do not upscale your source input (e.g. using a 1080p camera to a 1440p stream).");
    E("Ensure you use the minimum video bitrate specified in this table for a given resolution");
    E("You may only have copyrighted content -- including music, movies, and video games -- in your stream if you are the rights holder or have the permission of all rights holders.");
    E("Recommended Settings Table");
    E("Generate a new broadcast token? \n(This will invalidate your prior RTMP / OBS token and disconnect your current broadcast)");
    E('This is your satisfaction score. You can hide this by setting "Show my satisfaction score" to "No" in the Settings & Privacy tab.');
    E("This data is updated once per day and is based on votes in the past 90 days.");
    E("Click on your score (%) to view your rating history.");
    E("Fetching rating history");
    E("No history to show");
    E("Active App");
    E("Active Game");
    E("Bot #1");
    E("Bot #2");
    E("Bot #3");
    E("Bot #4");
    E("Bot #5");
    E("None Selected");
    E("Deactivate This App");
    E("Choose an App");
    E("Choose a Bot");
    E("Choose a Game");
    E("End Game");
    E("Stop streaming game");
    E("Are you a publisher?");
    E("Add your game.");
    E("Restart");
    E("Add new social media");
    E('You must be <a href="/accounts/age_verification/">age verified</a> to add new social media');
    E('You must purchase tokens or be <a href="/accounts/age_verification/">age verified</a> to add new photos and videos');
    E("Upload new pics");
    E("Upload new videos");
    E("Edit Your Bio");
    E("Current Contest Statistics for");
    E("Payout Information");
    E("Refresh Stats");
    E("See contest details");
    E("Manage photo sets");
    E("Update Bio");
    E("January");
    E("February");
    E("March");
    E("April");
    E("May");
    E("June");
    E("July");
    E("August");
    E("September");
    E("October");
    E("November");
    E("December");
    E("Expired Fan Club Memberships");
    E("Expired Social Media Subscriptions");
    E("You Have No Active Memberships");
    E("Expires");
    E("Expired");
    E("Extend by 3 months");
    E("Renews");
    E("renew");
    E("can't renew");
    E("can't extend");
    E("No email address on file");
    E("Blocked countries");
    E("Able to view");
    E("Blocked regions");
    E("Security");
    E("Statistics");
    E("Update Settings");
    E("Change your password");
    E("View the security center and adjust Two-Step Verification settings");
    E("Authorize your 3rd party stats");
    E("Add an email address");
    E("Change email address");
    E("E-mail Verified");
    E("Resend verification email");
    E("Verification Email Sent");
    E("Email is Unverified. Verify to receive follower notifications and newsletters.");
    E("Detailed Income Stats");
    E("Payment Information Form");
    E("required for payments");
    E("Broadcaster Verification Form");
    E("Download Transaction History");
    E("Please wait for the file to be generated");
    E("Download your last 30 days of transactions?\nProcessing may take up to 20 seconds.");
    E("Your Account's Activity");
    E("Latest cashouts");
    E("tokens are automatically cashed out at midnight");
    E("Please verify your identity to enable tokens on your account");
    E("Transfer Tokens");
    E("Tokens transferred on the 1st-15th of the month will be sent by the 22nd. Tokens transferred on the 16th-31st will be sent by the 7th.");
    E("Listed are users currently silenced from your room. Silences expire after 6 hours by default. You can convert a silence to a ban.");
    E("Listed are users currently banned from your room. Bans expire after 1 month by default. You can convert a ban to a permanent ban.");
    E("Banned");
    E("Silenced");
    E("Actions");
    E("Remove");
    E("Make Permanent");
    E("Convert to Ban");
    E("Click here to clear hidden silences and bans");
    E("Add ban");
    E("Enter Username To Ban");
    E("View/Edit Bans and Silences");
    E("View/Edit Moderators");
    E("View Fan Club Members");
    E("View/Edit Region Block Exemptions");
    E("Alphabetically");
    E("All Users");
    E("Users who tipped me today");
    E("Users who have tipped me");
    E("Users who have tokens");
    E("1 Day");
    E("2 Days");
    E("1 Week");
    E("2 Weeks");
    E("1 Month");
    E("2 Months");
    E("6 Months");
    E("No");
    E("Yes");
    E("Yes, only if they're broadcasting now");
    E("Age Verification Required");
    E("Only age verified broadcasters can change this setting");
    E("Listed are your current fan club members, the date they last joined, and the total number of months they've been your fan (Expiring memberships have a short grace period to renew before removed from your fanclub.)");
    E("Listed are all of your fan club members past and present and how long they were a member for. Current members are <strong>highlighted</strong>.");
    E("Add username");
    E("Add");
    E("No Region Block Exemptions");
    E("Unique Registered Viewers");
    E("Your Points");
    E("Your Rank");
    E("You may use some HTML tags (a p i strong b u ul ol li h1 h2 h3 img font br span).");
    E("You may post links to external wish lists (amazon wish list, for example) and use some HTML tags (a p i strong b u ul ol li h1 h2 h3 img font br).");
    E("Display Name");
    E("Display Birthday");
    E("Interested in");
    E("Spoken languages");
    E("Wish Lists");
    E("Join Fan Club");
    E("Member");
    E("Fan Club Member");
    E("Last Joined");
    E("Total Months a Member");
    E("Improve Video Quality");
    var mc = E("Dark Mode")
      , nc = E("Search #tags or broadcasters")
      , oc = E("Broadcasting right now")
      , pc = E("Recently online");
    E("TAP TO UNMUTE");
    E("Modify Supporter Membership");
    E("Yes, cancel the membership");
    E("No, keep the features");
    E("Cancellation Successful");
    E("Send and close");
    E("Supporter Plan");
    E("Renew subscription");
    E("Why did you decide to cancel your membership plan? (Optional)");
    E("Would you like to cancel your supporter membership and lose all your supporter features?");
    E("You are about to renew your subscription.");
    E("Cancellation Failed");
    E("OK");
    E("Error, please try and refresh your window.");
    E("Please note that the 'Room subject' of your broadcast and the 'Location' field of your bio may not be used for promotion of social media or other websites. Thank you for your understanding.");
    E("Note");
    E("Notes");
    E("Loading...");
    E("Enter notes about this user (only seen by you)");
    E("(unsaved)");
    E("Type a message...");
    E("Close tab");
    E("Ctrl + l to close tab");
    E("One of your linked Guests has become inactive. <a href='/accounts/age_verification/'>Review your Guests</a> now.");
    E("Back");
    E("Loading More Messages");
    E("Report this user");
    E("Send a private message");
    E("Private Messages");
    E("Don't have an account?");
    E("Search users");
    E("UNOPENED");
    E("now");
    E("1 minute ago");
    E("an hour ago");
    E("a day ago");
    E("minutes ago");
    E("hours ago");
    E("days ago");
    E("To avoid ending the private show, a new tab will open. Click OK to continue.");
    E("We launched the new Cam To Cam feature last month, hoping that this would be the best way to share your cam with broadcasters you are watching. You can help improve this feature by taking 30 seconds to complete a ");
    E("Accept Rules");
    E("Chat");
    E("Unmute");
    E("Clean, Ad-Free Interface");
    E("Custom Chat Font & Color Options");
    E("Private Messaging");
    E("Anonymous Tipping");
    E("Animate Room Images");
    E("There was an error cancelling your Fan Club.");
    E("Are you sure you wish to remove your supporter status? You will remain a supporter until your currently paid month expires.");
    E("There was an error cancelling your supporter membership.");
    E("You can renew after membership expires.");
    E("Since");
    E("Events API");
    E("Ban removed");
    E("Silence removed");
    E("Error removing ban, please try again");
    E("Error converting to ban, please try again");
    E("Error removing silence \u2013\u2013\u00a0it may have already been removed");
    E("Undo");
    E("Ban");
    E("Cam To Cam is the best way to share your cam with broadcasters you are watching.");
    E("trans viewers");
    E("and");
    E("How is Chaturbate doing today?");
    E("Your feedback has been sent!");
    E("Describe your issues or share your ideas.");
    E("You will no longer receive notifications or see them in your followed tab.");
    E("Do you really want to delete this image? This cannot be undone.");
    E("There was an error deleting your media.");
    E("There was an error uploading your media.");
    E("Could not load media. It may have been deleted.");
    E("Switch to OBS to stream games");
    E("Select your game from the list of approved games below.");
    E("Install and start the game");
    E("Download and and run the game.");
    E("Download OBS and set it up");
    E("Authorize this game");
    E("Pro tip: Viewers who use Cam To Cam tip 50% more on average than viewers who don\u2019t. Encouraging your viewers to share their cam can build a more intimate connection and potentially earn you more tokens!");
    E("NOTIFICATION SETTINGS");
    E("Notify me when broadcasters I follow come online with");
    E("POPULAR");
    E("Browser notification");
    E("Browser notification enabled");
    E("Save notification settings");
    E("Email address");
    E("Your preferences have been saved.");
    E("Check your email inbox to verify your email!");
    E("Your email address has been updated on your account. Check your email inbox to");
    E(" verify your email");
    E("Error sending verification email, please try again.");
    E("Error submitting email, please try again.");
    E("Error saving browser notification.");
    E("Please try again from the Settings & Privacy page on your profile.");
    E("Unable to send private message");
    function qc() {
        return "FRAGMENT"
    }
    function rc(a, b, c) {
        var d = sc(a) ? document.createElementNS("http://www.w3.org/2000/svg", a) : document.createElement(a);
        c = tc(c);
        d.appendChild(c);
        var f = null === b ? {} : b;
        Object.keys(f).forEach(function(g) {
            if ("style" === g)
                Object.assign(d.style, f[g]);
            else if ("ref" === g && "function" === typeof f.ref)
                f.ref(d, f);
            else if ("className" === g || "class" === g)
                d.classList.add.apply(d.classList, ea(f[g].split(" ")));
            else if ("colorClass" === g)
                g = f[g],
                Array.isArray(g) ? g.forEach(function(l) {
                    "" !== l && d.classList.add(l)
                }) : d.classList.add(g);
            else if ("htmlFor" === g)
                d.setAttribute("for", f[g]);
            else if ("xlinkHref" === g)
                d.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", f[g]);
            else if ("dangerouslySetInnerHTML" === g)
                d.innerHTML = f[g].bj;
            else if (0 === g.indexOf("on")) {
                var h = g.toLowerCase()
                  , k = !1;
                -1 < g.indexOf("Capture", g.length - 7) && (k = !0,
                h = h.slice(-7));
                null === d[h] ? A(h.slice(2), d, f[g], k) : B("Event declared for JSX element that does not exist on type " + a + ": " + g)
            } else
                d.setAttribute(g, f[g])
        });
        return d
    }
    function uc(a, b) {
        "function" === typeof a.ref && a.ref(b, a)
    }
    function sc(a) {
        var b = new RegExp("^" + a + "$","i");
        return ["path", "svg", "use", "g"].some(function(c) {
            return b.test(c)
        })
    }
    function tc(a) {
        function b(d) {
            d instanceof HTMLElement || d instanceof SVGElement || d instanceof Comment || d instanceof DocumentFragment ? c.appendChild(d) : "string" === typeof d || "number" === typeof d ? c.appendChild(document.createTextNode("" + d)) : d instanceof Array ? d.forEach(b) : !1 === d || null === d || void 0 === d || B("Unexpected child in Tsx fragment: " + d)
        }
        var c = document.createDocumentFragment();
        a.forEach(b);
        return c
    }
    function F(a, b, c) {
        for (var d = [], f = 2; f < arguments.length; ++f)
            d[f - 2] = arguments[f];
        if ("function" === typeof a)
            if (void 0 === a.prototype || void 0 === a.prototype.render) {
                f = Object.assign({}, {}, b, {
                    children: d
                });
                var g = a(f);
                d = "FRAGMENT" === g ? tc(d) : g;
                uc(f, d)
            } else
                d = Object.assign({}, {}, b, {
                    children: d
                }),
                f = [],
                void 0 !== d.unsafeArgs && (f = d.unsafeArgs),
                f = new (Function.prototype.bind.apply(a, [null, d].concat(ea(f)))),
                g = f.render(),
                "function" === typeof d.classRef && d.classRef(f, d),
                uc(d, g),
                d = g;
        else
            d = rc(a, b, d);
        return d
    }
    ;function vc(a, b) {
        this.Sd = a;
        this.config = b;
        this.Ed = this.te = !1
    }
    vc.prototype.ta = function() {
        var a = this;
        if (1 === this.config.Bb)
            clearTimeout(this.Yg),
            this.Yg = window.setTimeout(this.Sd, this.config.gb);
        else {
            var b = function() {
                a.Ed && 2 === a.config.Bb ? (a.Ed = !1,
                a.Sd(),
                window.setTimeout(b, a.config.gb)) : a.te = !1
            };
            this.te ? this.Ed = !0 : (this.te = !0,
            this.Sd(),
            window.setTimeout(b, this.config.gb))
        }
    }
    ;
    function wc(a) {
        vc.call(this, function() {
            b.Jb = !0;
            a(!1)
        }, {
            gb: 300,
            Bb: 1
        });
        var b = this;
        this.lh = a;
        this.Jb = !0
    }
    u(wc, vc);
    wc.prototype.ta = function() {
        this.Jb && (this.Jb = !1,
        this.lh(!0));
        vc.prototype.ta.call(this)
    }
    ;
    function xc(a) {
        function b(d, f) {
            f = String(f.getAttribute("data-callback"));
            "null" !== f && (window[f] = function() {
                d.Df = !0;
                d.Qc()
            }
            )
        }
        var c = {
            name: "",
            ca: "",
            Pd: "",
            Cf: !1,
            dd: !1,
            sc: !1,
            Bf: !1,
            Zc: !0,
            Fh: !1,
            ge: !1,
            vj: "",
            Df: !1,
            yf: a,
            ya: function() {
                c.Pd = String(a.tagName.toLowerCase());
                var d = c.mf();
                c.name = null !== d ? d : "";
                c.ca = c.name;
                if ("captcha" === a.getAttribute("data-type"))
                    c.ge = !0,
                    b(c, a);
                else {
                    var f = String(a.getAttribute("id")).split("_")
                      , g = f[f.length - 1];
                    var h = ["day", "month", "year"];
                    d = !1;
                    if (-1 < h.indexOf(g))
                        for (f.pop(),
                        f = f.join("_"),
                        d = !0,
                        h = t(h),
                        g = h.next(); !g.done; g = h.next())
                            null === document.querySelector("#" + (f + "_" + g.value)) && (d = !1);
                    d && (c.Fh = !0,
                    d = String(a.getAttribute("id")).split("_"),
                    d.shift(),
                    d.pop(),
                    c.ca = d.join("_"))
                }
                d = String(a.getAttribute("type"));
                "checkbox" === d ? c.dd = !0 : "hidden" === d ? c.sc = !0 : "select" === c.Pd && "select-multiple" === a.type && (c.Cf = !0);
                c.Bf = null !== a.getAttribute("disabled");
                c.qf() && (c.Zc = !1)
            },
            mf: function() {
                if ("captcha" === a.getAttribute("data-type")) {
                    var d = String(a.getAttribute("id")).split("_");
                    d.shift();
                    d = d.join("_")
                } else
                    d = a.getAttribute("name");
                return d
            },
            Bi: function() {
                if (!c.sc && !c.ge) {
                    var d = document.querySelector("#" + c.ca + "_spinner");
                    null !== d && d.classList.remove("formvalidate_hidden")
                }
            },
            zh: function() {
                var d = document.querySelector("#" + c.ca + "_spinner");
                null !== d && d.classList.add("formvalidate_hidden")
            },
            Db: function() {
                return String(a.getAttribute("id"))
            },
            Xc: function() {
                return c.dd ? a.checked ? "on" : "" : a.value
            },
            Re: function() {
                c.Zc = !1
            },
            qf: function() {
                if (c.sc)
                    return !1;
                var d = document.querySelector("." + c.ca + "_error");
                return null !== d && "none" !== d.style.display
            },
            eg: function(d, f) {
                c.sc || (f && (c.Zc = !1),
                c.Zc || (document.querySelector("." + c.ca + "_error .error_msg").appendChild(document.createTextNode(d)),
                d = document.querySelector("." + c.ca + "_error"),
                d.style.display = "tr" === String(d.tagName.toLowerCase()) ? "table-row" : "block",
                d = document.querySelector("." + c.ca + "_label"),
                null !== d && d.classList.add("formvalidate_error")))
            },
            Qc: function() {
                if (!c.sc) {
                    for (var d = document.querySelector("." + c.ca + "_error .error_msg"); null !== d.firstChild; )
                        d.removeChild(d.firstChild);
                    document.querySelector("." + c.ca + "_error").style.display = "none";
                    d = document.querySelector("." + c.ca + "_label");
                    null !== d && d.classList.remove("formvalidate_error")
                }
            }
        };
        c.ya();
        return c
    }
    function yc(a) {
        function b() {
            var g = document.createElement("button");
            g.style.display = "none";
            a.appendChild(g);
            window.setTimeout(function() {
                g.click();
                a.removeChild(g)
            }, 0)
        }
        var c = !1;
        c = void 0 === c ? !0 : c;
        var d = "1" === a.getAttribute("data-formvalidate-disable-on-submit") ? [].concat(ea(a.querySelectorAll("button:not([type=button]),input[type=submit]"))) : []
          , f = {
            kb: [],
            Hj: a,
            Fa: !0,
            Kb: !1,
            Lb: !1,
            mg: "",
            Rd: {},
            Hf: {},
            tb: !1,
            fe: !1,
            Cc: [],
            ya: function() {
                f.mg = String(a.getAttribute("data-formvalidate")).substring(1);
                if (c) {
                    A("submit", a, function(n) {
                        f.Kb ? n.preventDefault() : (f.Kb = !0,
                        f.Fa && !f.Lb ? f.Vf(n) : (f.fe = !1,
                        d.map(function(r) {
                            return r.disabled = !0
                        }),
                        f.validate(!0).then(function() {
                            f.Fa ? f.Vf(n) : (f.Kb = !1,
                            d.map(function(r) {
                                return r.disabled = !1
                            }))
                        }).catch(function() {
                            f.Kb = !1;
                            d.map(function(r) {
                                return r.disabled = !1
                            })
                        }),
                        n.preventDefault()))
                    });
                    var g = a.getAttribute("data-formvalidate-eagerness") ? Number(a.getAttribute("data-formvalidate-eagerness")) : 2, h;
                    "1" === a.getAttribute("data-formvalidate-debounce") && (h = new vc(function() {
                        f.validate()
                    }
                    ,{
                        gb: 1E3,
                        Bb: 2
                    }));
                    for (var k = t(a.querySelectorAll("input[type=text], input[type=checkbox], input[type=password], input[type=email], select")), l = k.next(); !l.done; l = k.next()) {
                        l = l.value;
                        var m = l.getAttribute("data-formvalidate-eagerness") ? Number(l.getAttribute("data-formvalidate-eagerness")) : g;
                        1 <= m && A("change", l, function(n) {
                            f.kb[f.Rd[String(n.target.getAttribute("id"))]].Re();
                            f.validate()
                        });
                        2 <= m && A("input", l, function(n) {
                            f.kb[f.Rd[String(n.target.getAttribute("id"))]].Re();
                            void 0 !== h ? h.ta() : f.validate()
                        })
                    }
                }
                g = 0;
                k = t(a.querySelectorAll("input[type=text], input[type=checkbox], input[type=hidden], input[type=password], input[type=email], select, .g-recaptcha"));
                for (l = k.next(); !l.done; l = k.next())
                    l = xc(l.value),
                    f.kb.push(l),
                    f.Rd[l.Db()] = g,
                    g += 1
            },
            wb: function() {
                return f.kb.map(function(g) {
                    if ("" !== g.name && !g.Bf) {
                        if (g.Cf)
                            return Array.from(g.yf.options).filter(function(k) {
                                return k.selected
                            }).map(function(k) {
                                return encodeURIComponent(g.name) + "=" + encodeURIComponent(k.value)
                            }).join("&");
                        if (!g.dd && "radio" !== g.Pd || g.yf.checked) {
                            var h = g.Xc();
                            return encodeURIComponent(g.name) + "=" + encodeURIComponent(h)
                        }
                    }
                }).filter(function(g) {
                    return void 0 !== g
                }).join("&").replace(/%20/g, "+")
            },
            validate: function(g) {
                g = void 0 === g ? !1 : g;
                if (f.Lb && !g)
                    return f.tb = !0,
                    Promise.resolve();
                f.Lb = !0;
                for (var h = {}, k = {}, l = !1, m = t(f.kb), n = m.next(); !n.done; n = m.next())
                    if (n = n.value,
                    k[n.name] = n.Xc(),
                    n.dd && "" === n.Xc() || (h[n.name] = n.Xc()),
                    k[n.name] !== f.Hf[n.name] || g)
                        n.Bi(),
                        l = !0;
                if (!l)
                    return f.Lb = !1,
                    f.tb && (f.tb = !1,
                    f.validate()),
                    Promise.resolve();
                f.Hf = Object.assign({}, k);
                return v(f.mg, h).then(function(r) {
                    r = JSON.parse(r.responseText);
                    f.Fa = r.valid;
                    for (var w = t(f.kb), z = w.next(); !z.done; z = w.next())
                        z = z.value,
                        z.ge && !z.Df ? (z.Qc(),
                        z.eg("Captcha has to be completed", g)) : void 0 !== r.errors[z.ca] ? (z.Qc(),
                        z.eg(r.errors[z.ca], g)) : z.Qc(),
                        z.zh();
                    f.Sg();
                    if (void 0 !== r.errors.__all__) {
                        r = t(r.errors.__all__);
                        for (w = r.next(); !w.done; w = r.next())
                            f.sg(w.value);
                        f.zi()
                    }
                    f.Lb = !1;
                    f.tb && (f.tb = !1,
                    f.validate())
                }).catch(function(r) {
                    void 0 !== window.console && console.info("error: " + r, "");
                    f.Lb = !1;
                    if (f.tb)
                        f.tb = !1,
                        f.validate();
                    else
                        throw r;
                })
            },
            Vf: function(g) {
                d.map(function(h) {
                    return h.disabled = !0
                });
                if (f.fe || 0 === f.Cc.length)
                    return window.setTimeout(function() {
                        d.map(function(h) {
                            return h.disabled = !1
                        })
                    }, 700),
                    Promise.resolve();
                g.preventDefault();
                return Promise.all(f.Cc.map(function(h) {
                    return h()
                })).then(function(h) {
                    f.Kb = !1;
                    window.setTimeout(function() {
                        d.map(function(k) {
                            return k.disabled = !1
                        })
                    }, 10);
                    h.reduce(function(k, l) {
                        return k && l
                    }, !0) && (f.fe = !0,
                    b())
                }).catch(function(h) {
                    x("Can't complete preSubmitValidation in form " + a.action, h);
                    f.Kb = !1;
                    d.map(function(k) {
                        return k.disabled = !1
                    });
                    throw h;
                })
            },
            sg: function(g) {
                var h = document.querySelector("#error_notice > .errorlist")
                  , k = document.createElement("li");
                k.appendChild(document.createTextNode(g));
                h.appendChild(k)
            },
            Sg: function() {
                var g = document.querySelector("#error_notice");
                if (null !== g && (g.classList.add("formvalidate_hidden"),
                g = document.querySelector("#error_notice > .errorlist"),
                null !== g))
                    for (; null !== g.firstChild; )
                        g.removeChild(g.firstChild)
            },
            zi: function() {
                var g = document.querySelector("#error_notice");
                null !== g && g.classList.remove("formvalidate_hidden")
            },
            Nj: function() {
                for (var g = !1, h = t(f.kb), k = h.next(); !k.done; k = h.next())
                    k = k.value,
                    g = g || k.qf();
                h = 0 !== Array.from(a.getElementsByClassName("errorlist")).filter(function(l) {
                    return "" !== l.innerHTML.trim()
                }).length;
                return g || h
            },
            cj: function(g) {
                f.Cc.push(g);
                var h = !1;
                return function() {
                    h || (f.Cc.splice(f.Cc.indexOf(g), 1),
                    h = !0)
                }
            }
        };
        f.ya();
        return f
    }
    ;var zc = "https://cbjpeg.stream.highwebmedia.com/"
      , Ac = "https://roomimg.stream.highwebmedia.com/";
    var Bc = Pa() && !Va();
    function Cc(a, b, c) {
        c = void 0 === c ? {} : c;
        this.pd = a;
        this.bd = b;
        this.zd = this.bc = !1;
        this.Qd = this.ed = 0;
        this.options = Object.assign(Object.assign({}, {
            Xb: !1,
            Mh: !0,
            cf: 2E3
        }), c);
        a = navigator.userAgent.match(/Puffin\/(\d)/);
        this.Ei = null !== a && 8 > parseInt(a[1]) ? 1500 : 140;
        this.options.Xb ? this.Xb() : this.options.Mh && Dc(this, 0)
    }
    Cc.prototype.qd = function() {
        this.zd || (Ec(this, !1),
        this.Qd = 0,
        Dc(this, 0))
    }
    ;
    function Fc(a) {
        return !a.bc && 0 < a.options.cf && (new Date).getTime() <= a.Qd
    }
    function Ec(a, b) {
        a.Qd = b ? 0 : (new Date).getTime() + a.options.cf;
        a.bc = b
    }
    function Dc(a, b) {
        0 === a.ed && (a.ed = b);
        if (!(0 === b || b - a.ed > a.Ei))
            return Promise.resolve();
        a.ed = b;
        var c = a.bc || Fc(a) ? zc + "minifwap/" + a.pd + ".jpg?f=" + Math.random() : Ac + "riw/" + a.pd + ".jpg?" + Math.floor((new Date).getTime() / 3E4);
        return new Promise(function(d, f) {
            var g = new Image;
            g.onload = function() {
                a.bd.onload = function() {
                    a.zd = !0
                }
                ;
                a.zd = !1;
                a.bd.src = g.src;
                d()
            }
            ;
            g.onerror = function() {
                f("Error downloading image " + c)
            }
            ;
            g.src = c
        }
        )
    }
    Cc.prototype.Xb = function() {
        var a = this;
        if (!/Puffin/i.test(navigator.userAgent)) {
            var b = this.bc || Fc(this);
            Ec(this, !0);
            if (!b) {
                var c = function(d) {
                    (a.bc || Fc(a)) && Dc(a, d).then(function() {
                        requestAnimationFrame(function(f) {
                            c(f)
                        })
                    }).catch(function() {
                        c(0)
                    })
                };
                c(0)
            }
        }
    }
    ;
    function Gc() {
        this.od = !0;
        this.Ua = 10;
        this.Ha = 50
    }
    function Hc(a, b) {
        this.ji = a;
        this.listener = b
    }
    Hc.prototype.removeListener = function() {
        this.ji.removeListener(this.listener)
    }
    ;
    function Ic(a, b) {
        b.add(a)
    }
    function H(a, b) {
        this.bf = a;
        this.listeners = [];
        this.history = [];
        this.options = Object.assign(new Gc, b)
    }
    H.prototype.g = function(a, b, c) {
        b = void 0 === b ? !0 : b;
        c = void 0 === c ? !1 : c;
        this.listeners.push(a);
        if (b)
            for (b = t(this.history),
            c = b.next(); !c.done; c = b.next())
                a(c.value);
        else
            c && 0 < this.history.length && a(this.history[this.history.length - 1]);
        -1 !== this.options.Ha && this.listeners.length > this.options.Ha && B('EventRouter "' + this.bf + '" has too many listeners', {
            listeners: this.listeners.length,
            "max-listeners": this.options.Ha
        });
        void 0 !== this.options.jd && this.options.jd(this.listeners.length);
        return new Hc(this,a)
    }
    ;
    H.prototype.once = function(a, b) {
        function c(f) {
            a(f);
            d.removeListener(c)
        }
        var d = this;
        return this.g(c, !1, void 0 === b ? !0 : b)
    }
    ;
    H.prototype.h = function(a) {
        this.history.push(a) > this.options.Ua && this.history.shift();
        for (var b = t([].concat(ea(this.listeners))), c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            try {
                c(a)
            } catch (d) {
                x("Event listener error: " + d, {
                    event_name: this.bf,
                    event_listeners: this.listeners.length,
                    listener: c,
                    error_stack: d.stack
                })
            }
        }
    }
    ;
    H.prototype.removeListener = function(a) {
        a = this.listeners.indexOf(a);
        0 <= a && this.listeners.splice(a, 1);
        void 0 !== this.options.kd && this.options.kd(this.listeners.length)
    }
    ;
    function Jc() {
        this.Dd = []
    }
    Jc.prototype.add = function(a) {
        this.Dd.push(a)
    }
    ;
    function Kc(a) {
        for (var b = t(a.Dd), c = b.next(); !c.done; c = b.next())
            c.value.removeListener();
        a.Dd = []
    }
    ;function I(a, b) {
        a = void 0 === a ? "div" : a;
        this.Oa = [];
        this.sf = !1;
        this.ah = new H("didReposition",{
            od: !1
        });
        this.element = "string" === typeof a ? this.Te(a) : a;
        this.initData(b);
        this.F(b);
        this.element.setAttribute("ts", "" + this.constructor.name)
    }
    e = I.prototype;
    e.Te = function(a) {
        a = document.createElement(a);
        a.style.height = "100%";
        a.style.width = "100%";
        a.style.position = "absolute";
        a.style.overflow = "hidden";
        a.style.webkitTapHighlightColor = "transparent";
        return a
    }
    ;
    e.initData = function() {}
    ;
    e.F = function() {}
    ;
    e.v = function() {}
    ;
    function Lc(a) {
        a.v();
        for (var b = t(a.children()), c = b.next(); !c.done; c = b.next())
            Lc(c.value);
        a.ah.h(void 0)
    }
    function Mc(a) {
        a = t(a.children());
        for (var b = a.next(); !b.done; b = a.next())
            Mc(b.value)
    }
    e.K = function(a, b) {
        Nc(this, a);
        void 0 === b && (b = this.element);
        a.sf || (a.sf = !0);
        b.appendChild(a.element)
    }
    ;
    function Nc(a, b) {
        void 0 !== b.parent && b.parent !== a && b.parent.removeChild(b);
        a.Oa.push(b);
        b.parent = a
    }
    e.removeChild = function(a) {
        var b = this.Oa.indexOf(a);
        if (-1 === b)
            x("tried removing component that doesn't exist");
        else
            for (this.Oa.splice(b, 1),
            a.parent === this && (a.parent = void 0),
            Oc(a),
            a = t(a.children()),
            b = a.next(); !b.done; b = a.next())
                ;
    }
    ;
    function Oc(a) {
        var b = a.element.parentNode;
        null !== b ? b.removeChild(a.element) : x("couldn't find parent element to use for node removal")
    }
    function Pc(a) {
        for (var b = t(a.children()), c = b.next(); !c.done; c = b.next())
            c = c.value,
            c.parent === a && (c.parent = void 0),
            Oc(c);
        a.Oa = []
    }
    e.children = function() {
        return this.Oa
    }
    ;
    e.u = function(a) {
        this.element.style.display = void 0 === this.Sf ? void 0 === a ? "block" : a : this.Sf
    }
    ;
    e.l = function() {
        "none" !== this.element.style.display && ("" !== this.element.style.display && (this.Sf = this.element.style.display),
        this.element.style.display = "none")
    }
    ;
    e.G = function() {
        return "none" !== this.element.style.display
    }
    ;
    e.previousSibling = function() {
        if (void 0 !== this.parent)
            return Qc(this, this.parent.children())
    }
    ;
    e.nextSibling = function() {
        if (void 0 !== this.parent)
            return Qc(this, this.parent.children().slice().reverse())
    }
    ;
    e.lastChild = function() {
        return 0 < this.children().length ? this.children()[this.children().length - 1] : void 0
    }
    ;
    function Qc(a, b) {
        b = t(b);
        for (var c = b.next(); !c.done; c = b.next()) {
            c = c.value;
            if (c === a)
                break;
            var d = c
        }
        return d
    }
    ;function J(a, b) {
        a = a instanceof I ? a.element : a;
        a.classList.contains(b) || a.classList.add(b)
    }
    function K(a, b) {
        a = a instanceof I ? a.element : a;
        a.classList.contains(b) && a.classList.remove(b)
    }
    ;function Rc(a, b, c, d) {
        d = void 0 === d ? 3 : d;
        var f = document.createElement("div");
        f.style.position = "absolute";
        f.style.height = "0";
        f.style.width = "0";
        f.style.top = "-8px";
        f.style.left = c;
        c = document.createElement("div");
        J(c, "divotBorder");
        c.style.borderLeft = "8px solid transparent";
        c.style.borderRight = "8px solid transparent";
        c.style.borderBottomWidth = "8px";
        c.style.borderBottomStyle = "solid";
        "" !== a && (c.style.borderBottomColor = "" + a);
        f.appendChild(c);
        a = 8 - d;
        var g = document.createElement("div");
        J(g, "divotBackground");
        g.style.position = "absolute";
        g.style.top = d + "px";
        g.style.left = d + "px";
        g.style.borderLeft = a + "px solid transparent";
        g.style.borderRight = a + "px solid transparent";
        g.style.borderBottomWidth = a + "px";
        g.style.borderBottomStyle = "solid";
        "" !== b && (g.style.borderBottomColor = "" + b);
        c.appendChild(g);
        return f
    }
    function Sc(a, b, c, d) {
        d = void 0 === d ? 3 : d;
        var f = document.createElement("div");
        f.style.position = "absolute";
        f.style.height = "0";
        f.style.width = "0";
        f.style.bottom = "0";
        f.style.left = c;
        c = document.createElement("div");
        J(c, "divotBorder");
        c.style.borderLeft = "8px solid transparent";
        c.style.borderRight = "8px solid transparent";
        c.style.borderTopWidth = "8px";
        c.style.borderTopStyle = "solid";
        "" !== a && (c.style.borderTopColor = "" + a);
        f.appendChild(c);
        a = 8 - d;
        var g = document.createElement("div");
        J(g, "divotBackground");
        g.style.position = "absolute";
        g.style.top = "0";
        g.style.left = d + "px";
        g.style.borderLeft = a + "px solid transparent";
        g.style.borderRight = a + "px solid transparent";
        g.style.borderTopWidth = a + "px";
        g.style.borderTopStyle = "solid";
        "" !== b && (g.style.borderTopColor = "" + b);
        c.appendChild(g);
        return f
    }
    function Tc(a, b, c, d) {
        d = void 0 === d ? 3 : d;
        var f = document.createElement("div");
        f.style.position = "absolute";
        f.style.height = "0";
        f.style.width = "0";
        f.style.left = "-8px";
        f.style.top = c;
        c = document.createElement("div");
        J(c, "divotBorder");
        c.style.borderTop = "8px solid transparent";
        c.style.borderBottom = "8px solid transparent";
        c.style.borderRightWidth = "8px";
        c.style.borderRightStyle = "solid";
        "" !== a && (c.style.borderRightColor = "" + a);
        f.appendChild(c);
        a = 8 - d;
        var g = document.createElement("div");
        J(g, "divotBackground");
        g.style.position = "absolute";
        g.style.top = d + "px";
        g.style.left = d + "px";
        g.style.borderTop = a + "px solid transparent";
        g.style.borderBottom = a + "px solid transparent";
        g.style.borderRightWidth = a + "px";
        g.style.borderRightStyle = "solid";
        "" !== b && (g.style.borderRightColor = "" + b);
        c.appendChild(g);
        return f
    }
    function Uc(a, b, c, d) {
        d = void 0 === d ? 3 : d;
        var f = document.createElement("div");
        f.style.position = "absolute";
        f.style.height = "0";
        f.style.width = "0";
        f.style.right = "0";
        f.style.top = c;
        c = document.createElement("div");
        J(c, "divotBorder");
        c.style.borderTop = "8px solid transparent";
        c.style.borderBottom = "8px solid transparent";
        c.style.borderLeftWidth = "8px";
        c.style.borderLeftStyle = "solid";
        "" !== a && (c.style.borderLeftColor = "" + a);
        f.appendChild(c);
        a = 8 - d;
        var g = document.createElement("div");
        J(g, "divotBackground");
        g.style.position = "absolute";
        g.style.top = d + "px";
        g.style.right = "-" + a + "px";
        g.style.borderTop = a + "px solid transparent";
        g.style.borderBottom = a + "px solid transparent";
        g.style.borderLeftWidth = a + "px";
        g.style.borderLeftStyle = "solid";
        "" !== b && (g.style.borderLeftColor = "" + b);
        c.appendChild(g);
        return f
    }
    ;var Vc = {
        fullscreenEnabled: 0,
        fullscreenElement: 1,
        requestFullscreen: 2,
        exitFullscreen: 3,
        fullscreenchange: 4,
        fullscreenerror: 5
    }, Wc = "webkitFullscreenEnabled webkitFullscreenElement webkitRequestFullscreen webkitExitFullscreen webkitfullscreenchange webkitfullscreenerror".split(" "), Xc = "mozFullScreenEnabled mozFullScreenElement mozRequestFullScreen mozCancelFullScreen mozfullscreenchange mozfullscreenerror".split(" "), Yc = "msFullscreenEnabled msFullscreenElement msRequestFullscreen msExitFullscreen MSFullscreenChange MSFullscreenError".split(" "), L;
    "fullscreenEnabled"in document ? L = Object.keys(Vc) : Wc[0]in document ? L = Wc : Xc[0]in document ? L = Xc : Yc[0]in document && (L = Yc);
    function Zc() {
        if (void 0 !== L)
            return document[L[Vc.fullscreenElement]]
    }
    function $c() {
        return void 0 === L ? "" : L[Vc.fullscreenchange]
    }
    ;function ad(a) {
        A($c(), document, function() {
            Zc() ? window.setTimeout(function() {
                "fullscreen" !== a.$a && bd("noninteractive-fullscreen")
            }, 0) : bd(a.If)
        })
    }
    function bd(a) {
        var b = cd;
        a !== b.$a ? (-1 === ["noninteractive-fullscreen", "fullscreen", "fullvideo"].indexOf(b.$a) && (b.If = b.$a),
        b.Kf = b.$a,
        b.$a = a,
        a = !0) : a = !1;
        a && (a = b.$a,
        "videoonly" !== a && (hb = a),
        b.Og.h({
            uj: b.$a,
            lk: b.Kf
        }))
    }
    var cd = new function() {
        this.Og = new H("changeVideoMode");
        this.$a = "split";
        this.Kf = "theater";
        this.If = "split";
        ad(this)
    }
    ;
    new H("splitModeDragResize");
    function M(a, b) {
        var c = a instanceof I ? a.element : a;
        var d = b;
        b instanceof Function && (d = b(a));
        a = t(Object.keys(d));
        for (d = a.next(); !d.done; d = a.next())
            d = d.value,
            c.style[d] = b[d]
    }
    function dd(a) {
        A("mouseenter", a, function() {
            a.style.textDecoration = "underline"
        });
        A("mouseleave", a, function() {
            a.style.textDecoration = ""
        })
    }
    function ed(a) {
        if (null === a)
            return "rgba(0, 0, 0, 0)";
        var b = getComputedStyle(a).backgroundColor;
        return "" === b || "rgba(0, 0, 0, 0)" === b || "transparent" === b ? ed(a.parentElement) : b
    }
    function fd(a) {
        function b(k, l, m) {
            return 0 === k ? 0 === l ? void 0 === m ? 0 : m : l : k
        }
        a = a.getBoundingClientRect();
        var c = document.body
          , d = document.documentElement
          , f = b(window.pageYOffset, d.scrollTop, c.scrollTop)
          , g = b(window.pageXOffset, d.scrollLeft, c.scrollLeft)
          , h = b(d.clientTop, c.clientTop);
        c = b(d.clientLeft, c.clientLeft);
        return new DOMRect(a.left + g - c,a.top + f - h,a.width,a.height)
    }
    function gd(a) {
        if (null === a)
            return 0;
        try {
            var b = parseFloat(a.substring(0, a.indexOf("px")));
            return isNaN(b) ? 0 : b
        } catch (c) {
            return 0
        }
    }
    function hd(a) {
        var b = new H("hover");
        a = a instanceof I ? a.element : a;
        A("mouseenter", a, function() {
            b.h(!0)
        });
        A("mouseleave", a, function() {
            b.h(!1)
        });
        return b
    }
    var id;
    function jd() {
        if (void 0 !== id)
            return id;
        var a = document.createElement("div");
        a.style.visibility = "hidden";
        a.style.width = "100px";
        a.style.msOverflowStyle = "scrollbar";
        document.body.appendChild(a);
        var b = a.offsetWidth;
        a.style.overflow = "scroll";
        var c = document.createElement("div");
        c.style.width = "100%";
        a.appendChild(c);
        c = c.offsetWidth;
        document.body.removeChild(a);
        return id = b - c
    }
    function kd() {
        var a = document.createElement("style");
        a.type = "text/css";
        a.innerText = "#room_list {min-width: 0!important}";
        document.getElementsByTagName("head")[0].appendChild(a)
    }
    function nd() {
        var a = document.querySelector("#advanced_search_options")
          , b = document.querySelector(".advanced-search-element");
        return null === a ? null === b ? void 0 : b : a
    }
    ;function od() {
        H.apply(this, arguments)
    }
    u(od, H);
    od.prototype.g = function(a, b) {
        a = H.prototype.g.call(this, a, void 0 === b ? !0 : b);
        pd.ta();
        return a
    }
    ;
    var P = new od("resizeDebounceEvent")
      , pd = qd(function() {
        P.h(!1)
    });
    function rd(a, b, c, d, f, g) {
        function h() {
            var l = c instanceof Function ? c() : c
              , m = d instanceof Function ? d() : d
              , n = l + (m - l) * (Math.max(Math.min(document.body.clientWidth, f), k) - k) / (f - k)
              , r = a instanceof I ? a.element : a;
            b instanceof Array ? b.forEach(function(w) {
                r.style[w] = n + "px"
            }) : r.style[b] = n + "px";
            a instanceof I && Lc(a);
            void 0 !== g && g(n)
        }
        var k = 500;
        k = void 0 === k ? 500 : k;
        f = void 0 === f ? 1003 : f;
        P.g(h);
        window.setTimeout(function() {
            h()
        })
    }
    function sd() {
        var a = new H("width-less-than995")
          , b = !1;
        P.g(function() {
            995 > document.documentElement.clientWidth ? b || (b = !0,
            a.h(!0)) : b && (b = !1,
            a.h(!1))
        });
        return a
    }
    function qd(a) {
        var b = new vc(function() {
            a(!0)
        }
        ,{
            gb: 80,
            Bb: 2
        })
          , c = new vc(function() {
            a(!1)
        }
        ,{
            gb: 200,
            Bb: 1
        });
        A("resize", window, function() {
            b.ta();
            c.ta()
        });
        A("orientationchange", window, function() {
            a(!1);
            window.setTimeout(function() {
                a(!1)
            }, 80)
        });
        return c
    }
    if (Ra() && Pa()) {
        var td = document.createElement("div");
        M(td, {
            position: "absolute",
            width: "100%"
        });
        document.body.appendChild(td);
        var ud = td.offsetWidth;
        window.setInterval(function() {
            ud !== td.offsetWidth && (P.h(!0),
            ud = td.offsetWidth)
        }, 150)
    }
    ;new H("key");
    function vd(a) {
        var b = void 0 === a.hasHTML ? a : {
            content: a.content,
            rf: "true" === a.hasHTML,
            width: parseInt(a.width),
            Ye: parseInt(a.divotPosition),
            Xe: a.divotLeftOrTop,
            borderWidth: a.borderWidth ? parseInt(a.borderWidth) : void 0
        };
        a = document.createElement("div");
        J(a, "tooltip");
        b.rf ? a.innerHTML = b.content : a.textContent = b.content;
        a.style.width = b.width + "px";
        a.style.borderWidth = "2px";
        a.style.position = "absolute";
        a.style.borderStyle = "solid";
        a.style.borderRadius = "6px";
        a.style.fontSize = "12px";
        a.style.padding = "8px";
        a.style.display = "none";
        a.style.zIndex = "5";
        var c = b.borderWidth;
        var d = "";
        switch (b.Ye) {
        case 0:
            var f = Rc;
            d = "divotTop";
            break;
        case 1:
            f = Sc;
            d = "divotBottom";
            break;
        case 2:
            f = Tc;
            d = "divotLeft";
            break;
        case 3:
            f = Uc;
            d = "divotRight";
            break;
        default:
            f = void 0
        }
        void 0 !== f ? (b = f("", "", b.Xe, void 0 === c ? 3 : c),
        J(b, d),
        J(b, "divot"),
        d = b) : d = void 0;
        void 0 !== d && a.appendChild(d);
        return a
    }
    ;function Q(a, b, c) {
        b = void 0 === b ? !0 : b;
        I.call(this, "div", c);
        var d = this;
        this.Na = new H("dropDownToggled",{
            od: !1
        });
        this.ea = a;
        void 0 !== a && (A("click", a, function(f) {
            f instanceof MouseEvent && (f.metaKey || f.ctrlKey) || (d.G() ? d.l(f) : d.u(void 0, f))
        }, !1),
        A("keydown", a, function(f) {
            if (32 === f.keyCode || "Space" === f.code)
                f.preventDefault(),
                d.G() ? d.l(f) : d.u(void 0, f)
        }));
        wd(this, b)
    }
    u(Q, I);
    Q.prototype.F = function(a) {
        I.prototype.F.call(this, a);
        this.element.style.overflow = "visible";
        this.element.style.position = "absolute";
        this.element.style.top = "0";
        this.element.style.left = "0";
        this.element.style.right = "auto";
        this.element.style.bottom = "auto";
        this.element.style.width = "";
        this.element.style.height = "";
        this.element.style.display = "none"
    }
    ;
    Q.prototype.u = function(a, b) {
        if (this.G())
            return !1;
        this.element.style.display = void 0 === a ? "block" : a;
        this.Na.h(new xd(!0,b));
        return !0
    }
    ;
    Q.prototype.l = function(a) {
        if (!this.G())
            return !1;
        this.element.style.display = "none";
        this.Na.h(new xd(!1,a));
        return !0
    }
    ;
    function wd(a, b) {
        b = void 0 === b ? !0 : b;
        yd.g(function(c) {
            !(a.G() && c.target instanceof Element) || b && a.element.contains(c.target) || void 0 !== a.ea && a.ea.contains(c.target) || a.l(c)
        })
    }
    function zd(a) {
        Q.call(this, a)
    }
    u(zd, Q);
    zd.prototype.F = function() {
        Q.prototype.F.call(this);
        this.element.style.display = "block"
    }
    ;
    zd.prototype.u = function() {
        var a = this.element.parentElement;
        if (null === a)
            return !1;
        a.classList.toggle("pushmenu-animate", !0);
        this.Na.h(new xd(!0));
        return !0
    }
    ;
    zd.prototype.l = function() {
        var a = this.element.parentElement;
        if (null === a)
            return !1;
        a.classList.toggle("pushmenu-animate", !1);
        this.Na.h(new xd(!1));
        return !0
    }
    ;
    zd.prototype.G = function() {
        var a = this.element.parentElement;
        return null === a ? !1 : a.classList.contains("pushmenu-animate")
    }
    ;
    function xd(a, b) {
        this.pa = a;
        this.event = b
    }
    var yd = new H("documentClick"), Ad = !1, Bd;
    A("touchmove", document, function() {
        Ad = !0
    });
    A("touchstart", document, function() {
        Ad = !1
    });
    A("click", document, function(a) {
        yd.h(a);
        void 0 !== Bd && (clearTimeout(Bd),
        Bd = void 0)
    });
    (Ra() || Sa()) && A("touchend", document, function(a) {
        Ad || (Bd = window.setTimeout(function() {
            Bd = void 0;
            yd.h(a)
        }, 200))
    }, !1);
    function Cd(a, b) {
        Q.call(this, a, !1);
        var c = this;
        this.ea = a;
        this.tg = !0 === b;
        this.Id = new Dd;
        this.K(this.Id);
        P.g(function() {
            c.G() && c.Tb()
        })
    }
    u(Cd, Q);
    Cd.prototype.u = function(a, b) {
        if (!Q.prototype.u.call(this, void 0 === a ? "block" : a, b))
            return !1;
        this.ea.classList.add("active");
        document.body.appendChild(this.element);
        this.Tb();
        return !0
    }
    ;
    Cd.prototype.l = function(a) {
        if (!Q.prototype.l.call(this, a))
            return !1;
        this.ea.classList.remove("active");
        document.body.removeChild(this.element);
        return !0
    }
    ;
    Cd.prototype.Tb = function() {
        var a = fd(this.ea)
          , b = this.tg || this.element.offsetWidth + a.left > document.documentElement.clientWidth && 0 < a.right - this.element.offsetWidth;
        this.element.style.position = "absolute";
        this.element.style.backgroundColor = ed(this.ea);
        "0px" !== Ed(this, b ? "borderRightWidth" : "borderLeftWidth") && (this.element.style.borderWidth = Ed(this, b ? "borderRightWidth" : "borderLeftWidth"),
        this.element.style.borderStyle = Ed(this, b ? "borderRightStyle" : "borderLeftStyle"),
        this.element.style.borderColor = Ed(this, b ? "borderRightColor" : "borderLeftColor"));
        var c = Ed(this, b ? "borderTopRightRadius" : "borderTopLeftRadius");
        "" !== c && (this.element.style.borderRadius = (b ? c + " 0" : "0 " + c) + " " + c + " " + c);
        c = gd(getComputedStyle(this.element).borderBottomWidth) - gd(getComputedStyle(this.ea).borderLeftWidth);
        this.element.style.top = a.bottom + 4 + "px";
        b ? (this.element.style.left = "",
        a = document.documentElement.clientWidth - a.right - c,
        this.element.style.right = a + "px",
        this.element.style.right = a - Fd(this.ea, this.element) - c + "px") : (this.element.style.right = "",
        a = a.left - c,
        this.element.style.left = a + "px",
        this.element.style.left = a + Gd(this.ea, this.element) - c + "px");
        a = this.Id;
        var d = this.ea
          , f = getComputedStyle(this.element);
        a.element.style.borderLeftWidth = f.borderLeftWidth;
        a.element.style.borderLeftStyle = f.borderLeftStyle;
        a.element.style.borderLeftColor = f.borderLeftColor;
        a.element.style.borderRightWidth = f.borderLeftWidth;
        a.element.style.borderRightStyle = f.borderLeftStyle;
        a.element.style.borderRightColor = f.borderLeftColor;
        var g = gd(getComputedStyle(d).width) + 2 * c;
        a.element.style.width = g + "px";
        var h = this.element.offsetTop - fd(d).bottom + 1;
        a.element.style.height = h + 2 + "px";
        a.element.style.top = "-" + (h + 2) + "px";
        a.element.style.backgroundColor = f.backgroundColor;
        h = bb(f.borderWidth, f.borderLeftWidth);
        a.element.style.right = b ? "-" + h : "";
        a.element.style.left = b ? "" : "-" + h;
        a.element.style.zIndex = "" + (parseInt(bb(f.zIndex, "0")) + 1);
        a.element.style.width = b ? g - Gd(d, a.element) + c + "px" : g + Fd(d, a.element) + c + "px";
        this.element.style.zIndex = getComputedStyle(this.Id.element).zIndex
    }
    ;
    function Ed(a, b) {
        return bb(a.ea.style[b], getComputedStyle(a.ea)[b])
    }
    function Dd() {
        I.call(this);
        M(this.element, {
            position: "absolute",
            zIndex: 4
        })
    }
    u(Dd, I);
    function Gd(a, b) {
        return a.getBoundingClientRect().left - b.getBoundingClientRect().left
    }
    function Fd(a, b) {
        return a.getBoundingClientRect().right - b.getBoundingClientRect().right
    }
    ;function R(a) {
        this.yd = {};
        if ("string" === typeof a) {
            this.Ya = a;
            try {
                this.parsed = JSON.parse(a)
            } catch (b) {
                this.parsed = {},
                x("Cannot JSON parse", {
                    message: a
                })
            }
        } else
            "object" === typeof a ? (this.parsed = a,
            this.Ya = JSON.stringify(a)) : x("Invalid input type", {
                message: a
            })
    }
    function Hd(a, b) {
        a.yd[b] = !0;
        if (null !== a.parsed[b])
            return a.parsed[b]
    }
    function Id(a) {
        a.yd.items = !0;
        if (null !== a.parsed.items && void 0 !== a.parsed.items)
            return a.parsed.items.map(function(b) {
                return new R(b)
            })
    }
    function Jd(a) {
        a.yd.fallback_hosts = !0;
        return Array.isArray(a.parsed.fallback_hosts) ? a.parsed.fallback_hosts.map(function(b) {
            return b
        }) : []
    }
    R.prototype.getAsString = function(a) {
        return "" + Hd(this, a)
    }
    ;
    function Kd(a, b) {
        var c = void 0 === c ? !0 : c;
        var d = Hd(a, b);
        if ("string" !== typeof d)
            c && void 0 !== d && B("getStringOrUndefined(" + b + "): " + d + " is wrong type", {
                message: a.Ya
            });
        else
            return d
    }
    function S(a, b) {
        var c = void 0 === c ? !0 : c;
        var d = Hd(a, b);
        return "string" !== typeof d ? (c && B("getString(" + b + "): " + d + " is wrong type", {
            message: a.Ya
        }),
        "") : d
    }
    function Ld(a, b, c) {
        b = void 0 === b ? !1 : b;
        c = void 0 === c ? !0 : c;
        var d = Hd(a, "seen");
        return "boolean" !== typeof d ? (c && B("getBoolean(seen): " + d + " is wrong type", {
            message: a.Ya
        }),
        b) : d
    }
    function Md(a, b) {
        var c = void 0 === c ? !0 : c;
        var d = Hd(a, b);
        return "number" !== typeof d ? (c && B("getNumber(" + b + "): " + d + " is wrong type", {
            message: a.Ya
        }),
        NaN) : d
    }
    function Nd(a) {
        a = Od(a, "settings", !0);
        if (void 0 !== a)
            return new R(a)
    }
    function Pd(a, b) {
        var c = void 0 === c ? !0 : c;
        var d = Hd(a, b);
        return "object" !== typeof d ? (c && B("getObject(" + b + "): " + d + " is wrong type", {
            message: a.Ya
        }),
        {}) : d
    }
    function Od(a, b, c) {
        c = void 0 === c ? !0 : c;
        var d = Hd(a, b);
        if ("object" !== typeof d)
            c && void 0 !== d && B("getObjectOrUndefined(" + b + "): " + d + " is wrong type", {
                message: a.Ya
            });
        else
            return d
    }
    ;new H("bioClicked");
    new H("userListRequest");
    new H("openTipCalloutRequest");
    var Qd = new H("loadRoomRequest");
    new H("reportAbuseRequest");
    new H("privateWindowRequest");
    new H("chatWindowRequest");
    var Rd = new H("colorModeChangeRequest")
      , Sd = new H("roomChangeColorModeUpdateRequest");
    var Td = new H("navigationRequest");
    var Ud = new H("modalReposition");
    A("resize", window, function() {
        Ud.h(void 0)
    });
    A("orientationchange", window, function() {
        Ud.h(void 0)
    });
    var Vd = new H("modalFullscreenChange");
    A($c(), document, function() {
        Vd.h(void 0)
    });
    var Wd = new H("modalEscape");
    A("keydown", document, function(a) {
        27 === a.keyCode && Wd.h(a)
    });
    var Xd = new H("modalExit");
    A("popstate", window, function() {
        Xd.h(void 0)
    });
    Td.g(function() {
        Xd.h(void 0)
    });
    var Yd = new H("modalOpened");
    function U(a) {
        a = void 0 === a ? {
            Cb: !0
        } : a;
        I.call(this);
        var b = this;
        this.options = a;
        this.Bc = new H("overlayClick");
        this.Ga = new Jc;
        this.re = this.Uf = this.yh = this.Ib = !1;
        this.m = document.createElement("div");
        this.m.style.position = "fixed";
        this.m.style.display = "none";
        this.m.style.left = "0";
        this.m.style.top = "0";
        this.m.style.right = "0";
        this.m.style.bottom = "0";
        this.m.style.zIndex = "1100";
        this.m.style.background = "rgb(0,0,0,0)";
        this.m.onclick = function(c) {
            c.stopPropagation();
            b.Bc.h(void 0);
            b.Uf || b.j()
        }
        ;
        this.element.style.zIndex = "1101";
        this.element.onclick = function(c) {
            c.stopPropagation()
        }
        ;
        this.di = function() {
            b.Ib && Lc(b)
        }
        ;
        this.vh = function() {
            b.Ib && b.show()
        }
    }
    u(U, I);
    U.prototype.show = function() {
        var a = this
          , b = Zc();
        Zc() && void 0 !== b ? (b.appendChild(this.m),
        b.appendChild(this.element)) : (document.body.appendChild(this.m),
        document.body.appendChild(this.element));
        this.Ib || (Ic(Ud.g(this.di, !1), this.Ga),
        Ic(Vd.g(this.vh, !1), this.Ga),
        Ic(Xd.g(function() {
            a.j()
        }, !1), this.Ga),
        this.options.Cb && Ic(Wd.g(function(c) {
            c.preventDefault();
            a.j()
        }, !1), this.Ga),
        this.re && Yd.h(!0),
        void 0 !== this.options.rb && this.options.rb(),
        this.Ib = !0);
        this.yh || (this.m.style.display = "block")
    }
    ;
    U.prototype.j = function() {
        this.m.style.display = "none";
        null !== this.element.parentElement && this.element.parentElement.removeChild(this.element);
        null !== this.m.parentElement && this.m.parentElement.removeChild(this.m);
        this.Ib && (Kc(this.Ga),
        this.re && Yd.h(!1),
        void 0 !== this.options.Pb && this.options.Pb(),
        this.Ib = !1)
    }
    ;
    var Zd = {};
    function V(a) {
        this.jb = this.active = !1;
        this.name = a;
        var b = window.experiments;
        if (void 0 !== b) {
            var c = b.active;
            this.active = void 0 !== c && -1 !== c.indexOf(a);
            b = b.eligible;
            this.jb = void 0 !== b && -1 !== b.indexOf(a)
        }
    }
    V.prototype.ue = function() {
        if (this.jb && !Zd[this.name]) {
            var a = {
                experimentName: this.name,
                experimentGroup: "inactive"
            };
            this.active && (a.experimentGroup = "active");
            D("ExperimentEntered", a, !0);
            Zd[this.name] = !0
        }
    }
    ;
    var $d = {};
    function ae(a, b) {
        this.ne = b;
        this.jb = this.active = !1;
        var c = window.experiments;
        if (void 0 !== c) {
            b = c.active;
            var d = c.eligible;
            if (void 0 !== d) {
                var f = t(a);
                for (c = f.next(); !c.done; c = f.next())
                    if (-1 !== d.indexOf(c.value)) {
                        this.jb = !0;
                        break
                    }
                if (this.jb && void 0 !== b)
                    for (a = t(a),
                    c = a.next(); !c.done; c = a.next())
                        if (c = c.value,
                        -1 !== b.indexOf(c)) {
                            this.active = !0;
                            this.Ke = c;
                            break
                        }
            }
        }
    }
    ae.prototype.ue = function() {
        if (this.jb && !$d[this.ne]) {
            var a = {
                experimentName: this.ne,
                experimentGroup: "inactive",
                experimentTreatment: this.Ke
            };
            this.active && (a.experimentGroup = "active");
            D("ExperimentEntered", a, !0);
            $d[this.ne] = !0
        }
    }
    ;
    var be = {};
    function ce() {
        void 0 === be.NewChatStyles && (be.NewChatStyles = (new V("NewChatStyles")).active);
        return be.NewChatStyles
    }
    ;var de = new H("roomLoaded",{
        Ha: 100,
        Ua: 1
    });
    new H("roomCleanup",{
        Ha: 20
    });
    new H("userViewedPm");
    new H("tipSent");
    new H("externalChatMessage");
    new H("context");
    new H("context");
    function ee(a, b, c) {
        new Promise(function(d) {
            var f;
            Zc() ? (void 0 !== L && document[L[Vc.exitFullscreen]].bind(document)(),
            window.setTimeout(function() {
                var g = window.open(a, b, c, void 0);
                null !== g && window.setTimeout(function() {
                    g.focus()
                }, 200);
                d(null !== g && void 0 !== g ? g : void 0)
            }, 500)) : d(null !== (f = window.open(a, b, c, void 0)) && void 0 !== f ? f : void 0)
        }
        )
    }
    var fe = ""
      , ge = "";
    "hidden"in document ? (fe = "hidden",
    ge = "visibilitychange") : "msHidden"in document ? (fe = "msHidden",
    ge = "msvisibilitychange") : "webkitHidden"in document && (fe = "webkitHidden",
    ge = "webkitvisibilitychange");
    var he = new H("documentVisibilityChange",{
        Ua: 1
    })
      , ie = !document[fe];
    function je(a) {
        ie !== a && (ie = a,
        he.h(ie))
    }
    if ("" !== fe && "" !== ge) {
        var ke = function() {
            je(!document[fe])
        };
        A(ge, document, ke);
        var le = function() {
            C(ge, document, ke);
            C("pagehide", window, le);
            je(!1);
            A("pagehide", window, function() {
                je(!1)
            });
            A("pageshow", window, function() {
                je(!0)
            })
        };
        A("pagehide", window, le)
    } else
        A("blur", window, function() {
            je(!1)
        }),
        A("focus", window, function() {
            je(!0)
        });
    function me(a) {
        "Escape" !== a.key && a.stopImmediatePropagation()
    }
    var ne = "";
    de.g(function(a) {
        ne = a.rj.A()
    });
    function oe() {
        function a() {
            "" !== T.value.trim() && "" !== f.yb.value.trim() && (f.H.style.opacity = "1")
        }
        function b(G, N) {
            return function(xa) {
                "Tab" === xa.key && (xa.preventDefault(),
                xa.shiftKey ? N.focus() : G.focus())
            }
        }
        function c(G, N, xa, ld) {
            var md = document.createElement("label")
              , O = document.createElement("input");
            md.innerText = N;
            md.htmlFor = ld;
            O.type = xa;
            O.id = ld;
            O.name = ld;
            O.style.height = "checkbox" === xa ? "18px" : "26px";
            O.style.width = "checkbox" === xa ? "18px" : "100%";
            O.style.font = "100% Arial,Helvetica,sans-serif";
            O.style.color = "#000";
            O.style.boxSizing = "border-box";
            O.style.border = "1px solid #d5d5d5";
            O.style.padding = "2px 4px";
            O.style.margin = "1px 0";
            O.style.lineHeight = "18px";
            O.style.borderRadius = "4px";
            A("keydown", O, function(jf) {
                "Enter" === jf.key && (jf.preventDefault(),
                f.H.click())
            });
            G.appendChild(md);
            G.appendChild(O);
            return O
        }
        function d(G) {
            var N = document.createElement("div");
            N.style.display = "block";
            N.style.margin = "10px 0 0 0";
            G.appendChild(N);
            return N
        }
        U.call(this, {
            rb: function() {
                f.v();
                f.isVisible = !0;
                f.yb.focus();
                A("keydown", f.element, me);
                A($c(), document, f.Vd);
                f.Vd()
            },
            Pb: function() {
                var G = f.isVisible;
                f.element.style.display = "none";
                f.isVisible = !1;
                G && (C("keydown", f.element, me),
                C($c(), document, f.Vd));
                f.Ge()
            },
            Cb: !0
        });
        var f = this;
        this.isVisible = !1;
        this.Ge = function() {
            void 0 !== f.fb && (f.fb.style.overflow = "",
            f.fb.style.visibility = "",
            f.fb.style.backgroundColor = "")
        }
        ;
        this.Vd = function() {
            f.Ge();
            null !== f.element.parentElement && (f.fb = f.element.parentElement,
            f.fb.style.overflow = "hidden",
            f.fb.style.visibility = "hidden",
            f.fb.style.backgroundColor = "#000000")
        }
        ;
        this.element.style.display = "none";
        this.element.style.position = "fixed";
        this.element.style.fontSize = "12px";
        this.element.style.width = "364px";
        this.element.style.height = "264px";
        this.element.style.color = "currentSiteSettings.defaultColor";
        this.element.style.margin = "auto";
        this.element.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.4)";
        this.element.style.background = "white";
        this.element.style.border = "3px solid #0E6C92";
        this.element.style.borderRadius = "10px";
        this.element.style.visibility = "visible";
        this.element.id = "LoginOverlay";
        this.m.style.backgroundColor = "#000000";
        this.m.style.opacity = "1";
        this.m.style.visibility = "visible";
        this.m.style["-webkit-overflow-scrolling"] = "touch";
        this.T = document.createElement("form");
        this.T.target = "_top";
        this.T.style.padding = "5px 30px 10px 30px";
        this.T.action = "/auth/login/?next=" + window.location.pathname + encodeURIComponent(window.location.search);
        this.T.method = "POST";
        this.T.onclick = function(G) {
            G.stopPropagation()
        }
        ;
        this.element.appendChild(this.T);
        var g = d(this.T)
          , h = d(this.T)
          , k = d(this.T)
          , l = d(this.T)
          , m = d(this.T)
          , n = d(this.T)
          , r = d(this.T)
          , w = d(this.T)
          , z = document.createElement("input");
        z.type = "submit";
        z.onclick = function(G) {
            G.preventDefault();
            f.j()
        }
        ;
        z.value = "";
        z.style.background = "transparent url(https://static-assets.highwebmedia.com/tsdefaultassets/close_icon2.svg) no-repeat center center";
        z.style.backgroundSize = "10px";
        z.style.padding = "10px 20px 8px 12px";
        z.style.border = "none";
        z.style.cursor = "pointer";
        g.appendChild(z);
        g.style.position = "absolute";
        g.style.top = "0px";
        g.style.right = "0px";
        g.style.margin = "0px";
        this.ma = document.createElement("h1");
        this.ma.style.font = "18px ubuntumedium,Arial,Helvetica,sans-serif";
        this.ma.style.color = "#f47422";
        h.appendChild(this.ma);
        h.style.textAlign = "center";
        this.yb = c(k, Eb + ":", "text", "username");
        this.yb.required = !0;
        g = document.createElement("a");
        g.target = "_top";
        g.href = "/auth/password_reset/";
        g.tabIndex = 0;
        g.textContent = Hb;
        g.style.cssFloat = "right";
        g.style.color = "#0373a3";
        l.appendChild(g);
        var T = c(l, Fb + ":", "password", "password");
        T.required = !0;
        l = c(m, Gb + ":", "checkbox", "rememberme");
        l.style.marginLeft = "10px";
        this.H = document.createElement("input");
        this.H.id = "id_login_btn";
        this.H.type = "submit";
        this.H.value = pb;
        this.H.style.backgroundColor = "#F47321";
        this.H.style.opacity = "0.5";
        this.H.style.border = "1px solid #A8A8A8";
        this.H.style.borderRadius = "4px";
        this.H.style.boxSizing = "border-box";
        this.H.style.cursor = "pointer";
        this.H.style.height = "36px";
        this.H.style.width = "100%";
        this.H.style.font = "16px ubuntumedium,Arial,Helvetica,sans-serif";
        this.H.style.color = "#FFFFFF";
        this.H.style.webkitAppearance = "none";
        n.appendChild(this.H);
        n = document.createElement("p");
        n.textContent = lc + " ";
        n.style.display = "inline";
        this.ia = document.createElement("a");
        this.ia.target = "_top";
        this.ia.classList.add("signupLogin");
        this.ia.href = "/accounts/register/?src=login_gate";
        this.ia.tabIndex = 0;
        this.ia.textContent = qb;
        this.ia.style.display = "inline";
        this.ia.style.color = "#0373a3";
        r.appendChild(n);
        r.appendChild(this.ia);
        r.style.textAlign = "center";
        this.xc = document.createElement("input");
        this.lc = document.createElement("input");
        this.xc.type = this.lc.type = "hidden";
        this.xc.name = "next";
        this.xc.value = "" + window.location.pathname + window.location.search;
        this.lc.name = "csrfmiddlewaretoken";
        this.lc.value = Ba("csrftoken");
        w.appendChild(this.xc);
        w.appendChild(this.lc);
        w.style.display = "none";
        z.onkeydown = b(this.yb, this.ia);
        this.yb.onkeydown = b(T, z);
        T.onkeydown = b(g, this.yb);
        g.onkeydown = b(l, T);
        l.onkeydown = b(this.H, g);
        this.H.onkeydown = b(this.ia, l);
        this.ia.onkeydown = b(z, this.H);
        this.yb.oninput = a;
        T.oninput = a;
        de.g(function() {
            f.xc.value = "" + window.location.pathname + window.location.search
        })
    }
    u(oe, U);
    oe.prototype.Sa = function(a) {
        window.self !== window.top && "" !== ne ? ee("/auth/login/?next=/" + ne + "/", void 0, void 0) : (this.ma.innerText = void 0 !== a.oc && a.oc ? jc : kc,
        this.lc.value = Ba("csrftoken"),
        this.element.style.display = "block",
        U.prototype.show.call(this),
        void 0 !== a.ye && a.ye && (this.Ge(),
        this.m.style.backgroundColor = "rgba(0, 0, 0, 0.5)"),
        this.ia.href = !0 === a.$f ? "/accounts/register/?src=login_gate&next=" + window.location.pathname : "/accounts/register/?src=login_gate",
        !0 === a.Yf && (a = fb(),
        a.refresh_opener = "1",
        a.next = window.location.pathname,
        this.T.action = "/auth/login/?" + eb(a)))
    }
    ;
    oe.prototype.v = function() {
        var a = Math.max(document.documentElement.clientHeight, window.innerHeight);
        this.element.style.left = (Math.max(document.documentElement.clientWidth, window.innerWidth) - this.T.offsetWidth) / 2 + "px";
        this.element.style.top = (a - this.T.offsetHeight) / 2 + "px"
    }
    ;
    function pe() {
        oe.call(this);
        this.element.style.height = "unset";
        this.element.style.width = "calc(96% - 6px)";
        this.element.style.maxWidth = "364px";
        this.element.style.margin = "2%"
    }
    u(pe, oe);
    pe.prototype.v = function() {
        var a = Math.max(document.documentElement.clientHeight, window.innerHeight);
        this.element.style.left = (Math.max(document.documentElement.clientWidth, window.innerWidth) - (this.element.offsetWidth + 12)) / 2 + "px";
        this.element.style.top = (a - this.element.offsetHeight) / 2 + "px"
    }
    ;
    var qe, re;
    function se(a) {
        void 0 === a.oc && (a.oc = a.fromFeature);
        void 0 === a.za && (a.za = a.isMobile);
        void 0 === a.ye && (a.ye = a.seeBackground);
        void 0 === a.$f && (a.$f = a.returnToPage);
        void 0 === a.Yf && (a.Yf = a.refreshOpener);
        !0 === a.za ? (void 0 === re && (re = new pe,
        D("LoginOverlayOpened")),
        re.Sa(a)) : (void 0 === qe && (qe = new oe,
        D("LoginOverlayOpened")),
        qe.Sa(a))
    }
    ;function te(a) {
        "Escape" !== a.key && a.stopImmediatePropagation()
    }
    function ue(a) {
        function b(d) {
            return function(f) {
                "Tab" === f.key && (f.preventDefault(),
                d.focus())
            }
        }
        U.call(this, {
            rb: function() {
                c.v();
                c.isVisible = !0;
                c.H.focus();
                A("keydown", c.element, te)
            },
            Pb: function() {
                var d = c.isVisible;
                c.element.style.display = "none";
                c.isVisible = !1;
                d && C("keydown", c.element, te)
            },
            Cb: !0
        });
        var c = this;
        this.isVisible = !1;
        this.wg = new V("AutoLgnPopUpActn");
        this.Jd = F("div", {
            style: {
                display: "block",
                margin: "10px 0 0 0"
            }
        }, F("div", {
            style: {
                position: "absolute",
                top: "0px",
                right: "0px",
                margin: "4px"
            }
        }, F("button", {
            style: {
                background: "transparent url(https://static-assets.highwebmedia.com/tsdefaultassets/close_icon2.svg) no-repeat center center",
                backgroundSize: "10px",
                padding: "16px",
                border: "none",
                cursor: "pointer"
            },
            type: "submit",
            ref: function(d) {
                return c.hb = d
            },
            onClick: function(d) {
                d.preventDefault();
                c.j()
            }
        })), F("div", {
            style: {
                font: "1em/1.3em 'UbuntuMedium', Arial, Helvetica, sans-serif",
                padding: "0 19px 0 32px"
            }
        }, F("h1", {
            style: {
                textAlign: "center",
                margin: "22px 0 24px",
                font: "1.733em/1.0769em 'UbuntuMedium', Arial, Helvetica, sans-serif",
                color: "#f47321"
            }
        }, "Auto Login"), F("h2", {
            style: {
                margin: "0 0 24px",
                font: "1.166em/1.142em 'UbuntuMedium', Arial, Helvetica, sans-serif"
            }
        }, "You are attempting to log in as ", F("span", {
            className: "login_name"
        }, a.username), "."), F("form", {
            method: "post",
            action: "/accounts/autologin/"
        }, F("input", {
            type: "hidden",
            name: "csrfmiddlewaretoken",
            value: Aa("csrftoken")
        }), F("input", {
            type: "submit",
            value: pb,
            style: {
                backgroundColor: "#F47321",
                border: "1px solid #A8A8A8",
                borderRadius: "4px",
                boxSizing: "border-box",
                cursor: "pointer",
                height: "36px",
                width: "100%",
                font: "16px ubuntumedium,Arial,Helvetica,sans-serif",
                color: "#FFFFFF",
                WebkitAppearance: "none"
            },
            ref: function(d) {
                return c.H = d
            }
        }), F("input", {
            type: "hidden",
            name: "username",
            value: a.username
        }), F("input", {
            type: "hidden",
            name: "t",
            value: a.t
        }), F("input", {
            type: "hidden",
            name: "e",
            value: a.e
        }), F("input", {
            type: "hidden",
            name: "next",
            value: a.next
        })), F("br", null), F("h3", {
            style: {
                textAlign: "center"
            }
        }, "Not ", F("span", {
            className: "login_name"
        }, a.username), "? ", F("a", {
            href: "/auth/login/?next=" + a.next,
            ref: function(d) {
                return c.Lf = d
            }
        }, "Click here to log in as a different user."))));
        this.element.appendChild(this.Jd);
        this.element.style.display = "none";
        this.element.style.position = "fixed";
        this.element.style.width = "364px";
        this.element.style.height = "204px";
        this.element.style.color = "currentSiteSettings.defaultColor";
        this.element.style.margin = "auto";
        this.element.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.4)";
        this.element.style.background = "white";
        this.element.style.border = "3px solid #0E6C92";
        this.element.style.borderRadius = "10px";
        this.element.style.visibility = "visible";
        this.m.style["-webkit-overflow-scrolling"] = "touch";
        this.m.style.backgroundColor = "rgb(0, 0, 0, " + (this.wg.active ? 1 : .5) + ")";
        this.H.onkeydown = b(this.Lf);
        this.Lf.onkeydown = b(this.hb);
        this.hb.onkeydown = b(this.H)
    }
    u(ue, U);
    ue.prototype.v = function() {
        var a = Math.max(document.documentElement.clientHeight, window.innerHeight);
        this.element.style.left = (Math.max(document.documentElement.clientWidth, window.innerWidth) - this.Jd.offsetWidth) / 2 + "px";
        this.element.style.top = (a - this.Jd.offsetHeight) / 2 + "px"
    }
    ;
    ue.prototype.Sa = function() {
        this.element.style.display = "block";
        this.show()
    }
    ;
    var ve;
    function we() {
        var a = void 0 === a ? !1 : a;
        var b;
        if (b = (new V("AutoLgnPopUpActn")).active)
            b = Aa("aldata"),
            void 0 === b ? b = !1 : (void 0 === ve && (b = decodeURIComponent(b),
            b = new R(b),
            b = {
                username: S(b, "username"),
                t: S(b, "t"),
                e: S(b, "e"),
                next: S(b, "next")
            },
            ve = new ue(b)),
            ve.Sa(),
            b = !0);
        b || se({
            oc: a
        })
    }
    ;var xe = new H("newFollowedOnline")
      , ye = new H("onlineFollowedStorage")
      , ze = new H("onlineFollowedStorage");
    function Ae() {
        if (y()) {
            var a = window.localStorage.getItem("onlineFollowedTab");
            null !== a && (a = JSON.parse(a),
            a.timestamp = Date.now(),
            window.localStorage.setItem("onlineFollowedTab", JSON.stringify(a)))
        }
    }
    function Be() {
        if (y()) {
            var a = window.localStorage.getItem("onlineFollowedTab");
            if (null !== a) {
                a = JSON.parse(a);
                var b = a.username
                  , c = a.onlineFollowedList
                  , d = {
                    qa: {
                        Rb: c.onlineFollowed.online,
                        total: c.onlineFollowed.total
                    },
                    La: []
                };
                c = t(c.roomList);
                for (var f = c.next(); !f.done; f = c.next())
                    f = f.value,
                    d.La.push({
                        A: f.room,
                        image: f.image
                    });
                c = a.seenRooms;
                f = [];
                for (var g = t(a.unseenRooms), h = g.next(); !h.done; h = g.next())
                    h = h.value,
                    f.push({
                        A: h.room,
                        image: h.image
                    });
                return {
                    username: b,
                    Qf: d,
                    vb: c,
                    He: f,
                    lb: a.flash,
                    timestamp: a.timestamp
                }
            }
        }
    }
    function Ce() {
        y() && A("storage", window, function(a) {
            if ("onlineFollowedTab" === a.key) {
                var b = Be();
                void 0 !== b && ye.h(b)
            }
            "followedDropdownClicked" === a.key && null !== a.newValue && (b = Be(),
            void 0 !== b && (b.timestamp = JSON.parse(a.newValue).timestamp,
            b.lb = !1,
            b.He = [],
            ze.h(b)))
        })
    }
    function De(a) {
        a = a.split(/[()/]+/);
        return 4 !== a.length ? {
            Rb: 0,
            total: 0
        } : {
            Rb: parseInt(a[1]),
            total: parseInt(a[2])
        }
    }
    function Ee() {
        function a(b) {
            return b.map(function(c) {
                return {
                    A: c.room,
                    image: c.image
                }
            })
        }
        return Ia("follow/api/online_followed_rooms/")[1].then(function(b) {
            b = new R(b.responseText);
            return {
                qa: {
                    Rb: Md(b, "online"),
                    total: Md(b, "total")
                },
                La: a(Hd(b, "online_rooms"))
            }
        })
    }
    ;function Fe() {
        this.Ff = !1
    }
    p.Object.defineProperties(Fe.prototype, {
        current: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.value
            },
            set: function(a) {
                this.Ff || (this.value = a,
                this.Ff = !0)
            }
        }
    });
    function Ge() {
        Fe.apply(this, arguments)
    }
    u(Ge, Fe);
    function He() {
        new H("RoomDossierContextUpdate",{
            Ua: 1
        });
        this.state = {
            A: "",
            tj: "",
            $k: "",
            Ak: "",
            sj: "",
            Dk: "",
            bl: "",
            host: "",
            Ck: "",
            kj: [{
                jj: "",
                ij: ""
            }],
            Bk: "public",
            userName: "",
            zj: "",
            Zk: "m",
            Rj: "",
            Aj: "",
            ej: !1,
            mk: 0,
            gj: !1,
            tk: "",
            hk: 0,
            Yj: !1,
            yk: "f",
            fj: !1,
            nk: 6,
            Mk: 0,
            Lj: !1,
            Eh: !0,
            Oj: "",
            gf: !0,
            ff: "smart",
            Vj: !1,
            nj: !1,
            Si: 0,
            Gf: !1,
            dk: !0,
            Fk: "",
            fk: 0,
            gk: 0,
            Mj: !1,
            za: !1,
            Ch: [],
            Pj: !1,
            Ek: {
                Wk: 0,
                yj: 0,
                jk: 100
            },
            Tk: 0,
            Zj: 0,
            $j: !1,
            Qk: !1,
            wj: [],
            Hk: !1,
            Cj: "",
            Lk: "un",
            Uj: !1,
            Kj: !1,
            ik: !1,
            Xj: !1,
            dj: {
                ma: "",
                wk: "",
                vk: "",
                uk: "",
                Ej: "",
                Fj: "",
                Gj: ""
            },
            Yk: {
                fontSize: "",
                Dj: "",
                fontFamily: "",
                Gk: !0,
                Bj: "5",
                Kk: "",
                ck: 0,
                xk: 1,
                zk: 1,
                Jk: "false",
                Sj: "",
                hj: "",
                al: 0,
                oj: 0,
                Qj: ""
            },
            pj: ""
        }
    }
    He.prototype.getState = function() {
        return Object.assign({}, this.state)
    }
    ;
    var W = new Ge;
    new He;
    function Ie() {
        var a = W.current.S;
        return void 0 === a ? !1 : a.Gf && a.ug
    }
    function Je() {
        this.first = !0;
        this.va = [];
        this.qb = [];
        this.vb = {};
        this.hf = {};
        this.tf = !1
    }
    Je.prototype.ya = function(a) {
        var b = this;
        this.B = a;
        if (this.tf)
            Ke(this.B.U);
        else {
            Le = Ie();
            Qd.g(function() {
                b.B.U.l()
            });
            de.g(function(d) {
                Ke(b.B.U);
                Me(b, [d.dh.A])
            });
            Ne.g(function() {
                b.B.U.G() && Oe(b.B.U)
            });
            Pe.g(function(d) {
                Le = d
            });
            P.g(function() {
                b.B.U.G() && b.B.U.l()
            });
            Ke(this.B.U);
            !0 === window.showcam && "string" === typeof window.broadcaster && Me(this, [window.broadcaster]);
            if (!this.B.oa) {
                Ce();
                ye.g(function(d) {
                    b.$b(d, !1, b.B.username, b.B.$b)
                });
                ze.g(function(d) {
                    b.$b(d, !1, void 0, b.B.mh)
                });
                window._followedTabUpdate = function(d) {
                    Me(b, [d]);
                    Qe(b, !0, b.B.username, b.B.vd)
                }
                ;
                a = 0 === window.location.pathname.indexOf("/followed-cams/", 0) ? void 0 : Be();
                void 0 !== a && a.username === this.B.username && 3E4 > Date.now() - a.timestamp ? (this.first = !1,
                this.$b(a, !0, this.B.username, this.B.$b),
                Ae(),
                Qe(this, !0, this.B.username, this.B.vd)) : Qe(this, !1, this.B.username, this.B.vd);
                var c = function(d) {
                    clearInterval(b.jg);
                    b.jg = window.setInterval(function() {
                        b.B.U.G() || Qe(b, !1, b.B.username, b.B.vd)
                    }, d)
                };
                c(1E4);
                window.setTimeout(function() {
                    c(3E4)
                }, 6E5);
                window.setTimeout(function() {
                    c(6E5)
                }, 18E5);
                window.setTimeout(function() {
                    clearInterval(b.jg)
                }, 216E5);
                xe.g(function() {
                    b.B.nh.lb()
                })
            }
            this.tf = !0
        }
    }
    ;
    function Me(a, b) {
        b = t(b);
        for (var c = b.next(); !c.done; c = b.next())
            c = c.value,
            a.vb[c] = !0,
            a.hf[c] = !0
    }
    Je.prototype.$b = function(a, b, c, d) {
        b = void 0 === b ? !1 : b;
        a.timestamp <= this.je || a.username !== c || (this.qa = a.Qf.qa,
        this.vb = a.vb,
        this.qb = a.He,
        this.update(a.Qf, !0),
        void 0 !== d && d(a, b),
        this.je = a.timestamp)
    }
    ;
    Je.prototype.update = function(a, b) {
        var c = this;
        b = void 0 === b ? !1 : b;
        var d = {}
          , f = []
          , g = [];
        a = t(a.La);
        for (var h = a.next(); !h.done; h = a.next())
            h = h.value,
            void 0 !== this.vb[h.A] || this.first ? g.push(h) : f.push(h),
            this.vb[h.A] = !0,
            d[h.A] = h;
        a = 0 < f.length;
        this.qb = this.qb.reduce(function(l, m) {
            void 0 === d[m.A] || c.hf[m.A] || l.push(d[m.A]);
            return l
        }, []);
        f = t(f);
        for (h = f.next(); !h.done; h = f.next())
            this.qb.push(h.value);
        f = {};
        this.va = [];
        var k = t(this.qb);
        for (h = k.next(); !h.done; h = k.next())
            h = h.value,
            f[h.A] = !0,
            this.va.push(new Re(h,!0,this.va.length + 1));
        g = t(g);
        for (h = g.next(); !h.done; h = g.next())
            h = h.value,
            void 0 === f[h.A] && this.va.push(new Re(h,!1,this.va.length + 1));
        Ke(this.B.U);
        (g = !this.first && a) && !b && xe.h(void 0);
        this.first = !1;
        return {
            lb: g,
            L: this.qb
        }
    }
    ;
    function Qe(a, b, c, d) {
        (void 0 === b || !b) && 1E4 > Date.now() - a.je || Ee().then(function(f) {
            a.je = Date.now();
            a.qa = f.qa;
            var g = a.update(f);
            d(g);
            var h = a.vb
              , k = g.lb
              , l = g.L;
            if (y()) {
                g = {
                    onlineFollowed: {
                        online: f.qa.Rb,
                        total: f.qa.total
                    },
                    roomList: []
                };
                f = t(f.La);
                for (var m = f.next(); !m.done; m = f.next())
                    m = m.value,
                    g.roomList.push({
                        room: m.A,
                        image: m.image
                    });
                f = [];
                l = t(l);
                for (m = l.next(); !m.done; m = l.next())
                    m = m.value,
                    f.push({
                        room: m.A,
                        image: m.image
                    });
                h = {
                    username: c,
                    onlineFollowedList: g,
                    seenRooms: h,
                    unseenRooms: f,
                    flash: k,
                    timestamp: Date.now()
                };
                window.localStorage.setItem("onlineFollowedTab", JSON.stringify(h))
            }
        }).catch()
    }
    var Se = new Je;
    var Ne = new H("refreshRoomImages")
      , Pe = new H("setAnimateThumbnails")
      , Te = {
        fontSize: "13px",
        fontFamily: "UbuntuMedium, Helvetica, Arial, sans-serif",
        width: "auto",
        height: "auto",
        position: "absolute",
        display: "none",
        overflow: "",
        cursor: "default",
        top: "0px",
        left: "0px"
    }
      , Ue = {
        width: "314px",
        maxHeight: "450px",
        overflowY: "auto",
        overflowX: "hidden",
        position: "relative",
        boxSizing: "border-box",
        padding: "8px",
        borderRadius: "0px 4px 4px 4px",
        WebkitBorderRadius: "0px 4px 4px 4px"
    };
    function Ve(a, b) {
        Cd.call(this, a);
        this.oa = b;
        this.la = Se;
        We(this)
    }
    var Le;
    u(Ve, Cd);
    Ve.prototype.Te = function() {
        var a = this;
        return F("div", {
            className: "followedDropdown",
            colorClass: "tabActiveColor",
            style: Te
        }, F("div", {
            className: "followedContainer",
            style: Ue,
            colorClass: ["tabActiveBgColor", "tabBorderNoHover"],
            ref: function(b) {
                a.ka = b
            }
        }))
    }
    ;
    function Ke(a) {
        if (!a.G()) {
            for (; null !== a.ka.firstChild; )
                a.ka.removeChild(a.ka.firstChild);
            if (!a.oa) {
                var b;
                a.ka.appendChild(F("div", {
                    style: {
                        margin: "5px 3px"
                    }
                }, F("a", {
                    href: "/followed-cams/",
                    style: {
                        height: "auto",
                        width: "auto",
                        border: "none",
                        borderRadius: "0px",
                        textDecoration: "none",
                        cursor: "pointer",
                        cssFloat: "none",
                        padding: "0px"
                    },
                    "data-floatingnav": "",
                    colorClass: ["tabActiveBgColor", "hrefColor"],
                    ref: function(k) {
                        b = k
                    },
                    onMouseEnter: function() {
                        b.style.textDecoration = "underline";
                        J(b, "tabActiveColor");
                        K(b, "hrefColor")
                    },
                    onMouseLeave: function() {
                        b.style.textDecoration = "none";
                        J(b, "hrefColor");
                        K(b, "tabActiveColor")
                    },
                    onClick: function() {
                        D("FollowedDropdownSeeAll")
                    }
                }, Jb)))
            }
            a.ka.style.width = "auto";
            var c = F("div", {
                style: {
                    display: "table"
                }
            })
              , d = F("div", null)
              , f = 0;
            a.la.va.forEach(function(k) {
                0 === f % 2 && (d = F("div", {
                    style: {
                        display: "table-row"
                    }
                }),
                c.appendChild(d));
                var l = F("div", {
                    style: {
                        display: "table-cell"
                    }
                });
                l.appendChild(k.Fd);
                d.appendChild(l);
                f += 1
            });
            a.ka.appendChild(c);
            if (0 === a.la.va.length) {
                var g = F("div", {
                    colorClass: "textColor",
                    style: {
                        margin: "5px 3px 5px 3px",
                        fontSize: "12px",
                        fontFamily: "UbuntuRegular"
                    }
                });
                if (a.oa) {
                    var h = function(k) {
                        var l = F("a", {
                            href: k.href,
                            style: {
                                height: "auto",
                                width: "auto",
                                border: "none",
                                borderRadius: "0px",
                                textDecoration: "none",
                                cursor: "pointer",
                                cssFloat: "none",
                                padding: "0px"
                            },
                            colorClass: ["tabActiveBgColor", "hrefColor"],
                            onMouseEnter: function() {
                                l.style.textDecoration = "underline"
                            },
                            onMouseLeave: function() {
                                l.style.textDecoration = "none"
                            },
                            onClick: void 0 !== k.onClick ? k.onClick : void 0
                        }, k.children);
                        return l
                    };
                    g.appendChild(F(qc, null, F(h, {
                        href: "/accounts/register/?src=followed_tab&next=" + window.location.pathname
                    }, qb), F("span", null, " " + Ib + " "), F(h, {
                        href: "/auth/login/?next=" + window.location.pathname,
                        onClick: function(k) {
                            k.metaKey || k.ctrlKey || (k.preventDefault(),
                            a.l(),
                            we())
                        }
                    }, pb)))
                }
                h = F("span", null, a.oa ? Kb : Lb);
                g.appendChild(h);
                a.ka.appendChild(g);
                a.ka.style.width = "265px"
            }
        }
    }
    function Oe(a) {
        a = t(a.la.va);
        for (var b = a.next(); !b.done; b = a.next())
            b = b.value,
            "" !== b.A.image && Dc(b.ad, 0)
    }
    function We(a) {
        Bc && A("pageshow", window, function(b) {
            b.persisted && a.la.va.forEach(function(c) {
                c.qd()
            })
        })
    }
    Ve.prototype.u = function() {
        if (!Cd.prototype.u.call(this))
            return !1;
        Oe(this);
        this.ka.scrollTop = 0;
        this.la.qb = [];
        var a = fd(this.element)
          , b = Math.max(document.documentElement.clientWidth, gd(document.body.style.minWidth));
        a.right > b && (this.element.style.width = this.element.offsetWidth - (a.right - b) - 4 + "px",
        this.ka.style.overflowX = "auto");
        return !0
    }
    ;
    Ve.prototype.l = function(a) {
        if (void 0 !== a && (a.metaKey || a.ctrlKey) || !Cd.prototype.l.call(this))
            return !1;
        a = t(this.la.va);
        for (var b = a.next(); !b.done; b = a.next())
            b = b.value,
            b.xf = !1,
            J(b.a, "notHighlighted"),
            K(b.a, "isHighlighted");
        this.element.style.width = "auto";
        this.ka.style.overflowX = "hidden";
        Ke(this);
        return !0
    }
    ;
    function Re(a, b, c) {
        var d = this;
        this.A = a;
        this.xf = b;
        this.username = "";
        this.username = a.A;
        this.a = F("a", {
            className: "roomElementAnchor",
            colorClass: ["tabInactiveColor", this.xf ? "isHighlighted" : "notHighlighted"],
            style: {
                width: "180px",
                height: "126px",
                borderRadius: "4px",
                border: "none",
                padding: "0px",
                margin: "0px",
                display: "block",
                cursor: "pointer",
                overflow: "hidden",
                textOverflow: "ellipsis",
                textDecoration: "none"
            },
            "data-room": this.A.A,
            href: "/" + this.A.A + "/",
            onClick: function() {
                D("FollowedDropdownVisit")
            }
        }, F("img", {
            src: "" !== this.A.image ? this.A.image : "https://static-assets.highwebmedia.com/images/no_thumbnail_1_wide.jpg",
            width: 180,
            height: 101,
            style: {
                borderRadius: "3px 3px 0px 0px"
            },
            ref: function(f) {
                d.bd = f
            }
        }), F("span", {
            style: {
                padding: "5px"
            }
        }, this.A.A));
        this.Fd = F("div", {
            className: "roomElement",
            style: {
                display: "inline-block",
                width: "180px",
                height: "126px",
                borderRadius: "4px",
                margin: "3px",
                cursor: "pointer"
            }
        }, this.a);
        Xe(this);
        ab(["click", "mousedown", "touchstart"], this.a, function() {
            Ye(d.username, "ft", c)
        })
    }
    Re.prototype.qd = function() {
        this.ad.qd()
    }
    ;
    function Xe(a) {
        "" !== a.A.image && (a.ad = new Cc(a.username,a.bd),
        A("mouseenter", a.Fd, function() {
            Le && a.ad.Xb()
        }),
        A("mouseleave", a.Fd, function() {
            Le && Ec(a.ad, !1)
        }))
    }
    ;function Ze(a) {
        switch (a) {
        case "Default":
            return "df";
        case "Recommended":
            return "rc";
        case "FollowedTab":
            return "ft";
        case "FollowedPageOnline":
            return "fo";
        case "FollowedPageOffline":
            return "ff";
        case "MoreLikeThis":
            return "ml";
        case "MoreRooms":
            return "mr";
        case "TagPage":
            return "tp";
        case "Promoted":
            return "pr";
        case "FollowedNotification":
            return "fn";
        case "Boosted":
            return "bs";
        case "NextCam":
            return "nc";
        case "ScanCam":
            return "sc";
        case "Discover":
            return "dc";
        default:
            return "un"
        }
    }
    function Ye(a, b, c, d, f) {
        void 0 === f && (f = "");
        Ca("tbu_" + a, [b, "" + c, "" + ("number" === typeof d && 0 < d ? d : -1), f, void 0].join(), 30)
    }
    function $e() {
        this.Pf = [];
        this.Zb = new Map
    }
    var af, bf;
    function cf() {
        for (var a = [], b = t(document.querySelectorAll(".endless_page_template")), c = b.next(); !c.done; c = b.next())
            a.push(c.value);
        return a
    }
    function df(a, b) {
        a.Pf.push(b)
    }
    $e.prototype.onSuccess = function() {
        for (var a = t(this.Pf), b = a.next(); !b.done; b = a.next())
            b = b.value,
            b()
    }
    ;
    function X() {
        void 0 === af && (af = new $e);
        return af
    }
    function ef(a) {
        a = a.getAttribute("data-href");
        a = "string" !== typeof a || 0 === a.length ? window.location.href.replace("" === location.hash ? "#" : location.hash, "") : "/" === a[0] ? a.substr(1) : a;
        var b = "?";
        -1 !== a.indexOf("?") && (b = "&");
        var c = document.getElementById("filter_search_form");
        c = null !== c ? yc(c).wb() : "";
        return a + b + c
    }
    function ff(a) {
        if (0 < a) {
            var b = X();
            bf = window.setTimeout(function() {
                gf(b);
                Ne.h(void 0);
                ff(a)
            }, a)
        }
    }
    function gf(a, b) {
        for (var c = t(a.Zb.values()), d = c.next(); !d.done; d = c.next())
            Ec(d.value, !1);
        a.Zb.clear();
        c = {};
        d = t(cf());
        for (var f = d.next(); !f.done; c = {
            Jc: c.Jc
        },
        f = d.next())
            c.Jc = f.value,
            f = ef(c.Jc),
            Ia(f)[1].then(function(g) {
                return function(h) {
                    g.Jc.innerHTML = h.responseText;
                    a.onSuccess();
                    void 0 !== b && b()
                }
            }(c)).catch()
    }
    function hf(a) {
        df(X(), a)
    }
    function kf(a) {
        gf(X(), a)
    }
    function lf(a) {
        ff(a)
    }
    function mf() {
        clearTimeout(bf)
    }
    function nf(a, b, c, d, f) {
        Ye(b, Ze(a), c, d, f)
    }
    var of = !1;
    function pf(a) {
        of = a;
        Pe.h(of)
    }
    function qf(a, b) {
        if (of && null !== b) {
            var c = X()
              , d = c.Zb.get(a);
            void 0 === d && (d = new Cc(a,b,{
                Xb: !0
            }),
            c.Zb.set(a, d));
            d.Xb()
        }
    }
    function rf(a) {
        of && (a = X().Zb.get(a),
        void 0 !== a && Ec(a, !1))
    }
    var sf = {
        buildTooltip: vd
    };
    function tf(a) {
        return "Enter" === a.key || 13 === a.keyCode
    }
    ;function uf(a) {
        a = void 0 === a ? !1 : a;
        I.call(this, nd());
        var b = this;
        this.za = a;
        this.Vb = this.Hb = !1;
        this.Ta = (new V("hpfilter1")).active || (new V("hpfilter2")).active || (new V("hpfilter3")).active;
        this.ig = function() {
            var c = document.querySelector("#id_show_location")
              , d = document.querySelectorAll(".subject")
              , f = document.querySelectorAll(".location");
            if (null !== c && c.checked) {
                if (c = document.querySelector(".followed_online_offline"),
                null === c || "offline" !== c.getAttribute("data-status"))
                    d.forEach(function(g) {
                        g.style.height = (b.za ? 15 : 16) + "px"
                    }),
                    f.forEach(function(g) {
                        g.style.display = ""
                    })
            } else
                d.forEach(function(g) {
                    g.style.height = (b.za ? 30 : 32) + "px"
                }),
                f.forEach(function(g) {
                    g.style.display = "none"
                });
            vf(b)
        }
        ;
        this.open = function() {
            b.u();
            D("RoomsFilterOpened")
        }
        ;
        this.close = function() {
            b.l();
            D("RoomsFilterClosed")
        }
        ;
        this.toggle = function() {
            b.G() ? b.l() : b.u();
            D("AdvancedSearchOptionsClicked")
        }
        ;
        this.Bd = function() {
            var c = document.querySelectorAll(".advanced_search_region")
              , d = document.querySelector("#main");
            null !== d && c.forEach(function(f) {
                f.onclick = function() {
                    b.u();
                    if (void 0 === Na || Oa) {
                        var g = document.documentElement.scrollTop;
                        document.documentElement.style.height = window.innerHeight + 1 + "px";
                        document.documentElement.scrollTop = g + 1;
                        Na = document.documentElement.scrollTop !== g ? document.documentElement : document.body;
                        document.documentElement.style.height = "";
                        document.documentElement.scrollTop = g;
                        Oa = !1
                    }
                    g = Na;
                    g.scrollTop > d.offsetTop && (window.location.href = "#main")
                }
            })
        }
        ;
        this.bg = function() {
            b.Vb = null !== b.cb ? b.cb.checked : !1
        }
        ;
        this.ke = document.querySelector("#main .content");
        wf(this);
        xf(this);
        this.Ta && yf(this);
        zf(this);
        Af(this);
        this.Bd();
        Bf(this);
        Cf();
        Df(this);
        Ef();
        this.Cd();
        this.ig();
        df(X(), this.ig);
        df(X(), this.Bd);
        this.Hb && pf(this.Vb);
        Ff(this)
    }
    u(uf, I);
    function Gf(a, b, c, d) {
        d.style.cursor = "default";
        d.style.opacity = "0.5";
        c.style.cursor = "default";
        var f = F("a", {
            href: "/supporter/upgrade/",
            onClick: function() {
                D("SupporterPageOpened", {
                    source: "AnimateRoomImagesTooltip"
                })
            }
        }, rb)
          , g = vd({
            content: ic + " ",
            hasHTML: !1,
            width: "295",
            divotPosition: "0",
            divotLeftOrTop: "40px"
        });
        g.appendChild(f);
        g.id = "disabled_tooltip";
        g.style.marginTop = "5px";
        g.style.marginLeft = "42px";
        g.onmouseover = function() {
            g.style.display = "block"
        }
        ;
        g.onmouseout = function() {
            window.setTimeout(function() {
                g.matches(":hover") || d.matches(":hover") || (g.style.display = "none")
            }, 500)
        }
        ;
        a.Ta && (g.style.left = "-28px",
        g.style.width = "171px");
        d.onmouseover = function() {
            g.style.display = "block"
        }
        ;
        d.onmouseout = function() {
            window.setTimeout(function() {
                g.matches(":hover") || d.matches(":hover") || (g.style.display = "none")
            }, 500)
        }
        ;
        c.readOnly = !0;
        c.onclick = function() {}
        ;
        b.appendChild(g)
    }
    function yf(a) {
        var b = document.querySelector("#filter_gender_form");
        null !== b && (b.onchange = function() {
            Hf(a, b)
        }
        ,
        b.querySelectorAll("input[type=checkbox]").forEach(function(c) {
            A("change", c, function() {
                D("RoomsFilterGenderClicked", {
                    gender: c.value,
                    checked: c.checked
                })
            })
        }))
    }
    function zf(a) {
        var b = document.querySelector("#filter_location_form");
        null !== b && (b.onchange = function() {
            Hf(a, b)
        }
        ,
        b.querySelectorAll("input[type=checkbox]").forEach(function(c) {
            A("change", c, function() {
                D("RoomsFilterRegionClicked", {
                    region: c.value,
                    checked: c.checked
                })
            })
        }))
    }
    function Af(a) {
        var b = document.querySelector("#filter_options_form");
        null !== b && (b.onchange = function() {
            Hf(a, b)
        }
        ,
        b.querySelectorAll("input[type=checkbox]").forEach(function(c) {
            A("change", c, function() {
                for (var d = c.name.toLowerCase().split("_"), f = 0; f < d.length; f += 1)
                    d[f] = d[f].charAt(0).toUpperCase() + d[f].slice(1);
                D(d.join("") + "Clicked", {
                    checked: c.checked
                })
            })
        }))
    }
    function wf(a) {
        var b = document.querySelector("#animate_thumbnails_form");
        a.cb = document.querySelector("#id_animate_thumbnails");
        if (null !== b) {
            if (null !== a.cb) {
                var c = a.cb;
                c.disabled || (a.Hb = !0);
                a.Vb = a.cb.checked;
                c.onchange = function() {
                    a.Hb && (Hf(a, b),
                    void 0 !== document.setAnimateFollowedTab && document.setAnimateFollowedTab(a.Vb))
                }
            }
            var d = b.querySelector("label[for='id_animate_thumbnails']");
            null !== d && (d.onclick = function() {
                var f = d.querySelector("input");
                null !== f && f instanceof HTMLInputElement && D("AnimateRoomImagesClicked", {
                    checked: f.checked
                })
            }
            );
            a.Hb || null !== a.cb && null !== d && Gf(a, b, a.cb, d)
        }
    }
    function vf(a) {
        if (a.Ta) {
            var b = document.querySelector(".collapse-filters");
            document.querySelector(".expand-filters").onclick = a.open;
            b.onclick = a.close
        } else
            b = document.querySelector(".advanced_search_button"),
            null !== b && (b.onclick = a.toggle)
    }
    function If(a) {
        a.u();
        var b = document.querySelector("label[for='id_enable_floatingplayer']");
        if (null !== b) {
            var c = b.style.color;
            b.style.color = "#ff6b00";
            a.Ta && window.setTimeout(function() {
                cb(new Map([["advanced_options", ""]]));
                b.scrollIntoView({
                    behavior: "auto",
                    block: "center",
                    inline: "center"
                })
            }, 500);
            a.$e.onclick = function() {
                b.style.color = c
            }
        }
    }
    function xf(a) {
        var b = document.querySelector("#floatingplayer_options_form");
        if (null !== b) {
            a.$e = b;
            window.location.search.includes("advanced_options") && If(a);
            var c = document.querySelector("#id_enable_floatingplayer");
            null !== c && (c.onchange = function() {
                v(b.action, new FormData(a.$e)).then(function() {
                    var d = c.checked;
                    D("EnableFloatingPlayerOption", {
                        isEnabled: d
                    });
                    d ? void 0 !== document.enableFloatingPlayer && document.enableFloatingPlayer() : void 0 !== document.disableFloatingPlayer && document.disableFloatingPlayer()
                }).catch()
            }
            )
        }
    }
    function Hf(a, b) {
        clearTimeout(a.Rf);
        a.bg();
        var c = document.querySelectorAll(".searching-overlay");
        c.forEach(function(d) {
            Jf(d);
            d.style.display = "block"
        });
        v(b.action, new FormData(b)).then(function() {
            a.Hb && pf(a.Vb);
            a.Bd();
            Ff(a);
            gf(X(), function() {
                c.forEach(function(d) {
                    Jf(d)
                });
                clearTimeout(a.Rf);
                a.Rf = window.setTimeout(function() {
                    c.forEach(function(d) {
                        d.style.display = "none"
                    })
                }, 300)
            })
        }).catch()
    }
    function Jf(a) {
        var b = a.nextElementSibling;
        if (null !== b) {
            if ("discover_root" !== b.id) {
                var c = b.querySelector(".list");
                null === c && (c = b.lastElementChild);
                b = null === c ? void 0 : c
            }
        } else
            b = void 0;
        c = b;
        if (void 0 !== c) {
            var d = c.getBoundingClientRect().width;
            b = c.getBoundingClientRect().height;
            a.style.height = b + "px";
            a.style.left = c.offsetLeft + "px";
            a.style.top = c.offsetTop + "px";
            a.style.right = document.documentElement.clientWidth - c.offsetLeft - d + "px";
            a.style.lineHeight = b + "px";
            a = a.querySelector(".searching-overlay-spinner");
            null !== a && (50 > b ? (a.classList.add("searching-overlay-spinner-very-small"),
            a.classList.remove("searching-overlay-spinner-small"),
            a.classList.remove("searching-overlay-spinner-medium")) : 50 <= b && 200 > b ? (a.classList.remove("searching-overlay-spinner-very-small"),
            a.classList.add("searching-overlay-spinner-small"),
            a.classList.remove("searching-overlay-spinner-medium")) : 200 <= b && 550 > b ? (a.classList.remove("searching-overlay-spinner-very-small"),
            a.classList.remove("searching-overlay-spinner-small"),
            a.classList.add("searching-overlay-spinner-medium")) : (a.classList.remove("searching-overlay-spinner-very-small"),
            a.classList.remove("searching-overlay-spinner-small"),
            a.classList.remove("searching-overlay-spinner-medium")))
        }
    }
    function Cf() {
        var a = document.querySelector("#id_enable_recommendations");
        null !== a && (a.onchange = function() {
            D("EnableRecommendationsOptionClicked", {
                isEnabled: a.checked
            })
        }
        )
    }
    function Bf(a) {
        var b = document.querySelector("#refresh_cams_form");
        null !== b && (b.onchange = function() {
            var c = b.querySelector("#id_refresh_frequency");
            if (null !== c) {
                var d = parseInt(c.value);
                a.bg();
                v(b.action, new FormData(b)).then(function() {
                    D("RefreshFrequencyChanged", {
                        seconds: d
                    });
                    a.Hb && pf(a.Vb);
                    gf(X(), function() {
                        clearTimeout(bf);
                        0 !== d && ff(1E3 * d)
                    })
                }).catch()
            }
        }
        )
    }
    uf.prototype.u = function() {
        this.G() || (this.Ta ? (this.ke.classList.remove("collapsed"),
        y() && localStorage.setItem("homepageFiltersCollapsed", "false")) : this.element.classList.remove("collapsed"))
    }
    ;
    uf.prototype.l = function() {
        this.G() && (this.Ta ? (this.ke.classList.add("collapsed"),
        y() && localStorage.setItem("homepageFiltersCollapsed", "true")) : this.element.classList.add("collapsed"))
    }
    ;
    uf.prototype.G = function() {
        return this.Ta ? !this.ke.classList.contains("collapsed") : !this.element.classList.contains("collapsed")
    }
    ;
    function Ff(a) {
        if (a.Ta) {
            a = Kf("#filter_gender_form input[type=checkbox]:checked");
            var b = Kf("#filter_gender_form input[type=checkbox]")
              , c = Kf("#filter_location_form input[type=checkbox]:checked")
              , d = Kf("#filter_location_form input[type=checkbox]");
            cb(new Map([["g", a === b ? "" : a.replace("s", "t")], ["r", c === d ? "" : c]]))
        }
    }
    function Df(a) {
        var b = a.element.querySelector(".show-type");
        null !== b && A("change", b, function() {
            D("RoomsFilterShowTypeChanged", {
                showType: b.options[b.selectedIndex].text.toLowerCase().split(" ")[0]
            });
            window.location.href = b.value
        })
    }
    function Ef() {
        document.querySelectorAll("#hashtag_ticker a").forEach(function(a) {
            A("click", a, function() {
                D("RoomsFilterTagsClicked", {
                    tagName: a.textContent
                })
            })
        })
    }
    uf.prototype.Cd = function() {
        var a = document.querySelector(".search_input")
          , b = document.querySelector("#search_icon")
          , c = document.querySelector(".suggestionsDiv");
        if (null !== a && null !== b && null !== c) {
            var d = function() {
                D("RoomsFilterSearchClicked", {
                    keyword: a.value
                })
            };
            [b, c].forEach(function(f) {
                A("click", f, function() {
                    d()
                }, !0)
            });
            [a, b, c].forEach(function(f) {
                A("keydown", f, function(g) {
                    tf(g) && d()
                }, !0)
            })
        }
    }
    ;
    function Kf(a) {
        return Array.from(document.querySelectorAll(a)).filter(function(b) {
            return null !== b.parentElement && -1 === b.parentElement.className.indexOf("transparentCheckbox")
        }).map(function(b) {
            return b.value
        }).join(",")
    }
    ;function Lf() {
        this.pf = []
    }
    function Mf(a, b) {
        a.pf.push(b)
    }
    ;function Nf() {
        var a = this;
        this.message = document.createElement("div");
        this.O = document.createElement("div");
        this.P = document.createElement("div");
        this.title = document.createElement("div");
        this.W = document.createElement("div");
        this.accept = document.createElement("div");
        this.Gc = function() {}
        ;
        this.Wf = [];
        J(this.O, "modalAlert");
        this.O.style.display = "none";
        this.O.style.position = "fixed";
        this.O.style.overflow = "auto";
        this.O.style.top = "0";
        this.O.style.left = "0";
        this.O.style.width = "100%";
        this.O.style.height = "100%";
        this.O.style.zIndex = "2000";
        J(this.P, "dialog");
        this.P.style.width = "440px";
        this.P.style.position = "relative";
        this.P.style.display = "inline-block";
        this.P.style.borderRadius = "10px";
        this.P.style.textAlign = "left";
        this.P.style.overflow = "hidden";
        this.P.style.zIndex = "2001";
        this.P.style.fontFamily = "UbuntuRegular, Helvetica, Arial, sans-serif";
        this.title.style.display = "block";
        this.title.style.fontSize = "20px";
        this.title.style.paddingTop = "20px";
        this.title.style.paddingLeft = "20px";
        this.title.style.paddingRight = "20px";
        this.title.style.whiteSpace = "nowrap";
        this.title.style.fontWeight = "bold";
        this.title.style.overflow = "hidden";
        this.title.style.textOverflow = "ellipsis";
        this.P.appendChild(this.title);
        this.message.style.display = "inline-block";
        this.message.style.wordWrap = "break-word";
        this.message.style.padding = "20px";
        this.message.style.textAlign = "left";
        this.P.appendChild(this.message);
        var b = document.createElement("div");
        J(b, "dialogForm");
        b.style.borderTopWidth = "1px";
        b.style.borderTopStyle = "solid";
        b.style.textAlign = "center";
        b.style.height = "40px";
        J(this.accept, "accept");
        this.accept.style.minWidth = "70px";
        this.accept.style.padding = "3px";
        this.accept.style.display = "inline-block";
        this.accept.style.cssFloat = "right";
        this.accept.style.position = "relative";
        this.accept.style.top = "7px";
        this.accept.style.right = "10px";
        this.accept.style.boxSizing = "border-box";
        this.accept.innerText = "OK";
        this.accept.style.cursor = "pointer";
        this.accept.style.borderWidth = "1px";
        this.accept.style.borderStyle = "solid";
        this.accept.onclick = function(c) {
            c.stopPropagation();
            void 0 !== a.zb && a.zb();
            Of.Gc()
        }
        ;
        b.appendChild(this.accept);
        J(this.W, "decline");
        this.W.style.minWidth = "70px";
        this.W.style.padding = "3px";
        this.W.style.display = "inline-block";
        this.W.style.cssFloat = "right";
        this.W.style.position = "relative";
        this.W.style.top = "7px";
        this.W.style.right = "25px";
        this.W.innerText = "Cancel";
        this.W.style.cursor = "pointer";
        this.W.onclick = function(c) {
            c.stopPropagation();
            void 0 !== a.zc ? a.zc() : void 0 !== a.zb && a.zb();
            Of.Gc()
        }
        ;
        b.appendChild(this.W);
        this.P.appendChild(b);
        this.O.appendChild(this.P)
    }
    Nf.prototype.resize = function() {
        this.P.style.width = Math.min(440, document.documentElement.clientWidth - 40) + "px";
        this.P.style.left = Math.max(0, (this.O.offsetWidth - this.P.offsetWidth) / 2) + "px";
        this.P.style.top = Math.max(0, (this.O.offsetHeight - 80 - this.P.offsetHeight) / 2) + "px"
    }
    ;
    Nf.prototype.display = function(a, b, c, d, f) {
        var g = this;
        d = void 0 === d ? !1 : d;
        if (this.active)
            this.Wf.push({
                Sh: a,
                zb: b,
                zc: c,
                innerHTML: d,
                config: f
            });
        else {
            d ? this.message.innerHTML = a : this.message.innerText = a;
            Pf(this, f);
            this.O.style.display = "block";
            this.zb = b;
            void 0 === c ? Of.W.style.display = "none" : (this.zc = c,
            Of.W.style.display = "");
            var h = new Lf
              , k = function(m) {
                m.stopPropagation();
                m.preventDefault();
                a: for (var n = t(h.pf), r = n.next(); !r.done; r = n.next())
                    if (r = r.value,
                    m.which === r.keyCode && (!r.Zf || m.ctrlKey || m.metaKey)) {
                        r.D(m);
                        break a
                    }
            };
            Mf(h, {
                keyCode: 13,
                Zf: !1,
                D: function() {
                    b();
                    g.Gc()
                }
            });
            Mf(h, {
                keyCode: 27,
                Zf: !1,
                D: function() {
                    void 0 !== c ? c() : b();
                    g.Gc()
                }
            });
            this.active = !0;
            var l = function() {
                g.resize()
            };
            A("keydown", document, k, !0);
            A("resize", window, l);
            A("orientationchange", window, l);
            this.Gc = function() {
                try {
                    C("keydown", document, k, !0)
                } catch (n) {}
                try {
                    C("resize", window, l)
                } catch (n) {}
                g.O.style.display = "none";
                g.active = !1;
                g.O.parentElement === document.body && document.body.removeChild(g.O);
                g.zb = void 0;
                g.zc = void 0;
                var m = g.Wf.shift();
                void 0 !== m && g.display(m.Sh, m.zb, m.zc, m.innerHTML)
            }
            ;
            a = Zc();
            void 0 !== a && a ? a.appendChild(this.O) : document.body.appendChild(this.O);
            this.resize()
        }
    }
    ;
    function Pf(a, b) {
        void 0 !== (null === b || void 0 === b ? void 0 : b.title) ? (a.title.style.display = "block",
        a.title.innerText = b.title) : a.title.style.display = "none";
        a.accept.innerText = void 0 !== (null === b || void 0 === b ? void 0 : b.rg) ? b.rg : "OK";
        a.W.innerText = void 0 !== (null === b || void 0 === b ? void 0 : b.Zg) ? b.Zg : "Cancel"
    }
    var Of = new Nf;
    function Qf(a, b, c) {
        Of.display(a, null !== b && void 0 !== b ? b : function() {}
        , null !== c && void 0 !== c ? c : function() {}
        , !1, void 0)
    }
    ;function Rf() {
        var a;
        return void 0 === (null === (a = W.current) || void 0 === a ? void 0 : a.S)
    }
    function Sf() {
        return Rf() ? (Qf('You must be logged in to follow a broadcaster. Click "OK" to login.', function() {
            window.top.location.href = "/auth/login/?next=" + window.location.pathname + window.location.search
        }, void 0),
        !0) : !1
    }
    ;var Tf = new H("followingEvent");
    function Uf(a, b) {
        if (void 0 !== b && !b || !Sf())
            return v("follow/follow/" + a + "/", {}).then(function(c) {
                var d = new R(c.responseText);
                c = Tf.h;
                a: switch (S(d, "notification_frequency")) {
                case "all":
                    d = "all";
                    break a;
                case "none":
                    d = "none";
                    break a;
                default:
                    d = "smart"
                }
                c.call(Tf, {
                    pd: a,
                    gf: !0,
                    ff: d
                });
                void 0 !== window._followedTabUpdate && window._followedTabUpdate(a);
                return !0
            }).catch(function(c) {
                x("Unable to follow " + a + ": " + c);
                return !1
            })
    }
    function Vf(a, b) {
        if (void 0 !== b && !b || !Sf())
            return v("follow/unfollow/" + a + "/", {}).then(function() {
                Tf.h({
                    pd: a,
                    gf: !1,
                    ff: "none"
                });
                void 0 !== window._followedTabUpdate && window._followedTabUpdate(a);
                return !0
            }).catch(function(c) {
                x("Unable to unfollow " + a + ": " + c);
                return !1
            })
    }
    ;function Wf(a, b, c) {
        this.oa = a;
        this.hi = b;
        this.za = c;
        Xf(this)
    }
    function Xf(a) {
        a.Nc();
        df(X(), function() {
            a.Nc()
        })
    }
    Wf.prototype.Nc = function() {
        var a = this
          , b = document.getElementById(this.hi);
        if (null !== b) {
            var c = {};
            b = t(b.querySelectorAll("div.icon_following, div.icon_not_following"));
            for (var d = b.next(); !d.done; c = {
                Kc: c.Kc
            },
            d = b.next())
                c.Kc = d.value,
                c.Kc.onclick = function(f) {
                    return function() {
                        Yf(a, f.Kc)
                    }
                }(c)
        }
    }
    ;
    function Zf(a) {
        a.classList.remove("icon_update_following");
        a.classList.add("icon_following");
        a.classList.add("no_hover");
        window.setTimeout(function() {
            a.classList.remove("no_hover")
        }, 3E3);
        a.title = yb
    }
    function $f(a, b) {
        b.classList.remove("icon_not_following");
        b.classList.add("icon_update_following");
        var c = b.getAttribute("data-slug");
        null !== c && (c = Uf(c, a.oa),
        void 0 !== c && c.then(function(d) {
            d ? Zf(b) : ag(a, b)
        }).catch())
    }
    function bg(a) {
        a.classList.remove("icon_update_following");
        a.classList.add("icon_not_following");
        a.classList.add("no_hover");
        window.setTimeout(function() {
            a.classList.remove("no_hover")
        }, 3E3);
        a.title = zb
    }
    function ag(a, b) {
        b.classList.remove("icon_following");
        b.classList.add("icon_update_following");
        var c = b.getAttribute("data-slug");
        null !== c && (void 0 !== Vf(c, a.oa) ? bg(b) : (b.classList.remove("icon_update_following"),
        b.classList.add("icon_following")))
    }
    function Yf(a, b) {
        b.classList.contains("icon_following") ? ag(a, b) : b.classList.contains("icon_not_following") && (a.oa ? a.za ? Qf("To follow this broadcaster, please create an account or login now.", function() {
            window.location.href = "/accounts/auth/login/?next=" + window.location.pathname
        }) : se({
            oc: !0
        }) : $f(a, b))
    }
    ;function cg() {
        function a(r) {
            if ("close" === r.data)
                h.hc = !0,
                f();
            else if ("hide-spinner" === r.data)
                h.fg.style.display = "none";
            else if ("crypto-submit" === r.data)
                h.hc = !1,
                h.m.onclick = function(w) {
                    w.preventDefault()
                }
                ,
                n.onclick = function(w) {
                    w.preventDefault()
                }
                ;
            else if ("crypto-error" === r.data)
                h.hc = !0,
                h.m.onclick = function(w) {
                    w.stopPropagation();
                    f();
                    h.Bc.h(void 0)
                }
                ,
                n.onclick = f;
            else if (0 === r.data.indexOf("crypto-redirect: "))
                b(r.data.substring(17), 950, 780);
            else if (0 === r.data.indexOf("billing-redirect: "))
                b(r.data.substring(18), 715, 430);
            else if (0 <= r.origin.indexOf(window.location.hostname)) {
                switch (r.data) {
                case "/tipping/purchase_tokens/":
                    m.style.display = "none"
                }
                n.onclick = f;
                null !== k.contentWindow && A("keydown", k.contentWindow, d)
            }
        }
        function b(r, w, z) {
            window.open(r, "_blank", "status=0,toolbar=0,menubar=0,directories=0,resizable=1,scrollbars=1,height=" + w + ",width=" + z);
            h.hc = !0;
            f()
        }
        function c(r) {
            var w = document.createElement("div");
            w.style.position = "absolute";
            w.style.width = "3px";
            w.style.height = "15px";
            w.style.left = "5px";
            w.style.background = "#C4C4C4";
            w.style.transform = r;
            return w
        }
        function d(r) {
            "Esc" !== r.key && "Escape" !== r.key || f()
        }
        function f() {
            h.hc && !h.ce && (h.ce = !0,
            C("message", window, a),
            C("keydown", document, d),
            g())
        }
        function g() {
            clearInterval(h.ei);
            h.element.style.opacity = "0";
            h.content.style.right = "-500px";
            window.setTimeout(function() {
                h.j()
            }, 500)
        }
        U.call(this, {
            Cb: !1
        });
        var h = this;
        this.ce = !1;
        this.hc = !0;
        this.width = 430;
        this.Kd = 135;
        this.url = "/tipping/purchase_tokens/" + window.location.search;
        this.element.style.width = this.width + 20 + "px";
        this.element.style.position = "fixed";
        this.element.style.right = "0";
        this.element.style.top = this.Kd + "px";
        this.element.style.minHeight = "200px";
        this.element.style.zIndex = "1001";
        this.element.style.overflow = "hidden";
        this.element.style.opacity = "0";
        this.element.style.transition = "opacity 1s";
        this.element.style.zIndex = "1003";
        this.m.style.zIndex = "1002";
        this.m.style.background = "rgba(0, 0, 0, 0.5)";
        this.content = document.createElement("div");
        this.content.style.position = "absolute";
        this.content.style.right = "-500px";
        this.content.style.minHeight = "200px";
        this.content.style.maxHeight = "735px";
        this.content.style.width = this.width + "px";
        this.content.style.border = "1px solid #ccc";
        this.content.style.borderRadius = "5px";
        this.content.style.background = "#FFF";
        this.content.style.transition = "right 500ms";
        this.content.style.zIndex = "1002";
        this.element.appendChild(this.content);
        var k = dg(this)
          , l = document.createElement("div");
        this.content.appendChild(l);
        var m = eg();
        l.appendChild(m);
        var n = document.createElement("div");
        n.onclick = g;
        n.style.display = "inline-block";
        n.style.height = "12.73px";
        n.style.width = "12.73px";
        n.style.cursor = "pointer";
        n.style.position = "absolute";
        n.style.right = "15px";
        n.style.top = "10px";
        n.appendChild(c("rotate(-135deg)"));
        n.appendChild(c("rotate(-45deg)"));
        l.appendChild(n);
        this.fg = this.Ld();
        this.content.appendChild(this.fg);
        this.m.onclick = function(r) {
            r.stopPropagation();
            f();
            h.Bc.h(void 0)
        }
        ;
        m.onclick = function() {
            k.src = h.url
        }
        ;
        k.onload = function() {
            clearInterval(h.ei);
            var r = document.createElement("a");
            r.href = k.src;
            -1 === h.url.indexOf("" + r.pathname + r.search) && (m.style.display = "inline-block",
            n.onclick = g)
        }
        ;
        window.setTimeout(function() {
            h.content.appendChild(k)
        }, 1);
        A("message", window, a);
        A("keydown", document, d);
        this.show();
        window.setTimeout(function() {
            k.style.opacity = "1"
        }, 1E3);
        this.v()
    }
    u(cg, U);
    function dg(a) {
        var b = document.createElement("iframe");
        b.className = "purchaseFrame";
        b.src = a.url;
        b.style.border = "none";
        b.style.padding = "0";
        b.style.background = "transparent";
        b.style.height = "calc(100% - 5px)";
        b.style.width = "100%";
        b.style.transition = "height 200ms, opacity 1s";
        b.style.opacity = "0";
        return b
    }
    function eg() {
        var a = document.createElement("div");
        a.innerHTML = "&lt; ";
        a.style.display = "none";
        a.style.color = "#999";
        a.style.cursor = "pointer";
        a.style.fontSize = "20px";
        a.style.fontWeight = "bold";
        a.style.borderRadius = "50px";
        a.style.padding = "2px 0 5px 7px";
        var b = document.createElement("small");
        b.innerText = "Back";
        b.style.fontSize = "12px";
        b.style.verticalAlign = "middle";
        b.style.lineHeight = "9px";
        a.appendChild(b);
        return a
    }
    cg.prototype.Ld = function() {
        var a = document.createElement("div");
        a.style.animationName = "spin";
        a.style.position = "absolute";
        a.style.top = "50%";
        a.style.left = "50%";
        a.style.width = "30px";
        a.style.height = "31px";
        a.style.margin = "-15px 0 0 -15px";
        a.style.background = 'url("https://static-assets.highwebmedia.com/tsdefaultassets/images/loading_spinner.svg")';
        a.style.backgroundSize = "cover";
        a.style.animationName = "spin";
        a.style.animationDuration = "2s";
        a.style.webkitAnimationDuration = "2s";
        a.style.animationTimingFunction = "linear";
        a.style.webkitAnimationTimingFunction = "linear";
        a.style.animationIterationCount = "infinite";
        a.style.webkitAnimationIterationCount = "infinite";
        a.style.zIndex = "-1";
        return a
    }
    ;
    cg.prototype.show = function() {
        var a = this;
        U.prototype.show.call(this);
        window.setTimeout(function() {
            a.element.style.opacity = "1"
        }, 1);
        window.setTimeout(function() {
            a.content.style.right = "10px"
        }, 500)
    }
    ;
    cg.prototype.v = function() {
        this.content.style.height = window.innerHeight - this.Kd - 10 + "px";
        this.element.style.top = Math.min(this.Kd, window.innerHeight - this.content.offsetHeight - 10) + "px"
    }
    ;
    vd({
        content: ic,
        rf: !1,
        width: 240,
        Ye: 0,
        Xe: "40px"
    });
    var fg;
    function gg(a) {
        a.onclick = function(b) {
            if (!b.ctrlKey && !b.metaKey) {
                b.preventDefault();
                b = b.target.className.includes("popup_only");
                b = void 0 === b ? !1 : b;
                var c = "" === window.location.search ? "/tipping/purchase_tokens/" : "/tipping/purchase_tokens/" + window.location.search
                  , d = new ae(["PrchPgIfrmV4", "PrchPgPopupV4"],"purchaseredesign");
                d.ue();
                d.jb && d.active ? (c = d.Ke,
                d = "" === window.location.search ? "/tipping/purchase_tokens/" : "/tipping/purchase_tokens/" + window.location.search,
                "PrchPgIfrmV4" === c ? b ? ee(d, "_blank", "height=715, width=430, scrollbars=1") : void 0 === fg || fg.ce ? fg = new cg : fg.show() : "PrchPgPopupV4" === c ? ee(d, "_blank", "height=715, width=430, scrollbars=1") : ee(d, "_blank", "height=615, width=850, scrollbars=1")) : ee(c, "_blank", "height=615, width=850, scrollbars=1")
            }
        }
        ;
        "" === a.href && (a.href = "/tipping/purchase_tokens/")
    }
    ;function hg(a) {
        I.call(this, "div");
        this.element.style.height = "";
        this.element.style.width = "";
        this.element.style.position = "relative";
        void 0 !== a && (a instanceof I ? this.K(a) : this.element.appendChild(a))
    }
    u(hg, I);
    function ig(a, b) {
        I.call(this, a);
        var c = this;
        this.Ve = "inline-block";
        this.Rc = new H("collapse",{
            od: !1
        });
        this.Wa = [];
        this.Be = [];
        this.Ca = new hg;
        this.Gd = [];
        if (void 0 === a || "string" === typeof a)
            this.element.appendChild(document.createTextNode(jg)),
            M(this.element, {
                cursor: "pointer",
                width: "",
                height: "",
                padding: "0 10px",
                textAlign: "center"
            });
        this.wa = new Cd(this.element,!0 === b);
        M(this, {
            userSelect: "none"
        });
        this.l();
        M(this.Ca, {
            cssFloat: "right",
            height: "100%",
            visibility: "hidden"
        });
        this.wa.Na.g(function(d) {
            c.onToggle(d)
        });
        P.g(function(d) {
            c.wa.G() && c.wa.l();
            kg(c, !d)
        });
        window.setTimeout(function() {
            if (void 0 !== c.parent || null !== c.element.parentElement) {
                var d = void 0 === c.parent ? c.element.parentElement : c.parent.element;
                a: {
                    if (void 0 !== c.parent) {
                        var f = t(c.parent.children());
                        for (var g = f.next(); !g.done; g = f.next())
                            if (g = g.value,
                            lg(g.element)) {
                                f = g;
                                break a
                            }
                    }
                    f = void 0
                }
                void 0 !== f && d.insertBefore(c.Ca.element, f.element.nextSibling)
            }
            kg(c)
        })
    }
    u(ig, I);
    function kg(a, b) {
        b = void 0 === b ? !0 : b;
        var c = a.wa.G();
        c && mg(a);
        ng(a);
        if (0 === a.Wa.length)
            a.G() && (a.l(),
            a.Ca.element.style.paddingLeft = "0px",
            a.Rc.h(!1));
        else {
            var d;
            if (d = 1 === a.Wa.length && a.G()) {
                d = a.Wa[0];
                var f = getComputedStyle(d.element);
                d = d.element.offsetWidth + gd(f.marginLeft) + gd(f.marginRight) + 5 <= a.element.offsetWidth + a.Ca.element.offsetLeft - a.element.offsetLeft
            }
            d ? (a.l(),
            d = a.Ca.element.style.paddingLeft,
            a.Ca.element.style.paddingLeft = "0px",
            ng(a),
            0 < a.Wa.length ? (a.u(a.Ve),
            a.Ca.element.style.paddingLeft = d) : a.Rc.h(!1)) : a.G() || (a.u(a.Ve),
            a.Tb(),
            a.Rc.h(!0),
            ng(a))
        }
        b && a.G() && og(a);
        c && (0 === a.Wa.length ? a.wa.l() : (pg(a),
        a.wa.Tb()))
    }
    ig.prototype.v = function() {
        I.prototype.v.call(this);
        kg(this)
    }
    ;
    ig.prototype.onToggle = function(a) {
        a.pa ? (ng(this),
        pg(this)) : mg(this)
    }
    ;
    function pg(a) {
        a.Wa.forEach(function(b) {
            a.Gd.unshift([b, b.nextSibling()]);
            a.wa.K(b);
            b.collapse(!0)
        })
    }
    function mg(a) {
        var b = a.parent;
        a.Gd.forEach(function(c) {
            var d = c[0];
            c = c[1];
            void 0 !== d.parent && d.parent !== b && d.parent.removeChild(d);
            c = void 0 === c ? -1 : b.Oa.indexOf(c);
            0 > c ? b.element.appendChild(d.element) : b.element.insertBefore(d.element, b.Oa[c].element);
            b.Oa.splice(c, 0, d);
            d.parent = b;
            d.collapse(!1)
        });
        a.Gd = []
    }
    function qg(a) {
        return void 0 === a.parent ? [] : a.parent.children().filter(function(b) {
            return b instanceof rg && b.G()
        })
    }
    function ng(a) {
        if (null !== a.element.parentElement && null !== a.element.parentElement.offsetParent) {
            var b = qg(a);
            a.Wa = [];
            a.Be = [];
            b.forEach(function(c) {
                (ce() ? 2 <= c.element.offsetTop : c.element.offsetTop + 2 >= c.element.offsetHeight) ? a.Wa.push(c) : a.Be.push(c)
            })
        }
    }
    ig.prototype.Tb = function() {
        null !== this.element.parentElement && (M(this.element, {
            position: "absolute",
            boxSizing: "border-box",
            textAlign: "center"
        }),
        this.Ca.element.style.paddingLeft = this.element.offsetWidth + "px",
        this.element.removeAttribute("data-floatingnav"),
        "" === this.element.style.width && (this.element.style.width = this.element.offsetWidth + 1 + "px"))
    }
    ;
    function og(a) {
        if (void 0 !== a.parent) {
            for (var b = 0, c = t(a.parent.children()), d = c.next(); !d.done; d = c.next())
                d = d.value,
                !lg(d.element) || d === a || d instanceof rg && -1 === a.Be.indexOf(d) || (b = Math.max(d.element.offsetLeft + d.element.offsetWidth + gd(getComputedStyle(d.element).marginRight), b));
            a.element.offsetLeft !== b && (a.element.style.left = b + "px",
            window.setTimeout(function() {
                a.element.style.left = ""
            }))
        }
    }
    var jg = ".\u2009.\u2009.";
    function lg(a) {
        return "none" !== a.style.display && "right" !== a.style.cssFloat && "absolute" !== a.style.position && "fixed" !== a.style.position
    }
    function rg(a) {
        I.call(this, void 0 === a ? "div" : a);
        var b = this;
        this.hd = new H("collapse",{
            od: !1
        });
        this.collapsed = !1;
        window.setTimeout(function() {
            b.hd.h(b.collapsed)
        })
    }
    u(rg, I);
    rg.prototype.collapse = function(a) {
        (this.collapsed = a) ? this.element.classList.add("collapsed") : this.element.classList.remove("collapsed");
        this.hd.h(a)
    }
    ;
    function sg() {
        I.call(this);
        this.Ma = {
            position: "relative",
            padding: "5px",
            margin: "2px 0 0 2px",
            borderRadius: "4px 4px 0 0",
            minWidth: "16px",
            width: "auto",
            height: "100%",
            fontSize: "10px",
            cursor: "pointer",
            cssFloat: "left",
            Pk: "none",
            WebkitTextSizeAdjust: "none",
            userSelect: "none"
        };
        this.Hi = {
            cursor: "default"
        };
        J(this.element, "BaseTabsContainer");
        this.ja = new hg;
        this.ja.element.id = "tab-row";
        this.ja.element.style.overflow = "hidden";
        this.ja.element.style.width = "100%";
        this.ja.element.style.borderRadius = "2px 2px 0 0";
        I.prototype.K.call(this, this.ja);
        this.window = document.createElement("div");
        this.window.style.width = "100%";
        this.window.style.position = "absolute";
        J(this.window, "window");
        this.element.appendChild(this.window);
        ce() && (J(this.element, "modern"),
        delete this.Ma.borderRadius,
        delete this.Ma.margin,
        delete this.Ma.marginRight,
        this.Ma.padding = "0 8px",
        this.Ma.lineHeight = "22px",
        this.Ma.height = "22px")
    }
    u(sg, I);
    e = sg.prototype;
    e.v = function() {
        this.window.style.height = this.element.clientHeight - this.ja.element.offsetHeight + "px"
    }
    ;
    e.K = function() {
        throw Error("addChild not implemented");
    }
    ;
    e.children = function() {
        return I.prototype.children.call(this).filter(function(a) {
            return a instanceof tg
        })
    }
    ;
    function ug(a) {
        for (var b = a.children(), c = b.length - 1; 0 <= c; --c) {
            var d = b[c];
            d !== a.Nd ? d.l() : a.Nd.active || d.u()
        }
        Lc(a);
        Mc(a)
    }
    e.ub = function() {
        for (var a = !1, b = t(this.children()), c = b.next(); !c.done; c = b.next())
            a = vg(c.value) || a;
        a && Lc(this.ja)
    }
    ;
    e.Td = function(a) {
        a.active ? J(a.D, "active") : K(a.D, "active");
        return Object.assign(Object.assign(Object.assign({}, this.Ma), {}), a.active ? this.Hi : {})
    }
    ;
    function tg() {
        I.call(this);
        this.Hh = this.active = !1;
        this.element.style.position = "relative"
    }
    u(tg, I);
    e = tg.prototype;
    e.Ud = function() {
        return [document.createTextNode("\u00a0")]
    }
    ;
    e.nf = function() {
        return ""
    }
    ;
    function vg(a) {
        for (var b = a.D.element.textContent; null !== a.D.element.firstChild; )
            a.D.element.removeChild(a.D.element.firstChild);
        for (var c = document.createElement("span"), d = t(a.Ud()), f = d.next(); !f.done; f = d.next())
            c.appendChild(f.value);
        a.D.element.appendChild(c);
        wg(a);
        c = "none" === a.D.element.style.display;
        a.D.element.style.display = "none" === a.D.element.style.display ? "none" : "inline-block";
        return b !== a.D.element.textContent || c !== ("none" === a.D.element.style.display)
    }
    function xg(a) {
        a.D = new I(document.createElement("div"));
        for (ab(["click", "touchstart"], a.D.element, function() {
            if (void 0 === a.parent)
                x("no parent");
            else {
                var d = a.parent;
                d.Nd = a;
                ug(d)
            }
        }); null !== a.D.element.firstChild; )
            a.D.element.removeChild(a.D.element.firstChild);
        for (var b = t(a.Ud()), c = b.next(); !c.done; c = b.next())
            a.D.element.appendChild(c.value);
        a.D.element.id = a.nf();
        wg(a);
        hd(a.D).g(function(d) {
            a.Hh = d;
            wg(a)
        });
        return a.D
    }
    e.ub = function() {
        void 0 === this.parent ? x("no parent") : this.parent.ub()
    }
    ;
    e.Td = function() {
        return void 0 !== this.parent ? this.parent.Td(this) : {}
    }
    ;
    function wg(a) {
        M(a.D, a.Td())
    }
    e.l = function() {
        I.prototype.l.call(this);
        this.active = !1;
        wg(this)
    }
    ;
    e.u = function() {
        I.prototype.u.call(this);
        this.active = !0;
        wg(this)
    }
    ;
    function yg(a) {
        var b = Ua();
        void 0 !== b && 9 >= b || (a.style["-webkit-overflow-scrolling"] = "touch");
        a.style.overflowY = "scroll";
        A("touchstart", a, function(c) {
            1 < c.touches.length ? c.preventDefault() : 0 === a.scrollTop && (a.scrollTop = 1)
        });
        A("touchmove", a, function(c) {
            c.stopPropagation();
            a.scrollHeight <= a.clientHeight && c.preventDefault()
        });
        A("scroll", a, function() {
            0 === a.scrollTop ? a.scrollTop = 1 : a.scrollTop === a.scrollHeight - a.offsetHeight && (a.scrollTop = a.scrollHeight - a.offsetHeight - 1)
        })
    }
    ;function zg(a) {
        I.call(this);
        J(this.element, "twitterUpdateRow");
        this.element.style.fontFamily = "UbuntuRegular, Helvetica, Arial, sans-serif";
        this.element.style.fontStyle = "normal";
        this.element.style.fontWeight = "normal";
        this.element.style.position = "relative";
        this.element.style.height = "";
        this.element.style.width = "";
        this.element.style.margin = "7px";
        this.element.style.padding = "6px";
        a.Xa ? J(this.element, "seen") : K(this.element, "seen");
        this.element.style.borderWidth = "1px";
        this.element.style.borderStyle = "solid";
        this.element.style.borderRadius = "4px";
        var b = this.element
          , c = b.appendChild
          , d = document.createElement("div");
        d.innerHTML = a.text;
        Ag(d);
        J(d, "contentSection");
        d.style.fontSize = "12px";
        d.style.lineHeight = "14px";
        d.style.whiteSpace = "pre-wrap";
        d.style.marginBottom = "6px";
        d.style["word-wrap"] = d.style["word-break"] = "break-word";
        d.style.overflow = "hidden";
        c.call(b, d);
        "" !== a.Ic && (b = a.Ic,
        c = document.createElement("div"),
        J(c, "timeSince"),
        c.appendChild(document.createTextNode(b)),
        c.style.fontSize = "9px",
        c.style.lineHeight = "13px",
        c.style.cssFloat = "left",
        this.element.appendChild(c));
        "" !== a.url && (b = "twitter_feed",
        void 0 !== a.Of && (b = a.Of),
        a = Bg(a.url, b),
        this.element.appendChild(a))
    }
    u(zg, I);
    function Ag(a) {
        Array.from(a.querySelectorAll("a")).forEach(function(b) {
            J(b, "tweetLink");
            b.target = "_blank";
            b.style.outline = "none";
            b.style.fontSize = "12px";
            b.style.lineHeight = "14px";
            null !== b.firstChild && b.firstChild instanceof Text && null !== b.firstChild.textContent && (b.firstChild.textContent = b.firstChild.textContent.replace(/^http(s)?:\/\//, "").replace(/^www\./, ""));
            b.onclick = function() {
                D("NewsfeedItemLinkClick")
            }
        })
    }
    function Bg(a, b) {
        var c = document.createElement("a");
        c.href = a;
        c.target = "_blank";
        a = "twitter_feed" === b;
        c.appendChild(document.createTextNode(a ? Mb : Nb));
        J(c, "twitterLink");
        c.style.fontSize = "9px";
        c.style.lineHeight = "13px";
        c.style.textAlign = "right";
        c.style.cssFloat = "right";
        a && (c.onclick = function() {
            D("NewsfeedItemViewOnTwitter")
        }
        );
        return c
    }
    ;function Cg() {
        I.call(this);
        this.element.style.overflow = "";
        this.element.style.position = "static";
        this.element.style.overflowX = "hidden";
        this.element.style.overflowY = "auto";
        Dg(this)
    }
    u(Cg, I);
    function Dg(a) {
        if (/iPad|iPhone|iPod/.test(navigator.platform)) {
            a.element.style["-webkit-overflow-scrolling"] = "touch";
            var b = function() {
                a.element.style.overflowY = "scroll";
                C("scroll", a.element, b)
            };
            A("scroll", a.element, b)
        }
    }
    ;function Eg() {
        Cg.call(this);
        this.K(new zg({
            text: xb + "...",
            Xa: !0,
            timestamp: 0,
            Ic: "",
            url: ""
        }))
    }
    u(Eg, Cg);
    function Fg(a, b) {
        Pc(a);
        0 === b.length && a.K(new zg({
            text: "" + hc,
            Xa: !0,
            timestamp: 0,
            Ic: "",
            url: ""
        }));
        b.forEach(function(c) {
            a.K(new zg(c))
        })
    }
    Eg.prototype.F = function() {
        this.element.style.maxHeight = "307px";
        this.element.style["-webkit-transform"] = "translateZ(0)"
    }
    ;
    function Gg() {
        Eg.apply(this, arguments)
    }
    u(Gg, Eg);
    Gg.prototype.F = function() {
        Eg.prototype.F.call(this);
        this.element.style.maxHeight = "";
        yg(this.element)
    }
    ;
    var Hg = new H("dropDownToggle")
      , Ig = new H("updatesAreRead")
      , Jg = new H("toggleElementHasUnseen");
    function Kg(a) {
        var b = ["twitter_feed", "offline_tip"].map(function(c) {
            return "notification_type=" + c
        }).join("&");
        Ia("notifications/updates/?" + b)[1].then(function(c) {
            c = Id(new R(c.responseText));
            void 0 !== c && (c = c.map(function(d) {
                return {
                    text: S(d, "text"),
                    url: S(d, "url"),
                    timestamp: Md(d, "timestamp"),
                    Ic: S(d, "time_since"),
                    Xa: Ld(d),
                    Of: S(d, "notification_type")
                }
            }),
            a(c))
        }).catch()
    }
    function Lg(a, b) {
        Ia("notifications/record_last_seen/?timestamp=" + a)[1].then(function() {
            b()
        }).catch()
    }
    ;function Mg(a, b) {
        var c;
        null === (c = Ng.get(a)) || void 0 === c ? void 0 : c.forEach(function(d) {
            d.Ba.h(d.Sb(b))
        })
    }
    function Og(a, b) {
        var c;
        null === (c = Ng.get(a)) || void 0 === c ? void 0 : c.forEach(function(d) {
            d.ld.h(b)
        })
    }
    function Pg(a) {
        var b;
        null === (b = Ng.get(a)) || void 0 === b ? void 0 : b.forEach(function(c) {
            c.pe.h(void 0)
        })
    }
    function Qg() {
        function a(c) {
            return 0 < c.Ba.listeners.length || 0 < c.ld.listeners.length
        }
        var b = Array.from(Rg.keys());
        Ng.forEach(function(c, d) {
            c.some(a) && b.push(d)
        });
        return b
    }
    var Ng = new Map
      , Rg = new Map;
    function Sg() {
        this.fc = new Set;
        this.md = new Set;
        this.creationTime = (new Date).getTime();
        this.jc = new H("connectionStateChange")
    }
    Sg.prototype.$d = function() {}
    ;
    function Tg(a, b, c) {
        c = void 0 === c ? {} : c;
        void 0 !== gb && (c.action = b,
        c.created = a.creationTime,
        c.client = a.Tg,
        D("PushServiceClient", c))
    }
    Sg.prototype.isConnected = function() {
        return "connected" === Ug(this.Z.connection.state)
    }
    ;
    function Vg(a) {
        return a.isConnected() ? Promise.resolve() : a.connect()
    }
    function Wg(a, b) {
        return Vg(a).then(function() {
            var c = Xg(a.auth, b);
            return void 0 === c || (new Date).getTime() >= c.expires ? Promise.reject("Auth context has no capability: " + a.auth.wb()) : Promise.resolve()
        })
    }
    Sg.prototype.ie = function(a) {
        var b = Xg(this.auth, a);
        return void 0 !== b && !((new Date).getTime() >= b.expires) && this.fc.has(a)
    }
    ;
    function Yg(a, b) {
        a.fc.add(b);
        a.md.delete(b);
        Og(b, !0)
    }
    function Zg(a, b) {
        a.fc.delete(b);
        a.md.delete(b);
        Og(b, !1)
    }
    function $g(a, b) {
        a.fc.delete(b);
        a.md.add(b)
    }
    ;var ah = new function() {
        this.xg = new Set(["connecting", "closing"])
    }
    ;
    var bh = 0;
    function ch(a, b, c) {
        this.token = a;
        this.expires = b;
        this.clientId = c;
        this.id = bh += 1
    }
    function dh(a) {
        var b = a.join(",");
        return new Promise(function(c, d) {
            v("push_service/auth/", {
                topics: b,
                client: "ably"
            }).then(function(f) {
                try {
                    var g = new R(f.responseText);
                    c(g)
                } catch (h) {
                    d(h)
                }
            }).catch(function(f) {
                d(f)
            })
        }
        )
    }
    ;function eh(a) {
        this.clientId = S(a, "client_id");
        this.ud = Pd(a, "token_request");
        this.kh = new Map;
        var b = new R(Pd(a, "settings"));
        this.xb = {
            Pe: S(b, "backend"),
            restHost: Kd(b, "rest_host"),
            realtimeHost: Kd(b, "realtime_host"),
            fallbackHosts: Jd(b),
            flags: new Map
        };
        var c = this.xb.flags;
        b = Od(b, "flags");
        if (void 0 !== b) {
            var d = Object.keys(b);
            d = t(d);
            for (var f = d.next(); !f.done; f = d.next())
                f = f.value,
                c.set(f, b[f])
        }
        c = this.kh;
        b = Od(a, "failures");
        if (void 0 !== b)
            for (d = Object.keys(b),
            d = t(d),
            f = d.next(); !f.done; f = d.next())
                f = f.value,
                c.set(f, b[f]);
        c = [];
        for (var g in a.parsed)
            !0 !== a.yd[g] && c.push(g);
        g = t(c);
        for (c = g.next(); !c.done; c = g.next())
            c = c.value,
            "object" === typeof a.parsed[c] && JSON.stringify(a.parsed[c])
    }
    eh.prototype.Fa = function() {
        return void 0 !== this.ud
    }
    ;
    eh.prototype.wb = function() {
        return JSON.stringify(this.ud)
    }
    ;
    function fh(a, b) {
        return void 0 === b ? {
            code: a,
            message: "Unknown"
        } : "string" === typeof b ? {
            code: "auth",
            message: b
        } : "statusCode"in b ? gh(a, b) : b
    }
    function gh(a, b) {
        a = {
            code: a,
            message: "Unknown failure"
        };
        void 0 !== b && (a.message = b.message);
        return a
    }
    function Ug(a) {
        switch (a) {
        case "initialized":
            return "initialized";
        case "connecting":
            return "connecting";
        case "connected":
            return "connected";
        case "closing":
            return "closing";
        case "closed":
            return "closed";
        case "disconnected":
            return "disconnected";
        case "failed":
            return "failed";
        case "suspended":
            return "suspended";
        default:
            return "unknown"
        }
    }
    function hh(a) {
        switch (a) {
        case "initialized":
            return "initialized";
        case "attaching":
            return "subscribing";
        case "attached":
            return "subscribed";
        case "detaching":
            return "unsubscribing";
        case "detached":
            return "unsubscribed";
        case "failed":
            return "failed";
        case "suspended":
            return "suspended";
        default:
            return "unknown"
        }
    }
    ;function ih(a) {
        ch.call(this, a.token, a.expires, a.clientId);
        this.tokenDetails = a;
        this.capability = jh(a.capability)
    }
    u(ih, ch);
    ih.prototype.Yc = function() {
        return Object.keys(this.capability)
    }
    ;
    function jh(a) {
        var b = {}
          , c = JSON.parse(a)
          , d = Object.keys(c);
        d = t(d);
        for (var f = d.next(); !f.done; f = d.next()) {
            f = f.value;
            var g = c[f];
            g instanceof Array ? b[f] = g.map(function(h) {
                return h
            }) : x("Invalid capability type for topic: " + f, {
                capability: a
            })
        }
        return b
    }
    function kh(a, b) {
        this.Sc = 0;
        this.Z = a;
        this.dc = b
    }
    kh.prototype.wb = function() {
        return this.dc.Fa() ? this.dc.wb() : ""
    }
    ;
    kh.prototype.getCapabilities = function() {
        var a = this.Ab;
        return void 0 === a ? {} : a.capability
    }
    ;
    function lh(a, b) {
        return new Promise(function(c, d) {
            return dh(b).then(function(f) {
                a.Sc = 0;
                var g = Od(f, "failures");
                "object" === typeof g && 0 !== Object.keys(g).length && D("PushServiceClient", {
                    action: "token_request_failed_topics",
                    topics: g,
                    client: "ably"
                });
                a.dc = new eh(f);
                if (a.dc.Fa()) {
                    f = a.dc;
                    if (void 0 === f.ud)
                        throw Error("Access to AblyContext.tokenRequest on an invalid context!");
                    c(f.ud)
                } else
                    d("Invalid token request")
            }).catch(function(f) {
                a.Sc += 1;
                3 <= a.Sc && a.Z.connection.close();
                d(f)
            })
        }
        )
    }
    function mh(a, b) {
        a = nh(a);
        return void 0 !== a && a.capability.hasOwnProperty(b)
    }
    function Xg(a, b) {
        return mh(a, b) ? a.Ab : void 0
    }
    kh.prototype.Yc = function() {
        var a = nh(this);
        return void 0 !== a ? a.Yc() : []
    }
    ;
    function nh(a) {
        if (void 0 !== a.Ab)
            if ((new Date).getTime() >= a.Ab.expires)
                a.Ab = void 0;
            else
                return a.Ab
    }
    function oh(a) {
        return new Promise(function(b, c) {
            a.Z.auth.authorize().then(function(d) {
                d = new ih(d);
                a.Ab = d;
                b()
            }).catch(function(d) {
                d = fh("auth", d);
                x(d);
                c(d)
            })
        }
        )
    }
    ;function ph() {
        var a = 2;
        try {
            var b = !1;
            var c = !0
        } catch (d) {
            c = b = !1
        }
        b ? a = 0 : c && (a = 1);
        return {
            level: a
        }
    }
    function qh() {
        Sg.call(this);
        var a = this;
        this.Tg = "ably";
        this.ra = new Map;
        this.Fe = new Set;
        this.jc = new H("connectionStateChange",{
            Ua: 1
        });
        if (!W.current.nd.Fa())
            throw x("Invalid PushServiceContext made it to AblyClientImpl", W.current),
            Error("Invalid context");
        this.dg = void 0 === W.current.Af ? !0 : !W.current.Af;
        this.context = W.current.nd;
        this.Z = new Ably.Realtime.Promise(rh(this));
        this.auth = new kh(this.Z,this.context);
        this.Z.connection.on(function(b) {
            b.previous !== b.current && a.jc.h({
                Nk: a,
                previous: Ug(b.previous),
                current: Ug(b.current),
                reason: gh("connect", b.reason)
            })
        })
    }
    u(qh, Sg);
    function rh(a) {
        var b = {
            autoConnect: !1,
            closeOnUnload: a.dg,
            log: ph(),
            authCallback: function(c, d) {
                c = [].concat(ea(Qg()), ea(Array.from(a.fc)), ea(Array.from(a.md)));
                100 < c.length && (B("PushService[ably] is attempting to request too many topics"),
                c.length = 100);
                lh(a.auth, c).then(function(f) {
                    d(void 0, f)
                }).catch(function(f) {
                    d(f.message)
                })
            },
            restHost: a.context.xb.restHost,
            realtimeHost: a.context.xb.realtimeHost
        };
        0 < a.context.xb.fallbackHosts.length && (b.fallbackHosts = a.context.xb.fallbackHosts);
        return b
    }
    e = qh.prototype;
    e.connect = function() {
        var a = this;
        if (this.isConnected())
            return Promise.resolve();
        if (ah.xg.has(Ug(this.Z.connection.state)) && void 0 === this.ic)
            return Promise.reject("Connection is currently busy!");
        void 0 === this.ic && (this.ic = new Promise(function(b, c) {
            function d(f) {
                "connected" === f.current ? (a.ic = void 0,
                a.jc.removeListener(d),
                b()) : "connecting" === f.previous && (a.ic = void 0,
                a.jc.removeListener(d),
                c(f.reason))
            }
            a.jc.g(d);
            a.Z.connect()
        }
        ));
        return this.ic
    }
    ;
    e.close = function() {
        this.isConnected() && this.Z.close()
    }
    ;
    e.isConnected = function() {
        return "connected" === Ug(this.Z.connection.state)
    }
    ;
    e.$d = function() {
        var a = this;
        Sg.prototype.$d.call(this);
        this.dg || A(Wa(), window, function() {
            a.close()
        })
    }
    ;
    function sh(a, b) {
        var c = a.ra.get(b);
        if (void 0 !== c)
            return c.then(function() {
                return sh(a, b)
            });
        c = a.Z.channels.get(b);
        c = hh(c.state);
        return a.Fe.has(b) ? "subscribed" === c || "subscribing" === c ? Promise.resolve() : th(a, b) : "unsubscribed" === c || "unsubscribing" === c ? Promise.resolve() : uh(a, b)
    }
    e.subscribe = function(a) {
        this.Fe.add(a);
        return sh(this, a)
    }
    ;
    function th(a, b) {
        var c = a.ra.get(b);
        if (void 0 !== c)
            return Promise.reject("Called subscribe while channel is busy");
        $g(a, b);
        var d = a.Z.channels.get(b);
        c = hh(d.state);
        if ("subscribed" === c)
            return Yg(a, b),
            Promise.resolve();
        if ("subscribing" === c)
            return Promise.reject(fh("subscribe", "Channel was already subscribing"));
        var f = !1
          , g = vh.g(function() {
            f = !0
        });
        c = new Promise(function(h, k) {
            Wg(a, b).then(function() {
                return d.setOptions({
                    Rg: void 0,
                    params: {},
                    modes: ["SUBSCRIBE", "PRESENCE"]
                })
            }).then(function() {
                return d.attach()
            }).then(function() {
                d.unsubscribe();
                return d.subscribe(function(l) {
                    l.data.providerData = {
                        id: l.id,
                        ts: l.timestamp
                    };
                    l = new R(l.data);
                    Mg(b, l)
                })
            }).then(function() {
                g.removeListener();
                Yg(a, b);
                a.ra.delete(b);
                h()
            }).catch(function(l) {
                g.removeListener();
                Zg(a, b);
                a.ra.delete(b);
                "suspended" === d.state && d.detach().then().catch();
                f && h();
                k(fh("subscribe", l))
            })
        }
        );
        a.ra.set(b, c);
        return c
    }
    e.unsubscribe = function(a) {
        this.Fe.delete(a);
        return sh(this, a)
    }
    ;
    function uh(a, b) {
        var c = a.ra.get(b);
        if (void 0 !== c)
            return Promise.reject("Called unsubscribe while channel is busy");
        $g(a, b);
        var d = a.Z.channels.get(b);
        c = hh(d.state);
        d.unsubscribe();
        if (["unsubscribed", "initialized", "failed"].includes(c))
            return Zg(a, b),
            Promise.resolve();
        c = new Promise(function(f, g) {
            d.detach().then(function() {
                Zg(a, b);
                a.ra.delete(b);
                f()
            }).catch(function(h) {
                Zg(a, b);
                a.ra.delete(b);
                g("Failed to detach from topic " + b + " - " + h)
            })
        }
        );
        a.ra.set(b, c);
        return c
    }
    e.af = function(a, b) {
        var c = this
          , d = this.ra.get(a);
        if (void 0 !== d)
            return Promise.reject("Called subscribe while channel is busy");
        $g(this, a);
        var f = this.Z.channels.get(a);
        return d = new Promise(function(g, h) {
            Wg(c, a).then(function() {
                return f.setOptions({
                    Rg: void 0,
                    params: {},
                    modes: ["SUBSCRIBE", "PRESENCE"]
                })
            }).then(function() {
                return f.attach()
            }).then(function() {
                var k = c.auth.getCapabilities()[a];
                return Array.isArray(k) && k.includes("presence") ? b.Pg ? f.presence.update(b.data) : Promise.resolve() : Promise.reject("Token does not have capability for presence")
            }).then(function() {
                Yg(c, a);
                g()
            }).catch(function(k) {
                c.ra.delete(a);
                Zg(c, a);
                h(fh("presence", k))
            })
        }
        )
    }
    ;
    e.ie = function(a) {
        return "subscribed" === hh(this.Z.channels.get(a).state)
    }
    ;
    function wh(a) {
        return a.map(function(b) {
            return Promise.resolve(b).then(function(c) {
                return {
                    status: "fulfilled",
                    value: c
                }
            }).catch(function(c) {
                return {
                    status: "rejected",
                    reason: c
                }
            })
        })
    }
    ;var xh, yh;
    function zh(a) {
        a = new R(a);
        var b = {
            clientId: Kd(a, "client_id"),
            xb: {
                Pe: "undefined",
                flags: new Map
            },
            Fa: function() {
                return !1
            }
        }
          , c = Nd(a);
        if (void 0 === c)
            return B("PushService parseContext failed: settings key does not exist", a),
            b;
        c = Kd(c, "backend");
        switch (c) {
        case "ably":
            return new eh(a)
        }
        B("PushService parseContext failed: unrecognized backend or critical error in parse", [c, a]);
        return b
    }
    function Ah() {
        var a = Bh();
        if (void 0 !== a) {
            var b = Ch += 1;
            window.clearTimeout(yh);
            var c = Qg();
            1 > c.filter(function(d) {
                return -1 === a.auth.Yc().indexOf(d) || !Dh(d)
            }).length || oh(a.auth).then(function() {
                if (!(b < Ch)) {
                    var d = !1
                      , f = vh.g(function() {
                        d = !0
                    })
                      , g = (new Date).getTime();
                    Eh(c).then(function(h) {
                        var k = (new Date).getTime();
                        f.removeListener();
                        if (!(b < Ch)) {
                            var l = h.filter(function(n) {
                                return "fulfilled" === n.status
                            }).length
                              , m = a.auth.Yc().filter(function(n) {
                                return !Dh(n)
                            });
                            D("PushServiceTopicSetup", {
                                topics_requested_count: h.length,
                                successful_topic_count: l,
                                failed_topic_list: m.sort(),
                                is_push_connected: void 0 !== xh && xh.isConnected(),
                                elapsed_time: k - g
                            });
                            0 < m.length && !d && (yh = window.setTimeout(function() {
                                Fh.ta();
                                Gh *= 2
                            }, Gh));
                            m.forEach(function(n) {
                                Pg(n)
                            })
                        }
                    }).catch()
                }
            }).catch(function(d) {
                b < Ch || (c.filter(function(f) {
                    return !Dh(f)
                }).forEach(function(f) {
                    Pg(f)
                }),
                x(d))
            })
        }
    }
    function Bh() {
        if (void 0 === xh) {
            W.current.nd.Fa();
            var a = W.current.nd.xb.Pe;
            try {
                switch (a) {
                case "ably":
                    xh = new qh
                }
            } catch (b) {
                B("An exception was thrown during client construction:", b)
            }
            void 0 === xh || xh.$d()
        }
        return xh
    }
    function Hh(a) {
        var b = Bh();
        return void 0 === b ? Promise.reject("PushService client is not initialized") : b.ie(a) ? Promise.resolve() : b.subscribe(a).catch(function(c) {
            Tg(b, "subscribe_failure", {
                topic: a,
                auth: b.auth.wb(),
                message: c.message
            })
        })
    }
    function Ih(a) {
        var b = Bh();
        return void 0 === b ? Promise.reject("PushService client is not initialized") : b.unsubscribe(a).catch(function(c) {
            Tg(b, "unsubscribe_failure", {
                topic: a,
                auth: b.auth.wb(),
                message: c.message
            })
        })
    }
    function Dh(a) {
        var b = Bh();
        return void 0 === b ? !1 : b.ie(a)
    }
    function Eh(a) {
        var b = Bh();
        if (void 0 === b)
            return Promise.all([]);
        a = a.filter(function(c) {
            return !Dh(c) && mh(b.auth, c)
        }).map(function(c) {
            var d = Rg.get(c);
            return void 0 !== d ? b.af(c, d) : Hh(c)
        });
        return Promise.all(wh(a))
    }
    var Gh = 1E4
      , vh = new H("PushServiceClosed",{
        Ua: 1
    })
      , Fh = new vc(function() {
        Ah()
    }
    ,{
        gb: 800,
        Bb: 1
    })
      , Ch = 0;
    function Jh(a) {
        var b = this;
        this.we = {
            Ha: 5,
            jd: function() {
                b.jd()
            },
            kd: function() {
                b.kd()
            }
        };
        this.initData(a);
        this.Ba = new H(this.getKey(),this.we);
        this.pe = new H("TopicAuthFail",this.we);
        this.ld = new H("TopicSubscribeChange",this.we)
    }
    Jh.prototype.Sb = function(a) {
        var b = S(a, "tid")
          , c = S(new R(Pd(a, "providerData")), "id")
          , d = Math.floor(1E3 * Md(a, "ts"))
          , f = Math.floor(1E3 * Md(a, "pub_ts"))
          , g = new Date
          , h = parseInt(window.serverTimeDiff);
        return {
            Rk: b,
            pk: c,
            Sk: {
                qj: d,
                rk: f,
                sk: Math.floor((!isNaN(h) && 4E3 < Math.abs(h) ? new Date(g.getTime() - h) : g).getTime()),
                qk: Math.floor(Md(new R(Pd(a, "providerData")), "ts"))
            }
        }
    }
    ;
    Jh.prototype.af = function(a) {
        var b = this.getKey();
        a = void 0 === a ? {} : a;
        Rg.set(b, {
            Pg: !0,
            data: a
        });
        Fh.ta()
    }
    ;
    Jh.prototype.jd = function() {
        if (1 === this.Ba.listeners.length + this.ld.listeners.length + this.pe.listeners.length) {
            var a = Ng.get(this.getKey());
            void 0 === a ? a = [this] : (50 < a.length && B(this.getKey() + " has more than 50 listeners"),
            a.push(this));
            Ng.set(this.getKey(), a);
            Fh.ta()
        }
    }
    ;
    Jh.prototype.kd = function() {
        if (0 === this.Ba.listeners.length + this.ld.listeners.length + this.pe.listeners.length) {
            var a = Ng.get(this.getKey());
            void 0 !== a && (a.splice(a.indexOf(this), 1),
            1 > a.length ? (Ng.delete(this.getKey()),
            Rg.has(this.getKey()) || Ih(this.getKey()).catch()) : Ng.set(this.getKey(), a))
        }
    }
    ;
    function Kh() {
        Jh.call(this)
    }
    u(Kh, Jh);
    Kh.prototype.getKey = function() {
        return "" + this.Db()
    }
    ;
    Kh.prototype.initData = function() {}
    ;
    function Lh() {
        Kh.apply(this, arguments)
    }
    u(Lh, Kh);
    Lh.prototype.Db = function() {
        return "global:news"
    }
    ;
    Lh.prototype.Sb = function(a) {
        return {
            text: S(a, "text"),
            url: S(a, "url"),
            timestamp: Md(a, "timestamp"),
            Ic: S(a, "time_since"),
            Xa: Ld(a, !1, !1)
        }
    }
    ;
    de.g(function() {});
    function Mh(a) {
        Jh.call(this, {
            user_uid: a
        });
        if (0 === a.length)
            throw Error("user uid cannot be empty");
    }
    u(Mh, Jh);
    Mh.prototype.getKey = function() {
        return this.Db() + ":" + this.ac
    }
    ;
    Mh.prototype.initData = function(a) {
        this.ac = a.user_uid
    }
    ;
    function Nh() {
        Mh.apply(this, arguments)
    }
    u(Nh, Mh);
    Nh.prototype.Db = function() {
        return "user:news_seen"
    }
    ;
    Nh.prototype.Sb = function(a) {
        return Object.assign(Object.assign({}, Mh.prototype.Sb.call(this, a)), {
            timestamp: Md(a, "read_ts")
        })
    }
    ;
    function Oh() {
        Mh.apply(this, arguments)
    }
    u(Oh, Mh);
    Oh.prototype.Db = function() {
        return "user:token_update"
    }
    ;
    Oh.prototype.Sb = function(a) {
        return Object.assign(Object.assign({}, Mh.prototype.Sb.call(this, a)), {
            Ui: Md(a, "tokens")
        })
    }
    ;
    new H("showMyCamStarted");
    new H("showMyCamStopped");
    new H("showMyCamViewStarted");
    new H("showMyCamViewStopped");
    function Ph() {
        tg.call(this);
        var a = this;
        this.Va = 0;
        this.ee = !1;
        this.items = [];
        this.le = void 0;
        this.wd = 0;
        this.uf = !1;
        this.K(this.Ra);
        Jg.g(function(b) {
            a.uf = b
        });
        Hg.g(function(b) {
            (a.ob = b) ? (D("NewsfeedOpened", {
                is_orange: a.uf
            }),
            Qh(a),
            a.wd = (new Date).getTime()) : (Ig.h(void 0),
            a.Va = 0,
            a.ub(),
            0 < a.items.length && (Rh(a, a.items[0].timestamp),
            Sh(a, a.items[0].timestamp)),
            a.ze())
        });
        this.oa = void 0 === W.current.S;
        A("beforeunload", window, this.ze.bind(this));
        A("unload", window, this.ze.bind(this))
    }
    u(Ph, tg);
    function Sh(a, b, c) {
        !1 === a.oa && Lg(b, function() {
            void 0 !== c && c()
        })
    }
    e = Ph.prototype;
    e.initData = function() {
        this.Ra = new Eg
    }
    ;
    e.ze = function() {
        if (0 !== this.wd) {
            var a = {
                duration_seconds: ((new Date).getTime() - this.wd) / 1E3
            };
            this.wd = 0;
            D("NewsfeedClosed", a)
        }
    }
    ;
    e.Ud = function() {
        return [document.createTextNode(99 < this.Va ? Pb + " (99+)" : 0 < this.Va ? Pb + " (" + this.Va + ")" : Pb)]
    }
    ;
    e.nf = function() {
        return "updates-tab"
    }
    ;
    e.u = function() {
        tg.prototype.u.call(this);
        this.ub();
        this.v()
    }
    ;
    function Qh(a) {
        a.ee ? (Fg(a.Ra, a.items),
        Th(a)) : Kg(function(b) {
            var c;
            a.items = b;
            Fg(a.Ra, b);
            a.Va = b.filter(function(d) {
                return !d.Xa
            }).length;
            a.ub();
            a.ee = !0;
            Th(a);
            b = null === (c = W.current.S) || void 0 === c ? void 0 : c.ac;
            void 0 !== b && (new Nh(b)).Ba.g(function(d) {
                Rh(a, d.timestamp);
                a.Va = a.items.filter(function(f) {
                    return !f.Xa
                }).length;
                a.ub()
            });
            (new Lh).Ba.g(function(d) {
                var f = 0;
                0 < a.items.length && (f = Math.max.apply(Math, ea(a.items.map(function(g) {
                    return g.timestamp
                }))));
                f < d.timestamp && (a.items.splice(0, 0, d),
                a.Va = a.items.filter(function(g) {
                    return !g.Xa
                }).length,
                Fg(a.Ra, a.items),
                a.ub(),
                Th(a))
            })
        })
    }
    function Rh(a, b) {
        a.items.forEach(function(c) {
            c.timestamp <= b && (c.Xa = !0)
        })
    }
    function Th(a) {
        0 < a.Va ? (void 0 !== a.le && clearTimeout(a.le),
        a.le = window.setTimeout(function() {
            a.ob && Sh(a, a.items[0].timestamp, function() {
                Ig.h(void 0)
            })
        }, 500)) : Ig.h(void 0)
    }
    function Uh() {
        Ph.apply(this, arguments)
    }
    u(Uh, Ph);
    Uh.prototype.initData = function() {
        this.Ra = new Gg
    }
    ;
    var Vh, Wh, Xh;
    Vh = null !== (Xh = null === (Wh = W.current) || void 0 === Wh ? void 0 : Wh.Xg) && void 0 !== Xh ? Xh : "https://static-assets.highwebmedia.com/images/logo.svg";
    var Yh = {
        pg: "chaturbate.com",
        qg: "",
        Ni: nb,
        Oi: "#0b5d81",
        Ce: "Chaturbate",
        bgColor: "#ffffff",
        Wh: "#0c6a93",
        Nf: "#ffffff",
        Vh: "#f47321",
        Th: "#ffffff",
        Uh: "url(https://static-assets.highwebmedia.com/tsdefaultassets/gender_tab_bg.gif) repeat-x",
        wh: "#004B5E",
        Ri: "#494949",
        Ue: "#494949",
        We: "#222222",
        Wi: "#222222",
        Bh: "#0A5B83",
        td: "#8bb3da",
        Fi: "#ffffff",
        Ii: "#dde9f5",
        Gi: "#dc5500",
        Ji: "#5e81a4",
        Ki: "#6D85B5",
        Li: "#FFF",
        Mi: "#2472B4",
        Pi: "#4F4F4F",
        Qi: "#B60A42",
        Vg: "#FFFFFF",
        zg: "#F0F1F1",
        Ag: "#ACACAC",
        Cg: "#000",
        Dg: "#0A5A83",
        yg: "#575757",
        Bg: "#0A5A83",
        Ti: "#e45900",
        qh: "#676767",
        uh: "#494949",
        Wg: "#494949",
        Oh: Vh,
        Ci: "#f47321",
        Ph: void 0,
        rh: "",
        xh: "#ffffff url(https://static-assets.highwebmedia.com/tsdefaultassets/header_bg.gif) repeat-x",
        ph: "#ffffff url(https://static-assets.highwebmedia.com/tsdefaultassets/footer_bg.gif) repeat-x",
        Xi: "#e9e9e9",
        $i: "#ffffff",
        Xh: "#FCEADB",
        oh: "#494949",
        sh: "#0A5A83",
        th: "#dc5500",
        Qg: "#4C4C4C",
        $g: "",
        uc: !1,
        ti: !1,
        ri: !1,
        si: !1,
        pi: !1,
        xi: !0,
        yi: !0,
        ui: !0,
        wi: !0,
        vi: !0,
        ii: "#494949",
        Nh: "#000000",
        bh: "#494949",
        lg: "#3C87BA",
        Yi: "#F47321",
        Zi: "#ffffff",
        Ie: "https://www.surveymonkey.com/r/DXYF5T8",
        vf: !0 === window.hide_entrance_terms,
        Fg: "#F47321",
        Gg: "#FFFFFF",
        Hg: "#000000",
        Ig: "#F8F9fA",
        Jg: "#ACACAC",
        Kg: "#6E6F70",
        Lg: "#0A5B83",
        Mg: "#494949"
    }
      , Y = Yh;
    if (void 0 !== window.siteSettings) {
        var Z = window.siteSettings
          , Zh = Z.navigation_font_color
          , $h = Z.text_color
          , ai = Z.tab_inactive_color
          , bi = Z.tab_inactive_font_color
          , ci = Z.content_bgcolor
          , di = Z.footer_href_color
          , ei = Z.footer_text_color
          , fi = Z.cam_href_color;
        Y = {
            pg: Z.chaturbate_alias,
            qg: Z.dbwl_domain,
            Ni: Z.tagline,
            Oi: Z.tagline_color,
            Ce: Z.site_name,
            bgColor: Z.bgcolor,
            Wh: Z.navigation_bgcolor,
            Nf: Zh,
            Vh: Z.navigation_alt_bgcolor,
            Th: Z.navigation_alt_2_bgcolor,
            Uh: "",
            wh: Z.h1_color,
            Ri: $h,
            Ue: Yh.Ue,
            We: Yh.We,
            Wi: $h,
            Bh: Z.href_color,
            td: Z.tab_border_color,
            Fi: Z.tab_active_color,
            Ii: ai,
            Gi: Z.tab_active_font_color,
            Ji: bi,
            Ki: Z.tag_exhibitionist_color,
            Li: Z.tag_font_color,
            Mi: Z.tag_hd_color,
            Pi: Z.tag_offline_color,
            Qi: Z.tag_private_group_color,
            Vg: ci,
            zg: Z.cam_background_color,
            Ag: Z.cam_border_color,
            Cg: Z.cam_text_color,
            Dg: "#0C6A93",
            yg: Z.cam_text_alt_color,
            Bg: fi,
            Ti: fi,
            qh: di,
            uh: ei,
            Wg: ei,
            Oh: Z.logo_image_name,
            Ci: Z.signup_bg_color,
            Ph: Z._logo_width,
            rh: Z.footer_html,
            xh: "",
            ph: "",
            Xi: ci,
            $i: Zh,
            Xh: ai,
            oh: bi,
            sh: di,
            th: di,
            Qg: "#0C6A93",
            $g: Z.default_campaign_slug,
            uc: !0,
            ti: !0,
            ri: !0,
            si: !0,
            pi: !0,
            xi: !1,
            yi: !1,
            ui: !1,
            wi: !1,
            vi: !1,
            ii: "#222222",
            Nh: $h,
            bh: $h,
            Xf: Z.whitelabel_hit_count_referring_url,
            lg: Z.tab_inactive_color,
            Yi: Z.tab_active_color,
            Zi: Z.tab_active_font_color,
            Ie: Yh.Ie,
            vf: Yh.vf,
            Fg: Z.carousel_active_circle_color,
            Gg: Z.carousel_arrow_bg_color,
            Hg: Z.carousel_arrow_color,
            Ig: Z.carousel_bg_color,
            Jg: Z.carousel_border_color,
            Kg: Z.carousel_circle_color,
            Lg: Z.carousel_href_color,
            Mg: Z.carousel_title_color
        }
    }
    void 0 !== Y.Xf && v("whitelabels/record_hit/", {
        referer: Y.Xf
    }).catch(function(a) {
        x("Error recording whitelabel hit: " + a)
    });
    new H("privateMessage");
    var gi = new H("sitewideRoomNoticeEvent");
    new H("logMessage");
    new H("showPmSession");
    new H("closePmSession");
    new H("closePmSessionSyncPmList");
    new H("updateTipBalance");
    new H("updateSearchBar");
    new H("pmMarkedReadEvent");
    new H("pmEmoticonLoaded");
    new H("navigateSuggestions");
    new H("openCurrentSuggestion");
    new H("suggestionSelectedEvent");
    var hi = {
        enabled: !1,
        move: function() {},
        end: function() {}
    };
    function ii(a, b) {
        ji(a, b, function(c) {
            return {
                valid: !0,
                x: c.clientX,
                y: c.clientY
            }
        }, "mousedown", "mousemove", "mouseup");
        ji(a, b, function(c) {
            return 1 === c.touches.length && (c = c.touches.item(0),
            null !== c) ? {
                valid: !0,
                x: c.clientX,
                y: c.clientY
            } : {
                valid: !1,
                x: 0,
                y: 0
            }
        }, "touchstart", "touchmove", "touchend")
    }
    function ji(a, b, c, d, f, g) {
        A(d, a, function(h) {
            var k = c(h);
            if (k.valid) {
                var l = b(h, k.x, k.y);
                if (l.enabled) {
                    l.move(k.x, k.y);
                    h.preventDefault();
                    var m = function(w) {
                        w = c(w);
                        w.valid && l.move(w.x, w.y)
                    }
                      , n = function(w) {
                        w.preventDefault();
                        void 0 !== w.buttons && (document.documentMode && void 0 === window.atob ? 0 === w.buttons : 1 === w.buttons) || void 0 !== w.touches && 1 === w.touches.length ? m(w) : r(w, !1)
                    };
                    A(f, document, n, !0);
                    var r = function(w, z) {
                        (void 0 === z || z) && m(w);
                        C(f, document, n, !0);
                        C(g, document, r, !0);
                        l.end()
                    };
                    A(g, document, r, !0)
                }
            }
        })
    }
    ;function ki(a, b) {
        var c = {};
        b = t(b);
        for (var d = b.next(); !d.done; d = b.next())
            d = d.value,
            d.style.cursor = "move",
            ii(d, function(f, g, h) {
                if (void 0 !== c.Eg && !1 === c.Eg())
                    return hi;
                var k = a.offsetLeft
                  , l = a.offsetTop
                  , m = a.offsetHeight
                  , n = a.offsetWidth;
                if (null === a.parentElement)
                    return x("draggable without parent element"),
                    hi;
                var r = a.parentElement.clientHeight
                  , w = a.parentElement.clientWidth
                  , z = g
                  , T = h;
                void 0 !== c.eh && c.eh();
                return {
                    enabled: !0,
                    move: function(G, N) {
                        z = G;
                        T = N;
                        G = l + (T - h);
                        N = k + (z - g);
                        0 > G ? G = 0 : G + m > r && (G = r - m);
                        0 > N ? N = 0 : N + n > w && (N = w - n);
                        a.style.top = G + "px";
                        a.style.left = N + "px"
                    },
                    end: function() {
                        void 0 !== c.fh && c.fh()
                    }
                }
            })
    }
    ;function li(a, b, c, d, f) {
        f = void 0 === f ? !0 : f;
        this.label = document.createElement("label");
        this.label.htmlFor = c;
        this.label.innerText = d;
        "textarea" === b ? this.input = document.createElement("textarea") : (this.input = document.createElement("input"),
        this.input.type = b);
        this.input.name = c;
        f && (this.input.required = f);
        this.error = document.createElement("p");
        a.appendChild(this.label);
        a.appendChild(this.input);
        a.appendChild(this.error)
    }
    ;new H("roomListRequest");
    new H("playerForceMuted");
    new H("standardEmoticonRequest");
    new H("standardEmoticonRequest");
    new H("userInitiatedPm");
    new H("mentionUser");
    new H("appDebuggingToggled");
    new H("getMoreHistoryMessages");
    new H("repositionChatTabContent");
    new H("userModeratorStatusChanged");
    de.g(function() {});
    function mi(a) {
        a.style.webkitTransition = "left 100ms";
        a.style.transition = "left 100ms";
        void 0 !== a.style.setProperty && a.style.setProperty("moz-transition", "left 100ms")
    }
    ;new H("switchedToHLS");
    new H("openDefaultTipCalloutRequest");
    new H("loginOverlayRequest");
    new H("makeButtonsShort");
    new H("userChatSettingsUpdate",{
        Ha: 50
    });
    new H("openPhotoVideoTabRequest");
    function ni(a, b) {
        I.call(this);
        var c = this;
        this.C = document.createElement("input");
        this.onChange = function() {}
        ;
        this.disabled = !1;
        this.C.type = "checkbox";
        this.C.style.position = "absolute";
        this.C.style.opacity = "0";
        this.C.style.margin = "0";
        this.C.style.padding = "0";
        this.C.style.width = "0";
        this.C.style.height = "0";
        this.C.style.border = "none";
        this.C.style.zIndex = "-1";
        oi(this);
        void 0 !== a && (this.C.checked = a,
        pi(this),
        this.onChange());
        void 0 !== b && (this.onChange = b);
        this.element.appendChild(this.C);
        pi(this);
        this.element.onclick = function(d) {
            c.disabled || d.target === c.C || (c.toggle(),
            c.C.focus(),
            d.preventDefault())
        }
        ;
        this.C.onchange = function() {
            c.C.checked = c.C.checked;
            pi(c);
            c.onChange()
        }
    }
    u(ni, I);
    e = ni.prototype;
    e.toggle = function() {
        this.C.checked = !this.C.checked;
        this.onChange();
        pi(this)
    }
    ;
    e.focus = function() {
        this.C.focus()
    }
    ;
    e.blur = function() {
        this.C.blur()
    }
    ;
    function qi(a, b) {
        a.onChange = b
    }
    e.disable = function() {
        this.disabled = !0;
        pi(this)
    }
    ;
    e.enable = function() {
        this.disabled = !1;
        pi(this)
    }
    ;
    function ri(a, b, c) {
        ni.call(this, b, c);
        this.wf = !1;
        this.element.style.height = a + "px";
        this.element.style.width = a + "px"
    }
    u(ri, ni);
    function oi(a) {
        J(a.element, "transparentCheckbox");
        a.element.style.display = "inline-block";
        a.element.style.position = "relative";
        a.element.style.borderWidth = "1px";
        a.element.style.borderStyle = "solid";
        a.element.style.borderRadius = "2px";
        A("focus", a.C, function() {
            a.wf && J(a.element, "focused")
        });
        A("blur", a.C, function() {
            a.wf && K(a.element, "focused")
        })
    }
    function pi(a) {
        a.C.checked ? J(a.element, "checked") : K(a.element, "checked");
        a.disabled ? J(a.element, "disabled") : K(a.element, "disabled")
    }
    ri.prototype.mf = function() {
        return this.C.name
    }
    ;
    var si = !1;
    function ti(a) {
        var b = this;
        this.oe = new Set;
        (si = void 0 === a || a) || ui().then(function(c) {
            c.forEach(function(d) {
                b.oe.add(d)
            })
        }).catch(function() {
            x("Could not retrieve list of users for which currentUser has notes on")
        })
    }
    var vi;
    ti.prototype.remove = function(a) {
        this.oe.has(a) && (this.oe.delete(a),
        wi(a))
    }
    ;
    function wi(a) {
        document.body.querySelectorAll(".notesIcon_" + a).forEach(function(b) {
            b.style.display = "none"
        })
    }
    function ui() {
        return Ia("api/notes/usernames/")[1].then(function(a) {
            var b = new R(a.responseText);
            a = JSON;
            var c = a.parse;
            var d = void 0 === d ? !0 : d;
            var f = Hd(b, "usernames");
            "object" !== typeof f ? (d && B("getObjectString(usernames): " + f + " is wrong type", {
                message: b.Ya
            }),
            d = "") : d = JSON.stringify(f);
            return c.call(a, d)
        })
    }
    ;new H("getChatMode");
    fb();
    function xi(a, b) {
        function c(f) {
            return f instanceof d ? f : new d(function(g) {
                g(f)
            }
            )
        }
        var d = void 0;
        return new (d || (d = Promise))(function(f, g) {
            function h(m) {
                try {
                    l(b.next(m))
                } catch (n) {
                    g(n)
                }
            }
            function k(m) {
                try {
                    l(b["throw"](m))
                } catch (n) {
                    g(n)
                }
            }
            function l(m) {
                m.done ? f(m.value) : c(m.value).then(h, k)
            }
            l((b = b.apply(a, [])).next())
        }
        )
    }
    ;new H("pictureInPictureChange");
    new H("HlsNativePlayer:AirPlayChange");
    new ae(["IconVideoControls", "TextVideoControls"],"vidctrls");
    new H("floatingPlayerShow");
    new H("floatingPlayerHide");
    new H("floatingPlayerShowLoginOverlay");
    function yi(a) {
        switch (a) {
        case "0":
            return "smileyInTrouble";
        case "1":
            return "smileyUnhappy";
        case "2":
            return "smileyIndifferent";
        case "3":
            return "smileySmirk";
        case "4":
            return "smileyInLove"
        }
    }
    ;function zi(a) {
        27 !== a.keyCode && a.stopImmediatePropagation()
    }
    function Ai(a) {
        32 === a.keyCode && a.target === document.body && a.preventDefault()
    }
    var Bi = new H("canvasOpen")
      , Ci = new H("canvasClose")
      , Di = new H("openFeedbackForm");
    function Ei(a) {
        var b = document.createElement("div");
        b.style.display = "block";
        void 0 !== a && a.appendChild(b);
        return b
    }
    function Fi() {
        I.apply(this, arguments)
    }
    u(Fi, I);
    Fi.prototype.initData = function() {
        this.element = Ei();
        this.control = document.createElement("button");
        this.control.type = "button";
        this.control.tabIndex = 0;
        this.element.appendChild(this.control)
    }
    ;
    Fi.prototype.F = function() {
        this.element.style.position = "absolute";
        this.element.style.top = "0";
        this.element.style.right = "0";
        this.element.style.margin = "12px 12px 0 0";
        J(this.control, "closeControl");
        this.control.style.padding = "4px";
        this.control.style.cursor = "pointer";
        this.control.style.width = "12px";
        this.control.style.height = "12px";
        this.control.style.border = "none";
        this.control.style.boxSizing = "content-box"
    }
    ;
    function Gi() {
        I.apply(this, arguments)
    }
    u(Gi, I);
    Gi.prototype.initData = function() {
        this.element = Ei();
        J(this.element, "header");
        this.ma = document.createElement("h2");
        this.ma.textContent = wb;
        this.element.appendChild(this.ma)
    }
    ;
    Gi.prototype.F = function() {
        M(this.ma, {
            fontSize: "14px",
            lineHeight: "18px",
            fontFamily: "UbuntuRegular, Helvetica, Arial, sans-serif",
            margin: "0 0 8px"
        })
    }
    ;
    function Hi() {
        I.apply(this, arguments)
    }
    u(Hi, I);
    Hi.prototype.initData = function() {
        this.element = Ei();
        J(this.element, "submitRow");
        this.submit = document.createElement("button");
        this.submit.type = "submit";
        this.submit.textContent = Sb;
        this.submit.disabled = !0;
        this.element.appendChild(this.submit)
    }
    ;
    Hi.prototype.F = function() {
        this.element.style.textAlign = "right";
        M(this.submit, {
            fontFamily: "UbuntuRegular, Helvetica, Arial, sans-serif",
            marginTop: "16px",
            borderStyle: "solid",
            borderWidth: "1px",
            borderRadius: "4px",
            boxSizing: "border-box",
            opacity: "0.5",
            padding: "7px"
        })
    }
    ;
    Hi.prototype.disable = function() {
        this.submit.disabled = !0;
        this.submit.style.opacity = "0.5";
        this.submit.style.cursor = "default"
    }
    ;
    Hi.prototype.enable = function() {
        this.submit.disabled = !1;
        this.submit.style.opacity = "1";
        this.submit.style.cursor = "pointer"
    }
    ;
    function Ii(a) {
        I.call(this);
        this.df = a;
        this.zf = new H("inputChange");
        this.element = Ei();
        M(this.element, {
            height: "auto",
            width: "224px",
            margin: "12px auto 16px",
            position: "relative"
        });
        a = this.df.form;
        var b = Y.Ce;
        b = mb(E("Overall, how was your %(siteName)s experience today?"), {
            siteName: b
        }, !0);
        this.jf = new li(a,"hidden","sentiment",b,!1);
        this.df.form.appendChild(this.element);
        this.element.appendChild(Ji(this, "0"));
        this.element.appendChild(Ji(this, "1"));
        this.element.appendChild(Ji(this, "2"));
        this.element.appendChild(Ji(this, "3"));
        this.element.appendChild(Ji(this, "4", !0))
    }
    u(Ii, I);
    function Ji(a, b, c) {
        c = void 0 === c ? !1 : c;
        var d = document.createElement("button");
        d.type = "button";
        J(d, "sentimentOption");
        J(d, yi(b));
        M(d, {
            height: "24px",
            width: "24px",
            padding: "4px",
            boxSizing: "content-box",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            display: "inline-block",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            marginRight: c ? "0" : "16px",
            verticalAlign: "middle"
        });
        a.zf.g(function(f) {
            f === b ? J(d, "selected") : K(d, "selected")
        });
        d.onclick = function() {
            Ki(a, b)
        }
        ;
        return d
    }
    function Ki(a, b) {
        a.jf.input.value = b;
        a.zf.h(b)
    }
    function Li(a, b) {
        I.call(this, "div", {
            control: a
        });
        this.canvas = b
    }
    u(Li, I);
    Li.prototype.initData = function(a) {
        var b = this;
        this.element = document.createElement("div");
        J(this.element, "screenshot");
        this.X = document.createElement("button");
        this.X.type = "button";
        J(this.X, "editToggle");
        this.Uc = new Image;
        this.Uc.src = "https://static-assets.highwebmedia.com/images/feedback/select.svg";
        this.X.appendChild(this.Uc);
        this.Od = document.createElement("div");
        this.Od.textContent = Wb;
        this.X.appendChild(this.Od);
        A("click", this.X, function() {
            b.canvas.show()
        });
        A("mouseenter", this.X, function() {
            b.Uc.src = "https://static-assets.highwebmedia.com/images/feedback/select_active.svg"
        });
        A("mouseleave", this.X, function() {
            b.Uc.src = "https://static-assets.highwebmedia.com/images/feedback/select.svg"
        });
        this.element.appendChild(this.X);
        this.hb = document.createElement("button");
        this.hb.type = "button";
        this.hb.onclick = function() {
            Mi(a.control)
        }
        ;
        this.element.appendChild(this.hb)
    }
    ;
    Li.prototype.F = function() {
        this.element.style.width = "100%";
        this.element.style.minHeight = "140px";
        this.element.style.maxHeight = "340px";
        this.element.style.position = "relative";
        this.element.style.backgroundSize = "contain";
        this.element.style.backgroundRepeat = "no-repeat";
        this.element.style.backgroundPosition = "center";
        this.element.style.justifyContent = "center";
        this.element.style.alignItems = "center";
        this.element.style.display = "none";
        this.X.style.width = "75%";
        this.X.style.height = "100px";
        this.X.style.boxShadow = "0px 4px 16px rgba(0, 0, 0, 0.3)";
        this.X.style.borderRadius = "4px";
        this.X.style.textAlign = "center";
        this.X.style.cursor = "pointer";
        this.X.style.fontFamily = "UbuntuMedium, Helvetica, Arial, sans-serif";
        this.Od.style.width = "100%";
        M(this.hb, {
            position: "absolute",
            right: "10px",
            top: "10px",
            height: "24px",
            width: "24px",
            padding: "4px",
            background: "transparent url(https://static-assets.highwebmedia.com/tsdefaultassets/feedback/remove-screenshot.svg) no-repeat center center",
            border: "none",
            cursor: "pointer"
        })
    }
    ;
    function Ni(a, b) {
        I.call(this, "div", {
            canvas: b
        });
        this.me = a;
        this.canvas = b;
        this.be = !1
    }
    u(Ni, I);
    Ni.prototype.initData = function(a) {
        var b = this;
        this.element = Ei();
        this.button = document.createElement("button");
        this.button.type = "button";
        this.button.textContent = Tb;
        A("click", this.button, function(c) {
            c.preventDefault();
            Oi(b)
        });
        this.element.appendChild(this.button);
        this.i = new Li(this,a.canvas);
        this.K(this.i, this.element);
        this.info = document.createElement("div");
        this.info.style.display = "none";
        this.element.appendChild(this.info);
        this.error = document.createElement("span");
        this.element.appendChild(this.error)
    }
    ;
    Ni.prototype.F = function() {
        this.element.style.width = "306px";
        this.element.style.textAlign = "center";
        this.element.style.marginBottom = "8px";
        J(this.element, "screenShotControl");
        J(this.button, "sscButton");
        M(this.button, {
            fontFamily: "UbuntuRegular, Arial, Helvetica, sans-serif",
            border: "none",
            boxSizing: "border-box",
            display: "block",
            cursor: "pointer",
            textDecoration: "underline",
            padding: "0",
            marginBottom: "16px"
        });
        J(this.error, "error");
        J(this.info, "info");
        this.info.style.margin = "8px 0 10px"
    }
    ;
    function Oi(a) {
        if (Pi(a.canvas) && (Mi(a),
        Qi(a.canvas),
        a.error.textContent = "",
        void 0 !== a.canvas.i)) {
            var b = a.canvas.i.getContext("2d");
            if (null !== b) {
                a.be = !0;
                a.me.j();
                var c = !1
                  , d = document.createElement("video");
                d.style.display = "none";
                a.canvas.element.appendChild(d);
                a.canvas.getDisplayMedia().then(function(f) {
                    d.srcObject = f;
                    a.aj = f;
                    d.play();
                    A("canplay", d, function() {
                        c || (c = !0,
                        window.setTimeout(function() {
                            var g = window.innerWidth
                              , h = window.innerHeight
                              , k = d.videoWidth / d.videoHeight;
                            h * k < g ? g = h * k : h = g / k;
                            Ri(a.canvas, g, h);
                            b.drawImage(d, 0, 0, g, h);
                            a.i.element.style.backgroundImage = 'url("' + b.canvas.toDataURL("image/png") + '")';
                            a.i.element.style.height = h / g * 306 + "px";
                            a.i.element.style.display = "flex";
                            a.info.style.display = "block";
                            a.button.style.display = "none";
                            d.pause();
                            a.aj.getTracks().forEach(function(l) {
                                l.stop()
                            });
                            a.canvas.element.removeChild(d);
                            a.me.show();
                            window.setTimeout(function() {
                                a.be = !1
                            }, 1E3)
                        }, 250))
                    }, !1)
                }).catch(function(f) {
                    a.me.show();
                    a.error.textContent = "NotAllowedError" === f.name ? $b : ac;
                    a.canvas.element.removeChild(d);
                    Mi(a)
                })
            }
        }
    }
    function Mi(a) {
        Pi(a.canvas) && (a.i.element.style.backgroundImage = "",
        a.i.element.style.display = "none",
        a.button.textContent = Tb,
        a.info.style.display = "none",
        a.button.style.display = "block",
        Si(a.canvas),
        a.canvas.j())
    }
    function Ti(a, b) {
        I.call(this);
        this.canvas = b;
        this.Vc = [];
        Pi(this.canvas) && (this.i = new Ni(a,this.canvas),
        Ui(this),
        this.Vc.push(this.i.error));
        this.Vc.push(this.Eb);
        this.Vc.push(this.J.error);
        this.ba = new Hi;
        this.element.appendChild(this.form);
        this.form.appendChild(this.Eb);
        Pi(this.canvas) && this.K(this.i, this.form);
        this.form.appendChild(this.Ob);
        this.form.appendChild(this.kc);
        this.form.appendChild(this.url);
        this.form.appendChild(this.source);
        this.K(this.ba, this.form)
    }
    u(Ti, I);
    Ti.prototype.initData = function() {
        function a() {
            window.setTimeout(function() {
                "" === b.J.input.value.trim() ? b.ba.disable() : b.ba.enable()
            }, 200)
        }
        var b = this;
        this.element = Ei();
        this.form = document.createElement("form");
        this.form.action = "/feedback/submit/";
        this.form.method = "POST";
        this.Eb = document.createElement("p");
        this.Fc = new Ii(this);
        this.J = new li(this.form,"textarea","comments",Qb);
        J(this.J.input, "feedbackComment");
        this.J.input.style.boxSizing = "border-box";
        this.J.input.maxLength = 5E3;
        A("keyup", this.J.input, a);
        A("touchend", this.J.input, a);
        A("paste", this.J.input, a);
        A("cut", this.J.input, a);
        this.Ob = document.createElement("p");
        J(this.Ob, "privacyNotice");
        this.Ob.textContent = Rb.replace("%SITE_NAME%", Y.Ce);
        this.kc = document.createElement("input");
        this.kc.type = "hidden";
        this.kc.name = "csrfmiddlewaretoken";
        this.kc.value = Ba("csrftoken");
        this.url = document.createElement("input");
        this.url.type = "hidden";
        this.url.name = "url";
        this.url.value = document.location.href.substr(0, 255);
        this.source = document.createElement("input");
        this.source.type = "hidden";
        this.source.name = "source";
        this.source.value = ""
    }
    ;
    Ti.prototype.F = function() {
        var a = this;
        this.Eb.style.color = "red";
        M(this.J.input, {
            width: "306px",
            resize: "none",
            minHeight: "72px",
            boxSizing: "border-box",
            marginBottom: "8px"
        });
        J(this.J.error, "error");
        this.J.error.style.marginBottom = "20px";
        J(this.Ob, "notice");
        this.Ob.style.fontSize = "10.5px";
        this.Ob.style.lineHeight = "14px";
        A("submit", this.form, function(b) {
            b.preventDefault();
            a.J.input.blur();
            Vi(a);
            var c = new FormData;
            c.append("sentiment", a.Fc.jf.input.value);
            c.append("comments", a.J.input.value);
            c.append("url", document.location.href.substr(0, 255));
            c.append("source", a.source.value);
            c.append("csrfmiddlewaretoken", Ba("csrftoken"));
            void 0 !== a.canvas.i ? a.canvas.i.toBlob(function(d) {
                null !== d && c.append("screenshot", d, "screenshot.png");
                Wi(a, c)
            }) : Wi(a, c)
        })
    }
    ;
    function Xi(a) {
        return Pi(a.canvas) && "none" !== a.i.button.style.display
    }
    function Ui(a) {
        Xi(a) && (a.i.info.textContent = "footer" === a.source.value ? Vb : Ub)
    }
    function Vi(a) {
        a.Vc.forEach(function(b) {
            b.textContent = ""
        })
    }
    function Yi(a) {
        for (; null !== a.element.firstChild; )
            a.element.removeChild(a.element.firstChild);
        a.element.appendChild(a.form);
        a.J.input.focus()
    }
    function Wi(a, b) {
        a.ba.disable();
        v(a.form.action, b).then(function(c) {
            c = c.getResponseHeader("content-type");
            null !== c && c.includes("text/html") ? (a.Eb.textContent = fc,
            a.ba.enable()) : (Yi(a),
            Vi(a),
            a.J.input.value = "",
            Ki(a.Fc, ""),
            a.ba.disable(),
            a.form.reset(),
            Pi(a.canvas) && Mi(a.i),
            a.element.removeChild(a.form),
            c = document.createElement("p"),
            c.textContent = cc,
            a.element.appendChild(c))
        }).catch(function(c) {
            if (429 === c.ng.status)
                a.Eb.textContent = ec,
                a.ba.enable();
            else
                try {
                    var d = JSON.parse(c.ng.response);
                    void 0 !== d.Ug && (a.J.error.textContent = d.Ug);
                    a.ba.enable()
                } catch (f) {
                    a.Eb.textContent = dc,
                    a.ba.enable()
                }
        })
    }
    function Zi(a) {
        I.call(this, "div", {
            canvas: a
        });
        this.canvas = a;
        J(this.element, "drawControls")
    }
    u(Zi, I);
    Zi.prototype.initData = function(a) {
        var b = this;
        this.element = Ei();
        this.element.tabIndex = -1;
        this.Tc = document.createElement("div");
        this.Tc.style.background = "url(https://static-assets.highwebmedia.com/images/feedback/drag.svg) no-repeat center";
        this.element.appendChild(this.Tc);
        this.na = document.createElement("button");
        this.na.type = "button";
        J(this.na, "highlight");
        this.Yd = new Image;
        this.Yd.src = "https://static-assets.highwebmedia.com/images/feedback/highlight_issue.svg";
        this.na.appendChild(this.Yd);
        this.Zd = document.createElement("span");
        this.Zd.textContent = Yb;
        this.na.appendChild(this.Zd);
        A("click", this.na, function() {
            $i(b.canvas)
        });
        this.element.appendChild(this.na);
        this.j = document.createElement("button");
        this.j.type = "button";
        this.Wd = document.createElement("div");
        this.j.appendChild(this.Wd);
        this.Xd = document.createElement("span");
        this.Xd.textContent = Zb;
        this.j.appendChild(this.Xd);
        J(this.j, "highlight");
        A("click", this.j, function() {
            var c = b.canvas;
            aj(c);
            bj(c);
            if (void 0 !== c.o) {
                var d = c.o.getContext("2d");
                null !== d && (J(c.controls.j, "active"),
                d.globalAlpha = 1,
                d.strokeStyle = "rgb(0, 0, 0)",
                d.lineWidth = 5,
                c.fillRect = !0,
                cj(c))
            }
        });
        this.element.appendChild(this.j);
        this.Ah = document.createElement("hr");
        this.element.appendChild(this.Ah);
        this.done = document.createElement("a");
        J(this.done, "done");
        this.done.style.textDecoration = "none";
        A("click", this.done, function(c) {
            c.preventDefault();
            dj(b);
            b.canvas.j()
        });
        this.element.appendChild(this.done);
        ki(this.element, [this.Tc]);
        A("keydown", a.canvas.element, function(c) {
            c.stopPropagation();
            27 === c.keyCode && "block" === b.element.style.display && (c.stopImmediatePropagation(),
            dj(b),
            b.canvas.j())
        })
    }
    ;
    function dj(a) {
        void 0 !== a.canvas.i && void 0 !== a.i && (a.i.element.style.backgroundImage = 'url("' + a.canvas.i.toDataURL("image/png") + '")')
    }
    Zi.prototype.F = function() {
        M(this.element, {
            borderRadius: "4px",
            padding: "10px 15px 5px 15px",
            position: "fixed",
            zIndex: 2010,
            textAlign: "right",
            width: "115px",
            height: "101px",
            fontFamily: "UbuntuMedium, Helvetica, Arial, sans-serif",
            userSelect: "none",
            boxShadow: "10px 10px 25px -5px rgba(0,0,0,0.75)"
        });
        M(this.Tc, {
            width: "20px",
            height: "10px",
            position: "absolute",
            right: "0",
            top: "5px"
        });
        J(this.na, "highlight");
        M(this.na, {
            border: "0",
            display: "inline-block",
            padding: "5px",
            position: "relative",
            margin: "7px 0 0 0",
            left: "-15px",
            width: "145px",
            textAlign: "left",
            cursor: "pointer",
            fontFamily: "UbuntuMedium, Helvetica, Arial, sans-serif"
        });
        M(this.Yd, {
            width: "23px",
            verticalAlign: "middle",
            marginRight: "10px"
        });
        this.Zd.style.verticalAlign = "middle";
        J(this.j, "highlight");
        M(this.j, {
            border: "0",
            display: "inline-block",
            padding: "5px",
            position: "relative",
            margin: "0",
            left: "-15px",
            width: "145px",
            textAlign: "left",
            cursor: "pointer",
            fontFamily: "UbuntuMedium, Helvetica, Arial, sans-serif"
        });
        J(this.Wd, "hideImage");
        M(this.Wd, {
            width: "20px",
            verticalAlign: "middle",
            marginRight: "10px",
            height: "20px",
            display: "inline-block"
        });
        this.Xd.style.verticalAlign = "middle";
        M(this.done, {
            padding: "4px",
            cursor: "pointer",
            textAlign: "right"
        });
        this.done.textContent = gc
    }
    ;
    function ej() {
        I.call(this);
        this.fillRect = !1;
        this.Mb = navigator.mediaDevices;
        if (void 0 === this.Mb || void 0 === this.Mb.getDisplayMedia)
            this.Mb = void 0;
        void 0 === document.createElement("canvas").toBlob && (this.Mb = void 0);
        this.controls = new Zi(this);
        this.K(this.controls, this.element)
    }
    u(ej, I);
    e = ej.prototype;
    e.initData = function() {
        var a = this;
        this.element = Ei();
        this.Gb = Ei(this.element);
        this.Gb.innerHTML = Xb + ' (<a href="#" onclick="this.parentNode.style.display=\'none\';">' + Ab + "</a>)";
        A("click", this.Gb, function() {
            var b;
            null === (b = a.o) || void 0 === b ? void 0 : b.focus()
        });
        this.Gb.style.userSelect = "none"
    }
    ;
    e.F = function() {
        J(this.element, "canvas");
        M(this.element, {
            display: "none",
            position: "absolute",
            height: "100%",
            width: "100%"
        });
        J(this.Gb, "infoToolTip");
        M(this.Gb, {
            position: "fixed",
            backgroundColor: "#FFFFD3",
            borderWidth: "1px",
            borderStyle: "solid",
            boxSizing: "border-box",
            zIndex: 2020,
            top: "100px",
            left: "0",
            right: "0",
            margin: "0 auto",
            padding: "12px",
            fontWeight: "bold",
            width: "500px",
            textAlign: "center",
            fontFamily: "UbuntuMedium, Helvetica, Arial, sans-serif",
            fontSize: "1.3em"
        })
    }
    ;
    function Pi(a) {
        return void 0 !== a.Mb && !Va()
    }
    e.getDisplayMedia = function() {
        if (!Pi(this))
            throw new ReferenceError("Display media not supported by browser");
        return this.Mb.getDisplayMedia({
            video: {
                xj: "browser",
                cursor: !1
            },
            audio: !1
        })
    }
    ;
    function Qi(a) {
        Si(a);
        a.i = document.createElement("canvas");
        M(a.i, {
            zIndex: 2E3,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            margin: "0px auto",
            position: "fixed"
        });
        a.j();
        a.element.appendChild(a.i)
    }
    function Si(a) {
        fj(a);
        void 0 !== a.i && (a.element.removeChild(a.i),
        a.i = void 0)
    }
    function Ri(a, b, c) {
        void 0 !== a.i && (a.i.width = b,
        a.i.height = c,
        a.i.style.width = b + "px",
        a.i.style.height = c + "px")
    }
    function bj(a) {
        void 0 !== a.i && (void 0 !== a.o && (a.element.removeChild(a.o),
        a.o = void 0),
        a.o = a.i.cloneNode(),
        a.o.style.zIndex = "2001",
        a.o.tabIndex = 0,
        a.element.appendChild(a.o),
        gj(a))
    }
    function fj(a) {
        void 0 !== a.o && (a.element.removeChild(a.o),
        a.o = void 0)
    }
    e.j = function() {
        this.element.style.display = "none";
        fj(this);
        aj(this);
        window.top !== window && (window.top.document.body.style.display = "");
        document.body.style.overflow = "";
        Ci.h(void 0)
    }
    ;
    e.show = function() {
        this.element.style.display = "block";
        this.controls.element.style.left = "75px";
        this.controls.element.style.bottom = "30px";
        this.Gb.style.display = "block";
        window.top !== window && (window.top.document.body.style.display = "none");
        document.body.style.overflow = "hidden";
        bj(this);
        $i(this);
        void 0 !== this.o && this.o.focus();
        Bi.h(void 0)
    }
    ;
    function gj(a) {
        if (void 0 !== a.o) {
            var b = a.o.getContext("2d");
            if (null !== b) {
                var c = a.i
                  , d = a.o;
                if (void 0 !== c && void 0 !== d) {
                    var f = d.getContext("2d");
                    if (null !== f) {
                        var g = f.globalAlpha;
                        f.globalAlpha = 1;
                        f.clearRect(0, 0, d.width, d.height);
                        f.drawImage(c, 0, 0);
                        f.globalAlpha = g
                    }
                }
                c = b.globalAlpha;
                d = b.strokeStyle;
                b.globalAlpha = .1;
                b.strokeStyle = "rgb(0, 0, 0)";
                b.fillRect(0, 0, a.o.width, a.o.height);
                b.globalAlpha = c;
                b.strokeStyle = d
            }
        }
    }
    function aj(a) {
        a.controls.j.style.backgroundColor = "transparent";
        a.controls.j.classList.toggle("active", !1);
        a.controls.na.style.backgroundColor = "transparent";
        a.controls.na.classList.toggle("active", !1);
        void 0 !== a.o && (void 0 !== a.Qa && (C("mousedown", a.o, a.Qa.Ze),
        C("mouseup", window, a.Qa.hg),
        C("mousemove", window, a.Qa.move),
        a.Qa = void 0),
        a.o.style.cursor = "default")
    }
    function $i(a) {
        aj(a);
        bj(a);
        if (void 0 !== a.o) {
            var b = a.o.getContext("2d");
            null !== b && (J(a.controls.na, "active"),
            b.globalAlpha = .8,
            b.strokeStyle = "rgb(249, 185, 144)",
            b.lineWidth = 5,
            a.fillRect = !1,
            cj(a))
        }
    }
    function cj(a) {
        if (void 0 !== a.o) {
            a.o.style.cursor = "crosshair";
            var b = a.o.getContext("2d");
            if (null !== b) {
                var c = 0
                  , d = 0
                  , f = 0
                  , g = 0
                  , h = 0
                  , k = 0
                  , l = !1
                  , m = function() {
                    k = h = d = c = 0;
                    l = !1
                };
                a.Qa = {
                    Ze: function(n) {
                        l && (hj(a, c, d, h, k, b),
                        m());
                        var r = a.o.getBoundingClientRect();
                        c = n.clientX - r.left;
                        d = n.clientY - r.top;
                        l = !0;
                        b.canvas.style.cursor = "crosshair"
                    },
                    hg: function() {
                        l && (hj(a, c, d, h, k, b),
                        m())
                    },
                    move: function(n) {
                        if (l) {
                            var r = a.o.getBoundingClientRect();
                            f = n.clientX - r.left;
                            g = n.clientY - r.top;
                            gj(a);
                            h = f - c;
                            k = g - d;
                            n = c;
                            r = d;
                            var w = h
                              , z = k;
                            b.beginPath();
                            b.rect(n, r, w, z);
                            a.fillRect ? b.fill() : b.stroke()
                        }
                    }
                };
                A("mousedown", a.o, a.Qa.Ze);
                A("mouseup", window, a.Qa.hg);
                A("mousemove", window, a.Qa.move)
            }
        }
    }
    function hj(a, b, c, d, f, g) {
        if (void 0 !== a.i) {
            a.i.style.cursor = "crosshair";
            var h = a.i.getContext("2d");
            null !== h && (h.globalAlpha = g.globalAlpha,
            h.strokeStyle = g.strokeStyle,
            h.lineWidth = g.lineWidth,
            h.beginPath(),
            h.rect(b, c, d, f),
            a.fillRect ? h.fill() : h.stroke())
        }
    }
    function ij() {
        U.call(this, {
            rb: function() {
                a.rb()
            },
            Pb: function() {
                a.Pb()
            },
            Cb: !0
        });
        var a = this;
        this.isVisible = !1;
        this.re = this.Uf = !0;
        this.element.classList.add("block_CB1_chat_focus");
        J(this.m, "overlayOpacity");
        J(this.element, "userFeedbackForm");
        J(this.element, "defaultColor");
        Bi.g(function() {
            a.element.style.display = "none"
        });
        Ci.g(function() {
            a.element.style.display = "block"
        })
    }
    u(ij, U);
    ij.prototype.initData = function() {
        function a() {
            return c.form.ba.submit.disabled ? c.close.control : c.form.ba.submit
        }
        function b(d, f) {
            return function(g) {
                "Tab" === g.key && (g.preventDefault(),
                g.shiftKey ? (f instanceof HTMLElement ? f : f()).focus() : (d instanceof HTMLElement ? d : d()).focus())
            }
        }
        var c = this;
        this.canvas = new ej;
        Pi(this.canvas) && document.body.appendChild(this.canvas.element);
        this.ae = Ei(this.element);
        this.close = new Fi;
        A("click", this.close.control, function() {
            c.j()
        });
        this.K(this.close, this.ae);
        this.ma = new Gi;
        this.K(this.ma, this.ae);
        this.form = new Ti(this,this.canvas);
        Pi(this.canvas) && (this.canvas.controls.i = this.form.i.i);
        this.K(this.form, this.ae);
        this.element.querySelectorAll(".sentimentOption").forEach(function(d) {
            A("keydown", d, b(c.form.J.input, c.close.control))
        });
        A("keydown", this.form.J.input, b(function() {
            return Xi(c.form) ? c.form.i.button : a()
        }, this.close.control));
        Xi(this.form) && A("keydown", this.form.i.button, b(a, this.form.J.input));
        A("keydown", this.form.ba.submit, b(this.close.control, this.form.J.input));
        A("keydown", this.close.control, b(this.form.J.input, function() {
            return c.form.ba.submit.disabled ? c.form.J.input : c.form.ba.submit
        }))
    }
    ;
    ij.prototype.F = function() {
        var a = this;
        M(this.element, {
            position: "fixed",
            top: "150px",
            fontSize: "12px",
            left: "50%",
            marginLeft: "-157px",
            width: "310px",
            height: "auto",
            border: "4px",
            borderRadius: "4px",
            padding: "15px",
            fontFamily: "UbuntuRegular, Helvetica, Arial, sans-serif"
        });
        Pi(this.canvas) && A("resize", window, function() {
            a.form.i.be || void 0 === a.canvas.i || (Mi(a.form.i),
            a.form.i.error.textContent = bc)
        })
    }
    ;
    ij.prototype.rb = function() {
        this.form.kc.value = Ba("csrftoken");
        this.form.url.value = document.location.href.substr(0, 255);
        this.element.style.display = "";
        this.v();
        this.isVisible = !0;
        A("keydown", this.element, zi);
        A("keydown", document.body, Ai);
        Yi(this.form)
    }
    ;
    ij.prototype.Pb = function() {
        var a = this.isVisible;
        this.element.style.display = "none";
        this.isVisible = !1;
        a && (C("keydown", this.element, zi),
        C("keydown", document.body, Ai));
        try {
            window.dispatchEvent(new Event("resize"))
        } catch (b) {
            -1 !== navigator.userAgent.indexOf("MSIE") || 0 < navigator.appVersion.indexOf("Trident/") ? (a = document.createEvent("UIEvents"),
            a.initUIEvent("resize", !0, !1, window, 0),
            window.dispatchEvent(a)) : x("Could not fire resize event")
        }
        this.canvas.j()
    }
    ;
    function jj() {
        sg.call(this);
        this.ob = !1;
        this.fd = 0;
        this.element.id = "UserUpdatesPanel";
        J(this.element, "userUpdatesPanel");
        this.ja.element.style.borderBottom = "none";
        this.ja.element.style.padding = "4px 0 0 6px";
        this.ja.element.style.marginBottom = "4px";
        this.ja.element.style.boxSizing = "border-box";
        this.window.style.position = "static";
        this.Ma = Object.assign(Object.assign({}, this.Ma), {
            fontSize: "12px",
            padding: "5px 10px"
        });
        var a = this.xd;
        a.element.style.width = "100%";
        a.element.style.height = "100%";
        a.element.style.display = "none";
        I.prototype.K.call(this, a, this.window);
        var b = xg(a);
        this.ja.K(b);
        vg(a);
        J(b, "tab");
        J(b, "chatAreaTabColor");
        this.Nd = this.xd;
        ug(this);
        this.Le()
    }
    u(jj, sg);
    e = jj.prototype;
    e.Le = function() {
        var a = kj(!1);
        this.element.appendChild(a)
    }
    ;
    e.v = function() {}
    ;
    e.lf = function(a) {
        return this.gh = new lj(this,a)
    }
    ;
    e.F = function() {
        this.element.style.overflow = "";
        this.element.style.position = "static";
        this.element.style.borderWidth = "1px";
        this.element.style.borderStyle = "solid";
        this.element.style.borderTop = "none";
        this.element.style.borderRadius = "0 0 4px 4px"
    }
    ;
    e.initData = function() {
        this.xd = new Ph
    }
    ;
    function mj() {
        jj.call(this);
        for (var a = 1; a < this.element.children.length - 1; a += 1)
            this.element.children[a].style.height = "calc(100% - 60px)"
    }
    u(mj, jj);
    mj.prototype.Le = function() {
        var a = kj(!0);
        this.element.appendChild(a)
    }
    ;
    mj.prototype.lf = function(a) {
        return new nj(this,a)
    }
    ;
    mj.prototype.F = function() {
        jj.prototype.F.call(this);
        this.element.style.borderRight = "0"
    }
    ;
    mj.prototype.initData = function() {
        this.xd = new Uh
    }
    ;
    function kj(a) {
        var b = document.createElement("A");
        J(b, "feedbackLink");
        b.innerText = Ob;
        b.style.fontSize = "11px";
        b.style.textAlign = "center";
        b.style.width = "100%";
        b.style.display = "block";
        b.style.padding = "5px 0";
        b.style.marginBottom = "7px";
        a ? (b.href = Yh.Ie,
        b.target = "_blank") : (b.href = "#",
        b.onclick = function() {
            Di.h({
                source: "site_updates"
            })
        }
        );
        return b
    }
    function oj(a, b) {
        var c, d, f = null === (c = W.current.S) || void 0 === c ? void 0 : c.username;
        c = null === (d = W.current.S) || void 0 === d ? void 0 : d.ac;
        (new Lh).Ba.g(function(g) {
            a.fd < g.timestamp && (b.classList.add("has_unseen"),
            Jg.h(!0))
        });
        void 0 !== c && (new Nh(c)).Ba.g(function(g) {
            a.fd < g.timestamp && (a.fd = g.timestamp,
            Ig.h(void 0))
        });
        !0 !== W.current.Af && gi.g(function(g) {
            0 === g.ek && g.Uk === f && (b.classList.add("has_unseen"),
            g = a.xd,
            g.removeChild(g.Ra),
            g.Ra = new Eg,
            g.K(g.Ra),
            g.ee = !1,
            g.ob && Qh(g))
        })
    }
    function lj(a, b) {
        Q.call(this, b);
        var c = this;
        this.sb = a;
        this.element.appendChild(this.sb.element);
        this.Na.g(function(d) {
            c.sb.ob !== d.pa && (c.sb.ob = d.pa,
            Hg.h(d.pa),
            b.classList.toggle("active", d.pa))
        });
        Ig.g(function() {
            b.className = b.className.replace("has_unseen", "");
            Jg.h(!1)
        });
        oj(a, b)
    }
    u(lj, Q);
    lj.prototype.F = function() {
        Q.prototype.F.call(this);
        this.element.style.maxHeight = "368px";
        this.element.style.height = "";
        this.element.style.width = "100%";
        this.element.style.zIndex = "1001";
        this.element.style.backgroundColor = "transparent";
        this.element.style.fontFamily = "UbuntuBold, Helvetica, Arial, sans-serif";
        this.element.style.left = "-1px";
        this.element.style.top = "24px"
    }
    ;
    function nj(a, b) {
        Q.call(this, b);
        var c = this;
        this.sb = a;
        this.element.appendChild(this.sb.element);
        this.Na.g(function(d) {
            c.sb.ob !== d.pa && (c.sb.ob = d.pa,
            Hg.h(d.pa),
            b.classList.toggle("active", d.pa))
        });
        Ig.g(function() {
            b.className = b.className.replace("has_unseen", "");
            Jg.h(!1)
        });
        oj(a, b)
    }
    u(nj, zd);
    nj.prototype.F = function() {
        zd.prototype.F.call(this);
        this.element.style.maxHeight = "";
        this.element.style.width = "100%";
        this.element.style.zIndex = "1001";
        this.element.style.backgroundColor = "#FFFFFF";
        this.element.style.fontFamily = "UbuntuBold, Helvetica, Arial, sans-serif";
        this.element.style.left = "-1px";
        this.element.style.top = "0";
        this.element.style.height = "calc(100% - 46px)";
        this.element.style.top = "46px"
    }
    ;
    function pj(a, b, c) {
        Q.call(this, a);
        var d = this;
        this.username = b;
        this.Hd = c;
        this.element.id = "UserMenuDropDown";
        J(this.element, "userMenuDropDown");
        J(this.element, "userInfoDropdownBgColor");
        this.element.style.display = "none";
        this.element.style.width = "100%";
        this.element.style.height = "auto";
        this.element.style.boxSizing = "border-box";
        this.element.style.top = "24px";
        this.element.style.zIndex = "1001";
        this.element.style.borderRadius = "0 0 5px 5px";
        this.element.style.borderStyle = "solid";
        this.element.style.borderWidth = "1px";
        this.element.style.borderTop = "none";
        this.element.style.fontFamily = "UbuntuBold, Helvetica, Arial, sans-serif";
        this.element.style.padding = "5px 0";
        this.element.style.position = "absolute";
        Y.uc || qj(this);
        if ("" !== b) {
            this.se = rj(this, sb);
            this.element.appendChild(this.se);
            this.Mf = rj(this, ob);
            this.Mf.href = "/my_collection/";
            this.element.appendChild(this.Mf);
            void 0 !== window.live_chat_support && (a = rj(this, tb),
            a.href = "/accounts/support_chat/",
            a.onclick = function(h) {
                h.preventDefault();
                ee("/accounts/support_chat/", "support_chat", "height=630,width=375,resizable=0,location=0")
            }
            ,
            this.element.appendChild(a));
            var f = document.createElement("form");
            f.method = "post";
            f.action = "/auth/logout/";
            f.target = "_top";
            f.style.display = "none";
            var g = document.createElement("input");
            g.type = "hidden";
            g.name = "csrfmiddlewaretoken";
            g.value = Ba("csrftoken");
            f.appendChild(g);
            this.element.appendChild(f);
            a = rj(this, wb);
            a.style.cursor = "pointer";
            a.onclick = function(h) {
                h.preventDefault();
                d.l();
                Di.h({
                    source: "user_menu"
                })
            }
            ;
            this.element.appendChild(a);
            a = rj(this, ub);
            a.href = "/auth/logout/";
            a.onclick = function(h) {
                h.preventDefault();
                d.l();
                Qf(vb, function() {
                    g.value = Ba("csrftoken");
                    f.submit()
                })
            }
            ;
            this.element.appendChild(a);
            void 0 !== b && void 0 !== this.se && (this.se.href = "/p/" + b + "/?tab=bio")
        } else
            b = rj(this, pb),
            b.classList.add("login-link"),
            b.href = "/auth/login",
            this.element.appendChild(b),
            b = rj(this, qb),
            b.href = "/accounts/register/?src=header",
            this.element.appendChild(b),
            b = rj(this, wb),
            b.style.cursor = "pointer",
            b.href = "#",
            b.onclick = function(h) {
                h.preventDefault();
                d.l();
                Di.h({
                    source: "user_menu"
                })
            }
            ,
            this.element.appendChild(b)
    }
    u(pj, Q);
    function qj(a) {
        if (void 0 !== a.Hd) {
            a.nb = document.body.classList.contains("darkmode");
            var b = sj(a);
            a.element.insertBefore(b, a.element.firstChild);
            !document.body.classList.contains("isIpad") && Ra() && document.body.classList.add("isIpad")
        }
    }
    function sj(a) {
        var b = document.createElement("div")
          , c = document.createElement("span");
        a.ib = document.createElement("span");
        b.innerText = mc;
        c.appendChild(a.ib);
        b.appendChild(c);
        J(a.ib, "dmSwitchCircle");
        M(a.ib, {
            borderRadius: "50%",
            display: "inline-block",
            height: "16px",
            width: "16px",
            position: "relative",
            top: "2px",
            left: "3px"
        });
        M(c, {
            borderRadius: "25px",
            display: "inline-block",
            height: "20px",
            marginLeft: "10px",
            position: "relative",
            verticalAlign: "bottom",
            width: "44px",
            cssFloat: "right",
            right: "6px",
            top: "-2px"
        });
        J(c, "dmSwitch");
        b.style.userSelect = "none";
        b.style.webkitUserSelect = "none";
        b.style.msUserSelect = "none";
        void 0 !== b.style.setProperty && b.style.setProperty("moz-user-select", "none");
        mi(a.ib);
        J(b, "userInfoDropdownTextColor");
        J(b, "userInfoDropdownHighlightColor");
        b.style.fontFamily = "UbuntuMedium, Arial, Helvetica, sans-serif";
        b.style.fontSize = "14px";
        b.style.fontWeight = "normal";
        b.style.padding = "5px 0 5px 10px";
        b.style.cursor = "pointer";
        b.onclick = function() {
            tj(a);
            void 0 !== document.changeColorMode && document.changeColorMode()
        }
        ;
        Sd.g(function() {
            tj(a)
        });
        a.nb && (a.ib.style.left = "25px");
        return b
    }
    function tj(a) {
        Y.uc || (a.nb ? (a.ib.style.left = "3px",
        a.nb = !1,
        K(document.body, "darkmode"),
        J(document.body, "lightmode"),
        Ca("theme_name", "lightmode", 5184E3)) : (a.ib.style.left = "25px",
        a.nb = !0,
        K(document.body, "lightmode"),
        J(document.body, "darkmode"),
        Ca("theme_name", "darkmode", 5184E3)),
        Y.uc && (a.element.style.backgroundColor = Y.lg,
        a.element.style.border = "1px solid " + Y.td),
        D("colorModeChanged", {
            username: void 0 === a.username ? "__anon__" : a.username,
            color_mode: a.nb ? "darkmode" : "lightmode"
        }),
        Rd.h(a.nb ? "darkmode" : "lightmode"),
        Rf() || v("api/ts/accounts/userpreferredtheme/", {
            theme: a.nb ? "darkmode" : "lightmode"
        }))
    }
    function rj(a, b) {
        var c = document.createElement("a");
        c.style.textDecoration = "none";
        c.innerText = b;
        c.style.display = "block";
        c.style.fontSize = "14px";
        c.style.padding = "5px 0 5px 10px";
        J(c, "userInfoDropdownTextColor");
        J(c, "userInfoDropdownHighlightColor");
        c.onclick = function() {
            a.l()
        }
        ;
        return c
    }
    pj.prototype.u = function() {
        return Q.prototype.u.call(this)
    }
    ;
    pj.prototype.l = function() {
        return Q.prototype.l.call(this)
    }
    ;
    function uj(a, b, c) {
        var d = document.querySelector("#userInfoPanelMenuDropdownRoot")
          , f = document.querySelector("#user_information_profile_container")
          , g = document.querySelector("#userUpdatesBellRoot")
          , h = document.querySelector("#userUpdatesMenuDropdownRoot")
          , k = document.querySelector("#mmnav");
        b = void 0 === b ? !1 : b;
        var l;
        null !== d && null !== f && (a = new pj(f,a,c),
        d.appendChild(a.element),
        Lc(a));
        if (!Y.uc && null !== g && null !== h) {
            0 <= g.className.indexOf("has_unseen") && Jg.h(!0);
            if (b) {
                var m = new mj;
                b = null === (l = W.current.S) || void 0 === l ? void 0 : l.ac;
                void 0 !== k && null !== k && (void 0 !== b && (new Nh(b)).Ba.g(function(n) {
                    m.fd < n.timestamp && 0 > k.className.indexOf("has_unseen") && (k.className = [k.className, "has_unseen"].join(" "))
                }),
                Ig.g(function() {
                    k.className = k.className.replace("has_unseen", "")
                }))
            } else
                m = new jj;
            g = m.lf(g);
            h.appendChild(g.element)
        }
    }
    ;function vj(a, b) {
        A("mouseover", a, function() {
            var c, d = 0, f = a.getBoundingClientRect(), g = a.getBoundingClientRect(), h = Math.round(f.top + window.pageYOffset);
            f = Math.round(f.left + window.pageXOffset);
            300 > window.innerHeight - h + window.pageYOffset && (d = 258);
            var k = null === (c = a.nextElementSibling) || void 0 === c ? void 0 : c.cloneNode(!0);
            void 0 !== k && (k.style.display = "",
            c = b.firstChild,
            null !== c ? b.replaceChild(k, c) : b.appendChild(k),
            b.style.display = "");
            c = b.getBoundingClientRect();
            b.style.left = f + g.width / 2 - c.width / 2 + "px";
            b.style.top = h + g.height + 8 - d + "px"
        });
        A("mouseleave", a, function() {
            b.style.display = "none"
        })
    }
    function wj() {
        var a = document.querySelector("#tag_tip")
          , b = document.querySelectorAll(".room_link[data-roomlink='true']");
        if (null !== a) {
            b = t(b);
            for (var c = b.next(); !c.done; c = b.next())
                vj(c.value, a)
        }
    }
    ;function xj(a, b, c) {
        c = void 0 === c ? !1 : c;
        I.call(this, a);
        var d = this;
        this.Di = b;
        this.De = c;
        this.element.classList.add("sortable");
        this.Wb = F("div", {
            className: "sortable-arrow"
        });
        this.element.appendChild(this.Wb);
        yj(this, this.De);
        this.element.onclick = function() {
            zj.h({
                Wc: d.Di,
                Me: d.De
            })
        }
    }
    u(xj, I);
    function yj(a, b) {
        b = void 0 === b ? !1 : b;
        (a.De = b) ? (a.Wb.classList.remove("descending"),
        a.Wb.classList.add("ascending")) : (a.Wb.classList.remove("ascending"),
        a.Wb.classList.add("descending"))
    }
    xj.prototype.setActive = function() {
        this.Wb.classList.add("active")
    }
    ;
    var Aj = {
        ht: "hashtag",
        vc: "viewers",
        rc: "rooms"
    }
      , zj = new H("updateTagTableEvent");
    function Bj(a) {
        I.call(this, a);
        this.Lc = "";
        this.Mc = !1;
        this.Ee = new Map;
        var b = fb();
        a = b.sort;
        b = b.page;
        void 0 !== a && (this.Lc = (this.Mc = !a.startsWith("-")) ? a : a.slice(1));
        Cj(this);
        Dj(this, b);
        Ej(this)
    }
    u(Bj, I);
    function Cj(a) {
        var b = a.element.querySelectorAll("div.headers span");
        a.Ee = new Map;
        b.forEach(function(c) {
            var d = c.getAttribute("data-param");
            null !== d && (c = new xj(c,d),
            a.Ee.set(d, c))
        });
        Ej(a)
    }
    function Dj(a, b) {
        zj.g(function(c) {
            return xi(a, function f() {
                var g = this, h, k, l, m, n, r;
                return ta(f, function(w) {
                    if (1 == w.Nb) {
                        k = (h = g.Lc === c.Wc) && !c.Me;
                        l = h && c.Me;
                        m = {};
                        n = "";
                        l || (n = (k ? "" : "-") + c.Wc,
                        m = {
                            sort: n
                        });
                        void 0 !== b && (m.page = b);
                        var z = new Map;
                        z.set("sort", n);
                        z = db(z);
                        z !== document.location.search && "pushState"in window.history && window.history.pushState("", "", bb(z, location.pathname));
                        D("TagPageArrowClicked", {
                            ArrowName: Aj[c.Wc],
                            ArrowDirection: l ? "default" : k ? "ascending" : "descending"
                        });
                        z = Ia(window.location.pathname.substring(1) + "?" + eb(m))[1];
                        w.Nb = 2;
                        return {
                            value: z
                        }
                    }
                    r = w.Je;
                    g.Lc = l ? "" : c.Wc;
                    g.Mc = k;
                    g.element.innerHTML = r.responseText;
                    Cj(g);
                    wj();
                    Fj(n);
                    w.Nb = 0
                })
            })
        })
    }
    function Ej(a) {
        var b = a.Ee.get(a.Lc);
        void 0 !== b && (b.setActive(),
        yj(b, a.Mc))
    }
    function Fj(a) {
        document.querySelectorAll(".top-section > .sub-nav > li > a").forEach(function(b) {
            var c = b.href.split("?")[0]
              , d = "";
            "" !== a && (d = "?sort=" + a);
            b.href = "" + c + d
        })
    }
    ;var Gj = new H("showJoinOverlay");
    function Hj() {
        U.call(this);
        var a = this;
        this.element.style.display = "none";
        this.element.style.position = "absolute";
        this.element.style.width = "560px";
        this.element.style.height = "auto";
        this.element.style.backgroundColor = "#ffffff";
        this.element.style.border = "2px solid #cccccc";
        this.element.style.borderRadius = "20px";
        this.element.style.padding = "10px";
        this.element.style.top = "190px";
        this.element.style.fontSize = "12px";
        this.element.style.fontFamily = "UbuntuRegular', Arial, Helvetica, sans-serif";
        this.m.style.backgroundColor = "#000000";
        this.element.appendChild(this.Ld());
        this.xa = document.createElement("iframe");
        this.xa.frameBorder = "0";
        this.xa.marginWidth = "0";
        this.xa.scrolling = "no";
        this.xa.marginHeight = "0";
        this.xa.style.width = "560px";
        this.xa.style.height = "650px";
        this.xa.src = "/accounts/register_iframe/";
        this.element.appendChild(this.xa);
        var b = document.createElement("hr");
        b.style.margin = "15px 0 10px 0";
        b.style.border = "0";
        b.style.color = "#e4e4e4";
        b.style.backgroundColor = "#e4e4e4";
        b.style.height = "1px";
        this.element.appendChild(b);
        b = document.createElement("span");
        var c = document.createElement("img");
        c.src = "https://static-assets.highwebmedia.com/tsdefaultassets/arrow_back.gif";
        c.style.marginRight = "4px";
        c.style.verticalAlign = "bottom";
        b.appendChild(c);
        this.fa = document.createElement("a");
        this.fa.innerText = Bb;
        this.fa.style.color = "#0a5a83";
        this.fa.style.position = "relative";
        this.fa.style.top = "-1px";
        this.fa.onmouseenter = function() {
            a.fa.style.textDecoration = "underline"
        }
        ;
        this.fa.onmouseleave = function() {
            a.fa.style.textDecoration = "none"
        }
        ;
        b.appendChild(this.fa);
        this.element.appendChild(b);
        b = document.createElement("span");
        b.style.cssFloat = "right";
        c = document.createElement("img");
        c.src = "https://static-assets.highwebmedia.com/tsdefaultassets/key.gif";
        c.style.marginRight = "4px";
        c.style.verticalAlign = "bottom";
        b.appendChild(c);
        c = document.createElement("span");
        c.innerText = Cb;
        c.style.color = "#7f7f7f";
        c.style.position = "relative";
        c.style.top = "-1px";
        c.style.marginRight = "2px";
        b.appendChild(c);
        var d = document.createElement("a");
        d.href = "/auth/login/";
        d.innerText = Db;
        d.style.color = "#0a5a83";
        d.style.position = "relative";
        d.style.top = "-1px";
        d.onmouseenter = function() {
            d.style.textDecoration = "underline"
        }
        ;
        d.onmouseleave = function() {
            d.style.textDecoration = "none"
        }
        ;
        b.appendChild(d);
        this.element.appendChild(b);
        this.Bc.g(function() {
            a.j()
        })
    }
    u(Hj, U);
    Hj.prototype.Sa = function(a) {
        var b = this;
        this.fa.href = a.anchor.href;
        this.fa.onclick = a.cd;
        A("click", this.fa, function() {
            b.j()
        });
        U.prototype.show.call(this);
        this.element.style.display = "block";
        this.v();
        this.xa.onload = function() {
            var c = b.xa.contentDocument;
            if (null !== c) {
                var d = c.getElementById("husername");
                null !== d && d.focus();
                c = c.querySelector("a.next");
                c.href = a.anchor.href;
                c.onclick = a.cd;
                A("click", c, function() {
                    b.j()
                })
            }
        }
        ;
        D("RegisterIframe_Shown")
    }
    ;
    Hj.prototype.Ld = function() {
        var a = document.createElement("div");
        a.style.animationName = "spin";
        a.style.position = "absolute";
        a.style.top = "50%";
        a.style.left = "50%";
        a.style.width = "30px";
        a.style.height = "31px";
        a.style.margin = "-15px 0 0 -15px";
        a.style.background = 'url("https://static-assets.highwebmedia.com/tsdefaultassets/images/loading_spinner.svg")';
        a.style.backgroundSize = "cover";
        a.style.animationName = "spin";
        a.style.webkitAnimationName = "spin";
        a.style.animationDuration = "2s";
        a.style.webkitAnimationDuration = "2s";
        a.style.animationTimingFunction = "linear";
        a.style.webkitAnimationTimingFunction = "linear";
        a.style.animationIterationCount = "infinite";
        a.style.webkitAnimationIterationCount = "infinite";
        a.style.zIndex = "-1";
        return a
    }
    ;
    Hj.prototype.v = function() {
        this.element.style.left = (document.documentElement.clientWidth - this.element.offsetWidth) / 2 + "px"
    }
    ;
    var Ij = new H("commandeerJoinOverlayAnchors",{
        Ha: 700,
        Ua: 1
    })
      , Jj = new H("restoreJoinOverlayAnchors",{
        Ha: 700,
        Ua: 1
    })
      , Kj = !1;
    function Lj(a) {
        var b = this;
        this.anchor = a = void 0 === a ? document.createElement("a") : a;
        if (void 0 !== fb().join_overlay) {
            var c = function() {
                Kj = !0;
                Mj(b)
            };
            Kj ? window.setTimeout(function() {
                Mj(b)
            }, 0) : Ij.g(c);
            var d = function() {
                Kj = !1;
                b.restore();
                Ij.removeListener(c);
                window.setTimeout(function() {
                    Jj.removeListener(d)
                }, 0)
            };
            Jj.g(d)
        }
    }
    function Mj(a) {
        a.cd = a.anchor.onclick;
        a.Dh = a.anchor.href;
        a.anchor.href = "/accounts/register/";
        a.anchor.onclick = function(b) {
            b.preventDefault();
            Gj.h(a);
            Jj.h(void 0)
        }
    }
    Lj.prototype.restore = function() {
        this.anchor.onclick = this.cd;
        this.anchor.href = this.Dh;
        this.cd = null
    }
    ;
    function Nj(a) {
        a = t(a.querySelectorAll("a:not(.nooverlay):not([href='#'])"));
        for (var b = a.next(); !b.done; b = a.next())
            new Lj(b.value)
    }
    function Oj() {
        var a = document.getElementById("header");
        null !== a && Nj(a);
        a = document.getElementById("footer-holder");
        null !== a && Nj(a);
        a = document.getElementById("room_list");
        null !== a && Nj(a);
        a = document.getElementById("hashtag_ticker");
        null !== a && Nj(a);
        a = document.getElementsByClassName("sub-nav");
        0 !== a.length && Nj(a[0])
    }
    ;function Pj(a, b, c) {
        var d = this;
        this.$ = a;
        this.Ac = !1;
        this.bi = this.$.querySelector(".followed_counts");
        J(this.$, "gender-tab");
        J(this.$, "tabAnchor");
        this.$.style.borderBottomStyle = "solid";
        this.$.style.borderBottomWidth = "1px";
        M(a, {
            whiteSpace: "nowrap",
            display: "inline-block",
            cursor: "pointer",
            boxSizing: "border-box",
            WebkitTextSizeAdjust: "none"
        });
        this.la = Se;
        this.la.qa = De(this.$.innerText);
        Qj(this);
        a = {
            username: c,
            oa: b,
            vd: function(f) {
                Qj(d);
                0 === f.L.length && (d.Ac = !1,
                Rj(d))
            },
            $b: function(f, g) {
                Qj(d);
                d.Ac = 0 < f.He.length;
                Rj(d);
                f.lb && !g && d.lb()
            },
            mh: function() {
                Qj(d);
                clearInterval(d.mb);
                d.mb = void 0;
                d.Ac = !1;
                Rj(d)
            },
            U: new Ve(this.$,b),
            nh: this
        };
        this.U = a.U;
        this.U.Na.g(function(f) {
            if (f.pa) {
                clearInterval(d.mb);
                d.mb = void 0;
                d.Ac = !1;
                Rj(d);
                D("FollowedDropdownOpened", {
                    onlineBroadcasters: d.la.qa.Rb
                });
                if (y() && (f = window.localStorage.getItem("onlineFollowedTab"),
                null !== f)) {
                    f = JSON.parse(f);
                    for (var g = t(f.unseenRooms), h = g.next(); !h.done; h = g.next())
                        f.seenRooms[h.value.room] = !0;
                    f.timestamp = Date.now();
                    f.flash = !1;
                    f.unseenRooms = [];
                    window.localStorage.setItem("onlineFollowedTab", JSON.stringify(f))
                }
                y() && window.localStorage.setItem("followedDropdownClicked", JSON.stringify({
                    timestamp: Date.now()
                }))
            }
        });
        this.la.ya(a)
    }
    Pj.prototype.lb = function() {
        var a = this;
        if (void 0 === this.mb) {
            var b = 3
              , c = !0;
            this.mb = window.setInterval(function() {
                if (c) {
                    if (J(a.$, "orange"),
                    --b,
                    0 === b) {
                        clearInterval(a.mb);
                        a.mb = void 0;
                        return
                    }
                } else
                    K(a.$, "orange");
                c = !c
            }, 500)
        }
    }
    ;
    function Qj(a) {
        var b = a.la.qa;
        a.$.style.width = "auto";
        a.bi.textContent = "(" + b.Rb + "/" + b.total + ")";
        null !== a.$.offsetParent && window.setTimeout(function() {
            a.$.style.width = a.$.offsetWidth + 1 + "px";
            a.U.G() && a.U.Tb()
        })
    }
    function Rj(a) {
        a.Ac && !a.U.G() ? J(a.$, "orange") : K(a.$, "orange")
    }
    ;function Sj(a) {
        I.call(this, a);
        a = a.querySelector(".nav");
        null !== a && a instanceof HTMLElement && rd(a, ["padding-left", "padding-right"], 10, 65, 800);
        a = document.querySelector(".footer-holder .langs");
        null !== a && a instanceof HTMLElement && rd(a, ["padding-left", "padding-right"], 10, 65, 800);
        var b = document.querySelector(".footer-holder .footer-cb-address");
        null !== b && b instanceof HTMLElement && rd(b, "margin-left", -55, 0, 589, function(c) {
            0 === c && (b.style.marginLeft = "")
        })
    }
    u(Sj, I);
    function Tj(a) {
        I.call(this, a);
        Uj();
        Vj();
        Wj();
        a = document.querySelector("#user_information");
        null !== a && a instanceof HTMLElement && rd(a, "margin-right", 4, 12, 600)
    }
    u(Tj, I);
    function Wj() {
        var a = document.getElementById("nav");
        if (null !== a) {
            var b = new I(a);
            Array.from(a.children).forEach(function(h) {
                if (h instanceof HTMLLIElement) {
                    var k = new rg(h);
                    Nc(b, k);
                    k.element.style.display = "block";
                    h = k.element.firstChild;
                    if (null !== h && h instanceof HTMLAnchorElement) {
                        var l = getComputedStyle(h);
                        h.style.color = l.color;
                        h.style.font = l.font;
                        h.style.fontFamily = l.fontFamily;
                        h.style.fontWeight = l.fontWeight;
                        h.style.fontSize = l.fontSize
                    }
                    k.hd.g(function(m) {
                        k.element.style.padding = m ? "8px 4px" : ""
                    })
                }
            });
            var c = new ig("li",!0);
            b.K(c);
            dd(c.element);
            M(c, {
                border: "1px solid transparent",
                borderRadius: "4px 4px 0 0",
                height: "30px",
                top: "6px",
                width: "39px",
                paddingTop: "3px",
                color: Y.Nf
            });
            c.wa.Na.g(function(h) {
                c.element.style.border = h.pa ? "1px solid " + Y.td : "1px solid transparent"
            });
            M(c.wa, {
                borderColor: "" + Y.td,
                padding: "8px 20px 8px 8px"
            });
            if (null !== a.parentElement) {
                for (var d = 0, f = t(a.parentElement.children), g = f.next(); !g.done; g = f.next())
                    g = g.value,
                    g !== a && g instanceof HTMLElement && (d += g.offsetWidth);
                c.Ca.element.style.width = d + "px"
            }
        }
    }
    function Vj() {
        var a = document.querySelector("#header .ad");
        if (null !== a && a instanceof HTMLElement) {
            var b = document.querySelector(".right_section")
              , c = fd(null !== a.firstElementChild && a.firstElementChild instanceof HTMLElement ? a.firstElementChild : a).right;
            P.g(function() {
                a.style.display = (null === b ? document.body.offsetWidth : b.offsetLeft) - 25 < c ? "none" : "block"
            })
        }
    }
    function Uj() {
        var a = document.querySelector(".logo-zone");
        if (null !== a && a instanceof HTMLElement) {
            var b = document.querySelector(".logo-zone svg")
              , c = document.querySelector(".logo-zone strong:last-child");
            rd(a, "padding-left", 8, 15, 600);
            rd(a, "padding-top", 12, 6, 600);
            null !== b && b instanceof HTMLElement && (rd(b, "width", 145, 198, 600),
            rd(b, "height", 45, 61, 600));
            null !== c && c instanceof HTMLElement && (rd(c, "font-size", 8, 10, 600),
            rd(c, "padding-left", 13, 17, 600));
            var d = document.querySelector(".logo-zone .logo");
            if (null !== d && d instanceof HTMLElement) {
                var f = d.clientWidth;
                f > 500 - jd() && P.g(function() {
                    d.style.maxWidth = f + d.offsetLeft > document.documentElement.clientWidth ? document.documentElement.clientWidth - d.offsetLeft - 1 + "px" : ""
                })
            }
        }
    }
    ;var Xj = [];
    de.g(function(a) {
        Xj = a.dh.Ch
    });
    var Yj = new H("openEmoticonPreview")
      , Zj = new H("closeEmoticonPreview")
      , ak = new H("emoticonPreviewClosed");
    function bk() {
        U.call(this);
        var a = this;
        J(this.element, "emoticonPreviewModal");
        this.element.style.position = "fixed";
        this.element.style.width = "auto";
        this.element.style.height = "auto";
        this.element.style.borderRadius = "6px";
        this.element.style.padding = "10px";
        this.element.style.fontSize = "12px";
        this.element.style.fontFamily = "UbuntuRegular, Helvetica, Arial, sans-serif";
        this.element.style.zIndex = "1003";
        this.element.style.textAlign = "center";
        this.element.style.boxShadow = "0 0 18px rgba(0, 0, 0, 0.4)";
        this.m.style.backgroundColor = "#000000";
        this.m.style.opacity = "0.4";
        this.m.style.zIndex = "1003";
        var b = document.createElement("div");
        J(b, "closeButton");
        b.style.display = "inline-block";
        b.style.position = "absolute";
        b.style.width = "10px";
        b.style.height = "10px";
        b.style.top = "9px";
        b.style.right = "9px";
        b.style.cursor = "pointer";
        b.style.opacity = "1";
        b.onclick = function() {
            a.j()
        }
        ;
        b.onmouseenter = function() {
            b.style.opacity = "1"
        }
        ;
        b.onmouseleave = function() {
            b.style.opacity = "0.5"
        }
        ;
        this.element.appendChild(b);
        this.Dc = document.createElement("img");
        this.Dc.style.verticalAlign = "middle";
        this.Dc.style.padding = "10px";
        A("load", this.Dc, function() {
            a.v()
        });
        this.element.appendChild(this.Dc);
        this.aa = document.createElement("div");
        J(this.aa, "hrefColor");
        this.aa.innerText = "REPORT EMOTICON";
        this.aa.style.cursor = "pointer";
        this.aa.onclick = function() {
            a.aa.style.display = "none";
            a.Ka.style.display = "block";
            a.v()
        }
        ;
        this.aa.onmouseenter = function() {
            a.aa.style.textDecoration = "underline"
        }
        ;
        this.aa.onmouseleave = function() {
            a.aa.style.textDecoration = "none"
        }
        ;
        this.element.appendChild(this.aa);
        this.Ka = document.createElement("div");
        this.Ka.style.display = "none";
        this.element.appendChild(this.Ka);
        var c = document.createElement("span");
        c.innerText = "Choose a category:";
        c.style.marginRight = "6px";
        this.Ka.appendChild(c);
        var d = document.createElement("select");
        J(d, "categorySelect");
        d.style.borderRadius = "4px";
        d.style.marginBottom = "2px";
        c = t(ck);
        for (var f = c.next(); !f.done; f = c.next()) {
            f = f.value;
            var g = document.createElement("option");
            g.innerText = f.label;
            g.value = f.value;
            d.appendChild(g)
        }
        this.Ka.appendChild(d);
        c = document.createElement("span");
        c.style.display = "inline-block";
        f = document.createElement("span");
        J(f, "cancelButton");
        f.innerText = "CANCEL";
        f.style.fontFamily = "UbuntuMedium, Helvetica, Arial, sans-serif";
        f.style.fontSize = "12px";
        f.style.padding = "2px 6px";
        f.style.borderRadius = "4px";
        f.style.boxSizing = "border-box";
        f.style.cursor = "pointer";
        f.style.display = "inline-block";
        f.style.marginLeft = "6px";
        f.onclick = function() {
            a.aa.style.display = "block";
            a.Ka.style.display = "none";
            a.v()
        }
        ;
        c.appendChild(f);
        f = document.createElement("span");
        J(f, "reportButton");
        f.innerText = "REPORT";
        f.style.fontFamily = "UbuntuMedium, Helvetica, Arial, sans-serif";
        f.style.fontSize = "12px";
        f.style.padding = "2px 6px";
        f.style.borderRadius = "4px";
        f.style.boxSizing = "border-box";
        f.style.cursor = "pointer";
        f.style.display = "inline-block";
        f.style.marginLeft = "6px";
        f.onclick = function() {
            v("emoticon_report_abuse/" + a.nc.sd + "/", {
                category: d.value
            }).then(function() {
                Xj.push(a.nc.sd);
                a.Ka.style.display = "none";
                a.Za.style.display = "block";
                a.v()
            }).catch(function(k) {
                x("Error reporting emoticon: " + k)
            })
        }
        ;
        c.appendChild(f);
        this.Ka.appendChild(c);
        this.Za = document.createElement("div");
        this.Za.style.display = "none";
        this.element.appendChild(this.Za);
        c = document.createElement("span");
        c.innerText = "EMOTICON REPORTED - ";
        this.Za.appendChild(c);
        var h = document.createElement("span");
        J(h, "hrefColor");
        h.innerText = "UNDO";
        h.style.cursor = "pointer";
        h.onclick = function() {
            v("emoticon_report_abuse/" + a.nc.sd + "/", {
                category: d.value
            }).then(function() {
                var k = Xj.indexOf(a.nc.sd, 0);
                0 <= k && Xj.splice(k, 1);
                a.Za.style.display = "none";
                a.aa.style.display = "block";
                a.v()
            }).catch(function(k) {
                x("Error reporting emoticon: " + k)
            })
        }
        ;
        h.onmouseenter = function() {
            h.style.textDecoration = "underline"
        }
        ;
        h.onmouseleave = function() {
            h.style.textDecoration = "none"
        }
        ;
        this.Za.appendChild(h);
        this.Bc.g(function() {
            a.j()
        });
        Zj.g(function() {
            a.j()
        })
    }
    u(bk, U);
    bk.prototype.Sa = function(a) {
        this.nc = a;
        this.Dc.src = this.nc.url;
        this.aa.style.display = "none";
        this.Ka.style.display = "none";
        this.Za.style.display = "none";
        0 <= Xj.indexOf(a.sd) ? this.Za.style.display = "block" : this.aa.style.display = "block";
        U.prototype.show.call(this);
        this.v()
    }
    ;
    bk.prototype.v = function() {
        this.element.style.left = (document.documentElement.clientWidth - this.element.offsetWidth) / 2 + "px";
        this.element.style.top = (document.documentElement.clientHeight - this.element.offsetHeight) / 2 + "px"
    }
    ;
    bk.prototype.j = function() {
        U.prototype.j.call(this);
        ak.h(void 0)
    }
    ;
    bk.prototype.show = function() {
        U.prototype.show.call(this);
        this.element.style.visibility = "";
        this.v()
    }
    ;
    var ck = [{
        label: "Just ignore this emoticon",
        value: "ignore"
    }, {
        label: "Offensive",
        value: "offensive"
    }, {
        label: "Disgusting",
        value: "disgusting"
    }, {
        label: "Fake Tip",
        value: "fake_tip"
    }, {
        label: "Advertising",
        value: "advertising"
    }];
    function dk() {
        window.setTimeout(function() {
            ie || location.reload();
            he.g(function() {
                location.reload()
            })
        }, 1728E5)
    }
    ;function ek(a, b, c) {
        function d(n) {
            "left" === n ? l.style.fill = "#E2E2E2" : m.style.fill = "#E2E2E2"
        }
        function f(n) {
            h.kg && ("left" === n ? l.style.fill = "#B8B8B8" : m.style.fill = "#B8B8B8")
        }
        function g(n) {
            var r = document.createElementNS("http://www.w3.org/2000/svg", "svg")
              , w = document.createElementNS("http://www.w3.org/2000/svg", "path");
            w.setAttribute("d", "M5.7 0L0 5.55 18.6 24 0 42.45 5.7 48 30 24 5.7 0z");
            w.setAttribute("fill", "#E2E2E2");
            "left" === n && w.setAttribute("transform", "translate(30, 0) scale(-1,1)");
            r.appendChild(w);
            r.setAttribute("viewBox", "0 0 30 50");
            return r
        }
        c = void 0 === c ? !0 : c;
        I.call(this);
        var h = this;
        this.kg = c;
        this.da = document.createElement("div");
        this.ha = document.createElement("div");
        this.da.style.display = this.ha.style.display = "inline-block";
        this.da.style.height = this.ha.style.height = "calc(100% - 20px)";
        this.da.style.width = this.ha.style.width = "50%";
        this.da.style.top = this.ha.style.top = "0px";
        this.da.style.position = this.ha.style.position = "absolute";
        this.da.style.left = this.ha.style.right = "0px";
        this.kg && (this.da.style.cursor = this.ha.style.cursor = "pointer");
        this.R = document.createElement("div");
        this.V = document.createElement("div");
        this.R.style.position = this.V.style.position = "absolute";
        this.R.style.top = this.V.style.top = (this.da.offsetHeight - 50) / 2 + "px";
        this.R.style.height = this.V.style.height = "50px";
        this.R.style.width = this.V.style.width = "30px";
        this.R.style.userSelect = this.V.style.userSelect = "none";
        this.R.style.webkitUserSelect = this.V.style.webkitUserSelect = "none";
        this.R.style.left = this.V.style.right = "0";
        c = g("left");
        var k = g("right");
        this.R.appendChild(c);
        this.V.appendChild(k);
        this.da.appendChild(this.R);
        this.ha.appendChild(this.V);
        var l = this.R.firstChild.firstChild
          , m = this.V.firstChild.firstChild;
        this.da.onmouseenter = function() {
            f("left")
        }
        ;
        this.da.onmouseleave = function() {
            d("left")
        }
        ;
        this.ha.onmouseenter = function() {
            f("right")
        }
        ;
        this.ha.onmouseleave = function() {
            d("right")
        }
        ;
        this.da.onclick = a;
        this.ha.onclick = b
    }
    u(ek, I);
    function fk(a) {
        a.R.style.left = a.V.style.right = "25px"
    }
    ;function gk(a) {
        var b = F("path", {
            fill: "#E2E2E2",
            d: "M11.7255 0.392534C11.6095 0.276307 11.4717 0.184097 11.32 0.121183C11.1684 0.0582692 11.0058 0.0258858 10.8415 0.0258858C10.6773 0.0258858 10.5147 0.0582692 10.363 0.121183C10.2113 0.184097 10.0735 0.276307 9.95753 0.392534L6.23553 4.11453C6.18867 4.16125 6.1252 4.18748 6.05903 4.18748C5.99287 4.18748 5.9294 4.16125 5.88253 4.11453L2.15953 0.392534C2.0448 0.270837 1.90682 0.173402 1.75375 0.106C1.60068 0.0385979 1.43564 0.00259895 1.26841 0.000135597C1.10118 -0.00232775 0.935151 0.0287947 0.780163 0.0916592C0.625176 0.154524 0.484381 0.247852 0.366117 0.366117C0.247852 0.484381 0.154524 0.625176 0.0916592 0.780163C0.0287947 0.935151 -0.00232775 1.10118 0.000135597 1.26841C0.00259895 1.43564 0.0385979 1.60068 0.106 1.75375C0.173402 1.90682 0.270837 2.0448 0.392534 2.15953L4.11453 5.88153C4.13782 5.90476 4.15629 5.93234 4.16889 5.96272C4.18149 5.99309 4.18798 6.02565 4.18798 6.05853C4.18798 6.09142 4.18149 6.12398 4.16889 6.15435C4.15629 6.18472 4.13782 6.21231 4.11453 6.23553L0.392534 9.95953C0.158287 10.1941 0.0267145 10.512 0.0267145 10.8435C0.0267145 11.175 0.158287 11.493 0.392534 11.7275C0.629353 11.9575 0.946449 12.0861 1.27653 12.0861C1.60662 12.0861 1.92371 11.9575 2.16053 11.7275L5.88253 8.00553C5.90567 7.98228 5.93317 7.96383 5.96346 7.95124C5.99375 7.93865 6.02623 7.93217 6.05903 7.93217C6.09184 7.93217 6.12431 7.93865 6.1546 7.95124C6.18489 7.96383 6.2124 7.98228 6.23553 8.00553L9.95953 11.7255C10.1967 11.9548 10.5137 12.0829 10.8435 12.0829C11.1734 12.0829 11.4904 11.9548 11.7275 11.7255C11.9618 11.491 12.0934 11.173 12.0934 10.8415C12.0934 10.51 11.9618 10.1921 11.7275 9.95753L8.00553 6.23553C7.98225 6.21231 7.96378 6.18472 7.95118 6.15435C7.93857 6.12398 7.93209 6.09142 7.93209 6.05853C7.93209 6.02565 7.93857 5.99309 7.95118 5.96272C7.96378 5.93234 7.98225 5.90476 8.00553 5.88153L11.7255 2.15953C11.8416 2.04354 11.9337 1.90581 11.9965 1.75422C12.0593 1.60262 12.0917 1.44013 12.0917 1.27603C12.0917 1.11194 12.0593 0.949446 11.9965 0.797851C11.9337 0.646255 11.8416 0.508526 11.7255 0.392534Z"
        });
        return F("div", {
            className: "closeButton",
            style: {
                position: "absolute",
                width: "15px",
                padding: "15px",
                right: "0px",
                zIndex: 1102,
                cursor: "pointer"
            },
            onMouseEnter: function() {
                b.style.fill = "#B8B8B8"
            },
            onMouseLeave: function() {
                b.style.fill = "#E2E2E2"
            },
            onClick: a
        }, F("svg", {
            viewBox: "0 0 13 13",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, b))
    }
    ;var hk = new Map;
    function ik() {
        U.call(this, {
            rb: function() {
                a.element.style.display = "block";
                a.v()
            },
            Cb: !0
        });
        var a = this
    }
    u(ik, U);
    e = ik.prototype;
    e.ya = function(a) {
        var b;
        this.Fb = a;
        this.Fb.Tf = null !== (b = this.Fb.Tf) && void 0 !== b ? b : !1;
        a = t(this.media);
        for (b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            if (void 0 !== b.qc)
                return;
            var c = F("img", {
                src: b.url,
                style: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    maxHeight: "calc(100% - 30px)",
                    maxWidth: "calc(100% - 180px)"
                }
            });
            c.onload = function() {
                null === jk || void 0 === jk ? void 0 : jk.v()
            }
            ;
            b.qc = c
        }
        kk(this)
    }
    ;
    function kk(a) {
        a.eb = void 0;
        1 < a.media.filter(function(b) {
            return "" !== b.gg
        }).length && (a.eb = new ek(function() {
            a.previous()
        }
        ,function() {
            a.next()
        }
        ),
        fk(a.eb));
        a.element = F("div", {
            tabIndex: -1,
            style: {
                position: "fixed",
                zIndex: 1101,
                backgroundColor: "#ffffff",
                padding: "0px 80px",
                outline: "none",
                width: "80vw",
                height: "80vh",
                left: "10vw",
                top: "10vh",
                boxShadow: "0 0 3px black",
                boxSizing: "border-box"
            }
        }, gk(function() {
            a.j()
        }), void 0 !== a.eb ? a.eb.da : void 0, void 0 !== a.eb ? a.eb.ha : void 0);
        A("keydown", a.element, function(b) {
            switch (b.key) {
            case "Left":
            case "ArrowLeft":
                a.previous();
                break;
            case "Right":
            case "ArrowRight":
                a.next();
                break;
            case "Esc":
            case "Escape":
                a.j()
            }
        })
    }
    function lk(a) {
        var b, c, d;
        null === (d = null === (c = null === (b = a.ua) || void 0 === b ? void 0 : b.qc) || void 0 === c ? void 0 : c.parentElement) || void 0 === d ? void 0 : d.removeChild(a.ua.qc)
    }
    function mk(a, b) {
        b = void 0 === b ? 0 : b;
        var c;
        a.show();
        lk(a);
        a.Ia = b;
        if (void 0 !== a.ua && void 0 !== a.ua.qc && (a.element.appendChild(a.ua.qc),
        !a.Fb.Tf && !1 === a.ua.$h)) {
            a.ua.$h = !0;
            nk(a.ua.Ij, a.Fb.Rh, a.ua.Qh);
            b = null !== (c = a.Fb.Rh) && void 0 !== c ? c : "";
            c = [a.ua.Qh];
            var d;
            b = hk.get(b);
            if (void 0 !== b) {
                b = t(b);
                for (var f = b.next(); !f.done; f = b.next()) {
                    f = f.value;
                    for (var g = t(c), h = g.next(); !h.done; h = g.next()) {
                        h = h.value;
                        var k = f.Vi.get(h);
                        null === (d = null === k || void 0 === k ? void 0 : k.parentElement) || void 0 === d ? void 0 : d.removeChild(k);
                        f.Vi.delete(h)
                    }
                }
            }
        }
        a.v()
    }
    e.j = function(a) {
        U.prototype.j.call(this, void 0 === a ? !0 : a);
        lk(this)
    }
    ;
    e.next = function() {
        for (var a = (this.Ia + 1) % this.media.length; "" === this.media[a].gg; )
            a = (a + 1) % this.media.length;
        mk(this, a)
    }
    ;
    e.previous = function() {
        for (var a = 0 < this.Ia ? this.Ia - 1 : this.media.length - 1; "" === this.media[a].gg; )
            a = 0 < a ? a - 1 : this.media.length - 1;
        mk(this, a)
    }
    ;
    e.v = function() {
        var a;
        null === (a = this.eb) || void 0 === a ? void 0 : a.R.style.top = a.V.style.top = (this.element.offsetHeight - 50) / 2 + "px"
    }
    ;
    p.Object.defineProperties(ik.prototype, {
        gd: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.Fb.gd
            }
        },
        Ia: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                var a;
                return null !== (a = this.gd.Ia) && void 0 !== a ? a : 0
            },
            set: function(a) {
                this.gd.Ia = a
            }
        },
        media: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.gd.bk
            }
        },
        ua: {
            configurable: !0,
            enumerable: !0,
            get: function() {
                if (-1 < this.Ia && this.Ia < this.media.length)
                    return this.media[this.Ia]
            }
        }
    });
    var jk = new ik;
    Object.assign(Object.assign({}, {
        width: "64px",
        height: "64px",
        margin: "0px 1px",
        display: "inline-block",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        cursor: "pointer",
        borderRadius: "4px",
        overflow: "hidden",
        zIndex: 0
    }), {
        cursor: "default"
    });
    new H("pmMediaDrop");
    new H("pmMediaUpload");
    new H("pmMediaDeleted");
    function nk(a, b, c) {
        for (var d = [], f = 2; f < arguments.length; ++f)
            d[f - 2] = arguments[f];
        f = new FormData;
        f.append("from_username", a);
        f.append("message_id", b);
        d = t(d);
        for (var g = d.next(); !g.done; g = d.next())
            f.append("media_id", g.value.toString());
        v("api/ts/chatmessages/media/opened/", f).then(function(h) {
            return 204 === h.status
        }).catch(function() {
            return !1
        })
    }
    ;function pk(a) {
        this.qe(a);
        W.current = this.context;
        this.ya();
        window.matchMedia("(prefers-color-scheme: dark)").matches && "" === Ba("theme_name") && (new V("DrkSysStngs")).ue()
    }
    pk.prototype.qe = function(a) {
        var b, c;
        var d = a.logged_in_user;
        d = null !== d ? {
            username: d.username,
            Jj: d.gender,
            Gf: d.is_supporter,
            Wj: d.is_staff,
            Si: d.token_balance,
            ac: d.user_uid,
            Ik: d.signed_username,
            ug: d.animate_thumbnails,
            Eh: d.is_age_verified,
            Tj: d.is_broadcasting,
            Vk: d.total_followed,
            qa: d.online_followed
        } : void 0;
        this.context = {
            Xg: a.current_logo,
            Yh: a.no_ads,
            za: a.is_mobile,
            S: d,
            nd: zh(a.push_service),
            Hd: a.dark_mode_enabled,
            ak: a.chat_settings.max_pm_age,
            Lh: a.JPEG_STREAM_URL,
            Kh: a.JPEG_ROOM_IMAGE_URL,
            kk: null !== (b = a.pm_photos_enabled) && void 0 !== b ? b : !1,
            Se: a.entrypoint_context_id,
            Ih: void 0,
            mj: a.bio_quarantine_phase,
            lj: a.bio_is_custom,
            Xk: null !== (c = a.use_mobile_redesign) && void 0 !== c ? c : !1
        };
        y() && (a = window.localStorage.getItem("contextID"),
        window.localStorage.setItem("contextID", this.context.Se),
        this.context.Ih = a === this.context.Se)
    }
    ;
    pk.prototype.ya = function() {
        var a, b;
        dk();
        zc = null !== (a = this.context.Lh) && void 0 !== a ? a : "https://cbjpeg.stream.highwebmedia.com/";
        Ac = null !== (b = this.context.Kh) && void 0 !== b ? b : "https://roomimg.stream.highwebmedia.com/";
        this.roomReload = {
            addOnLoadHandler: hf,
            loadRooms: kf,
            scheduleRefresh: lf,
            chatRoomListOnClick: nf,
            startStreaming: qf,
            stopStreaming: rf,
            clearRefresh: mf,
            setRoomAnimation: pf
        };
        this.addPageAction = D;
        this.context.za ? (qk(this, !0),
        this.Ad(!0)) : rk(this)
    }
    ;
    function rk(a) {
        qk(a, !1);
        sk(a);
        tk(a);
        a.Nc();
        uk();
        vk();
        wk();
        xk();
        yk();
        zk();
        void 0 === a.context.S && ("/auth/login/" !== window.location.pathname && Ak(),
        void 0 !== fb().join_overlay && "/accounts/register/" !== window.location.pathname && Bk());
        Ck();
        a.context.Yh || Dk();
        Ek();
        Fk();
        void 0 === vi && (vi = new ti(void 0 === a.context.S));
        a.displayLoginOverlay = se;
        a.openFeedbackForm = function(b) {
            Di.h({
                source: b
            })
        }
        ;
        a.showModal = sf
    }
    function Bk() {
        Oj();
        Ij.h(void 0);
        var a;
        Gj.g(function(b) {
            void 0 === a && (a = new Hj);
            window.scrollTo(0, 0);
            a.Sa(b)
        })
    }
    function Ck() {
        var a = new ij;
        Di.g(function(b) {
            var c = a.form;
            c.source.value = b.source;
            Ui(c);
            void 0 !== b.Fc && Ki(a.form.Fc, b.Fc);
            a.show()
        })
    }
    function Ak() {
        for (var a = t(document.querySelectorAll("a.login-link")), b = a.next(); !b.done; b = a.next())
            b.value.onclick = function(c) {
                c.preventDefault();
                we()
            }
    }
    function vk() {
        A("popstate", window, function(a) {
            void 0 !== a.state && null !== a.state && location.reload()
        })
    }
    function qk(a, b) {
        uj(void 0 !== a.context.S ? a.context.S.username : "", void 0 === b ? !1 : b, a.context.Hd)
    }
    function sk(a) {
        for (var b = t(document.querySelectorAll(".purchase_tokens a, a.purchase_tokens")), c = b.next(); !c.done; c = b.next())
            c = c.value,
            void 0 !== a.context.S ? gg(c) : c.onclick = function(d) {
                se({});
                d.preventDefault()
            }
    }
    function Dk() {
        for (var a = t(document.querySelectorAll(".remove_ads a")), b = a.next(); !b.done; b = a.next())
            b.value.onclick = function() {
                D("HideAds_Click")
            }
    }
    function Ek() {
        if (window.hasOwnProperty("ReportingObserver")) {
            var a = function(c) {
                c = t(c);
                for (var d = c.next(); !d.done; d = c.next())
                    d = d.value,
                    "intervention" === d.type && D("AdIntervention", {
                        report: JSON.stringify(d.body)
                    })
            }
              , b = new window.ReportingObserver(function(c) {
                a(c)
            }
            ,{
                buffered: !0
            });
            b.observe();
            A("beforeunload", window, function() {
                var c = b.takeRecords();
                a(c)
            })
        }
    }
    function tk(a) {
        var b = document.getElementById("followed_anchor");
        if (null !== b && b instanceof HTMLAnchorElement) {
            b.href = "#";
            var c = document.getElementById("followed_tab");
            new Pj(null !== c && ((new V("hpfilter1")).active || (new V("hpfilter2")).active) ? c : b,void 0 === a.context.S,void 0 !== a.context.S ? a.context.S.username : "")
        }
    }
    function xk() {
        var a = document.querySelector("#header");
        null !== a && a instanceof HTMLElement && new Tj(a);
        a = document.querySelector(".footer-holder");
        null !== a && a instanceof HTMLElement && new Sj(a)
    }
    function zk() {
        function a(b) {
            var c = {};
            b = t(document.querySelectorAll(b + " input[type='checkbox']"));
            for (var d = b.next(); !d.done; c = {
                sa: c.sa,
                bb: c.bb
            },
            d = b.next())
                d = d.value,
                c.sa = d,
                c.bb = new ri(16,c.sa.checked),
                c.bb.element.style.top = "4px",
                qi(c.bb, function(f) {
                    return function() {
                        f.sa.click()
                    }
                }(c)),
                d = d.parentNode,
                null !== d && (d.insertBefore(c.bb.element, c.sa),
                c.sa.style.display = "none",
                c.sa.disabled && c.bb.disable(),
                A("change", c.sa, function(f) {
                    return function() {
                        if (!f.sa.disabled) {
                            var g = f.bb;
                            g.C.checked = f.sa.checked;
                            pi(g)
                        }
                    }
                }(c)))
        }
        a("#filter_gender_form");
        a("#filter_location_form");
        a("#filter_options_form");
        a("#animate_thumbnails_form");
        a("#floatingplayer_options_form")
    }
    function wk() {
        var a;
        Yj.g(function(b) {
            void 0 === a && (a = new bk);
            a.Sa(b)
        })
    }
    pk.prototype.Nc = function() {
        var a, b = (a = void 0 === a ? !1 : a) ? "broadcasters" : "room_list", c = document.querySelector("div.icon_not_following"), d = document.querySelector("div.icon_following");
        null === document.querySelector("#" + b) || null === c && null === d || new Wf(void 0 === this.context.S,b,a)
    }
    ;
    function uk() {
        wj();
        if ((new V("TagSort")).active) {
            var a = document.querySelector("#tag-table-container");
            null !== a && new Bj(a)
        }
    }
    function Fk() {
        y() && Object.keys(localStorage).forEach(function(a) {
            a.startsWith("renderedPms_") && delete localStorage[a]
        })
    }
    pk.prototype.Ad = function(a) {
        new uf(a)
    }
    ;
    function yk() {
        var a;
        if (0 < document.querySelectorAll(".tokencount[updatable-count]").length) {
            var b = null === (a = W.current.S) || void 0 === a ? void 0 : a.ac;
            void 0 !== b && (new Oh(b)).Ba.g(function(c) {
                c = c.Ui;
                for (var d = t(document.querySelectorAll(".tokencount[updatable-count]")), f = d.next(); !f.done; f = d.next())
                    f.value.textContent = "" + c
            })
        }
    }
    window.TS = pk;
    var Gk = ["hashtags", "online", "offline"];
    function Hk(a) {
        function b() {
            c.search.value = c.input.value;
            "" !== c.search.value ? Ik(c) : "none" === c.input.style.display ? (c.input.style.display = "inline-block",
            c.input.focus(),
            window.setTimeout(function() {
                c.input.focus()
            }),
            D("SearchBarOpen")) : (Ik(c),
            c.input.style.display = "none",
            c.xe.blur(),
            D("SearchBarClose"))
        }
        I.call(this);
        var c = this;
        this.xe = a;
        this.$c = this.N = -1;
        this.de = this.pb = !1;
        this.wc = 200;
        this.Da = [];
        this.element.id = "SearchInput";
        this.element.style.display = "inline-block";
        this.element.style.position = "relative";
        this.element.style.cssFloat = "right";
        this.element.style.right = "15px";
        this.element.style.top = "3px";
        this.element.style.width = "";
        this.element.style.overflow = "";
        this.element.style.zIndex = "2";
        this.form = document.createElement("form");
        this.form.method = "GET";
        this.form.action = "/";
        this.form.id = "filter_search_form";
        this.search = document.createElement("input");
        this.search.type = "hidden";
        this.search.name = "keywords";
        this.input = document.createElement("input");
        this.input.type = "text";
        this.input.placeholder = "" + nc;
        this.input.maxLength = 150;
        this.input.className = "search_input";
        this.input.style.display = "none";
        this.input.style.position = "absolute";
        this.input.style.right = "0px";
        this.input.style.width = "200px";
        this.input.style.height = "21px";
        this.input.style.padding = "0px 22px 2px 5px";
        this.input.style.font = "12px UbuntuRegular, Arial, Helvetica, sans-serif";
        this.input.style.marginTop = "0px";
        this.input.style.borderWidth = "1px";
        this.input.style.borderStyle = "solid";
        this.input.style.borderRadius = "3px";
        this.input.autocomplete = "off";
        this.input.style["-webkit-tap-highlight-color"] = "rgba(255, 255, 255, 0)";
        this.input.style["-webkit-focus-ring-color"] = "rgba(255, 255, 255, 0)";
        this.input.style.outline = "none";
        this.input.value = bb((new URLSearchParams(window.location.search)).get("keywords"), "");
        this.form.appendChild(this.input);
        this.form.appendChild(this.search);
        this.element.appendChild(this.form);
        this.I = document.createElement("div");
        J(this.I, "suggestionsDiv");
        this.I.style.width = "227px";
        this.I.style.font = "12px UbuntuBold, Arial, Helvetica, sans-serif";
        this.I.style.position = "absolute";
        this.I.style.top = "25px";
        this.I.style.right = "0px";
        this.I.style.borderWidth = "1px";
        this.I.style.borderStyle = "solid";
        this.I.style.display = "none";
        this.form.appendChild(this.I);
        "" !== this.input.value && (this.search.value = this.input.value,
        this.input.style.display = "inline-block");
        this.xe.onclick = b;
        this.xe.onkeydown = function(d) {
            tf(d) && (d.preventDefault(),
            b())
        }
        ;
        this.input.oninput = function() {
            Jk(c, c.input.value)
        }
        ;
        this.input.onkeydown = function(d) {
            if (tf(d))
                d.preventDefault(),
                c.search.value = c.input.value,
                Kk(c),
                c.pb && -1 < c.N && c.Da.length > c.N ? "broadcaster_suggestion" === c.Da[c.N].element.getAttribute("class") ? (D("SearchBarResultsClick", {
                    resultType: "broadcaster",
                    resultString: c.input.value
                }),
                top.location.href = "/" + c.Da[c.N].label + "/") : (D("SearchBarResultsClick", {
                    resultType: "hashtag",
                    resultString: c.input.value
                }),
                Ik(c)) : Ik(c);
            else if ("ArrowUp" === d.key || 38 === d.keyCode || "ArrowDown" === d.key || 40 === d.keyCode) {
                var f;
                if (0 < c.Da.length) {
                    c.pb = !0;
                    var g = c.N;
                    if ("ArrowDown" === d.key || 40 === d.keyCode)
                        c.N = c.N + 1 <= c.$c ? c.N + 1 : 0;
                    else if ("ArrowUp" === d.key || 38 === d.keyCode)
                        c.N = 0 <= c.N - 1 ? c.N - 1 : c.$c;
                    -1 < g && K(c.Da[g].element, "active");
                    d = c.Da[c.N];
                    g = null !== (f = d.element.getAttribute("class")) && void 0 !== f ? f : "";
                    c.input.value = g.includes("hashtag_suggestion") ? "#" + d.label : d.label;
                    J(d.element, "active")
                }
            } else
                c.pb = !1
        }
        ;
        this.input.onfocus = function() {
            c.I.style.display = null !== c.I.lastChild ? "block" : "none";
            c.de = !1;
            c.input.style.width = "200px";
            Lk.h(200)
        }
        ;
        this.input.onblur = function(d) {
            window.setTimeout(function() {
                Mk(c, d)
            }, 250)
        }
        ;
        sd().g(function(d) {
            c.wc = d ? 55 : 200;
            c.de && (c.input.style.width = c.wc + "px",
            Lk.h(c.wc))
        })
    }
    u(Hk, I);
    function Mk(a, b) {
        document.activeElement === a.input || a.I.contains(document.activeElement) || b.relatedTarget instanceof Node && a.I.contains(b.relatedTarget) || Nk(a)
    }
    function Nk(a) {
        Ok(a);
        a.I.style.display = "none";
        Kk(a);
        a.N = -1;
        a.pb = !1
    }
    function Ok(a) {
        a.de = !0;
        "" === a.input.value ? "none" !== a.input.style.display && (a.input.style.display = "none",
        Lk.h(0)) : (a.input.style.width = a.wc + "px",
        Lk.h(a.wc))
    }
    function Jk(a, b) {
        var c = 0;
        Pk(a);
        if ("" !== b) {
            var d = b.trim().replace(/^#/, "%23");
            Ia("ax/search/?keywords=" + d)[1].then(function(f) {
                if (a.input.value === b) {
                    var g = new R(f.responseText);
                    Gk.forEach(function(h) {
                        var k = Hd(g, h);
                        void 0 !== k && Object.keys(k).forEach(function(l) {
                            10 <= c || (Qk(a, k[l], h, b, c),
                            a.$c = c,
                            c += 1)
                        })
                    });
                    a.I.style.display = null !== a.I.lastChild ? "block" : "none"
                }
            }).catch(function() {
                B("Too many autocomplete queries, wait before resuming")
            })
        }
    }
    function Pk(a) {
        a.Da = [];
        for (a.$c = -1; null !== a.I.lastChild; )
            a.I.removeChild(a.I.lastChild);
        a.I.style.display = "none"
    }
    function Qk(a, b, c, d, f) {
        var g = document.createElement("div")
          , h = document.createElement("div")
          , k = document.createElement("p")
          , l = document.createElement("div")
          , m = b.toLowerCase().indexOf(d.toLowerCase())
          , n = 0 <= m ? b.slice(m, m + d.length) : "";
        if ("" === n)
            k.textContent = b;
        else {
            var r = document.createElement("span");
            r.style.font = "12px UbuntuRegular, Arial, Helvetica, sans-serif";
            r.textContent = n;
            k.appendChild(r);
            if (0 < m) {
                var w = document.createElement("span");
                w.textContent = b.slice(0, m);
                k.insertBefore(w, k.firstChild)
            }
            m + d.length < b.length && (w = document.createElement("span"),
            r.textContent = n,
            w.textContent = b.slice(m + d.length),
            k.appendChild(w))
        }
        h.style.height = "18px";
        h.style.width = "18px";
        h.style.padding = "5px 10px";
        h.style.display = "inline-block";
        k.style.display = "inline";
        k.style.position = "relative";
        k.style.margin = "0px";
        g.style.position = "relative";
        g.style.borderBottomStyle = "solid";
        g.style.borderBottomWidth = "1px";
        g.style.height = "42px";
        g.style.cursor = "pointer";
        g.setAttribute("index", "" + f);
        Rk(c, h, k);
        l.style.display = "inline-block";
        l.style.position = "absolute";
        l.style.top = "6px";
        l.style.height = "35px";
        l.style.width = "180px";
        l.style.overflow = "hidden";
        l.style.textOverflow = "ellipsis";
        l.appendChild(k);
        g.appendChild(h);
        g.appendChild(l);
        "hashtags" === c ? (k.className = g.className = "hashtag_suggestion",
        g.setAttribute("tabindex", "0"),
        g.onclick = function() {
            a.input.value = "hashtags" === c ? "#" + b : b;
            a.search.value = a.input.value;
            D("SearchBarResultsClick", {
                resultType: "hashtag",
                resultString: "#" + b
            });
            Ik(a)
        }
        ,
        g.onblur = function(z) {
            Mk(a, z)
        }
        ,
        a.I.appendChild(g)) : (d = document.createElement("a"),
        d.href = "/" + b + "/",
        d.style.textDecoration = "none",
        k.className = "broadcaster_suggestion",
        g.className = "broadcaster_suggestion",
        g.onclick = function() {
            a.input.value = "";
            a.search.value = a.input.value;
            var z = {
                resultType: "broadcaster",
                resultString: b
            };
            Nk(a);
            D("SearchBarResultsClick", z)
        }
        ,
        d.appendChild(g),
        d.onblur = function(z) {
            Mk(a, z)
        }
        ,
        a.I.appendChild(d));
        g.onmouseenter = function() {
            Kk(a);
            var z = g.getAttribute("index");
            null !== z && (a.N = parseInt(z, 10));
            a.pb = !1
        }
        ;
        g.onmouseleave = function() {
            Kk(a);
            a.N = -1;
            a.pb = !1
        }
        ;
        a.Da.push({
            label: b,
            element: g
        })
    }
    function Kk(a) {
        -1 < a.N && a.Da.length > a.N && K(a.Da[a.N].element, "active")
    }
    function Ik(a) {
        a.I.style.display = "none";
        Ok(a);
        a.input.blur();
        a.N = -1;
        a.pb = !1;
        Sk.h(a.input.value);
        a = bb(a.input.value, "");
        cb(new Map([["keywords", 3 > a.length ? "" : a]]));
        gf(X())
    }
    function Rk(a, b, c) {
        b.style.position = "relative";
        b.style.top = "6px";
        switch (a) {
        case "online":
            J(b, "icon-online");
            a = document.createElement("div");
            a.textContent = oc;
            a.style.fontSize = "9px";
            a.style.position = "relative";
            a.style.width = "105px";
            J(a, "statusText");
            c.appendChild(a);
            break;
        case "offline":
            J(b, "icon-offline");
            a = document.createElement("div");
            a.textContent = pc;
            a.style.fontSize = "9px";
            a.style.position = "relative";
            a.style.width = "100px";
            J(a, "statusText");
            c.appendChild(a);
            break;
        case "hashtags":
            J(b, "icon-hashtag"),
            c.style.top = "7px"
        }
    }
    var Lk = new H("searchInputWidthChanged")
      , Sk = new H("onSubmit");
    function Tk(a) {
        var b = a.getAttribute("data-cookie");
        null !== b && "1" !== Ba(b) && (a.style.display = "");
        b = a.querySelectorAll("a.dismiss_notice");
        var c = a.querySelectorAll("a.dismiss_notice_no_persist")
          , d = a.querySelectorAll("a.dismiss_notice_ajax");
        a.querySelectorAll("a.dismiss_notice_tfa_and_email").forEach(function(f) {
            A("click", f, function() {
                Uk(f, 10)
            })
        });
        b.forEach(function(f) {
            A("click", f, function() {
                Uk(f, 60)
            })
        });
        c.forEach(function(f) {
            A("click", f, function() {
                Uk(f)
            })
        });
        d.forEach(function(f) {
            A("click", f, function() {
                var g = f.closest("div.dismissible_notice");
                if (null !== g) {
                    var h = f.getAttribute("data-dismiss-url");
                    null !== h && v(h, {});
                    g.style.display = "none"
                }
            })
        })
    }
    function Uk(a, b) {
        a = a.closest("div.dismissible_notice");
        if (null !== a) {
            var c = a.getAttribute("data-cookie");
            null !== c && void 0 !== b && Ca(c, "1", 86400 * b);
            a.classList.contains("discover-dismissible-message") && D("SiteNoticeDismissed", {
                description: a.innerText
            });
            a.style.display = "none"
        }
    }
    ;function Vk(a, b) {
        var c = new wc(b);
        A("scroll", a, function() {
            c.ta()
        })
    }
    function Wk(a, b) {
        H.call(this, "scrollEndDebounceEvent", b);
        this.element = a;
        this.Jf = this.element.scrollLeft
    }
    u(Wk, H);
    Wk.prototype.g = function(a, b) {
        var c = this;
        a = H.prototype.g.call(this, a, void 0 === b ? !0 : b);
        Vk(this.element, function(d) {
            var f = c.element.scrollLeft;
            c.h({
                Jb: d,
                mi: f > c.Jf ? 1 : 0
            });
            c.Jf = f
        });
        return a
    }
    ;
    function Xk(a, b) {
        function c(g) {
            f = void 0 === f ? g : f;
            g -= f;
            a.scrollLeft = d < b ? d + (b - d) * g / 500 : d - (d - b) * g / 500;
            500 > g ? window.requestAnimationFrame(c) : a.scrollLeft = b
        }
        var d = a.scrollLeft, f;
        window.requestAnimationFrame(c)
    }
    ;function Yk(a) {
        I.call(this, a)
    }
    u(Yk, I);
    Yk.prototype.u = function(a) {
        I.prototype.u.call(this, void 0 === a ? "flex" : a)
    }
    ;
    Yk.prototype.l = function() {
        I.prototype.l.call(this)
    }
    ;
    function Zk(a) {
        I.call(this, a);
        var b = $k(this);
        this.element.insertAdjacentElement("afterend", b);
        a.title = "";
        al(this, b);
        hd(this.element).g(function(c) {
            b.style.visibility = c ? "visible" : "hidden"
        })
    }
    u(Zk, I);
    function al(a, b) {
        var c = Math.max(0, a.element.offsetLeft - b.offsetWidth + 24);
        b.style.left = c + "px";
        b.querySelector(".divot").style.left = a.element.offsetLeft - c - 5 + "px"
    }
    function $k(a) {
        var b = vd({
            content: a.element.title + " ",
            hasHTML: !1,
            width: "auto",
            divotPosition: 1,
            divotLeftOrTop: a.element.offsetLeft - 4 + "px"
        });
        M(b.querySelector(".divotBackground"), {
            left: "1px",
            borderLeft: "7px solid transparent",
            borderRight: "7px solid transparent",
            borderTopWidth: "7px"
        });
        J(b, "white-shadow");
        M(b, {
            top: "-" + (a.element.offsetHeight + 26) + "px",
            left: "0",
            fontSize: "12px",
            borderWidth: "1px",
            borderRadius: "4px",
            display: "block",
            visibility: "hidden"
        });
        return b
    }
    ;var bl = {
        1: "single-row",
        2: "double-rows",
        3: "triple-rows"
    };
    function cl(a, b) {
        b = void 0 === b ? 0 : b;
        I.call(this, a);
        var c = this;
        this.offset = b;
        this.li = "scroll-behavior"in document.createElement("div").style;
        this.Ga = new Jc;
        this.rd = this.he = !1;
        this.Ub = a.querySelector(".room-list-carousel");
        this.Pc = a.querySelector(".category-title").innerText;
        this.La = this.element.querySelector("ul.list");
        this.M = this.element.querySelector(".room-list-carousel-wrapper");
        this.L = [].concat(ea(this.La.querySelectorAll("li.room_list_room")));
        a = this.La.querySelector(".show-all-room");
        null !== a && (this.Ae = a.parentElement);
        a = this.element.querySelector(".room-list-category .carousel-info-icon");
        null !== a && new Zk(a);
        dl(this);
        var d = this.element.querySelector(".circle-container");
        for (this.maxWidth = Math.ceil(el(this, this.L.length) / this.Ja); 1 === Math.ceil(this.M.scrollWidth / this.M.offsetWidth) && 1 < this.Ja; )
            1 < this.Ja && (this.Ub.classList.remove(bl[this.Ja]),
            --this.Ja,
            this.Ub.classList.add(bl[this.Ja]));
        this.ag = Math.floor(this.Ub.offsetWidth / el(this, 1));
        a = this.element.querySelector(".carousel-arrow.right");
        b = this.element.querySelector(".carousel-arrow.left");
        null !== a && null !== b && (this.R = new Yk(b),
        this.R.l(),
        this.V = new Yk(a),
        this.M.onscroll = function() {
            c.offset = c.M.scrollLeft;
            fl(c, d, !1)
        }
        ,
        Ic(P.g(function() {
            c.ag = Math.floor(c.Ub.offsetWidth / el(c, 1));
            gl(c);
            fl(c, d)
        }), this.Ga),
        0 < this.offset && this.offset <= this.maxWidth ? (this.M.scrollLeft = this.offset,
        this.R.u()) : this.offset = 0,
        gl(this),
        Ic((new Wk(this.M)).g(function(f) {
            hl(c, f)
        }), this.Ga),
        a.onclick = function() {
            if (!c.rd) {
                D("CarouselArrowClicked", {
                    carouselName: c.Pc,
                    arrowDirection: "right",
                    carouselOffset: il(c)
                });
                var f = c.L.length - 1
                  , g = c.M.offsetWidth + c.M.scrollLeft;
                for (f; 0 <= f; f--) {
                    var h = c.L[f].offsetLeft
                      , k = h + el(c, 1);
                    if (h <= g && k > g)
                        break
                }
                f = c.L[0 > f ? c.L.length - 1 : f];
                c.offset = f.offsetLeft + f.scrollLeft;
                c.R.u();
                jl(c);
                fl(c, d)
            }
        }
        ,
        b.onclick = function() {
            if (!c.rd) {
                D("CarouselArrowClicked", {
                    carouselName: c.Pc,
                    arrowDirection: "left",
                    carouselOffset: il(c)
                });
                var f = el(c, c.ag)
                  , g = kl(c);
                g = c.L[g];
                f = g.offsetLeft + g.scrollLeft - f + el(c, 1);
                f <= parseInt(getComputedStyle(c.L[0]).marginLeft) && (f = 0);
                c.offset = f;
                c.V.u();
                jl(c);
                fl(c, d)
            }
        }
        )
    }
    u(cl, I);
    function fl(a, b, c) {
        var d = Math.ceil(a.M.scrollWidth / a.Ub.offsetWidth)
          , f = Math.min(d - 1, Math.ceil(a.offset / a.Ub.offsetWidth));
        if (void 0 === c || c) {
            b.style.display = 2 > d ? "none" : "block";
            c = b.querySelectorAll("div");
            for (var g = d; g < c.length; g++)
                c.item(g).remove();
            c = b.querySelectorAll("div");
            for (c = c.length; c < d; c++)
                g = F("div", {
                    className: "circle"
                }),
                b.appendChild(g)
        }
        b.querySelectorAll("div").forEach(function(h, k) {
            h.classList.remove("active");
            k === f && h.classList.add("active");
            h.onclick = function() {
                a.offset = k * a.M.scrollWidth / d;
                jl(a);
                fl(a, b);
                D("CarouselDotClicked", {
                    position: k + 1,
                    carouselName: a.Pc,
                    carouselOffset: kl(a)
                })
            }
        })
    }
    function kl(a) {
        var b = 0
          , c = a.M.scrollLeft;
        for (b; b < a.L.length; b++) {
            var d = a.L[b].offsetLeft
              , f = d + el(a, 1);
            if (d < c && f >= c)
                break
        }
        return b >= a.L.length ? 0 : b
    }
    function il(a) {
        var b = parseInt(getComputedStyle(a.L[0]).marginLeft)
          , c = a.offset;
        c >= b && (c -= b);
        b = Math.floor(c / el(a, 1) * a.Ja);
        return b - b % a.Ja
    }
    function gl(a) {
        a.M.scrollWidth - a.M.offsetWidth !== a.M.scrollLeft ? a.V.u() : a.V.l()
    }
    function el(a, b) {
        return (a.L[0].offsetWidth + parseInt(getComputedStyle(a.L[0]).marginRight)) * b
    }
    function dl(a) {
        var b = a.L.length;
        b = void 0 !== a.Ae ? b + 1 : b;
        a.Ja = Math.floor(a.La.offsetHeight / a.L[0].offsetHeight);
        b %= a.Ja;
        if (b < a.L.length - 1)
            for (var c = 0; c < b; c++) {
                var d = a.L.pop();
                void 0 !== d && a.La.removeChild(d)
            }
        void 0 !== a.Ae && a.L.push(a.Ae)
    }
    function jl(a) {
        a.he = !0;
        a.li ? (a.M.style.scrollBehavior = "smooth",
        a.M.scrollLeft = a.offset) : Xk(a.M, a.offset)
    }
    function ll(a) {
        0 < a.M.scrollLeft ? a.R.u() : a.R.l();
        gl(a)
    }
    function hl(a, b) {
        b.Jb ? (a.he || D("CarouselScrolled", {
            carouselName: a.Pc,
            carouselOffset: il(a),
            direction: b.mi
        }),
        a.M.classList.add("on-scroll")) : (ll(a),
        window.setTimeout(function() {
            a.rd || a.M.classList.remove("on-scroll")
        }, 3E3),
        a.he = !1);
        a.rd = b.Jb
    }
    ;function ml() {
        var a = this;
        this.Qe = new Map;
        nl(this, !0);
        df(X(), function() {
            nl(a)
        });
        Sk.g(function(b) {
            var c = encodeURIComponent(b.trim());
            window.setTimeout(function() {
                cb(new Map([["keywords", ""]]));
                window.location.href = "/?keywords=" + c
            })
        })
    }
    function nl(a, b) {
        b = void 0 === b ? !1 : b;
        var c = document.querySelectorAll(".categorized-room-list");
        0 < c.length && c.forEach(function(d) {
            var f = 0
              , g = d.querySelector(".category-title").innerText;
            if (!b) {
                var h = a.Qe.get(g);
                void 0 !== h && (f = h.offset,
                Kc(h.Ga))
            }
            d = new cl(d,f);
            a.Qe.set(g, d)
        })
    }
    ;function ol() {
        pk.apply(this, arguments)
    }
    u(ol, pk);
    ol.prototype.ya = function() {
        pk.prototype.ya.call(this);
        this.Cd();
        pl();
        ql();
        for (var a = t(document.querySelectorAll("div.dismissible_notice")), b = a.next(); !b.done; b = a.next())
            b = b.value,
            ("ie-support-notice" !== b.id || document.documentMode && void 0 === document.__proto__) && Tk(b);
        if (this.context.Ai) {
            b = document.querySelectorAll(".subject");
            a = document.querySelectorAll(".location");
            var c = document.querySelector(".followed_online_offline");
            if (null === c || "offline" !== c.getAttribute("data-status")) {
                c = t(b);
                for (b = c.next(); !b.done; b = c.next())
                    b.value.style.height = "16px";
                b = t(a);
                for (a = b.next(); !a.done; a = b.next())
                    a.value.style.display = ""
            } else {
                c = t(b);
                for (b = c.next(); !b.done; b = c.next())
                    b.value.style.height = "32px";
                b = t(a);
                for (a = b.next(); !a.done; a = b.next())
                    a.value.style.display = "none"
            }
        }
        this.context.Jh ? ff(15E3) : ff(1E3 * this.context.ci);
        rl();
        this.Ad();
        null !== document.getElementById("discover_root") && (new ml,
        new Wf(void 0 === this.context.S,"discover_root",!1))
    }
    ;
    ol.prototype.qe = function(a) {
        pk.prototype.qe.call(this, a);
        this.context.ci = a.refreshFrequency;
        this.context.Jh = a.isPremium;
        this.context.Ai = a.showLocation
    }
    ;
    ol.prototype.Cd = function() {
        var a = document.getElementById("search_icon");
        if (null !== a) {
            a.style.display = "block";
            var b = new Hk(a);
            null !== a.parentElement && a.parentElement.insertBefore(b.element, a)
        }
    }
    ;
    function pl() {
        Sa() || Ta() || (document.body.style.minWidth = 500 - jd() + "px");
        kd();
        var a = document.querySelector("#main .content")
          , b = document.querySelector("#main .content .ad")
          , c = document.querySelector("#main .content .c-1");
        if (a instanceof HTMLElement && b instanceof HTMLElement && c instanceof HTMLElement) {
            var d = a.style.paddingRight;
            P.g(function() {
                840 > document.documentElement.clientWidth ? (c.style.marginRight = "20px",
                b.style.display = "none",
                a.style.paddingRight = "10px") : (c.style.marginRight = "",
                b.style.display = "block",
                a.style.paddingRight = d)
            })
        }
        var f = document.querySelector(".ad_table");
        if (f instanceof HTMLElement) {
            var g = Array.from(f.querySelectorAll("td"));
            P.g(function() {
                g.forEach(function(h, k) {
                    h.style.display = 950 < document.documentElement.clientWidth ? "table-cell" : 650 < document.documentElement.clientWidth ? -1 < [2, 5].indexOf(k) ? "none" : "table-cell" : -1 < [1, 2, 4, 5].indexOf(k) ? "none" : "table-cell"
                })
            })
        }
    }
    function ql() {
        var a = document.querySelector(".top-section .sub-nav")
          , b = document.querySelector("#followed_tab");
        if (null !== a && a instanceof HTMLElement) {
            var c = new I(a);
            c.element.style.overflow = "hidden";
            c.element.style.position = "relative";
            c.element.style.display = "block";
            c.element.style.top = "1px";
            c.element.style.marginTop = "2px";
            Array.from(a.children).forEach(function(f) {
                if (f instanceof HTMLElement)
                    if (f.style.display = "inline-block",
                    f.classList.add("gender-tab"),
                    "followed_tab" !== f.id) {
                        f.style.position = "relative";
                        f.style.font = getComputedStyle(f).font;
                        var g = new rg(f);
                        g.hd.g(function(h) {
                            g.element.style.margin = h ? "5px 0" : "";
                            g.element.style.display = h ? "block" : "inline-block"
                        });
                        f.firstElementChild instanceof HTMLAnchorElement && (f.firstElementChild.style.cursor = getComputedStyle(f.firstElementChild).cursor,
                        f.firstElementChild.style.textDecoration = "none");
                        Nc(c, g)
                    } else
                        f.style.position = "absolute",
                        Nc(c, new I(f))
            });
            var d = new ig;
            d.element.classList.add("gender-tab");
            c.K(d);
            d.Ca.element.style.width = "253px";
            d.Rc.g(function(f) {
                b instanceof HTMLElement && (f ? (f = d.element,
                f = f.offsetWidth + gd(getComputedStyle(f).marginLeft) + gd(getComputedStyle(f).marginRight)) : f = 0,
                b.style.marginLeft = f + "px")
            });
            M(d, {
                borderWidth: "1px",
                borderStyle: "solid",
                borderRadius: "4px 4px 0 0",
                height: "27px",
                lineHeight: "27px",
                marginRight: "2px",
                width: "41px"
            });
            M(d.wa, {
                padding: "8px 20px 8px 0",
                width: "108px"
            })
        }
    }
    ol.prototype.Ad = function() {
        new uf(!1)
    }
    ;
    window.TS = ol;
    function rl() {
        Bc && A("pageshow", window, function(a) {
            if (a.persisted) {
                a = X();
                a = t(a.Zb.values());
                for (var b = a.next(); !b.done; b = a.next())
                    b.value.qd()
            }
        })
    }
    ;var sl = window.newrelic;
    function tl(a, b, c) {
        c = void 0 === c ? {} : c;
        try {
            if (void 0 !== sl) {
                var d = {};
                d["attributes.level"] = a;
                if ("object" === typeof c)
                    for (var f in c)
                        d["attributes." + f] = c[f];
                sl.noticeError(b, d)
            }
        } catch (g) {
            x("New Relic Error in reportError: " + g.toString())
        }
    }
    function B(a, b) {
        var c = void 0 === c ? "" : c;
        void 0 !== window.console && console.warn(c.concat("WARN "), a, void 0 === b ? "" : b);
        try {
            var d = "object" === typeof a ? JSON.stringify(a) : a.toString()
        } catch (f) {
            d = "" + a
        }
        tl(c.concat("WARN"), Error(d), b)
    }
    function x(a, b, c) {
        c = void 0 === c ? "" : c;
        void 0 !== window.console && console.error(c.concat("ERROR "), a, void 0 === b ? "" : b);
        try {
            var d = "object" === typeof a ? JSON.stringify(a) : a.toString()
        } catch (f) {
            d = "" + a
        }
        tl(c.concat("ERROR"), Error(d), b)
    }
    window.onerror = function(a, b, c, d, f) {
        try {
            var g = JSON.stringify(f)
        } catch (h) {
            g = "" + f
        }
        x(['"Message: " ' + a, '"URL: "  ' + b, '"Line: " ' + c, '"Column: " ' + d, '"Error object: " ' + g].join("\n"), {}, "");
        return !1
    }
    ;
}
).call(this);
