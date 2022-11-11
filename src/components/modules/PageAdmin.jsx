import Header from './Header/Header';
import { FilterContainer } from './FilterContainer/FilterContainer';

import './css/uikit.css';
import './css/admin-panel.css';
{
  /* TODO доделать шапку; 
      сделать так, чтобы при вводе показывалась кнопка и можно было удалять содержимое
      остановился на Input`е(запихнуть туда span и переменное сотсояние withLabel, которая мы назначала css правило searchbar div`у)
      * Перекинуть Search в  Filter
      * Создать контейнер FilterContainer
      * Передавать все оставшиеся пропсы в button в Button
      * На что у нас влияют props(в том числе и на classNames), лучше выносить перед return
      * В Button убрать все лишние стили (Чтобы Input сам мог менять стили кнопки .input > .button)
  
      TODO Поместить Filter в FilterContainer, задать все перменные
      */
}
const PageAdmin = () => (
  <section className='section'>
    <Header />
    <div className='filter-row'>
      <FilterContainer />
    </div>
  </section>
);

export default PageAdmin;
