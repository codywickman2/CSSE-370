!function(e){var t={};function n(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(s,o,function(t){return e[t]}.bind(null,o));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=React},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const s=n(0),o=n(2),i=n(3);const r=document.getElementById("root");o.render(s.createElement((function(){return s.createElement("div",{className:"App"},s.createElement(i.MainQuiz,null))}),null),r)},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";n.r(t),n.d(t,"MainQuiz",(function(){return r}));var s=n(0),o=n.n(s);const i=[{id:0,question:" How many field players are in at a time during Water Polo Game ?",options:["6","7","9"],answer:"6"},{id:1,question:"How long is the shot clock per possesion?",options:["35 sec","30 sec","20 sec"],answer:"30 sec"},{id:2,question:"Who is considered the greatest mens US Water Polo Olympian",options:["Jeff Powers","Jesse Smith","Tony Azavedo"],answer:"Tony Azavedo"},{id:3,question:"Who won Gold in Mens Water Polo at 2016 Olympics?",options:["USA","Serbia","Italy"],answer:"Italy"}];class r extends o.a.Component{constructor(e){super(e),this.state={currentQuestion:0,myAnswer:null,options:[],score:0,disabled:!0,isEnd:!1},this.loadQuizData=()=>{this.setState(()=>({questions:i[this.state.currentQuestion].question,answer:i[this.state.currentQuestion].answer,options:i[this.state.currentQuestion].options}))},this.nextQuestionHandler=()=>{const{myAnswer:e,answer:t,score:n}=this.state;e===t&&this.setState({score:n+1}),this.setState({currentQuestion:this.state.currentQuestion+1}),console.log(this.state.currentQuestion)},this.checkAnswer=e=>{this.setState({myAnswer:e,disabled:!1})},this.finishHandler=()=>{this.state.currentQuestion===i.length-1&&this.setState({isEnd:!0})}}componentDidMount(){this.loadQuizData()}componentDidUpdate(e,t){this.state.currentQuestion!==t.currentQuestion&&this.setState(()=>({disabled:!0,questions:i[this.state.currentQuestion].question,options:i[this.state.currentQuestion].options,answer:i[this.state.currentQuestion].answer}))}render(){const{options:e,myAnswer:t,currentQuestion:n,isEnd:s}=this.state;return s?o.a.createElement("div",{className:"result"},o.a.createElement("h3",null,"Game Over. Your Final score is ",this.state.score," points "),o.a.createElement("p",null,"The correct answer's for the questions were",o.a.createElement("ul",null,i.map((e,t)=>o.a.createElement("li",{className:"ui floating message options",key:t},e.answer))))):o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,this.state.questions," "),o.a.createElement("span",null,`Question ${n+1} out of ${i.length}`),e.map(e=>o.a.createElement("p",{key:e.id,className:`ui floating message options\n         ${t===e?"selected":null}\n         `,onClick:()=>this.checkAnswer(e)},e)),n<i.length-1&&o.a.createElement("button",{className:"nextButton",disabled:this.state.disabled,onClick:this.nextQuestionHandler},"Next"),n===i.length-1&&o.a.createElement("button",{className:"ui inverted button",onClick:this.finishHandler},"Finish"))}}}]);
//# sourceMappingURL=main.js.map
