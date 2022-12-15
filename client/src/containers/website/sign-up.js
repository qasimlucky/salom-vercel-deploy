import React from "react";
import Header from "../../components/website/header";
import WebFooter from "../../components/website/footer"; 
function SignUp() {
    
         return (
          <>
           <Header/>

<div class="stv-signup" id="app">
    <section class="section ">
        <div class="sign-img"  style={{backgroundImage:`url("https://lifeatthemovies.com/wp-content/uploads/2017/09/2000-672x372.png")`}}>
        <div class="container">
        <div class="row signup-box">
          <div class="signup-box-inner">
            <div class="card card-primary web-bg" >
              <h3 class="form-group col-12 signup-h3">Sign Up</h3>
              
              <div class="card-body">
                <form>
                  {/* <div class="row">
                    <div class="form-group col-12" >
                      <input id="fullName" type="text"  class="form-control" name="full_name"  placeholder="Full Name"  style={{backgroundColor: "#1d1d41", border:"#1d1d41"}} />
                    </div>
                    
                  </div> */}
                    
                  {/* <div class="row">
                    <div class="form-group col-12">
                      <input id="email" type="email"  class="form-control" name="email"  placeholder="Email"   style={{backgroundColor: "#1d1d41", border:"#1d1d41"}}/>
                    </div>
                    
                  </div> */}
                  <div class="row">
                    <div class="form-group col-12">
                      <input type="text" class="form-control input" placeholder="D.O.B"/>
                    </div>
                  </div>
                  {/* <div class="row">
                    <div class="form-group col-12">
                      <input id="username" type="text"  class="form-control" name="username"  placeholder="User Name"   style={{backgroundColor: "#1d1d41", border:"#1d1d41",color:"grey"}}/>
                    </div>
                    
                  </div>  */}
                  <div class="row">
                    <div class="form-group col-12">
                      <select name="choice" class="form-control select-gender">
                        <option class="option-gender" value="first">Male</option>
                        <option class="option-gender" value="second" selected>Gender</option>
                        <option class="option-gender" value="third">Female</option>
                      </select>
                    </div>
                  </div>

                  <div class="row">
                    <div class="form-group col-12">
                        <select name="choice" class="form-control select-gender">
                        <option class="option-gender" value="first">Pakistan</option>
                        <option class="option-gender" value="second" selected>Country</option>
                        <option class="option-gender" value="third">India</option>
                        </select>
                    </div>
                  
                  </div>
                  <div class="row">
                    <div class="form-group col-12">
                        <input  id="password" type="password" name="password"   class="form-control input" data-indicator="pwindicator" placeholder="Password"/>
                      
                    </div>
                  </div>

                  <div class="row">
                  {/* <div class="form-group col-2"></div> */}
                    <div class="form-group col-12 signup-btn-box">
                     <button  type="submit" class="btn btn-lg btn-block">
                          Singn Up
                        </button>   
                        </div>
                        
                        <div class="form-group col-2">
                        </div>
                  </div>
                  <div class="signup-accept">
                    <input type="checkbox"/>
                    <label>I accept
                      <a> Terms and conditions</a>
                    </label>
                  </div>
                  <div >
                    <p class="already-account">Alread have an account? 
                      <a> Sign In</a>
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
export default SignUp;