import React, { useState } from 'react';
import Button from './components/button';
import CardList from './containers/cardList';
import Form from "./containers/form";
import { Employee } from './models';


function App() {

  const [currentEmployee, setCurrentEmployee] = useState<Employee>(
    {name: "test",
    lastname: "", title: "", id: ""}
  );

  const cardClick = (e: Employee) => {
    alert(JSON.stringify(e))
  }

  return (
    <div className="flex flex-col p-[10px] h-full">
      <div className="flex justify-center mb-[20px]">
        <p className="text-4xl">Employees List</p>
      </div>
      <div className="flex flex-col">
        <Button>Refresh</Button>
      </div>
      <div className="flex">
        <div className="flex h-[600px] overflow-y-scroll w-[50%]">
          <CardList data={[]} onCardClick={cardClick} />
        </div>
        <div className="flex flex-col mt-[30px] ml-[20px] w-[50%]">
          <div className="flex justify-center font-bold">
          <p>Employee details</p>
          </div>
          <Form {...currentEmployee}/>
        </div>
      </div>

    </div>
  );
}

export default App;
