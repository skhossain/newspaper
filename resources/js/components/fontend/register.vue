<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Register</div>
                <div class="card-body">
                    <form @submit.prevent="register">
                        <div class="form-group row"><label for="name"
                                class="col-md-4 col-form-label text-md-right">Name</label>
                            <div class="col-md-6"><input id="name" type="text" name="name" v-model="name" required="required"
                                    autocomplete="name" autofocus="autofocus" class="form-control ">
                                    <span style="color:red" v-if="error_mas && error_mas.name">{{error_mas.name[0]}}</span>
                                    </div>
                        </div>
                        <div class="form-group row"><label for="email"
                                class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                            <div class="col-md-6"><input id="email" type="email" name="email" v-model="email"
                                    required="required" autocomplete="email" class="form-control "></div>
                        </div>
                        <div class="form-group row"><label for="password"
                                class="col-md-4 col-form-label text-md-right">Password</label>
                            <div class="col-md-6"><input id="password" type="password" v-model="password"
                                    required="required" autocomplete="new-password" class="form-control "></div>
                        </div>
                        <div class="form-group row"><label for="password-confirm"
                                class="col-md-4 col-form-label text-md-right">Confirm Password</label>
                            <div class="col-md-6"><input id="password-confirm" type="password"
                                    name="password_confirmation" v-model="password_confirmation" required="required" autocomplete="new-password"
                                    class="form-control">
                                    <span style="color:red" v-if="error_mas && error_mas.password">{{error_mas.password[0]}}</span>
                                    </div>
                        </div>
                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4"><button type="submit" class="btn btn-primary">
                                    Register
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
            name:"",
            email:"",
            password:"",
            password_confirmation:"",

            error_mas:""
        }
    },methods:{
        register(){
            axios.post('/register',{
            name:this.name,
            email:this.email,
            password:this.password,
            password_confirmation:this.password_confirmation,
            }).then(response => {
                if(response.data=='success'){
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
                            window.location.href='/admin/dashboard';
                            }else{
                            this.errorm=reponse.data
                            }
                        });
                }
            }).catch (error => {
                this.error_mas=error.response.data.errors;
            });
        }
    }
}
</script>
