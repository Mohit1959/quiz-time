(this["webpackJsonpquiz-time"]=this["webpackJsonpquiz-time"]||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var o=n(1),i=n.n(o),c=n(5),a=n.n(c),r=(n(10),n(2)),s=(n(3),Object(o.createContext)()),u=n(0);var l=function(){var e=Object(o.useContext)(s),t=(e.gameState,e.setGameState);return Object(u.jsx)("div",{className:"mainMenu",children:Object(u.jsx)("button",{onClick:function(){t("quiz")},children:"Start Quiz"})})},j=[{prompt:"Which is the capital of India?",optionA:"Kolkata",optionB:"Banglore",optionC:"New Delhi",optionD:"Mumbai",answer:"C"},{prompt:"Thanos is a comic character which is related to:",optionA:"DC Comics",optionB:"Marvel Cimematic Universe",optionC:"Walt Disney",optionD:"None of these",answer:"B"},{prompt:"Who was the second Prime Minister of India?",optionA:"Jawaharlal Nehru",optionB:"Dr Rajaendra Prasad",optionC:"Sardar Vallabh Bhai Patel",optionD:"Lal Bahadur Shastri",answer:"D"},{prompt:"Hydrogen bomb is works on the principle of",optionA:"Nuclear Fusion",optionB:"Beta decay",optionC:"Alpha decay",optionD:"Nuclear Fision",answer:"A"},{prompt:"What is the virus called which causes the COVID-19",optionA:"MERS-Cov",optionB:"SARS-Cov-2",optionC:"SARS-Cov-1",optionD:"Ebola",answer:"B"}];var h=function(){var e=Object(o.useContext)(s),t=e.score,n=e.setScore,i=e.setGameState,c=Object(o.useState)(0),a=Object(r.a)(c,2),l=a[0],h=a[1],b=Object(o.useState)(""),p=Object(r.a)(b,2),d=p[0],m=p[1];return Object(u.jsxs)("div",{className:"quiz",children:[Object(u.jsx)("h1",{children:j[l].prompt}),Object(u.jsxs)("div",{className:"options",children:[Object(u.jsx)("button",{onClick:function(){return m("A")},children:j[l].optionA}),Object(u.jsx)("button",{onClick:function(){return m("B")},children:j[l].optionB}),Object(u.jsx)("button",{onClick:function(){return m("C")},children:j[l].optionC}),Object(u.jsx)("button",{onClick:function(){return m("D")},children:j[l].optionD})]}),l===j.length-1?Object(u.jsx)("button",{className:"submit",onClick:function(){j[l].answer===d&&n(t+1),i("endScreen")},children:"Submit"}):Object(u.jsx)("button",{className:"next",onClick:function(){j[l].answer===d&&n(t+1),h(l+1)},children:"Next Question"})]})};var b=function(){var e=Object(o.useContext)(s),t=e.score,n=e.setScore,i=e.setGameState;return Object(u.jsxs)("div",{className:"endScreen",children:[Object(u.jsx)("h1",{children:"Finished"}),Object(u.jsxs)("h3",{children:[" ",t," / ",j.length," "]}),Object(u.jsx)("button",{onClick:function(){n(0),i("menu")},children:" Restart Quiz "})]})};var p=function(){var e=Object(o.useState)("menu"),t=Object(r.a)(e,2),n=t[0],i=t[1],c=Object(o.useState)(0),a=Object(r.a)(c,2),j=a[0],p=a[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Quiz Time"}),Object(u.jsxs)(s.Provider,{value:{gameState:n,setGameState:i,score:j,setScore:p},children:["menu"===n&&Object(u.jsx)(l,{}),"quiz"===n&&Object(u.jsx)(h,{}),"endScreen"===n&&Object(u.jsx)(b,{})]})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,13)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),o(e),i(e),c(e),a(e)}))};a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),d()},3:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.1c6db315.chunk.js.map