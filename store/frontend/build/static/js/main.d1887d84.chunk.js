(window.webpackJsonpstore=window.webpackJsonpstore||[]).push([[0],{35:function(e,t,a){e.exports=a(67)},40:function(e,t,a){},42:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),c=a.n(l),o=(a(40),a(30)),i=a(6),u=a(9),s=a.n(u),m=a(12),d=a(10),p=(a(42),a(26)),E=a.n(p).a.create({baseURL:"http://localhost:4000"});a(60);function f(){return r.a.createElement("div",{className:"header"},r.a.createElement("h2",null,"Cadastro de Invent\xe1rio - Ativo/Sistema"))}var v=a(27),h=a(28),b=a(33),g=a(29),S=a(34),N=(a(61),function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(b.a)(this,Object(g.a)(t).call(this,e))).state={error:null,isLoaded:!1,items:[]},a}return Object(S.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:4000/api/item").then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,items:t.items})},function(t){e.setState({isLoaded:!0,error:t})})}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.items;return t?r.a.createElement("div",null,"Error: ",t.message):a?r.a.createElement("div",{className:"items-container"},n.map(function(e){return r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"card-body"},r.a.createElement("h5",{class:"card-title",key:e.name},"Ativo - ",e.name),r.a.createElement("h6",{class:"card-subtitle mb-2 text-muted"},"Sistema - ",e.system),r.a.createElement("p",{class:"card-subtitle mb-2 text-muted"},r.a.createElement("small",null,"ID - ",e._id))))})):r.a.createElement("div",null,"Loading...")}}]),t}(r.a.Component));function w(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(d.a)(c,2),i=o[0],u=o[1],p=Object(n.useState)(""),v=Object(d.a)(p,2),h=v[0],b=v[1];function g(){return(g=Object(m.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,E.post("/api/item",{name:a,system:i});case 3:l(""),u(""),window.location.reload();case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}function S(){return(S=Object(m.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,E.delete("/api/item/".concat(h));case 3:b(""),window.location.reload();case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement("div",{className:"input-container"},r.a.createElement("form",{onSubmit:function(e){return g.apply(this,arguments)},className:"form-add"},r.a.createElement("input",{placeholder:"Digite o nome do Ativo",value:a,onChange:function(e){return l(e.target.value)}}),r.a.createElement("input",{placeholder:"Digite o nome do Sistema",value:i,onChange:function(e){return u(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"btn btn-dark"},"Cadastrar")),r.a.createElement("form",{onSubmit:function(e){return S.apply(this,arguments)},className:"form-delete"},r.a.createElement("input",{placeholder:"Digite o ID do Ativo para excluir",value:h,onChange:function(e){return b(e.target.value)}}),r.a.createElement("button",{type:"submit",className:"btn btn-danger"},"Excluir"))),r.a.createElement("div",{className:"legenda"},r.a.createElement("ul",null,r.a.createElement("h5",null,"Legenda"),r.a.createElement("li",null,r.a.createElement("strong",null,"GNCAS")," = Datacenter Campinas"),r.a.createElement("li",null,"GNCAS",r.a.createElement("strong",null,"N")," = Datacenter Norte"),r.a.createElement("li",null,"GNCAS",r.a.createElement("strong",null,"S")," = Datacenter Sul"),r.a.createElement("li",null,"GNCASN",r.a.createElement("strong",null,"TL")," = SO Linux Red Hat"),r.a.createElement("li",null,"GNCASN",r.a.createElement("strong",null,"TW")," = SO Windows"))),r.a.createElement(N,null))}function O(){return r.a.createElement(o.a,null,r.a.createElement(i.a,{path:"/",exact:!0,component:w}),r.a.createElement(i.a,{path:"/main",component:w}))}var j=function(){return r.a.createElement(O,null)};c.a.render(r.a.createElement(j,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.d1887d84.chunk.js.map