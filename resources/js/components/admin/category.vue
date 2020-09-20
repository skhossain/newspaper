<template>
    <div>
        <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>Category</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
              <li class="breadcrumb-item active">Category</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>
    
    <section class="content row m-3">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">New Category</h2>
                </div>
                <div class="card-body">
                    <label>Category Name</label>
                    <input type="text" class="form-control" v-model="name" placeholder="name">
                </div>
                <div class="card-footer">
                    <button class="btn btn-success" @click="newcategory()">Create</button>
                </div>
            </div>
        </div>
        
    </section>
    </div>
</template>
<script>
export default {
    data(){
        return{
            name:"",
        }
    },
    methods:{
        newcategory(){
            axios.post('/admin/newcategory',{
                name:this.name
            }).then(response=>{
                console.log(response.data)
            }).catch(function (error) {
                console.log(error);
            })
        }
    }
}
</script>