import React, { Component } from 'react';

 class Content extends Component{
   constructor(props){
     super(props)
   }
     render() {
         return (
             <>
              <div className="row">
               
            <div className="col-sm-4">
            <h1>This is a table</h1>
            <table className="table table-striped">
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr>
          <tr>
            <td>Mary</td>
            <td>Moe</td>
            <td>mary@example.com</td>
          </tr>
          <tr>
            <td>July</td>
            <td>Dooley</td>
            <td>july@example.com</td>
          </tr>
        </tbody>
      </table>
            </div>
           
            
            
          <div className=" col-sm-4 ">
          <h1>This is a Form</h1>
          <form action="/action_page.php">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="pwd">Password:</label>
              <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" />
            </div>
            <div className="form-group form-check">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" name="remember" /> Remember me
              </label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
          </div>
           
          <div className="col-sm-4">
           
           </div>
          </div>
          <h1>This is a Col</h1>

          <div className="row">

        <div className="col-sm-4">
          <h3>Column 1</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
        </div>
        <div className="col-sm-4">
          <h3>Column 2</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
        </div>
        <div className="col-sm-4">
          <h3>Column 3</h3>        
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
        </div>
      </div>
          </>
         );
     }

 }
 export default Content;