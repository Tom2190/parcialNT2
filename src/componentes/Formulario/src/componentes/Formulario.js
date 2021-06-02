export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData : this.getInicialData(),
      formState: {},
      nombreLengthMin : 3,
      nombreLengthMax: 15,
      dniMin: 8,
      dniMax: 10,
      pagosMin: 0,
      pagos: []
    }
  },
  mounted () {

  },
  methods: {
    getInicialData() {
      const fechaHoy = new Date()
      let diaRegistro = `${fechaHoy.getDate()}/${1+fechaHoy.getMonth()}/${fechaHoy.getFullYear()} - ${fechaHoy.getHours()}:${fechaHoy.getMinutes()}:${fechaHoy.getSeconds()}`

      return {
        nombre: '',
        dni: '',
        deuda: '',
        pagoEfectuado: '',
        fechaHoy: diaRegistro
      }
    },
    enviar() {
      console.log({...this.formData})
      this.pagos.push(this.formData)
      this.formData = this.getInicialData()
      this.formState._reset()
    },
    pintarFila(idx) {
      let color
      const saldoDeuda = this.pagos[idx].deuda - this.pagos[idx].pagoEfectuado
      if (saldoDeuda > 0) {
        color = "table-danger"
      } else if (saldoDeuda === 0) {
        color = "table-success"
      } else {
        color = "table-info"
      }
      return color
    }
  }
}
