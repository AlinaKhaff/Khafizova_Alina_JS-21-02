/* eslint-disable linebreak-style */
import React, { useContext } from 'react';
// import { useCookies } from 'react-cookie';
import { useTranslation } from 'react-i18next';
import { Alert } from 'antd';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import Preloader from '../../../preloader/Preloader';
import {
  checkPictureAndGet, getUserFullName
} from '../../../../utils/common';
import CardUser from '../../../cards/card-user/CardUser';
import '../../../flex-grid/FlexGrid.scss';
import { ThemeCheckboxContext } from '../../../../contexst/theme-checkbox/ThemeCheckboxContext';

const UserFullForm = () => {
  const { user, isLoading, error } = useTypedSelector((state: { userFullForm: any; }) => state.userFullForm);
  const themeCheckboxContext = useContext(ThemeCheckboxContext);
  const { t } = useTranslation();

  if (isLoading) {
    return <div style={{ height: 316 }}><Preloader isDarkTheme={themeCheckboxContext.isDarkTheme} /></div>;
  }

  if (error !== undefined) {
    return <Alert message={error} type="error" showIcon />;
  }

  return (
    <div className="row">
      <CardUser.Full
        isDarkTheme={themeCheckboxContext.isDarkTheme}
        id={user.id}
        imageURL={checkPictureAndGet(user.picture)}
        fullName={getUserFullName(
          t(`commons.userAppeal.${user.title}`), user.fullName
        )}
        gender={t(`commons.userGender.${user.gender}`)}
        dateOfBirth={user.dateOfBirth}
        dateOfRegister={user.registerDate}
        email={user.email}
        phone={user.phone}
      />
    </div>
  );
};

export default UserFullForm;
