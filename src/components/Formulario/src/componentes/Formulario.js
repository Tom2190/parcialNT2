export default {
  name: 'formulario',
  components: {},
  props: [],
  data () {
    return {
      formData: this.getInicialData(),
      formDirty: this.getInicialData()
    }
  },
  computed: {
  },
  mounted () {
  },
  methods: {
    getInicialData () {
      return {
        nombre: '',
        apellido: '',
        edad: '',
        email: ''
      }
    },
    enviar () {
      console.log({ ...this.formData })
      this.formData = this.getInicialData()
      this.formDirty = this.getInicialData()
    }
  }
}
