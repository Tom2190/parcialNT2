<template>
        <div class="container">
          <h3 class="p-3 text-center">Multiple Choice</h3>
          <table class="table table-bordered table-dark">
            <thead>
              <tr>
                <th>Número de pregunta</th>
                <th>Respuesta</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(resultado,idx) in resultados" :key="idx" >
                <td>{{resultado.numero}}</td>
                <td>{{resultado.respuesta}}</td>
              </tr>
            </tbody>
          </table>
        </div>
</template>
      
<script lang="js">

  export default  {
    name: 'src-componentes-choice',
    props: [],
    mounted () {

    },
    data () {
      return {
        resultados: [
          {numero: '1',
            respuesta: ['b','d']},
            {
            numero: '2',
            respuesta: ['c']},
            {numero: '3',
            respuesta: ['b','e']}
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>
      