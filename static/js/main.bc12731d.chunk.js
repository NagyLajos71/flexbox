(this.webpackJsonpundefined=this.webpackJsonpundefined||[]).push([[0],{16:function(e,t,l){},24:function(e,t,l){"use strict";l.r(t);var n=l(0),a=l.n(n),c=l(4),r=l.n(c),o=(l(16),l(3)),s=l(1),u=Object(o.b)()((function(e){var t=e.toDispatch,l=e.btnSign,n=e.dispatch;return Object(s.jsx)("button",{className:"btn ".concat("RESET"!==l?"btnPlusMinus":""),onClick:function(){!function(e){n({type:e.text,payload:e.payload})}(t)},children:l})})),i=l(6),d=[{value:"flexDirection",label:"flex-direction"},{value:"flexWrap",label:"flex-wrap"},{value:"justifyContent",label:"justify-content"},{value:"alignItems",label:"align-items"},{value:"alignContent",label:"align-content"}],b=[{value:"alignSelf",label:"align-self"},{value:"flexBasis",label:"flex-basis"},{value:"order",label:"order"},{value:"flexGrow",label:"flex-grow"},{value:"flexShrink",label:"flex-shrink"}],p={flexDirection:[{value:"row",label:"row"},{value:"row-reverse",label:"row-reverse"},{value:"column",label:"column"},{value:"column-reverse",label:"column-reverse"}],flexWrap:[{value:"nowrap",label:"nowrap"},{value:"wrap",label:"wrap"},{value:"wrap-reverse",label:"wrap-reverse"}],justifyContent:[{value:"normal",label:"normal"},{value:"flex-start",label:"flex-start"},{value:"flex-end",label:"flex-end"},{value:"center",label:"center"},{value:"space-between",label:"space-between"},{value:"space-around",label:"space-around"},{value:"space-evenly",label:"space-evenly"}],alignItems:[{value:"normal",label:"normal"},{value:"stretch",label:"stretch"},{value:"center",label:"center"},{value:"flex-start",label:"flex-start"},{value:"flex-end",label:"flex-end"},{value:"baseline",label:"baseline"}],alignContent:[{value:"normal",label:"normal"},{value:"stretch",label:"stretch"},{value:"center",label:"center"},{value:"flex-start",label:"flex-start"},{value:"flex-end",label:"flex-end"},{value:"space-between",label:"space-between"},{value:"space-around",label:"space-around"},{value:"space-evenly",label:"space-evenly"}]},j={alignSelf:[{value:"auto",label:"auto"},{value:"normal",label:"normal"},{value:"start",label:"start"},{value:"end",label:"end"},{value:"self-start",label:"self-start"},{value:"self-end",label:"self-end"},{value:"flex-start",label:"flex-start"},{value:"flex-end",label:"flex-end"},{value:"baseline",label:"baseline"},{value:"stretch",label:"stretch"}],flexBasis:[{value:"auto",label:"auto"},{value:"50%",label:"50%"},{value:"25vw",label:"25vw"},{value:"350px",label:"350px"}],order:[{value:0,label:0},{value:1,label:1},{value:2,label:2},{value:3,label:3},{value:4,label:4},{value:5,label:5}],flexGrow:[{value:0,label:0},{value:1,label:1},{value:2,label:2},{value:3,label:3},{value:4,label:4},{value:5,label:5}],flexShrink:[{value:1,label:1},{value:2,label:2},{value:3,label:3},{value:4,label:4},{value:5,label:5}]},O="CLICK_ON_PLUS_BTN",m="CLICK_ON_MINUS_BTN",f="CLICK_ON_RESET_BTN",x="DROPDOWN_SELECTION_HAPPENED",C="RESET_PARENT_VALUE_SELECTION_TO_NULL",v="RESET_CHILD_VALUE_SELECTION_TO_NULL",y="PARENTCOMPONENT_GETCOMPUTEDSTYLE",g="ACTIONBOX_WAS_CLICKED",h="UPDATE_COMPUTED_VALUE",S=Object(o.b)((function(e){return{parentCategory:e.parentComponent.userSelectedCategory,childCategory:e.childComponent.userSelectedCategory}}))((function(e){var t=e.dispatch,l=e.parentCategory,a=e.childCategory,c=e.parentId,r=e.usedFor,o=Object(n.useRef)(),u=function(e,t){switch(!0){case"parent settings"===e&&"categorySelection"===t:return{id:"PC",menu:d};case"parent settings"===e&&"valueSelection"===t:return{id:"PV",menu:l?p[l]:null};case"item settings"===e&&"categorySelection"===t:return{id:"IC",menu:b};case"item settings"===e&&"valueSelection"===t:return{id:"IV",menu:a?j[a]:null};default:return}},O=u(c,r).id,m=u(c,r).menu,f=m?m.map((function(e){return Object(s.jsx)("option",{value:e.value,children:e.label},e.value)})):null,y=function(e,l,n){t({type:e,payload:{dropdownID:l,selectedValue:n}})},g=function(){o.current.selectedIndex=-1},h=Object(n.useState)(!0),S=Object(i.a)(h,2),E=S[0],T=S[1];return Object(n.useEffect)((function(){"PV"===O&&(y(C,O,null),g(),T(!l)),l||g()}),[l]),Object(n.useEffect)((function(){"IV"===O&&(y(v,O,null),g(),T(!a)),a||g()}),[a]),Object(s.jsx)("div",{children:Object(s.jsxs)("select",{ref:o,onChange:function(){var e=o.current.value;y(x,O,e)},disabled:"valueSelection"===r&&E,children:[Object(s.jsx)("option",{}),f]})})})),E=Object(o.b)((function(e){return{clickedActionboxLetter:e.childComponent.clickedActionboxLetter,actionboxStyle:e.childComponent.computedStyle}}))((function(e){var t=e.parentId,l=e.clickedActionboxLetter,c=e.actionboxStyle,r=Object(n.useState)("transparent"),o=Object(i.a)(r,2),d=o[0],b=o[1];return Object(n.useEffect)((function(){b(c?c.backgroundColor:"transparent")}),[c]),Object(s.jsxs)("div",{children:[Object(s.jsx)(a.a.Fragment,{children:"item settings"===t&&l?Object(s.jsx)("div",{className:"referenceLetter",style:{backgroundColor:d},children:l}):null}),"parent settings"===t||"item settings"===t&&l?Object(s.jsxs)(a.a.Fragment,{children:[Object(s.jsx)("h4",{children:"select a category"}),Object(s.jsx)(S,{parentId:t,usedFor:"categorySelection"}),Object(s.jsx)("h4",{children:"select a value"}),Object(s.jsx)(S,{parentId:t,usedFor:"valueSelection"}),Object(s.jsx)(u,{btnSign:"RESET",toDispatch:{text:f,payload:t}})]}):Object(s.jsx)("p",{children:"click on a colored box to activate this panel"})]})})),T=Object(o.b)((function(e){return{selectedCategoryParent:e.parentComponent.userSelectedCategory,selectedCategoryChild:e.childComponent.userSelectedCategory,parentComputedStyle:e.parentComponent.computedStyle,childComputedStyle:e.childComponent.computedStyle}}))((function(e){var t=e.parentId,l=e.parentComputedStyle,n=e.childComputedStyle,c=e.selectedCategoryParent,r=e.selectedCategoryChild,o=Object.keys("parent settings"===t?p:j),u="parent settings"===t?c:r,i="parent settings"===t?l:n,d=o.map((function(e){return Object(s.jsxs)("li",{style:{color:u===e?"white":"black"},children:[Object(s.jsxs)("p",{children:[e,":"]}),Object(s.jsx)("p",{children:Object(s.jsx)("span",{children:i?i[e]:"-"})})]},e)}));return Object(s.jsxs)(a.a.Fragment,{children:[Object(s.jsx)("h4",{children:"current settings:"}),Object(s.jsx)("ul",{children:d})]})})),w=Object(o.b)((function(e){return{quantity:e.actionBox.quantity}}))((function(e){var t=e.parentId,l=e.quantity,c=Object(n.useRef)(l),r=Object(n.useRef)(),o=Object(n.useRef)();return Object(n.useEffect)((function(){"items"===t&&(c.current=l,r.current.classList.toggle("rotateFrontFace"),o.current.classList.toggle("rotateBackFace"))}),[l]),Object(s.jsxs)(a.a.Fragment,{children:[Object(s.jsx)("div",{className:"flippingCard frontFace",ref:r,children:l%2===1?c.current:l}),Object(s.jsx)("div",{className:"flippingCard backFace",ref:o,children:l%2===0?c.current:l})]})})),I=function(e){return"panel"===e?"itemsPanel":"parent settings"===e?"parentSettingsPanel":"itemSettingsPanel"},L=function(e){var t=e.title;return Object(s.jsxs)("div",{className:"panel ".concat(I(t)),children:[Object(s.jsx)("div",{className:"panelTitle",children:Object(s.jsx)("h3",{children:t})}),Object(s.jsx)("div",{className:"panelColumn",children:"items"===t?Object(s.jsx)(w,{parentId:t}):Object(s.jsx)(E,{parentId:t})}),Object(s.jsx)("div",{className:"panelColumn",children:"items"===t?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(u,{btnSign:"+",toDispatch:{text:O,payload:null}}),Object(s.jsx)(u,{btnSign:"-",toDispatch:{text:m,payload:null}})]}):Object(s.jsx)(T,{parentId:t})})]})},N=Object(o.b)((function(e){return{clickedActionboxLetter:e.childComponent.clickedActionboxLetter,selectedCategory:e.childComponent.userSelectedCategory,selectedValue:e.childComponent.userSelectedValue,triggerComponentToReset:e.childComponent.triggerComponentToReset}}))((function(e){var t=e.bigLetterToDisplay,l=e.dispatch,a=e.clickedActionboxLetter,c=e.selectedCategory,r=e.selectedValue,o=e.triggerComponentToReset,u=Object(n.useRef)(),i=function(){return window.getComputedStyle(u.current,null)};return Object(n.useEffect)((function(){r&&a===t&&(u.current.style[c]=r,l({type:h,payload:{childComponentStye:i()}}))}),[r]),Object(n.useEffect)((function(){u.current.style.cssText="alignSelf: 'auto'; flexBasis: 'auto'; order: 0; flexGrow: 0;flexShrink: 1;"}),[o]),Object(s.jsx)("div",{ref:u,className:"actionBox",onClick:function(){l({type:g,payload:{childComponentStye:i(),clickedActionboxLetter:t}})},children:t})})),V=Object(o.b)((function(e){return{actionBox:e.actionBox,selectedCategory:e.parentComponent.userSelectedCategory,selectedValue:e.parentComponent.userSelectedValue,triggerComponentToReset:e.parentComponent.triggerComponentToReset}}))((function(e){var t=e.actionBox,l=e.selectedCategory,a=e.selectedValue,c=e.dispatch,r=e.triggerComponentToReset,o=Object(n.useRef)();Object(n.useEffect)((function(){var e=window.getComputedStyle(o.current,null);c({type:y,payload:{parentComponentStye:e}}),a&&(o.current.style[l]=a)}),[a]),Object(n.useEffect)((function(){o.current.style.cssText="flex-direction: row; flex-wrap: nowrap;justify-content: normal;align-items: normal;align-content: normal;"}),[r]);var u=Array.from(t.IDList.slice(0,t.quantity)).map((function(e){return Object(s.jsx)(N,{bigLetterToDisplay:e},e)}));return Object(s.jsx)("div",{ref:o,className:"demoScreen",children:u})}));var k=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)("div",{className:"settingsSide",children:[Object(s.jsx)(L,{title:"items"}),Object(s.jsx)(L,{title:"parent settings"}),Object(s.jsx)(L,{title:"item settings"})]}),Object(s.jsx)("div",{className:"demoSide",children:Object(s.jsx)(V,{})})]})},R=l(5),_=l(2),B={actionBox:{quantity:5,IDList:"ABCDEFGHIJKLMNOPQRSTUVXYWZ0123456789!@#$%&*()-+=<>/?|abcdefghijklmnopqrstuvxywz"},parentComponent:{computedStyle:null,userSelectedCategory:null,userSelectedValue:null,triggerComponentToReset:0},childComponent:{computedStyle:null,userSelectedCategory:null,userSelectedValue:null,clickedActionboxLetter:null,triggerComponentToReset:0}},D=Object(R.b)((function(e,t){switch(t.type){case O:return e.actionBox.quantity<e.actionBox.IDList.length?Object(_.a)(Object(_.a)({},e),{},{actionBox:Object(_.a)(Object(_.a)({},e.actionBox),{},{quantity:e.actionBox.quantity+1})}):e;case m:return e.actionBox.quantity>0?Object(_.a)(Object(_.a)({},e),{},{actionBox:Object(_.a)(Object(_.a)({},e.actionBox),{},{quantity:e.actionBox.quantity-1})}):e;case f:return"parent settings"===t.payload?Object(_.a)(Object(_.a)({},e),{},{parentComponent:Object(_.a)(Object(_.a)({},e.parentComponent),{},{userSelectedCategory:null,userSelectedValue:null,triggerComponentToReset:e.parentComponent.triggerComponentToReset+1})}):Object(_.a)(Object(_.a)({},e),{},{childComponent:Object(_.a)(Object(_.a)({},e.childComponent),{},{userSelectedCategory:null,userSelectedValue:null,clickedActionboxLetter:null,computedStyle:null,triggerComponentToReset:e.childComponent.triggerComponentToReset+1})});case x:case C:case v:return"PC"===t.payload.dropdownID?Object(_.a)(Object(_.a)({},e),{},{parentComponent:Object(_.a)(Object(_.a)({},e.parentComponent),{},{userSelectedCategory:t.payload.selectedValue})}):"PV"===t.payload.dropdownID?Object(_.a)(Object(_.a)({},e),{},{parentComponent:Object(_.a)(Object(_.a)({},e.parentComponent),{},{userSelectedValue:t.payload.selectedValue})}):"IC"===t.payload.dropdownID?Object(_.a)(Object(_.a)({},e),{},{childComponent:Object(_.a)(Object(_.a)({},e.childComponent),{},{userSelectedCategory:t.payload.selectedValue})}):"IV"===t.payload.dropdownID?Object(_.a)(Object(_.a)({},e),{},{childComponent:Object(_.a)(Object(_.a)({},e.childComponent),{},{userSelectedValue:t.payload.selectedValue})}):e;case y:return Object(_.a)(Object(_.a)({},e),{},{parentComponent:Object(_.a)(Object(_.a)({},e.parentComponent),{},{computedStyle:t.payload.parentComponentStye})});case g:return Object(_.a)(Object(_.a)({},e),{},{childComponent:Object(_.a)(Object(_.a)({},e.childComponent),{},{computedStyle:t.payload.childComponentStye,clickedActionboxLetter:t.payload.clickedActionboxLetter,userSelectedCategory:null,userSelectedValue:null})});case h:return Object(_.a)(Object(_.a)({},e),{},{childComponent:Object(_.a)(Object(_.a)({},e.childComponent),{},{computedStyle:t.payload.childComponentStye})});default:return e}}),B);r.a.render(Object(s.jsx)(o.a,{store:D,children:Object(s.jsx)(k,{})}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.bc12731d.chunk.js.map