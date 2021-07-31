(this.webpackJsonpipl=this.webpackJsonpipl||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},41:function(e,t,c){},42:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(19),r=c.n(s),i=(c(27),c(28),c(8)),j=c.n(i),l=c(10),m=c(11),h=c(2),o=c(4),d=(c(30),c(31),c(0)),u=function(e){var t=e.match,c=e.teamName;if(!t)return null;var a=t.team1===c?t.team2:t.team1,n="/teams/"+a,s=c===t.matchWinner;return Object(d.jsxs)("div",{className:s?"MatchDetailCard won-card":"MatchDetailCard lost-card",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("span",{className:"vs",children:"vs"}),Object(d.jsx)("h1",{children:Object(d.jsx)(o.b,{to:n,children:a})}),Object(d.jsx)("h2",{className:"match-date",children:t.date}),Object(d.jsx)("h3",{className:"match-venue",children:t.venue}),Object(d.jsxs)("h3",{className:"match-result",children:[t.matchWinner," won by ",t.resultMargin," ",t.result]})]}),Object(d.jsxs)("div",{className:"additional-detail",children:[Object(d.jsx)("h3",{children:"First Inning"}),Object(d.jsx)("p",{children:t.team1}),Object(d.jsx)("h3",{children:"Second Inning"}),Object(d.jsx)("p",{children:t.team2}),Object(d.jsx)("h3",{children:"Man of the Match"}),Object(d.jsx)("p",{children:t.playerOfMatch}),Object(d.jsx)("h3",{children:"Umpire"}),Object(d.jsxs)("p",{children:[t.umpire1,", ",t.umpire2]})]})]})},b=(c(38),function(e){var t=e.match,c=e.teamName;if(!t)return null;var a=t.team1===c?t.team2:t.team1,n="/teams/"+a,s=c===t.matchWinner;return Object(d.jsxs)("div",{className:s?"MatchSmallCard won-card":"MatchSmallCard lost-card",children:[Object(d.jsx)("span",{className:"vs",children:"vs"}),Object(d.jsx)("h1",{children:Object(d.jsx)(o.b,{to:n,children:a})}),Object(d.jsxs)("p",{className:"match-result",children:[t.matchWinner," won by ",t.resultMargin," ",t.result]})]})}),O=c(21),x=function(){var e=Object(a.useState)(),t=Object(m.a)(e,2),c=t[0],n=t[1],s=Object(h.f)().teamName;return Object(a.useEffect)((function(){console.log("hi"),function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/team/").concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[s]),c&&c.teamName?Object(d.jsxs)("div",{className:"TeamPage",children:[Object(d.jsx)("div",{className:"team-name-section",children:Object(d.jsx)("h1",{className:"team-name",children:c.teamName})}),Object(d.jsxs)("div",{className:"win-loss-section",children:["Wins/Losses",Object(d.jsx)(O.PieChart,{data:[{title:"Losses",value:c.totalMatches-c.totalWins,color:"#a34d5d"},{title:"Wins",value:c.totalWins,color:"#4da375"}]})]}),Object(d.jsxs)("div",{className:"match-detail-section",children:[Object(d.jsx)("h3",{children:"latest Matches"}),Object(d.jsx)(u,{match:c.matches[0],teamName:s})]}),c.matches.slice(1).map((function(e,t){return Object(d.jsx)(b,{teamName:c.teamName,match:e},t)})),Object(d.jsx)("div",{className:"more-button",children:Object(d.jsx)(o.b,{to:"/teams/".concat(s,"/matches/").concat("2020"),children:"more >"})})]}):Object(d.jsx)("h1",{children:"not found"})},f=(c(39),c(40),function(e){var t=[];console.log(e);for(var c="2008";c<="2020";c++)t.push(c);return Object(d.jsx)("ol",{className:"YearSelector",children:t.map((function(t){return Object(d.jsx)("li",{children:Object(d.jsx)(o.b,{to:"/teams/".concat(e.teamName,"/matches/").concat(t),children:t})},t)}))})}),p=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),c=t[0],n=t[1],s=Object(h.f)(),r=s.teamName,i=s.year;return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/team/").concat(r,"/matches?year=").concat(i));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[r,i]),Object(d.jsxs)("div",{className:"MatchPage",children:[Object(d.jsxs)("div",{className:"year-selector",children:[Object(d.jsx)("h3",{children:"Select Year"}),Object(d.jsx)(f,{teamName:r})]}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("h1",{className:"page-header",children:[r," matches in ",i]}),c&&c.map((function(e,t){return Object(d.jsx)(u,{teamName:r,match:e},t)}))]})]})},v=(c(41),function(e){return Object(d.jsx)("div",{className:"TeamTile",children:Object(d.jsx)("h1",{children:Object(d.jsx)(o.b,{to:"/teams/".concat(e.teamName),children:e.teamName})})})}),N=(c(42),function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),c=t[0],n=t[1];return Object(a.useEffect)((function(){(function(){var e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("","/team/"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(d.jsxs)("div",{className:"Homepage",children:[Object(d.jsx)("div",{className:"header-section",children:Object(d.jsx)("h1",{className:"app-name",children:"IPL Dashboard"})}),Object(d.jsx)("div",{className:"team-grid",children:c.map((function(e,t){return Object(d.jsx)(v,{teamName:e.teamName},t)}))})]})});var g=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(o.a,{children:Object(d.jsxs)(h.c,{children:[Object(d.jsx)(h.a,{path:"/teams/:teamName/matches/:year",children:Object(d.jsx)(p,{})}),Object(d.jsx)(h.a,{path:"/teams/:teamName",children:Object(d.jsx)(x,{})}),Object(d.jsx)(h.a,{path:"/",children:Object(d.jsx)(N,{})})]})})})};c(22).config(),r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.9b7449aa.chunk.js.map