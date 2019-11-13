(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(45)},38:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(15),l=n.n(c),u=n(9),o=n(10),s=n(12),i=n(11),m=n(13),h=n(48),p=n(49),f=n(50),d=n(51),g=n(7),v=n(8);function E(){var e=Object(g.a)(["\n    display: flex;\n    margin: 0;\n    align-items: center;\n    color: #fff;\n    list-style-type: none;\n    li {\n        margin-right: 20px;\n        font-size: 18px;\n    }\n"]);return E=function(){return e},e}function b(){var e=Object(g.a)(["\n    font-size: 24px;\n    color: #fff;\n    margin: 0;\n"]);return b=function(){return e},e}function w(){var e=Object(g.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: 80px;\n"]);return w=function(){return e},e}var k=v.a.div(w()),y=v.a.h3(b()),j=v.a.ul(E()),C=function(){return r.a.createElement(k,null,r.a.createElement(y,null,r.a.createElement("a",{href:"#"},"Game of Thrones DB")),r.a.createElement(j,null,r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Characters")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Houses")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Books"))))},x=n(3),O=n.n(x),S=n(14),N=function(){function e(){Object(u.a)(this,e),this._apiBase="https://www.anapioficeandfire.com/api"}return Object(o.a)(e,[{key:"getResource",value:function(){var e=Object(S.a)(O.a.mark(function e(t){var n;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._apiBase).concat(t));case 2:if((n=e.sent).ok){e.next=5;break}throw{message:"Could not fetch ".concat(t,", status ").concat(n.status),status:n.status};case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getAllCharacters",value:function(){var e=Object(S.a)(O.a.mark(function e(){var t;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/characters?page=5&pageSize=10");case 2:return t=e.sent,e.abrupt("return",t.map(this._transformCharacter));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getCharacter",value:function(){var e=Object(S.a)(O.a.mark(function e(t){var n;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/characters/".concat(t));case 2:return n=e.sent,e.abrupt("return",this._transformCharacter(n));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getAllBooks",value:function(){var e=Object(S.a)(O.a.mark(function e(){var t;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/books");case 2:return t=e.sent,e.abrupt("return",t.map(this._transformBook));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getBook",value:function(){var e=Object(S.a)(O.a.mark(function e(t){var n;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/books/".concat(t));case 2:return n=e.sent,e.abrupt("return",this._transformBook(n));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getAllHauses",value:function(){var e=Object(S.a)(O.a.mark(function e(){var t;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/houses");case 2:return t=e.sent,e.abrupt("return",t.map(this._transformHouse));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"getHause",value:function(){var e=Object(S.a)(O.a.mark(function e(t){var n;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getResource("/houses/".concat(t));case 2:return n=e.sent,e.abrupt("return",this._transformHouse(n));case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"_transformCharacter",value:function(e){return{name:e.name.length>0?e.name:"unknown",gender:e.gender.length>0?e.gender:"unknown",born:e.born.length>0?e.born:"unknown",died:e.died.length>0?e.died:"unknown",culture:e.culture.length>0?e.culture:"unknown"}}},{key:"_transformHouse",value:function(e){return{name:e.name.length>0?e.name:"unknown",region:e.region.length>0?e.region:"unknown",words:e.words.length>0?e.words:"unknown",title:e.title.length>0?e.title:"unknown",overlord:e.overlord.length>0?e.overlord:"unknown",ancestraWeapons:e.ancestraWeapons.length>0?e.ancestraWeapons:"unknown"}}},{key:"_transformBook",value:function(e){return{name:e.name.length>0?e.name:"unknown",numberOfPages:e.numberOfPages.length>0?e.numberOfPages:"unknown",publiser:e.publiser.length>0?e.publiser:"unknown",released:e.released.length>0?e.released:"unknown"}}}]),e}(),B=(n(38),function(){return r.a.createElement("div",{className:"lds-css ng-scope"},r.a.createElement("div",{className:"lds-spinner"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),R=n(46),I=n(47);function _(){var e=Object(g.a)(["\n    max-width: 100%;\n"]);return _=function(){return e},e}var A=v.a.img(_()),D=function(e){var t={404:{msg:"Somethin goes wrong",pic:"img/error.jpg"},410:{msg:"we are broken",pic:"img/ruins.jpg"},408:{msg:"we waiting too long..",pic:"img/time.jpg"}}[e.status],n=t.msg,c=t.pic;return r.a.createElement(a.Fragment,null,r.a.createElement(A,{src:""+c,alt:"error"}),r.a.createElement("span",null,n))};function M(){var e=Object(g.a)(["\n    background-color: #fff;\n    padding: 25px 25px 15px 25px; \n    margin-bottom: 40px;\n    border-radius: 0.25rem !important;\n    h4{\n        margin-bottom: 20px;\n        text-align: center;\n    }\n    li{\n        display: flex;\n        justify-content: space-between !important;\n    }import ErrorBoundary from '../errorMessage/errorMessage';\n\n"]);return M=function(){return e},e}var H=v.a.div(M()),L=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={char:{},loading:!0,error:!1,errorStatus:""},n.gotService=new N,n.onCharLoaded=function(e){n.setState({char:e,loading:!1,errorStatus:""})},n.onError=function(e){n.setState({error:!0,errorStatus:e,loading:!1})},n.updateChar=function(){var e=Math.floor(140*Math.random()+25);n.gotService.getCharacter(e).then(n.onCharLoaded).catch(function(e){n.onError(e.status)})},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.updateChar(),this.temerId=setInterval(this.updateChar,1500)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){console.log("render");var e=this.state,t=e.char,n=e.loading,a=e.error,c=e.errorStatus,l=a?r.a.createElement(D,{status:c}):null,u=n?r.a.createElement(B,null):null,o=n||l?null:r.a.createElement(z,{char:t});return r.a.createElement(H,null,l,u,o)}}]),t}(a.Component),z=function(e){var t=e.char,n=t.name,c=t.gender,l=t.born,u=t.died,o=t.culture;return r.a.createElement(a.Fragment,null,r.a.createElement("h4",null,"Random Character: ",n),r.a.createElement(R.a,{flush:!0},r.a.createElement(I.a,null,r.a.createElement("span",{className:"term"},"Gender"),r.a.createElement("span",null,c)),r.a.createElement(I.a,null,r.a.createElement("span",{className:"term"},"Born "),r.a.createElement("span",null,l)),r.a.createElement(I.a,null,r.a.createElement("span",{className:"term"},"Died "),r.a.createElement("span",null,u)),r.a.createElement(I.a,null,r.a.createElement("span",{className:"term"},"Culture "),r.a.createElement("span",null,o))))},P=L;function W(){var e=Object(g.a)(["\n    li{\n        cursor: pointer;\n    }\n"]);return W=function(){return e},e}var F=v.a.ul(W()),G=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).gotService=new N,n.state={charList:null},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.gotService.getAllCharacters().then(function(t){e.setState({charList:t})})}},{key:"renderItems",value:function(e){var t=this;return e.map(function(e,n){return r.a.createElement(I.a,{key:n,onClick:function(){return t.props.onCharSelected(41+n)}},e.name)})}},{key:"render",value:function(){var e=this.state.charList;if(!e)return r.a.createElement(B,null);var t=this.renderItems(e);return r.a.createElement(F,{className:"list-group"},t)}}]),t}(a.Component);function J(){var e=Object(g.a)(["\n    background-color: #fff;\n    padding: 25px 25px 15px 25px;\n    margin-bottom: 40px;\n    h4{\n        margin-bottom: 20px;\n        text-align: center;\n    }\n    li{\n        display: flex;\n    }\n"]);return J=function(){return e},e}var T=v.a.div(J()),U=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).gotService=new N,n.state={char:null},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"componentDidUpdate",value:function(e){this.props.charId!==e.charId&&this.updateChar()}},{key:"updateChar",value:function(){var e=this,t=this.props.charId;t&&(this.gotService.getCharacter(t).then(function(t){e.setState({char:t})}),this.foo.bar=0)}},{key:"render",value:function(){if(!this.state.char)return r.a.createElement("span",{className:"select-error"},"Please select a character");var e=this.state.char,t=e.name,n=e.gender,a=e.born,c=e.died,l=e.culture;return r.a.createElement(T,{className:"rounded"},r.a.createElement("h4",null,t),r.a.createElement(R.a,{flush:!0},r.a.createElement(I.a,{className:"justify-content-between"},r.a.createElement("span",{className:"term"},"Gender"),r.a.createElement("span",null,n)),r.a.createElement(I.a,{className:"justify-content-between"},r.a.createElement("span",{className:"term"},"Born"),r.a.createElement("span",null,a)),r.a.createElement(I.a,{className:"justify-content-between"},r.a.createElement("span",{className:"term"},"Died"),r.a.createElement("span",null,c)),r.a.createElement(I.a,{className:"justify-content-between"},r.a.createElement("span",{className:"term"},"Culture"),r.a.createElement("span",null,l))))}}]),t}(a.Component),q=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,c=new Array(a),l=0;l<a;l++)c[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={randomChar:!0,selectedChar:130},n.toggleRandomChar=function(){n.setState({randomChar:!n.state.randomChar})},n.showRandomChar=function(){return r.a.createElement(h.a,null,r.a.createElement(p.a,{lg:{size:5,offset:0}},r.a.createElement(P,null)))},n.onCharSelected=function(e){n.setState({selectedChar:e})},n}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.randomChar?this.showRandomChar():null;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,null,r.a.createElement(C,null)),r.a.createElement(f.a,null,e,r.a.createElement(h.a,null,r.a.createElement(p.a,{md:"6"},r.a.createElement(G,{onCharSelected:this.onCharSelected})),r.a.createElement(p.a,{md:"6"},r.a.createElement(U,{charId:this.state.selectedChar}))),r.a.createElement(d.a,{onClick:this.toggleRandomChar},"Toggle Random Character")))}}]),t}(a.Component);n(41),n(43);l.a.render(r.a.createElement(q,null),document.getElementById("root"))}},[[26,2,1]]]);
//# sourceMappingURL=main.12d05238.chunk.js.map