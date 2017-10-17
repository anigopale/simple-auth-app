import { CHANGE_AUTH } from '../actions/types';

export default function(state = false, action){
  switch (aciton.type) {
    case CHANGE_AUTH:
      return action.payload;
  }

  return state;
}
