Vue.component('header-main', {
  template: `
    <div>
      <h3 v-if="datas[0]">Print Barcode {{ datas[0].cooperative.name }}</h3>
      <h3 v-else>Print Barcode</h3>
    </div>
  `,
  props: ['datas']
})
