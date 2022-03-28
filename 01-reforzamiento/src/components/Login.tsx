import { useEffect, useReducer } from 'react'

interface AuthState {
    validando: boolean,
    token: string | null, 
    userName: string,
    name: string,

}

const initialState: AuthState = {
    validando: true, 
    token: null, 
    userName: '', 
    name: '', 
}

type AuthAction = { type: 'logout' }

const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {
        switch (action.type) {
            case 'logout':
                return {
                    validando: false, 
                    token: null,
                    userName: '',
                    name:'',
                }
             default:
                 return state  
        }
}

export const Login = () => {

    const [state, dispatch] = useReducer(authReducer, initialState)

    useEffect(() => {
      setTimeout (() => {
        dispatch({type: 'logout'})
      }, 1500)
    }, [])
    
    if (state.validando) {
        return (
            <>
                <div className="alert alert-info">
                    Validando....
                </div>
            </>
        )
    }
  return (
    <>
        <h3>Login</h3>

       

        <div className="alert alert-danger">
            No logado
        </div>

        <div className="alert alert-success">
            Te has logado con éxito
        </div>

        <button className="btn btn-primary" >
        login
        </button>
        &nbsp;
        <button className="btn btn-danger" >
        logout
        </button>
    </>
  )
}
