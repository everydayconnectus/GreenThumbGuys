(this.webpackJsonplawn=this.webpackJsonplawn||[]).push([[0],{33:function(e,a,t){e.exports=t(62)},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},62:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(16),r=t.n(c),i=(t(38),t(9)),o=t(10),s=t(12),m=t(11),u=t(13),d=t(6),E=(t(39),t(40),t(41),t(42),t(43),t(44),t(45),t(46),t(47),t(48),function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-dark"},l.a.createElement(u.b,{className:"navbar-brand",to:"/"},l.a.createElement("img",{class:"hvr-shrink",height:"51",width:"70%",id:"SiteLogo",src:"/images/logos/logo.png",alt:"SiteLogo"})),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#SiteNavigation","aria-controls":"SiteNavigation","aria-expanded":"false","aria-label":"Toggle Navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"SiteNavigation"},l.a.createElement("ul",{className:"navbar-nav ml-auto"},l.a.createElement("li",{className:"nav-item hvr-shrink active"},l.a.createElement(u.b,{className:"nav-link text-white text-uppercase mx-5",to:"/"},l.a.createElement("i",{className:"fas fa-home"})," Home ",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item hvr-shrink"},l.a.createElement(u.b,{className:"nav-link text-white text-uppercase mx-5",to:"/services"},l.a.createElement("i",{className:"fas fa-info-circle"})," Our Services")),l.a.createElement("li",{className:"nav-item hvr-shrink"},l.a.createElement(u.b,{className:"nav-link text-white text-uppercase mx-5",to:"/login"},l.a.createElement("i",{className:"fas fa-user-plus"})," Join / Login")))))}}]),t}(n.Component)),h=t(64),p=t(65),g=t(22),b=t(32),v=t(63),f=[{src:"/images/backgrounds/stockslides/stock1.jpg"},{src:"/images/backgrounds/stockslides/stock2.jpg"},{src:"/images/backgrounds/stockslides/stock3.jpg"}],w=function(){var e=Object(n.useState)(0),a=Object(g.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(!1),i=Object(g.a)(r,2),o=i[0],s=i[1],m=f.map((function(e){return l.a.createElement(b.a,{onExiting:function(){return s(!0)},onExited:function(){return s(!1)},key:e.src},l.a.createElement("img",{class:"Slides",src:e.src}))}));return l.a.createElement(v.a,{activeIndex:t,next:function(){if(!o){var e=t===f.length-1?0:t+1;c(e)}},previous:function(){if(!o){var e=0===t?f.length-1:t-1;c(e)}}},m)},y=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"home-section",id:"home"},l.a.createElement("div",{className:"carousel-caption"},l.a.createElement("h1",{id:"ThumbTitle"},"Professional Landscaping"),l.a.createElement("p",{id:"ThumbContext",className:"display-4 mb-5"},"We provide professional residential & commercial landscaping services."),l.a.createElement("div",{className:"ServiceLinks"},l.a.createElement(h.a,{id:"desktopThumb"},l.a.createElement(u.b,{to:"/services"},l.a.createElement(p.a,{color:"primary",className:"hvr-grow display-1",id:"btnCompany"},"View Our Services")),l.a.createElement(u.b,{to:"/login"},l.a.createElement(p.a,{color:"success",className:"hvr-grow",id:"btnClient"},"Become A Client"))),l.a.createElement(h.a,{vertical:!0,id:"mobileThumb"},l.a.createElement(u.b,{to:"/services"},l.a.createElement(p.a,{color:"primary",className:"hvr-grow display-1",id:"btnCompany"},"View Our Services")),l.a.createElement(u.b,{to:"/login"},l.a.createElement(p.a,{color:"success",className:"hvr-grow",id:"btnClient"},"Become A Client"))))),l.a.createElement(w,null))}}]),t}(n.Component),N=t(66),k=t(67),j=t(68),x=t(69),O=t(70),C=t(71),S=t(72),B=t(73),W=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"services-section",id:"services"},l.a.createElement("h1",{class:"display-4",id:"aboutTitle"},"About Us"),l.a.createElement("div",{class:"jumbotron jumbotron-fluid"},l.a.createElement("div",{class:"container jumbo"})),l.a.createElement("div",{className:"container-fluid text-center",id:"ServicesContent"},l.a.createElement("h2",{className:"display-1 mt-5 text-success font-weight-bold"},"Our Services"),l.a.createElement("p",{id:"ServiceContext",className:"text-primary lead"},"We are the ",l.a.createElement("b",{className:"text-success"},"Green Thumb Guys"),"! We specialize in providing our clients with a premium quality landscaping experience to both local and residential customers. Whether you need monthly low-maintinance support or weekly high-end care, our guys have you covered! You can choose from any of our four service bundles below to get started."),l.a.createElement("h2",{className:"display-2 mt-5 text-success"},"~ Premium Service Bundles ~"),l.a.createElement("h3",{className:"text-info"},"Click on any of the four desired services below to get started!"),l.a.createElement(N.a,{className:"ServiceCards w-50 mt-5 text-dark"},l.a.createElement(k.a,{className:"shadow-lg hvr-grow",id:"StandardBundle"},l.a.createElement(j.a,{top:!0,width:"100%",src:"https://images.unsplash.com/photo-1458245201577-fc8a130b8829?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80",alt:"Card image cap"}),l.a.createElement(x.a,{className:"cardtitle"},l.a.createElement(O.a,null,l.a.createElement("h1",null,"Basic Service Bundle")),l.a.createElement(C.a,null,l.a.createElement("h2",null,l.a.createElement(S.a,{color:"primary"},"$65/ month"),l.a.createElement(S.a,{color:"success"},"$90/ month"))),l.a.createElement(B.a,null,l.a.createElement("section",{className:"card-info"},l.a.createElement("ul",null,l.a.createElement("li",null,"Monthly Lawn Maintenance"),l.a.createElement("li",null,"Fertilization Package"),l.a.createElement("li",null,"Fall & Spring Cleaning")))))),l.a.createElement(k.a,{className:"shadow-lg  hvr-grow",id:"EmeraldBundle"},l.a.createElement(j.a,{top:!0,width:"100%",src:"https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",alt:"Card image cap"}),l.a.createElement(x.a,{className:"cardtitle"},l.a.createElement(O.a,null,l.a.createElement("h1",null,"'Green Thumb' Bundle")),l.a.createElement(C.a,null,l.a.createElement("h2",null,l.a.createElement(S.a,{color:"primary"},"$115/ month"),l.a.createElement(S.a,{color:"success"},"$150/ month"))),l.a.createElement(B.a,null,l.a.createElement("section",{className:"card-info"},l.a.createElement("ul",null,l.a.createElement("li",null,"Bi-Weekly Lawn Maintenance"),l.a.createElement("li",null,"Fertilization Package"),l.a.createElement("li",null,"Weed Control"),l.a.createElement("li",null,"Spring & Fall Cleaning"),l.a.createElement("li",null,"Mosquito & Pest Control")))))),l.a.createElement(k.a,{className:"shadow-lg  hvr-grow",id:"PremiumBundle"},l.a.createElement(j.a,{top:!0,width:"100%",src:"https://images.unsplash.com/photo-1556955112-28cde3817b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",alt:"Card image cap"}),l.a.createElement(x.a,{className:"cardtitle"},l.a.createElement(O.a,null,l.a.createElement("h1",null,"Premium Bundle")),l.a.createElement(C.a,null,l.a.createElement("h2",null,l.a.createElement(S.a,{color:"primary"},"$200/ month"),l.a.createElement(S.a,{color:"success"},"$225/ month"))),l.a.createElement(B.a,null,l.a.createElement("section",{className:"card-info"},l.a.createElement("ul",null,l.a.createElement("li",null,"Weekly Lawn Maintenance"),l.a.createElement("li",null,"Fertilization Package"),l.a.createElement("li",null,"Weed Control"),l.a.createElement("li",null,"Mosquito & Pest Control"),l.a.createElement("li",null,"Spring & Fall Cleaning"),l.a.createElement("li",null,"Aeration & PH Balancing")))))),l.a.createElement(k.a,{className:"shadow-lg  hvr-grow",id:"CommercialBundle"},l.a.createElement(j.a,{top:!0,width:"100%",src:"https://images.unsplash.com/photo-1588055886992-61b2dcba1901?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",alt:"Card image cap"}),l.a.createElement(x.a,{className:"cardtitle"},l.a.createElement(O.a,null,l.a.createElement("h1",null,"Commercial Bundle")),l.a.createElement(C.a,null,l.a.createElement("h2",null,l.a.createElement(S.a,{color:"info"},"Starts at $350/month"))),l.a.createElement(B.a,null,l.a.createElement("section",{className:"card-info"},l.a.createElement("ul",null,l.a.createElement("li",null,"Weekly Lawn Maintenance"),l.a.createElement("li",null,"Fertilization Package"),l.a.createElement("li",null,"Spring & Fall Cleaning"),l.a.createElement("li",null,"Seasonal Plant & Lawn Installations"),l.a.createElement("li",null,"Mulch & Soil Applications"),l.a.createElement("li",null,"Landscape Lighting & Sprinkler System"),l.a.createElement("li",null,"Snow Removal(De-icing)"),l.a.createElement("li",null,"Sidewalk & Parking lot Maintenance")))))))))}}]),t}(n.Component),L=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"login-section"},l.a.createElement("div",{className:"ComingSoon animated fadeInDown slow"},l.a.createElement("img",{src:"/images/logos/logo.png",alt:"SiteLogo"}),l.a.createElement("h1",{className:"display-1 text-white font-weight-bold"},"Client Registration Coming Soon!"),l.a.createElement("p",{className:"display-2 text-white"},"We are working hard to bring our services to all clients.")))}}]),t}(n.Component),M=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"dashboard-section",id:"dashboard"},l.a.createElement("h1",null,"This is a placeholder for a possible dashboard."))}}]),t}(n.Component),P=function(e){Object(s.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(u.a,null,l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(d.c,null,l.a.createElement(d.a,{path:"/",exact:!0,component:y}),l.a.createElement(d.a,{path:"/services",component:W}),l.a.createElement(d.a,{path:"/login",component:L}),l.a.createElement(d.a,{path:"/dashboard",component:M}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.04b48fa1.chunk.js.map