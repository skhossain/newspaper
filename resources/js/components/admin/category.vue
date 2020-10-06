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
            <div v-if="edit_category_id" class="card">
                <div class="card-header">
                    <h2 class="card-title">Edit Category</h2>
                </div>
                <div class="card-body">
                    <label>Category Name</label>
                    <input type="text" class="form-control" v-model="name" placeholder="name">
                    <label>Status</label>
                    <select class="form-control" v-model="status">
                        <option value="1">Active</option>
                        <option value="0">Inactive</option>
                    </select>
                </div>
                <div class="card-footer">
                    <button class="btn btn-info" @click="clear_category()">Create new</button>
                    <button class="btn btn-success" @click="editcategory()">Save change</button>
                </div>
            </div>
            <div v-else class="card">
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
        <div class="col-md-6">
            <div class="card">
                <div class="card-header">
                    <h2 class="card-title">Category list</h2>
                </div>
                <div class="card-body" style="overflow-y:scroll;max-height: 300px;">
                    <table class="table">
                        <tr>
                            <th>SL</th>
                            <th>Name</th>
                            <th>Satus</th>
                            <th>Action</th>
                        </tr>
                        <tr v-for="(category, index) in categories" :key="index">
                            <td>{{index+1}}</td>
                            <td>{{category.name}}</td>
                            <td>
                                <span v-if="category.status==1">Active</span>
                                <span v-if="category.status==0">Ivactive</span>
                            </td>
                            <td>
                                <button class="btn btn-primary" @click="select_category(category.id)">Edit</button>
                            </td>
                        </tr>
                    </table>

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
            status:"",
            edit_category_id:"",
        }
    },
    mounted(){
        this.get_categories();
    },
    methods:{
        get_categories(){
            axios.post('/admin/allcategories').then(response=>{
                console.log(response.data);
                this.$store.commit('categories',response.data)
            })
        },
        newcategory(){
            axios.post('/admin/newcategory',{
                name:this.name
            }).then(response=>{
                this.$store.commit('addnew_category_item',response.data)
                this.name="";
            }).catch(function (error) {
                console.log(error);
            })
        },
        select_category(id){ 
            var category= this.categories.find(c=>c.id==id);
            this.edit_category_id=id;
            this.name=category.name;
            this.status=category.status;
        },
        editcategory(){
            axios.post('/admin/editcategory',{
                id:this.edit_category_id,
                name:this.name,
                status:this.status
            }).then(response=>{
                var category= this.categories.find(c=>c.id==this.edit_category_id);
                category.name=this.name;
                category.status=this.status;
                this.edit_category_id="";
                this.name="";
                this.status="";
            })
        },
        clear_category(){
            this.edit_category_id="";
            this.name="";
            this.status="";
        }
    },
    computed:{
        categories(){
            return this.$store.getters.categories
        }
    }
}
</script>