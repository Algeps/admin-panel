import Header from './components/Header/Header';
import { FilterContainer } from './components/FilterContainer/FilterContainer';

import './index.css';

const PageAdmin = () => {
  return (
    <section className='section'>
      <Header />
      <FilterContainer />
    </section>
  );
};

export default PageAdmin;
