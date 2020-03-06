import React from "react";

const Home = () => {
  return(
    <div>
    <form class="navbar-form navbar-left" action="/action_page.php"></form>
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Search"></input>
      <div class="input-group-btn">
        <button class="btn btn-default" type="submit">
          <i class="glyphicon glyphicon-search"></i>
        </button>
      </div>
    </div>
    </div>
  
  );
};

export default Home;