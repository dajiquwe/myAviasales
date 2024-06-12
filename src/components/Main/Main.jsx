import React from 'react';
import { useSelector } from 'react-redux';

import TicketList from '../TicketList';
import SortingTab from '../SortingTab';

import styles from './Main.module.scss';

const Main = () => {
  const isLoading = useSelector((state) => state.tickets.isLoading);
  const error = useSelector((state) => state.tickets.error);
  return (
    <div className={styles.main}>
      <SortingTab />
      {isLoading && <div className={styles.loader}>loading</div>}
      {!error && <TicketList />}
      {error && <div className={styles.errorMsg}> Что-то пошло не так. Скоро все исправим</div>}
    </div>
  );
};

export default Main;
