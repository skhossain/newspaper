<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Register</div>
                    <div class="card-body">
                        <form method="POST" action="http://newspaper.local/register"><input type="hidden" name="_token"
                                value="WsPyWMh6WbKm5rQusYoMd7qZcyE3Zd4iRvQuvO6e">
                            <div class="form-group row"><label for="name"
                                    class="col-md-4 col-form-label text-md-right">Name</label>
                                <div class="col-md-6"><input id="name" type="text" name="name" value=""
                                        required="required" autocomplete="name" autofocus="autofocus"
                                        class="form-control "></div>
                            </div>
                            <div class="form-group row"><label for="email"
                                    class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                                <div class="col-md-6"><input id="email" type="email" name="email" value=""
                                        required="required" autocomplete="email" class="form-control "></div>
                            </div>
                            <div class="form-group row"><label for="password"
                                    class="col-md-4 col-form-label text-md-right">Password</label>
                                <div class="col-md-6"><input id="password" type="password" name="password"
                                        required="required" autocomplete="new-password" class="form-control "></div>
                            </div>
                            <div class="form-group row"><label for="password-confirm"
                                    class="col-md-4 col-form-label text-md-right">Confirm Password</label>
                                <div class="col-md-6"><input id="password-confirm" type="password"
                                        name="password_confirmation" required="required" autocomplete="new-password"
                                        class="form-control"></div>
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
