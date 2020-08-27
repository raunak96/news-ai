(this["webpackJsonpnews-app-ai"]=this["webpackJsonpnews-app-ai"]||[]).push([[0],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(9),o=a.n(r),l=a(56),c=(a(85),a(41)),s=a.n(c),m=a(168),d=a(160),g=a(161),u=a(162),p=a(163),h=a(164),f=a(165),b=a(158),w=Object(b.a)({media:{height:250},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderBottom:"10px solid white"},highlight:{backgroundColor:"rgba(0,0,0,0.1)"},activeCard:{borderBottom:"10px solid #22289a"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),x=function(e){var t=e.article,a=t.description,r=t.publishedAt,o=t.source,l=t.title,c=t.url,s=t.urlToImage,b=e.index,x=e.isActive,y=w(),v=Object(n.useRef)(null);return Object(n.useEffect)((function(){x&&window.scrollTo(0,v.current.offsetTop)}),[x]),i.a.createElement(m.a,{ref:v,className:"".concat(y.card," ").concat(x?y.activeCard:null)},i.a.createElement(d.a,{href:c,target:"_blank"},i.a.createElement(g.a,{className:y.media,image:s||"https://cdn.ymaws.com/www.itsmfusa.org/resource/resmgr/images/more_images/news-3.jpg"}),i.a.createElement("div",{className:y.details},i.a.createElement(u.a,{variant:"body2",color:"textSecondary",component:"h2"},new Date(r).toDateString()),i.a.createElement(u.a,{variant:"body2",color:"textSecondary",component:"h2"},o.name)),i.a.createElement(u.a,{className:"".concat(y.title," ").concat(x?y.highlight:null),gutterBottom:!0,variant:"h5"},l),i.a.createElement(p.a,null,i.a.createElement(u.a,{variant:"body2",color:"textSecondary",component:"p"},a))),i.a.createElement(h.a,{className:y.cardActions},i.a.createElement(f.a,{size:"small",color:"primary",href:c},"Learn More"),i.a.createElement(u.a,{variant:"h5",color:"textSecondary",component:"h2"},b+1)))},y=a(167),v=a(166),E=Object(b.a)({container:{padding:"0 5%",width:"100%",margin:0},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",width:"100%",minHeight:"50vh",padding:"10%",borderRadius:10,color:"white"},infoCard:{display:"flex",textAlign:"center"}}),C=function(e){var t=e.articles,a=e.activeArticle,n=E();return i.a.createElement(y.a,{in:!0},i.a.createElement(v.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},t.length?t.map((function(e,t){return i.a.createElement(v.a,{key:t,item:!0,xs:12,sm:6,md:4,lg:3,style:{display:"flex"}},i.a.createElement(x,{article:e,index:t,isActive:a===t}))})):[{color:"#00838f",title:"Latest News",text:"Give me the latest news/latest news"},{color:"#1565c0",title:"News by Categories",info:"Business, Entertainment, General, Health, Science, Sports, Technology",text:"Give me the latest Technology news"},{color:"#4527a0",title:"News by Terms",info:"Bitcoin, PlayStation 5, Smartphones, Donald Trump...",text:"What's up with Football/News about football"},{color:"#283593",title:"News by Sources",info:"CNN, The Hindu, The Times of India,BBC News, Time, IGN, Buzzfeed, ABC News...",text:"Give me the news from CNN/latest from CNN"}].map((function(e,t){return i.a.createElement(v.a,{key:t,item:!0,xs:12,sm:6,md:4,lg:3,className:n.infoCard},i.a.createElement("div",{className:n.card,style:{backgroundColor:e.color}},i.a.createElement(u.a,{variant:"h5"},e.title),e.info&&i.a.createElement(u.a,{variant:"subtitle2"},i.a.createElement("strong",null,e.title.split(" ")[2]),": ",i.a.createElement("br",null),e.info),i.a.createElement(u.a,{variant:"body2"},"Try saying: ",i.a.createElement("br",null)," ",i.a.createElement("strong",null,i.a.createElement("i",null,'"',e.text,'"')))))}))))},j=a(25),N=Object(b.a)((function(e){return{footer:Object(j.a)({textAlign:"center",position:"fixed",left:0,bottom:0,color:"black",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",height:"120px"},e.breakpoints.down("sm"),{display:"none"}),link:{textDecoration:"none",color:"rgba(21, 101, 192)"},image:{marginLeft:20},card:Object(j.a)({display:"flex",justifyContent:"center",alignItems:"center",width:"50%",padding:"3%",borderRadius:10,color:"white",backgroundColor:"rgba(21, 101, 192)",margin:"0 12px",textAlign:"center",height:"25vmin"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center",width:"100%",height:"initial","&:nth-of-type(1)":{marginBottom:"12px"}}),infoContainer:Object(j.a)({display:"flex",alignItems:"center",justifyContent:"space-around"},e.breakpoints.down("sm"),{flexDirection:"column"}),logoContainer:Object(j.a)({padding:"0 5%",display:"flex",justifyContent:"space-around",alignItems:"center",width:"100%"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center"}),alanLogo:Object(j.a)({height:"27vmin",borderRadius:"15%",padding:"0 5%",margin:"3% 0"},e.breakpoints.down("sm"),{height:"35vmin"})}})),k=a(74),O=a.n(k),T=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(-1),c=Object(l.a)(o,2),m=c[0],d=c[1],g=N();return Object(n.useEffect)((function(){s()({key:"78d18eba184a519eb055c5d0606861d12e956eca572e1d8b807a3e2338fdd0dc/stage",onCommand:function(e){var t=e.command,a=e.articles,n=e.number;switch(t){case"newHeadlines":r(a),d(-1);break;case"highlight":d((function(e){return e+1}));break;case"open":var i=parseInt(n),o=i||O()(n,{fuzzy:!0});o>a.length?s()().playText("This article number does not exist..Try Again!"):(window.open(a[o-1].url,"_blank"),s()().playText("Opening..."))}}})}),[]),i.a.createElement(n.Fragment,null,i.a.createElement("div",{className:g.logoContainer},i.a.createElement("img",{src:"https://alan.app/voice/images/previews/preview.jpg",className:g.alanLogo,alt:"logo"})),i.a.createElement(C,{articles:a,activeArticle:m}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,a){e.exports=a(143)},85:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.85e84cf0.chunk.js.map