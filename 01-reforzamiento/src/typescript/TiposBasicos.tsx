export const TiposBasicos = () => {
  const name: string | number = "fernando";
  const edad: number = 40;
  const activo: boolean = false;
  const superpoderes: string[] = ["Velocidad", "volar", "rayos laser"];

//   superpoderes.push(1);
  superpoderes.push('teleportar');
  return (
    <>
      <h3>Tipos básicos</h3>
      {name}, {edad}, {activo ? "activo" : "no activo "}
      {superpoderes.join(", ")}
    </>
  );
};
