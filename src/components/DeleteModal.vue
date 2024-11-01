<template>
<div class="modal fade" id="exampleModal" tabindex="-1"
aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header bg-primary">
        <h5 class="modal-title" id="exampleModalLabel">刪除確認</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ⚠️請問確定要刪除這筆資料!?
        <span>{{ tempProduct.title }}</span>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
        <button type="button" class="btn btn-danger"
        @click="$emit('delete-product',tempProduct)">刪除</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  name: 'DeleteModal',
  data() {
    return {
      modal: {},
      tempProduct: {},
    };
  },

  props: {
    product: {
      type: Object,
      default() { return {}; },
    },
  },

  watch: {
    product() {
      this.tempProduct = this.product;
    },
  },

  mixins: [modalMixin],
};
</script>

<style lang="scss">

.modal-header{
  h5{
    color: white;
  }
}
.modal-body{
  span{
    color: rgb(255,48,48);
    margin-left: 4px;
  }
}
</style>
