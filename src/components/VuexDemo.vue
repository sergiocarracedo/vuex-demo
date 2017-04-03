<template>
  <div class="hello">
    <h1 v-html="msg"></h1>

    <table>
      <thead>
      <tr>
        <th>
          ID
        </th>
        <th>User ID</th>
        <th>Title</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="post in posts">
        <td>
          {{ post.id }}
        </td>
        <td>
          {{ post.userId }}
        </td>
        <td>
          {{ post.title }}
        </td>
      </tr>
      </tbody>
    </table>


    <a href="#" @click="prevPage" v-show="showPrevPage">
      << Page
    </a>

    <strong>
      {{ page + 1 }} / {{ totalPages }}
    </strong>

    <a href="#" @click="nextPage" v-show="showNextPage">
      Page >>
    </a>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'

  export default {
    data () {
      return {
        msg: 'Welcome to <strong>Vuex</strong> demo',
        page: 0
      }
    },
    computed: {
      posts: function () {
        return this.$store.getters.postsPaginated(this.page)
      },
      ...mapGetters({
        totalPages: 'totalPages'
      }),
      showPrevPage: function () {
        return this.page != 0;
      },
      showNextPage: function () {
        return this.page < (this.totalPages - 1);
      }
    },
    created () {
      this.$store.dispatch('getAllPosts')
    },
    methods: {
      nextPage() {
        this.page++;
        if (this.page > (this.totalPages - 1)) {
          this.page = this.totalPages - 1;
        }
      },
      prevPage() {
        this.page--;
        if (this.page < 0) {
          this.page = 0;
        }
      }
    }

  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  a {
    color: #42b983;
  }

  table {
    width: 90%;
    margin: 30px auto;
    border: 2px solid #666;

  }

  table td {
    border-bottom: 1px solid #aaa;
  }

  table tr:last-child td {
    border-bottom: 0;
  }

  table th {
    background: #42b983;
    color: #fff;
  }
</style>
