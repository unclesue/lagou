import {
  ProductUnionType,
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_SUCCESS,
} from "../actions/product";
import { Product } from "../models/product";

export interface ProductState {
  createdAt: {
    loaded: boolean;
    success: boolean;
    products: Product[];
  };
  sold: {
    loaded: boolean;
    success: boolean;
    products: Product[];
  };
  search: {
    products: Product[];
  };
}

const intialState: ProductState = {
  createdAt: {
    loaded: false,
    success: false,
    products: [],
  },
  sold: {
    loaded: false,
    success: false,
    products: [],
  },
  search: {
    products: [],
  },
};

export default function product(state = intialState, action: ProductUnionType) {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        [action.sortBy]: {
          ...state[action.sortBy === "createdAt" ? "createdAt" : "sold"],
          loaded: false,
          success: false,
        },
      };
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        [action.sortBy]: {
          loaded: true,
          success: true,
          products: action.payload,
        },
      };
    case SEARCH_PRODUCT_SUCCESS:
      return {
        ...state,
        search: {
          products: action.payload,
        },
      };
    default:
      return state;
  }
}
