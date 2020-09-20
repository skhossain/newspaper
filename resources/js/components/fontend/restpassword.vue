<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Reset Password</div>
                    <div class="card-body">
                        <p v-if="mass" class=" text-success text-center">{{mass.message}}</p>
                        <p v-if="error" class="text-center text-danger">This email not find.</p>
                        <form @submit.prevent="sendemail">
                            <div class="form-group row">
                                <label for="email"
                                    class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                <div class="col-md-6">
                                    <input type="email" name="email" v-model="email" class="form-control">
                                </div>
                            </div>
                            <div class="form-group row mb-0">
                                <div class="col-md-6 offset-md-4"><button type="submit" class="btn btn-primary">
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
            email:"",
            mass:"",
            error:"",
        }
    },methods: {
        sendemail(){
            axios.post('/password/email',{
                email:this.email,
            }).then(Response=>{
                this.mass=Response.data;
            }).catch(error=>{
                this.error=error;
            })
        }
    },
    
}
</script>