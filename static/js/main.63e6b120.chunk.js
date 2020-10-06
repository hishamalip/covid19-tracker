(this["webpackJsonpcovid19-tracker"]=this["webpackJsonpcovid19-tracker"]||[]).push([[0],{52:function(e,a,t){e.exports=t(85)},57:function(e,a,t){},58:function(e,a,t){},85:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(23),c=t.n(l),s=(t(57),t(58),t(59),t(20)),i=t(5),d=t(7),m=t(8),o=t(10),u=t(9),E=t(94),h=t(93),v=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,{collapseOnSelect:!0,expand:"xl",bg:"dark",variant:"dark"},r.a.createElement(s.b,{to:"/covid19-tracker/",className:"navbar-brand"},"Covid-19 Tracker"),r.a.createElement(E.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(E.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(h.a,{className:"mr-auto"},r.a.createElement(s.b,{className:"nav-link",to:"/covid19-tracker/"},"World"),r.a.createElement(s.b,{className:"nav-link",to:"/covid19-tracker/india/"},"India"),r.a.createElement(s.b,{className:"nav-link",to:"/covid19-tracker/kerala/"},"Kerala")),r.a.createElement(h.a,null,r.a.createElement(h.a.Link,{href:"https://github.com/hishamalip/covid19-tracker/"},"Github"))))}}]),t}(r.a.Component),b=t(16),f=t.n(b),y=t(51),p=t(87),g=t(88),_=t(89),T=t(90),k=t(96),N=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(d.a)(this,t),(e=a.call(this)).state={worldcards_data:{}},e}return Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this;f.a.get("https://disease.sh/v2/all").then((function(a){e.setState({worldcards_data:a.data})}))}},{key:"render",value:function(){return r.a.createElement(p.a,{fluid:!0,className:"text-center"},r.a.createElement(g.a,null,r.a.createElement(_.a,{sm:"2"}," ",r.a.createElement("h2",null,"World")," ")),r.a.createElement(g.a,null,r.a.createElement(_.a,{sm:!0},r.a.createElement(T.a,null,r.a.createElement(k.a,{bg:"primary"},r.a.createElement(k.a.Header,{as:"h4"},"Total Cases"),r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,this.state.worldcards_data.cases),r.a.createElement(k.a.Text,null,"Today : ",this.state.worldcards_data.todayCases))),r.a.createElement(k.a,{bg:"warning"},r.a.createElement(k.a.Header,{as:"h4"},"Active Cases"),r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,this.state.worldcards_data.active),r.a.createElement(k.a.Text,null))),r.a.createElement(k.a,{bg:"danger"},r.a.createElement(k.a.Header,{as:"h4"},"Total Death"),r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,this.state.worldcards_data.deaths),r.a.createElement(k.a.Text,null,"Today : ",this.state.worldcards_data.todayDeaths))),r.a.createElement(k.a,{bg:"success"},r.a.createElement(k.a.Header,{as:"h4"},"Total Recovered"),r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,this.state.worldcards_data.recovered),r.a.createElement(k.a.Text,null)))))))}}]),t}(r.a.Component),w=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(d.a)(this,t),(e=a.call(this)).renderTable=function(){return e.state.world_data.map((function(e,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,a+1),r.a.createElement("td",{className:"table-active"},e.country),r.a.createElement("td",{className:"table-primary"},e.cases),r.a.createElement("td",{className:"table-warning"},e.todayCases),r.a.createElement("td",{className:"table-danger"},e.deaths),r.a.createElement("td",null,e.todayDeaths),r.a.createElement("td",{className:"table-success"},e.recovered),r.a.createElement("td",null,e.active),r.a.createElement("td",null,e.critical))}))},e.sortData=function(){var a=e.state.sort;e.setState({world_data:e.state.world_data.sort((function(e,t){var n=e.country.toUpperCase(),r=t.country.toUpperCase();return a?n<r?-1:n>r?1:0:n>r?-1:n<r?1:0})),sort:!e.state.sort})},e.state={world_data:[],sort:0},e}return Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this;f.a.get("https://disease.sh/v2/countries").then((function(a){e.setState({world_data:a.data})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p.a,{fluid:!0},r.a.createElement(g.a,null,r.a.createElement(_.a,null,r.a.createElement(N,null))),r.a.createElement(g.a,null,"\xa0"),r.a.createElement(g.a,null,r.a.createElement(_.a,null,r.a.createElement(y.a,{responsive:!0,bordered:!0,hover:!0,size:"sm"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",{onClick:this.sortData,style:{cursor:"pointer"}},"Country / Other",r.a.createElement("i",{class:this.state.sort?"fa fa-caret-down":"fa fa-caret-up",style:{marginLeft:"20px"},onClick:this.sortData})),r.a.createElement("th",{className:"bg-primary"},"Total Cases"),r.a.createElement("th",{className:"bg-warning"},"New Cases"),r.a.createElement("th",{className:"bg-danger"},"Total Deaths"),r.a.createElement("th",null,"New Deaths"),r.a.createElement("th",{className:"bg-success"},"Recovered"),r.a.createElement("th",null,"Active Cases"),r.a.createElement("th",null,"Serious / Critical"))),r.a.createElement("tbody",null,this.renderTable()))))))}}]),t}(r.a.Component),x=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(d.a)(this,t),(e=a.call(this)).state={indiacards_data:[]},e}return Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this;f.a.get("https://disease.sh/v2/countries/india").then((function(a){e.setState({indiacards_data:a.data})}))}},{key:"render",value:function(){return r.a.createElement(p.a,{fluid:!0,className:"text-center"},r.a.createElement(g.a,null,r.a.createElement(_.a,{sm:"2"}," ",r.a.createElement("h2",null,"India")," ")),r.a.createElement(g.a,null,r.a.createElement(_.a,{sm:!0},r.a.createElement(T.a,null,r.a.createElement(k.a,{bg:"primary"},r.a.createElement(k.a.Header,{as:"h4"},"Total Cases"),r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,this.state.indiacards_data.cases),r.a.createElement(k.a.Text,null,"Today : ",this.state.indiacards_data.todayCases))),r.a.createElement(k.a,{bg:"warning"},r.a.createElement(k.a.Header,{as:"h4"},"Active Cases"),r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,this.state.indiacards_data.active),r.a.createElement(k.a.Text,null))),r.a.createElement(k.a,{bg:"danger"},r.a.createElement(k.a.Header,{as:"h4"},"Total Death"),r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,this.state.indiacards_data.deaths),r.a.createElement(k.a.Text,null,"Today : ",this.state.indiacards_data.todayDeaths))),r.a.createElement(k.a,{bg:"success"},r.a.createElement(k.a.Header,{as:"h4"},"Total Recovered"),r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,this.state.indiacards_data.recovered),r.a.createElement(k.a.Text,null)))))))}}]),t}(r.a.Component),C=t(95),j=t(91),O=t(92),D=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=a.call(this,e)).renderTable=function(){return Object.keys(n.state.data).map((function(e,a){var t=n.state.data[e].districtData,l=0,c=0,s=0,i=0,d=0,m=0,o=[];for(var u in t){l+=t[u].confirmed,c+=t[u].delta.confirmed,s+=t[u].deceased,i+=t[u].delta.deceased,d+=t[u].recovered,m+=t[u].active;var E=t[u];E.district_name=u,o.push(E)}var h=o.map((function(e,a){return r.a.createElement("tr",null,r.a.createElement("td",null,a+1),r.a.createElement("td",null,e.district_name),r.a.createElement("td",null,e.confirmed),r.a.createElement("td",null,e.delta.confirmed),r.a.createElement("td",null,e.deceased),r.a.createElement("td",null,e.delta.deceased),r.a.createElement("td",null,e.recovered),r.a.createElement("td",null,e.active))}));return r.a.createElement(k.a,null,r.a.createElement(C.a.Toggle,{as:k.a.Header,variant:"primary",eventKey:a,className:"font-weight-bold"},r.a.createElement(j.a,{variant:"dark",style:{marginRight:"10px"}},e),r.a.createElement(O.a,{variant:"secondary"},"Confirmed-",l),"  ",r.a.createElement(O.a,{variant:"primary"},"New Cases-",c)," ",r.a.createElement(O.a,{variant:"secondary"},"Deaths-",s),"  ",r.a.createElement(O.a,{variant:"danger"},"New Deaths-",i),"  ",r.a.createElement(O.a,{variant:"success"},"Recoverd-",d),"  ",r.a.createElement(O.a,{variant:"warning"},"Active-",m),"  "),r.a.createElement(C.a.Collapse,{eventKey:a},r.a.createElement(k.a.Body,null,r.a.createElement(y.a,{responsive:!0,bordered:!0,hover:!0,size:"sm"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("td",null,"#"),r.a.createElement("td",null,"District"),r.a.createElement("td",{className:"bg-primary"},"Confirmed"),r.a.createElement("td",{className:"bg-warning"},"New Cases"),r.a.createElement("td",{className:"bg-danger"},"Deaths"),r.a.createElement("td",null,"New Deaths"),r.a.createElement("td",{className:"bg-success"},"Recoverd"),r.a.createElement("td",null,"Active"))),r.a.createElement("tbody",null,h)))))}))},n.state={data:{},distrct_data:{}},n}return Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this;f.a.get("https://api.covid19india.org/state_district_wise.json").then((function(a){e.setState({data:a.data})}))}},{key:"render",value:function(){return r.a.createElement(p.a,{fluid:!0},r.a.createElement(g.a,null,r.a.createElement(_.a,null,r.a.createElement(x,null))),r.a.createElement(g.a,null,"\xa0"),r.a.createElement(g.a,null,r.a.createElement(_.a,null,r.a.createElement(C.a,null,this.renderTable()))))}}]),t}(r.a.Component),B=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=a.call(this,e)).state={district_data:{}},n}return Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this;f.a.get("https://api.covid19india.org/state_district_wise.json").then((function(a){e.setState({district_data:a.data.Kerala.districtData})}))}},{key:"render",value:function(){var e=this,a=Object.keys(this.state.district_data),t=0,n=0,l=0,c=0,s=0,i=0,d=0;return a.map((function(a,r){t+=e.state.district_data[a].confirmed,n+=e.state.district_data[a].delta.confirmed,l+=e.state.district_data[a].active,c+=e.state.district_data[a].deceased,s+=e.state.district_data[a].delta.deceased,i+=e.state.district_data[a].recovered,d+=e.state.district_data[a].delta.recovered})),r.a.createElement(p.a,{fluid:!0,className:"text-center"},r.a.createElement(g.a,null,r.a.createElement(_.a,{sm:"2"}," ",r.a.createElement("h2",null,"Kerala")," ")),r.a.createElement(g.a,null,r.a.createElement(_.a,{sm:!0},r.a.createElement(T.a,null,r.a.createElement(k.a,{bg:"primary"},r.a.createElement(k.a.Header,{as:"h4"},"Total Cases"),r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,t),r.a.createElement(k.a.Text,null,"Today : ",n))),r.a.createElement(k.a,{bg:"warning"},r.a.createElement(k.a.Header,{as:"h4"},"Active Cases"),r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,l),r.a.createElement(k.a.Text,null))),r.a.createElement(k.a,{bg:"danger"},r.a.createElement(k.a.Header,{as:"h4"},"Total Deaths"),r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,c),r.a.createElement(k.a.Text,null,"Today : ",s))),r.a.createElement(k.a,{bg:"success"},r.a.createElement(k.a.Header,{as:"h4"},"Total Recovered"),r.a.createElement(k.a.Body,null,r.a.createElement(k.a.Title,null,i),r.a.createElement(k.a.Text,null,"Today : ",d)))))))}}]),t}(r.a.Component),H=function(e){Object(o.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(d.a)(this,t),(e=a.call(this)).renderTable=function(){return e.state.district_names.map((function(a,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t+1),r.a.createElement("td",{className:"table-active"},a),r.a.createElement("td",{className:"table-primary text-center"},e.state.district_data[a].confirmed),r.a.createElement("td",{className:"table-warning text-center"},e.state.district_data[a].delta.confirmed),r.a.createElement("td",{className:"text-center"},e.state.district_data[a].active),r.a.createElement("td",{className:"table-danger text-center"},e.state.district_data[a].deceased),r.a.createElement("td",{className:"text-center"},e.state.district_data[a].delta.deceased),r.a.createElement("td",{className:"table-success text-center"},e.state.district_data[a].recovered),r.a.createElement("td",{className:"text-center"},e.state.district_data[a].delta.recovered))}))},e.sortData=function(){e.setState({district_names:e.state.district_names.reverse(),sort:!e.state.sort})},e.state={district_data:{},district_names:[],sort:0},e}return Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=this;f.a.get("https://api.covid19india.org/state_district_wise.json").then((function(a){e.setState({district_data:a.data.Kerala.districtData,district_names:Object.keys(a.data.Kerala.districtData)})}))}},{key:"render",value:function(){return r.a.createElement(p.a,{fluid:!0},r.a.createElement(g.a,null,r.a.createElement(_.a,null,r.a.createElement(B,null))),r.a.createElement(g.a,null,"\xa0"),r.a.createElement(g.a,null,r.a.createElement(_.a,null,r.a.createElement(y.a,{responsive:!0,bordered:!0,hover:!0,"text-center":!0,size:"sm"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",{onClick:this.sortData,style:{cursor:"pointer"}},r.a.createElement("span",null,"District / Other"),r.a.createElement("i",{class:this.state.sort?"fa fa-caret-down":"fa fa-caret-up",style:{marginLeft:"20px"},onClick:this.sortData})),r.a.createElement("th",{className:"bg-primary text-center"},"Total Cases"),r.a.createElement("th",{className:"bg-warning text-center"},"New Cases"),r.a.createElement("th",{className:"text-center"},"Active Cases"),r.a.createElement("th",{className:"bg-danger text-center"},"Deaths"),r.a.createElement("th",{className:"text-center"},"New Deaths"),r.a.createElement("th",{className:"bg-success text-center"},"Recoved"),r.a.createElement("th",{className:"text-center"},"New Recovered"))),r.a.createElement("tbody",null,this.renderTable())))))}}]),t}(r.a.Component);var S=function(){return r.a.createElement(s.a,null,r.a.createElement("div",null,r.a.createElement(v,null)),r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/covid19-tracker/"},r.a.createElement(w,null)),r.a.createElement(i.a,{path:"/covid19-tracker/india/"},r.a.createElement(D,null)),r.a.createElement(i.a,{path:"/covid19-tracker/kerala/"},r.a.createElement(H,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.63e6b120.chunk.js.map