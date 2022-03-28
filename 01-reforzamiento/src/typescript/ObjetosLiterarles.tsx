interface Persona {
  fullName: string;
  age: number;
  direction: Direction;
}

interface Direction {
  planet: string;
  location: number;
}

export const ObjetosLiterarles = () => {
  const persona: Persona = {
    fullName: "fernando",
    age: 35,
    direction: {
      planet: "Saturno",
      location: 808,
    },
  };

  return (
    <>
      <h3>Objetos Literales</h3>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </>
  );
};
