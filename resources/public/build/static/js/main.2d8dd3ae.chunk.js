(this["webpackJsonpmusic-sns-app"]=this["webpackJsonpmusic-sns-app"]||[]).push([[0],{137:function(e,t,c){},138:function(e,t,c){},169:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),i=c(52),o=c.n(i),j=(c(137),c(138),c(193)),a=c(181),s=Object(a.a)({styles:{global:{body:{backgroundColor:"gray.50",color:"gray.800"}}}}),l=c(11),b=c(25),x=c(183),O=Object(b.b)({key:"homeState",default:{topic:"recent"}}),h=c(182),d=c(184),m=c(185),u=c(4),p=function(e){var t=e.img,c=e.title,n=e.artist;return Object(u.jsx)(h.a,{w:"30%",p:"auto",children:Object(u.jsxs)(x.a,{m:"auto",children:[Object(u.jsx)(d.a,{src:t,boxSize:"150",mt:"15%",shadow:"5px 5px #EEE"}),Object(u.jsxs)(x.a,{mt:"5%",children:[Object(u.jsx)(m.a,{fontSize:"md",fontWeight:"bold",children:c}),Object(u.jsx)(m.a,{fontSize:"xs",children:n})]})]})})},f=Object(n.memo)((function(e){var t=e.title,c=e.body;return Object(u.jsxs)(x.a,{h:"60%",py:"1%",my:"auto",children:[Object(u.jsx)(m.a,{fontSize:"lg",fontWeight:"bold",children:t}),Object(u.jsx)(m.a,{fontSize:"sm",mt:"2%",children:c})]})})),g=function(){return Object(u.jsx)(m.a,{fontSize:"30px",color:"orange",children:"\u2605\u2605\u2605\u2605\u2606"})},v=c(186),w=c(115),y=function(e){var t=e.value;return Object(u.jsxs)(h.a,{children:[Object(u.jsx)(v.a,{"aria-label":"like",icon:Object(u.jsx)(w.a,{size:"27px"}),size:"0px",color:"gray",bg:"none"}),Object(u.jsx)(m.a,{fontSize:"15px",color:"gray",ml:"5px",children:t})]})},z=c(116),k=function(){return Object(u.jsx)(v.a,{"aria-label":"like",icon:Object(u.jsx)(z.a,{}),size:"0px",color:"gray",bg:"none"})},S=c(187),C=function(e){var t=e.value;return Object(u.jsxs)(h.a,{children:[Object(u.jsx)(v.a,{"aria-label":"comment",icon:Object(u.jsx)(S.a,{}),size:"0px",color:"gray",bg:"none"}),Object(u.jsx)(m.a,{fontSize:"15px",color:"gray",ml:"5px",children:t})]})},_=Object(n.memo)((function(e){var t=e.comment_val,c=e.like_val;return Object(u.jsxs)(h.a,{mt:"2%",children:[Object(u.jsx)(h.a,{w:"30%",mr:"auto",children:Object(u.jsx)(C,{value:t})}),Object(u.jsx)(h.a,{w:"30%",mr:"auto",children:Object(u.jsx)(y,{value:c})}),Object(u.jsx)(h.a,{w:"30%",ml:"auto",children:Object(u.jsx)(k,{})})]})})),A=c(188),B=Object(n.memo)((function(e){var t=e.img,c=e.name,n=e.user_title;e.pl;return Object(u.jsxs)(h.a,{h:"70%",mt:"auto",ml:"auto",children:[Object(u.jsx)(A.a,{bg:"gray.400",size:"sm",mr:"10px",my:"auto",src:t}),Object(u.jsxs)(h.a,{flexDirection:"column",my:"auto",w:"100px",alignItems:"start",children:[Object(u.jsx)(m.a,{fontSize:"sm",w:"100px",textAlign:"left",children:c}),Object(u.jsx)(m.a,{fontSize:"13px",color:"gray",children:n})]})]})})),E=Object(n.memo)((function(e){var t=e.children,c=e.mb,n=e.onClick;return Object(u.jsx)(h.a,{w:"90%",h:"33vh",bg:"white",borderRadius:"10px",px:"30px",py:"15px",shadow:"md",mb:c,_hover:{cursor:"pointer",opacity:.8},onClick:n,children:t})})),F=Object(n.memo)((function(e){var t=e.post,c=t.user,n=t.track,r=t.review,i=t.reaction,o=t.id,j=Object(l.f)();return Object(u.jsxs)(E,{mb:"1.5%",onClick:function(){j.push("/home/post/".concat(o))},children:[Object(u.jsx)(p,{img:n.img,title:n.title,artist:n.artist}),Object(u.jsxs)(h.a,{w:"70%",h:"100%",mr:"auto",flexFlow:"column",textAlign:"left",ml:"5%",children:[Object(u.jsx)(f,{title:r.title,body:r.body}),Object(u.jsxs)(h.a,{mt:"auto",children:[Object(u.jsxs)(x.a,{w:"50%",children:[Object(u.jsx)(g,{}),Object(u.jsx)(_,{comment_val:i.comment_val,like_val:i.like_val})]}),Object(u.jsx)(B,{img:c.img,name:c.name,user_title:c.job,pl:"8%"})]})]})]})})),W=c(5),I=c(119),D=c.n(I),G=Object(n.memo)((function(){var e=Object(b.d)(O),t=function(){var e=Object(n.useState)([]),t=Object(W.a)(e,2),c=t[0],r=t[1];return D.a.get("/api/posts").then((function(e){return r(e.data)})),{api_posts:c}}(),c=t.api_posts;return console.log(c),e({topic:"recent"}),Object(u.jsx)(x.a,{children:c.map((function(e){return Object(u.jsx)(F,{post:Object.assign(e)})}))})})),K=Object(n.memo)((function(){return Object(b.d)(O)({topic:"follow_post"}),Object(u.jsx)("div",{})})),X=Object(n.memo)((function(){return Object(b.d)(O)({topic:"popular"}),Object(u.jsx)("div",{})})),Z=c(120),J=c(196),P=c(189),q=Object(n.memo)((function(e){var t=e.comment_val,c=e.like_val;return Object(u.jsxs)(h.a,{justifyContent:"center",w:"80%",mt:5,children:[Object(u.jsx)(x.a,{mr:"auto",children:Object(u.jsx)(C,{value:t})}),Object(u.jsx)(x.a,{mx:"auto",children:Object(u.jsx)(y,{value:c})}),Object(u.jsx)(x.a,{ml:"auto",children:Object(u.jsx)(k,{})})]})})),H=function(e){Object(Z.a)(e),Object(b.d)(O)({topic:"detail"});Object(l.g)().id;return Object(u.jsxs)(x.a,{mx:5,children:[Object(u.jsxs)(h.a,{children:[Object(u.jsx)(J.a,{ratio:1,w:"300px",children:Object(u.jsx)("iframe",{src:"https://open.spotify.com/embed/track/4X6jKZPHkKLbrcEZu13VXK",frameBorder:"0",allow:"encrypted-media"})}),Object(u.jsxs)(h.a,{alignItems:"start",flexFlow:"column",ml:5,mt:"auto",children:[Object(u.jsx)(m.a,{fontWeight:"bold",fontSize:"md",children:"\u6642\u9593\u304c\u306a\u3044"}),Object(u.jsx)(m.a,{fontSize:"sm",children:"\u53ce\u9332\u30a2\u30eb\u30d0\u30e0\uff1a\u611b\u304c\u3042\u308b\u3060\u3051\u3001\u3059\u3079\u3066"}),Object(u.jsx)(m.a,{fontSize:"sm",children:"\u30a2\u30fc\u30c6\u30a3\u30b9\u30c8\uff1a\u30ad\u30ea\u30f3\u30b8"}),Object(u.jsx)(m.a,{fontSize:"sm",children:"\u30ea\u30ea\u30fc\u30b9\uff1a2019/10/18"})]})]}),Object(u.jsx)(P.a,{orientation:"horizontal",w:"100%",mt:5,mb:"5"}),Object(u.jsxs)(h.a,{textAlign:"left",children:[Object(u.jsx)(x.a,{mr:2,children:Object(u.jsx)(B,{name:"\u4e2d\u6751 \u512a\u592a",user_title:"\u5b66\u751f",img:"none"})}),Object(u.jsx)(g,{})]}),Object(u.jsxs)(x.a,{mt:5,textAlign:"left",children:[Object(u.jsx)(m.a,{fontSize:"lg",fontWeight:"bold",children:"\u30ad\u30ea\u30f3\u30b8\u6700\u9ad8\uff01"}),Object(u.jsx)(m.a,{fontSize:"sm",pr:10,mt:2,children:"\u300c\u611b\u3092\u3042\u308b\u3060\u3051\u3001\u3059\u3079\u3066\u300d\u306e\u4e2d\u3067\u3082\u4e00\u756a\u597d\u304d\u306a\u66f2\u3067\u3059\uff01 \u5f13\u6728\u3055\u3093\u306e\u30d5\u30a1\u30f3\u30ad\u30fc\u306a\u30ab\u30c3\u30c6\u30a3\u30f3\u30b0\u3068\u9ad8\u6a39\u3055\u3093\u306e\u30b3\u30fc\u30e9\u30b9\u304c\u305f\u307e\u308a\u307e\u305b\u3093\uff01\uff01 \u3064\u3044\u4f55\u5ea6\u3082\u30ea\u30d4\u30fc\u30c8\u3057\u3066\u805e\u3044\u3066\u3057\u307e\u3044\u307e\u3059\u3002"})]}),Object(u.jsx)(q,{comment_val:3,like_val:11}),Object(u.jsx)(P.a,{orientation:"horizontal",w:"100%",mt:5,mb:"5"})]})},L=function(){return Object(u.jsx)("h1",{children:"Page404"})},M=[{path:"/",exact:!0,children:Object(u.jsx)(G,{})},{path:"/follow_post",exact:!1,children:Object(u.jsx)(K,{})},{path:"/popular",exact:!1,children:Object(u.jsx)(X,{})},{path:"/post/:id",exact:!1,children:Object(u.jsx)(H,{})},{path:"*",exact:!1,children:Object(u.jsx)(L,{})}],N=c(194),R=c(191),V=c(190),Y=Object(n.memo)((function(e){var t=e.display,c=e.onClick,n=e.ml,r=void 0===n?"none":n,i=e.my,o=void 0===i?"none":i,j=e.size,a=void 0===j?"md":j;return Object(u.jsx)(v.a,{bgGradient:"linear(to-tl, green, #c4de71)",color:"white","aria-label":"Open menu",icon:Object(u.jsx)(V.a,{}),size:a,ml:r,my:o,display:t,onClick:c})})),Q=function(e){var t=e.children;return Object(u.jsx)(m.a,{as:"h1",color:"gray.500",mr:"auto",mt:"8px",fontSize:{base:"18px",md:" 23px"},children:t})},T=Object(n.memo)((function(e){var t=e.children,c=e.onOpen,n=Object(b.c)(O).topic,r=Object(l.f)();return Object(u.jsxs)(h.a,{w:{base:"100%",md:"80vh"},h:"100vh",borderX:{base:"none",md:"1px"},borderColor:{md:"gray.200"},flexDirection:"column",children:[Object(u.jsxs)(h.a,{as:"nav",w:"100%",borderBottom:"1px",borderColor:"gray.200",px:"3%",children:[Object(u.jsx)(x.a,{my:"1.5%",h:"5%",children:"recent"===n?Object(u.jsx)(Q,{children:"\u6700\u65b0\u306e\u6295\u7a3f"}):"follow_post"===n?Object(u.jsx)(Q,{children:"\u30d5\u30a9\u30ed\u30fc"}):"popular"===n?Object(u.jsx)(Q,{children:"\u4eba\u6c17\u306e\u6295\u7a3f"}):Object(u.jsxs)(h.a,{children:[Object(u.jsx)(v.a,{icon:Object(u.jsx)(R.a,{}),"aria-label":"Back home",bg:"none",mr:2,fontSize:"xl",onClick:function(){r.push("/home")}}),Object(u.jsx)(Q,{children:"\u30b9\u30ec\u30c3\u30c9"})]})}),Object(u.jsx)(Y,{display:{base:"inline",md:"none"},onClick:c,ml:"auto",my:"auto",size:"sm"})]}),Object(u.jsx)(x.a,{h:"100vh",w:"100%",overflow:"auto",flexDirection:"column",align:"center",pt:"2%",children:t})]})})),U=c(65),$=c(125),ee=Object(n.memo)((function(e){var t=e.children,c=(e.w,e.onClick);return Object(u.jsx)($.a,{colorScheme:"gray",variant:"ghost",solid:"none",w:"w",_hover:{cursor:"pointer"},_focus:{boxShadow:"none"},onClick:c,children:t})})),te=function(e){var t=e.children,c=e.w;return Object(u.jsx)($.a,{color:"white",bgGradient:"linear(to-tl, green, #c4de71)",w:c,_hover:{opacity:.8,cursor:"pointer"},children:t})},ce=Object(n.memo)((function(){var e=Object(l.f)();return Object(u.jsxs)(h.a,{flexFlow:"column",ml:"20px",alignItems:"start",pr:"80px",children:[Object(u.jsx)(U.b,{to:"/home",children:Object(u.jsx)(m.a,{as:"h1",fontSize:"40px",bgGradient:"linear(to-tl, green, #c4de71)",bgClip:"text",fontWeight:"bold",my:"20px",ml:"10px",children:"Bebop!"})}),Object(u.jsx)(ee,{w:"100%",onClick:function(){e.push("/home")},children:"\u6700\u65b0\u306e\u6295\u7a3f"}),Object(u.jsx)(ee,{w:"100%",onClick:function(){e.push("/home/follow_post")},children:"\u30d5\u30a9\u30ed\u30fc"}),Object(u.jsx)(ee,{w:"100%",onClick:function(){e.push("/home/popular")},children:"\u4eba\u6c17\u306e\u6295\u7a3f"}),Object(u.jsx)(h.a,{mt:"300px",ml:"30px",children:Object(u.jsx)(te,{w:"130px",children:"\u6295\u7a3f"})}),Object(u.jsx)(x.a,{mt:"100%",w:"100%",children:Object(u.jsx)(B,{img:"https://source.unsplash.com/brFsZ7qszSY",name:"\u4e2d\u6751 \u512a\u592a",user_title:"\u5b66\u751f",pl:"30px"})})]})})),ne=c(197),re=c(39),ie=Object(n.memo)((function(e){var t=e.onClose,c=e.isOpen;return Object(u.jsx)(ne.a,{placement:"left",size:"xs",onClose:t,isOpen:c,children:Object(u.jsx)(re.d,{children:Object(u.jsx)(ne.b,{children:Object(u.jsx)(re.b,{p:0,bg:"gray.100",children:Object(u.jsx)(ce,{})})})})})})),oe=Object(n.memo)((function(e){var t=e.children,c=e.isOpen,n=e.onClose;return Object(u.jsxs)(x.a,{children:[Object(u.jsxs)(h.a,{spacing:"none",children:[Object(u.jsx)(x.a,{w:"22%",h:"100vh",display:{base:"none",md:"inline"},pr:"auto",children:Object(u.jsx)(ce,{})}),t]}),Object(u.jsx)(ie,{isOpen:c,onClose:n})]})})),je=Object(n.memo)((function(e){var t=e.children,c=Object(N.a)(),n=c.isOpen,r=c.onOpen,i=c.onClose;return Object(u.jsx)(h.a,{children:Object(u.jsx)(x.a,{mx:"auto",children:Object(u.jsx)(oe,{isOpen:n,onClose:i,children:Object(u.jsx)(T,{onOpen:r,children:t})})})})})),ae=function(){var e=Object(l.f)();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:"\u30ed\u30b0\u30a4\u30f3\u30da\u30fc\u30b8"}),Object(u.jsx)($.a,{onClick:function(){e.push("/home")},children:"\u30ed\u30b0\u30a4\u30f3"})]})},se=function(){return Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{exact:!0,path:"/",children:Object(u.jsx)(ae,{})}),Object(u.jsx)(l.a,{path:"/home",render:function(e){var t=e.match.url;return Object(u.jsx)(l.c,{children:M.map((function(e){return Object(u.jsx)(l.a,{exact:e.exact,path:"".concat(t).concat(e.path),children:Object(u.jsx)(je,{children:e.children})},e.path)}))})}}),Object(u.jsx)(l.a,{path:"*",children:Object(u.jsx)(L,{})})]})};var le=function(){return Object(u.jsx)("div",{className:"App",style:{height:"100%"},children:Object(u.jsx)(U.a,{children:Object(u.jsx)(b.a,{children:Object(u.jsx)(j.a,{theme:s,children:Object(u.jsx)(se,{})})})})})};o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(le,{})}),document.getElementById("root"))}},[[169,1,2]]]);
//# sourceMappingURL=main.2d8dd3ae.chunk.js.map