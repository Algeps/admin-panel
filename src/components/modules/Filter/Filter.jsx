import { Input, Button, ButtonColorTypes } from '../../shared';

const noop = () => {};

export const Filter = ({ isOpen, onShowFilterButtonClick = noop }) => (
  <>
    <div className='filter-row__main'>
      <div className='filter-row__group filter-row__group_main'>
        <Input
          className='searchbar searchbar_group_main'
          placeholderText='Номер заказа или ФИО'
          iconName='search'
        />
        <Button
          buttonColorTypes={
            isOpen
              ? ButtonColorTypes.colorBlue
              : ButtonColorTypes.colorClearBlue
          }
          onClick={onShowFilterButtonClick}
          text='Фильтры'
          iconName='filter'
        />
        <Button
          buttonColorTypes={ButtonColorTypes.colorClearBlue}
          text='Сбросить фильтры'
        />
      </div>
      <div className='filter-row__group filter-row__group_main'>
        <Button
          text='Загрузка'
          iconName='refresh'
          buttonColorTypes={ButtonColorTypes.colorClearBlue}
          className='button_active_load'
        />
      </div>
    </div>
    {isOpen && (
      <div className='filter-row__other'>
        {/*
    <div className='filter-row__group filter-row__group_other'>
      <Input
        className='input_filter-row_data_registration input_filter-row_data_registration-from'
        labelText='Дата оформления'
        initValue='20.01.2021'
        placeholderText='dd.mm.yyyy'
        textBefore=''
        isSearchBar={true}
      />
      <Searchbar />
      <label className='input input_filter-row_data_registration input_filter-row_data_registration-from'>
        <div className='input__label'>Дата оформления</div>
        <div className='input__area searchbar'>
          <span className='input__button-icon input__button-icon_position_beginning searchbar__searchbar-text'>
            с
          </span>
          <input
            type='text'
            className='input__input-field'
            placeholder='dd.mm.yyyy'
            value='20.01.2021'
          />
          <button className='input__button-icon input__button-icon_position_end input__button-icon_target_delete'>
            <svg
              viewBox='0 0 16 16'
              className='input__icon'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5' fill='none' />
            </svg>
          </button>
        </div>
      </label>
      <label className='input input_filter-row_data_registration'>
        <div className='input__area searchbar'>
          <span className='input__button-icon input__button-icon_position_beginning searchbar__searchbar-text'>
            по
          </span>
          <input
            type='text'
            className='input__input-field'
            placeholder='dd.mm.yyyy'
          />
          <button className='input__button-icon input__button-icon_position_end input__button-icon_target_delete'>
            <svg
              viewBox='0 0 16 16'
              className='input__icon'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5' fill='none' />
            </svg>
          </button>
        </div>
      </label>
    </div>
    <div className='filter-row__group filter-row__group_other'>
      <label className='input input_style_primary input_filter-row_order_status'>
        <div className='input__label'>Статус заказа</div>
        <div className='input__area'>
          <input
            type='button'
            className='input__input-field input__input-field_checked'
            value='Любой'
          />
          <svg
            viewBox='0 0 16 16'
            className='input__button-icon input__button-icon_position_end input__button-icon_target_button'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M5 6H11V6.5L8.25 11H7.75L5 6.5V6Z' stroke='none' />
          </svg>

          <div className='dropdown-status'>
            <label className='dropdown-status__item'>
              <div className='checkbox'>
                <input type='checkbox' className='checkbox__input' />
                <svg
                  viewBox='0 0 16 16'
                  className='checkbox__icon'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z'
                    stroke='none'
                  ></path>
                </svg>
                <span className='checkbox__label'>Новый</span>
              </div>
            </label>
            <label className='dropdown-status__item'>
              <div className='checkbox'>
                <input type='checkbox' className='checkbox__input' />
                <svg
                  viewBox='0 0 16 16'
                  className='checkbox__icon'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z'
                    stroke='none'
                  ></path>
                </svg>
                <span className='checkbox__label'>Рассчет</span>
              </div>
            </label>
            <label className='dropdown-status__item'>
              <div className='checkbox'>
                <input type='checkbox' className='checkbox__input' checked='' />
                <svg
                  viewBox='0 0 16 16'
                  className='checkbox__icon'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z'
                    stroke='none'
                  ></path>
                </svg>
                <span className='checkbox__label'>Подтвержден</span>
              </div>
            </label>
            <label className='dropdown-status__item'>
              <div className='checkbox'>
                <input type='checkbox' className='checkbox__input' />
                <svg
                  viewBox='0 0 16 16'
                  className='checkbox__icon'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z'
                    stroke='none'
                  ></path>
                </svg>
                <span className='checkbox__label'>Отложен</span>
              </div>
            </label>
            <label className='dropdown-status__item'>
              <div className='checkbox'>
                <input type='checkbox' className='checkbox__input' />
                <svg
                  viewBox='0 0 16 16'
                  className='checkbox__icon'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z'
                    stroke='none'
                  ></path>
                </svg>
                <span className='checkbox__label'>Выполнен</span>
              </div>
            </label>
            <label className='dropdown-status__item'>
              <div className='checkbox'>
                <input type='checkbox' className='checkbox__input' />
                <svg
                  viewBox='0 0 16 16'
                  className='checkbox__icon'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7 10L4.5 6L3 7L7 14L14.5 3.5V3L13 2L7 10Z'
                    stroke='none'
                  ></path>
                </svg>
                <span className='checkbox__label'>Отменен</span>
              </div>
            </label>
          </div>
        </div>
      </label>
    </div>
    <div className='filter-row__group filter-row__group_other'>
      <label className='input input_filter-row_order_amount'>
        <div className='input__label'>Сумма заказа</div>
        <div className='input__area searchbar'>
          <span className='input__button-icon input__button-icon_position_beginning searchbar__searchbar-text'>
            от
          </span>
          <input
            type='text'
            className='input__input-field'
            placeholder='₽'
            value='5000'
          />
          <button className='input__button-icon input__button-icon_position_end input__button-icon_target_delete'>
            <svg
              viewBox='0 0 16 16'
              className='input__icon'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5' fill='none' />
            </svg>
          </button>
        </div>
      </label>
      <label className='input input_filter-row_order_amount'>
        <div className='input__area searchbar'>
          <span className='input__button-icon input__button-icon_position_beginning searchbar__searchbar-text'>
            до
          </span>
          <input type='text' className='input__input-field' placeholder='₽' />
          <button className='input__button-icon input__button-icon_position_end input__button-icon_target_delete'>
            <svg
              viewBox='0 0 16 16'
              className='input__icon'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5' fill='none' />
            </svg>
          </button>
        </div>
      </label>
    </div>
    <div className='filter-row__group filter-row__group_other'>
      <Button
        className='button_size_big button_color_clear-blue'
        text='Применить'
      />
    </div>*/}
      </div>
    )}
  </>
);
