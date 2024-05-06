import React from 'react'
import {Logo} from './images'
const LoginForm = () => {
  return (
    <div>
<div  >
  <div class="modal-dialog">
    <div class="modal-content">
        <div>
        <img src={Logo} style={{width:"120px", height:"120px", paddingBottom:"10px"}}></img>
        </div>
       
      <div className="container">
        <h5 class="modal-title" id="exampleModalLabel">WELL COME</h5>
        <button>Log In</button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name"
            //  style={{position:"absolute",left:"25px",top:"2px"}}
             >Username Or Email:</label>
            <input type="text" placeholder='Username or email' class="form-control" id="recipient-name"/>
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label" >Password:</label>
            <input type="text" placeholder="enter password" class="form-control" id="recipient-name"/>
          </div>
        </form>
      </div>
      <div style={{ paddingBottom:"10px"}}>
        <button type="button" class="btn btn-primary" style={{width:"200px", fontSize:"20px"}}>Continue</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default LoginForm;