const formReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_POST' :
            return [action.data, ...state];
    }
}

export default formReducer;