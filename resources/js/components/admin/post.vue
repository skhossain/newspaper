<template>
    <div>
        <section class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1>New post</h1>
          </div>
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
              <li class="breadcrumb-item active">New post</li>
            </ol>
          </div>
        </div>
      </div><!-- /.container-fluid -->
    </section>

    <section class="content row m-3">
        <div class="col-md-9">
            <label>Post title</label>
            <input v-model="title" class="form-control" placeholder="News title">
            <label>News body</label>
            <ckeditor v-model="newsbody" :config="editorConfig"></ckeditor>
            
        </div>
        <div class="col-md-3">
            <button class="btn btn-success">Save and publish</button>
            <button class="btn btn-dark">Save draft</button>
            <hr>
            <label>Thumbnail</label>
            <vue-avatar :width="200" :height="200" :rotation="rotation_out" :borderRadius="0"
                                        :scale="scale_out" ref="vueavatar" :image="image" border:1
                                        @vue-avatar-editor:image-ready="onImageReady">
                                    </vue-avatar>
                    <div class="text-center">
                                    <label>
                                        Zoom : {{scale}}x
                                        <br>
                                        <input type="range" min=1 max=3 step=0.02 v-model='scale' />
                                    </label>
                                    <label>
                                        Rotation : {{rotation}}°
                                        <br>
                                        <input type="range" min=0 max=360 step=1 v-model='rotation' />
                                    </label>
                                </div>

            <label>Keyword</label>
            <textarea class="form-control" placeholder="Keyword"></textarea>
            <label>Category</label>
            <select class="form-control">
                <option value="">Uncategory</option>
                <option v-for="(category, index) in categories" :key="index" :value="category.id">{{category.name}}</option>
            </select>
        </div>
    </section>
    </div>
</template>
<script>
import {VueAvatar} from 'vue-avatar-editor-improved';
export default {
    components: {
            VueAvatar,
        },
    data(){
        return{
            title:"",
            newsbody:"",
            editorConfig: {
                   // filebrowserImageBrowseUrl: '/filemanager?type=Images',
                   // filebrowserImageUploadUrl: '/filemanager/upload?type=Images&_token=',
                    //filebrowserBrowseUrl: '/filemanager?type=Files',
                    //filebrowserUploadUrl: '/filemanager/upload?type=Files&_token=',                   
                    toolbarGroups: [
                        { name: 'clipboard',   groups: [ 'clipboard', 'undo' ] },
                        { name: 'editing',     groups: [ 'find', 'selection', 'spellchecker' ] },
                        { name: 'links' },
                        { name: 'insert' },
                        { name: 'forms' },
                        { name: 'tools' },
                        { name: 'colors' },
                        { name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
                        { name: 'paragraph',   groups: [ 'list', 'indent', 'blocks', 'align', 'bidi' ] },
                        { name: 'styles' },
                        { name: 'document',       groups: [ 'mode', 'document', 'doctools' ] },
                    ],
                    extraPlugins : ['justify','colorbutton','colordialog']
                },
                image: "/images/icon/plus.jpg",
                rotation: 0,
                scale: 1,
                rotation_out: 0,
                scale_out: 1,
                borderRadius: 0,
                imageLoaded: true,
                dragged: true,
        }
    },
    mounted(){
        this.get_categories();
    },
    methods:{
        onImageReady: function onImageReady() {
                this.scale = 1;
                this.rotation = 0;
            },
        newpost(){
            
        },
        get_categories(){
            axios.post('/admin/allcategories').then(response=>{
                this.$store.commit('categories',response.data)
            })
        },
    },
    computed:{
        categories(){
            return this.$store.getters.categories
        }
    },
    watch: {
            scale() {
                this.scale_out = Number(this.scale);
            },
            rotation() {
                this.rotation_out = Number(this.rotation);
            }
        },
}
</script>