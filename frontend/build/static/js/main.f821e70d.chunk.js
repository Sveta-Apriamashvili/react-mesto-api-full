(this["webpackJsonpreact-mesto-api-full"]=this["webpackJsonpreact-mesto-api-full"]||[]).push([[0],{19:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(21),i=n.n(s),o=n(8),r=(n(19),n(25)),u=n(3),l=n(2),p=n.p+"static/media/logo.03b78ada.svg",d=n(0);var j=function(e){return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("img",{className:"logo",src:p,alt:"\u043b\u043e\u0433\u043e"}),Object(d.jsx)("div",{className:"header__menu",children:Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{path:"/sign-up",children:Object(d.jsx)(o.b,{className:"header__menu-item",to:"/sign-in",children:"\u0412\u043e\u0439\u0442\u0438"})}),Object(d.jsx)(l.b,{path:"/sign-in",children:Object(d.jsx)(o.b,{className:"header__menu-item",to:"/sign-up",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(d.jsxs)(l.b,{exact:!0,path:"/",children:[Object(d.jsx)("p",{className:"header__menu-email",children:e.userEmail}),Object(d.jsx)("button",{className:"header__menu-item",onClick:e.onSignOut,children:"\u0412\u044b\u0439\u0442\u0438"})]})]})})]})},m={name:"",about:"",avatar:"",_id:""},h=c.a.createContext(m);var b=function(e){var t=c.a.useContext(h),n=e.card.owner._id===t._id,a="element__bin ".concat(n?"element__bin_active":""),s=e.card.likes.some((function(e){return e._id===t._id})),i="element__like ".concat(s?"element__like_active":"");return Object(d.jsxs)("li",{className:"element",children:[Object(d.jsx)("button",{className:a,type:"button","aria-label":"\u0443\u0434\u0430\u043b\u0438\u0442\u044c",onClick:function(){e.onCardDelete(e.card)}}),Object(d.jsx)("img",{className:"element__image",src:e.card.link,alt:"",onClick:function(){e.onCardClick(e.card)}}),Object(d.jsxs)("div",{className:"element__text-container",children:[Object(d.jsx)("h3",{className:"element__title",children:e.card.name}),Object(d.jsx)("button",{className:i,type:"button","aria-label":"\u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",onClick:function(){e.onCardLike(e.card)},children:e.card.likes.length})]})]})};var _=function(e){var t=c.a.useState(!1),n=Object(u.a)(t,2),a=n[0],s=n[1],i=c.a.useContext(h);return Object(d.jsxs)("main",{className:"content",children:[Object(d.jsxs)("section",{className:"profile",children:[Object(d.jsxs)("div",{className:"profile-info",children:[Object(d.jsx)("img",{className:"profile-info__avatar",src:i.avatar,alt:"\u0430\u0432\u0430\u0442\u0430\u0440\u043a\u0430",onMouseEnter:function(){s(!0)}}),Object(d.jsx)("button",{className:"profile-info__edit-avatar ".concat(a?"profile-info__edit-avatar_active":""),type:"button","aria-label":"\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",onClick:e.onEditAvatar,onMouseLeave:function(){s(!1)}}),Object(d.jsxs)("div",{className:"profile-info__info",children:[Object(d.jsx)("h1",{className:"profile-info__name",children:i.name}),Object(d.jsx)("p",{className:"profile-info__about",children:i.about})]}),Object(d.jsx)("button",{className:"profile-info__edit-button",type:"button","aria-label":"\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",onClick:e.onEditProfile})]}),Object(d.jsx)("button",{className:"profile__add-button",type:"button","aria-label":"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c",onClick:e.onAddPlace})]}),Object(d.jsx)("section",{className:"photo-grid",children:Object(d.jsx)("ul",{className:"photo-grid__list",children:e.cards.map((function(t){return Object(d.jsx)(b,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})})]})};var f=function(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("p",{className:"footer__copyright",children:"\xa9 2021 Mesto Russia"})})};var O=function(e){return Object(d.jsx)("div",{className:"pop-up ".concat(e.isOpen?"pop-up_opened":""," pop-up_type_").concat(e.name),children:Object(d.jsxs)("div",{className:"pop-up__container",children:[Object(d.jsx)("button",{className:"pop-up__close-button",type:"button","aria-label":"\u0437\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose}),Object(d.jsx)("h3",{className:"pop-up__title",children:e.title}),Object(d.jsxs)("form",{className:"pop-up__admin",name:e.name,onSubmit:e.onSubmit,children:[e.children,Object(d.jsx)("button",{type:"submit",className:"pop-up__submit-button",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})})};var v=function(e){var t=c.a.useContext(h),n=c.a.useState(""),a=Object(u.a)(n,2),s=a[0],i=a[1],o=c.a.useState(""),r=Object(u.a)(o,2),l=r[0],p=r[1];return c.a.useEffect((function(){i(t?t.name:""),p(t?t.about:"")}),[t,e.isOpen]),Object(d.jsx)(O,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"edit",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:s,about:l})},children:Object(d.jsxs)("div",{className:"pop-up__input-container",children:[Object(d.jsx)("input",{type:"text",className:"pop-up__item",id:"name",name:"name",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"40",required:!0,onChange:function(e){i(e.target.value)},value:s||""}),Object(d.jsx)("span",{className:"pop-up__error",id:"name-error"}),Object(d.jsx)("input",{type:"text",className:"pop-up__item",id:"about",name:"about",placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:"2",maxLength:"200",required:!0,onChange:function(e){p(e.target.value)},value:l||""}),Object(d.jsx)("span",{className:"pop-up__error",id:"about-error"})]})})};var x=function(e){var t=c.a.useRef();return Object(d.jsxs)(O,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"edit-avatar",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},children:[Object(d.jsxs)("div",{className:"pop-up__input-container",children:[Object(d.jsx)("input",{type:"url",className:"pop-up__item",id:"avatar-image",name:"about",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,ref:t}),Object(d.jsx)("span",{className:"pop-up__error",id:"avatar-image-error"})]})," "]})};var g=function(e){var t=c.a.useRef(0),n=c.a.useRef(1);return Object(d.jsx)(O,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"add-element",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(a){a.preventDefault(),e.onAddPlace({name:t.current.value,link:n.current.value})},children:Object(d.jsxs)("div",{className:"pop-up__input-container",children:[Object(d.jsx)("input",{type:"text",className:"pop-up__item",id:"cardname",name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"200",required:!0,ref:t}),Object(d.jsx)("span",{className:"pop-up__error",id:"cardname-error"}),Object(d.jsx)("input",{type:"url",className:"pop-up__item",id:"image",name:"about",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,ref:n}),Object(d.jsx)("span",{className:"pop-up__error",id:"image-error"})]})})},N=n(23),C=n(24),y=new(function(){function e(t){Object(N.a)(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}return Object(C.a)(e,[{key:"getUserInfo",value:function(){var e="".concat(this._baseUrl,"/users/me");return fetch(e,{headers:this._headers,credentials:"include"}).then(this._getResponseData)}},{key:"editUserInfo",value:function(e){var t=e.name,n=e.about,a="".concat(this._baseUrl,"/users/me");return fetch(a,{method:"PATCH",headers:this._headers,credentials:"include",body:JSON.stringify({name:t,about:n})}).then(this._getResponseData)}},{key:"updateAvatar",value:function(e){var t="".concat(this._baseUrl,"/users/me/avatar");return console.log(e),fetch(t,{method:"PATCH",headers:this._headers,credentials:"include",body:JSON.stringify({avatar:e.avatar})}).then(this._getResponseData)}},{key:"getInitialCards",value:function(){var e="".concat(this._baseUrl,"/cards");return fetch(e,{headers:this._headers,credentials:"include"}).then(this._getResponseData)}},{key:"addNewCard",value:function(e){var t=e.name,n=e.link,a="".concat(this._baseUrl,"/cards");return fetch(a,{method:"POST",headers:this._headers,credentials:"include",body:JSON.stringify({name:t,link:n})}).then(this._getResponseData)}},{key:"deleteCard",value:function(e){var t="".concat(this._baseUrl,"/cards/").concat(e);return fetch(t,{method:"DELETE",headers:this._headers,credentials:"include"}).then((function(e){return e.ok?e:Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"changeLikeCardStatus",value:function(e,t){return t?this.deleteLike(e):this.addLike(e)}},{key:"addLike",value:function(e){var t="".concat(this._baseUrl,"/cards/likes/").concat(e);return fetch(t,{method:"PUT",headers:this._headers,credentials:"include"}).then(this._getResponseData)}},{key:"deleteLike",value:function(e){var t="".concat(this._baseUrl,"/cards/likes/").concat(e);return fetch(t,{method:"DELETE",headers:this._headers,credentials:"include"}).then(this._getResponseData)}},{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}}]),e}())({baseUrl:"http://api.study.mesto.nomoredomains.rocks",headers:{authorization:"8e2b4449-94a0-4beb-aa9f-18ee80fa9c26","Content-Type":"application/json"}}),k="http://api.study.mesto.nomoredomains.rocks",S=function(e){return fetch("".concat(k,"/users/me"),{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)},credentials:"include"}).then(L)};function L(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}var w=function(e){var t,n;return Object(d.jsx)("div",{className:"pop-up pop-up_type_image ".concat(e.card?"pop-up_opened":""),children:Object(d.jsxs)("div",{className:"pop-up__container pop-up__container_type_image",children:[Object(d.jsx)("button",{className:"pop-up__close-button",type:"button","aria-label":"\u0437\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose}),Object(d.jsxs)("figure",{className:"pop-up__figure",children:[Object(d.jsx)("img",{src:null===(t=e.card)||void 0===t?void 0:t.link,alt:null===(n=e.card)||void 0===n?void 0:n.name,className:"pop-up__image"}),Object(d.jsx)("figcaption",{className:"pop-up__image-caption",children:e.card?e.card.name:"#"})]})]})})},U=n(11),E=n(9);var D=function(e){var t=Object(a.useState)({email:"",password:""}),n=Object(u.a)(t,2),c=n[0],s=n[1];function i(e){var t=e.target,n=t.name,a=t.value;s(Object(E.a)(Object(E.a)({},c),{},Object(U.a)({},n,a)))}return Object(a.useEffect)((function(){console.log("done");var t=localStorage.getItem("jwt");null!==t&&e.onTokenCheck(t)})),Object(l.g)(),Object(d.jsxs)("div",{className:"pop-up__container pop-up__container_type_auth",children:[Object(d.jsx)("p",{className:"pop-up__title pop-up__title_type_auth",children:"\u0412\u0445\u043e\u0434"}),Object(d.jsx)("form",{className:"pop-up__admin",onSubmit:function(t){t.preventDefault();var n=c.email,a=c.password;n&&a&&e.onLogin(n,a)},children:Object(d.jsxs)("div",{className:"pop-up__input-container",children:[Object(d.jsx)("input",{className:"pop-up__item pop-up__item_type_auth",id:"email",name:"email",type:"email",placeholder:"Email",onChange:i,value:c.email}),Object(d.jsx)("input",{className:"pop-up__item pop-up__item_type_auth",id:"password",name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:i,value:c.password}),Object(d.jsx)("button",{type:"submit",className:"pop-up__submit-button pop-up__submit-button_type_auth",children:"\u0412\u043e\u0439\u0442\u0438"})]})})]})};var P=function(e){var t=Object(a.useState)({email:"",password:""}),n=Object(u.a)(t,2),c=n[0],s=n[1];function i(e){var t=e.target,n=t.name,a=t.value;s(Object(E.a)(Object(E.a)({},c),{},Object(U.a)({},n,a)))}return Object(d.jsxs)("div",{className:"pop-up__container pop-up__container_type_auth",children:[Object(d.jsx)("p",{className:"pop-up__title pop-up__title_type_auth",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(d.jsx)("form",{className:"pop-up__admin",onSubmit:function(t){t.preventDefault();var n=c.email,a=c.password;e.onRegister(n,a)},children:Object(d.jsxs)("div",{className:"pop-up__input-container",children:[Object(d.jsx)("input",{className:"pop-up__item pop-up__item_type_auth",id:"email",name:"email",type:"email",placeholder:"Email",value:c.email,onChange:i}),Object(d.jsx)("input",{className:"pop-up__item pop-up__item_type_auth",id:"password",name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:c.password,onChange:i}),Object(d.jsx)("button",{type:"submit",className:"pop-up__submit-button pop-up__submit-button_type_auth",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})}),Object(d.jsxs)("div",{className:"pop-up__sign-in",children:[Object(d.jsx)("p",{children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"}),Object(d.jsx)(o.b,{to:"sign-in",className:"pop-up__sign-in_type_link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})},T=n.p+"static/media/success.1b6082f8.svg",I=n.p+"static/media/error.df8eddf6.svg";var R=function(e){return Object(d.jsx)("div",{className:"pop-up pop-up_type_image ".concat(e.isOpen?"pop-up_opened":""),children:Object(d.jsxs)("div",{className:"pop-up__container  pop-up__container_type_result-image",children:[Object(d.jsx)("button",{className:"pop-up__close-button",type:"button","aria-label":"\u0437\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose}),Object(d.jsxs)("div",{className:"pop-up__result",children:[Object(d.jsx)("img",{src:e.isSuccess?T:I,alt:e.isSuccess?"\u0413\u0430\u043b\u043e\u0447\u043a\u0430":"\u041a\u0440\u0435\u0441\u0442\u0438\u043a",className:"pop-up__image"}),Object(d.jsx)("div",{className:"pop-up__text",children:Object(d.jsx)("p",{children:e.isSuccess?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a!\n\u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})})]})]})})},A=n(26),J=["component"],q=function(e){var t=e.component,n=Object(A.a)(e,J);return Object(d.jsx)(l.b,{children:function(){return n.isLoggedIn?Object(d.jsx)(t,Object(E.a)({},n)):Object(d.jsx)(l.a,{to:"./sign-in"})}})};var F=function(){var e=c.a.useState(!1),t=Object(u.a)(e,2),n=t[0],a=t[1],s=c.a.useState(!1),i=Object(u.a)(s,2),o=i[0],p=i[1],m=c.a.useState(!1),b=Object(u.a)(m,2),O=b[0],N=b[1],C=c.a.useState(),U=Object(u.a)(C,2),E=U[0],T=U[1],I=c.a.useState({}),A=Object(u.a)(I,2),J=A[0],F=A[1],M=c.a.useState([]),B=Object(u.a)(M,2),z=B[0],H=B[1],G=c.a.useState(!0),K=Object(u.a)(G,2),Q=K[0],V=K[1],W=c.a.useState(!1),X=Object(u.a)(W,2),Y=X[0],Z=X[1],$=c.a.useState(!1),ee=Object(u.a)($,2),te=ee[0],ne=ee[1],ae=c.a.useState(""),ce=Object(u.a)(ae,2),se=ce[0],ie=ce[1],oe=Object(l.g)();function re(){a(!1),p(!1),N(!1),T(),Z(!1)}return c.a.useEffect((function(){y.getUserInfo().then((function(e){F(e)})).catch((function(){return console.log("error")}))}),[]),c.a.useEffect((function(){y.getInitialCards().then((function(e){H(e)})).catch((function(){return console.log("error")}))}),[]),Object(d.jsx)("div",{className:"page__container",children:Object(d.jsxs)(h.Provider,{value:J,children:[Object(d.jsx)(j,{userEmail:se,onSignOut:function(){localStorage.removeItem("jwt"),ne(!1)}}),Object(d.jsxs)(l.d,{children:[Object(d.jsx)(l.b,{path:"/sign-up",children:Object(d.jsx)(P,{onRegister:function(e,t){(function(e,t){return fetch("".concat(k,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:t})}).then(L)})(e,t).then((function(){V(!0),oe.push("/sign-in")})).catch((function(){return V(!1)})).then((function(){return Z(!0)}))}})}),Object(d.jsx)(l.b,{path:"/sign-in",children:Object(d.jsx)(D,{onLogin:function(e,t){(function(e,t){return fetch("".concat(k,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:e,password:t})}).then(L).then((function(e){if(e.token)return localStorage.setItem("jwt",e.token),e}))})(e,t).then((function(){ne(!0),oe.push("/")})).catch((function(){return console.log("error")})),function(){var e=localStorage.getItem("jwt");S(e).then((function(e){return ie(e.data.email)})).catch((function(e){return console.log(e)}))}()},onTokenCheck:function(e){S(e).then((function(e){console.log(e.data),ne(null!=e.data),ie(e.data.email),oe.push("/")})).catch((function(){return console.log("error")}))}})}),Object(d.jsx)(q,{exact:!0,path:"/",isLoggedIn:te,component:_,onEditAvatar:function(){N(!0)},onEditProfile:function(){a(!0)},onAddPlace:function(){p(!0)},onCardClick:function(e){T(e)},cards:z,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===J._id}));y.changeLikeCardStatus(e._id,t).then((function(t){H((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(){return console.log("error")}))},onCardDelete:function(e){y.deleteCard(e._id).then((function(t){return H((function(n){return n.filter((function(n){if(n._id!==e._id)return t}))}))})).catch((function(){return console.log("error")}))}})]}),Object(d.jsx)(f,{}),Object(d.jsx)(v,{isOpen:n,onClose:re,onUpdateUser:function(e,t){y.editUserInfo(e,t).then((function(e){F(e)})).then(re).catch((function(){return console.log("error")}))}}),Object(d.jsx)(x,{isOpen:O,onClose:re,onUpdateAvatar:function(e){y.updateAvatar(e).then((function(e){F(e)})).then(re).catch((function(){return console.log("error")}))}}),Object(d.jsx)(g,{isOpen:o,onClose:re,onAddPlace:function(e,t){y.addNewCard(e,t).then((function(e){H([e].concat(Object(r.a)(z)))})).then(re).catch((function(){return console.log("error")}))}}),Object(d.jsx)(w,{card:E,onClose:re}),Object(d.jsx)(R,{isOpen:Y,isSuccess:Q,onClose:re})]})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(o.a,{children:Object(d.jsx)(F,{})})}),document.getElementById("root")),M()}},[[37,1,2]]]);
//# sourceMappingURL=main.f821e70d.chunk.js.map