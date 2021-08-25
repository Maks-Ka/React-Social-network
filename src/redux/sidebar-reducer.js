
let initialState =  {
    sidebar: [
        { id: 1, name: 'Nastya', src: 'https://image.flaticon.com/icons/png/128/921/921055.png' },
        { id: 2, name: 'Eva', src: 'https://image.flaticon.com/icons/png/128/921/921004.png' },
        { id: 3, name: 'Galya', src: 'https://image.flaticon.com/icons/png/128/311/311539.png' },
        { id: 4, name: 'Sega', src: 'https://image.flaticon.com/icons/png/512/921/921049.png' },
        { id: 5, name: 'Misha', src: 'https://image.flaticon.com/icons/png/128/311/311517.png' },
        { id: 6, name: 'Vika', src: 'https://image.flaticon.com/icons/png/128/921/921025.png' },
    ]
}
const sidebarReducer = (state = initialState, action) => {
    return state;
}


export default sidebarReducer;