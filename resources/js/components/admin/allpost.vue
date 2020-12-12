<template>
    <div>
        <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">All post</h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><router-link to="/admin">Home</router-link></li>
              <li class="breadcrumb-item active">All post</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">
       <table class="table">
         <tr>
           <th>SL</th>
           <th>Title</th>
           <th>Date</th>
           <th>View</th>
           <th>Keyword</th>
           <th>Action</th>
         </tr>
         <tr v-for="(post, index) in posts" :key="index">
           <td>{{index+1}}</td>
           <td>{{post.title}}</td>
           <td>{{post.created_at}}</td>
           <td>{{post.viewcount}}</td>
           <td>{{post.keyword}}</td>
           <td>
             <router-link :to="'/admin/editpost/'+post.id" class="btn btn-dark">Edit</router-link>
           </td>
         </tr>
       </table>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content -->
    </div>
</template>
<script>
export default {
  data(){
    return{

    }
  },
  mounted(){
    this.get_allpost();
  },methods:{
    get_allpost(){
      axios.get('/admin/allposts').then(response=>{
        this.$store.commit('posts',response.data)
      });
    }
  },
  computed:{
    posts(){
            return this.$store.getters.posts
        }
  }
}
</script>