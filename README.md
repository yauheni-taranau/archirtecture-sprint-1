# Задание 1

При анализе проекта было выявлено 3 основные бизнес домена приложения Mesto
 1. Регистрация, аутентификация, авторизация пользователей
 2. Взаимодействие с профилем пользователя (редактирование информации, фотографии пользователя)
 3. Взаимодействие с пользовательским контентом (Добавление\удаление новых мест, система лайков)
 
    3.1 Система оценки контента (лайки, а так же в будущем напрашивается возможность комментирования) так же может быть вынесена в отдельный компонент, однако при приоритезации необходимых для вынесения 
в микрофронтенд функций, данная возможность была оценена мной как "Не срочно, но важно"

Были спроектированы следующие микрофронтенды, соответствующие бизнес функциям:

## auth-microfrontend

### Структура кода

- /auth-microfrontend
  - /src
    - /blocks
      - /auth-form
        - ...
        - auth-form.css
      - /login
        - login.css
    - /components
      - Login.js
      - Register.js
    - /images
      - ...
    - /utils
      - api.js
    - index.css
    - index.html
    - index.js
  - package.json
  - webpack.config.js

### Описание микрофронтенда

Данный микрофронтенд предоставляет UI для регистрации и аутентификации пользователей, а так же выполняет функцию валидации API токена

## profile-microfrontend

### Структура кода

- /profile-microfrontend
    - /src
        - /blocks
            - /popup
                - ...
                - popup.css
            - /profile
              - ...
              - profile.css
        - /components
            - EditAvatarPopup.js
            - EditProfilePopup.js
            - Profile.js
        - /images
            - ...
        - /utils
            - api.js
      - index.css
      - index.html
      - index.js
    - package.json
    - webpack.config.js

### Описание микрофронтенда

Данный микрофронтенд предоставляет UI для отображения и редактироания профиля пользователя и его аватара, используя API бекенда для этих функций

## content-microfrontend

### Структура кода

- /content-microfrontend
    - /src
        - /blocks
            - /card
                - ...
                - card.css
            - /content
                - content.css
            - /places
              - places.css
        - /components
            - Card.js
            - EditProfilePopup.js
        - /images
            - ...
        - /utils
            - api.js
        - index.css
        - index.html
        - index.js
    - package.json
    - webpack.config.js

### Описание микрофронтенда

Данный микрофронтенд предоставляет UI для отображения/удаления мест и взаимодействия с лайками, используя API бекенда для этих функций

## host

### Структура кода

- /host
    - /src
        - /blocks
            - /footer
                - ...
                - footer.css
            - /header
                - ...
                - header.css
            - /page
              - ...
              - page.css
            - /popup
              - ...
              - popup.css
        - /components
            - Footer.js
            - Header.js
            - InfoTooltip.js
            - Main.js
        - /images
            - ...
        - /vendor
        - /utils
            - api.js
        - App.jsx
        - index.css
        - index.html
        - index.js
    - package.json
    - webpack.config.js

### Описание микрофронтенда

Данный микрофронтенд объединяет остальные микрофронтенды в единое целое

## Описание механизма взаимодействия между микрофронрендами

На данном этапе развития проекта целесообразно будет использовать Event-Driven механизмом общения между фронтендами, так как ни в одном из фронтендов нет необходимости сохранять 
что-либо в глобальное состояние (за исключением JWT токена пользователя. Для этих целей можно, например, использовать local storage).

### Уровень 3 выполнен не был


# Задание 2

https://drive.google.com/file/d/1JshEo7VXyIcvwEele8zGVeAD1R3RUYIz/view
          
 