(this["webpackJsonpthe-app"]=this["webpackJsonpthe-app"]||[]).push([[0],{16:function(e,t,c){},30:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(25),i=c.n(s),l=(c(30),c(13)),r=c(2),o=(c(16),c(0));var A=function(){var e=Object(r.f)();return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("div",{className:"Home-title",children:Object(o.jsx)("h1",{children:"theAPP"})}),Object(o.jsx)("div",{className:"Home-menu",children:Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsx)("button",{className:"Menu-button",onClick:function(){e("/ToDoList")},children:"To-Do List"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{})]})})]})},u=c(3),b=c(6),d=c(8),j=c.n(d),p=c(14),O=c(7),g=c.n(O),h=function(){var e=Object(p.a)(j.a.mark((function e(t,c){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post("https://r-productivity-app.herokuapp.com//api/insert",{indexCol:t,listId:c});case 2:return n=e.sent,e.abrupt("return",n.data.insertId);case 4:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),f=function(){var e=Object(p.a)(j.a.mark((function e(t,c,n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.delete("https://r-productivity-app.herokuapp.com//api/delete/".concat(t));case 2:return e.next=4,g.a.put("https://r-productivity-app.herokuapp.com//api/update/decrementIndexes",{index:c,listId:n});case 4:case"end":return e.stop()}}),e)})));return function(t,c,n){return e.apply(this,arguments)}}(),m=function(){var e=Object(p.a)(j.a.mark((function e(t,c){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.put("https://r-productivity-app.herokuapp.com//api/update/task",{id:t,task:c});case 2:e.sent;case 3:case"end":return e.stop()}}),e)})));return function(t,c){return e.apply(this,arguments)}}(),v=function(e,t,c,n){g.a.put("https://r-productivity-app.herokuapp.com//api/update/swapTaskIndex",{id1:e,index1:c,id2:t,index2:n})},x=(c(51),function(){var e=Object(r.f)();return Object(o.jsx)("div",{style:{padding:"30px"},children:Object(o.jsx)("button",{className:"Button",onClick:function(){e("/")},children:"Home"})})}),k=c.p+"static/media/garbage.f6ac573e.png",N="data:image/png;base64,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",w=(c(52),function(e){var t=e.todo,c=e.updateState,a=Object(n.useState)(t.isOpen),s=Object(b.a)(a,2),i=s[0],l=s[1],r=Object(n.useState)(""),A=Object(b.a)(r,2),u=A[0],d=A[1];Object(n.useEffect)((function(){l(t.isOpen)}),[t]);var j=function(e){switch(e){case"Up":c("moveUp",t.id,null,t.listId);break;case"Down":c("moveDown",t.id,null,t.listId);break;case"Left":c("moveLeft",t.id,null,t.listId);break;case"Right":c("moveRight",t.id,null,t.listId);break;default:console.log("rip")}l(!1)};return Object(o.jsx)("div",{className:"Todo",children:i?Object(o.jsxs)("div",{className:"Open-Card",children:[Object(o.jsxs)("div",{style:{display:"flex"},children:[Object(o.jsxs)("div",{className:"Arrows",children:[Object(o.jsx)("button",{className:"Move-Up",onClick:function(e){return j("Up")},children:Object(o.jsx)("img",{className:"Up-Arrow",src:N,alt:"move up"})}),Object(o.jsx)("button",{className:"Move-Down",onClick:function(e){return j("Down")},children:Object(o.jsx)("img",{className:"Arrow",src:N,alt:"move down"})})]}),Object(o.jsx)("input",{type:"text",className:"Update-Task",id:t.id,onChange:function(e){d(e.target.value)},onKeyUp:function(e){var n;"Enter"===e.key&&(n=u,m(t.id,n),c("update",t.id,n,t.listId),d(""),l(!1))},onClick:function(e){d(e.target.value)},defaultValue:t.task})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{className:"Move-Left",onClick:function(e){return j("Left")},children:Object(o.jsx)("img",{className:"Left-Arrow",src:N,alt:"move left",height:35})}),Object(o.jsx)("button",{className:"Move-Right",onClick:function(e){return j("Right")},children:Object(o.jsx)("img",{className:"Right-Arrow",src:N,alt:"move right",height:35})}),Object(o.jsx)("button",{className:"Delete-Task",onClick:function(){c("delete",t.id,t.indexCol,t.listId),l(!1),d("")},children:Object(o.jsx)("img",{src:k,alt:"delete",height:30})})]})]}):Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:"".concat(null==t.task?"Empty-Card":"Closed-Card"),onClick:function(e){return l(!0)},children:null==t.task?"Untitled":t.task})})})}),B=function(e){var t=e.data,c=e.updateState,n=function(e,t,n,a){c(e,t,n,a)};return Object(o.jsx)("div",{children:t.map((function(e){return Object(o.jsx)(w,{todo:e,updateState:n})}))})},z=function(e){var t=e.listId,c=e.listName,n=e.data,a=e.updateState;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:"Subtitle",children:c}),Object(o.jsx)(B,{data:n,updateState:function(e,t,c,n){a(e,t,c,n)}}),Object(o.jsx)("button",{className:"Add-Task",onClick:function(){a("add",null,null,t)},children:"+"})]})},I=(c(53),function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),i=Object(b.a)(s,2),l=i[0],r=i[1],A=Object(n.useState)([]),d=Object(b.a)(A,2),j=d[0],p=d[1];Object(n.useEffect)((function(){g.a.get("https://r-productivity-app.herokuapp.com//api/get/all").then((function(e){console.log(e);for(var t=e.data,c=[],n=[],s=[],i=0;i<t.length;i++)switch(t[i].listId){case 1:c.push(t[i]);break;case 2:n.push(t[i]);break;case 3:s.push(t[i]);break;default:console.log("rip")}a(O(c)),r(O(n)),p(O(s))})).catch((function(e){return console.log(e)}))}),[]);var O=function(e){return e.sort((function(e,t){return e.indexCol-t.indexCol}))},m=function(e,t,n){var s=[];switch(console.log(n),n){case 1:s=Object(u.a)(c);break;case 2:s=Object(u.a)(l);break;case 3:s=Object(u.a)(j);break;default:console.log("rip")}for(var i=-1,o=0;o<s.length;o++)s[o].id===e&&(i=o);var A=s[i];if("moveUp"===t)0===i?console.log("first element!"):(console.log(s),v(s[i].id,s[i-1].id,i,i-1),s[i]=s[i-1],s[i-1]=A,s[i].indexCol--,s[i-1].indexCol++,s[i].isOpen=!1,s[i-1].isOpen=!1);else if(i===s.length-1)console.log("last element!");else{v(s[i].id,s[i+1].id,i,i+1),s[i]=s[i+1],s[i+1]=A,s[i].indexCol++,s[i+1].indexCol--,console.log(s);for(var b=0;b<s.length;b++)s[b].isOpen=!1;console.log(s)}switch(n){case 1:a(s);break;case 2:r(s);break;case 3:p(s);break;default:console.log("rip")}},k=function(e,t,n){var a=!0,s=[];switch(n){case 1:if("moveLeft"===t){console.log("no such thing as list 0!"),a=!1;break}s=Object(u.a)(c);break;case 2:s=Object(u.a)(l);break;case 3:if("moveRight"===t){console.log("no such thing as list 4!"),a=!1;break}s=Object(u.a)(j);break;default:console.log("rip")}if(a){var i=n;"moveLeft"===t?i--:i++;var r=s.findIndex((function(t){return t.id===e})),o=s[r];s.splice(r,1);for(var A=r;A<s.length;A++)s[A].indexCol--;var b=w(i);if(o.listId=i,function(e,t,c,n,a){console.log("bruh"),g.a.put("https://r-productivity-app.herokuapp.com//api/update/listId",{id:e,index:t,listId:c,newListId:n,newListLength:a})}(e,r,n,i,b.length),r>b.length-1)o.indexCol=b.length,b.push(o);else{for(var d=r;d<b.length;d++)b[d].indexCol++;b.splice(r,0,o)}for(var p=0;p<s.length;p++)s[p].isOpen=!1;for(var O=0;O<b.length;O++)b[O].isOpen=!1;B(n,s),B(i,b)}},N=function(e,t,n,s){switch(console.log(e,t,n,s),e){case"add":!function(e){var t=0,n=[];switch(e){case 1:t=c.length,n=Object(u.a)(c);break;case 2:t=l.length,n=Object(u.a)(l);break;case 3:t=j.length,n=Object(u.a)(j);break;default:console.log("rip")}console.log("index: "+t+" list: "+e),h(t,e).then((function(c){console.log(c);var s=[].concat(Object(u.a)(n),[{id:c,task:null,description:null,indexCol:t,listId:e,isOpen:!0}]);switch(e){case 1:a(s);break;case 2:r(s);break;case 3:p(s);break;default:console.log("rip")}})).catch((function(e){return console.log(e)}))}(s);break;case"update":!function(e,t,c){var n=w(c),a=n.findIndex((function(t){return t.id===e}));n[a].task=t,B(c,n)}(t,n,s);break;case"delete":!function(e,t,n){console.log("id: "+e+" index: "+t+" listId: "+n),f(e,t,n);var a=[];switch(n){case 1:a=Object(u.a)(c);break;case 2:a=Object(u.a)(l);break;case 3:a=Object(u.a)(j);break;default:console.log("rip")}a=Object(u.a)(a.filter((function(t){return t.id!==e}))),console.log(a[0]);for(var s=0;s<a.length;s++)a[s].indexCol>t&&a[s].indexCol--;B(n,a)}(t,n,s);break;case"moveUp":m(t,"moveUp",s);break;case"moveDown":m(t,"moveDown",s);break;case"moveLeft":k(t,"moveLeft",s);break;case"moveRight":k(t,"moveRight",s);break;default:console.log("rip")}},w=function(e){var t=[];switch(e){case 1:t=Object(u.a)(c);break;case 2:t=Object(u.a)(l);break;case 3:t=Object(u.a)(j);break;default:console.log("rip")}return t},B=function(e,t){switch(e){case 1:a(t);break;case 2:r(t);break;case 3:p(t);break;default:console.log("rip")}};return Object(o.jsxs)("div",{children:[Object(o.jsx)(x,{}),Object(o.jsx)("div",{className:"Header",children:Object(o.jsx)("h1",{className:"Title",style:{padding:0},children:"the To-Do List"})}),Object(o.jsx)("button",{onClick:function(e){return console.log(c)},children:"1"}),Object(o.jsx)("button",{onClick:function(e){return console.log(l)},children:"2"}),Object(o.jsx)("button",{onClick:function(e){return console.log(j)},children:"3"}),Object(o.jsxs)("div",{className:"To-Do-Lists",children:[Object(o.jsx)("div",{children:Object(o.jsx)(z,{listId:1,listName:"TO COMPLETE",data:c,updateState:N})}),Object(o.jsx)("div",{children:Object(o.jsx)(z,{listId:2,listName:"FOR TODAY",data:l,updateState:N})}),Object(o.jsx)("div",{children:Object(o.jsx)(z,{listId:3,listName:"COMPLETED",data:j,updateState:N})})]})]})}),D=function(){return Object(o.jsx)("div",{className:"Error-page",children:Object(o.jsx)("h1",{className:"Error-message",children:"This page does not exist!"})})};var C=function(){return Object(o.jsx)(l.a,{children:Object(o.jsxs)(r.c,{children:[Object(o.jsx)(r.a,{path:"/",element:Object(o.jsx)(A,{})}),Object(o.jsx)(r.a,{path:"/toDoList",element:Object(o.jsx)(I,{})}),Object(o.jsx)(r.a,{path:"*",element:Object(o.jsx)(D,{})})]})})};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(C,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.bc4949ed.chunk.js.map