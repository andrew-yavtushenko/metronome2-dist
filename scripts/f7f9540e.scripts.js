;
!function (n) {
  function t(n, t, e) {
    e = (e || 0) - 1;
    for (var r = n.length; ++e < r;)
      if (n[e] === t)
        return e;
    return -1;
  }
  function e(n, e) {
    var r = typeof e;
    if (n = n.k, 'boolean' == r || e == h)
      return n[e];
    'number' != r && 'string' != r && (r = 'object');
    var u = 'number' == r ? e : j + e;
    return n = n[r] || (n[r] = {}), 'object' == r ? n[u] && -1 < t(n[u], e) ? 0 : -1 : n[u] ? 0 : -1;
  }
  function r(n) {
    var t = this.k, e = typeof n;
    if ('boolean' == e || n == h)
      t[n] = y;
    else {
      'number' != e && 'string' != e && (e = 'object');
      var r = 'number' == e ? n : j + n, u = t[e] || (t[e] = {});
      'object' == e ? (u[r] || (u[r] = [])).push(n) == this.b.length && (t[e] = b) : u[r] = y;
    }
  }
  function u(n) {
    return n.charCodeAt(0);
  }
  function a(n, t) {
    var e = n.m, r = t.m;
    if (n = n.l, t = t.l, n !== t) {
      if (n > t || typeof n == 'undefined')
        return 1;
      if (n < t || typeof t == 'undefined')
        return -1;
    }
    return e < r ? -1 : 1;
  }
  function o(n) {
    var t = -1, e = n.length, u = l();
    u['false'] = u['null'] = u['true'] = u.undefined = b;
    var a = l();
    for (a.b = n, a.k = u, a.push = r; ++t < e;)
      a.push(n[t]);
    return u.object === false ? (p(a), h) : a;
  }
  function i(n) {
    return '\\' + Q[n];
  }
  function f() {
    return m.pop() || [];
  }
  function l() {
    return d.pop() || {
      b: h,
      k: h,
      l: h,
      'false': b,
      m: 0,
      leading: b,
      maxWait: 0,
      'null': b,
      number: h,
      object: h,
      push: h,
      string: h,
      trailing: b,
      'true': b,
      undefined: b,
      n: h
    };
  }
  function c(n) {
    n.length = 0, m.length < C && m.push(n);
  }
  function p(n) {
    var t = n.k;
    t && p(t), n.b = n.k = n.l = n.object = n.number = n.string = n.n = h, d.length < C && d.push(n);
  }
  function s(n, t, e) {
    t || (t = 0), typeof e == 'undefined' && (e = n ? n.length : 0);
    var r = -1;
    e = e - t || 0;
    for (var u = Array(0 > e ? 0 : e); ++r < e;)
      u[r] = n[t + r];
    return u;
  }
  function v(r) {
    function m(n) {
      if (!n || ve.call(n) != V)
        return b;
      var t = n.valueOf, e = typeof t == 'function' && (e = fe(t)) && fe(e);
      return e ? n == e || fe(n) == e : it(n);
    }
    function d(n, t, e) {
      if (!n || !L[typeof n])
        return n;
      t = t && typeof e == 'undefined' ? t : tt.createCallback(t, e);
      for (var r = -1, u = L[typeof n] && Se(n), a = u ? u.length : 0; ++r < a && (e = u[r], !(t(n[e], e, n) === false)););
      return n;
    }
    function C(n, t, e) {
      var r;
      if (!n || !L[typeof n])
        return n;
      t = t && typeof e == 'undefined' ? t : tt.createCallback(t, e);
      for (r in n)
        if (t(n[r], r, n) === false)
          break;
      return n;
    }
    function Q(n, t, e) {
      var r, u = n, a = u;
      if (!u)
        return a;
      for (var o = arguments, i = 0, f = typeof e == 'number' ? 2 : o.length; ++i < f;)
        if ((u = o[i]) && L[typeof u])
          for (var l = -1, c = L[typeof u] && Se(u), p = c ? c.length : 0; ++l < p;)
            r = c[l], 'undefined' == typeof a[r] && (a[r] = u[r]);
      return a;
    }
    function X(n, t, e) {
      var r, u = n, a = u;
      if (!u)
        return a;
      var o = arguments, i = 0, f = typeof e == 'number' ? 2 : o.length;
      if (3 < f && 'function' == typeof o[f - 2])
        var l = tt.createCallback(o[--f - 1], o[f--], 2);
      else
        2 < f && 'function' == typeof o[f - 1] && (l = o[--f]);
      for (; ++i < f;)
        if ((u = o[i]) && L[typeof u])
          for (var c = -1, p = L[typeof u] && Se(u), s = p ? p.length : 0; ++c < s;)
            r = p[c], a[r] = l ? l(a[r], u[r]) : u[r];
      return a;
    }
    function Z(n) {
      var t, e = [];
      if (!n || !L[typeof n])
        return e;
      for (t in n)
        le.call(n, t) && e.push(t);
      return e;
    }
    function tt(n) {
      return n && typeof n == 'object' && !Ee(n) && le.call(n, '__wrapped__') ? n : new et(n);
    }
    function et(n) {
      this.__wrapped__ = n;
    }
    function rt(n, t, e, r) {
      function u() {
        var r = arguments, l = o ? this : t;
        return a || (n = t[i]), e.length && (r = r.length ? (r = Ce.call(r), f ? r.concat(e) : e.concat(r)) : e), this instanceof u ? (l = gt(n.prototype) ? ye(n.prototype) : {}, r = n.apply(l, r), gt(r) ? r : l) : n.apply(l, r);
      }
      var a = vt(n), o = !e, i = t;
      if (o) {
        var f = r;
        e = t;
      } else if (!a) {
        if (!r)
          throw new Yt();
        t = n;
      }
      return u;
    }
    function ut(n) {
      return Ie[n];
    }
    function at() {
      var n = (n = tt.indexOf) === $t ? t : n;
      return n;
    }
    function ot(n) {
      return function (t, e, r, u) {
        return typeof e != 'boolean' && e != h && (u = r, r = u && u[e] === t ? g : e, e = b), r != h && (r = tt.createCallback(r, u)), n(t, e, r, u);
      };
    }
    function it(n) {
      var t, e;
      return n && ve.call(n) == V && (t = n.constructor, !vt(t) || t instanceof t) ? (C(n, function (n, t) {
        e = t;
      }), e === g || le.call(n, e)) : b;
    }
    function ft(n) {
      return Ae[n];
    }
    function lt(n, t, e, r, u, a) {
      var o = n;
      if (typeof t != 'boolean' && t != h && (r = e, e = t, t = b), typeof e == 'function') {
        if (e = typeof r == 'undefined' ? e : tt.createCallback(e, r, 1), o = e(o), typeof o != 'undefined')
          return o;
        o = n;
      }
      if (r = gt(o)) {
        var i = ve.call(o);
        if (!J[i])
          return o;
        var l = Ee(o);
      }
      if (!r || !t)
        return r ? l ? s(o) : X({}, o) : o;
      switch (r = xe[i], i) {
      case P:
      case K:
        return new r(+o);
      case U:
      case H:
        return new r(o);
      case G:
        return r(o.source, A.exec(o));
      }
      i = !u, u || (u = f()), a || (a = f());
      for (var p = u.length; p--;)
        if (u[p] == n)
          return a[p];
      return o = l ? r(o.length) : {}, l && (le.call(n, 'index') && (o.index = n.index), le.call(n, 'input') && (o.input = n.input)), u.push(n), a.push(o), (l ? wt : d)(n, function (n, r) {
        o[r] = lt(n, t, e, g, u, a);
      }), i && (c(u), c(a)), o;
    }
    function ct(n) {
      var t = [];
      return C(n, function (n, e) {
        vt(n) && t.push(e);
      }), t.sort();
    }
    function pt(n) {
      for (var t = -1, e = Se(n), r = e.length, u = {}; ++t < r;) {
        var a = e[t];
        u[n[a]] = a;
      }
      return u;
    }
    function st(n, t, e, r, u, a) {
      var o = e === k;
      if (typeof e == 'function' && !o) {
        e = tt.createCallback(e, r, 2);
        var i = e(n, t);
        if (typeof i != 'undefined')
          return !!i;
      }
      if (n === t)
        return 0 !== n || 1 / n == 1 / t;
      var l = typeof n, p = typeof t;
      if (n === n && (!n || 'function' != l && 'object' != l) && (!t || 'function' != p && 'object' != p))
        return b;
      if (n == h || t == h)
        return n === t;
      if (p = ve.call(n), l = ve.call(t), p == z && (p = V), l == z && (l = V), p != l)
        return b;
      switch (p) {
      case P:
      case K:
        return +n == +t;
      case U:
        return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;
      case G:
      case H:
        return n == Xt(t);
      }
      if (l = p == W, !l) {
        if (le.call(n, '__wrapped__') || le.call(t, '__wrapped__'))
          return st(n.__wrapped__ || n, t.__wrapped__ || t, e, r, u, a);
        if (p != V)
          return b;
        var p = n.constructor, s = t.constructor;
        if (p != s && (!vt(p) || !(p instanceof p && vt(s) && s instanceof s)))
          return b;
      }
      for (s = !u, u || (u = f()), a || (a = f()), p = u.length; p--;)
        if (u[p] == n)
          return a[p] == t;
      var v = 0, i = y;
      if (u.push(n), a.push(t), l) {
        if (p = n.length, v = t.length, i = v == n.length, !i && !o)
          return i;
        for (; v--;)
          if (l = p, s = t[v], o)
            for (; l-- && !(i = st(n[l], s, e, r, u, a)););
          else if (!(i = st(n[v], s, e, r, u, a)))
            break;
        return i;
      }
      return C(t, function (t, o, f) {
        return le.call(f, o) ? (v++, i = le.call(n, o) && st(n[o], t, e, r, u, a)) : void 0;
      }), i && !o && C(n, function (n, t, e) {
        return le.call(e, t) ? i = -1 < --v : void 0;
      }), s && (c(u), c(a)), i;
    }
    function vt(n) {
      return typeof n == 'function';
    }
    function gt(n) {
      return !(!n || !L[typeof n]);
    }
    function yt(n) {
      return typeof n == 'number' || ve.call(n) == U;
    }
    function ht(n) {
      return typeof n == 'string' || ve.call(n) == H;
    }
    function bt(n, t, e) {
      var r = arguments, u = 0, a = 2;
      if (!gt(n))
        return n;
      if (e === k)
        var o = r[3], i = r[4], l = r[5];
      else {
        var p = y, i = f(), l = f();
        typeof e != 'number' && (a = r.length), 3 < a && 'function' == typeof r[a - 2] ? o = tt.createCallback(r[--a - 1], r[a--], 2) : 2 < a && 'function' == typeof r[a - 1] && (o = r[--a]);
      }
      for (; ++u < a;)
        (Ee(r[u]) ? wt : d)(r[u], function (t, e) {
          var r, u, a = t, f = n[e];
          if (t && ((u = Ee(t)) || m(t))) {
            for (a = i.length; a--;)
              if (r = i[a] == t) {
                f = l[a];
                break;
              }
            if (!r) {
              var c;
              o && (a = o(f, t), c = typeof a != 'undefined') && (f = a), c || (f = u ? Ee(f) ? f : [] : m(f) ? f : {}), i.push(t), l.push(f), c || (f = bt(f, t, k, o, i, l));
            }
          } else
            o && (a = o(f, t), typeof a == 'undefined' && (a = t)), typeof a != 'undefined' && (f = a);
          n[e] = f;
        });
      return p && (c(i), c(l)), n;
    }
    function mt(n) {
      for (var t = -1, e = Se(n), r = e.length, u = Mt(r); ++t < r;)
        u[t] = n[e[t]];
      return u;
    }
    function dt(n, t, e) {
      var r = -1, u = at(), a = n ? n.length : 0, o = b;
      return e = (0 > e ? _e(0, a + e) : e) || 0, a && typeof a == 'number' ? o = -1 < (ht(n) ? n.indexOf(t, e) : u(n, t, e)) : d(n, function (n) {
        return ++r < e ? void 0 : !(o = n === t);
      }), o;
    }
    function _t(n, t, e) {
      var r = y;
      t = tt.createCallback(t, e), e = -1;
      var u = n ? n.length : 0;
      if (typeof u == 'number')
        for (; ++e < u && (r = !!t(n[e], e, n)););
      else
        d(n, function (n, e, u) {
          return r = !!t(n, e, u);
        });
      return r;
    }
    function kt(n, t, e) {
      var r = [];
      t = tt.createCallback(t, e), e = -1;
      var u = n ? n.length : 0;
      if (typeof u == 'number')
        for (; ++e < u;) {
          var a = n[e];
          t(a, e, n) && r.push(a);
        }
      else
        d(n, function (n, e, u) {
          t(n, e, u) && r.push(n);
        });
      return r;
    }
    function jt(n, t, e) {
      t = tt.createCallback(t, e), e = -1;
      var r = n ? n.length : 0;
      if (typeof r != 'number') {
        var u;
        return d(n, function (n, e, r) {
          return t(n, e, r) ? (u = n, b) : void 0;
        }), u;
      }
      for (; ++e < r;) {
        var a = n[e];
        if (t(a, e, n))
          return a;
      }
    }
    function wt(n, t, e) {
      var r = -1, u = n ? n.length : 0;
      if (t = t && typeof e == 'undefined' ? t : tt.createCallback(t, e), typeof u == 'number')
        for (; ++r < u && t(n[r], r, n) !== false;);
      else
        d(n, t);
      return n;
    }
    function Ct(n, t, e) {
      var r = -1, u = n ? n.length : 0;
      if (t = tt.createCallback(t, e), typeof u == 'number')
        for (var a = Mt(u); ++r < u;)
          a[r] = t(n[r], r, n);
      else
        a = [], d(n, function (n, e, u) {
          a[++r] = t(n, e, u);
        });
      return a;
    }
    function xt(n, t, e) {
      var r = -1 / 0, a = r;
      if (!t && Ee(n)) {
        e = -1;
        for (var o = n.length; ++e < o;) {
          var i = n[e];
          i > a && (a = i);
        }
      } else
        t = !t && ht(n) ? u : tt.createCallback(t, e), wt(n, function (n, e, u) {
          e = t(n, e, u), e > r && (r = e, a = n);
        });
      return a;
    }
    function Ot(n, t) {
      var e = -1, r = n ? n.length : 0;
      if (typeof r == 'number')
        for (var u = Mt(r); ++e < r;)
          u[e] = n[e][t];
      return u || Ct(n, t);
    }
    function Et(n, t, e, r) {
      if (!n)
        return e;
      var u = 3 > arguments.length;
      t = tt.createCallback(t, r, 4);
      var a = -1, o = n.length;
      if (typeof o == 'number')
        for (u && (e = n[++a]); ++a < o;)
          e = t(e, n[a], a, n);
      else
        d(n, function (n, r, a) {
          e = u ? (u = b, n) : t(e, n, r, a);
        });
      return e;
    }
    function St(n, t, e, r) {
      var u = n ? n.length : 0, a = 3 > arguments.length;
      if (typeof u != 'number')
        var o = Se(n), u = o.length;
      return t = tt.createCallback(t, r, 4), wt(n, function (r, i, f) {
        i = o ? o[--u] : --u, e = a ? (a = b, n[i]) : t(e, n[i], i, f);
      }), e;
    }
    function It(n, t, e) {
      var r;
      t = tt.createCallback(t, e), e = -1;
      var u = n ? n.length : 0;
      if (typeof u == 'number')
        for (; ++e < u && !(r = t(n[e], e, n)););
      else
        d(n, function (n, e, u) {
          return !(r = t(n, e, u));
        });
      return !!r;
    }
    function At(n) {
      var r = -1, u = at(), a = n ? n.length : 0, i = ae.apply(Zt, Ce.call(arguments, 1)), f = [], l = a >= w && u === t;
      if (l) {
        var c = o(i);
        c ? (u = e, i = c) : l = b;
      }
      for (; ++r < a;)
        c = n[r], 0 > u(i, c) && f.push(c);
      return l && p(i), f;
    }
    function Nt(n, t, e) {
      if (n) {
        var r = 0, u = n.length;
        if (typeof t != 'number' && t != h) {
          var a = -1;
          for (t = tt.createCallback(t, e); ++a < u && t(n[a], a, n);)
            r++;
        } else if (r = t, r == h || e)
          return n[0];
        return s(n, 0, ke(_e(0, r), u));
      }
    }
    function $t(n, e, r) {
      if (typeof r == 'number') {
        var u = n ? n.length : 0;
        r = 0 > r ? _e(0, u + r) : r || 0;
      } else if (r)
        return r = Ft(n, e), n[r] === e ? r : -1;
      return n ? t(n, e, r) : -1;
    }
    function Bt(n, t, e) {
      if (typeof t != 'number' && t != h) {
        var r = 0, u = -1, a = n ? n.length : 0;
        for (t = tt.createCallback(t, e); ++u < a && t(n[u], u, n);)
          r++;
      } else
        r = t == h || e ? 1 : _e(0, t);
      return s(n, r);
    }
    function Ft(n, t, e, r) {
      var u = 0, a = n ? n.length : u;
      for (e = e ? tt.createCallback(e, r, 1) : Wt, t = e(t); u < a;)
        r = u + a >>> 1, e(n[r]) < t ? u = r + 1 : a = r;
      return u;
    }
    function Rt(n) {
      for (var t = -1, e = n ? xt(Ot(n, 'length')) : 0, r = Mt(0 > e ? 0 : e); ++t < e;)
        r[t] = Ot(n, t);
      return r;
    }
    function Tt(n, t) {
      for (var e = -1, r = n ? n.length : 0, u = {}; ++e < r;) {
        var a = n[e];
        t ? u[a] = t[e] : u[a[0]] = a[1];
      }
      return u;
    }
    function qt(n, t) {
      return Oe.fastBind || ge && 2 < arguments.length ? ge.call.apply(ge, arguments) : rt(n, t, Ce.call(arguments, 2));
    }
    function Dt(n, t, e) {
      function r() {
        ue(s), ue(v), l = 0, s = v = h;
      }
      function u() {
        var t = g && (!m || 1 < l);
        r(), t && (p !== false && (c = new Vt()), i = n.apply(f, o));
      }
      function a() {
        r(), (g || p !== t) && (c = new Vt(), i = n.apply(f, o));
      }
      var o, i, f, l = 0, c = 0, p = b, s = h, v = h, g = y;
      if (t = _e(0, t || 0), e === y)
        var m = y, g = b;
      else
        gt(e) && (m = e.leading, p = 'maxWait' in e && _e(t, e.maxWait || 0), g = 'trailing' in e ? e.trailing : g);
      return function () {
        if (o = arguments, f = this, l++, ue(v), p === false)
          m && 2 > l && (i = n.apply(f, o));
        else {
          var e = new Vt();
          !s && !m && (c = e);
          var r = p - (e - c);
          0 < r ? s || (s = se(a, r)) : (ue(s), s = h, c = e, i = n.apply(f, o));
        }
        return t !== p && (v = se(u, t)), i;
      };
    }
    function zt(n) {
      var t = Ce.call(arguments, 1);
      return se(function () {
        n.apply(g, t);
      }, 1);
    }
    function Wt(n) {
      return n;
    }
    function Pt(n) {
      wt(ct(n), function (t) {
        var e = tt[t] = n[t];
        tt.prototype[t] = function () {
          var n = this.__wrapped__, t = [n];
          return ce.apply(t, arguments), t = e.apply(tt, t), n && typeof n == 'object' && n === t ? this : new et(t);
        };
      });
    }
    function Kt() {
      return this.__wrapped__;
    }
    r = r ? nt.defaults(n.Object(), r, nt.pick(n, D)) : n;
    var Mt = r.Array, Ut = r.Boolean, Vt = r.Date, Gt = r.Function, Ht = r.Math, Jt = r.Number, Lt = r.Object, Qt = r.RegExp, Xt = r.String, Yt = r.TypeError, Zt = [], ne = Lt.prototype, te = r._, ee = Qt('^' + Xt(ne.valueOf).replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/valueOf|for [^\]]+/g, '.+?') + '$'), re = Ht.ceil, ue = r.clearTimeout, ae = Zt.concat, oe = Ht.floor, ie = Gt.prototype.toString, fe = ee.test(fe = Lt.getPrototypeOf) && fe, le = ne.hasOwnProperty, ce = Zt.push, pe = r.setImmediate, se = r.setTimeout, ve = ne.toString, ge = ee.test(ge = ve.bind) && ge, ye = ee.test(ye = Lt.create) && ye, he = ee.test(he = Mt.isArray) && he, be = r.isFinite, me = r.isNaN, de = ee.test(de = Lt.keys) && de, _e = Ht.max, ke = Ht.min, je = r.parseInt, we = Ht.random, Ce = Zt.slice, Ht = ee.test(r.attachEvent), Ht = ge && !/\n|true/.test(ge + Ht), xe = {};
    xe[W] = Mt, xe[P] = Ut, xe[K] = Vt, xe[M] = Gt, xe[V] = Lt, xe[U] = Jt, xe[G] = Qt, xe[H] = Xt, et.prototype = tt.prototype;
    var Oe = tt.support = {};
    Oe.fastBind = ge && !Ht, tt.templateSettings = {
      escape: /<%-([\s\S]+?)%>/g,
      evaluate: /<%([\s\S]+?)%>/g,
      interpolate: N,
      variable: '',
      imports: { _: tt }
    };
    var Ee = he, Se = de ? function (n) {
        return gt(n) ? de(n) : [];
      } : Z, Ie = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': '&#39;'
      }, Ae = pt(Ie), Ut = ot(function $e(n, t, e) {
        for (var r = -1, u = n ? n.length : 0, a = []; ++r < u;) {
          var o = n[r];
          e && (o = e(o, r, n)), Ee(o) ? ce.apply(a, t ? o : $e(o)) : a.push(o);
        }
        return a;
      }), Ne = ot(function (n, r, u) {
        var a = -1, i = at(), l = n ? n.length : 0, s = [], v = !r && l >= w && i === t, g = u || v ? f() : s;
        if (v) {
          var y = o(g);
          y ? (i = e, g = y) : (v = b, g = u ? g : (c(g), s));
        }
        for (; ++a < l;) {
          var y = n[a], h = u ? u(y, a, n) : y;
          (r ? !a || g[g.length - 1] !== h : 0 > i(g, h)) && ((u || v) && g.push(h), s.push(y));
        }
        return v ? (c(g.b), p(g)) : u && c(g), s;
      });
    return Ht && Y && typeof pe == 'function' && (zt = qt(pe, r)), pe = 8 == je(B + '08') ? je : function (n, t) {
      return je(ht(n) ? n.replace(F, '') : n, t || 0);
    }, tt.after = function (n, t) {
      return 1 > n ? t() : function () {
        return 1 > --n ? t.apply(this, arguments) : void 0;
      };
    }, tt.assign = X, tt.at = function (n) {
      for (var t = -1, e = ae.apply(Zt, Ce.call(arguments, 1)), r = e.length, u = Mt(r); ++t < r;)
        u[t] = n[e[t]];
      return u;
    }, tt.bind = qt, tt.bindAll = function (n) {
      for (var t = 1 < arguments.length ? ae.apply(Zt, Ce.call(arguments, 1)) : ct(n), e = -1, r = t.length; ++e < r;) {
        var u = t[e];
        n[u] = qt(n[u], n);
      }
      return n;
    }, tt.bindKey = function (n, t) {
      return rt(n, t, Ce.call(arguments, 2), k);
    }, tt.compact = function (n) {
      for (var t = -1, e = n ? n.length : 0, r = []; ++t < e;) {
        var u = n[t];
        u && r.push(u);
      }
      return r;
    }, tt.compose = function () {
      var n = arguments;
      return function () {
        for (var t = arguments, e = n.length; e--;)
          t = [n[e].apply(this, t)];
        return t[0];
      };
    }, tt.countBy = function (n, t, e) {
      var r = {};
      return t = tt.createCallback(t, e), wt(n, function (n, e, u) {
        e = Xt(t(n, e, u)), le.call(r, e) ? r[e]++ : r[e] = 1;
      }), r;
    }, tt.createCallback = function (n, t, e) {
      if (n == h)
        return Wt;
      var r = typeof n;
      if ('function' != r) {
        if ('object' != r)
          return function (t) {
            return t[n];
          };
        var u = Se(n);
        return function (t) {
          for (var e = u.length, r = b; e-- && (r = st(t[u[e]], n[u[e]], k)););
          return r;
        };
      }
      return typeof t == 'undefined' || $ && !$.test(ie.call(n)) ? n : 1 === e ? function (e) {
        return n.call(t, e);
      } : 2 === e ? function (e, r) {
        return n.call(t, e, r);
      } : 4 === e ? function (e, r, u, a) {
        return n.call(t, e, r, u, a);
      } : function (e, r, u) {
        return n.call(t, e, r, u);
      };
    }, tt.debounce = Dt, tt.defaults = Q, tt.defer = zt, tt.delay = function (n, t) {
      var e = Ce.call(arguments, 2);
      return se(function () {
        n.apply(g, e);
      }, t);
    }, tt.difference = At, tt.filter = kt, tt.flatten = Ut, tt.forEach = wt, tt.forIn = C, tt.forOwn = d, tt.functions = ct, tt.groupBy = function (n, t, e) {
      var r = {};
      return t = tt.createCallback(t, e), wt(n, function (n, e, u) {
        e = Xt(t(n, e, u)), (le.call(r, e) ? r[e] : r[e] = []).push(n);
      }), r;
    }, tt.initial = function (n, t, e) {
      if (!n)
        return [];
      var r = 0, u = n.length;
      if (typeof t != 'number' && t != h) {
        var a = u;
        for (t = tt.createCallback(t, e); a-- && t(n[a], a, n);)
          r++;
      } else
        r = t == h || e ? 1 : t || r;
      return s(n, 0, ke(_e(0, u - r), u));
    }, tt.intersection = function (n) {
      for (var r = arguments, u = r.length, a = -1, i = f(), l = -1, s = at(), v = n ? n.length : 0, g = [], y = f(); ++a < u;) {
        var h = r[a];
        i[a] = s === t && (h ? h.length : 0) >= w && o(a ? r[a] : y);
      }
      n:
        for (; ++l < v;) {
          var b = i[0], h = n[l];
          if (0 > (b ? e(b, h) : s(y, h))) {
            for (a = u, (b || y).push(h); --a;)
              if (b = i[a], 0 > (b ? e(b, h) : s(r[a], h)))
                continue n;
            g.push(h);
          }
        }
      for (; u--;)
        (b = i[u]) && p(b);
      return c(i), c(y), g;
    }, tt.invert = pt, tt.invoke = function (n, t) {
      var e = Ce.call(arguments, 2), r = -1, u = typeof t == 'function', a = n ? n.length : 0, o = Mt(typeof a == 'number' ? a : 0);
      return wt(n, function (n) {
        o[++r] = (u ? t : n[t]).apply(n, e);
      }), o;
    }, tt.keys = Se, tt.map = Ct, tt.max = xt, tt.memoize = function (n, t) {
      function e() {
        var r = e.cache, u = j + (t ? t.apply(this, arguments) : arguments[0]);
        return le.call(r, u) ? r[u] : r[u] = n.apply(this, arguments);
      }
      return e.cache = {}, e;
    }, tt.merge = bt, tt.min = function (n, t, e) {
      var r = 1 / 0, a = r;
      if (!t && Ee(n)) {
        e = -1;
        for (var o = n.length; ++e < o;) {
          var i = n[e];
          i < a && (a = i);
        }
      } else
        t = !t && ht(n) ? u : tt.createCallback(t, e), wt(n, function (n, e, u) {
          e = t(n, e, u), e < r && (r = e, a = n);
        });
      return a;
    }, tt.omit = function (n, t, e) {
      var r = at(), u = typeof t == 'function', a = {};
      if (u)
        t = tt.createCallback(t, e);
      else
        var o = ae.apply(Zt, Ce.call(arguments, 1));
      return C(n, function (n, e, i) {
        (u ? !t(n, e, i) : 0 > r(o, e)) && (a[e] = n);
      }), a;
    }, tt.once = function (n) {
      var t, e;
      return function () {
        return t ? e : (t = y, e = n.apply(this, arguments), n = h, e);
      };
    }, tt.pairs = function (n) {
      for (var t = -1, e = Se(n), r = e.length, u = Mt(r); ++t < r;) {
        var a = e[t];
        u[t] = [
          a,
          n[a]
        ];
      }
      return u;
    }, tt.partial = function (n) {
      return rt(n, Ce.call(arguments, 1));
    }, tt.partialRight = function (n) {
      return rt(n, Ce.call(arguments, 1), h, k);
    }, tt.pick = function (n, t, e) {
      var r = {};
      if (typeof t != 'function')
        for (var u = -1, a = ae.apply(Zt, Ce.call(arguments, 1)), o = gt(n) ? a.length : 0; ++u < o;) {
          var i = a[u];
          i in n && (r[i] = n[i]);
        }
      else
        t = tt.createCallback(t, e), C(n, function (n, e, u) {
          t(n, e, u) && (r[e] = n);
        });
      return r;
    }, tt.pluck = Ot, tt.range = function (n, t, e) {
      n = +n || 0, e = +e || 1, t == h && (t = n, n = 0);
      var r = -1;
      t = _e(0, re((t - n) / e));
      for (var u = Mt(t); ++r < t;)
        u[r] = n, n += e;
      return u;
    }, tt.reject = function (n, t, e) {
      return t = tt.createCallback(t, e), kt(n, function (n, e, r) {
        return !t(n, e, r);
      });
    }, tt.rest = Bt, tt.shuffle = function (n) {
      var t = -1, e = n ? n.length : 0, r = Mt(typeof e == 'number' ? e : 0);
      return wt(n, function (n) {
        var e = oe(we() * (++t + 1));
        r[t] = r[e], r[e] = n;
      }), r;
    }, tt.sortBy = function (n, t, e) {
      var r = -1, u = n ? n.length : 0, o = Mt(typeof u == 'number' ? u : 0);
      for (t = tt.createCallback(t, e), wt(n, function (n, e, u) {
          var a = o[++r] = l();
          a.l = t(n, e, u), a.m = r, a.n = n;
        }), u = o.length, o.sort(a); u--;)
        n = o[u], o[u] = n.n, p(n);
      return o;
    }, tt.tap = function (n, t) {
      return t(n), n;
    }, tt.throttle = function (n, t, e) {
      var r = y, u = y;
      return e === false ? r = b : gt(e) && (r = 'leading' in e ? e.leading : r, u = 'trailing' in e ? e.trailing : u), e = l(), e.leading = r, e.maxWait = t, e.trailing = u, n = Dt(n, t, e), p(e), n;
    }, tt.times = function (n, t, e) {
      n = -1 < (n = +n) ? n : 0;
      var r = -1, u = Mt(n);
      for (t = tt.createCallback(t, e, 1); ++r < n;)
        u[r] = t(r);
      return u;
    }, tt.toArray = function (n) {
      return n && typeof n.length == 'number' ? s(n) : mt(n);
    }, tt.transform = function (n, t, e, r) {
      var u = Ee(n);
      return t = tt.createCallback(t, r, 4), e == h && (u ? e = [] : (r = n && n.constructor, e = gt(r && r.prototype) ? ye(r && r.prototype) : {})), (u ? wt : d)(n, function (n, r, u) {
        return t(e, n, r, u);
      }), e;
    }, tt.union = function (n) {
      return Ee(n) || (arguments[0] = n ? Ce.call(n) : Zt), Ne(ae.apply(Zt, arguments));
    }, tt.uniq = Ne, tt.unzip = Rt, tt.values = mt, tt.where = kt, tt.without = function (n) {
      return At(n, Ce.call(arguments, 1));
    }, tt.wrap = function (n, t) {
      return function () {
        var e = [n];
        return ce.apply(e, arguments), t.apply(this, e);
      };
    }, tt.zip = function (n) {
      return n ? Rt(arguments) : [];
    }, tt.zipObject = Tt, tt.collect = Ct, tt.drop = Bt, tt.each = wt, tt.extend = X, tt.methods = ct, tt.object = Tt, tt.select = kt, tt.tail = Bt, tt.unique = Ne, Pt(tt), tt.chain = tt, tt.prototype.chain = function () {
      return this;
    }, tt.clone = lt, tt.cloneDeep = function (n, t, e) {
      return lt(n, y, t, e);
    }, tt.contains = dt, tt.escape = function (n) {
      return n == h ? '' : Xt(n).replace(T, ut);
    }, tt.every = _t, tt.find = jt, tt.findIndex = function (n, t, e) {
      var r = -1, u = n ? n.length : 0;
      for (t = tt.createCallback(t, e); ++r < u;)
        if (t(n[r], r, n))
          return r;
      return -1;
    }, tt.findKey = function (n, t, e) {
      var r;
      return t = tt.createCallback(t, e), d(n, function (n, e, u) {
        return t(n, e, u) ? (r = e, b) : void 0;
      }), r;
    }, tt.has = function (n, t) {
      return n ? le.call(n, t) : b;
    }, tt.identity = Wt, tt.indexOf = $t, tt.isArguments = function (n) {
      return ve.call(n) == z;
    }, tt.isArray = Ee, tt.isBoolean = function (n) {
      return n === y || n === false || ve.call(n) == P;
    }, tt.isDate = function (n) {
      return n ? typeof n == 'object' && ve.call(n) == K : b;
    }, tt.isElement = function (n) {
      return n ? 1 === n.nodeType : b;
    }, tt.isEmpty = function (n) {
      var t = y;
      if (!n)
        return t;
      var e = ve.call(n), r = n.length;
      return e == W || e == H || e == z || e == V && typeof r == 'number' && vt(n.splice) ? !r : (d(n, function () {
        return t = b;
      }), t);
    }, tt.isEqual = st, tt.isFinite = function (n) {
      return be(n) && !me(parseFloat(n));
    }, tt.isFunction = vt, tt.isNaN = function (n) {
      return yt(n) && n != +n;
    }, tt.isNull = function (n) {
      return n === h;
    }, tt.isNumber = yt, tt.isObject = gt, tt.isPlainObject = m, tt.isRegExp = function (n) {
      return n ? typeof n == 'object' && ve.call(n) == G : b;
    }, tt.isString = ht, tt.isUndefined = function (n) {
      return typeof n == 'undefined';
    }, tt.lastIndexOf = function (n, t, e) {
      var r = n ? n.length : 0;
      for (typeof e == 'number' && (r = (0 > e ? _e(0, r + e) : ke(e, r - 1)) + 1); r--;)
        if (n[r] === t)
          return r;
      return -1;
    }, tt.mixin = Pt, tt.noConflict = function () {
      return r._ = te, this;
    }, tt.parseInt = pe, tt.random = function (n, t) {
      n == h && t == h && (t = 1), n = +n || 0, t == h ? (t = n, n = 0) : t = +t || 0;
      var e = we();
      return n % 1 || t % 1 ? n + ke(e * (t - n + parseFloat('1e-' + ((e + '').length - 1))), t) : n + oe(e * (t - n + 1));
    }, tt.reduce = Et, tt.reduceRight = St, tt.result = function (n, t) {
      var e = n ? n[t] : g;
      return vt(e) ? n[t]() : e;
    }, tt.runInContext = v, tt.size = function (n) {
      var t = n ? n.length : 0;
      return typeof t == 'number' ? t : Se(n).length;
    }, tt.some = It, tt.sortedIndex = Ft, tt.template = function (n, t, e) {
      var r = tt.templateSettings;
      n || (n = ''), e = Q({}, e, r);
      var u, a = Q({}, e.imports, r.imports), r = Se(a), a = mt(a), o = 0, f = e.interpolate || R, l = '__p+=\'', f = Qt((e.escape || R).source + '|' + f.source + '|' + (f === N ? I : R).source + '|' + (e.evaluate || R).source + '|$', 'g');
      n.replace(f, function (t, e, r, a, f, c) {
        return r || (r = a), l += n.slice(o, c).replace(q, i), e && (l += '\'+__e(' + e + ')+\''), f && (u = y, l += '\';' + f + ';__p+=\''), r && (l += '\'+((__t=(' + r + '))==null?\'\':__t)+\''), o = c + t.length, t;
      }), l += '\';\n', f = e = e.variable, f || (e = 'obj', l = 'with(' + e + '){' + l + '}'), l = (u ? l.replace(x, '') : l).replace(O, '$1').replace(E, '$1;'), l = 'function(' + e + '){' + (f ? '' : e + '||(' + e + '={});') + 'var __t,__p=\'\',__e=_.escape' + (u ? ',__j=Array.prototype.join;function print(){__p+=__j.call(arguments,\'\')}' : ';') + l + 'return __p}';
      try {
        var c = Gt(r, 'return ' + l).apply(g, a);
      } catch (p) {
        throw p.source = l, p;
      }
      return t ? c(t) : (c.source = l, c);
    }, tt.unescape = function (n) {
      return n == h ? '' : Xt(n).replace(S, ft);
    }, tt.uniqueId = function (n) {
      var t = ++_;
      return Xt(n == h ? '' : n) + t;
    }, tt.all = _t, tt.any = It, tt.detect = jt, tt.findWhere = jt, tt.foldl = Et, tt.foldr = St, tt.include = dt, tt.inject = Et, d(tt, function (n, t) {
      tt.prototype[t] || (tt.prototype[t] = function () {
        var t = [this.__wrapped__];
        return ce.apply(t, arguments), n.apply(tt, t);
      });
    }), tt.first = Nt, tt.last = function (n, t, e) {
      if (n) {
        var r = 0, u = n.length;
        if (typeof t != 'number' && t != h) {
          var a = u;
          for (t = tt.createCallback(t, e); a-- && t(n[a], a, n);)
            r++;
        } else if (r = t, r == h || e)
          return n[u - 1];
        return s(n, _e(0, u - r));
      }
    }, tt.take = Nt, tt.head = Nt, d(tt, function (n, t) {
      tt.prototype[t] || (tt.prototype[t] = function (t, e) {
        var r = n(this.__wrapped__, t, e);
        return t == h || e && typeof t != 'function' ? r : new et(r);
      });
    }), tt.VERSION = '1.3.1', tt.prototype.toString = function () {
      return Xt(this.__wrapped__);
    }, tt.prototype.value = Kt, tt.prototype.valueOf = Kt, wt([
      'join',
      'pop',
      'shift'
    ], function (n) {
      var t = Zt[n];
      tt.prototype[n] = function () {
        return t.apply(this.__wrapped__, arguments);
      };
    }), wt([
      'push',
      'reverse',
      'sort',
      'unshift'
    ], function (n) {
      var t = Zt[n];
      tt.prototype[n] = function () {
        return t.apply(this.__wrapped__, arguments), this;
      };
    }), wt([
      'concat',
      'slice',
      'splice'
    ], function (n) {
      var t = Zt[n];
      tt.prototype[n] = function () {
        return new et(t.apply(this.__wrapped__, arguments));
      };
    }), tt;
  }
  var g, y = !0, h = null, b = !1, m = [], d = [], _ = 0, k = {}, j = +new Date() + '', w = 75, C = 40, x = /\b__p\+='';/g, O = /\b(__p\+=)''\+/g, E = /(__e\(.*?\)|\b__t\))\+'';/g, S = /&(?:amp|lt|gt|quot|#39);/g, I = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, A = /\w*$/, N = /<%=([\s\S]+?)%>/g, $ = ($ = /\bthis\b/) && $.test(v) && $, B = ' \t\x0B\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000', F = RegExp('^[' + B + ']*0+(?=.$)'), R = /($^)/, T = /[&<>"']/g, q = /['\n\r\t\u2028\u2029\\]/g, D = 'Array Boolean Date Function Math Number Object RegExp String _ attachEvent clearTimeout isFinite isNaN parseInt setImmediate setTimeout'.split(' '), z = '[object Arguments]', W = '[object Array]', P = '[object Boolean]', K = '[object Date]', M = '[object Function]', U = '[object Number]', V = '[object Object]', G = '[object RegExp]', H = '[object String]', J = {};
  J[M] = b, J[z] = J[W] = J[P] = J[K] = J[U] = J[V] = J[G] = J[H] = y;
  var L = {
      'boolean': b,
      'function': y,
      object: y,
      number: b,
      string: b,
      undefined: b
    }, Q = {
      '\\': '\\',
      '\'': '\'',
      '\n': 'n',
      '\r': 'r',
      '\t': 't',
      '\u2028': 'u2028',
      '\u2029': 'u2029'
    }, X = L[typeof exports] && exports, Y = L[typeof module] && module && module.exports == X && module, Z = L[typeof global] && global;
  !Z || Z.global !== Z && Z.window !== Z || (n = Z);
  var nt = v();
  typeof define == 'function' && typeof define.amd == 'object' && define.amd ? (n._ = nt, define(function () {
    return nt;
  })) : X && !X.nodeType ? Y ? (Y.exports = nt)._ = nt : X._ = nt : n._ = nt;
}(this);
(function () {
  'use strict';
  window.Sequencer || (window.Sequencer = {});
  Sequencer.MainCtrl = function (s, rootScope, q, settings, bufferProvider) {
    bufferProvider.getFiles().then(function (files) {
      bufferProvider.createAudioFiles(files);
      return rootScope.$on('AllAudioBuffered', function (event, response) {
        s.audios = _.map(response);
        return s.currentAudio = s.audios[0];
      });
    });
    s.beat = _.sortBy(_.map(settings.beat), function (beat) {
      return Math.min(beat.beatValue);
    });
    s.noteValue = _.sortBy(_.map(settings.noteValue), function (note) {
      return Math.min(note.noteValue);
    });
    s.subDivisions = _.map(settings.subDivision);
    s.currentBeat = s.beat[3];
    s.currentNoteValue = s.noteValue[2];
    s.currentBpm = settings.defaultBpm;
    window.bpm = function () {
      return s.currentBpm;
    };
    return s.meter = {
      bpm: function () {
        return s.currentBpm;
      },
      beat: function () {
        return s.currentBeat;
      },
      noteValue: function () {
        return s.currentNoteValue;
      }
    };
  };
}.call(this));
(function () {
  'use strict';
  window.Sequencer || (window.Sequencer = {});
  Sequencer.TrackCtrl = function (s, rootScope, q, timing, taskModel, audioScheduler) {
    s.tracks = {};
    s.trackAmmout = 0;
    s.newTrackName = 'New track';
    s.currentTrack = null;
    s.start = function (track) {
      console.profile(s.newTrackName);
      track.start();
    };
    s.stop = function (track) {
      track.stop();
      console.profileEnd();
    };
    s.createTrack = function (name) {
      s.currentTrack = {
        name: name,
        patterns: [],
        looped: true,
        currentPatternIndex: 0
      };
      return taskModel(s.currentTrack.patterns, timing(window.bpm).patternDuration, s.currentTrack.looped, s.currentTrack.currentPatternIndex).then(function (response) {
        s.currentTrack.patternWorker = response;
        s.currentTrack.start = function () {
          return s.currentTrack.patternWorker.start();
        };
        s.currentTrack.stop = function () {
          return s.currentTrack.patternWorker.stop();
        };
        return s.tracks[name] = s.currentTrack;
      });
    };
    s.createPattern = function (track, beat, noteValue) {
      var availableSubDivisions, pattern;
      availableSubDivisions = _.compact(_.map(s.subDivisions, function (subDivision) {
        if (subDivision.value >= noteValue.value) {
          return subDivision;
        }
      }));
      s.currentTrack = _.find(s.tracks, track);
      pattern = {
        availableSubDivisions: availableSubDivisions,
        currentSubDivision: availableSubDivisions[0],
        beat: beat,
        noteValue: noteValue,
        lines: [],
        start: function () {
          return _.each(this.lines, function (line) {
            return line.output.start();
          });
        },
        stop: function () {
          return _.each(this.lines, function (line) {
            return line.output.stop();
          });
        }
      };
      return s.currentTrack.patterns.push(pattern);
    };
    s.createLine = function (pattern, sound, subDivision) {
      var currentLine, notesArr;
      notesArr = function () {
        var arr;
        arr = new Array(Math.ceil(pattern.beat.value * subDivision.value / pattern.noteValue.value));
        arr = _.map(arr, function (num, key, array) {
          var correctNote;
          if (pattern.beat.value * subDivision.value % pattern.noteValue.value !== 0 && ++key * subDivision.value > Math.floor(pattern.beat.value * subDivision.value / pattern.noteValue.value) * subDivision.value) {
            correctNote = _.find(pattern.availableSubDivisions, function (availableSubDivision) {
              if (availableSubDivision.value === subDivision.value * 2) {
                return availableSubDivision;
              }
            });
          } else {
            correctNote = subDivision;
          }
          return {
            height: 0,
            value: correctNote.value,
            sound: sound,
            start: function () {
              return audioScheduler.schedule(this, this.sound);
            }
          };
        });
        return arr;
      };
      currentLine = {
        sound: sound,
        subDivision: subDivision,
        notes: notesArr(),
        looped: false,
        currentLineIndex: 0
      };
      return taskModel(currentLine.notes, timing(window.bpm).noteDuration, currentLine.looped, currentLine.currentLineIndex).then(function (response) {
        currentLine.output = response;
        return pattern.lines.push(currentLine);
      });
    };
    s.deletePattern = function (track, pattern) {
      track.patterns.splice(track.patterns.indexOf(pattern), 1);
      return --track.currentPatternIndex;
    };
    s.deleteLine = function (pattern, line) {
      pattern.lines.splice(pattern.lines.indexOf(line), 1);
      return --pattern.currentLineIndex;
    };
    return s.updateNote = function (line, note) {
      var currentNote;
      currentNote = _.find(line.notes, function (missingNote) {
        return missingNote === note;
      });
      if (currentNote.height === 0) {
        return currentNote.height = 0.4;
      } else if (currentNote.height === 0.4) {
        return currentNote.height = 1;
      } else {
        return currentNote.height = 0;
      }
    };
  };
}.call(this));
(function () {
  'use strict';
  window.Sequencer || (window.Sequencer = {});
  Sequencer.settings = function () {
    var beat, defaultBpm, noteValue, sounds, subDivision;
    sounds = [
      {
        fileName: 'hat',
        title: 'Hi-hat'
      },
      {
        fileName: 'snare',
        title: 'Snare drum'
      },
      {
        fileName: 'kick',
        title: 'Kick drum'
      }
    ];
    defaultBpm = 120;
    subDivision = [
      {
        name: 'Semibreve',
        value: 1
      },
      {
        name: 'Minim',
        value: 2
      },
      {
        name: 'Crochet',
        value: 4
      },
      {
        name: 'Quaver',
        value: 8
      },
      {
        name: 'Quaver triplet',
        value: 12
      },
      {
        name: 'Semiquaver',
        value: 16
      },
      {
        name: 'Semiquaver triplet',
        value: 24
      },
      {
        name: 'Demiquaver',
        value: 32
      },
      {
        name: 'Demiquaver triplet',
        value: 48
      },
      {
        name: 'Hemidemisemiquaver',
        value: 64
      }
    ];
    beat = [
      {
        name: '1',
        value: 1
      },
      {
        name: '2',
        value: 2
      },
      {
        name: '3',
        value: 3
      },
      {
        name: '4',
        value: 4
      },
      {
        name: '5',
        value: 5
      },
      {
        name: '6',
        value: 6
      },
      {
        name: '7',
        value: 7
      },
      {
        name: '8',
        value: 8
      },
      {
        name: '9',
        value: 9
      },
      {
        name: '10',
        value: 10
      },
      {
        name: '11',
        value: 11
      },
      {
        name: '12',
        value: 12
      },
      {
        name: '13',
        value: 13
      },
      {
        name: '14',
        value: 14
      },
      {
        name: '15',
        value: 15
      },
      {
        name: '16',
        value: 16
      }
    ];
    noteValue = [
      {
        name: '1',
        value: 1
      },
      {
        name: '2',
        value: 2
      },
      {
        name: '4',
        value: 4
      },
      {
        name: '8',
        value: 8
      },
      {
        name: '16',
        value: 16
      }
    ];
    return {
      beat: beat,
      noteValue: noteValue,
      sounds: sounds,
      subDivision: subDivision,
      defaultBpm: defaultBpm
    };
  };
}.call(this));
(function () {
  'use strict';
  window.Sequencer || (window.Sequencer = {});
  Sequencer.scheduler = function () {
    var schedule;
    schedule = function (note, sound, delay, duration) {
      var source;
      if (delay == null) {
        delay = 0;
      }
      if (duration == null) {
        duration = 0;
      }
      if (note.height) {
        sound.buffer.gain = note.height;
        source = context.createBufferSource();
        source.buffer = sound.buffer;
        source.connect(context.destination);
        if (!source.start) {
          source.start = source.noteOn;
        }
        return source.start(context.currentTime + delay, 0, duration);
      }
    };
    return { schedule: schedule };
  };
}.call(this));
(function () {
  'use strict';
  window.Sequencer || (window.Sequencer = {});
  Sequencer.timing = function () {
    return function (bpm) {
      var noteDuration, patternDuration;
      noteDuration = function (note) {
        return 60 / bpm() * 4000 / note.value;
      };
      patternDuration = function (pattern) {
        return pattern.beat.value / pattern.noteValue.value * noteDuration({ value: 1 });
      };
      return {
        noteDuration: noteDuration,
        patternDuration: patternDuration
      };
    };
  };
}.call(this));
(function () {
  'use strict';
  window.Sequencer || (window.Sequencer = {});
  Sequencer.fileProvider = function (q, http) {
    return {
      getFile: function (height) {
        var deferred, request;
        deferred = q.defer();
        request = http.get('audio/' + height + '.mp3', { responseType: 'arraybuffer' });
        request.success(function (data) {
          return deferred.resolve(data);
        });
        request.error(function (data) {
          return deferred.resolve(data);
        });
        return deferred.promise;
      }
    };
  };
}.call(this));
(function () {
  'use strict';
  window.Sequencer || (window.Sequencer = {});
  Sequencer.bufferProvider = function (q, rootScope, settings, fileProvider) {
    var createAudioFiles, getFiles;
    getFiles = function () {
      var deferred, files;
      files = [];
      deferred = q.defer();
      _.each(settings.sounds, function (sound) {
        return fileProvider.getFile(sound.fileName).then(function (response) {
          window[sound.fileName] = response;
          files.push({
            'key': sound,
            'value': response
          });
          if (files.length === settings.sounds.length) {
            return deferred.resolve(files);
          }
        });
      });
      return deferred.promise;
    };
    createAudioFiles = function (files) {
      var renderedSounds;
      renderedSounds = {};
      return _.each(files, function (sound, key, array) {
        return context.decodeAudioData(sound.value, function (buffer) {
          renderedSounds[sound.key.fileName] = {
            title: sound.key.title,
            buffer: buffer
          };
          if (key + 1 === array.length) {
            return rootScope.$broadcast('AllAudioBuffered', renderedSounds);
          }
        }, function (error) {
          return console.error(error);
        });
      });
    };
    return {
      getFiles: getFiles,
      createAudioFiles: createAudioFiles
    };
  };
}.call(this));
(function () {
  'use strict';
  window.Sequencer || (window.Sequencer = {});
  Sequencer.taskModel = function (q, rootScope) {
    var createWorker;
    createWorker = function (name) {
      var deferred, frame, resolveWorker;
      resolveWorker = function (event) {
        if (event.data === 'scheduler') {
          deferred.resolve(frame.contentWindow);
          rootScope.$apply();
          return window.removeEventListener('message', resolveWorker, true);
        }
      };
      deferred = q.defer();
      frame = document.createElement('iframe');
      frame.src = name + '.html';
      document.body.appendChild(frame);
      window.addEventListener('message', resolveWorker, true);
      return deferred.promise;
    };
    return function (sourceTasks, timingFunction, sourceIsLooped, sourceCurrentTaskIndex) {
      var deferred, instance;
      deferred = q.defer();
      instance = {
        tasks: sourceTasks,
        getTaskDuration: timingFunction,
        looped: sourceIsLooped,
        currentTaskIndex: sourceCurrentTaskIndex,
        moveToNextTask: function () {
          if (this.currentTaskIndex + 1 === this.tasks.length) {
            return this.currentTaskIndex = 0;
          } else {
            return this.currentTaskIndex++;
          }
        }
      };
      createWorker('task_scheduler').then(function (worker) {
        return deferred.resolve(worker.init(instance));
      });
      return deferred.promise;
    };
  };
}.call(this));
(function () {
  'use strict';
  window.Sequencer || (window.Sequencer = {});
  Sequencer['setupDependencies'] = function (app) {
    app.factory('timing', [Sequencer.timing]);
    app.factory('scheduler', [Sequencer.scheduler]);
    app.factory('settings', [Sequencer.settings]);
    app.factory('fileProvider', [
      '$q',
      '$http',
      Sequencer.fileProvider
    ]);
    app.factory('bufferProvider', [
      '$q',
      '$rootScope',
      'settings',
      'fileProvider',
      Sequencer.bufferProvider
    ]);
    return app.factory('taskModel', [
      '$q',
      '$rootScope',
      Sequencer.taskModel
    ]);
  };
  Sequencer.MainCtrl.$inject = [
    '$scope',
    '$rootScope',
    '$q',
    'settings',
    'bufferProvider'
  ];
  Sequencer.TrackCtrl.$inject = [
    '$scope',
    '$rootScope',
    '$q',
    'timing',
    'taskModel',
    'scheduler'
  ];
}.call(this));
(function () {
  'use strict';
  var isUnlocked, unlock;
  window.Sequencer || (window.Sequencer = {});
  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  window.context = new AudioContext();
  window.sequencer = angular.module('sequencer', ['ngRoute']).config([
    '$routeProvider',
    function ($routeProvider) {
      return $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: Sequencer.MainCtrl
      }).otherwise({ redirectTo: '/' });
    }
  ]);
  Sequencer.setupDependencies(sequencer);
  window.ang = function () {
    return angular.element(document.querySelector('[ng-app]')).injector();
  };
  isUnlocked = false;
  unlock = function () {
    var buffer, source;
    buffer = context.createBuffer(1, 1, 22050);
    source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source.noteOn(0);
    return setTimeout(function () {
      if (source.playbackState === source.PLAYING_STATE || source.playbackState === source.FINISHED_STATE) {
        isUnlocked = true;
      }
      return window.removeEventListener('touchstart', unlock, true);
    }, 10);
  };
  window.addEventListener('touchstart', unlock, true);
}.call(this));
(function () {
  'use strict';
}.call(this));