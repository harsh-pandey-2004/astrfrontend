import { SET_ROOM_SLUG,SET_USER_Id } from "./Action";

const initialState = {
    roomSlug: '',
    userId: '',
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_ROOM_SLUG:
        return {
          ...state,
          roomSlug: action.payload,
        };
      case SET_USER_Id:
        return {
          ...state,
          userID: action.payload,
        };
      default:
        return state;
    }
  };
export default chatReducer;