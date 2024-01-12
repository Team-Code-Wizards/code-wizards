# Файловая структура

## App

В папке *app* хранится маршрутизация (страницы) и глобальные стили. Каждая страница расположена в отдельной папке. Папки со страницами называются со строчной буквы в *kebab-case (*что является URL адресом страницы */user* - папка *user*). Файл страницы называется *page.tsx*.

## Components

В папке *components* хранятся компоненты. Каждый компонент расположен в отдельной папке. Папки с компонентами называются с заглавной буквы в *CamelCase*. Файл компонента называется *index.tsx*, файл со стилями - *styles.module.scss*, интерфейс компонента - *interface.ts*, слайс компонента (при подключении *redux*) - *slice.tsx*. 

## Images

Изображения хранятся в папке images. Группы изображений одного типа (иконки соцсетей, картинки для баннера) хранятся в отдельной папке. Папки называются сообразно с назначением изображений, со строчной буквы в с*amelCase*. Изображения называются в соответствие с содержанием (чтобы другой разработчик мог понять), со строчной буквы в *kebab-case*.

## UI

В папке *ui* хранятся элементы пользовательского интерфейса (кнопки, переключатели, инпуты, табы), которые подразумевают массовое переиспользование. Каждый ui элемент расположен в отдельной папке. Папки с ui элементами называются с заглавной буквы в *CamelCase*. Файл элемента называется *index.tsx*, файл со стилями - *styles.module.scss*.

## Constants

В папке constants хранятся все константы проекта. Для констант из компонента внутри папки constants создается отдельная папка с названием компонента(например *constants/Header*). Внутри этой папке создаются файлы *index.ts* и *type.ts* в которых находятся сами константы и типы для них соответственно. Внутри папки constants находится файл *index.ts* в который импортируются все константы из папок компонентов. Константы называем в *camelCase.*

---

# Код-стайл

## Общий синтаксис

Далее приведены общие рекомендации по оформлению кода:

- ; - каждое объявление заканчивается точкой с запятой
- ↹ интервалы - каждый новый уровень вложенности отделяется табом
- `{ шаблонные строки }`  - используются вместо сложного объединения строк
- ‘ ’ - используются одинарные кавычки, вместо двойных
- пробелы - не ставятся пробелы в конце строк и в пустых строках
- ‘++’  ‘- -’  - унарные операторы присоединяются к операндам без пробела (i++)
- , ; - перед запятой и точкой с запятой не ставятся пробелы
- : - перед двоеточием после имени свойства в определении объекта не ставятся пробелы
- ? : - знаки в тернарном условном операторе отделяются пробелами с двух сторон
- {} () [] - в пустых конструкциях не ставятся заполняющие пробелы
- === - используется строгая проверка на равенство (кроме проверки на равенство null)

## Комментирование

!!! Если вы собираетесь оставить комментарий, сначала подумайте, можно ли что-то изменить в коде, чтобы его не писать (например, назвать переменную или функцию так, чтобы всем было понятно ее назначение и не пришлось бы объяснять в комментарии).

- комментарий пишем на русском с заглавной буквы
- поясняющий комментарий должен быть емким (кратким и понятным)
- комментарий в местах, где планируется доработка или рефакторинг должен начинаться с ‘TODO:’ (например *// TODO: добавить отправку данных на бэкенд*)

## Нейминг

Наименование переменных, функций и компонентов должно четко описывать назначение (функционал) этого элемента.

- функции выполняют только одну цель, которая отражена в их названии
- сокращения допустимы в пределах читаемости (не стоит сокращать название до одних согласных или других нечитаемых сочетаний букв)
- нежелательно использование цифр в названиях
- недопустимы названия из одной буквы

## Страницы

Каждая страница -  это функциональный *React*-компонент, собранный из других компонентов. Компонент страницы называется с заглавной буквы в *CamelCase*.

## Компоненты

Компонент (в том числе ui компонент) создается как функциональный компонент *React.FC*. Компонент называется с заглавной буквы в *CamelCase*. Импорт стилей называется *styles*. Импорт библиотеки *classnames* называется *classNames*. Компонент экспортируется по умолчанию. Стили компонентов (имена классов) пишем по [БЭМ](https://ru.bem.info/methodology/naming-convention/).

## Константы

Константа называется заглавными буквами в SNAKE_CASE. Если группа констант хранится в отдельном файле, они сначала импортируются в главный файл *index.tsx*, а уже оттуда в другие файлы проекта.

## Стили

Стили пишем с использованием препроцессора [SCSS](https://sass-lang.com/documentation/style-rules/).

Импорт стилей в компонентах называется *styles*. 

Глобальные CSS переменные хранятся в файле *globals.scss*. Файл дополняется по мере проработки макета и создания новых компонентов. Синтаксис использования CSS переменных можно посмотреть [здесь](https://developer.mozilla.org/ru/docs/Web/CSS/--*).

## Наименования БЭМ 

Для именования класов тэгов разметки используем методологию БЭМ , block__element_modificator

Так же удобнее использовать в связке с sass 

// style.module.scss

![foto10](https://i.ibb.co/YhL4s68/22222.png)

// index.tsx
![foto9](https://i.ibb.co/Zmk6Gg2/11111.png)

## TypeScript

### Interface

Для описания функциональных компонентов *React FC* используются интерфейсы. Интерфейс импортируется в компонент из файла *interface.ts* и называется по принципу *IComponent*.

### Type

Для описания функций и констант используются типы. Тип называется по принципу *TConstant*.

Типизация констант происходит внутри компонента в файле *interface.ts*

## Наименование веток

Название ветки должно называться с категории:

- *feature* - для создания и редактирования фич
- *bugfix* - для исправления багов

После категории идет ‘/’ и краткое описание изменения в *kebab-case*.

Например: *feature/main-section, bugfix/change-file-names.*

## Работа с issues

После того как взяли задачу , перенести ее в колонку "В процессе" и добавить в описание задачи слово "Взял"
( на коменнтарии будет временная метка для отслеживания ) так же следует добавить себя в "Assignees"

![foto4](https://i.ibb.co/0c2rsjG/Screenshot232png.png)

## Коммиты

Делаем с помощью команды *npm run commit.*
Дальше отвечаем на вопросы:

- Тип изменения (выбираем стрелками)
- Название изменения (латиницей в kebab-case, но можно и пропустить)
- Короткое описание изменения (по-русски, коротко смысл изменений)
- Длинное описание (жмем enter чтобы пропустить)
- Еще 2 раза жмем enter

![foto](https://i.ibb.co/XSdh3q7/commit.png)

Коммит готов, осталось только запушить.


# Пулл реквест

## Создание пулл реквеста

После того, как запушили коммит, создаем пулл реквест из вашей ветки в ***develop***.

В названии *Feature/* или *Bugfix/* с заглавной буквы, дальше название изменений в *kebab-case*.

В описании прикрепляем ссылку на issues. Дальше описываем подробнее, какие компоненты и функционал добавлены, изменены или удалены, в каких файлах. Ниже вставляем фото компонента.

В *reviewers* можно тегнуть кого-то по желанию, либо оставить пустым.

В *assignees* отмечаете себя.

Дожидаемся результатов автотеста ( npm run build , lint )

![foto7](https://i.ibb.co/zx5Lq56/23ot-6.png)

Если тесты пройдены дожидаемся ревью если нет то исправляем 

После согласования пулл реквеста (2 аппрува) мержите ветку в develop. Если ветка была для разового функционала (например для конкретного бага, который пофиксили), удаляете ее.


## Проверка пулл реквеста

Когда начинаете проверять пулл реквест, добавляете себя в *reviewers*.

Если вы работаете в VS Code, установите себе расширение **[GitHub Pull Requests and Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)**. С ним удобно просматривать изменения и оставлять комментарии.

Проверяем по следующим пунктам:

- соответствие стандартам кодирования на проекте (правильные названия папок и файлов, синтаксис, использование библиотек и препроцессора)
- соответствие макету (pixel perfect), размер и расположение элементов, цвета, поведение
- **главное** - грамотное написание кода (использование компонентов и их методов, реализация функционала, сохранение данных). Если знаете, как сделать лучше - обязательно делитель в комментариях к коду!)

Когда все комментарии исправлены, подтверждаете пулл реквест.

![foto](https://i.ibb.co/Mp7Tvdn/Untitled.png)
