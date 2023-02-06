import React from 'react';

const initState = {
    menuItemData: [
        "Like的發問",
        "Like的回答",
        "Like的文章",
        "Like的留言"
    ]
}

const initLoginInfo = {
    account: '123',
    password: '456',
}

const  MENU_ACTIONS = {
    ADD_ITEM: 'ADD_ITEM',
    CLEAN_ITEM: 'CLEAN_ITEM'
}

const  LOGIN_ACTIONS = {
    SET_ACCOUNT: 'SET_ACCOUNT',
    SET_PASSWORD: 'SET_PASSWORD'
}


const itemReducer = (state = initState, action )=>{
    switch (action.type){
        case MENU_ACTIONS.ADD_ITEM: {
            const menuItemCopy = state.menuItemData.slice();
            return {
                menuItemData: [action.payload.itemNew].concat(menuItemCopy)
            }
        }
        case MENU_ACTIONS.CLEAN_ITEM: {
            return { menuItemData: []}
        }
        default:
            return state;
    }
}

const LoginReducer = (state = initLoginInfo, action )=>{
    const stateNext = Object.assign({},state);
    switch (action.type){
        case LOGIN_ACTIONS.SET_ACCOUNT: {
            stateNext.account = action.value;
            return stateNext;
        }
        case LOGIN_ACTIONS.SET_PASSWORD: {
            stateNext.password = action.value;
            return stateNext;
        }
        default:
            return state;
    }
}





export {itemReducer,LoginReducer,LOGIN_ACTIONS,MENU_ACTIONS};
