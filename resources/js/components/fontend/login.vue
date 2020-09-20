<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Login</div>
                <div class="card-body">
                    <p v-if="errorm" style="color:red">{{errorm}}</p>
                    <p v-if="changed_password">{{changed_password}}</p>
                    <form @submit.prevent="login">
                        <div class="form-group row"><label for="email"
                                class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                            <div class="col-md-6">
                                <input id="email" type="email" v-model="email"
                                    required="required" autocomplete="email" autofocus="autofocus"
                                    class="form-control"></div>
                        </div>
                        <div class="form-group row"><label for="password"
                                class="col-md-4 col-form-label text-md-right">Password</label>
                            <div class="col-md-6">
                                <input id="password" type="password" v-model="password"
                                    required="required" autocomplete="current-password" class="form-control "></div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-6 offset-md-4">
                                <div class="form-check"><input type="checkbox" name="remember" id="remember"
                                        class="form-check-input"> <label for="remember" class="form-check-label">
                                        Remember Me
                                    </label></div>
                            </div>
                        </div>
                        <div class="form-group row mb-0">
                            <div class="col-md-8 offset-md-4">
                                <button type="submit" class="btn btn-primary">
                                    Login
                                </button> 
                                <router-link to="/password/reset" class="btn btn-link">
                                    Forgot Your Password?
                                </router-link>
                                </div>
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
            email:"",
            password:"",
            errorm:"",
            changed_password:this.$route.query.mass,
        }
    },
    mounted(){
        //this.check_user();
    },
    methods:{
        login(){
            axios.post('/login', {
                            email: this.email,
                            password: this.password,
                        })
                        .then(reponse => {
                            if(reponse.data.token_type){
                            var user_token={
                                Access:reponse.data.token_type+' '+reponse.data.access_token,
                                Refresh:reponse.data.refresh_token
                            };
                            document.cookie ="user_token=" + JSON.stringify(user_token) + ";path=/";
                            //this.$router.push('/admin/dashboard');
                           window.location.href='/admin/dashboard';
                            }else{
                            this.errorm=reponse.data
                            }
                        });
       },

       check_user(){
           var match = document.cookie.match(new RegExp('(^| )user_token=([^;]+)'));
            if (match) {
                axios.post('/getuserdata',{
                    Access:JSON.parse(match[2]).Access
                }).then(response=>{
                    if(response.data.role ==1){
                        window.location.href='/admin/dashboard';
                    }else{
                        window.location.href='/';
                    }
                }).catch (error => {
                    console.log(error.response.data)
                //this.error_mas=error.response;
            });
                
            }
       }
    }
}
</script>