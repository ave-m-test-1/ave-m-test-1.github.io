(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["RedRecord"],{"04d1":function(e,t,o){var c=o("342f"),n=c.match(/firefox\/(\d+)/i);e.exports=!!n&&+n[1]},"2b6f":function(e,t,o){"use strict";o.r(t);o("99af"),o("fb6a");var c=o("7a23"),n={class:"record-container"},r={class:"top"},l={ref:"slide",class:"slide"},i={class:"info"},a={class:"color-333 font-14 block mt-5"},s={key:0,class:"color-FF3C3C font-22 block mt-10",style:{"font-weight":"500"}},d={key:1,class:"color-FF3C3C font-22 block mt-10",style:{"font-weight":"500"}},u={class:"color-999 font-14 block mt-10"},m={class:"content mt-10"},v={class:"flex"},f={key:0,class:"color-999"},b={key:1},p={key:2},k={key:3,class:"color-FF3C3C font-12",style:{"text-align":"right"}},h={class:"fl flex-start"},j=["onClick"],O={class:"ml-5"},g={class:"flex-start",style:{"flex-wrap":"wrap"}},y={class:"font-15"},w={key:1,class:"font-15 color-999"},C={class:"font-12 color-999 block"},_={class:"color-333"},B=Object(c["createTextVNode"])("  "),D={key:0,class:"color-FFDA71 block font-12"},$={key:1,class:"font-14 mt-40 color-333 block text-center"};function x(e,t,x,E,N,V){var S,A,F,R,I,P,H,L,M,z,T,U=Object(c["resolveComponent"])("van-nav-bar"),J=Object(c["resolveComponent"])("van-image"),q=Object(c["resolveComponent"])("van-count-down"),K=Object(c["resolveComponent"])("van-icon"),G=Object(c["resolveComponent"])("van-cell"),W=Object(c["resolveComponent"])("van-empty");return Object(c["openBlock"])(),Object(c["createElementBlock"])("section",n,[Object(c["createVNode"])(U,{"left-text":"","left-arrow":"",onClickLeft:t[0]||(t[0]=function(t){return e.$f.goBack()}),fixed:"",placeholder:"","safe-area-inset-top":"","z-index":"2",title:e.$t("seeLuck")},null,8,["title"]),Object(c["createElementVNode"])("div",r,[Object(c["createElementVNode"])("div",l,null,512),Object(c["createElementVNode"])("div",i,[Object(c["createVNode"])(J,{round:"",width:"0.8rem",height:"0.8rem","icon-size":"0.8rem","lazy-load":"","show-loading":"",style:{background:"#fff"},class:"icon-left",src:e.$f.formatIcon("".concat(N.redpacket.contract_address,"-").concat(N.redpacket.contract_chain)),"error-icon":o("aecc")},null,8,["src","error-icon"]),Object(c["createElementVNode"])("span",a,Object(c["toDisplayString"])((null===(S=N.redpacket)||void 0===S?void 0:S.symbol)||"---"),1),V.currentAccountRedPacket?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",s,Object(c["toDisplayString"])(e.$f.formatNumber2(null===(A=V.currentAccountRedPacket)||void 0===A?void 0:A.amount))+Object(c["toDisplayString"])(e.$t("per")),1)):(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",d,Object(c["toDisplayString"])(e.$t("whoSend",{user:N.redpacket.creator_nickname||((null===(F=N.redpacket.creator_address)||void 0===F||null===(R=F.slice)||void 0===R?void 0:R.call(F,0,4))||"")+"..."+((null===(I=N.redpacket.creator_address)||void 0===I||null===(P=I.slice)||void 0===P?void 0:P.call(I,-4))||"")})),1)),Object(c["createElementVNode"])("span",u,Object(c["toDisplayString"])(N.redpacket.remark),1)])]),Object(c["createElementVNode"])("div",m,[Object(c["createElementVNode"])("div",v,[N.list.length<(null===(H=N.redpacket)||void 0===H?void 0:H.count)?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",f,Object(c["toDisplayString"])(e.$t("tipRecordReceived",{n:N.list.length+"/"+(null===(L=N.redpacket)||void 0===L?void 0:L.count)||0,m:e.$f.formatNumber2(N.receiveAmount)+"/"+e.$f.formatNumber2(null===(M=N.redpacket)||void 0===M?void 0:M.total_amount)})),1)):(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",b,Object(c["toDisplayString"])(e.$t("tipRecordRobbed",{n:(null===(z=N.redpacket)||void 0===z?void 0:z.count)||0,m:e.$f.formatNumber2(null===(T=N.redpacket)||void 0===T?void 0:T.total_amount),z:N.time})),1)),3==N.status||4==N.status?(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",p,[N.timeHide?(Object(c["openBlock"])(),Object(c["createBlock"])(q,{key:0,time:N.timeCountDown,onChange:V.changeCountDown},null,8,["time","onChange"])):Object(c["createCommentVNode"])("",!0)])):(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",k,Object(c["toDisplayString"])(e.$f.filterRedPacketStatus(N.status)),1))]),N.list.length>0?(Object(c["openBlock"])(),Object(c["createElementBlock"])(c["Fragment"],{key:0},[(Object(c["openBlock"])(!0),Object(c["createElementBlock"])(c["Fragment"],null,Object(c["renderList"])(N.list,(function(t,o){return Object(c["openBlock"])(),Object(c["createBlock"])(G,{class:"flex",key:o,"value-class":"cell-right"},{title:Object(c["withCtx"])((function(){var o,n,r,l,i,a,s,d,u,m,v,f;return[Object(c["createElementVNode"])("div",h,[Object(c["createElementVNode"])("div",null,[t.user_image?(Object(c["openBlock"])(),Object(c["createBlock"])(J,{key:0,class:"chat-avatar",round:"",width:"0.8rem",height:"0.8rem","icon-size":"0.8rem","lazy-load":"","show-loading":"",src:V.isUser(t)&&(null===(o=e.$store.state.chat)||void 0===o||null===(n=o.userInfo)||void 0===n?void 0:n.image)||t.user_image,onClick:Object(c["withModifiers"])((function(o){return V.isUser(t)&&e.$router.push({name:"UserInfo"})}),["stop"])},null,8,["src","onClick"])):(Object(c["openBlock"])(),Object(c["createElementBlock"])("div",{key:1,class:"chat-avatar",style:Object(c["normalizeStyle"])({backgroundColor:"#"+(null===(r=t.user_address)||void 0===r?void 0:r.slice(-6)),color:V.avatarColor(t)}),onClick:Object(c["withModifiers"])((function(o){return V.isUser(t)&&e.$router.push({name:"UserInfo"})}),["stop"])},Object(c["toDisplayString"])(null===(l=t.user_address)||void 0===l?void 0:l.slice(-2)),13,j))]),Object(c["createElementVNode"])("div",O,[Object(c["createElementVNode"])("div",g,[V.formatRole(t)?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",{key:0,class:"role-tag",style:Object(c["normalizeStyle"])({backgroundColor:V.formatRole(t,"color")})},Object(c["toDisplayString"])(V.formatRole(t)),5)):Object(c["createCommentVNode"])("",!0),Object(c["createElementVNode"])("span",y,Object(c["toDisplayString"])(""!=t.user_nickname?t.user_nickname:((null===t||void 0===t||null===(i=t.user_address)||void 0===i||null===(a=i.slice)||void 0===a?void 0:a.call(i,0,4))||"")+"..."+((null===t||void 0===t||null===(s=t.user_address)||void 0===s||null===(d=s.slice)||void 0===d?void 0:d.call(s,-4))||"")),1),t.user_nickname?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",w,"("+Object(c["toDisplayString"])(((null===t||void 0===t||null===(u=t.user_address)||void 0===u||null===(m=u.slice)||void 0===m?void 0:m.call(u,0,4))||"")+"..."+((null===t||void 0===t||null===(v=t.user_address)||void 0===v||null===(f=v.slice)||void 0===f?void 0:f.call(v,-4))||""))+")",1)):Object(c["createCommentVNode"])("",!0)]),Object(c["createElementVNode"])("span",C,Object(c["toDisplayString"])(e.$f.formatDate(t.time)||"--"),1)])])]})),value:Object(c["withCtx"])((function(){return[Object(c["createElementVNode"])("div",_,[Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(e.$f.formatNumber2(t.amount)||0),1),B,Object(c["createElementVNode"])("span",null,Object(c["toDisplayString"])(e.$t("per")),1),N.bestLuckyAddress==t.user_address?(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",D,[Object(c["createVNode"])(K,{name:"good-job-o",class:"font-16"}),Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(e.$t("bestLuck")),1)])):Object(c["createCommentVNode"])("",!0)])]})),_:2},1024)})),128)),N.tx?(Object(c["openBlock"])(),Object(c["createElementBlock"])("a",{key:0,class:"font-14 mt-40 color-3F80F7 block text-center",onClick:t[1]||(t[1]=Object(c["withModifiers"])((function(){return V.jump&&V.jump.apply(V,arguments)}),["stop","prevent"])),href:"",target:"_blank"},Object(c["toDisplayString"])(e.$t("transferHash"))+": "+Object(c["toDisplayString"])(N.tx.slice(2,6)+"..."+N.tx.slice(-4)),1)):(Object(c["openBlock"])(),Object(c["createElementBlock"])("span",$,Object(c["toDisplayString"])(e.$t("transferHash"))+": --",1))],64)):(Object(c["openBlock"])(),Object(c["createBlock"])(W,{key:1,description:e.$t("emptyData")},null,8,["description"]))])])}var E=o("5530"),N=(o("b0c0"),o("4de4"),o("d3b7"),o("c740"),o("a434"),o("a9e3"),o("4e82"),o("365c")),V={name:"ChatRedRecord",data:function(){return{list:[],redpacket:{},receiveAmount:0,time:0,bestLuckyAddress:"",timeCountDown:0,timeHide:!1,status:0,tx:""}},watch:{packetId:function(){"ChatRedRecord"==this.$route.name&&(this.timeHide=!1,this.timeCountDown=0,this.viewDetailRedPacket())}},mounted:function(){this.viewDetailRedPacket()},computed:{currentAccountRedPacket:function(){var e=this;return this.list.filter((function(t){return t.user_address==e.$store.state.chat.userInfo.address||t.user_address==e.$store.state.currentAccount}))[0]},packetId:function(){return this.$route.query.packetId}},methods:{viewDetailRedPacket:function(){var e=this,t={groupId:this.$route.params.id,redPacketId:this.$route.query.packetId},o=this.$toast.loading({message:"Loading...",forbidClick:!0,duration:0});Object(N["Fc"])(t).then((function(t){var o,c,n,r,l;e.list=(null===t||void 0===t?void 0:t.receive_list)||[];var i,a,s=e.list.findIndex((function(t){return t.user_address===e.$store.state.chat.userInfo.address||t.user_address===e.$store.state.currentAccount}));if(-1!=s&&(e.list.unshift(e.list[s]),e.list.splice(s+1,1)),e.receiveAmount=e.list.reduce((function(e,t){return e+Number(t.amount)}),0),e.redpacket=Object(E["a"])(Object(E["a"])({},null===t||void 0===t?void 0:t.redpacket),{},{creator_image:t.creator_image,creator_nickname:t.creator_nickname}),e.list.length>=(null===(o=e.redpacket)||void 0===o?void 0:o.count)){var d=e.list.slice().sort((function(e,t){return t.time-e.time}));e.time=d[0].time-e.redpacket.created_time}if((e.list.length>=(null===(c=e.redpacket)||void 0===c?void 0:c.count)||2===t.status)&&0===e.redpacket.type&&e.list.length>0){var u=e.list.slice().sort((function(e,t){return t.amount-e.amount}));e.bestLuckyAddress=u[0].user_address}else e.bestLuckyAddress="";(e.status=t.status,1e3*((null===(n=e.redpacket)||void 0===n?void 0:n.created_time)+(null===(r=e.redpacket)||void 0===r?void 0:r.end_time))-(new Date).getTime()>0)?e.timeCountDown=1e3*((null===(i=e.redpacket)||void 0===i?void 0:i.created_time)+(null===(a=e.redpacket)||void 0===a?void 0:a.end_time))-(new Date).getTime():e.timeCountDown=0;e.timeCountDown>0&&(3==e.status||4==e.status)?e.timeHide=!0:e.timeHide=!1,e.tx=e.redpacket.unlock_tx||(null===(l=e.list[0])||void 0===l?void 0:l.tx)})).catch((function(t){e.$notify({type:"danger",message:"View Failed"}),console.log(t)})).finally((function(){o.clear()}))},changeCountDown:function(e){e&&0===(null===e||void 0===e?void 0:e.days)&&0===(null===e||void 0===e?void 0:e.hours)&&0===(null===e||void 0===e?void 0:e.minutes)&&0===(null===e||void 0===e?void 0:e.seconds)&&(this.timeHide=!1,this.timeCountDown=0,this.viewDetailRedPacket())},avatarColor:function(e){var t,o=null===(t=e.user_address)||void 0===t?void 0:t.slice(-6),c=.2126*Number("0x"+(null===o||void 0===o?void 0:o.slice(0,2))),n=.7152*Number("0x"+(null===o||void 0===o?void 0:o.slice(2,4))),r=.0722*Number("0x"+(null===o||void 0===o?void 0:o.slice(4,6))),l=c+n+r,i=l/255,a="hsl(0, 0%, ".concat(-999999*(i-.6),"%");return a},isUser:function(e){var t,o,c,n,r,l;return e.user_address===(null===(t=this.$store.state)||void 0===t||null===(o=t.chat)||void 0===o||null===(c=o.userInfo)||void 0===c?void 0:c.address)&&e.user_chain===(null===(n=this.$store.state)||void 0===n||null===(r=n.chat)||void 0===r||null===(l=r.userInfo)||void 0===l?void 0:l.chain)},formatRole:function(e){var t,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"name",c=2===e.group_role?1.5:e.group_role,n=Math.max(c,e.user_role),r={0:{name:"",role:0,color:"#1FD0A3"},1:{name:this.$t("admin"),role:1,color:"#1FD0A3"},1.5:{name:this.$t("projectParty"),role:1.5,color:"#3F80F7"},2:{name:this.$t("inspector"),role:2,color:"#FFC800"},3:{name:this.$t("superAdmin"),role:3,color:"#1FD0A3"}};return(null===r||void 0===r||null===(t=r[n])||void 0===t?void 0:t[o])||""},jump:function(){var e="https://bscscan.com/tx/".concat(this.tx);this.$f.openBrowser(e)}}},S=(o("f53b"),o("6b0d")),A=o.n(S);const F=A()(V,[["render",x],["__scopeId","data-v-4e92b3a2"]]);t["default"]=F},"4e82":function(e,t,o){"use strict";var c=o("23e7"),n=o("e330"),r=o("59ed"),l=o("7b0b"),i=o("07fa"),a=o("577e"),s=o("d039"),d=o("addb"),u=o("a640"),m=o("04d1"),v=o("d998"),f=o("2d00"),b=o("512c"),p=[],k=n(p.sort),h=n(p.push),j=s((function(){p.sort(void 0)})),O=s((function(){p.sort(null)})),g=u("sort"),y=!s((function(){if(f)return f<70;if(!(m&&m>3)){if(v)return!0;if(b)return b<603;var e,t,o,c,n="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:o=3;break;case 68:case 71:o=4;break;default:o=2}for(c=0;c<47;c++)p.push({k:t+c,v:o})}for(p.sort((function(e,t){return t.v-e.v})),c=0;c<p.length;c++)t=p[c].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}})),w=j||!O||!g||!y,C=function(e){return function(t,o){return void 0===o?-1:void 0===t?1:void 0!==e?+e(t,o)||0:a(t)>a(o)?1:-1}};c({target:"Array",proto:!0,forced:w},{sort:function(e){void 0!==e&&r(e);var t=l(this);if(y)return void 0===e?k(t):k(t,e);var o,c,n=[],a=i(t);for(c=0;c<a;c++)c in t&&h(n,t[c]);d(n,C(e)),o=n.length,c=0;while(c<o)t[c]=n[c++];while(c<a)delete t[c++];return t}})},"512c":function(e,t,o){var c=o("342f"),n=c.match(/AppleWebKit\/(\d+)\./);e.exports=!!n&&+n[1]},"7a50":function(e,t,o){},a434:function(e,t,o){"use strict";var c=o("23e7"),n=o("da84"),r=o("23cb"),l=o("5926"),i=o("07fa"),a=o("7b0b"),s=o("65f0"),d=o("8418"),u=o("1dde"),m=u("splice"),v=n.TypeError,f=Math.max,b=Math.min,p=9007199254740991,k="Maximum allowed length exceeded";c({target:"Array",proto:!0,forced:!m},{splice:function(e,t){var o,c,n,u,m,h,j=a(this),O=i(j),g=r(e,O),y=arguments.length;if(0===y?o=c=0:1===y?(o=0,c=O-g):(o=y-2,c=b(f(l(t),0),O-g)),O+o-c>p)throw v(k);for(n=s(j,c),u=0;u<c;u++)m=g+u,m in j&&d(n,u,j[m]);if(n.length=c,o<c){for(u=g;u<O-c;u++)m=u+c,h=u+o,m in j?j[h]=j[m]:delete j[h];for(u=O;u>O-c+o;u--)delete j[u-1]}else if(o>c)for(u=O-c;u>g;u--)m=u+c-1,h=u+o-1,m in j?j[h]=j[m]:delete j[h];for(u=0;u<o;u++)j[u+g]=arguments[u+2];return j.length=O-c+o,n}})},addb:function(e,t,o){var c=o("4dae"),n=Math.floor,r=function(e,t){var o=e.length,a=n(o/2);return o<8?l(e,t):i(e,r(c(e,0,a),t),r(c(e,a),t),t)},l=function(e,t){var o,c,n=e.length,r=1;while(r<n){c=r,o=e[r];while(c&&t(e[c-1],o)>0)e[c]=e[--c];c!==r++&&(e[c]=o)}return e},i=function(e,t,o,c){var n=t.length,r=o.length,l=0,i=0;while(l<n||i<r)e[l+i]=l<n&&i<r?c(t[l],o[i])<=0?t[l++]:o[i++]:l<n?t[l++]:o[i++];return e};e.exports=r},d998:function(e,t,o){var c=o("342f");e.exports=/MSIE|Trident/.test(c)},f53b:function(e,t,o){"use strict";o("7a50")}}]);