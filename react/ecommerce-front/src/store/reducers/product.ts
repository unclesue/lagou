import {
  ProductUnionType,
  GET_PRODUCT,
  GET_PRODUCT_SUCCESS,
  SEARCH_PRODUCT_SUCCESS,
  FILTER_PRODUCT_SUCCESS,
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
  filter: {
    size: number;
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
  filter: {
    size: 0,
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
    case FILTER_PRODUCT_SUCCESS:
      const data =
        action.skip === 0
          ? action.payload.data
          : [...state.filter.products, ...action.payload.data];
      return {
        ...state,
        filter: {
          products: data,
          size: action.payload.size
        },
      };
    default:
      return state;
  }
}
