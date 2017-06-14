console.log("talking");
// 1. Fetch your users data

fetch('https://randomuser.me/api/?results=12&nat=us')
  .then(
    function(response) {
      if (response.status !==200) {
        console.log("Looks like there was a problem. Status Code: " + response.status);
      return;
      }
  
    response.json().then(function(data) {
      console.log(data.results[0].name.first);
      let firstName = data.results[0].name.first;
      console.log(firstName);
      console.log(`First person's first name is ${firstName}`);

      //render the users

      let users = data.results;

// Just loops through and lets me see I'm pulling info correctly
//          for( var i = 0; i < users.length; i++) {
//            console.log(users[i].picture.medium);
//            console.log(users[i].name.first);
//            console.log(users[i].name.last);
//            console.log(users[i].location.street);
//            console.log(users[i].location.city);
//            console.log(users[i].location.state);
//            console.log(users[i].location.postcode);
//            console.log(users[i].phone);
//          }
//      console.log(users);
      
      function customersToHTML (customers) {
        return `
        <div class="customer_container">
          <div class="picture_container">
            <img class="profile_pic src="${customers.picture.large}">
          </div>
          <div class="customer_info>
            <ul>
              <li class="name">${customers.name.first} ${customers.name.last}</li>
              <li class="email">${customers.email}</li>
              <li class="addr1">${customers.location.street} </li>
              <li class="addr2">${customers.location.city} ${customers.location.state} ${customers.location.postcode}</li>
              <li class="phone">${customers.phone}</li>
            </ul>
          </div>
        </div>
      `
      }
      
      let markup = `
        <div class="list">
          ${customersToHTML (users[0])}
          ${customersToHTML (users[1])}
          ${customersToHTML (users[2])}
          ${customersToHTML (users[3])}
          ${customersToHTML (users[4])}
          ${customersToHTML (users[5])}
          ${customersToHTML (users[6])}
          ${customersToHTML (users[7])}
          ${customersToHTML (users[8])}
          ${customersToHTML (users[9])}
          ${customersToHTML (users[10])}
          ${customersToHTML (users[11])}
        </div>`
      
      document.body.innerHTML = markup;

    });
  }
)
  
// 2. Loop over the data
// 3. Display it in the `.customers` element
//(function () {
//
//  'use strict';
//
//  // Your Code Goes Here
//
//})();

