"use strict";(self["webpackChunkfinal_vue"]=self["webpackChunkfinal_vue"]||[]).push([[932],{4932:function(s,n,e){e.r(n),e.d(n,{default:function(){return h}});var i=e(6768),t=e(5130);const a={class:"container mt-5"},o={class:"row justify-content-center"},d={class:"col-md-4 form-background"},r={class:"mb-3"},l={for:"inputEmail",class:"labinput mb-1"},u={class:"mb-2"},c={for:"inputPassword",class:"labinput"},p={class:"text-end mt-4"};function k(s,n,e,k,m,L){const b=(0,i.g2)("LoadingApp");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(b,{active:m.isLoading},{default:(0,i.k6)((()=>n[3]||(n[3]=[(0,i.Lk)("div",{class:"loadingio-spinner-double-ring-nq4q5u6dq7r"},[(0,i.Lk)("div",{class:"ldio-x2uulkbinbj"},[(0,i.Lk)("div"),(0,i.Lk)("div"),(0,i.Lk)("div",null,[(0,i.Lk)("div")]),(0,i.Lk)("div",null,[(0,i.Lk)("div")])])],-1)]))),_:1},8,["active"]),(0,i.Lk)("div",a,[(0,i.Lk)("form",o,[(0,i.Lk)("div",d,[n[6]||(n[6]=(0,i.Lk)("h1",{class:"h3 mb-4 font-weight-normal d-flex justify-content-center"},"後台管理登入",-1)),(0,i.Lk)("div",r,[(0,i.Lk)("label",l,[n[4]||(n[4]=(0,i.eW)("電子郵件 ")),(0,i.bo)((0,i.Lk)("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address",required:"","onUpdate:modelValue":n[0]||(n[0]=s=>m.user.username=s)},null,512),[[t.Jo,m.user.username]])])]),(0,i.Lk)("div",u,[(0,i.Lk)("label",c,[n[5]||(n[5]=(0,i.eW)("密碼 ")),(0,i.bo)((0,i.Lk)("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"Password",required:"","onUpdate:modelValue":n[1]||(n[1]=s=>m.user.password=s)},null,512),[[t.Jo,m.user.password]])])]),(0,i.Lk)("div",p,[(0,i.Lk)("button",{class:"btn btn-md main-btn",type:"submit",onClick:n[2]||(n[2]=(0,t.D$)(((...s)=>L.signIn&&L.signIn(...s)),["prevent"]))},"登入")])])])])],64)}e(4114);var m={name:"AdminLogin",data(){return{user:{username:"",password:""},isLoading:!1}},methods:{signIn(){const s="https://vue3-course-api.hexschool.io/admin/signin";this.isLoading=!0,this.$http.post(s,this.user).then((s=>{if(s.data.success){const{token:n,expired:e}=s.data;document.cookie=`hexToken=${n}; expires=${new Date(e)};`,this.$router.push("/dashboard/controlpd"),this.isLoading=!1}}))}}},L=e(1241);const b=(0,L.A)(m,[["render",k]]);var h=b}}]);
//# sourceMappingURL=932.021d8565.js.map