import React from 'react';
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";

import api from "../utils/api.js";

import "../index.css";

function Main() {

    const [currentUser, setCurrentUser] = React.useState({});
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
        React.useState(false);

    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
        React.useState(false);

    const imageStyle = { backgroundImage: `url(${currentUser.avatar})` };

    React.useEffect(() => {
        api
            .getUserInfo()
            .then((userData) => {
                setCurrentUser(userData);
            })
            .catch((err) => console.log(err));
    }, []);

    function onEditAvatar() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleUpdateAvatar(avatarUpdate) {
        api
            .setUserAvatar(avatarUpdate)
            .then((newUserData) => {
                setCurrentUser(newUserData);
                closeAllPopups();
            })
            .catch((err) => console.log(err));
    }

    function handleUpdateUser(userUpdate) {
        api
            .setUserInfo(userUpdate)
            .then((newUserData) => {
                setCurrentUser(newUserData);
                setIsEditAvatarPopupOpen(false);
            })
            .catch((err) => console.log(err));
    }

    return (
        <main className="content">
            <section className="profile page__section">
                <div className="profile__image" onClick={onEditAvatar} style={imageStyle}></div>
                <div className="profile__info">
                    <h1 className="profile__title">{currentUser.name}</h1>
                    <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
                    <p className="profile__description">{currentUser.about}</p>
                </div>
            </section>
            <EditProfilePopup
                isOpen={isEditProfilePopupOpen}
                onUpdateUser={handleUpdateUser}
                onClose={closeAllPopups}
            />
            <EditAvatarPopup
                isOpen={isEditAvatarPopupOpen}
                onUpdateAvatar={handleUpdateAvatar}
                onClose={setIsEditAvatarPopupOpen(false)}
            />
        </main>
    );
}

export default Main;
