# Урок 8.5. Задание: Как начать

Чтобы начать, клонируйте репозиторий `https://github.com/Habsida-Projects/webpack-static-template-ru` (`git clone https://github.com/Habsida-Projects/webpack-static-template-ru.git`).

В репозитории уже настроены:  
- **webpack**  
- **autoprefixer**  
- **scss-loader**  

[Что такое webpack?](https://medium.com/devschacht/aggelos-arvanitakis-an-introduction-to-webpack-s-philosophy-d12415cc8594)  
[Документация по webpack](https://medium.com/nuances-of-programming/%D0%B2%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2-webpack-%D0%B4%D0%BB%D1%8F-%D0%BD%D0%BE%D0%B2%D0%B8%D1%87%D0%BA%D0%BE%D0%B2-6cafbf562386)

---

### Что такое Autoprefixer?

Autoprefixer — это инструмент, который автоматически добавляет вендорные префиксы к CSS-свойствам.  
[Посмотреть в действии](https://autoprefixer.github.io/ru/).

---

### Как начать разработку?

Ранее вы писали HTML в файле `index.html`, а CSS — в `style.css`, который подключали на страницу с помощью тега `<link>`.

Теперь всё работает так же, но webpack сам связывает стили со страницей. Вы указываете точку входа, он проходит по всем импортам из этой точки, компилирует их в один файл и подключает его к странице.  

То же самое происходит с JS-файлами: Webpack берет файл, являющийся точкой входа, проходит по всем импортам и компилирует их в один файл.

- **Точка входа для SCSS** — `src/scss/style.scss`.  
Чтобы добавить файл в сборку, укажите в `src/scss/style.scss`:  
```css
@import './path/to/filename.scss';
```
> P.S. Если внутри импортированного файла есть другие импорты, webpack также их включит.

---

### Как разделить CSS на файлы?

Разделяйте на основе БЭМ-блоков: один файл - один блок.

- **Точка входа для JS** — `src/js/index.js`.  
Чтобы добавить файл в сборку, укажите в `src/js/index.js`:  
```js
import fileName from './path/to/filename';
```

В импортируемом файле нужно экспортировать функции/переменные и т. д.:
```js
export const myVariable = 'Block 7';
```
[Импорты и экспорты](https://learn.javascript.ru/import-export)

> P.S. Если внутри импортированного файла есть другие импорты, webpack также их включит.

---

### Куда помещать изображения?

Добавляйте изображения в папку `src/img` и указывайте путь в HTML как `./img/...`.

---

### Как посмотреть результат?

После сборки webpack помещает все файлы в папку `dist`.

Чтобы посмотреть проект, откройте файл `dist/index.html` в браузере.  
Также вы можете проверить скомпилированные JS-файлы в папке `dist/js` и CSS-файлы в папке `dist/css`.

---

## Вопросы

### Почему точка входа именно `src/js/index.js`?

Потому что мы указали это [здесь](https://github.com/Habsida-Projects/webpack-static-template-ru/blob/4bcd1091fd5988724f8a5989b4d9c9cf9c08afda/webpack.config.js#L9).  
Вы можете поменять точку входа и переименовать/поменять файлы и посмотреть что произойдет.

---

### Почему точка входа для SCSS — `src/scss/style.scss`?

Потому что мы [импортировали](https://github.com/Habsida-Projects/webpack-static-template-ru/blob/4bcd1091fd5988724f8a5989b4d9c9cf9c08afda/src/js/index.js#L1) этот файл в JS.

---

### Как webpack понимает, что делать с `*.scss`?

Это указано в [конфигурации](https://github.com/Habsida-Projects/webpack-static-template-ru/blob/4bcd1091fd5988724f8a5989b4d9c9cf9c08afda/webpack.config.js#L36).  
Так же обрабатываются [изображения](https://github.com/Habsida-Projects/webpack-static-template-ru/blob/4bcd1091fd5988724f8a5989b4d9c9cf9c08afda/webpack.config.js#L56) и [шрифты](https://github.com/Habsida-Projects/webpack-static-template-ru/blob/4bcd1091fd5988724f8a5989b4d9c9cf9c08afda/webpack.config.js#L47).

---

### Нужно ли настраивать Autoprefixer?

Нет, мы уже [сделали это](https://github.com/Habsida-Projects/webpack-static-template-ru/blob/4bcd1091fd5988724f8a5989b4d9c9cf9c08afda/package.json#L52) за вас.