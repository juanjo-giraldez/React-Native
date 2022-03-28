export const Funciones = () => {
  const add = ( a: number, b: number):number => {
    return a + b
  };
  return (
    <>
      <h3>Funciones</h3>
      <span>El resultado es : {add(10, 8)}</span>
    </>
  );
};
