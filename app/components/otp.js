Vue.component('otp-main-and-submit', {
  template: `
    <div class="otp-parent">
      <div class="input-group mb-3">
        <input
          v-model="otpCode"
          type="text"
          class="form-control"
          placeholder="Masukan kode print anda...">
        <div class="input-group-append">
          <button
            @click="emitOTP"
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2">
            Submit
          </button>
        </div>
      </div>

      <div class="submit-print input-group mb-3">
        <div class="custome-input-group-append">
          <button
            @click="emitPRINT"
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2">
            Print Barcode
          </button>
        </div>
      </div>
    </div>
  `,
  data () {
    return {
      otpCode: ''
    }
  },
  methods: {
    emitOTP () {
      let self = this
      self.$emit('send-otp', self.otpCode)
    },
    emitPRINT () {
      let self = this
      self.$emit('send-print-barcode')
    }
  }
})
