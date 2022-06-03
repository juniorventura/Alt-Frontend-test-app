import React from 'react';
import { Employee } from '../models';

const Card = ({
  firstName,
  lastName,
  title,
  employeeId,
  editHandler,
  removeHandler
}: {
  firstName: string;
  lastName: string;
  title: string;
  employeeId: number;
  editHandler: (e: Employee) => void,
  removeHandler: (id: number) => void
}) => {
  return (<div
    className="flex flex-col rounded-lg drop-shadow-xl px-[10px] py-[20px] mb-[10px] bg-slate-100">
    <div className="flex justify-between">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <p className="pr-[5px] font-bold">{firstName}</p>
          <p className="font-bold">{lastName}</p>
        </div>
        <p>{title}</p>
      </div>
      <div className="flex flex-col">
        <button onClick={() => editHandler({ firstName, lastName, title, employeeId } as Employee)}><p >Edit</p></button>
        <button onClick={() => removeHandler(employeeId)}><p>Remove</p></button>
      </div>
    </div>
  </div>)
}

export default Card;