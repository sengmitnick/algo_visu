(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[673],{6813:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[category]/[algorithm]/[filename]",function(){return c(5774)}])},9223:function(a,b,c){"use strict";c.d(b,{Sh:function(){return d},TE:function(){return e}});var d=function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];return b.filter(function(a){return a}).join(" ")},e=function(a,b){var c=a.x-b.x,d=a.y-b.y;return Math.sqrt(c*c+d*d)}},874:function(a,b,c){"use strict";c.d(b,{H6:function(){return A},iz:function(){return q},mH:function(){return u},ko:function(){return y},dg:function(){return F},hr:function(){return G}});var d=c(1500),e=c.n(d),f=c(6404),g=c(9951),h=c(4443),i=c(8465),j=c(9069),k=c(1527),l=c(959),m=c(9223),n=c(6933),o=c.n(n),p=function(a){(0,i.Z)(c,a);var b=(0,j.Z)(c);function c(a){var d;return(0,g.Z)(this,c),(d=b.call(this,a)).handleMouseDown=d.handleMouseDown.bind((0,f.Z)(d)),d.handleMouseMove=d.handleMouseMove.bind((0,f.Z)(d)),d.handleMouseUp=d.handleMouseUp.bind((0,f.Z)(d)),d}return(0,h.Z)(c,[{key:"handleMouseDown",value:function(a){this.target=a.target,document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp)}},{key:"handleMouseMove",value:function(a){var b=this.props.onResize;b&&b(this.target.parentElement,a.clientX,a.clientY)}},{key:"handleMouseUp",value:function(a){document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp)}},{key:"render",value:function(){var a=this.props,b=a.className,c=a.horizontal;return(0,k.jsx)("div",{className:(0,m.Sh)(o().divider,c?o().horizontal:o().vertical,b),onMouseDown:this.handleMouseDown})}}]),c}(l.Component),q=p,r=c(7471),s=c.n(r),t=function(a){(0,i.Z)(c,a);var b=(0,j.Z)(c);function c(){return(0,g.Z)(this,c),b.apply(this,arguments)}return(0,h.Z)(c,[{key:"render",value:function(){var a=this.props,b=a.className,c=a.children;return(0,k.jsx)("span",{className:(0,m.Sh)(s().ellipsis,b),children:c})}}]),c}(l.Component),u=t,v=c(2435),w=c.n(v),x=function(a){(0,i.Z)(c,a);var b=(0,j.Z)(c);function c(a){var d;return(0,g.Z)(this,c),(d=b.call(this,a)).handleMouseDown=d.handleMouseDown.bind((0,f.Z)(d)),d.handleMouseMove=d.handleMouseMove.bind((0,f.Z)(d)),d.handleMouseUp=d.handleMouseUp.bind((0,f.Z)(d)),d}return(0,h.Z)(c,[{key:"handleMouseDown",value:function(a){this.target=a.target,this.handleMouseMove(a),document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp)}},{key:"handleMouseMove",value:function(a){var b=this.target.getBoundingClientRect().left,c=this.target.offsetWidth,d=this.props.onChangeProgress,e=(a.clientX-b)/c;d&&d(e)}},{key:"handleMouseUp",value:function(a){document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp)}},{key:"render",value:function(){var a=this.props,b=a.className,c=a.total,d=a.current;return(0,k.jsxs)("div",{className:(0,m.Sh)(w().progress_bar,b),onMouseDown:this.handleMouseDown,children:[(0,k.jsx)("div",{className:w().active,style:{width:"".concat(d/c*100,"%")}}),(0,k.jsxs)("div",{className:w().label,children:[(0,k.jsx)("span",{className:w().current,children:d})," / ",c]})]})}}]),c}(l.Component),y=x,z=function(a){(0,i.Z)(c,a);var b=(0,j.Z)(c);function c(a){var d;return(0,g.Z)(this,c),(d=b.call(this,a)).handleError=d.handleError.bind((0,f.Z)(d)),d}return c.prototype.handleError=function(a){if(a.response){var b=a.response,c=b.data,d=b.statusText,e=c?"string"==typeof c?c:JSON.stringify(c):d;console.error(e)}else console.error(a.message)},c}(l.Component),A=z,B=c(9980),C=c(4513),D=c.n(C),E=function(a){(0,i.Z)(c,a);var b=(0,j.Z)(c);function c(){return(0,g.Z)(this,c),b.apply(this,arguments)}return(0,h.Z)(c,[{key:"handleResize",value:function(a,b,c,d,e){var f=this.props,g=f.horizontal,h=f.visibles,i=f.onChangeWeights,j=(0,B.Z)(this.props.weights),k=c.getBoundingClientRect(),l=k.left,m=k.top,n=c.parentElement,o=n.offsetWidth,p=n.offsetHeight,q=g?d-l:e-m,r=g?o:p,s=0,t=0;j.forEach(function(a,c){(!h||h[c])&&(s+=a,c<b&&(t+=a))});var u=q/r*s,v=u-t;v=Math.max(v,-j[a]),v=Math.min(v,j[b]),j[a]+=v,j[b]-=v,i(j)}},{key:"render",value:function(){var a=this,b=this.props,c=b.className,d=b.children,e=b.horizontal,f=b.weights,g=b.visibles,h=[],i=-1,j=f.filter(function(a,b){return!g||g[b]}).reduce(function(a,b){return a+b},0);return d.forEach(function(b,c){if(!g||g[c]){if(~i){var d=i;h.push((0,k.jsx)(q,{horizontal:e,onResize:function(b,e,f){return a.handleResize(d,c,b,e,f)}},"divider-".concat(c)))}h.push((0,k.jsx)("div",{className:(0,m.Sh)(D().wrapper),style:{flexGrow:f[c]/j},children:b},c)),i=c}}),(0,k.jsx)("div",{className:(0,m.Sh)(D().resizable_container,e&&D().horizontal,c),children:h})}}]),c}(l.Component),F=E,G=e()(function(){return Promise.all([c.e(964),c.e(205),c.e(703),c.e(777)]).then(c.bind(c,9777))},{loadableGenerated:{webpack:function(){return[9777]}},ssr:!1})},5774:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSP":function(){return C},default:function(){return D}});var d=c(9452),e=c(6262),f=c(827),g=c.n(f),h=c(1527),i=c(6341),j=c(1942),k=c(1027),l=c(4337),m=c(365),n=c.n(m),o=n().create(),p={getCategories:function(){return o.get("/api/algorithms")},getAlgorithm:function(a,b,c){return o.get("/api/algorithms/".concat(a,"/").concat(b,"/").concat(c))}},q={js:function(a,b){var c=a.code;return new Promise(function(a,d){var e=new Worker("/tracers/js/worker.js");b&&b.promise.then(function(a){e.terminate(),d(a)}),e.onmessage=function(b){e.terminate(),a(b.data)},e.onerror=function(a){e.terminate(),d(a)},e.postMessage(c)})}},r=c(959),s=c(874),t=c(8289),u=c(3455),v=c(8389),w=c(4226),x=c(7260),y=c(9594),z=c(3628),A=c(4678),B=function(){var a=(0,i.useRouter)(),b=(0,r.useState)(2),c=b[0],f=b[1],m=(0,e.Z)((0,j.Z)(0),3),o=m[0],B=m[1],C=m[2],D=(0,r.useState)([]),E=D[0],F=D[1],G=(0,e.Z)((0,k.Z)(),2),H=G[0],I=G[1].set,J=(0,r.useRef)(),K=(0,r.useRef)(),L=a.query,M=L.category,N=L.algorithm,O=L.filename,P=(0,l.Z)((0,d.Z)(g().mark(function a(){var b,c,d;return g().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return Q(),K.current&&K.current.cancel(),K.current=n().CancelToken.source(),a.next=5,p.getAlgorithm(M,N,O);case 5:return c=(b=a.sent).data.file,a.next=9,q.js({code:c},K.current.token);case 9:return Q(d=a.sent),setTimeout(V,66),a.abrupt("return",d);case 13:case"end":return a.stop()}},a)})),{manual:!0}),Q=function(){for(var a=arguments.length>0&& void 0!==arguments[0]?arguments[0]:[],b=[{commands:[],lineNumber:void 0},];a.length;){var c=a.shift(),d=c.key,f=c.method,g=c.args;if(null===d&&"delay"===f){var h=(0,e.Z)(g,1)[0];b[b.length-1].lineNumber=h,b.push({commands:[],lineNumber:void 0})}else b[b.length-1].commands.push(c)}F(b),B(0),U()},R=function(a){return 1<=a&&a<=E.length},S=function(){U();var a=C()-1;return!!R(a)&&(B(a),!0)},T=function(){var a=arguments.length>0&& void 0!==arguments[0]&&arguments[0];if(U(),V()||a&&B(1)){var b=4e3/Math.pow(Math.E,c);J.current=setTimeout(function(){return T()},b),I(!0)}},U=function(){J.current&&(clearTimeout(J.current),J.current=void 0,I(!1))},V=function(){U();var a=C()+1;return!!R(a)&&(B(a),!0)},W=function(a){var b=Math.max(1,Math.min(E.length,Math.round(a*E.length)));U(),B(b)};return(0,h.jsxs)("div",{className:"flex flex-col h-screen",children:[(0,h.jsxs)("div",{className:"flex",children:[(0,h.jsx)(t.Z,{onClick:function(){return a.replace("/")},children:(0,h.jsx)(v.Z,{})}),(0,h.jsx)(t.Z,{icon:(0,h.jsx)(w.Z,{}),loading:P.loading,disabled:P.loading,onClick:P.run,children:P.loading?"Building":"Build"}),H?(0,h.jsx)(t.Z,{icon:(0,h.jsx)(x.Z,{}),onClick:U,children:"Pause"}):(0,h.jsx)(t.Z,{icon:(0,h.jsx)(y.Z,{}),onClick:function(){return T(!0)},children:"Play"}),(0,h.jsx)(t.Z,{disabled:!R(o-1),onClick:S,children:(0,h.jsx)(z.Z,{})}),(0,h.jsx)(s.ko,{className:"w-40",current:o,total:E.length,onChangeProgress:W}),(0,h.jsx)(t.Z,{disabled:!R(o+1),onClick:V,children:(0,h.jsx)(A.Z,{})}),(0,h.jsxs)("div",{className:"flex items-center w-40 px-3",children:["Speed",(0,h.jsx)(u.Z,{className:"flex-1",min:0,max:4,step:.5,value:c,onChange:f})]})]}),(0,h.jsx)(s.hr,{player:{cursor:o,chunks:E}})]})},C=!0,D=B},6933:function(a){a.exports={themeDark:"#242424",themeNormal:"#393939",themeLight:"#505050",colorFont:"#bbb",colorShadow:"rgba(0,0,0,.2)",colorOverlay:"rgba(255,255,255,.1)",colorAlert:"#f3bd58",colorSelected:"#2962ff",colorPatched:"#c51162",colorHighlight:"#29d",colorActive:"#00e676",lineHeight:"32px",fontSizeNormal:"12px",fontSizeLarge:"14px",divider:"Divider_divider__SSkp7",horizontal:"Divider_horizontal__Hd7Ev",vertical:"Divider_vertical__r_mVq"}},7471:function(a){a.exports={themeDark:"#242424",themeNormal:"#393939",themeLight:"#505050",colorFont:"#bbb",colorShadow:"rgba(0,0,0,.2)",colorOverlay:"rgba(255,255,255,.1)",colorAlert:"#f3bd58",colorSelected:"#2962ff",colorPatched:"#c51162",colorHighlight:"#29d",colorActive:"#00e676",lineHeight:"32px",fontSizeNormal:"12px",fontSizeLarge:"14px",ellipsis:"Ellipsis_ellipsis__ePiG2"}},2435:function(a){a.exports={themeDark:"#242424",themeNormal:"#393939",themeLight:"#505050",colorFont:"#bbb",colorShadow:"rgba(0,0,0,.2)",colorOverlay:"rgba(255,255,255,.1)",colorAlert:"#f3bd58",colorSelected:"#2962ff",colorPatched:"#c51162",colorHighlight:"#29d",colorActive:"#00e676",lineHeight:"32px",fontSizeNormal:"12px",fontSizeLarge:"14px",progress_bar:"ProgressBar_progress_bar__g6_M_",active:"ProgressBar_active__heoKy",label:"ProgressBar_label__Qik85",current:"ProgressBar_current__99_ZT"}},4513:function(a){a.exports={themeDark:"#242424",themeNormal:"#393939",themeLight:"#505050",colorFont:"#bbb",colorShadow:"rgba(0,0,0,.2)",colorOverlay:"rgba(255,255,255,.1)",colorAlert:"#f3bd58",colorSelected:"#2962ff",colorPatched:"#c51162",colorHighlight:"#29d",colorActive:"#00e676",lineHeight:"32px",fontSizeNormal:"12px",fontSizeLarge:"14px",resizable_container:"ResizableContainer_resizable_container__Y8RjB",horizontal:"ResizableContainer_horizontal__KPYqk",wrapper:"ResizableContainer_wrapper__ci9pA"}}},function(a){a.O(0,[416,411,774,888,179],function(){var b;return a(a.s=6813)}),_N_E=a.O()}])