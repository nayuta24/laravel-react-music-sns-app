(this["webpackJsonpmusic-sns-app"]=this["webpackJsonpmusic-sns-app"]||[]).push([[0],{130:function(e){e.exports=JSON.parse('{"id":"1","created_at":"2021/10/11","updated_at":"2021/10/11","user":{"id":"1","img":"https://source.unsplash.com/brFsZ7qszSY","name":"\u4e2d\u6751 \u512a\u592a","job":"\u5b66\u751f"},"track":{"id":"4X6jKZPHkKLbrcEZu13VXK","img":"https://i.scdn.co/image/ab67616d00001e029259361b006ad3108801a541","artist":"\u30ad\u30ea\u30f3\u30b8","title":"\u6642\u9593\u304c\u306a\u3044","album":"\u611b\u304c\u3042\u308b\u3060\u3051\u3001\u3059\u3079\u3066","release":"2019/10/18"},"review":{"star":4,"title":"\u30ad\u30ea\u30f3\u30b8\u6700\u9ad8\uff011","body":"\u300c\u611b\u3092\u3042\u308b\u3060\u3051\u3001\u3059\u3079\u3066\u300d\u306e\u4e2d\u3067\u3082\u4e00\u756a\u597d\u304d\u306a\u66f2\u3067\u3059\uff01 \u5f13\u6728\u3055\u3093\u306e\u30d5\u30a1\u30f3\u30ad\u30fc\u306a\u30ab\u30c3\u30c6\u30a3\u30f3\u30b0\u3068\u9ad8\u6a39\u3055\u3093\u306e\u30b3\u30fc\u30e9\u30b9\u304c\u305f\u307e\u308a\u307e\u305b\u3093\uff01\uff01 \u3064\u3044\u4f55\u5ea6\u3082\u30ea\u30d4\u30fc\u30c8\u3057\u3066\u805e\u3044\u3066\u3057\u307e\u3044\u307e\u3059\u3002"},"reaction":{"comment_val":3,"like_val":11}}')},149:function(e,t,c){},150:function(e,t,c){},181:function(e,t,c){"use strict";c.r(t);var n,r=c(1),a=c.n(r),i=c(38),o=c.n(i),s=(c(149),c(150),c(208)),j=c(193),l=Object(j.a)({styles:{global:{body:{backgroundColor:"gray.50",color:"gray.800"}}}}),b=c(11),x=c(28),O=c(195),m=Object(x.b)({key:"homeState",default:{topic:"recent"}}),u=c(194),d=c(196),h=c(197),p=c(2),f=function(e){var t=e.img,c=e.title,n=e.artist;return Object(p.jsx)(u.a,{w:"30%",p:"auto",children:Object(p.jsxs)(O.a,{m:"auto",children:[Object(p.jsx)(d.a,{src:t,boxSize:"150",mt:"15%",shadow:"5px 5px #EEE"}),Object(p.jsxs)(O.a,{mt:"5%",children:[Object(p.jsx)(h.a,{fontSize:"md",fontWeight:"bold",children:c}),Object(p.jsx)(h.a,{fontSize:"xs",children:n})]})]})})},g=Object(r.memo)((function(e){var t=e.title,c=e.body;return Object(p.jsxs)(O.a,{h:"60%",py:"1%",my:"auto",children:[Object(p.jsx)(h.a,{fontSize:"lg",fontWeight:"bold",children:t}),Object(p.jsx)(h.a,{fontSize:"sm",mt:"2%",children:c})]})})),v=function(e){var t=e.rating;n="";for(var c=0;c<5;c++)n+=c<t?"\u2605":"\u2606";return Object(p.jsx)(h.a,{fontSize:"30px",color:"orange",children:n})},w=c(198),y=c(125),k=function(e){var t=e.value;return Object(p.jsxs)(u.a,{children:[Object(p.jsx)(w.a,{"aria-label":"like",icon:Object(p.jsx)(y.a,{size:"27px"}),size:"0px",color:"gray",bg:"none"}),Object(p.jsx)(h.a,{fontSize:"15px",color:"gray",ml:"5px",children:t})]})},z=c(126),S=function(){return Object(p.jsx)(w.a,{"aria-label":"like",icon:Object(p.jsx)(z.a,{}),size:"0px",color:"gray",bg:"none"})},C=c(199),_=function(e){var t=e.value;return Object(p.jsxs)(u.a,{children:[Object(p.jsx)(w.a,{"aria-label":"comment",icon:Object(p.jsx)(C.a,{}),size:"0px",color:"gray",bg:"none"}),Object(p.jsx)(h.a,{fontSize:"15px",color:"gray",ml:"5px",children:t})]})},D=Object(r.memo)((function(e){var t=e.comment_val,c=e.like_val;return Object(p.jsxs)(u.a,{mt:"2%",children:[Object(p.jsx)(u.a,{w:"30%",mr:"auto",children:Object(p.jsx)(_,{value:t})}),Object(p.jsx)(u.a,{w:"30%",mr:"auto",children:Object(p.jsx)(k,{value:c})}),Object(p.jsx)(u.a,{w:"30%",ml:"auto",children:Object(p.jsx)(S,{})})]})})),A=c(200),B=Object(r.memo)((function(e){var t=e.img,c=e.name,n=e.user_title;e.pl;return Object(p.jsxs)(u.a,{h:"70%",mt:"auto",ml:"auto",children:[Object(p.jsx)(A.a,{bg:"gray.400",size:"sm",mr:"10px",my:"auto",src:t}),Object(p.jsxs)(u.a,{flexDirection:"column",my:"auto",w:"100px",alignItems:"start",children:[Object(p.jsx)(h.a,{fontSize:"sm",w:"100px",textAlign:"left",children:c}),Object(p.jsx)(h.a,{fontSize:"13px",color:"gray",children:n})]})]})})),E=Object(r.memo)((function(e){var t=e.children,c=e.mb,n=e.onClick;return Object(p.jsx)(u.a,{w:"90%",h:"33vh",bg:"white",borderRadius:"10px",px:"30px",py:"15px",shadow:"md",mb:c,_hover:{cursor:"pointer",opacity:.8},onClick:n,children:t})})),F=Object(r.memo)((function(e){var t=e.post,c=t.user,n=t.track,r=t.review,a=t.reaction,i=t.id,o=Object(b.f)();return Object(p.jsxs)(E,{mb:"1.5%",onClick:function(){o.push("/post/".concat(i))},children:[Object(p.jsx)(f,{img:n.img,title:n.title,artist:n.artist}),Object(p.jsxs)(u.a,{w:"70%",h:"100%",mr:"auto",flexFlow:"column",textAlign:"left",ml:"5%",children:[Object(p.jsx)(g,{title:r.title,body:r.body}),Object(p.jsxs)(u.a,{mt:"auto",children:[Object(p.jsxs)(O.a,{w:"50%",children:[Object(p.jsx)(v,{rating:r.star}),Object(p.jsx)(D,{comment_val:a.comment_val,like_val:a.like_val})]}),Object(p.jsx)(B,{img:c.img,name:c.name,user_title:c.job,pl:"8%"})]})]})]})})),W=c(5),P=c(92),G=c.n(P),I=c(207),M=function(){var e=Object(I.a)();return{showMessage:Object(r.useCallback)((function(t){var c=t.title,n=t.status;e({title:c,status:n,position:"top",duration:2e3,isClosable:!0})}),[])}},Z=c(211),J=Object(r.memo)((function(){return Object(p.jsx)(Z.a,{thickness:"4px",speed:"0.8s",emptyColor:"gray.200",color:"#c4de71",size:"xl",m:"auto",mt:"50%"})})),K=Object(r.memo)((function(){Object(x.d)(m)({topic:"recent"});var e=function(e){var t=Object(r.useState)([]),c=Object(W.a)(t,2),n=c[0],a=c[1],i=Object(r.useState)(!1),o=Object(W.a)(i,2),s=o[0],j=o[1],l=M().showMessage;return{getPosts:Object(r.useCallback)((function(){j(!0),G.a.get("/api/posts/recent").then((function(e){return a(e.data)})).catch((function(){l({title:"\u30c7\u30fc\u30bf\u306e\u8aad\u307f\u8fbc\u307f\u306b\u5931\u6557\u3057\u307e\u3057\u305f",status:"error"})})).finally((function(){return j(!1)}))}),[]),api_posts:n,loading:s}}(),t=e.getPosts,c=e.api_posts,n=e.loading;return Object(r.useEffect)((function(){return t()}),[t]),Object(p.jsx)(p.Fragment,{children:n?Object(p.jsx)(J,{}):Object(p.jsx)(O.a,{children:c.map((function(e){return Object(p.jsx)(O.a,{children:Object(p.jsx)(F,{post:Object.assign(e)})},e.id)}))})})})),X=Object(r.memo)((function(){return Object(x.d)(m)({topic:"follow"}),Object(p.jsx)(J,{})})),q=Object(r.memo)((function(){return Object(x.d)(m)({topic:"popular"}),Object(p.jsx)(O.a,{children:Object(p.jsx)(J,{})})})),N=c(129),R=c(213),Y=c(202),H=Object(r.memo)((function(e){var t=e.comment_val,c=e.like_val;return Object(p.jsxs)(u.a,{justifyContent:"center",w:"80%",mt:5,children:[Object(p.jsx)(O.a,{mr:"auto",children:Object(p.jsx)(_,{value:t})}),Object(p.jsx)(O.a,{mx:"auto",children:Object(p.jsx)(k,{value:c})}),Object(p.jsx)(O.a,{ml:"auto",children:Object(p.jsx)(S,{})})]})})),L=c(130),V=function(e){Object(N.a)(e),Object(x.d)(m)({topic:"detail"});var t=function(e){var t=Object(r.useState)(L),c=Object(W.a)(t,2),n=c[0],a=c[1],i=Object(r.useState)(!1),o=Object(W.a)(i,2),s=o[0],j=o[1],l=M().showMessage;return{getPostDetail:Object(r.useCallback)((function(){j(!0),G.a.get("/api/posts/".concat(e)).then((function(e){return a(e.data)})).catch((function(){l({title:"\u6295\u7a3f\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093",status:"error"})})).finally((function(){return j(!1)}))}),[]),api_postDetail:n,loading:s}}(Object(b.g)().id),c=t.getPostDetail,n=t.api_postDetail,a=t.loading;return Object(r.useEffect)((function(){return c()}),[]),Object(p.jsx)(p.Fragment,{children:a?Object(p.jsx)(J,{}):Object(p.jsxs)(O.a,{mx:5,children:[Object(p.jsxs)(u.a,{children:[Object(p.jsx)(R.a,{ratio:1,w:"300px",children:Object(p.jsx)("iframe",{src:"https://open.spotify.com/embed/track/".concat(n.track.id),frameBorder:"0",allow:"encrypted-media"})}),Object(p.jsxs)(u.a,{alignItems:"start",flexFlow:"column",ml:5,mt:"auto",children:[Object(p.jsx)(h.a,{fontWeight:"bold",fontSize:"md",children:n.track.title}),Object(p.jsxs)(h.a,{fontSize:"sm",children:["\u53ce\u9332\u30a2\u30eb\u30d0\u30e0\uff1a",n.track.album]}),Object(p.jsxs)(h.a,{fontSize:"sm",children:["\u30a2\u30fc\u30c6\u30a3\u30b9\u30c8\uff1a",n.track.artist]}),Object(p.jsxs)(h.a,{fontSize:"sm",children:["\u30ea\u30ea\u30fc\u30b9\uff1a",n.track.release]})]})]}),Object(p.jsx)(Y.a,{orientation:"horizontal",w:"100%",mt:5,mb:"5"}),Object(p.jsxs)(u.a,{textAlign:"left",children:[Object(p.jsx)(O.a,{mr:2,children:Object(p.jsx)(B,{name:n.user.name,user_title:n.user.job,img:n.user.img})}),Object(p.jsx)(v,{rating:n.review.star})]}),Object(p.jsxs)(O.a,{mt:5,textAlign:"left",children:[Object(p.jsx)(h.a,{fontSize:"lg",fontWeight:"bold",children:n.review.title}),Object(p.jsx)(h.a,{fontSize:"sm",pr:10,mt:2,children:n.review.body})]}),Object(p.jsx)(H,{comment_val:n.reaction.comment_val,like_val:n.reaction.like_val}),Object(p.jsx)(Y.a,{orientation:"horizontal",w:"100%",mt:5,mb:"5"})]})})},Q=c(212),T=c(201),U=Object(r.memo)((function(e){var t=e.title,c=e.body,n=Object(b.f)();return Object(p.jsxs)(Q.a,{status:"error",variant:"subtle",flexDirection:"column",alignItems:"center",textAlign:"center",height:"200px",children:[Object(p.jsx)(T.a,{onClick:function(){n.goBack()},ml:"auto",boxSize:"30px"}),Object(p.jsx)(Q.c,{boxSize:"40px",mr:0}),Object(p.jsx)(Q.d,{mt:4,mb:1,fontSize:"lg",children:t}),Object(p.jsx)(Q.b,{maxWidth:"sm",children:c})]})})),$=function(){return Object(p.jsx)(U,{title:"\u30a8\u30e9\u30fc",body:"\u30c7\u30fc\u30bf\u306e\u8aad\u307f\u8fbc\u307f\u306b\u5931\u6557\u3057\u307e\u3057\u305f\u3002"})},ee=function(){return Object(p.jsx)(U,{title:"\u30a8\u30e9\u30fc",body:"\u6295\u7a3f\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u3002"})},te=[{path:"/",exact:!0,children:Object(p.jsx)(K,{})},{path:"/follow_post",exact:!1,children:Object(p.jsx)(X,{})},{path:"/popular",exact:!1,children:Object(p.jsx)(q,{})},{path:"/post/:id",exact:!1,children:Object(p.jsx)(V,{})},{path:"/page404",exact:!1,children:Object(p.jsx)(ee,{})},{path:"*",exact:!1,children:Object(p.jsx)($,{})}],ce=c(215),ne=c(204),re=c(203),ae=Object(r.memo)((function(e){var t=e.display,c=e.onClick,n=e.ml,r=void 0===n?"none":n,a=e.my,i=void 0===a?"none":a,o=e.size,s=void 0===o?"md":o;return Object(p.jsx)(w.a,{bgGradient:"linear(to-tl, green, #c4de71)",color:"white","aria-label":"Open menu",icon:Object(p.jsx)(re.a,{}),size:s,ml:r,my:i,display:t,onClick:c})})),ie=function(e){var t=e.children;return Object(p.jsx)(h.a,{as:"h1",color:"gray.500",mr:"auto",mt:"8px",fontSize:{base:"18px",md:" 23px"},children:t})},oe=Object(r.memo)((function(e){var t=e.children,c=e.onOpen,n=Object(x.c)(m).topic,r=Object(b.f)();return Object(p.jsxs)(u.a,{w:{base:"100%",md:"80vh"},h:"100vh",borderX:{base:"none",md:"1px"},borderColor:{md:"gray.200"},flexDirection:"column",children:[Object(p.jsxs)(u.a,{as:"nav",w:"100%",borderBottom:"1px",borderColor:"gray.200",px:"3%",children:[Object(p.jsx)(O.a,{my:"1.5%",h:"5%",children:"recent"===n?Object(p.jsx)(ie,{children:"\u6700\u65b0\u306e\u6295\u7a3f"}):"follow"===n?Object(p.jsx)(ie,{children:"\u30d5\u30a9\u30ed\u30fc"}):"popular"===n?Object(p.jsx)(ie,{children:"\u4eba\u6c17\u306e\u6295\u7a3f"}):Object(p.jsxs)(u.a,{children:[Object(p.jsx)(w.a,{icon:Object(p.jsx)(ne.a,{}),"aria-label":"Back home",bg:"none",mr:2,fontSize:"xl",onClick:function(){r.push("/home")}}),Object(p.jsx)(ie,{children:"\u30b9\u30ec\u30c3\u30c9"})]})}),Object(p.jsx)(ae,{display:{base:"inline",md:"none"},onClick:c,ml:"auto",my:"auto",size:"sm"})]}),Object(p.jsx)(O.a,{h:"100vh",w:"100%",overflow:"auto",flexDirection:"column",align:"center",pt:"2%",children:t})]})})),se=c(64),je=c(135),le=Object(r.memo)((function(e){var t=e.children,c=(e.w,e.onClick);return Object(p.jsx)(je.a,{colorScheme:"gray",variant:"ghost",solid:"none",w:"w",_hover:{cursor:"pointer"},_focus:{boxShadow:"none"},onClick:c,children:t})})),be=function(e){var t=e.children,c=e.w;return Object(p.jsx)(je.a,{color:"white",bgGradient:"linear(to-tl, green, #c4de71)",w:c,_hover:{opacity:.8,cursor:"pointer"},children:t})},xe=Object(r.memo)((function(){var e=Object(b.f)();return Object(p.jsxs)(u.a,{flexFlow:"column",ml:"20px",alignItems:"start",pr:"80px",children:[Object(p.jsx)(se.b,{to:"/home",children:Object(p.jsx)(h.a,{as:"h1",fontSize:"40px",bgGradient:"linear(to-tl, green, #c4de71)",bgClip:"text",fontWeight:"bold",my:"20px",ml:"10px",children:"Bebop!"})}),Object(p.jsx)(le,{w:"100%",onClick:function(){e.push("/home")},children:"\u6700\u65b0\u306e\u6295\u7a3f"}),Object(p.jsx)(le,{w:"100%",onClick:function(){e.push("/home/follow_post")},children:"\u30d5\u30a9\u30ed\u30fc"}),Object(p.jsx)(le,{w:"100%",onClick:function(){e.push("/home/popular")},children:"\u4eba\u6c17\u306e\u6295\u7a3f"}),Object(p.jsx)(u.a,{mt:"300px",ml:"30px",children:Object(p.jsx)(be,{w:"130px",children:"\u6295\u7a3f"})}),Object(p.jsx)(O.a,{mt:"200px",w:"100%",ml:"15%",children:Object(p.jsx)(B,{img:"https://source.unsplash.com/brFsZ7qszSY",name:"\u4e2d\u6751 \u512a\u592a",user_title:"\u5b66\u751f",pl:"30px"})})]})})),Oe=c(214),me=c(43),ue=Object(r.memo)((function(e){var t=e.onClose,c=e.isOpen;return Object(p.jsx)(Oe.a,{placement:"left",size:"xs",onClose:t,isOpen:c,children:Object(p.jsx)(me.d,{children:Object(p.jsx)(Oe.b,{children:Object(p.jsx)(me.b,{p:0,bg:"gray.100",children:Object(p.jsx)(xe,{})})})})})})),de=Object(r.memo)((function(e){var t=e.children,c=e.isOpen,n=e.onClose;return Object(p.jsxs)(O.a,{children:[Object(p.jsx)(u.a,{spacing:"none",children:Object(p.jsxs)(u.a,{mx:"auto",w:"100%",children:[Object(p.jsx)(O.a,{w:"15%",h:"100vh",display:{base:"none",md:"inline"},pr:"auto",ml:"18%",children:Object(p.jsx)(xe,{})}),t]})}),Object(p.jsx)(ue,{isOpen:c,onClose:n})]})})),he=Object(r.memo)((function(e){var t=e.children,c=Object(ce.a)(),n=c.isOpen,r=c.onOpen,a=c.onClose;return Object(p.jsx)(O.a,{w:"100%",children:Object(p.jsx)(de,{isOpen:n,onClose:a,children:Object(p.jsx)(oe,{onOpen:r,children:t})})})})),pe=function(){return Object(p.jsx)("h1",{children:"Page404"})},fe=c(209),ge=function(){var e=Object(r.useState)(""),t=Object(W.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)(""),i=Object(W.a)(a,2),o=i[0],s=i[1],j=function(){var e=M().showMessage,t=Object(b.f)();return{login:Object(r.useCallback)((function(c,n){"yuta"===c&&"123"===n?(e({title:"\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3057\u305f",status:"success"}),t.push("/home")):e({title:"\u30e6\u30fc\u30b6\u30fc\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093",status:"error"})}),[])}}(),l=j.login;return Object(p.jsxs)(u.a,{bg:"white",borderRadius:{base:"none",sm:"10px"},px:"30px",py:"15px",shadow:{base:"none",sm:"md"},w:{base:"100%",sm:"400px"},h:{base:"100vh",sm:"500px"},mt:{base:"none",sm:"10%"},mx:"auto",textAlign:"center",flexDirection:"column",children:[Object(p.jsx)(h.a,{as:"h1",fontSize:{base:"40px",sm:"60px"},bgGradient:"linear(to-tl, green, #c4de71)",bgClip:"text",fontWeight:"bold",my:"20px",ml:"10px",children:"Bebop!"}),Object(p.jsx)(Y.a,{orientation:"horizontal",mt:5,mb:5}),Object(p.jsxs)(u.a,{flexDirection:"column",w:"100%",h:"100%",children:[Object(p.jsxs)(O.a,{my:"auto",mt:"10px",children:[Object(p.jsxs)(O.a,{textAlign:"start",children:[Object(p.jsx)(h.a,{ml:1,mb:1,fontSize:"sm",children:"\u30e1\u30fc\u30eb\u30a2\u30c9\u30ec\u30b9"}),Object(p.jsx)(fe.a,{type:"email",onChange:function(e){return n(e.target.value)},value:c,mb:5})]}),Object(p.jsxs)(O.a,{textAlign:"start",mt:"12px",children:[Object(p.jsx)(h.a,{ml:1,mb:1,fontSize:"sm",children:"\u30d1\u30b9\u30ef\u30fc\u30c9"}),Object(p.jsx)(fe.a,{type:"password",onChange:function(e){return s(e.target.value)},value:o})]})]}),Object(p.jsx)(je.a,{onClick:function(){l(c,o)},mt:"auto",mb:"30px",bgGradient:"linear(to-tl, green, #c4de71)",color:"white",disabled:""===c||""===o,children:"\u30ed\u30b0\u30a4\u30f3"})]})]})},ve=function(){return Object(p.jsxs)(b.c,{children:[Object(p.jsx)(b.a,{exact:!0,path:"/login",children:Object(p.jsx)(ge,{})}),Object(p.jsx)(b.a,{path:"/",render:function(e){var t=e.match.url;return Object(p.jsx)(b.c,{children:te.map((function(e){return Object(p.jsx)(b.a,{exact:e.exact,path:"".concat(t).concat(e.path),children:Object(p.jsx)(he,{children:e.children})},e.path)}))})}}),Object(p.jsx)(b.a,{path:"*",children:Object(p.jsx)(pe,{})})]})};var we=function(){return Object(p.jsx)("div",{className:"App",style:{height:"100%"},children:Object(p.jsx)(se.a,{children:Object(p.jsx)(x.a,{children:Object(p.jsx)(s.a,{theme:l,children:Object(p.jsx)(ve,{})})})})})};o.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(we,{})}),document.getElementById("root"))}},[[181,1,2]]]);
//# sourceMappingURL=main.c370eeeb.chunk.js.map