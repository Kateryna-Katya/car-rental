import { useState } from 'react';

import Icon from '../Icon';

import style from './SelectMenu.module.css';

import clsx from 'clsx';

const SelectMenu = ({ options, placeholder, form, field, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className={style.select}
      id={id}
      type="button"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <span className={style.placeholder}>
        {field.value && field.name === 'rentalPrice'
          ? `To $${field.value}`
          : field.value || placeholder}
      </span>
      <div className={style.openArrow}>
        {isOpen ? (
          <Icon name="arrow-up" width={16} height={16} />
        ) : (
          <Icon name="arrow-down" width={16} height={16} />
        )}
      </div>
      <div
        className={clsx(
          style.listWrapper,
          isOpen && style.visible,
          field.name === 'rentalPrice' && style.priceHeight
        )}
      >
        <ul className={clsx(style.optionsList)}>
          <li
            className={style.option}
            onClick={() => {
              setIsOpen(false);
              form.setFieldValue(field.name, '');
            }}
          >
            ----
          </li>
          {options !== null &&
            options.map(item => {
              return (
                <li
                  className={style.option}
                  key={item}
                  onClick={() => {
                    setIsOpen(false);
                    form.setFieldValue(field.name, item);
                  }}
                >
                  {item}
                </li>
              );
            })}
        </ul>
      </div>
    </button>
  );
};

export default SelectMenu;