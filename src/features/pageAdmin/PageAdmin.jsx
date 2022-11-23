import Header from './components/Header/Header';
import { FilterContainer } from './components/Filter/Filter';

import styles from './PageAdmin.module.css';
import { OrderTable } from './components/OrderTable';

export const PageAdmin = () => {
  return (
    <section className={styles.section}>
      <Header />
      <FilterContainer />
      <OrderTable />
    </section>
  );
};
