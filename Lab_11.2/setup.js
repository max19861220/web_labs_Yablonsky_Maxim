import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const files = {
  'index.html': `<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Creative Agency</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
  <link rel="stylesheet" href="css/style.css" />
</head>
<body>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo">Creative<span>Agency</span></div>
        <nav class="header__nav">
          <a href="#hero">Головна</a>
          <a href="#services">Послуги</a>
          <a href="#features">Переваги</a>
          <a href="#footer">Контакти</a>
        </nav>
      </div>
    </div>
  </header>

  <section class="hero" id="hero">
    <div class="container">
      <div class="hero__content">
        <h1 class="hero__title">Ми створюємо <br /><span>креативні рішення</span></h1>
        <p class="hero__text">Допомагаємо брендам виділятися та досягати нових вершин</p>
        <a href="#services" class="btn btn--primary">Дізнатися більше</a>
      </div>
    </div>
  </section>

  <section class="services" id="services">
    <div class="container">
      <h2 class="section-title">Наші послуги</h2>
      <div class="services__grid">
        <div class="service-card">
          <i class="fas fa-code service-card__icon"></i>
          <h3>Розробка ПЗ</h3>
          <p>Створюємо якісне програмне забезпечення під ваші задачі</p>
        </div>
        <div class="service-card">
          <i class="fas fa-chart-line service-card__icon"></i>
          <h3>Аналіз даних</h3>
          <p>Допомагаємо приймати правильні рішення на основі даних</p>
        </div>
        <div class="service-card">
          <i class="fas fa-cloud service-card__icon"></i>
          <h3>Хмарні рішення</h3>
          <p>Масштабовані та надійні хмарні сервіси для бізнесу</p>
        </div>
      </div>
    </div>
  </section>

  <section class="features" id="features">
    <div class="container">
      <h2 class="section-title">Чому обирають нас</h2>
      <div class="features__list">
        <div class="feature-item">
          <i class="fas fa-rocket feature-item__icon"></i>
          <div>
            <h4>Швидкість</h4>
            <p>Працюємо ефективно та вчасно здаємо проекти</p>
          </div>
        </div>
        <div class="feature-item">
          <i class="fas fa-users feature-item__icon"></i>
          <div>
            <h4>Команда</h4>
            <p>Професіонали з багаторічним досвідом у своїй сфері</p>
          </div>
        </div>
        <div class="feature-item">
          <i class="fas fa-heart feature-item__icon"></i>
          <div>
            <h4>Клієнтоорієнтованість</h4>
            <p>Завжди на зв'язку та враховуємо всі побажання</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer" id="footer">
    <div class="container">
      <div class="footer__inner">
        <div class="footer__info">
          <h3>Creative Agency</h3>
          <p>Ми допомагаємо брендам рости</p>
        </div>
        <div class="footer__social">
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-linkedin"></i></a>
        </div>
        <div class="footer__copy">
          <p>© 2025 Creative Agency. Всі права захищено</p>
        </div>
      </div>
    </div>
  </footer>
</body>
</html>`,

  'scss/main.scss': `@import 'variables';
@import 'mixins';
@import 'global';
@import 'header';
@import 'hero';
@import 'services';
@import 'features';
@import 'footer';`,

  'scss/variables.scss': `// Кольори
$primary: #6C63FF;
$primary-dark: #5A52D5;
$secondary: #FF6584;
$dark: #1A1A2E;
$gray: #6B7280;
$light: #F3F4F6;
$white: #FFFFFF;

// Шрифти
$font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
$font-size-base: 16px;

// Відступи
$spacing-xs: 4px;
$spacing-sm: 8px;
$spacing-md: 16px;
$spacing-lg: 32px;
$spacing-xl: 64px;

// Брейкпоїнти
$breakpoint-mobile: 480px;
$breakpoint-tablet: 768px;
$breakpoint-desktop: 1024px;

// Тіні
$shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.06);
$shadow-md: 0 4px 16px rgba(0, 0, 0, 0.10);
$shadow-lg: 0 8px 32px rgba(0, 0, 0, 0.15);`,

  'scss/mixins.scss': `// Міксін для адаптивного шрифта
@mixin responsive-font($min-size, $max-size) {
  font-size: $min-size;
  @media (min-width: 768px) {
    font-size: calc(#{$min-size} + (#{$max-size} - #{$min-size}) * ((100vw - 768px) / (1200 - 768)));
  }
  @media (min-width: 1200px) {
    font-size: $max-size;
  }
}

// Міксін для кнопок
@mixin button($bg, $color: white) {
  display: inline-block;
  padding: 14px 32px;
  background: $bg;
  color: $color;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  &:hover {
    background: darken($bg, 10%);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba($bg, 0.3);
  }
}

// Міксін для медіа-запитів
@mixin mobile {
  @media (max-width: #{$breakpoint-mobile}) { @content; }
}
@mixin tablet {
  @media (max-width: #{$breakpoint-tablet}) { @content; }
}
@mixin desktop {
  @media (min-width: #{$breakpoint-desktop}) { @content; }
}

// Міксін для тіней
@mixin shadow($level: 'sm') {
  @if $level == 'sm' { box-shadow: $shadow-sm; }
  @else if $level == 'md' { box-shadow: $shadow-md; }
  @else if $level == 'lg' { box-shadow: $shadow-lg; }
}`,

  'scss/global.scss': `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: $font-family;
  font-size: $font-size-base;
  color: $dark;
  line-height: 1.6;
  background: $white;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 $spacing-lg;
}

.section-title {
  text-align: center;
  @include responsive-font(24px, 40px);
  font-weight: 700;
  color: $dark;
  margin-bottom: $spacing-xl;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: $primary;
    margin: $spacing-md auto 0;
    border-radius: 2px;
  }
}

.btn {
  @include button($primary);
}

.btn--secondary {
  @include button($secondary);
}`,

  'scss/header.scss': `.header {
  padding: $spacing-md 0;
  background: $white;
  box-shadow: $shadow-sm;
  position: sticky;
  top: 0;
  z-index: 100;

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    font-size: 24px;
    font-weight: 700;
    color: $dark;

    span { color: $primary; }
  }

  &__nav {
    display: flex;
    gap: $spacing-lg;

    a {
      color: $gray;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s;

      &:hover { color: $primary; }
    }

    @include tablet {
      display: none;
    }
  }
}`,

  'scss/hero.scss': `.hero {
  padding: $spacing-xl 0;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8f0 100%);
  min-height: 80vh;
  display: flex;
  align-items: center;

  &__content {
    max-width: 600px;
  }

  &__title {
    @include responsive-font(32px, 56px);
    font-weight: 700;
    color: $dark;
    margin-bottom: $spacing-md;

    span { color: $primary; }
  }

  &__text {
    @include responsive-font(16px, 20px);
    color: $gray;
    margin-bottom: $spacing-lg;
  }

  @include tablet {
    text-align: center;
    &__content { max-width: 100%; }
  }
}`,

  'scss/services.scss': `.services {
  padding: $spacing-xl 0;
  background: $white;

  &__grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: $spacing-lg;

    @include tablet {
      grid-template-columns: 1fr;
    }
  }
}

.service-card {
  background: $white;
  padding: $spacing-lg;
  border-radius: 12px;
  text-align: center;
  @include shadow('md');
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    @include shadow('lg');
  }

  &__icon {
    font-size: 48px;
    color: $primary;
    margin-bottom: $spacing-md;
  }

  h3 {
    font-size: 20px;
    margin-bottom: $spacing-sm;
  }

  p {
    color: $gray;
  }
}`,

  'scss/features.scss': `.features {
  padding: $spacing-xl 0;
  background: $light;

  &__list {
    display: flex;
    flex-direction: column;
    gap: $spacing-md;
    max-width: 700px;
    margin: 0 auto;
  }
}

.feature-item {
  display: flex;
  align-items: center;
  gap: $spacing-md;
  padding: $spacing-md;
  background: $white;
  border-radius: 8px;
  @include shadow('sm');
  transition: transform 0.3s ease;

  &:hover { transform: translateX(8px); }

  &__icon {
    font-size: 32px;
    color: $primary;
    flex-shrink: 0;
  }

  h4 { font-size: 18px; }
  p { color: $gray; }
}`,

  'scss/footer.scss': `.footer {
  background: $dark;
  color: $white;
  padding: $spacing-lg 0;

  &__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $spacing-md;
    text-align: center;
  }

  &__social {
    display: flex;
    gap: $spacing-md;

    a {
      color: $white;
      font-size: 24px;
      transition: color 0.3s;

      &:hover { color: $primary; }
    }
  }

  &__copy {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
  }
}`
};

Object.keys(files).forEach(filepath => {
  const dir = path.dirname(filepath);
  if (dir !== '.') {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  }
  fs.writeFileSync(filepath, files[filepath]);
  console.log(`✅ Створено: ${filepath}`);
});

console.log('\n🎉 Лендінг з SCSS створено!');
console.log('Для компіляції SCSS у CSS:');
console.log('1. Встановіть Sass: npm install -g sass');
console.log('2. Виконайте: sass scss/main.scss css/style.css --watch');
console.log('3. Відкрийте index.html у браузері');