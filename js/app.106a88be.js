(function(e){function t(t){for(var a,u,o=t[0],i=t[1],c=t[2],p=0,m=[];p<o.length;p++)u=o[p],Object.prototype.hasOwnProperty.call(s,u)&&s[u]&&m.push(s[u][0]),s[u]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);l&&l(t);while(m.length)m.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,o=1;o<r.length;o++){var i=r[o];0!==s[i]&&(a=!1)}a&&(n.splice(t--,1),e=u(u.s=r[0]))}return e}var a={},s={app:0},n=[];function u(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=a,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(r,a,function(t){return e[t]}.bind(null,a));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/thank-you-family/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=i;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"1f2f":function(e,t,r){"use strict";var a=r("4965"),s=r.n(a);s.a},"1f86":function(e,t,r){"use strict";var a=r("63e0"),s=r.n(a);s.a},4965:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),s={install:function(e,t){var r=t.auth;e.prototype.$auth=new e({data:function(){return{user:null}},methods:{init:function(){this.user=r.getConnectedUser()},login:function(e,t){this.user=r.login(e,t)},logout:function(){r.logout(),this.user=null}}})}};r("7db0"),r("b0c0");function n(e){return e.name?e.name:e.firstName&&e.lastName?e.firstName+" "+e.lastName:e.username}function u(e){return{username:e.username,displayName:n(e)}}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"user";return{getConnectedUser:function(){var e=localStorage.getItem(t);return e?JSON.parse(e):null},login:function(r,a){var s=e.find((function(e){return e.username===r&&e.password===a}));return s&&(s=u(s),localStorage.setItem(t,JSON.stringify(s))),s||null},logout:function(){localStorage.removeItem(t)}}}var i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.$auth.user?r("div",[r("button",{staticClass:"btn",attrs:{type:"button"},on:{click:e.$auth.logout}},[e._v("Log out")]),r("App")],1):r("LoginForm",{attrs:{errorMessage:e.errorMessage},on:{submit:e.login}})],1)},c=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("canvas",{attrs:{id:"my-canvas"}}),r("div",{staticClass:"welcome"},[r("h1",[e._v("Welcome "+e._s(e.$auth.user.displayName))]),r("br"),r("span",{staticClass:"text"},[e._v(e._s(e.message))]),r("br"),r("h1",{staticClass:"red"},[e._v("Tony")])])])},p=[],m=r("fb74"),d={mounted:function(){var e={target:"my-canvas"},t=new m["a"](e);t.render()},name:"App",data:function(){return{}},computed:{message:function(){var e="";switch(this.$auth.user.username){case"Yoan":e="HAPPY BIRTHDAY TO YOU !!! Même si tu as 20 ans tu resteras toujours mon petit frère. Que DIEU te bénisse qu'il te donne ce dont tu as besoin, qu'il te donne la paix, la joie, l'amour, de bonnes relations, la sagesse, l'intelligence, la santé, le succès, la réussite et que la grâce de DIEU soit sur toi !";break;case"papa Mardochée":e="Merci papa pour qui tu es. Merci encore. Voici une autre manière que j'ai trouvé pour te remercier de tout ce que tu es pour moi. Merci papa Mardochée. ";break;case"maman Rébecca":e="Merci maman Rébecca pour qui tu es. Pour ta vie merci Seigneur. Merci pour ton amour. Merci d'être là pour papa Mardochée, et aussi pour nous. Tu es une grande bénédiction pour chacun d'entre nous et le gloire revient à DIEU !!!";break;case"maman José":e="Merci maman José pour tes prières, ton soutien, ta présence, ta personne dans ma vie. Tu es une bénédiction pour moi et c'est une grâce que de t'avoir pour maman. MERCI SEIGNEUR POUR TA VIE !!! Que sa grâce soit sur toi, et que sa présence soit avec toi, que tu réussisses dans toutes tes entreprises  et que la clarté soit ton partage !!!";break;case"maman Éliane":e="Merci maman Éliane pour qui tu es. Le Seigneur nous a fait la grâce d'avoir une maman qui aime la cuisine, on a été bien nourris à chaque cellule !! Tu as cette affection pour les gens autour de toi, tu ressens les choses et tu restes connectée au Seigneur, merci maman ça me fait du bien. C'est une grâce que de t'avoir pour maman !! MERCI SEIGNEUR POUR TA VIE ! Tu es bénie toi et ta famille ! Que la grâce et la paix de DIEU soit avec toi !";break;case"Aurélie":e="You are one of the most beautiful women I know !!! Meci pour ta vie, tes exhortations, tes témoignages. Merci pour ton amour, pour ton soutien, merci Aurélie, sois bénie. MERCI SEIGNEUR POUR TA VIE !!! May his favor be upon you, may his presence be with you, be blessed in the city, be blessed in the field, be blessed in everything you do, let the LORD gives you the desires of your heart !";break;case"Jenny":e="Merci pour qui tu es. Merci pour ta vie, merci pour ton soutien. Que le Seigneur t'accorde de lui ressembler davantage ! Quil t'accorde de grandir RAPIDEMENT, et que tu sois très attachée à lui, inséparable. MERCI SEIGNEUR POUR TA VIE !!! Que DIEU te bénisse abondamment.";break;case"Lydie":e="Lydie, tu es une femme forte ! Merci pour qui tu es, encore pour ce que tu as fait, tu m'as coaché pour que je puisse avancer dans le monde professionnel, et tu continues, merci pour ta vie. C'est quelque chose dont je te suis reconnaissant et je ne sais pas tout ce que tu fais mais merci. Merci Seigneur pour ta douceur. Et merci parce que quand tu penses à moi c'est toujours pour me faire avancer, m'aider. MERCI SEIGNEUR POUR TA VIE !! Qu'il te bénisse abondamment, que tu ailles de progrès en progrès, de gloire en gloire, et que la promotion soit ton partage !";break;case"Christ":e="Merci Christ pour qui tu es. Tu es mon mentor, et j'ai beaucoup appris avec toi, surtout dans le caractère de Christ. Christ, tu es plus qu'un ami et plus qu'un frère. J'ai un peu l'impression de vivre ce que Jonathan et David vivaient. J'ai fait un songe où j'étais sur un terrain de foot et on ressentait la compétitivité dans l'atmosphère, où chacun doit se battre pour gagner. Mais quand tu es arrivé su le terrain, on a à peine commencé à parler et j'ai ressenti cet amour si grand, juste le fait d'être avec toi c'est génial. C'est une manière pour moi de t'honorer, et te montrer de l'amour aussi haha. Merci Seigneur pour ta vie et pour tout ce que tu fais pour moi, pour tes conseils et tout... C'est une grande grâce que d'être près de toi !";break;case"Sarah":e="Sarah !!! Merci pour tes gâteaux !!! Merci pour tes conseils, tes paroles, ta franchise !!! Merci pour qui tu es, tu es arrivée et tu nous as rejoins, tu nous apportes de ta personne, de tes compétences en cuisine aussi, et je suis sûr que tu continueras à faire bien plus ! Merci pour toutes les fois où tu as mis du gasoil dans ma voiture !!! Merci Seigneur pour ta vie, que DIEU te bénisse abondamment. Que sa face luise sur toi. Juste un petit message pour te bénir et te dire merci. Tu es une grâce, une bénédiction pour ma vie.";break;case"Abi":e="Merci Abi d'être là ! Que le Seigneur te bénisse, qu'il te donne la sagesse, et que tu puisses grandir pleinement dans ses voies ! Le Seigneur t'aime, et moi aussi ! Sois bénie";break;case"grand maman":e="Merci grand-maman. Merci pour ce que vous faites pour maman José, tout ce temps à rester à la maison, à garder Éliora. Merci je vous respecte, et je vous honore. Merci Seigneur pour votre vie. Soyez bénie grand-maman.";default:break}return e}}},f=d,v=(r("1f86"),r("2877")),g=Object(v["a"])(f,l,p,!1,null,"2b991fdd",null),b=g.exports,h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{staticClass:"image-form",on:{submit:function(t){return t.preventDefault(),e.submit()}}},[r("div",{staticClass:"form"},[e.errorMessage?r("p",{staticClass:"error"},[e._v(e._s(e.errorMessage))]):e._e(),r("div",{staticClass:"input-group"},[r("label",{attrs:{for:"select1"}},[e._v("Nom de la personne très chère :")]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"input first",attrs:{id:"select1"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.username=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"",selected:""}},[e._v("Choisissez")]),e._l(e.users,(function(t,a){return r("option",{key:a+t.username,domProps:{value:t.username}},[e._v(e._s(t.username))])}))],2)]),r("div",{staticClass:"input-group"},[r("label",{attrs:{for:"password1"}},[e._v("Mot de passe royal :")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"input second",attrs:{id:"password1",type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),e._m(0)])])},M=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"input-group"},[r("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Log in")])])}],y=[{username:"Yoan",password:"jesusislove"},{username:"papa Mardochée",password:"papa d'amour"},{username:"maman Rébecca",password:"maman d'amour"},{username:"maman José",password:"femme de priere"},{username:"maman Éliane",password:"oeil d'aigle"},{username:"Aurélie",password:"unsoleilradieux"},{username:"Jenny",password:"jesuslovesyou"},{username:"Lydie",password:"JesusTheCenter"},{username:"Christ",password:"plusquunfrere"},{username:"Sarah",password:"mamandesgateaux"},{username:"Abi",password:"superforte"},{username:"grand maman",password:"intercesseuse"}],w={props:{errorMessage:{type:String,default:""}},data:function(){return{username:"",password:"",users:y}},methods:{submit:function(){this.$emit("submit",{username:this.username,password:this.password})}}},q=w,E=(r("1f2f"),Object(v["a"])(q,h,M,!1,null,"27d76294",null)),_=E.exports,C={components:{App:b,LoginForm:_},data:function(){return{user:null,errorMessage:""}},methods:{login:function(e){var t=e.username,r=e.password;this.errorMessage="",this.$auth.login(t,r),this.$auth.user||(this.errorMessage="Authentication failed, please try again")}},created:function(){this.$auth.init()}},S=C,j=(r("d436"),Object(v["a"])(S,i,c,!1,null,"1dc31462",null)),I=j.exports;a["a"].use(s,{auth:o(y,"user")}),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(I)}}).$mount("#app")},"63e0":function(e,t,r){},"78f3":function(e,t,r){},d436:function(e,t,r){"use strict";var a=r("78f3"),s=r.n(a);s.a}});
//# sourceMappingURL=app.106a88be.js.map