import React, { useState } from "react";

function Persons() {
  const persons = [
    {
      id: 1,
      name: "Rajni",
      age: 60
    },
    {
      id: 2,
      name: "Chiru",
      age: 65
    },
    {
      id: 3,
      name: "Bhagat",
      age: 70
    }
  ];
  const [mpersons, setMPersons] = useState(persons);

  const update = (p, name) => {
    const persons = [...mpersons];
    const updatedPersons = persons.map(person => {
      if (p.id === person.id) {
        person.name = name;
        return person;
      } else {
        return person;
      }
    });
    setMPersons(updatedPersons);
  };
  const deletePerson = p => {
    const persons = [...mpersons];
    const filteredPersons = persons.filter(person => {
      if (person.id !== p.id) {
        return true;
      } else {
        return false;
      }
    });
    setMPersons(filteredPersons);
  };
  return (
    <>
      <ul>
        {mpersons.map(person => {
          return (
            <div key={person.id}>
              <li>Name - {person.name}</li>
              <button
                onClick={() => {
                  update(person, "Sanjay");
                }}
              >
                Update
              </button>
              <button
                onClick={() => {
                  deletePerson(person);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    </>
  );
}

export default Persons;
