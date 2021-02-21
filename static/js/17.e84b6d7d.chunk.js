(this["webpackJsonp@rclone/rclone-webui-react"]=this["webpackJsonp@rclone/rclone-webui-react"]||[]).push([[17],{276:function(e,t,a){"use strict";var n=a(4);n.oneOfType([n.shape({Features:n.object.isRequired,Hashes:n.array.isRequired,Name:n.string.isRequired,Precision:n.number.isRequired,String:n.string.isRequired}),n.object]),n.shape({remoteName:n.string.isRequired,remotePath:n.string.isRequired}),n.string,n.bool,n.bool,n.shape({Path:n.string.isRequired,Name:n.string.isRequired,Size:n.number,MimeType:n.string,ModTime:n.string.isRequired,IsDir:n.bool.isRequired}),n.shape({rate:n.string.isRequired})},285:function(e,t,a){"use strict";var n=a(7),s=a(10),i=a(273),r=a(16),o=a(0),l=a.n(o),c=a(4),d=a.n(c),u=a(24),h=a.n(u),f=a(27),p={children:d.a.node,type:d.a.string,size:d.a.string,bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:f.q,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(a)),a.focus=a.focus.bind(Object(i.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,i=e.type,r=e.bsSize,o=e.valid,c=e.invalid,d=e.tag,u=e.addon,p=e.plaintext,b=e.innerRef,m=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(i)>-1,w=new RegExp("\\D","g"),v=d||("select"===i||"textarea"===i?i:"input"),j="form-control";p?(j+="-plaintext",v=d||"input"):"file"===i?j+="-file":"range"===i?j+="-range":g&&(j=u?null:"form-check-input"),m.size&&w.test(m.size)&&(Object(f.t)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),r=m.size,delete m.size);var E=Object(f.m)(h()(t,c&&"is-invalid",o&&"is-valid",!!r&&"form-control-"+r,j),a);return("input"===v||d&&"function"===typeof d)&&(m.type=i),m.children&&!p&&"select"!==i&&"string"===typeof v&&"select"!==v&&(Object(f.t)('Input with a type of "'+i+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete m.children),l.a.createElement(v,Object(n.a)({},m,{ref:b,className:E,"aria-invalid":c}))},t}(l.a.Component);b.propTypes=p,b.defaultProps={type:"text"},t.a=b},289:function(e,t,a){"use strict";var n=a(7),s=a(10),i=a(273),r=a(16),o=a(0),l=a.n(o),c=a(4),d=a.n(c),u=a(24),h=a.n(u),f=a(27),p={children:d.a.node,inline:d.a.bool,tag:f.q,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(a)),a.submit=a.submit.bind(Object(i.a)(a)),a}Object(r.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,i=e.inline,r=e.tag,o=e.innerRef,c=Object(s.a)(e,["className","cssModule","inline","tag","innerRef"]),d=Object(f.m)(h()(t,!!i&&"form-inline"),a);return l.a.createElement(r,Object(n.a)({},c,{ref:o,className:d}))},t}(o.Component);b.propTypes=p,b.defaultProps={tag:"form"},t.a=b},361:function(e,t,a){"use strict";var n=a(7),s=a(10),i=a(0),r=a.n(i),o=a(4),l=a.n(o),c=a(24),d=a.n(c),u=a(27),h={children:l.a.node,row:l.a.bool,check:l.a.bool,inline:l.a.bool,disabled:l.a.bool,tag:u.q,className:l.a.string,cssModule:l.a.object},f=function(e){var t=e.className,a=e.cssModule,i=e.row,o=e.disabled,l=e.check,c=e.inline,h=e.tag,f=Object(s.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),p=Object(u.m)(d()(t,!!i&&"row",l?"form-check":"form-group",!(!l||!c)&&"form-check-inline",!(!l||!o)&&"disabled"),a);return"fieldset"===h&&(f.disabled=o),r.a.createElement(h,Object(n.a)({},f,{className:p}))};f.propTypes=h,f.defaultProps={tag:"div"},t.a=f},362:function(e,t,a){"use strict";var n=a(7),s=a(10),i=a(0),r=a.n(i),o=a(4),l=a.n(o),c=a(24),d=a.n(c),u=a(27),h=l.a.oneOfType([l.a.number,l.a.string]),f=l.a.oneOfType([l.a.bool,l.a.string,l.a.number,l.a.shape({size:h,order:h,offset:h})]),p={children:l.a.node,hidden:l.a.bool,check:l.a.bool,size:l.a.string,for:l.a.string,tag:u.q,className:l.a.string,cssModule:l.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:l.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},m=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,i=e.hidden,o=e.widths,l=e.tag,c=e.check,h=e.size,f=e.for,p=Object(s.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),b=[];o.forEach((function(t,n){var s=e[t];if(delete p[t],s||""===s){var i,r=!n;if(Object(u.k)(s)){var o,l=r?"-":"-"+t+"-";i=m(r,t,s.size),b.push(Object(u.m)(d()(((o={})[i]=s.size||""===s.size,o["order"+l+s.order]=s.order||0===s.order,o["offset"+l+s.offset]=s.offset||0===s.offset,o))),a)}else i=m(r,t,s),b.push(i)}}));var g=Object(u.m)(d()(t,!!i&&"sr-only",!!c&&"form-check-label",!!h&&"col-form-label-"+h,b,!!b.length&&"col-form-label"),a);return r.a.createElement(l,Object(n.a)({htmlFor:f},p,{className:g}))};g.propTypes=p,g.defaultProps=b,t.a=g},363:function(e,t,a){"use strict";var n=a(7),s=a(10),i=a(0),r=a.n(i),o=a(4),l=a.n(o),c=a(24),d=a.n(c),u=a(27),h={children:l.a.node,tag:u.q,className:l.a.string,cssModule:l.a.object,valid:l.a.bool,tooltip:l.a.bool},f={tag:"div",valid:void 0},p=function(e){var t=e.className,a=e.cssModule,i=e.valid,o=e.tooltip,l=e.tag,c=Object(s.a)(e,["className","cssModule","valid","tooltip","tag"]),h=o?"tooltip":"feedback",f=Object(u.m)(d()(t,i?"valid-"+h:"invalid-"+h),a);return r.a.createElement(l,Object(n.a)({},c,{className:f}))};p.propTypes=h,p.defaultProps=f,t.a=p},618:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(60),r=a(41),o=a(342),l=a(396),c=a(61),d=a(36),u=a(299),h=a(523),f=a(300),p=a(289),b=a(361),m=a(362),g=a(285),w=a(363),v=a(291),j=a(84),E=a(360);a(276);class O extends s.a.Component{constructor(e,t){super(e,t),this.getBandwidth=()=>{(0,this.props.getBandwidth)()},this.setBandwidth=e=>{e.preventDefault();const t=this.state,a=t.bandwidthText;if(t.hasError)d.b.error("Please check the errors before submitting");else{const e=this.props.setBandwidth;a?(e(a),this.toggleShowChangeBandwidth()):e("0M")}},this.changeBandwidthInput=e=>{const t=e.target.value;let a=!1;if(""===t)a=!0;else if(t){const e=t.split(":");if(1===e.length)a=Object(c.q)(e[0]);else if(2===e.length){const t=Object(c.q)(e[0]),n=Object(c.q)(e[1]);a=t&&n}}this.setState({bandwidthText:t,hasError:!a})},this.toggleShowChangeBandwidth=()=>{this.setState(e=>({showChangeBandwidth:!e.showChangeBandwidth}))},this.state={bandwidthText:"",hasError:!1,showChangeBandwidth:!1}}componentDidMount(){this.getBandwidth()}render(){const e=this.state,t=e.bandwidthText,a=e.hasError,n=e.showChangeBandwidth,i=this.props.bandwidth;return s.a.createElement(u.a,null,s.a.createElement(h.a,null,"Bandwidth ",s.a.createElement("button",{className:"btn btn-white float-right",onClick:this.toggleShowChangeBandwidth},"Modify")),s.a.createElement(f.a,null,s.a.createElement("p",null,s.a.createElement("span",{className:"card-subtitle"},"Current Max speed: ","  "),s.a.createElement("span",{className:"card-text"},"off"!==i.rate?i.rate:"Unlimited")),s.a.createElement(p.a,{onSubmit:this.setBandwidth,className:n?"":"d-none"},s.a.createElement(b.a,{row:!0},s.a.createElement(m.a,{for:"bandwidthValue",sm:5},"Enter new max speed (upload:download)"),s.a.createElement(r.a,{sm:7},s.a.createElement(g.a,{type:"text",value:t,valid:!a,invalid:a,id:"bandwidthValue",onChange:this.changeBandwidthInput}),s.a.createElement(w.a,{valid:!0},"Keep empty to reset."),s.a.createElement(w.a,null,"The bandwidth should be of the form 1M|2M|1G|1K|1.1K etc. Can also be specified as (upload:download)"))),s.a.createElement(v.a,{className:"float-right",color:"success",type:"submit"},"Set"))))}}var N=Object(j.b)(e=>({isConnected:e.status.isConnected,bandwidth:e.status.bandwidth}),{getBandwidth:E.b,setBandwidth:E.d})(O),R=a(35);class y extends s.a.Component{render(){const e=this.props.checkStatus,t=localStorage.getItem(R.c);return s.a.createElement("div",{"data-test":"homeComponent"},s.a.createElement(i.a,null,s.a.createElement(r.a,{lg:6,sm:12},s.a.createElement(o.a,{ipAddress:t,mode:"card"})),s.a.createElement(r.a,{lg:6,sm:12},s.a.createElement(N,null))),s.a.createElement("h2",null,"Jobs"),e?s.a.createElement(l.a,{mode:"full-status"}):s.a.createElement("p",null,"Not Monitoring"))}}t.default=Object(j.b)(e=>({checkStatus:e.status.checkStatus}),{})(y)}}]);
//# sourceMappingURL=17.e84b6d7d.chunk.js.map