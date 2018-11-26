import React from 'react';

export const userDatas = {
    username: undefined,
    isLoggedIn: false
};

const UserContext = React.createContext({
    user: userDatas,
    logUser: () => {}
});

export default UserContext;
