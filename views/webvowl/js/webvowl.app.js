webvowl.app = function(e) {
  function t(o) {
    if (n[o]) return n[o].exports;
    var i = n[o] = {
      exports: {},
      id: o,
      loaded: !1
    };
    return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
  }
  var n = {};
  return t.m = e, t.c = n, t.p = "", t(0)
}({
  0: function(e, t, n) {
    n(319), n(321), e.exports = n(322)
  },
  6: function(e, t) {
    e.exports = d3
  },
  91: function(e, t, n) {
    function o(e) {
      return null == e ? void 0 === e ? s : l : d && d in Object(e) ? r(e) :
        a(e)
    }
    var i = n(92),
      r = n(95),
      a = n(96),
      l = "[object Null]",
      s = "[object Undefined]",
      d = i ? i.toStringTag : void 0;
    e.exports = o
  },
  92: function(e, t, n) {
    var o = n(93),
      i = o.Symbol;
    e.exports = i
  },
  93: function(e, t, n) {
    var o = n(94),
      i = "object" == typeof self && self && self.Object === Object &&
        self,
      r = o || i || Function("return this")();
    e.exports = r
  },
  94: function(e, t) {
    (function(t) {
      var n = "object" == typeof t && t && t.Object === Object && t;
      e.exports = n
    }).call(t, function() {
      return this
    }())
  },
  95: function(e, t, n) {
    function o(e) {
      var t = a.call(e, s),
        n = e[s];
      try {
        e[s] = void 0;
        var o = !0
      } catch (e) {}
      var i = l.call(e);
      return o && (t ? e[s] = n :
          delete e[s]
        ), i
    }
    var i = n(92),
      r = Object.prototype,
      a = r.hasOwnProperty,
      l = r.toString,
      s = i ? i.toStringTag : void 0;
    e.exports = o
  },
  96: function(e, t) {
    function n(e) {
      return i.call(e)
    }
    var o = Object.prototype,
      i = o.toString;
    e.exports = n
  },
  103: function(e, t, n) {
    function o(e) {
      return "symbol" == typeof e || r(e) && i(e) == a
    }
    var i = n(91),
      r = n(104),
      a = "[object Symbol]";
    e.exports = o
  },
  104: function(e, t) {
    function n(e) {
      return null != e && "object" == typeof e
    }
    e.exports = n
  },
  112: function(e, t) {
    var n = Array.isArray;
    e.exports = n
  },
  154: function(e, t) {
    function n(e, t) {
      for (var n = -1, o = null == e ? 0 : e.length, i = Array(o); ++n <
        o;) i[n] = t(e[n], n, e);
      return i
    }
    e.exports = n
  },
  219: function(e, t, n) {
    function o(e) {
      return null == e ? "" : i(e)
    }
    var i = n(220);
    e.exports = o
  },
  220: function(e, t, n) {
    function o(e) {
      if ("string" == typeof e) return e;
      if (a(e)) return r(e, o) + "";
      if (l(e)) return c ? c.call(e) : "";
      var t = e + "";
      return "0" == t && 1 / e == -s ? "-0" : t
    }
    var i = n(92),
      r = n(154),
      a = n(112),
      l = n(103),
      s = 1 / 0,
      d = i ? i.prototype : void 0,
      c = d ? d.toString : void 0;
    e.exports = o
  },
  319: function(e, t) {},
  321: function(e, t, n) {
    (function(t) {
      function n() {
        var e,
          t,
          n = -1,
          o = /(?:\b(MS)?IE\s+|\bTrident\/7\.0;.*\s+rv:|\bEdge\/)(\d+)/
            .test(navigator.userAgent);
        if (o) return n = parseInt("12");
        var i = /Trident.*rv[ :]*11\./.test(navigator.userAgent);
        return i ? n = parseInt("11") : ("Microsoft Internet Explorer" ===
        navigator.appName ? (e = navigator.userAgent, t = new RegExp(
          "MSIE ([0-9]{1,}[\\.0-9]{0,})"), null !== t.exec(e) &&
        (n = parseFloat(RegExp.$1))) : "Netscape" === navigator.appName &&
        (e = navigator.userAgent, t = new RegExp(
          "Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})"), null !== t.exec(
          e) && (n = parseFloat(RegExp.$1))), n)
      }

      function o() {
        var e = n();
        if (console.log("Browser Version =" + e), e > 0 && e <= 11 && (
          t.select("#browserCheck").classed("hidden", !1), t.select(
            "#killWarning").classed("hidden", !0), t.select(
            "#optionsArea").classed("hidden", !0), t.select("#logo").classed(
            "hidden", !0)), 12 == e) {
          t.select("#logo").classed("hidden", !1), t.select(
            "#browserCheck").classed("hidden", !1);
          var o = t.select("#killWarning");
          o.on("click", function() {
            console.log("hide the warning please"), t.select(
              "#browserCheck").classed("hidden", !0), t.select(
              "#logo").style("padding", "10px")
          })
        } else t.select("#logo").classed("hidden", !1), t.select(
            "#browserCheck").classed("hidden", !0)
      }
      e.exports = o, o()
    }).call(t, n(6))
  },
  322: function(e, t, n) {
    (function(t) {
      String.prototype.replaceAll = function(e, t) {
        var n = this;
        return n.split(e).join(t)
      }, e.exports = function() {
        function e(e, n, i) {
          if (t.select("#reloadCachedOntology").classed("hidden", !0),
            b.reset(), d.options().navigationMenu().hideAllMenus(),
            void 0 === e && void 0 === n || 0 === e.length) return
          void O.notValidJsonFile();
          d.editorMode();
          var r;
          if (e) {
            var a;
            try {
              r = JSON.parse(e), a = !0
            } catch (e) {
              a = !1
            }
            if (a === !1) return void O.notValidJsonFile();
            if (!n) {
              var s = r.header ? r.header.title : void 0,
                u = p.textInLanguage(s);
              n = u ? u : i
            }
          }
          var h = 0;
          void 0 !== r.class && (h = r.class.length);
          var g = !1;
          if (location.hash.indexOf("#new_ontology") !== -1 && (g = !
              0, l++, t.select("#empty").node().href = "#opts=editorMode=true;#new_ontology" + l), 0 === h &&
            d.editorMode() === !1 && g === !1) O.emptyGraphContentError();
          else {
            O.validJsonFile(), y.setCachedOntology(n, e), f.setJsonText(
              e), c.data(r), d.options().loadingModule().setPercentMode(),
            g === !0 && d.editorMode(!0), d.load(), L.updateOntologyInformation(
              r, z), f.setFilename(n), d.updateZoomSliderValueFromOutside(),
            o();
            var v = t.select("#editorModeModuleCheckbox").node().checked;
            d.editorMode(v)
          }
        }

        function o() {
          var e = t.select(u),
            n = e.select("svg"),
            o = window.innerHeight - 40,
            a = window.innerWidth - .22 * window.innerWidth;
          "0" === L.getSidebarVisibility() && (o = window.innerHeight -
            40, a = window.innerWidth), F.updateLayout(), t.select(
            "#blockGraphInteractions").style("width", window.innerWidth +
            "px"), t.select("#blockGraphInteractions").style(
            "height", window.innerHeight + "px"), t.select(
            "#WarningErrorMessages").style("width", a + "px"), e.style(
            "height", o + "px"), n.attr("width", a).attr("height",
            o), c.width(a).height(o), d.updateStyle(), r() === !0 ?
            (d.isEditorMode() === !0 && (t.select(
              "#modeOfOperationString").node().innerHTML = "touch able device detected"), d.setTouchDevice(!0)) :
            (d.isEditorMode() === !0 && (t.select(
              "#modeOfOperationString").node().innerHTML = "point & click device detected"), d.setTouchDevice(!1)),
          t.select("#loadingInfo-container").style("height", .5 * (
            o - 80) + "px"), O.checkForScreenSize(), i();
          var l = t.select("#browserCheck");
          if (l.classed("hidden") === !1) {
            var s = 10 + l.node().getBoundingClientRect().height;
            t.select("#logo").style("padding", s + "px 10px")
          } else t.select("#logo").style("padding", "10px");
          var p = t.select("#menuElementContainer").node(),
            f = p.scrollWidth - p.clientWidth,
            h = t.select("#scrollLeftButton"),
            g = t.select("#scrollRightButton");
          f > 0 ? (g.classed("hidden", !1), h.classed("hidden", !1),
          k.updateScrollButtonVisibility()) : (g.classed("hidden", !
            0), h.classed("hidden", !0)), E.updateElementWidth()
        }

        function i() {
          var e = window.innerHeight - 40,
            n = e,
            o = e - 30,
            i = 150;
          if (n < 150) return t.select("#zoomSliderParagraph").classed(
                "hidden", !0), t.select("#zoomOutButton").classed(
                "hidden", !0), t.select("#zoomInButton").classed(
                "hidden", !0), void t.select("#centerGraphButton").classed(
                "hidden", !0);
          t.select("#zoomSliderParagraph").classed("hidden", !1), t.select(
            "#zoomOutButton").classed("hidden", !1), t.select(
            "#zoomInButton").classed("hidden", !1), t.select(
            "#centerGraphButton").classed("hidden", !1);
          var r = o - 20,
            a = r - 20;
          if (n < 280) return t.select("#zoomSliderParagraph").classed(
                "hidden", !0), t.select("#zoomOutButton").style("top",
                o + "px"), t.select("#zoomInButton").style("top", r +
                "px"), void t.select("#centerGraphButton").style(
                "top", a + "px");
          var l = o - i;
          r = l - 20, a = r - 20, t.select("#zoomSliderParagraph").classed(
            "hidden", !1), t.select("#zoomOutButton").style("top",
            o + "px"), t.select("#zoomInButton").style("top", r +
            "px"), t.select("#centerGraphButton").style("top", a +
            "px"), t.select("#zoomSliderParagraph").style("top", l +
            "px")
        }

        function r() {
          try {
            return document.createEvent("TouchEvent"), !0
          } catch (e) {
            return !1
          }
        }

        function a() {
          var e,
            t,
            n = -1,
            o = /(?:\b(MS)?IE\s+|\bTrident\/7\.0;.*\s+rv:|\bEdge\/)(\d+)/
              .test(navigator.userAgent);
          if (o) return n = parseInt("12");
          var i = /Trident.*rv[ :]*11\./.test(navigator.userAgent);
          return i ? n = parseInt("11") : (
            "Microsoft Internet Explorer" === navigator.appName ? (
              e = navigator.userAgent, t = new RegExp(
                "MSIE ([0-9]{1,}[\\.0-9]{0,})"), null !== t.exec(e) &&
              (n = parseFloat(RegExp.$1))) : "Netscape" ===
              navigator.appName && (e = navigator.userAgent, t = new RegExp(
                "Trident/.*rv:([0-9]{1,}[\\.0-9]{0,})"), null !== t
                .exec(e) && (n = parseFloat(RegExp.$1))), n)
        }
        var l = 1,
          s = {},
          d = webvowl.graph(),
          c = d.graphOptions(),
          p = webvowl.util.languageTools(),
          u = "#graph",
          f = n(323)(d),
          h = n(325)(d),
          g = n(326)(d),
          v = n(327)(d),
          m = n(328)(d),
          y = n(329)(d),
          b = n(333)(d),
          x = n(334)(d),
          w = n(335)(d),
          k = n(336)(d),
          C = n(337)(d),
          L = n(338)(d),
          M = n(339)(d),
          E = n(340)(d),
          _ = n(341)(d),
          O = n(342)(d),
          S = n(343)(d),
          F = n(344)(d),
          I = webvowl.modules.colorExternalsSwitch(d),
          T = webvowl.modules.compactNotationSwitch(d),
          A = webvowl.modules.datatypeFilter(),
          P = webvowl.modules.disjointFilter(),
          D = webvowl.modules.focuser(d),
          B = webvowl.modules.emptyLiteralFilter(),
          R = webvowl.modules.nodeDegreeFilter(h),
          W = webvowl.modules.nodeScalingSwitch(d),
          N = webvowl.modules.objectPropertyFilter(),
          H = webvowl.modules.pickAndPin(),
          j = webvowl.modules.selectionDetailsDisplayer(L.updateSelectionInformation),
          z = webvowl.modules.statistics(),
          V = webvowl.modules.subclassFilter(),
          U = webvowl.modules.setOperatorFilter();
        return s.getOptions = function() {
            return webvowl.opts
          }, s.getGraph = function() {
            return webvowl.gr
          }, s.initialize = function() {
            window.requestAnimationFrame = window.requestAnimationFrame ||
            window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame || function(e) {
              return setTimeout(e, 1e3 / 60)
            }, window.cancelAnimationFrame = window.cancelAnimationFrame ||
            window.mozCancelAnimationFrame || function(e) {
              clearTimeout(e)
            }, c.graphContainerSelector(u), c.selectionModules().push(
              D), c.selectionModules().push(j), c.selectionModules()
              .push(H), c.filterModules().push(B), c.filterModules().push(
              z), c.filterModules().push(R), c.filterModules().push(
              A), c.filterModules().push(N), c.filterModules().push(
              V), c.filterModules().push(P), c.filterModules().push(
              U), c.filterModules().push(W), c.filterModules().push(
              T), c.filterModules().push(I), t.select(window).on(
              "resize", o), f.setup(), g.setup(), h.setup(A, N, V,
              P, U, R), v.setup(H, W, T, I), b.setup(), L.setup(),
            O.setup(), M.setup(), E.setup(), m.setup();
            var n = a();
            if (n > 0 && n <= 11) console.log("Agent version " + n),
              console.log("This agent is not supported"), t.select(
                "#browserCheck").classed("hidden", !1), t.select(
                "#killWarning").classed("hidden", !0), t.select(
                "#optionsArea").classed("hidden", !0), t.select(
                "#logo").classed("hidden", !0);
            else {
              t.select("#logo").classed("hidden", !1), 12 === n ? (t.select(
                "#browserCheck").classed("hidden", !1), t.select(
                "#killWarning").classed("hidden", !1)) : t.select(
                "#browserCheck").classed("hidden", !0), x.setup([g,
                h, v, D, j, b
              ]), w.setup(), k.setup(), C.setup(), c.literalFilter(
                B), c.nodeDegreeFilter(R), c.loadingModule(O), c.filterMenu(
                h), c.modeMenu(v), c.gravityMenu(g), c.pausedMenu(b),
              c.pickAndPinModule(H), c.resetMenu(x), c.searchMenu(w),
              c.ontologyMenu(y), c.navigationMenu(k), c.sidebar(L),
              c.leftSidebar(M), c.editSidebar(E), c.exportMenu(f),
              c.graphObject(d), c.zoomSlider(C), c.warningModule(S),
              c.directInputModule(F), c.datatypeFilter(A), c.objectPropertyFilter(
                N), c.subclassFilter(V), c.setOperatorFilter(U), c.disjointPropertyFilter(
                P), c.focuserModule(D), c.colorExternalsModule(I),
              c.compactNotationModule(T), y.setup(e), _.setup(), M.showSidebar(
                0), M.hideCollapseButton(!0), S.hideEditorHint(), d
                .start();
              var i = t.select("#modeOfOperationString");
              i.style("font-size", "0.6em"), i.style("font-style",
                "italic"), o();
              var r,
                l = d.options().width(),
                s = d.options().height();
              r = Math.min(l, s) / 1e3;
              var p = !0;
              p === !1 && d.setForceTickFunctionWithFPS(), d.setDefaultZoom(
                r), t.selectAll(".debugOption").classed("hidden", p);
              var G = t.select("body");
              if (t.select(document).on("keydown", function(e) {
                  8 === t.event.keyCode && t.event.target === G.node() &&
                  t.event.preventDefault(), t.event.ctrlKey && t.event
                    .shiftKey && 68 === t.event.keyCode && (d.options()
                    .executeHiddenDebugFeatuers(), t.event.preventDefault()
                  )
                }), t.select("#maxLabelWidthSliderOption")) {
                var q = !d.options().dynamicLabelWidth();
                t.select("#maxLabelWidthSlider").node().disabled = q,
                t.select("#maxLabelWidthvalueLabel").classed(
                  "disabledLabelForSlider", q), t.select(
                  "#maxLabelWidthDescriptionLabel").classed(
                  "disabledLabelForSlider", q)
              }
              t.select("#blockGraphInteractions").style("position",
                "absolute").style("top", "0").style(
                "background-color", "#bdbdbd").style("opacity",
                "0.5").style("pointer-events", "auto").style(
                "width", d.options().width() + "px").style("height",
                d.options().height() + "px").on("click", function() {
                t.event.preventDefault(), t.event.stopPropagation()
              }).on("dblclick", function() {
                t.event.preventDefault(), t.event.stopPropagation()
              }), t.select("#direct-text-input").on("click",
                function() {
                  F.setDirectInputMode()
                }), t.select("#blockGraphInteractions").node().draggable = !
                1, c.prefixModule(webvowl.util.prefixTools(d)), o(),
              L.updateOntologyInformation(void 0, z), O.parseUrlAndLoadOntology(),
              c.debugMenu(m), m.updateSettings(), t.select(
                "#reloadSvgIcon").on("click", function() {
                return t.select("#reloadSvgIcon").node().disabled ===
                !0 ? void d.options().ontologyMenu().clearCachedVersion() :
                  (t.select("#reloadCachedOntology").classed(
                    "hidden", !0), void d.options().ontologyMenu()
                    .reloadCachedOntology())
              }), webvowl.opts = c, webvowl.gr = d
            }
          }, s
      }
    }).call(t, n(6))
  },
  323: function(e, t, n) {
    (function(t) {
      e.exports = function(e) {
        function o() {
          var n = M.requestExport(),
            o = M.resultingTTL_Content();
          if (console.log("Exporter was successful: " + n), n) {
            var i = "NewOntology",
              r = "data:text/json;charset=utf-8," +
              encodeURIComponent(o);
            x.attr("href", r).attr("download", i + ".ttl")
          } else console.log("ShowWarning!"), e.options().warningModule()
              .showExporterWarning(), console.log("Stay on the page! " +
              window.location.href), x.attr("href", window.location.href),
            t.event.preventDefault()
        }

        function i() {
          t.select("#exportedUrl").node().focus(), t.select(
            "#exportedUrl").node().select(), document.execCommand(
            "copy"), e.options().navigationMenu().hideAllMenus(), t
            .event.preventDefault()
        }

        function r(e, t) {
          var n = 0,
            o = "opts=";
          for (var i in e)
            if (e.hasOwnProperty(i)) {
              var r = e[i],
                a = t[i];
              r !== a && (o += i + "=" + a + ";", n++)
          }
          return o += "", 0 === n ? "" : o
        }

        function a() {
          e.options().navigationMenu().hideAllMenus();
          var n,
            o,
            i,
            r = t.select(e.options().graphContainerSelector())
              .select("svg");
          s(), u(), n = r.attr("version", 1.1).attr("xmlns",
            "http://www.w3.org/2000/svg").node().parentNode.innerHTML,
          n = "<!-- Created with WebVOWL (version " + webvowl.version +
            "), http://vowl.visualdataweb.org -->\n" + n, o = l(n), i = "data:image/svg+xml;base64," + btoa(o), m.attr("href", i)
            .attr("download", y + ".svg"), f(), h(), e.lazyRefresh()
        }

        function l(e) {
          var t,
            n,
            o,
            i = [],
            r = e.length;
          for (t = 0; t < r; t++) n = e.charAt(t), o = n.charCodeAt(0),
            o < 128 ? i.push(n) : i.push("&#" + o + ";");
          return i.join("")
        }

        function s() {
          d(".text", [{
            name: "font-family",
            value: "Helvetica, Arial, sans-serif"
          }, {
            name: "font-size",
            value: "12px"
          }]), d(".subtext", [{
            name: "font-size",
            value: "9px"
          }]), d(".text.instance-count", [{
            name: "fill",
            value: "#666"
          }]), d(".external + text .instance-count", [{
            name: "fill",
            value: "#aaa"
          }]), d(".cardinality", [{
            name: "font-size",
            value: "10px"
          }]), d(".text, .embedded", [{
            name: "pointer-events",
            value: "none"
          }]), d(
            ".class, .object, .disjoint, .objectproperty, .disjointwith, .equivalentproperty, .transitiveproperty, .functionalproperty, .inversefunctionalproperty, .symmetricproperty, .allvaluesfromproperty, .somevaluesfromproperty", [{
              name: "fill",
              value: "#acf"
            }]), d(".label .datatype, .datatypeproperty", [{
            name: "fill",
            value: "#9c6"
          }]), d(".rdf, .rdfproperty", [{
            name: "fill",
            value: "#c9c"
          }]), d(".literal, .node .datatype", [{
            name: "fill",
            value: "#fc3"
          }]), d(".deprecated, .deprecatedproperty", [{
            name: "fill",
            value: "#ccc"
          }]), d(".external, .externalproperty", [{
            name: "fill",
            value: "#36c"
          }]), d("path, .nofill", [{
            name: "fill",
            value: "none"
          }]), d("marker path", [{
            name: "fill",
            value: "#000"
          }]), d(".class, path, line, .fineline", [{
            name: "stroke",
            value: "#000"
          }]), d(
            ".white, .subclass, .subclassproperty, .external + text", [{
              name: "fill",
              value: "#fff"
            }]), d(
            ".class.hovered, .property.hovered, .cardinality.hovered, .cardinality.focused, circle.pin, .filled.hovered, .filled.focused", [{
              name: "fill",
              value: "#f00"
            }, {
              name: "cursor",
              value: "pointer"
            }]), d(".focused, path.hovered", [{
            name: "stroke",
            value: "#f00"
          }]), d(".indirect-highlighting, .feature:hover", [{
            name: "fill",
            value: "#f90"
          }]), d(".values-from", [{
            name: "stroke",
            value: "#69c"
          }]), d(".symbol, .values-from.filled", [{
            name: "fill",
            value: "#69c"
          }]), d(".class, path, line", [{
            name: "stroke-width",
            value: "2"
          }]), d(".fineline", [{
            name: "stroke-width",
            value: "1"
          }]), d(".dashed, .anonymous", [{
            name: "stroke-dasharray",
            value: "8"
          }]), d(".dotted", [{
            name: "stroke-dasharray",
            value: "3"
          }]), d("rect.focused, circle.focused", [{
            name: "stroke-width",
            value: "4px"
          }]), d(".nostroke", [{
            name: "stroke",
            value: "none"
          }]), d("marker path", [{
            name: "stroke-dasharray",
            value: "100"
          }])
        }

        function d(e, n) {
          var o = t.selectAll(e);
          o.empty() || n.forEach(function(e) {
            o.each(function() {
              var n = t.select(this);
              c(n, e.name) || n.style(e.name, e.value)
            })
          })
        }

        function c(e, t) {
          return "fill" === t && p(e)
        }

        function p(e) {
          var t = e.datum();
          return void 0 !== t && (t.backgroundColor && !!t.backgroundColor())
        }

        function u() {
          t.selectAll(".hidden-in-export").style("display", "none")
        }

        function f() {
          t.selectAll(
            ".text, .subtext, .text.instance-count, .external + text .instance-count, .cardinality, .text, .embedded, .class, .object, .disjoint, .objectproperty, .disjointwith, .equivalentproperty, .transitiveproperty, .functionalproperty, .inversefunctionalproperty, .symmetricproperty, .allvaluesfromproperty, .somevaluesfromproperty, .label .datatype, .datatypeproperty, .rdf, .rdfproperty, .literal, .node .datatype, .deprecated, .deprecatedproperty, .external, .externalproperty, path, .nofill, .symbol, .values-from.filled, marker path, .class, path, line, .fineline, .white, .subclass, .subclassproperty, .external + text, .class.hovered, .property.hovered, .cardinality.hovered, .cardinality.focused, circle.pin, .filled.hovered, .filled.focused, .focused, path.hovered, .indirect-highlighting, .feature:hover, .values-from, .class, path, line, .fineline, .dashed, .anonymous, .dotted, rect.focused, circle.focused, .nostroke, marker path"
          ).each(function() {
            var e = t.select(this),
              n = e.node().style;
            for (var o in n)
              if (n.hasOwnProperty(o)) {
                if (c(e, o)) continue;
                e.style(o, null)
            }
            e.datum && void 0 !== e.datum() && e.datum().type &&
            "rdfs:subClassOf" === e.datum().type() && e.style(
              "fill", null)
          });
          for (var e = t.select("#menuElementContainer").node(), n = e.children, o = n.length, i = 0; i < o; i++) {
            var r = n[i].id;
            t.select("#" + r).select("path").style("stroke-width",
              "0"), t.select("#" + r).select("path").style("fill",
              "#fff")
          }
          t.select("#magnifyingGlass").style("stroke-width", "0"), t.select(
            "#magnifyingGlass").style("fill", "#666")
        }

        function h() {
          t.selectAll(".hidden-in-export").style("display", null)
        }

        function g() {
          if (e.options().navigationMenu().hideAllMenus(), !C) return
          alert("No graph data available."), void t.event.preventDefault();
          var n = L.createJSON_exportObject(),
            o = JSON.stringify(n, null, "  "),
            i = "data:text/json;charset=utf-8," + encodeURIComponent(
              o);
          b.attr("href", i).attr("download", y + ".json")
        }

        function v() {
          var n = (e.scaleFactor(), e.translation(), e.getBoundingBoxForTex()),
            o = " %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n";
          o += " %        Generated with the experimental alpha version of the TeX exporter of WebVOWL (version 1.1.3) %%% \n",
          o += " %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n\n",
          o += " %   The content can be used as import in other TeX documents. \n",
          o += " %   Parent document has to use the following packages   \n",
          o += " %   \\usepackage{tikz}  \n", o += " %   \\usepackage{helvet}  \n", o += " %   \\usetikzlibrary{decorations.markings,decorations.shapes,decorations,arrows,automata,backgrounds,petri,shapes.geometric}  \n",
          o += " %   \\usepackage{xcolor}  \n\n", o += " %%%%%%%%%%%%%%% Example Parent Document %%%%%%%%%%%%%%%%%%%%%%%\n",
          o += " %\\documentclass{article} \n", o += " %\\usepackage{tikz} \n", o += " %\\usepackage{helvet} \n", o += " %\\usetikzlibrary{decorations.markings,decorations.shapes,decorations,arrows,automata,backgrounds,petri,shapes.geometric} \n",
          o += " %\\usepackage{xcolor} \n\n", o += " %\\begin{document} \n", o += " %\\section{Example} \n",
          o += " %  This is an example. \n", o += " %  \\begin{figure} \n", o += " %    \\input{<THIS_FILE_NAME>} % << tex file name for the graph \n",
          o += " %    \\caption{A generated graph with TKIZ using alpha version of the TeX exporter of WebVOWL (version 1.1.3) } \n",
          o += " %  \\end{figure} \n", o += " %\\end{document} \n",
          o += " %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n\n";
          var i = o +
            "\\definecolor{imageBGCOLOR}{HTML}{FFFFFF} \n\\definecolor{owlClassColor}{HTML}{AACCFF}\n\\definecolor{owlObjectPropertyColor}{HTML}{AACCFF}\n\\definecolor{owlExternalClassColor}{HTML}{AACCFF}\n\\definecolor{owlDatatypePropertyColor}{HTML}{99CC66}\n\\definecolor{owlDatatypeColor}{HTML}{FFCC33}\n\\definecolor{owlThingColor}{HTML}{FFFFFF}\n\\definecolor{valuesFrom}{HTML}{6699CC}\n\\definecolor{rdfPropertyColor}{HTML}{CC99CC}\n\\definecolor{unionColor}{HTML}{6699cc}\n\\begin{center} \n\\resizebox{\\linewidth}{!}{\n\\begin{tikzpicture}[framed]\n\\clip (" +
            n[0] + "pt , " + n[1] + "pt ) rectangle (" + n[2] +
            "pt , " + n[3] +
            "pt);\n\\tikzstyle{dashed}=[dash pattern=on 4pt off 4pt] \n\\tikzstyle{dotted}=[dash pattern=on 2pt off 2pt] \n\\fontfamily{sans-serif}{\\fontsize{12}{12}\\selectfont}\n \n";
          if (i += "\\tikzset{triangleBlack/.style = {fill=black, draw=black, line width=1pt,scale=0.7,regular polygon, regular polygon sides=3} }\n",
            i += "\\tikzset{triangleWhite/.style = {fill=white, draw=black, line width=1pt,scale=0.7,regular polygon, regular polygon sides=3} }\n",
            i += "\\tikzset{triangleBlue/.style  = {fill=valuesFrom, draw=valuesFrom, line width=1pt,scale=0.7,regular polygon, regular polygon sides=3} }\n",
            i += "\\tikzset{Diamond/.style = {fill=white, draw=black, line width=2pt,scale=1.2,regular polygon, regular polygon sides=4} }\n",
            i += "\\tikzset{Literal/.style={rectangle,align=center,\nfont={\\fontsize{12pt}{12}\\selectfont \\sffamily },\nblack, draw=black, dashed, line width=1pt, fill=owlDatatypeColor, minimum width=80pt,\nminimum height = 20pt}}\n\n",
            i += "\\tikzset{Datatype/.style={rectangle,align=center,\nfont={\\fontsize{12pt}{12}\\selectfont \\sffamily },\nblack, draw=black, line width=1pt, fill=owlDatatypeColor, minimum width=80pt,\nminimum height = 20pt}}\n\n",
            i += "\\tikzset{owlClass/.style={circle, inner sep=0mm,align=center, \nfont={\\fontsize{12pt}{12}\\selectfont \\sffamily },\nblack, draw=black, line width=1pt, fill=owlClassColor, minimum size=101pt}}\n\n",
            i += "\\tikzset{anonymousClass/.style={circle, inner sep=0mm,align=center, \nfont={\\fontsize{12pt}{12}\\selectfont \\sffamily },\nblack, dashed, draw=black, line width=1pt, fill=owlClassColor, minimum size=101pt}}\n\n",
            i += "\\tikzset{owlThing/.style={circle, inner sep=0mm,align=center,\nfont={\\fontsize{12pt}{12}\\selectfont \\sffamily },\nblack, dashed, draw=black, line width=1pt, fill=owlThingColor, minimum size=62pt}}\n\n",
            i += "\\tikzset{owlObjectProperty/.style={rectangle,align=center,\ninner sep=0mm,\nfont={\\fontsize{12pt}{12}\\selectfont \\sffamily },\nfill=owlObjectPropertyColor, minimum width=80pt,\nminimum height = 25pt}}\n\n",
            i += "\\tikzset{rdfProperty/.style={rectangle,align=center,\ninner sep=0mm,\nfont={\\fontsize{12pt}{12}\\selectfont \\sffamily },\nfill=rdfPropertyColor, minimum width=80pt,\nminimum height = 25pt}}\n\n",
            i += "\\tikzset{owlDatatypeProperty/.style={rectangle,align=center,\nfill=owlDatatypePropertyColor, minimum width=80pt,\ninner sep=0mm,\nfont={\\fontsize{12pt}{12}\\selectfont \\sffamily },\nminimum height = 25pt}}\n\n",
            i += "\\tikzset{rdfsSubClassOf/.style={rectangle,align=center,\nfont={\\fontsize{12pt}{12}\\selectfont \\sffamily },\ninner sep=0mm,\nfill=imageBGCOLOR, minimum width=80pt,\nminimum height = 25pt}}\n\n",
            i += "\\tikzset{unionOf/.style={circle, inner sep=0mm,align=center,\nfont={\\fontsize{12pt}{12}\\selectfont \\sffamily },\nblack, draw=black, line width=1pt, fill=unionColor, minimum size=25pt}}\n\n",
            i += "\\tikzset{disjointWith/.style={circle, inner sep=0mm,align=center,\nfont={\\fontsize{12pt}{12}\\selectfont \\sffamily },\nblack, draw=black, line width=1pt, fill=unionColor, minimum size=20pt}}\n\n",
            i += "\\tikzset{owlEquivalentClass/.style={circle,align=center,\nfont={\\fontsize{12pt}{12}\\selectfont \\sffamily },\ninner sep=0mm,\nblack, solid, draw=black, line width=3pt, fill=owlExternalClassColor, minimum size=101pt,\npostaction = {draw,line width=1pt, white}}}\n\n",
            e.options().navigationMenu().hideAllMenus(), !C) return
          alert("No graph data available."), void t.event.preventDefault();
          var r,
            a = 0,
            l = e.graphNodeElements(),
            s = e.graphLabelElements(),
            d = e.graphLinkElements();
          for (a = 0; a < d.length; a++) {
            var c,
              p,
              u,
              f,
              h,
              g,
              v,
              m,
              b,
              x,
              k,
              L,
              M,
              E,
              _,
              O,
              S = d[
                a],
              F = S.property(),
              I = "black",
              T = "",
              A = "",
              P = "triangleBlack",
              D = ",line width=2pt";
            F.linkType && ("dotted" === F.linkType() && (T = ", dotted ", P = "triangleWhite"), "dashed" === F.linkType() &&
            (T = ", dashed "), "values-from" === F.linkType() &&
            (I = "valuesFrom"));
            var B,
              R,
              W,
              N,
              H,
              j,
              z;
            if (1 !== S.layers().length || S.loops()) S.isLoop() ? (A = ", tension=3", M = e.math().calculateLoopPoints(S), k = M[0], x = M[1], L = M[2]) : (x = S.label(), k = e.math()
                .calculateIntersection(x, S.domain(), 1), L = e.math()
                .calculateIntersection(x, S.range(), 1)), c = k.x, p = -
                k.y, u = x.x, f = -x.y, h = L.x, g = -L.y;
            else {
              v = e.math().calculateIntersection(S.range(), S.domain(),
                1), m = e.math().calculateIntersection(S.domain(),
                S.range(), 1), b = e.math().calculateCenter(v, m),
              c = v.x, p = -v.y, u = b.x, f = -b.y, h = m.x, g = -m
                  .y, k = v, x = b, L = m;
              var V = h - u,
                U = g - f;
              E = Math.sqrt(V * V + U * U), V /= E, U /= E, _ = Math.atan2(
                  U, V) * (180 / Math.PI), H = V, j = U
            }
            if (i += "\\draw [" + I + T + D + A +
                "] plot [smooth] coordinates {(" + c + "pt, " + p +
                "pt) (" + u + "pt, " + f + "pt)  (" + h + "pt, " + g +
                "pt)};\n", void 0 !== S.property().markerElement()) {
              "owl:someValuesFrom" !== S.property().type() &&
              "owl:allValuesFrom" !== S.property().type() || (P = "triangleBlue"), z = S.pathObj(), O = Math.floor(z.node()
                .getTotalLength());
              var G = z.node().getPointAtLength(O - 4),
                q = z.node().getPointAtLength(O),
                $ = z.node().getPointAtLength(O - 6);
              "setOperatorProperty" === S.property().type() && (G = z
                .node().getPointAtLength(4), q = z.node().getPointAtLength(
                0), $ = z.node().getPointAtLength(8), P = "Diamond"), B = G.x, R = G.y, W = q.x, N = q.y, H = W - B, j = N - R, E = Math.sqrt(H * H + j * j), H /= E, j /= E, _ = -1 * Math.atan2(j, H) * (180 / Math.PI),
              _ -= 90, "setOperatorProperty" === S.property().type() &&
              (_ -= 45), h = $.x, g = $.y, 1 !== S.layers().length ||
              S.loops() ? (g *= -1, i += "\\node[" + P +
                ", rotate=" + _ + "] at (" + h + "pt, " + g +
                "pt)   (marker" + a + ") {};\n ") : (g *= -1, i += "\\node[" + P + ", rotate=" + _ + "] at (" + h +
                "pt, " + g + "pt)   (single_marker" + a +
                ") {};\n ");
              var Z = S.property().generateCardinalityText();
              if (Z && Z.length > 0) {
                var J = z.node().getPointAtLength(O - 18),
                  Y = J.x - 10 * j,
                  X = J.y + 10 * H;
                X *= -1;
                var K = "black";
                Z.indexOf("A") > -1 && (Z = "$\\forall$"), Z.indexOf(
                  "E") > -1 && (Z = "$\\exists$"), i += "\\node[font={\\fontsize{12pt}{12}\\selectfont \\sffamily },text=" +
                  K + "] at (" + Y + "pt, " + X +
                  "pt)   (cardinalityText" + a + ") {" + Z + "};\n "
              }
              if (S.property().inverse()) {
                z = S.pathObj(), O = Math.floor(z.node().getTotalLength());
                var Q = z.node().getPointAtLength(4),
                  ee = z.node().getPointAtLength(0),
                  te = z.node().getPointAtLength(6);
                B = Q.x, R = Q.y, W = ee.x, N = ee.y, H = W - B, j = N - R, E = Math.sqrt(H * H + j * j), H /= E, j /= E,
                _ = -1 * Math.atan2(j, H) * (180 / Math.PI), _ -= 90, h = te.x, g = te.y, 1 !== S.layers().length ||
                S.loops() ? (g *= -1, i += "\\node[" + P +
                  ", rotate=" + _ + "] at (" + h + "pt, " + g +
                  "pt)   (INV_marker" + a + ") {};\n ") : (g *= -1,
                i += "\\node[" + P + ", rotate=" + _ + "] at (" +
                  h + "pt, " + g + "pt)   (INV_single_marker" + a +
                  ") {};\n ")
              }
            }
          }
          for (l.each(function(e) {
              u = e.x, f = -e.y, r = e.labelForCurrentLanguage(),
              void 0 === r && (r = "");
              var t = "owlClass";
              "owl:Thing" !== e.type() && "owl:Nothing" !== e.type() ||
              (t = "owlThing"), "owl:equivalentClass" === e.type() &&
              (t = "owlEquivalentClass");
              var n = "";
              if (e.textBlock) {
                var o = e.textBlock()._textBlock().style("fill");
                "rgb(0, 0, 0)" === o && (n = ", text=black"),
                "rgb(255, 255, 255)" === o && (n = ", text=white");
                var l = e.textBlock()._textBlock().node().children;
                if (l[0]) {
                  r = l[0].innerHTML, e.individuals() && e.individuals()
                    .length === parseInt(l[0].innerHTML) && (r = "{\\color{gray} " + l[0].innerHTML + " }");
                  for (var s = 1; s < l.length; s++) r += e.individuals() &&
                    e.individuals().length === parseInt(l[s].innerHTML) ?
                      "\\\\ {\\color{gray} " + l[s].innerHTML + " }" :
                      "\\\\ {\\small " + l[s].innerHTML + " }"
                }
              }
              "rdfs:Literal" === e.type() && (t = "Literal"),
              "rdfs:Datatype" === e.type() && (t = "Datatype"), e
                .attributes().indexOf("anonymous") !== -1 && (t = "anonymousClass"), "owl:unionOf" !== e.type() &&
              "owl:complementOf" !== e.type() &&
              "owl:disjointUnionOf" !== e.type() &&
              "owl:intersectionOf" !== e.type() || (t = "owlClass");
              var d = "",
                c = "";
              if ("rdfs:Literal" === e.type() || "rdfs:Datatype" ===
                e.type()) {
                var p = e.width();
                c = ",minimum width=" + p + "pt"
              } else
                c = ",minimum size=" + 2 * e.actualRadius() +
                  "pt";
              if (e.backgroundColor()) {
                var h = e.backgroundColor();
                h.toUpperCase(), h = h.slice(1, h.length), i += "\\definecolor{Node" + a + "_COLOR}{HTML}{" + h +
                  "} \n ", d = ", fill=Node" + a + "_COLOR "
              }
              e.attributes().indexOf("deprecated") > -1 && (i += "\\definecolor{Node" + a +
                "_COLOR}{HTML}{CCCCCC} \n ", d = ", fill=Node" +
                a + "_COLOR ");
              var g = u - 7,
                v = u + 7,
                m = f + 20;
              "owl:unionOf" === e.type() && "owl:disjointUnionOf" ===
              e.type() || (i += "\\node[" + t + " " + c + " " + d +
                " " + n + "] at (" + u + "pt, " + f +
                "pt)   (Node" + a + ") {" + r.replaceAll("_",
                  "\\_ ") + "};\n"), "owl:unionOf" === e.type() &&
              (i += "\\node[" + t + " " + c + " " + d + " " + n +
                "] at (" + u + "pt, " + f + "pt)   (Node" + a +
                ") {};\n", i += "\\node[unionOf   , text=black] at (" + g +
                "pt, " + f + "pt)   (SymbolNode" + a + ") {};\n",
              i += "\\node[unionOf   , text=black] at (" + v +
                "pt, " + f + "pt)   (SymbolNode" + a + ") {};\n",
              i += "\\node[unionOf ,fill=none   , text=black] at (" +
                g + "pt, " + f + "pt)   (SymbolNode" + a +
                ") {};\n", i += "\\node[text=black] at (" + u +
                "pt, " + f +
                "pt)  (unionText13) {$\\mathbf{\\cup}$};\n", i += "\\node[font={\\fontsize{12pt}{12}\\selectfont \\sffamily }" +
                n + "] at (" + u + "pt, " + m +
                "pt)   (Node_text" + a + ") {" + r.replaceAll("_",
                  "\\_ ") + "};\n"), "owl:disjointUnionOf" === e.type() &&
              (i += "\\node[" + t + " " + c + " " + d + " " + n +
                "] at (" + u + "pt, " + f + "pt)   (Node" + a +
                ") {};\n", i += "\\node[unionOf   , text=black] at (" + g +
                "pt, " + f + "pt)   (SymbolNode" + a + ") {};\n",
              i += "\\node[unionOf   , text=black] at (" + v +
                "pt, " + f + "pt)   (SymbolNode" + a + ") {};\n",
              i += "\\node[unionOf ,fill=none   , text=black] at (" +
                g + "pt, " + f + "pt)   (SymbolNode" + a +
                ") {};\n", i += "\\node[font={\\fontsize{12pt}{12}\\selectfont \\sffamily }" +
                n + "] at (" + u + "pt, " + f +
                "pt)  (disjointUnoinText" + a + ") {1};\n", i += "\\node[font={\\fontsize{12pt}{12}\\selectfont \\sffamily }" +
                n + "] at (" + u + "pt, " + m +
                "pt)   (Node_text" + a + ") {" + r.replaceAll("_",
                  "\\_ ") + "};\n"), "owl:complementOf" === e.type() &&
              (i += "\\node[" + t + " " + c + " " + d + " " + n +
                "] at (" + u + "pt, " + f + "pt)   (Node" + a +
                ") {};\n", i += "\\node[unionOf   , text=black] at (" + u +
                "pt, " + f + "pt)   (SymbolNode" + a + ") {};\n",
              i += "\\node[font={\\fontsize{18pt}{18}\\selectfont \\sffamily }" +
                n + "] at (" + u + "pt, " + f +
                "pt)  (unionText13) {$\\neg$};\n", i += "\\node[font={\\fontsize{12pt}{12}\\selectfont \\sffamily }" +
                n + "] at (" + u + "pt, " + m +
                "pt)   (Node_text" + a + ") {" + r.replaceAll("_",
                  "\\_ ") + "};\n"), "owl:intersectionOf" === e.type() &&
              (i += "\\node[" + t + " " + c + " " + d + " " + n +
                "] at (" + u + "pt, " + f + "pt)   (Node" + a +
                ") {};\n", i += "\\node[unionOf   , text=black] at (" + g +
                "pt, " + f + "pt)   (SymbolNode" + a + ") {};\n",
              i += "\\node[unionOf   , text=black] at (" + v +
                "pt, " + f + "pt)   (SymbolNode" + a + ") {};\n",
              i += "\\node[unionOf ,fill=none   , text=black] at (" +
                g + "pt, " + f + "pt)   (SymbolNode" + a +
                ") {};\n", i += "\\filldraw[even odd rule,fill=owlClassColor,line width=1pt] (" +
                g + "pt, " + f + "pt) circle (12.5pt)  (" + v +
                "pt, " + f + "pt) circle (12.5pt);\n ", i += "\\node[font={\\fontsize{12pt}{12}\\selectfont \\sffamily }" +
                n + "] at (" + u + "pt, " + f +
                "pt)  (intersectionText" + a + ") {$\\cap$};\n",
              i += "\\node[font={\\fontsize{12pt}{12}\\selectfont \\sffamily }" +
                n + "] at (" + u + "pt, " + m +
                "pt)   (Node_text" + a + ") {" + r.replaceAll("_",
                  "\\_ ") + "};\n"), a++
            }), a = 0;a < s.length; a++) {
            var ne = s[a].property(),
              oe = s[a].x,
              ie = -s[a].y;
            r = ne.labelForCurrentLanguage(), void 0 === r && (r = "");
            var re = "";
            if (ne.textBlock && ne.textBlock()) {
              var ae = ne.textBlock()._textBlock().style("fill");
              "rgb(0, 0, 0)" === ae && (re = ", text=black"),
              "rgb(255, 255, 255)" === ae && (re = ", text=white");
              var le = ne.textBlock()._textBlock().node().children;
              if (le[0]) {
                r = le[0].innerHTML;
                for (var se = 1; se < le.length; se++) {
                  var de = le[se].innerHTML;
                  r += de.indexOf("(") > -1 ? "\\\\ {\\small " + le[
                    se].innerHTML + " }" : "\\\\ " + le[se].innerHTML
                }
              }
            }
            if ("setOperatorProperty" !== ne.type()) {
              var ce = "owlObjectProperty";
              "owl:DatatypeProperty" === ne.type() && (ce = "owlDatatypeProperty"), "rdfs:subClassOf" === ne.type() &&
              (ce = "rdfsSubClassOf"), "rdf:Property" === ne.type() &&
              (ce = "rdfProperty");
              var pe = "";
              if (ne.backgroundColor()) {
                var ue = ne.backgroundColor();
                ue.toUpperCase(), ue = ue.slice(1, ue.length), i += "\\definecolor{property" + a + "_COLOR}{HTML}{" +
                  ue + "} \n ", pe = ", fill=property" + a +
                  "_COLOR "
              }
              ne.attributes().indexOf("deprecated") > -1 && (i += "\\definecolor{property" + a +
                "_COLOR}{HTML}{CCCCCC} \n ", pe = ", fill=property" +
                a + "_COLOR ");
              var fe = "",
                he = ne.textWidth();
              if (fe = ",minimum width=" + he + "pt",
                "owl:disjointWith" !== ne.type())
                if (ne.inverse()) {
                  var ge = ne.inverse(),
                    ve = ge.labelForCurrentLanguage();
                  void 0 === ve && (ve = "");
                  var me = "";
                  if (ge.textBlock && ge.textBlock()) {
                    var ye = ge.textBlock()._textBlock().style("fill");
                    "rgb(0, 0, 0)" === ye && (me = ", text=black"),
                    "rgb(255, 255, 255)" === ye && (me = ", text=white");
                    var be = ge.textBlock()._textBlock().node().children;
                    if (be[0]) {
                      ve = be[0].innerHTML;
                      for (var xe = 1; xe < be.length; xe++) {
                        var we = be[xe].innerHTML;
                        ve += we.indexOf("(") > -1 ? "\\\\ {\\small " +
                        be[xe].innerHTML + " }" : "\\\\ " + be[xe].innerHTML
                      }
                    }
                  }
                  var ke = "owlObjectProperty",
                    Ce = "";
                  if (ge.backgroundColor()) {
                    var Le = ge.backgroundColor();
                    Le.toUpperCase(), Le = Le.slice(1, Le.length), i += "\\definecolor{inv_property" + a +
                      "_COLOR}{HTML}{" + Le + "} \n ", Ce = ", fill=inv_property" + a + "_COLOR "
                  }
                  ge.attributes().indexOf("deprecated") > -1 && (i += "\\definecolor{inv_property" + a +
                    "_COLOR}{HTML}{CCCCCC} \n ", Ce = ", fill=inv_property" + a + "_COLOR ");
                  var Me = "",
                    Ee = ge.textWidth(),
                    _e = ie - 14,
                    Oe = ie + 14;
                  Me = ",minimum width=" + Ee + "pt", i += "% Createing Inverse Property \n", i += "\\node[" +
                    ke + " " + Me + " " + Ce + " " + me + "] at (" +
                    oe + "pt, " + _e + "pt)   (property" + a + ") {" +
                    ve.replaceAll("_", "\\_ ") + "};\n", i += "% " +
                    ke + " vs " + ce + "\n", i += "% " + Me + " vs " +
                    fe + "\n", i += "% " + Ce + " vs " + pe + "\n", i += "% " + me + " vs " + re + "\n", i += "\\node[" +
                    ce + " " + fe + " " + pe + " " + re + "] at (" +
                    oe + "pt, " + Oe + "pt)   (property" + a + ") {" +
                    r.replaceAll("_", "\\_ ") + "};\n"
                } else
                  i += "\\node[" + ce + " " + fe + " " + pe +
                    " " + re + "] at (" + oe + "pt, " + ie +
                    "pt)   (property" + a + ") {" + r.replaceAll("_",
                      "\\_ ") + "};\n";
              else {
                var Se = oe - 12,
                  Fe = oe + 12,
                  Ie = ie - 20;
                i += "\\node[" + ce + " " + fe + " " + pe + " " + re +
                  "] at (" + oe + "pt, " + ie + "pt)   (Node" + a +
                  ") {};\n", i += "\\node[disjointWith , text=black] at (" + Se +
                  "pt, " + ie + "pt)   (SymbolNode" + a + ") {};\n",
                i += "\\node[disjointWith , text=black] at (" + Fe +
                  "pt, " + ie + "pt)   (SymbolNode" + a + ") {};\n",
                i += "\\node[font={\\fontsize{12pt}{12}\\selectfont \\sffamily }" +
                  re + "] at (" + oe + "pt, " + Ie +
                  "pt)   (Node_text" + a + ") {", e.options().compactNotation() ===
                !1 && (i += "(disjoint)"), i += "};\n"
              }
            }
          }
          i += "\\end{tikzpicture}\n}\n \\end{center}\n";
          var Te = "data:text/json;charset=utf-8," +
          encodeURIComponent(i);
          w.attr("href", Te).attr("download", y + ".tex")
        }
        var m,
          y,
          b,
          x,
          w,
          k,
          C,
          L = {},
          M = n(324)(e);
        String.prototype.replaceAll = function(e, t) {
          var n = this;
          return n.split(e).join(t)
        }, L.setup = function() {
          m = t.select("#exportSvg").on("click", a), b = t.select(
            "#exportJson").on("click", g), k = t.select("#copyBt")
            .on("click", i), w = t.select("#exportTex").on("click",
            v), x = t.select("#exportTurtle").on("click", o);
          var n = t.select("#m_export");
          n.on("mouseover", function() {
            var t = e.options().searchMenu();
            t.hideSearchEntries(), L.exportAsUrl()
          })
        }, L.setFilename = function(e) {
          y = e || "export"
        }, L.setJsonText = function(e) {
          C = e
        }, L.exportAsUrl = function() {
          var n = {};
          n.sidebar = e.options().sidebar().getSidebarVisibility();
          var o = e.options().filterMenu().getDefaultDegreeValue(),
            i = e.options().filterMenu().getDegreeSliderValue();
          parseInt(o) === parseInt(i) ? n.doc = -1 : n.doc = i, n.cd = e.options().classDistance(), n.dd = e.options().datatypeDistance(),
          e.editorMode() === !0 ? n.editorMode = "true" : n.editorMode = "false", n.filter_datatypes = String(e.options().filterMenu()
            .getCheckBoxValue("datatypeFilterCheckbox")), n.filter_sco = String(e.options().filterMenu().getCheckBoxValue(
            "subclassFilterCheckbox")), n.filter_disjoint = String(e.options().filterMenu().getCheckBoxValue(
            "disjointFilterCheckbox")), n.filter_setOperator = String(e.options().filterMenu().getCheckBoxValue(
            "setoperatorFilterCheckbox")), n.filter_objectProperties = String(e.options().filterMenu().getCheckBoxValue(
            "objectPropertyFilterCheckbox")), n.mode_dynamic = String(e.options().dynamicLabelWidth()), n.mode_scaling = String(e.options().modeMenu().getCheckBoxValue(
            "nodescalingModuleCheckbox")), n.mode_compact = String(e.options().modeMenu().getCheckBoxValue(
            "compactnotationModuleCheckbox")), n.mode_colorExt = String(e.options().modeMenu().getCheckBoxValue(
            "colorexternalsModuleCheckbox")), n.mode_multiColor = String(e.options().modeMenu().colorModeState()), n.mode_pnp = String(e.options().modeMenu().getCheckBoxValue(
            "pickandpinModuleCheckbox")), n.debugFeatures = String(!e.options().getHideDebugFeatures()), n.rect = 0;
          var a,
            l = e.options().initialConfig(),
            s = r(l, n),
            d = String(location);
          if (0 === s.length) {
            var c = location.hash;
            d = d.split(c)[0];
            var p = c.lastIndexOf("#");
            if (p === -1) return a = t.select("#exportedUrl").node(),
                a.value = String(location), void (a.title = String(
                  location));
            var u = c.slice(p, c.length);
            return a = t.select("#exportedUrl").node(), a.value = d +
                u, void (a.title = d + u)
          }
          var f,
            h = (d.match(/#/g) || []).length;
          if (void 0 !== h && 0 !== h || (f = d + "#" + s), h > 0) {
            var g,
              v = d.split("#");
            for (v[1].indexOf("opts=") >= 0 ? (v[1] = s, f = v[0]) :
                (f = v[0] + "#", f += s), g = 1; g < v.length; g++) v[
                g].length > 0 && (f += "#" + v[g])
          }
          a = t.select("#exportedUrl").node(), a.value = f, a.title = f
        }, L.createJSON_exportObject = function() {
          var t,
            n,
            o,
            i = e.getUnfilteredData(),
            r = e.options().data()._comment,
            a = e.options().getGeneralMetaObject(),
            l = e.options().data().header;
          a.iri && a.iri !== l.iri && (l.iri = a.iri), a.title && a
            .title !== l.title && (l.title = a.title), a.version &&
          a.version !== l.version && (l.version = a.version), a.author &&
          a.author !== l.author && (l.author = a.author), a.description &&
          a.description !== l.description && (l.description = a.description);
          var s = {};
          s._comment = r, s.header = l, s.namespace = e.options().data()
            .namespace, void 0 === s.namespace && (s.namespace = []);
          var d = i.nodes,
            c = d.length,
            p = [],
            u = [];
          for (t = 0; t < c; t++) {
            var f = {},
              h = {};
            if (f.id = d[t].id(), f.type = d[t].type(), p.push(f),
              h.id = d[t].id(), h.iri = d[t].iri(), h.baseIri = d[t]
                .baseIri(), h.label = d[t].label(), d[t].attributes()
                .length > 0 && (h.attributes = d[t].attributes()), d[
                t].comment() && (h.comment = d[t].comment()), d[t].annotations() &&
              (h.annotations = d[t].annotations()), d[t].description() &&
              (h.description = d[t].description()), d[t].individuals()
                .length > 0) {
              var g = [],
                v = d[t].individuals();
              for (n = 0; n < v.length; n++) {
                var m = {};
                m.iri = v[n].iri(), m.baseIri = v[n].baseIri(), m.labels = v[n].label(), v[n].annotations() && (m.annotations = v[n].annotations()), v[n].description() && (m.description = v[n].description()), v[n].comment() && (m.comment = v[n].comment()), g.push(m)
              }
              h.individuals = g
            }
            var y = void 0;
            if (d[t].equivalents().length > 0) {
              y = [];
              var b = d[t].equivalents();
              for (n = 0; n < b.length; n++) {
                var x = {},
                  w = {};
                if (x.id = b[n].id(), y.push(b[n].id()), x.type = b[
                    n].type(), p.push(x), w.id = b[n].id(), w.iri = b[n].iri(), w.baseIri = b[n].baseIri(), w.label = b[n].label(), b[n].attributes().length > 0 && (w.attributes = b[n].attributes()), b[n].comment() && (w.comment = b[n].comment()), b[n].individuals().length > 0 &&
                  (w.individuals = b[n].individuals()), b[n].annotations() &&
                  (w.annotations = b[n].annotations()), b[n].description() &&
                  (w.description = b[n].description()), b[n].individuals()
                    .length > 0) {
                  var k = [],
                    C = b[t].individuals();
                  for (o = 0; o < C.length; o++) {
                    var L = {};
                    L.iri = C[o].iri(), L.baseIri = C[o].baseIri(),
                    L.labels = C[o].label(), C[o].annotations() &&
                    (L.annotations = C[o].annotations()), C[o].description() &&
                    (L.description = C[o].description()), C[o].comment() &&
                    (L.comment = C[o].comment()), k.push(L)
                  }
                  w.individuals = k
                }
                u.push(w)
              }
            }
            y && y.length > 0 && (h.equivalent = y), u.push(h)
          }
          var M = i.properties,
            E = M.length,
            _ = [],
            O = [];
          for (t = 0; t < E; t++) {
            var S = {},
              F = {};
            if (S.id = M[t].id(), S.type = M[t].type(), _.push(S),
              F.id = M[t].id(), F.iri = M[t].iri(), F.baseIri = M[t]
                .baseIri(), F.label = M[t].label(), M[t].attributes()
                .length > 0 && (F.attributes = M[t].attributes()), M[
                t].comment() && (F.comment = M[t].comment()), M[t].annotations() &&
              (F.annotations = M[t].annotations()), M[t].maxCardinality() &&
              (F.maxCardinality = M[t].maxCardinality()), M[t].minCardinality() &&
              (F.minCardinality = M[t].minCardinality()), M[t].cardinality() &&
              (F.cardinality = M[t].cardinality()), M[t].description() &&
              (F.description = M[t].description()), F.domain = M[t]
                .domain().id(), F.range = M[t].range().id(), M[t].subproperties()
            ) {
              var I = M[t].subproperties(),
                T = [];
              for (n = 0; n < I.length; n++) T.push(I[n].id());
              F.subproperty = T
            }
            if (M[t].superproperties()) {
              var A = M[t].superproperties(),
                P = [];
              for (n = 0; n < A.length; n++) P.push(A[n].id());
              F.superproperty = P
            }
            M[t].inverse() && (F.inverse = M[t].inverse().id()), O.push(
              F)
          }
          s.class = p, s.classAttribute = u, s.property = _, s.propertyAttribute = O;
          var D = e.graphNodeElements(),
            B = e.graphLabelElements(),
            R = s._comment,
            W = " [Additional Information added by WebVOWL Exporter Version: 1.1.3]";
          R.indexOf(W) === -1 && (s._comment = R +
            " [Additional Information added by WebVOWL Exporter Version: 1.1.3]"
          );
          var N = s.classAttribute,
            H = s.propertyAttribute;
          for (t = 0; t < N.length; t++) {
            var j = N[t];
            delete j.pos
            ,
            delete j.pinned
          }
          var z;
          for (t = 0; t < H.length; t++) z = H[t],
            delete z.pos
            ,
            delete z.pinned;
          for (D.each(function(e) {
              var n = e.id();
              for (t = 0; t < N.length; t++) {
                var o = N[t];
                if (o.id === n) {
                  o.pos = [parseFloat(e.x.toFixed(2)), parseFloat(
                    e.y.toFixed(2))], e.pinned() && (o.pinned = !
                    0);
                  break
                }
              }
            }), n = 0;n < B.length; n++) {
            var V = B[n].property();
            for (t = 0; t < H.length; t++)
              if (z = H[t], z.id === V.id()) {
                z.pos = [parseFloat(B[n].x.toFixed(2)), parseFloat(
                  B[n].y.toFixed(2))], B[n].pinned() && (z.pinned = !
                  0);
                break
            }
          }
          s.settings = {};
          var U = e.scaleFactor(),
            G = e.paused(),
            q = [parseFloat(e.translation()[0].toFixed(2)),
              parseFloat(e.translation()[1].toFixed(2))
            ];
          s.settings.global = {}, s.settings.global.zoom = U.toFixed(
            2), s.settings.global.translation = q, s.settings.global
            .paused = G;
          var $,
            Z,
            J,
            Y = e.options().classDistance(),
            X = e.options().datatypeDistance();
          s.settings.gravity = {}, s.settings.gravity.classDistance = Y, s.settings.gravity.datatypeDistance = X;
          var K = e.options().filterMenu(),
            Q = K.getCheckBoxContainer(),
            ee = [];
          for (t = 0; t < Q.length; t++) $ = Q[t].checkbox.attr(
              "id"), Z = Q[t].checkbox.property("checked"), J = {},
            J.id = $, J.checked = Z, ee.push(J);
          var te = K.getDegreeSliderValue();
          s.settings.filter = {}, s.settings.filter.checkBox = ee,
          s.settings.filter.degreeSliderValue = te;
          var ne = e.options().modeMenu(),
            oe = ne.getCheckBoxContainer(),
            ie = [];
          for (t = 0; t < oe.length; t++) $ = oe[t].attr("id"), Z = oe[t].property("checked"), J = {}, J.id = $, J.checked = Z, ie.push(J);
          var re = ne.colorModeState();
          s.settings.modes = {}, s.settings.modes.checkBox = ie, s.settings
            .modes.colorSwitchState = re;
          var ae = {};
          return ae._comment = s._comment, ae.header = s.header, ae
              .namespace = s.namespace, ae.metrics = s.metrics, ae.settings = s.settings, ae.class = s.class, ae.classAttribute = s.classAttribute,
            ae.property = s.property, ae.propertyAttribute = s.propertyAttribute,
            ae
        };
        t.svg.line().x(function(e) {
          return e.x
        }).y(function(e) {
          return e.y
        }).interpolate("cardinal"), t.svg.line().x(function(e) {
          return e.x
        }).y(function(e) {
          return e.y
        }).interpolate("cardinal").tension(-1);
        return L
      }
    }).call(t, n(6))
  },
  324: function(e, t) {
    e.exports = function(e) {
      function t() {
        var t,
          n = e.getUnfilteredData().nodes,
          o = e.getUnfilteredData().properties;
        for (t = 0; t < n.length; t++) {
          var i = C.getPrefixRepresentationForFullURI(n[t].iri());
          C.validURL(i) === !0 ? n[t].prefixRepresentation = "<" + i +
            ">" : n[t].prefixRepresentation = i
        }
        for (t = 0; t < o.length; t++) {
          var r = C.getPrefixRepresentationForFullURI(o[t].iri());
          C.validURL(r) === !0 ? o[t].prefixRepresentation = "<" + r +
            ">" : o[t].prefixRepresentation = r
        }
      }

      function n() {
        if (0 !== y.length) {
          x += "###  Property Definitions (Number of Property) " + y.length +
            " ###\r\n";
          for (var e = 0; e < y.length; e++) {
            x += "#  --------------------------- Property " + e +
              "------------------------- \r\n";
            var t = a(y[e]);
            if (x += t, t.indexOf("WHYEMPTYNAME") !== -1) return !1
          }
          return !0
        }
      }

      function o() {
        if (0 !== m.length) {
          x += "###  Class Definitions (Number of Classes) " + m.length +
            " ###\r\n";
          for (var e = 0; e < m.length; e++) {
            x += "#  --------------------------- Class  " + e +
              "------------------------- \r\n";
            var t = r(m[e]);
            if (x += t, t.indexOf("WHYEMPTYNAME") !== -1) return !1
          }
          return !0
        }
      }

      function i(e, t) {
        var n = e.attributes();
        return n.indexOf(t) >= 0
      }

      function r(t) {
        var n = t.prefixRepresentation,
          o = "rdf:type",
          r = t.type();
        "owl:equivalentClass" === t.type() && (r = "owl:Class"),
        "owl:disjointUnionOf" === t.type() && (r = "owl:Class"),
        "owl:unionOf" === t.type() && (r = "owl:Class");
        var a = [],
          s = [];
        if (t.union())
          for (var d = t.union(), c = 0; c < d.length; c++) {
            var p = w[d[c]];
            s.push(p)
        }
        if (t.disjointUnion())
          for (var u = t.disjointUnion(), f = 0; f < u.length; f++) {
            var h = w[u[f]];
            a.push(h)
        }
        var g = n + " " + o + " " + r;
        i(t, "deprecated") === !0 && (g += ", owl:DeprecatedProperty");
        var m = l(n);
        g += "; \r\n";
        for (var y = 0; y < t.equivalents().length; y++) {
          var b = C.getPrefixRepresentationForFullURI(t.equivalents()[y]
              .iri()),
            x = "";
          x = C.validURL(b) === !0 ? "<" + b + ">" : b, g += m +
            " owl:equivalentClass " + x + " ;\r\n"
        }
        if (t.commentForCurrentLanguage() && (g += m +
            ' rdfs:comment "' + t.commentForCurrentLanguage() +
            '" ;\r\n'), t.annotations()) {
          var k = t.annotations();
          for (var L in k)
            if (k.hasOwnProperty(L)) {
              var M = k[L],
                E = M[0],
                _ = E.identifier,
                O = E.value;
              "isDefinedBy" === _ && (g += m + " rdfs:isDefinedBy <" +
                O + "> ;\r\n"), "term_status" === _ && (g += m +
                ' vs:term_status "' + O + '" ;\r\n')
          }
        }
        if (a.length > 0) {
          g += m + " owl:disjointUnionOf (";
          for (var S = 0; S < a.length; S++) {
            var F = C.getPrefixRepresentationForFullURI(a[S].iri()),
              I = "";
            I = C.validURL(F) === !0 ? "<" + F + ">" : F, g += m + m +
              I + " \n"
          }
          g += ") ;\r\n"
        }
        if (s.length > 0) {
          g += m + " rdfs:subClassOf [ rdf:type owl:Class ; \r\n", g += m + m + " owl:unionOf ( ";
          for (var T = 0; T < s.length; T++)
            if (s[T] && s[T].iri()) {
              var A = C.getPrefixRepresentationForFullURI(s[T].iri()),
                P = "";
              P = C.validURL(A) === !0 ? "<" + A + ">" : A, g += m + m +
                m + P + " \n"
          }
          g += ") ;\r\n"
        }
        var D,
          B = e.getUnfilteredData().properties,
          R = [];
        for (D = 0; D < B.length; D++) B[D].domain() !== t ||
          "rdfs:subClassOf" !== B[D].type() && "owl:allValuesFrom" !==
          B[D].type() && "owl:someValuesFrom" !== B[D].type() || R.push(
            B[D]), B[D].domain() === t && "owl:disjointWith" === B[D].type() &&
          R.push(B[D]);
        for (D = 0; D < R.length; D++) "owl:someValuesFrom" !== R[D].type() ?
            "owl:allValuesFrom" !== R[D].type() ? "owl:Thing" !== R[D].range()
              .type() && (g += m + " " + R[D].prefixRepresentation + " " +
              R[D].range().prefixRepresentation + " ;\r\n") : (g += m +
              " rdfs:subClassOf [ rdf:type owl:Restriction ; \r\n", g += m + "                   owl:onProperty " + R[D].prefixRepresentation +
              ";\r\n", "owl:Thing" !== R[D].range().type() && (g += m +
              "                   owl:allValuesFrom " + R[D].range().prefixRepresentation +
              "\r\n"), g += m + "                 ];\r\n") : (g += m +
              " rdfs:subClassOf [ rdf:type owl:Restriction ; \r\n", g += m + "                   owl:onProperty " + R[D].prefixRepresentation +
              ";\r\n", "owl:Thing" !== R[D].range().type() && (g += m +
              "                   owl:someValuesFrom " + R[D].range().prefixRepresentation +
              "\r\n"), g += m + "                 ];\r\n");
        return g += v(m, t.label(), "rdfs:label", !0)
      }

      function a(e) {
        var t = e.prefixRepresentation;
        if (0 === t.length) {
          console.log("THIS SHOULD NOT HAPPEN");
          var n = C.getPrefixRepresentationForFullURI(e.iri());
          console.log("FOUND " + n)
        }
        var o = "rdf:type",
          r = e.type(),
          a = t + " " + o + " " + r;
        i(e, "deprecated") === !0 && (a += ", owl:DeprecatedProperty"),
        i(e, "functional") === !0 && (a += ", owl:FunctionalProperty"),
        i(e, "inverse functional") === !0 && (a += ", owl:InverseFunctionalProperty"), i(e, "symmetric") === !
        0 && (a += ", owl:SymmetricProperty"), i(e, "transitive") ===
        !0 && (a += ", owl:TransitiveProperty");
        var s = l(t);
        e.inverse() && (a += "; \r\n", a += s + " owl:inverseOf " + e.inverse()
          .prefixRepresentation);
        var d = !1,
          c = e.domain(),
          p = e.range();
        if (a += " ;\r\n", e.commentForCurrentLanguage() && (a += s +
            ' rdfs:comment "' + e.commentForCurrentLanguage() +
            '" ;\r\n'), e.superproperties())
          for (var u = e.superproperties(), f = 0; f < u.length; f++) {
            var h = u[f];
            a += s + "rdfs:subPropertyOf " + h.prefixRepresentation +
              ";\r\n"
        }
        if (e.annotations()) {
          var g = e.annotations();
          for (var m in g)
            if (g.hasOwnProperty(m)) {
              var y = g[m],
                b = y[0],
                x = b.identifier,
                w = b.value;
              "isDefinedBy" === x && (a += s + " rdfs:isDefinedBy <" +
                w + "> ;\r\n"), "term_status" === x && (a += s +
                ' vs:term_status "' + w + '" ;\r\n')
          }
        }
        if ("owl:Thing" === c.type() && "owl:Thing" === p.type() &&
          "object" != typeof e.label() && 0 === e.label().length && (d = !
            0), d === !0) {
          var k = a.substring(0, a.length - 2);
          return a = k + " . \r\n"
        }
        var L;
        if ("owl:Thing" === c.type() && "owl:Thing" === p.type()) L = v(
            s, e.label(), "rdfs:label", !0), a += L;
        else {
          L = v(s, e.label(), "rdfs:label"), a += L, "owl:Thing" !== c.type() &&
          (a += s + " rdfs:domain " + c.prefixRepresentation +
            ";\r\n"), "owl:Thing" !== p.type() && (a += s +
            " rdfs:range " + p.prefixRepresentation + ";\r\n");
          var M = a,
            E = M.lastIndexOf(";");
          a = M.substring(0, E) + " . \r\n"
        }
        return a
      }

      function l(e) {
        return void 0 === e ? "WHYEMPTYNAME?" : new Array(e.length + 1)
          .join(" ")
      }

      function s() {
        x += "#################################################################\r\n",
        x += "###  Generated with the experimental alpha version of the TTL exporter of WebVOWL (version 1.1.3)  http://visualdataweb.de/webvowl/   ###\r\n",
        x += "#################################################################\r\n\r\n"
      }

      function d() {
        var t = e.options().getGeneralMetaObjectProperty("iri"),
          n = e.options().prefixList(),
          o = [];
        o.push("@prefix : \t\t<" + t + "> .");
        for (var i in n) n.hasOwnProperty(i) && o.push("@prefix " + i +
            ": \t\t<" + n[i] + "> .");
        o.push("@base \t\t\t<" + t + "> .\r\n");
        for (var r = 0; r < o.length; r++) x += o[r] + "\r\n"
      }

      function c() {
        var t = e.options().getGeneralMetaObjectProperty("iri"),
          n = l("<" + t + ">");
        x += "<" + t + "> rdf:type owl:Ontology ;\r\n" + p(n) + u(n) +
        h(n) + f(n);
        var o = x,
          i = o.lastIndexOf(";");
        x = o.substring(0, i) + " . \r\n"
      }

      function p(e) {
        return g(e, "title", "dc:title")
      }

      function u(e) {
        return g(e, "description", "dc:description")
      }

      function f(t) {
        var n = e.options().getGeneralMetaObjectProperty("author");
        if (n) {
          if ("object" != typeof n) {
            if (0 === n.length) return "";
            var o = t + ' dc:creator "' + n + '";\r\n';
            return o
          }
          for (var i = t + ' dc:creator "', r = 0; r < n.length - 1; r++)
            i += n[r] + ", ";
          return i += n[n.length - 1] + '";\r\n'
        }
        return ""
      }

      function h(t) {
        var n = e.options().getGeneralMetaObjectProperty("version");
        return n ? "object" != typeof n && 0 === n.length ? "" : g(t,
          "version", "owl:versionInfo") : ""
      }

      function g(t, n, o, i) {
        var r = e.options().getGeneralMetaObjectProperty(n);
        if ("object" == typeof r) {
          var a = [];
          for (var l in r)
            if (r.hasOwnProperty(l)) {
              var s = r[l];
              "undefined" === l ? a.push(t + " " + o + ' "' + s +
                '"@en; \r\n') : a.push(t + " " + o + ' "' + s + '"@' +
                l + "; \r\n")
          }
          for (var d = "", c = 0; c < a.length; c++) d += a[c];
          if (i && i === !0) {
            var p = d,
              u = p.lastIndexOf(";");
            return p.substring(0, u) + ". \r\n"
          }
          return d
        }
        if (i && i === !0) {
          var f = t + " " + o + ' "' + r + '"@en; \r\n',
            h = f.lastIndexOf(";");
          return f.substring(0, h) + " . \r\n"
        }
        return t + " " + o + ' "' + r + '"@en;\r\n'
      }

      function v(e, t, n, o) {
        var i = t;
        if ("object" == typeof i) {
          var r = [];
          for (var a in i)
            if (i.hasOwnProperty(a)) {
              var l = i[a];
              "undefined" === a ? r.push(e + " " + n + ' "' + l +
                '"@en; \r\n') : r.push(e + " " + n + ' "' + l + '"@' +
                a + "; \r\n")
          }
          for (var s = "", d = 0; d < r.length; d++) s += r[d];
          if (o && o === !0) {
            var c = s,
              p = c.lastIndexOf(";");
            return c.substring(0, p) + " . \r\n"
          }
          return s
        }
        if (o && o === !0) {
          var u = e + " " + n + ' "' + i + '"@en; \r\n',
            f = u.lastIndexOf(";");
          return u.substring(0, f) + " . \r\n"
        }
        return e + " " + n + ' "' + i + '"@en; \r\n'
      }
      var m,
        y,
        b = {},
        x = "",
        w = {},
        k = {},
        C = webvowl.util.prefixTools(e);
      return b.requestExport = function() {
          C.updatePrefixModel(), x = "", m = e.getClassDataForTtlExport();
          var i;
          for (i = 0; i < m.length; i++) w[m[i].id()] = m[i];
          for (y = e.getPropertyDataForTtlExport(), i = 0; i < y.length; i++)
            k[y[i].id()] = y[i];
          s(), d(), c(), x += "#################################################################\r\n\r\n",
          t();
          var r = n(),
            a = o();
          return m = null, y = null, w = {}, k = {}, r !== !1 && a !==
            !1
        }, b.resultingTTL_Content = function() {
          return x
        }, b
    }
  },
  325: function(e, t, n) {
    (function(t) {
      e.exports = function(e) {
        function n(n, o, i, r) {
          var a,
            l;
          a = t.select(r).append("div").classed("checkboxContainer", !
            0), l = a.append("input").classed("filterCheckbox", !0)
            .attr("id", o + "FilterCheckbox").attr("type", "checkbox")
            .property("checked", n.enabled()), c.push({
            checkbox: l,
            defaultState: n.enabled()
          }), l.on("click", function(t) {
            var o = l.property("checked");
            n.enabled(o), t !== !0 && e.update()
          }), a.append("label").attr("for", o + "FilterCheckbox").text(
            i)
        }

        function o(t, n) {
          t.setMaxDegreeSetter(function(e) {
            s.attr("max", e), r(s, Math.min(e, s.property("value")))
          }), t.setDegreeGetter(function() {
            return s.property("value")
          }), t.setDegreeSetter(function(e) {
            r(s, e)
          });
          var o,
            a;
          o = n.append("div").classed("distanceSliderContainer", !0),
          s = o.append("input").attr("id",
            "nodeDegreeDistanceSlider").attr("type", "range").attr(
            "min", 0).attr("step", 1), o.append("label").classed(
            "description", !0).attr("for",
            "nodeDegreeDistanceSlider").text("Degree of collapsing"),
          a = o.append("label").classed("value", !0).attr("for",
            "nodeDegreeDistanceSlider").text(0), s.on("change",
            function(t) {
              t !== !0 && (e.update(), l = s.property("value"))
            }), s.on("input", function() {
            var e = s.property("value");
            a.text(e)
          }), s.on("wheel", i), s.on("focusout", function() {
            s.property("value") !== l && e.update()
          })
        }

        function i() {
          var n,
            o = t.event;
          o.deltaY < 0 && (n = 1), o.deltaY > 0 && (n = -1);
          var i = parseInt(s.attr("max")),
            r = parseInt(s.property("value")),
            a = r + n;
          r !== a && a >= 0 && a <= i && (s.property("value", a), s.on(
            "input")(), e.update()), t.event.preventDefault()
        }

        function r(e, t) {
          e.property("value", t).on("input")()
        }

        function a() {
          p.node().addEventListener("animationend", function() {
            p.classed("buttonPulse", !1), p.classed(
              "filterMenuButtonHighlight", !0)
          })
        }
        var l,
          s,
          d = {},
          c = [],
          p = (t.select("#m_filter"), t.select("#c_filter a")),
          u = t.select("#nodeDegreeFilteringOption"),
          f = 0;
        return d.setDefaultDegreeValue = function(e) {
            f = e
          }, d.getDefaultDegreeValue = function() {
            return f
          }, d.getGraphObject = function() {
            return e
          }, d.getCheckBoxContainer = function() {
            return c
          }, d.getDegreeSliderValue = function() {
            return s.property("value")
          }, d.setup = function(t, i, r, l, s, c) {
            p.on("mouseover", function() {
              var t = e.options().searchMenu();
              t.hideSearchEntries()
            }), p.on("mouseleave", function() {
              d.highlightForDegreeSlider(!1)
            }), n(t, "datatype", "Datatype properties",
              "#datatypeFilteringOption"), n(i, "objectProperty",
              "Object properties", "#objectPropertyFilteringOption"
            ), n(r, "subclass", "Solitary subclasses",
              "#subclassFilteringOption"), n(l, "disjoint",
              "Class disjointness", "#disjointFilteringOption"), n(
              s, "setoperator", "Set operators",
              "#setOperatorFilteringOption"), o(c, u), a()
          }, d.reset = function() {
            c.forEach(function(e) {
              var t = e.checkbox,
                n = e.defaultState,
                o = t.property("checked");
              o !== n && (t.property("checked", n), t.on("click")())
            }), r(s, 0), s.on("change")()
          }, d.killButtonAnimation = function() {
            p.classed("buttonPulse", !1), p.classed(
              "filterMenuButtonHighlight", !1)
          }, d.highlightForDegreeSlider = function(e) {
            if (arguments.length || (e = !0), p.classed("highlighted",
                e), u.classed("highlighted", e), p.classed(
                "buttonPulse") === !0 && e === !0) {
              p.classed("buttonPulse", !1);
              var t = setTimeout(function() {
                p.classed("buttonPulse", e), clearTimeout(t)
              }, 100)
            } else p.classed("buttonPulse", e), p.classed(
                "filterMenuButtonHighlight", e)
          }, d.setCheckBoxValue = function(e, t) {
            for (var n = 0; n < c.length; n++) {
              var o = c[n].checkbox.attr("id");
              if (o === e) {
                c[n].checkbox.property("checked", t);
                break
              }
            }
          }, d.getCheckBoxValue = function(e) {
            for (var t = 0; t < c.length; t++) {
              var n = c[t].checkbox.attr("id");
              if (n === e) return c[t].checkbox.property("checked")
            }
          }, d.setDegreeSliderValue = function(e) {
            s.property("value", e)
          }, d.getDegreeSliderValue = function() {
            return s.property("value")
          }, d.updateSettings = function() {
            var e = !0,
              t = s.property("value");
            t > 0 ? d.highlightForDegreeSlider(!0) : d.highlightForDegreeSlider(!
              1), c.forEach(function(t) {
              var n = t.checkbox;
              n.on("click")(e)
            }), s.on("input")(), s.on("change")()
          }, d
      }
    }).call(t, n(6))
  },
  326: function(e, t, n) {
    (function(t) {
      e.exports = function(e) {
        function n(n, i, a, l) {
          var s,
            d,
            c = l();
          s = t.select(n).append("div").datum({
            distanceFunction: l
          }).classed("distanceSliderContainer", !0);
          var p = s.append("input").attr("id", i + "DistanceSlider").attr(
            "type", "range").attr("min", 10).attr("max", 600).attr(
            "value", l()).attr("step", 10);
          s.append("label").classed("description", !0).attr("for", i +
            "DistanceSlider").text(a), d = s.append("label").classed(
            "value", !0).attr("for", i + "DistanceSlider").text(l()),
          r.push(p), p.on("focusout", function() {
            e.updateStyle()
          }), p.on("input", function() {
            var t = p.property("value");
            l(t), o(c), d.text(t), e.updateStyle()
          }), p.on("wheel", function() {
            var e,
              n = t.event;
            n.deltaY < 0 && (e = 10), n.deltaY > 0 && (e = -10);
            var o = parseInt(p.property("value")),
              i = o + e;
            i !== o && (p.property("value", i), l(i), p.on(
              "input")()), t.event.preventDefault()
          })
        }

        function o(e) {
          var t = Math.max(a.classDistance(), a.datatypeDistance()),
            n = t / e,
            o = l * n;
          a.charge(o)
        }
        var i = {},
          r = [],
          a = e.graphOptions(),
          l = a.charge();
        return i.setup = function() {
            var o = t.select("#m_gravity");
            o.on("mouseover", function() {
              var t = e.options().searchMenu();
              t.hideSearchEntries()
            }), n("#classSliderOption", "class", "Class distance",
              a.classDistance), n("#datatypeSliderOption",
              "datatype", "Datatype distance", a.datatypeDistance)
          }, i.reset = function() {
            r.forEach(function(e) {
              e.property("value", function(e) {
                return e.distanceFunction()
              }), e.on("input")()
            })
          }, i
      }
    }).call(t, n(6))
  },
  327: function(e, t, n) {
    (function(t) {
      e.exports = function(e) {
        function n(n, o, i, r, a) {
          var l = t.select(i).append("div").classed(
              "checkboxContainer", !0),
            s = l.append("input").classed("moduleCheckbox", !0).attr(
              "id", n + "ModuleCheckbox").attr("type", "checkbox").property(
              "checked", r());
          s.on("click", function(n) {
            var o = s.property("checked");
            r(o), t.select("#maxLabelWidthSlider").node().disabled = !
              o, t.select("#maxLabelWidthvalueLabel").classed(
              "disabledLabelForSlider", !o), t.select(
              "#maxLabelWidthDescriptionLabel").classed(
              "disabledLabelForSlider", !o), a > 0 && e.animateDynamicLabelWidth()
          }), l.append("label").attr("for", n + "ModuleCheckbox").text(
            o), "editorMode" === n && l.append("label").attr(
            "style", "font-size:10px;padding-top:3px").text(
            "(experimental)"), d = s
        }

        function o(n, o, i, r) {
          var a = t.select(i).append("div").classed(
              "checkboxContainer", !0),
            l = a.append("input").classed("moduleCheckbox", !0).attr(
              "id", n + "ModuleCheckbox").attr("type", "checkbox").property(
              "checked", r());
          l.on("click", function(t) {
            var n = l.property("checked");
            r(n), n === !0 && e.showEditorHintIfNeeded()
          }), a.append("label").attr("for", n + "ModuleCheckbox").text(
            o), "editorMode" === n && a.append("label").attr(
            "style", "font-size:10px;padding-top:3px").text(
            " (experimental)")
        }

        function i(n, o, i, r, a) {
          var l,
            s;
          return l = t.select(r).append("div").classed(
              "checkboxContainer", !0).datum({
              module: n,
              defaultState: n.enabled()
            }), s = l.append("input").classed("moduleCheckbox", !0).attr(
              "id", o + "ModuleCheckbox").attr("type", "checkbox").property(
              "checked", n.enabled()), f.push(s), s.on("click",
              function(t, n) {
                var o = s.property("checked");
                t.module.enabled(o), a && n !== !0 && (e.executeColorExternalsModule(),
                e.executeCompactNotationModule(), e.lazyRefresh()
                )
              }), l.append("label").attr("for", o + "ModuleCheckbox")
              .text(i), l
        }

        function r(t, n) {
          var o = t.append("button").datum({
            active: !1
          }).classed("color-mode-switch", !0);
          return a(o, n), o.on("click", function(t) {
              var i = o.datum();
              i.active = !i.active, a(o, n), n.enabled() && t !== !
              0 && (e.executeColorExternalsModule(), e.lazyRefresh())
            }), o
        }

        function a(e, t) {
          var n = e.datum().active,
            o = l(n);
          e.classed("active", n).text(o.text), t && t.colorModeType(o
            .type)
        }

        function l(e) {
          return e ? p : c
        }
        var s,
          d,
          c = {
            text: "Multicolor",
            type: "same"
          },
          p = {
            text: "Multicolor",
            type: "gradient"
          },
          u = {},
          f = [];
        return u.colorModeState = function(e) {
            return arguments.length ? (s.datum().active = e, u) : s.datum()
              .active
          }, u.setDynamicLabelWidth = function(e) {
            d.property("checked", e)
          }, u.getCheckBoxContainer = function() {
            return f
          }, u.colorModeSwitch = function() {
            return s
          }, u.setup = function(a, l, d, c) {
            var p = t.select("#m_modes");
            p.on("mouseover", function() {
              var t = e.options().searchMenu();
              t.hideSearchEntries()
            }), n("labelWidth", "Dynamic label width",
              "#dynamicLabelWidth", e.options().dynamicLabelWidth,
              1), o("editorMode", "Editing ", "#editMode", e.editorMode),
            i(a, "pickandpin", "Pick & pin", "#pickAndPinOption", !
              1), i(l, "nodescaling", "Node scaling",
              "#nodeScalingOption", !0), i(d, "compactnotation",
              "Compact notation", "#compactNotationOption", !0);
            var u = i(c, "colorexternals", "Color externals",
              "#colorExternalsOption", !0);
            s = r(u, c)
          }, u.reset = function() {
            f.forEach(function(e) {
              var t = e.datum().defaultState,
                n = e.property("checked");
              n !== t && (e.property("checked", t), e.on("click")(e.datum())), e.datum().module.reset()
            }), s.datum().active = !0, s.on("click")()
          }, u.setCheckBoxValue = function(e, t) {
            for (var n = 0; n < f.length; n++) {
              var o = f[n].attr("id");
              if (o === e) {
                f[n].property("checked", t);
                break
              }
            }
          }, u.getCheckBoxValue = function(e) {
            for (var t = 0; t < f.length; t++) {
              var n = f[t].attr("id");
              if (n === e) return f[t].property("checked")
            }
          }, u.setColorSwitchState = function(e) {
            u.colorModeState(!e)
          }, u.setColorSwitchStateUsingURL = function(e) {
            u.colorModeState(!e), s.on("click")(!0)
          }, u.updateSettingsUsingURL = function() {
            var e = !0;
            f.forEach(function(t) {
              t.on("click")(t.datum(), e)
            })
          }, u.updateSettings = function() {
            var e = !0;
            f.forEach(function(t) {
              t.on("click")(t.datum(), e)
            }), s.on("click")(e)
          }, u
      }
    }).call(t, n(6))
  },
  328: function(e, t, n) {
    (function(t) {
      e.exports = function(e) {
        function n(e, n, o, i, a) {
          var l = t.select(o).append("div").classed(
              "checkboxContainer", !0),
            s = l.append("input").classed("moduleCheckbox", !0).attr(
              "id", e + "ConfigCheckbox").attr("type", "checkbox").property(
              "checked", i());
          return s.on("click", function(e) {
              var t = s.property("checked");
              i(t), a(t, e)
            }), r.push(s), l.append("label").attr("for", e +
              "ConfigCheckbox").text(n), s
        }
        var o,
          i = {},
          r = [],
          a = !1;
        return i.setup = function() {
            var i = t.select("#debugMenuHref");
            i.on("mouseover", function() {
              if (a === !1) {
                var n = e.options().searchMenu();
                n.hideSearchEntries(), o.on("click")(!0), e.editorMode() ===
                !1 ? (t.select("#useAccuracyHelper").style(
                  "color", "#979797"), t.select(
                  "#useAccuracyHelper").style(
                  "pointer-events", "none"), t.select(
                  "#showDraggerObject").style("color",
                  "#979797"), t.select("#showDraggerObject").style(
                  "pointer-events", "none")) : (t.select(
                  "#useAccuracyHelper").style("color",
                  "#2980b9"), t.select("#useAccuracyHelper").style(
                  "pointer-events", "auto")), a = !0
              }
            }), i.on("mouseout", function() {
              a = !1
            }), o = n("useAccuracyHelper", "Use accuracy helper",
              "#useAccuracyHelper", e.options().useAccuracyHelper,
              function(n, o) {
                n ? (t.select("#showDraggerObject").style("color",
                  "#2980b9"), t.select("#showDraggerObject").style(
                  "pointer-events", "auto")) : (t.select(
                  "#showDraggerObject").style("color",
                  "#979797"), t.select("#showDraggerObject").style(
                  "pointer-events", "none"), t.select(
                  "#showDraggerObjectConfigCheckbox").node().checked = !
                  1), o !== !0 && (e.lazyRefresh(), e.updateDraggerElements())
              }), n("showDraggerObject", "Show accuracy helper",
              "#showDraggerObject", e.options().showDraggerObject,
              function(t, n) {
                n !== !0 && (e.lazyRefresh(), e.updateDraggerElements())
              }), n("showFPS_Statistics",
              "Show rendering statistics", "#showFPS_Statistics", e
                .options().showRenderingStatistic,
              function(n, o) {
                e.options().getHideDebugFeatures() === !1 ? t.select(
                  "#FPS_Statistics").classed("hidden", !n) : t.select(
                  "#FPS_Statistics").classed("hidden", !0)
              }), n("showModeOfOperation", "Show input modality",
              "#showModeOfOperation", e.options().showInputModality,
              function(n) {
                e.options().getHideDebugFeatures() === !1 ? t.select(
                  "#modeOfOperationString").classed("hidden", !n) :
                  t.select("#modeOfOperationString").classed(
                    "hidden", !0)
              })
          }, i.setCheckBoxValue = function(e, t) {
            for (var n = 0; n < r.length; n++) {
              var o = r[n].attr("id");
              if (o === e) {
                r[n].property("checked", t);
                break
              }
            }
          }, i.getCheckBoxValue = function(e) {
            for (var t = 0; t < r.length; t++) {
              var n = r[t].attr("id");
              if (n === e) return r[t].property("checked")
            }
          }, i.updateSettings = function() {
            t.selectAll(".debugOption").classed("hidden", e.options()
              .getHideDebugFeatures());
            var n = !0;
            r.forEach(function(e) {
              e.on("click")(n)
            }), e.editorMode() === !1 ? (t.select(
              "#useAccuracyHelper").style("color", "#979797"), t.select(
              "#useAccuracyHelper").style("pointer-events",
              "none"), t.select("#showDraggerObject").style(
              "color", "#979797"), t.select("#showDraggerObject")
              .style("pointer-events", "none")) : (t.select(
              "#useAccuracyHelper").style("color", "#2980b9"), t.select(
              "#useAccuracyHelper").style("pointer-events",
              "auto"))
          }, i
      }
    }).call(t, n(6))
  },
  329: function(e, t, n) {
    (function(t) {
      n(330);
      e.exports = function(e) {
        function n() {
          t.select(window).on("hashchange", function() {
            var e = t.event.oldURL,
              n = t.event.newURL;
            if (e !== n) {
              if (n === e + "#") return;
              o(), _.parseUrlAndLoadOntology()
            }
          }), o()
        }

        function o() {
          t.selectAll("#menuElementContainer > li > a").attr("href",
            location.hash || "#")
        }

        function i(e) {
          var n = t.select("#bulletPoint_container"),
            o = n.append("div");
          o.node().innerHTML = e, _.scrollDownDetails()
        }

        function r(e) {
          var n = t.select("#bulletPoint_container"),
            o = n.node().getElementsByTagName("LI"),
            i = o.length - 1;
          if (i >= 0) {
            var r = o[i].innerHTML;
            o[i].innerHTML = r + e
          }
          _.scrollDownDetails()
        }

        function a(e) {
          var n = t.select("#bulletPoint_container"),
            o = n.append("li");
          o.node().innerHTML = e, t.select("#currentLoadingStep").node()
            .innerHTML = e, _.scrollDownDetails()
        }

        function l() {
          var e = t.select("#iri-converter-button"),
            n = t.select("#iri-converter-input");
          n.on("input", function() {
            x();
            var t = "" === n.property("value");
            e.attr("disabled", t || void 0)
          }).on("click", function() {
            x()
          }), t.select("#iri-converter-form").on("submit", function() {
            for (var e = n.property("value"), o = e.replace(
                  /%20/g, " "); o.beginsWith(" ");) o = o.substr(1,
                o.length);
            for (; o.endsWith(" ");) o = o.substr(0, o.length - 1);
            e = o;
            var i = e.toLowerCase();
            return i.endsWith(".json") ? (location.hash = "url=" +
                e, n.property("value", ""), n.on("input")()) : (
                location.hash = "iri=" + e, n.property("value",
                  ""), n.on("input")()), t.event.preventDefault(), !
              1
          })
        }

        function s() {
          var n = t.select("#file-converter-input"),
            o = t.select("#file-converter-label"),
            i = t.select("#file-converter-button");
          n.on("change", function() {
            var t = n.property("files");
            t.length <= 0 ? (o.text("Select ontology file"), i.property(
              "disabled", !0)) : (o.text(t[0].name), L = t[0].name,
            i.property("disabled", !1), i.node().click(), e.options()
              .navigationMenu().hideAllMenus())
          }), i.on("click", function() {
            var e = n.property("files")[0];
            if (!e) return !1;
            var t = "file=" + e.name;
            location.hash === "#" + t ? _.parseUrlAndLoadOntology() :
              location.hash = t
          })
        }

        function d(e) {
          var n = t.select("#o2vConverterContainer");
          if (!n.node()) {
            var o = t.select("#bulletPoint_container"),
              i = o.append("div");
            n = i.append("ul"), n.attr("id", "o2vConverterContainer"),
            n.style("margin-left", "-25px")
          }
          for (var r = n.node().children, a = r.length, l = 0; l < a; l++)
            r[0].remove();
          for (var s, d = e.split("* "), c = 0; c < d.length; c++) {
            var p = d[c];
            p.length > 0 && (s = n.append("li"), s.attr("type",
              "disc"),
            s.node().innerHTML = p.replace(/\n/g, "<br>"))
          }
          s && (s.node().innerHTML += "<br>"), _.scrollDownDetails()
        }

        function c(e, n) {
          t.xhr("loadingStatus?sessionId=" + E, "application/text",
            function(t, o) {
              t && (console.log(
                "ontologyMenu getLoadingStatusOnceCallBacked throws error"
              ), console.log("---------Error -----------"),
              console.log(t), console.log(
                "---------Request -----------"), console.log(o)
              ), d(o.responseText), e(n)
            })
        }

        function p() {
          t.xhr("loadingStatus?sessionId=" + E, "application/text",
            function(e, t) {
              e && (console.log(
                "ontologyMenu getLoadingStatusTimeLooped throws error"
              ), console.log("---------Error -----------"),
              console.log(e), console.log(
                "---------Request -----------"), console.log(t)
              ), T === !1 && (d(t.responseText), u())
            })
        }

        function u() {
          clearTimeout(M), T === !1 && (M = setTimeout(function() {
            p()
          }, 1e3))
        }

        function f(e) {
          t.xhr("loadingStatus", "application/text", function(t, n) {
            void 0 !== n ? d(n.responseText + "<br>" + e) : i(e)
          })
        }

        function h(e) {
          var t = e[2];
          return t !== E ? (console.log(
            "The conversion process for file:" + e[1] +
            " has been canceled!"), void S.conversionFinished(t)) :
            (_.loadFromOWL2VOWL(e[0], e[1]), void S.conversionFinished())
        }

        function g(e) {
          var t = e[2];
          return t !== E ? void console.log(
            "The conversion process for file:" + e[1] +
            " has been canceled!") : void _.loadFromOWL2VOWL(e[0],
            e[1])
        }

        function v(t) {
          var n = t[0],
            o = t[1],
            r = t[2];
          return r !== E ? (console.log(
            "This thread has been canceled!!"), void S.conversionFinished(
            r)) : (f(
            '<br><span style=\'color:red\'> Failed to convert the file.</span>  Ontology could not be loaded.<br>Is it a valid OWL ontology? Please check with <a target="_blank"href="http://visualdataweb.de/validator/">OWL Validator</a>'
          ), null !== n && 500 === n.status && i(
            "<span style='color:red'>Could not find ontology  at the URL</span>"
          ), o && 0 === o.responseText.length && i(
            "<span style='color:red'>Received empty graph</span>"
          ), e.handleOnLoadingError(), void S.conversionFinished())
        }

        function m(t) {
          var n = t[0],
            o = t[1],
            r = t[2];
          return r !== E ? (console.log(
            "This thread has been canceled!!"), void S.conversionFinished(
            r)) : (f(
            '<br><span style=\'color:red\'> Failed to convert the file.</span>  Ontology could not be loaded.<br>Is it a valid OWL ontology? Please check with <a target="_blank"href="http://visualdataweb.de/validator/">OWL Validator</a>'
          ), null !== n && 500 === n.status && i(
            "<span style='color:red'>Could not find ontology  at the URL</span>"
          ), o && 0 === o.responseText.length && i(
            "<span style='color:red'>Received empty graph</span>"
          ), e.handleOnLoadingError(), void S.conversionFinished())
        }

        function y(e, t, n) {
          T = !1, u();
          var o = new FormData;
          o.append("ontology", e), o.append("sessionId", n);
          var i = new XMLHttpRequest;
          i.open("POST", "convert", !0), i.onload = function() {
            clearTimeout(M), T = !0, c(b, [i, t, n])
          }, u(), i.send(o)
        }

        function b(t) {
          var n = t[0],
            o = t[1],
            i = t[2];
          return i !== E ? (console.log(
            "The conversion process for file:" + o +
            " has been canceled!"), void S.conversionFinished(i)) :
            void (200 === n.status ? (_.loadFromOWL2VOWL(n.responseText,
              o), S.conversionFinished()) : (f(
              'Failed to convert the file. Ontology could not be loaded.<br>Is it a valid OWL ontology? Please check with <a target="_blank"href="http://visualdataweb.de/validator/">OWL Validator</a>'
            ), e.handleOnLoadingError(), S.conversionFinished()))
        }

        function x() {
          function e() {
            n.style("display", void 0), clearTimeout(C), t.select(
              window).on("click", void 0).on("keydown", void 0), n.on(
              "mouseover", void 0)
          }
          var n = t.select("#select .toolTipMenu");
          n.on("click", function() {
            t.event.stopPropagation()
          }).on("keydown", function() {
            t.event.stopPropagation()
          }), n.style("display", "block"), clearTimeout(C), C = setTimeout(function() {
            e()
          }, 3e3), t.select(window).on("click", function() {
            e()
          }).on("keydown", function() {
            e()
          }), n.on("mouseover", function() {
            e()
          })
        }

        function w() {
          t.select("#layoutLoadingProgressBarContainer").classed(
            "hidden", !1), F.classed("hidden", !1), I.classed(
            "hidden", !1)
        }

        function k() {
          F.classed("hidden", !0)
        }
        var C,
          L,
          M,
          E,
          _,
          O,
          S = {},
          F = t.select("#loading-info"),
          I = t.select("#loading-progress"),
          T = !1,
          A = !1,
          P = {},
          D = "";
        return String.prototype.beginsWith = function(e) {
            return 0 === this.indexOf(e)
          }, S.getLoadingFunction = function() {
            return O
          }, S.clearCachedVersion = function() {
            P[D] && (P[D] = void 0)
          }, S.reloadCachedOntology = function() {
            S.clearCachedVersion(), e.clearGraphData(), _.parseUrlAndLoadOntology(!
              1)
          }, S.cachedOntology = function(n) {
            if (D = n, P[n]) {
              var o = String(location.hash);
              t.select("#reloadSvgIcon").node().disabled = !1, e.showReloadButtonAfterLayoutOptimization(!
                0), o.indexOf("#file") > -1 ? (t.select(
                "#reloadSvgIcon").node().disabled = !0, t.select(
                "#reloadCachedOntology").node().title = "reloading original version not possible, please reload the file",
              t.select("#reloadSvgIcon").classed(
                "disabledReloadElement", !0), t.select(
                "#svgStringText").style("fill", "gray"), t.select(
                "#svgStringText").classed("noselect", !0)) : (t.select(
                "#reloadCachedOntology").node().title = "generate new visualization and overwrite cached ontology",
              t.select("#reloadSvgIcon").classed(
                "disabledReloadElement", !1), t.select(
                "#svgStringText").style("fill", "black"), t.select(
                "#svgStringText").classed("noselect", !0))
            } else e.showReloadButtonAfterLayoutOptimization(!1);
            return P[n]
          }, S.setCachedOntology = function(e, t) {
            P[e] = t, D = e
          }, S.getErrorStatus = function() {
            return A
          }, S.setup = function(o) {
            O = o, _ = e.options().loadingModule();
            var i = t.select("#m_select");
            i.on("mouseover", function() {
              var t = e.options().searchMenu();
              t.hideSearchEntries()
            }), l(), s();
            var r = t.select("#error-description-button").datum({
              open: !1
            });
            r.on("click", function(e) {
              var n = t.select("#error-description-container"),
                o = t.select(this);
              e.open = !e.open;
              var i = e.open;
              i ? o.text("Hide error details") : o.text(
                "Show error details"), n.classed("hidden", !i)
            }), n(), _.setOntologyMenu(S)
          }, S.stopLoadingTimer = function() {
            T = !0, clearTimeout(M)
          }, S.setIriText = function(e) {
            t.select("#iri-converter-input").node().value = e, t.select(
              "#iri-converter-button").attr("disabled", !1), t.select(
              "#iri-converter-form").on("submit")()
          }, S.clearDetailInformation = function() {
            for (var e = t.select("#bulletPoint_container"), n = e.node()
                  .children, o = n.length, i = 0; i < o; i++) n[0].remove()
          }, S.append_message = function(e) {
            i(e)
          }, S.append_message_toLastBulletPoint = function(e) {
            r(e)
          }, S.append_bulletPoint = function(e) {
            a(e)
          }, S.setLoadingStatusInfo = function(e) {
            d(e)
          }, S.setConversionID = function(e) {
            E = e
          }, S.callbackLoad_Ontology_FromIRI = function(e) {
            var n = e[0],
              o = e[1],
              i = e[2];
            T = !1, u(), t.xhr(n, "application/json", function(e, t) {
              var n = !e;
              (null !== e && 500 === e.status || t && 0 === t.responseText
                .length) && (clearTimeout(M), T = !0, c(m, [e, t,
                i
              ]));
              var r;
              n && (clearTimeout(M), T = !0, r = t.responseText,
              c(h, [r, o, i]))
            })
          }, S.callbackLoad_Ontology_From_DirectInput = function(e, t) {
            var n = e,
              o = t[1];
            T = !1, u();
            var i = new FormData;
            i.append("input", n), i.append("sessionId", o);
            var r = new XMLHttpRequest;
            r.open("POST", "directInput", !0), r.onload = function() {
              clearTimeout(M), T = !0, c(b, [r, n, o])
            }, u(), r.send(i)
          }, S.getConversionId = function() {
            return E
          }, S.callbackLoad_JSON_FromURL = function(e) {
            var n = e[0],
              o = e[1],
              i = e[2];
            T = !1, u(), t.xhr(n, "application/json", function(e, t) {
              var n = !e;
              if ((null !== e && 500 === e.status || t && 0 === t
                  .responseText.length) && (clearTimeout(M), T = !
                  0, n = !1, console.log(t), console.log(t.responseText
                  .length), c(v, [e, t, i])), n) {
                clearTimeout(M), T = !0;
                var r = t.responseText;
                c(g, [r, o, i])
              }
            })
          }, S.callbackLoadFromOntology = function(e, t, n) {
            y(e, t, n)
          }, S.conversionFinished = function(e) {
            var n = E;
            e && (n = e), t.xhr("conversionDone?sessionId=" + n,
              "application/text",
              function(e, t) {
                e && (console.log(
                  "ontologyMenu conversionFinished throws error"
                ), console.log("---------Error -----------"),
                console.log(e), console.log(
                  "---------Request -----------"), console.log(
                  t))
              })
          }, S.showLoadingStatus = function(e) {
            e === !0 ? w() : k()
          }, S
      }
    }).call(t, n(6))
  },
  330: function(e, t, n) {
    function o(e) {
      return e = i(e), e && l.test(e) ? e.replace(a, r) : e
    }
    var i = n(219),
      r = n(331),
      a = /&(?:amp|lt|gt|quot|#39);/g,
      l = RegExp(a.source);
    e.exports = o
  },
  331: function(e, t, n) {
    var o = n(332),
      i = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      },
      r = o(i);
    e.exports = r
  },
  332: function(e, t) {
    function n(e) {
      return function(t) {
        return null == e ? void 0 : e[t]
      }
    }
    e.exports = n
  },
  333: function(e, t, n) {
    (function(t) {
      e.exports = function(e) {
        function n() {
          o(), i()
        }

        function o() {
          r.classed("paused", function(e) {
            return e.paused
          })
        }

        function i() {
          r.datum().paused ? r.text("Resume") : r.text("Pause")
        }
        var r,
          a = {};
        return a.setup = function() {
            var o = t.select("#pauseOption");
            o.on("mouseover", function() {
              var t = e.options().searchMenu();
              t.hideSearchEntries()
            }), r = t.select("#pause-button").datum({
              paused: !1
            }).on("click", function(t) {
              e.paused(!t.paused), t.paused = !t.paused, n(), r.classed(
                "highlighted", t.paused)
            }), n()
          }, a.setPauseValue = function(t) {
            r.datum().paused = t, e.paused(t), r.classed(
              "highlighted", t), n()
          }, a.reset = function() {
            a.setPauseValue(!1)
          }, a
      }
    }).call(t, n(6))
  },
  334: function(e, t, n) {
    (function(t) {
      e.exports = function(e) {
        function n() {
          e.resetSearchHighlight(), e.options().searchMenu().clearText(),
          r.classDistance(a.classDistance()), r.datatypeDistance(a.datatypeDistance()),
          r.charge(a.charge()), r.gravity(a.gravity()), r.linkStrength(
            a.linkStrength()), e.reset(), o.forEach(function(e) {
            e.reset()
          }), e.updateStyle()
        }
        var o,
          i = {},
          r = e.graphOptions(),
          a = webvowl.options();
        return i.setup = function(i) {
            o = i, t.select("#reset-button").on("click", n);
            var r = t.select("#resetOption");
            r.on("mouseover", function() {
              var t = e.options().searchMenu();
              t.hideSearchEntries()
            })
          }, i
      }
    }).call(t, n(6))
  },
  335: function(e, t, n) {
    (function(t) {
      e.exports = function(e) {
        function n() {
          f = e.getUpdateDictionary(), b = !1, v = [], m = [];
          var t,
            n = [],
            o = [];
          for (t = 0; t < f.length; t++) {
            var i = f[t].labelForCurrentLanguage();
            if (n.push(f[t].id()), o.push(i), f[t].equivalents && f[t]
                .equivalents().length > 0)
              for (var r = f[t].equivalentsString(), a = r.split(", "),
                  l = 0; l < a.length; l++) n.push(f[t].id()), o.push(
                  a[l])
          }
          p = [], u = [];
          var s,
            d,
            c = -1;
          for (t = 0; t < o.length; t++)
            if (0 !== t)
              if (s = o[t], d = n[t], c = p.indexOf(s), c === -1) {
                p.push(o[t]), u.push([]);
                var h = u.length;
                u[h - 1].push(d)
              } else u[c].push(d);
            else p.push(o[t]), u.push([]), u[0].push(n[t]);
          for (t = 0; t < p.length; t++) {
            for (var g = p[t], y = u[t], x = "[ ", w = 0; w < y.length; w++)
              x += y[w].toString(), x += ", ";
            x = x.substring(0, x.length - 2), x += " ]";
            var k = y[0];
            if (y.length > 1) {
              for (var C = !0, L = 0; L < y.length; L++) y[L] !== k &&
                (C = !1);
              C === !0 ? v.push(g) : v.push(g + " (" + y.length + ")")
            } else v.push(g);
            m.push(g)
          }
        }

        function o() {
          g.showSearchEntries()
        }

        function i() {
          x ? g.hideSearchEntries() : g.showSearchEntries()
        }

        function r(e) {
          var t = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
          return t.test(e)
        }

        function a() {
          b && n();
          var o,
            i = k.node().children,
            a = i.length,
            l = 0,
            s = -1;
          for (o = 0; o < a; o++) {
            var d = i[o].getAttribute("class");
            "dbEntrySelected" === d && (s = o)
          }
          if (13 === t.event.keyCode)
            if (s >= 0 && s < a) i[s].onclick(), g.hideSearchEntries();
            else if (0 === a) {
              h = c.node().value;
              for (var p = h.replace(/%20/g, " "); p.beginsWith(" ");) p = p.substr(1, p.length);
              for (; p.endsWith(" ");) p = p.substr(0, p.length - 1);
              var u = p.replace(/ /g, "%20"),
                f = r(u);
              if (f) {
                var v = e.options().ontologyMenu();
                v.setIriText(u), c.node().value = ""
              } else console.log(u + " is not a valid URL!")
          }
          38 === t.event.keyCode && (l = -1, g.showSearchEntries()),
          40 === t.event.keyCode && (l = 1, g.showSearchEntries());
          var m = s + l;
          m !== s && (m < 0 && s <= 0 && i[0].setAttribute("class",
            "dbEntrySelected"), m >= a && i[s].setAttribute(
            "class", "dbEntrySelected"), m >= 0 && m < a && (i[m]
            .setAttribute("class", "dbEntrySelected"), s >= 0 &&
          i[s].setAttribute("class", "dbEntry")))
        }

        function l() {
          var e,
            t;
          h = c.node().value;
          var n,
            o,
            i = [],
            r = [],
            a = h.toLowerCase();
          for (n = 0; n < v.length; n++) {
            var l = v[n];
            void 0 !== l && (o = v[n].toLowerCase(), o.indexOf(a) > -
            1 && (i.push(v[n]), r.push(n)))
          }
          for (e = k.node().children, t = e.length, n = 0; n < t; n++)
            e[0].remove();
          var s = i;
          t = i.length, t > y && (t = y);
          var p = [],
            u = [];
          for (n = 0; n < t; n++) {
            for (var f = 1e6, g = 1e6, m = -1, b = 0; b < s.length; b++) {
              o = s[b].toLowerCase();
              var x = o.indexOf(a),
                w = o.length;
              x > -1 && x <= f && w <= g && (m = b, f = x, g = w)
            }
            p.push(s[m]), u.push(r[m]), s[m] = ""
          }
          for (t = i.length, t > y && (t = y), n = 0; n < t; n++) {
            var C = document.createElement("li");
            C.setAttribute("elementID", u[n]), C.onclick = d(u[n]), C
              .setAttribute("class", "dbEntry");
            var L = document.createTextNode(p[n]);
            C.appendChild(L), k.node().appendChild(C)
          }
        }

        function s() {
          if (b && n(), e.resetSearchHighlight(), 0 === v.length)
            return void console.log("dictionary is empty");
          var t,
            o = k.node().children,
            i = o.length;
          if (h = c.node().value, w.classed("highlighted", !1), w.node()
              .title = "Nothing to locate, enter search term.", 0 !== h
              .length) {
            var r,
              a = [],
              l = [],
              s = h.toLowerCase();
            for (t = 0; t < v.length; t++) {
              var p = v[t];
              void 0 !== p && (r = v[t].toLowerCase(), r.indexOf(s) >
              -1 && (a.push(v[t]), l.push(t)))
            }
            for (o = k.node().children, i = o.length, t = 0; t < i; t++)
              o[0].remove();
            var u = a;
            i = a.length, i > y && (i = y);
            var f = [],
              m = [];
            for (t = 0; t < i; t++) {
              for (var x = 1e8, C = 1e8, L = -1, M = 0; M < u.length; M++) {
                r = u[M].toLowerCase();
                var E = r.indexOf(s),
                  _ = r.length;
                E > -1 && E <= x && _ <= C && (L = M, x = E, C = _)
              }
              f.push(u[L]), m.push(l[L]), u[L] = ""
            }
            for (t = 0; t < i; t++) {
              var O;
              O = document.createElement("li"), O.setAttribute(
                "elementID", m[t]), O.setAttribute("class",
                "dbEntry"), O.onclick = d(m[t]);
              var S = document.createTextNode(f[t]);
              O.appendChild(S), k.node().appendChild(O)
            }
            g.showSearchEntries()
          } else
            for (t = 0; t < i; t++) o[0].remove()
        }

        function d(t) {
          return function() {
            var n = t,
              o = u[n],
              i = m[n];
            c.node().value = i, e.resetSearchHighlight(), e.highLightNodes(
              o), w.node().title = "Locate search term", i !== h &&
            l(), g.hideSearchEntries()
          }
        }
        var c,
          p,
          u,
          f,
          h,
          g = {},
          v = [],
          m = [],
          y = 6,
          b = !0,
          x = !1,
          w = t.select("#locateSearchResult"),
          k = (t.select("#c_search"), t.select("#m_search"));
        return String.prototype.beginsWith = function(e) {
            return 0 === this.indexOf(e)
          }, g.requestDictionaryUpdate = function() {
            b = !0;
            for (var e = k.node().children, t = e.length, n = 0; n <
              t; n++) e[0].remove();
            c.node().value = ""
          }, g.setup = function() {
            v = [], c = t.select("#search-input-text"), c.on("input",
              s), c.on("keydown", a), c.on("click", i), c.on(
              "mouseover", o), w.on("click", function() {
              e.locateSearchResult()
            }), w.on("mouseover", function() {
              g.hideSearchEntries()
            })
          }, g.hideSearchEntries = function() {
            k.style("display", "none"), x = !1
          }, g.showSearchEntries = function() {
            k.style("display", "block"), x = !0
          }, g.getSearchString = function() {
            return c.node().value
          }, g.clearText = function() {
            c.node().value = "", w.classed("highlighted", !1), w.node()
              .title = "Nothing to locate, enter search term.";
            for (var e = k.node().children, t = e.length, n = 0; n <
              t; n++) e[0].remove()
          }, g
      }
    }).call(t, n(6))
  },
  336: function(e, t, n) {
    (function(t) {
      e.exports = function(e) {
        function n() {
          cancelAnimationFrame(m), cancelAnimationFrame(y)
        }

        function o() {
          return f += 5, x.scrollLeft = f, b.updateScrollButtonVisibility(),
            f >= h ? void n() : void (y = requestAnimationFrame(o))
        }

        function i() {
          return f -= 5, x.scrollLeft = f, b.updateScrollButtonVisibility(),
            f <= 0 ? void n() : void (y = requestAnimationFrame(i))
        }

        function r() {
          M = [], E = [];
          var e,
            r = [],
            c = [],
            p = x.children,
            u = p.length;
          for (e = 0; e < u; e++) r.push(p[e].id.slice(2));
          var h = w.children;
          for (u = h.length, e = 0; e < u; e++) c.push(h[e].id.slice(
              2));
          for (u = p.length, e = 0; e < u; e++) M[e] = "c_" + r[e], c
              .indexOf(r[e]) > -1 ? E[e] = "m_" + r[e] : E[e] = void 0,
            t.select("#" + M[e]).on("mouseover", a), t.select("#" + M[
                e]).on("mouseout", l), t.select("#" + M[e]).on("click",
              s), t.select("#" + M[e]).on("touchstart", d);
          t.select("#menuElementContainer").on("wheel", function() {
            var e,
              n = t.event;
            n.deltaY < 0 && (e = 20), n.deltaY > 0 && (e = -20),
            x.scrollLeft += e, b.hideAllMenus(), b.updateScrollButtonVisibility()
          }), t.select("#scrollRightButton").on("mousedown",
            function() {
              f = x.scrollLeft, b.hideAllMenus(), y = requestAnimationFrame(o)
            }).on("touchstart", function() {
            f = x.scrollLeft, b.hideAllMenus(), y = requestAnimationFrame(o)
          }).on("mouseup", n).on("touchend", n).on("touchcancel", n),
          t.select("#scrollLeftButton").on("mousedown", function() {
            f = x.scrollLeft, b.hideAllMenus(), m = requestAnimationFrame(i)
          }).on("touchstart", function() {
            f = x.scrollLeft, b.hideAllMenus(), m = requestAnimationFrame(i)
          }).on("mouseup", n).on("touchend", n).on("touchcancel", n),
          t.select("#menuElementContainer").on("scroll", function() {
            b.updateScrollButtonVisibility(), b.hideAllMenus()
          })
        }

        function a() {
          b.hideAllMenus(), L || p(this.id)
        }

        function l() {
          c(this.id)
        }

        function s() {
          var e = E[M.indexOf(this.id)];
          if (e) {
            var n = t.select("#" + e);
            n && ("block" === n.style("display") ? n.style("display",
              "none") : p(this.id))
          }
        }

        function d() {
          L = !0
        }

        function c(e) {
          v = t.select("#" + e), "c_search" !== e && (t.select("#" +
            e).select("path").style("stroke-width", "0"), t.select(
            "#" + e).select("path").style("fill", "#fff"))
        }

        function p(n) {
          v = t.select("#" + n).node();
          var o = E[M.indexOf(n)];
          o && ("c_search" !== n && (t.select("#" + n).select("path")
            .style("stroke-width", "0"), t.select("#" + n).select(
            "path").style("fill", "#bdc3c7")), g = t.select("#" +
            o), g.style("display", "block"), "m_export" === o &&
          e.options().exportMenu().exportAsUrl(), u())
        }

        function u() {
          if (v) {
            var e = v.offsetLeft,
              t = x.scrollLeft,
              n = e - t,
              o = Math.max(0, n),
              i = x.getBoundingClientRect().width,
              r = g.node().getBoundingClientRect().width;
            o + r > i && (o = i - r), o = Math.max(0, o), g.style(
              "left", o + "px")
          }
        }
        var f,
          h,
          g,
          v,
          m,
          y,
          b = {},
          x = t.select("#menuElementContainer").node(),
          w = t.select("#menuContainer").node(),
          k = t.select("#scrollLeftButton"),
          C = t.select("#scrollRightButton"),
          L = !1,
          M = [],
          E = [];
        return b.hideAllMenus = function() {
            t.selectAll(".toolTipMenu").style("display", "none")
          }, b.updateScrollButtonVisibility = function() {
            h = x.scrollWidth - x.clientWidth - 2, 0 === x.scrollLeft ?
              k.classed("hidden", !0) : k.classed("hidden", !1), x.scrollLeft >
            h ? C.classed("hidden", !0) : C.classed("hidden", !1)
          }, b.setup = function() {
            r(), t.select("#graph").on("mouseover", function() {
              b.hideAllMenus()
            }), t.select("#generalDetails").on("mouseover",
              function() {
                b.hideAllMenus()
              })
          }, b
      }
    }).call(t, n(6))
  },
  337: function(e, t, n) {
    (function(t) {
      e.exports = function(e) {
        function n() {
          cancelAnimationFrame(a), cancelAnimationFrame(l)
        }

        function o() {
          s *= .98, s < p && (s = p), e.setSliderZoom(s), a = requestAnimationFrame(o)
        }

        function i() {
          s *= 1.02, s > u && (s = u), e.setSliderZoom(s), l = requestAnimationFrame(i)
        }
        var r,
          a,
          l,
          s,
          d,
          c = {},
          p = e.options().minMagnification(),
          u = e.options().maxMagnification(),
          f = !0,
          h = e.options().width(),
          g = e.options().height();
        return r = Math.min(h, g) / 1e3, c.setup = function() {
            d = t.select("#zoomSliderParagraph").append("input").datum({})
              .attr("id", "zoomSliderElement").attr("type", "range").attr(
              "value", r).attr("min", p).attr("max", u).attr("step", (
              u - p) / 40).attr("title", "zoom factor").on("input",
              function() {
                c.zooming()
              }), t.select("#zoomOutButton").on("mousedown",
              function() {
                e.options().navigationMenu().hideAllMenus(), s = e.scaleFactor(),
                a = requestAnimationFrame(o)
              }).on("touchstart", function() {
              e.options().navigationMenu().hideAllMenus(), s = e.scaleFactor(),
              a = requestAnimationFrame(o)
            }).on("mouseup", n).on("touchend", n).on("touchcancel",
              n).attr("title", "zoom out"), t.select(
              "#zoomInButton").on("mousedown", function() {
              e.options().navigationMenu().hideAllMenus(), s = e.scaleFactor(),
              l = requestAnimationFrame(i)
            }).on("touchstart", function() {
              e.options().navigationMenu().hideAllMenus(), s = e.scaleFactor(),
              l = requestAnimationFrame(i)
            }).on("mouseup", n).on("touchend", n).on("touchcancel",
              n).attr("title", "zoom in"), t.select(
              "#centerGraphButton").on("click", function() {
              e.options().navigationMenu().hideAllMenus(), e.forceRelocationEvent()
            }).attr("title", "center graph")
          }, c.showSlider = function(e) {
            return arguments.length ? (t.select("#zoomSlider").classed(
              "hidden", !e), void (f = e)) : f
          }, c.zooming = function() {
            e.options().navigationMenu().hideAllMenus();
            var t = d.property("value");
            d.attr("value", t), e.setSliderZoom(t)
          }, c.updateZoomSliderValue = function(e) {
            d && (d.attr("value", e), d.property("value", e))
          }, c
      }
    }).call(t, n(6))
  },
  338: function(e, t, n) {
    (function(t) {
      e.exports = function(e) {
        function n() {
          function e(e) {
            e.classed("hidden", !0)
          }

          function n(e) {
            e.classed("hidden", !1)
          }
          var o = t.selectAll(".accordion-trigger");
          e(t.selectAll(
            ".accordion-trigger:not(.accordion-trigger-active) + div"
          )), o.on("click", function() {
            var o = t.select(this),
              i = t.selectAll(".accordion-trigger-active");
            o.classed("accordion-trigger-active") ? (e(t.select(o
              .node().nextElementSibling)), o.classed(
              "accordion-trigger-active", !1)) : (e(t.selectAll(
              ".accordion-trigger-active + div")), i.classed(
              "accordion-trigger-active", !1), n(t.select(o.node()
              .nextElementSibling)), o.classed(
              "accordion-trigger-active", !0))
          })
        }

        function o(n) {
          n = n || [], n.sort(function(e, t) {
            return e === webvowl.util.constants().LANG_IRIBASED ?
              -1 : t === webvowl.util.constants().LANG_IRIBASED ?
                1 : e === webvowl.util.constants().LANG_UNDEFINED ?
                  -1 : t === webvowl.util.constants().LANG_UNDEFINED ?
                    1 : e.localeCompare(t)
          });
          var o = t.select("#language").on("change", function() {
            e.language(t.event.target.value), r(), C.updateSelectionInformation(
              k)
          });
          o.selectAll("option").remove(), o.selectAll("option").data(
            n).enter().append("option").attr("value", function(e) {
            return e
          }).text(function(e) {
            return e
          }), i(o, n, "en") || i(o, n, webvowl.util.constants().LANG_UNDEFINED) ||
          i(o, n, webvowl.util.constants().LANG_IRIBASED)
        }

        function i(t, n, o) {
          var i = n.indexOf(o);
          return i >= 0 && (t.property("selectedIndex", i), e.language(
              o), !0)
        }

        function r() {
          var n = L.textInLanguage(w.title, e.language());
          t.select("#title").text(n || "No title available"), t.select(
            "#about").attr("href", w.iri).attr("target", "_blank").text(
            w.iri), t.select("#version").text(w.version || "--");
          var o = w.author;
          "string" == typeof o ? t.select("#authors").text(o) : o instanceof Array ?
            t.select("#authors").text(o.join(", ")) : t.select(
              "#authors").text("--");
          var i = L.textInLanguage(w.description, e.language());
          t.select("#description").text(i ||
            "No description available.")
        }

        function a(e, n) {
          e = e || {}, t.select("#classCount").text(e.classCount || n
              .classCount()), t.select("#objectPropertyCount").text(e
              .objectPropertyCount || n.objectPropertyCount()), t.select(
            "#datatypePropertyCount").text(e.datatypePropertyCount ||
            n.datatypePropertyCount()), t.select("#individualCount")
            .text(e.totalIndividualCount || n.totalIndividualCount()),
          t.select("#nodeCount").text(n.nodeCount()), t.select(
            "#edgeCount").text(n.edgeCount())
        }

        function l(e) {
          var n = t.select("#ontology-metadata");
          n.selectAll("*").remove(), s(n, e), n.selectAll(
            ".annotation").size() <= 0 && n.append("p").text(
            "No annotations available.")
        }

        function s(e, n) {
          n = n || {};
          var o = [];
          for (var i in n) n.hasOwnProperty(i) && o.push(n[i][0]);
          e.selectAll(".annotation").remove(), e.selectAll(
            ".annotation").data(o).enter().append("p").classed(
            "annotation", !0).classed("statisticDetails", !0).text(
            function(e) {
              return e.identifier + ":"
            }).append("span").each(function(e) {
            h(t.select(this), e.value, "iri" === e.type ? e.value :
              void 0)
          })
        }

        function d() {
          c(!1, !1, !0)
        }

        function c(e, n, o) {
          t.select("#classSelectionInformation").classed("hidden", !e),
          t.select("#propertySelectionInformation").classed(
            "hidden", !n), t.select("#noSelectionInformation").classed(
            "hidden", !o)
        }

        function p(e) {
          u(), f(t.select("#propname"), e.labelForCurrentLanguage(),
            e.iri()), t.select("#typeProp").text(e.type()), void 0 !==
          e.inverse() ? (t.select("#inverse").classed("hidden", !1),
          f(t.select("#inverse span"), e.inverse().labelForCurrentLanguage(),
            e.inverse().iri())) : t.select("#inverse").classed(
            "hidden", !0);
          var n = t.select("#propEquivUri");
          b(n, e.equivalents()), b(t.select("#subproperties"), e.subproperties()),
          b(t.select("#superproperties"), e.superproperties()),
          void 0 !== e.minCardinality() ? (t.select(
            "#infoCardinality").classed("hidden", !0), t.select(
            "#minCardinality").classed("hidden", !1), t.select(
            "#minCardinality span").text(e.minCardinality()), t.select(
            "#maxCardinality").classed("hidden", !1), void 0 !==
          e.maxCardinality() ? t.select("#maxCardinality span").text(
            e.maxCardinality()) : t.select("#maxCardinality span")
            .text("*")) : void 0 !== e.cardinality() ? (t.select(
            "#minCardinality").classed("hidden", !0), t.select(
            "#maxCardinality").classed("hidden", !0), t.select(
            "#infoCardinality").classed("hidden", !1), t.select(
            "#infoCardinality span").text(e.cardinality())) : (t.select(
            "#infoCardinality").classed("hidden", !0), t.select(
            "#minCardinality").classed("hidden", !0), t.select(
            "#maxCardinality").classed("hidden", !0)), f(t.select(
            "#domain"), e.domain().labelForCurrentLanguage(), e.domain()
            .iri()), f(t.select("#range"), e.range().labelForCurrentLanguage(),
            e.range().iri()), g(e.attributes(), t.select(
            "#propAttributes")), x(t.select("#propDescription"), e.descriptionForCurrentLanguage()),
          x(t.select("#propComment"), e.commentForCurrentLanguage()),
          s(t.select("#propertySelectionInformation"), e.annotations())
        }

        function u() {
          c(!1, !0, !1)
        }

        function f(e, n, o) {
          var i = t.select(e.node().parentNode);
          n ? (e.selectAll("*").remove(), h(e, n, o), i.classed(
            "hidden", !1)) : i.classed("hidden", !0)
        }

        function h(e, t, n) {
          var o;
          o = n ? e.append("a").attr("href", n).attr("title", n).attr(
            "target", "_blank") : e.append("span"), o.text(t)
        }

        function g(e, n) {
          var o = t.select(n.node().parentNode);
          e && e.length > 0 && (v("object", e), v("datatype", e), v(
            "rdf", e)), e && e.length > 0 ? (n.text(e.join(", ")),
          o.classed("hidden", !1)) : o.classed("hidden", !0)
        }

        function v(e, t) {
          var n = t.indexOf(e);
          n > -1 && t.splice(n, 1)
        }

        function m(e) {
          y(), f(t.select("#name"), e.labelForCurrentLanguage(), e.iri());
          var n = t.select("#classEquivUri");
          b(n, e.equivalents()), t.select("#typeNode").text(e.type()),
          b(t.select("#individuals"), e.individuals());
          var o = t.select("#disjointNodes"),
            i = t.select(o.node().parentNode);
          void 0 !== e.disjointWith() ? (o.selectAll("*").remove(), e
            .disjointWith().forEach(function(e, t) {
            t > 0 && o.append("span").text(", "), h(o, e.labelForCurrentLanguage(),
              e.iri())
          }), i.classed("hidden", !1)) : i.classed("hidden", !0),
          g(e.attributes(), t.select("#classAttributes")), x(t.select(
            "#nodeDescription"), e.descriptionForCurrentLanguage()),
          x(t.select("#nodeComment"), e.commentForCurrentLanguage()),
          s(t.select("#classSelectionInformation"), e.annotations())
        }

        function y() {
          c(!0, !1, !1)
        }

        function b(e, n) {
          var o = t.select(e.node().parentNode);
          n && n.length ? (e.selectAll("*").remove(), n.forEach(
            function(t, n) {
              n > 0 && e.append("span").text(", "), h(e, t.labelForCurrentLanguage(),
                t.iri())
            }), o.classed("hidden", !1)) : o.classed("hidden", !0)
        }

        function x(e, n) {
          var o = t.select(e.node().parentNode),
            i = !!n;
          n && e.text(n), o.classed("hidden", !i)
        }
        var w,
          k,
          C = {},
          L = webvowl.util.languageTools(),
          M = webvowl.util.elementTools(),
          E = 1,
          _ = t.select("#detailsArea"),
          O = t.select("#canvasArea"),
          S = t.select("#swipeBarContainer"),
          F = t.select("#sidebarExpandButton");
        return C.clearOntologyInformation = function() {
            t.select("#title").text("No title available"), t.select(
              "#about").attr("href", "#").attr("target", "_blank").text(
              "not given"), t.select("#version").text("--"), t.select(
              "#authors").text("--"), t.select("#description").text(
              "No description available.");
            var e = t.select("#ontology-metadata");
            e.selectAll("*").remove(), t.select("#classCount").text(
              "0"), t.select("#objectPropertyCount").text("0"), t.select(
              "#datatypePropertyCount").text("0"), t.select(
              "#individualCount").text("0"), t.select("#nodeCount")
              .text("0"), t.select("#edgeCount").text("0");
            var n = t.select("#selection-details-trigger").classed(
              "accordion-trigger-active");
            n && t.select("#selection-details-trigger").node().click(),
            d()
          }, C.updateOntologyInformation = function(e, t) {
            e = e || {}, w = e.header || {}, r(), a(void 0, t), l(w.other),
            C.updateSelectionInformation(void 0), o(w.languages)
          }, C.updateSelectionInformation = function(e) {
            if (k = e, !t.event || !t.event.defaultPrevented) {
              var n = t.select("#selection-details-trigger").classed(
                "accordion-trigger-active");
              if (e && !n) t.select("#selection-details-trigger").node()
                  .click();
              else if (!e && n) return void d();
              M.isProperty(e) ? p(e) : M.isNode(e) && m(e)
            }
          }, C.showSidebar = function(n, o) {
            1 === n && (E = !0, F.node().innerHTML = ">", _.classed(
              "hidden", !0), o === !0 ? (_.classed("hidden", !E),
            O.style("width", "78%"), O.style(
              "-webkit-animation-name", "none"), S.style(
              "width", "78%"), S.style("-webkit-animation-name",
              "none"), t.select("#WarningErrorMessages").style(
              "width", "78%"), t.select("#WarningErrorMessages")
              .style("-webkit-animation-name", "none")) : (O.style(
              "width", "78%"), O.style("-webkit-animation-name",
              "sbCollapseAnimation"), O.style(
              "-webkit-animation-duration", "0.5s"), S.style(
              "width", "78%"), S.style("-webkit-animation-name",
              "sbCollapseAnimation"), S.style(
              "-webkit-animation-duration", "0.5s"), t.select(
              "#WarningErrorMessages").style("width", "78%"), t
              .select("#WarningErrorMessages").style(
              "-webkit-animation-name",
              "warn_ExpandRightBarAnimation"), t.select(
              "#WarningErrorMessages").style(
              "-webkit-animation-duration", "0.5s")), e.options()
              .width(window.innerWidth - .22 * window.innerWidth),
            e.options().navigationMenu().updateScrollButtonVisibility()
            ), 0 === n && (E = !1, _.classed("hidden", !0), F.node()
              .innerHTML = "<", o === !0 ? (O.style("width", "100%"),
            O.style("-webkit-animation-name", "none"), S.style(
              "width", "100%"), S.style(
              "-webkit-animation-name", "none"), t.select(
              "#WarningErrorMessages").style("width", "100%"),
            t.select("#WarningErrorMessages").style(
              "-webkit-animation-name", "none")) : (O.style(
              "width", "100%"), O.style(
              "-webkit-animation-name", "sbExpandAnimation"), O
              .style("-webkit-animation-duration", "0.5s"), S.style(
              "width", "100%"), S.style(
              "-webkit-animation-name", "sbExpandAnimation"), S
              .style("-webkit-animation-duration", "0.5s"), t.select(
              "#WarningErrorMessages").style("width", "100%"),
            t.select("#WarningErrorMessages").style(
              "-webkit-animation-name",
              "warn_CollapseRightBarAnimation"), t.select(
              "#WarningErrorMessages").style(
              "-webkit-animation-duration", "0.5s")), e.options()
              .width(window.innerWidth), e.updateCanvasContainerSize(),
            e.options().navigationMenu().updateScrollButtonVisibility()
            )
          }, C.isSidebarVisible = function() {
            return E
          }, C.updateSideBarVis = function(e) {
            var t = C.getSidebarVisibility();
            C.showSidebar(parseInt(t), e)
          }, C.getSidebarVisibility = function() {
            var e = _.classed("hidden");
            return e === !1 ? String(1) : e === !0 ? String(0) : void 0
          }, C.initSideBarAnimation = function() {
            O.node().addEventListener("animationend", function() {
              _.classed("hidden", !E), e.updateCanvasContainerSize(),
              e.options().navigationMenu().updateScrollButtonVisibility()
            })
          }, C.setup = function() {
            n(), C.initSideBarAnimation(), F.on("click", function() {
              e.options().navigationMenu().hideAllMenus();
              var t = parseInt(C.getSidebarVisibility());
              1 === t ? C.showSidebar(0) : C.showSidebar(1)
            })
          }, C.updateShowedInformation = function() {
            var n = e.editorMode();
            t.select("#generalDetails").classed("hidden", n), t.select(
              "#generalDetailsEdit").classed("hidden", !n), e.options()
              .editSidebar().updateGeneralOntologyInfo(), e.options()
              .sidebar().updateGeneralOntologyInfo()
          }, C.updateGeneralOntologyInfo = function() {
            var n = e.options().getGeneralMetaObject(),
              o = e && e.language ? e.language() : null;
            n.hasOwnProperty("title") && ("object" == typeof n.title ?
              t.select("#title").node().value = L.textInLanguage(n.title,
                o) : t.select("#title").node().innerHTML = n.title),
            n.hasOwnProperty("iri") && (t.select("#about").node().innerHTML = n.iri), n.hasOwnProperty("iri") && (t.select("#about")
              .node().href = n.iri), n.hasOwnProperty("version") &&
            (t.select("#version").node().innerHTML = n.version), n.hasOwnProperty(
              "author") && (t.select("#authors").node().innerHTML = n.author), n.hasOwnProperty("description") && (
            "object" == typeof n.description ? t.select(
              "#description").node().innerHTML = L.textInLanguage(
              n.description, o) : t.select("#description").node()
              .innerHTML = n.description)
          }, C
      }
    }).call(t, n(6))
  },
  339: function(e, t, n) {
    (function(t) {
      e.exports = function(e) {
        function n(e) {
          for (var t = 0; t < e.length; t++) e[t].classed(
              "defaultSelected", !1)
        }

        function o(e) {
          t.select(e).classed("defaultSelected", !0)
        }

        function i(e, n) {
          var o = "";
          "defaultClass" === n && (o = "Class: "), "defaultDatatype" ===
          n && (o = "Datatype: "), "defaultProperty" === n && (o = "Property: "), t.select("#" + n).node().innerHTML = o +
          e.innerHTML, t.select("#" + n).node().title = e.innerHTML
        }

        function r() {
          n(v), o(this), i(this, "defaultClass")
        }

        function a() {
          n(m), o(this), i(this, "defaultDatatype")
        }

        function l() {
          n(y), o(this), i(this, "defaultProperty")
        }

        function s() {
          var n,
            i = t.select("#classContainer"),
            s = t.select("#datatypeContainer"),
            d = t.select("#propertyContainer"),
            c = "owl:Class",
            p = "rdfs:Literal",
            u = "owl:objectProperty",
            f = e.options().supportedClasses(),
            h = e.options().supportedDatatypes(),
            g = e.options().supportedProperties();
          for (n = 0; n < f.length; n++) {
            var b;
            b = i.append("div"), b.classed(
              "containerForDefaultSelection", !0), b.classed(
              "noselect", !0), b.node().id = "selectedClass" + f[n],
            b.node().innerHTML = f[n], f[n] === c && o(b.node()), b
              .on("click", r), v.push(b)
          }
          for (n = 0; n < h.length; n++) {
            var x = s.append("div");
            x.classed("containerForDefaultSelection", !0), x.classed(
              "noselect", !0), x.node().id = "selectedDatatype" + h[
              n], x.node().innerHTML = h[n], h[n] === p && o(x.node()),
            x.on("click", a), m.push(x)
          }
          for (n = 0; n < g.length; n++) {
            var w = d.append("div");
            w.classed("containerForDefaultSelection", !0), w.classed(
              "noselect", !0), w.node().id = "selectedClass" + g[n],
            w.node().innerHTML = g[n], w.on("click", l), g[n] === u &&
            o(w.node()), y.push(w)
          }
        }

        function d() {
          function e(e) {
            e.classed("hidden", !0)
          }

          function n(e) {
            e.classed("hidden", !1)
          }
          var o = t.selectAll(".accordion-trigger");
          o.on("click", function() {
            var o = t.select(this);
            o.classed("accordion-trigger-active") ? (e(t.select(o
              .node().nextElementSibling)),
            o.classed("accordion-trigger-active", !1)) : (n(t
              .select(o.node().nextElementSibling)), o.classed(
              "accordion-trigger-active", !0))
          })
        }
        var c = {},
          p = (webvowl.util.languageTools(), webvowl.util.elementTools(),
          t.select("#leftSideBarCollapseButton")),
          u = 0,
          f = 0,
          h = t.select("#leftSideBarContent"),
          g = t.select("#containerForLeftSideBar"),
          v = [],
          m = [],
          y = [];
        return c.setup = function() {
            d(), c.initSideBarAnimation(), p.on("click", function() {
              e.options().navigationMenu().hideAllMenus();
              var t = parseInt(c.getSidebarVisibility());
              0 === t ? c.showSidebar(1) : c.showSidebar(0), f = t
            }), s()
          }, c.hideCollapseButton = function(e) {
            g.classed("hidden", e)
          }, c.isSidebarVisible = function() {
            return u
          }, c.updateSideBarVis = function(e) {
            var t = c.getSidebarVisibility();
            c.showSidebar(parseInt(t), e)
          }, c.initSideBarAnimation = function() {
            g.node().addEventListener("animationend", function() {
              h.classed("hidden", !u), u === !0 ? (g.style(
                "width", "200px"), h.classed("hidden", !1), t
                .select("#leftSideBarCollapseButton").style(
                "left", "200px"), t.select(
                "#leftSideBarCollapseButton").classed(
                "hidden", !1), t.select(
                "#WarningErrorMessages").style("left",
                "100px")) : (g.style("width", "0px"), t.select(
                "#leftSideBarCollapseButton").style("left",
                "0px"), t.select("#WarningErrorMessages").style(
                "left", "0px"), t.select(
                "#leftSideBarCollapseButton").classed(
                "hidden", !1)), e.updateCanvasContainerSize(),
              e.options().navigationMenu().updateScrollButtonVisibility()
            })
          }, c.showSidebar = function(n, o) {
            var i = t.select("#leftSideBarCollapseButton");
            return o === !0 ? (u = 0 === f, h.classed("hidden", !u),
            g.style("-webkit-animation-name", "none"), t.select(
              "#WarningErrorMessages").style(
              "-webkit-animation-name", "none"), u === !0 ? (g.style(
              "width", "200px"), h.classed("hidden", !1), t.select(
              "#leftSideBarCollapseButton").style("left",
              "200px"), t.select("#leftSideBarCollapseButton").classed(
              "hidden", !1), t.select("#WarningErrorMessages").style(
              "left", "100px"), i.node().innerHTML = "<") : (g.style(
              "width", "0px"), t.select("#WarningErrorMessages")
              .style("left", "0px"), t.select(
              "#leftSideBarCollapseButton").style("left", "0px"),
            t.select("#leftSideBarCollapseButton").classed(
              "hidden", !1), i.node().innerHTML = ">"), e.updateCanvasContainerSize(),
            void e.options().navigationMenu().updateScrollButtonVisibility()
            ) : (t.select("#leftSideBarCollapseButton").classed(
              "hidden", !0), 1 === n && (u = !0, i.node().innerHTML = "<", g.style("-webkit-animation-name",
              "l_sbExpandAnimation"), g.style(
              "-webkit-animation-duration", "0.5s"), t.select(
              "#WarningErrorMessages").style(
              "-webkit-animation-name",
              "warn_ExpandLeftBarAnimation"), t.select(
              "#WarningErrorMessages").style(
              "-webkit-animation-duration", "0.5s")), void (0 ===
            n && (u = !1, h.classed("hidden", !0), i.node().innerHTML = ">", g.style("-webkit-animation-name",
              "l_sbCollapseAnimation"), g.style(
              "-webkit-animation-duration", "0.5s"), t.select(
              "#WarningErrorMessages").style(
              "-webkit-animation-name",
              "warn_CollapseLeftBarAnimation"), t.select(
              "#WarningErrorMessages").style(
              "-webkit-animation-duration", "0.5s"))))
          }, c.getSidebarVisibility = function() {
            var e = h.classed("hidden");
            return e === !1 ? String(1) : e === !0 ? String(0) : void 0
          }, c
      }
    }).call(t, n(6))
  },
  340: function(e, t, n) {
    (function(t) {
      e.exports = function(e) {
        function n() {
          for (var e = t.select("#typeEditor_datatype").node(), n = [
                "undefined", "xsd:boolean", "xsd:double",
                "xsd:integer", "xsd:string"
              ], o = 0; o < n.length; o++) {
            var i = document.createElement("option");
            i.innerHTML = n[o], e.appendChild(i)
          }
        }

        function o(e, n) {
          var o = t.select("#del_pathFor_" + n),
            i = t.select("#del_rectFor_" + n);
          e === !1 ? (o.node().style = "stroke: #f00;", i.style(
            "cursor", "auto")) : (o.node().style = "stroke: #ff972d;", i.style("cursor", "pointer"))
        }

        function i(e, n, o) {
          var i = t.select("#pathFor_" + n),
            r = t.select("#rectFor_" + n);
          e === !1 ? (o ? i.node().style = "fill: #fff; stroke : #fff; stroke-width : 1px" : i.node()
            .style = " stroke : #fff; stroke-width : 1px", r.style(
            "cursor", "auto")) : (o ? i.node().style = "fill: #ff972d; stroke : #ff972d; stroke-width : 1px" :
            i.node().style = "stroke : #ff972d; stroke-width : 1px",
          r.style("cursor", "pointer"))
        }

        function r() {
          var e = t.select("#addPrefixButton");
          e.on("click", function() {
            if (T === !1) {
              var e = "emptyPrefixEntry",
                n = t.select("#prefixURL_Container"),
                r = n.append("div");
              r.classed("prefixIRIElements", !0), r.node().id = "prefixContainerFor_" + e;
              var a = r.append("div");
              a.style("position", "absolute"), a.node().id = "containerFor_" + e;
              var d = a.append("svg");
              d.style("width", "14px"), d.style("height", "20px"),
              d.classed("noselect", !0), d.node().id = "editButtonFor_" + e, d.node().elementStyle = "save", d.node().selectorName = e;
              var c = d.append("g"),
                p = c.append("rect"),
                u = c.append("path");
              c.node().id = "iconFor_" + e, u.node().id = "pathFor_" + e, p.node().id = "rectFor_" + e, c.node()
                .selectorName = e, u.node().selectorName = e, p.node()
                .selectorName = e, a.node().title = "Save new prefix and IRI", u.classed(
                "editPrefixIcon"), u.style("stroke", "#fff"), u
                .style("stroke-width", "1px"), u.style("fill",
                "#fff"), p.attr("width", "14px"), p.attr(
                "height", "14px"), p.style("fill", "#18202A"),
              p.attr("transform", "matrix(1,0,0,1,-3,4)"), d.selectAll(
                "g").on("mouseover", function() {
                i(!0, this.selectorName, !0)
              }), d.selectAll("g").on("mouseout", function() {
                i(!1, this.selectorName, !0)
              }), u.attr("d",
                "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
              ), u.attr("transform",
                "matrix(0.45,0,0,0.45,0,5)");
              var f = r.append("input");
              f.classed("prefixInput", !0), f.node().type = "text", f.node().id = "prefixInputFor_" + e, f.node()
                .autocomplete = "off", f.node().value = "", f.style(
                "margin-left", "14px");
              var h = r.append("input");
              h.classed("prefixURL", !0), h.node().type = "text",
              h.node().id = "prefixURLFor_" + e, h.node().autocomplete = "off", h.node().value = "", f.node().disabled = !
                1, h.node().disabled = !1, T = !0;
              var g = r.append("div");
              g.style("float", "right");
              var v = g.append("svg");
              v.node().id = "deleteButtonFor_" + e, g.node().title = "Delete prefix and IRI", v.style("width", "10px"),
              v.style("height", "20px");
              var m = v.append("g"),
                y = m.append("rect"),
                b = m.append("path");
              m.node().id = "del_iconFor_" + e, b.node().id = "del_pathFor_" + e, y.node().id = "del_rectFor_" +
                e, m.node().selectorName = e, b.node().selectorName = e, y.node().selectorName = e, b.style("stroke",
                "#f00"), y.attr("width", "10px"), y.attr(
                "height", "14px"), y.style("fill", "#18202A"),
              y.attr("transform", "matrix(1,0,0,1,-3,4)"), b.attr(
                "d",
                "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              ), b.attr("transform",
                "matrix(0.45,0,0,0.45,0,5)"), v.selectAll("g").on(
                "mouseover",
                function() {
                  o(!0, this.selectorName)
                }), v.selectAll("g").on("mouseout", function() {
                o(!1, this.selectorName)
              }), d.on("click", s), v.on("click", l), O.updateElementWidth(),
              f.node().focus(), E = e, _ = "", t.select(
                "#addPrefixButton").node().innerHTML = "Save Prefix"
            } else t.select("#editButtonFor_emptyPrefixEntry").on(
                "click")(t.select(
                "#editButtonFor_emptyPrefixEntry").node())
          })
        }

        function a() {
          if (e.isEditorMode() !== !1) {
            var n = t.select("#prefixURL_Container"),
              o = e.options().prefixList();
            for (var i in o)
              if (o.hasOwnProperty(i)) {
                var r = n.append("div");
                r.classed("prefixIRIElements", !0), r.node().id = "prefixContainerFor_" + i;
                var a = r.append("div");
                a.style("position", "absolute"), a.node().id = "containerFor_" + i;
                var d = a.append("svg");
                d.style("width", "14px"), d.style("height", "20px"),
                d.classed("noselect", !0), d.node().id = "editButtonFor_" + i, a.node().title = "Edit prefix and IRI", d.node().elementStyle = "save", d.node().selectorName = i, d.node().id = "editButtonFor_" + i, d.node().elementStyle = "edit";
                var c = d.append("g"),
                  p = c.append("rect"),
                  u = c.append("path");
                c.node().id = "iconFor_" + i, u.node().id = "pathFor_" + i, p.node().id = "rectFor_" + i, c.node()
                  .selectorName = i, u.node().selectorName = i, p.node()
                  .selectorName = i, u.classed("editPrefixIcon"), u.style(
                  "stroke", "#fff"), u.style("stroke-width", "1px"),
                p.attr("width", "14px"), p.attr("height", "14px"),
                p.style("fill", "#18202A"), p.attr("transform",
                  "matrix(1,0,0,1,-3,4)"), d.selectAll("g").on(
                  "mouseover",
                  function() {
                    var e = this,
                      n = !1,
                      o = !0,
                      i = t.select("#pathFor_" + e.selectorName),
                      r = t.select("#rectFor_" + e.selectorName);
                    o === !1 ? (n ? i.node().style = "fill: #fff; stroke : #fff; stroke-width : 1px" :
                      i.node().style = " stroke : #fff; stroke-width : 1px", r.style(
                      "cursor", "auto")) : (n ? i.node().style = "fill: #ff972d; stroke : #ff972d; stroke-width : 1px" :
                      i.node().style = "stroke : #ff972d; stroke-width : 1px", r.style(
                      "cursor", "pointer"))
                  }), d.selectAll("g").on("mouseout", function() {
                  var e = this,
                    n = !1,
                    o = !1,
                    i = t.select("#pathFor_" + e.selectorName),
                    r = t.select("#rectFor_" + e.selectorName);
                  o === !1 ? (n ? i.node().style = "fill: #fff; stroke : #fff; stroke-width : 1px" :
                    i.node().style = " stroke : #fff; stroke-width : 1px", r.style(
                    "cursor", "auto")) : (n ? i.node().style = "fill: #ff972d; stroke : #ff972d; stroke-width : 1px" :
                    i.node().style = "stroke : #ff972d; stroke-width : 1px", r.style(
                    "cursor", "pointer"))
                }), u.attr("d",
                  "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                ), u.attr("transform",
                  "matrix(-0.45,0,0,0.45,10,5)");
                var f = r.append("input");
                f.classed("prefixInput", !0), f.node().type = "text",
                f.node().id = "prefixInputFor_" + i, f.node().autocomplete = "off", f.node().value = i, f.style("margin-left",
                  "14px");
                var h = r.append("input");
                h.classed("prefixURL", !0), h.node().type = "text", h
                  .node().id = "prefixURLFor_" + i, h.node().autocomplete = "off", h.node().value = o[i], h.node().title = o[i],
                f.node().disabled = !0, h.node().disabled = !0;
                var g = r.append("div");
                g.style("float", "right");
                var v = g.append("svg");
                v.node().id = "deleteButtonFor_" + i, g.node().title = "Delete prefix and IRI", v.style("width", "10px"),
                v.style("height", "20px");
                var m = v.append("g"),
                  y = m.append("rect"),
                  b = m.append("path");
                m.node().id = "del_iconFor_" + i, b.node().id = "del_pathFor_" + i, y.node().id = "del_rectFor_" +
                  i, m.node().selectorName = i, b.node().selectorName = i, y.node().selectorName = i, b.style("stroke",
                  "#f00"), y.attr("width", "10px"), y.attr("height",
                  "14px"), y.style("fill", "#18202A"), y.attr(
                  "transform", "matrix(1,0,0,1,-3,4)"), b.attr("d",
                  "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                ), b.attr("transform", "matrix(0.45,0,0,0.45,0,5)"),
                v.selectAll("g").on("mouseover", function() {
                  var e = this,
                    n = !0,
                    o = t.select("#del_pathFor_" + e.selectorName),
                    i = t.select("#del_rectFor_" + e.selectorName);
                  n === !1 ? (o.node().style = "stroke: #f00;", i
                    .style("cursor", "auto")) : (o.node().style = "stroke: #ff972d;", i.style("cursor",
                    "pointer"))
                }), v.selectAll("g").on("mouseout", function() {
                  var e = this,
                    n = !1,
                    o = t.select("#del_pathFor_" + e.selectorName),
                    i = t.select("#del_rectFor_" + e.selectorName);
                  n === !1 ? (o.node().style = "stroke: #f00;", i
                    .style("cursor", "auto")) : (o.node().style = "stroke: #ff972d;", i.style("cursor",
                    "pointer"))
                }), d.on("click", s), v.on("click", l), "rdf" !== i &&
                "rdfs" !== i && "xsd" !== i && "dc" !== i && "owl" !==
                i || (a.classed("hidden", !0), g.classed("hidden", !
                  0))
            }
            I.updatePrefixModel()
          }
        }

        function l() {
          if (this.disabled !== !0) {
            t.select("#addPrefixButton").node().innerHTML = "Add Prefix";
            var n = this.id.split("_")[1];
            t.select("#prefixContainerFor_" + n).remove(), e.options()
              .removePrefix(n), T = !1, I.updatePrefixModel()
          }
        }

        function s(n) {
          var o = this;
          if (n && (o = n), o.disabled !== !0) {
            var r = o.id.split("_")[1],
              a = o.elementStyle;
            if ("edit" === a) {
              t.select("#prefixInputFor_" + r).node().disabled = !1,
              t.select("#prefixURLFor_" + r).node().disabled = !1,
              o.elementStyle = "save", E = t.select(
                "#prefixInputFor_" + r).node().value, _ = t.select(
                "#prefixURLFor_" + r).node().value, T = !0, t.select(
                "#containerFor_" + r).node() && (t.select(
                "#containerFor_" + r).node().title = "Save new prefix and IRI");
              var l = t.select(o);
              l.selectAll("g").on("mouseover", function() {
                i(!0, o.selectorName, !0)
              }), l.selectAll("g").on("mouseout", function() {
                i(!1, o.selectorName, !0)
              });
              var s = t.select("#pathFor_" + o.selectorName);
              s.attr("d",
                "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
              ), s.attr("transform", "matrix(0.45,0,0,0.45,0,5)"),
              i(!0, o.selectorName, !0)
            }
            if ("save" === a) {
              var d = t.select("#prefixURLFor_" + r).node().value,
                c = t.select("#prefixInputFor_" + r).node().value;
              if (e.options().updatePrefix(E, c, _, d) === !0) {
                t.select("#prefixInputFor_" + c).node().disabled = !0,
                t.select("#prefixURLFor_" + c).node().disabled = !0,
                t.select("#addPrefixButton").node().innerHTML = "Add Prefix", t.select("#containerFor_" + r).node() &&
                (t.select("#containerFor_" + r).node().title = "Edit prefix and IRI"), o.elementStyle = "edit",
                T = !1, I.updatePrefixModel();
                var p = t.select(o);
                p.selectAll("g").on("mouseover", function() {
                  i(!0, o.selectorName, !1)
                }), p.selectAll("g").on("mouseout", function() {
                  i(!1, o.selectorName, !1)
                });
                var u = t.select("#pathFor_" + o.selectorName);
                u.attr("d",
                  "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
                ), u.attr("transform",
                  "matrix(-0.45,0,0,0.45,10,5)"), i(!0, o.selectorName, !
                  1)
              }
            }
          }
        }

        function d(e) {
          var n = t.select("#typeEditor_datatype").node(),
            o = n.value,
            i = o.split(":")[1];
          "undefined" !== n.value ? (t.select("#element_iriEditor").node()
            .disabled = !0, t.select("#element_labelEditor").node()
            .disabled = !0) : (i = "undefined", t.select(
            "#element_iriEditor").node().disabled = !1, t.select(
            "#element_labelEditor").node().disabled = !1), e.label(
            i), e.dType(o), e.iri(
            "http://www.w3.org/2001/XMLSchema#" + i), e.baseIri(
            "http://www.w3.org/2001/XMLSchema#"), e.redrawLabelText(),
          t.select("#element_iriEditor").node().value = I.getPrefixRepresentationForFullURI(
            e.iri()), t.select("#element_iriEditor").node().title = e.iri(), t.select("#element_labelEditor").node().value = e.labelForCurrentLanguage()
        }

        function c(e, t) {
          return t.indexOf(e) === -1
        }

        function p(t) {
          if (e.options().getGeneralMetaObject().iri) {
            var n = e.options().getGeneralMetaObject().iri + t.id();
            return t.iri() === n
          }
          return !1
        }

        function u(n) {
          var o = t.select("#element_iriEditor").node().value,
            i = e.options().getGeneralMetaObjectProperty("iri");
          if (h(o) === !1) {
            var r = o.split(":");
            if (console.log("Tokens"), console.log(r), console.log(
                "---------------"), 2 === r.length) {
              var a = r[0],
                l = r[1];
              if (a.length > 0) {
                var s = e.options().prefixList()[a];
                if (void 0 === s) return console.log(
                      "ERROR __________________"), e.options().warningModule()
                      .showWarning("Invalid Element IRI",
                        "Could not resolve prefix '" + s + "'",
                        "Restoring previous IRI for Element" + n.iri(),
                        1, !1), void (t.select("#element_iriEditor").node()
                      .value = n.iri());
                if (0 === l.length) return e.options().warningModule()
                      .showWarning("Invalid Element IRI",
                        "Input IRI is EMPTY",
                        "Restoring previous IRI for Element" + n.iri(),
                        1, !1), console.log("NO INPUT PROVIDED"), void (
                    t.select("#element_iriEditor").node().value = n
                      .iri());
                o = s + l
              } else
                o = i + l
            } else {
              if (0 === o.length) return console.log(
                    "NO INPUT PROVIDED"), void (t.select(
                    "#element_iriEditor").node().value = n.iri());
              console.log("Tryig to use the input!"), o = i + o
            }
          }
          return o
        }

        function f(n) {
          var o,
            i = u(n),
            r = e.options().getGeneralMetaObjectProperty("iri");
          if (F.isNode(n)) {
            if (o = e.checkIfIriClassAlreadyExist(i), o !== !1) return
            e.options().warningModule().showWarning(
              "Already seen this class", "Input IRI: " + i +
              " for element: " + n.labelForCurrentLanguage() +
              " already been set",
              "Restoring previous IRI for Element : " + n.iri(),
              2, !1, o), void O.updateSelectionInformation(n);
            n.iri(i)
          }
          return F.isProperty(n) === !0 && (o = O.checkProperIriChange(
            n, i), o !== !1) ? (e.options().warningModule().showWarning(
            "Already seen this property", "Input IRI: " + i +
            " for element: " + n.labelForCurrentLanguage() +
            " already been set",
            "Restoring previous IRI for Element : " + n.iri(), 1, !
            1, o), void O.updateSelectionInformation(n)) : (n.iri(i),
          c(r, i) === !0 ? (b(n, "external"), n.backgroundColor(
            "#36C"), n.redrawElement(), n.redrawLabelText()) : (x(
            n, "external"), n.backgroundColor(void 0), n.redrawElement(),
          n.redrawLabelText()), n.focused() && (e.options().focuserModule()
            .handle(n, !0), e.options().focuserModule().handle(n, !
            0)), t.select("#element_iriEditor").node().value = I.getPrefixRepresentationForFullURI(i), void O.updateSelectionInformation(
            n))
        }

        function h(e) {
          var t = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
          return t.test(e)
        }

        function g(e) {
          e.label(t.select("#element_labelEditor").node().value), e.redrawLabelText()
        }

        function v(e) {
          M = e;
          var n,
            o = t.select("#property_characteristics_Selection"),
            i = o.node().children;
          if (i)
            for (var r = i.length, a = 0; a < r; a++) o.node().removeChild(
                i[0]);
          if (e.attributes().indexOf("external") > -1) {
            var l = o.append("span");
            l.classed("spanForCharSelection", !0), l.node().innerHTML = "external"
          }
          var s,
            d;
          if (F.isNode(e) === !0) {
            var c = ["deprecated"];
            for (n = 0; n < c.length; n++) s = o.append("div").classed(
                "checkboxContainer", !0).style("padding-top", "2px"),
              d = s.append("input").classed("filterCheckbox", !0).attr(
                "id", "CharacteristicsCheckbox" + n).attr("type",
                "checkbox").attr("characteristics", c[n]).property(
                "checked", m(e, c[n])), s.append("label").attr("for",
                "CharacteristicsCheckbox" + n).text(c[n]), d.on(
                "click", y)
          } else {
            var p = ["deprecated", "inverse functional", "functional",
              "transitive"
            ];
            for (F.isDatatypeProperty(e) === !0 && (p = ["deprecated",
                "functional"
              ]), n = 0; n < p.length; n++) s = o.append("div").classed(
                "checkboxContainer", !0).style("padding-top", "2px"),
              d = s.append("input").classed("filterCheckbox", !0).attr(
                "id", "CharacteristicsCheckbox" + n).attr("type",
                "checkbox").attr("characteristics", p[n]).property(
                "checked", m(e, p[n])), s.append("label").attr("for",
                "CharacteristicsCheckbox" + n).text(p[n]), d.on(
                "click", y)
          }
        }

        function m(e, t) {
          return e.attributes().indexOf(t) >= 0
        }

        function y() {
          var e = this.checked,
            t = this.getAttribute("characteristics");
          e === !0 ? b(M, t) : x(M, t), M.redrawElement(), M.focused(!
            1), M.toggleFocus()
        }

        function b(e, t) {
          if (e.attributes().indexOf(t) === -1) {
            var n = e.attributes();
            n.push(t), e.attributes(n)
          }
          if (e.indications().indexOf(t) === -1) {
            var o = e.indications();
            o.push(t), e.indications(o)
          }
          var i;
          if (e.visualAttributes().indexOf(t) === -1 && (i = e.visualAttributes(),
            i.push(t), e.visualAttributes(i)), m(e, "external") &&
            m(e, "deprecated")) {
            i = e.visualAttributes();
            var r = i.indexOf("external");
            r > -1 && i.splice(r, 1), e.visualAttributes(i)
          }
        }

        function x(e, t) {
          var n = e.attributes(),
            o = e.indications(),
            i = e.visualAttributes(),
            r = n.indexOf(t);
          r >= 0 && n.splice(r, 1);
          var a = o.indexOf(t);
          a > -1 && o.splice(a, 1);
          var l = i.indexOf(t);
          l > -1 && i.splice(l, 1), e.attributes(n), e.indications(o),
          e.visualAttributes(i), "deprecated" === t && ("owl:Class" ===
          e.type() && e.styleClass("class"),
          "owl:DatatypeProperty" === e.type() && e.styleClass(
            "datatypeproperty"), "owl:ObjectProperty" === e.type() &&
          e.styleClass("objectproperty"), "owl:disjointWith" ===
          e.type() && e.styleClass("disjointwith"))
        }

        function w(e) {
          return "owl:Thing" !== e.type() && "rdfs:subClassOf" !== e.type() &&
            "rdfs:Literal" !== e.type() && "rdfs:Datatype" !== e.type() &&
            "rdfs:disjointWith" !== e.type()
        }

        function k(t) {
          F.isNode(t) && e.changeNodeType(t) === !1 && (F.isDatatype(
            t) === !0, O.updateSelectionInformation(t)), F.isProperty(
            t) && e.changePropertyType(t) === !1 && O.updateSelectionInformation(
            t)
        }

        function C(e) {
          var t = [];
          return F.isProperty(e) ? ("owl:DatatypeProperty" === e.type() ?
            t.push("owl:DatatypeProperty") : (t.push(
              "owl:ObjectProperty"), e.domain() !== e.range() &&
            t.push("rdfs:subClassOf"), t.push("owl:disjointWith"),
            t.push("owl:allValuesFrom"), t.push(
              "owl:someValuesFrom")), t) : ("rect" === e.renderType() ?
            (t.push("rdfs:Literal"), t.push("rdfs:Datatype")) : (t.push(
              "owl:Class"), t.push("owl:Thing")), t)
        }

        function L() {
          function e(e) {
            e.classed("hidden", !0)
          }

          function n(e) {
            e.classed("hidden", !1)
          }
          var o = t.selectAll(".accordion-trigger");
          o.on("click", function() {
            var o = t.select(this);
            o.classed("accordion-trigger-active") ? (e(t.select(o
              .node().nextElementSibling)), o.classed(
              "accordion-trigger-active", !1)) : (n(t.select(o.node()
              .nextElementSibling)), o.classed(
              "accordion-trigger-active", !0)), O.updateElementWidth()
          })
        }
        var M,
          E,
          _,
          O = {},
          S = webvowl.util.languageTools(),
          F = webvowl.util.elementTools(),
          I = webvowl.util.prefixTools(e),
          T = !1;
        return O.clearMetaObjectValue = function() {
            t.select("#titleEditor").node().value = "", t.select(
              "#iriEditor").node().value = "", t.select(
              "#versionEditor").node().value = "", t.select(
              "#authorsEditor").node().value = "", t.select(
              "#descriptionEditor").node().value = ""
          }, O.updatePrefixUi = function() {
            O.updateElementWidth();
            for (var e = t.select("#prefixURL_Container"); e.node().firstChild;)
              e.node().removeChild(e.node().firstChild);
            a()
          }, O.setup = function() {
            L(), a(), r(), n(), t.select("#titleEditor").on("change",
              function() {
                e.options().addOrUpdateGeneralObjectEntry("title",
                  t.select("#titleEditor").node().value)
              }).on("keydown", function() {
              t.event.stopPropagation(), 13 === t.event.keyCode &&
              (t.event.preventDefault(), e.options().addOrUpdateGeneralObjectEntry(
                "title", t.select("#titleEditor").node().value
              ))
            }), t.select("#iriEditor").on("change", function() {
              e.options().addOrUpdateGeneralObjectEntry("iri", t.select(
                "#iriEditor").node().value) === !1 && (t.select(
                "#iriEditor").node().value = e.options().getGeneralMetaObjectProperty(
                "iri"))
            }).on("keydown", function() {
              t.event.stopPropagation(), 13 === t.event.keyCode &&
              (t.event.preventDefault(), e.options().addOrUpdateGeneralObjectEntry(
                "iri", t.select("#iriEditor").node().value) ===
              !1 && (t.select("#iriEditor").node().value = e.options()
                .getGeneralMetaObjectProperty("iri")))
            }), t.select("#versionEditor").on("change", function() {
              e.options().addOrUpdateGeneralObjectEntry("version",
                t.select("#versionEditor").node().value)
            }).on("keydown", function() {
              t.event.stopPropagation(), 13 === t.event.keyCode &&
              (t.event.preventDefault(), e.options().addOrUpdateGeneralObjectEntry(
                "version", t.select("#versionEditor").node().value
              ))
            }), t.select("#authorsEditor").on("change", function() {
              e.options().addOrUpdateGeneralObjectEntry("author",
                t.select("#authorsEditor").node().value)
            }).on("keydown", function() {
              t.event.stopPropagation(), 13 === t.event.keyCode &&
              (t.event.preventDefault(), e.options().addOrUpdateGeneralObjectEntry(
                "author", t.select("#authorsEditor").node().value
              ))
            }), t.select("#descriptionEditor").on("change",
              function() {
                e.options().addOrUpdateGeneralObjectEntry(
                  "description", t.select("#descriptionEditor").node()
                    .value)
              }), O.updateElementWidth()
          }, O.updateEditDeleteButtonIds = function(e, n) {
            t.select("#prefixInputFor_" + e).node().id = "prefixInputFor_" + n, t.select("#prefixURLFor_" + e).node()
              .id = "prefixURLFor_" + n, t.select("#deleteButtonFor_" +
              e).node().id = "deleteButtonFor_" + n, t.select(
              "#editButtonFor_" + e).node().id = "editButtonFor_" +
              n, t.select("#prefixContainerFor_" + e).node().id = "prefixContainerFor_" + n
          }, O.checkForExistingURL = function(t) {
            var n,
              o = e.getUnfilteredData().properties;
            for (n = 0; n < o.length; n++)
              if (o[n].iri() === t) return !0;
            return !1
          }, O.checkProperIriChange = function(t, n) {
            if (console.log("Element changed Label"), console.log(
                "Testing URL " + n), "rdfs:subClassOf" === t.type() ||
              "owl:disjointWith" === t.type()) console.log(
                "ignore this for now, already handled in the type and domain range changer"
              );
            else {
              var o,
                i = e.getUnfilteredData().properties;
              for (o = 0; o < i.length; o++)
                if (i[o] !== t && i[o].iri() === n) return i[o]
            }
            return !1
          }, O.updateSelectionInformation = function(n) {
            if (void 0 === n) t.select("#selectedElementProperties").classed(
                "hidden", !0), t.select(
                "#selectedElementPropertiesEmptyHint").classed(
                "hidden", !1), M = null, O.updateElementWidth();
            else {
              t.select("#selectedElementProperties").classed("hidden", !
                1), t.select("#selectedElementPropertiesEmptyHint")
                .classed("hidden", !0), t.select(
                "#typeEditForm_datatype").classed("hidden", !0), t.select(
                "#element_iriEditor").node().value = n.iri(), t.select(
                "#element_labelEditor").node().value = n.labelForCurrentLanguage(),
              t.select("#element_iriEditor").node().title = n.iri(),
              t.select("#element_iriEditor").on("change", function() {
                var o = n.iri(),
                  i = e.options().prefixModule().getPrefixRepresentationForFullURI(
                    o);
                return i === t.select("#element_iriEditor").node()
                  .value ? void console.log(
                  "Iri is identical, nothing has changed!") :
                  void f(n)
              }).on("keydown", function() {
                t.event.stopPropagation(), 13 === t.event.keyCode &&
                (t.event.preventDefault(), console.log(
                  "IRI CHANGED Via ENTER pressed"), f(n), t.select(
                  "#element_iriEditor").node().title = n.iri())
              });
              var o = p(n);
              if (t.select("#element_labelEditor").on("change",
                  function() {
                    var t;
                    console.log("Element changed Label");
                    var o = u(n);
                    if (n.iri() !== o) {
                      if (F.isProperty(n) === !0 && (t = O.checkProperIriChange(
                          n, o), t !== !1)) return e.options().warningModule()
                            .showWarning("Already seen this property",
                              "Input IRI: " + o + " for element: " + n.labelForCurrentLanguage() +
                              " already been set",
                              "Continuing with duplicate property!", 1, !
                              1, t), void O.updateSelectionInformation(
                            n);
                      if (F.isNode(n) === !0 && (t = e.checkIfIriClassAlreadyExist(
                          o), t !== !1)) return e.options().warningModule()
                            .showWarning("Already seen this Class",
                              "Input IRI: " + o + " for element: " + n.labelForCurrentLanguage() +
                              " already been set",
                              "Restoring previous IRI for Element : " +
                              n.iri(), 2, !1, t), void O.updateSelectionInformation(
                            n);
                      n.iri(o)
                    }
                    g(n), O.updateSelectionInformation(n)
                  }).on("keydown", function() {
                  if (t.event.stopPropagation(), 13 === t.event.keyCode) {
                    t.event.preventDefault();
                    var o;
                    console.log("Element changed Label");
                    var i = u(n);
                    if (n.iri() !== i) {
                      if (F.isProperty(n) === !0 && (o = O.checkProperIriChange(
                          n, i), o !== !1)) return e.options().warningModule()
                            .showWarning("Already seen this property",
                              "Input IRI: " + i + " for element: " +
                              n.labelForCurrentLanguage() +
                              " already been set",
                              "Continuing with duplicate property!",
                              1, !1, o), void O.updateSelectionInformation(
                            n);
                      if (F.isNode(n) === !0 && (o = e.checkIfIriClassAlreadyExist(
                          i), o !== !1)) return e.options().warningModule()
                            .showWarning("Already seen this Class",
                              "Input IRI: " + i + " for element: " +
                              n.labelForCurrentLanguage() +
                              " already been set",
                              "Restoring previous IRI for Element : " +
                              n.iri(), 2, !1, o), void O.updateSelectionInformation(
                            n);
                      n.iri(i)
                    }
                    g(n)
                  }
                }).on("keyup", function() {
                  if (o) {
                    var e = t.select("#element_labelEditor").node()
                        .value,
                      i = e.replaceAll(" ", "_"),
                      r = n.baseIri() + i;
                    t.select("#element_iriEditor").node().title = n
                      .iri(), t.select("#element_iriEditor").node()
                      .value = I.getPrefixRepresentationForFullURI(
                      r)
                  }
                }), t.select("#element_iriEditor").node().disabled = !
                  1, t.select("#element_labelEditor").node().disabled = !
                  1, "rdfs:subClassOf" === n.type() && (t.select(
                  "#element_iriEditor").node().value = "http://www.w3.org/2000/01/rdf-schema#subClassOf",
                t.select("#element_iriEditor").node().title = "http://www.w3.org/2000/01/rdf-schema#subClassOf",
                t.select("#element_labelEditor").node().value = "Subclass of", t.select("#element_iriEditor").node()
                  .disabled = !0, t.select("#element_labelEditor").node()
                  .disabled = !0), "owl:Thing" === n.type() && (t.select(
                  "#element_iriEditor").node().value = "http://www.w3.org/2002/07/owl#Thing", t.select(
                  "#element_iriEditor").node().title = "http://www.w3.org/2002/07/owl#Thing", t.select(
                  "#element_labelEditor").node().value = "Thing", t
                  .select("#element_iriEditor").node().disabled = !0,
                t.select("#element_labelEditor").node().disabled = !
                  0), "owl:disjointWith" === n.type() && (t.select(
                  "#element_iriEditor").node().value = "http://www.w3.org/2002/07/owl#disjointWith", t.select(
                  "#element_iriEditor").node().title = "http://www.w3.org/2002/07/owl#disjointWith", t.select(
                  "#element_iriEditor").node().disabled = !0, t.select(
                  "#element_labelEditor").node().disabled = !0),
                "rdfs:Literal" === n.type() && (t.select(
                  "#element_iriEditor").node().value = "http://www.w3.org/2000/01/rdf-schema#Literal", t.select(
                  "#element_iriEditor").node().title = "http://www.w3.org/2000/01/rdf-schema#Literal", t.select(
                  "#element_iriEditor").node().disabled = !0, t.select(
                  "#element_labelEditor").node().disabled = !0, n.iri(
                  "http://www.w3.org/2000/01/rdf-schema#Literal")),
                "rdfs:Datatype" === n.type()) {
                var i = t.select("#typeEditor_datatype");
                t.select("#typeEditForm_datatype").classed("hidden", !
                  1), n.iri(
                  "http://www.w3.org/2000/01/rdf-schema#Datatype"),
                t.select("#element_iriEditor").node().value = "http://www.w3.org/2000/01/rdf-schema#Datatype", t.select(
                  "#element_iriEditor").node().title = "http://www.w3.org/2000/01/rdf-schema#Datatype", t.select(
                  "#element_iriEditor").node().disabled = !0, t.select(
                  "#element_labelEditor").node().disabled = !0, i.node()
                  .value = n.dType(), "undefined" === i.node().value &&
                (t.select("#element_iriEditor").node().disabled = !
                  0, t.select("#element_labelEditor").node().disabled = !
                  1), i.on("change", function() {
                  d(n)
                })
              }
              var r,
                a = t.select("#typeEditor").node(),
                l = a.children,
                s = l.length,
                c = C(n);
              for (r = 0; r < s; r++) a.removeChild(l[0]);
              for (r = 0; r < c.length; r++) {
                var h = document.createElement("option");
                h.innerHTML = c[r], a.appendChild(h)
              }
              a.value = n.type(), t.select("#typeEditor").on("change",
                function() {
                  k(n)
                });
              var m = w(n);
              t.select("#property_characteristics_Container").classed(
                "hidden", !m), m === !0 && v(n);
              var y = t.select("#element_iriEditor").node().value;
              t.select("#element_iriEditor").node().value = I.getPrefixRepresentationForFullURI(
                y), t.select("#element_iriEditor").node().title = y,
              O.updateElementWidth()
            }
          }, O.updateGeneralOntologyInfo = function() {
            var n = e && e.language ? e.language() : null,
              o = e.options().getGeneralMetaObject();
            o.hasOwnProperty("title") && ("object" == typeof o.title ?
              t.select("#titleEditor").node().value = S.textInLanguage(
                o.title, n) : t.select("#titleEditor").node().value = o.title), o.hasOwnProperty("iri") && (t.select(
              "#iriEditor").node().value = o.iri), o.hasOwnProperty(
              "version") && (t.select("#versionEditor").node().value = o.version), o.hasOwnProperty("author") && (t.select(
              "#authorsEditor").node().value = o.author), o.hasOwnProperty(
              "description") ? "object" == typeof o.description ? t
              .select("#descriptionEditor").node().value = S.textInLanguage(
              o.description, n) : t.select("#descriptionEditor").node()
              .value = o.description : t.select("#descriptionEditor")
              .node().value = "No Description"
          }, O.updateElementWidth = function() {
            var e = window.innerHeight - 40,
              n = t.select("#logo").node().getBoundingClientRect().height +
                5,
              o = e - n;
            t.select("#containerForLeftSideBar").style("top", n +
              "px"), t.select("#leftSideBarCollapseButton").style(
              "top", n + "px"), t.select("#containerForLeftSideBar")
              .style("height", o + "px");
            var i = t.select("#generalDetailsEdit").node().getBoundingClientRect()
              .width;
            i += 10;
            var r = t.select("#titleEditor-label").node().getBoundingClientRect()
                  .width + 20,
              a = t.select("#iriEditor-label").node().getBoundingClientRect()
                  .width + 20,
              l = t.select("#versionEditor-label").node().getBoundingClientRect()
                  .width + 20,
              s = t.select("#authorsEditor-label").node().getBoundingClientRect()
                  .width + 20,
              d = 0;
            d = Math.max(d, r), d = Math.max(d, a), d = Math.max(d, l),
            d = Math.max(d, s);
            var c = i - d - 10;
            t.select("#titleEditor").style("width", c + "px"), t.select(
              "#iriEditor").style("width", c + "px"), t.select(
              "#versionEditor").style("width", c + "px"), t.select(
              "#authorsEditor").style("width", c + "px");
            var p = t.select("#element_iriEditor-label").node().getBoundingClientRect()
                  .width + 20,
              u = t.select("#element_labelEditor-label").node().getBoundingClientRect()
                  .width + 20,
              f = t.select("#typeEditor-label").node().getBoundingClientRect()
                  .width + 20,
              h = t.select("#typeEditor_datatype-label").node().getBoundingClientRect()
                  .width + 20;
            d = 0, d = Math.max(d, p), d = Math.max(d, u), d = Math.max(
              d, f), d = Math.max(d, h);
            var g = i - d - 10;
            t.select("#element_iriEditor").style("width", g + "px"),
            t.select("#element_labelEditor").style("width", g +
              "px"), t.select("#typeEditor").style("width", g + 4 +
              "px"), t.select("#typeEditor_datatype").style("width",
              g + 4 + "px");
            var v = t.select("#containerForPrefixURL").node().getBoundingClientRect()
              .width;
            if (0 !== v) {
              var m = t.selectAll(".prefixInput");
              if (m.node()) {
                var y = t.selectAll(".prefixInput").node().getBoundingClientRect()
                  .width;
                t.selectAll(".prefixURL").style("width", v - y - 45 +
                  "px")
              }
            }
          }, O
      }
    }).call(t, n(6))
  },
  341: function(e, t, n) {
    (function(t) {
      e.exports = function(e) {
        function n(n, o, i, r) {
          var a,
            l;
          a = t.select(n).append("div").classed(
            "distanceSliderContainer", !0);
          var s = a.append("input").attr("id", o + "Slider").attr(
            "type", "range").attr("min", 20).attr("max", 600).attr(
            "value", r()).attr("step", 10);
          a.append("label").classed("description", !0).attr("for", o +
            "Slider").attr("id", o + "DescriptionLabel").text(i), l = a.append("label").classed("value", !0).attr("for", o +
            "Slider").attr("id", o + "valueLabel").text(r()), s.on(
            "input",
            function() {
              var t = s.property("value");
              r(t), l.text(t), e.options().dynamicLabelWidth() ===
              !0 && e.animateDynamicLabelWidth()
            }), s.on("wheel", function() {
            if (s.node().disabled !== !0) {
              var e,
                n = t.event;
              n.deltaY < 0 && (e = 10), n.deltaY > 0 && (e = -10);
              var o = parseInt(s.property("value")),
                i = o + e;
              i !== o && (s.property("value", i), r(i), s.on(
                "input")()), t.event.preventDefault()
            }
          })
        }

        function o(n, o, i, a, l) {
          var s = t.select(i).append("div").classed(
              "checkboxContainer", !0),
            d = s.append("input").classed("moduleCheckbox", !0).attr(
              "id", n + "ConfigCheckbox").attr("type", "checkbox").property(
              "checked", a());
          d.on("click", function(t) {
            var n = d.property("checked");
            a(n), t !== !0 && (1 === l && e.lazyRefresh(), 2 ===
            l && e.update(), 3 === l && e.updateDraggerElements()
            )
          }), r.push(d), s.append("label").attr("for", n +
            "ConfigCheckbox").text(o)
        }
        var i = {},
          r = [];
        return i.setup = function() {
            var i = t.select("#m_modes");
            i.on("mouseover", function() {
              var t = e.options().searchMenu();
              t.hideSearchEntries()
            }), o("showZoomSlider", "Zoom controls",
              "#zoomSliderOption", e.options().zoomSlider().showSlider,
              0), n("#maxLabelWidthSliderOption", "maxLabelWidth",
              "Max label width", e.options().maxLabelWidth)
          }, i.setCheckBoxValue = function(e, t) {
            for (var n = 0; n < r.length; n++) {
              var o = r[n].attr("id");
              if (o === e) {
                r[n].property("checked", t);
                break
              }
            }
          }, i.getCheckBoxValue = function(e) {
            for (var t = 0; t < r.length; t++) {
              var n = r[t].attr("id");
              if (n === e) return r[t].property("checked")
            }
          }, i.updateSettings = function() {
            var e = !0;
            r.forEach(function(t) {
              t.on("click")(e)
            })
          }, i
      }
    }).call(t, n(6))
  },
  342: function(e, t, n) {
    (function(t) {
      e.exports = function(e) {
        function n(e, n) {
          t.xhr("serverTimeStamp", "application/text", function(t, i) {
            t ? (f.append_bulletPoint(
              "Could not establish connection to OWL2VOWL service"
            ), o(e, n)) : (u = i.responseText, f.setConversionID(
              u), n.push(u), e(n))
          })
        }

        function o(e, t) {
          f.append_message_toLastBulletPoint(
            "<br>Trying to convert with other communication protocol."
          ), e(t)
        }

        function i(e) {
          f.append_message_toLastBulletPoint(
            "<br>Trying to convert with other communication protocol."
          );
          var t = e[0],
            n = e[1],
            o = new FormData;
          o.append("ontology", t);
          var i = new XMLHttpRequest;
          i.open("POST", "convert", !0);
          var r = "";
          i.onload = function() {
            200 === i.status && (r = i.responseText, f.setCachedOntology(
              n, r), h = n, L = !0, f.append_message_toLastBulletPoint(
              "<br>Success, <span style='color:yellow'>but you are using a deprecated OWL2VOWL service!<span>"
            ), s(r))
          }, i.onreadystatechange = function() {
            4 === i.readyState && 0 === i.status && (f.append_message_toLastBulletPoint(
              "<br>Old protocol also failed to establish connection to OWL2VOWL service!"
            ), O.setErrorMode(), f.append_bulletPoint(
              "Failed to load ontology"), f.append_message_toLastBulletPoint(
              "<br><span style='color:red'>Could not connect to OWL2VOWL service </span>"
            ), O.showErrorDetailsMessage())
          }, i.send(o)
        }

        function r(e, n) {
          t.xhr("serverTimeStamp", "application/text", function(t, o) {
            O.setBusyMode(), t ? (f.append_bulletPoint(
              "Could not establish connection to OWL2VOWL service"
            ), O.setErrorMode(), f.append_bulletPoint(
              "Failed to load ontology"), f.append_message_toLastBulletPoint(
              "<br><span style='color:red'>Could not connect to OWL2VOWL service </span>"
            ), O.showErrorDetailsMessage()) : (u = o.responseText,
            f.setConversionID(u), n[0] = n[0] + "&sessionId=" +
              u, n.push(u), e(n))
          })
        }

        function a(e, n) {
          t.xhr("serverTimeStamp", "application/text", function(t, o) {
            t ? (f.append_bulletPoint(
              "Could not establish connection to OWL2VOWL service"
            ), i(n)) : (u = o.responseText, f.setConversionID(u),
            console.log("Request Session ID:" + u), e(n[0], n[
              1], u))
          })
        }

        function l(n) {
          var o;
          n.indexOf("new_ontology") !== -1 && (O.hideLoadingIndicator(),
          e.showEditorHintIfNeeded(), o = "./data/new_ontology.json"), C = !1;
          var i = "";
          //if (f.cachedOntology(n)) f.append_bulletPoint(
          //    "Loading already cached ontology: " + n), i = f.cachedOntology(
          //    n), C = !0, O.showLoadingIndicator(), s(i);
          //else {
          var r = "./data/SingleVoc.json";
          o && (r = o), t.xhr(r, "application/json", function(t, o) {
            var r = !t;
            r ? (i = o.responseText, s(i)) : (f.append_bulletPoint(
              "Failed to load: SingleVoc"), f.append_message_toLastBulletPoint(
              " <span style='color: red'>ERROR STATUS:</span> " +
              t.status), e.handleOnLoadingError(), O.setErrorMode())
          })
        //}
        }

        function s(e) {
          f.append_bulletPoint("Reading ontology graph ... ");
          var t = f.getLoadingFunction();
          t(e, h, "noAlternativeNameYet")
        }

        function d(e) {
          var t = (e.match(/#/g) || []).length,
            n = [];
          if (t > 0)
            for (var o = e.split("#"), i = 1; i < o.length; i++) 0 ===
              o[i].length ? n[n.length - 1] = n[n.length - 1] + "#" :
                n.push(o[i]);
          return n
        }

        function c(t) {
          function n() {
            e.options().setOptionsFromURL(e.options().defaultConfig(), !
              1)
          }

          function o(t) {
            for (var n = !1, o = e.options().defaultConfig(), i = 0; i <
              t.length; i++) {
              var r = t[i].split("=");
              "editorMode" === r[0] && (n = !0), o[r[0]] = r[1]
            }
            e.options().setOptionsFromURL(o, n)
          }

          function i(e) {
            if (e[0].indexOf(a) >= 0) {
              var t = e[0].length,
                i = e[0].substr(5, t - 6),
                r = i.split(";");
              o(r)
            } else h = e[0], n()
          }

          function r(e) {
            if (e[0].indexOf(a) >= 0) {
              var t = e[0].length,
                i = e[0].substr(5, t - 6),
                r = i.split(";");
              o(r)
            } else n();
            h = e[1]
          }
          var a = "opts=";
          switch (t.length) {
            case 0:
              n();
              break;
            case 1:
              i(t);
              break;
            case 2:
              r(t);
              break;
            default:
              console.log(
                "To many input parameters , loading default config"
              ), n(), h = "ERROR_TO_MANY_INPUT_PARAMETERS"
          }
        }

        function p(e) {
          var t = "iri=",
            n = "url=",
            o = "file=",
            i = -1;
          return i = e.substr(0, o.length) === o ? v : e.substr(0, n.length) ===
          n ? m : e.substr(0, t.length) === t ? y : g
        }
        var u,
          f,
          h,
          g = 0,
          v = 1,
          m = 2,
          y = 3,
          b = 0,
          x = 1,
          w = 2,
          k = 1,
          C = !1,
          L = !1,
          M = !1,
          E = !0,
          _ = "foaf",
          O = {},
          S = t.select("#loading-info"),
          F = t.select("#loadingInfo-container"),
          I = t.select("#show-loadingInfo-button"),
          T = t.select("#loadingIndicator_closeButton");
        return O.checkForScreenSize = function() {
            var n = e.options().width(),
              o = e.options().height();
            n < 270 ? t.select("#loading-info").classed("hidden", !0) :
              E === !0 ? t.select("#loading-info").classed("hidden", !
                1) : t.select("#loading-info").classed("hidden", !0),
            o < 150 ? t.select("#loadingInfo_msgBox").classed(
              "hidden", !0) : t.select("#loadingInfo_msgBox").classed(
              "hidden", !1), o < 80 ? (t.select(
              "#progressBarContext").classed("hidden", !0), t.select(
              "#layoutLoadingProgressBarContainer").style(
              "height", "20px")) : (t.select("#progressBarContext")
              .classed("hidden", !1), t.select(
              "#layoutLoadingProgressBarContainer").style(
              "height", "50px"))
          }, O.getProgressBarMode = function() {
            return k
          }, O.successfullyLoadedOntology = function() {
            return C
          }, O.missingImportsWarning = function() {
            return L
          }, O.setOntologyMenu = function(e) {
            f = e
          }, O.showErrorDetailsMessage = function() {
            O.showLoadingIndicator(), O.expandDetails(), t.select(
              "#loadingIndicator_closeButton").classed("hidden", !0),
            O.scrollDownDetails()
          }, O.showWarningDetailsMessage = function() {
            t.select("#currentLoadingStep").style("color", "#ff0"), O
              .showLoadingIndicator(), O.expandDetails(), t.select(
              "#loadingIndicator_closeButton").classed("hidden", !1),
            O.scrollDownDetails()
          }, O.scrollDownDetails = function() {
            var e = t.select("#loadingInfo-container").node();
            e.scrollTop = e.scrollHeight
          }, O.hideLoadingIndicator = function() {
            t.select("#loading-info").classed("hidden", !0), E = !1
          }, O.showLoadingIndicator = function() {
            t.select("#loading-info").classed("hidden", !1), E = !0
          }, O.setup = function() {
            F.classed("hidden", !M), I.on("click", function() {
              M = !M, F.classed("hidden", !M), I.classed(
                "accordion-trigger-active", M)
            }), T.on("click", function() {
              S.classed("hidden", !0)
            }), O.setBusyMode()
          }, O.updateSize = function() {
            M = !F.classed("hidden"), F.classed("hidden", !M), I.classed(
              "accordion-trigger-active", M)
          }, O.getDetailsState = function() {
            return M
          }, O.expandDetails = function() {
            M = !0, F.classed("hidden", !M), I.classed(
              "accordion-trigger-active", M)
          }, O.collapseDetails = function() {
            M = !1, F.classed("hidden", !M), I.classed(
              "accordion-trigger-active", M)
          }, O.setBusyMode = function() {
            t.select("#currentLoadingStep").style("color", "#fff"), t
              .select("#progressBarValue").node().innherHTML = "", t.select(
              "#progressBarValue").style("width", "20%"), t.select(
              "#progressBarValue").classed("busyProgressBar", !0),
            k = x
          }, O.setSuccessful = function() {
            t.select("#currentLoadingStep").style("color", "#0f0")
          }, O.setErrorMode = function() {
            t.select("#currentLoadingStep").style("color", "#f00"), t
              .select("#progressBarValue").style("width", "0%"), t.select(
              "#progressBarValue").classed("busyProgressBar", !1),
            t.select("#progressBarValue").node().innherHTML = "", k = b
          }, O.setPercentMode = function() {
            t.select("#currentLoadingStep").style("color", "#fff"), t
              .select("#progressBarValue").classed("busyProgressBar", !
              1), t.select("#progressBarValue").node().innherHTML = "0%", t.select("#progressBarValue").style("width", "0%"),
            k = w
          }, O.setPercentValue = function(e) {
            t.select("#progressBarValue").node().innherHTML = e
          }, O.emptyGraphContentError = function() {
            e.clearGraphData(), f.append_message_toLastBulletPoint(
              "<span style='color:red;'>failed</span>"), f.append_message_toLastBulletPoint(
              '<br><span style="color:red;">Error: Received empty graph</span>'
            ), C = !1, e.handleOnLoadingError(), O.setErrorMode()
          }, O.isThreadCanceled = function() {}, O.initializeLoader = function(n) {
            if (n === !0 && null !== e.getCachedJsonObj()) {
              var o = JSON.stringify(e.getCachedJsonObj()),
                i = h;
              f.setCachedOntology(i, o)
            }
            u = -1e4, f.setConversionID(u), f.stopLoadingTimer(), e.clearGraphData(),
            O.setBusyMode(), O.showLoadingIndicator(), O.collapseDetails(),
            L = !1, t.select("#loadingIndicator_closeButton").classed(
              "hidden", !0), f.clearDetailInformation()
          }, O.parseUrlAndLoadOntology = function(n) {
            var o = !0;
            n === !1 && (o = !1), e.clearAllGraphData(), O.initializeLoader(
              o);
            var i = String(location),
              r = d(i);
            h = _, c(r);
            var a = p(h);
            switch (t.select("#progressBarValue").node().innerHTML = " ", a) {
              case 0:
                O.from_presetOntology(h);
                break;
              case 1:
                O.from_FileUpload(h);
                break;
              case 2:
                O.from_JSON_URL(h);
                break;
              case 3:
                O.from_IRI_URL(h);
                break;
              default:
                console.log(
                  "Could not identify loading method , or not IMPLEMENTED YET"
                )
            }
          }, O.from_JSON_URL = function(e) {
            var t = decodeURIComponent(e.slice("url=".length));
            h = t;
            var o = "";
            f.cachedOntology(t) ? (f.append_bulletPoint(
              "Loading already cached ontology: " + t), o = f.cachedOntology(
              t), C = !0, s(o)) : (f.append_message(
              "Retrieving ontology from JSON URL " + t), n(f.callbackLoad_JSON_FromURL, [
              "read?json=" + t, t
            ]))
          }, O.requestServerTimeStampForDirectInput = function(e, n) {
            t.xhr("serverTimeStamp", "application/text", function(o,
              i) {
              o ? (f.append_bulletPoint(
                "Could not establish connection to OWL2VOWL service"
              ), O.setErrorMode(), f.append_message_toLastBulletPoint(
                "<br><span style='color:red'>Could not connect to OWL2VOWL service </span>"
              ), O.showErrorDetailsMessage(), t.select(
                "#progressBarValue").style("width", "0%"), t.select(
                "#progressBarValue").classed(
                "busyProgressBar", !1), t.select(
                "#progressBarValue").text("0%")) : (u = i.responseText,
              f.setConversionID(u), e(n, ["conversionID" + u,
                u
              ]))
            })
          }, O.from_IRI_URL = function(e) {
            var t = decodeURIComponent(e.slice("iri=".length));
            h = t;
            var n = "";
            if (f.cachedOntology(t)) f.append_bulletPoint(
                "Loading already cached ontology: " + t), n = f.cachedOntology(
                t), C = !0, s(n);
            else {
              var o = encodeURIComponent(t);
              f.append_bulletPoint("Retrieving ontology from IRI: " +
                t), r(f.callbackLoad_Ontology_FromIRI, [
                "convert?iri=" + o, t
              ])
            }
          }, O.from_FileUpload = function(n) {
            O.setBusyMode();
            var o = decodeURIComponent(n.slice("file=".length));
            h = o;
            var i = "";
            if (f.cachedOntology(o)) f.append_bulletPoint(
                "Loading already cached ontology: " + o), i = f.cachedOntology(
                o), C = !0, s(i);
            else {
              f.append_bulletPoint("Retrieving ontology from file: " +
                o);
              var r = t.select("#file-converter-input").property(
                "files")[0];
              if (!r || o && o !== r.name) return f.append_message_toLastBulletPoint(
                    '<br><span style="color:red;">No cached version of "' +
                    o +
                    '" was found.</span><br>Please reupload the file.'
                  ), O.setErrorMode(), t.select("#progressBarValue").classed(
                    "busyProgressBar", !1), void e.handleOnLoadingError();
              if (o = r.name, o.match(/\.json$/)) {
                f.setConversionID(-1e4);
                var l = new FileReader;
                l.readAsText(r), l.onload = function() {
                  i = l.result, h = o, s(i)
                }
              } else {
                var d = [r, o];
                a(f.callbackLoadFromOntology, d)
              }
            }
          }, O.directInput = function(e) {
            f.clearDetailInformation(), s(e)
          }, O.loadFromOWL2VOWL = function(e, n) {
            C = !1;
            var o = t.select("#bulletPoint_container").node().innerHTML;
            o.indexOf("(with warnings)") !== -1 && (L = !0), f.cachedOntology(
              e) ? (f.append_bulletPoint(
              "Loading already cached ontology: " + n), s(e)) : s(e)
          }, O.from_presetOntology = function(e) {
            f.append_bulletPoint("Retrieving ontology: " + e), l(e)
          }, O.notValidJsonFile = function() {
            e.clearGraphData(), f.append_message_toLastBulletPoint(
              " <span style='color:red;'>failed</span>"), f.append_message_toLastBulletPoint(
              "<br><span style='color:red;'>Error: Received empty graph</span>"
            ), C = !1, e.handleOnLoadingError()
          }, O.validJsonFile = function() {
            f.append_message_toLastBulletPoint("done"), C = !0
          }, O
      }
    }).call(t, n(6))
  },
  343: function(e, t, n) {
    (function(t) {
      e.exports = function(e) {
        var n = {},
          o = !1,
          i = t.select("#WarningErrorMessagesContent");
        i.style("top", "0");
        var r = t.select("#WarningErrorMessages");
        r.style("position", "absolute"), r.style("top", "0");
        var a = !1;
        return r.node().addEventListener("animationend", function() {
            a === !1 && r.classed("hidden", !0)
          }), n.showExporterWarning = function() {
            var e = "Could not export ontology",
              t = "Identified unsupported element type, most likely (owl:Union)",
              o = "Ontology not exported as TTL";
            n.showWarning(e, t, o, 1, !0)
          }, n.hideEditorHint = function() {
            r.classed("hidden", !0)
          }, n.closeEditorHint = function() {
            a = !1, r.style("-webkit-animation-name",
              "warn_CollapseAnimation"), r.style(
              "-webkit-animation-duration", "0.5s")
          }, n.showEditorHint = function() {
            for (var e = i.node().children, o = e.length, l = 0; l <
              o; l++) e[0].remove();
            var s = i.append("div");
            s.node().innerHTML = "Editing mode activated.<br>You can now modify an existing ontology or create a new one via the <em>ontology</em> menu.<br>You can save any ontology using the <em>export</em> menu (and exporting it as TTL file).",
            s.style("padding", "5px"), s.style("line-height",
              "1.2em"), s.style("font-size", "1.2em");
            var d = i.append("ul");
            d.append("li").node().innerHTML = "Create a class with <b>double click / tap</b> on empty canvas area.",
            d.append("li").node().innerHTML = "Edit names with <b>double click / tap</b> on element.</li>",
            d.append("li").node().innerHTML = "Selection of default constructors is provided in the left sidebar.",
            d.append("li").node().innerHTML = "Additional editing functionality is provided in the right sidebar.";
            var c = i.append("label");
            c.node().id = "killWarningErrorMessages", c.node().innerHTML = "Got It", t.select("#killWarningErrorMessages").on(
              "click", n.closeEditorHint), a = !0, r.classed(
              "hidden", !1), r.style("-webkit-animation-name",
              "warn_ExpandAnimation"), r.style(
              "-webkit-animation-duration", "0.5s")
          }, n.disableAllWarnings = function(e) {
            o = e
          }, n.responseWarning = function(n, l, s, d, c, p) {
            if (o === !0 && p && p === !1) return void r.classed(
                "hidden", !0);
            for (var u = i.node().children, f = u.length, h = 0; h <
              f; h++) u[0].remove();
            t.select("#blockGraphInteractions").classed("hidden", !1);
            var g = .5 * e.options().width();
            if (n.length > 0) {
              var v = i.append("div");
              v.style("padding", "5px");
              var m = v.append("div");
              m.style("display", "inline-flex"), m.node().innerHTML = "<b>Warning:</b>", m.style("padding-right", "3px");
              var y = v.append("div");
              y.style("display", "inline-flex"), y.style("max-width",
                g + "px"), y.node().innerHTML = n
            }
            if (l.length > 0) {
              var b = i.append("div");
              b.style("padding", "5px");
              var x = b.append("div");
              x.style("display", "inline-flex"), x.style(
                "padding-right", "3px"), x.node().innerHTML = "<b>Reason:</b>";
              var w = b.append("div");
              w.style("display", "inline-flex"), w.style("max-width",
                g + "px"), w.node().innerHTML = l
            }
            if (s.length > 0) {
              var k = i.append("div");
              k.style("padding", "5px");
              var C = k.append("div");
              C.style("display", "inline-flex"), C.style(
                "padding-right", "8px"), C.node().innerHTML = "<b>Action:</b>";
              var L = k.append("div");
              L.style("display", "inline-flex"), L.style("max-width",
                g + "px"), L.node().innerHTML = s
            }
            var M = i.append("label");
            M.node().id = "killWarningErrorMessages", M.node().innerHTML = "Continue", t.select("#killWarningErrorMessages").on(
              "click",
              function() {
                a = !1, r.style("-webkit-animation-name",
                  "warn_CollapseAnimation"), r.style(
                  "-webkit-animation-duration", "0.5s"), t.select(
                  "#blockGraphInteractions").classed("hidden", !0),
                d(c[0], c[1], c[2], c[3])
              }), i.append("span").node().innerHTML = "|";
            var E = i.append("label");
            E.node().id = "cancelButton", E.node().innerHTML = "Cancel", E.on("click", function() {
              a = !1, r.style("-webkit-animation-name",
                "warn_CollapseAnimation"), r.style(
                "-webkit-animation-duration", "0.5s"), t.select(
                "#blockGraphInteractions").classed("hidden", !0)
            }), r.classed("hidden", !1), a = !0, r.style(
              "-webkit-animation-name", "warn_ExpandAnimation"), r.style(
              "-webkit-animation-duration", "0.5s")
          }, n.showWarning = function(n, l, s, d, c, p) {
            o === !0 && c && c === !1 && r.classed("hidden", !0);
            for (var u = i.node().children, f = u.length, h = 0; h <
              f; h++) u[0].remove();
            var g = .5 * e.options().width();
            if (n.length > 0) {
              var v = i.append("div");
              v.style("padding", "5px");
              var m = v.append("div");
              m.style("display", "inline-flex"), m.node().innerHTML = "<b>Warning:</b>", m.style("padding-right", "3px");
              var y = v.append("div");
              y.style("display", "inline-flex"), y.style("max-width",
                g + "px"), y.node().innerHTML = n
            }
            if (l.length > 0) {
              var b = i.append("div");
              b.style("padding", "5px");
              var x = b.append("div");
              x.style("display", "inline-flex"), x.style(
                "padding-right", "3px"), x.node().innerHTML = "<b>Reason:</b>";
              var w = b.append("div");
              w.style("display", "inline-flex"), w.style("max-width",
                g + "px"), w.node().innerHTML = l
            }
            if (s.length > 0) {
              var k = i.append("div");
              k.style("padding", "5px");
              var C = k.append("div");
              C.style("display", "inline-flex"), C.style(
                "padding-right", "8px"), C.node().innerHTML = "<b>Action:</b>";
              var L = k.append("div");
              L.style("display", "inline-flex"), L.style("max-width",
                g + "px"), L.node().innerHTML = s
            }
            var M;
            if (1 === d && (M = i.append("label"), M.node().id = "killWarningErrorMessages", M.node().innerHTML = "Got It", t.select("#killWarningErrorMessages").on(
                "click",
                function() {
                  a = !1, r.style("-webkit-animation-name",
                    "warn_CollapseAnimation"), r.style(
                    "-webkit-animation-duration", "0.5s")
                })), 2 === d) {
              M = i.append("label"), M.node().id = "killWarningErrorMessages", M.node().innerHTML = "Got It", t.select("#killWarningErrorMessages").on(
                "click",
                function() {
                  a = !1, r.style("-webkit-animation-name",
                    "warn_CollapseAnimation"), r.style(
                    "-webkit-animation-duration", "0.5s")
                }), i.append("span").node().innerHTML = "|";
              var E = i.append("label");
              E.node().id = "zoomElementThing", E.node().innerHTML = "Zoom to element ", t.select("#zoomElementThing").on(
                "click",
                function() {
                  e.zoomToElementInGraph(p)
                }), i.append("span").node().innerHTML = "|";
              var _ = i.append("label");
              _.node().id = "showElementThing", _.node().innerHTML = "Indicate element", t.select("#showElementThing").on(
                "click",
                function() {
                  p.halo() === !1 ? (p.drawHalo(), e.updatePulseIds(
                    [p.id()])) : (p.removeHalo(), p.drawHalo(), e
                    .updatePulseIds([p.id()]))
                })
            }
            a = !0, r.classed("hidden", !1), r.style(
              "-webkit-animation-name", "warn_ExpandAnimation"), r.style(
              "-webkit-animation-duration", "0.5s"), r.classed(
              "hidden", !1)
          }, n
      }
    }).call(t, n(6))
  },
  344: function(e, t, n) {
    (function(t) {
      e.exports = function(e) {
        var n = {},
          o = t.select("#DirectInputContent");
        o.style("top", "0"), o.style("position", "absolute");
        var i = t.select("#directInputTextArea"),
          r = !1;
        return o.style("border", "1px solid black"), o.style(
            "padding", "5px"), o.style("background", "#fff"), n.handleDirectUpload = function() {
            var o,
              r = i.node().value;
            try {
              o = JSON.parse(r), e.options().loadingModule().directInput(
                r), o.class.length > 0 && n.setDirectInputMode(!1)
            } catch (n) {
              try {
                e.options().loadingModule().initializeLoader(), e.options()
                  .loadingModule().requestServerTimeStampForDirectInput(
                  e.options().ontologyMenu().callbackLoad_Ontology_From_DirectInput,
                  r)
              } catch (e) {
                console.log("Error " + e), t.select("#Error_onLoad").classed(
                  "hidden", !1), t.select("#Error_onLoad").node().innerHTML = "Failed to convert the input!"
              }
            }
          }, n.handleCloseButton = function() {
            n.setDirectInputMode(!1)
          }, n.updateLayout = function() {
            var t = e.options().width(),
              n = e.options().height();
            i.style("width", .4 * t + "px"), i.style("height", .7 * n +
              "px")
          }, n.setDirectInputMode = function(e) {
            r = e ? e : !r, n.updateLayout(), t.select(
              "#Error_onLoad").classed("hidden", !0), o.classed(
              "hidden", !r)
          }, t.select("#directUploadBtn").on("click", n.handleDirectUpload),
          t.select("#close_directUploadBtn").on("click", n.handleCloseButton),
          n
      }
    }).call(t, n(6))
  }
});
