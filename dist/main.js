!function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t,r){var o=r(1);"string"==typeof o&&(o=[[e.i,o,""]]);var n={insert:"head",singleton:!1};r(3)(o,n);o.locals&&(e.exports=o.locals)},function(e,t,r){(e.exports=r(2)(!1)).push([e.i,'body{margin:0px;box-sizing:border-box;font-family:"Montserrat", sans-serif}body #root{min-width:100vw;min-height:100vh;display:flex;justify-content:center;align-items:center}body #root #home-wrapper{max-width:600px;max-height:700px;width:100%;position:relative;background-color:blueviolet;border:5px solid whitesmoke;box-shadow:2px 2px 2px 2px grey;border-radius:25px;overflow:hidden;overflow-y:scroll}body #root #home-wrapper #menu-wrapper{background-color:#3c0174;border-radius:25px;height:80px;margin:15px;padding:10px;position:sticky;top:15px;z-index:2;overflow:hidden;animation:shrink 300ms ease-in-out}body #root #home-wrapper #menu-wrapper nav{display:flex;justify-content:space-between;align-items:flex-start}body #root #home-wrapper #menu-wrapper nav #burger-btn{cursor:pointer}body #root #home-wrapper #menu-wrapper nav .nav-left,body #root #home-wrapper #menu-wrapper nav .nav-right{display:flex;justify-content:space-between;align-items:center;font-size:20px;padding:5px 10px;color:white}body #root #home-wrapper #menu-wrapper nav #nav-status{margin-left:15px}body #root #home-wrapper #menu-wrapper #menu-content #todo-menu-header{display:flex;width:fit-content;border:2px solid white;border-radius:25px;color:white;font-size:20px;font-weight:bold;margin:20px auto}body #root #home-wrapper #menu-wrapper #menu-content #todo-menu-header div{padding:15px 30px}body #root #home-wrapper #menu-wrapper #menu-content #todo-menu-header .is-selected{background-color:blueviolet}body #root #home-wrapper #menu-wrapper #menu-content #projects-section header{display:flex;justify-content:space-between;align-items:center;color:white;padding:10px 20px}body #root #home-wrapper #menu-wrapper #menu-content #projects-section header #project-add-btn{width:30px;height:30px;display:flex;justify-content:center;align-items:center;border:2px solid white;border-radius:50%;background-color:transparent;color:white}body #root #home-wrapper #menu-wrapper #menu-content #projects-section header #project-add-btn:hover{background-color:white;color:#3c0174;cursor:pointer}body #root #home-wrapper #menu-wrapper #menu-content #projects-section #project-list{list-style:none;padding:0px;margin:0px;min-height:200px}body #root #home-wrapper #menu-wrapper #menu-content #projects-section #project-list li{color:white;font-size:18px;padding:15px 20px;margin:5px 0px;cursor:pointer;border:2px solid transparent}body #root #home-wrapper #menu-wrapper #menu-content #projects-section #project-list li:hover,body #root #home-wrapper #menu-wrapper #menu-content #projects-section #project-list .is-selected{border-color:white;border-radius:5px}body #root #home-wrapper .is-menu-expanded{padding-bottom:30px !important;height:auto !important;animation:grow 300ms ease-in-out !important}body #root #home-wrapper #main-card{width:80%;padding:10px 20px;margin:0px auto;background-color:honeydew;border-radius:5px}body #root #home-wrapper #main-card ul{list-style:none;padding:0px;margin:0px;min-height:400px}body #root #home-wrapper #main-card ul li{background-color:whitesmoke;font-size:18px;padding:15px 20px;margin:5px 0px;border:2px solid transparent;border-radius:5px;cursor:pointer}body #root #home-wrapper #main-card ul li:hover,body #root #home-wrapper #main-card ul .is-completed{border-color:blueviolet;border-radius:5px;text-decoration:line-through}body #root #home-wrapper #main-card ul .is-completed{border-color:transparent}body #root #home-wrapper #main-card .btn-wrapper{position:sticky;width:100%;display:flex;justify-content:center;bottom:20px}body #root #home-wrapper #main-card #add-todo-btn{width:60px;height:60px;font-size:20px;color:white;background-color:#3c0174;border:none;border-radius:100%;z-index:2}body #root #home-wrapper #main-card #add-todo-btn:hover{cursor:pointer}body #root #home-wrapper #main-card #add-todo-btn:active{border:2px solid;box-shadow:0px 0px 40px 7px darkslateblue}@media screen and (max-width: 600px){body #root{display:block}body #root #home-wrapper{height:100vh;background-color:blueviolet;border:none;box-shadow:none;border-radius:0px}}@keyframes grow{from{height:80px}to{height:350px}}@keyframes shrink{from{height:500px}to{height:60px}}\n',""])},function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",o=e[3];if(!o)return r;if(t&&"function"==typeof btoa){var n=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(d," */")),i=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot).concat(e," */")}));return[r].concat(i).concat([n]).join("\n")}var a,s,d;return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2],"{").concat(r,"}"):r})).join("")},t.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},n=0;n<this.length;n++){var i=this[n][0];null!=i&&(o[i]=!0)}for(var a=0;a<e.length;a++){var s=e[a];null!=s[0]&&o[s[0]]||(r&&!s[2]?s[2]=r:r&&(s[2]="(".concat(s[2],") and (").concat(r,")")),t.push(s))}},t}},function(e,t,r){"use strict";var o,n={},i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}();function s(e,t){for(var r=[],o={},n=0;n<e.length;n++){var i=e[n],a=t.base?i[0]+t.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):r.push(o[a]={id:a,parts:[s]})}return r}function d(e,t){for(var r=0;r<e.length;r++){var o=e[r],i=n[o.id],a=0;if(i){for(i.refs++;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(b(o.parts[a],t))}else{for(var s=[];a<o.parts.length;a++)s.push(b(o.parts[a],t));n[o.id]={id:o.id,refs:1,parts:s}}}}function c(e){var t=document.createElement("style");if(void 0===e.attributes.nonce){var o=r.nc;o&&(e.attributes.nonce=o)}if(Object.keys(e.attributes).forEach((function(r){t.setAttribute(r,e.attributes[r])})),"function"==typeof e.insert)e.insert(t);else{var n=a(e.insert||"head");if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}return t}var p,l=(p=[],function(e,t){return p[e]=t,p.filter(Boolean).join("\n")});function u(e,t,r,o){var n=r?"":o.css;if(e.styleSheet)e.styleSheet.cssText=l(t,n);else{var i=document.createTextNode(n),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function m(e,t,r){var o=r.css,n=r.media,i=r.sourceMap;if(n&&e.setAttribute("media",n),i&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var h=null,f=0;function b(e,t){var r,o,n;if(t.singleton){var i=f++;r=h||(h=c(t)),o=u.bind(null,r,i,!1),n=u.bind(null,r,i,!0)}else r=c(t),o=m.bind(null,r,t),n=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else n()}}e.exports=function(e,t){(t=t||{}).attributes="object"==typeof t.attributes?t.attributes:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i());var r=s(e,t);return d(r,t),function(e){for(var o=[],i=0;i<r.length;i++){var a=r[i],c=n[a.id];c&&(c.refs--,o.push(c))}e&&d(s(e,t),t);for(var p=0;p<o.length;p++){var l=o[p];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete n[l.id]}}}}},function(e,t,r){"use strict";r.r(t);r(0);var o=(()=>({current:{keys:[]},init(){localStorage.length&&this.getAllKeys().forEach(e=>{this.current[e]=this.get(e)})},set(e,t){-1===this.current.keys.indexOf(e)&&(this.current.keys.push(e),localStorage.setItem("keys",JSON.stringify(this.current.keys))),localStorage.setItem(e,JSON.stringify(t)),this.current[e]=this.get(e)},get:e=>JSON.parse(localStorage.getItem(e)),getAllKeys(){return this.current.keys=this.get("keys"),this.current.keys},reset(){localStorage.clear()}}))();var n=(e,t)=>`\n    <li id='project-${t}'\n     class='project-item \n     ${t===o.get("selectedProject")?"is-selected":""}'>\n        ${e}\n    </li>\n`;var i=()=>`\n    <div id='menu-content'>\n        <header id='todo-menu-header'>\n            <div name='past'>Past</div>\n            <div name='today' class='is-selected'>Today</div>\n            <div name='future'>Future</div>\n        </header>\n        <hr>\n        <section id='projects-section'>\n            <header>\n                <h3>Projects</h3>\n                <button id='project-add-btn'>\n                    <i class='material-icons'>\n                        add\n                    </i>\n                </button>\n            </header>\n            <ul id='project-list'>\n            ${o.get("projects").map((e,t)=>n(e.title,t)).join("")}\n            </ul>\n        </section>\n    </div>\n`;var a=()=>`\n    <div id='menu-wrapper'>\n        <nav id='navbar'>\n            <div class='nav-left'>\n                <a id='burger-btn'>\n                    <i class='material-icons'>\n                        menu\n                    </i>\n                </a>\n                <h3 id='nav-status'>\n                    ${o.get("projects")[o.get("selectedProject")].title}\n                <h3>\n            </div>\n            <div class='nav-right'>\n                <p id='remaining-todos'>\n                    0\n                    /\n                    ${o.get("projects")[o.get("selectedProject")].todos.length}\n                <p>\n            </div>\n        </nav>    \n    ${i()}\n    </div>\n`;var s=(e,t)=>`\n    <li\n     id='todo-${t}'\n     class='todo-items\n     ${e.isCompleted?"is-completed":""}'>${e.title}</li>\n`;var d=()=>`\n    <div id='main-card'>\n        <ul id='todo-list'>\n            ${o.get("projects")[o.get("selectedProject")].todos.map((e,t)=>s(e,t)).join("")}\n        </ul>\n        <div class="btn-wrapper">\n            <button id='add-todo-btn'>\n                <i class='material-icons'>\n                    add\n                </i>\n            </button>\n        </div>\n    </div>\n`;var c=(()=>{const e=document.getElementById("mc"),t=document.getElementById("nb");return{init(){t.innerHTML=a(),e.innerHTML=d()},refresh:{projects(){document.getElementById("project-list").innerHTML=o.get("projects").map((e,t)=>n(e.title,t)).join("")},todos(){document.getElementById("todo-list").innerHTML=o.get("projects")[o.get("selectedProject")].todos.map((e,t)=>s(e,t)).join("")},navStatus(){document.getElementById("nav-status").innerHTML=o.get("projects")[o.get("selectedProject")].title},navTodoRemaining(){document.getElementById("remaining-todos").innerHTML=`0 / \n        ${o.get("projects")[o.get("selectedProject")].todos.length}\n          `},all(){this.projects(),this.todos(),this.navStatus(),this.navTodoRemaining()}},set:{}}})();class p{constructor(e,t=!1){this.title=e,this.isCompleted=t}}class l{constructor(e,t=[]){this.title=e,this.todos=t}}var u=(()=>({init(){o.current.projects||(o.set("projects",[]),o.set("selectedProject",0),this.firstProject())},firstProject(){this.addProject("First Project"),this.selectProject(0).addTodo("First todo")},refreshProjects(){o.set("projects",o.current.projects)},selectProject(e){o.set("selectedProject",e);const t=this,r=o.current.projects[e];return{addTodo(e){r.todos.push(new p(e)),t.refreshProjects()},deleteTodo(e){r.todos.splice(e,1),t.refreshProjects()},toggleTodoCompleted(e){const o=r.todos[e].isCompleted;r.todos[e].isCompleted=!o,t.refreshProjects()},delete(){o.current.projects.splice(e,1),t.refreshProjects()}}},addProject(e){o.current.projects.push(new l(e)),this.refreshProjects()}}))();o.init(),u.init(),c.init();const m=document.getElementById("burger-btn"),h=document.getElementById("menu-wrapper"),f=document.getElementById("project-add-btn"),b=document.getElementById("add-todo-btn"),g=document.getElementById("todo-list"),v=document.getElementById("project-list");m.addEventListener("click",e=>{const t=h.className;h.className="is-menu-expanded"===t?"":"is-menu-expanded",e.preventDefault()}),f.addEventListener("click",e=>{u.addProject("title"),c.refresh.projects(),e.preventDefault()}),b.addEventListener("click",e=>{u.selectProject(o.get("selectedProject")).addTodo("want to buy milk"),c.refresh.todos(),c.refresh.navTodoRemaining(),e.preventDefault()}),v.addEventListener("click",({target:e})=>{const t=Number(e.id.split("-")[1]);u.selectProject(t),c.refresh.all()}),g.addEventListener("click",({target:e})=>{const t=Number(e.id.split("-")[1]);u.selectProject(o.get("selectedProject")).toggleTodoCompleted(t),c.refresh.todos()})}]);