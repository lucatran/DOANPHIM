let initialState = {
    DSRap: [],
};
const danhSachRapReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET-HETHONG":
            state.DSRap = action.payload;
            return { ...state };
        default:
            return state;
    }

};
export default danhSachRapReducer;