import dialogReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sideBarReducer from "./sidebar-reducer"


let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi. How are you?', likesCount: 45, },
                { id: 2, message: 'It/s my furst post', likesCount: 48, },
                { id: 3, message: 'ееееееее', likesCount: 67, }
            ],
            newPostText: ' '
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Sofiyka', src: 'https://sun2-10.userapi.com/s/v1/if1/w1y1anZFpf-CNhV-lyM8U6QCcnKkY164nwL0HkaM1FCU6CxDm4dQ3F0i9yR8ib5JCojY2P7X.jpg?size=100x0&quality=96&crop=58,0,339,339&ava=1' },
                { id: 2, name: 'Maks', src: 'https://sun2-4.userapi.com/s/v1/ig2/tmGqC7l6DkVdw8p1o8raCVmvPtRmFeWjVODUXOn8ClIXSBpLUKtcascbdMK0i0qBhTs0aXgP7qSj-evbmXNdcL9X.jpg?size=100x0&quality=96&crop=26,6,1580,1580&ava=1' },
                { id: 3, name: 'Dimych', src: 'https://sun2-4.userapi.com/s/v1/if1/WKIru_JWpP_NC33uxlLNSzN_FCVYF2ATJmiCUPBesjXHmmhm6r9zUDFCO0ewZ2F-RZC9qFYz.jpg?size=50x0&quality=96&crop=322,289,1006,1006&ava=1' },
                { id: 4, name: 'Masha', src: 'https://sun2-3.userapi.com/s/v1/ig1/ZEoKnBuJ0WePJx9izTmq4QNH657mCi5IPIfuxZJGyaz-kWOF-CrCBqKT6FRZHfZ16xZsqYT7.jpg?size=100x0&quality=96&crop=160,0,759,759&ava=1' },
                { id: 5, name: 'Ulya', src: 'https://sun2-3.userapi.com/s/v1/ig2/lxJkYCHND2QJIj6Y6CiLOIZn64fKd1lp2_pkoHGcLhi5ugP7zsKEcKpDSDVkWFsVWk_9JWws4VdRK05CIAZns7-j.jpg?size=100x0&quality=96&crop=0,274,1215,1215&ava=1' },
                { id: 6, name: 'Ustina', src: 'https://sun9-59.userapi.com/impf/Xr5HIhSHG2Xn-b6EXFY0x1KMNfa5VpmofbNzlQ/cS6GLKimqdg.jpg?size=1080x1080&quality=96&sign=e702e7ebd20a8cddfbebd77957c00ecc&type=album' },
                { id: 7, name: 'Sasha', src: 'https://sun2-9.userapi.com/s/v1/ig2/k-NYQ6bwT9zwVHoWsY9mEW35tf56gqKIZSogiC5qcE32xOlTKCMvn3poYzyhEn0fKrStu2jhWt6di522b1IjrWHb.jpg?size=100x0&quality=96&crop=12,12,200,200&ava=1' },
                { id: 8, name: 'Vova', src: 'https://sun2-4.userapi.com/s/v1/ig1/X2AsqRo-dhkjrmbPk2fwjAJjQipXwXvaGtQFw42mSpDrZUYK5pR5AiM6HUwJktqkET6WctPB.jpg?size=100x0&quality=96&crop=615,256,588,588&ava=1' }
            ],
            messages: [
                { id: 1, message: 'Hy, I am Maks' },
                { id: 2, message: 'Hoy are you' },
                { id: 3, message: 'Yo' },
                { id: 4, message: 'Yo' },
            ],
            newMessageText: ''
        },
        sidebarPage: {
            sidebar: [
                { id: 1, name: 'Nastya', src: 'https://image.flaticon.com/icons/png/128/921/921055.png' },
                { id: 2, name: 'Eva', src: 'https://image.flaticon.com/icons/png/128/921/921004.png' },
                { id: 3, name: 'Galya', src: 'https://image.flaticon.com/icons/png/128/311/311539.png' },
                { id: 4, name: 'Sega', src: 'https://image.flaticon.com/icons/png/512/921/921049.png' },
                { id: 5, name: 'Misha', src: 'https://image.flaticon.com/icons/png/128/311/311517.png' },
                { id: 6, name: 'Vika', src: 'https://image.flaticon.com/icons/png/128/921/921025.png' },
            ]
        }
    },
    _callSubscriber() {
        console.log('State');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sideBarReducer(this._state.sidebarPage, action);

        this._callSubscriber(this._state);
    }
}



window.store = store
export default store;