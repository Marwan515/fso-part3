(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(24)},24:function(e,t,n){"use strict";n.r(t);var a=n(1),u=n.n(a),r=n(10),c=n.n(r),l=n(3),o=n(26),i="/api/persons",m=function(){return o.a.get(i).then(function(e){return e.data})},s=function(e){return o.a.post(i,e).then(function(e){return e})},d=function(e){return o.a.delete("".concat(i,"/").concat(e))},f=function(e,t){return o.a.put("".concat(i,"/").concat(e),{name:t.name,phoneNumber:t.number}).then(function(e){return e})},b=function(){return o.a.get("".concat(i,"/info")).then(function(e){return e.data})},h=function(e){var t=e.os,n=e.nval,a=e.noc,r=e.numval,c=e.numoc;return u.a.createElement("form",{onSubmit:t},u.a.createElement("div",null,"Name: ",u.a.createElement("input",{value:n,onChange:a})),u.a.createElement("br",null),u.a.createElement("div",null,"Number: ",u.a.createElement("input",{value:r,onChange:c})),u.a.createElement("br",null),u.a.createElement("div",null,u.a.createElement("button",{type:"submit"},"add")))},v=function(e){var t=e.name,n=e.number,a=e.dFun,r=e.dval;return u.a.createElement("div",{className:"box"},t,"  ",n,"  ",u.a.createElement("button",{className:"delbtn",onClick:a,value:r,"data-name":t},"Delete"))},p=function(e){var t=e.val,n=e.oc;return u.a.createElement("div",null,"Filter Shown with ",u.a.createElement("input",{value:t,onChange:n}))},E=(n(9),function(e){var t=e.message,n=e.ttm;return null===t?null:u.a.createElement("div",{className:n},t)}),w=function(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),o=Object(l.a)(c,2),i=o[0],w=o[1],g=Object(a.useState)(""),j=Object(l.a)(g,2),O=j[0],C=j[1],N=Object(a.useState)(!0),S=Object(l.a)(N,2),k=S[0],T=S[1],D=Object(a.useState)(""),L=Object(l.a)(D,2),y=L[0],B=L[1],U=Object(a.useState)(null),F=Object(l.a)(U,2),H=F[0],x=F[1],A=Object(a.useState)(null),J=Object(l.a)(A,2),P=J[0],R=J[1],I=Object(a.useState)(null),q=Object(l.a)(I,2),z=q[0],G=q[1],K=k?n:n.filter(function(e){return!(!e.name.toLowerCase().includes(y.toLowerCase())&&!e.number.toLowerCase().includes(y.toLowerCase()))});Object(a.useEffect)(function(){m().then(function(e){r(e)})},[z]);var M=function(e){e.preventDefault(),window.confirm("Delete ".concat(e.target.getAttribute("data-name")," ?"))&&d(e.target.value).then(function(t){G("deleted"),x("".concat(e.target.getAttribute("data-name")," Has Been deleted!")),R("success"),setTimeout(function(){x(null),R(null)},2500)}).catch(function(e){x(e.error),R("error"),setTimeout(function(){x(null),w(""),C(""),R(null)},2500),G("errorUpdatedDel")})};return u.a.createElement("div",null,u.a.createElement("h2",{className:"title"},"Phonebook"),u.a.createElement("br",null),u.a.createElement("button",{onClick:function(e){e.preventDefault(),b().then(function(e){x(e),R("success"),setTimeout(function(){x(null),R(null)},2750)}).catch(function(e){x(e.error),R("error"),setTimeout(function(){x(null),w(""),C(""),R(null)},2500),G("errorUpdatedDel")})}},"Show phonebook info"),u.a.createElement("br",null),H&&u.a.createElement(E,{message:H,ttm:P}),u.a.createElement("br",null),u.a.createElement(p,{val:y,oc:function(e){B(e.target.value),T(!1)}}),u.a.createElement("br",null),u.a.createElement(h,{os:function(e){e.preventDefault();var t=n.find(function(e){return e.name.toLowerCase()===i.toLowerCase()});i.length<1||O.length<1?(x("Name or Number cant be blank!"),R("error"),setTimeout(function(){x(null),R(null)},2500)):t?window.confirm("".concat(t.name," is already added to the phonebook, Replace the old number with the new one ?"))&&(t.number=O,f(t.id,t).then(function(e){G("updated contact"),w(""),C(""),x("".concat(t.name,"'s details Has Been have been updated!")),R("success"),setTimeout(function(){x(null),R(null)},2500)}).catch(function(e){x(e.error),R("error"),setTimeout(function(){x(null),w(""),C(""),R(null)},2500),G("errorUpdated")})):s({name:i,phoneNumber:O}).then(function(e){x("".concat(i," Has Been added to the Phonebook!")),R("success"),setTimeout(function(){x(null),R(null)},2500),G(e.data),w(""),C("")}).catch(function(e){x(e.response.data.error),R("error"),setTimeout(function(){x(null),w(""),C(""),R(null)},4500),G("errorUpdated")})},nval:i,noc:function(e){w(e.target.value)},numval:O,numoc:function(e){C(e.target.value)}}),u.a.createElement("h2",null,"Numbers"),u.a.createElement("div",null,n&&K.map(function(e){return u.a.createElement(v,{key:e.id,name:e.name,number:e.number,dval:e.id,dFun:M})})))};c.a.createRoot(document.getElementById("root")).render(u.a.createElement(w,null))},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.0f9d0fee.chunk.js.map