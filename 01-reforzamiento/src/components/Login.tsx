import { useEffect, useReducer } from "react";

interface AuthState {
  validando: boolean;
  token: string | null;
  userName: string;
  name: string;
}

const initialState: AuthState = {
  validando: true,
  token: null,
  userName: "",
  name: "",
};

type LoginPayload = {
  userName: string;
  name: string;
};

type AuthAction = { type: "logout" } | { type: "login"; payload: LoginPayload };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        userName: "",
        name: "",
      };
    case "login":
      //   const {userName, name } = action.payload
      return {
        validando: false,
        token: "123erffe",
        userName: action.payload.name,
        name: action.payload.name,
      };
    default:
      return state;
  }
};

export const Login = () => {
  const [{ validando, token, name }, dispatch] = useReducer(
    authReducer,
    initialState
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({
      type: "login",
      payload: {
        name: "Ender",
        userName: "Xenocida",
      },
    });
  };

  const logout = () => {
      dispatch(
          {
              type: 'logout'
          }
      )
  }

  if (validando) {
    return (
      <>
        <div className="alert alert-info">Validando....</div>
      </>
    );
  }
  return (
    <>
      <h3>Login</h3>

      {token ? (
        <div className="alert alert-success">Te has logado con éxito </div>
      ) : (
        <div className="alert alert-danger"> No logado</div>
      )}

      {token ? (
        <button className="btn btn-danger" onClick={logout}>logout</button>
      ) : (
        <button className="btn btn-primary" onClick={login}>
          login
        </button>
      )}
    </>
  );
};
