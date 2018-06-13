export function fetchContacts() {
  return function (dispatch) {
    fetch("http://localhost:5100/contacts")
    .then( (response) => {
      return response.json();
    }).then((contacts) => {
      dispatch(contactsFetched(contacts));
    });
  };
}
export function contactsFetched(contacts) {
  return {
    type: "CONTACTS_FETCHED",
    value: contacts
  };
}

export function createContact(contact) {

  return function (dispatch){
    fetch("http://localhost:5100/contacts",{
      method: "post",
      body: JSON.stringify(contact),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (response){
      return response.json();

    }).then(function (c) {
      dispatch(contactCreated(c));

    });
  };
}

export function contactCreated(contacts) {
  return {
    type: "CONTACT_CREATED",
    value: contacts
  };
}

// FETCH VEHICLE
export function fetchVehicles() {
  return function (dispatch) {
    fetch("http://localhost:5100/vehicles")
    .then((response) => {
      return response.json();
    }).then((vehicles) => {
      dispatch(vehiclesFetched(vehicles));
    });
  };
}
export function vehiclesFetched(vehicles) {
  return {
    type: "VEHICLES_FETCHED",
    value: vehicles
  };
}


// {CREATE VEHICLES }
export function createVehicle(vehicle) {

  return function (dispatch) {

    fetch("http://localhost:5100/vehicles",{
      method: "post",
      body: JSON.stringify(vehicle),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (response){
      return response.json();

    }).then(function (c) {
      dispatch(vehicleCreated(c));

    });
  };
}

export function vehicleCreated(vehicle) {
  return {
    type: "VEHICLE_CREATED",
    value: vehicle
  };
}

// Fetch Comments

export function fetchComments() {
  return function (dispatch) {
    fetch("http://localhost:5100/comments")
    .then((response) => {
      return response.json();
    }).then((comments) => {
      dispatch(commentsFetched(comments));
    });
  };
}
export function commentsFetched(comments) {
  return {
    type: "COMMENTS_FETCHED",
    value: comments
  };
}

// CREATE COMMENTS

export function createComment(comment) {

  return function (dispatch) {

    fetch("http://localhost:5100/comments",{
      method: "post",
      body: JSON.stringify(comment),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (response){
      return response.json();

    }).then(function (c) {
      dispatch(commentCreated(c));

    });
  };
}

export function commentCreated(comment) {
  return {
    type: "COMMENT_CREATED",
    value: comment
  };
}


// {CREATE PRODUCTS }
export function createProduct(product) {

  return function (dispatch) {

    fetch("http://localhost:5100/products",{
      method: "post",
      body: JSON.stringify(product),
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (response){
      return response.json();

    }).then(function (c) {
      dispatch(productCreated(c));

    });
  };
}

export function productCreated(product) {
  return {
    type: "PRODUCT_CREATED",
    value: product
  };
}



// FETCH PRODUCTS

export function fetchProducts() {
  return function (dispatch) {
    fetch("http://localhost:5100/products")
    .then((response) => {
      return response.json();
    }).then((comments) => {
      dispatch(productsFetched(comments));
    });
  };
}
export function productsFetched(products) {
  return {
    type: "PRODUCTS_FETCHED",
    value: products
  };
}



