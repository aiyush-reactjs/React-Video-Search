(this["webpackJsonpyoutube-search"]=this["webpackJsonpyoutube-search"]||[]).push([[0],{25:function(e,t,c){},27:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(17),i=c.n(s),l=(c(25),c(13)),r=c.n(l),o=c(18),d=c(9),j=c(7),b=(c(27),c(0));function h(){return Object(b.jsxs)("nav",{children:[Object(b.jsx)("label",{className:"logo",children:"Apna Video"}),Object(b.jsx)(j.b,{className:"nav_item",to:"/",children:"Youtube Search Page"}),Object(b.jsx)(j.b,{className:"nav_item",to:"/download",children:"Video Downloader Page"})]})}c(33),c(34);function u(e){var t=e.location.state,c=t.id,n=t.title,a=t.channelName,s=t.icon,i=t.views,l=t.uploaded,r=t.url;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{}),Object(b.jsx)("div",{style:{marginTop:80,display:"flex",justifyContent:"center"},children:Object(b.jsx)("iframe",{width:"853",height:"400",src:"https://www.youtube.com/embed/"+c,frameBorder:"0",allow:"accelerometer autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),Object(b.jsx)("div",{style:{textAlign:"center"},children:Object(b.jsx)("h5",{style:{marginTop:20},children:n})}),Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginLeft:379,marginTop:10},children:[Object(b.jsxs)("p",{children:[i," Views "]}),Object(b.jsx)("p",{style:{marginLeft:20},children:l}),Object(b.jsx)("p",{style:{marginLeft:40,cursor:"pointer"},"data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:"Share"})]}),Object(b.jsx)("div",{class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(b.jsx)("div",{class:"modal-dialog",children:Object(b.jsxs)("div",{class:"modal-content",children:[Object(b.jsxs)("div",{class:"modal-header",children:[Object(b.jsx)("h5",{class:"modal-title",id:"exampleModalLabel",children:"Share Your Video"}),Object(b.jsx)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(b.jsx)("div",{class:"modal-body",children:Object(b.jsx)("p",{children:r})}),Object(b.jsx)("div",{class:"modal-footer",children:Object(b.jsx)("button",{onClick:function(){navigator.clipboard.writeText(r)},type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal",children:"Copy To Clipboard"})})]})})}),Object(b.jsx)("hr",{style:{width:850,marginLeft:325,marginTop:1}}),Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginLeft:350},children:[Object(b.jsx)("img",{style:{width:60,height:60,borderRadius:50},src:s,alt:"icon1"}),Object(b.jsx)("p",{style:{fontSize:20,marginTop:16,marginLeft:20},children:a})]})]})}function x(e){var t=e.thumbnails,c=e.url,n=e.title,a=e.icon,s=e.channelName,i=e.views,l=e.uploaded,r=e.duration,o=e.id;var d;return Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"card",style:{width:"22rem",marginTop:20,marginLeft:20},children:[Object(b.jsx)("div",{style:{float:"left",position:"absolute",right:10,bottom:"55%",zIndex:1e3,width:70,borderRadius:10,background:"#000",color:"#fff",fontWeight:"bold",textAlign:"center"},children:r}),Object(b.jsx)("img",{className:"card-img-top",src:t,alt:"Card image cap"}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(b.jsx)("img",{src:a,alt:"icon",style:{width:60,height:60,borderRadius:50}}),Object(b.jsxs)("p",{className:"card-title",style:{marginLeft:15,textOverflow:"ellipsis"},children:[n.slice(0,40)," ...."]})]}),Object(b.jsx)("p",{style:{marginLeft:75},className:"card-text",children:s}),Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"row"},children:[Object(b.jsxs)("p",{style:{marginLeft:55},children:[(d=i.toFixed(2),d>=1e6?d=d/1e6+"M":d>=1e3&&(d=d/1e3+"K"),d)," Views"]}),Object(b.jsx)("p",{style:{marginLeft:20},children:l})]}),Object(b.jsx)(j.b,{to:{pathname:"/player",state:{id:o,title:n,channelName:s,icon:a,views:i,uploaded:l,url:c}},className:"btn btn-primary",children:"Watch Video"}),Object(b.jsx)("button",{onClick:function(){},style:{marginLeft:20},className:"btn btn-primary",children:"Download Video"})]})]})})}c(35);function m(){return Object(b.jsx)("div",{style:{textAlign:"center"},children:Object(b.jsx)("div",{style:{marginTop:50},class:"spinner-border"})})}function p(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),i=Object(d.a)(s,2),l=i[0],j=i[1],h=Object(n.useState)(!1),u=Object(d.a)(h,2),p=u[0],O=u[1],f=Object(n.useState)(null),g=Object(d.a)(f,2),y=(g[0],g[1]),v=function(){var e=Object(o.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(!0),a(""),e.prev=2,e.next=5,fetch("https://simple-youtube-search.p.rapidapi.com/search?query=".concat(c,"&type=video&safesearch=false"),{method:"GET",headers:{"x-rapidapi-host":"simple-youtube-search.p.rapidapi.com","x-rapidapi-key":"3a716c54bemsh954b201a6bdb153p18a7a1jsne551f8fcc568"}});case 5:return t=e.sent,e.next=8,t.json();case 8:n=e.sent,t.ok&&(j(n.results),y(l.totalResults)),console.log(n),O(!1),console.log(l),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"search-container",children:Object(b.jsx)("input",{className:"input-text1",placeholder:"Search Here ...",type:"text",value:c,onChange:function(e){return a(e.target.value)},name:"search",onKeyUp:function(e){"Enter"===e.key&&v()}})}),p?Object(b.jsx)(m,{}):Object(b.jsx)("div",{className:"row",children:l.map((function(e){return Object(b.jsx)("div",{className:"col-md-4",children:Object(b.jsx)(x,{thumbnails:e.thumbnail.url,title:e.title,url:e.url,icon:e.channel.icon,channelName:e.channel.name,views:e.views,uploaded:e.uploadedAt,duration:e.duration_formatted,id:e.id})},e.id)}))})]})}function O(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{}),Object(b.jsx)("div",{children:Object(b.jsx)(p,{})})]})}var f=c(2);c(36);function g(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),c=t[0],a=t[1];return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(h,{}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{style:{textAlign:"center"},children:"Welcome To Video Downloader"}),Object(b.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:20},children:Object(b.jsx)("input",{autoFocus:!0,className:"url_field",type:"text",value:c,onChange:function(e){return a(e.target.value)},placeholder:"Enter Video URL"})}),Object(b.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:30},children:Object(b.jsx)("button",{onClick:function(){""==c&&alert("Please Enter a Valid URL")},className:"btn btn-primary",children:"Download Video"})})]})]})}c(37);function y(){return Object(b.jsx)("div",{style:{marginLeft:170,marginTop:30},children:Object(b.jsx)("section",{class:"page_404",children:Object(b.jsx)("div",{class:"container",children:Object(b.jsx)("div",{class:"row",children:Object(b.jsx)("div",{class:"col-sm-12 ",children:Object(b.jsxs)("div",{class:"col-sm-10 col-sm-offset-1  text-center",children:[Object(b.jsx)("div",{class:"four_zero_four_bg",children:Object(b.jsx)("h1",{class:"text-center ",children:"404"})}),Object(b.jsxs)("div",{class:"contant_box_404",children:[Object(b.jsx)("h3",{class:"h2",children:"Look like you're lost"}),Object(b.jsx)("p",{children:"the page you are looking for not avaible!"}),Object(b.jsx)(j.b,{to:"/",class:"link_404",children:"Go to Home"})]})]})})})})})})}var v=function(){return Object(b.jsx)(j.a,{children:Object(b.jsxs)(f.c,{children:[Object(b.jsx)(f.a,{exact:!0,path:"/",component:O}),Object(b.jsx)(f.a,{path:"/player",component:u}),Object(b.jsx)(f.a,{path:"/download",component:g}),Object(b.jsx)(f.a,{component:y})]})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,39)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),w()}},[[38,1,2]]]);
//# sourceMappingURL=main.a0065ed9.chunk.js.map