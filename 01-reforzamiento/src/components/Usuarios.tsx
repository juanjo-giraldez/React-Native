import { user } from '../interfaces/repResp.interface';
import { useUsers } from '../hooks/useUsers';

export const Usuarios = () => {

  const { usuarios, nextPage, previusPage } = useUsers()
  
  const renderItem = ({ id, first_name, last_name, email, avatar }: user) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img
            src={avatar}
            alt={first_name}
            style={{
              width: 50,
              borderRadius: 100,
            }}
          />
        </td>
        <td>
          {first_name} {last_name}
        </td>
        <td>{email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios:</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>{usuarios.map(renderItem)}</tbody>
      </table>

      <button className="btn btn-primary" onClick={nextPage}>
        next
      </button>
      <button className="btn btn-success" onClick={previusPage}>
        previus 
      </button>
    </>
  );
};
