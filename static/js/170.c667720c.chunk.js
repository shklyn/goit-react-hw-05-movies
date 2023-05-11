"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[170],{5170:function(n,e,t){t.r(e),t.d(e,{default:function(){return H}});var i,r,o,a,s,l,c,d,p,x,h,f=t(5861),u=t(9439),v=t(4687),g=t.n(v),m=t(2791),j=t(7689),Z=t(1523),w=t(1243),b=t(168),k=t(1109),y=t(1087),_=k.Z.div(i||(i=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n"]))),S=k.Z.div(r||(r=(0,b.Z)(["\n  margin: 30px 60px 20px 60px;\n  box-shadow: 0px 0px 9px 5px rgba(0, 0, 0, 0.67);\n  background-color: #fdf0f7;\n  width: 100%;\n\n  min-height: 1000px;\n  position: relative;\n"]))),C=k.Z.div(o||(o=(0,b.Z)(["\n  display: flex;\n"]))),U=k.Z.img(a||(a=(0,b.Z)(["\n  height: 500px;\n  margin: 30px;\n  margin-top: 50px;\n"]))),z=k.Z.div(s||(s=(0,b.Z)(["\n  height: 100%;\n  padding-top: 50px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 700px;\n"]))),G=k.Z.div(l||(l=(0,b.Z)(["\n  margin-top: 100px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),O=(0,k.Z)(y.rU)(c||(c=(0,b.Z)(["\n  font-size: 17px;\n  color: #212121;\n  font-weight: 500;\n\n  &:hover,\n  &.active {\n    color: #ff0068;\n  }\n"]))),R=k.Z.div(d||(d=(0,b.Z)(["\n  margin-top: 50px;\n"]))),T=(0,k.Z)(y.rU)(p||(p=(0,b.Z)(["\n  padding: 15px;\n  position: absolute;\n  color: black;\n  font-size: 18px;\n  font-weight: 600;\n  top: 0;\n  left: 0;\n\n  &:hover {\n    color: #ff0068;\n  }\n"]))),W=k.Z.div(x||(x=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 30px 60px 20px 60px;\n  box-shadow: 0px 0px 9px 5px rgba(0, 0, 0, 0.67);\n  background-color: #fdf0f7;\n  height: 200px;\n  width: 100%;\n  position: relative;\n"]))),A=k.Z.p(h||(h=(0,b.Z)(["\nfont-size: 22px;\n    font-weight: 600;\n    color: #212121;\n}"]))),E=t(184),H=function(){var n,e,t=(0,m.useState)(null),i=(0,u.Z)(t,2),r=i[0],o=i[1],a=(0,m.useState)(null),s=(0,u.Z)(a,2),l=s[0],c=s[1],d=(0,j.TH)(),p=(0,m.useRef)(null!==(n=null===(e=d.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/"),x=(0,j.UO)().movieId;return(0,m.useEffect)((function(){var n=function(){var n=(0,f.Z)(g().mark((function n(){var e,t,i;return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,w.Z.get("https://api.themoviedb.org/3/movie/".concat(x,"?api_key=").concat("4bc6cd41da8136f9d881653d0e323d21","&language=en-US"));case 3:e=n.sent,t=e.data,i={title:t.title||t.name,average:t.vote_average,overview:t.overview,genres:t.genres.map((function(n){return n.name})).join(", "),poster:"https://image.tmdb.org/t/p/w500".concat(t.poster_path),date:t.release_date.split("-")[0]},o(i),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),c("Sorry, but there is no detailed information about this movie, choose another movie");case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}}();n()}),[x]),(0,E.jsx)(_,{children:r?(0,E.jsxs)(S,{children:[(0,E.jsx)(T,{to:p.current,children:"\ud83e\udc14 Go back"}),(0,E.jsxs)(C,{children:[(0,E.jsx)(U,{src:r.poster,alt:r.title}),(0,E.jsxs)(z,{children:[(0,E.jsxs)("h2",{children:[r.title," (",r.date,")"]}),(0,E.jsxs)("p",{children:["User score: ",r.average]}),(0,E.jsx)("h3",{children:"Overview"}),(0,E.jsx)("p",{children:r.overview}),(0,E.jsx)("h3",{children:"Genres"}),(0,E.jsx)("p",{children:r.genres}),(0,E.jsxs)(G,{children:[(0,E.jsx)("h3",{children:"Additional information:"}),(0,E.jsx)(O,{to:"cast",children:"Cast \u21d3"}),(0,E.jsx)(O,{to:"reviews",children:"Reviews \u21d3"})]}),(0,E.jsx)("div",{children:(0,E.jsx)(m.Suspense,{fallback:(0,E.jsx)("p",{children:"loading"}),children:(0,E.jsx)(j.j3,{})})})]})]})]}):null===l&&(0,E.jsx)(R,{children:(0,E.jsx)(Z.iT,{height:50,width:50,color:"#3f51b5",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#4fa94d",strokeWidth:2,strokeWidthSecondary:2})})||(0,E.jsxs)(W,{children:[(0,E.jsx)(T,{to:p.current,children:"\ud83e\udc14 Go back"}),(0,E.jsx)(A,{children:l})]})})}}}]);
//# sourceMappingURL=170.c667720c.chunk.js.map