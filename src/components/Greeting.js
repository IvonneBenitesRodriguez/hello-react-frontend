import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/Greetings/greetings';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetings.greetingDetails);
  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);
  return <p>{greeting[0]?.message}</p>;
};

export default Greeting;
