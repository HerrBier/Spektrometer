(this.webpackJsonpms = this.webpackJsonpms || []).push([
    [0],
    [
        ,
        ,
        ,
        ,
        ,
        function (e, t, a) {
            e.exports = a.p + "static/media/Skala.8349afd1.svg";
        },
        function (e, t, a) {
            e.exports = a.p + "static/media/Efeld.7d33396d.svg";
        },
        function (e, t, a) {
            e.exports = a(14);
        },
        ,
        ,
        ,
        ,
        function (e, t, a) {},
        function (e, t, a) {},
        function (e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                l = a(4),
                c = a.n(l),
                i = (a(12), a(1)),
                s = a(2),
                m = a(5),
                u = a.n(m),
                o = a(6),
                d = a.n(o);
            function v(e) {
                var t = 3 / Math.sqrt(e.Bf),
                    a = 3 / Math.sqrt(e.Ba),
                    n = Math.ceil(5 / Math.sqrt(e.Ef));
                return r.a.createElement(
                    "div",
                    { className: "ms-simulation" },
                    e.particles.map(function (e, t) {
                        return r.a.createElement("div", { key: t, className: "point", style: { left: e.x, top: e.y, backgroundColor: e.t } });
                    }),
                    r.a.createElement("div", { className: "blendeOben" }),
                    r.a.createElement("div", { className: "blendeUnten" }),
                    e.Bf > 0 &&
                        r.a.createElement(
                            "div",
                            { className: "magnetfeldZeichen" },
                            Object(s.a)(Array(300)).map(function (e, a) {
                                return r.a.createElement("div", { key: a, style: { margin: t } });
                            })
                        ),
                    e.Ef > 0 &&
                        r.a.createElement(
                            "div",
                            { className: "efeldZeichen" },
                            Object(s.a)(Array(30)).map(function (e, t) {
                                return r.a.createElement("div", { key: t, style: { marginRight: n, marginLeft: n } }, r.a.createElement("img", { src: d.a, alt: "" }));
                            })
                        ),
                    r.a.createElement("div", { className: "kondensator kondensatorOben" }),
                    r.a.createElement("div", { className: "kondensator kondensatorUnten" }),
                    r.a.createElement("div", { className: "ionenQuelle" }, r.a.createElement("div", { className: "ladung" }, "\\(q = +e\\)")),
                    r.a.createElement("div", { className: "blendeUnten blendeAnalysatorUnten " }),
                    r.a.createElement("div", { className: "schirm" }),
                    r.a.createElement("div", { className: "skala" }, r.a.createElement("img", { src: u.a, alt: "Skala" })),
                    r.a.createElement(
                        "div",
                        { className: "analysator" },
                        e.Ba > 0 &&
                            r.a.createElement(
                                "div",
                                { className: "magnetfeldZeichen" },
                                Object(s.a)(Array(500)).map(function (e, t) {
                                    return r.a.createElement("div", { key: t, style: { margin: a } });
                                })
                            )
                    )
                );
            }
            a(13);
            var E = function () {
                var e = Object(n.useState)(!1),
                    t = Object(i.a)(e, 2),
                    a = t[0],
                    l = t[1],
                    c = Object(n.useState)(0),
                    s = Object(i.a)(c, 2),
                    m = s[0],
                    u = s[1],
                    o = Object(n.useState)([]),
                    d = Object(i.a)(o, 2),
                    E = d[0],
                    f = d[1],
                    b = Object(n.useState)(0),
                    p = Object(i.a)(b, 2),
                    h = p[0],
                    g = p[1],
                    y = Object(n.useState)(0),
                    x = Object(i.a)(y, 2),
                    k = x[0],
                    O = x[1],
                    N = Object(n.useState)(0),
                    j = Object(i.a)(N, 2),
                    B = j[0],
                    w = j[1],
                    A = Object(n.useState)("A"),
                    M = Object(i.a)(A, 2),
                    S = M[0],
                    C = M[1];
                return (
                    Object(n.useEffect)(
                        function () {
                            window.MathJax && window.MathJax.typeset();
                        },
                        [S]
                    ),
                    Object(n.useEffect)(
                        function () {
                            f([]);
                        },
                        [h, k, B, S]
                    ),
                    Object(n.useEffect)(
                        function () {
                            var e = setInterval(function () {
                                if (a) {
                                    if (
                                        (u(function (e) {
                                            return e + 1;
                                        }),
                                        m % 8 === 0)
                                    ) {
                                        var e, t;
                                        if ("B" === S) {
                                            var n = Math.random();
                                            n < 0.4 ? ((e = 1.23457), (t = "firebrick")) : n < 0.8 ? ((e = 0.5), (t = "deeppink")) : n < 1 && ((e = 2.7), (t = "orange"));
                                        } else "A" === S && ((e = 4), (t = "green"));
                                        f(E.concat({ x: -40, y: 150, vx: 2 + 1.2 * (Math.random() - 0.5), vy: 0, m: e, t: t, passedFilter: !1 }));
                                    }
                                    E.forEach(function (e, t) {
                                        if (!(e.passedFilter && e.x > 600 && e.x < 650 && (e.y < 145 || e.y > 155))) {
                                            e.x > 660 && (e.passedFilter = !0),
                                                ((e.x < 600 && (e.y > 300 || e.y < 0)) || (e.x > 600 && e.x < 650 && (e.y < 145 || e.y > 155)) || e.x > 1e3) &&
                                                    f(
                                                        E.filter(function (e, a) {
                                                            return t !== a;
                                                        })
                                                    );
                                            var a = Math.sqrt(e.vx * e.vx + e.vy * e.vy),
                                                n = e.vx / a,
                                                r = e.vy / a,
                                                l = 0,
                                                c = 0;
                                            e.x >= 0 && e.x < 600 ? ((l = k), (c = h)) : e.x > 650 && ((l = B), (c = 0));
                                            var i = (+a * l) / e.m,
                                                s = r * i,
                                                m = -n * i;
                                            (e.vx += s), (e.vy += m), (e.vy += c / e.m), (e.x += e.vx), (e.y += e.vy);
                                        }
                                    });
                                }
                            }, 7);
                            return function () {
                                return clearInterval(e);
                            };
                        },
                        [E, m, k, h, a, B, S]
                    ),
                    r.a.createElement(
                        r.a.Fragment,
                        null,
                        r.a.createElement(v, { time: m, particles: E, Bf: k, Ba: B, Ef: h }),
                        r.a.createElement(
                            "div",
                            { className: "settingFilter setting" },
                            r.a.createElement("input", {
                                type: "range",
                                min: "0",
                                max: "0.01",
                                step: "0.001",
                                value: h,
                                onChange: function (e) {
                                    return g(e.target.value);
                                },
                            }),
                            "\\( E_{\\mathrm{F}} = \\)",
                            " ",
                            (100 * h).toPrecision(1),
                            " ",
                            " \\( \\rm{\\frac{V}{m}} \\)",
                            r.a.createElement("br", null),
                            " ",
                            r.a.createElement("input", {
                                type: "range",
                                min: "0",
                                max: "0.01",
                                step: "0.001",
                                value: k,
                                onChange: function (e) {
                                    return O(e.target.value);
                                },
                            }),
                            "\\( B_{\\rm{F}} = \\)",
                            " ",
                            k,
                            " ",
                            " \\(\\rm{T} \\)"
                        ),
                        r.a.createElement(
                            "div",
                            { className: "settingAnalysator setting" },
                            r.a.createElement("input", {
                                type: "range",
                                min: "0",
                                max: "0.05",
                                step: "0.005",
                                value: B,
                                onChange: function (e) {
                                    return w(e.target.value);
                                },
                            }),
                            "\\( B_{\\mathrm{A}} = \\)",
                            " ",
                            B,
                            " ",
                            " \\(\\mathrm{T} \\)"
                        ),
                        r.a.createElement(
                            "div",
                            { className: "constants" },
                            "Konstanten: ",
                            r.a.createElement("br", null),
                            r.a.createElement("span", null, "\\( 1 \\, e = 1{,}6 \\cdot 10^{-19} \\, \\mathrm{C} \\)", " "),
                            r.a.createElement("br", null),
                            r.a.createElement("span", null, "\\( 1 \\, u = 1{,}66 \\cdot 10^{-27} \\, \\mathrm{kg} \\)")
                        ),
                        r.a.createElement(
                            "div",
                            { className: "controls" },
                            r.a.createElement("h1", null, "Massenspektrometer"),
                            r.a.createElement(
                                "select",
                                {
                                    onChange: function (e) {
                                        return C(e.target.value);
                                    },
                                    value: S,
                                },
                                r.a.createElement("option", { value: "A" }, "Probe A"),
                                r.a.createElement("option", { value: "B" }, "Probe B")
                            ),
                            r.a.createElement("input", {
                                type: "button",
                                onClick: function () {
                                    return l(!a);
                                },
                                value: a ? "Stop" : "Start",
                            }),
                            r.a.createElement("input", {
                                type: "button",
                                onClick: function () {
                                    return f([]);
                                },
                                value: "Zur\xfccksetzen",
                            }),
                            "B" === S &&
                                r.a.createElement(
                                    "div",
                                    { className: "anweisungen" },
                                    r.a.createElement(
                                        "ol",
                                        null,
                                        r.a.createElement("li", null, "Bestimme die Massen aller Teilchen in der Blutprobe A. "),
                                        r.a.createElement(
                                            "li",
                                            null,
                                            "Beurteile, ob die Probe das weit verbreitete Anabolikum ",
                                            r.a.createElement("b", null, "Methandienol"),
                                            " enth\xe4lt.",
                                            r.a.createElement("br", null),
                                            "Methandienol ist C",
                                            r.a.createElement("sub", null, "20"),
                                            "H",
                                            r.a.createElement("sub", null, "28"),
                                            "O",
                                            r.a.createElement("sub", null, "2"),
                                            " und hat die Masse \\( m = 300{,}4 \\, u \\)"
                                        )
                                    )
                                ),
                            "A" === S &&
                                r.a.createElement(
                                    "div",
                                    { className: "anweisungen" },
                                    "Die Probe enth\xe4lt nur eine Teilchensorte.",
                                    r.a.createElement(
                                        "ol",
                                        null,
                                        r.a.createElement("li", null, "Bestimme die Masse \\(m\\) der Teilchen. "),
                                        r.a.createElement("li", null, "Warum treffen die Teilchen nicht exakt an dem selben Ort auf? Beschreibe eine m\xf6gliche Ursache und eine Verbesserungsm\xf6glichkeit. ")
                                    )
                                )
                        )
                    )
                );
            };
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            c.a.render(r.a.createElement(E, null), document.getElementById("root")),
                "serviceWorker" in navigator &&
                    navigator.serviceWorker.ready.then(function (e) {
                        e.unregister();
                    });
        },
    ],
    [[7, 1, 2]],
]);