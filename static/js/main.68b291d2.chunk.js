(this["webpackJsonpquote-generator"]=this["webpackJsonpquote-generator"]||[]).push([[0],{13:function(t,o,e){},15:function(t,o,e){},16:function(t,o,e){"use strict";e.r(o);var n=e(1),a=e.n(n),r=e(7),i=e.n(r),u=(e(13),e(8)),h=e(2),s=e(3),l=e(5),c=e(4),d=e(0),w=function(t){Object(l.a)(e,t);var o=Object(c.a)(e);function e(){return Object(h.a)(this,e),o.apply(this,arguments)}return Object(s.a)(e,[{key:"render",value:function(){var t=this.props.displayColor();return document.documentElement.style.backgroundColor="gray",Object(d.jsxs)("div",{style:{backgroundColor:"white"},className:"quotebox",children:[Object(d.jsxs)("div",{className:"fadeIn",style:{color:t},children:[Object(d.jsxs)("h1",{id:"quote",children:['"',this.props.quote,'"']}),Object(d.jsxs)("h5",{id:"author",children:["-",this.props.author?this.props.author:"Unknown","-"]})]},Math.random()),Object(d.jsx)("button",{style:{backgroundColor:t},id:"newquote",onClick:this.props.handleClick,children:"Random quote"})]})}}]),e}(a.a.Component),f=[{quote:"Sanity and Happiness are an impossible combination.",author:"Mark Twain"},{quote:"One's reach should always exceed one's grasp.",author:"Robert Browning"},{quote:"The placebo effect still works even if you know you are under the effect of a placebo.",author:"Unknown"},{quote:"People will forget what you said, people will forget what you did, but they will never forget how you made them feel.",author:"Maya Angelou"},{quote:"Remember how you felt when you wanted what you now have.",author:"Unknown"},{quote:"You would worry less about what people think of you if you realised how seldom they do.",author:"David Foster Wallace"},{quote:"Judge a man by only his ability to change.",author:"Unknown"},{quote:"A broken clock is right twice a day.",author:"Unknown"},{quote:"Stress is a choice",author:"Unknown"},{quote:"Nearly all men can stand adversity, but if you want to test a man's character, give him power.",author:"Abraham Lincoln"},{quote:"Ownership is a concept.",author:"Unknown"},{quote:"A good quote is the amalgamation of a lifetime's worth of thinking.",author:"Unknown"},{quote:"To bake an apple pie from scratch, you must first invent the universe.",author:"Carl Sagan"},{quote:"The wise man knows that he knows nothing.",author:"Unknown"},{quote:"'Normal' is relative.",author:"Unknown"},{quote:"After the game, the king and pawn go into the same box.",author:"Italian Proverb"},{quote:"In moderation, everything. Including moderation.",author:"Oscar Wilde"},{quote:"To be a poet is a condition, not a profession.",author:"Robert Frost"},{quote:"I think that if you can turn off the mind and look only with the eyes, ultimately everything becomes abstract",author:"Ellsworth Kelly"},{quote:"You only live once but if you do it right once is enough.",author:"Mae West"},{quote:"Moral absolution inhibits our ability to learn from our mistakes.",author:"Unknown"},{quote:"Initiation invokes reciprication.",author:"Unknown"},{quote:"Don't let perfect be the enemy of good",author:"Unknown"},{quote:"It is possible to communicate without speaking and to speak without communicating.",author:"Unknown"},{quote:"A realist is what an optimist calls a pessimist.",author:"Unknown"},{quote:"Changing anything changes everything.",author:"Unknown"},{quote:"An eye for an eye makes the whole world blind.",author:"Mahatma Gandhi"},{quote:"A gold-plated sh*t sandwich is still a sh*t sandwich.",author:"A wise friend"},{quote:"Let he who is without sin cast the first stone.",author:"Jesus Christ"}],m=(e(15),function(t){Object(l.a)(e,t);var o=Object(c.a)(e);function e(){var t;return Object(h.a)(this,e),(t=o.call(this)).handleClick=function(){var o=t.randomQuote();t.setState({quote:o.quote,author:o.author}),t.shuffleQuotes(f)},t.state={quote:f[4].quote,author:f[4].author},t}return Object(s.a)(e,[{key:"randomQuote",value:function(){var t=Math.floor(Math.random()*f.length);return f[t]}},{key:"shuffleQuotes",value:function(t){return t.sort((function(){return Math.random()-.5}))}},{key:"randomColor",value:function(){return"rgb(\n      ".concat(Math.floor(155*Math.random()),",\n      ").concat(Math.floor(155*Math.random()),",\n      ").concat(Math.floor(155*Math.random()),")")}},{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)(w,Object(u.a)({displayColor:this.randomColor,handleClick:this.handleClick},this.state))})}}]),e}(a.a.Component)),b=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,17)).then((function(o){var e=o.getCLS,n=o.getFID,a=o.getFCP,r=o.getLCP,i=o.getTTFB;e(t),n(t),a(t),r(t),i(t)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),b()}},[[16,1,2]]]);
//# sourceMappingURL=main.68b291d2.chunk.js.map