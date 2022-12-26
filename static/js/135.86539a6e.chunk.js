"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[135],{952:function(e,r,t){t.d(r,{Jh:function(){return v},_3:function(){return f},bp:function(){return _},fO:function(){return u},ix:function(){return o},k0:function(){return l},kP:function(){return p}});var n=t(861),a=t(757),s=t.n(a),i=t(388),c="67eb25e753339c339c2207d6264e77e1";i.Z.defaults.baseURL="\nhttps://api.themoviedb.org/3/";var o=function(){var e=(0,n.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("trending/all/day?api_key=".concat(c));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Please wait, we are repair problem"),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("search/movie?api_key=".concat(c,"&language=en-US&query=").concat(r,"&page=1&include_adult=false"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Please wait, we are repair problem"),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("movie/".concat(r,"?api_key=").concat(c,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),console.error("Please wait, we are repair problem"),e.abrupt("return",[]);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}();function p(e){return e?"".concat("https://image.tmdb.org/t/p/w500","/").concat(e):"https://www.jsconsulting.kz/assets/img/noImg.jpg"}var _=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("movie/".concat(r,"/credits?api_key=").concat(c,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data.cast);case 7:e.prev=7,e.t0=e.catch(0),console.error("Please wait, we are repair problem");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("movie/".concat(r,"/reviews?api_key=").concat(c,"&language=en-US"));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error("Please wait, we are repair problem");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}();function f(e){if(e)return e.split("-")[0]}},135:function(e,r,t){t.r(r),t.d(r,{default:function(){return f}});var n=t(861),a=t(439),s=t(757),i=t.n(s),c=t(952),o=t(791),u=t(73),l=t(87),p=t(689),_={movies__detail__section:"MovieDetails_movies__detail__section__3Q6Ws",back__link:"MovieDetails_back__link__KHpKb",movies__title__wrapper:"MovieDetails_movies__title__wrapper__6OJ8o",movies_link_wrapper:"MovieDetails_movies_link_wrapper__GHEZE",cast__link:"MovieDetails_cast__link__lFePs",cast__text:"MovieDetails_cast__text__nhNUK",reviews__text:"MovieDetails_reviews__text__QwGwP"},v=t(184),f=function(){var e,r,t=(0,o.useState)({}),s=(0,a.Z)(t,2),f=s[0],d=s[1],m=(0,p.UO)().movieId,w=null!==(e=null===(r=(0,p.TH)().state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/";(0,o.useEffect)((function(){function e(){return(e=(0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,c.k0)(m);case 3:r=e.sent,d(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),u.Am.error("Pleas wait a few minutes, we are repairing the website...");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[m]);var h=f.poster_path,x=f.original_title,k=f.vote_average,g=f.release_date,b=f.overview,j=f.genres;return(0,v.jsxs)("div",{className:_.movies__detail__section,children:[(0,v.jsx)(l.rU,{to:w,className:_.back__link,children:"Go back"}),(0,v.jsxs)("div",{className:_.movies__description__wrapper,children:[(0,v.jsxs)("p",{children:["Title: ",x,(0,v.jsxs)("span",{children:["(",(0,c._3)(g),")"]})]}),(0,v.jsx)("img",{src:(0,c.kP)(h),alt:x,className:_.movies__img}),(0,v.jsxs)("div",{className:_.movies__title__wrapper,children:[(0,v.jsxs)("p",{children:["Overview: ",b]}),(0,v.jsxs)("p",{children:["Use Score: ",Math.round(10*k),"%"]}),b?(0,v.jsxs)("p",{children:["Genre: ",j.map((function(e){return e.name})).join(", ")]}):(0,v.jsx)("p",{children:"Sorry we are cant found genres info"})]})]}),(0,v.jsxs)("div",{className:_.movies_link_wrapper,children:[(0,v.jsx)(l.rU,{to:"cast",state:{from:w},className:_.cast__link,children:(0,v.jsx)("p",{className:_.cast__text,children:"Cast"})}),(0,v.jsx)(l.rU,{to:"reviews",state:{from:w},className:_.reviews__link,children:(0,v.jsx)("p",{className:_.reviews__text,children:"Reviews"})})]}),(0,v.jsx)(p.j3,{})]})}}}]);
//# sourceMappingURL=135.86539a6e.chunk.js.map