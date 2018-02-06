export default function register(state={}, action={}) {
    switch (action.type) {
      case 'cokolwiek':
        return action.dane
      default:
        return state;
    }
  }