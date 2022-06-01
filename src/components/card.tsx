import React from 'react';
import { Employee } from '../models';

const Card = ({
  name,
  lastname,
  title,
  id,
  onClick
}: {
  name: string;
  lastname: string;
  title: string;
  id: string;
  onClick: (e: Employee) => void
}) => {
  return (<div onClick={() => onClick({name, lastname, title, id} as Employee)} className="flex flex-col rounded-lg drop-shadow-xl px-[10px] py-[20px] mb-[10px] bg-slate-100">
  <div className="flex flex-row">
    <p className="pr-[5px] font-bold">{name}</p>
    <p className="font-bold">{lastname}</p>
  </div>
  <p>{title}</p>
</div>)
}

export default Card;