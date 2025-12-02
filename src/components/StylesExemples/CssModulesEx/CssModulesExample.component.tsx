import { FC } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './CssModulesExample.style.scss';

const CssModulesExample: FC = () => {
    return (
        <div className='example-container'>
            <div className='example-header'>
                <h2>CSS-модули</h2>
                <p>
                    CSS-модули — это подход, где каждый CSS-файл превращается в локальную область видимости.
                    Все классы автоматически получают уникальные имена, что предотвращает конфликты стилей в больших приложениях.
                </p>
            </div>

            <div className='example-content'>
                <div className='feature-section'>
                    <h3>Генерация уникальных имён в Vite</h3>
                    <p>
                        Vite автоматически определяет CSS-модули по расширению .module.css/.module.scss и генерирует уникальные имена.
                    </p>
                    <p>
                        По умолчанию используется формат:
                    </p>
                    <div className='code-block'>
                        <SyntaxHighlighter language="text" style={coy} className="code-highlighter">
{`[имя-файла]__[локальный-класс]__[хеш]`}
                        </SyntaxHighlighter>
                    </div>
                    <p>
                        Пример: Button.module.css → .Button_btn__abc123
                    </p>
                    <p>
                        Конфигурация в vite.config.ts (опционально):
                    </p>
                    <div className='code-block'>
                        <SyntaxHighlighter language="typescript" style={coy} className="code-highlighter">
{`// vite.config.ts
export default {
  css: {
    modules: {
      // Изменяем формат генерации имён (опционально)
      localsConvention: 'camelCase', // или 'camelCaseOnly', 'dashes', 'dashesOnly'
      generateScopedName: '[name]__[local]___[hash:base64:5]',

      // Или функция для кастомной логики
      generateScopedName: (name, filename, css) => {
        // name - имя класса (например, "btn-primary")
        // filename - путь к файлу
        return \`app_\${name}_\${Date.now()}\`;
      },

      // Глобальные классы (опционально)
      globalModulePaths: [/styles/global.css/], // какие файлы всегда глобальные

      // Хеширование
      hashPrefix: 'prefix', // добавляет префикс к хешу
      scopeBehaviour: 'local', // 'local' | 'global'
    }
  }
}`}
                        </SyntaxHighlighter>
                    </div>
                    <div className='note'>
                        <strong>Важно:</strong> Даже без конфигурации CSS-модули работают из коробки!
                    </div>
                </div>

                <div className='feature-section'>
                    <h3>Импорт через объект styles</h3>
                    <div className='code-block'>
                        <SyntaxHighlighter language="typescript" style={coy} className="code-highlighter">
{`// Button.tsx
import styles from './Button.module.scss';
const Button = () => {
  // Доступ через объект (TypeScript понимает типы!)
  return (
    <button className={styles.btn}>
      Кнопка
    </button>
  );
};`}
                        </SyntaxHighlighter>
                    </div>
                    <p>
                        TypeScript поддержка (автодополнение):
                    </p>
                    <div className='code-block'>
                        <SyntaxHighlighter language="typescript" style={coy} className="code-highlighter">
{`// Button.module.scss.d.ts (генерируется автоматически или вручную)
declare const styles: {
  readonly "btn": string;
  readonly "btn--primary": string;
  readonly "icon": string;
};
export default styles;`}
                        </SyntaxHighlighter>
                    </div>
                </div>

                <div className='feature-section'>
                    <h3>Vite-specific особенности</h3>
                    <p>
                        1. Автоматическое определение CSS-модулей:
                    </p>
                    <div className='code-block'>
                        <SyntaxHighlighter language="text" style={coy} className="code-highlighter">
{`// Vite автоматически считает CSS-модулями:
// - *.module.css
// - *.module.scss
// - *.module.sass
// - *.module.less
// - *.module.styl`}
                        </SyntaxHighlighter>
                    </div>
                </div>

                <div className='feature-section'>
                    <h3>Про :global в CSS-модулях</h3>
                    <p>
                        Что происходит с <strong>:global</strong>:
                    </p>
                    <ul className='list'>
                        <li>Убирается хеширование — класс остается с оригинальным именем</li>
                        <li>Отключается изоляция — стили могут влиять на другие компоненты</li>
                        <li>Может быть переопределен — глобальные классы имеют обычную специфичность</li>
                    </ul>
                    <p>
                        Как это работает:
                    </p>
                    <div className='code-block'>
                        <SyntaxHighlighter language="scss" style={coy} className="code-highlighter">
{`/* Button.module.scss */
/* Локальный класс (получит хеш) */
.btn {
  color: blue;
  /* → .Button_btn__abc123 */
}

/* Глобальный класс (без хеша) */
:global(.global-btn) {
  color: red;
  /* → .global-btn (остается как есть!) */
}

/* Вложенный глобальный класс */
.container {
  /* Локальный родитель получит хеш */

  :global(.icon) {
    /* Но .icon останется глобальным */
    /* → .Button_container__xyz456 .icon */
  }
}`}
                        </SyntaxHighlighter>
                    </div>
                </div>

                <div className='feature-section'>
                    <h3>Сравнение подходов</h3>
                    <table className='comparison-table'>
                        <thead>
                            <tr>
                                <th>Особенность</th>
                                <th>Локальные классы</th>
                                <th>:global классы</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Имя после компиляции</td>
                                <td>Component_class__hash</td>
                                <td>class-name</td>
                            </tr>
                            <tr>
                                <td>Изоляция</td>
                                <td>✅ Полная</td>
                                <td>❌ Нет</td>
                            </tr>
                            <tr>
                                <td>Конфликты</td>
                                <td>❌ Невозможны</td>
                                <td>✅ Возможны</td>
                            </tr>
                            <tr>
                                <td>Переиспользование</td>
                                <td>Только через импорт</td>
                                <td>В любом месте</td>
                            </tr>
                            <tr>
                                <td>TypeScript типы</td>
                                <td>Автогенерация</td>
                                <td>Нет типов</td>
                            </tr>
                        </tbody>
                    </table>
                    <p>
                        Использование <strong>:global</strong>:
                    </p>
                    <p>
                        ТОЛЬКО когда нужно взаимодействовать с:
                    </p>
                    <ul className='list'>
                        <li>Внешними библиотеками</li>
                        <li>Глобальным состоянием (body.dark)</li>
                        <li>Общими анимациями/утилитами</li>
                        <li>HTML контентом извне</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CssModulesExample;