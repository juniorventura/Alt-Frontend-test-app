import React, { useState, useEffect } from 'react';
import Button from './components/button';
import CardList from './containers/cardList';
import Form from "./containers/form";
import { Employee } from './models';


function App() {

  const [currentEmployee, setCurrentEmployee] = useState<Employee>(
    {firstName: "",
    lastName: "", title: "", employeeId: 0}
  );
  const [listData, setListData] = useState<Employee[]>([]);

  const cardClick = (e: Employee) => {
    console.log(e)
    setCurrentEmployee(e)
  }

  const fetchData = () => {
    fetch('https://localhost:7065/api/Employees', {'mode': "cors", method: "GET"})
        .then(response => response.json())
        .then((data: Employee[]) => {
          let transformedData = data.map((emp: Employee) => {
            return {
              employeeId: emp.employeeId,
              firstName: emp.firstName,
              lastName: emp.lastName,
              title: emp.title
            } as Employee
          })
          setListData(transformedData)
        });
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="flex flex-col p-[10px] h-full">
      <div className="flex justify-center mb-[20px]">
        <p className="text-4xl">Employees List</p>
      </div>
      <div className="flex flex-col">
        <Button onClick={fetchData}>Refresh</Button>
      </div>
      <div className="flex">
        <div className="flex h-[600px] overflow-y-scroll w-[50%]">
          <CardList data={listData} editHandler={cardClick} removeHandler={() => {}} />
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
