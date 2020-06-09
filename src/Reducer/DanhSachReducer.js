let initialState = {
    DSPhimSC: [],
    DSPhimDC: [],
    DetailPhim: null,
};


const danhSachReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET-LISTSC":
            state.DSPhimSC = action.payload;
            return { ...state };
        case "GET-LISTDC":
            state.DSPhimDC = action.payload;
            return { ...state };
        case "DETAIL-PHIM":
            state.DetailPhim = action.payload;
            return { ...state };
        default:
            return state;
    }

};
export default danhSachReducer;