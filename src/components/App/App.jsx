/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchSearchId, fetchTickets } from '../../store/ticketsSlice';

import Filter from '../Filter';
import Main from '../Main';

import deleteCookie from '../../utilites/deleteCokie';

import styles from './App.module.scss';
import logo from '../../img/Logo.png';

const App = () => {
  const tickets = useSelector((state) => state.tickets.tickets);
  const fetchStatus500 = useSelector((state) => state.tickets.fetchStatus500);
  const stopFetch = useSelector((state) => state.tickets.stopFetch);
  const searchId = useSelector((state) => state.tickets.searchId);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearchId());

    return deleteCookie('searchId');
  }, [dispatch]);

  useEffect(() => {
    if (!stopFetch && searchId) dispatch(fetchTickets());
  }, [dispatch, tickets, fetchStatus500, stopFetch, searchId]);

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <img className={styles.logo} alt="logo" src={logo} />
      </header>
      <Filter />
      <Main />
    </div>
  );
};

export default App;
