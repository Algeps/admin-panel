import Header from './Header/Header';
import { FilterContainer } from './FilterContainer/FilterContainer';

import './css/uikit.css';
import './css/admin-panel.css';

const PageAdmin = () => (
  <section className='section'>
    <Header />
    <FilterContainer />
  </section>
);

export default PageAdmin;
