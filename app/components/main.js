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
        <tr class="table-body" v-for="(list, i) in listbarcodes" :key="i" scope="row">
          <th class="list-text for-no"> {{ i+1 }} </th>
          <th class="list-text for-barcode"> {{ list.barcode }} </th>
          <th class="list-text for-qty"> {{ list.quantity_print }} </th>
          <th class="list-text for-sku"> {{ list.sku }} </th>
        </tr>
      </tbody>
    </table>
  </div>
  `,
  props: ['listbarcodes']
})
