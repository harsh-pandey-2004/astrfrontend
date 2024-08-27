export const SET_ROOM_SLUG='SET_ROOM_SLUG';
export const SET_USER_Id='SET_USER_Id';

export const setRoomSlug=(roomSlug)=>({
    type:SET_ROOM_SLUG,
    payload:roomSlug,
});

export const setUserID = (userID) => ({
    type: SET_USER_Id,
    payload: userID,
});