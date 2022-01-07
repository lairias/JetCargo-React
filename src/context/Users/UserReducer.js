import {GET_PROFILE, GET_USERS} from "../type"

export default (state,action )=>{
    const {payload, type} = action;

    switch (type) {
      case GET_USERS:
        return {
          ...state,
          users: payload,
        };
      case GET_PROFILE:
        return {
          ...state,
          selectedUsers: payload,
        };
    }
   
} 