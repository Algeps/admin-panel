import '../../css/reset.css';
import '../../css/uikit.css';
import '../../css/admin-panel.css';

import Button from '../../shared/Button/Button';
import Input from '../../shared/Input/Input';

const Header = () => (
  <>
    <header className='page-header'>
      <span className='page-header__text'>Список заказов</span>
      <Button
        text='Светлая тема'
        nameIcon='sun'
        className='button_size_big button_color_clear-blue button_change_theme'
      />
    </header>
    <div className='filter-row'>
      <div className='filter-row__main'>
        <div className='filter-row__group filter-row__group_main'>
          <Input
            className='searchbar searchbar_group_main'
            placeholderText='Номер заказа или ФИО'
            nameIcon='search'
          />
          <Button
            className='button_size_big button_color_blue'
            text='Фильтры'
            nameIcon='filter'
          />
          <Button
            className='button_size_big button_color_clear-blue'
            text='Сбросить фильтры'
          />
        </div>
        <div className='filter-row__group filter-row__group_main'>
          <Button
            text='Загрузка'
            nameIcon='refresh'
            className='button_size_big button_color_clear-blue button_active_load'
          />
        </div>
      </div>
    </div>
  </>
);

export default Header;
