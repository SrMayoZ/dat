// scripts.js
(function(o, c) {
    var n = c.documentElement,
        t = " w-mod-";
    n.className += t + "js", ("ontouchstart" in o || o.DocumentTouch && c instanceof DocumentTouch) && (n.className += t + "touch")
}(window, document));

!function() {
    "use strict";
    !function(e, t) {
        var n = e.amplitude || {
            _q: [],
            _iq: {}
        };
        if(n.invoked) e.console && console.error && console.error("Amplitude snippet has been loaded.");
        else {
            var r = function(e, t) {
                    e.prototype[t] = function() {
                        return this._q.push({
                            name: t,
                            args: Array.prototype.slice.call(arguments, 0)
                        }), this
                    }
                },
                s = function(e, t, n) {
                    return function(r) {
                        e._q.push({
                            name: t,
                            args: Array.prototype.slice.call(n, 0),
                            resolve: r
                        })
                    }
                },
                o = function(e, t, n) {
                    e[t] = function() {
                        if(n) return {
                            promise: new Promise(s(e, t, Array.prototype.slice.call(arguments)))
                        }
                    }
                },
                i = function(e) {
                    for(var t = 0; t < y.length; t++) o(e, y[t], !1);
                    for(var n = 0; n < g.length; n++) o(e, g[n], !0)
                };
            n.invoked = !0;
            var a = t.createElement("script");
            a.type = "text/javascript", a.integrity = "sha384-TPZhteUkZj8CAyBx+GZZytBdkuKnhKsSKcCoVCq0QSteWf/Kw5Kb9oVFUROLE1l3", a.crossOrigin = "anonymous", a.async = !0, a.src = "https://cdn.amplitude.com/libs/analytics-browser-1.9.1-min.js.gz", a.onload = function() {
                e.amplitude.runQueuedFunctions || console.log("[Amplitude] Error: could not load SDK")
            };
            var c = t.getElementsByTagName("script")[0];
            c.parentNode.insertBefore(a, c);
            for(var u = function() {
                    return this._q = [], this
                }, l = ["add", "append", "clearAll", "prepend", "set", "setOnce", "unset", "preInsert", "postInsert", "remove", "getUserProperties"], p = 0; p < l.length; p++) r(u, l[p]);
            n.Identify = u;
            for(var d = function() {
                    return this._q = [], this
                }, f = ["getEventProperties", "setProductId", "setQuantity", "setPrice", "setRevenue", "setRevenueType", "setEventProperties"], v = 0; v < f.length; v++) r(d, f[v]);
            n.Revenue = d;
            var y = ["getDeviceId", "setDeviceId", "getSessionId", "setSessionId", "getUserId", "setUserId", "setOptOut", "setTransport", "reset"],
                g = ["init", "add", "remove", "track", "logEvent", "identify", "groupIdentify", "setGroup", "revenue", "flush"];
            i(n), n.createInstance = function(e) {
                return n._iq[e] = {
                    _q: []
                }, i(n._iq[e]), n._iq[e]
            }, e.amplitude = n
        }
    }(window, document)
}();
amplitude.init('50c088a20a7d080570a593d506aec403', undefined, {
    defaultTracking: {
        pageViews: true,
        formInteractions: true,
        fileDownloads: true
    }
});

! function(w, d, t) {
    w.TiktokAnalyticsObject = t;
    var ttq = w[t] = w[t] || [];
    ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"], ttq.setAndDefer = function(t, e) {
        t[e] = function() {
            t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
        }
    };
    for(var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
    ttq.instance = function(t) {
        for(var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n]);
        return e
    }, ttq.load = function(e, n) {
        var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
        ttq._i = ttq._i || {}, ttq._i[e] = [], ttq._i[e]._u = i, ttq._t = ttq._t || {}, ttq._t[e] = +new Date, ttq._o = ttq._o || {}, ttq._o[e] = n || {};
        var o = document.createElement("script");
        o.type = "text/javascript", o.async = !0, o.src = i + "?sdkid=" + e + "&lib=" + t;
        var a = document.getElementsByTagName("script")[0];
        a.parentNode.insertBefore(o, a)
    };
    ttq.load('CMSOK8JC77U72P15LVOG');
    ttq.page();
}(window, document, 'ttq');

_linkedin_partner_id = "5122156";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(_linkedin_partner_id);

(function(l) {
    if(!l) {
        window.lintrk = function(a, b) {
            window.lintrk.q.push([a, b])
        };
        window.lintrk.q = []
    }
    var s = document.getElementsByTagName("script")[0];
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.async = true;
    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    s.parentNode.insertBefore(b, s);
})(window.lintrk);

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-EK2JNPD824');
gtag('config', 'AW-16568645155');

document.addEventListener('DOMContentLoaded', function () {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const blogPostsContainer = document.getElementById('blog-posts');
    posts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.classList.add('blog-post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
        `;
        blogPostsContainer.appendChild(postElement);
    });
});

