## 📱作業日記:
- 2024/09/13 創建github master 分支線，並將vue CLi專案建立完成
- 2024/09/13 將預設的分支改為master
- 2024/09/18 串接、設計登入畫面
- 2024/09/18 設計導覽列、製作登出功能、設計商品控制頁面
- 2024/09/20 新增商品控制頁面功能v-for和getproducts()
- 2024/09/23 商品新增功能、跳出視窗美版、編輯產品、props emit資料內外層傳輸
- 2024/09/24 讀取畫面更新、刪除商品


## 🛠️常用指令:
npm run lint -- --fix (自動整理排版)

## 🛠️重點語法:
- 發送遠程API
```
VUE_APP_API = https://vue3-course-api.hexschool.io/
VUE_APP_PATH = junhou-api
```
```
const api = `${process.env.VUE_APP_API}api/user/check`;
  this.$http.post(api)
    .then((res) => {
  });
```
- $props 和 $emit 功能要遵循前內後外的原則
```
// 內層
click="$emit('update-product',tempProduct)"
// 外層
:product="tempProduct"  @update-product="updateProduct"
```
- loading 引入使用
```
// 先安裝依賴項 npm install vue3-loading-overlay     
// main.js 引入
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
// main.js 全域註冊
app.component('LoadingApp', Loading);
```
