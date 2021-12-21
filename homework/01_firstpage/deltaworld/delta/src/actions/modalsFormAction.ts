/* eslint-disable linebreak-style */
import { Dispatch } from 'redux';
import {
  ModalsFormAC, ModalsFormACTypes, IModalData, IModalsFormState
} from '../types/redux/modalsForm';

const openModalsFormAC = (id: string, data: IModalData) => (dispatch: Dispatch<ModalsFormAC>) => {
  const obj: IModalsFormState = {};
  obj[id] = { isActive: true, modalData: data };
  dispatch({
    type: ModalsFormACTypes.OPEN_MODALS_FORM,
    payload: obj
  });
};

const closeModalsFormAC = () => (dispatch: Dispatch<ModalsFormAC>) => {
  dispatch({
    type: ModalsFormACTypes.CLOSE_MODALS_FORM,
    payload: {}
  });
};

export { openModalsFormAC, closeModalsFormAC };
