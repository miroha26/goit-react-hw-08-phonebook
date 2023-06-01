import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { LineWave } from 'react-loader-spinner';

import {
  NavigationStyled,
  NavigationList,
  HeaderNav,
  NavigationItem,
  NavigationLink,
  ContactsLink,
  UserMenuWrapper,
} from './Navigation.styled';
import { UserMenu } from 'components/userMenu/UserMenu';
import { useSelectors } from 'components/hooks/UseSelector';

export const Navigation = () => {
  const { isLoggedIn } = useSelectors();

  return (
    <>
      <NavigationStyled>
        <HeaderNav>
          <NavigationList>
            {isLoggedIn && (
              <>
                <NavigationItem>
                  <ContactsLink to="/">Home</ContactsLink>
                  <ContactsLink to="/contacts">Contacts</ContactsLink>
                </NavigationItem>
                <NavigationItem>
                  <UserMenu />
                </NavigationItem>
              </>
            )}
            {!isLoggedIn && (
              <>
                <NavigationItem>
                  <ContactsLink to="/">Home</ContactsLink>
                </NavigationItem>
                <NavigationItem>
                  <UserMenuWrapper>
                    <NavigationLink to="/login">Login</NavigationLink>
                    <NavigationLink to="/register">Register</NavigationLink>
                  </UserMenuWrapper>
                </NavigationItem>
              </>
            )}
          </NavigationList>
        </HeaderNav>
      </NavigationStyled>
      <main>
        <Suspense fallback={        <LineWave
          height="200"
          width="200"
          color="#FBCA1F"
          ariaLabel="line-wave"
          wrapperStyle={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
