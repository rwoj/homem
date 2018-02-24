import {ODCZYT_REJESTRU, ZMIANA_REJESTRU_WYJSCIA, 
  ZMIANA_REJESTRU_WYSATEL, ZMIANA_REJESTRU_WYTEMP, 
  ZMIANA_REJESTRU_WYTEMPNAST} from "../actions/types"

export default function register(state={}, action={}) {
  let zmiana=[]
  switch (action.type) {
    case ODCZYT_REJESTRU:
      // do przeniesienia
      for (let i=0; i<40; i+=1){
        zmiana.push({id: 17100+i, value: 0})
      }
      return {wyjscia: [...action.dane.wyjscia], wyTemp: [...action.dane.wyTemp], 
              wyTempNast: [...action.dane.wyTempNast], wySatel: [...zmiana]}
    case ZMIANA_REJESTRU_WYJSCIA:
      zmiana=[...state.wyjscia]
      zmiana[Object.keys(action.dane)[0]]=action.dane[Object.keys(action.dane)[0]]     
      return {...state, wyjscia: zmiana}
    case ZMIANA_REJESTRU_WYSATEL:
      zmiana=[...state.wySatel]
      zmiana[Object.keys(action.dane)[0]]=action.dane[Object.keys(action.dane)[0]]     
      return {...state, wySatel: zmiana}
    case ZMIANA_REJESTRU_WYTEMP:
      zmiana=[...state.wyTemp]
      zmiana[Object.keys(action.dane)[0]]=action.dane[Object.keys(action.dane)[0]]     
      return {...state, wyTemp: zmiana}
    case ZMIANA_REJESTRU_WYTEMPNAST:
      zmiana=[...state.wyTempNast]
      zmiana[Object.keys(action.dane)[0]]=action.dane[Object.keys(action.dane)[0]]     
      return {...state, wyTempNast: zmiana}

    default:
      return state;
  }
}
export const wyjsciaHashSelector = state => 
      state.register.wyjscia && state.register.wyjscia.length>0 ? state.register.wyjscia : []
// export const wyjsciaSelector = createSelector(wyjsciaHashSelector, hash =>
//   hash
// )

export const wySatelHashSelector = state =>  
    state.register.wySatel && state.register.wySatel.length>0 ? state.register.wySatel : [];
// export const wySatelSelector = createSelector(wySatelHashSelector, hash =>
//   hash
// )

export const wyTempHashSelector = state => 
    state.register.wyTemp && state.register.wyTemp.length>0 ? state.register.wyTemp : [];
// export const wyTempSelector = createSelector(wyTempHashSelector, hash =>
//   hash
// )
export const wyTempNastHashSelector = state => 
  state.register.wyTempNast && state.register.wyTempNast.length>0 ?state.register.wyTempNast:[];
// export const wyTempNastSelector = createSelector(wyTempNastHashSelector, hash =>
//   hash
// )