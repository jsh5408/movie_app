(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{58:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),i=s(29),r=s.n(i),c=s(9),o=s(2),u=s(17),j=s.n(u),l=s(30),m=s(11),d=s(12),b=s(14),p=s(13),v=s(31),h=s.n(v),O=s(5),x=s.n(O),y=(s(58),s(1));function g(e){e.id;var t=e.year,s=e.title,a=e.summary,n=e.poster,i=e.genres;return Object(y.jsx)(c.b,{to:{pathname:"movie/:id",state:{year:t,title:s,summary:a,poster:n,genres:i}},children:Object(y.jsxs)("div",{className:"movie",children:[Object(y.jsx)("img",{src:n,alt:s,title:s}),Object(y.jsxs)("div",{className:"movie__data",children:[Object(y.jsx)("h3",{className:"movie__title",children:s}),Object(y.jsx)("h5",{className:"movie__year",children:t}),Object(y.jsxs)("p",{className:"movie__summary",children:[a.slice(0,140),"..."]}),Object(y.jsx)("ul",{className:"movie__genres",children:i.map((function(e,t){return Object(y.jsx)("li",{className:"genres__genre",children:e},t)}))})]})]})})}g.prototypes={id:x.a.number.isRequired,year:x.a.number.isRequired,title:x.a.string.isRequired,summary:x.a.string.isRequired,poster:x.a.string.isRequired,genres:x.a.arrayOf(x.a.string).isRequired};var f=g,_=(s(63),function(e){Object(b.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(m.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(l.a)(j.a.mark((function t(){var s,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(y.jsx)("section",{className:"container",children:t?Object(y.jsx)("div",{className:"loader",children:Object(y.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(y.jsx)("div",{className:"movies",children:s.map((function(e){return Object(y.jsx)(f,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(n.a.Component));var N=function(e){return Object(y.jsx)("span",{children:"About this page: I built it because I love movies"})},k=function(e){Object(b.a)(s,e);var t=Object(p.a)(s);function s(){return Object(m.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,s=e.history;void 0===t.state&&s.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?Object(y.jsx)("span",{children:e.state.title}):null}}]),s}(n.a.Component);s(64);var q=function(){return Object(y.jsxs)("div",{className:"nav",children:[Object(y.jsx)(c.b,{to:"/",children:"Home"}),Object(y.jsx)(c.b,{to:"/about",children:"About"})]})};var w=function(){return Object(y.jsxs)(c.a,{children:[Object(y.jsx)(q,{}),Object(y.jsx)(o.a,{path:"/",exact:!0,component:_}),Object(y.jsx)(o.a,{path:"/about",exact:!0,component:N}),Object(y.jsx)(o.a,{path:"/movie/:id",exact:!0,component:k})]})};r.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(w,{})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.50676e10.chunk.js.map