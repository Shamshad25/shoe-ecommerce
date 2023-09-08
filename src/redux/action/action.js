export const ADD = (item) => {
  return {
    type: "ADD_CART",
    payload: item,
  };
};

// Remove item
export const DELETE = (id) => {
  return {
    type: "REMOVE_CART",
    payload: id,
  };
};

// remove individual item

export const REMOVE = (item) => {
  return {
    type: "REMOVE_ITEM",
    payload: item,
  };
};

// Search Items

export const SEARCH = (text) => {
  return {
    type: "SEARCH_ITEM",
    payload: text,
  };
};

// Login
export const LOGIN = (userID) => {
  return {
    type: "LOGIN",
    payload: userID,
  };
};

// Logout
export const LOGOUT = () => {
  return {
    type: "LOGOUT",
  };
};
