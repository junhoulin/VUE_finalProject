"use strict";(self["webpackChunkfinal_vue"]=self["webpackChunkfinal_vue"]||[]).push([[315],{8315:function(t,i,s){s.r(i),s.d(i,{default:function(){return y}});var n=s(6768),e=s(4232),o=s(5130);const a={class:"content1"},d={class:"container"},r={class:"row"},c={class:"col-md-6 itemimg"},u=["src"],l={class:"col-md-6 text-start describe"},p=["innerHTML"],h={for:"price",class:"form-label"},L={class:"d-flex justify-content-between align-items-center"},k=["disabled"],v={key:0,class:"spinner-grow text-warning spinner-grow-sm mx-1",role:"status"};function g(t,i,s,g,m,b){const f=(0,n.g2)("LoadingApp");return(0,n.uX)(),(0,n.CE)("div",a,[(0,n.bF)(f,{active:m.isLoading},{default:(0,n.k6)((()=>i[2]||(i[2]=[(0,n.Lk)("div",{class:"loadingio-spinner-double-ring-nq4q5u6dq7r"},[(0,n.Lk)("div",{class:"ldio-x2uulkbinbj"},[(0,n.Lk)("div"),(0,n.Lk)("div"),(0,n.Lk)("div",null,[(0,n.Lk)("div")]),(0,n.Lk)("div",null,[(0,n.Lk)("div")])])],-1)]))),_:1},8,["active"]),(0,n.Lk)("div",d,[(0,n.Lk)("div",r,[(0,n.Lk)("div",c,[(0,n.Lk)("img",{src:m.product.imageUrl,class:"productimg",alt:""},null,8,u)]),(0,n.Lk)("div",l,[(0,n.Lk)("h2",null,(0,e.v_)(m.product.category),1),(0,n.Lk)("h4",null,(0,e.v_)(m.product.title),1),(0,n.Lk)("p",{innerHTML:b.formatContent(m.product.content)},null,8,p),(0,n.Lk)("label",h,[i[3]||(i[3]=(0,n.eW)("👨‍👨‍👧‍👧 數量 : ")),(0,n.bo)((0,n.Lk)("input",{type:"number",class:"form-control","onUpdate:modelValue":i[0]||(i[0]=t=>m.qty=t),placeholder:"請輸入數量",min:"1",max:"18",step:"1",value:"1"},null,512),[[o.Jo,m.qty]])]),(0,n.Lk)("div",L,[(0,n.Lk)("h3",null,"定價: "+(0,e.v_)(m.product.price)+" /"+(0,e.v_)(m.product.unit),1),(0,n.Lk)("button",{class:"btn btn-primary",onClick:i[1]||(i[1]=t=>b.addProduct(m.product.id)),disabled:this.status.LoadingItem===m.product.id},[this.status.LoadingItem===m.product.id?((0,n.uX)(),(0,n.CE)("div",v,i[4]||(i[4]=[(0,n.Lk)("span",{class:"visually-hidden"},"Loading...",-1)]))):(0,n.Q3)("",!0),i[5]||(i[5]=(0,n.eW)("我要打球"))],8,k)])])])])])}var m={name:"SingleProduct",data(){return{id:"",product:{},qty:1,isLoading:!1,status:{LoadingItem:""}}},methods:{getProduct(){const t=`https://vue3-course-api.hexschool.io/api/junhou-api/product/${this.id}`;this.isLoading=!0,this.$http.get(t).then((t=>{t.data.success&&(this.product=t.data.product,this.isLoading=!1)}))},addProduct(t){const i="https://vue3-course-api.hexschool.io/api/junhou-api/cart";this.status.LoadingItem=t;const s={product_id:t,qty:this.qty};this.$http.post(i,{data:s}).then((t=>{this.status.LoadingItem="",console.log(t)}))},formatContent(t){return t?t.replace(/\n/g,"<br>"):""}},created(){this.id=this.$route.params.productID,this.getProduct()}},b=s(1241);const f=(0,b.A)(m,[["render",g]]);var y=f}}]);
//# sourceMappingURL=315.5c488fcc.js.map