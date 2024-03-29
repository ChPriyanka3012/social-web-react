import React from 'react'
import { useEffect,useState } from 'react';
import { Usecontext1 } from '../UserContext/Usercontext1';
import { useContext } from 'react';
import './Feeds.css';
import { useFetch } from './useFetch';
export default function Albums() {
    const {data, setData}= useContext(Usecontext1);
    const url = "https://jsonplaceholder.typicode.com/albums?userId=1";
 useFetch(url);

  return (
    <div className="feeds-container">
    {data && data.map((elem) => (
      <div key={elem.id}>
        <div>UserId: {elem.userId}</div>
        <div>Id: {elem.id}</div>
        <div>Title: {elem.title}</div><hr></hr>
        
      </div>
    ))}
  </div>
  )
}
