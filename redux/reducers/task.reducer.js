const initialState = {
    tasks: [],
    gettingTasks: false,
    tasksRecieved: false,
    upToDate: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "GET_TASKS":{

            return {
                ...state,
                gettingTasks: true
            }
        };
        case "GET_TASKS_SUCCESS":{
            return {
                ...state,
                gettingTasks: false,
                tasksRecieved: true,
                tasks: action.data,
                upToDate: true
            }
        };
        case "GET_TASKS_FAILED":{

            return {
                ...state,
                gettingTasks: false,
                tasksRecieved: false,
                upToDate: false,
            }
        };

        default:{
            return {...state};
        }
    }
}