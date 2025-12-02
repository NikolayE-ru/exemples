import { FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './SassExample.style.scss';

const SassExample: FC = () => {
    return (
        <div className='example-container'>
            <div className='example-header'>
                <h2>Sass/SCSS - Препроцессор CSS</h2>
                <p>
                    Sass (Syntactically Awesome Style Sheets) - это препроцессор CSS, который расширяет возможности
                    стандартного CSS, добавляя переменные, вложенности, миксины и функции.
                </p>
                <p>
                    Простыми словами: Это как CSS на стероидах, который делает написание стилей более удобным и мощным.
                </p>
            </div>

            <div className='example-content'>
                <div className='comparison-table'>
                    <h3>Сравнение синтаксиса Sass и SCSS</h3>
                    <p>
                        Sass изначально поддерживал два синтаксиса: оригинальный (с отступами, без точек с запятой и фигурных скобок) 
                        и новый SCSS (Sassy CSS), который является надмножеством стандартного CSS.
                    </p>
                    <p>
                        <strong>Sass (синтаксис с отступами):</strong> Более лаконичный и быстрый для написания. 
                        Использует отступы и переносы строк для определения структуры кода. Файлы имеют расширение .sass.
                    </p>
                    <p className='last-paragraph'>
                        <strong>SCSS (Sassy CSS):</strong> Более привычный и плавный для перехода с обычного CSS. 
                        Использует фигурные скобки и точки с запятой, как в стандартном CSS. Любой валидный CSS-код 
                        является валидным SCSS-кодом. Файлы имеют расширение .scss. На сегодняшний день это основной и рекомендуемый синтаксис.
                    </p>
                    <table>
                        <thead>
                            <tr>
                                <th>Sass (отступы)</th>
                                <th>SCSS (фигурные скобки)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <SyntaxHighlighter language="scss" style={coy} className="code-highlighter">
{`$primary-color: #333
.container
  color: $primary-color
  .button
    background: lighten($primary-color, 20%)`}
                                    </SyntaxHighlighter>
                                </td>
                                <td>
                                    <SyntaxHighlighter language="scss" style={coy} className="code-highlighter">
{`$primary-color: #333;
.container {
  color: $primary-color;
  .button {
    background: lighten($primary-color, 20%);
  }
}`}
                                    </SyntaxHighlighter>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='feature-section'>
                    <h3>Основной функционал Sass/SCSS</h3>

                    <div className='feature-block'>
                        <h4>Переменные</h4>
                        <p>
                            Переменные позволяют хранить повторяющиеся значения (например, цвета, шрифты, размеры) в одном месте. 
                            Это основа поддержания кодом в чистоте и его легкого обновления. Если вам нужно изменить основной цвет 
                            на всем сайте, достаточно обновить значение переменной один раз.
                        </p>
                        <p>
                            <strong>Как это работает:</strong> Вы объявляете переменную с помощью символа $, а затем используете 
                            её имя в любом месте вашей таблицы стилей.
                        </p>
                        <div className='code-block'>
                            <SyntaxHighlighter language="scss" style={coy} className="code-highlighter">
{`$primary-color: #3498db;
$font-size: 16px;
$border-radius: 4px;

.button {
  background-color: $primary-color;
  font-size: $font-size;
  border-radius: $border-radius;
}`}
                            </SyntaxHighlighter>
                        </div>
                    </div>

                    <div className='feature-block'>
                        <h4>Вложенности</h4>
                        <p>
                            Вложенности позволяют вам писать селекторы внутри других селекторов, что визуально повторяет структуру 
                            HTML и делает код более читабельным и логичным. Это избавляет от необходимости многократно повторять 
                            родительские селекторы.
                        </p>
                        <p>
                            <strong>Ключевой момент:</strong> Символ & (амперсанд) является мощным инструментом, который ссылается 
                            на родительский селектор. Он особенно полезен для псевдоклассов (как :hover в примере) или для создания 
                            составных имен классов по методологии БЭМ (например, &__element).
                        </p>
                        <div className='code-block'>
                            <SyntaxHighlighter language="scss" style={coy} className="code-highlighter">
{`.nav {
  background-color: #f8f8f8;

  ul {
    list-style: none;

    li {
      display: inline-block;

      a {
        color: #333;
        text-decoration: none;

        &:hover {
          color: #3498db;
        }
      }
    }
  }
}`}
                            </SyntaxHighlighter>
                        </div>
                    </div>

                </div>

                <div className='cli-section'>
                    <h3>Команды CLI</h3>
                    <p>
                        Sass предоставляет интерфейс командной строки (CLI) для компиляции ваших .scss или .sass файлов в стандартный .css. 
                        Это основной способ использования Sass в проекте без сложных сборок.
                    </p>
                    <p>
                        <strong>Основные сценарии использования:</strong>
                    </p>
                    <ul>
                        <li>Разовая компиляция: Преобразует SCSS/Sass-файл в CSS-файл один раз.</li>
                        <li>Автоматическое отслеживание (--watch): Sass постоянно "слушает" изменения в исходных файлах и 
                            автоматически перекомпилирует их при сохранении.</li>
                        <li>Стиль вывода (--style): Позволяет контролировать формат итогового CSS-файла. Например, 
                            compressed минифицирует код, удаляя все пробелы и комментарии, что идеально для продакшена.</li>
                    </ul>
                    <div className='code-block'>
                        <SyntaxHighlighter language="bash" style={coy} className="code-highlighter">
{`# Компиляция одного файла
sass input.scss output.css

# Автоматическая компиляция при изменениях
sass --watch scss:css

# Компиляция с минификацией
sass --style compressed style.scss style.min.css

# Проверка версии Sass
sass --version`}
                        </SyntaxHighlighter>
                    </div>
                </div>

                <div className='integration-section'>
                    <h3>Особенности установки в сборщик проектов Vite</h3>

                    <div className='feature-block'>
                        <div className='code-block'>
                            <SyntaxHighlighter language="bash" style={coy} className="code-highlighter">
{`# Vite имеет встроенную поддержку .scss файлов
# Просто установите sass
npm install -D sass

# Импортируйте .scss файлы
import './styles.scss';`}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SassExample;
