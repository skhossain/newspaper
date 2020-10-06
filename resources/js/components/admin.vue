<template>
    <router-view :user="user"></router-view>
</template>

<script>
export default {
    data(){
        return{
            user:"",
        }
    },
    mounted(){
        this.check_user();
    },
    methods:{
         check_user(){
                var match = document.cookie.match(new RegExp('(^| )user_token=([^;]+)'));
            if (match) {
                axios.post('/api/userinfoget',{check:'user'},{
                     headers:{
                         Accept:'application/json',
                         Authorization:JSON.parse(match[2]).Access
                     }
                 }).then(response => {
                    this.user= response.data;
                    if (!this.user.role_id==1) {
                        window.location.href = '/';
                    }

                });
            }
            else{
                window.location.href ='/login'
            }
            }
    }
}
</script>