import { FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './AdvancedTechniquesExemple.style.scss';

const AdvancedTechniquesExemple: FC = () => {
    return (
        <div className='example-container'>
            <div className='example-header'>
                <h2>Продвинутые техники Sass/SCSS</h2>
                <p>
                    В этом разделе мы рассмотрим более сложные и мощные возможности Sass/SCSS,
                    которые помогут создавать более поддерживаемый и масштабируемый код.
                </p>
            </div>

            <div className='example-content'>
                <div className='feature-section'>
                    <h3>Миксины (@mixin, @include)</h3>
                    <p>
                        Миксины — это мощный инструмент для создания переиспользуемых блоков стилей. Они работают как функции в программировании: 
                        вы определяете шаблон с параметрами, а затем "включаете" его в нужных местах с разными значениями.
                    </p>
                    <p>
                        <strong>Ключевые понятия:</strong>
                    </p>
                    <ul>
                        <li>@mixin — объявляет миксин с параметрами</li>
                        <li>@include — подключает миксин в нужном месте</li>
                        <li>Параметры позволяют передавать значения для кастомизации</li>
                        <li>Функции типа darken() встроены в Sass и позволяют динамически изменять цвета</li>
                    </ul>
                    <p>
                        <strong>Преимущества:</strong> Устраняют дублирование кода, делают стили гибкими и легко изменяемыми.
                    </p>

                    <div className='feature-block'>
                        <div className='code-block'>
                            <SyntaxHighlighter language="scss" style={coy} className="code-highlighter">
{`@mixin button-style($bg-color, $text-color) {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  background-color: $bg-color;
  color: $text-color;
  cursor: pointer;

  &:hover {
    background-color: darken($bg-color, 10%);
  }
}

.button-primary {
  @include button-style(#3498db, white);
}

.button-secondary {
  @include button-style(#95a5a6, white);
}`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>

                <div className='feature-section'>
                    <h3>Модули (@use, @forward)</h3>
                    <p>
                        Модульная система Sass помогает организовать код в логические части и управлять зависимостями. 
                        Это современная замена устаревшим директивам @import.
                    </p>

                        <strong>Ключевые директивы:</strong>

                    <ul>
                        <li>@use — загружает миксины, функции и переменные из других файлов</li>
                        <li>@forward — перенаправляет содержимое одного модуля в другой</li>
                        <li>Префиксы (as v) позволяют создавать пространства имен для избежания конфликтов</li>
                        <li>Файлы с подчеркиванием (_filename.scss) считаются частичными и не компилируются в отдельные CSS-файлы</li>
                    </ul>
                    <p>
                        <strong>Преимущества:</strong> Изолирует стили, предотвращает конфликты имен, ускоряет компиляцию.
                    </p>

                    <div className='feature-block'>
                        <p><strong>@use</strong> — когда вы хотите импортировать переменные, миксины или функции для использования в текущем файле</p>
                        <div className='code-block'>
                            <SyntaxHighlighter language="scss" style={coy} className="code-highlighter">
{`// _variables.scss
$primary-color: #3498db;
$secondary-color: #2ecc71;

// styles.scss
@use 'variables' as v;

.header {
  background-color: v.$primary-color;
}

.footer {
  background-color: v.$secondary-color;
}`}
                            </SyntaxHighlighter>
                        </div>

                        <p><strong>@forward</strong> — когда вы создаете библиотеку и хотите сделать содержимое другого модуля доступным для пользователей вашей библиотеки</p>
                        <div className='code-block'>
                            <SyntaxHighlighter language="scss" style={coy} className="code-highlighter">
{`// _buttons.scss
@mixin button-style($bg-color) {
  padding: 10px 15px;
  background-color: $bg-color;
  border: none;
  border-radius: 4px;
}

// _forms.scss
@mixin input-style {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

// _ui-library.scss (библиотека компонентов)
@forward 'buttons';
@forward 'forms';

// main.scss (использование библиотеки)
@use 'ui-library' as ui;

.my-button {
  @include ui.button-style(#3498db);
}

.my-input {
  @include ui.input-style;
}`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>

                <div className='feature-section'>
                    <h3>Наследование (@extend)</h3>
                    <p>
                        Наследование позволяет селекторам наследовать стили от других селекторов. Это эффективный способ разделения 
                        общих свойств между несколькими элементами.
                    </p>
                    <p>
                        <strong>Как это работает:</strong>
                    </p>
                    <ul>
                        <li>@extend копирует стили из одного селектора в другой</li>
                        <li>Базовый класс содержит общие свойства</li>
                        <li>Производные классы наследуют общие свойства и добавляют специфичные</li>
                        <li>Результат компиляции — группировка селекторов в CSS для минимизации кода</li>
                    </ul>
                    <p>
                        <strong>Отличие от миксинов:</strong> @extend группирует селекторы, а миксины дублируют свойства. 
                        Выбор зависит от ситуации.
                    </p>

                    <div className='feature-block'>
                        <div className='code-block'>
                            <SyntaxHighlighter language="scss" style={coy} className="code-highlighter">
{`.button {
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.button-primary {
  @extend .button;
  background-color: #3498db;
  color: white;
}

.button-secondary {
  @extend .button;
  background-color: #95a5a6;
  color: white;
}`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>

                
                <div className='feature-section'>
                    <h3>Карты (Maps)</h3>
                    <p>
                        Карты (Maps) — это структуры данных "ключ-значение", похожие на объекты в JavaScript или словари в Python. 
                        Они идеально подходят для организации связанных значений.
                    </p>
                    <p>
                        <strong>Возможности карт:</strong>
                    </p>
                    <ul>
                        <li>Хранение связанных значений (цвета темы, размеры, breakpoints)</li>
                        <li>Функция map-get() извлекает значения по ключу</li>
                        <li>Итерация @each позволяет генерировать классы динамически</li>
                        <li>Интерполяция #{'$name'}  вставляет значения переменных в имена селекторов</li>
                    </ul>
                    <p>
                        <strong>Преимущества:</strong> Централизованное управление значениями, генерация систематизированных стилей, 
                        поддержание consistency в дизайне.
                    </p>

                    <table className="maps-functions-table">
                        <thead>
                            <tr>
                                <th>Функция</th>
                                <th>Описание</th>
                                <th>Пример</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>map-get($map, $key)</td>
                                <td>Получить значение по ключу</td>
                                <td>map-get($colors, 'primary')</td>
                            </tr>
                            <tr>
                                <td>map-has-key($map, $key)</td>
                                <td>Проверить наличие ключа</td>
                                <td>map-has-key($colors, 'primary')</td>
                            </tr>
                            <tr>
                                <td>map-merge($map1, $map2)</td>
                                <td>Объединить две карты</td>
                                <td>map-merge($map1, $map2)</td>
                            </tr>
                            <tr>
                                <td>map-remove($map, $keys...)</td>
                                <td>Удалить ключи</td>
                                <td>map-remove($colors, 'danger')</td>
                            </tr>
                            <tr>
                                <td>map-keys($map)</td>
                                <td>Получить все ключи</td>
                                <td>map-keys($colors)</td>
                            </tr>
                            <tr>
                                <td>map-values($map)</td>
                                <td>Получить все значения</td>
                                <td>map-values($colors)</td>
                            </tr>
                            <tr>
                                <td>map-length($map)</td>
                                <td>Получить количество пар</td>
                                <td>map-length($colors)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='feature-block'>
                    <h4>Пример использования карт</h4>
                    <div className='code-block'>
                            <SyntaxHighlighter language="scss" style={coy} className="code-highlighter">
{`// Создание карты
$colors: (
  'primary': blue,
  'secondary': green,
  'danger': red,
  'warning': yellow
);

// Использование карты
.alert {
  padding: 15px;
  border-radius: 4px;

  &-primary {
    background-color: map-get($colors, 'primary');
    color: white;
  }

  &-secondary {
    background-color: map-get($colors, 'secondary');
    color: white;
  }
}

// Итерация по карте
@each $name, $color in $colors {
  .btn-#{$name} {
    background-color: $color;
    color: white;
  }
}`}
                            </SyntaxHighlighter>
                        </div>
                    </div>

                <div className='feature-block'>
                    <h4>Создание утилиты в SCSS</h4>
                    <div className='code-block'>
                        <SyntaxHighlighter language="scss" style={coy} className="code-highlighter">
{`@function shadow($level: 1) {
  $shadows: (
    1: 0 1px 3px rgba(0,0,0,0.12),
    2: 0 3px 6px rgba(0,0,0,0.16),
    3: 0 10px 20px rgba(0,0,0,0.19),
    4: 0 14px 28px rgba(0,0,0,0.25)
  ); 

  @return map-get($shadows, $level);
}

.card {
  box-shadow: shadow(2);

  &.elevated {
    box-shadow: shadow(4);
  }
}`}
                        </SyntaxHighlighter>
                    </div>
                </div>

                <div className='feature-section'>
                    <h3>Функции и математические операции</h3>

                    <div className='feature-block'>
                        <h4 className='feature-title'><u>Математические операции</u></h4>
                        <p>
                            Sass поддерживает все основные арифметические операции: сложение (+), вычитание (-), умножение (*), деление (/) и взятие остатка (%).
                        </p>
                        <p>
                            <strong>Особенности работы:</strong>
                        </p>
                        <ul>
                            <li>Единицы измерения должны быть совместимыми для сложения и вычитания</li>
                            <li>Деление требует соблюдения условий (переменные, скобки или другие операции), так как символ / используется в CSS для других целей</li>
                            <li>Автоматическая конвертация единиц, где это возможно (например, 10px + 2em вызовет ошибку)</li>
                        </ul>
                        <p>
                            <strong>Практическое применение:</strong> Расчеты сеток, адаптивных размеров, пропорциональных отступов.
                        </p>

                        <h4 className='feature-title'><u>Встроенные функции</u></h4>
                        <p>
                            Sass предоставляет обширную библиотеку встроенных функций для работы с различными типами данных:
                        </p>
                        <p>
                            <strong>Цветовые функции:</strong>
                        </p>
                        <ul> 
                            <li><code className='codeBcgColor'>lighten()</code>, <code className='codeBcgColor'>darken()</code> - осветление/затемнение цвета</li>
                            <li><code className='codeBcgColor'>saturate()</code>, <code className='codeBcgColor'>desaturate()</code> - управление насыщенностью</li>
                            <li><code className='codeBcgColor'>opacify()</code>, <code className='codeBcgColor'>transparentize()</code> - работа с прозрачностью</li>
                            <li><code className='codeBcgColor'>mix()</code> - смешивание цветов</li>
                        </ul>
                        <p>
                            <strong>Строковые и числовые функции:</strong>
                        </p>
                        <ul>
                            <li><code className='codeBcgColor'>percentage()</code>, <code className='codeBcgColor'>round()</code>, <code className='codeBcgColor'>ceil()</code>, <code className='codeBcgColor'>floor()</code>  - преобразование чисел</li>
                            <li><code className='codeBcgColor'>str-length()</code>, <code className='codeBcgColor'>to-upper-case()</code> - работа со строками</li>
                            <li><code className='codeBcgColor'>min()</code>, <code className='codeBcgColor'>max()</code>  - нахождение минимального/максимального значения</li>
                        </ul>
                        <p>
                            <strong>Преимущества:</strong> Единообразие цветовой схемы, динамические вычисления, соблюдение дизайн-систем.
                        </p>

                        <h4 className='feature-title'><u>Пользовательские функции</u></h4>
                        <p>
                            Sass позволяет создавать собственные функции с помощью директивы @function, что особенно полезно для:
                        </p>
                        <p>
                            <strong>Типичные сценарии использования:</strong>
                        </p>
                        <ul>
                            <li>Конвертация единиц измерения (px в rem/em)</li>
                            <li>Сложные математические расчеты для сеток и layouts</li>
                            <li>Повторяющиеся преобразования цветов или размеров</li>
                            <li>Создание утилитарных функций для конкретного проекта</li>
                        </ul>
                        <p>
                            <strong>Синтаксис:</strong> Функция принимает параметры, выполняет вычисления и возвращает результат с помощью @return. 
                            Пользовательские функции работают так же, как встроенные, и могут использоваться в любом месте значений свойств.
                        </p>
                        <p>
                            <strong>Пример из кода:</strong> Функция calculate-rem() автоматически конвертирует пиксели в rem, используя базовый размер шрифта 16px, 
                            что упрощает создание адаптивной типографики.
                        </p>
                    </div>

                    <div className='feature-block'>
                        <div className='code-block'>
                            <SyntaxHighlighter language="scss" style={coy} className="code-highlighter">
{`// Математические операции
.container {
  width: 100% - 20px;
  height: 500px / 2;
  margin: 10px * 2;
}

// Встроенные функции
.box {
  color: lighten(#333, 20%);
  background: darken(#fff, 10%);
  border-color: saturate(#ccc, 20%);
}

// Пользовательские функции
@function calculate-rem($size) {
  $rem-size: $size / 16px;
  @return #{$rem-size}rem;
}

.title {
  font-size: calculate-rem(24px);
}`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvancedTechniquesExemple;