import React, { useState, useCallback } from "react";
import Title from "./Title";
import Button from "./Button";
import Count from "./Count";

function ParentComp() {
  const [age, setAge] = useState(20);
  const [salary, setSalary] = useState(20000);

  const incrementAge = useCallback(() => {
    setAge(age + 5);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <div>
      <Title />
      <Count text="Age" data={age} />
      <Button handleClick={incrementAge} text={age}>
        Increment Age
      </Button>
      <Count text="Salary" data={salary} />
      <Button handleClick={incrementSalary} text={salary}>
        Increment Salary
      </Button>
    </div>
  );
}

export default ParentComp;
