import Header from './components/Header/Header';
import { FilterContainer } from './components/Filter/FilterContainer';

import styles from './PageAdmin.module.css';
import { OrderTable } from './components/OrderTable';

export const PageAdmin = () => {
  return (
    <section className={styles.section}>
      <Header />
      <FilterContainer />
      <div className={styles.tableNotBreak}>
        <OrderTable />
      </div>
    </section>
  );
};
