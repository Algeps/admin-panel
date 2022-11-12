import Header from './Header/Header';
import { FilterContainer } from './FilterContainer/FilterContainer';

import './css/uikit.css';
import './css/admin-panel.css';
{
  /* TODO
      *остановился на Input`е(запихнуть туда span и переменное сотсояние withLabel, которая мы назначала css правило searchbar div`у)
      * В Button убрать все лишние стили (Чтобы Input сам мог менять стили кнопки .input > .button)
  
      */
}
const PageAdmin = () => (
  <section className='section'>
    <Header />
    <FilterContainer />
  </section>
);

export default PageAdmin;
