import Service from './service'

export const getTasks = () => dispatch => {
    Service.get(dispatch, "task/", {
        init: "GET_TASKS",
        success: "GET_TASKS_SUCCESS",
        error: "GET_TASKS_FAILED"
    })
}