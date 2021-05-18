<template>

  <section class="src-componentes-http">
    <div class="jumbotron">
        <h2>Usuarios</h2>
        <hr>

        <button class="btn btn-danger my-3 mr-3" @click="getPostsCb()" >Pedir XMLHttpRequest</button>
        <button class="btn btn-warning my-3 mr-3" @click="getPostsFetch()" >Pedir Fetch</button>
        <button class="btn btn-success my-3" @click="getPostsAxios()" >Pedir Axios</button>

        <div v-if="posts.length" class="table-responsive">
          <table class="table table-dark">
            <tr>
              <th v-for="(col,index) in getCols" :key="index">{{col}}</th>
            </tr>

            <tr v-for="(post,index) in posts" :key="index">
              <td v-for="(col,index) in getCols" :key="index">{{post[col]}}</td>
            </tr>
          </table>
          <h4 class="alert alert-primary">Se encontraron {{posts.length}} posts.</h4>
        </div>
        <h4 v-else class="alert alert-warning">No se encontraron posts</h4>
    </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-http',
    props: [],
    mounted () {

    },
    data () {
      return {
        url : 'https://60a42f8cfbd48100179dbb56.mockapi.io/usuarios/',
        posts : []
      }
    },
    methods: {

      getPostsCb() {
        let xhr = new XMLHttpRequest
        xhr.open('get',this.url)
        xhr.addEventListener('load', () => {
          if(xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response)
            console.log('XMLHttpRequest', respuesta)
            this.posts = respuesta
          }
          else {
            console.error(`Error en GET -> status: ${xhr.status}`)
          }
        })
        xhr.addEventListener('error', e => {
          console.error('Error XMLHttpRequest ->',e)
        })
        xhr.send()
      },

      getPostsFetch() {
        fetch(this.url)
        .then(datos => datos.json())
        .then(respuesta => {
          console.log('FETCH',respuesta)
          this.posts = respuesta
        })
        .catch(error => console.error(error))
      },

      getPostsAxios() {
        this.axios(this.url)
        .then( respuesta => {
          console.log('AXIOS',respuesta.data)
          this.posts = respuesta.data
        })
        .catch(error => console.log(error))
      }

    },
    computed: {
      getCols() {
        return Object.keys(this.posts[0])
      }
    }
}
</script>

<style scoped lang="css">
.jumbotron {
    background: rgb(75, 6, 121);
    color: rgb(255, 250, 250);
  }

  hr {
    background-color: rgb(68, 68, 68);
  }  
</style>
