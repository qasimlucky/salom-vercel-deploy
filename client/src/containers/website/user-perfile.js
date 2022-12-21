import React from "react";
import Header from "../../components/website/header";
import WebFooter from "../../components/website/footer"; 
function UserPerfile() {
   
         return (
      < >
        {/* {languagesate && ( */}
          <div class="stv-profile">
            <Header/>
            <div class = "user-perfile profile-box">    
              <div class="profile-p1">
                <h3 class= "profile-p1-h3 text-color">
                  {/* {languagedata.account_setting} */}
                  Account Setting
                </h3>
              </div>
                    
              <div class="profile-p2">
                <div class="profile-p2p1 stv-profile-p1">
                  <div class="p2p1-edit">
                    <div class="p2p1-edit-box">
                      <a class="p2p1-edit-btn" href= "">
                        {/* {languagedata.edit} */}
                        Edit
                      </a>
                    </div>
                  </div>
                  <div  class="p2p1-pic">
                    <div class="p2p1-pic-box form-group col-8">
                      <img class="p2p1-pic-img rounded-circle" alt="image" src="https://static.xx.fbcdn.net/assets/?revision=816167972411634&name=desktop-creating-an-account-icon&density=1" />
                    </div>
                  </div>   
                  <div class="p2p1-name">
                    <div class="p2p1-name-box">
                      <h3 class="p2p1-name-h3">
                        John Doe
                      </h3>
                    </div>
                  </div>
                  <p class="p2p1-about">
                    Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                  </p>
                </div>

                <div class="profile-p2p2">
                  <div class="p2p2-hm">
                    <h3 class="p2p2-hm-h3">
                      {/* {languagedata.personal_details} */}
                      Personal Details
                    </h3>
                  </div> 
                  <div class="p2p2-main">
                    <div class="p2p2-box row">
                      <div class="box-info form-group col-6 content-user-profile">
                        <label class="info-label">
                          {/* {languagedata.email} */}
                          Email
                        </label>
                        <br></br><h3 class="info-h3"> johndoe@gmail.com</h3>
                      </div>
                      <div class="form-group col-4" ></div>
                      <div class="box-change form-group col-2">
                        <a class="change-btn" href= "">
                          {/* {languagedata.change} */}
                          Change
                        </a>
                      </div>
                      <div class="box-change2 form-group col-12">
                        <a class="change-btn" href= "">
                          {/* {languagedata.change} */}
                          Change
                        </a>
                      </div>
                    </div> 
                    <div class="p2p2-box row">
                      <div class="box-info form-group col-6 content-user-profile">
                        <label class="info-label">
                          {/* {languagedata.Password} */}
                          Password
                        </label>
                        <br></br><h3 class="info-h3">*******</h3>
                      </div>
                      <div class="form-group col-4" ></div>
                      <div class="box-change form-group col-2">
                        <a class="change-btn" href= "">
                          {/* {languagedata.change} */}
                          Change
                        </a>
                      </div>
                      <div class="box-change2 form-group col-12">
                        <a class="change-btn" href= "">
                          {/* {languagedata.change} */}
                          Change
                        </a>
                      </div>
                    </div> 
                    <div class="p2p2-box row">
                      <div class="box-info form-group col-6 content-user-profile">
                        <label class="info-label">
                          {/* {languagedata.phone_number} */}
                          Phone Number
                        </label>
                        <br></br><h3 class="info-h3">+92 300 1234 562</h3>
                      </div>
                      <div class="form-group col-4" ></div>
                      <div class="box-change form-group col-2">
                        <a class="change-btn">
                          {/* {languagedata.change} */}
                          Change
                        </a>
                      </div>
                      <div class="box-change2 form-group col-12">
                        <a class="change-btn">
                          {/* {languagedata.change} */}
                          Change
                        </a>
                      </div>
                    </div> 
                    <div class="p2p2-box row">
                      <div class="box-info form-group col-6 content-user-profile">
                        <label class="info-label">
                          {/* {languagedata.date_of_birth} */}
                          Date of Birth
                        </label>
                        <br></br><h3 class="info-h3">08-03-1995</h3>
                      </div>
                      <div class="form-group col-4" ></div>
                      <div class="box-change form-group col-2">
                        <a class="change-btn">
                          {/* {languagedata.change} */}
                          Change
                        </a>
                      </div>
                      <div class="box-change2 form-group col-12">
                        <a class="change-btn">
                          {/* {languagedata.change} */}
                          Change
                        </a>
                      </div>
                    </div> 
                    <div class="p2p2-box row">
                      <div class="box-info form-group col-6 content-user-profile">
                        <label class="info-label">
                          {/* {languagedata.language} */}
                          Language
                        </label>
                        <br></br><h3 class="info-h3">English</h3>
                      </div>
                      <div class="form-group col-4" ></div>
                      <div class="box-change form-group col-2">
                        <a class="change-btn">
                          {/* {languagedata.change} */}
                          Change
                        </a>
                      </div>
                      <div class="box-change2 form-group col-12">
                        <a class="change-btn">
                          {/* {languagedata.change} */}
                          Change
                        </a>
                      </div>
                    </div>
                    <div class="p2p2-hm">
                      <h3 class="p2p2-hm-h3">
                        {/* {languagedata.billing_details} */}
                        Billing Details
                      </h3>
                    </div> 
                    <div class="p2p2-box row">
                      <div class="box-info form-group col-6 content-user-profile">
                        <label class="info-label">
                          {/* {languagedata.your_next_billing_date_is} */}
                          Your next billing date is 19 september 2022
                        </label>
                      </div>
                      <div class="form-group col-2" ></div>
                      <div class="box-change form-group col-4">
                        <a class="change-btn" href= "">
                          {/* {languagedata.update_payment_info} */}
                          Update Payment info
                        </a>
                      </div>
                      <div class="box-change2 form-group col-12">
                        <a class="change-btn" href= "">
                          {/* {languagedata.update_payment_info} */}
                          Update Payment info
                        </a>
                      </div>
                    </div> 
                    <div class="membership row">
                      <div class="membership-box form-group col-6 content-user-profile">
                        <button class="membership-btn btn">
                          {/* {languagedata.cancel_membership} */}
                          Cancel Membership
                        </button>
                      </div>
                      <div class="form-group col-4" ></div>
                      <div class="form-group col-2"></div>
                    </div>
                    <div class="p2p2-hm">
                      <h3 class="p2p2-hm-h3">
                        {/* {languagedata.plan_details} */}
                        Plan Details
                      </h3>
                    </div>
                    <div class="p2p2-box row">
                      <div class="box-info form-group col-6 content-user-profile">
                        <label class="info-label">
                          premium
                        </label>
                      </div>
                      <div class="form-group col-2" ></div>
                      <div class="box-change form-group col-4">
                        <a class="change-btn" href= "">
                          {/* {languagedata.change_plan} */}
                          Change Plan
                        </a>
                      </div>
                      <div class="box-change2 form-group col-12">
                        <a class="change-btn" href= "">
                          {/* {languagedata.change_plan} */}
                          Change Plan
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>

            <WebFooter/> 
          </div>
          {/* )}  */}
          </>
         );
      }
export default UserPerfile;