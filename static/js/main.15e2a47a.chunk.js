(this["webpackJsonptweetme-web"]=this["webpackJsonptweetme-web"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(6),r=n.n(s),o=(n(14),n.p+"static/media/logo.6ce24c58.svg"),i=(n(15),n(9)),l=n(3),u=n(2);function d(e,t,n,c){var a;c&&(a=JSON.stringify(c));var s=new XMLHttpRequest,r="http://127.0.0.1:8000/api".concat(t);s.responseType="json";var o=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var n=document.cookie.split(";"),c=0;c<n.length;c++){var a=n[c].trim();if(a.substring(0,e.length+1)===e+"="){t=decodeURIComponent(a.substring(e.length+1));break}}return t}("csrftoken");s.open(e,r),s.setRequestHeader("Content-Type","application/json"),o&&(s.setRequestHeader("X-Requested-With","XMLHttpRequest"),s.setRequestHeader("X-CSRFToken",o)),s.onload=function(){n(s.response,s.status)},s.onerror=function(e){console.log(e),n({message:"The request was an error"},400)},console.log(a),s.send(a)}var j=n(0);function b(e){var t=a.a.createRef(),n=e.didTweet,c=function(e,t){201===t?n(e):(console.log(e),alert("An error occured please try again "))};return Object(j.jsx)("div",{className:e.className,children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=t.current.value;d("POST","/tweets/create/",c,{content:n}),t.current.value=""},children:[Object(j.jsx)("textarea",{ref:t,required:!0,className:"form-control",name:"tweet"}),Object(j.jsx)("button",{className:"btn btn-primary my-3",children:"Tweet"})]})})}var m=n(8);function f(e){var t=e.tweet,n=e.action,c=e.didPerformACtion,a=t.likes?t.likes:0,s=e.className?e.className:"btn btn-primary btn-sm",r=n.display?n.display:"Action",o=function(e,t){console.log(e,t),200!==t&&201!==t||!c||c(e,t)},i="like"===n.type?"".concat(a," ").concat(r):r;return Object(j.jsx)("button",{className:s,onClick:function(e){e.preventDefault(),function(e,t,n){d("POST","/tweets/action",n,{id:e,action:t})}(t.id,n.type,o)},children:i})}function p(e){var t=e.tweet;return t.parent?Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-11 mx-auto p-3 border rounded",children:[Object(j.jsx)("p",{className:"mb-0 text-muted small",children:"Retweet"}),Object(j.jsx)(O,{className:" ",tweet:t.parent,hideActions:!0})]})}):null}function O(e){var t=e.tweet,n=e.didRetweet,s=e.hideActions,r=Object(c.useState)(e.tweet?e.tweet:null),o=Object(u.a)(r,2),i=o[0],l=o[1],d=e.className?e.className:"col-10 mx-auto col-md-6",b=window.location.pathname.match(Object(m.a)(/([0-9]+)/,{tweetid:1})),O=b?b.groups.tweetid:-1,w="".concat(t.id)==="".concat(O),h=function(e,t){200===t?l(e):201===t&&n&&n(e)};return Object(j.jsxs)("div",{className:d,children:[Object(j.jsxs)("div",{children:[" ",Object(j.jsxs)("p",{children:[t.id," - ",t.content]})]}),Object(j.jsx)(p,{tweet:t}),Object(j.jsxs)("div",{className:"btn btn-group",children:[i&&!0!==s&&Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)(f,{tweet:i,didPerformACtion:h,action:{type:"like",display:"Likes"}}),Object(j.jsx)(f,{tweet:i,didPerformACtion:h,action:{type:"unlike",display:"Unlike"}}),Object(j.jsx)(f,{tweet:i,didPerformACtion:h,action:{type:"retweet",display:"Retweet"}})]}),!0===w?null:Object(j.jsx)("button",{className:"btn btn-outline-primary btn-sm",onClick:function(e){e.preventDefault(),window.location.href="/".concat(t.id)},children:"View"})]})]})}function w(e){var t=Object(c.useState)([]),n=Object(u.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)([]),o=Object(u.a)(r,2),i=o[0],b=o[1],m=Object(c.useState)(!1),f=Object(u.a)(m,2),p=f[0],w=f[1];Object(c.useEffect)((function(){var t=Object(l.a)(e.newTweets.concat(a));t.length!==i.length&&b(t)}),[e.newTweets,a,i]),Object(c.useEffect)((function(){if(!1===p){!function(e,t){var n="/tweets/";e&&(n="/tweets/?username=".concat(e)),d("GET",n,t,null)}(e.username,(function(e,t){200===t?(s(e),w(!0)):alert("There was an error")}))}}),[a,p,w,e.username]);var h=function(e){var t=Object(l.a)(a);t.unshift(e),s(t);var n=Object(l.a)(i);n.unshift(e),b(n)};return i.map((function(e,t){return Object(j.jsx)(O,{tweet:e,didRetweet:h,className:"my-5 py-5 border bg-white text-dark"},"".concat(t,"-").concat(e.id))}))}function h(e){var t=Object(c.useState)([]),n=Object(u.a)(t,2),a=n[0],s=n[1],r="false"!==e.canTweet;return Object(j.jsxs)("div",{className:e.className,children:[!0===r&&Object(j.jsx)(b,{didTweet:function(e){var t=Object(l.a)(a);t.unshift(e),s(t)},className:"col-12 mb-3"}),Object(j.jsx)(w,Object(i.a)({newTweets:a},e))]})}function v(e){var t=e.tweetId,n=Object(c.useState)(!1),a=Object(u.a)(n,2),s=a[0],r=a[1],o=Object(c.useState)(null),i=Object(u.a)(o,2),l=i[0],b=i[1],m=function(e,t){200===t?b(e):alert("There was an error finding your tweet")};return Object(c.useEffect)((function(){!1===s&&(!function(e,t){d("GET","/tweets/".concat(e,"/"),t)}(t,m),r(!0))}),[t,s,r]),null===l?null:Object(j.jsx)(O,{tweet:l,className:e.className})}var x=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)("img",{src:o,className:"App-logo",alt:"logo"}),Object(j.jsxs)("p",{children:["Edit ",Object(j.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(j.jsx)("div",{children:Object(j.jsx)(h,{})}),Object(j.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))},N=document.getElementById("root");N&&r.a.render(Object(j.jsx)(x,{}),N);var y=a.a.createElement,k=document.getElementById("tweetme");k&&r.a.render(y(h,k.dataset),k),document.querySelectorAll(".tweetme-detail").forEach((function(e){r.a.render(y(v,e.dataset),e)})),g()}},[[17,1,2]]]);
//# sourceMappingURL=main.15e2a47a.chunk.js.map