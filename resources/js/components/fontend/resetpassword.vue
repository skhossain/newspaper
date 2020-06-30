<template>
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Reset Password
                </div>
                
                <div class="card-body">
                    <h2 v-if="message" class="text-success text-center">{{message.message}}</h2>
                    <h2 v-if="error" class="text-danger text-center">This email not match our database.</h2>
                    <form @submit.prevent="sendresetmail">
                        <div class="form-group row"><label for="email"
                                class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                            <div class="col-md-6">
                                <input id="email" type="email" v-model="email" class="form-control" required>
                            </div>
                        </div>
                        <div class="form-group row mb-0">
                            <div class="col-md-6 offset-md-4">
                                <button type="submit" class="btn btn-primary" :disabled="stop==1">
                                    Send Password Reset Link
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
            route:this.$route,
            email:"",
            message:"",
            error:"",
            stop:"",
        }
    },
    methods:{
        sendresetmail(){
          this.stop=1;
            axios.post('/password/email',{
                email:this.email,
            }).then(Response =>{
                this.error="";
                this.stop="";
                this.message=Response.data
            }).catch(error=>{
                this.stop="";
                this.message="";
                this.error=error;
            });
           
        },
    }
}
</script>