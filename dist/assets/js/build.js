!function(e){function t(t){for(var a,s,i=t[0],c=t[1],l=t[2],p=0,d=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&d.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);for(u&&u(t);d.length;)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={0:0},o=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;o.push([62,1]),n()}({11:function(e,t,n){e.exports={cardStyles:"phones-module__cardStyles_ad4f2",insideCardMargin:"phones-module__insideCardMargin_34fa3",pagePhoneWrapper:"phones-module__pagePhoneWrapper_83916",title:"phones-module__title_002d2",productsWrapper:"phones-module__productsWrapper_8ed30",imgInCard:"phones-module__imgInCard_b80b0",filtersWrapper:"phones-module__filtersWrapper_37612"}},14:function(e,t,n){e.exports={container:"main-module__container_1dfa6",borderRadiusBlock:"main-module__borderRadiusBlock_d1921"}},15:function(e,t,n){e.exports={header:"app-module__header_982bd",container_mod:"app-module__container_mod_79b80",headerWrapper:"app-module__headerWrapper_aca9d",cart:"app-module__cart_54b42",totalInCart:"app-module__totalInCart_9f068",logo:"app-module__logo_6a9b8",logoParody:"app-module__logoParody_a8703",content:"app-module__content_d7ef5",divForTest:"app-module__divForTest_26225"}},18:function(e,t,n){e.exports={itemsCounter:"itemsCounter-module__itemsCounter_88acb",inputWrap:"itemsCounter-module__inputWrap_4b465",lazyInp:"itemsCounter-module__lazyInp_cfb9e",button:"itemsCounter-module__button_5229c",minus:"itemsCounter-module__minus_a7af9",plus:"itemsCounter-module__plus_d341d"}},31:function(e,t,n){e.exports={mainStyles:"index-module__mainStyles_ced35",noselect:"index-module__noselect_58c48",inCart:"index-module__inCart_18932",nonInCart:"index-module__nonInCart_6262e"}},40:function(e,t,n){e.exports={productCard:"productCard-module__productCard_0cbf7"}},41:function(e,t,n){e.exports={test:"cart-module__test_48cda"}},62:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"getPhones",(function(){return We}));var r={};n.r(r),n.d(r,"getTablets",(function(){return Be}));var o={};n.r(o),n.d(o,"getTelevisions",(function(){return Fe}));var s={};n.r(s),n.d(s,"getProductById",(function(){return De}));n(44);var i=n(14),c=n.n(i),l=n(0),u=n.n(l),p=n(27),d=n.n(p),m=n(28),h=n(6),f=n.n(h),v=n(16),g=n.n(v),y=n(22),b=n.n(y),_=n(23),C=n.n(_),E=n(24),w=n.n(E),S=n(17),k=n(21),N=function(e){return Object(m.b)("rootStore")(Object(m.c)(e))},x=n(19),I=n.n(x),P=n(30),O=n.n(P),T=n(3),j=n.n(T),W=n(40),z=n.n(W);function B(e){var t=e.children,n=e.className,a=e.addClassName,r=e.onClick,o=O()(e,["children","className","addClassName","onClick"]),s=n||z.a.productCard;return u.a.createElement("div",I()({},o,{className:"".concat(s," ").concat(a),onClick:r}),t)}B.defaultProps={children:null,className:void 0,onClick:function(){},addClassName:""},B.propTypes={children:j.a.node,className:j.a.string,onClick:j.a.func,addClassName:j.a.string};var R=n(25),F=n.n(R),A=n(31),D=n.n(A);function M(e){var t=e.className,n=e.addClassName,a=e.onAdd,r=e.onRemove,o=e.inCart,s=O()(e,["className","addClassName","onAdd","onRemove","inCart"]),i=t||D.a;return o?u.a.createElement("div",I()({},s,{className:"".concat(D.a.noselect,"\n\t\t\t\t").concat("object"===F()(i)?i.mainStyles:i,"\n\t\t\t\t").concat("object"===F()(i)?i.inCart:i,"\n\t\t\t\t").concat(n),onClick:r}),"Delete from cart"):u.a.createElement("div",I()({},s,{className:"".concat(D.a.noselect,"\n\t\t\t\t").concat("object"===F()(i)?i.mainStyles:i,"\n\t\t\t\t").concat("object"===F()(i)?i.nonInCart:i,"\n\t\t\t\t").concat(n),onClick:a}),"Add to cart")}M.defaultProps={children:null,className:void 0,onAdd:function(){},onRemove:function(){},inCart:!1,addClassName:""},M.propTypes={children:j.a.node,className:j.a.string,onAdd:j.a.func,onRemove:j.a.func,inCart:j.a.bool,addClassName:j.a.string};var L=n(11),U=n.n(L);var q=N((function(e){console.log("getPhones4 page");var t=e.rootStore.phones;Object(l.useEffect)((function(){console.log("useEffect"),t.getPhones()}),[]);var n=t.phones,a=e.rootStore.cart,r=n.map((function(e){return u.a.createElement(B,{key:e.id,addClassName:U.a.cardStyles},u.a.createElement("img",{src:t.urlToImg(e.data().imgs[0]),className:"".concat(U.a.imgInCard," ").concat(U.a.insideCardMargin)}),u.a.createElement("h2",{className:"".concat(U.a.title," ").concat(U.a.insideCardMargin)},e.data().title),u.a.createElement(M,{inCart:a.inCart(e.id),addClassName:U.a.insideCardMargin,onAdd:function(){a.addToCart(e.id)},onRemove:function(){a.removeFromCart(e.id)}}))}));return u.a.createElement(u.a.Fragment,null,u.a.createElement("h1",{className:"".concat(c.a.borderRadiusBlock," ").concat(U.a.title)},"Мобильные телефоны"),u.a.createElement("div",{className:U.a.pagePhoneWrapper},u.a.createElement("div",{className:U.a.filtersWrapper},"Фильтры",u.a.createElement("div",{className:U.a.filter},"Какой то фильтр")),u.a.createElement("div",{className:U.a.productsWrapper},r)))}));var K=N((function(){return u.a.createElement("div",null," tv")}));var G=N((function(){return u.a.createElement("div",null," tablets")}));var J=N((function(){return u.a.createElement("div",null,"HomePage")}));var H=N((function(){return u.a.createElement("div",null,"order")})),Q=n(41),V=n.n(Q);var X=[{name:"cart",url:"/cart",container:N((function(e){console.log("cart");var t=e.rootStore.cart.products;for(var n in console.log(t),t)for(var a in console.log(n,"========"),t[n])console.log(a,t[n][a]);return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:V.a.test},"cart"))})),exact:!0},{name:"home",url:"/",container:J,exact:!0},{name:"phones",url:"/phones",container:q,exact:!0},{name:"televisions",url:"/televisions",container:K,exact:!0},{name:"tablets",url:"/tablets",container:G,exact:!0},{name:"order",url:"/order",container:H,exact:!0}],Y={};X.forEach((function(e){e.hasOwnProperty("name")&&(Y[e.name]=e.url)}));var Z=n(15),$=n.n(Z),ee=function(e){function t(){var e,n;f()(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=b()(this,(e=C()(t)).call.apply(e,[this].concat(r)))).nativeInp=u.a.createRef(),n.checkChange=function(e){n.props.value.toString()!==e.target.value&&n.props.onChange()},n.checkPressedKey=function(e){13===e.keyCode&&n.checkChange(e)},n}return w()(t,e),g()(t,[{key:"componentDidUpdate",value:function(e){var t=this.nativeInp.current;e.value!==this.props.value&&this.props.value!=t.value&&(t.value=this.props.value)}},{key:"render",value:function(){return u.a.createElement("input",I()({},this.props.nativeOptions,{defaultValue:this.props.value,onBlur:this.checkChange,onKeyUp:this.checkPressedKey,ref:this.nativeInp}))}}]),t}(u.a.Component);ee.defaultProps={onChange:function(){},value:"",nativeOptions:{}},ee.propTypes={value:j.a.oneOfType([j.a.string,j.a.number]),onChange:j.a.func,nativeOptions:j.a.object};var te=n(18),ne=n.n(te),ae=function(e){function t(){return f()(this,t),b()(this,C()(t).apply(this,arguments))}return w()(t,e),g()(t,[{key:"render",value:function(){var e;return e=null===this.props.styles.lazyInp?ne.a.lazyInp:this.props.styles.lazyInp,u.a.createElement("div",{className:this.props.styles.itemsCounter?this.props.styles.itemsCounter:ne.a.itemsCounter},u.a.createElement("div",{className:this.props.styles.minusBtn?this.props.styles.minusBtn:"".concat(ne.a.button," ").concat(ne.a.minus)},"-"),u.a.createElement("div",{className:this.props.styles.inputWrap?this.props.styles.inputWrap:ne.a.inputWrap},u.a.createElement(ee,{nativeOptions:{className:e},value:this.props.currentCount,onChange:function(){}})),u.a.createElement("div",{className:this.props.styles.plusBtn?this.props.styles.plusBtn:"".concat(ne.a.button," ").concat(ne.a.plus)},"+"))}}]),t}(u.a.PureComponent);ae.defaultProps={min:1,styles:{itemsCounter:null,minusBtn:null,plusBtn:null,inputWrap:null,lazyInp:null}},ae.propTypes={currentCount:j.a.number.isRequired,max:j.a.number.isRequired,min:j.a.number,onChange:j.a.func,styles:j.a.shape({itemsCounter:j.a.string,minusBtn:j.a.string,plusBtn:j.a.string,inputWrap:j.a.string,lazyInp:j.a.string})};var re,oe,se,ie,ce,le,ue,pe,de,me,he,fe=N(function(e){function t(){return f()(this,t),b()(this,C()(t).apply(this,arguments))}return w()(t,e),g()(t,[{key:"render",value:function(){this.phonesStore=this.props.rootStore.phones,this.televisionsStore=this.props.rootStore.televisions,this.tabletsStore=this.props.rootStore.tablets,this.cartStore=this.props.rootStore.cart;var e=X.map((function(e){return u.a.createElement(S.a,{path:e.url,component:e.container,exact:e.exact,key:e.url})}));return u.a.createElement(k.a,null,u.a.createElement(u.a.Fragment,null,u.a.createElement("header",{className:$.a.header},u.a.createElement("div",{className:"".concat(c.a.container," ").concat($.a.container_mod)},u.a.createElement("div",{className:"".concat($.a.headerWrapper," ").concat(c.a.noselect," ").concat(c.a.borderRadiusBlock)},u.a.createElement("div",{className:$.a.logo},u.a.createElement(k.b,{to:Y.home},u.a.createElement("span",{className:$.a.logoParody},"Gparody"),"Shop")),u.a.createElement("menu",null,u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement(k.b,{to:Y.televisions,onClick:this.televisionsStore.getTelevisions},"Телевизоры")),u.a.createElement("li",null,u.a.createElement(k.b,{to:Y.phones},"Телефоны")),u.a.createElement("li",null,u.a.createElement(k.b,{to:Y.tablets,onClick:this.tabletsStore.getTablets},"Планшеты")))),u.a.createElement("div",{className:$.a.cart},u.a.createElement(k.b,{to:Y.cart},"Cart"),u.a.createElement("div",{className:$.a.totalInCart},this.cartStore.totalPositionsInCart))))),u.a.createElement("main",{className:$.a.content},u.a.createElement("div",{className:c.a.container},e))))}}]),t}(u.a.Component)),ve=n(4),ge=n.n(ve),ye=n(7),be=n.n(ye),_e=n(12),Ce=n.n(_e),Ee=n(8),we=n.n(Ee),Se=(n(29),n(2)),ke=(re=function(){function e(t){f()(this,e),Ce()(this,"products",oe,this),this.api=t.api.apiCart,this.localStorage=t.localStorage}var t,n;return g()(e,[{key:"getCartFromLocalStorage",value:function(){var e=this;Object.keys(this.localStorage).forEach((function(t){"loglevel:webpack-dev-server"!==t&&(e.products[t]={amount:parseInt(e.localStorage.getItem(t))})}))}},{key:"inCart",value:function(e){return e in this.products}},{key:"addToCart",value:(n=be()(ge.a.mark((function e(t){return ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.inCart(t)||(this.localStorage.setItem(t,1),this.products[t]={amount:1}),console.log("product added to cart");case 2:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"removeFromCart",value:(t=be()(ge.a.mark((function e(t){return ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.inCart(t)&&(this.localStorage.removeItem(t),delete this.products[t]),console.log("product remove from cart");case 2:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"totalPositionsInCart",get:function(){return Object.keys(this.products).length}}]),e}(),oe=we()(re.prototype,"products",[Se.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{}}}),we()(re.prototype,"getCartFromLocalStorage",[Se.d],Object.getOwnPropertyDescriptor(re.prototype,"getCartFromLocalStorage"),re.prototype),we()(re.prototype,"totalPositionsInCart",[Se.e],Object.getOwnPropertyDescriptor(re.prototype,"totalPositionsInCart"),re.prototype),we()(re.prototype,"addToCart",[Se.d],Object.getOwnPropertyDescriptor(re.prototype,"addToCart"),re.prototype),we()(re.prototype,"removeFromCart",[Se.d],Object.getOwnPropertyDescriptor(re.prototype,"removeFromCart"),re.prototype),re),Ne=(se=function e(t){var n=this;f()(this,e),Ce()(this,"phones",ie,this),Ce()(this,"getPhones",ce,this),this.urlToImg=function(e){return"".concat(n.baseUrlImgs).concat(e)},this.api=t.api.phones,this.baseUrlImgs="ReactAppStore/dist/assets/imgs/phones/"},ie=we()(se.prototype,"phones",[Se.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),ce=we()(se.prototype,"getPhones",[Se.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return(be()(ge.a.mark((function t(){return ge.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.api.getPhones();case 2:return t.abrupt("return",e.phones=t.sent);case 3:case"end":return t.stop()}}),t)}))))}}),se),xe=function e(t){f()(this,e)},Ie=(le=function e(t){f()(this,e),Ce()(this,"televisions",ue,this),Ce()(this,"getTelevisions",pe,this),this.api=t.api.televisions},ue=we()(le.prototype,"televisions",[Se.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),pe=we()(le.prototype,"getTelevisions",[Se.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return(be()(ge.a.mark((function t(){return ge.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.api.getTelevisions();case 2:e.televisions=t.sent;case 3:case"end":return t.stop()}}),t)}))))}}),le),Pe=(de=function e(t){f()(this,e),Ce()(this,"tablets",me,this),Ce()(this,"getTablets",he,this),this.api=t.api.tablets},me=we()(de.prototype,"tablets",[Se.l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),he=we()(de.prototype,"getTablets",[Se.d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return(be()(ge.a.mark((function t(){return ge.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.api.getTablets();case 2:e.tablets=t.sent;case 3:case"end":return t.stop()}}),t)}))))}}),de),Oe=n(35),Te=n.n(Oe);n(59),n(61);Te.a.initializeApp({apiKey:"AIzaSyDX0t1_h2GCY_IlDqwynOo9QuE64slu32c",authDomain:"gparodystore.firebaseapp.com",databaseURL:"https://gparodystore.firebaseio.com",projectId:"gparodystore",storageBucket:"gparodystore.appspot.com",messagingSenderId:"1009917265996",appId:"1:1009917265996:web:e2d684751d1b4f7ae14ce9"});var je=Te.a;function We(){return ze.apply(this,arguments)}function ze(){return(ze=be()(ge.a.mark((function e(){var t;return ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je.firestore().collection("phones").get();case 2:return t=e.sent,e.abrupt("return",t.docs);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Be(){return Re.apply(this,arguments)}function Re(){return(Re=be()(ge.a.mark((function e(){var t;return ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je.firestore().collection("tablets").get();case 2:return t=e.sent,e.abrupt("return",t.docs);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Fe(){return Ae.apply(this,arguments)}function Ae(){return(Ae=be()(ge.a.mark((function e(){var t;return ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,je.firestore().collection("televisions").get();case 2:return t=e.sent,e.abrupt("return",t.docs);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function De(e){return Me.apply(this,arguments)}function Me(){return(Me=be()(ge.a.mark((function e(t){var n;return ge.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,je.firestore().collection("phones").doc(t).get();case 3:return n=e.sent,e.abrupt("return",n.exists?n.data():new Error("no such doc"));case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var Le=new function e(){f()(this,e),this.api={phones:a,tablets:r,televisions:o,apiCart:s},this.localStorage=localStorage,this.cart=new ke(this),this.phones=new Ne(this),this.order=new xe(this),this.televisions=new Ie(this),this.tablets=new Pe(this)};Le.cart.getCartFromLocalStorage(),d.a.render(u.a.createElement(m.a,{rootStore:Le},u.a.createElement(fe,null)),document.querySelector("#app"))}});