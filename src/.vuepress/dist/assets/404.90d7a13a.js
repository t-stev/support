import{e,u as t,f as o,r as a,o as n,c as l,a as s,t as u,w as r,b as m}from"./app.8b15d299.js";var c=e({name:"404",setup(){var e,a,n;const l=t(),s=o(),u=null!=(e=s.value.notFound)?e:["Not Found"];return{getMsg:()=>u[Math.floor(Math.random()*u.length)],homeLink:null!=(a=s.value.home)?a:l.value,homeText:null!=(n=s.value.backToHome)?n:"Back to home"}}});const h={class:"theme-container"},d={class:"theme-default-content"},i=s("h1",null,"404",-1);c.render=function(e,t,o,c,v,f){const k=a("RouterLink");return n(),l("div",h,[s("div",d,[i,s("blockquote",null,u(e.getMsg()),1),s(k,{to:e.homeLink},{default:r((()=>[m(u(e.homeText),1)])),_:1},8,["to"])])])};export default c;