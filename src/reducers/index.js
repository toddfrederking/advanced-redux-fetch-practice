import {combineReducers} from "redux";



function contacts(state = [], action){
  if (action.type === "CONTACTS_FETCHED") {
    return action.value;
  }
  if (action.type === "CONTACT_CREATED") {
    return [...state,action.value];

  }
  return state;
}

function vehicles(state = [], action){
  if (action.type === "VEHICLES_FETCHED"){
    return action.value;
  }
  if (action.type === "VEHICLE_CREATED") {
    return [...state,action.value];

  }
  return state;
}

function comments(state = [], action){
  if (action.type === "COMMENTS_FETCHED"){
    return action.value;
  }
  if (action.type === "COMMENT_CREATED") {
    return [...state,action.value];

  }
  return state;
}

function products(state = [], action){
  if (action.type === "PRODUCTS_FETCHED"){
    return action.value;
  }
  if (action.type === "PRODUCT_CREATED") {
    return [...state,action.value];

  }
  return state;
}



const rootReducer = combineReducers({
  contacts, vehicles, comments, products
});
export default rootReducer;
