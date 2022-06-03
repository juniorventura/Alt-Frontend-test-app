import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Employee } from '../models';
import Card from '../components/card';

const CardList = ({
  data,
  editHandler,
  removeHandler
}: {
  data: Employee[],
  editHandler: (e: Employee) => void,
  removeHandler: (id: number) => void
}) => {

  if (!data) return <p>Loading...</p>

  return (
    <div className='flex flex-col p-[5px] w-full'>
      {data.map(employee => {
      return <Card editHandler={editHandler} removeHandler={removeHandler} key={employee.employeeId} {...employee} />
    })}
    </div>
  )

};

export default CardList;