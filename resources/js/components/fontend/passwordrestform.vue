<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Reset Password</div>
                    <div class="card-body">
                        <form @submit.prevent="resetpassword">
        
                            <div class="form-group row"><label for="email"
                                    class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                <div class="col-md-6">
                                    <input type="email" v-model="email" class="form-control " required></div>
                            </div>
                            <div class="form-group row"><label for="password"
                                    class="col-md-4 col-form-label text-md-right">Password</label>
                                <div class="col-md-6"><input  type="password" v-model="password" class="form-control "></div>
                            </div>
                            <div class="form-group row"><label for="password-confirm"
                                    class="col-md-4 col-form-label text-md-right">Confirm Password</label>
                                <div class="col-md-6"><input  type="password" v-model="password_confirmation" class="form-control"></div>
                            </div>
                            <div class="form-group row mb-0">
                                <div class="col-md-6 offset-md-4"><button type="submit" class="btn btn-primary">
                                        Reset Password
                                    </button></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            token:this.$route.params.token,
            email:this.$route.query.email,
            password:"",
            password_confirmation:"",
        }
    },methods:{
        resetpassword(){
            axios.post('/password/reset',{
                token:this.token,
                email:this.email,
                password:this.password,
                password_confirmation:this.password_confirmation,
            }).then(Response=>{
                axios.post('/logout').then(Response=>{
                    this.$router.push('/login?mass=Your password changed.');
                })
            })
        }
    }
}
</script>