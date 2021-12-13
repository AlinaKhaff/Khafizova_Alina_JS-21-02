import './App.css';
import React, { useEffect, useState } from 'react';
import {
  HashRouter, Link, Route, Switch
} from 'react-router-dom';
import Wrapper from '../wrapper/Wrapper';
import Main from '../main/Main';
import Card from '../card/Сard';
import Pagenator from '../pagenator/Pagenator';
import ThemeCheckbox from '../theme-checkbox/ThemeCheckbox';
import Tooltip from '../tooltip/Tooltip';
import { fetchUsersAll, IListResponse, IUser } from '../../utils/fetchDumMyApi';
import { ThemeDarkContextProvider } from '../../contexts/theme-checkbox/ThemeCheckboxContext';
import CardUser from '../card-user/CardUser';

const App = () => {
  const [users, setUsers] = useState([] as Array<IUser>);
  const [countUsers, setCountUsers] = useState(0 as number);
  const [limit, setLimit] = useState(10 as number);
  const [page, setPage] = useState(0 as number);
  const [countPages, setCountPages] = useState(0 as number);

  const loadUsersAll = (pageApi: number, limitApi: number) => fetchUsersAll(
    pageApi,
    limitApi,
    (response: IListResponse<IUser>) => {
      setUsers(response.data);
      setCountUsers(response.total);
    },
    () => { throw new Error('Ошибка загрузки данных из сервера'); }
  );

  useEffect(() => {
    loadUsersAll(page, limit);
    setCountPages(countUsers / limit);
  }, [countUsers]);

  const selectPage = (currentPage: number): void => {
    setUsers([]);
    setPage(currentPage);
    loadUsersAll(currentPage, limit);
  };

  const selectLimit = (currentLimit: number, currentCountPages: number): void => {
    setUsers([]);
    setPage(0);
    loadUsersAll(0, currentLimit);
    setLimit(currentLimit);
    setCountPages(currentCountPages);
  };

  const renderCards = () => (
    <div className="row">
      {users.map((item: IUser) => (
        <div className="col-6" key={item.id}>
          <Tooltip textInfo={item.id}>
            <Link to={`/user/${item.id}`}>
              <Card
                imgUrl={item.picture}
                cardUserId={item.id}
                cardUserTitle={item.title}
                cardUserFirstName={item.firstName}
                cardUserLastName={item.lastName}
              />
            </Link>
          </Tooltip>
        </div>
      ))}
    </div>
  );

  return (
    <ThemeDarkContextProvider>
      <div className="App">
        <Wrapper>
          <HashRouter>
            <Switch>
              <Route path="/user/:id">
                <Main headerTitle="Пользователь">
                  <CardUser />
                </Main>
              </Route>
              <Route path="/">
                <Main headerTitle="Пользователи">
                  {renderCards()}

                </Main>
              </Route>
            </Switch>
          </HashRouter>
        </Wrapper>
      </div>
    </ThemeDarkContextProvider>
  );
};

export default App;
