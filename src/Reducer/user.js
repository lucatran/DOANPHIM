let intialState = {
    credentials: null
}

export const userReducer = (state= intialState,action) =>{
switch(action.type){
    case "fetchCredentials":
        state.credentials = action.payload;
        return {...state};
        default:
            return state; 
}
};


export default userReducer;