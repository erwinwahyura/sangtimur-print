Vue.component('main-list-barcode', {
  template: `
  <div class="table-parent">
    <table class="table table-striped">
      <thead>
        <tr class="table-header">
          <th scope="col" class="col-for-no">No</th>
          <th scope="col" class="col-for-barcode">Barcode</th>
          <th scope="col" class="col-for-qty">Qty Print</th>
          <th scope="col" class="col-for-sku">SKU</th>
        </tr>
      </thead>
      <tbody>
        <tr class="table-body" v-for="(list, i) in datas[0].barcode_list" :key="i" scope="row">
          <th class="list-text for-no"> {{ i+1 }} </th>
          <th class="list-text for-barcode" v-if="list.barcode"> {{ list.barcode }} </th>
          <th class="list-text for-qty" v-if="list.quantity_print"> {{ list.quantity_print }} </th>
          <th class="list-text for-sku" v-if="list.nama_sku && list.size"> {{ list.nama_sku }} - {{ list.size }} </th>
          <th class="list-text for-sku" v-else="list.nama_sku"> {{ list.nama_sku }} </th>
        </tr>
      </tbody>
    </table>
  </div>
  `,
  props: ['datas'],
  created () {
    console.log(this.datas);
  }
})
