<template>
    <div class="modal fade" id="exampleModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-primary">
            <h5 class="modal-title" id="exampleModalLabel">新增優惠券</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"
            aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <label for="coupon0" class="form-label coupon-input1">折扣名稱
                    <input type="number" class="form-control" id="coupon0" placeholder="請輸入折扣">
                  </label>
                  <label for="coupon4" class="form-label coupon-input4">描述
                    <input type="text" class="form-control" id="coupon4" placeholder="請輸入描述">
                  </label>
                  <div class="form-check">
                    <label class="form-check-label" for="is_enabled">
                      <input class="form-check-input" type="checkbox"
                        :true-value="1"
                        :false-value="0"
                        :id="is_enabled">
                      是否啟用
                    </label>
                  </div>
                </div>
                <div class="col-md-6">
                  <label for="coupon1" class="form-label coupon-input2">折扣
                    <input type="number" class="form-control" id="coupon1" placeholder="請輸入折扣">
                  </label>
                  <label for="coupon2" class="form-label coupon-input3">建立日期
                    <input type="date" class="form-control" id="coupon2" placeholder="請輸入日期">
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger">新增</button>
          </div>
        </div>
      </div>
    </div>
    </template>

<script>
import modalMixin from '@/mixins/modalMixin';

export default {
  name: 'CouponModal',
  data() {
    return {
      modal: {},
    };
  },
  mixins: [modalMixin],
};
</script>

<style lang="scss" scoped>

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
