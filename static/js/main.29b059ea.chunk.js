(this["webpackJsonpclass-activities"]=this["webpackJsonpclass-activities"]||[]).push([[0],{54:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),c=a(28),r=a.n(c),i=a(8),l=a(2),o=a(10),d=a(11),j=a(13),b=a(12),h=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"This is my home page"})})}}]),a}(s.Component),m=a(29),p=a.n(m),u=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={products:[]},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://cors-anywhere.herokuapp.com/https://hub.dummyapis.com/products?noofRecords=10&idStarts=1001&currency=usd").then((function(t){e.setState({products:t.data})}))}},{key:"render",value:function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-sm-8 offset-sm-2 text-center",children:this.state.products.map((function(e){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("h1",{children:[e.name," - ",e.price]}),Object(n.jsx)("p",{children:e.description.substring(0,150)})]},e.id)}))})})})}}]),a}(s.Component),v=a(30),O=function(e){Object(j.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={emailAddress:"",password:""},e.handleInputChange=function(t){var a=t.target,n=a.name,s=a.value;e.setState(Object(v.a)({},n,s))},e.handleSubmit=function(t){t.preventDefault(),e.props.history.push("/shop")},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row",children:Object(n.jsxs)("div",{className:"col-sm-6 offset-sm-3",children:[Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-sm-12 text-center",children:Object(n.jsx)("h1",{children:"Welcome back!"})})}),Object(n.jsx)("div",{className:"row",children:Object(n.jsx)("div",{className:"col-sm-12 text-center",children:Object(n.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email address"}),Object(n.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",name:"emailAddress",value:this.state.emailAddress,onChange:this.handleInputChange})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"exampleInputPassword1",children:"Password"}),Object(n.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword1",name:"password",value:this.state.password,onChange:this.handleInputChange})]}),Object(n.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Login"})]})})})]})})})}}]),a}(s.Component);a(54);function x(){return Object(n.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",id:"navbar-chocolate",children:[Object(n.jsx)(i.b,{to:"/",className:"navbar-brand",children:"Mr Needful's Shop"}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(n.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(i.c,{to:"/",className:"nav-link",children:"Home"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(i.c,{to:"/shop",className:"nav-link",children:"Shop"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(i.c,{to:"/login",className:"nav-link",children:"Login"})})]})})]})}var f=function(){return Object(n.jsxs)(i.a,{children:[Object(n.jsx)(x,{}),Object(n.jsxs)(l.c,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/",component:h}),Object(n.jsx)(l.a,{exact:!0,path:"/shop",component:u}),Object(n.jsx)(l.a,{exact:!0,path:"/login",component:O})]})]})};r.a.render(Object(n.jsx)(f,{}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.29b059ea.chunk.js.map