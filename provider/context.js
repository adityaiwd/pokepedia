import * as React from 'react'

const PokepediaContext = React.createContext()

function pokepediaReducer(state, action) {
    switch (action.type) {
      case 'FETCH_MORE_POKEMONS': {
        return {pokemons: [...state.pokemons, ...action.payload]}
      }
      case 'decrement': {
        return {count: state.count - 1}
      }
      default: {
        throw new Error(`Unhandled action type: ${action.type}`)
      }
    }
  }
  
  function PokepediaProvider({children}) {
    const [state, dispatch] = React.useReducer(pokepediaReducer, {pokemons: [], myPokemons: []})
    // NOTE: you *might* need to memoize this value
    // Learn more in http://kcd.im/optimize-context
    const value = {state, dispatch}
    return <PokepediaContext.Provider value={value}>{children}</PokepediaContext.Provider>
  }
  
  function usePoke() {
    const context = React.useContext(PokepediaContext)
    if (context === undefined) {
      throw new Error('usePoke must be used within a PokepediaProvider')
    }
    return context
  }
  
  export {PokepediaProvider, usePoke}