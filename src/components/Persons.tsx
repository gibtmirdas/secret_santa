import React from 'react';

interface PersonSanta {
  p: string;
  s: string;
}

type PersonsProps = {
  persons: string[]
}

const shuffleArray = (array: string[]): string[] => { // Sattolo's algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

const PersonRow = (ps: PersonSanta) => <div className='p-row' key={ps.s}>
  <div className='s'>{ps.s}</div>
  <div className='p'>{ps.p}</div>
</div>

const buildPersonSantas = (persons: string[]): PersonSanta[] => {
  const shuffledPersons = shuffleArray(persons);
  const personSantas: PersonSanta[] = [];

  shuffledPersons.forEach((p: string, i: number) => personSantas.push({ p, s: shuffledPersons[(i + 1) % (shuffledPersons.length)] }))

  return personSantas;
}

function Persons({ persons }: PersonsProps) {
  if (!persons || persons.length === 0) {
    return <div></div>;
  }
  const PersonSantas: PersonSanta[] = buildPersonSantas(persons);


  const generateFile = (ps: PersonSanta[]) => {
    const element = document.createElement("a");
    let dataExport: string = "santas,targets\n";
    dataExport += ps.map((p) => `${p.s},${p.p}`).join('\n');
    const file = new Blob([dataExport], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "santas.csv";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }

  const sort = (a: PersonSanta, b: PersonSanta): number => {
    return a.s.localeCompare(b.s);
  }
  const sorted = PersonSantas.sort(sort);

  return (
    <>
      <button className='submit' onClick={() => generateFile(sorted)}>export csv</button>
      <div className='p-row p-row__header' key={0}>
        <div className='s'>santas</div>
        <div className='p'>targets</div>
      </div>
      {sorted.map((ps: PersonSanta) =>
        PersonRow(ps)
      )}
    </>
  );
}

export default Persons;
