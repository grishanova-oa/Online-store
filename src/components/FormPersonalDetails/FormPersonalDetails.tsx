import React from 'react';
import { FormAddress } from '../FormAddress';
import { FormCard } from '../FormCard';
import { FormEmail } from '../FormEmail';
import { FormName } from '../FormName';
import { FormPhone } from '../FormPhone';
import './FormPersonalDetailsStyles.css';

interface IFormData {
  setIsShowFormPay: (isOpen: boolean) => void;
}
export const FormPersonalDetails = ({ setIsShowFormPay }: IFormData) => {
  return (
    <div className="modal">
      <form className="form-personal-details">
        <button className="form__btn" type="button" onClick={() => setIsShowFormPay(false)}>
          Close
        </button>
        <div className="form-details">
          <h3 className="details__title">Personal details</h3>
          <FormName />
          <FormAddress />
          <FormPhone />
          <FormEmail />
        </div>
        <div className="card-details">
          <h3 className="card__title">Credit card details</h3>
          <FormCard />
        </div>
        <button className="form__btn" type="button">
          Confirm
        </button>
      </form>
    </div>
  );
};
