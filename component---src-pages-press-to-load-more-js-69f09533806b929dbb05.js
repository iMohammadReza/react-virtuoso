(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{155:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(159),c=n(160),u=n(162),s=n(156),l=n(163),i=function(e){return a.a.createElement(l.f,{user:Object(s.b)(e),index:e})},m=function(){var e=Object(r.useState)(0),t=e[0],n=e[1],o=Object(r.useRef)([]),c=Object(r.useState)(!1),l=c[0],m=c[1],f=Object(r.useCallback)(function(){m(!0),setTimeout(function(){for(var e=t;e<t+t+20;e++)o.current=[].concat(o.current,[Object(s.b)(e)]);m(!1),n(o.current.length)},500)},[]);return Object(r.useEffect)(function(){f()},[]),a.a.createElement(u.b,{style:{width:"350px",height:"400px"},totalCount:t,item:i,footer:function(){return a.a.createElement("div",{style:{padding:"2rem",display:"flex",justifyContent:"center"}},a.a.createElement("button",{disabled:l,onClick:f},l?"Loading...":"Press to load more"))}})};t.default=function(){return a.a.createElement(o.a,{sidebar:function(){return a.a.createElement(c.a,{path:"PressToLoadMore"})}},a.a.createElement("h2",null,"Press to load more"),a.a.createElement("p",null,"The footer render property can be used to host a load more button that appends more items to the list."),a.a.createElement("p",null,"Scroll to the bottom of the list and press the load more button to load 20 more items."),a.a.createElement(m,null))}},156:function(e,t,n){"use strict";n.d(t,"b",function(){return u}),n.d(t,"a",function(){return s});n(161),n(74),n(55),n(34),n(164),n(165),n(157);var r=n(166),a=n.n(r),o=n(167),c=[],u=function(e){if(!c[e]){var t=a.a.name.firstName(),n=a.a.name.lastName();c[e]={name:t+" "+n,initials:""+t.substr(0,1)+n.substr(0,1),description:a.a.company.catchPhrase(),bgColor:a.a.commerce.color(),fgColor:a.a.commerce.color(),longText:a.a.lorem.paragraphs(4),avatar:a.a.internet.avatar()}}return c[e]},s=function(e){for(var t=[],n=0;n<e;n++)t.push(u(n));t.sort(function(e,t){return e.name<t.name?-1:e.name>t.name?1:0});var r=Object(o.groupBy)(t,function(e){return e.name[0]});return{users:t,groupCounts:Object.values(r).map(function(e){return e.length}),groups:Object.keys(r)}}}}]);
//# sourceMappingURL=component---src-pages-press-to-load-more-js-69f09533806b929dbb05.js.map