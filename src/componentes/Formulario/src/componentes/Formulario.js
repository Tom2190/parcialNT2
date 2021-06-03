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
      pagos: []
    }
  },
  computed: {
    total () {
      let total = 0
      if (!this.pagos.length) {
        total = 0
      } else {
        this.pagos.forEach(p => total += p.importe)
      }
      return total
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
        descripcion: '',
        importe: '',
        fechaHoy: diaRegistro,
        total: ''
      }
    },
    enviar() {
      console.log({...this.formData})
      this.pagos.push(this.formData)
      this.formData = this.getInicialData()
      this.formState._reset()
    },
    pintarTotal(total,presupuesto) {
      let color

      if(total > presupuesto) {
        color = "text-danger"
        } else if (total > 5000) {
        color = "text-warning"
      } else if (total < 1000) {
        color = "text-success"
      } else {
        color = "magenta"
      }
      return color
    }
  }
}
