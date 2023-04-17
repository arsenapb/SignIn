import { 
    CHANGE_FIRST_NAME,
    CHANGE_EMAIL,
    CHANGE_PASSWORD,
    CHANGE_WEBSITE,
} from "../actions/SignInAction";

const initialState = {
    firstName: 'Patrick',
    email: 'arsenapb@gmail.com',
    password: 'password',
    website: 'website.com',
};

const signInReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_FIRST_NAME:
            return {
                ...state,
                firstName: action.payload
            };
        case CHANGE_EMAIL:
            return {
                ...state,
                email: action.payload
            };
        case CHANGE_PASSWORD:
            return {
                ...state,
                password: action.payload
            };
        case CHANGE_WEBSITE:
            return {
                ...state,
                website: action.payload
            };
        default:
            return state;
    }
}
export default signInReducer;