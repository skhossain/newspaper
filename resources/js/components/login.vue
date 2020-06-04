<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Login</div>
                    <div class="card-body">
                        <form @submit.prevent="login">
                            <div class="form-group row"><label for="email"
                                    class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                <div class="col-md-6">
                                    <input type="email" v-model="email"
                                        required="required" autocomplete="email" autofocus="autofocus"
                                        class="form-control "></div>
                            </div>
                            <div class="form-group row"><label for="password"
                                    class="col-md-4 col-form-label text-md-right">Password</label>
                                <div class="col-md-6">
                                    <input type="password" v-model="password"
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
                                <div class="col-md-8 offset-md-4"><button type="submit" class="btn btn-primary">
                                        Login
                                    </button> <a href="http://newspaper.local/password/reset" class="btn btn-link">
                                        Forgot Your Password?
                                    </a></div>
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
        }
    },
       mounted() {
             var match = document.cookie.match(new RegExp('(^| )user_token=([^;]+)'));
            if (match) {
                //this.$router.push('/dashboard');
		        window.location.href = "admin/dashboard";
            }
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
                                Access_token:reponse.data.token_type+' '+reponse.data.access_token,
                                Refresh_token:reponse.data.refresh_token
                            };
                            document.cookie ="user_token=" + JSON.stringify(user_token) + ";path=/";
                           
                            //this.$router.push('/admin/dashboard');
                           window.location.href='admin/dashboard';
                            }else{
                            this.errorm=reponse.data
                            }
                        });
        }
    }
}
</script>