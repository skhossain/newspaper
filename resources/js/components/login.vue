<template>
    <div class="container">
        <div class="row justify-content-center"><div class="col-md-8"><div class="card"><div class="card-header">Login</div> <div class="card-body"><form method="POST" action="http://newspaper.local/login"><input type="hidden" name="_token" value="WsPyWMh6WbKm5rQusYoMd7qZcyE3Zd4iRvQuvO6e"> <div class="form-group row"><label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label> <div class="col-md-6"><input id="email" type="email" name="email" value="" required="required" autocomplete="email" autofocus="autofocus" class="form-control "></div></div> <div class="form-group row"><label for="password" class="col-md-4 col-form-label text-md-right">Password</label> <div class="col-md-6"><input id="password" type="password" name="password" required="required" autocomplete="current-password" class="form-control "></div></div> <div class="form-group row"><div class="col-md-6 offset-md-4"><div class="form-check"><input type="checkbox" name="remember" id="remember" class="form-check-input"> <label for="remember" class="form-check-label">
                                        Remember Me
                                    </label></div></div></div> <div class="form-group row mb-0"><div class="col-md-8 offset-md-4"><button type="submit" class="btn btn-primary">
                                    Login
                                </button> <a href="http://newspaper.local/password/reset" class="btn btn-link">
                                        Forgot Your Password?
                                    </a></div></div></form></div></div></div></div>
    </div>
</template>