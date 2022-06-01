import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Employee } from '../models';
import Card from '../components/card';

const CardList = ({
  data,
  onCardClick
}: {
  data: Employee[],
  onCardClick: (e: Employee) => void
}) => {

  const [list, setList] = useState<Employee[]>();

  useEffect(() => {
    let array = [];
    for(let i = 0; i < 20; i++) {
      array.push({
        name: "name " + i,
        lastname: "lastname " + i,
        title: "title " + i,
        id: "id " + i
      })
    }
    setList(array)

  }, [])

  if (!list) return <p>Loading...</p>

  return (
    <div className='flex flex-col p-[5px] w-full'>
      {list.map(employee => {
      return <Card onClick={onCardClick} key={employee.id} {...employee} />
    })}
    </div>
  )

};

export default CardList;