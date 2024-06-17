(() => {
  var e = {
      694: (e, t, n) => {
        "use strict";
        var r = n(925);
        function i() {}
        function o() {}
        (o.resetWarningCache = i),
          (e.exports = function () {
            function e(e, t, n, i, o, a) {
              if (a !== r) {
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
            var n = {
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
              checkPropTypes: o,
              resetWarningCache: i,
            };
            return (n.PropTypes = n), n;
          });
      },
      556: (e, t, n) => {
        e.exports = n(694)();
      },
      925: (e) => {
        "use strict";
        e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
    },
    t = {};
  function n(r) {
    var i = t[r];
    if (void 0 !== i) return i.exports;
    var o = (t[r] = { exports: {} });
    return e[r](o, o.exports, n), o.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      "use strict";
      var e = {};
      n.r(e),
        n.d(e, {
          Decoder: () => Nr,
          Encoder: () => Lr,
          PacketType: () => Sr,
          protocol: () => Er,
        });
      var t,
        r,
        i,
        o,
        a,
        s,
        l,
        c,
        d,
        u,
        p,
        h = {},
        m = [],
        g = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
        f = Array.isArray;
      function b(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      }
      function y(e) {
        var t = e.parentNode;
        t && t.removeChild(e);
      }
      function v(e, n, r) {
        var i,
          o,
          a,
          s = {};
        for (a in n)
          "key" == a ? (i = n[a]) : "ref" == a ? (o = n[a]) : (s[a] = n[a]);
        if (
          (arguments.length > 2 &&
            (s.children = arguments.length > 3 ? t.call(arguments, 2) : r),
          "function" == typeof e && null != e.defaultProps)
        )
          for (a in e.defaultProps)
            void 0 === s[a] && (s[a] = e.defaultProps[a]);
        return _(e, s, i, o, null);
      }
      function _(e, t, n, o, a) {
        var s = {
          type: e,
          props: t,
          key: n,
          ref: o,
          __k: null,
          __: null,
          __b: 0,
          __e: null,
          __d: void 0,
          __c: null,
          constructor: void 0,
          __v: null == a ? ++i : a,
          __i: -1,
          __u: 0,
        };
        return null == a && null != r.vnode && r.vnode(s), s;
      }
      function w(e) {
        return e.children;
      }
      function x(e, t) {
        (this.props = e), (this.context = t);
      }
      function C(e, t) {
        if (null == t) return e.__ ? C(e.__, e.__i + 1) : null;
        for (var n; t < e.__k.length; t++)
          if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
        return "function" == typeof e.type ? C(e) : null;
      }
      function k(e) {
        var t, n;
        if (null != (e = e.__) && null != e.__c) {
          for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
            if (null != (n = e.__k[t]) && null != n.__e) {
              e.__e = e.__c.base = n.__e;
              break;
            }
          return k(e);
        }
      }
      function E(e) {
        ((!e.__d && (e.__d = !0) && o.push(e) && !S.__r++) ||
          a !== r.debounceRendering) &&
          ((a = r.debounceRendering) || s)(S);
      }
      function S() {
        var e, t, n, i, a, s, c, d;
        for (o.sort(l); (e = o.shift()); )
          e.__d &&
            ((t = o.length),
            (i = void 0),
            (s = (a = (n = e).__v).__e),
            (c = []),
            (d = []),
            n.__P &&
              (((i = b({}, a)).__v = a.__v + 1),
              r.vnode && r.vnode(i),
              I(
                n.__P,
                i,
                a,
                n.__n,
                n.__P.namespaceURI,
                32 & a.__u ? [s] : null,
                c,
                null == s ? C(a) : s,
                !!(32 & a.__u),
                d
              ),
              (i.__v = a.__v),
              (i.__.__k[i.__i] = i),
              j(c, i, d),
              i.__e != s && k(i)),
            o.length > t && o.sort(l));
        S.__r = 0;
      }
      function L(e, t, n, r, i, o, a, s, l, c, d) {
        var u,
          p,
          g,
          f,
          b,
          y = (r && r.__k) || m,
          v = t.length;
        for (n.__d = l, T(n, t, y), l = n.__d, u = 0; u < v; u++)
          null != (g = n.__k[u]) &&
            "boolean" != typeof g &&
            "function" != typeof g &&
            ((p = -1 === g.__i ? h : y[g.__i] || h),
            (g.__i = u),
            I(e, g, p, i, o, a, s, l, c, d),
            (f = g.__e),
            g.ref &&
              p.ref != g.ref &&
              (p.ref && P(p.ref, null, g), d.push(g.ref, g.__c || f, g)),
            null == b && null != f && (b = f),
            65536 & g.__u || p.__k === g.__k
              ? (l && !l.isConnected && (l = C(p)), (l = N(g, l, e)))
              : "function" == typeof g.type && void 0 !== g.__d
              ? (l = g.__d)
              : f && (l = f.nextSibling),
            (g.__d = void 0),
            (g.__u &= -196609));
        (n.__d = l), (n.__e = b);
      }
      function T(e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          l = t.length,
          c = n.length,
          d = c,
          u = 0;
        for (e.__k = [], r = 0; r < l; r++)
          (a = r + u),
            null !=
            (i = e.__k[r] =
              null == (i = t[r]) ||
              "boolean" == typeof i ||
              "function" == typeof i
                ? null
                : "string" == typeof i ||
                  "number" == typeof i ||
                  "bigint" == typeof i ||
                  i.constructor == String
                ? _(null, i, null, null, null)
                : f(i)
                ? _(w, { children: i }, null, null, null)
                : void 0 === i.constructor && i.__b > 0
                ? _(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v)
                : i)
              ? ((i.__ = e),
                (i.__b = e.__b + 1),
                (s = D(i, n, a, d)),
                (i.__i = s),
                (o = null),
                -1 !== s && (d--, (o = n[s]) && (o.__u |= 131072)),
                null == o || null === o.__v
                  ? (-1 == s && u--,
                    "function" != typeof i.type && (i.__u |= 65536))
                  : s !== a &&
                    (s === a + 1
                      ? u++
                      : s > a
                      ? d > l - a
                        ? (u += s - a)
                        : u--
                      : s < a
                      ? s == a - 1 && (u = s - a)
                      : (u = 0),
                    s !== r + u && (i.__u |= 65536)))
              : (o = n[a]) &&
                null == o.key &&
                o.__e &&
                !(131072 & o.__u) &&
                (o.__e == e.__d && (e.__d = C(o)),
                R(o, o, !1),
                (n[a] = null),
                d--);
        if (d)
          for (r = 0; r < c; r++)
            null != (o = n[r]) &&
              !(131072 & o.__u) &&
              (o.__e == e.__d && (e.__d = C(o)), R(o, o));
      }
      function N(e, t, n) {
        var r, i;
        if ("function" == typeof e.type) {
          for (r = e.__k, i = 0; r && i < r.length; i++)
            r[i] && ((r[i].__ = e), (t = N(r[i], t, n)));
          return t;
        }
        e.__e != t && (n.insertBefore(e.__e, t || null), (t = e.__e));
        do {
          t = t && t.nextSibling;
        } while (null != t && 8 === t.nodeType);
        return t;
      }
      function M(e, t) {
        return (
          (t = t || []),
          null == e ||
            "boolean" == typeof e ||
            (f(e)
              ? e.some(function (e) {
                  M(e, t);
                })
              : t.push(e)),
          t
        );
      }
      function D(e, t, n, r) {
        var i = e.key,
          o = e.type,
          a = n - 1,
          s = n + 1,
          l = t[n];
        if (
          null === l ||
          (l && i == l.key && o === l.type && !(131072 & l.__u))
        )
          return n;
        if (r > (null == l || 131072 & l.__u ? 0 : 1))
          for (; a >= 0 || s < t.length; ) {
            if (a >= 0) {
              if ((l = t[a]) && !(131072 & l.__u) && i == l.key && o === l.type)
                return a;
              a--;
            }
            if (s < t.length) {
              if ((l = t[s]) && !(131072 & l.__u) && i == l.key && o === l.type)
                return s;
              s++;
            }
          }
        return -1;
      }
      function A(e, t, n) {
        "-" === t[0]
          ? e.setProperty(t, null == n ? "" : n)
          : (e[t] =
              null == n
                ? ""
                : "number" != typeof n || g.test(t)
                ? n
                : n + "px");
      }
      function O(e, t, n, r, i) {
        var o;
        e: if ("style" === t)
          if ("string" == typeof n) e.style.cssText = n;
          else {
            if (("string" == typeof r && (e.style.cssText = r = ""), r))
              for (t in r) (n && t in n) || A(e.style, t, "");
            if (n) for (t in n) (r && n[t] === r[t]) || A(e.style, t, n[t]);
          }
        else if ("o" === t[0] && "n" === t[1])
          (o = t !== (t = t.replace(/(PointerCapture)$|Capture$/i, "$1"))),
            (t =
              t.toLowerCase() in e || "onFocusOut" === t || "onFocusIn" === t
                ? t.toLowerCase().slice(2)
                : t.slice(2)),
            e.l || (e.l = {}),
            (e.l[t + o] = n),
            n
              ? r
                ? (n.u = r.u)
                : ((n.u = c), e.addEventListener(t, o ? u : d, o))
              : e.removeEventListener(t, o ? u : d, o);
        else {
          if ("http://www.w3.org/2000/svg" == i)
            t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
          else if (
            "width" != t &&
            "height" != t &&
            "href" != t &&
            "list" != t &&
            "form" != t &&
            "tabIndex" != t &&
            "download" != t &&
            "rowSpan" != t &&
            "colSpan" != t &&
            "role" != t &&
            t in e
          )
            try {
              e[t] = null == n ? "" : n;
              break e;
            } catch (e) {}
          "function" == typeof n ||
            (null == n || (!1 === n && "-" !== t[4])
              ? e.removeAttribute(t)
              : e.setAttribute(t, n));
        }
      }
      function z(e) {
        return function (t) {
          if (this.l) {
            var n = this.l[t.type + e];
            if (null == t.t) t.t = c++;
            else if (t.t < n.u) return;
            return n(r.event ? r.event(t) : t);
          }
        };
      }
      function I(e, t, n, i, o, a, s, l, c, d) {
        var u,
          p,
          h,
          m,
          g,
          y,
          v,
          _,
          C,
          k,
          E,
          S,
          T,
          N,
          M,
          D = t.type;
        if (void 0 !== t.constructor) return null;
        128 & n.__u && ((c = !!(32 & n.__u)), (a = [(l = t.__e = n.__e)])),
          (u = r.__b) && u(t);
        e: if ("function" == typeof D)
          try {
            if (
              ((_ = t.props),
              (C = (u = D.contextType) && i[u.__c]),
              (k = u ? (C ? C.props.value : u.__) : i),
              n.__c
                ? (v = (p = t.__c = n.__c).__ = p.__E)
                : ("prototype" in D && D.prototype.render
                    ? (t.__c = p = new D(_, k))
                    : ((t.__c = p = new x(_, k)),
                      (p.constructor = D),
                      (p.render = H)),
                  C && C.sub(p),
                  (p.props = _),
                  p.state || (p.state = {}),
                  (p.context = k),
                  (p.__n = i),
                  (h = p.__d = !0),
                  (p.__h = []),
                  (p._sb = [])),
              null == p.__s && (p.__s = p.state),
              null != D.getDerivedStateFromProps &&
                (p.__s == p.state && (p.__s = b({}, p.__s)),
                b(p.__s, D.getDerivedStateFromProps(_, p.__s))),
              (m = p.props),
              (g = p.state),
              (p.__v = t),
              h)
            )
              null == D.getDerivedStateFromProps &&
                null != p.componentWillMount &&
                p.componentWillMount(),
                null != p.componentDidMount && p.__h.push(p.componentDidMount);
            else {
              if (
                (null == D.getDerivedStateFromProps &&
                  _ !== m &&
                  null != p.componentWillReceiveProps &&
                  p.componentWillReceiveProps(_, k),
                !p.__e &&
                  ((null != p.shouldComponentUpdate &&
                    !1 === p.shouldComponentUpdate(_, p.__s, k)) ||
                    t.__v === n.__v))
              ) {
                for (
                  t.__v !== n.__v &&
                    ((p.props = _), (p.state = p.__s), (p.__d = !1)),
                    t.__e = n.__e,
                    t.__k = n.__k,
                    t.__k.forEach(function (e) {
                      e && (e.__ = t);
                    }),
                    E = 0;
                  E < p._sb.length;
                  E++
                )
                  p.__h.push(p._sb[E]);
                (p._sb = []), p.__h.length && s.push(p);
                break e;
              }
              null != p.componentWillUpdate &&
                p.componentWillUpdate(_, p.__s, k),
                null != p.componentDidUpdate &&
                  p.__h.push(function () {
                    p.componentDidUpdate(m, g, y);
                  });
            }
            if (
              ((p.context = k),
              (p.props = _),
              (p.__P = e),
              (p.__e = !1),
              (S = r.__r),
              (T = 0),
              "prototype" in D && D.prototype.render)
            ) {
              for (
                p.state = p.__s,
                  p.__d = !1,
                  S && S(t),
                  u = p.render(p.props, p.state, p.context),
                  N = 0;
                N < p._sb.length;
                N++
              )
                p.__h.push(p._sb[N]);
              p._sb = [];
            } else
              do {
                (p.__d = !1),
                  S && S(t),
                  (u = p.render(p.props, p.state, p.context)),
                  (p.state = p.__s);
              } while (p.__d && ++T < 25);
            (p.state = p.__s),
              null != p.getChildContext &&
                (i = b(b({}, i), p.getChildContext())),
              h ||
                null == p.getSnapshotBeforeUpdate ||
                (y = p.getSnapshotBeforeUpdate(m, g)),
              L(
                e,
                f(
                  (M =
                    null != u && u.type === w && null == u.key
                      ? u.props.children
                      : u)
                )
                  ? M
                  : [M],
                t,
                n,
                i,
                o,
                a,
                s,
                l,
                c,
                d
              ),
              (p.base = t.__e),
              (t.__u &= -161),
              p.__h.length && s.push(p),
              v && (p.__E = p.__ = null);
          } catch (e) {
            (t.__v = null),
              c || null != a
                ? ((t.__e = l),
                  (t.__u |= c ? 160 : 32),
                  (a[a.indexOf(l)] = null))
                : ((t.__e = n.__e), (t.__k = n.__k)),
              r.__e(e, t, n);
          }
        else
          null == a && t.__v === n.__v
            ? ((t.__k = n.__k), (t.__e = n.__e))
            : (t.__e = B(n.__e, t, n, i, o, a, s, c, d));
        (u = r.diffed) && u(t);
      }
      function j(e, t, n) {
        t.__d = void 0;
        for (var i = 0; i < n.length; i++) P(n[i], n[++i], n[++i]);
        r.__c && r.__c(t, e),
          e.some(function (t) {
            try {
              (e = t.__h),
                (t.__h = []),
                e.some(function (e) {
                  e.call(t);
                });
            } catch (e) {
              r.__e(e, t.__v);
            }
          });
      }
      function B(e, n, r, i, o, a, s, l, c) {
        var d,
          u,
          p,
          m,
          g,
          b,
          v,
          _ = r.props,
          w = n.props,
          x = n.type;
        if (
          ("svg" === x
            ? (o = "http://www.w3.org/2000/svg")
            : "math" === x
            ? (o = "http://www.w3.org/1998/Math/MathML")
            : o || (o = "http://www.w3.org/1999/xhtml"),
          null != a)
        )
          for (d = 0; d < a.length; d++)
            if (
              (g = a[d]) &&
              "setAttribute" in g == !!x &&
              (x ? g.localName === x : 3 === g.nodeType)
            ) {
              (e = g), (a[d] = null);
              break;
            }
        if (null == e) {
          if (null === x) return document.createTextNode(w);
          (e = document.createElementNS(o, x, w.is && w)), (a = null), (l = !1);
        }
        if (null === x) _ === w || (l && e.data === w) || (e.data = w);
        else {
          if (
            ((a = a && t.call(e.childNodes)),
            (_ = r.props || h),
            !l && null != a)
          )
            for (_ = {}, d = 0; d < e.attributes.length; d++)
              _[(g = e.attributes[d]).name] = g.value;
          for (d in _)
            if (((g = _[d]), "children" == d));
            else if ("dangerouslySetInnerHTML" == d) p = g;
            else if ("key" !== d && !(d in w)) {
              if (
                ("value" == d && "defaultValue" in w) ||
                ("checked" == d && "defaultChecked" in w)
              )
                continue;
              O(e, d, null, g, o);
            }
          for (d in w)
            (g = w[d]),
              "children" == d
                ? (m = g)
                : "dangerouslySetInnerHTML" == d
                ? (u = g)
                : "value" == d
                ? (b = g)
                : "checked" == d
                ? (v = g)
                : "key" === d ||
                  (l && "function" != typeof g) ||
                  _[d] === g ||
                  O(e, d, g, _[d], o);
          if (u)
            l ||
              (p && (u.__html === p.__html || u.__html === e.innerHTML)) ||
              (e.innerHTML = u.__html),
              (n.__k = []);
          else if (
            (p && (e.innerHTML = ""),
            L(
              e,
              f(m) ? m : [m],
              n,
              r,
              i,
              "foreignObject" === x ? "http://www.w3.org/1999/xhtml" : o,
              a,
              s,
              a ? a[0] : r.__k && C(r, 0),
              l,
              c
            ),
            null != a)
          )
            for (d = a.length; d--; ) null != a[d] && y(a[d]);
          l ||
            ((d = "value"),
            void 0 !== b &&
              (b !== e[d] ||
                ("progress" === x && !b) ||
                ("option" === x && b !== _[d])) &&
              O(e, d, b, _[d], o),
            (d = "checked"),
            void 0 !== v && v !== e[d] && O(e, d, v, _[d], o));
        }
        return e;
      }
      function P(e, t, n) {
        try {
          "function" == typeof e ? e(t) : (e.current = t);
        } catch (e) {
          r.__e(e, n);
        }
      }
      function R(e, t, n) {
        var i, o;
        if (
          (r.unmount && r.unmount(e),
          (i = e.ref) && ((i.current && i.current !== e.__e) || P(i, null, t)),
          null != (i = e.__c))
        ) {
          if (i.componentWillUnmount)
            try {
              i.componentWillUnmount();
            } catch (e) {
              r.__e(e, t);
            }
          i.base = i.__P = null;
        }
        if ((i = e.__k))
          for (o = 0; o < i.length; o++)
            i[o] && R(i[o], t, n || "function" != typeof e.type);
        n || null == e.__e || y(e.__e), (e.__c = e.__ = e.__e = e.__d = void 0);
      }
      function H(e, t, n) {
        return this.constructor(e, n);
      }
      function $(e, n, i) {
        var o, a, s, l;
        r.__ && r.__(e, n),
          (a = (o = "function" == typeof i) ? null : (i && i.__k) || n.__k),
          (s = []),
          (l = []),
          I(
            n,
            (e = ((!o && i) || n).__k = v(w, null, [e])),
            a || h,
            h,
            n.namespaceURI,
            !o && i
              ? [i]
              : a
              ? null
              : n.firstChild
              ? t.call(n.childNodes)
              : null,
            s,
            !o && i ? i : a ? a.__e : n.firstChild,
            o,
            l
          ),
          j(s, e, l);
      }
      function W(e, t) {
        $(e, t, W);
      }
      function F(e, n, r) {
        var i,
          o,
          a,
          s,
          l = b({}, e.props);
        for (a in (e.type && e.type.defaultProps && (s = e.type.defaultProps),
        n))
          "key" == a
            ? (i = n[a])
            : "ref" == a
            ? (o = n[a])
            : (l[a] = void 0 === n[a] && void 0 !== s ? s[a] : n[a]);
        return (
          arguments.length > 2 &&
            (l.children = arguments.length > 3 ? t.call(arguments, 2) : r),
          _(e.type, l, i || e.key, o || e.ref, null)
        );
      }
      function U(e, t) {
        var n = {
          __c: (t = "__cC" + p++),
          __: e,
          Consumer: function (e, t) {
            return e.children(t);
          },
          Provider: function (e) {
            var n, r;
            return (
              this.getChildContext ||
                ((n = []),
                ((r = {})[t] = this),
                (this.getChildContext = function () {
                  return r;
                }),
                (this.shouldComponentUpdate = function (e) {
                  this.props.value !== e.value &&
                    n.some(function (e) {
                      (e.__e = !0), E(e);
                    });
                }),
                (this.sub = function (e) {
                  n.push(e);
                  var t = e.componentWillUnmount;
                  e.componentWillUnmount = function () {
                    n.splice(n.indexOf(e), 1), t && t.call(e);
                  };
                })),
              e.children
            );
          },
        };
        return (n.Provider.__ = n.Consumer.contextType = n);
      }
      (t = m.slice),
        (r = {
          __e: function (e, t, n, r) {
            for (var i, o, a; (t = t.__); )
              if ((i = t.__c) && !i.__)
                try {
                  if (
                    ((o = i.constructor) &&
                      null != o.getDerivedStateFromError &&
                      (i.setState(o.getDerivedStateFromError(e)), (a = i.__d)),
                    null != i.componentDidCatch &&
                      (i.componentDidCatch(e, r || {}), (a = i.__d)),
                    a)
                  )
                    return (i.__E = i);
                } catch (t) {
                  e = t;
                }
            throw e;
          },
        }),
        (i = 0),
        (x.prototype.setState = function (e, t) {
          var n;
          (n =
            null != this.__s && this.__s !== this.state
              ? this.__s
              : (this.__s = b({}, this.state))),
            "function" == typeof e && (e = e(b({}, n), this.props)),
            e && b(n, e),
            null != e && this.__v && (t && this._sb.push(t), E(this));
        }),
        (x.prototype.forceUpdate = function (e) {
          this.__v && ((this.__e = !0), e && this.__h.push(e), E(this));
        }),
        (x.prototype.render = w),
        (o = []),
        (s =
          "function" == typeof Promise
            ? Promise.prototype.then.bind(Promise.resolve())
            : setTimeout),
        (l = function (e, t) {
          return e.__v.__b - t.__v.__b;
        }),
        (S.__r = 0),
        (c = 0),
        (d = z(!1)),
        (u = z(!0)),
        (p = 0);
      var V,
        q,
        G,
        K,
        Y = 0,
        J = [],
        Z = [],
        Q = r,
        X = Q.__b,
        ee = Q.__r,
        te = Q.diffed,
        ne = Q.__c,
        re = Q.unmount,
        ie = Q.__;
      function oe(e, t) {
        Q.__h && Q.__h(q, e, Y || t), (Y = 0);
        var n = q.__H || (q.__H = { __: [], __h: [] });
        return e >= n.__.length && n.__.push({ __V: Z }), n.__[e];
      }
      function ae(e) {
        return (Y = 1), se(Ce, e);
      }
      function se(e, t, n) {
        var r = oe(V++, 2);
        if (
          ((r.t = e),
          !r.__c &&
            ((r.__ = [
              n ? n(t) : Ce(void 0, t),
              function (e) {
                var t = r.__N ? r.__N[0] : r.__[0],
                  n = r.t(t, e);
                t !== n && ((r.__N = [n, r.__[1]]), r.__c.setState({}));
              },
            ]),
            (r.__c = q),
            !q.u))
        ) {
          var i = function (e, t, n) {
            if (!r.__c.__H) return !0;
            var i = r.__c.__H.__.filter(function (e) {
              return !!e.__c;
            });
            if (
              i.every(function (e) {
                return !e.__N;
              })
            )
              return !o || o.call(this, e, t, n);
            var a = !1;
            return (
              i.forEach(function (e) {
                if (e.__N) {
                  var t = e.__[0];
                  (e.__ = e.__N), (e.__N = void 0), t !== e.__[0] && (a = !0);
                }
              }),
              !(!a && r.__c.props === e) && (!o || o.call(this, e, t, n))
            );
          };
          q.u = !0;
          var o = q.shouldComponentUpdate,
            a = q.componentWillUpdate;
          (q.componentWillUpdate = function (e, t, n) {
            if (this.__e) {
              var r = o;
              (o = void 0), i(e, t, n), (o = r);
            }
            a && a.call(this, e, t, n);
          }),
            (q.shouldComponentUpdate = i);
        }
        return r.__N || r.__;
      }
      function le(e, t) {
        var n = oe(V++, 3);
        !Q.__s && xe(n.__H, t) && ((n.__ = e), (n.i = t), q.__H.__h.push(n));
      }
      function ce(e, t) {
        var n = oe(V++, 4);
        !Q.__s && xe(n.__H, t) && ((n.__ = e), (n.i = t), q.__h.push(n));
      }
      function de(e) {
        return (
          (Y = 5),
          pe(function () {
            return { current: e };
          }, [])
        );
      }
      function ue(e, t, n) {
        (Y = 6),
          ce(
            function () {
              return "function" == typeof e
                ? (e(t()),
                  function () {
                    return e(null);
                  })
                : e
                ? ((e.current = t()),
                  function () {
                    return (e.current = null);
                  })
                : void 0;
            },
            null == n ? n : n.concat(e)
          );
      }
      function pe(e, t) {
        var n = oe(V++, 7);
        return xe(n.__H, t)
          ? ((n.__V = e()), (n.i = t), (n.__h = e), n.__V)
          : n.__;
      }
      function he(e, t) {
        return (
          (Y = 8),
          pe(function () {
            return e;
          }, t)
        );
      }
      function me(e) {
        var t = q.context[e.__c],
          n = oe(V++, 9);
        return (
          (n.c = e),
          t ? (null == n.__ && ((n.__ = !0), t.sub(q)), t.props.value) : e.__
        );
      }
      function ge(e, t) {
        Q.useDebugValue && Q.useDebugValue(t ? t(e) : e);
      }
      function fe() {
        var e = oe(V++, 11);
        if (!e.__) {
          for (var t = q.__v; null !== t && !t.__m && null !== t.__; ) t = t.__;
          var n = t.__m || (t.__m = [0, 0]);
          e.__ = "P" + n[0] + "-" + n[1]++;
        }
        return e.__;
      }
      function be() {
        for (var e; (e = J.shift()); )
          if (e.__P && e.__H)
            try {
              e.__H.__h.forEach(_e), e.__H.__h.forEach(we), (e.__H.__h = []);
            } catch (t) {
              (e.__H.__h = []), Q.__e(t, e.__v);
            }
      }
      (Q.__b = function (e) {
        (q = null), X && X(e);
      }),
        (Q.__ = function (e, t) {
          e && t.__k && t.__k.__m && (e.__m = t.__k.__m), ie && ie(e, t);
        }),
        (Q.__r = function (e) {
          ee && ee(e), (V = 0);
          var t = (q = e.__c).__H;
          t &&
            (G === q
              ? ((t.__h = []),
                (q.__h = []),
                t.__.forEach(function (e) {
                  e.__N && (e.__ = e.__N), (e.__V = Z), (e.__N = e.i = void 0);
                }))
              : (t.__h.forEach(_e), t.__h.forEach(we), (t.__h = []), (V = 0))),
            (G = q);
        }),
        (Q.diffed = function (e) {
          te && te(e);
          var t = e.__c;
          t &&
            t.__H &&
            (t.__H.__h.length &&
              ((1 !== J.push(t) && K === Q.requestAnimationFrame) ||
                ((K = Q.requestAnimationFrame) || ve)(be)),
            t.__H.__.forEach(function (e) {
              e.i && (e.__H = e.i),
                e.__V !== Z && (e.__ = e.__V),
                (e.i = void 0),
                (e.__V = Z);
            })),
            (G = q = null);
        }),
        (Q.__c = function (e, t) {
          t.some(function (e) {
            try {
              e.__h.forEach(_e),
                (e.__h = e.__h.filter(function (e) {
                  return !e.__ || we(e);
                }));
            } catch (n) {
              t.some(function (e) {
                e.__h && (e.__h = []);
              }),
                (t = []),
                Q.__e(n, e.__v);
            }
          }),
            ne && ne(e, t);
        }),
        (Q.unmount = function (e) {
          re && re(e);
          var t,
            n = e.__c;
          n &&
            n.__H &&
            (n.__H.__.forEach(function (e) {
              try {
                _e(e);
              } catch (e) {
                t = e;
              }
            }),
            (n.__H = void 0),
            t && Q.__e(t, n.__v));
        });
      var ye = "function" == typeof requestAnimationFrame;
      function ve(e) {
        var t,
          n = function () {
            clearTimeout(r), ye && cancelAnimationFrame(t), setTimeout(e);
          },
          r = setTimeout(n, 100);
        ye && (t = requestAnimationFrame(n));
      }
      function _e(e) {
        var t = q,
          n = e.__c;
        "function" == typeof n && ((e.__c = void 0), n()), (q = t);
      }
      function we(e) {
        var t = q;
        (e.__c = e.__()), (q = t);
      }
      function xe(e, t) {
        return (
          !e ||
          e.length !== t.length ||
          t.some(function (t, n) {
            return t !== e[n];
          })
        );
      }
      function Ce(e, t) {
        return "function" == typeof t ? t(e) : t;
      }
      function ke(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
      }
      function Ee(e, t) {
        for (var n in e) if ("__source" !== n && !(n in t)) return !0;
        for (var r in t) if ("__source" !== r && e[r] !== t[r]) return !0;
        return !1;
      }
      function Se(e, t) {
        (this.props = e), (this.context = t);
      }
      ((Se.prototype = new x()).isPureReactComponent = !0),
        (Se.prototype.shouldComponentUpdate = function (e, t) {
          return Ee(this.props, e) || Ee(this.state, t);
        });
      var Le = r.__b;
      r.__b = function (e) {
        e.type &&
          e.type.__f &&
          e.ref &&
          ((e.props.ref = e.ref), (e.ref = null)),
          Le && Le(e);
      };
      var Te =
        ("undefined" != typeof Symbol &&
          Symbol.for &&
          Symbol.for("react.forward_ref")) ||
        3911;
      function Ne(e) {
        function t(t) {
          var n = ke({}, t);
          return delete n.ref, e(n, t.ref || null);
        }
        return (
          (t.$$typeof = Te),
          (t.render = t),
          (t.prototype.isReactComponent = t.__f = !0),
          (t.displayName = "ForwardRef(" + (e.displayName || e.name) + ")"),
          t
        );
      }
      var Me = function (e, t) {
          return null == e ? null : M(M(e).map(t));
        },
        De = {
          map: Me,
          forEach: Me,
          count: function (e) {
            return e ? M(e).length : 0;
          },
          only: function (e) {
            var t = M(e);
            if (1 !== t.length) throw "Children.only";
            return t[0];
          },
          toArray: M,
        },
        Ae = r.__e;
      r.__e = function (e, t, n, r) {
        if (e.then)
          for (var i, o = t; (o = o.__); )
            if ((i = o.__c) && i.__c)
              return (
                null == t.__e && ((t.__e = n.__e), (t.__k = n.__k)), i.__c(e, t)
              );
        Ae(e, t, n, r);
      };
      var Oe = r.unmount;
      function ze(e, t, n) {
        return (
          e &&
            (e.__c &&
              e.__c.__H &&
              (e.__c.__H.__.forEach(function (e) {
                "function" == typeof e.__c && e.__c();
              }),
              (e.__c.__H = null)),
            null != (e = ke({}, e)).__c &&
              (e.__c.__P === n && (e.__c.__P = t), (e.__c = null)),
            (e.__k =
              e.__k &&
              e.__k.map(function (e) {
                return ze(e, t, n);
              }))),
          e
        );
      }
      function Ie(e, t, n) {
        return (
          e &&
            n &&
            ((e.__v = null),
            (e.__k =
              e.__k &&
              e.__k.map(function (e) {
                return Ie(e, t, n);
              })),
            e.__c &&
              e.__c.__P === t &&
              (e.__e && n.appendChild(e.__e),
              (e.__c.__e = !0),
              (e.__c.__P = n))),
          e
        );
      }
      function je() {
        (this.__u = 0), (this.t = null), (this.__b = null);
      }
      function Be(e) {
        var t = e.__.__c;
        return t && t.__a && t.__a(e);
      }
      function Pe() {
        (this.u = null), (this.o = null);
      }
      (r.unmount = function (e) {
        var t = e.__c;
        t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Oe && Oe(e);
      }),
        ((je.prototype = new x()).__c = function (e, t) {
          var n = t.__c,
            r = this;
          null == r.t && (r.t = []), r.t.push(n);
          var i = Be(r.__v),
            o = !1,
            a = function () {
              o || ((o = !0), (n.__R = null), i ? i(s) : s());
            };
          n.__R = a;
          var s = function () {
            if (!--r.__u) {
              if (r.state.__a) {
                var e = r.state.__a;
                r.__v.__k[0] = Ie(e, e.__c.__P, e.__c.__O);
              }
              var t;
              for (r.setState({ __a: (r.__b = null) }); (t = r.t.pop()); )
                t.forceUpdate();
            }
          };
          r.__u++ || 32 & t.__u || r.setState({ __a: (r.__b = r.__v.__k[0]) }),
            e.then(a, a);
        }),
        (je.prototype.componentWillUnmount = function () {
          this.t = [];
        }),
        (je.prototype.render = function (e, t) {
          if (this.__b) {
            if (this.__v.__k) {
              var n = document.createElement("div"),
                r = this.__v.__k[0].__c;
              this.__v.__k[0] = ze(this.__b, n, (r.__O = r.__P));
            }
            this.__b = null;
          }
          var i = t.__a && v(w, null, e.fallback);
          return (
            i && (i.__u &= -33), [v(w, null, t.__a ? null : e.children), i]
          );
        });
      var Re = function (e, t, n) {
        if (
          (++n[1] === n[0] && e.o.delete(t),
          e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
        )
          for (n = e.u; n; ) {
            for (; n.length > 3; ) n.pop()();
            if (n[1] < n[0]) break;
            e.u = n = n[2];
          }
      };
      function He(e) {
        return (
          (this.getChildContext = function () {
            return e.context;
          }),
          e.children
        );
      }
      function $e(e) {
        var t = this,
          n = e.i;
        (t.componentWillUnmount = function () {
          $(null, t.l), (t.l = null), (t.i = null);
        }),
          t.i && t.i !== n && t.componentWillUnmount(),
          t.l ||
            ((t.i = n),
            (t.l = {
              nodeType: 1,
              parentNode: n,
              childNodes: [],
              appendChild: function (e) {
                this.childNodes.push(e), t.i.appendChild(e);
              },
              insertBefore: function (e, n) {
                this.childNodes.push(e), t.i.appendChild(e);
              },
              removeChild: function (e) {
                this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1),
                  t.i.removeChild(e);
              },
            })),
          $(v(He, { context: t.context }, e.__v), t.l);
      }
      function We(e, t) {
        var n = v($e, { __v: e, i: t });
        return (n.containerInfo = t), n;
      }
      ((Pe.prototype = new x()).__a = function (e) {
        var t = this,
          n = Be(t.__v),
          r = t.o.get(e);
        return (
          r[0]++,
          function (i) {
            var o = function () {
              t.props.revealOrder ? (r.push(i), Re(t, e, r)) : i();
            };
            n ? n(o) : o();
          }
        );
      }),
        (Pe.prototype.render = function (e) {
          (this.u = null), (this.o = new Map());
          var t = M(e.children);
          e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
          for (var n = t.length; n--; )
            this.o.set(t[n], (this.u = [1, 0, this.u]));
          return e.children;
        }),
        (Pe.prototype.componentDidUpdate = Pe.prototype.componentDidMount =
          function () {
            var e = this;
            this.o.forEach(function (t, n) {
              Re(e, n, t);
            });
          });
      var Fe =
          ("undefined" != typeof Symbol &&
            Symbol.for &&
            Symbol.for("react.element")) ||
          60103,
        Ue =
          /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
        Ve = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
        qe = /[A-Z0-9]/g,
        Ge = "undefined" != typeof document,
        Ke = function (e) {
          return (
            "undefined" != typeof Symbol && "symbol" == typeof Symbol()
              ? /fil|che|rad/
              : /fil|che|ra/
          ).test(e);
        };
      (x.prototype.isReactComponent = {}),
        [
          "componentWillMount",
          "componentWillReceiveProps",
          "componentWillUpdate",
        ].forEach(function (e) {
          Object.defineProperty(x.prototype, e, {
            configurable: !0,
            get: function () {
              return this["UNSAFE_" + e];
            },
            set: function (t) {
              Object.defineProperty(this, e, {
                configurable: !0,
                writable: !0,
                value: t,
              });
            },
          });
        });
      var Ye = r.event;
      function Je() {}
      function Ze() {
        return this.cancelBubble;
      }
      function Qe() {
        return this.defaultPrevented;
      }
      r.event = function (e) {
        return (
          Ye && (e = Ye(e)),
          (e.persist = Je),
          (e.isPropagationStopped = Ze),
          (e.isDefaultPrevented = Qe),
          (e.nativeEvent = e)
        );
      };
      var Xe,
        et = {
          enumerable: !1,
          configurable: !0,
          get: function () {
            return this.class;
          },
        },
        tt = r.vnode;
      r.vnode = function (e) {
        "string" == typeof e.type &&
          (function (e) {
            var t = e.props,
              n = e.type,
              r = {};
            for (var i in t) {
              var o = t[i];
              if (
                !(
                  ("value" === i && "defaultValue" in t && null == o) ||
                  (Ge && "children" === i && "noscript" === n) ||
                  "class" === i ||
                  "className" === i
                )
              ) {
                var a = i.toLowerCase();
                "defaultValue" === i && "value" in t && null == t.value
                  ? (i = "value")
                  : "download" === i && !0 === o
                  ? (o = "")
                  : "translate" === a && "no" === o
                  ? (o = !1)
                  : "ondoubleclick" === a
                  ? (i = "ondblclick")
                  : "onchange" !== a ||
                    ("input" !== n && "textarea" !== n) ||
                    Ke(t.type)
                  ? "onfocus" === a
                    ? (i = "onfocusin")
                    : "onblur" === a
                    ? (i = "onfocusout")
                    : Ve.test(i)
                    ? (i = a)
                    : -1 === n.indexOf("-") && Ue.test(i)
                    ? (i = i.replace(qe, "-$&").toLowerCase())
                    : null === o && (o = void 0)
                  : (a = i = "oninput"),
                  "oninput" === a && r[(i = a)] && (i = "oninputCapture"),
                  (r[i] = o);
              }
            }
            "select" == n &&
              r.multiple &&
              Array.isArray(r.value) &&
              (r.value = M(t.children).forEach(function (e) {
                e.props.selected = -1 != r.value.indexOf(e.props.value);
              })),
              "select" == n &&
                null != r.defaultValue &&
                (r.value = M(t.children).forEach(function (e) {
                  e.props.selected = r.multiple
                    ? -1 != r.defaultValue.indexOf(e.props.value)
                    : r.defaultValue == e.props.value;
                })),
              t.class && !t.className
                ? ((r.class = t.class),
                  Object.defineProperty(r, "className", et))
                : ((t.className && !t.class) || (t.class && t.className)) &&
                  (r.class = r.className = t.className),
              (e.props = r);
          })(e),
          (e.$$typeof = Fe),
          tt && tt(e);
      };
      var nt = r.__r;
      r.__r = function (e) {
        nt && nt(e), (Xe = e.__c);
      };
      var rt = r.diffed;
      r.diffed = function (e) {
        rt && rt(e);
        var t = e.props,
          n = e.__e;
        null != n &&
          "textarea" === e.type &&
          "value" in t &&
          t.value !== n.value &&
          (n.value = null == t.value ? "" : t.value),
          (Xe = null);
      };
      var it = {
        ReactCurrentDispatcher: {
          current: {
            readContext: function (e) {
              return Xe.__n[e.__c].props.value;
            },
            useCallback: he,
            useContext: me,
            useDebugValue: ge,
            useDeferredValue: st,
            useEffect: le,
            useId: fe,
            useImperativeHandle: ue,
            useInsertionEffect: ct,
            useLayoutEffect: ce,
            useMemo: pe,
            useReducer: se,
            useRef: de,
            useState: ae,
            useSyncExternalStore: dt,
            useTransition: lt,
          },
        },
      };
      function ot(e) {
        return !!e && e.$$typeof === Fe;
      }
      function at(e) {
        e();
      }
      function st(e) {
        return e;
      }
      function lt() {
        return [!1, at];
      }
      var ct = ce;
      function dt(e, t) {
        var n = t(),
          r = ae({ h: { __: n, v: t } }),
          i = r[0].h,
          o = r[1];
        return (
          ce(
            function () {
              (i.__ = n), (i.v = t), ut(i) && o({ h: i });
            },
            [e, n, t]
          ),
          le(
            function () {
              return (
                ut(i) && o({ h: i }),
                e(function () {
                  ut(i) && o({ h: i });
                })
              );
            },
            [e]
          ),
          n
        );
      }
      function ut(e) {
        var t,
          n,
          r = e.v,
          i = e.__;
        try {
          var o = r();
          return !(
            ((t = i) === (n = o) && (0 !== t || 1 / t == 1 / n)) ||
            (t != t && n != n)
          );
        } catch (e) {
          return !0;
        }
      }
      var pt = {
        useState: ae,
        useId: fe,
        useReducer: se,
        useEffect: le,
        useLayoutEffect: ce,
        useInsertionEffect: ct,
        useTransition: lt,
        useDeferredValue: st,
        useSyncExternalStore: dt,
        startTransition: at,
        useRef: de,
        useImperativeHandle: ue,
        useMemo: pe,
        useCallback: he,
        useContext: me,
        useDebugValue: ge,
        version: "17.0.2",
        Children: De,
        render: function (e, t, n) {
          return (
            null == t.__k && (t.textContent = ""),
            $(e, t),
            "function" == typeof n && n(),
            e ? e.__c : null
          );
        },
        hydrate: function (e, t, n) {
          return W(e, t), "function" == typeof n && n(), e ? e.__c : null;
        },
        unmountComponentAtNode: function (e) {
          return !!e.__k && ($(null, e), !0);
        },
        createPortal: We,
        createElement: v,
        createContext: U,
        createFactory: function (e) {
          return v.bind(null, e);
        },
        cloneElement: function (e) {
          return ot(e) ? F.apply(null, arguments) : e;
        },
        createRef: function () {
          return { current: null };
        },
        Fragment: w,
        isValidElement: ot,
        isElement: ot,
        isFragment: function (e) {
          return ot(e) && e.type === w;
        },
        isMemo: function (e) {
          return (
            !!e &&
            !!e.displayName &&
            ("string" == typeof e.displayName ||
              e.displayName instanceof String) &&
            e.displayName.startsWith("Memo(")
          );
        },
        findDOMNode: function (e) {
          return (e && (e.base || (1 === e.nodeType && e))) || null;
        },
        Component: x,
        PureComponent: Se,
        memo: function (e, t) {
          function n(e) {
            var n = this.props.ref,
              r = n == e.ref;
            return (
              !r && n && (n.call ? n(null) : (n.current = null)),
              t ? !t(this.props, e) || !r : Ee(this.props, e)
            );
          }
          function r(t) {
            return (this.shouldComponentUpdate = n), v(e, t);
          }
          return (
            (r.displayName = "Memo(" + (e.displayName || e.name) + ")"),
            (r.prototype.isReactComponent = !0),
            (r.__f = !0),
            r
          );
        },
        forwardRef: Ne,
        flushSync: function (e, t) {
          return e(t);
        },
        unstable_batchedUpdates: function (e, t) {
          return e(t);
        },
        StrictMode: w,
        Suspense: je,
        SuspenseList: Pe,
        lazy: function (e) {
          var t, n, r;
          function i(i) {
            if (
              (t ||
                (t = e()).then(
                  function (e) {
                    n = e.default || e;
                  },
                  function (e) {
                    r = e;
                  }
                ),
              r)
            )
              throw r;
            if (!n) throw t;
            return v(n, i);
          }
          return (i.displayName = "Lazy"), (i.__f = !0), i;
        },
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: it,
      };
      function ht() {
        return !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        );
      }
      var mt = ht() ? ce : le,
        gt = function (e) {
          var t,
            n = e.children,
            r = e.type,
            i = void 0 === r ? "reach-portal" : r,
            o = e.containerRef,
            a = de(null),
            s = de(null),
            l =
              ((t = ae(Object.create(null))[1]),
              he(function () {
                t(Object.create(null));
              }, []));
          return (
            mt(
              function () {
                if (a.current) {
                  var e = a.current.ownerDocument,
                    t = (null == o ? void 0 : o.current) || e.body;
                  return (
                    (s.current = null == e ? void 0 : e.createElement(i)),
                    t.appendChild(s.current),
                    l(),
                    function () {
                      s.current && t && t.removeChild(s.current);
                    }
                  );
                }
              },
              [i, l, o]
            ),
            s.current ? We(n, s.current) : v("span", { ref: a })
          );
        },
        ft = n(556),
        bt = n.n(ft),
        yt =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : void 0 !== n.g
            ? n.g
            : "undefined" != typeof self
            ? self
            : {};
      function vt(e, t) {
        return e((t = { exports: {} }), t.exports), t.exports;
      }
      var _t = vt(function (e) {
          !(function (t) {
            var n = function (e, t, r) {
                if (!l(t) || d(t) || u(t) || p(t) || s(t)) return t;
                var i,
                  o = 0,
                  a = 0;
                if (c(t))
                  for (i = [], a = t.length; o < a; o++) i.push(n(e, t[o], r));
                else
                  for (var h in ((i = {}), t))
                    Object.prototype.hasOwnProperty.call(t, h) &&
                      (i[e(h, r)] = n(e, t[h], r));
                return i;
              },
              r = function (e) {
                return h(e)
                  ? e
                  : (e = e.replace(/[\-_\s]+(.)?/g, function (e, t) {
                      return t ? t.toUpperCase() : "";
                    }))
                      .substr(0, 1)
                      .toLowerCase() + e.substr(1);
              },
              i = function (e) {
                var t = r(e);
                return t.substr(0, 1).toUpperCase() + t.substr(1);
              },
              o = function (e, t) {
                return (function (e, t) {
                  var n = (t = t || {}).separator || "_",
                    r = t.split || /(?=[A-Z])/;
                  return e.split(r).join(n);
                })(e, t).toLowerCase();
              },
              a = Object.prototype.toString,
              s = function (e) {
                return "function" == typeof e;
              },
              l = function (e) {
                return e === Object(e);
              },
              c = function (e) {
                return "[object Array]" == a.call(e);
              },
              d = function (e) {
                return "[object Date]" == a.call(e);
              },
              u = function (e) {
                return "[object RegExp]" == a.call(e);
              },
              p = function (e) {
                return "[object Boolean]" == a.call(e);
              },
              h = function (e) {
                return (e -= 0) == e;
              },
              m = function (e, t) {
                var n = t && "process" in t ? t.process : t;
                return "function" != typeof n
                  ? e
                  : function (t, r) {
                      return n(t, e, r);
                    };
              },
              g = {
                camelize: r,
                decamelize: o,
                pascalize: i,
                depascalize: o,
                camelizeKeys: function (e, t) {
                  return n(m(r, t), e);
                },
                decamelizeKeys: function (e, t) {
                  return n(m(o, t), e, t);
                },
                pascalizeKeys: function (e, t) {
                  return n(m(i, t), e);
                },
                depascalizeKeys: function () {
                  return this.decamelizeKeys.apply(this, arguments);
                },
              };
            e.exports ? (e.exports = g) : (t.humps = g);
          })(yt);
        }).decamelize,
        wt = vt(function (e) {
          function t() {
            return (
              (e.exports = t =
                Object.assign ||
                function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n)
                      Object.prototype.hasOwnProperty.call(n, r) &&
                        (e[r] = n[r]);
                  }
                  return e;
                }),
              t.apply(this, arguments)
            );
          }
          e.exports = t;
        }),
        xt = function (e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
          return r;
        },
        Ct = U(null);
      function kt(e) {
        var t = e.root;
        return We(e.children, t);
      }
      (kt.propTypes = { root: bt().object.isRequired, children: bt().node }),
        (kt.defaultProps = { children: null });
      var Et = new Map(),
        St = (function () {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "core",
            t =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : function (e) {
                    return e.children;
                  };
          return new Proxy(
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            {
              get: function (n, r) {
                var i = _t(r, { separator: "-" }),
                  o = "".concat(e, "-").concat(i);
                return (
                  Et.has(o) ||
                    Et.set(
                      o,
                      (function (e) {
                        var t = Ne(function (t, n) {
                          var r,
                            i,
                            o = t.mode,
                            a = t.delegatesFocus,
                            s = t.styleSheets,
                            l = t.ssr,
                            c = t.children,
                            d = (function (e, t) {
                              if (null == e) return {};
                              var n,
                                r,
                                i = (function (e, t) {
                                  if (null == e) return {};
                                  var n,
                                    r,
                                    i = {},
                                    o = Object.keys(e);
                                  for (r = 0; r < o.length; r++)
                                    (n = o[r]),
                                      t.indexOf(n) >= 0 || (i[n] = e[n]);
                                  return i;
                                })(e, t);
                              if (Object.getOwnPropertySymbols) {
                                var o = Object.getOwnPropertySymbols(e);
                                for (r = 0; r < o.length; r++)
                                  (n = o[r]),
                                    t.indexOf(n) >= 0 ||
                                      (Object.prototype.propertyIsEnumerable.call(
                                        e,
                                        n
                                      ) &&
                                        (i[n] = e[n]));
                              }
                              return i;
                            })(t, [
                              "mode",
                              "delegatesFocus",
                              "styleSheets",
                              "ssr",
                              "children",
                            ]),
                            u =
                              ((i = de((r = n) && r.current)),
                              le(
                                function () {
                                  r && (r.current = i.current);
                                },
                                [r]
                              ),
                              i),
                            p = (function (e, t) {
                              return (
                                (function (e) {
                                  if (Array.isArray(e)) return e;
                                })(e) ||
                                (function (e, t) {
                                  if (
                                    "undefined" != typeof Symbol &&
                                    Symbol.iterator in Object(e)
                                  ) {
                                    var n = [],
                                      r = !0,
                                      i = !1,
                                      o = void 0;
                                    try {
                                      for (
                                        var a, s = e[Symbol.iterator]();
                                        !(r = (a = s.next()).done) &&
                                        (n.push(a.value), !t || n.length !== t);
                                        r = !0
                                      );
                                    } catch (e) {
                                      (i = !0), (o = e);
                                    } finally {
                                      try {
                                        r || null == s.return || s.return();
                                      } finally {
                                        if (i) throw o;
                                      }
                                    }
                                    return n;
                                  }
                                })(e, t) ||
                                (function (e, t) {
                                  if (e) {
                                    if ("string" == typeof e) return xt(e, t);
                                    var n = Object.prototype.toString
                                      .call(e)
                                      .slice(8, -1);
                                    return (
                                      "Object" === n &&
                                        e.constructor &&
                                        (n = e.constructor.name),
                                      "Map" === n || "Set" === n
                                        ? Array.from(e)
                                        : "Arguments" === n ||
                                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                            n
                                          )
                                        ? xt(e, t)
                                        : void 0
                                    );
                                  }
                                })(e, t) ||
                                (function () {
                                  throw new TypeError(
                                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                  );
                                })()
                              );
                            })(ae(null), 2),
                            h = p[0],
                            m = p[1],
                            g = "node_".concat(o).concat(a);
                          return (
                            ce(
                              function () {
                                if (u.current)
                                  try {
                                    if (
                                      ("function" == typeof n && n(u.current),
                                      l)
                                    ) {
                                      var e = u.current.shadowRoot;
                                      return void m(e);
                                    }
                                    var t = u.current.attachShadow({
                                      mode: o,
                                      delegatesFocus: a,
                                    });
                                    s.length > 0 && (t.adoptedStyleSheets = s),
                                      m(t);
                                  } catch (e) {
                                    !(function (e) {
                                      var t = e.error,
                                        n = e.styleSheets,
                                        r = e.root;
                                      if ("NotSupportedError" !== t.name)
                                        throw t;
                                      n.length > 0 &&
                                        (r.adoptedStyleSheets = n);
                                    })({ error: e, styleSheets: s, root: h });
                                  }
                              },
                              [n, u, s]
                            ),
                            pt.createElement(
                              pt.Fragment,
                              null,
                              pt.createElement(
                                e.tag,
                                wt({ key: g, ref: u }, d),
                                (h || l) &&
                                  pt.createElement(
                                    Ct.Provider,
                                    { value: h },
                                    l
                                      ? pt.createElement(
                                          "template",
                                          { shadowroot: "open" },
                                          e.render({
                                            root: h,
                                            ssr: l,
                                            children: c,
                                          })
                                        )
                                      : pt.createElement(
                                          kt,
                                          { root: h },
                                          e.render({
                                            root: h,
                                            ssr: l,
                                            children: c,
                                          })
                                        )
                                  )
                              )
                            )
                          );
                        });
                        return (
                          (t.propTypes = {
                            mode: bt().oneOf(["open", "closed"]),
                            delegatesFocus: bt().bool,
                            styleSheets: bt().arrayOf(
                              bt().instanceOf(globalThis.CSSStyleSheet)
                            ),
                            ssr: bt().bool,
                            children: bt().node,
                          }),
                          (t.defaultProps = {
                            mode: "open",
                            delegatesFocus: !1,
                            styleSheets: [],
                            ssr: !1,
                            children: null,
                          }),
                          t
                        );
                      })({ tag: i, render: t })
                    ),
                  Et.get(o)
                );
              },
            }
          );
        })();
      const Lt = St;
      let Tt = (function (e) {
        return (
          (e.ChatCreated = "chat_created"),
          (e.OpenChatForTheFirstTime = "open_chat_for_first_time"),
          (e.ClickStartNewChat = "click_start_new_chat"),
          (e.ChangeLanguage = "change_language"),
          (e.ClickEditSettings = "click_edit_settings"),
          (e.ClickSaveSettings = "click_save_settings"),
          (e.PopupWasTriggered = "popup_messages_was_triggered"),
          (e.PopupWasClicked = "click_popup_message"),
          e
        );
      })({});
      const Nt = {
          app: {
            norbyAI: "Norby AI",
            header: {
              online: "online",
              chatTip: "Vælg en chat fra listen nedenfor",
            },
            socketError:
              "Forsøger at forbinde dig til serveren... Vent, eller prøv at chatte senere.",
            globalError: "Chatten er ikke tilgængelig. Beklager ulejligheden!",
            chat: {
              type: "Skriv din besked her...",
              powered: "Drevet af ",
              isTyping: "skriver...",
              chatEnded:
                "Chatten er afsluttet. Tryk på knappen nedenfor for at starte en ny.",
              email: "Din email...",
              emailLater: "Giv os din e-mail, så vi kan kontakte dig senere: ",
              emailError: "E-mail er ikke gyldig",
              name: "Dit navn...",
              nameError: "Navnet virker ikke rigtigt",
              messageError: "Beskeden blev ikke sendt",
              imageSizeError: "Den maksimale størrelse er 3 Mb",
              today: "I dag",
              yesterday: "I går",
              changedDetailsNotification: "Du har ændret dine data",
              newChatGreeting: "Hej, jeg hedder Norby! Hvordan kan jeg hjælpe?",
              newChatGreetingEmailPhrase:
                "Hej! Inden du chatter, skal du sørge for at efterlade din e-mail, så vi kan kontakte dig senere.",
              hi: "Hej",
              emailInfoMessage: "E-mailen til at kontakte dig er",
              you: "Du",
              lastPredefined: "Vælg et svar...",
              message: "Besked",
              product: "Tilbud",
              productList: "Tilbud",
              button: "Start en ny chat",
              form: "Udfyld formularen...",
              at: "på",
            },
            participantEditor: {
              saveChanges: "Gem ændringer",
              dataChanged: "Du har ændret dine data",
              yourDetails: "Dine detaljer",
            },
            chatRooms: {
              header: "Dine chats",
              startChat: "Start en ny chat med os",
              newChat: "Start en ny chat",
              empty: "Tom endnu",
              chatEndedShort: "Chatten er afsluttet",
            },
            adultWarning: {
              warningMessage:
                "Hej! Når du har bekræftet, at din alder er 18+, vil jeg meget gerne hjælpe dig med ethvert problem!",
              warningQuestion: "Er du over 18?",
              warningAnswer: "Jeg er over 18",
              warningText:
                "Chatten kan indeholde bandeord eller aggressive udtryk.",
            },
          },
        },
        Mt = {
          app: {
            norbyAI: "Norby AI",
            header: {
              online: "online",
              chatTip: "Wählen Sie einen Chat aus der Liste unten",
            },
            socketError:
              "Ich versuche, Sie mit dem Server zu verbinden … Warten Sie oder versuchen Sie später, zu chatten.",
            globalError:
              "Der Chat ist nicht verfügbar. Entschuldigung für die Unannehmlichkeiten!",
            chat: {
              type: "Frag mich etwas...",
              powered: "Angetrieben von ",
              isTyping: "tippt …",
              chatEnded:
                "Der Chat wurde beendet. Klicken Sie auf die Schaltfläche unten, um einen neuen zu starten.",
              email: "Ihre E-Mail…",
              emailLater:
                "Geben Sie uns Ihre E-Mail-Adresse, damit wir Sie später kontaktieren können:",
              emailError: "E-Mail ist ungültig",
              name: "Dein Name...",
              nameError: "Der Name scheint nicht echt zu sein",
              messageError: "Die Nachricht wurde nicht gesendet",
              imageSizeError: "Die maximale Größe beträgt 3MB",
              today: "Heute",
              yesterday: "Gestern",
              changedDetailsNotification: "Sie haben Ihre Daten geändert",
              newChatGreeting: "Hallo, ich bin Norby! Wie kann ich helfen?",
              newChatGreetingEmailPhrase:
                "Hallo! Bitte hinterlassen Sie vor dem Chatten Ihre E-Mail-Adresse, damit wir Sie später kontaktieren können.",
              hi: "Hallo",
              emailInfoMessage:
                "Die E-Mail-Adresse für die Kontaktaufnahme lautet",
              you: "Sie",
              lastPredefined: "Wählen Sie eine Antwort…",
              message: "Nachricht",
              product: "Angebot",
              productList: "Angebote",
              button: "Neuen Chat starten",
              form: "Füllen Sie das Formular aus...",
              at: "at",
            },
            participantEditor: {
              saveChanges: "Änderungen speichern",
              dataChanged: "Sie haben Ihre Daten geändert",
              yourDetails: "Ihre Daten",
            },
            chatRooms: {
              header: "Ihre Chats",
              startChat: "Neuen Chat mit uns starten",
              newChat: "Neuen Chat starten",
              empty: "Noch leer",
              chatEndedShort: "Der Chat wurde beendet",
            },
            adultWarning: {
              warningMessage:
                "Hallo! Nachdem Sie bestätigt haben, dass Sie mindestens 18 Jahre alt sind, würde ich Ihnen gerne bei jedem Problem helfen!",
              warningQuestion: "Sind Sie über 18?",
              warningAnswer: "Ich bin über 18",
              warningText:
                "Der Chat kann Schimpfwörter oder aggressive Ausdrücke enthalten.",
            },
          },
        },
        Dt = {
          app: {
            norbyAI: "Norby AI",
            header: {
              online: "online",
              chatTip: "Valige allolevast loendist vestlus",
            },
            socketError:
              "Üritame Teid serveriga ühendada… Oodake või proovige saada sõnum hiljem.",
            globalError:
              "Vestlus ei ole saadaval. Vabandame ebamugavuste pärast!",
            chat: {
              type: "Kirjutage oma sõnum siia...",
              powered: "Toetatud ",
              isTyping: "kirjutab...",
              chatEnded:
                "Vestlus on lõppenud. Vajutage nuppu, et alustada uut.",
              email: "Teie e-mail...",
              emailLater:
                "Kirjutage oma e-mail, et saaksime Teiega hiljem ühendust võtta:",
              emailError: "Kirjutage õige e-mail",
              name: "Nimi...",
              nameError: "Tundub, et see pole tõeline nimi",
              messageError: "Sõnum pole saadetud",
              imageSizeError: "Maksimaalne suurus — 3Mb",
              today: "Täna",
              yesterday: "Eile",
              changedDetailsNotification: "Olete enda andmeid muutunud",
              newChatGreeting: "Tere, mina olen Norby! Kuidas ma saan aidata?",
              newChatGreetingEmailPhrase:
                "Tere! Enne vestluse alustamist kontrollige, et olete kirjutanud enda e-maili. Nii saame võtta Teiega ühendust hiljem.",
              hi: "Tere",
              emailInfoMessage: "Teie e-post kontakteerumiseks on",
              you: "Teie",
              lastPredefined: "Valige vastus...",
              message: "Sõnum",
              product: "Pakkumine",
              productList: "Pakkumised",
              button: "Alusta uut vestlust",
              form: "Täida vorm…",
              at: "kell",
            },
            participantEditor: {
              saveChanges: "Salvesta muudatused",
              dataChanged: "Olete enda andmeid muutunud",
              yourDetails: "Teie andmed",
            },
            chatRooms: {
              header: "Teie vestlused",
              startChat: "Alustage meiega uus vestlus ",
              newChat: "Alustage Uut Vestlust",
              empty: "On tühi veel",
              chatEndedShort: "Vestlus on lõppenud",
            },
            adultWarning: {
              warningMessage:
                "Hei! Ma vastan kõikidele küsimustele, kui kinnitate, et olete 18-aastane.",
              warningQuestion: "Olete vähemalt 18-aastane?",
              warningAnswer: "Olen vähemalt 18-aastane",
              warningText:
                "Vestluses saavad esineda ropp sõnad ja agressiivsed väljendid.",
            },
          },
        },
        At = {
          app: {
            norbyAI: "",
            header: {
              online: "online",
              chatTip: "Choose a chat from the list below",
            },
            socketError:
              "Trying to connect you to the server… Wait or try to chat later.",
            globalError:
              "The chat is not available. Sorry for the inconvenience!",
            chat: {
              type: "Type your message here...",
              powered: " ",
              isTyping: "is typing...",
              chatEnded:
                "The chat has been ended. Press the button below to start a new one.",
              email: "Your email...",
              emailLater: "Give us your email so we can contact you later: ",
              emailError: "Email is not valid",
              name: "Your name...",
              nameError: "The name doesn't seem real",
              messageError: "The message was not sent",
              imageSizeError: "The maximum size is 3Mb",
              today: "Today",
              yesterday: "Yesterday",
              changedDetailsNotification: "You have changed your data",
              newChatGreeting: "Hi, I’m Norby!\nHow can I help?",
              newChatGreetingEmailPhrase:
                "Hi! Before chatting, make sure to leave your email so we could contact you later.",
              hi: "Hi",
              emailInfoMessage: "The email to contact you is ",
              you: "You",
              lastPredefined: "Choose an answer…",
              message: "Message",
              product: "Offer",
              productList: "Offers",
              button: "Start a New Chat",
              form: "Fill the form…",
              at: "at",
            },
            participantEditor: {
              saveChanges: "Save Changes",
              dataChanged: "You have changed your data",
              yourDetails: "Your Details",
            },
            chatRooms: {
              header: "Your chats",
              startChat: "Start a new chat with us",
              newChat: "Start a new chat",
              empty: "Empty yet",
              chatEndedShort: "The chat has been ended",
            },
            adultWarning: {
              warningMessage:
                "Hi! After you confirm your age is 18+, I would love to help you with any issue!",
              warningQuestion: "Are You over 18?",
              warningAnswer: "I Am over 18",
              warningText:
                "The chat can contain profanity or aggressive expressions.",
            },
          },
        },
        Ot = {
          app: {
            norbyAI: "",
            header: {
              online: "en línea",
              chatTip: "Elija un chat de la lista a continuación",
            },
            socketError:
              "Intentando conectarte con el servidor... Espera o intenta chatear más tarde.",
            globalError: "El chat no está disponible. ¡Disculpe las molestias!",
            chat: {
              type: "Escriba su mensaje aquí...",
              powered: "Desarrollado por ",
              isTyping: "está escribiendo...",
              chatEnded:
                "El chat ha finalizado. Presione el botón de abajo para iniciar uno nuevo.",
              email: "Su correo electrónico...",
              emailLater:
                "Danos tu correo electrónico para que podamos comunicarnos contigo más tarde:",
              emailError: "El correo electrónico no es válido",
              name: "Tu nombre...",
              nameError: "El nombre no parece real",
              messageError: "El mensaje no fue enviado",
              imageSizeError: "El tamaño máximo es 3Mb",
              today: "hoy",
              yesterday: "ayer",
              changedDetailsNotification: "Has cambiado tus datos",
              newChatGreeting: "Hola, soy Norby. ¿Cómo puedo ayudar?",
              newChatGreetingEmailPhrase:
                "¡Hola! Antes de chatear, asegúrate de dejar tu correo electrónico para que podamos comunicarnos contigo más tarde.",
              hi: "Hola",
              emailInfoMessage: "El correo electrónico para contactarlo es",
              you: "tú",
              lastPredefined: "Elija una respuesta...",
              message: "Mensaje",
              product: "Oferta",
              productList: "Ofertas",
              button: "Iniciar un nuevo chat",
              form: "Rellene el formulario...",
              at: "en",
            },
            participantEditor: {
              saveChanges: "Guardar cambios",
              dataChanged: "Has cambiado tus datos",
              yourDetails: "Tus Detalles",
            },
            chatRooms: {
              header: "Tus chats",
              startChat: "Iniciar un nuevo chat con nosotros",
              newChat: "Iniciar un nuevo chat",
              empty: "Vacío todavía",
              chatEndedShort: "El chat ha finalizado",
            },
            adultWarning: {
              warningMessage:
                "¡Hola! Después de confirmar que tu edad es mayor de 18 años, ¡me encantaría ayudarte con cualquier problema!",
              warningQuestion: "¿Tienes más de 18 años?",
              warningAnswer: "ISoy mayor de 18",
              warningText:
                "El chat puede contener malas palabras o expresiones agresivas.",
            },
          },
        },
        zt = {
          app: {
            norbyAI: "Norby AI",
            header: {
              online: "verkossa",
              chatTip: "Valitse chat alla olevasta luettelosta",
            },
            socketError:
              "Yritetään yhdistää sinua palvelimeen… Odota tai yritä keskustella myöhemmin.",
            globalError: "Chat ei ole käytettävissä. Anteeksi häiriö!",
            chat: {
              type: "Kirjoita viestisi tähän...",
              powered: "Voimanlähteenä ",
              isTyping: "kirjoittaa...",
              chatEnded:
                "Chat on päättynyt. Aloita uusi painamalla alla olevaa painiketta.",
              email: "Sähköpostisi...",
              emailLater:
                "Anna meille sähköpostiosoitteesi, jotta voimme ottaa sinuun yhteyttä myöhemmin:",
              emailError: "Sähköposti ei kelpaa",
              name: "Sinun nimesi...",
              nameError: "Nimi ei vaikuta oikealta",
              messageError: "Viestiä ei lähetetty",
              imageSizeError: "Suurin koko on 3 Mb",
              today: "Tänään",
              yesterday: "Eilen",
              changedDetailsNotification: "Olet muuttanut tietosi",
              newChatGreeting: "Hei, olen Norby! Kuinka voin auttaa?",
              newChatGreetingEmailPhrase:
                "Hei! Muista jättää sähköpostiosoitteesi ennen chattailua, jotta voimme ottaa sinuun yhteyttä myöhemmin.",
              hi: "Hei",
              emailInfoMessage:
                "Sähköpostiosoite, jolla sinuun voi ottaa yhteyttä on",
              you: "Sinä",
              lastPredefined: "Valitse vastaus…",
              message: "Viesti",
              product: "Tarjous",
              productList: "Tarjoukset",
              button: "Aloita uusi chat",
              form: "Täytä kaavake…",
              at: "klo",
            },
            participantEditor: {
              saveChanges: "Tallenna muutokset",
              dataChanged: "Olet muuttanut tietosi",
              yourDetails: "Sinun yksityiskohtasi",
            },
            chatRooms: {
              header: "Omat keskustelut",
              startChat: "Aloita uusi chat kanssamme",
              newChat: "Aloita uusi chat",
              empty: "Vielä tyhjä",
              chatEndedShort: "Chat on päättynyt",
            },
            adultWarning: {
              warningMessage:
                "Hei! Kun olet vahvistanut ikäsi 18+, autan sinua mielelläni kaikissa ongelmissa!",
              warningQuestion: "Oletko yli 18?",
              warningAnswer: "Olen yli 18",
              warningText:
                "Chat voi sisältää kirosanoja tai aggressiivisia ilmaisuja.",
            },
          },
        },
        It = {
          app: {
            norbyAI: "Norby AI",
            header: {
              online: "en ligne",
              chatTip: "Choisissez une discussion dans la liste ci-dessous",
            },
            socketError:
              "J'essaie de vous connecter au serveur… Attendez ou essayez de discuter plus tard.",
            globalError:
              "Le chat n'est pas disponible. Désolé pour le dérangement !",
            chat: {
              type: "Tapez votre message ici...",
              powered: "Propulsé par ",
              isTyping: "tape...",
              chatEnded:
                "Le chat est terminé. Appuyez sur le bouton ci-dessous pour en démarrer un nouveau.",
              email: "Votre email...",
              emailLater:
                "Donnez-nous votre email afin que nous puissions vous contacter plus tard :",
              emailError: "L'e-mail n'est pas valide",
              name: "Votre nom...",
              nameError: "Le nom ne semble pas réel",
              messageError: "Le message n'a pas été envoyé",
              imageSizeError: "La taille maximale est de 3 Mo",
              today: "Aujourd'hui",
              yesterday: "Hier",
              changedDetailsNotification: "Vous avez modifié vos données",
              newChatGreeting:
                "Salut, je m'appelle Norby ! Comment puis-je vous aider ?",
              newChatGreetingEmailPhrase:
                "Bonjour! Avant de discuter, assurez-vous de laisser votre e-mail afin que nous puissions vous contacter plus tard.",
              hi: "Salut",
              emailInfoMessage: "L'email pour vous contacter est",
              you: "Vous",
              lastPredefined: "Choisissez une réponse…",
              message: "Message",
              product: "Offre",
              productList: "Offres",
              button: "Démarrer une nouvelle discussion",
              form: "Remplissez le formulaire…",
              at: "à",
            },
            participantEditor: {
              saveChanges: "Enregistrer les modifications",
              dataChanged: "Vous avez modifié vos données",
              yourDetails: "Vos coordonnées",
            },
            chatRooms: {
              header: "Vos discussions",
              startChat: "Démarrez une nouvelle discussion avec nous",
              newChat: "Démarrer une nouvelle discussion",
              empty: "Encore vide",
              chatEndedShort: "Le chat est terminé",
            },
            adultWarning: {
              warningMessage:
                "Bonjour! Après avoir confirmé que vous avez 18 ans et plus, j'aimerais vous aider en cas de problème !",
              warningQuestion: "Avez-vous plus de 18 ans ?",
              warningAnswer: "J'ai plus de 18 ans",
              warningText:
                "Le chat peut contenir des grossièretés ou des expressions agressives.",
            },
          },
        },
        jt = {
          app: {
            norbyAI: "Norby AI",
            header: {
              online: "in linea",
              chatTip: "Scegli una chat dall'elenco seguente",
            },
            socketError:
              "Stiamo tentando di connetterti al server... Attendi o prova a inviare il messaggio più tardi.",
            globalError:
              "La chat non è disponibile. Ci dispiace per l'inconvenienza!",
            chat: {
              type: "Inserisci il tuo messaggio...",
              powered: "Sostenuto da ",
              isTyping: "stampe...",
              chatEnded:
                "La chat è terminata. Fare clic sul pulsante in basso per avviarne uno nuovo.",
              email: "Inserisci il tuo indirizzo email...",
              emailLater:
                "Puoi darci la tua email così possiamo contattarti più tardi:",
              emailError: "Formato di posta non valido",
              name: "Inserisci il tuo nome...",
              nameError: "Il nome sembra falso",
              messageError: "Il messaggio non è stato inviato",
              imageSizeError: "Dimensione massima: 3 MB",
              today: "Oggi",
              yesterday: "Ieri",
              changedDetailsNotification: "Hai cambiato i tuoi dati",
              newChatGreeting: "Ciao, sono Norby! Come posso aiutarti?",
              newChatGreetingEmailPhrase:
                "Ciao! Innanzitutto lascia la tua email così potremo ricontattarti più tardi.",
              hi: "Ciao",
              emailInfoMessage: "La tua email di contatto ",
              you: "Voi",
              lastPredefined: "Seleziona una risposta...",
              message: "Messaggio",
              product: "Offerta",
              productList: "Offerte",
              button: "Avvia una nuova chat",
              form: "Compilare il modulo…",
              at: "a",
            },
            participantEditor: {
              saveChanges: "Salvare le modifiche",
              dataChanged: "Hai modificato i tuoi dati",
              yourDetails: "I tuoi dettagli",
            },
            chatRooms: {
              header: "Le tue chat",
              startChat: "Inizia una nuova chat con noi",
              newChat: "Inizia una nuova chat",
              empty: "Ancora vuoto",
              chatEndedShort: "La chat è stata terminata",
            },
            adultWarning: {
              warningMessage:
                "Ciao! Dopo aver confermato che la tua età è maggiore di 18 anni, mi piacerebbe aiutarti con qualsiasi problema!",
              warningQuestion: "Hai più di 18 anni?",
              warningAnswer: "Io ho più di 18 anni",
              warningText:
                "La chat può contenere linguaggio volgare o espressioni aggressive.",
            },
          },
        },
        Bt = {
          app: {
            norbyAI: "Norby AI",
            header: {
              online: "オンライン",
              chatTip: "下のリストからチャットを選択してください",
            },
            socketError:
              "サーバーに接続しようとしています…しばらく待つか、後でチャットしてみてください。",
            globalError:
              "チャットは利用できません。 ご不便をおかけして申し訳ありません！",
            chat: {
              type: "ここにメッセージを入力してください...",
              powered: "搭載 ",
              isTyping: "打ち込んでいる...",
              chatEnded:
                "チャットは終了しました。 新しいボタンを押してください。",
              email: "あなたのメールアドレス...",
              emailLater:
                "後ほどご連絡させていただきますので、メールアドレスをお知らせください。",
              emailError: "電子メールが無効です",
              name: "あなたの名前...",
              nameError: "名前は本物ではないようです",
              messageError: "メッセージは送信されませんでした",
              imageSizeError: "最大サイズは3Mbです",
              today: "今日",
              yesterday: "昨日",
              changedDetailsNotification: "データを変更しました",
              newChatGreeting: "こんにちは、ノービーです！ 手伝いましょうか？",
              newChatGreetingEmailPhrase:
                "こんにちは！ 後でご連絡できるよう、チャットする前に必ずメールを残してください。",
              hi: "こんにちは",
              emailInfoMessage: "ご連絡先のメールアドレスは、 ",
              you: "あなた",
              lastPredefined: "答えを選んでください…",
              message: "メッセージ",
              product: "オファー",
              productList: "オファー",
              button: "新しいチャットを開始する",
              form: "フォームに記入してください…",
              at: "で",
            },
            participantEditor: {
              saveChanges: "変更内容を保存",
              dataChanged: "データを変更しました",
              yourDetails: "あなたの詳細",
            },
            chatRooms: {
              header: "あなたのチャット",
              startChat: "新しいチャットを開始してください",
              newChat: "新しいチャットを開始する",
              empty: "まだ空です",
              chatEndedShort: "チャットは終了しました",
            },
            adultWarning: {
              warningMessage:
                "こんにちは！ あなたの年齢が 18 歳以上であることを確認していただければ、どんな問題でも喜んでお手伝いいたします。",
              warningQuestion: "18才以上ですか？",
              warningAnswer: "私は18歳以上です",
              warningText:
                "チャットには冒涜的または攻撃的な表現が含まれる場合があります。",
            },
          },
        },
        Pt = {
          app: {
            norbyAI: "Norby AI",
            header: {
              online: "på nett",
              chatTip: "Velg en chat fra listen nedenfor",
            },
            socketError:
              "Prøver å koble deg til serveren... Vent eller prøv å chatte senere.",
            globalError: "Chatten er ikke tilgjengelig. Beklager bryet!",
            chat: {
              type: "Skriv meldingen din her...",
              powered: "Drevet av ",
              isTyping: "skriver...",
              chatEnded:
                "Chatten er avsluttet. Trykk på knappen nedenfor for å starte en ny.",
              email: "Din epost...",
              emailLater:
                "Gi oss e-posten din slik at vi kan kontakte deg senere: ",
              emailError: "E-post er ikke gyldig",
              name: "Navnet ditt...",
              nameError: "Navnet virker ikke ekte",
              messageError: "Meldingen ble ikke sendt",
              imageSizeError: "Maksimal størrelse er 3 Mb",
              today: "I dag",
              yesterday: "I går",
              changedDetailsNotification: "Du har endret dataene dine",
              newChatGreeting: "Hei, jeg er Norby! Hvordan kan jeg hjelpe?",
              newChatGreetingEmailPhrase:
                "Hei! Før du chatter, sørg for å legge igjen e-posten din slik at vi kan kontakte deg senere.",
              hi: "Hei",
              emailInfoMessage: "E-posten for å kontakte deg er",
              you: "Du",
              lastPredefined: "Velg et svar...",
              message: "Beskjed",
              product: "By på",
              productList: "Tilbud",
              button: "Start en ny chat",
              form: "Fyll ut skjemaet…",
              at: "på",
            },
            participantEditor: {
              saveChanges: "Lagre endringer",
              dataChanged: "Du har endret dataene dine",
              yourDetails: "Dine detaljer",
            },
            chatRooms: {
              header: "Chattene dine",
              startChat: "Start en ny chat med oss",
              newChat: "Start en ny chat",
              empty: "Tom ennå",
              chatEndedShort: "Chatten er avsluttet",
            },
            adultWarning: {
              warningMessage:
                "Hei! Etter at du har bekreftet at alderen din er 18+, vil jeg gjerne hjelpe deg med ethvert problem!",
              warningQuestion: "Er du over 18?",
              warningAnswer: "Jeg er over 18",
              warningText:
                "Chatten kan inneholde banning eller aggressive uttrykk.",
            },
          },
        },
        Rt = {
          app: {
            norbyAI: "Norby AI",
            header: {
              online: "online",
              chatTip: "Wybierz czat z poniższej listy",
            },
            socketError:
              "Próbuję połączyć Cię z serwerem... Poczekaj lub spróbuj porozmawiać później.",
            globalError: "Czat jest niedostępny. Przepraszam za niedogodności!",
            chat: {
              type: "Tutaj wpisz swoją wiadomosć...",
              powered: "Obsługiwane przez ",
              isTyping: "pisze...",
              chatEnded:
                "Czat został zakończony. Naciśnij przycisk poniżej, aby rozpocząć nowe.",
              email: "Twój email...",
              emailLater:
                "Podaj nam swój adres e-mail, abyśmy mogli skontaktować się z Tobą później: ",
              emailError: "Adres email jest nieprawidłowy",
              name: "Twoje imię...",
              nameError: "Imię nie wydaje się prawdziwe",
              messageError: "Wiadomość nie została wysłana",
              imageSizeError: "Maksymalny rozmiar to 3Mb",
              today: "Dzisiaj",
              yesterday: "Wczoraj",
              changedDetailsNotification: "Zmieniłeś swoje dane",
              newChatGreeting: "Cześć, jestem Norby! Jak mogę pomóc?",
              newChatGreetingEmailPhrase:
                "Cześć! Przed rozmową pamiętaj o pozostawieniu swojego adresu e-mail, abyśmy mogli się z Tobą później skontaktować.",
              hi: "Cześć",
              emailInfoMessage:
                "Adres e-mail, pod którym można się z Tobą skontaktować, to ",
              you: "Ty",
              lastPredefined: "Wybierz odpowiedź…",
              message: "Wiadomość",
              product: "Oferta",
              productList: "Oferuje",
              button: "Rozpocznij nowy czat",
              form: "Wypełnić formularz…",
              at: "Na",
            },
            participantEditor: {
              saveChanges: "Zapisz zmiany",
              dataChanged: "Zmieniłeś swoje dane",
              yourDetails: "Twoje szczegóły",
            },
            chatRooms: {
              header: "Twoje czaty",
              startChat: "Rozpocznij z nami nowy czat",
              newChat: "Rozpocznij nowy czat",
              empty: "Jeszcze pusto",
              chatEndedShort: "Czat został zakończony",
            },
            adultWarning: {
              warningMessage:
                "Cześć! Gdy potwierdzisz, że masz ukończone 18 lat, chętnie pomogę Ci w rozwiązaniu każdego problemu!",
              warningQuestion: "Czy masz powyżej 18 lat?",
              warningAnswer: "Mam ponad 18 lat",
              warningText:
                "Czat może zawierać wulgaryzmy lub agresywne wyrażenia.",
            },
          },
        },
        Ht = {
          app: {
            norbyAI: "Norby AI",
            header: {
              online: "on-line",
              chatTip: "Selecione um bate-papo na lista abaixo",
            },
            socketError:
              "Tentando conectar você ao servidor… Aguarde ou tente conversar mais tarde.",
            globalError:
              "O bate-papo não está disponível. Desculpe pela inconveniência!",
            chat: {
              type: "Digite sua mensagem aqui...",
              powered: "Distribuído por ",
              isTyping: "está digitando...",
              chatEnded:
                "O bate-papo foi encerrado. Pressione o botão abaixo para iniciar um novo.",
              email: "Seu email...",
              emailLater:
                "Informe seu e-mail para que possamos entrar em contato mais tarde: ",
              emailError: "E-mail não é válido",
              name: "Seu nome...",
              nameError: "O nome não parece real",
              messageError: "A mensagem não foi enviada",
              imageSizeError: "O tamanho máximo é 3Mb",
              today: "Hoje",
              yesterday: "Ontem",
              changedDetailsNotification: "Você alterou seus dados",
              newChatGreeting: "Olá, meu nome é Norby! Como posso ajudar?",
              newChatGreetingEmailPhrase:
                "Oi! Antes de conversar, deixe seu e-mail para que possamos entrar em contato mais tarde.",
              hi: "Oi",
              emailInfoMessage: "O e-mail para entrar em contato com você é ",
              you: "Você",
              lastPredefined: "Escolha uma resposta…",
              message: "Mensagem",
              product: "Oferecer",
              productList: "Ofertas",
              button: "Inicie um novo bate-papo",
              form: "Preencha o formulário…",
              at: "no",
            },
            participantEditor: {
              saveChanges: "Salvar alterações",
              dataChanged: "Você alterou seus dados",
              yourDetails: "Seus detalhes",
            },
            chatRooms: {
              header: "Seus bate-papos",
              startChat: "Inicie um novo bate-papo conosco",
              newChat: "Iniciar um novo bate-papo",
              empty: "Vazio ainda",
              chatEndedShort: "O bate-papo foi encerrado",
            },
            adultWarning: {
              warningMessage:
                "Oi! Depois de confirmar que sua idade é maior de 18 anos, adorarei ajudá-lo com qualquer problema!",
              warningQuestion: "Voce tem mais de 18 anos?",
              warningAnswer: "Tenho mais de 18",
              warningText:
                "O chat pode conter palavrões ou expressões agressivas.",
            },
          },
        },
        $t = {
          app: {
            norbyAI: "Norby AI",
            header: {
              online: "онлайн",
              chatTip: "Выберите чат из списка ниже",
            },
            socketError:
              "Пытаемся подключить вас к серверу… Ждите или попробуйте отправить сообщение позже.",
            globalError: "Чат недоступен. Извините за неудобства!",
            chat: {
              type: "Введите сообщение...",
              powered: "При поддержке ",
              isTyping: "печатает...",
              chatEnded:
                "Чат завершен. Нажмите кнопку ниже, чтобы начать новый.",
              email: "Введите почту...",
              emailLater:
                "Вы можете дать нам свою почту, чтобы мы смогли с вами связаться позже:",
              emailError: "Неверный формат почты",
              name: "Введите имя...",
              nameError: "Имя выглядит ненастоящим",
              messageError: "Сообщение не было отправлено",
              imageSizeError: "Максимальный размер — 3Мб",
              today: "Сегодня",
              yesterday: "Вчера",
              changedDetailsNotification: "Вы изменили свои данные",
              newChatGreeting: "Привет, я Норби! Чем могу помочь?",
              newChatGreetingEmailPhrase:
                "Привет! Прежде всего оставьте свою почту, чтобы мы смогли связаться с вами позже.",
              hi: "Привет",
              emailInfoMessage: "Ваша почта для связи — ",
              you: "Вы",
              lastPredefined: "Выберите ответ...",
              message: "Сообщение",
              product: "Предложение",
              productList: "Предложения",
              button: "Начать новый чат",
              form: "Заполните форму…",
              at: "в",
            },
            participantEditor: {
              saveChanges: "Сохранить изменения",
              dataChanged: "Вы изменили свои данные",
              yourDetails: "Ваши данные",
            },
            chatRooms: {
              header: "Ваши чаты",
              startChat: "Начните новый чат с нами",
              newChat: "Новый чат",
              empty: "Внутри пусто",
              chatEndedShort: "Чат завершен",
            },
            adultWarning: {
              warningMessage:
                "Привет! Я помогу с любым вопросом, как только вы подтвердите, что вам больше 18 лет.",
              warningQuestion: "Вам есть 18?",
              warningAnswer: "Мне есть 18",
              warningText:
                "Чат может содержать нецензурную лексику и агрессивные выражения.",
            },
          },
        },
        Wt = {
          app: {
            norbyAI: "Norby AI",
            header: {
              online: "uppkopplad",
              chatTip: "Välj en chatt från listan nedan",
            },
            socketError:
              "Försöker ansluta dig till servern... Vänta eller försök chatta senare.",
            globalError: "Chatten är inte tillgänglig. Beklagar olägenheten!",
            chat: {
              type: "Skriv ditt meddelande här...",
              powered: "Drivs av ",
              isTyping: "skriver...",
              chatEnded:
                "Chatten har avslutats. Tryck på knappen nedan för att starta en ny.",
              email: "Din email...",
              emailLater: "Ge oss din e-post så kan vi kontakta dig senare: ",
              emailError: "E-post är inte giltig",
              name: "Ditt namn...",
              nameError: "Namnet verkar inte riktigt",
              messageError: "Meddelandet skickades inte",
              imageSizeError: "Den maximala storleken är 3 Mb",
              today: "I dag",
              yesterday: "I går",
              changedDetailsNotification: "Du har ändrat dina uppgifter",
              newChatGreeting: "Hej, jag heter Norby! Hur kan jag hjälpa?",
              newChatGreetingEmailPhrase:
                "Hej! Innan du chattar, se till att lämna din e-post så att vi kan kontakta dig senare.",
              hi: "Hej",
              emailInfoMessage: "E-postadressen för att kontakta dig är",
              you: "Du",
              lastPredefined: "Välj ett svar...",
              message: "Meddelande",
              product: "Erbjudande",
              productList: "Erbjudanden",
              button: "Starta en ny chatt",
              form: "Fyll i formuläret…",
              at: "på",
            },
            participantEditor: {
              saveChanges: "Spara ändringar",
              dataChanged: "Du har ändrat dina uppgifter",
              yourDetails: "Dina detaljer",
            },
            chatRooms: {
              header: "Dina chattar",
              startChat: "Starta en ny chatt med oss",
              newChat: "Starta en ny chatt",
              empty: "Tomt ännu",
              chatEndedShort: "Chatten har avslutats",
            },
            adultWarning: {
              warningMessage:
                "Hej! När du har bekräftat att din ålder är 18+ vill jag gärna hjälpa dig med alla problem!",
              warningQuestion: "Är du över 18?",
              warningAnswer: "Jag är över 18",
              warningText:
                "Chatten kan innehålla svordomar eller aggressiva uttryck.",
            },
          },
        },
        Ft = {
          app: {
            norbyAI: "Norby AI",
            header: {
              online: "çevrimiçi",
              chatTip: "Aşağıdaki listeden bir sohbet seçin",
            },
            socketError:
              "Sizi sunucuya bağlamaya çalışıyorum… Bekleyin veya daha sonra sohbet etmeyi deneyin.",
            globalError:
              "Sohbet kullanılamıyor. Rahatsızlıktan dolayı özür dileriz!",
            chat: {
              type: "Mesajınızı buraya yazın...",
              powered: "Tarafından desteklenmektedir ",
              isTyping: "yazıyor...",
              chatEnded:
                "Sohbet sonlandırıldı. Yeni bir tane başlatmak için aşağıdaki düğmeye basın.",
              email: "E-posta adresiniz...",
              emailLater:
                "Sizinle daha sonra iletişime geçebilmemiz için bize e-posta adresinizi verin: ",
              emailError: "E-posta geçerli değil",
              name: "Adınız...",
              nameError: "İsim gerçek gibi görünmüyor",
              messageError: "Mesaj gönderilemedi",
              imageSizeError: "Maksimum boyut 3Mb",
              today: "Bugün",
              yesterday: "Dün",
              changedDetailsNotification: "Verilerinizi değiştirdiniz",
              newChatGreeting: "Merhaba, ben Norby! Nasıl yardımcı olabilirim?",
              newChatGreetingEmailPhrase:
                "MERHABA! Sohbet etmeden önce, sizinle daha sonra iletişime geçebilmemiz için e-posta adresinizi bıraktığınızdan emin olun.",
              hi: "MERHABA",
              emailInfoMessage: "Sizinle iletişime geçilecek e-posta: ",
              you: "Sen",
              lastPredefined: "Bir cevap seçin…",
              message: "İleti",
              product: "Teklif",
              productList: "Teklifler",
              button: "Yeni Sohbet Başlat",
              form: "Formu doldur…",
              at: "en",
            },
            participantEditor: {
              saveChanges: "Değişiklikleri Kaydet",
              dataChanged: "Verilerinizi değiştirdiniz",
              yourDetails: "Detayların",
            },
            chatRooms: {
              header: "Sohbetleriniz",
              startChat: "Bizimle yeni bir sohbet başlatın",
              newChat: "Yeni bir sohbet başlat",
              empty: "Henüz boş",
              chatEndedShort: "Sohbet sonlandırıldı",
            },
            adultWarning: {
              warningMessage:
                "MERHABA! Yaşınızın 18+ olduğunu onayladıktan sonra size her türlü konuda yardımcı olmaktan memnuniyet duyarım!",
              warningQuestion: "18 yaşın üzerinde misiniz?",
              warningAnswer: "18 yaşının üzerindeyim",
              warningText: "Sohbet küfür veya agresif ifadeler içerebilir.",
            },
          },
        },
        Ut = {
          app: {
            norbyAI: "Norby AI",
            header: {
              online: "онлайн",
              chatTip: "Виберіть чат зі списку нижче",
            },
            socketError:
              "Спроба підключити вас до сервера… Зачекайте або спробуйте поговорити пізніше.",
            globalError: "Чат недоступний. Вибачте за незручності!",
            chat: {
              type: "Введіть своє повідомлення тут...",
              powered: "На основі ",
              isTyping: "набирає...",
              chatEnded:
                "Чат завершено. Натисніть кнопку нижче, щоб почати новий.",
              email: "Ваша електронна пошта...",
              emailLater:
                "Надайте нам свою електронну адресу, щоб ми могли зв'язатися з вами пізніше:",
              emailError: "Електронна адреса недійсна",
              name: "Ваше ім'я...",
              nameError: "Ім'я не здається справжнім",
              messageError: "Повідомлення не було надіслано",
              imageSizeError: "Максимальний розмір становить 3 Мб",
              today: "сьогодні",
              yesterday: "вчора",
              changedDetailsNotification: "Ви змінили свої дані",
              newChatGreeting: "Привіт, я Норбі! Чим я можу допомогти?",
              newChatGreetingEmailPhrase:
                "Привіт! Перш ніж спілкуватися в чаті, обов’язково залиште свою електронну адресу, щоб ми могли зв’язатися з вами пізніше.",
              hi: "Привіт",
              emailInfoMessage: "Електронна адреса для зв'язку з вами",
              you: "Ти",
              lastPredefined: "Виберіть відповідь…",
              message: "Повідомлення",
              product: "Пропозиція",
              productList: "Пропозиції",
              button: "Почати новий чат",
              form: "Заповнити форму…",
              at: "при",
            },
            participantEditor: {
              saveChanges: "Зберегти зміни",
              dataChanged: "Ви змінили свої дані",
              yourDetails: "Ваші дані",
            },
            chatRooms: {
              header: "Ваші чати",
              startChat: "Почніть новий чат з нами",
              newChat: "Почати новий чат",
              empty: "Ще порожній",
              chatEndedShort: "Чат завершено",
            },
            adultWarning: {
              warningMessage:
                "Привіт! Після того, як ви підтвердите, що вам виповнилося 18 років, я буду радий допомогти вам у вирішенні будь-якої проблеми!",
              warningQuestion: "Вам більше 18?",
              warningAnswer: "Мені більше 18",
              warningText:
                "Чат може містити нецензурну лексику або агресивні вирази",
            },
          },
        },
        Vt = {
          app: {
            norbyAI: "Norby AI",
            header: { online: "在線的", chatTip: "從下面的清單中選擇一個聊天" },
            socketError: "正在嘗試將您連接到伺服器...等待或稍後嘗試聊天。",
            globalError: "聊天不可用。 帶來不便敬請諒解！",
            chat: {
              type: "在這裡輸入你的訊息...",
              powered: "供電 ",
              isTyping: "在打字...",
              chatEnded: "聊天已經結束。 按下下面的按鈕開始一個新的。",
              email: "你的郵件...",
              emailLater: "向我們提供您的電子郵件，以便我們稍後與您聯繫：",
              emailError: "電子郵件無效",
              name: "你的名字...",
              nameError: "這個名字似乎不真實",
              messageError: "訊息未發送",
              imageSizeError: "最大大小為 3Mb",
              today: "今天",
              yesterday: "昨天",
              changedDetailsNotification: "您已更改數據",
              newChatGreeting: "你好，我是諾比！ 我能提供什麼幫助嗎？",
              newChatGreetingEmailPhrase:
                "你好！ 在聊天之前，請務必留下您的電子郵件，以便我們稍後與您聯繫。",
              hi: "你好",
              emailInfoMessage: "與您聯絡的電子郵件是",
              you: "你",
              lastPredefined: "選擇一個答案...",
              message: "訊息",
              product: "提供",
              productList: "優惠",
              button: "開始新聊天",
              form: "填表格…",
              at: "在",
            },
            participantEditor: {
              saveChanges: "儲存變更",
              dataChanged: "您已更改數據",
              yourDetails: "你的資料",
            },
            chatRooms: {
              header: "你的聊天記錄",
              startChat: "與我們開始新的聊天",
              newChat: "開始新的聊天",
              empty: "還空著",
              chatEndedShort: "聊天已結束",
            },
            adultWarning: {
              warningMessage:
                "你好！ 在您確認您的年齡已滿 18 歲後，我很樂意協助您解決任何問題！",
              warningQuestion: "您已年滿 18 歲嗎？",
              warningAnswer: "我已年滿 18 歲",
              warningText: "聊天內容可能包含髒話或攻擊性言論。",
            },
          },
        },
        qt = (e) => {
          switch (e) {
            case "ee":
              return Dt;
            case "ru":
              return $t;
            case "en":
            default:
              return At;
            case "it":
              return jt;
            case "fr":
              return It;
            case "de":
              return Mt;
            case "ua":
              return Ut;
            case "es":
              return Ot;
            case "fi":
              return zt;
            case "sv":
              return Wt;
            case "da":
              return Nt;
            case "no":
              return Pt;
            case "pl":
              return Rt;
            case "pt":
              return Ht;
            case "tr":
              return Ft;
            case "zh":
              return Vt;
            case "ja":
              return Bt;
          }
        };
      let Gt = (function (e) {
        return (
          (e.Inprogress = "inprogress"),
          (e.Confirmed = "confirmed"),
          (e.Failed = "failed"),
          e
        );
      })({});
      const Kt = (e, t) => ({
        unreadCount: 0,
        active: e.active,
        agent: e.agent
          ? {
              avatar: e.agent.avatar,
              first_name: e.agent.first_name,
              last_name: e.agent.last_name,
            }
          : void 0,
        chat_messages: e.chat_messages
          ? e.chat_messages.map((e) => ({
              ...e,
              hasAvatar: !1,
              confirmed: Gt.Confirmed,
            }))
          : [],
        client_email: e.client_email,
        client_name: e.client_name,
        conn: void 0,
        hasNewMessages: !1,
        last_message: e.last_message,
        startingEvent: e.startingEvent,
        uid: e.uid,
        viewed: e.viewed_by_client,
        participant: e.participant,
        createdDate: e.created_date,
        delayedBotEventMessages: [],
        selected: !!t,
      });
      class Yt extends Error {
        constructor(e) {
          super(`Malformed information message response: ${e}`);
        }
      }
      const Jt = (e) => {
          if (!e.ok) throw new Error("Api response error");
        },
        Zt = async (e, t) => {
          const n = await fetch(e, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(t),
          });
          return await Jt(n), n;
        },
        Qt = async (e, t) => {
          const n = await fetch(e, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(t),
          });
          return await Jt(n), n;
        },
        Xt = async (e, { apiKey: t, locale: n, name: r, email: i }) => {
          const o = await Zt(
            e,
            n
              ? { apiKey: t, locale: n, name: r, email: i }
              : { apiKey: t, name: r, email: i }
          );
          return await o.json();
        };
      async function en(e) {
        return {
          fieldname: "file",
          originalname: e.name,
          encoding: "",
          mimetype: e.type,
          size: e.size,
          destination: `/tmp/${e.name}`,
          filename: e.name,
          path: `/tmp/${e.name}`,
          buffer: new Uint8Array(await e.arrayBuffer()),
        };
      }
      const tn = async (e) =>
          await new Promise((t) => {
            const n = new Image();
            (n.src = e),
              (n.onload = () => {
                t(nn(n, 1920, 1080));
              });
          }),
        nn = (e, t, n) =>
          new Promise((r) => {
            const i = document.createElement("canvas");
            let o = e.width,
              a = e.height;
            o > a
              ? o > t && ((a *= t / o), (o = t))
              : a > n && ((o *= n / a), (a = n)),
              (i.width = o),
              (i.height = a);
            const s = i.getContext("2d");
            s?.drawImage(e, 0, 0, o, a), r(i.toDataURL("image/jpeg"));
          }),
        rn = (e, t) => ({
          id: 0,
          author: "client",
          message: e,
          time: new Date().toISOString(),
          full_date: new Date().toISOString(),
          visible_to_client: !0,
          hasAvatar: !1,
          confirmed: Gt.Inprogress,
          type: t || "text",
        }),
        on = (e, t = !0, n) => ({
          author: "bot",
          message: e,
          id: 0,
          time: new Date().toISOString(),
          full_date: new Date().toISOString(),
          visible_to_client: t,
          hasAvatar: !1,
          confirmed: Gt.Confirmed,
          type: n || "text",
          predefined_answers: [],
        }),
        an = (e, t) => ({
          author: "agent",
          confirmed: Gt.Confirmed,
          hasAvatar: !!t,
          id: 0,
          time: new Date().toISOString(),
          type: "text",
          visible_to_client: !0,
          agent: t || void 0,
          message: e,
        }),
        sn = (e) => ({
          author: "bot",
          confirmed: Gt.Confirmed,
          full_date: new Date().toISOString(),
          id: 0,
          message: JSON.stringify({ messages: e }),
          type: "predefined_answers",
          visible_to_client: !0,
          hasAvatar: !1,
          time: new Date().toISOString(),
        }),
        ln = (e, t, n) => {
          e?.forEach((e) => {
            n(t, on(e.text)),
              e.predefinedAnswers && n(t, sn(e.predefinedAnswers), !1);
          });
        },
        cn = document.title;
      let dn;
      const un = () => {
        dn && (clearTimeout(dn), (dn = null)), (document.title = cn);
      };
      function pn(e, t) {
        return [...e.map((e) => (e.uid !== t.uid ? e : t))];
      }
      function hn(e, t) {
        return (e && e.find((e) => e.uid === t)) || null;
      }
      function mn(e, t, n) {
        e((e) => (e ? ((t.typing = n), pn(e, t)) : null));
      }
      function gn(e, t, n, r) {
        e((e) => {
          if (!e) return e;
          const i = e.find((e) => e.uid === n);
          if (!i || !i.chat_messages || !r.message) return e;
          const o = i.chat_messages.find(
            (e) => "inprogress" === e.confirmed && e.message === r.message
          );
          return o
            ? ((o.id = r.id),
              (o.confirmed = t),
              (o.image = r.image),
              (i.chat_messages = (function (e, t) {
                return [...e.map((e) => (e.id !== t.id ? e : t))];
              })(i.chat_messages, o)),
              pn(e, i))
            : e;
        });
      }
      function fn(e, t) {
        e((e) => {
          if (!e) return null;
          const n = hn(e, t);
          return n
            ? ("inprogress" === n.last_message?.confirmed &&
                (n.last_message.type = "error"),
              (n.typing = !1),
              pn(e, n))
            : e;
        });
      }
      const bn = Object.create(null);
      (bn.open = "0"),
        (bn.close = "1"),
        (bn.ping = "2"),
        (bn.pong = "3"),
        (bn.message = "4"),
        (bn.upgrade = "5"),
        (bn.noop = "6");
      const yn = Object.create(null);
      Object.keys(bn).forEach((e) => {
        yn[bn[e]] = e;
      });
      const vn = { type: "error", data: "parser error" },
        _n =
          "function" == typeof Blob ||
          ("undefined" != typeof Blob &&
            "[object BlobConstructor]" ===
              Object.prototype.toString.call(Blob)),
        wn = "function" == typeof ArrayBuffer,
        xn = (e) =>
          "function" == typeof ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e && e.buffer instanceof ArrayBuffer,
        Cn = ({ type: e, data: t }, n, r) =>
          _n && t instanceof Blob
            ? n
              ? r(t)
              : kn(t, r)
            : wn && (t instanceof ArrayBuffer || xn(t))
            ? n
              ? r(t)
              : kn(new Blob([t]), r)
            : r(bn[e] + (t || "")),
        kn = (e, t) => {
          const n = new FileReader();
          return (
            (n.onload = function () {
              const e = n.result.split(",")[1];
              t("b" + (e || ""));
            }),
            n.readAsDataURL(e)
          );
        };
      function En(e) {
        return e instanceof Uint8Array
          ? e
          : e instanceof ArrayBuffer
          ? new Uint8Array(e)
          : new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
      }
      let Sn;
      const Ln = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256);
      for (let e = 0; e < 64; e++)
        Ln[
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(
            e
          )
        ] = e;
      const Tn = "function" == typeof ArrayBuffer,
        Nn = (e, t) => {
          if ("string" != typeof e) return { type: "message", data: Dn(e, t) };
          const n = e.charAt(0);
          return "b" === n
            ? { type: "message", data: Mn(e.substring(1), t) }
            : yn[n]
            ? e.length > 1
              ? { type: yn[n], data: e.substring(1) }
              : { type: yn[n] }
            : vn;
        },
        Mn = (e, t) => {
          if (Tn) {
            const n = ((e) => {
              let t,
                n,
                r,
                i,
                o,
                a = 0.75 * e.length,
                s = e.length,
                l = 0;
              "=" === e[e.length - 1] && (a--, "=" === e[e.length - 2] && a--);
              const c = new ArrayBuffer(a),
                d = new Uint8Array(c);
              for (t = 0; t < s; t += 4)
                (n = Ln[e.charCodeAt(t)]),
                  (r = Ln[e.charCodeAt(t + 1)]),
                  (i = Ln[e.charCodeAt(t + 2)]),
                  (o = Ln[e.charCodeAt(t + 3)]),
                  (d[l++] = (n << 2) | (r >> 4)),
                  (d[l++] = ((15 & r) << 4) | (i >> 2)),
                  (d[l++] = ((3 & i) << 6) | (63 & o));
              return c;
            })(e);
            return Dn(n, t);
          }
          return { base64: !0, data: e };
        },
        Dn = (e, t) =>
          "blob" === t
            ? e instanceof Blob
              ? e
              : new Blob([e])
            : e instanceof ArrayBuffer
            ? e
            : e.buffer,
        An = String.fromCharCode(30);
      let On;
      function zn(e) {
        return e.reduce((e, t) => e + t.length, 0);
      }
      function In(e, t) {
        if (e[0].length === t) return e.shift();
        const n = new Uint8Array(t);
        let r = 0;
        for (let i = 0; i < t; i++)
          (n[i] = e[0][r++]), r === e[0].length && (e.shift(), (r = 0));
        return e.length && r < e[0].length && (e[0] = e[0].slice(r)), n;
      }
      function jn(e) {
        if (e)
          return (function (e) {
            for (var t in jn.prototype) e[t] = jn.prototype[t];
            return e;
          })(e);
      }
      (jn.prototype.on = jn.prototype.addEventListener =
        function (e, t) {
          return (
            (this._callbacks = this._callbacks || {}),
            (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t),
            this
          );
        }),
        (jn.prototype.once = function (e, t) {
          function n() {
            this.off(e, n), t.apply(this, arguments);
          }
          return (n.fn = t), this.on(e, n), this;
        }),
        (jn.prototype.off =
          jn.prototype.removeListener =
          jn.prototype.removeAllListeners =
          jn.prototype.removeEventListener =
            function (e, t) {
              if (
                ((this._callbacks = this._callbacks || {}),
                0 == arguments.length)
              )
                return (this._callbacks = {}), this;
              var n,
                r = this._callbacks["$" + e];
              if (!r) return this;
              if (1 == arguments.length)
                return delete this._callbacks["$" + e], this;
              for (var i = 0; i < r.length; i++)
                if ((n = r[i]) === t || n.fn === t) {
                  r.splice(i, 1);
                  break;
                }
              return 0 === r.length && delete this._callbacks["$" + e], this;
            }),
        (jn.prototype.emit = function (e) {
          this._callbacks = this._callbacks || {};
          for (
            var t = new Array(arguments.length - 1),
              n = this._callbacks["$" + e],
              r = 1;
            r < arguments.length;
            r++
          )
            t[r - 1] = arguments[r];
          if (n) {
            r = 0;
            for (var i = (n = n.slice(0)).length; r < i; ++r)
              n[r].apply(this, t);
          }
          return this;
        }),
        (jn.prototype.emitReserved = jn.prototype.emit),
        (jn.prototype.listeners = function (e) {
          return (
            (this._callbacks = this._callbacks || {}),
            this._callbacks["$" + e] || []
          );
        }),
        (jn.prototype.hasListeners = function (e) {
          return !!this.listeners(e).length;
        });
      const Bn =
        "undefined" != typeof self
          ? self
          : "undefined" != typeof window
          ? window
          : Function("return this")();
      function Pn(e, ...t) {
        return t.reduce(
          (t, n) => (e.hasOwnProperty(n) && (t[n] = e[n]), t),
          {}
        );
      }
      const Rn = Bn.setTimeout,
        Hn = Bn.clearTimeout;
      function $n(e, t) {
        t.useNativeTimers
          ? ((e.setTimeoutFn = Rn.bind(Bn)), (e.clearTimeoutFn = Hn.bind(Bn)))
          : ((e.setTimeoutFn = Bn.setTimeout.bind(Bn)),
            (e.clearTimeoutFn = Bn.clearTimeout.bind(Bn)));
      }
      class Wn extends Error {
        constructor(e, t, n) {
          super(e),
            (this.description = t),
            (this.context = n),
            (this.type = "TransportError");
        }
      }
      class Fn extends jn {
        constructor(e) {
          super(),
            (this.writable = !1),
            $n(this, e),
            (this.opts = e),
            (this.query = e.query),
            (this.socket = e.socket);
        }
        onError(e, t, n) {
          return super.emitReserved("error", new Wn(e, t, n)), this;
        }
        open() {
          return (this.readyState = "opening"), this.doOpen(), this;
        }
        close() {
          return (
            ("opening" !== this.readyState && "open" !== this.readyState) ||
              (this.doClose(), this.onClose()),
            this
          );
        }
        send(e) {
          "open" === this.readyState && this.write(e);
        }
        onOpen() {
          (this.readyState = "open"),
            (this.writable = !0),
            super.emitReserved("open");
        }
        onData(e) {
          const t = Nn(e, this.socket.binaryType);
          this.onPacket(t);
        }
        onPacket(e) {
          super.emitReserved("packet", e);
        }
        onClose(e) {
          (this.readyState = "closed"), super.emitReserved("close", e);
        }
        pause(e) {}
        createUri(e, t = {}) {
          return (
            e +
            "://" +
            this._hostname() +
            this._port() +
            this.opts.path +
            this._query(t)
          );
        }
        _hostname() {
          const e = this.opts.hostname;
          return -1 === e.indexOf(":") ? e : "[" + e + "]";
        }
        _port() {
          return this.opts.port &&
            ((this.opts.secure && Number(443 !== this.opts.port)) ||
              (!this.opts.secure && 80 !== Number(this.opts.port)))
            ? ":" + this.opts.port
            : "";
        }
        _query(e) {
          const t = (function (e) {
            let t = "";
            for (let n in e)
              e.hasOwnProperty(n) &&
                (t.length && (t += "&"),
                (t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n])));
            return t;
          })(e);
          return t.length ? "?" + t : "";
        }
      }
      const Un =
          "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(
            ""
          ),
        Vn = 64,
        qn = {};
      let Gn,
        Kn = 0,
        Yn = 0;
      function Jn(e) {
        let t = "";
        do {
          (t = Un[e % Vn] + t), (e = Math.floor(e / Vn));
        } while (e > 0);
        return t;
      }
      function Zn() {
        const e = Jn(+new Date());
        return e !== Gn ? ((Kn = 0), (Gn = e)) : e + "." + Jn(Kn++);
      }
      for (; Yn < Vn; Yn++) qn[Un[Yn]] = Yn;
      let Qn = !1;
      try {
        Qn =
          "undefined" != typeof XMLHttpRequest &&
          "withCredentials" in new XMLHttpRequest();
      } catch (e) {}
      const Xn = Qn;
      function er(e) {
        const t = e.xdomain;
        try {
          if ("undefined" != typeof XMLHttpRequest && (!t || Xn))
            return new XMLHttpRequest();
        } catch (e) {}
        if (!t)
          try {
            return new Bn[["Active"].concat("Object").join("X")](
              "Microsoft.XMLHTTP"
            );
          } catch (e) {}
      }
      function tr() {}
      const nr = null != new er({ xdomain: !1 }).responseType;
      class rr extends jn {
        constructor(e, t) {
          super(),
            $n(this, t),
            (this.opts = t),
            (this.method = t.method || "GET"),
            (this.uri = e),
            (this.data = void 0 !== t.data ? t.data : null),
            this.create();
        }
        create() {
          var e;
          const t = Pn(
            this.opts,
            "agent",
            "pfx",
            "key",
            "passphrase",
            "cert",
            "ca",
            "ciphers",
            "rejectUnauthorized",
            "autoUnref"
          );
          t.xdomain = !!this.opts.xd;
          const n = (this.xhr = new er(t));
          try {
            n.open(this.method, this.uri, !0);
            try {
              if (this.opts.extraHeaders) {
                n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0);
                for (let e in this.opts.extraHeaders)
                  this.opts.extraHeaders.hasOwnProperty(e) &&
                    n.setRequestHeader(e, this.opts.extraHeaders[e]);
              }
            } catch (e) {}
            if ("POST" === this.method)
              try {
                n.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
              } catch (e) {}
            try {
              n.setRequestHeader("Accept", "*/*");
            } catch (e) {}
            null === (e = this.opts.cookieJar) ||
              void 0 === e ||
              e.addCookies(n),
              "withCredentials" in n &&
                (n.withCredentials = this.opts.withCredentials),
              this.opts.requestTimeout &&
                (n.timeout = this.opts.requestTimeout),
              (n.onreadystatechange = () => {
                var e;
                3 === n.readyState &&
                  (null === (e = this.opts.cookieJar) ||
                    void 0 === e ||
                    e.parseCookies(n)),
                  4 === n.readyState &&
                    (200 === n.status || 1223 === n.status
                      ? this.onLoad()
                      : this.setTimeoutFn(() => {
                          this.onError(
                            "number" == typeof n.status ? n.status : 0
                          );
                        }, 0));
              }),
              n.send(this.data);
          } catch (e) {
            return void this.setTimeoutFn(() => {
              this.onError(e);
            }, 0);
          }
          "undefined" != typeof document &&
            ((this.index = rr.requestsCount++),
            (rr.requests[this.index] = this));
        }
        onError(e) {
          this.emitReserved("error", e, this.xhr), this.cleanup(!0);
        }
        cleanup(e) {
          if (void 0 !== this.xhr && null !== this.xhr) {
            if (((this.xhr.onreadystatechange = tr), e))
              try {
                this.xhr.abort();
              } catch (e) {}
            "undefined" != typeof document && delete rr.requests[this.index],
              (this.xhr = null);
          }
        }
        onLoad() {
          const e = this.xhr.responseText;
          null !== e &&
            (this.emitReserved("data", e),
            this.emitReserved("success"),
            this.cleanup());
        }
        abort() {
          this.cleanup();
        }
      }
      function ir() {
        for (let e in rr.requests)
          rr.requests.hasOwnProperty(e) && rr.requests[e].abort();
      }
      (rr.requestsCount = 0),
        (rr.requests = {}),
        "undefined" != typeof document &&
          ("function" == typeof attachEvent
            ? attachEvent("onunload", ir)
            : "function" == typeof addEventListener &&
              addEventListener(
                "onpagehide" in Bn ? "pagehide" : "unload",
                ir,
                !1
              ));
      const or =
          "function" == typeof Promise && "function" == typeof Promise.resolve
            ? (e) => Promise.resolve().then(e)
            : (e, t) => t(e, 0),
        ar = Bn.WebSocket || Bn.MozWebSocket,
        sr =
          "undefined" != typeof navigator &&
          "string" == typeof navigator.product &&
          "reactnative" === navigator.product.toLowerCase(),
        lr = {
          websocket: class extends Fn {
            constructor(e) {
              super(e), (this.supportsBinary = !e.forceBase64);
            }
            get name() {
              return "websocket";
            }
            doOpen() {
              if (!this.check()) return;
              const e = this.uri(),
                t = this.opts.protocols,
                n = sr
                  ? {}
                  : Pn(
                      this.opts,
                      "agent",
                      "perMessageDeflate",
                      "pfx",
                      "key",
                      "passphrase",
                      "cert",
                      "ca",
                      "ciphers",
                      "rejectUnauthorized",
                      "localAddress",
                      "protocolVersion",
                      "origin",
                      "maxPayload",
                      "family",
                      "checkServerIdentity"
                    );
              this.opts.extraHeaders && (n.headers = this.opts.extraHeaders);
              try {
                this.ws = sr ? new ar(e, t, n) : t ? new ar(e, t) : new ar(e);
              } catch (e) {
                return this.emitReserved("error", e);
              }
              (this.ws.binaryType = this.socket.binaryType),
                this.addEventListeners();
            }
            addEventListeners() {
              (this.ws.onopen = () => {
                this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
              }),
                (this.ws.onclose = (e) =>
                  this.onClose({
                    description: "websocket connection closed",
                    context: e,
                  })),
                (this.ws.onmessage = (e) => this.onData(e.data)),
                (this.ws.onerror = (e) => this.onError("websocket error", e));
            }
            write(e) {
              this.writable = !1;
              for (let t = 0; t < e.length; t++) {
                const n = e[t],
                  r = t === e.length - 1;
                Cn(n, this.supportsBinary, (e) => {
                  try {
                    this.ws.send(e);
                  } catch (e) {}
                  r &&
                    or(() => {
                      (this.writable = !0), this.emitReserved("drain");
                    }, this.setTimeoutFn);
                });
              }
            }
            doClose() {
              void 0 !== this.ws && (this.ws.close(), (this.ws = null));
            }
            uri() {
              const e = this.opts.secure ? "wss" : "ws",
                t = this.query || {};
              return (
                this.opts.timestampRequests &&
                  (t[this.opts.timestampParam] = Zn()),
                this.supportsBinary || (t.b64 = 1),
                this.createUri(e, t)
              );
            }
            check() {
              return !!ar;
            }
          },
          webtransport: class extends Fn {
            get name() {
              return "webtransport";
            }
            doOpen() {
              "function" == typeof WebTransport &&
                ((this.transport = new WebTransport(
                  this.createUri("https"),
                  this.opts.transportOptions[this.name]
                )),
                this.transport.closed
                  .then(() => {
                    this.onClose();
                  })
                  .catch((e) => {
                    this.onError("webtransport error", e);
                  }),
                this.transport.ready.then(() => {
                  this.transport.createBidirectionalStream().then((e) => {
                    const t = (function (e, t) {
                        On || (On = new TextDecoder());
                        const n = [];
                        let r = 0,
                          i = -1,
                          o = !1;
                        return new TransformStream({
                          transform(a, s) {
                            for (n.push(a); ; ) {
                              if (0 === r) {
                                if (zn(n) < 1) break;
                                const e = In(n, 1);
                                (o = !(128 & ~e[0])),
                                  (i = 127 & e[0]),
                                  (r = i < 126 ? 3 : 126 === i ? 1 : 2);
                              } else if (1 === r) {
                                if (zn(n) < 2) break;
                                const e = In(n, 2);
                                (i = new DataView(
                                  e.buffer,
                                  e.byteOffset,
                                  e.length
                                ).getUint16(0)),
                                  (r = 3);
                              } else if (2 === r) {
                                if (zn(n) < 8) break;
                                const e = In(n, 8),
                                  t = new DataView(
                                    e.buffer,
                                    e.byteOffset,
                                    e.length
                                  ),
                                  o = t.getUint32(0);
                                if (o > Math.pow(2, 21) - 1) {
                                  s.enqueue(vn);
                                  break;
                                }
                                (i = o * Math.pow(2, 32) + t.getUint32(4)),
                                  (r = 3);
                              } else {
                                if (zn(n) < i) break;
                                const e = In(n, i);
                                s.enqueue(Nn(o ? e : On.decode(e), t)), (r = 0);
                              }
                              if (0 === i || i > e) {
                                s.enqueue(vn);
                                break;
                              }
                            }
                          },
                        });
                      })(Number.MAX_SAFE_INTEGER, this.socket.binaryType),
                      n = e.readable.pipeThrough(t).getReader(),
                      r = new TransformStream({
                        transform(e, t) {
                          !(function (e, t) {
                            _n && e.data instanceof Blob
                              ? e.data.arrayBuffer().then(En).then(t)
                              : wn &&
                                (e.data instanceof ArrayBuffer || xn(e.data))
                              ? t(En(e.data))
                              : Cn(e, !1, (e) => {
                                  Sn || (Sn = new TextEncoder()),
                                    t(Sn.encode(e));
                                });
                          })(e, (n) => {
                            const r = n.length;
                            let i;
                            if (r < 126)
                              (i = new Uint8Array(1)),
                                new DataView(i.buffer).setUint8(0, r);
                            else if (r < 65536) {
                              i = new Uint8Array(3);
                              const e = new DataView(i.buffer);
                              e.setUint8(0, 126), e.setUint16(1, r);
                            } else {
                              i = new Uint8Array(9);
                              const e = new DataView(i.buffer);
                              e.setUint8(0, 127), e.setBigUint64(1, BigInt(r));
                            }
                            e.data &&
                              "string" != typeof e.data &&
                              (i[0] |= 128),
                              t.enqueue(i),
                              t.enqueue(n);
                          });
                        },
                      });
                    r.readable.pipeTo(e.writable),
                      (this.writer = r.writable.getWriter());
                    const i = () => {
                      n.read()
                        .then(({ done: e, value: t }) => {
                          e || (this.onPacket(t), i());
                        })
                        .catch((e) => {});
                    };
                    i();
                    const o = { type: "open" };
                    this.query.sid && (o.data = `{"sid":"${this.query.sid}"}`),
                      this.writer.write(o).then(() => this.onOpen());
                  });
                }));
            }
            write(e) {
              this.writable = !1;
              for (let t = 0; t < e.length; t++) {
                const n = e[t],
                  r = t === e.length - 1;
                this.writer.write(n).then(() => {
                  r &&
                    or(() => {
                      (this.writable = !0), this.emitReserved("drain");
                    }, this.setTimeoutFn);
                });
              }
            }
            doClose() {
              var e;
              null === (e = this.transport) || void 0 === e || e.close();
            }
          },
          polling: class extends Fn {
            constructor(e) {
              if (
                (super(e), (this.polling = !1), "undefined" != typeof location)
              ) {
                const t = "https:" === location.protocol;
                let n = location.port;
                n || (n = t ? "443" : "80"),
                  (this.xd =
                    ("undefined" != typeof location &&
                      e.hostname !== location.hostname) ||
                    n !== e.port);
              }
              const t = e && e.forceBase64;
              (this.supportsBinary = nr && !t),
                this.opts.withCredentials && (this.cookieJar = void 0);
            }
            get name() {
              return "polling";
            }
            doOpen() {
              this.poll();
            }
            pause(e) {
              this.readyState = "pausing";
              const t = () => {
                (this.readyState = "paused"), e();
              };
              if (this.polling || !this.writable) {
                let e = 0;
                this.polling &&
                  (e++,
                  this.once("pollComplete", function () {
                    --e || t();
                  })),
                  this.writable ||
                    (e++,
                    this.once("drain", function () {
                      --e || t();
                    }));
              } else t();
            }
            poll() {
              (this.polling = !0), this.doPoll(), this.emitReserved("poll");
            }
            onData(e) {
              ((e, t) => {
                const n = e.split(An),
                  r = [];
                for (let e = 0; e < n.length; e++) {
                  const i = Nn(n[e], t);
                  if ((r.push(i), "error" === i.type)) break;
                }
                return r;
              })(e, this.socket.binaryType).forEach((e) => {
                if (
                  ("opening" === this.readyState &&
                    "open" === e.type &&
                    this.onOpen(),
                  "close" === e.type)
                )
                  return (
                    this.onClose({
                      description: "transport closed by the server",
                    }),
                    !1
                  );
                this.onPacket(e);
              }),
                "closed" !== this.readyState &&
                  ((this.polling = !1),
                  this.emitReserved("pollComplete"),
                  "open" === this.readyState && this.poll());
            }
            doClose() {
              const e = () => {
                this.write([{ type: "close" }]);
              };
              "open" === this.readyState ? e() : this.once("open", e);
            }
            write(e) {
              (this.writable = !1),
                ((e, t) => {
                  const n = e.length,
                    r = new Array(n);
                  let i = 0;
                  e.forEach((e, o) => {
                    Cn(e, !1, (e) => {
                      (r[o] = e), ++i === n && t(r.join(An));
                    });
                  });
                })(e, (e) => {
                  this.doWrite(e, () => {
                    (this.writable = !0), this.emitReserved("drain");
                  });
                });
            }
            uri() {
              const e = this.opts.secure ? "https" : "http",
                t = this.query || {};
              return (
                !1 !== this.opts.timestampRequests &&
                  (t[this.opts.timestampParam] = Zn()),
                this.supportsBinary || t.sid || (t.b64 = 1),
                this.createUri(e, t)
              );
            }
            request(e = {}) {
              return (
                Object.assign(
                  e,
                  { xd: this.xd, cookieJar: this.cookieJar },
                  this.opts
                ),
                new rr(this.uri(), e)
              );
            }
            doWrite(e, t) {
              const n = this.request({ method: "POST", data: e });
              n.on("success", t),
                n.on("error", (e, t) => {
                  this.onError("xhr post error", e, t);
                });
            }
            doPoll() {
              const e = this.request();
              e.on("data", this.onData.bind(this)),
                e.on("error", (e, t) => {
                  this.onError("xhr poll error", e, t);
                }),
                (this.pollXhr = e);
            }
          },
        },
        cr =
          /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        dr = [
          "source",
          "protocol",
          "authority",
          "userInfo",
          "user",
          "password",
          "host",
          "port",
          "relative",
          "path",
          "directory",
          "file",
          "query",
          "anchor",
        ];
      function ur(e) {
        if (e.length > 2e3) throw "URI too long";
        const t = e,
          n = e.indexOf("["),
          r = e.indexOf("]");
        -1 != n &&
          -1 != r &&
          (e =
            e.substring(0, n) +
            e.substring(n, r).replace(/:/g, ";") +
            e.substring(r, e.length));
        let i = cr.exec(e || ""),
          o = {},
          a = 14;
        for (; a--; ) o[dr[a]] = i[a] || "";
        return (
          -1 != n &&
            -1 != r &&
            ((o.source = t),
            (o.host = o.host
              .substring(1, o.host.length - 1)
              .replace(/;/g, ":")),
            (o.authority = o.authority
              .replace("[", "")
              .replace("]", "")
              .replace(/;/g, ":")),
            (o.ipv6uri = !0)),
          (o.pathNames = (function (e, t) {
            const n = t.replace(/\/{2,9}/g, "/").split("/");
            return (
              ("/" != t.slice(0, 1) && 0 !== t.length) || n.splice(0, 1),
              "/" == t.slice(-1) && n.splice(n.length - 1, 1),
              n
            );
          })(0, o.path)),
          (o.queryKey = (function (e, t) {
            const n = {};
            return (
              t.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (e, t, r) {
                t && (n[t] = r);
              }),
              n
            );
          })(0, o.query)),
          o
        );
      }
      class pr extends jn {
        constructor(e, t = {}) {
          super(),
            (this.binaryType = "arraybuffer"),
            (this.writeBuffer = []),
            e && "object" == typeof e && ((t = e), (e = null)),
            e
              ? ((e = ur(e)),
                (t.hostname = e.host),
                (t.secure = "https" === e.protocol || "wss" === e.protocol),
                (t.port = e.port),
                e.query && (t.query = e.query))
              : t.host && (t.hostname = ur(t.host).host),
            $n(this, t),
            (this.secure =
              null != t.secure
                ? t.secure
                : "undefined" != typeof location &&
                  "https:" === location.protocol),
            t.hostname && !t.port && (t.port = this.secure ? "443" : "80"),
            (this.hostname =
              t.hostname ||
              ("undefined" != typeof location
                ? location.hostname
                : "localhost")),
            (this.port =
              t.port ||
              ("undefined" != typeof location && location.port
                ? location.port
                : this.secure
                ? "443"
                : "80")),
            (this.transports = t.transports || [
              "polling",
              "websocket",
              "webtransport",
            ]),
            (this.writeBuffer = []),
            (this.prevBufferLen = 0),
            (this.opts = Object.assign(
              {
                path: "/engine.io",
                agent: !1,
                withCredentials: !1,
                upgrade: !0,
                timestampParam: "t",
                rememberUpgrade: !1,
                addTrailingSlash: !0,
                rejectUnauthorized: !0,
                perMessageDeflate: { threshold: 1024 },
                transportOptions: {},
                closeOnBeforeunload: !1,
              },
              t
            )),
            (this.opts.path =
              this.opts.path.replace(/\/$/, "") +
              (this.opts.addTrailingSlash ? "/" : "")),
            "string" == typeof this.opts.query &&
              (this.opts.query = (function (e) {
                let t = {},
                  n = e.split("&");
                for (let e = 0, r = n.length; e < r; e++) {
                  let r = n[e].split("=");
                  t[decodeURIComponent(r[0])] = decodeURIComponent(r[1]);
                }
                return t;
              })(this.opts.query)),
            (this.id = null),
            (this.upgrades = null),
            (this.pingInterval = null),
            (this.pingTimeout = null),
            (this.pingTimeoutTimer = null),
            "function" == typeof addEventListener &&
              (this.opts.closeOnBeforeunload &&
                ((this.beforeunloadEventListener = () => {
                  this.transport &&
                    (this.transport.removeAllListeners(),
                    this.transport.close());
                }),
                addEventListener(
                  "beforeunload",
                  this.beforeunloadEventListener,
                  !1
                )),
              "localhost" !== this.hostname &&
                ((this.offlineEventListener = () => {
                  this.onClose("transport close", {
                    description: "network connection lost",
                  });
                }),
                addEventListener("offline", this.offlineEventListener, !1))),
            this.open();
        }
        createTransport(e) {
          const t = Object.assign({}, this.opts.query);
          (t.EIO = 4), (t.transport = e), this.id && (t.sid = this.id);
          const n = Object.assign(
            {},
            this.opts,
            {
              query: t,
              socket: this,
              hostname: this.hostname,
              secure: this.secure,
              port: this.port,
            },
            this.opts.transportOptions[e]
          );
          return new lr[e](n);
        }
        open() {
          let e;
          if (
            this.opts.rememberUpgrade &&
            pr.priorWebsocketSuccess &&
            -1 !== this.transports.indexOf("websocket")
          )
            e = "websocket";
          else {
            if (0 === this.transports.length)
              return void this.setTimeoutFn(() => {
                this.emitReserved("error", "No transports available");
              }, 0);
            e = this.transports[0];
          }
          this.readyState = "opening";
          try {
            e = this.createTransport(e);
          } catch (e) {
            return this.transports.shift(), void this.open();
          }
          e.open(), this.setTransport(e);
        }
        setTransport(e) {
          this.transport && this.transport.removeAllListeners(),
            (this.transport = e),
            e
              .on("drain", this.onDrain.bind(this))
              .on("packet", this.onPacket.bind(this))
              .on("error", this.onError.bind(this))
              .on("close", (e) => this.onClose("transport close", e));
        }
        probe(e) {
          let t = this.createTransport(e),
            n = !1;
          pr.priorWebsocketSuccess = !1;
          const r = () => {
            n ||
              (t.send([{ type: "ping", data: "probe" }]),
              t.once("packet", (e) => {
                if (!n)
                  if ("pong" === e.type && "probe" === e.data) {
                    if (
                      ((this.upgrading = !0),
                      this.emitReserved("upgrading", t),
                      !t)
                    )
                      return;
                    (pr.priorWebsocketSuccess = "websocket" === t.name),
                      this.transport.pause(() => {
                        n ||
                          ("closed" !== this.readyState &&
                            (c(),
                            this.setTransport(t),
                            t.send([{ type: "upgrade" }]),
                            this.emitReserved("upgrade", t),
                            (t = null),
                            (this.upgrading = !1),
                            this.flush()));
                      });
                  } else {
                    const e = new Error("probe error");
                    (e.transport = t.name),
                      this.emitReserved("upgradeError", e);
                  }
              }));
          };
          function i() {
            n || ((n = !0), c(), t.close(), (t = null));
          }
          const o = (e) => {
            const n = new Error("probe error: " + e);
            (n.transport = t.name), i(), this.emitReserved("upgradeError", n);
          };
          function a() {
            o("transport closed");
          }
          function s() {
            o("socket closed");
          }
          function l(e) {
            t && e.name !== t.name && i();
          }
          const c = () => {
            t.removeListener("open", r),
              t.removeListener("error", o),
              t.removeListener("close", a),
              this.off("close", s),
              this.off("upgrading", l);
          };
          t.once("open", r),
            t.once("error", o),
            t.once("close", a),
            this.once("close", s),
            this.once("upgrading", l),
            -1 !== this.upgrades.indexOf("webtransport") && "webtransport" !== e
              ? this.setTimeoutFn(() => {
                  n || t.open();
                }, 200)
              : t.open();
        }
        onOpen() {
          if (
            ((this.readyState = "open"),
            (pr.priorWebsocketSuccess = "websocket" === this.transport.name),
            this.emitReserved("open"),
            this.flush(),
            "open" === this.readyState && this.opts.upgrade)
          ) {
            let e = 0;
            const t = this.upgrades.length;
            for (; e < t; e++) this.probe(this.upgrades[e]);
          }
        }
        onPacket(e) {
          if (
            "opening" === this.readyState ||
            "open" === this.readyState ||
            "closing" === this.readyState
          )
            switch (
              (this.emitReserved("packet", e),
              this.emitReserved("heartbeat"),
              this.resetPingTimeout(),
              e.type)
            ) {
              case "open":
                this.onHandshake(JSON.parse(e.data));
                break;
              case "ping":
                this.sendPacket("pong"),
                  this.emitReserved("ping"),
                  this.emitReserved("pong");
                break;
              case "error":
                const t = new Error("server error");
                (t.code = e.data), this.onError(t);
                break;
              case "message":
                this.emitReserved("data", e.data),
                  this.emitReserved("message", e.data);
            }
        }
        onHandshake(e) {
          this.emitReserved("handshake", e),
            (this.id = e.sid),
            (this.transport.query.sid = e.sid),
            (this.upgrades = this.filterUpgrades(e.upgrades)),
            (this.pingInterval = e.pingInterval),
            (this.pingTimeout = e.pingTimeout),
            (this.maxPayload = e.maxPayload),
            this.onOpen(),
            "closed" !== this.readyState && this.resetPingTimeout();
        }
        resetPingTimeout() {
          this.clearTimeoutFn(this.pingTimeoutTimer),
            (this.pingTimeoutTimer = this.setTimeoutFn(() => {
              this.onClose("ping timeout");
            }, this.pingInterval + this.pingTimeout)),
            this.opts.autoUnref && this.pingTimeoutTimer.unref();
        }
        onDrain() {
          this.writeBuffer.splice(0, this.prevBufferLen),
            (this.prevBufferLen = 0),
            0 === this.writeBuffer.length
              ? this.emitReserved("drain")
              : this.flush();
        }
        flush() {
          if (
            "closed" !== this.readyState &&
            this.transport.writable &&
            !this.upgrading &&
            this.writeBuffer.length
          ) {
            const e = this.getWritablePackets();
            this.transport.send(e),
              (this.prevBufferLen = e.length),
              this.emitReserved("flush");
          }
        }
        getWritablePackets() {
          if (
            !(
              this.maxPayload &&
              "polling" === this.transport.name &&
              this.writeBuffer.length > 1
            )
          )
            return this.writeBuffer;
          let e = 1;
          for (let n = 0; n < this.writeBuffer.length; n++) {
            const r = this.writeBuffer[n].data;
            if (
              (r &&
                (e +=
                  "string" == typeof (t = r)
                    ? (function (e) {
                        let t = 0,
                          n = 0;
                        for (let r = 0, i = e.length; r < i; r++)
                          (t = e.charCodeAt(r)),
                            t < 128
                              ? (n += 1)
                              : t < 2048
                              ? (n += 2)
                              : t < 55296 || t >= 57344
                              ? (n += 3)
                              : (r++, (n += 4));
                        return n;
                      })(t)
                    : Math.ceil(1.33 * (t.byteLength || t.size))),
              n > 0 && e > this.maxPayload)
            )
              return this.writeBuffer.slice(0, n);
            e += 2;
          }
          var t;
          return this.writeBuffer;
        }
        write(e, t, n) {
          return this.sendPacket("message", e, t, n), this;
        }
        send(e, t, n) {
          return this.sendPacket("message", e, t, n), this;
        }
        sendPacket(e, t, n, r) {
          if (
            ("function" == typeof t && ((r = t), (t = void 0)),
            "function" == typeof n && ((r = n), (n = null)),
            "closing" === this.readyState || "closed" === this.readyState)
          )
            return;
          (n = n || {}).compress = !1 !== n.compress;
          const i = { type: e, data: t, options: n };
          this.emitReserved("packetCreate", i),
            this.writeBuffer.push(i),
            r && this.once("flush", r),
            this.flush();
        }
        close() {
          const e = () => {
              this.onClose("forced close"), this.transport.close();
            },
            t = () => {
              this.off("upgrade", t), this.off("upgradeError", t), e();
            },
            n = () => {
              this.once("upgrade", t), this.once("upgradeError", t);
            };
          return (
            ("opening" !== this.readyState && "open" !== this.readyState) ||
              ((this.readyState = "closing"),
              this.writeBuffer.length
                ? this.once("drain", () => {
                    this.upgrading ? n() : e();
                  })
                : this.upgrading
                ? n()
                : e()),
            this
          );
        }
        onError(e) {
          (pr.priorWebsocketSuccess = !1),
            this.emitReserved("error", e),
            this.onClose("transport error", e);
        }
        onClose(e, t) {
          ("opening" !== this.readyState &&
            "open" !== this.readyState &&
            "closing" !== this.readyState) ||
            (this.clearTimeoutFn(this.pingTimeoutTimer),
            this.transport.removeAllListeners("close"),
            this.transport.close(),
            this.transport.removeAllListeners(),
            "function" == typeof removeEventListener &&
              (removeEventListener(
                "beforeunload",
                this.beforeunloadEventListener,
                !1
              ),
              removeEventListener("offline", this.offlineEventListener, !1)),
            (this.readyState = "closed"),
            (this.id = null),
            this.emitReserved("close", e, t),
            (this.writeBuffer = []),
            (this.prevBufferLen = 0));
        }
        filterUpgrades(e) {
          const t = [];
          let n = 0;
          const r = e.length;
          for (; n < r; n++) ~this.transports.indexOf(e[n]) && t.push(e[n]);
          return t;
        }
      }
      (pr.protocol = 4), pr.protocol;
      const hr = "function" == typeof ArrayBuffer,
        mr = (e) =>
          "function" == typeof ArrayBuffer.isView
            ? ArrayBuffer.isView(e)
            : e.buffer instanceof ArrayBuffer,
        gr = Object.prototype.toString,
        fr =
          "function" == typeof Blob ||
          ("undefined" != typeof Blob &&
            "[object BlobConstructor]" === gr.call(Blob)),
        br =
          "function" == typeof File ||
          ("undefined" != typeof File &&
            "[object FileConstructor]" === gr.call(File));
      function yr(e) {
        return (
          (hr && (e instanceof ArrayBuffer || mr(e))) ||
          (fr && e instanceof Blob) ||
          (br && e instanceof File)
        );
      }
      function vr(e, t) {
        if (!e || "object" != typeof e) return !1;
        if (Array.isArray(e)) {
          for (let t = 0, n = e.length; t < n; t++) if (vr(e[t])) return !0;
          return !1;
        }
        if (yr(e)) return !0;
        if (e.toJSON && "function" == typeof e.toJSON && 1 === arguments.length)
          return vr(e.toJSON(), !0);
        for (const t in e)
          if (Object.prototype.hasOwnProperty.call(e, t) && vr(e[t])) return !0;
        return !1;
      }
      function _r(e) {
        const t = [],
          n = e.data,
          r = e;
        return (
          (r.data = wr(n, t)),
          (r.attachments = t.length),
          { packet: r, buffers: t }
        );
      }
      function wr(e, t) {
        if (!e) return e;
        if (yr(e)) {
          const n = { _placeholder: !0, num: t.length };
          return t.push(e), n;
        }
        if (Array.isArray(e)) {
          const n = new Array(e.length);
          for (let r = 0; r < e.length; r++) n[r] = wr(e[r], t);
          return n;
        }
        if ("object" == typeof e && !(e instanceof Date)) {
          const n = {};
          for (const r in e)
            Object.prototype.hasOwnProperty.call(e, r) && (n[r] = wr(e[r], t));
          return n;
        }
        return e;
      }
      function xr(e, t) {
        return (e.data = Cr(e.data, t)), delete e.attachments, e;
      }
      function Cr(e, t) {
        if (!e) return e;
        if (e && !0 === e._placeholder) {
          if ("number" == typeof e.num && e.num >= 0 && e.num < t.length)
            return t[e.num];
          throw new Error("illegal attachments");
        }
        if (Array.isArray(e))
          for (let n = 0; n < e.length; n++) e[n] = Cr(e[n], t);
        else if ("object" == typeof e)
          for (const n in e)
            Object.prototype.hasOwnProperty.call(e, n) && (e[n] = Cr(e[n], t));
        return e;
      }
      const kr = [
          "connect",
          "connect_error",
          "disconnect",
          "disconnecting",
          "newListener",
          "removeListener",
        ],
        Er = 5;
      var Sr;
      !(function (e) {
        (e[(e.CONNECT = 0)] = "CONNECT"),
          (e[(e.DISCONNECT = 1)] = "DISCONNECT"),
          (e[(e.EVENT = 2)] = "EVENT"),
          (e[(e.ACK = 3)] = "ACK"),
          (e[(e.CONNECT_ERROR = 4)] = "CONNECT_ERROR"),
          (e[(e.BINARY_EVENT = 5)] = "BINARY_EVENT"),
          (e[(e.BINARY_ACK = 6)] = "BINARY_ACK");
      })(Sr || (Sr = {}));
      class Lr {
        constructor(e) {
          this.replacer = e;
        }
        encode(e) {
          return (e.type !== Sr.EVENT && e.type !== Sr.ACK) || !vr(e)
            ? [this.encodeAsString(e)]
            : this.encodeAsBinary({
                type: e.type === Sr.EVENT ? Sr.BINARY_EVENT : Sr.BINARY_ACK,
                nsp: e.nsp,
                data: e.data,
                id: e.id,
              });
        }
        encodeAsString(e) {
          let t = "" + e.type;
          return (
            (e.type !== Sr.BINARY_EVENT && e.type !== Sr.BINARY_ACK) ||
              (t += e.attachments + "-"),
            e.nsp && "/" !== e.nsp && (t += e.nsp + ","),
            null != e.id && (t += e.id),
            null != e.data && (t += JSON.stringify(e.data, this.replacer)),
            t
          );
        }
        encodeAsBinary(e) {
          const t = _r(e),
            n = this.encodeAsString(t.packet),
            r = t.buffers;
          return r.unshift(n), r;
        }
      }
      function Tr(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      class Nr extends jn {
        constructor(e) {
          super(), (this.reviver = e);
        }
        add(e) {
          let t;
          if ("string" == typeof e) {
            if (this.reconstructor)
              throw new Error(
                "got plaintext data when reconstructing a packet"
              );
            t = this.decodeString(e);
            const n = t.type === Sr.BINARY_EVENT;
            n || t.type === Sr.BINARY_ACK
              ? ((t.type = n ? Sr.EVENT : Sr.ACK),
                (this.reconstructor = new Mr(t)),
                0 === t.attachments && super.emitReserved("decoded", t))
              : super.emitReserved("decoded", t);
          } else {
            if (!yr(e) && !e.base64) throw new Error("Unknown type: " + e);
            if (!this.reconstructor)
              throw new Error(
                "got binary data when not reconstructing a packet"
              );
            (t = this.reconstructor.takeBinaryData(e)),
              t &&
                ((this.reconstructor = null), super.emitReserved("decoded", t));
          }
        }
        decodeString(e) {
          let t = 0;
          const n = { type: Number(e.charAt(0)) };
          if (void 0 === Sr[n.type])
            throw new Error("unknown packet type " + n.type);
          if (n.type === Sr.BINARY_EVENT || n.type === Sr.BINARY_ACK) {
            const r = t + 1;
            for (; "-" !== e.charAt(++t) && t != e.length; );
            const i = e.substring(r, t);
            if (i != Number(i) || "-" !== e.charAt(t))
              throw new Error("Illegal attachments");
            n.attachments = Number(i);
          }
          if ("/" === e.charAt(t + 1)) {
            const r = t + 1;
            for (; ++t && "," !== e.charAt(t) && t !== e.length; );
            n.nsp = e.substring(r, t);
          } else n.nsp = "/";
          const r = e.charAt(t + 1);
          if ("" !== r && Number(r) == r) {
            const r = t + 1;
            for (; ++t; ) {
              const n = e.charAt(t);
              if (null == n || Number(n) != n) {
                --t;
                break;
              }
              if (t === e.length) break;
            }
            n.id = Number(e.substring(r, t + 1));
          }
          if (e.charAt(++t)) {
            const r = this.tryParse(e.substr(t));
            if (!Nr.isPayloadValid(n.type, r))
              throw new Error("invalid payload");
            n.data = r;
          }
          return n;
        }
        tryParse(e) {
          try {
            return JSON.parse(e, this.reviver);
          } catch (e) {
            return !1;
          }
        }
        static isPayloadValid(e, t) {
          switch (e) {
            case Sr.CONNECT:
              return Tr(t);
            case Sr.DISCONNECT:
              return void 0 === t;
            case Sr.CONNECT_ERROR:
              return "string" == typeof t || Tr(t);
            case Sr.EVENT:
            case Sr.BINARY_EVENT:
              return (
                Array.isArray(t) &&
                ("number" == typeof t[0] ||
                  ("string" == typeof t[0] && -1 === kr.indexOf(t[0])))
              );
            case Sr.ACK:
            case Sr.BINARY_ACK:
              return Array.isArray(t);
          }
        }
        destroy() {
          this.reconstructor &&
            (this.reconstructor.finishedReconstruction(),
            (this.reconstructor = null));
        }
      }
      class Mr {
        constructor(e) {
          (this.packet = e), (this.buffers = []), (this.reconPack = e);
        }
        takeBinaryData(e) {
          if (
            (this.buffers.push(e),
            this.buffers.length === this.reconPack.attachments)
          ) {
            const e = xr(this.reconPack, this.buffers);
            return this.finishedReconstruction(), e;
          }
          return null;
        }
        finishedReconstruction() {
          (this.reconPack = null), (this.buffers = []);
        }
      }
      function Dr(e, t, n) {
        return (
          e.on(t, n),
          function () {
            e.off(t, n);
          }
        );
      }
      const Ar = Object.freeze({
        connect: 1,
        connect_error: 1,
        disconnect: 1,
        disconnecting: 1,
        newListener: 1,
        removeListener: 1,
      });
      class Or extends jn {
        constructor(e, t, n) {
          super(),
            (this.connected = !1),
            (this.recovered = !1),
            (this.receiveBuffer = []),
            (this.sendBuffer = []),
            (this._queue = []),
            (this._queueSeq = 0),
            (this.ids = 0),
            (this.acks = {}),
            (this.flags = {}),
            (this.io = e),
            (this.nsp = t),
            n && n.auth && (this.auth = n.auth),
            (this._opts = Object.assign({}, n)),
            this.io._autoConnect && this.open();
        }
        get disconnected() {
          return !this.connected;
        }
        subEvents() {
          if (this.subs) return;
          const e = this.io;
          this.subs = [
            Dr(e, "open", this.onopen.bind(this)),
            Dr(e, "packet", this.onpacket.bind(this)),
            Dr(e, "error", this.onerror.bind(this)),
            Dr(e, "close", this.onclose.bind(this)),
          ];
        }
        get active() {
          return !!this.subs;
        }
        connect() {
          return (
            this.connected ||
              (this.subEvents(),
              this.io._reconnecting || this.io.open(),
              "open" === this.io._readyState && this.onopen()),
            this
          );
        }
        open() {
          return this.connect();
        }
        send(...e) {
          return e.unshift("message"), this.emit.apply(this, e), this;
        }
        emit(e, ...t) {
          if (Ar.hasOwnProperty(e))
            throw new Error('"' + e.toString() + '" is a reserved event name');
          if (
            (t.unshift(e),
            this._opts.retries && !this.flags.fromQueue && !this.flags.volatile)
          )
            return this._addToQueue(t), this;
          const n = { type: Sr.EVENT, data: t, options: {} };
          if (
            ((n.options.compress = !1 !== this.flags.compress),
            "function" == typeof t[t.length - 1])
          ) {
            const e = this.ids++,
              r = t.pop();
            this._registerAckCallback(e, r), (n.id = e);
          }
          const r =
            this.io.engine &&
            this.io.engine.transport &&
            this.io.engine.transport.writable;
          return (
            (this.flags.volatile && (!r || !this.connected)) ||
              (this.connected
                ? (this.notifyOutgoingListeners(n), this.packet(n))
                : this.sendBuffer.push(n)),
            (this.flags = {}),
            this
          );
        }
        _registerAckCallback(e, t) {
          var n;
          const r =
            null !== (n = this.flags.timeout) && void 0 !== n
              ? n
              : this._opts.ackTimeout;
          if (void 0 === r) return void (this.acks[e] = t);
          const i = this.io.setTimeoutFn(() => {
              delete this.acks[e];
              for (let t = 0; t < this.sendBuffer.length; t++)
                this.sendBuffer[t].id === e && this.sendBuffer.splice(t, 1);
              t.call(this, new Error("operation has timed out"));
            }, r),
            o = (...e) => {
              this.io.clearTimeoutFn(i), t.apply(this, e);
            };
          (o.withError = !0), (this.acks[e] = o);
        }
        emitWithAck(e, ...t) {
          return new Promise((n, r) => {
            const i = (e, t) => (e ? r(e) : n(t));
            (i.withError = !0), t.push(i), this.emit(e, ...t);
          });
        }
        _addToQueue(e) {
          let t;
          "function" == typeof e[e.length - 1] && (t = e.pop());
          const n = {
            id: this._queueSeq++,
            tryCount: 0,
            pending: !1,
            args: e,
            flags: Object.assign({ fromQueue: !0 }, this.flags),
          };
          e.push((e, ...r) => {
            if (n === this._queue[0])
              return (
                null !== e
                  ? n.tryCount > this._opts.retries &&
                    (this._queue.shift(), t && t(e))
                  : (this._queue.shift(), t && t(null, ...r)),
                (n.pending = !1),
                this._drainQueue()
              );
          }),
            this._queue.push(n),
            this._drainQueue();
        }
        _drainQueue(e = !1) {
          if (!this.connected || 0 === this._queue.length) return;
          const t = this._queue[0];
          (t.pending && !e) ||
            ((t.pending = !0),
            t.tryCount++,
            (this.flags = t.flags),
            this.emit.apply(this, t.args));
        }
        packet(e) {
          (e.nsp = this.nsp), this.io._packet(e);
        }
        onopen() {
          "function" == typeof this.auth
            ? this.auth((e) => {
                this._sendConnectPacket(e);
              })
            : this._sendConnectPacket(this.auth);
        }
        _sendConnectPacket(e) {
          this.packet({
            type: Sr.CONNECT,
            data: this._pid
              ? Object.assign({ pid: this._pid, offset: this._lastOffset }, e)
              : e,
          });
        }
        onerror(e) {
          this.connected || this.emitReserved("connect_error", e);
        }
        onclose(e, t) {
          (this.connected = !1),
            delete this.id,
            this.emitReserved("disconnect", e, t),
            this._clearAcks();
        }
        _clearAcks() {
          Object.keys(this.acks).forEach((e) => {
            if (!this.sendBuffer.some((t) => String(t.id) === e)) {
              const t = this.acks[e];
              delete this.acks[e],
                t.withError &&
                  t.call(this, new Error("socket has been disconnected"));
            }
          });
        }
        onpacket(e) {
          if (e.nsp === this.nsp)
            switch (e.type) {
              case Sr.CONNECT:
                e.data && e.data.sid
                  ? this.onconnect(e.data.sid, e.data.pid)
                  : this.emitReserved(
                      "connect_error",
                      new Error(
                        "It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"
                      )
                    );
                break;
              case Sr.EVENT:
              case Sr.BINARY_EVENT:
                this.onevent(e);
                break;
              case Sr.ACK:
              case Sr.BINARY_ACK:
                this.onack(e);
                break;
              case Sr.DISCONNECT:
                this.ondisconnect();
                break;
              case Sr.CONNECT_ERROR:
                this.destroy();
                const t = new Error(e.data.message);
                (t.data = e.data.data), this.emitReserved("connect_error", t);
            }
        }
        onevent(e) {
          const t = e.data || [];
          null != e.id && t.push(this.ack(e.id)),
            this.connected
              ? this.emitEvent(t)
              : this.receiveBuffer.push(Object.freeze(t));
        }
        emitEvent(e) {
          if (this._anyListeners && this._anyListeners.length) {
            const t = this._anyListeners.slice();
            for (const n of t) n.apply(this, e);
          }
          super.emit.apply(this, e),
            this._pid &&
              e.length &&
              "string" == typeof e[e.length - 1] &&
              (this._lastOffset = e[e.length - 1]);
        }
        ack(e) {
          const t = this;
          let n = !1;
          return function (...r) {
            n || ((n = !0), t.packet({ type: Sr.ACK, id: e, data: r }));
          };
        }
        onack(e) {
          const t = this.acks[e.id];
          "function" == typeof t &&
            (delete this.acks[e.id],
            t.withError && e.data.unshift(null),
            t.apply(this, e.data));
        }
        onconnect(e, t) {
          (this.id = e),
            (this.recovered = t && this._pid === t),
            (this._pid = t),
            (this.connected = !0),
            this.emitBuffered(),
            this.emitReserved("connect"),
            this._drainQueue(!0);
        }
        emitBuffered() {
          this.receiveBuffer.forEach((e) => this.emitEvent(e)),
            (this.receiveBuffer = []),
            this.sendBuffer.forEach((e) => {
              this.notifyOutgoingListeners(e), this.packet(e);
            }),
            (this.sendBuffer = []);
        }
        ondisconnect() {
          this.destroy(), this.onclose("io server disconnect");
        }
        destroy() {
          this.subs && (this.subs.forEach((e) => e()), (this.subs = void 0)),
            this.io._destroy(this);
        }
        disconnect() {
          return (
            this.connected && this.packet({ type: Sr.DISCONNECT }),
            this.destroy(),
            this.connected && this.onclose("io client disconnect"),
            this
          );
        }
        close() {
          return this.disconnect();
        }
        compress(e) {
          return (this.flags.compress = e), this;
        }
        get volatile() {
          return (this.flags.volatile = !0), this;
        }
        timeout(e) {
          return (this.flags.timeout = e), this;
        }
        onAny(e) {
          return (
            (this._anyListeners = this._anyListeners || []),
            this._anyListeners.push(e),
            this
          );
        }
        prependAny(e) {
          return (
            (this._anyListeners = this._anyListeners || []),
            this._anyListeners.unshift(e),
            this
          );
        }
        offAny(e) {
          if (!this._anyListeners) return this;
          if (e) {
            const t = this._anyListeners;
            for (let n = 0; n < t.length; n++)
              if (e === t[n]) return t.splice(n, 1), this;
          } else this._anyListeners = [];
          return this;
        }
        listenersAny() {
          return this._anyListeners || [];
        }
        onAnyOutgoing(e) {
          return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
            this._anyOutgoingListeners.push(e),
            this
          );
        }
        prependAnyOutgoing(e) {
          return (
            (this._anyOutgoingListeners = this._anyOutgoingListeners || []),
            this._anyOutgoingListeners.unshift(e),
            this
          );
        }
        offAnyOutgoing(e) {
          if (!this._anyOutgoingListeners) return this;
          if (e) {
            const t = this._anyOutgoingListeners;
            for (let n = 0; n < t.length; n++)
              if (e === t[n]) return t.splice(n, 1), this;
          } else this._anyOutgoingListeners = [];
          return this;
        }
        listenersAnyOutgoing() {
          return this._anyOutgoingListeners || [];
        }
        notifyOutgoingListeners(e) {
          if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
            const t = this._anyOutgoingListeners.slice();
            for (const n of t) n.apply(this, e.data);
          }
        }
      }
      function zr(e) {
        (e = e || {}),
          (this.ms = e.min || 100),
          (this.max = e.max || 1e4),
          (this.factor = e.factor || 2),
          (this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0),
          (this.attempts = 0);
      }
      (zr.prototype.duration = function () {
        var e = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
          var t = Math.random(),
            n = Math.floor(t * this.jitter * e);
          e = 1 & Math.floor(10 * t) ? e + n : e - n;
        }
        return 0 | Math.min(e, this.max);
      }),
        (zr.prototype.reset = function () {
          this.attempts = 0;
        }),
        (zr.prototype.setMin = function (e) {
          this.ms = e;
        }),
        (zr.prototype.setMax = function (e) {
          this.max = e;
        }),
        (zr.prototype.setJitter = function (e) {
          this.jitter = e;
        });
      class Ir extends jn {
        constructor(t, n) {
          var r;
          super(),
            (this.nsps = {}),
            (this.subs = []),
            t && "object" == typeof t && ((n = t), (t = void 0)),
            ((n = n || {}).path = n.path || "/socket.io"),
            (this.opts = n),
            $n(this, n),
            this.reconnection(!1 !== n.reconnection),
            this.reconnectionAttempts(n.reconnectionAttempts || 1 / 0),
            this.reconnectionDelay(n.reconnectionDelay || 1e3),
            this.reconnectionDelayMax(n.reconnectionDelayMax || 5e3),
            this.randomizationFactor(
              null !== (r = n.randomizationFactor) && void 0 !== r ? r : 0.5
            ),
            (this.backoff = new zr({
              min: this.reconnectionDelay(),
              max: this.reconnectionDelayMax(),
              jitter: this.randomizationFactor(),
            })),
            this.timeout(null == n.timeout ? 2e4 : n.timeout),
            (this._readyState = "closed"),
            (this.uri = t);
          const i = n.parser || e;
          (this.encoder = new i.Encoder()),
            (this.decoder = new i.Decoder()),
            (this._autoConnect = !1 !== n.autoConnect),
            this._autoConnect && this.open();
        }
        reconnection(e) {
          return arguments.length
            ? ((this._reconnection = !!e), this)
            : this._reconnection;
        }
        reconnectionAttempts(e) {
          return void 0 === e
            ? this._reconnectionAttempts
            : ((this._reconnectionAttempts = e), this);
        }
        reconnectionDelay(e) {
          var t;
          return void 0 === e
            ? this._reconnectionDelay
            : ((this._reconnectionDelay = e),
              null === (t = this.backoff) || void 0 === t || t.setMin(e),
              this);
        }
        randomizationFactor(e) {
          var t;
          return void 0 === e
            ? this._randomizationFactor
            : ((this._randomizationFactor = e),
              null === (t = this.backoff) || void 0 === t || t.setJitter(e),
              this);
        }
        reconnectionDelayMax(e) {
          var t;
          return void 0 === e
            ? this._reconnectionDelayMax
            : ((this._reconnectionDelayMax = e),
              null === (t = this.backoff) || void 0 === t || t.setMax(e),
              this);
        }
        timeout(e) {
          return arguments.length ? ((this._timeout = e), this) : this._timeout;
        }
        maybeReconnectOnOpen() {
          !this._reconnecting &&
            this._reconnection &&
            0 === this.backoff.attempts &&
            this.reconnect();
        }
        open(e) {
          if (~this._readyState.indexOf("open")) return this;
          this.engine = new pr(this.uri, this.opts);
          const t = this.engine,
            n = this;
          (this._readyState = "opening"), (this.skipReconnect = !1);
          const r = Dr(t, "open", function () {
              n.onopen(), e && e();
            }),
            i = (t) => {
              this.cleanup(),
                (this._readyState = "closed"),
                this.emitReserved("error", t),
                e ? e(t) : this.maybeReconnectOnOpen();
            },
            o = Dr(t, "error", i);
          if (!1 !== this._timeout) {
            const e = this._timeout,
              n = this.setTimeoutFn(() => {
                r(), i(new Error("timeout")), t.close();
              }, e);
            this.opts.autoUnref && n.unref(),
              this.subs.push(() => {
                this.clearTimeoutFn(n);
              });
          }
          return this.subs.push(r), this.subs.push(o), this;
        }
        connect(e) {
          return this.open(e);
        }
        onopen() {
          this.cleanup(),
            (this._readyState = "open"),
            this.emitReserved("open");
          const e = this.engine;
          this.subs.push(
            Dr(e, "ping", this.onping.bind(this)),
            Dr(e, "data", this.ondata.bind(this)),
            Dr(e, "error", this.onerror.bind(this)),
            Dr(e, "close", this.onclose.bind(this)),
            Dr(this.decoder, "decoded", this.ondecoded.bind(this))
          );
        }
        onping() {
          this.emitReserved("ping");
        }
        ondata(e) {
          try {
            this.decoder.add(e);
          } catch (e) {
            this.onclose("parse error", e);
          }
        }
        ondecoded(e) {
          or(() => {
            this.emitReserved("packet", e);
          }, this.setTimeoutFn);
        }
        onerror(e) {
          this.emitReserved("error", e);
        }
        socket(e, t) {
          let n = this.nsps[e];
          return (
            n
              ? this._autoConnect && !n.active && n.connect()
              : ((n = new Or(this, e, t)), (this.nsps[e] = n)),
            n
          );
        }
        _destroy(e) {
          const t = Object.keys(this.nsps);
          for (const e of t) if (this.nsps[e].active) return;
          this._close();
        }
        _packet(e) {
          const t = this.encoder.encode(e);
          for (let n = 0; n < t.length; n++) this.engine.write(t[n], e.options);
        }
        cleanup() {
          this.subs.forEach((e) => e()),
            (this.subs.length = 0),
            this.decoder.destroy();
        }
        _close() {
          (this.skipReconnect = !0),
            (this._reconnecting = !1),
            this.onclose("forced close"),
            this.engine && this.engine.close();
        }
        disconnect() {
          return this._close();
        }
        onclose(e, t) {
          this.cleanup(),
            this.backoff.reset(),
            (this._readyState = "closed"),
            this.emitReserved("close", e, t),
            this._reconnection && !this.skipReconnect && this.reconnect();
        }
        reconnect() {
          if (this._reconnecting || this.skipReconnect) return this;
          const e = this;
          if (this.backoff.attempts >= this._reconnectionAttempts)
            this.backoff.reset(),
              this.emitReserved("reconnect_failed"),
              (this._reconnecting = !1);
          else {
            const t = this.backoff.duration();
            this._reconnecting = !0;
            const n = this.setTimeoutFn(() => {
              e.skipReconnect ||
                (this.emitReserved("reconnect_attempt", e.backoff.attempts),
                e.skipReconnect ||
                  e.open((t) => {
                    t
                      ? ((e._reconnecting = !1),
                        e.reconnect(),
                        this.emitReserved("reconnect_error", t))
                      : e.onreconnect();
                  }));
            }, t);
            this.opts.autoUnref && n.unref(),
              this.subs.push(() => {
                this.clearTimeoutFn(n);
              });
          }
        }
        onreconnect() {
          const e = this.backoff.attempts;
          (this._reconnecting = !1),
            this.backoff.reset(),
            this.emitReserved("reconnect", e);
        }
      }
      const jr = {};
      function Br(e, t) {
        "object" == typeof e && ((t = e), (e = void 0));
        const n = (function (e, t = "", n) {
            let r = e;
            (n = n || ("undefined" != typeof location && location)),
              null == e && (e = n.protocol + "//" + n.host),
              "string" == typeof e &&
                ("/" === e.charAt(0) &&
                  (e = "/" === e.charAt(1) ? n.protocol + e : n.host + e),
                /^(https?|wss?):\/\//.test(e) ||
                  (e = void 0 !== n ? n.protocol + "//" + e : "https://" + e),
                (r = ur(e))),
              r.port ||
                (/^(http|ws)$/.test(r.protocol)
                  ? (r.port = "80")
                  : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")),
              (r.path = r.path || "/");
            const i = -1 !== r.host.indexOf(":") ? "[" + r.host + "]" : r.host;
            return (
              (r.id = r.protocol + "://" + i + ":" + r.port + t),
              (r.href =
                r.protocol +
                "://" +
                i +
                (n && n.port === r.port ? "" : ":" + r.port)),
              r
            );
          })(e, (t = t || {}).path || "/socket.io"),
          r = n.source,
          i = n.id,
          o = n.path,
          a = jr[i] && o in jr[i].nsps;
        let s;
        return (
          t.forceNew || t["force new connection"] || !1 === t.multiplex || a
            ? (s = new Ir(r, t))
            : (jr[i] || (jr[i] = new Ir(r, t)), (s = jr[i])),
          n.query && !t.query && (t.query = n.queryKey),
          s.socket(n.path, t)
        );
      }
      Object.assign(Br, { Manager: Ir, Socket: Or, io: Br, connect: Br });
      const Pr = new Map();
      class Rr {
        connected = !1;
        constructor(e, t) {
          (this.socket = Br(e, { query: t, forceNew: !0, ackTimeout: 1e3 })),
            this.socket.on("connect", () => {
              (this.connected = !0),
                console.log(`Successfully connected to ${e}`);
            }),
            this.socket.on("disconnect", (t, n) => {
              (this.connected = !1),
                console.log(`Disconnected from ${e}`),
                console.log(t, n);
            }),
            this.socket.on("connect_error", (t) => {
              (this.connected = !1),
                console.log(`Error connecting to ${e}: ${t}`);
            });
        }
        emit(e, t, n) {
          this.socket.emit(e, t, n);
        }
        on(e, t) {
          this.socket.on(e, t);
        }
        off(e) {
          this.socket.off(e);
        }
      }
      const Hr = (e, t, n) => (Pr.has(e) || Pr.set(e, new Rr(t, n)), Pr.get(e));
      class $r {
        pool = new Map();
        constructor(e, t) {
          (this.url = e), (this.apiKey = t);
        }
        addConnection(e, t) {
          const n = Hr(e, `${this.url}/room`, {
            uuid: e,
            client: t,
            apiKey: this.apiKey,
          });
          this.pool.set(e, n);
        }
        getConnection(e) {
          const t = this.pool.get(e);
          if (!t) throw new Error(`No connection for room uid: ${e}`);
          return t;
        }
      }
      const Wr = U({ pool: {} });
      function Fr({ children: e, baseUrl: t, apiKey: n }) {
        const r = de(new $r(`${t}`, n));
        return v(Wr.Provider, { value: { pool: r.current } }, e);
      }
      const Ur = U({ unreadCount: 0, updateUnreadCount: () => {} });
      function Vr({ children: e }) {
        const [t, n] = ae(0);
        return v(
          Ur.Provider,
          {
            value: {
              unreadCount: t,
              updateUnreadCount: function (e) {
                !(function (e, t) {
                  let n = 0;
                  for (const t of e) n += t.unreadCount;
                  t(n);
                })(e, n);
              },
            },
          },
          e
        );
      }
      const qr = {
          active: !0,
          hasNewMessages: !1,
          uid: "",
          viewed: !1,
          unreadCount: 0,
          isDummy: !0,
        },
        Gr = U({
          rooms: null,
          clearPredefinedAnswers: () => {},
          reloadRooms: () => {},
          roomsLoadingError: null,
          addMessage: () => {},
          addImageMessage: async () => {},
          selectRoom: () => {},
          selectedRoom: qr,
          createRoom: async (e) => {},
          resetRoom: () => {},
        });
      var Kr = !1;
      function Yr({
        children: e,
        baseUrl: t,
        apiKey: n,
        widgetOpen: r,
        multichat: i,
      }) {
        const { participant: o } = me(oi),
          { sendEvent: a } = me(ci),
          { pool: s } = me(Wr),
          { interfaceLanguage: l, changeLanguage: c } = me(ui),
          { updateUnreadCount: d } = me(Ur),
          [u, p] = ae(null),
          [h, m] = ae(null),
          [g, f] = ae(qr),
          [b, y] = ae(!0),
          _ = de([]);
        function w(e, t) {
          s.addConnection(e.uid, t),
            (e.conn = s.getConnection(e.uid)),
            e.conn.on("connect", () => fn(p, e.uid)),
            e.conn.on("disconnect", () => fn(p, e.uid)),
            e.conn.on("typing", () => mn(p, e, !0)),
            e.conn.on("typingEnded", () => mn(p, e, !1)),
            e.conn.on("message", (t) => C(t, e, Jr.Message)),
            e.conn.on("closed", () =>
              (function (e, t) {
                e((e) => {
                  if (!e) return null;
                  const n = hn(e, t);
                  return n
                    ? ((n.active = !1),
                      (n.conn = void 0),
                      (n.selected = !1),
                      pn(e, n))
                    : e;
                });
              })(p, e.uid)
            ),
            e.conn.on("newChat", (t) =>
              (function (e, t, n) {
                e((e) => {
                  if (!e) return null;
                  const r = hn(e, t);
                  if (!r) return e;
                  const { agent: i } = n;
                  return i ? ((r.agent = i), pn(e, r)) : e;
                });
              })(p, e.uid, t)
            ),
            e.conn.on("streamMessageEnd", (t) => C(t, e, Jr.EndStream)),
            e.conn.on("streamMessage", (t) => C(t, e, Jr.Stream));
        }
        function x() {
          o &&
            (async (e) => {
              const t = await fetch(e);
              if (t.ok) return (await t.json()).map((e) => Kt(e));
              throw new Error(`Chat room loading error: ${t.statusText}`);
            })(`${t}/api/public/chat/list/${o.uid}`)
              .then((e) => {
                e.forEach((e) => {
                  w(e, o.uid);
                }),
                  p(e);
              })
              .catch((e) => m(e));
        }
        function C(e, t, n) {
          const { uid: r, message: i } = e;
          (n === Jr.Message &&
            i.author === t.last_message?.author &&
            i.message === t.last_message?.message &&
            "image" !== e.message.type) ||
            ((r && i && "client" !== i.author) ||
            n === Jr.EndStream ||
            "image" === e.message.type
              ? (n !== Jr.EndStream && "bot" === i.author && mn(p, t, !1),
                document.hidden &&
                  (dn ||
                    (dn = setInterval(() => {
                      document.title =
                        "New Message" === document.title ? cn : "New Message";
                    }, 7500))),
                i && i.locale && c(i.locale),
                E(
                  r,
                  {
                    ...i,
                    confirmed: Gt.Confirmed,
                    hasAvatar: !!i?.agent?.avatar,
                  },
                  n,
                  !1
                ))
              : mn(p, t, !1));
        }
        var k;
        function E(e, t, n = Jr.Message, i = !0) {
          p((a) => {
            if (!a) return null;
            n === Jr.EndStream && ((k = null), (Kr = !1));
            const s = hn(a, e);
            return s && t.message && s.conn && s.conn.connected
              ? (n === Jr.Stream &&
                  1 !== o?.automation_version &&
                  k &&
                  ((k.message += t.message),
                  (!s.selected || (s.selected && !r)) && (s.viewed = !1)),
                n === Jr.Stream && (Kr = !0),
                n === Jr.Message && (Kr = !1),
                n === Jr.Message &&
                "image" === t.type &&
                t.author === s.last_message?.author &&
                t.message === s.last_message?.message &&
                !s.last_message.image?.path &&
                t.image?.path
                  ? ((s.chat_messages[s.chat_messages.length - 1] = t),
                    (s.last_message = t),
                    pn(a, s))
                  : ((n === Jr.Message ||
                      (n === Jr.Stream && 1 !== o?.automation_version && !k)) &&
                      ((s.chat_messages = [...(s.chat_messages || []), t]),
                      (s.last_message = t),
                      n === Jr.Stream && (k = s.last_message),
                      (!s.selected || (s.selected && !r)) &&
                        ((s.unreadCount = s.unreadCount + 1), (s.viewed = !1))),
                    i &&
                      "client" === t.author &&
                      (mn(p, s, !0),
                      s.conn.emit(
                        "newMessage",
                        {
                          message: t.message,
                          messageAuthor: "client",
                          messageType: "text",
                        },
                        (e) => {
                          if (e) {
                            const { status: t, message: n, chatUid: r } = e,
                              i = "ok" === t ? Gt.Confirmed : Gt.Failed;
                            gn(p, i, r, n);
                          }
                        }
                      )),
                    pn(a, s)))
              : a;
          });
        }
        function S(e) {
          const t = "string" == typeof e ? hn(u, e) : e;
          t &&
            (t.conn?.emit("chatRoomView"),
            (function (e, t, n) {
              e((e) => {
                if (!e) return null;
                const n = hn(e, t);
                return n
                  ? ((n.viewed = !0),
                    (n.selected = true),
                    (n.unreadCount = 0),
                    pn(e, n))
                  : e;
              });
            })(p, t.uid),
            (function (e, t) {
              e((e) => {
                if (!e) return null;
                const n = hn(e, t.uid);
                return n &&
                  n.delayedBotEventMessages &&
                  Array.isArray(n.delayedBotEventMessages)
                  ? (n.delayedBotEventMessages.forEach((e) => {
                      (n.chat_messages = [
                        ...(n.chat_messages || []),
                        on(e.text, !0, "text"),
                      ]),
                        e.predefinedAnswers &&
                          (n.chat_messages = [
                            ...(n.chat_messages || []),
                            sn(e.predefinedAnswers),
                          ]);
                    }),
                    pn(e, n))
                  : e;
              });
            })(p, t),
            f(t));
        }
        async function L(e, r) {
          if (!o) return;
          const i = ((e) => {
            let t = null;
            if (e)
              for (const n of e) {
                const e = n.chat_messages?.findIndex(
                  (e) => "client" === e.author
                );
                if (-1 === e && n.active) {
                  t = n;
                  break;
                }
              }
            return t;
          })(u);
          if (i) S(i), r && ln(e, i.uid, E);
          else
            try {
              g.uid && f((e) => ({ ...e, chat_messages: void 0, isDummy: !0 }));
              const i = await (async (e, t, n, r) => {
                try {
                  const i = await Zt(e, {
                    apiKey: t,
                    participantUid: n,
                    locale: r.toLowerCase(),
                  });
                  return Kt(await i.json());
                } catch (e) {
                  throw new Error(`Chat room loading error: ${e.message}`);
                }
              })(`${t}/api/public/chat`, n, o.uid, l ?? "en");
              w(i, o.uid),
                (i.delayedBotEventMessages = e || []),
                p((e) => [i, ...(e || [])]),
                S(i),
                a(Tt.ChatCreated),
                (s = i.uid),
                _.current.includes(s) ||
                  (a(Tt.OpenChatForTheFirstTime), _.current.push(s)),
                r && ln(e, i.uid, E);
            } catch (e) {
              throw new Error(`Error creating participant: ${e.message}`);
            }
          var s;
        }
        return (
          le(() => {
            g.uid || x();
          }, [o]),
          le(() => {
            Array.isArray(u) && 0 === u.length && L(),
              i && u
                ? (d(u), u && 1 === u.length && b && !g && (S(u[0].uid), y(!1)))
                : g.uid || (u && u.length && S(u[0]));
          }, [u]),
          le(() => {
            u &&
              p((e) =>
                e
                  ? e.map(
                      (e) => (
                        e.selected && ((e.unreadCount = 0), (e.viewed = !0)), e
                      )
                    )
                  : null
              );
          }, [r]),
          v(
            Gr.Provider,
            {
              value: {
                rooms: u,
                roomsLoadingError: h,
                reloadRooms: x,
                addMessage: E,
                addImageMessage: async function (e, t) {
                  const n = await (async (e) => {
                      if (((e) => e.size < 3145728)(e)) return e;
                      try {
                        const t = await (async (e) =>
                          await new Promise((t) => {
                            const n = new FileReader();
                            (n.onload = (e) => t(n.result)), n.readAsDataURL(e);
                          }))(e);
                        if (t) {
                          const n = await (async (e) => await tn(e))(t);
                          return await (async (e, t) => {
                            try {
                              const n = await fetch(e),
                                r = await n.blob();
                              return new File([r], t, { type: "image/jpeg" });
                            } catch (e) {
                              throw new Error(
                                "Error while converting dataURL string to file"
                              );
                            }
                          })(n, e.name);
                        }
                        return t;
                      } catch (e) {
                        throw new Error("Cannot compress an image");
                      }
                    })(e),
                    r = ((e) => ({
                      id: 0,
                      message: e.name,
                      author: "client",
                      time: new Date().toISOString(),
                      full_date: new Date().toISOString(),
                      visible_to_client: !0,
                      hasAvatar: !1,
                      confirmed: Gt.Inprogress,
                      type: "image",
                      image: { path: "", preview_path: "" },
                    }))(n),
                    i = {
                      message: r.message || e.name,
                      messageType: "image",
                      messageAuthor: "client",
                      file: await en(n),
                    };
                  p((e) => {
                    if (!e) return null;
                    const n = hn(e, t);
                    return n && n.conn && n.conn.connected
                      ? ((n.chat_messages = [...(n.chat_messages || []), r]),
                        (n.last_message = r),
                        n.conn.emit("newMessage", i, (e) => {
                          const { status: t, message: n, chatUid: r } = e,
                            i = "ok" === t ? Gt.Confirmed : Gt.Failed;
                          gn(p, i, r, n);
                        }),
                        pn(e, n))
                      : e;
                  });
                },
                selectRoom: S,
                selectedRoom: g,
                createRoom: L,
                resetRoom: function () {
                  g.uid && f(qr);
                },
                clearPredefinedAnswers: function (e) {
                  e &&
                    (e.chat_messages?.forEach((e) => {
                      "predefined_answers" === e.type &&
                        (e.visible_to_client = !1);
                    }),
                    f(e));
                },
              },
            },
            e
          )
        );
      }
      let Jr = (function (e) {
        return (
          (e[(e.Message = 0)] = "Message"),
          (e[(e.EndStream = 1)] = "EndStream"),
          (e[(e.Stream = 2)] = "Stream"),
          e
        );
      })({});
      const Zr = U({
        notificationStatus: !1,
        notificationText: "",
        showNotification: () => {},
        hideNotification: () => {},
      });
      function Qr({ children: e }) {
        const [t, n] = ae(!1),
          [r, i] = ae("");
        return v(
          Zr.Provider,
          {
            value: {
              notificationStatus: t,
              notificationText: r,
              showNotification: function (e) {
                n(!0), i(e);
              },
              hideNotification: function () {
                n(!1), i("");
              },
            },
          },
          e
        );
      }
      const Xr = new (class {
          addPopupMessages = () => {};
          addRoomMessages = () => {};
          show = () => {};
          hide = () => {};
          open = () => {};
          close = () => {};
          enableEditUserCard = () => {};
          disableEditUserCard = () => {};
          setPopupHandler(e) {
            this.addPopupMessages = e;
          }
          setMessageHandler(e) {
            this.addRoomMessages = e;
          }
          initEvent(e, t, n) {
            return new CustomEvent(e, {
              bubbles: !0,
              detail: { participantUid: t?.uid, chatsCount: n?.length },
            });
          }
          setParticipant(e, t) {
            throw Error("HHOHOHHO");
          }
        })(),
        ei = U({}),
        ti = U({
          informationWarning: !1,
          setInformationWarning: (e) => {},
          unreadCounter: 0,
          norbyChat: Xr,
          pool: null,
          widgetOpen: !1,
          setWidgetStatus: (e) => {},
          editUserCard: !0,
        }),
        ni = ({ children: e, value: t }) => v(ti.Provider, { value: t }, e),
        ri = ({ children: e, config: t }) => {
          const [n, r] = ae(t.informationPage),
            [i, o] = ae(!t.minimized),
            [a, s] = ae(!t.hidden),
            [l, c] = ae(!t.disableDetailsEdit);
          le(() => {
            (Xr.show = () => s(!0)),
              (Xr.hide = () => s(!1)),
              (Xr.open = (e, n) => {
                e && n && ((t.width = e), (t.height = n)), o(!0);
              }),
              (Xr.close = () => o(!1)),
              (Xr.enableEditUserCard = () => c(!0)),
              (Xr.disableEditUserCard = () => c(!1)),
              (window.norbyChat = Xr);
          }, [window]);
          const d = {
            informationWarning: n,
            setInformationWarning: r,
            norbyChat: Xr,
            widgetOpen: i,
            setWidgetStatus: o,
            editUserCard: l,
          };
          return v(
            ei.Provider,
            { value: t },
            v(
              ai,
              {
                apiKey: t.apiKey,
                baseUrl: t.serviceBaseUrl,
                enableEditUserData: l,
              },
              v(
                di,
                { baseUrl: t.serviceBaseUrl },
                v(
                  ni,
                  { value: d },
                  v(
                    pi,
                    { lang: t.lang || "en" },
                    v(
                      Fr,
                      { baseUrl: t.serviceBaseUrl, apiKey: t.apiKey },
                      v(
                        Vr,
                        null,
                        v(
                          Yr,
                          {
                            apiKey: t.apiKey,
                            baseUrl: t.serviceBaseUrl,
                            multichat: t.multichat,
                            widgetOpen: i,
                          },
                          v(Qr, null, a && e)
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        };
      function ii(e, t) {
        !(function () {
          if (!window.localStorage)
            throw new Error("No local storage supported.");
        })(),
          (function (e) {
            if (!e.uid)
              throw new Error("Participant details must contain uid field");
          })(t),
          (function (e) {
            const t = Object.keys(window.localStorage);
            for (let n of t)
              n.includes("participant") &&
                n !== e &&
                window.localStorage.removeItem(n);
          })(t.uid),
          window.localStorage.setItem(e, JSON.stringify(t));
      }
      const oi = U({
        participant: void 0,
        participantAllowed: !1,
        editMode: !1,
        setParticipantAllowed: () => {},
        enableEditMode: () => {},
        disableEditMode: () => {},
        updateParticipant: () => {},
      });
      function ai({
        children: e,
        apiKey: t,
        baseUrl: n,
        enableEditUserData: r,
      }) {
        const { interfaceLanguage: i } = me(ui),
          o = me(ei),
          [a, s] = ae(void 0),
          [l, c] = ae(!1),
          [d, u] = ae(!1),
          p = `${t}-participant`,
          h = `${n}/api/public/chat/participant`;
        le(() => {
          const e = (function (e) {
            if (!window.localStorage) return null;
            const t = window.localStorage.getItem(e);
            if (!t) return null;
            const n = JSON.parse(t);
            return "object" != typeof n || n.uid ? n : null;
          })(p);
          s(e),
            window &&
              window.norbyChat &&
              (window.norbyChat.setParticipant = (e, t) =>
                s((n) => (n ? { ...n, name: e, email: t } : n)));
        }, []),
          le(() => {
            d &&
              (null === a &&
                (async function ({
                  url: e,
                  apiKey: t,
                  key: n,
                  locale: r,
                  name: i,
                  email: o,
                }) {
                  return {
                    key: n,
                    participant: await Xt(e, {
                      apiKey: t,
                      locale: r,
                      name: i,
                      email: o,
                    }),
                  };
                })({
                  url: h,
                  apiKey: t,
                  key: p,
                  locale: i || "en",
                  name: o.name ? o.name : void 0,
                  email: li(o.email) ? o.email : void 0,
                }).then(({ participant: e, key: t }) => {
                  o.name && e && (e.name = o.name),
                    o.email && e && (e.email = o.email),
                    ii(t, e),
                    s(e);
                }),
              a &&
                (((o.name && a.name !== o.name) ||
                  (o.email && a.email !== o.email && li(o.email))) &&
                  (o.name && (a.name = o.name),
                  o.email && li(o.email) && (a.email = o.email),
                  (async () => {
                    await m(a);
                  })()),
                (async (e, t) => {
                  try {
                    await Qt(`${e}/${t.uid}`, { url: window.location.href });
                  } catch (e) {
                    console.error(
                      "Error providing client url to server",
                      e.message
                    );
                  }
                })(h, a).then(() => {})));
          }, [a, d]);
        const m = async (e) => {
          const { participant: n, key: r } = await (async function ({
            url: e,
            key: t,
            participant: n,
            locale: r,
          }) {
            return (
              await (async (e, t, n) => {
                const { name: r, email: i } = t,
                  o = { name: r, email: i };
                await Qt(`${e}/${t.uid}`, o);
              })(e, n),
              { key: t, participant: n }
            );
          })({
            url: h,
            locale: i || "en",
            key: p,
            apiKey: t,
            participant: { ...e },
          });
          ii(r, n), s(n);
        };
        return v(
          oi.Provider,
          {
            value: {
              participant: a,
              participantAllowed: d,
              editMode: l,
              setParticipantAllowed: () => !d && u(!0),
              enableEditMode: async () => {
                a && r && c(!0);
              },
              disableEditMode: () => c(!1),
              updateParticipant: m,
            },
          },
          e
        );
      }
      const si = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/,
        li = (e) => !!e && si.test(e),
        ci = U({ sendEvent: () => {} });
      function di({ children: e, baseUrl: t }) {
        const { participant: n } = me(oi),
          r = `${t}/api/public/chat/participant/${n?.uid || ""}/event`;
        return v(
          ci.Provider,
          {
            value: {
              sendEvent: function (e) {
                n &&
                  (async (e, t) => {
                    await Zt(e, { event: t });
                  })(r, e).catch((t) =>
                    console.error("Error sending mixpanel event", e, t)
                  );
              },
            },
          },
          e
        );
      }
      const ui = U({
          langDefinition: qt("en"),
          changeLanguage: () => {},
          interfaceLanguage: localStorage.getItem("il"),
        }),
        pi = ({ children: e, lang: t }) => {
          const { sendEvent: n } = me(ci),
            [r, i] = ae(
              localStorage.getItem("il") ? localStorage.getItem("il") : t
            ),
            [o, a] = ae(qt(r || "en"));
          return (
            le(
              function () {
                a(qt(r || "en"));
              },
              [r]
            ),
            v(
              ui.Provider,
              {
                value: {
                  langDefinition: o,
                  changeLanguage: function (e) {
                    var r;
                    e !==
                      (localStorage.getItem("il")
                        ? localStorage.getItem("il")
                        : t) &&
                      ((r = e),
                      localStorage.setItem("il", r),
                      i(r),
                      n(Tt.ChangeLanguage));
                  },
                  interfaceLanguage: r,
                },
              },
              e
            )
          );
        },
        hi = {
          lineHeight: "20px",
          fontFamily: "Inter, sans-serif",
          fontStyle: "normal",
          fontSize: "16px",
          fontWeight: "normal",
        },
        mi = ({ children: e, color: t }) =>
          v(
            "span",
            {
              style: {
                ...hi,
                fontSize: "11px",
                lineHeight: "16px",
                letterSpacing: "0.1px",
                color: t,
              },
            },
            e
          ),
        gi = ({ children: e, color: t }) =>
          v(
            "span",
            {
              style: {
                ...hi,
                fontSize: "11px",
                lineHeight: "16px",
                letterSpacing: "0.16px",
                fontWeight: "bold",
                color: t,
              },
            },
            e
          ),
        fi = ({ children: e, color: t }) =>
          v("span", { style: { ...hi, color: t } }, e),
        bi = ({ children: e, color: t }) =>
          v("span", { style: { ...hi, fontWeight: "bold", color: t } }, e),
        yi = () => {
          const { langDefinition: e } = me(ui);
          return v(
            "div",
            {
              style: {
                position: "absolute",
                bottom: "0",
                left: "0",
                right: "0",
                textAlign: "center",
                backgroundColor: "black",
                paddingTop: "4px",
                paddingBottom: "4px",
                borderTop: "2px solid black",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "auto",
              },
            },
            v(
              mi,
              { color: "var(--nrb-main-lighter)" },
              v(
                "span",
                {
                  onClick: () =>
                    window.open(
                      "https://norby.io",
                      "_blank",
                      "noopener,noreferrer"
                    ),
                },
                e.app.chat.powered
              ),
              v(
                gi,
                { color: "var(--nrb-main-lighter)" },
                v(
                  "a",
                  {
                    href: "https://norby.io",
                    className: "norbyLink",
                    target: "_blank",
                  },
                  e.app.norbyAI
                )
              )
            ),
            v(
              "style",
              null,
              "\n    .norbyLink,\n    .norbyLink:active,\n    .norbyLink:hover,\n    .norbyLink:visited {\n      color: var(--nrb-main-lighter);\n      cursor: pointer;\n      text-decoration: none;\n    }\n    \n    .norbyLink:hover {\n      text-decoration: underline;\n      color: var(--nrb-main-hover-color);\n    }\n  "
            )
          );
        },
        vi = ({ stroke: e }) =>
          v(
            "button",
            { className: "buttonStyles" },
            v(
              "svg",
              {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "svgStyles",
              },
              v("path", {
                d: "M17 12H6",
                stroke: e,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              v("path", {
                d: "M17 12L14.5 15",
                stroke: e,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              v("path", {
                d: "M17 12L14.5 9",
                stroke: e,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              })
            ),
            v(
              "style",
              null,
              "\n    .buttonStyles {\n      position: relative;\n      background-color: transparent;\n      border-radius: 50%;\n      border: none;\n      width: 40px;\n      height: 40px;\n      display: flex;\n      cursor: pointer;\n    }\n    \n    .svgStyles {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      margin: auto;\n    }\n  "
            )
          ),
        _i = ({ fill: e, stroke: t }) =>
          v(
            "svg",
            {
              "data-testid": "pencil",
              width: "28",
              height: "28",
              viewBox: "0 0 40 40",
              fill: e,
              xmlns: "http://www.w3.org/2000/svg",
            },
            v("path", {
              d: "M23 12L26 15L17 24L13 25L14 21L23 12Z",
              stroke: t,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            v("path", {
              d: "M21 25H26",
              stroke: t,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          ),
        wi = ({ stroke: e }) =>
          v(
            "button",
            { className: "chevronStyles" },
            v(
              "svg",
              {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "svgStyles",
              },
              v("path", {
                d: "M10 12.3999L14.5 17.7999",
                stroke: e,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              v("path", {
                d: "M10 12.3999L14.5 7",
                stroke: e,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              })
            ),
            v(
              "style",
              null,
              "\n    .chevronStyles {\n      position: relative;\n      background-color: transparent;\n      border-radius: 50%;\n      border: none;\n      width: 40px;\n      height: 40px;\n      display: flex;\n      cursor: pointer;\n    }\n    \n    .svgStyles {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      margin: auto;\n    }\n  "
            )
          ),
        xi = ({ stroke: e }) =>
          v(
            "button",
            { className: "buttonStyles" },
            v(
              "svg",
              {
                width: "20",
                height: "18",
                viewBox: "0 0 20 18",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "svgStyles",
              },
              v("path", {
                d: "M5.75 16.5H18.5M5.75 16.5H1.5V1.5H18.5V16.5M5.75 16.5C5.90741 13.6875 10.3778 7.70625 13.7778 8.45625C17.1778 9.20625 18.5 13.875 18.5 16.5",
                stroke: e,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              v("path", {
                d: "M6.3125 7.7085C7.17545 7.7085 7.875 7.00894 7.875 6.146C7.875 5.28305 7.17545 4.5835 6.3125 4.5835C5.44956 4.5835 4.75 5.28305 4.75 6.146C4.75 7.00894 5.44956 7.7085 6.3125 7.7085Z",
                stroke: e,
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              })
            ),
            v(
              "style",
              null,
              "\n    .buttonStyles {\n      position: relative;\n      background-color: transparent;\n      border-radius: 50%;\n      border: none;\n      width: 40px;\n      height: 40px;\n      display: flex;\n      cursor: pointer;\n    }\n    \n    .svgStyles {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      margin: auto;\n    };\n  "
            )
          ),
        Ci = ({ fill: e }) =>
          v(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "22",
              height: "22",
              viewBox: "0 0 22 22",
              fill: "none",
            },
            v(
              "g",
              { "clip-path": "url(#clip0_1802_997)" },
              v("path", {
                fillRule: "evenodd",
                "clip-rule": "evenodd",
                d: "M11.0002 9.16671C9.98764 9.16671 9.16683 9.98752 9.16683 11C9.16683 12.0126 9.98764 12.8334 11.0002 12.8334C12.0127 12.8334 12.8335 12.0126 12.8335 11C12.8335 9.98752 12.0127 9.16671 11.0002 9.16671ZM7.3335 11C7.3335 8.975 8.97512 7.33337 11.0002 7.33337C13.0252 7.33337 14.6668 8.975 14.6668 11C14.6668 13.0251 13.0252 14.6667 11.0002 14.6667C8.97512 14.6667 7.3335 13.0251 7.3335 11Z",
                fill: e,
              }),
              v("path", {
                fillRule: "evenodd",
                "clip-rule": "evenodd",
                d: "M11 1.83333C10.7569 1.83333 10.5237 1.92991 10.3518 2.10182C10.1799 2.27373 10.0833 2.50689 10.0833 2.75V2.90949C10.0814 3.38323 9.94106 3.84608 9.67948 4.24106C9.41791 4.63605 9.04654 4.94592 8.6111 5.13254C8.5336 5.16576 8.45205 5.18805 8.36881 5.19893C7.97315 5.33749 7.54722 5.37164 7.13259 5.29646C6.655 5.20987 6.21431 4.98219 5.86734 4.64279L5.86011 4.63572L5.80515 4.58068C5.72002 4.49545 5.61856 4.42748 5.50728 4.38135C5.396 4.33522 5.27671 4.31147 5.15625 4.31147C5.03579 4.31147 4.9165 4.33522 4.80522 4.38135C4.69394 4.42748 4.59284 4.49509 4.50771 4.58032L4.50699 4.58104C4.42176 4.66618 4.35415 4.76727 4.30802 4.87855C4.26189 4.98984 4.23814 5.10912 4.23814 5.22958C4.23814 5.35005 4.26189 5.46933 4.30802 5.58061C4.35415 5.69189 4.42176 5.79299 4.50699 5.87813L4.5695 5.94063C4.9089 6.28761 5.13654 6.72834 5.22313 7.20592C5.308 7.67399 5.25354 8.15647 5.06683 8.59354C4.89673 9.03955 4.5989 9.42578 4.21029 9.70372C3.81383 9.98728 3.34123 10.145 2.85394 10.1564L2.8325 10.1567H2.75C2.50689 10.1567 2.27373 10.2532 2.10182 10.4252C1.92991 10.5971 1.83333 10.8302 1.83333 11.0733C1.83333 11.3164 1.92991 11.5496 2.10182 11.7215C2.27373 11.8934 2.50689 11.99 2.75 11.99H2.90949C3.38323 11.9919 3.84608 12.1323 4.24106 12.3938C4.63467 12.6545 4.94377 13.0242 5.13059 13.4577C5.32499 13.9006 5.38277 14.3914 5.29646 14.8674C5.20987 15.345 4.98219 15.7857 4.64279 16.1327L4.63572 16.1399L4.58068 16.1948C4.49545 16.28 4.42748 16.3814 4.38135 16.4927C4.33522 16.604 4.31147 16.7233 4.31147 16.8438C4.31147 16.9642 4.33522 17.0835 4.38135 17.1948C4.42748 17.3061 4.49509 17.4072 4.58032 17.4923L4.58104 17.493C4.66617 17.5782 4.76727 17.6459 4.87855 17.692C4.98984 17.7381 5.10912 17.7619 5.22958 17.7619C5.35005 17.7619 5.46933 17.7381 5.58061 17.692C5.6919 17.6459 5.79299 17.5782 5.87813 17.493L5.94063 17.4305C6.28761 17.0911 6.72834 16.8635 7.20592 16.7769C7.67399 16.692 8.15646 16.7465 8.59354 16.9332C9.03955 17.1033 9.42578 17.4011 9.70372 17.7897C9.98728 18.1862 10.145 18.6588 10.1564 19.1461L10.1567 19.1675V19.25C10.1567 19.4931 10.2532 19.7263 10.4252 19.8982C10.5971 20.0701 10.8302 20.1667 11.0733 20.1667C11.3164 20.1667 11.5496 20.0701 11.7215 19.8982C11.8934 19.7263 11.99 19.4931 11.99 19.25V19.0942L11.99 19.0905C11.9919 18.6168 12.1323 18.1539 12.3938 17.7589C12.6545 17.3653 13.0243 17.0562 13.4578 16.8694C13.9007 16.675 14.3915 16.6172 14.8674 16.7035C15.345 16.7901 15.7857 17.0178 16.1327 17.3572L16.1399 17.3643L16.1948 17.4193C16.28 17.5045 16.3814 17.5725 16.4927 17.6187C16.604 17.6648 16.7233 17.6885 16.8438 17.6885C16.9642 17.6885 17.0835 17.6648 17.1948 17.6187C17.3061 17.5725 17.4072 17.5049 17.4923 17.4197L17.493 17.419C17.5782 17.3338 17.6459 17.2327 17.692 17.1214C17.7381 17.0102 17.7619 16.8909 17.7619 16.7704C17.7619 16.65 17.7381 16.5307 17.692 16.4194C17.6459 16.3081 17.5782 16.207 17.493 16.1219L17.4305 16.0594C17.0911 15.7124 16.8635 15.2717 16.7769 14.7941C16.6906 14.3181 16.7483 13.8273 16.9427 13.3845C17.1295 12.9509 17.4386 12.5812 17.8323 12.3205C18.2273 12.0589 18.6901 11.9186 19.1638 11.9167L19.1675 11.9167L19.25 11.9167C19.4931 11.9167 19.7263 11.8201 19.8982 11.6482C20.0701 11.4763 20.1667 11.2431 20.1667 11C20.1667 10.7569 20.0701 10.5237 19.8982 10.3518C19.7263 10.1799 19.4931 10.0833 19.25 10.0833H19.0942L19.0905 10.0833C18.6168 10.0814 18.1539 9.94106 17.7589 9.67948C17.364 9.41791 17.0541 9.04654 16.8675 8.6111C16.8342 8.5336 16.8119 8.45205 16.8011 8.36881C16.6625 7.97314 16.6284 7.54721 16.7035 7.13259C16.7901 6.655 17.0178 6.21431 17.3572 5.86734L17.3643 5.86012L17.4193 5.80515C17.5045 5.72002 17.5725 5.61856 17.6187 5.50728C17.6648 5.396 17.6885 5.27671 17.6885 5.15625C17.6885 5.03579 17.6648 4.9165 17.6187 4.80522C17.5725 4.69394 17.5049 4.59284 17.4197 4.50771L17.419 4.50699C17.3338 4.42176 17.2327 4.35415 17.1214 4.30802C17.0102 4.26189 16.8909 4.23814 16.7704 4.23814C16.65 4.23814 16.5307 4.26189 16.4194 4.30802C16.3081 4.35415 16.207 4.42176 16.1219 4.50699L16.0594 4.5695C15.7124 4.9089 15.2717 5.13654 14.7941 5.22313C14.3181 5.30943 13.8272 5.25166 13.3844 5.05726C12.9509 4.87043 12.5812 4.56134 12.3205 4.16773C12.0589 3.77275 11.9186 3.3099 11.9167 2.83616L11.9167 2.8325V2.75C11.9167 2.50689 11.8201 2.27373 11.6482 2.10182C11.4763 1.92991 11.2431 1.83333 11 1.83333ZM9.05546 0.805456C9.57118 0.289732 10.2707 0 11 0C11.7293 0 12.4288 0.289732 12.9445 0.805456C13.4603 1.32118 13.75 2.02065 13.75 2.75V2.83021C13.7507 2.94593 13.7851 3.05895 13.849 3.15546C13.9132 3.25234 14.0043 3.32835 14.1111 3.37412L14.1201 3.37799C14.2291 3.42606 14.3499 3.44045 14.467 3.41921C14.5829 3.3982 14.6899 3.34334 14.7745 3.2616L14.8248 3.21135C15.0802 2.95566 15.3835 2.75282 15.7173 2.61443C16.0512 2.47604 16.409 2.40481 16.7704 2.40481C17.1318 2.40481 17.4897 2.47604 17.8235 2.61443C18.1573 2.75282 18.4606 2.95566 18.716 3.21135C18.9714 3.4666 19.174 3.76963 19.3122 4.10316C19.4506 4.43701 19.5219 4.79486 19.5219 5.15625C19.5219 5.51764 19.4506 5.87549 19.3122 6.20934C19.1739 6.54302 18.9712 6.84619 18.7157 7.10151C18.7156 7.10163 18.7158 7.10139 18.7157 7.10151L18.6651 7.15212C18.5833 7.23679 18.5285 7.3438 18.5075 7.45967C18.4862 7.57681 18.5006 7.69763 18.5486 7.80655C18.5745 7.86525 18.5941 7.92635 18.6072 7.98881C18.6506 8.05272 18.7062 8.1079 18.7712 8.15095C18.8677 8.21486 18.9807 8.24927 19.0965 8.25H19.25C19.9793 8.25 20.6788 8.53973 21.1945 9.05546C21.7103 9.57118 22 10.2707 22 11C22 11.7293 21.7103 12.4288 21.1945 12.9445C20.6788 13.4603 19.9793 13.75 19.25 13.75H19.1698C19.0541 13.7507 18.941 13.7851 18.8445 13.849C18.7477 13.9132 18.6717 14.0043 18.6259 14.1111L18.622 14.1201C18.5739 14.2291 18.5595 14.3499 18.5808 14.467C18.6018 14.5829 18.6567 14.6899 18.7384 14.7745L18.7887 14.8248C18.7885 14.8247 18.7888 14.8249 18.7887 14.8248C19.0442 15.0801 19.2472 15.3836 19.3856 15.7173C19.524 16.0512 19.5952 16.409 19.5952 16.7704C19.5952 17.1318 19.524 17.4897 19.3856 17.8235C19.2472 18.1573 19.0443 18.4606 18.7887 18.716L18.1408 18.0675L18.7894 18.7153C18.534 18.971 18.2307 19.1738 17.8968 19.3122C17.563 19.4506 17.2051 19.5219 16.8438 19.5219C16.4824 19.5219 16.1245 19.4506 15.7907 19.3122C15.457 19.1739 15.1538 18.9712 14.8985 18.7157C14.8984 18.7156 14.8986 18.7158 14.8985 18.7157L14.8479 18.6651C14.7632 18.5833 14.6562 18.5285 14.5403 18.5075C14.4232 18.4862 14.3024 18.5006 14.1935 18.5486L14.1845 18.5526C14.0777 18.5984 13.9865 18.6743 13.9224 18.7712C13.8585 18.8677 13.8241 18.9807 13.8233 19.0965V19.25C13.8233 19.9793 13.5336 20.6788 13.0179 21.1945C12.5022 21.7103 11.8027 22 11.0733 22C10.344 22 9.64452 21.7103 9.12879 21.1945C8.61307 20.6788 8.32333 19.9793 8.32333 19.25V19.1807C8.31899 19.0641 8.28049 18.9512 8.21255 18.8562C8.14299 18.759 8.04579 18.6849 7.93358 18.6437C7.91546 18.637 7.89755 18.6298 7.87988 18.622C7.77097 18.5739 7.65015 18.5595 7.533 18.5808C7.41713 18.6018 7.31011 18.6567 7.22544 18.7384L7.17521 18.7887C7.17509 18.7888 7.17533 18.7885 7.17521 18.7887C6.91988 19.0442 6.61636 19.2472 6.28267 19.3856C5.94883 19.524 5.59098 19.5952 5.22958 19.5952C4.86819 19.5952 4.51034 19.524 4.1765 19.3856C3.84297 19.2473 3.53993 19.0447 3.28468 18.7894C3.02899 18.534 2.82616 18.2307 2.68777 17.8968C2.54937 17.563 2.47814 17.2051 2.47814 16.8438C2.47814 16.4824 2.54937 16.1245 2.68777 15.7907C2.82616 15.4568 3.02899 15.1535 3.28468 14.8981L3.33493 14.8479C3.41668 14.7632 3.47154 14.6562 3.49254 14.5403C3.51378 14.4232 3.49945 14.3024 3.45138 14.1935L3.44741 14.1845C3.40163 14.0777 3.32567 13.9865 3.22879 13.9224C3.13229 13.8585 3.01927 13.8241 2.90354 13.8233H2.75C2.02065 13.8233 1.32118 13.5336 0.805456 13.0179C0.289732 12.5022 0 11.8027 0 11.0733C0 10.344 0.289732 9.64452 0.805456 9.12879C1.32118 8.61307 2.02065 8.32333 2.75 8.32333H2.81933C2.93593 8.31899 3.04875 8.28049 3.14376 8.21255C3.241 8.14299 3.31507 8.04579 3.35634 7.93358C3.36301 7.91546 3.37025 7.89755 3.37804 7.87988C3.42611 7.77097 3.44045 7.65015 3.41921 7.533C3.3982 7.41714 3.34334 7.31012 3.26159 7.22545L3.21135 7.17521C2.95566 6.91981 2.75282 6.61651 2.61443 6.28267C2.47604 5.94882 2.40481 5.59098 2.40481 5.22958C2.40481 4.86819 2.47604 4.51034 2.61443 4.1765C2.75276 3.84281 2.95547 3.53964 3.21099 3.28432C3.46631 3.0288 3.76948 2.82609 4.10316 2.68777C4.43701 2.54937 4.79486 2.47814 5.15625 2.47814C5.51764 2.47814 5.87549 2.54937 6.20934 2.68777C6.54318 2.82616 6.84647 3.02899 7.10188 3.28468L7.15212 3.33492C7.23679 3.41667 7.3438 3.47154 7.45967 3.49254C7.57681 3.51378 7.69763 3.49945 7.80655 3.45138C7.86525 3.42547 7.92635 3.40587 7.98881 3.39279C8.05273 3.3494 8.1079 3.2938 8.15095 3.22879C8.21486 3.13229 8.24927 3.01927 8.25 2.90354V2.75C8.25 2.02065 8.53973 1.32118 9.05546 0.805456Z",
                fill: e,
              })
            ),
            v(
              "defs",
              null,
              v(
                "clipPath",
                { id: "clip0_1802_997" },
                v("rect", {
                  width: "22",
                  height: "22",
                  fill: "var(--nrb-main-lightest-color)",
                })
              )
            )
          ),
        ki = ({
          variant: e,
          size: t,
          enabled: n,
          handler: r,
          isVisible: i,
          id: o,
        }) => {
          const a = {
            arrow: v(vi, {
              stroke: n
                ? "var(--nrb-opposite-color)"
                : "var(--nrb-text-disabled-color)",
            }),
            pencil: v(_i, {
              fill: "none",
              stroke: n
                ? "var(--nrb-main-lightest-color)"
                : "var(--nrb-text-disabled-color)",
            }),
            leftChevron: v(wi, {
              stroke: n
                ? "var(--nrb-opposite-color)"
                : "var(--nrb-text-disabled-color)",
            }),
            imageInput: v(xi, {
              stroke: n
                ? "var(--nrb-main-darkest-color)"
                : "var(--nrb-text-disabled-color)",
            }),
            gear: v(Ci, {
              fill: n
                ? "var(--nrb-main-lightest-color)"
                : "var(--nrb-text-disabled-color)",
            }),
          };
          return v(
            "div",
            {
              className: n
                ? "accentSingleButton"
                : "accentSingleButtonDisabled",
              "data-testid": "accent-button",
              onClick: r,
              id: o,
              style: {
                width: "large" === t ? "40px" : "28px",
                height: "large" === t ? "40px" : "28px",
                visibility: i ? "visible" : "hidden",
                cursor: i ? "pointer" : "none",
              },
            },
            v("div", { className: "centerContent" }, a[e]),
            v(
              "style",
              null,
              "\n    .centerContent {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: 40px;\n      width: 40px;\n    }\n    \n    .accentSingleButton {\n      cursor: pointer;\n      pointer-events: auto;\n      border-radius: 50%;\n      -webkit-border-radius: 50%;\n      -moz-border-radius: 50%;\n      background-color: black;\n    }\n    \n    .accentSingleButton:hover,\n    .accentSingleButton:focus {\n      background-color: black;\n      outline: none;\n    }\n    \n    .accentSingleButtonDisabled {\n      cursor: default;\n      pointer-events: none;\n      border-radius: 50%;\n      -webkit-border-radius: 50%;\n      -moz-border-radius: 50%;\n      background-color:#000000 ;\n    }\n    \n    .accentSingleButtonDisabled:hover,\n    .accentSingleButtonDisabled:focus\n    {\n      background-color: black;\n    }\n  "
            )
          );
        },
        Ei = ({ closeWidget: e }) =>
          v(
            "div",
            { className: "headerCloseButton", onClick: e },
            v(
              "svg",
              {
                className: "inner-svg",
                width: "28",
                height: "28",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              v("path", {
                d: "M16 8L8 16M8 8L16 16",
                stroke: "var(--nrb-opposite-color)",
                "stroke-width": "1.5",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              })
            ),
            v(
              "style",
              null,
              "\n      .headerCloseButton {\n        display: none;\n      }\n      \n      .inner-svg {\n        display: none;\n      }\n    \n      @media screen and (max-width: 800px) {\n        .headerCloseButton {\n          display: block;\n          position: relative;\n          display: block;\n          width: 40px;\n          height: 40px;\n          border-radius: 50%;\n        }\n          \n        .headerCloseButton:hover {\n          cursor: pointer;\n          background-color: black;\n        }\n        \n        .inner-svg {\n          display: block;\n          position: absolute;\n          top: 0;\n          right: 0;\n          left: 0;\n          bottom: 0;\n          margin: auto;\n        }\n      }\n      \n      @media screen and (max-height: 590px) {\n        .headerCloseButton {\n          display: block;\n          position: relative;\n          display: block;\n          width: 40px;\n          height: 40px;\n          border-radius: 50%;\n        }\n          \n        .headerCloseButton:hover {\n          cursor: pointer;\n          background-color: black;\n        }\n        \n        .inner-svg {\n          display: block;\n          position: absolute;\n          top: 0;\n          right: 0;\n          left: 0;\n          bottom: 0;\n          margin: auto;\n        }\n      }\n  "
            )
          ),
        Si = {
          fontFamily: "Inter, sans-serif",
          fontStyle: "normal",
          fontWeight: 600,
          padding: 0,
          margin: 0,
        },
        Li = ({ children: e, color: t }) =>
          v(
            "h2",
            {
              style: { ...Si, fontSize: "27px", lineHeight: "36px", color: t },
            },
            e
          ),
        Ti = ({ children: e, color: t }) =>
          v(
            "h3",
            {
              style: { ...Si, fontSize: "22px", lineHeight: "26px", color: t },
            },
            e
          ),
        Ni = ({ children: e, color: t }) =>
          v(
            "h4",
            {
              style: { ...Si, fontSize: "17px", lineHeight: "28px", color: t },
            },
            e
          ),
        Mi = {
          en: "English",
          ru: "Русский",
          ee: "Eesti",
          it: "Italiano",
          fr: "Français",
          de: "Deutsch",
          ua: "Українська",
          es: "Español",
          fi: "Suomi",
          sv: "Svenska",
          da: "Dansk",
          no: "Norsk",
          pl: "Polski",
          pt: "Português",
          tr: "Türkçe",
          zh: "中文",
          ja: "日本語",
        },
        Di = () => {
          const {
              langDefinition: e,
              changeLanguage: t,
              interfaceLanguage: n,
            } = me(ui),
            { languageList: r, multichat: i, botName: o } = me(ei),
            { setWidgetStatus: a, informationWarning: s } = me(ti),
            { selectedRoom: l, resetRoom: c } = me(Gr),
            { participant: d, editMode: u, disableEditMode: p } = me(oi),
            h = {};
          for (const e of r) {
            const t = e.toLowerCase().trim(),
              n = Mi[t];
            n && (h[t] = n);
          }
          const m =
              h && Object.keys(h).length > 0
                ? ((e) => {
                    const t = Object.keys(Mi).filter((t) =>
                      e.hasOwnProperty(t)
                    );
                    return t.reduce((e, t) => ((e[t] = Mi[t]), e), {});
                  })(h)
                : { ...Mi },
            g = !s && i && (!!l.uid || u);
          return v(
            "div",
            {
              className: "headerWrapper",
              style: {
                backgroundColor: "var(--nrb-main-color)",
                color: "var(--nrb-opposite-color)",
              },
            },
            g &&
              v(
                "div",
                { style: { margin: "0 16px 0 0" } },
                v(ki, {
                  enabled: !0,
                  size: "large",
                  variant: "leftChevron",
                  isVisible: g,
                  id: "back-to-list",
                  handler: () => {
                    u ? p() : c();
                  },
                })
              ),
            v(Ai, {
              langDefinition: e,
              isInRoom: !!l.uid,
              agent: l.agent,
              botName: o || "Norby",
            }),
            v(Oi, {
              languages: r.length ? { ...m } : { ...Mi },
              updateLanguage: async (e) => {
                d && t(e);
              },
              current: n || "en",
            }),
            v(Ei, { closeWidget: () => a(!1) }),
            v(
              "style",
              null,
              "\n  .headerWrapper {\n    z-index: 99;\n    padding: 16px !important;\n    height: 77px !important;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: flex-start;\n    align-items: center;\n  }\n  \n  .agentName {\n    max-width: 200px;\n    overflow: hidden;\n    text-wrap: nowrap;\n  }\n  \n  @media screen and (max-height: 590px) {\n    .headerWrapper {\n      padding: 24px !important;\n    }\n  }\n  \n  @media screen and (max-width: 444px) {\n    .agentName {\n      max-width: 720px;\n      font-size: 18px;\n    }\n  }\n"
            )
          );
        },
        Ai = ({ langDefinition: e, isInRoom: t, agent: n, botName: r }) => {
          const { editMode: i } = me(oi);
          if (t)
            return v(
              "div",
              { style: { flex: 1, lineHeight: "22px" } },
              v(
                Ti,
                { color: "var(--nrb-opposite-color)" },
                v(
                  "div",
                  { className: "agentName" },
                  ((e, t) =>
                    e ? `${e.first_name} ${e.last_name}` : t || "Bot")(n, r)
                )
              ),
              v(fi, { color: "#04ff00" }, e.app.header.online)
            );
          const o = i
            ? e.app.participantEditor.yourDetails
            : e.app.chatRooms.header;
          return v(
            "div",
            { style: { margin: "0", userSelect: "none", flex: 1 } },
            v(Ti, { color: "var(--nrb-opposite-color)" }, o)
          );
        },
        Oi = ({ languages: e, updateLanguage: t, current: n }) => {
          const [, r] = ae(n),
            [i, o] = ae(!1),
            a = he(
              function () {
                const n = [];
                for (const [i, a] of Object.entries(e))
                  n.push(
                    v(
                      "li",
                      {
                        key: i,
                        className: "langOption",
                        "data-testid": "option",
                        onClick: () => {
                          r(i), o(!1), t(i);
                        },
                      },
                      v(bi, { color: "var(--nrb-main-darkest-color)" }, a)
                    )
                  );
                return n;
              },
              [e]
            );
          return (
            le(() => {
              const e = (e) => {
                "langOptionsList" !== e.target.className && i && o(!1);
              };
              return (
                window.addEventListener("click", e),
                () => {
                  window.removeEventListener("click", e);
                }
              );
            }),
            v(
              "div",
              { className: "langSelectorWrapper" },
              v(
                "div",
                {
                  "data-testid": "selector",
                  onClick: () => o((e) => !e),
                  className: "langSelector",
                },
                v(
                  "div",
                  { className: "langName" },
                  v(bi, { color: "var(--nrb-opposite-color)" }, n.toUpperCase())
                ),
                v("div", {
                  "data-testid": "selector-arrow",
                  className: i ? "arrowUp" : "arrowDown",
                })
              ),
              i && v("ul", { className: "langOptionsList" }, a()),
              v(
                "style",
                null,
                "\n    .arrowDown,\n    .arrowUp {\n      width: 8px;\n      height: 5px;\n      border-radius: 2px;\n      background-color: black;\n      margin: 14px;\n    }\n    \n    .arrowDown {\n      clip-path: polygon(100% 0%, 0 0%, 50% 100%);\n    }\n    \n    .arrowUp {\n      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);\n    }\n    \n    .langSelectorWrapper {\n      position: relative;\n      cursor: pointer;\n      /*noinspection CssUnresolvedCustomProperty*/\n      border-radius: 4px;\n      margin-left: 14px;\n      background-color:black;\n    }\n    \n    .langSelectorWrapper:hover {\n      background-color: black;\n    }\n    \n    .langSelector {\n      display: flex;\n      align-items: center;\n    }\n    \n    .langName {\n      font-size: 16px;\n      line-height: 20px;\n      margin: 6px 0 6px 8px !important;\n    }\n    \n    .langOptionsList {\n      position: absolute;\n      right: 0;\n      top: 36px;\n      list-style: none;\n      box-shadow: 0 -2px 16px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.06), 2px 1px 32px rgba(0, 0, 0, 0.06);\n      border-radius: 4px;\n      color: var(--nrb-main-darkest-color);\n      background-color: black;\n      padding: 8px !important;\n      z-index: 99;\n      width: 200px;\n      min-height: fit-content;\n      max-height: 480px;\n      overflow-y: scroll;\n    }\n    \n    .langOptionsList::-webkit-scrollbar {\n      display: none;\n    }\n    \n    .langOption {\n      padding: 10px 16px;\n      border-radius: 4px;\n    }\n    \n    .langOption:hover {\n      background-color: black;\n    }\n    \n    @media screen and (max-width: 800px) {\n      .langSelectorWrapper {\n        margin-right: 14px;\n      }\n    }\n    \n    @media screen and (max-height: 590px) {\n      .langSelectorWrapper {\n        margin-right: 14px;\n      }\n    }\n  "
              )
            )
          );
        };
      class zi {
        constructor(e) {
          this.baseHSL = zi.hexToHSL(e);
        }
        get mainColor() {
          return `hsl(${this.baseHSL.h}, ${this.baseHSL.s}%, ${this.baseHSL.l}%)`;
        }
        get botAvatarColor() {
          if (this.baseHSL.h >= 51 && this.baseHSL.h <= 67) {
            const e = 10,
              t = this.baseHSL.s;
            return `hsl(${this.baseHSL.h}, ${t}%, ${e}%)`;
          }
          return this.darkerColor;
        }
        get mainOppositeColor() {
          if (this.baseHSL.h >= 51 && this.baseHSL.h <= 67) {
            const e = 10,
              t = this.baseHSL.s;
            return `hsl(${this.baseHSL.h}, ${t}%, ${e}%)`;
          }
          {
            const e = this.baseHSL.l > 82 ? 0.5 : 99.5,
              t = this.baseHSL.s;
            return `hsl(${this.baseHSL.h}, ${t}%, ${e}%)`;
          }
        }
        get mainLightestColor() {
          const e = this.baseHSL.s;
          return `hsl(${this.baseHSL.h}, ${e}%, 99.9%)`;
        }
        get mainBackgroundColor() {
          const e = Math.max(this.baseHSL.s - 68, 0);
          return `hsl(${this.baseHSL.h}, ${e}%, 97.5%)`;
        }
        get mainBgDarkerColor() {
          const e = Math.max(this.baseHSL.s - 68, 0);
          return `hsl(${this.baseHSL.h}, ${e}%, 93%)`;
        }
        get mainBgDarkestColor() {
          const e = Math.max(this.baseHSL.s - 70, 0);
          return `hsl(${this.baseHSL.h}, ${e}%, 80%)`;
        }
        get textDisabledColor() {
          const e = Math.max(this.baseHSL.s - 70, 0);
          return `hsl(${this.baseHSL.h}, ${e}%, 75%)`;
        }
        get mainHoverColor() {
          const e = this.baseHSL.l - 14;
          return `hsl(${this.baseHSL.h}, ${this.baseHSL.s}%, ${e}%)`;
        }
        get darkerColor() {
          return `hsl(${this.baseHSL.h}, ${this.baseHSL.s}%, ${
            this.baseHSL.l - 7
          }%)`;
        }
        get mainDarkestColor() {
          const e = Math.min(0.2 * this.baseHSL.l, 3),
            t = this.baseHSL.s;
          return `hsl(${this.baseHSL.h}, ${t}%, ${e}%)`;
        }
        get lighterColor() {
          let e = this.baseHSL.s - 70,
            t = this.baseHSL.h,
            n = this.baseHSL.l + 14;
          return this.baseHSL.l > 50 && (n -= 28), `hsl(${t}, ${e}%, ${n}%)`;
        }
        get lightColor() {
          return `hsl(${this.baseHSL.h}, ${this.baseHSL.s - 50}%, ${
            this.baseHSL.l + 34
          }%)`;
        }
        get mainGradient() {
          const e = [
            { opacity: 1, percentage: 0 },
            { opacity: 0.991353, percentage: 6.67 },
            { opacity: 0.96449, percentage: 13.33 },
            { opacity: 0.91834, percentage: 20 },
            { opacity: 0.852589, percentage: 26.67 },
            { opacity: 0.768225, percentage: 33.33 },
            { opacity: 0.668116, percentage: 40 },
            { opacity: 0.557309, percentage: 46.67 },
            { opacity: 0.442691, percentage: 53.33 },
            { opacity: 0.331884, percentage: 60 },
            { opacity: 0.231775, percentage: 66.67 },
            { opacity: 0.147411, percentage: 73.33 },
            { opacity: 0.0816599, percentage: 80 },
            { opacity: 0.03551, percentage: 86.67 },
            { opacity: 0.0086472, percentage: 93.33 },
            { opacity: 0, percentage: 100 },
          ].map((e) => `rgba(250, 250, 250, ${e.opacity}) ${e.percentage}%`);
          return `linear-gradient(90deg, ${this.mainColor} 0%, ${e.join(
            ", "
          )})`;
        }
        static hexToHSL(e) {
          if (/^#(?:[0-9A-F]{3}|[0-9A-F]{6})$/i.test(e)) {
            const t = zi.hexToRGB(e),
              n = +t.r / 255,
              r = +t.g / 255,
              i = +t.b / 255,
              o = Math.min(n, r, i),
              a = Math.max(n, r, i),
              s = a - o;
            let l, c, d;
            return (
              (l =
                0 === s
                  ? 0
                  : a === n
                  ? ((r - i) / s) % 6
                  : a === r
                  ? (i - n) / s + 2
                  : (n - r) / s + 4),
              (l = Math.round(60 * l)),
              (l = l < 0 ? l + 360 : l),
              (d = (a + o) / 2),
              (c = 0 === s ? 0 : s / (1 - Math.abs(2 * d - 1))),
              (l = Math.round(l)),
              (c = Math.round(100 * c)),
              (d = Math.round(100 * d)),
              { h: l, s: c, l: d }
            );
          }
          if (/^(white|black|red|green|blue|yellow|cyan|magenta)$/i.test(e)) {
            const t = {
              black: "#000000",
              blue: "#0000FF",
              cyan: "#00FFFF",
              green: "#008000",
              magenta: "#FF00FF",
              red: "#FF0000",
              white: "#FFFFFF",
              yellow: "#FFFF00",
            }[e.toLowerCase()];
            return zi.hexToHSL(t);
          }
          throw new Error("Invalid color format");
        }
        static hexToRGB(e) {
          return 4 === e.length
            ? {
                r: "0x" + e[1] + e[1],
                g: "0x" + e[2] + e[2],
                b: "0x" + e[3] + e[3],
              }
            : {
                r: "0x" + e[1] + e[2],
                g: "0x" + e[3] + e[4],
                b: "0x" + e[5] + e[6],
              };
        }
      }
      const Ii = ({ size: e, fillColor: t, visible: n }) => {
          const r = e && "S" === e ? 16 : 40,
            { mainColor: i } = me(ei),
            o = t || i;
          return v(
            "div",
            {
              style: {
                position: "relative",
                padding: 40 === r ? "2px 4px 0 0" : "0",
                margin: 16 === r ? "0 4px 2px 0" : "0",
                width: `${r}px`,
                height: `${r}px`,
                pointerEvents: "none",
                borderRadius: "50%",
              },
            },
            v(
              "svg",
              {
                viewBox: e && "L" === e ? "0 0 64 64" : "4 4 32 32",
                fill: "none",
                style: {
                  position: "absolute",
                  top: "0",
                  right: "0",
                  bottom: "0",
                  left: "0",
                  margin: "auto",
                },
                xmlns: "http://www.w3.org/2000/svg",
              },
              v("path", {
                d: "M17.2745 34.7338C11.722 33.561 7.12038 28.6488 6.37325 23.1077C6.13553 21.306 6.28835 18.8244 6.74682 17.2097C7.95241 12.9604 11.739 9.06801 15.967 7.75923C17.3594 7.3343 17.5122 7.53826 16.7991 8.96603C16.2897 10.0199 16.2048 10.0878 15.0331 10.6658C11.0598 12.5694 8.61463 16.5298 8.59765 21.051C8.59765 21.9519 8.71651 23.0907 8.86934 23.7706C9.25988 25.3683 10.3806 27.561 11.3145 28.6148L12.0956 29.4817L13.7766 29.1927C15.0501 28.9717 16.035 28.9207 17.9367 28.9887C20.7215 29.0907 22.3516 29.4307 24.7628 30.3995L26.257 31.0114L27.0041 30.4845C28.872 29.2097 30.7058 26.5241 31.385 24.0935C31.7586 22.7678 31.7076 18.8924 31.3001 17.7196C30.1794 14.4561 28.0909 11.9745 25.3571 10.6827C24.8477 10.4448 24.3892 10.1728 24.3383 10.1048C24.2873 10.0369 24.3552 9.54393 24.4571 9.05102C24.6099 8.42212 24.7628 8.09917 24.9495 8.06518C25.408 7.98019 27.8022 9.30597 29.0248 10.3258C31.1303 12.0595 32.9472 14.8811 33.6943 17.5496C33.9151 18.3825 34 19.2833 34 21.119C34 23.2267 33.932 23.7706 33.5924 24.8584C31.3511 32.0142 24.3892 36.2295 17.2745 34.7338Z",
                fill: n ? o : "none",
              }),
              v("path", {
                d: "M19.0575 28.071C18.4122 27.986 17.2236 27.748 16.4255 27.561C14.8124 27.1701 11.4673 25.8273 11.1447 25.4364C11.0089 25.2664 10.9749 24.8075 11.0598 23.8556L11.1787 22.4959L10.5334 22.4449L9.88818 22.3939L9.93912 21.1701C9.97308 20.4902 10.041 19.6233 10.1089 19.2154C10.2448 18.4845 10.2448 18.4845 10.924 18.5185L11.6202 18.5355L11.8239 16.7338C11.9428 15.731 12.0786 14.8641 12.1465 14.7961C12.3843 14.5582 14.354 14.1332 16.1369 13.9293C17.8349 13.7423 17.9537 13.7083 17.9537 13.3514C17.9537 12.8754 18.1745 12.7565 18.9726 12.7565L19.6348 12.7735L20.1442 11.2267L20.6536 9.69697L19.414 9.81595C18.633 9.88394 18.1236 9.86694 18.0556 9.74796C17.9537 9.59499 21.3668 2.16721 21.7064 1.82726C21.8082 1.74228 21.9271 1.74228 22.029 1.84426C22.1309 1.94624 21.9611 2.94908 21.6045 4.6148C21.2819 6.05957 21.0102 7.30036 21.0102 7.38535C21.0102 7.45334 21.5026 7.52133 22.1139 7.52133C22.9289 7.52133 23.2516 7.58932 23.3195 7.75929C23.3704 7.89527 23.1667 9.10207 22.878 10.4109C22.5723 11.7366 22.3856 12.8754 22.4535 12.9264C22.5214 12.9944 22.878 13.1134 23.2685 13.2154C23.9308 13.3684 23.9817 13.4194 23.9477 13.9123C23.8968 14.4222 23.9308 14.4392 24.9665 14.7281C26.2061 15.0681 29.0757 16.3089 29.2965 16.5808C29.3984 16.6998 29.3984 17.2267 29.3135 17.8896C29.2455 18.5015 29.1437 19.3174 29.0927 19.7083L29.0078 20.4222L29.6361 20.4732L30.2644 20.5242L30.2134 22.2919C30.1625 24.3146 30.0436 24.5865 29.2116 24.4335C28.5833 24.3146 28.5833 24.3486 28.4135 26.0313C28.3626 26.5412 28.2267 27.0681 28.1079 27.1871C27.4287 27.867 21.6554 28.4279 19.0575 28.071ZM23.761 25.3514C24.7288 25.2494 25.5778 25.1134 25.6458 25.0455C25.7646 24.9265 26.4438 19.4874 26.4438 18.5525C26.4438 18.1616 26.308 18.0766 25.1363 17.6687C22.9799 16.9378 21.7403 16.6998 19.3971 16.5808C17.5802 16.4959 14.8464 16.6998 14.6087 16.9208C14.5238 17.0228 13.8615 23.5497 13.9295 23.7537C14.0653 24.0766 17.2576 25.0285 19.0914 25.2834C21.2309 25.5724 21.6554 25.5724 23.761 25.3514Z",
                fill: n ? o : "none",
              }),
              v("path", {
                d: "M23.2176 21.8839L22.8271 21.459L22.2497 21.8159C21.7234 22.1559 21.6554 22.1559 21.2649 21.9009C20.6197 21.476 20.7215 20.9151 21.5536 20.2012C22.5724 19.3344 23.2176 19.3514 24.0836 20.3032C24.8137 21.102 24.9156 21.595 24.4402 22.0199C23.9987 22.4108 23.6761 22.3768 23.2176 21.8839Z",
                fill: n ? o : "none",
              }),
              v("path", {
                d: "M17.9536 21.357C17.4612 20.9321 17.4103 20.9321 17.1216 21.1871C16.748 21.527 16.0179 21.544 15.7632 21.2211C15.3726 20.7622 15.6273 20.0993 16.3745 19.5384C17.3593 18.8415 17.9876 18.8755 18.8196 19.6913C19.6516 20.4902 19.7365 20.8811 19.2271 21.391C18.7177 21.901 18.6159 21.901 17.9536 21.357Z",
                fill: n ? o : "none",
              })
            )
          );
        },
        ji = ({ size: e }) => {
          const t = e && "S" === e ? 16 : 40;
          return v(
            "div",
            {
              style: {
                padding: 40 === t ? "2px 4px 0 0" : "0",
                margin: 16 === t ? "0 4px 0 0" : "0",
                width: `${t}px`,
                height: `${t}px`,
                pointerEvents: "none",
              },
            },
            v(
              "svg",
              {
                viewBox: "5 5 30 30",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              v("path", {
                d: "M20 5H20C11.7157 5 5 11.7157 5 20V20C5 28.2843 11.7157 35 20 35H20C28.2843 35 35 28.2843 35 20V20C35 11.7157 28.2843 5 20 5Z",
                fill: "var(--nrb-main-lightest-color)",
              }),
              v("path", {
                d: "M20 8H20C13.3726 8 8 13.3726 8 20V20C8 26.6274 13.3726 32 20 32H20C26.6274 32 32 26.6274 32 20V20C32 13.3726 26.6274 8 20 8Z",
                fill: "var(--nrb-main-lightest-color)",
                stroke: "var(--nrb-main-color)",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              v("path", {
                d: "M15.563 17.1882H15.5761",
                stroke: "var(--nrb-main-color)",
                strokeWidth: "3",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              v("path", {
                d: "M24.064 17.1882H24.0771",
                stroke: "var(--nrb-main-color)",
                strokeWidth: "3",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              v("path", {
                d: "M17.7126 24.6873H22.2875",
                stroke: "var(--nrb-main-color)",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
              })
            )
          );
        },
        Bi = ({ width: e = 10, height: t = 10, color: n = "#BA560D" }) =>
          v(
            "svg",
            {
              width: e,
              height: t,
              viewBox: "0 0 10 10",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: { cursor: "default" },
            },
            v("path", {
              width: e,
              height: t,
              "fill-rule": "evenodd",
              "clip-rule": "evenodd",
              d: "M0 5C0 2.23858 2.23858 0 5 0C7.76142 0 10 2.23858 10 5C10 7.76142 7.76142 10 5 10C2.23858 10 0 7.76142 0 5ZM5.5 2.5C5.5 2.22386 5.27614 2 5 2C4.72386 2 4.5 2.22386 4.5 2.5V5.5C4.5 5.77614 4.72386 6 5 6C5.27614 6 5.5 5.77614 5.5 5.5V2.5ZM5.5 7.5C5.5 7.22386 5.27614 7 5 7C4.72386 7 4.5 7.22386 4.5 7.5V7.505C4.5 7.78114 4.72386 8.005 5 8.005C5.27614 8.005 5.5 7.78114 5.5 7.505V7.5Z",
              fill: n,
            })
          ),
        Pi = () => {
          const { popupBotAvatarColor: e } = me(ei);
          return v(
            "div",
            {
              style: {
                width: "40px",
                height: "40px",
                background: "var(--nrb-main-color)",
                margin: "0 0 8px auto",
                padding: "12px 0",
                border: "none",
                borderRadius: "50%",
                boxShadow:
                  "0 -2px 16px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.06), 2px 1px 32px rgba(0, 0, 0, 0.06)",
              },
            },
            v(Ii, {
              visible: !0,
              size: "L",
              fillColor: e || "var(--nrb-bot-avatar-color)",
            })
          );
        },
        Ri = (e, t) => ({
          ...e,
          text: e.text.length > t ? e.text.slice(0, t - 1) + "…" : e.text,
        });
      function Hi({ messages: e, clickHandler: t }) {
        const n = e
          .slice(0, 3)
          .map((e, n) => v($i, { message: Ri(e, 200), click: t, idx: n }));
        return v(w, null, n);
      }
      const $i = ({ message: e, click: t, idx: n }) => {
          const r = {
            __html:
              ((i = e.text),
              i
                .replace(
                  /<\/?(?!(?:br|b|i|a|u|s|strong|p)\b)[a-z](?:[^>"']|"[^"]*"|'[^']*')*>/gi,
                  ""
                )
                .trim() || ""),
          };
          var i;
          return v(
            w,
            null,
            0 === n && v(Pi, null),
            v(
              "li",
              {
                style: {
                  background: "var(--nrb-main-lightest-color)",
                  boxShadow:
                    "0 -2px 16px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.06), 2px 1px 32px rgba(0, 0, 0, 0.06)",
                  borderRadius: "16px",
                  maxWidth: "292px",
                  width: "fit-content",
                  padding: "12px 16px",
                  margin: "0 0 8px 0",
                  cursor: "pointer",
                  listStyle: "none",
                },
                onClick: t,
                className: "norby-popup",
              },
              v(
                fi,
                { color: "var(--nrb-main-darkest-color)" },
                v("span", {
                  style: {
                    wordBreak: "break-word",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  },
                  dangerouslySetInnerHTML: r,
                })
              )
            )
          );
        },
        Wi = () => {
          const e = me(ei),
            { widgetOpen: t, setWidgetStatus: n } = me(ti),
            { eventMessages: r, setChatAndAddMessage: i } = (() => {
              const [e, t] = ae([]),
                { norbyChat: n, widgetOpen: r, setWidgetStatus: i } = me(ti),
                { addMessage: o, selectedRoom: a, createRoom: s } = me(Gr),
                { setParticipantAllowed: l } = me(oi),
                c = de(),
                { sendEvent: d } = me(ci),
                u = async (e) => {
                  r ||
                    (t(e),
                    c.current && clearTimeout(c.current),
                    (c.current = setTimeout(() => t([]), 1e4))),
                    r && !a && (await h(e));
                },
                p = async (e) => {
                  i(!0), a.uid || s(e, !0), a.uid && ln(e, a.uid, o);
                },
                h = async (e) => {
                  d(Tt.PopupWasClicked),
                    a.uid || s(e, !0),
                    a.uid && ln(e, a.uid, o);
                };
              return (
                le(() => {
                  window &&
                    (n.setPopupHandler(async (...e) => {
                      l(),
                        d(Tt.PopupWasTriggered),
                        await u(
                          e.map((e) => ("string" == typeof e ? { text: e } : e))
                        );
                    }),
                    n.setMessageHandler(async (...e) => {
                      l(),
                        await p(
                          e.map((e) => ("string" == typeof e ? { text: e } : e))
                        );
                    }));
                }, [window, u, p]),
                le(() => t([]), [r]),
                { eventMessages: e, setChatAndAddMessage: h }
              );
            })();
          return t
            ? null
            : v(
                "ul",
                {
                  className:
                    "popupContainer " +
                    ("left" === e.side
                      ? "popupContainerLeft"
                      : "popupContainerRight"),
                },
                v(Hi, {
                  messages: r,
                  clickHandler: async () => {
                    await i(r), n(!0);
                  },
                }),
                v(
                  "style",
                  null,
                  "\n  .popupContainer {\n      position: absolute;\n      width: max-content;\n      top: unset;\n      bottom: 80px;\n      pointer-events: auto;\n      background-color: transparent;\n      list-style: none !important;\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-end;\n  }\n  \n  .popupContainerLeft {\n      left: 0px;\n      right: auto;\n      align-items: flex-start;\n  }\n  \n  .popupContainerRight {\n      left: auto;\n      right: 0px;\n      align-items: flex-end;\n  }\n"
                )
              );
        },
        Fi = {
          isolation: "isolate",
          position: "relative",
          margin: 0,
          padding: 0,
        },
        Ui = {
          position: "absolute",
          right: 0,
          top: 0,
          width: "24px",
          height: "24px",
          backgroundColor: "#1BE217",
          color: "var(--nrb-main-darkest-color)",
          border: "2px solid var(--nrb-main-lightest-color)",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: 11,
          lineHeight: 16,
          fontWeight: "bold",
        },
        Vi = () => {
          const { widgetOpen: e, setWidgetStatus: t } = me(ti),
            { setParticipantAllowed: n } = me(oi),
            r = () => t((e) => !e);
          return (
            le(() => {
              document.body.clientWidth < 426 &&
                (document.body.style.overflow = e ? "hidden" : "auto");
            }, [e]),
            v(
              "div",
              { className: "chatFabButtonWrapper" },
              v(
                "div",
                {
                  className: e ? "closeWidget" : "chatFabButton",
                  id: "chatbtn",
                  style: e ? { zIndex: 9999 } : { zIndex: 999 },
                  onClick: n,
                },
                e
                  ? v(
                      "svg",
                      {
                        className: "chatButton",
                        onClick: r,
                        width: "62",
                        height: "62",
                        viewBox: "31 31.5 63 64",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      v(
                        "g",
                        { filter: "url(#filter0_ddd)" },
                        v("circle", {
                          cx: "62",
                          cy: "63",
                          r: "32",
                          fill: "var(--nrb-main-lightest-color)",
                        })
                      ),
                      v("path", {
                        d: "M68.6667 56.3333L55.3333 69.6666",
                        stroke: "var(--nrb-main-darkest-color)",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                      }),
                      v("path", {
                        d: "M55.3333 56.3333L68.6667 69.6666",
                        stroke: "var(--nrb-main-darkest-color)",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                      }),
                      v(
                        "defs",
                        null,
                        v(
                          "filter",
                          {
                            id: "filter0_ddd",
                            x: "0",
                            y: "0",
                            width: "128",
                            height: "128",
                            filterUnits: "userSpaceOnUse",
                            "color-interpolation-filters": "sRGB",
                          },
                          v("feFlood", {
                            "flood-opacity": "0",
                            result: "BackgroundImageFix",
                          }),
                          v("feColorMatrix", {
                            in: "SourceAlpha",
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                          }),
                          v("feOffset", { dx: "2", dy: "1" }),
                          v("feGaussianBlur", { stdDeviation: "16" }),
                          v("feColorMatrix", {
                            type: "matrix",
                            values:
                              "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0",
                          }),
                          v("feBlend", {
                            mode: "normal",
                            in2: "BackgroundImageFix",
                            result: "effect1_dropShadow",
                          }),
                          v("feColorMatrix", {
                            in: "SourceAlpha",
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                          }),
                          v("feOffset", { dy: "4" }),
                          v("feGaussianBlur", { stdDeviation: "8" }),
                          v("feColorMatrix", {
                            type: "matrix",
                            values:
                              "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0",
                          }),
                          v("feBlend", {
                            mode: "normal",
                            in2: "effect1_dropShadow",
                            result: "effect2_dropShadow",
                          }),
                          v("feColorMatrix", {
                            in: "SourceAlpha",
                            type: "matrix",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                          }),
                          v("feOffset", { dy: "-2" }),
                          v("feGaussianBlur", { stdDeviation: "8" }),
                          v("feColorMatrix", {
                            type: "matrix",
                            values:
                              "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0",
                          }),
                          v("feBlend", {
                            mode: "normal",
                            in2: "effect2_dropShadow",
                            result: "effect3_dropShadow",
                          }),
                          v("feBlend", {
                            mode: "normal",
                            in: "SourceGraphic",
                            in2: "effect3_dropShadow",
                            result: "shape",
                          })
                        )
                      )
                    )
                  : ((e) => {
                      const { unreadCount: t } = me(Ur);
                      return v(
                        "div",
                        { style: Fi },
                        e,
                        !!t && v("div", { style: Ui }, t)
                      );
                    })(
                      v(
                        "svg",
                        {
                          className: "chatButton",
                          onClick: r,
                          width: "62",
                          height: "62",
                          viewBox: "31 31.5 63 64",
                          fill: "none",
                          xmlns: "http://www.w3.org/2000/svg",
                          style: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "end",
                            cursor: "none",
                          },
                        },
                        v(
                          "g",
                          { filter: "url(#filter0_ddd)" },
                          v("circle", {
                            cx: "62",
                            cy: "63",
                            r: "32",
                            fill: "tranceparent",
                          }),
                          v("circle", {
                            cx: "62",
                            cy: "63",
                            r: "31",
                            stroke: "none",
                            "stroke-width": "2",
                          })
                        ),
                        v("path", {
                          d: "M8.99996 2.49988L8.99996 1.99988L8.99996 2.49988ZM5.99995 2.4999L5.99995 2.9999L5.99995 2.4999ZM12.8556 11.9222L12.5051 11.5656L12.3012 11.7661L12.3705 12.0434L12.8556 11.9222ZM13.5 14.4999L13.3788 14.985C13.5492 15.0276 13.7294 14.9776 13.8536 14.8534C13.9778 14.7293 14.0277 14.549 13.9851 14.3786L13.5 14.4999ZM9.50005 13.5L9.14649 13.1464L8.52204 13.7709L9.37879 13.985L9.50005 13.5ZM9.52482 13.4752L9.87838 13.8287C10.0275 13.6796 10.067 13.453 9.97722 13.2623C9.88743 13.0715 9.68761 12.9575 9.4777 12.9774L9.52482 13.4752ZM0.5 7.99988L0 7.99988L0.5 7.99988ZM7 0V2.5H8V0H7ZM8.99996 1.99988L5.99994 1.9999L5.99995 2.9999L8.99997 2.99988L8.99996 1.99988ZM15 7.99988C15 4.68615 12.3137 1.99985 8.99996 1.99988L8.99997 2.99988C11.7614 2.99985 14 5.23844 14 7.99988H15ZM13.2061 12.2787C14.3128 11.1908 15 9.67513 15 7.99988H14C14 9.39612 13.4284 10.6579 12.5051 11.5656L13.2061 12.2787ZM13.9851 14.3786L13.3407 11.8009L12.3705 12.0434L13.015 14.6212L13.9851 14.3786ZM9.37879 13.985L13.3788 14.985L13.6213 14.0148L9.62131 13.0149L9.37879 13.985ZM9.17127 13.1216L9.14649 13.1464L9.8536 13.8535L9.87838 13.8287L9.17127 13.1216ZM9.00001 13.9999C9.19278 13.9999 9.38357 13.9908 9.57194 13.973L9.4777 12.9774C9.32061 12.9923 9.16127 12.9999 9.00001 12.9999V13.9999ZM5.99999 13.9999H9.00001V12.9999H5.99999V13.9999ZM0 7.99988C-9.17912e-06 11.3136 2.68628 13.9999 5.99999 13.9999V12.9999C3.23857 12.9999 0.999992 10.7613 1 7.99988L0 7.99988ZM5.99994 1.9999C2.68626 1.99993 9.17912e-06 4.6862 0 7.99988L1 7.99988C1.00001 5.23849 3.23855 2.99993 5.99995 2.9999L5.99994 1.9999ZM7.5 8C6.67157 8 6 7.32843 6 6.5H5C5 7.88071 6.11929 9 7.5 9V8ZM9 6.5C9 7.32843 8.32843 8 7.5 8V9C8.88071 9 10 7.88071 10 6.5H9ZM7.5 5C8.32843 5 9 5.67157 9 6.5H10C10 5.11929 8.88071 4 7.5 4V5ZM7.5 4C6.11929 4 5 5.11929 5 6.5H6C6 5.67157 6.67157 5 7.5 5V4ZM7.49999 12C8.56368 12 9.54241 11.6303 10.3127 11.0128L9.68724 10.2326C9.08795 10.713 8.32817 11 7.49999 11V12ZM4.68727 11.0128C5.45757 11.6303 6.43629 12 7.49999 12V11C6.6718 11 5.91202 10.713 5.31273 10.2326L4.68727 11.0128Z",
                          fill: "var(--nrb-main-lightest-color)",
                        }),
                        v("path", {
                          d: "",
                          fill: "var(--nrb-main-lightest-color)",
                        }),
                        v(
                          "defs",
                          null,
                          v(
                            "filter",
                            {
                              id: "filter0_ddd",
                              x: "0",
                              y: "0",
                              width: "128",
                              height: "128",
                              filterUnits: "userSpaceOnUse",
                              "color-interpolation-filters": "sRGB",
                            },
                            v("feFlood", {
                              "flood-opacity": "0",
                              result: "BackgroundImageFix",
                            }),
                            v("feColorMatrix", {
                              in: "SourceAlpha",
                              type: "matrix",
                              values:
                                "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                            }),
                            v("feOffset", { dx: "2", dy: "1" }),
                            v("feGaussianBlur", { stdDeviation: "16" }),
                            v("feColorMatrix", {
                              type: "matrix",
                              values:
                                "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0",
                            }),
                            v("feBlend", {
                              mode: "normal",
                              in2: "BackgroundImageFix",
                              result: "effect1_dropShadow",
                            }),
                            v("feColorMatrix", {
                              in: "SourceAlpha",
                              type: "matrix",
                              values:
                                "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                            }),
                            v("feOffset", { dy: "4" }),
                            v("feGaussianBlur", { stdDeviation: "8" }),
                            v("feColorMatrix", {
                              type: "matrix",
                              values:
                                "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0",
                            }),
                            v("feBlend", {
                              mode: "normal",
                              in2: "effect1_dropShadow",
                              result: "effect2_dropShadow",
                            }),
                            v("feColorMatrix", {
                              in: "SourceAlpha",
                              type: "matrix",
                              values:
                                "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                            }),
                            v("feOffset", { dy: "-2" }),
                            v("feGaussianBlur", { stdDeviation: "8" }),
                            v("feColorMatrix", {
                              type: "matrix",
                              values:
                                "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0",
                            }),
                            v("feBlend", {
                              mode: "normal",
                              in2: "effect2_dropShadow",
                              result: "effect3_dropShadow",
                            }),
                            v("feBlend", {
                              mode: "normal",
                              in: "SourceGraphic",
                              in2: "effect3_dropShadow",
                              result: "shape",
                            })
                          )
                        )
                      )
                    ),
                v(Wi, null)
              ),
              v(
                "style",
                null,
                "\n  .chatFabButton,\n  .closeWidget {\n    position: fixed;\n    width: 64px;\n    height: 64px;\n    left: var(--nrb-button-mobile-left);\n    right: var(--nrb-button-mobile-right);\n    bottom: var(--nrb-button-mobile-bottom);\n    border-radius: 50%;\n    -webkit-border-radius: 50%;\n    -moz-border-radius: 50%;\n    cursor: pointer;\n    box-shadow: 0 -2px 16px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.06), 2px 1px 32px rgba(0, 0, 0, 0.06);\n  }\n  \n  .chatFabButtonWrapper {\n    position: relative;\n  }\n  \n  .chatFabButton svg,\n  .closeWidget svg {\n    width: 64px;\n    height: 64px;\n  }\n  \n  .chatFabButton path {\n    fill: var(--nrb-opposite-color);\n  }\n  \n  .chatButton {\n    border: 0 transparent;\n    pointer-events: visiblePainted;\n    border-radius: 50%;\n    background-color: transparent;\n  }\n  \n  .chatButton:hover {\n    transform: scale(1.1);\n    transition: 0.5s;\n  }\n  \n  @media screen and (min-width: 600px) {\n    /*noinspection CssUnresolvedCustomProperty*/\n    .chatFabButton,\n    .closeWidget {\n      width: 64px;\n      height: 64px;\n      left: var(--nrb-button-left);\n      right: var(--nrb-button-right);\n      bottom: var(--nrb-button-bottom);\n      background-color: transparent;\n    }\n  }\n  \n  @media screen and (min-width: 600px) and (-webkit-device-pixel-ratio: 3) {\n    /*noinspection CssUnresolvedCustomProperty*/\n    .chatFabButton,\n    .closeWidget {\n      width: 64px;\n      height: 64px;\n      left: var(--nrb-button-left);\n      right: var(--nrb-button-right);\n      bottom: var(--nrb-button-bottom);\n      background-color: transparent;\n    }\n  }\n  \n  @media screen and (max-height: 590px) {\n    .closeWidget {\n      display: none;\n    }\n  }  \n"
              )
            )
          );
        },
        qi = () => {
          const { notificationStatus: e, notificationText: t } = me(Zr);
          return e && t
            ? v(
                "div",
                {
                  style: {
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: "75px",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.12)",
                    padding: "4px 12px",
                    fontWeight: "bold",
                    fontSize: "16px",
                    lineHeight: "20px",
                    textAlign: "center",
                    color: "var(--nrb-main-darkest-color)",
                    background: "var(--nrb-main-lightest-color)",
                    zIndex: "5",
                  },
                },
                t
              )
            : null;
        },
        Gi = ({ size: e, handler: t, children: n, enabled: r, id: i }) =>
          v(
            "div",
            {
              className: r
                ? "secondarySingleButton"
                : "secondarySingleButtonDisabled",
              style:
                "large" === e
                  ? {
                      height: "40px",
                      width: "40px",
                      pointerEvents: r ? "all" : "none",
                    }
                  : {
                      height: "28px",
                      width: "28px",
                      pointerEvents: r ? "all" : "none",
                    },
              onClick: t,
              id: i,
            },
            n,
            v(
              "style",
              null,
              "\n  .secondarySingleButton {\n    border-radius: 50%;\n    -webkit-border-radius: 50%;\n    -moz-border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: var(--nrb-main-lightest-color);\n    cursor: pointer;\n  }\n    \n  .secondarySingleButton:hover,\n  .secondarySingleButton:focus {\n    background-color: var(--nrb-main-bg-darker-color);\n  }\n    \n  .secondarySingleButtonDisabled {\n    cursor: default;\n    pointer-events: none;\n    border-radius: 50%;\n    -webkit-border-radius: 50%;\n    -moz-border-radius: 50%;\n    background-color: black;\n  }\n    \n  .secondarySingleButtonDisabled:hover,\n  .secondarySingleButtonDisabled:focus\n  {\n    background-color: var(--nrb-main-bg-darker-color);\n  }\n"
            )
          ),
        Ki = ({ variant: e, size: t, enabled: n, handler: r, id: i }) => {
          const o = {
            pencil: v(_i, {
              fill: "none",
              stroke: n
                ? "var(--nrb-main-darkest-color)"
                : "var(--nrb-text-disabled-color)",
            }),
            arrow: v(vi, {
              stroke: n
                ? "var(--nrb-main-darkest-color)"
                : "var(--nrb-text-disabled-color)",
            }),
            leftChevron: v(wi, {
              stroke: n
                ? "var(--nrb-main-darkest-color)"
                : "var(--nrb-text-disabled-color)",
            }),
            imageInput: v(xi, {
              stroke: n
                ? "var(--nrb-main-darkest-color)"
                : "var(--nrb-text-disabled-color)",
            }),
            gear: v(Ci, {
              fill: n
                ? "var(--nrb-main-darkest-color)"
                : "var(--nrb-text-disabled-color)",
            }),
          };
          return v(Gi, { size: t, handler: r, enabled: n, id: i }, o[e]);
        },
        Yi = ({ handleSend: e, enabled: t }) => {
          const n = de(null);
          return v(
            "div",
            { style: t ? {} : { opacity: "0,7", pointerEvents: "none" } },
            v("input", {
              type: "file",
              name: "image",
              accept:
                "image/png,image/jpg,image/jpeg,image/heic,.png,.jpg,.jpeg,.heic",
              onChange: (t) => e(t?.target?.files || new FileList()),
              onClick: () => {
                n.current && (n.current.value = "");
              },
              ref: n,
              style: { display: "none" },
              "data-testid": "image-input",
            }),
            v(Ki, {
              variant: "imageInput",
              size: "large",
              enabled: t,
              handler: () => n?.current?.click(),
            })
          );
        },
        Ji = ({ connected: e }) => {
          const t = de(null),
            [n, r] = ae(""),
            { imageTransferEnabled: i } = me(ei),
            { langDefinition: o } = me(ui),
            [a, s] = ae(""),
            l = de(null),
            { addMessage: c, addImageMessage: d, selectedRoom: u } = me(Gr),
            [p, h] = ae(!1),
            m = de(!1),
            g = de(!1),
            f = () => {
              a && (c(u.uid, rn(a, "text")), s("")),
                t.current &&
                  ((t.current.value = ""),
                  t.current.focus(),
                  (t.current.style.height = "40px"));
            };
          return (
            le(() => {
              const e = setTimeout(() => {
                !t.current ||
                  m.current ||
                  g.current ||
                  window.getSelection()?.toString() ||
                  (t.current.focus(), un());
              }, 200);
              return () => {
                p && clearTimeout(e), h(!1);
              };
            }, [p, u.typing, Kr]),
            ce(() => {
              if (t.current) {
                t.current.style.height = "40px";
                const e = t.current.scrollHeight;
                (t.current.style.height = `${e}px`),
                  "" === t.current.value && (t.current.style.height = "40px");
              }
            }, [n]),
            v(
              "div",
              { className: "textFieldRow" },
              v("textarea", {
                id: "norby-widget-main-input",
                "data-testid": "message-input",
                className: "textField",
                style: { boxShadow: "none" },
                ref: t,
                placeholder: o.app.chat.type,
                onKeyDown: (t) => {
                  const n = t.which || t.keyCode;
                  e && 13 === n && !t.shiftKey && (t.preventDefault(), f());
                },
                onInput: (e) => {
                  var t;
                  r(e.target.value),
                    (t = e.target.value || ""),
                    u.conn?.emit("typing", { author: "client" }),
                    l.current && (clearTimeout(l.current), (l.current = null)),
                    setTimeout(
                      () => u.conn?.emit("typingEnded", { author: "client" }),
                      500
                    ),
                    s(t);
                },
                disabled: !e || u?.typing || Kr,
                onFocus: () => {
                  h(!0);
                },
                onBlur: () => (
                  h(!1), void (window.getSelection()?.toString() && h(!0))
                ),
                autoComplete: "off",
                maxLength: 2e3,
              }),
              v(
                "div",
                { style: { display: "flex", alignItems: "center" } },
                i &&
                  v(Yi, {
                    handleSend: async (e) => {
                      e.length && (await d(e[0], u.uid));
                    },
                    enabled: e && !u?.typing && !Kr,
                  }),
                v(
                  "div",
                  { style: { paddingInline: "8px 16px" } },
                  v(ki, {
                    isVisible: !0,
                    variant: "arrow",
                    size: "large",
                    enabled: e && !u?.typing && !Kr,
                    id: "send-button",
                    handler: f,
                  })
                )
              ),
              v(
                "style",
                null,
                "\n    .textFieldRow {\n      max-height: 40% !important;\n      padding-top: 16px;\n      padding-bottom: 16px;\n      width: 100%;\n      display: flex;\n      justify-content: flex-start;\n      align-items: flex-end;\n      background-color: rgb(47, 47, 47);\n      border-top: 2px solid black;border-radius: 50px;\n      margin-bottom: 24px;\n    }\n    \n    .textField {\n      max-height: 100% !important;\n      min-height: 40px;\n      width: inherit;\n      display: block;\n      padding: 10px 16px;\n      flex: 1;\n      font-family: Inter sans-serif;\n      font-style: normal;\n      font-weight: normal;\n      font-size: 16px;\n      line-height: 20px;\n      border-radius: 0;\n      border: 0 solid transparent; margin-left:20px;\n      outline: none;\n      resize: none;\n      color: white;\n      background-color: rgb(47, 47, 47);\n    }\n    \n    .textField,\n    .textField:focus,\n    .textField:focus-visible {\n      border: none;\n      outline: none;\n      -webkit-appearance: none;\n    }\n    \n    .textField::placeholder {\n      color: white;\n      font-size: 16px;\n      line-height: 20px;\n    }\n    \n    .textField:disabled::placeholder {\n      color: white;\n    }\n    \n    .textField:disabled {\n      color: white;\n      background-color: rgb(47, 47, 47);\n    }\n    \n    @media screen and (max-width: 325px) {\n      .textField::placeholder {\n        font-size: 14px;\n      }\n    }\n  "
              )
            )
          );
        },
        Zi = ({ size: e, url: t, margin: n, visible: r }) => {
          const i = `${e}px`;
          return v(
            "div",
            r
              ? {
                  style: {
                    width: i,
                    height: i,
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    flex: `0 0 ${i}`,
                    borderRadius: "50%",
                    backgroundImage: `url(${t})`,
                    backgroundPosition: "center",
                    backgroundClip: "no-clip",
                    backgroundSize: "cover",
                    marginRight: `${n || 0}px`,
                    pointerEvents: "none",
                  },
                }
              : { style: { width: i, height: i } }
          );
        },
        Qi = (e) => ("0" + e).slice(-2),
        Xi = (e) =>
          v(
            "div",
            { className: "time", "data-testid": "bot-message-time" },
            v(
              mi,
              { color: "white" },
              ((e) => {
                const t = new Date(e);
                return `${Qi(t.getHours())}:${Qi(t.getMinutes())}`;
              })(e.dateTime)
            ),
            v(
              "style",
              null,
              "\n    .time {\n         display: none;   align-self: flex-end;\n      margin: end 8px auto 8px;\n      z-index: 9;\n    }\n"
            )
          ),
        eo =
          /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/gim,
        to =
          /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gim,
        no = (e, t) =>
          e
            .replace(
              eo,
              (e) =>
                `<a style="font-weight: 700; color: ${t}; text-decoration: underline"\n                 href="${io(
                  e
                )}"\n                 target="_blank">${e}</a>`
            )
            .replace(
              to,
              (e) =>
                `<a style="font-weight: 700; color: ${t}; text-decoration: underline"\n                 href="mailto:${e}"\n                 target="_blank">${e}</a>`
            ),
        ro = ({ text: e, color: t }) => {
          const n = e.replace(/<(?!\/?p(?=>|\s.*>))\/?.*?>/g, "");
          return v("span", {
            "data-testid": "withUrls",
            dangerouslySetInnerHTML: { __html: no(n, t) },
          });
        },
        io = (e) => (e.includes("https://") ? e : "https://" + e),
        oo = ({ children: e }) =>
          v(
            "div",
            { className: "bot_icon" },
            e,
            v(
              "style",
              null,
              "\n  .bot_icon {\n    padding-left: 8px;\n    padding-right: 8px;\n    padding-top: 2px;\n  }\n"
            )
          ),
        ao = ({ type: e }) => {
          let t = "var(--nrb-main-color)";
          return (
            "dark" === e && (t = "var(--nrb-main-dark)"),
            "light" === e && (t = "var(--nrb-main-lighter)"),
            v(
              "svg",
              {
                width: "34",
                height: "34",
                viewBox: "0 0 34 34",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                class: "spinner_rotate",
              },
              v("path", {
                d: "M33 17C33 25.8366 25.8366 33 17 33M1 17C1 8.16344 8.16344 1 17 1",
                stroke: t,
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
              })
            )
          );
        },
        so =
          "\n    .image_container {\n      width: 192px;\n      height: 118px;\n      border-radius: 16px;\n    }\n    \n    .image_inprogress {\n      height: 100%;\n      width: 100%;\n      border-radius: 16px;\n      background-color: var(--nrb-main-light);\n      display: flex;\n      justify-content: center;\n      align-items: center;\n    }\n",
        lo = () =>
          v(
            "div",
            { className: "image_container" },
            v(
              "div",
              { className: "image_inprogress" },
              v(ao, { type: "dark" })
            ),
            v("style", null, so)
          ),
        co = ({ msg: e }) =>
          v(
            "div",
            { className: "image_container" },
            v("a", {
              href: e.image?.path,
              target: "_blank",
              className: "image_link",
              style: { backgroundImage: `url(${e.image?.preview_path})` },
            }),
            v(
              "style",
              null,
              "\n    .image_container {\n      width: 192px;\n      height: 118px;\n      border-radius: 16px;\n    }\n    \n    .image_link {\n      width: 192px;\n      height: 118px;\n      display: block;\n      background-repeat: no-repeat;\n      background-position: center;\n      background-size: cover;\n      border-radius: 16px;\n    }\n"
            )
          ),
        uo = () =>
          v(
            "div",
            null,
            v(
              "div",
              { className: "image_container" },
              v(
                "div",
                { className: "image_inprogress" },
                v(Bi, { width: 20, height: 20, color: "var(--nrb-main-color)" })
              )
            ),
            v("style", null, so)
          ),
        po = ({ fromClient: e, children: t }) =>
          v(
            "div",
            {
              className: e
                ? "client_message_container"
                : "bot_message_container",
              style: e ? { marginLeft: "auto" } : { marginRight: "auto" },
            },
            t,
            v(
              "style",
              null,
              "\n    .bot_message_container_noflex {\n      padding: 4px 6px 4px 0;\n    }\n    \n    .client_message_container {\n      padding: 4px 0;\n      display: flex;\n      justify-content: flex-end;\n    }\n"
            )
          ),
        ho = ({ msg: e }) =>
          "failed" === e.confirmed
            ? v(uo, null)
            : "inprogress" === e.confirmed
            ? v(lo, null)
            : e.image?.path && e.image?.preview_path
            ? "confirmed" === e.confirmed
              ? v(co, { msg: e })
              : v(uo, null)
            : v(lo, null),
        mo = ({ msg: e }) =>
          v(
            po,
            { fromClient: "client" === e.author },
            "client" === e.author &&
              v(Xi, { dateTime: e.full_date || new Date().toISOString() }),
            v(ho, { msg: e }),
            "client" === e.author && v("div", { style: "width: 16px" }),
            "client" !== e.author &&
              v(Xi, { dateTime: e.full_date || new Date().toISOString() })
          ),
        go = ({ children: e }) =>
          v(
            "div",
            { className: "bot_message_container" },
            e,
            v(
              "style",
              null,
              "\n  .bot_message_container {\n    padding: 4px 0;\n    display: flex;\n    align-items: flex-start;\n  }\n"
            )
          ),
        fo = ({ message: e, hasAvatar: t, isTypingColor: n }) => {
          if ("image" === e.type)
            return v(
              go,
              null,
              v(
                oo,
                null,
                v(Zi, { size: 40, url: e.agent?.avatar.path || "", visible: t })
              ),
              v(mo, { msg: e })
            );
          const r = e.message || "";
          return v(
            go,
            null,
            v(
              oo,
              null,
              v(Zi, { size: 40, url: e.agent?.avatar.path || "", visible: t })
            ),
            v(
              "div",
              { className: "agentMessage" },
              v(
                fi,
                { color: "var(--nrb-main-darkest-color)" },
                v(
                  "span",
                  { style: n },
                  v(ro, { text: r, color: "var(--nrb-main-darkest-color)" })
                )
              ),
              v(
                "style",
                null,
                "\n    .agentMessage {\n      border-radius: 16px;\n      padding: 12px 16px;\n      border: 1px solid var(--nrb-main-bg-darker-color);\n      background-color: var(--nrb-main-lightest-color);\n      word-wrap: break-word;\n      white-space: pre-line;\n      max-width: 380px;\n    }\n    \n    @media screen and (max-width: 440px) {\n      .agentMessage {\n        max-width: 260px !important;\n      }\n    }\n    \n    @media screen and (max-width: 360px) {\n      .agentMessage {\n        max-width: 220px !important;\n      }\n    }\n  "
              )
            ),
            v(Xi, { dateTime: e.full_date || e.time })
          );
        },
        bo = ({ children: e }) =>
          v(
            "span",
            {
              style: {
                fontFamily: "Inter sans-serif",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "16px",
                lineHeight: "20px",
              },
            },
            e
          ),
        yo = ({ type: e, caption: t, click: n, disabled: r }) =>
          "square" === e
            ? r
              ? v(
                  "button",
                  { className: "squareDisabled", onClick: n },
                  v(bo, null, t),
                  v(
                    "style",
                    null,
                    "\n    .squareDisabled {\n      border-style: none;\n      color: var(--nrb-text-disabled-color);\n      background-color: var(--nrb-main-light);\n      font-style: normal;\n      font-weight: bold;\n      font-size: 16px;\n      line-height: 20px;\n      text-align: center;\n      width: 100%;\n      height: 44px;\n      margin: 0 auto;\n      pointer-events: none;\n    }\n    \n    .squareDisabled:hover {\n      background-color: var(--nrb-main-light);\n    }\n  "
                  )
                )
              : v(
                  "button",
                  { className: "square", onClick: n },
                  v(bo, null, t || ""),
                  v(
                    "style",
                    null,
                    "\n    .square {\n      display: block;\n      border-style: none;\n      border-radius: 4px;\n      background-color: var(--nrb-main-color);\n      color: var(--nrb-opposite-color);\n      font-style: normal;\n      font-weight: bold;\n      font-size: 16px;\n      line-height: 20px;\n      text-align: center;\n      width: 100%;\n      height: 44px;\n      cursor: pointer;\n      margin: 0 auto;\n    }\n    \n    .square:hover {\n      background-color: var(--nrb-main-dark);\n    }\n  "
                  )
                )
            : null,
        vo = ({
          type: e,
          name: t,
          inputHandler: n,
          value: r,
          error: i,
          placeholder: o,
          label: a,
          disabled: s,
        }) => {
          const [l, c] = ae(!1),
            [d, u] = ae(r),
            p = `${e}-${t}`,
            h = {
              padding: "12px 16px",
              fontStyle: "normal",
              fontWeight: "normal",
              fontSize: "16px",
              lineHeight: "20px",
              display: "block",
              width: "100%",
              height: "40px",
              boxSizing: "border-box",
              borderRadius: "4px",
              border: "1px solid var(--nrb-main-bg-darker-color)",
              backgroundColor: "var(--nrb-main-lightest-color)",
            },
            m = { ...h, color: "var(--nrb-main-darkest-color)" },
            g = { ...h, color: "var(--nrb-text-disabled-color)" },
            f = { visibility: l ? "visible" : "hidden" };
          return v(
            "div",
            { className: "textInputContainer" },
            !!a &&
              v(
                "label",
                {
                  htmlFor: p,
                  className: s ? "textLabelDisabled" : "textLabel",
                },
                a
              ),
            v("input", {
              className: "textInput",
              id: p,
              type: e,
              name: t,
              value: d,
              placeholder: o,
              disabled: !!s,
              onInput: (e) => {
                u(e.target.value),
                  c(!e.target.validity.valid),
                  e.target.validity.valid && n(e);
              },
              autoComplete: "off",
              style: s ? g : m,
            }),
            v("div", { style: f, className: "error" }, i),
            v(
              "style",
              null,
              "\n    .textInputContainer {\n      width: 100%;\n    }\n    \n    .textInput {\n      min-width: 150px;\n    }\n    \n    @media screen and (min-width: 600px) {\n      .textInput {\n        max-width: unset;\n        width: 100%;\n        outline-color: transparent;\n      }\n    }\n    \n    @media screen and (min-width: 600px) and (-webkit-device-pixel-ratio: 3)  {\n      .textInput {\n        max-width: unset;\n        width: 100%;\n        outline-color: transparent;\n      }\n    }\n    \n    .textInputDisabled {\n      background: var(--nrb-main-lightest-color);\n      border: 1px solid var(--nrb-main-bg-darker-color);\n      border-radius: 4px;\n    }\n    \n    .textInput:focus,\n    .textInput:focus-visible {\n      outline-color: var(--nrb-main-bg-darker-color);\n    }\n    \n    .textInput::placeholder,\n    .textInputDisabled::placeholder {\n      color: var(--nrb-main-lighter);\n    }\n    \n    .textLabel {\n      font-style: normal;\n      font-weight: normal;\n      font-size: 16px;\n      line-height: 20px;\n      color: var(--nrb-main-darkest-color);\n      margin-bottom: 4px;\n    }\n    \n    .textLabelDisabled {\n      font-style: normal;\n      font-weight: normal;\n      font-size: 16px;\n      line-height: 20px;\n      margin-bottom: 4px;\n      color: var(--nrb-text-disabled-color);\n    }\n    \n    .error {\n      font-style: normal;\n      font-weight: normal;\n      font-size: 11px;\n      line-height: 16px;\n      /*noinspection CssNonIntegerLengthInPixels*/\n      letter-spacing: 0.1px;\n      color: #BA560D;\n      margin-top: 4px;\n      padding-left: 6px;\n      height: 18px;\n    }\n    \n    @media screen and (max-width: 360px) {\n      .textInput {\n        min-width: auto;\n      }\n    }\n  "
            )
          );
        };
      function _o() {
        return (
          (_o = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          _o.apply(null, arguments)
        );
      }
      const wo = ({ description: e, disabled: t }) =>
          e
            ? v(
                "div",
                {
                  className: t
                    ? "disabledFormMessageContainer"
                    : "formMessageContainer",
                },
                e
              )
            : null,
        xo = ({ inputs: e, handler: t }) => {
          const { participant: n } = me(oi);
          return v(
            w,
            null,
            e.map((e) =>
              v(
                vo,
                _o({}, e, {
                  value: e.value || "",
                  inputHandler: t,
                  error: "",
                  disabled: !!n?.email,
                })
              )
            )
          );
        },
        Co = ({ children: e }) =>
          v(
            "div",
            {
              style: {
                display: "flex",
                justifyContent: "left",
                alignItems: "flex-start",
                gap: "8px",
              },
            },
            e
          ),
        ko = ({ inputs: e, submitHandler: t, description: n }) => {
          const [r, i] = ae({}),
            [o, a] = ae(!0),
            { participant: s } = me(oi),
            l = (e) => {
              e.preventDefault(),
                e && e.hasOwnProperty("preventDefault") && e.preventDefault(),
                t(r),
                a(!1),
                setTimeout(() => a(!0), 1e3);
            },
            c = (e) => {
              e.target.name &&
                e.target.value &&
                i((t) => {
                  const n = t || {};
                  return (n[e.target.name] = e.target.value), n;
                });
            };
          let d;
          return e.length
            ? ((d =
                1 === e.length
                  ? v(
                      Co,
                      null,
                      v(xo, { inputs: e, handler: c }),
                      v(ki, {
                        isVisible: !0,
                        variant: "arrow",
                        size: "large",
                        enabled: o && !s?.email,
                        id: "send-button",
                        handler: l,
                      })
                    )
                  : v(
                      "div",
                      { className: "formBody" },
                      v(
                        "div",
                        { className: "inputsContainer" },
                        v(xo, { inputs: e, handler: c })
                      ),
                      v(ki, {
                        isVisible: !0,
                        variant: "arrow",
                        size: "large",
                        enabled: o,
                        handler: l,
                      })
                    )),
              v(
                "form",
                { "aria-label": "form", className: "form", onSubmit: l },
                v(wo, { description: n, disabled: !!s?.email }),
                d,
                v(
                  "style",
                  null,
                  "\n  .form {\n    width: 100%;\n    max-width: 348px;\n    padding: 12px 16px;\n    background: var(--nrb-main-lightest-color);\n    border: 1px solid var(--nrb-main-bg-darker-color);\n    box-sizing: border-box;\n    border-radius: 16px;\n  }\n  \n  .formMessageContainer,\n  .disabledFormMessageContainer {\n    font-family: Inter, sans-serif;\n    font-style: normal;\n    font-weight: normal;\n    font-size: 16px;\n    line-height: 20px;\n    margin-bottom: 12px;\n  }\n  \n  .formMessageContainer {\n    color: var(--nrb-main-darkest-color);\n  }\n  \n  .disabledFormMessageContainer {\n    color: var(--nrb-text-disabled-color);\n  }\n  \n  .formBody {\n    display: flex;\n    flex-direction: row;\n  }\n"
                )
              ))
            : null;
        },
        Eo = ({ text: e, createChat: t }) => {
          const { langDefinition: n } = me(ui),
            { sendEvent: r } = me(ci);
          return v(yo, {
            type: "square",
            caption: e ? e.name : n.app.chatRooms.newChat,
            click: function () {
              t(), r(Tt.ClickStartNewChat);
            },
          });
        },
        So = () =>
          v(
            "svg",
            {
              "data-testid": "link-icon",
              width: "18",
              height: "18",
              viewBox: "0 0 18 18",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: { display: "block" },
            },
            v("path", {
              d: "M14 9.83333V14.8333C14 15.2754 13.8244 15.6993 13.5118 16.0118C13.1993 16.3244 12.7754 16.5 12.3333 16.5H3.16667C2.72464 16.5 2.30072 16.3244 1.98816 16.0118C1.67559 15.6993 1.5 15.2754 1.5 14.8333V5.66667C1.5 5.22464 1.67559 4.80072 1.98816 4.48816C2.30072 4.17559 2.72464 4 3.16667 4H8.16667M11.5 1.5H16.5M16.5 1.5V6.5M16.5 1.5L7.33333 10.6667",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          ),
        Lo = ({ title: e, click: t, url: n }) =>
          e
            ? v(
                "button",
                {
                  className: "button",
                  onClick: () => {
                    n ? window.open(n, "_blank") : t(e);
                  },
                },
                v(bo, null, e),
                n && v(So, null),
                v(
                  "style",
                  null,
                  "\n  .button {\n    border-radius: 4px;\n    padding: 12px 16px;\n    cursor: pointer;\n    margin-bottom: 8px;\n    display: flex;\n    gap: 12px;\n    color: var(--nrb-opposite-color);\n    stroke: var(--nrb-opposite-color);\n    background: var(--nrb-main-color);\n    border: 1px solid var(--nrb-main-light);\n  }\n  \n  .button:hover {\n    background: var(--nrb-main-dark);\n  }\n"
                )
              )
            : null,
        To = ({ answers: e, messageId: t }) => {
          const { handleSend: n } = (() => {
            const {
                addMessage: e,
                selectedRoom: t,
                clearPredefinedAnswers: n,
              } = me(Gr),
              { serviceBaseUrl: r } = me(ei);
            return {
              handleSend: async (i, o) => {
                if (i && t) {
                  const { uid: a } = t;
                  e(a, rn(i));
                  try {
                    await (async (e) => {
                      await Zt(e, {});
                    })(`${r}/api/public/chat/${a}/message/${o}/hide`).then(
                      () => {
                        n(t);
                      }
                    );
                  } catch (e) {
                    console.log(
                      "Error hiding message in api, it will appear on reload."
                    );
                  }
                }
              },
            };
          })();
          if (!e || !e.messages || !e.messages.length) return null;
          const r = (t) => {
            if (e.urlsForAnswersByIndex && e.urlsForAnswersByIndex[t])
              return e.urlsForAnswersByIndex[t] || void 0;
          };
          return v(
            "div",
            {
              className: "container-predefined-answers",
              "data-testid": "predefined-answers",
            },
            e.messages.map((e, i) => {
              const o = {
                title: e,
                click: async () => await n(e, t),
                url: r(i),
              };
              return v(Lo, o);
            }),
            v(
              "style",
              null,
              "\n  .container-predefined-answers * {\n    box-sizing: border-box;\n  }\n  \n  .container-predefined-answers:last-child {\n    margin-bottom: 0;\n  }\n  \n  .container-predefined-answers {\n    width: 100%;\n    padding: 16px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n  }\n"
            )
          );
        },
        No = () =>
          v(
            "svg",
            {
              width: "48",
              height: "48",
              viewBox: "0 0 24 24",
              style: { pointerEvents: "none" },
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            v("path", {
              d: "M7.75 19.5H20.5M7.75 19.5H3.5V4.5H20.5V19.5M7.75 19.5C7.90741 16.6875 12.3778 10.7063 15.7778 11.4563C19.1778 12.2063 20.5 16.875 20.5 19.5M9.875 9.14587C9.875 10.0088 9.17545 10.7084 8.3125 10.7084C7.44955 10.7084 6.75 10.0088 6.75 9.14587C6.75 8.28293 7.44955 7.58337 8.3125 7.58337C9.17545 7.58337 9.875 8.28293 9.875 9.14587Z",
              stroke: "var(--nrb-main-bg-darkest-color)",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          ),
        Mo = (e) => e || "€",
        Do = ({ oldPrice: e, price: t, currency: n, positionStyle: r }) =>
          t
            ? v(
                "caption",
                { className: r },
                e && v("span", { className: "oldPrice" }, Mo(n), e),
                Mo(n),
                t
              )
            : null,
        Ao = () => v("div", { className: "productImageStub" }, v(No, null)),
        Oo = ({ img: e, price: t, oldPrice: n, currency: r }) =>
          e
            ? v(
                "figure",
                null,
                v("img", {
                  style: { display: "block", width: "100%" },
                  src: e,
                  alt: "",
                }),
                v(Do, {
                  price: t,
                  oldPrice: n,
                  currency: r,
                  positionStyle: "priceAbsolute",
                })
              )
            : v(Ao, null),
        zo = ({ children: e }) =>
          v(
            "article",
            { className: "product", "data-testid": "productCard" },
            v("div", { className: "productContainer" }, e),
            v(
              "style",
              null,
              "\n    .product {\n      flex: 1 0 100%;\n      box-sizing: border-box;\n      background-color: var(--nrb-main-lightest-color);\n      border-radius: 16px;\n      max-width: 300px;\n    }\n    \n    .productContainer {\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n      justify-content: start;\n      align-items: center;\n      border: 2px solid var(--nrb-main-bg-darker-color);\n      border-radius: 16px;\n    }\n    \n    .productContainer button {\n      margin-top: auto;\n    }\n    \n    .product figure {\n      position: relative;\n      overflow: hidden;\n      border-radius: 16px 16px 0 0;\n      height: 168px;\n      display: flex;\n      align-items: center;\n      width: 100%;\n    }\n  \n    .productImageStub {\n      position: relative;\n      overflow: hidden;\n      border-radius: 14px 14px 0 0;\n      height: 168px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--nrb-main-bg-darker-color);\n      width: 100%;\n    }\n  \n    .priceNormal {\n      padding: 0 4px;\n      font-size: 17px;\n      line-height: 28px;\n      font-weight: 600;\n      color: var(--nrb-main-darkest-color);\n      /*noinspection CssInvalidFunction*/\n      background-color: var(--nrb-main-bg-darkest-color);\n      opacity: 0.6;\n      border-radius: 4px;\n    }\n    \n    .priceAbsolute {\n      position: absolute;\n      bottom: 8px;\n      right: 16px;\n      padding: 0 4px;\n      font-size: 17px;\n      line-height: 28px;\n      font-weight: 600;\n      color: var(--nrb-main-darkest-color);\n      /*noinspection CssInvalidFunction*/\n      background-color: var(--nrb-main-bg-darkest-color);\n      opacity: 0.6;\n      border-radius: 4px;\n    }\n    \n    .oldPrice {\n      font-size: 11px;\n      text-decoration: line-through;\n      margin-right: 4px;\n    }\n    \n    @media screen and (max-width: 440px) {\n      .product {\n        max-width: 260px;\n      }\n    }\n    \n    @media screen and (max-width: 380px) {\n      .product {\n        max-width: 220px;\n      }\n    }\n    \n    @media screen and (max-width: 360px) {\n      .product {\n        max-width: 196px;\n      }\n      \n      .priceAbsolute {\n        bottom: 16px;\n      }\n    }\n  "
            )
          ),
        Io = ({ name: e, click: t }) =>
          v(
            "div",
            { style: { width: "100%", padding: "0 16px 16px 16px" } },
            v(yo, {
              type: "square",
              caption: e || "Ok",
              click: t,
              disabled: !1,
            })
          ),
        jo = ({ title: e, description: t }) =>
          e || t
            ? v(
                "section",
                { className: "productContent" },
                e && v("h1", { style: { margin: "4px 0" } }, e),
                t &&
                  v(
                    "p",
                    {
                      className: "productDescription",
                      style: { marginBottom: "12px" },
                    },
                    t
                  ),
                v(
                  "style",
                  null,
                  "\n    .productContent {\n      padding: 8px 16px 0 16px;\n      margin-bottom: auto;\n      width: 100%;\n    }\n    \n    .productContent h1 {\n      font-size: 17px;\n      font-weight: 600;\n      line-height: 20px;\n      height: 20px;\n      color: var(--nrb-main-darkest-color);\n      text-overflow: ellipsis;\n      overflow: hidden;\n      white-space: nowrap;\n      width: 100%;\n    }\n    \n    /*noinspection CssUnknownProperty*/\n    .productDescription {\n      color: var(--nrb-main-lighter);\n      text-overflow: ellipsis;\n      overflow: hidden;\n      -webkit-box-orient: vertical;\n      -webkit-line-clamp: 2;\n      line-height: 20px;\n      height: 40px;\n      text-align: left;\n    }\n  "
                )
              )
            : null,
        Bo = ({ product: e, renderWithImage: t }) =>
          v(
            zo,
            null,
            t
              ? v(Oo, { img: e.img, oldPrice: e.old_price, price: e.price })
              : v(Do, { oldPrice: e.old_price, price: e.price }),
            v(jo, { title: e.title, description: e.description }),
            e.button &&
              v(Io, {
                click: () => {
                  e.button?.link &&
                    window &&
                    window.open(e.button.link, "_blank")?.focus();
                },
                name: e.button.name,
              })
          ),
        Po = () =>
          v(
            "svg",
            {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            v("path", {
              d: "M10 12.3999L14.5 17.7999",
              stroke: "var(--nrb-main-darkest-color)",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            v("path", {
              d: "M10 12.3999L14.5 7",
              stroke: "var(--nrb-main-darkest-color)",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          ),
        Ro = () =>
          v(
            "svg",
            {
              width: "24",
              height: "24",
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
            },
            v("path", {
              d: "M14.5 12.4L10 17.8",
              stroke: "var(--nrb-main-darkest-color)",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            v("path", {
              d: "M14.5 12.3999L10 7",
              stroke: "var(--nrb-main-darkest-color)",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          ),
        Ho = ({ direction: e }) => v("left" === e ? Po : Ro, null),
        $o = ({ direction: e, handleClick: t }) =>
          v(
            "div",
            {
              onClick: () => t(e),
              className: "scrollButton",
              style: "left" === e ? { left: "8px" } : { right: "8px" },
            },
            v(Ho, { direction: e }),
            v(
              "style",
              null,
              "\n    .scrollButton {\n      position: absolute;\n      margin: auto;\n      background: var(--nrb-main-lightest-color) none repeat scroll 0 0;\n      border-radius: 40px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      box-shadow: rgba(0, 0, 0, 0.16) 1px 1px 4px;\n      height: 40px;\n      width: 40px;\n      top: 50%;\n    }\n    \n    .scrollButton:hover {\n      background-color: var(--nrb-main-bg-darker-color);\n    }\n"
            )
          ),
        Wo = ({ position: e, isFlipped: t }) =>
          v("div", {
            style: {
              width: "10px",
              height: "100%",
              position: "absolute",
              top: "0",
              left: "left" === e ? "-2px" : "auto",
              right: "right" === e ? "-1px" : "auto",
              transform: t ? "scaleX(-1)" : "none",
              background: "var(--nrb-main-gradient)",
            },
          }),
        Fo = ({ products: e, time: t }) => {
          const n = de(null),
            {
              scrollListTo: r,
              leftVisible: i,
              rightVisible: o,
            } = ((e) => {
              const [t, n] = ae(0),
                [r, i] = ae(!1),
                [o, a] = ae(!0),
                s = (e, t, n) => {
                  if (n <= 0) return;
                  const r = ((t - e.current.scrollLeft) / n) * 10;
                  setTimeout(() => {
                    (e.current.scrollLeft = e.current.scrollLeft + r),
                      e.current.scrollLeft !== t && s(e, t, n - 10);
                  }, 10);
                },
                l = () => {
                  i(e.current.scrollLeft > 0),
                    a(
                      e.current.scrollLeft >= 0 &&
                        e.current.scrollLeft + 1 <
                          e.current.scrollWidth - e.current.clientWidth
                    );
                };
              return (
                le(
                  () => (
                    n(0),
                    e.current &&
                      e.current.scrollTo &&
                      (e?.current?.scrollTo({ left: t, behavior: "smooth" }),
                      e.current.addEventListener("scroll", l)),
                    () => {
                      e.current.removeEventListener("scroll", l);
                    }
                  ),
                  [e?.current]
                ),
                {
                  scrollListTo: (r) => {
                    const i = "left" === r ? -276 : 276;
                    if (e.current && e.current.scrollTo) {
                      const r = t + i;
                      n(r), s(e, r, 350);
                    }
                  },
                  leftVisible: r,
                  rightVisible: o,
                  scroll: e?.current,
                }
              );
            })(n),
            a = (e) => r(e),
            s = e.some((e) => !!e.img);
          return v(
            "div",
            { className: "productListAndButtons" },
            v(
              "div",
              { className: e.length > 1 ? "scrollable" : "unscroll", ref: n },
              v(
                "div",
                { className: "productList" },
                e.map((e) => v(Bo, { product: e, renderWithImage: s })),
                v(Xi, { dateTime: t })
              )
            ),
            e.length > 1 && i && v(Wo, { position: "left", isFlipped: !1 }),
            e.length > 1 && i && v($o, { direction: "left", handleClick: a }),
            e.length > 1 && v(Wo, { position: "right", isFlipped: !0 }),
            e.length > 1 && o && v($o, { direction: "right", handleClick: a }),
            v(
              "style",
              null,
              "\n    .productListAndButtons {\n      position: relative;\n      display: flex;\n    }\n    \n    .scrollable {\n      overflow-x: auto;\n      -webkit-overflow-scrolling: touch;\n      scrollbar-width: none;\n      padding: 0 8px;\n    }\n    \n    .scrollable:first-child {\n      padding: 0;\n    }\n    \n    .unscroll {\n      overflow-x: visible;\n      padding: 0;\n    }\n    \n    .scrollable::-webkit-scrollbar {\n      display: none;\n    }\n    \n    .productList {\n      display: flex;\n      flex-direction: row;\n      flex-wrap: nowrap;\n      gap: 5px;\n    }\n  "
            )
          );
        },
        Uo = ({ children: e, showIcon: t }) =>
          v(
            "div",
            { className: "bot_message_container bot-message" },
            v(
              "div",
              { className: "bot_icon" },
              v(Ii, { visible: t, fillColor: "var(--nrb-bot-avatar-color)" })
            ),
            e,
            v(
              "style",
              null,
              "\n    .bot_message_container {\n      padding: 4px 0;\n      display: flex;\n      align-items: flex-start;\n    }\n    \n    .bot_icon {\n      margin-right: 0px; display:none;\n    }\n"
            )
          ),
        Vo = ({ children: e, showIcon: t }) =>
          v(
            "div",
            { className: "bot_message_container_noflex" },
            v(
              "div",
              { className: "bot_icon", style: { float: "left" } },
              v(Ii, { visible: t, fillColor: "var(--nrb-bot-avatar-color)" })
            ),
            e,
            v(
              "style",
              null,
              "\n    .bot_message_container_noflex {\n      padding: 4px 6px 4px 0;\n    }\n    \n    .bot_icon {\n      margin-right: 0px;\n    }\n"
            )
          );
      function qo() {
        return (
          (qo = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          qo.apply(null, arguments)
        );
      }
      const Go =
          "\n  .botMessage,\n  .botMessageWithButton {\n    border-radius: 16px;margin-left:10px;\n    padding: 12px 16px;\n    word-wrap: break-word;\n    max-width: 100%;\n    margin-right: 16px;\n  }\n  \n  .botMessageWithButton {\n    width: 100%;\n  }\n  \n  .botMessage a,\n  .botMessage:hover,\n  .botMessage:visited {\n    font-weight: 700;\n    color: var(--nrb-main-darkest-color);\n  }\n  \n  ol, ul, dl {\n    margin-left: 8px !important;\n    padding-left: 8px !important;\n  }\n  \n  span {\n    box-sizing: border-box;\n  }\n  \n  @media screen and (min-width: 600px) {\n    .botMessage,\n    .botMessageWithButton {\n      max-width: 90% !important;\n    }\n  }\n  \n  @media screen and (max-width: 440px) {\n    .botMessage {\n      max-width: 260px !important;\n    }\n  }\n    \n  @media screen and (max-width: 360px) {\n    .botMessage {\n      max-width: 220px !important;\n    }\n  }\n",
        Ko = {
          backgroundColor: "black",
          border: "2px solid var(--nrb-main-bg-darker-color)",
        },
        Yo = ({ message: e, hideDate: t, isTypingColor: n }) => {
          const { createRoom: r } = me(Gr);
          switch (e.type) {
            case "message":
              if (!e.message) return null;
              const i = JSON.parse(e.message);
              return v(Jo, {
                showIcon: !1,
                isTypingColor: n,
                text: i.message || "",
                date: e.full_date || e.time,
                hideDate: t,
              });
            case "form":
              return e.message
                ? v(Zo, {
                    formDescription: JSON.parse(e.message),
                    messageDate: e.full_date || e.time,
                  })
                : null;
            case "product":
              if (!e.message) return null;
              try {
                let t = JSON.parse(e.message);
                return (
                  t.hasOwnProperty("product") && (t = t.product),
                  v(
                    Uo,
                    { showIcon: !1 },
                    v(Bo, { product: t, renderWithImage: !!t.img }),
                    v(Xi, { dateTime: e.full_date || e.time })
                  )
                );
              } catch (e) {
                return console.log("Error parsing product details: ", e), null;
              }
            case "button":
              if (!e.message) return null;
              try {
                const t = JSON.parse(e.message),
                  n = () => {
                    window.open(t.link, "_blank")?.focus();
                  };
                return v(
                  Uo,
                  { showIcon: !1 },
                  v(
                    "div",
                    { className: "botMessageWithButton", style: Ko },
                    v(yo, { type: "square", caption: t.name, click: n })
                  ),
                  v(Xi, { dateTime: e.full_date || e.time }),
                  v("style", null, Go)
                );
              } catch (e) {
                return console.log("Error parsing product details: ", e), null;
              }
            case "product_list":
              if (!e.message) return null;
              try {
                const t = JSON.parse(e.message);
                return v(
                  Vo,
                  { showIcon: !1 },
                  v(Fo, {
                    products: t.length ? t : t.product_list,
                    time: e?.full_date || e.time,
                  })
                );
              } catch (e) {
                return console.log("Error parsing product details: ", e), null;
              }
            case "image":
              return v(mo, { msg: e });
            case "new_chat_button":
              const o = JSON.parse(e.message || ""),
                a = Object.values(o)[0];
              return v(
                Uo,
                { showIcon: !1 },
                v(
                  "div",
                  { className: "botMessageWithButton", style: Ko },
                  v(Eo, { text: a, createChat: r })
                ),
                v(Xi, { dateTime: e.full_date || e.time }),
                v("style", null, Go)
              );
            case "predefined_answers":
              if (!e.message) return null;
              const s = JSON.parse(e.message || "{[]}");
              return s && s.messages
                ? v(To, { answers: s, messageId: e.id })
                : null;
            default:
              return v(Jo, {
                showIcon: !0,
                isTypingColor: n,
                text: e.message || "",
                date: e.full_date || e.time,
                hideDate: t,
              });
          }
        },
        Jo = ({
          text: e,
          date: t,
          hideDate: n,
          isTypingColor: r,
          showIcon: i,
        }) => {
          const o = !n || !n;
          return v(
            Uo,
            { showIcon: i },
            v(
              "div",
              {
                className: "botMessage",
                style: {
                  backgroundColor: "none",
                  border: "none",
                },
                "data-testid": "bot-text-message",
              },
              v(
                fi,
                { color: r || "rgb(227, 227, 227)" },
                ((e) => {
                  let t = 0,
                    n = e.replace(
                      /\*\*(.*?)\*\*|\*(.*?)\*|__(.*?)__|~~(.*?)~~|<sub>(.*?)<\/sub>|<sup>(.*?)<\/sup>|^### (.*?)$|^## (.*?)$|^# (.*?)$/gm,
                      (e, n, r, i, o, a, s, l, c, d, u) => {
                        let p = e;
                        return (
                          (t = u + e.length),
                          n
                            ? (p = `<strong>${n}</strong>`)
                            : r
                            ? (p = `<em>${r}</em>`)
                            : i
                            ? (p = `<u>${i}</u>`)
                            : o
                            ? (p = `<s>${o}</s>`)
                            : a
                            ? (p = `<sub>${a}</sub>`)
                            : s
                            ? (p = `<sup>${s}</sup>`)
                            : l
                            ? (p = `<h3>${l}</h3>`)
                            : c
                            ? (p = `<h2>${c}</h2>`)
                            : d && (p = `<h1>${d}</h1>`),
                          p
                        );
                      }
                    );
                  return (
                    (n = (function (e) {
                      return e.replace(
                        /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
                        (e, t, n) =>
                          `<a href="${n}" target="_blank" style="color: var(--nrb-main-color)">${t}</a>`
                      );
                    })(n)),
                    (n = n.replace(
                      /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1(?:[^>]*?)>(.*?)<\/a>|((?:(?:https?:\/\/)|(?:www\.))[\w-]+(?:\.[\w-]+)+(?:\.[a-zA-Z]{2,})?(?:\/[\w@?^=%&/~+#-]*)?)/gi,
                      (n, r, i, o, a, s) =>
                        e.substring(t, s).includes("<a")
                          ? n
                          : ((t = s + n.length),
                            r && i
                              ? (i.startsWith("http") || (i = `https://${i}`),
                                `<a href="${i}" target="_blank" style="color: rgb(222, 222, 222)">${o}</a>`)
                              : a
                              ? (a.startsWith("www") && (a = `https://${a}`),
                                `<a href="${a}" target="_blank" style="color: rgb(222, 222, 222)">${a}</a>`)
                              : n)
                    )),
                    v("span", { dangerouslySetInnerHTML: { __html: n } })
                  );
                })(e)
              )
            ),
            o && v(Xi, { dateTime: t }),
            v("style", null, Go)
          );
        },
        Zo = ({ formDescription: e, messageDate: t }) => {
          const { langDefinition: n } = me(ui),
            { participant: r, updateParticipant: i } = me(oi),
            { showNotification: o, hideNotification: a } = me(Zr);
          if (!e) return null;
          const s = Array.isArray(e.inputs) ? e.inputs : [e.inputs];
          return (
            "emailForm" === e.name &&
              r &&
              ((s[0].name = "email"),
              (s[0].type = "email"),
              (s[0].value = r.email)),
            v(
              Uo,
              { showIcon: !1 },
              v(
                ko,
                qo({}, e, {
                  inputs: s,
                  submitHandler: (e) => {
                    e.email &&
                      r &&
                      (i({ ...r, email: e.email }),
                      o(n.app.participantEditor.dataChanged),
                      setTimeout(() => {
                        a();
                      }, 1e3));
                  },
                })
              ),
              v(Xi, { dateTime: t })
            )
          );
        },
        Qo = () => {
          const { langDefinition: e } = me(ui);
          return v(
            "div",
            { class: "client_message_error" },
            e.app.chat.messageError,
            v(Bi, null),
            v(
              "style",
              null,
              "\n .client_message_error {\n   width: max-content;\n   margin-left: auto;\n   margin-right: 16px;\n   color: #BA560D;\n   font-size: 11px;\n   display: flex;\n   align-items: center;\n }\n    \n .client_message_error svg {\n   margin-left: 4px;\n   height: 16px;\n   cursor:default;\n  }\n"
            )
          );
        },
        Xo = ({ message: e }) =>
          v(
            "div",
            { className: "clientMessageContainer" },
            v(Xi, { dateTime: e.full_date || e.time }),
            v(
              "div",
              { className: "clientMessage" },
              v(
                fi,
                { color: "var(--nrb-opposite-color)" },
                v(ro, {
                  text: e.message || "",
                  color: "var(--nrb-opposite-color)",
                })
              )
            ),
            v(
              "style",
              null,
              "\n    .clientMessageContainer {\n      padding: 40px 0;\n      display: flex;\n      justify-content: flex-end;\n    }\n    \n    .clientMessage {\n      background-color: rgb(47, 47, 47);\n      white-space: pre-line;\n      border-radius: 25px;\n      padding: 12px 16px;\n      word-wrap: break-word;\n      margin-right: 0;\n      max-width:60%;\n    }\n    \n    .clientMessage a,\n    .clientMessage a:hover,\n    .clientMessage a:visited {\n      color: var(--nrb-opposite-color);\n      font-weight: 700;\n    }\n    \n    @media screen and (max-width: 440px) {\n      .clientMessage {\n        max-width: 260px !important;\n      }\n    }\n      \n    @media screen and (max-width: 360px) {\n      .clientMessage {\n        max-width: 220px !important;\n      }\n    }\n  "
            )
          ),
        ea = ({ message: e }) => {
          switch (e.type) {
            case "image":
              return v(mo, { msg: e });
            case "error":
              return v(Qo, null);
            default:
              return v(Xo, { message: e });
          }
        },
        ta = ({ message: e, active: t }) =>
          v(
            "div",
            null,
            v(
              "div",
              {
                className: t
                  ? "system_message_container"
                  : "system_message_container_input",
                "data-testid": t
                  ? "system-message-container"
                  : "system-message-input",
              },
              v("div", { className: "system_message" }, e)
            ),
            v(
              "style",
              null,
              "\n    .system_message_container {\n      margin-bottom: 26px;\n      padding: 4px 64px;\n      width: 100%;\n    }\n    \n    .system_message {\n      border-radius: 4px;\n      border: 1px solid var(--nrb-main-bg-darker-color);\n      background-color: var(--nrb-main-bg-darker-color);\n      padding: 8px 22px;\n      font-weight: 700;\n      line-height: 20px;\n      text-align: center;\n      word-wrap: break-word;\n    }\n    \n    .system_message_container_input {\n      margin-bottom: 68px;\n      padding: 4px 0;\n    }\n"
            )
          ),
        na = { color: "var(--nrb-main-bg-darkest-color)" },
        ra = () => {
          const { langDefinition: e } = me(ui),
            { botName: t } = me(ei),
            { selectedRoom: n } = me(Gr),
            r = `${n.agent ? `${n.agent.first_name}` : `${t}`} ${
              e.app.chat.isTyping
            }`;
          return n.typing && n.agent
            ? v(fo, { message: an(r, n.agent), isTypingColor: na })
            : n.typing && !n.agent
            ? v(Yo, {
                isTypingColor: "white",
                hideDate: !0,
                message: on(r),
              })
            : null;
        };
      function ia(e, t) {
        return (
          (ia = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          ia(e, t)
        );
      }
      const oa = pt.createContext(null);
      var aa = "unmounted",
        sa = "exited",
        la = "entering",
        ca = "entered",
        da = "exiting",
        ua = (function (e) {
          function t(t, n) {
            var r;
            r = e.call(this, t, n) || this;
            var i,
              o = n && !n.isMounting ? t.enter : t.appear;
            return (
              (r.appearStatus = null),
              t.in
                ? o
                  ? ((i = sa), (r.appearStatus = la))
                  : (i = ca)
                : (i = t.unmountOnExit || t.mountOnEnter ? aa : sa),
              (r.state = { status: i }),
              (r.nextCallback = null),
              r
            );
          }
          !(function (e, t) {
            (e.prototype = Object.create(t.prototype)),
              (e.prototype.constructor = e),
              ia(e, t);
          })(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              return e.in && t.status === aa ? { status: sa } : null;
            });
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (n.componentDidUpdate = function (e) {
              var t = null;
              if (e !== this.props) {
                var n = this.state.status;
                this.props.in
                  ? n !== la && n !== ca && (t = la)
                  : (n !== la && n !== ca) || (t = da);
              }
              this.updateStatus(!1, t);
            }),
            (n.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (n.getTimeouts = function () {
              var e,
                t,
                n,
                r = this.props.timeout;
              return (
                (e = t = n = r),
                null != r &&
                  "number" != typeof r &&
                  ((e = r.exit),
                  (t = r.enter),
                  (n = void 0 !== r.appear ? r.appear : t)),
                { exit: e, enter: t, appear: n }
              );
            }),
            (n.updateStatus = function (e, t) {
              if ((void 0 === e && (e = !1), null !== t))
                if ((this.cancelNextCallback(), t === la)) {
                  if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var n = this.props.nodeRef
                      ? this.props.nodeRef.current
                      : pt.findDOMNode(this);
                    n &&
                      (function (e) {
                        e.scrollTop;
                      })(n);
                  }
                  this.performEnter(e);
                } else this.performExit();
              else
                this.props.unmountOnExit &&
                  this.state.status === sa &&
                  this.setState({ status: aa });
            }),
            (n.performEnter = function (e) {
              var t = this,
                n = this.props.enter,
                r = this.context ? this.context.isMounting : e,
                i = this.props.nodeRef ? [r] : [pt.findDOMNode(this), r],
                o = i[0],
                a = i[1],
                s = this.getTimeouts(),
                l = r ? s.appear : s.enter;
              e || n
                ? (this.props.onEnter(o, a),
                  this.safeSetState({ status: la }, function () {
                    t.props.onEntering(o, a),
                      t.onTransitionEnd(l, function () {
                        t.safeSetState({ status: ca }, function () {
                          t.props.onEntered(o, a);
                        });
                      });
                  }))
                : this.safeSetState({ status: ca }, function () {
                    t.props.onEntered(o);
                  });
            }),
            (n.performExit = function () {
              var e = this,
                t = this.props.exit,
                n = this.getTimeouts(),
                r = this.props.nodeRef ? void 0 : pt.findDOMNode(this);
              t
                ? (this.props.onExit(r),
                  this.safeSetState({ status: da }, function () {
                    e.props.onExiting(r),
                      e.onTransitionEnd(n.exit, function () {
                        e.safeSetState({ status: sa }, function () {
                          e.props.onExited(r);
                        });
                      });
                  }))
                : this.safeSetState({ status: sa }, function () {
                    e.props.onExited(r);
                  });
            }),
            (n.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (n.safeSetState = function (e, t) {
              (t = this.setNextCallback(t)), this.setState(e, t);
            }),
            (n.setNextCallback = function (e) {
              var t = this,
                n = !0;
              return (
                (this.nextCallback = function (r) {
                  n && ((n = !1), (t.nextCallback = null), e(r));
                }),
                (this.nextCallback.cancel = function () {
                  n = !1;
                }),
                this.nextCallback
              );
            }),
            (n.onTransitionEnd = function (e, t) {
              this.setNextCallback(t);
              var n = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : pt.findDOMNode(this),
                r = null == e && !this.props.addEndListener;
              if (n && !r) {
                if (this.props.addEndListener) {
                  var i = this.props.nodeRef
                      ? [this.nextCallback]
                      : [n, this.nextCallback],
                    o = i[0],
                    a = i[1];
                  this.props.addEndListener(o, a);
                }
                null != e && setTimeout(this.nextCallback, e);
              } else setTimeout(this.nextCallback, 0);
            }),
            (n.render = function () {
              var e = this.state.status;
              if (e === aa) return null;
              var t = this.props,
                n = t.children,
                r =
                  (t.in,
                  t.mountOnEnter,
                  t.unmountOnExit,
                  t.appear,
                  t.enter,
                  t.exit,
                  t.timeout,
                  t.addEndListener,
                  t.onEnter,
                  t.onEntering,
                  t.onEntered,
                  t.onExit,
                  t.onExiting,
                  t.onExited,
                  t.nodeRef,
                  (function (e, t) {
                    if (null == e) return {};
                    var n = {};
                    for (var r in e)
                      if ({}.hasOwnProperty.call(e, r)) {
                        if (t.indexOf(r) >= 0) continue;
                        n[r] = e[r];
                      }
                    return n;
                  })(t, [
                    "children",
                    "in",
                    "mountOnEnter",
                    "unmountOnExit",
                    "appear",
                    "enter",
                    "exit",
                    "timeout",
                    "addEndListener",
                    "onEnter",
                    "onEntering",
                    "onEntered",
                    "onExit",
                    "onExiting",
                    "onExited",
                    "nodeRef",
                  ]));
              return pt.createElement(
                oa.Provider,
                { value: null },
                "function" == typeof n
                  ? n(e, r)
                  : pt.cloneElement(pt.Children.only(n), r)
              );
            }),
            t
          );
        })(pt.Component);
      function pa() {}
      (ua.contextType = oa),
        (ua.propTypes = {}),
        (ua.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: pa,
          onEntering: pa,
          onEntered: pa,
          onExit: pa,
          onExiting: pa,
          onExited: pa,
        }),
        (ua.UNMOUNTED = aa),
        (ua.EXITED = sa),
        (ua.ENTERING = la),
        (ua.ENTERED = ca),
        (ua.EXITING = da);
      const ha = ua,
        ma = ({
          inCondition: e,
          timeout: t,
          defaultStyle: n,
          transitionStyles: r,
          finished: i = () => {},
          children: o,
        }) =>
          v(
            ha,
            { in: e, timeout: t, appear: !0, unmountOnExit: !0, onEntered: i },
            (e) => v("div", { style: { ...n, ...r[e] } }, o)
          ),
        ga = {
          opacity: 0,
          transform: "translateY(128px)",
          transition:
            "transform 320ms ease-in-out 400ms, opacity 320ms ease-in-out 400ms",
        },
        fa = {
          entered: { transform: "translateY(0)", opacity: 1 },
          exited: { opacity: 0 },
        },
        ba = ({ room: e, messages: t }) => {
          const { langDefinition: n } = me(ui),
            r = ((e, t) => {
              const n = {};
              if (e?.chat_messages) {
                let t = -1;
                e.chat_messages.forEach((r, i) => {
                  if ("manager" === r.author || "agent" === r.author) {
                    if (
                      i > 0 &&
                      e.chat_messages &&
                      ("manager" === e.chat_messages[i - 1].author ||
                        "agent" === e.chat_messages[i - 1].author)
                    ) {
                      const e = r.agent?.id;
                      n[i] = !(!e || e === t);
                    } else n[i] = !0;
                    r.agent?.id && (t = r.agent.id);
                  }
                });
              }
              return t
                ? t
                    .filter((e) => e.visible_to_client && null !== e.message)
                    .filter((e) => {
                      if ("predefined_answers" === e.type) {
                        const t = JSON.parse(e.message || "");
                        return !!t && "object" == typeof t && !!t.messages;
                      }
                      return !0;
                    })
                    .map((t, r) => {
                      const i = n[r] || !1;
                      switch (t.author) {
                        case "agent":
                        case "manager":
                          return v(fo, { message: t, key: r, hasAvatar: i });
                        case "bot":
                          return v(Yo, { message: t, key: r });
                        case "system":
                          return v(ta, {
                            message: t.message || "",
                            active: !!e?.active,
                            key: r,
                          });
                        default:
                          return v(ea, { message: t, key: r });
                      }
                    })
                : null;
            })(e, t);
          return v(
            w,
            null,
            v(
              "div",
              { className: "chat", "data-testid": "chat-messages" },
              r &&
                v(
                  ma,
                  {
                    inCondition: !0,
                    timeout: 320,
                    defaultStyle: ga,
                    transitionStyles: fa,
                  },
                  r,
                  v(ra, null)
                ),
              e &&
                !e.active &&
                !e.isDummy &&
                v(ta, { message: n.app.chat.chatEnded, active: e.active })
            ),
            v(
              "style",
              null,
              "\n  .chat {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    margin: 14px 16px 26px 16px;\n    font-size: 16px;background-color: #000000;\n  }\n\n  @media screen and (max-width: 600px) {\n    .chat {\n      background-color: #000000;\n      padding-bottom: 0;\n      position: relative;\n      display: flex;\n      flex-direction: column;\n      margin-inline: 16px;\n      font-size: 16px;\n    }\n  }\n\n  ::placeholder {\n    font-weight: 400;\n  }\n"
            )
          );
        },
        ya = ({ visible: e, roomActive: t }) => {
          const { langDefinition: n } = me(ui),
            r = n.app.socketError;
          return t && e ? v(ta, { message: r, active: t }) : null;
        },
        va = ({ children: e, inCondition: t }) =>
          v(
            ma,
            {
              inCondition: t,
              timeout: 200,
              defaultStyle: {
                opacity: 0,
                transition: "opacity 200ms ease-in-out 1s",
              },
              transitionStyles: {
                entered: {
                  opacity: 1,
                  transition: "opacity 120ms ease-in-out",
                },
                exited: { opacity: 0 },
              },
            },
            e
          ),
        _a = ({ children: e }) => {
          const t = de(null);
          return (
            le(() => {
              t.current &&
                t.current?.scrollTo({ top: t.current?.scrollHeight });
            }, [e]),
            v(
              "div",
              { className: "chat_wrapper", ref: t },
              v("div", null, v("div", { className: "chat_positioning" }, e)),
              v(
                "style",
                null,
                "\n    .chat_wrapper {\n      height: 100%;\n      overflow-y: auto;\n      display: flex;\n      flex-direction: column-reverse;\n      user-select: text;\n      background-color: black;\n    }\n    \n    .chat_wrapper::-webkit-scrollbar {\n      display: none;\n    }\n    \n    .chat_positioning {\n      overflow: hidden;\n      display: flex;\n      flex-direction: column;\n    }\n  "
              )
            )
          );
        },
        wa = ({ children: e }) =>
          v(
            "div",
            {
              style: {
                position: "absolute",
                bottom: "40px",
                padding: "0 16px",
                left: 0,
                right: 0,
              },
            },
            e
          ),
        xa = () => {
          const { langDefinition: e } = me(ui),
            { createRoom: t } = me(Gr),
            { sendEvent: n } = me(ci);
          return v(
            wa,
            null,
            v(yo, {
              type: "square",
              caption: e.app.chatRooms.newChat,
              click: async function () {
                await t(), n(Tt.ClickStartNewChat);
              },
            })
          );
        },
        Ca = () => {
          const { selectedRoom: e } = me(Gr),
            t = e?.conn?.connected || !0;
          return v(
            w,
            null,
            v(qi, null),
            v(
              _a,
              null,
              v(ba, { room: e, messages: e.chat_messages }),
              v(
                va,
                { inCondition: !t || !e.active || !e.isDummy },
                v(ya, {
                  roomActive: !!e.uid && e.active,
                  visible: e.active && !!e.uid && !t && !e.isDummy,
                })
              )
            ),
            e.active || e.isDummy ? v(Ji, { connected: t }) : v(xa, null)
          );
        },
        ka = ({ stroke: e, background: t }) =>
          v(
            "svg",
            {
              width: "48",
              height: "48",
              viewBox: "0 0 48 48",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              style: { pointerEvents: "none" },
            },
            v("circle", { cx: "24", cy: "24", r: "24", fill: t }),
            v("path", {
              d: "M32.4 34.2V31.8C32.4 30.527 31.9575 29.3061 31.1699 28.4059C30.3822 27.5057 29.3139 27 28.2 27H19.8C18.6861 27 17.6178 27.5057 16.8302 28.4059C16.0425 29.3061 15.6 30.527 15.6 31.8V34.2",
              stroke: e,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            v("path", {
              d: "M24 22.9001C26.5129 22.9001 28.55 20.8629 28.55 18.35C28.55 15.8372 26.5129 13.8 24 13.8C21.4871 13.8 19.45 15.8372 19.45 18.35C19.45 20.8629 21.4871 22.9001 24 22.9001Z",
              stroke: e,
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          ),
        Ea = ({ header: e, padding: t, noHorizontalMargin: n, children: r }) =>
          v(
            "div",
            {
              style: {
                background: "var(--nrb-main-lightest-color)",
                border: "1px solid black",
                boxSizing: "border-box",
                borderRadius: "16px",
                margin: n ? "24px 0 16px 0" : "24px 16px",
                padding: t ?? "large" === t ? "24px" : "16px",
              },
            },
            e &&
              v(
                "div",
                { style: { marginBottom: "16px" } },
                v(Li, { color: "var(--nrb-main-darkest-color)" }, e)
              ),
            r
          ),
        Sa = ({ editModeEnable: e }) => {
          const { name: t, email: n } = me(ei),
            { sendEvent: r } = me(ci),
            { editUserCard: i } = me(ti);
          return v(Ki, {
            variant: "pencil",
            size: "small",
            enabled: !(t || n) && i,
            id: "edit-mode-on",
            handler: function () {
              e(), r(Tt.ClickEditSettings);
            },
          });
        },
        La = () => {
          const { participant: e, enableEditMode: t } = me(oi),
            { name: n, email: r } = me(ei),
            [i, o] =
              e?.name || e?.generated_name || e?.email
                ? [e.email, e.name || e?.generated_name]
                : [r, n];
          return i || o
            ? v(
                Ea,
                { "data-testid": "user-card" },
                v(
                  "div",
                  {
                    style: {
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                    },
                  },
                  v(ka, {
                    stroke: "var(--nrb-main-darkest-color)",
                    background: "var(--nrb-main-bg-darker-color)",
                  }),
                  v(
                    "div",
                    { style: { width: "100%", marginLeft: "16px" } },
                    o &&
                      v(
                        "div",
                        { className: "nameStyle" },
                        v(bi, { color: "var(--nrb-main-darkest-color)" }, o)
                      ),
                    i && v("div", { className: "emailStyle" }, i),
                    v(
                      "style",
                      null,
                      "\n    .nameStyle,\n    .emailStyle {\n      max-width: 280px;\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n    }\n    \n    .emailStyle {\n      font-weight: normal;\n      color: var(--nrb-main-lighter);\n    }\n    \n    @media screen and (max-width: 440px) {\n      .nameStyle,\n      .emailStyle {\n        max-width: 200px;\n      }\n    }\n    \n    @media screen and (max-width: 360px) {\n      .nameStyle,\n      .emailStyle {\n        max-width: 160px;\n      }\n    }\n    \n    @media screen and (max-width: 320px) {\n      .nameStyle,\n      .emailStyle {\n        max-width: 120px;\n      }\n    }\n  "
                    )
                  ),
                  v(Sa, { editModeEnable: t })
                )
              )
            : null;
        },
        Ta = (e) => (e <= 9 ? `0${e}` : `${e}`),
        Na = new Date(),
        Ma = ({ dateTime: e }) => {
          const { langDefinition: t } = me(ui),
            n = new Date(e),
            r = Ta(n.getHours()),
            i = Ta(n.getMinutes());
          switch (!0) {
            case ((o = n),
            Na.getDate() === o.getDate() &&
              Na.getMonth() === o.getMonth() &&
              Na.getFullYear() === o.getFullYear()):
              return v(
                "span",
                { "data-testid": "dateTime" },
                `${t.app.chat.today}, ${r}:${i}`
              );
            case ((e) => {
              const t = (() => {
                const e = new Date();
                return e.setDate(e.getDate() - 1), e;
              })();
              return (
                t.getDate() === e.getDate() &&
                t.getMonth() === e.getMonth() &&
                t.getFullYear() === e.getFullYear()
              );
            })(n):
              return v(
                "span",
                { "data-testid": "dateTime" },
                `${t.app.chat.yesterday}, ${r}:${i}`
              );
            default:
              const e = Ta(n.getMonth() + 1);
              return v(
                "span",
                { "data-testid": "dateTime" },
                `${Ta(n.getDate())}.${e}.${n
                  .getFullYear()
                  .toString()
                  .substr(2)} ${t.app.chat.at} ${r}:${i}`
              );
          }
          var o;
        },
        Da = ({ lastMessage: e, agent: t, viewed: n, date: r, active: i }) =>
          v(
            "div",
            { className: "headerPart" },
            i && !n && v(ja, null),
            v(
              Ni,
              { color: "var(--nrb-main-darkest-color)" },
              v(Aa, { author: e?.author, agent: t })
            ),
            v(
              mi,
              { color: "var(--nrb-main-darkest-color)" },
              v(Ma, { dateTime: r })
            )
          ),
        Aa = ({ author: e, agent: t }) => {
          const { langDefinition: n } = me(ui),
            { botName: r } = me(ei);
          return v(
            "span",
            null,
            "client" === e
              ? n.app.chat.you
              : t
              ? `${t.first_name} ${t.last_name}`
              : r
          );
        },
        Oa = ({ lastMessage: e, active: t }) =>
          v(
            "div",
            { className: "lastMessagePart" },
            v(za, { agent: e?.agent, author: e?.author, active: t }),
            v(
              fi,
              { color: "var(--nrb-main-darkest-color)" },
              v(Ia, { lastMessage: e, active: t })
            )
          ),
        za = ({ active: e, agent: t, author: n }) =>
          e && t?.avatar
            ? v(Zi, { size: 16, url: t.avatar.path, margin: 4, visible: !0 })
            : e && "client" === n
            ? v(ji, { size: "S" })
            : e && "bot" === n
            ? v(Ii, {
                visible: !0,
                size: "S",
                fillColor: "var(--nrb-bot-avatar-color)",
              })
            : null,
        Ia = ({ lastMessage: e, active: t }) => {
          const { langDefinition: n } = me(ui),
            r = (e) => {
              const t = document.createElement("div");
              return (t.innerHTML = e), t.innerText || t.textContent || "";
            },
            i = { color: "var(--nrb-main-lighter)" };
          if (!t)
            return v(
              "div",
              { className: "cutText", style: i },
              n.app.chatRooms.chatEndedShort
            );
          if (!e)
            return v(
              "div",
              { className: "cutText", style: i },
              n.app.chatRooms.empty
            );
          switch (e.type) {
            case "button":
            case "new_chat_button":
              return v("div", { className: "cutText" }, n.app.chat.button);
            case "message":
              return v(
                "div",
                { className: "cutText" },
                r(
                  ((e) => {
                    try {
                      return JSON.parse(e).message || e;
                    } catch (t) {
                      return e;
                    }
                  })(e.message || "")
                )
              );
            case "product":
              return v("div", { className: "cutText" }, n.app.chat.product);
            case "product_list":
              return v("div", { className: "cutText" }, n.app.chat.productList);
            case "predefined_answers":
              return v(
                "div",
                { className: "cutText" },
                n.app.chat.lastPredefined
              );
            case "form":
              return v("div", { className: "cutText" }, n.app.chat.form);
          }
          return v("div", { className: "cutText" }, r(e.message || ""));
        },
        ja = () =>
          v("div", {
            style: {
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "var(--nrb-main-color)",
              position: "absolute",
              left: "16px",
            },
          }),
        Ba = ({ room: e, key: t }) => {
          const { selectRoom: n } = me(Gr);
          return v(
            "div",
            { className: "panelWrapper", key: t },
            v(
              "div",
              { className: "panel", onClick: () => n(e.uid) },
              v(Da, {
                lastMessage: e.last_message,
                agent: e.agent,
                date: e.createdDate || new Date().toISOString(),
                viewed: e.viewed,
                active: e.active,
              }),
              v(Oa, { lastMessage: e.last_message, active: e.active }),
              v(
                "style",
                null,
                "\n    .panelWrapper {\n      background-color: var(--nrb-main-lightest-color);\n      width: 100%;\n      padding: 2px 8px;\n      position: relative;\n    }\n    \n    .panelWrapper:first-child {\n      padding: 8px 8px 2px 8px;\n    }\n    \n    .panelWrapper:last-child {\n      padding: 2px 8px 8px 8px;\n    }\n    \n    .panelWrapper:only-child {\n      padding: 8px;\n    }\n    \n    .panel {\n      height: 76px;\n      width: 100%;\n      border-radius: 4px;\n      cursor: pointer;\n      padding: 8px 20px;\n    }\n    \n    .panel:hover {\n      background-color: black;\n    }\n  "
              )
            ),
            v(
              "style",
              null,
              "\n  .headerPart {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 8px;\n  }\n  \n  .headerPart h4 {\n    flex: 1;\n    max-width: 320px !important;\n    overflow: hidden !important;\n    text-overflow: ellipsis !important;\n    text-wrap: nowrap !important;\n    margin-right: 10px !important;\n  }\n  \n  .lastMessagePart {\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n  }\n  \n  .lastMessagePart img {\n    margin-right: 4px;\n    margin-bottom: 4px;\n  }\n  \n  .cutText {\n    text-overflow: ellipsis;\n    overflow: hidden;\n    max-width: 320px;\n    white-space: nowrap;\n  }\n  \n  @media screen and (max-width: 390px) {\n    .cutText {\n      width: 200px !important;\n    }\n  }\n  \n  @media screen and (max-width: 300px) {\n    .cutText {\n      width: 180px !important;\n    }\n  }\n"
            )
          );
        },
        Pa = ({ rooms: e }) => {
          const t = e.map((e) => v(Ba, { room: e, key: e.uid }));
          return v("div", { style: { overflowY: "auto" } }, t);
        },
        Ra = ({ rooms: e }) => {
          const { langDefinition: t } = me(ui),
            { createRoom: n } = me(Gr),
            { sendEvent: r } = me(ci);
          return v(
            w,
            null,
            v(La, null),
            v("div", { className: "chatsListWrapper" }, v(Pa, { rooms: e })),
            v(
              wa,
              null,
              v(yo, {
                type: "square",
                caption: t.app.chatRooms.newChat,
                click: function () {
                  n(), r(Tt.ClickStartNewChat);
                },
              })
            ),
            v(
              "style",
              null,
              "\n    .chatsListWrapper {\n      padding-bottom: 100px;\n      flex: 1;\n      overflow-y: scroll;\n      background-color: black;\n    }\n      \n    .chatsListWrapper::-webkit-scrollbar {\n      display: none;\n    }\n  "
            )
          );
        },
        Ha = ({ description: e, title: t, button: n, clickHandler: r }) =>
          v(
            Ea,
            { header: t, padding: "large", noHorizontalMargin: !0 },
            v(
              "div",
              { style: { marginBottom: "24px", color: "black" } },
              v(fi, { color: "var(--nrb-main-darkest-color)" }, e)
            ),
            v(yo, { type: "square", caption: n.name, click: r })
          ),
        $a = ({ message: e }) => {
          const t = {
            author: "bot",
            confirmed: Gt.Confirmed,
            hasAvatar: !1,
            id: Math.floor(1e5 * Math.random()),
            time: new Date().toISOString(),
            type: "text",
            message: e,
            visible_to_client: !0,
          };
          return v(Yo, { message: t, hideDate: !0 });
        },
        Wa = () => {
          const { serviceBaseUrl: e, apiKey: t } = me(ei),
            { participant: n } = me(oi),
            [r, i] = ae(null),
            o = `${e}/api/public/chat/inform`,
            a = async (e) => {
              try {
                const n = await (async (e, t, n) => {
                  const r = await Zt(e, { apiKey: t, participantUid: n });
                  return await (async (e) => {
                    const t = await e.json(),
                      n = "string" == typeof t ? JSON.parse(t) : t;
                    var r, i;
                    return (
                      (r = n),
                      (i = ["greeting", "description", "title", "button"]),
                      Object.keys(r).forEach((e) => {
                        if (!i.includes(e)) throw new Yt(e);
                      }),
                      {
                        greeting: n.greeting,
                        title: n.title,
                        description: n.description,
                        button: n.button,
                      }
                    );
                  })(r);
                })(o, t, e.uid);
                i(n);
              } catch (e) {
                console.log(`Information loading error ${e}`);
              }
            };
          return (
            le(() => {
              n && n.uid && a(n);
            }, [n]),
            r
          );
        };
      function Fa() {
        return (
          (Fa = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          Fa.apply(null, arguments)
        );
      }
      const Ua = ({ children: e }) =>
          v(
            "div",
            {
              style: {
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "stretch",
                marginTop: "16px",
                padding: "0 16px",
              },
            },
            e
          ),
        Va = ({ confirm: e }) => {
          const t = Wa();
          return t
            ? v(
                _a,
                null,
                v(
                  Ua,
                  null,
                  v($a, { message: t.greeting }),
                  v(Ha, Fa({}, t, { clickHandler: e }))
                )
              )
            : null;
        },
        qa = { textAlign: "center", color: "var(--nrb-main-lighter)" },
        Ga = {
          width: "100%",
          height: "100%",
          padding: "80px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        Ka = () => {
          const { langDefinition: e } = me(ui);
          return v(
            Ja,
            null,
            v(
              Ya,
              null,
              v(
                fi,
                { color: "var(--nrb-main-darkest-color)" },
                e.app.globalError
              )
            )
          );
        },
        Ya = ({ children: e }) => v("div", { style: qa }, e),
        Ja = ({ children: e }) => v("div", { style: Ga }, e),
        Za = ({
          name: e,
          namePlaceholder: t,
          nameError: n,
          email: r,
          emailPlaceholder: i,
          emailError: o,
          saveChanges: a,
          saveParticipant: s,
          buttonDisabled: l,
        }) => {
          const [c, d] = ae(e || ""),
            [u, p] = ae(r || "");
          return v(
            "form",
            {
              className: "editorContainer",
              onSubmit: (t) => {
                t.preventDefault(), (c === e && u === r) || s(c, u);
              },
            },
            v(vo, {
              type: "text",
              name: "name",
              value: c,
              inputHandler: (t) => {
                const n = t.target.value || "";
                n && n !== e && d(n);
              },
              error: n,
              placeholder: t,
            }),
            !n && v("div", { style: { height: "22px" } }),
            v(vo, {
              type: "email",
              name: "email",
              value: u,
              inputHandler: (e) => {
                const t = e.target.value || "";
                t && t !== r && p(t);
              },
              error: o,
              placeholder: i,
            }),
            v(
              wa,
              null,
              v(yo, {
                type: "square",
                caption: a,
                click: () => {},
                disabled: l,
              })
            ),
            v(
              "style",
              null,
              "\n    .editorContainer {\n      display: flex;\n      flex-direction: column;\n      background-color: black;\n      height: 100%;\n      padding: 32px 16px;\n      flex: 1;\n      overflow-y: auto;\n    }\n  "
            )
          );
        },
        Qa = ({ participant: e }) => {
          const { langDefinition: t } = me(ui),
            { updateParticipant: n } = me(oi),
            { sendEvent: r } = me(ci),
            { showNotification: i, hideNotification: o } = me(Zr),
            [a, s] = ae(!1);
          return v(
            w,
            null,
            v(qi, null),
            v(Za, {
              name: e.name,
              namePlaceholder: e.name ? e.name : t.app.chat.name,
              nameError: t.app.chat.nameError,
              email: e.email,
              emailPlaceholder: e.email ? e.email : t.app.chat.email,
              emailError: t.app.chat.emailError,
              saveChanges: t.app.participantEditor.saveChanges,
              saveParticipant: async (a, l) => {
                n({ ...e, name: a, email: l }),
                  r(Tt.ClickSaveSettings),
                  i(t.app.participantEditor.dataChanged),
                  setTimeout(() => {
                    o(), s(!1);
                  }, 1e3);
              },
              buttonDisabled: a,
            })
          );
        },
        Xa = () => {
          un();
        },
        es = () => {
          const { multichat: e } = me(ei),
            { informationWarning: t, setInformationWarning: n } = me(ti),
            { rooms: r, roomsLoadingError: i, selectedRoom: o } = me(Gr),
            { participant: a, editMode: s } = me(oi);
          return (
            le(
              () => (
                window.addEventListener("focus", Xa),
                Xa(),
                () => {
                  window.removeEventListener("focus", Xa);
                }
              ),
              []
            ),
            i
              ? v(Ka, null)
              : s && a
              ? v(Qa, { participant: a })
              : t
              ? v(Va, { confirm: () => n(!1) })
              : o.uid
              ? v(Ca, null)
              : e && r && r.length > 0
              ? v(Ra, { rooms: r })
              : v(Ca, null)
          );
        },
        ts = ({ children: e }) => {
          const t = me(ei),
            { widgetOpen: n } = me(ti),
            r = {
              width: t.width
                ? t.width < document.body.clientWidth - 96
                  ? t.width
                  : document.body.clientWidth - 96
                : "",
              height: t.height
                ? t.height < document.body.clientHeight - 96 + 85
                  ? t.height
                  : document.body.clientHeight - 96 + 85
                : "",
              maxWidth:
                "right" === t.side && document.body.clientWidth > 600
                  ? "calc(100% - var(--nrb-button-right) * 2)"
                  : "calc(100% - var(--nrb-button-left) * 2)",
              zIndex: Number.MAX_SAFE_INTEGER,
              maxHeight: "calc(100% - (var(--nrb-button-bottom) * 2 + 85px))",
              backgroundColor: "black",
              color: "var(--nrb-main-darkest-color)",
            },
            {
              onMouseDown: i,
              resizeableEl: o,
              resizeStyles: a,
            } = (() => {
              const [e, t] = ae(!1),
                [n, r] = ae(void 0),
                [i, o] = ae(void 0),
                [a, s] = ae(void 0),
                [l, c] = ae(void 0),
                [d, u] = ae(void 0),
                [p, h] = ae(void 0),
                [m, g] = ae(void 0),
                f = de(null),
                b = me(ei),
                y = () => {
                  t(!1), r(void 0);
                },
                v = (t) => {
                  if (e && f.current) {
                    const e = t.clientX - i,
                      r = t.clientY - a;
                    let o = l,
                      s = d;
                    "width" === n
                      ? (o = "left" === b.side ? l + e : l - e)
                      : "height" === n
                      ? (s = d + (r < 0 ? Math.abs(r) : -r))
                      : "rightDiagonal" === n && "right" === b.side
                      ? ((o = l - e), (s = d + (r < 0 ? Math.abs(r) : -r)))
                      : "leftDiagonal" === n &&
                        "left" === b.side &&
                        ((o = l + e), (s = d + (r < 0 ? Math.abs(r) : -r))),
                      h(o),
                      g(s);
                  }
                },
                _ = "resizableDimensions";
              le(() => {
                const e = localStorage.getItem(_);
                if (e) {
                  const { width: t, height: n } = JSON.parse(e);
                  h(b.width ? b.width : t), g(b.height ? b.height : n);
                }
              }, [b.width, b.height]),
                le(() => {
                  p &&
                    m &&
                    localStorage.setItem(
                      _,
                      JSON.stringify({ width: p, height: m })
                    );
                }, [p, m]),
                le(
                  () => (
                    e
                      ? (document.addEventListener("mousemove", v),
                        document.addEventListener("mouseup", y))
                      : (document.removeEventListener("mousemove", v),
                        document.removeEventListener("mouseup", y)),
                    () => {
                      document.removeEventListener("mousemove", v),
                        document.removeEventListener("mouseup", y);
                    }
                  ),
                  [e]
                );
              const w = {
                ...(!!p && !!m && { width: `${p}px`, height: `${m}px` }),
              };
              return {
                onMouseDown: (e) => {
                  if (
                    ((e) => {
                      if (f.current) {
                        const t = f.current.getBoundingClientRect(),
                          n = e.clientX - t.left,
                          r = e.clientY - t.top;
                        if (
                          n <= 15 ||
                          n >= t.width - 15 ||
                          r <= 15 ||
                          r >= t.height - 15
                        )
                          return !0;
                      }
                      return !1;
                    })(e) &&
                    f.current
                  ) {
                    const n = f.current.getBoundingClientRect();
                    o(e.clientX), s(e.clientY), c(n.width), u(n.height), t(!0);
                    const i = e.clientX - n.left,
                      a = e.clientY - n.top,
                      l =
                        "left" === b.side
                          ? i > n.width - i && i > 15 && a > 15
                          : i < a;
                    i <= 15 && a <= 15
                      ? r("rightDiagonal")
                      : i >= n.width - 15 && a <= 15
                      ? r("leftDiagonal")
                      : r(l ? "width" : "height");
                  }
                },
                resizeableEl: f,
                resizeStyles: w,
              };
            })(),
            s = { ...r, ...a },
            l = n
              ? v(
                  "div",
                  {
                    className: "rootWrapper",
                    style: s,
                    id: "chatroot",
                    ref: o,
                    onMouseDown: i,
                  },
                  v("div", { className: "topBorder" }),
                  e,
                  v("div", {
                    className:
                      "left" === t.side
                        ? "rightDiagonalResizingDiv"
                        : "leftDiagonalResizingDiv",
                  }),
                  v("div", {
                    className: "left" === t.side ? "rightBorder" : "leftBorder",
                  })
                )
              : null;
          return v(
            "div",
            null,
            v(
              "style",
              null,
              "\n    .rootWrapper,\n    .topBorder,\n    .rightBorder,\n    .rightDiagonalResizingDiv,\n    .leftBorder,\n    .leftDiagonalResizingDiv {\n      overflow: hidden;\n      border-radius: 0;\n      position: fixed;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      width: 100%;\n      height: 100%;\n      box-shadow: none;\n      pointer-events: auto;\n      display: flex;\n      flex-direction: column;\n    }\n    \n    .topBorder,\n    .rightBorder,\n    .leftBorder,\n    .rightDiagonalResizingDiv,\n    .leftDiagonalResizingDiv {\n      position: absolute;\n      background: transparent;\n      z-index: 999;\n    }\n    \n    .rightBorder,\n    .leftBorder {\n      top: 15px;\n      width: 15px;\n      height: calc(100% - 30px);\n    }\n    \n    .rightDiagonalResizingDiv,\n    .leftDiagonalResizingDiv {\n      top: auto;\n      bottom: auto;\n      width: 15px;\n      height: 15px;\n    }\n    \n    .topBorder {\n      bottom: auto;\n      left: 15px;\n      right: 15px;\n      height: 15px;\n      width: calc(100% - 30px);\n    }\n    \n    .rightBorder {\n      left: auto;\n    }\n    \n    .leftBorder {\n      right: auto;\n    }\n    \n    .rightDiagonalResizingDiv {\n      left: auto;\n    }\n    \n    .leftDiagonalResizingDiv {\n      right: auto;\n    }\n    \n    .topBorder:hover {\n      cursor: ns-resize;\n    }\n    \n    .rightBorder:hover {\n      cursor: ew-resize;\n    }\n    \n    .rightDiagonalResizingDiv:hover {\n      cursor: nesw-resize;\n    }\n    \n    .leftBorder:hover {\n      cursor: ew-resize;\n    }\n    \n    .leftDiagonalResizingDiv:hover {\n      cursor: nwse-resize;\n    }\n    \n    @media screen and (min-width: 600px) {\n        .rootWrapper {\n            border-radius: 8px;\n            top: unset;\n            left: var(--nrb-button-left);\n            right: var(--nrb-button-right);\n            bottom: calc(var(--nrb-button-bottom) + 85px);\n            height: 640px;\n            width: 464px;\n            min-width: 464px;\n            min-height: 400px;\n            box-shadow: 0 -2px 16px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.06), 2px 1px 32px rgba(0, 0, 0, 0.06);\n        }\n    }\n  \n    @media screen and (min-width: 600px) and (-webkit-device-pixel-ratio: 3) {\n        .rootWrapper {\n            overflow: hidden;\n            border-radius: 8px;\n            height: 75%;\n            max-height: 640px;\n            width: 464px;\n            position: fixed;\n            top: unset;\n            left: unset;\n            bottom: 138px;\n            right: 80px;\n            box-shadow: 0 -2px 16px rgba(0, 0, 0, 0.06), 0 4px 16px rgba(0, 0, 0, 0.06), 2px 1px 32px rgba(0, 0, 0, 0.06);\n            pointer-events: auto;\n            display: flex;\n            flex-direction: column;\n        }\n    }\n    \n    @media screen and (max-width: 800px) {\n        .rootWrapper {\n          right: 0;\n          left: 0;\n          bottom: 0;\n          border-radius: 0;\n          width: 100% !important;\n          height: 100% !important;\n          min-width: 100% !important;\n          min-height: 100% !important;\n          max-width: 100% !important;\n          max-height: 100% !important;\n        }\n    }\n    \n    @media screen and (max-height: 590px) {\n        .rootWrapper {\n          min-height: 230px;\n          height: 100% !important;\n          bottom: 0;\n          overflow-y: auto;\n        }\n    }\n\n    @media screen and (max-height: 570px) and (max-width: 820px) {\n        .rootWrapper {\n            width: 100% !important;\n            border-radius: 0;\n            right: 0;\n            left: 0;\n            bottom: 0;\n        }\n    }\n    \n    @media screen and (max-height: 600px) and (max-width: 1000px) {\n        .rootWrapper {\n          right: 0;\n          bottom: 0;\n          min-height: 100% !important;\n          height: 100% !important;\n          max-width: 100% !important;\n          max-height: 100% !important;\n        }\n    }\n    \n    @media screen and (max-height: 790px) and (min-width: 1000px) {\n        .rootWrapper {\n          min-height: 75% !important;\n          max-height: calc(75% - (var(--nrb-button-bottom) * 2 + 85px)) !important;\n        }\n    }\n    \n    @media screen and (max-height: 800px) and (max-width: 800px) and (min-width: 480px) and (min-height: 480px) {\n        .rootWrapper {\n          right: 0;\n          left: 0;\n          bottom: 0;\n          width: 100% !important;\n          height: 100% !important;\n          min-width: 100% !important;\n          min-height: 100% !important;\n          max-width: 100% !important;\n          max-height: 100% !important;\n        }\n    }\n    \n    svg:hover {\n        cursor: pointer;\n    }\n"
            ),
            t.openAnimation
              ? v(
                  ma,
                  {
                    inCondition: n,
                    timeout: 320,
                    defaultStyle: {
                      transition: "opacity 320ms ease-in-out 0ms",
                      opacity: 0,
                    },
                    transitionStyles: {
                      entered: { opacity: 1 },
                      exited: { opacity: 0 },
                    },
                  },
                  l
                )
              : l
          );
        },
        ns = ({ element: e, ...t }) => (
          (localStorage.debug = "*"),
          (t.disableDetailsEdit = !!t.name || !!t.email),
          v(
            ri,
            { config: t, element: e },
            v(
              gt,
              null,
              v(
                rs,
                null,
                v(Vi, null),
                v(ts, null, v(Di, null), v(es, null), v(yi, null))
              )
            )
          )
        ),
        rs = ({ children: e }) => {
          const { participant: t } = me(oi),
            { rooms: n } = me(Gr),
            r = { current: null };
          return (
            ((e, t, n) => {
              const [r, i] = ae(!1),
                { norbyChat: o } = me(ti);
              le(() => {
                e &&
                  t &&
                  n.current &&
                  !r &&
                  (n.current.dispatchEvent(o.initEvent("norbyChat-init", e, t)),
                  i(!0));
              }, [e, t, n, r]);
            })(t, n, r),
            (() => {
              const { mainColor: e } = me(ei);
              le(() => {
                const t = new zi(e);
                document.documentElement.style.setProperty(
                  "--nrb-main-color",
                  t.mainColor
                ),
                  document.documentElement.style.setProperty(
                    "--nrb-bot-avatar-color",
                    t.botAvatarColor
                  ),
                  document.documentElement.style.setProperty(
                    "--nrb-opposite-color",
                    t.mainOppositeColor
                  ),
                  document.documentElement.style.setProperty(
                    "--nrb-main-lightest-color",
                    t.mainLightestColor
                  ),
                  document.documentElement.style.setProperty(
                    "--nrb-main-background-color",
                    t.mainBackgroundColor
                  ),
                  document.documentElement.style.setProperty(
                    "--nrb-main-bg-darker-color",
                    t.mainBgDarkerColor
                  ),
                  document.documentElement.style.setProperty(
                    "--nrb-main-bg-darkest-color",
                    t.mainBgDarkestColor
                  ),
                  document.documentElement.style.setProperty(
                    "--nrb-main-hover-color",
                    t.mainHoverColor
                  ),
                  document.documentElement.style.setProperty(
                    "--nrb-main-dark",
                    t.darkerColor
                  ),
                  document.documentElement.style.setProperty(
                    "--nrb-main-darkest-color",
                    t.mainDarkestColor
                  ),
                  document.documentElement.style.setProperty(
                    "--nrb-main-lighter",
                    t.lighterColor
                  ),
                  document.documentElement.style.setProperty(
                    "--nrb-main-light",
                    t.lightColor
                  ),
                  document.documentElement.style.setProperty(
                    "--nrb-text-disabled-color",
                    t.textDisabledColor
                  ),
                  document.documentElement.style.setProperty(
                    "--nrb-main-gradient",
                    t.mainGradient
                  );
              }, []);
            })(),
            (() => {
              const e = me(ei);
              le(() => {
                const {
                  left: t,
                  leftMobile: n,
                  bottomMobile: r,
                  rightMobile: i,
                  bottom: o,
                  right: a,
                } = ((e) => {
                  const {
                      side: t,
                      marginSideMobile: n,
                      marginBottomDesktop: r,
                      marginBottomMobile: i,
                      marginSideDesktop: o,
                    } = e,
                    a = t || "right",
                    s = o || 80,
                    l = n || 20;
                  return {
                    left: "right" === a ? "auto" : `${s}px`,
                    right: "right" === a ? `${s}px` : "auto",
                    bottom: `${r || 50}px`,
                    leftMobile: "right" === a ? "auto" : `${l}px`,
                    rightMobile: "right" === a ? `${l}px` : "auto",
                    bottomMobile: `${i || 20}px`,
                  };
                })({
                  side: e.side,
                  marginSideDesktop: e.marginSideDesktop,
                  marginBottomDesktop: e.marginBottomDesktop,
                  marginSideMobile: e.marginSideMobile,
                  marginBottomMobile: e.marginBottomMobile,
                });
                document.documentElement.style.setProperty(
                  "--nrb-button-left",
                  t
                ),
                  document.documentElement.style.setProperty(
                    "--nrb-button-right",
                    a
                  ),
                  document.documentElement.style.setProperty(
                    "--nrb-button-bottom",
                    o
                  ),
                  document.documentElement.style.setProperty(
                    "--nrb-button-mobile-left",
                    n
                  ),
                  document.documentElement.style.setProperty(
                    "--nrb-button-mobile-right",
                    i
                  ),
                  document.documentElement.style.setProperty(
                    "--nrb-button-mobile-bottom",
                    r
                  );
              }, []);
            })(),
            v(
              Lt.div,
              { className: "root", ref: r },
              e,
              v(
                "style",
                null,
                "  \n  * {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    font-family: Inter, sans-serif !important;\n    letter-spacing: normal;\n    margin: 0;\n    padding: 0;\n    -moz-osx-font-smoothing: grayscale;\n    -webkit-font-smoothing: antialiased;\n    -webkit-tap-highlight-color: transparent;\n  }\n  \n  a, a:visited, a:focus, a:active, a:hover, :focus {\n    outline: none;\n  }\n"
              )
            )
          );
        };
      ((e, t, n, r) => {
        const i = n?.attributes.getNamedItem("id")?.value ?? "_hw",
          o = e[i];
        if (!o || !o.q)
          throw new Error(
            `Widget didn't find LoaderObject for instance [${i}]. The loading script was either modified, no call to 'init' method was done or there is conflicting object defined in \`window.${i}\` .`
          );
        if (e[`loaded-${i}`])
          throw new Error(
            `Widget with name [${i}] was already loaded. This means you have multiple instances with same identifier (e.g. '_hw')`
          );
        let a;
        for (let n = 0; n < o.q.length; n++) {
          const r = o.q[n],
            c = r[0];
          if (0 === n && "init" !== c)
            throw new Error(
              `Failed to start Widget [${i}]. 'init' must be called before other methods.`
            );
          if (0 === n || "init" !== c)
            if ("init" === c) {
              const n = Object.assign(t, r[1]),
                o = n.element ?? e.document.body;
              (a = o.appendChild(e.document.createElement("div"))),
                a.setAttribute("id", `widget-${i}`),
                (l = n),
                $(v(ns, { element: (s = a), ...l }), s),
                (e[`loaded-${i}`] = !0);
            } else console.warn(`Unsupported method [${c}]`, r[1]);
        }
        var s, l;
        e[i] = (e, ...t) => {
          "event" === e
            ? a?.dispatchEvent(
                new CustomEvent("widget-event", { detail: { name: t?.[0] } })
              )
            : console.warn(`Unsupported method [${e}]`, t);
        };
      })(
        window,
        {
          debug: !1,
          serviceBaseUrl: "https://api.norby.io",
          minimized: !0,
          apiKey: "5fb42d4cb7a21",
          emailLinkUniqId: "6ftGjJqn6Tqgybm",
          styles: {},
          mainColor: "#3E247E",
          popupBotAvatarColor: "#3E247E",
          multichat: !0,
          informationPage: !1,
          disableDetailsEdit: !1,
          imageTransferEnabled: !0,
          botName: "Norby",
          openAnimation: !1,
          hidden: !1,
          side: "right",
          lang: "en",
          languageList: [],
          width: 0,
          height: 0,
        },
        window.document.currentScript
      );
    })();
})();
