import * as actionTypes from "../actions/types";
export const initialState = {
  cards: [],
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CARD: {
      return { ...state, cards: action.payload };
    }

    case actionTypes.EDIT_CARD: {
      return {
        ...state,
        cards: state.cards.map((card) => {
          if (card.id === action.payload.id) return action.payload;
          return card;
        }),
      };
    }

    case actionTypes.SET_CARD: {
      return { ...state, cards: action.payload, selected: null };
    }

    case actionTypes.SET_SELECTED_CARD: {
      return { ...state, selected: action.payload };
    }

    case actionTypes.ADD_CARD: {
      return { ...state, cards: [...state.cards, action.payload] };
    }

    case actionTypes.MOVE_CARDS: {
      return {
        ...state,
        cards: state.cards.filter((card) => !action.payload[card.id]),
      };
    }

    case actionTypes.REMOVE_CARDS: {
      return {
        ...state,
        cards: state.cards.filter((card) => !action.payload[card.id]),
      };
    }

    default:
      return state;
  }
};

export default cardReducer;
