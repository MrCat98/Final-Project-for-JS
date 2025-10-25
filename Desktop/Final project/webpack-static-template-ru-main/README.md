# Webpack Static Site Starter Kit

## Требования к проекту

- [Node 20.17.0](https://nodejs.org/en/download/package-manager)
- [NVM для macOS](https://tecadmin.net/install-nvm-macos-with-homebrew/)
- [NVM для Windows](https://github.com/coreybutler/nvm-windows/releases) (если используется Windows, установка должна выполняться от имени администратора)
- [Yarn](https://yarnpkg.com/)

---

## Использование

1. Клонируйте репозиторий:

```bash
git clone https://github.com/Habsida-Projects/webpack-static-template
```

2. Откройте терминал в папке `webpack-static-template`.

3. Удалите папку `.git` вручную или с помощью команды:

```bash
rm -rf .git
```

Существующая папка `.git` связана с репозиторием, из которого вы клонировали проект. Вам нужно создать новую папку `.git`, связанную с вашим собственным репозиторием.

---

## Если создаете новый проект на github.com

Необходимо инициализировать новый Git-репозиторий. _Если эта команда не срабатывает, возможно, ваша версия Git устарела, и потребуется обновление._

```properties
git init -b main
```

Добавить все изменения и сделать первый коммит

```properties
git add . && git commit -m "initial commit"
```

Соединить локальный репозиторий с удаленным, заменив *USER* (на ваше имя пользователя в GitHub) и *REPO* (название вашего репозитория):

```properties
git remote add origin https://github.com/USER/REPO.git
```

Проверьте соединение:

```properties
git remote -v
```

Выполните отправку изменений в удаленный репозиторий:

```properties
git push origin main
```

---

## Проверка версии Node

Эта команда должна вывести версию `20.17.0`:

```properties
node -v
```

---

## Два способа установки зависимостей

Установка зависимостей через NPM:

```properties
npm install
```

Установка зависимостей через Yarn:

```properties
yarn
```

---

## Два способа запуска приложения

Для запуска веб-сервера с помощью NPM:

```properties
npm start
```

Для запуска веб-сервера с помощью Yarn:

```properties
yarn start
```

---

## Два способа деплоя на GitHub Pages

### Ваш репозиторий должен быть связан с репозиторием на GitHub. После этого выполните следующие действия:

Деплой на GitHub Pages с помощью NPM:

```properties
npm run deploy
```

Деплой на GitHub Pages с помощью Yarn:

```properties
yarn deploy
```

Основано на [этой статье](https://dev.to/anitaparmar26/webpack-5-guide-for-beginners-314c).