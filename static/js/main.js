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
            e.exports = a.p + "static/media/Efeld.svg";
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
                var t = 2.8 / Math.sqrt(e.Bf),
					t2 = 2.8 / Math.sqrt(-e.Bf),
                    a = 6 / Math.sqrt(e.Ba),
                    mbfeldfilter = 2 / Math.sqrt(e.Ba),
				    mbfeldfilter2 = 2 / Math.sqrt(-e.Ba),
                    n = Math.ceil(2.275 / Math.sqrt(e.Ef)),
					n2 = Math.ceil(2.275 / Math.sqrt(-e.Ef))
                return r.a.createElement(
                    "div",
                    { className: "ms-simulation" },
                    e.particles.map(function (e, t) {
                        return r.a.createElement("div", { key: t, className: "point", style: { left: e.x, top: e.y, backgroundColor: e.t } });                    }),
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
					e.Bf < 0 &&
                        r.a.createElement(
                            "div",
                            { className: "magnetfeldZeichen2" },
                            Object(s.a)(Array(300)).map(function (e, a) {
                                return r.a.createElement("div", { key: a, style: { margin: t2 } });
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
						 e.Ef < 0 &&
                        r.a.createElement(
                            "div",
                            { className: "efeldZeichen2" },
                            Object(s.a)(Array(30)).map(function (e, t) {
                                return r.a.createElement("div", { key: t, style: { marginRight: n2, marginLeft: n2 } }, r.a.createElement("img", { src: "/spectrometer/static/media/Efeld2.svg", alt: "" }));
                            })
                        ),
                    r.a.createElement("div", { className: "kondensator kondensatorOben" }),
                    r.a.createElement("div", { className: "kondensator kondensatorUnten" }),
                    r.a.createElement("div", { className: "ionenQuelle" },
                    r.a.createElement("div", { className: "quelle" }, "Quelle"),
                    r.a.createElement("div", { className: "ladung" }, "\\(q = -e\\)")),
                    r.a.createElement("div", { className: "blendeUnten blendeAnalysatorUnten " }),
                    r.a.createElement("div", { className: "schirm" }),
                    r.a.createElement("div", { className: "skala" }, r.a.createElement("img", { src: u.a, alt: "Skala" })),
                    r.a.createElement(
                        "div",
                        { className: "analysator" },
                        e.Ba > 0 &&
                            r.a.createElement(
                                "div",
                                { className: "magnetfeldFilter" },
                                Object(s.a)(Array(500)).map(function (e, t) {
                                    return r.a.createElement("div", { key: t, style: { margin: mbfeldfilter } });
                                })
                            ),
						e.Ba < 0 &&
                            r.a.createElement(
                                "div",
                                { className: "magnetfeldFilter2" },
                                Object(s.a)(Array(500)).map(function (e, t) {
                                    return r.a.createElement("div", { key: t, style: { margin: mbfeldfilter2 } });
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
                    speed = 1,
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
                                            n < 0.34 ? ((e = -2), (t = "firebrick"), (speed = 3.0+0.8*(Math.random()-.5))) : n < 0.67 ? ((e = -1.223), (t = "deeppink"), (speed = 3.64+1*(Math.random()-.5))) : n < 1 && ((e = -2.7), (t = "LightSeaGreen"), (speed = 2.5+0.6*(Math.random()-.5)));
                                        } 
                                        else "A" === S && ((e = -1.4), (t = "DarkViolet"), (speed = 3.2+1*(Math.random()-.5)));
                                        f(E.concat({ x: -40, y: 150, vx: speed, vy: 0, m: e, t: t, passedFilter: !1 }));
                                    }
                                    E.forEach(function (e, t) {
                                        if (!(e.passedFilter && e.x > 600 && e.x < 650 && (e.y < 145 || e.y > 155))) {
                                            e.x > 660 && (e.passedFilter = !0),
                                                ((e.x < 600 && (e.y > 300 || e.y < 10)) || (e.x > 600 && e.x < 650 && (e.y < 146 || e.y > 154)) || e.x > 915 || e.y < -260 || e.y >300 ) &&
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
                                            e.x >= 0 && e.x < 600 ? ((l = (-1)*k), (c = (-1)*h)) : e.x > 650 && ((l = (-1)*B), (c = 0));
                                            var i = (+a * l) / e.m,
                                                s = r * i,
                                                m = -n * i;
                                            (e.vx += s), (e.vy += m), (e.vy += c / e.m), (e.x += e.vx), (e.y += e.vy)
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
								start: "0.00",
                                step: "0.0005",
                                value: k,
                                onChange: function (e) {
                                    return O(e.target.value);
                                },
                            }),
                            "\\( B_{\\rm{F}} = \\)",
                            " ",
                            k,
                            " ",
                            " \\(\\rm{T} \\)",
                            r.a.createElement("br", null),
                            " ",
                            r.a.createElement("input", {
                                type: "range",
                                min: "0",
                                max: "0.02",
                                step: "0.001",
								start: "0.00",
                                value: h,
                                onChange: function (e) {
                                    return g(e.target.value);
                                },
                            }),
                            "\\( E_{\\mathrm{F}} = \\)",
                            " ",
                            (100 * h).toPrecision(2),
                            " ",
                            " \\( \\rm{\\frac{V}{m}} \\)"
                        ),
                        r.a.createElement(
                            "div",
                            { className: "settingAnalysator setting" },
                            r.a.createElement("input", {
                                type: "range",
                                min: "0",
                                max: "0.08",
								start: "0.00",
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
                                    "Probe B ist eine Blutprobe und enth\xe4lt drei verschiedene Teilchensorten.",
                                    r.a.createElement(
                                        "ol",
                                        null,
                                        r.a.createElement("li", null, "Bestimme die Massen aller Teilchen in der Blutprobe. "),
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
                                    "Die Probe A enth\xe4lt nur eine Teilchensorte.",
                                    r.a.createElement(
                                        "ol",
                                        null,
                                        r.a.createElement("li", null, "Bestimme die Masse \\(m\\) der Teilchen. "),
                                        r.a.createElement("li", null, "Die Teilchen treffen nicht alle exakt am selben Ort auf den Detektor.",r.a.createElement("br", null), "Erläutere eine m\xf6gliche Ursache hierfür und eine Verbesserungsm\xf6glichkeit. ")
                                    )
                                )
                        )
                    )
                );
            };
            c.a.render(r.a.createElement(E, null), document.getElementById("root"));
        },
    ],
    [[7, 1, 2]],
]);