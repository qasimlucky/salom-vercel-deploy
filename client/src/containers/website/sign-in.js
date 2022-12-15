import React from "react";
import Header from "../../components/website/header";
import WebFooter from "../../components/website/footer"; 
function SignIn() {
    
  
         return (
          <>
           <Header/>
   {/* stv-signin SECTION STARTS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

  <div class="stv-signin" id="app">
    <section class="section">
      <div class="sign-img"  style={{backgroundImage:`url("https://lifeatthemovies.com/wp-content/uploads/2017/09/2000-672x372.png")`}}>
        <div class="container" >
          <div class="row signin-box">
            <div class="signin-box-inner">
              <div class="card card-primary web-bg" >
                <h3 class="form-group col-12 signin-h3">
                  Sign In
                </h3>
                
                <div class="card-body">
                  <form>

                    <div class="row">
                      <div class="form-group col-12">
                        <input id="phone_number" type="text"  class="form-control input" name="phone_number"  placeholder="Email or Phone number"/>
                      </div>
                    </div> 

                    <div class="row">
                      <div class="form-group col-12">
                        <div class="input-group-prepend" >
                          <input  id="password" type="password" name="password"   class="form-control input"  placeholder="Password"/>
                        </div>
                        <p class="signin-forgot">Forgot your password</p>
                      </div>
                    </div>

                    <div class="row">
                      {/* <div class="form-group col-2"></div> */}
                      <div class="form-group col-12 signin-btn-box">
                        <button  type="submit" class="btn btn-lg btn-block">
                          Sign In
                        </button>   
                      </div>
                      <div class="form-group col-2"></div>
                    </div>

                    <div class="signin-rem">
                      <input type="checkbox" value="isRememberMe" id="rememberMe"></input> 
                      <label>Remember me</label>
                    </div>

                    <div class="signin-signup">
                      <p>
                        Don't have an account? 
                        <a> Sign up</a><br></br> 
                      </p>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <WebFooter/>  
          </>
         );
      }
export default SignIn;