(this["webpackJsonp@rclone/rclone-webui-react"]=this["webpackJsonp@rclone/rclone-webui-react"]||[]).push([[4],{342:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(299),s=a(523),c=a(300),o=a(291),i=a(29),u=a.n(i),d=a(396),m=a(84),p=a(360),b=a(35);function g(){return u.a.createPortal(r.a.createElement(d.a,{mode:"modal"}),document.getElementById(b.e))}class E extends r.a.Component{constructor(...e){super(...e),this.toggleCheckStatus=()=>{const e=this.props,t=e.checkStatus,a=e.enableCheckStatus;console.log(t,a),a(!t)}}componentDidMount(){this.props.getStatus(),this.refreshInterval=setInterval(()=>this.props.getStatus(),b.g)}componentWillUnmount(){clearInterval(this.refreshInterval)}render(){const e=this.props,t=e.isConnected,a=e.mode,n=e.checkStatus,i=localStorage.getItem(b.c),u=localStorage.getItem(b.h);return"card"===a?r.a.createElement(l.a,{className:"text-center "+(t?"card-accent-info":"card-accent-warning")},r.a.createElement(s.a,null,"Overview"),r.a.createElement(c.a,null,r.a.createElement(h,{checkStatus:n,connectivityStatus:t,ipAddress:i,userName:u}))):r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{type:"primary",onClick:this.toggleCheckStatus,className:t?"bg-info  d-none d-lg-block":"bg-warning d-none d-lg-block"}," ",n?t?"CONNECTED":"DISCONNECTED":"DISABLED"),r.a.createElement(g,null))}}function h({connectivityStatus:e,checkStatus:t,ipAddress:a,userName:n}){let l="";return l=t?e?"rClone Backend is connected and working as expected":"Cannot connect to rclone backend. There is a problem with connecting to {ipAddress}.":"Not monitoring connectivity status. Tap the icon in navbar to start.",r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,r.a.createElement("span",{className:"card-subtitle"},"Status: "," "),r.a.createElement("span",{className:"card-text"},l)),r.a.createElement("p",null,r.a.createElement("span",{className:"card-subtitle"},"Current IP Address: "," "),r.a.createElement("span",{className:"card-text"},a)),r.a.createElement("p",null,r.a.createElement("span",{className:"card-subtitle"},"Username: "," "),r.a.createElement("span",{className:"card-text"},n)))}E.defaultProps={mode:"card"};t.a=Object(m.b)(e=>({isConnected:e.status.isConnected,isDisabled:e.status.isDisabled,checkStatus:e.status.checkStatus}),{getStatus:p.c,enableCheckStatus:p.a})(E)},360:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return u})),a.d(t,"d",(function(){return d}));var n=a(63),r=a.n(n),l=a(87),s=a(2),c=a(282);const o=()=>function(){var e=Object(l.a)(r.a.mark((function e(t,a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a(),n.status.checkStatus&&Object(c.getStats)().then(e=>t({type:s.s,status:s.L,payload:e}),e=>t({type:s.s,status:s.J,payload:e}));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),i=e=>function(){var t=Object(l.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:s.r,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=()=>function(){var e=Object(l.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object(c.getCurrentBandwidthSetting)().then(e=>t({type:s.t,status:s.L,payload:e}),e=>t({type:s.t,status:s.J,payload:e}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=e=>function(){var t=Object(l.a)(r.a.mark((function t(a){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Object(c.setCurrentBandwidthSetting)(e).then(e=>a({type:s.M,status:s.L,payload:e}),e=>a({type:s.M,status:s.J,payload:e}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},396:function(e,t,a){"use strict";var n=a(275),r=a(0),l=a.n(r),s=a(299),c=a(523),o=a(300),i=a(7),u=a(277),d=a(10),m=a(4),p=a.n(m),b=a(24),g=a.n(b),E=a(27),h={children:p.a.node,bar:p.a.bool,multi:p.a.bool,tag:E.q,value:p.a.oneOfType([p.a.string,p.a.number]),min:p.a.oneOfType([p.a.string,p.a.number]),max:p.a.oneOfType([p.a.string,p.a.number]),animated:p.a.bool,striped:p.a.bool,color:p.a.string,className:p.a.string,barClassName:p.a.string,cssModule:p.a.object,style:p.a.object,barAriaValueText:p.a.string,barAriaLabelledBy:p.a.string},f=function(e){var t=e.children,a=e.className,n=e.barClassName,r=e.cssModule,s=e.value,c=e.min,o=e.max,m=e.animated,p=e.striped,b=e.color,h=e.bar,f=e.multi,v=e.tag,y=e.style,N=e.barAriaValueText,O=e.barAriaLabelledBy,C=Object(d.a)(e,["children","className","barClassName","cssModule","value","min","max","animated","striped","color","bar","multi","tag","style","barAriaValueText","barAriaLabelledBy"]),j=Object(E.s)(s)/Object(E.s)(o)*100,S=Object(E.m)(g()(a,"progress"),r),x=Object(E.m)(g()("progress-bar",h&&a||n,m?"progress-bar-animated":null,b?"bg-"+b:null,p||m?"progress-bar-striped":null),r),T=f?t:l.a.createElement("div",{className:x,style:Object(u.a)({},y,{width:j+"%"}),role:"progressbar","aria-valuenow":s,"aria-valuemin":c,"aria-valuemax":o,"aria-valuetext":N,"aria-labelledby":O,children:t});return h?T:l.a.createElement(v,Object(i.a)({},C,{className:S,children:T}))};f.propTypes=h,f.defaultProps={tag:"div",value:0,min:0,max:100,style:{}};var v=f,y=a(60),N=a(41),O=a(269),C=a(291),j=a(524),S=a(61),x=a(84),T=a(343),k=a(522),w=a(62),A=a(43),I=a(36);const B={tooltips:{enabled:!1,custom:k.CustomTooltips},maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0}}],xAxes:[{ticks:{display:!1}}]}};function D({job:e}){const t=e.name,a=e.eta,n=e.percentage,r=e.speed,i=e.speedAvg,u=e.size,d=e.bytes;return t&&!isNaN(r)?l.a.createElement(s.a,null,l.a.createElement(c.a,null,"Running Jobs"),l.a.createElement(o.a,null,l.a.createElement("p",null,t)," ",l.a.createElement(v,{value:n,className:"mb-2"},n," %")," ",l.a.createElement("p",null,l.a.createElement("strong",null,"Speed: "),Object(S.g)(r),"PS")," ",l.a.createElement("p",null,l.a.createElement("strong",null,"Average Speed: "),Object(S.g)(i),"PS")," ",l.a.createElement("p",null,l.a.createElement("strong",null,"Total transferred: "),Object(S.g)(d))," ",l.a.createElement("p",null,l.a.createElement("strong",null,"Size: "),Object(S.g)(u)),l.a.createElement("p",null,l.a.createElement("strong",null,"ETA: "),Object(S.m)(a)))):null}function P({job:e}){const t=e.name,a=e.percentage,n=e.speedAvg,r=e.size;return console.log("Job:"+e),l.a.createElement(l.a.Fragment,null,l.a.createElement(y.a,{className:"runningJobs"},r&&n?l.a.createElement(N.a,{lg:12,className:"itemName"}," ",function(e){if(e.length>30){return e.substr(0,30)+" ... "+e.substr(-5)}return e}(t)," "," ","(",Object(S.g)(r),") - ",Object(S.g)(n),"PS "):l.a.createElement(N.a,{lg:12},"Calculating")),l.a.createElement(y.a,null,l.a.createElement(N.a,{lg:12},l.a.createElement(v,{value:a,className:"mb-2"},a," %"))))}function L({stats:e}){const t=e.speed,a=e.bytes,n=e.checks,r=e.elapsedTime,i=e.deletes,u=e.errors,d=e.transfers,m=e.lastError;return l.a.createElement(s.a,null,l.a.createElement(c.a,null,l.a.createElement("strong",null,"Global Stats")),l.a.createElement(o.a,null,l.a.createElement("table",{className:"table"},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{className:"card-subtitle"},"Bytes Transferred:"),l.a.createElement("td",{className:"card-text"},Object(S.g)(a))),l.a.createElement("tr",null,l.a.createElement("td",{className:"card-subtitle"},"Average Speed:"),l.a.createElement("td",{className:"card-text"},Object(S.g)(t),"PS")),l.a.createElement("tr",null,l.a.createElement("td",{className:"card-subtitle"},"Checks:"),l.a.createElement("td",{className:"card-text"},n)),l.a.createElement("tr",null,l.a.createElement("td",{className:"card-subtitle"},"Deletes:"),l.a.createElement("td",{className:"card-text"},i)),l.a.createElement("tr",null,l.a.createElement("td",{className:"card-subtitle"},"Running since:"),l.a.createElement("td",{className:"card-text"},Object(S.m)(r))),l.a.createElement("tr",{className:u>0?"table-danger":""},l.a.createElement("td",{className:"card-subtitle"},"Errors:"),l.a.createElement("td",{className:"card-text"},u)),l.a.createElement("tr",null,l.a.createElement("td",{className:"card-subtitle"},"Transfers:"),l.a.createElement("td",{className:"card-text"},d)),l.a.createElement("tr",null,l.a.createElement("td",{className:"card-subtitle"},"Last Error:"),l.a.createElement("td",{className:"card-text"},m))))))}function H({transferring:e}){return void 0!==e?e.map((e,t)=>l.a.createElement(D,{key:e.name,job:e})):null}function M({transferring:e}){if(void 0!==e){const t=Object(S.i)(e,e=>e.group),a=[];return t.forEach((e,t)=>{a.push(l.a.createElement(R,{job:e,groupId:t,key:t}))}),a}return null}function R({job:e,groupId:t}){const a=Object(r.useState)(!1),i=Object(n.a)(a,2),u=i[0],d=i[1],m=Object(r.useState)(!0),p=Object(n.a)(m,2),b=p[0],g=p[1];return e?l.a.createElement(l.a.Fragment,null,t&&l.a.createElement(s.a,null,l.a.createElement(c.a,{onClick:()=>d(!u)},l.a.createElement(O.a,null,l.a.createElement(y.a,null,l.a.createElement(N.a,{sm:10},"Transferring ",e.length," file(s)"),l.a.createElement(N.a,{sm:2},l.a.createElement(C.a,{color:"light",disabled:!b,onClick:e=>((e,t)=>{if(e.stopPropagation(),t&&-1!==t.indexOf("/")){g(!1);const e=t.split("/")[1];w.a.post(A.a.stopJob,{jobid:e,_async:!0}).then((function(t){I.b.info("Job ".concat(e," stopped"))})).catch(t=>{I.b.error("Job ".concat(e," couldn't be stopped"))})}})(e,t),className:"btn-outline-danger btn-pill"},l.a.createElement("i",{className:"fa fa-close fa-sm"})))))),l.a.createElement(j.a,{isOpen:u},l.a.createElement(o.a,null,e.map((e,t)=>l.a.createElement(P,{key:e.name,job:e})))))):null}class J extends l.a.Component{constructor(e,t){super(e,t),this.toggleShowing=()=>{this.setState(e=>({isShowing:!e.isShowing}))},this.state={isShowing:!0}}render(){const e=this.props,t=e.jobs,a=e.isConnected,n=e.lineChartData,r=t.transferring,i=this.props.mode;return"full-status"===i?a?l.a.createElement(y.a,null,l.a.createElement(N.a,{sm:12,lg:6},l.a.createElement(L,{stats:t})),l.a.createElement(N.a,{sm:12,lg:6},l.a.createElement(s.a,null,l.a.createElement(c.a,null,"Speed"),l.a.createElement(o.a,null,l.a.createElement("div",{className:"chart-wrapper"},l.a.createElement(T.b,{data:n,options:B}))))),l.a.createElement(N.a,{sm:12,lg:4},l.a.createElement(H,{transferring:r}))):l.a.createElement("div",null,"Not connected to rclone."):"card"===i?a?l.a.createElement(M,{transferring:r}):l.a.createElement("div",null,"Not connected to rclone."):"modal"===i?r&&r.length>0?l.a.createElement(s.a,{className:"progress-modal d-none d-sm-block"},l.a.createElement(c.a,{onClick:()=>this.toggleShowing()},"Progress",l.a.createElement("div",{className:"card-header-actions"},l.a.createElement(C.a,{color:"link"},l.a.createElement("i",{className:"fa fa-close fa-lg"})))),l.a.createElement(o.a,{className:this.state.isShowing?"progress-modal-body":"d-none",style:{overflowY:"scroll"}},l.a.createElement(M,{transferring:r}))):null:void 0}}t.a=Object(x.b)((e,t)=>{const a=e.status.speed;let n={};if(a){let e=[],t=[],r=[];const l=a.length;a.slice(l-50,l-1).forEach((a,n)=>{e.push(Math.ceil(a.elapsedTime)),t.push(Object(S.c)(a.speed).toFixed(2)),r.push(Object(S.c)(a.speedAvg).toFixed(2))}),n={labels:e,datasets:[{label:"Speed (kbps)",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:t},{label:"Average Speed (kbps)",fill:!0,lineTension:.1,backgroundColor:"rgba(187,69,14,0.4)",borderColor:"rgb(192,76,58)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgb(187,69,14)",pointBackgroundColor:"#ff7459",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:r}]}}return{jobs:e.status.jobs,isConnected:e.status.isConnected,error:e.status.error,lineChartData:n}},{})(J)},522:function(e,t,a){!function(e){"use strict";function t(e){var t=this,a="above",n="below",r="chartjs-tooltip",l="no-transform",s="tooltip-body",c="tooltip-body-item",o="tooltip-body-item-color",i="tooltip-body-item-label",u="tooltip-body-item-value",d="tooltip-header",m="tooltip-header-item",p={DIV:"div",SPAN:"span",TOOLTIP:(this._chart.canvas.id||function(){var e=function(){return(65536*(1+Math.random())|0).toString(16)},a="_canvas-"+(e()+e());return t._chart.canvas.id=a,a}())+"-tooltip"},b=document.getElementById(p.TOOLTIP);if(b||((b=document.createElement("div")).id=p.TOOLTIP,b.className=r,this._chart.canvas.parentNode.appendChild(b)),0!==e.opacity){if(b.classList.remove(a,n,l),e.yAlign?b.classList.add(e.yAlign):b.classList.add(l),e.body){var g=e.title||[],E=document.createElement(p.DIV);E.className=d,g.forEach((function(e){var t=document.createElement(p.DIV);t.className=m,t.innerHTML=e,E.appendChild(t)}));var h=document.createElement(p.DIV);h.className=s,e.body.map((function(e){return e.lines})).forEach((function(t,a){var n=document.createElement(p.DIV);n.className=c;var r=e.labelColors[a],l=document.createElement(p.SPAN);if(l.className=o,l.style.backgroundColor=r.backgroundColor,n.appendChild(l),t[0].split(":").length>1){var s=document.createElement(p.SPAN);s.className=i,s.innerHTML=t[0].split(": ")[0],n.appendChild(s);var d=document.createElement(p.SPAN);d.className=u,d.innerHTML=t[0].split(": ").pop(),n.appendChild(d)}else{var m=document.createElement(p.SPAN);m.className=u,m.innerHTML=t[0],n.appendChild(m)}h.appendChild(n)})),b.innerHTML="",b.appendChild(E),b.appendChild(h)}var f=this._chart.canvas.getBoundingClientRect(),v=this._chart.canvas.offsetTop,y=this._chart.canvas.offsetLeft+e.caretX,N=v+e.caretY,O=e.width/2;y+O>f.width?y-=O:y<O&&(y+=O),b.style.opacity=1,b.style.left=y+"px",b.style.top=N+"px"}else b.style.opacity=0}var a=t;e.CustomTooltips=t,e.customTooltips=a,Object.defineProperty(e,"__esModule",{value:!0})}(t)},524:function(e,t,a){"use strict";var n,r=a(7),l=a(10),s=a(273),c=a(16),o=a(277),i=a(0),u=a.n(i),d=a(4),m=a.n(d),p=a(24),b=a.n(p),g=a(301),E=a(27),h=Object(o.a)({},g.Transition.propTypes,{isOpen:m.a.bool,children:m.a.oneOfType([m.a.arrayOf(m.a.node),m.a.node]),tag:E.q,className:m.a.node,navbar:m.a.bool,cssModule:m.a.object,innerRef:m.a.oneOfType([m.a.func,m.a.string,m.a.object])}),f=Object(o.a)({},g.Transition.defaultProps,{isOpen:!1,appear:!1,enter:!0,exit:!0,tag:"div",timeout:E.e.Collapse}),v=((n={})[E.d.ENTERING]="collapsing",n[E.d.ENTERED]="collapse show",n[E.d.EXITING]="collapsing",n[E.d.EXITED]="collapse",n);function y(e){return e.scrollHeight}var N=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={height:null},["onEntering","onEntered","onExit","onExiting","onExited"].forEach((function(e){a[e]=a[e].bind(Object(s.a)(a))})),a}Object(c.a)(t,e);var a=t.prototype;return a.onEntering=function(e,t){this.setState({height:y(e)}),this.props.onEntering(e,t)},a.onEntered=function(e,t){this.setState({height:null}),this.props.onEntered(e,t)},a.onExit=function(e){this.setState({height:y(e)}),this.props.onExit(e)},a.onExiting=function(e){e.offsetHeight;this.setState({height:0}),this.props.onExiting(e)},a.onExited=function(e){this.setState({height:null}),this.props.onExited(e)},a.render=function(){var e=this,t=this.props,a=t.tag,n=t.isOpen,s=t.className,c=t.navbar,i=t.cssModule,d=t.children,m=(t.innerRef,Object(l.a)(t,["tag","isOpen","className","navbar","cssModule","children","innerRef"])),p=this.state.height,h=Object(E.o)(m,E.c),f=Object(E.n)(m,E.c);return u.a.createElement(g.Transition,Object(r.a)({},h,{in:n,onEntering:this.onEntering,onEntered:this.onEntered,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}),(function(t){var n=function(e){return v[e]||"collapse"}(t),l=Object(E.m)(b()(s,n,c&&"navbar-collapse"),i),m=null===p?null:{height:p};return u.a.createElement(a,Object(r.a)({},f,{style:Object(o.a)({},f.style,{},m),className:l,ref:e.props.innerRef}),d)}))},t}(i.Component);N.propTypes=h,N.defaultProps=f,t.a=N}}]);
//# sourceMappingURL=4.7918f8e2.chunk.js.map