(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n(35)},24:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n.n(a),r=n(7),l=n.n(r),s=(n(23),n(24),n(2)),i=n(3),c=n(5),d=n(4),u=n(6),m=function(e){return o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"header__title"},o.a.createElement("h3",null," TO DO LIST ")))},h=n(13),p=n.n(h),f=function(e){function t(e){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).call(this,e))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(p.a,{className:"modal",contentLabel:"Error Message",isOpen:!!this.props.message,onAfterOpen:this.handleAfterOpen,onRequestClose:this.handleRequestClose,closeTimeoutMS:100,ariaHideApp:!1},o.a.createElement("div",null,o.a.createElement("p",null,this.props.message),o.a.createElement("button",{className:"button--small",onClick:this.props.handleCloseModal},"Okay"))))}}]),t}(o.a.Component),b=n(14),E=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).state={error:void 0},n.handleAddTodo=function(e){e.preventDefault();var t=e.target.elements.todo.value;t&&t.replace(/\s/g,"").length?n.props.lists.indexOf(t)>-1?n.setState(function(){return{error:"Todo already exists"}}):(n.setState(function(){return{error:void 0}}),n.props.onSubmit(t)):n.setState(function(){return{error:"Invalid Input"}}),e.target.elements.todo.value=""},n.handleCloseModal=function(){n.setState(function(){return{error:void 0}})},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",null,o.a.createElement(f,{handleCloseModal:this.handleCloseModal,message:this.state.error})),o.a.createElement("div",{className:"add-todo"},o.a.createElement(b.a,{className:"button--circle",onClick:this.props.handleAddTodo}),this.props.showForm&&o.a.createElement("form",{className:"todo",onSubmit:this.handleAddTodo},o.a.createElement("input",{className:"todo__content",type:"text",placeholder:"Add a New Todo",name:"todo"}),o.a.createElement("button",{className:"button"},"Add"))))}}]),t}(o.a.Component),v=n(15),O=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(c.a)(this,Object(d.a)(t).call(this,e))).handleDelete=function(){n.props.handleDelete(n.props.list)},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"list"},o.a.createElement("span",{className:"list__delete",onClick:this.handleDelete},o.a.createElement(v.a,{className:"list__delete--trash"})),o.a.createElement("li",{className:"list__content"},o.a.createElement("span",{className:"list__content--number"},this.props.count),this.props.list))}}]),t}(o.a.Component),j=function(e){return o.a.createElement("div",null,0===e.lists.length&&o.a.createElement("h3",{className:"widget__message"},"No Todos"),e.lists.map(function(t,n){return o.a.createElement(O,{key:t,list:t,count:n+1,handleDelete:e.handleDelete})}))},g=n(16),w=n.n(g),N=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(c.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={addTodo:!1,lists:["buy a new pair of shoes","buy a baby dinning chair","finish styling the react app","meet with a friend at 12pm"]},n.handleAddTodo=function(){n.setState(function(e){return{addTodo:!e.addTodo}})},n.handleDeleteTodo=function(e){n.setState(function(t){return{lists:t.lists.filter(function(t){return t!==e})}})},n.onSubmit=function(e){console.log("newTodo: "+e),n.setState(function(t){return{lists:t.lists.concat([e])}})},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"container"},o.a.createElement(m,null),o.a.createElement("div",{className:"widget"},o.a.createElement(j,{handleDelete:this.handleDeleteTodo,lists:this.state.lists})),o.a.createElement(E,{showForm:this.state.addTodo,handleAddTodo:this.handleAddTodo,lists:this.state.lists,onSubmit:this.onSubmit}))}}]),t}(o.a.Component),T=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"todo-printer"},o.a.createElement(N,{ref:function(t){return e.componentRef=t}}),o.a.createElement(w.a,{trigger:function(){return o.a.createElement("a",{className:"printer",href:"#"},"Print this list")},content:function(){return e.componentRef}}))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.f4dd12de.chunk.js.map