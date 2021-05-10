import React from 'react';
import {divideNumberToSpace} from '../../utils';

const RegApplication = ({state}) => {
  const {purpose, cost, initialFee, term} = state;
  return (
    <form action="#" className="credit-calculator__reg-application reg-application">
      <h3 className="reg-application__title">Шаг 3. Оформление заявки</h3>
      <table className="reg-application__table">
        <tbody>
          <tr className="reg-application__param-field">
            <td className="reg-application__field-name">Номер заявки</td>
            <td className="reg-application__field-value">№ 0010</td>
          </tr>
          <tr className="reg-application__param-field">
            <td className="reg-application__field-name">Цель кредита</td>
            <td className="reg-application__field-value">{purpose === `mortgage` ? `Ипотека` : `Автокредит`}</td>
          </tr>
          <tr className="reg-application__param-field">
            <td className="reg-application__field-name">Стоимость {purpose === `mortgage` ? `недвижимости` : `автомобиля`}</td>
            <td className="reg-application__field-value">{divideNumberToSpace(cost)} рублей</td>
          </tr>
          <tr className="reg-application__param-field">
            <td className="reg-application__field-name">Первоначальный взнос</td>
            <td className="reg-application__field-value">{divideNumberToSpace(initialFee)} рублей</td>
          </tr>
          <tr className="reg-application__param-field">
            <td className="reg-application__field-name">Срок кредитования</td>
            <td className="reg-application__field-value">{term} лет</td>
          </tr>
        </tbody>
      </table>
      <div className="reg-application__input-container">
        <input type="text" className="reg-application__input reg-application__input--full-name" placeholder="ФИО" autoFocus required/>
        <input type="text" className="reg-application__input" placeholder="Телефон" required/>
        <input type="text" className="reg-application__input" placeholder="E-mail" required/>
      </div>
      <button type="submit" className="reg-application__submit-btn">Отправить</button>
    </form>
  );
}

export default RegApplication;
