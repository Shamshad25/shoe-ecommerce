import { Products } from "../../output";

const INIT_STATE = {
  carts: [],
  products: Products,
  activeUser: null,
};

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART": {
      const ItemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (ItemIndex >= 0) {
        state.carts[ItemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, temp],
        };
      }
    }
    case "REMOVE_CART": {
      const data = state.carts.filter((el) => el.id !== action.payload);

      return {
        ...state,
        carts: data,
      };
    }
    case "REMOVE_ITEM": {
      const ItemIndex_dec = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.carts[ItemIndex_dec].qnty >= 1) {
        const deleteItem = (state.carts[ItemIndex_dec].qnty -= 1);
        console.log("----------", state.carts, deleteItem);

        return {
          ...state,
          carts: [...state.carts],
        };
      } else if (state.carts[ItemIndex_dec].qnty === 1) {
        const data = state.carts.filter((el) => el.id !== action.payload);

        return {
          ...state,
          carts: data,
        };
      }
    }
    case "SEARCH_ITEM": {
      const searchedProducts = INIT_STATE.products.filter((el) =>
        el.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        products: searchedProducts,
      };
    }
    case "LOGIN": {
      return {
        ...state,
        activeUser: action.payload,
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        activeUser: null,
      };
    }
    default:
      return state;
  }
};
