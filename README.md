# Sportify - Фитнес Приложение

## 🎯 Преглед на проекта
Sportify е модерно фитнес приложение, създадено с React, TypeScript и Tailwind CSS. Това е вашият персонален фитнес партньор, който ви помага да постигнете вашите фитнес цели.

## ✨ Функционалности
- 📊 Проследяване на тренировки
- 📚 Библиотека с упражнения
- 📅 Планиране на графици
- 🔢 Калкулатор за калории
- 📱 Отзивчив дизайн
- 🌙 Тъмна/светла тема

## 🛠 Технологичен стек
- React 18
- TypeScript
- Tailwind CSS
- React Router
- Framer Motion
- EmailJS
- React Helmet Async (SEO)

## 🚀 Стартиране на проекта

### Предварителни изисквания
- Node.js (версия 16 или по-нова)
- npm или yarn

### Инсталация
1. Клонирайте репозиторито:
```bash
git clone https://github.com/yourusername/sportify.git
cd sportify
```

2. Инсталирайте зависимостите:
```bash
npm install
# или
yarn install
```

3. Създайте `.env` файл в основната директория:
```env
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
```

4. Стартирайте development сървъра:
```bash
npm run dev
# или
yarn dev
```

## 🌐 SEO Оптимизация
Приложението е оптимизирано за търсене в интернет с:
- Мета тагове за SEO
- Open Graph тагове за социални мрежи
- Канонични URL адреси
- Оптимизирани заглавия и описания
- Поддръжка на мобилни устройства
- Бърза зареждане на страниците

## 🚀 Публикуване
1. Създайте production build:
```bash
npm run build
# или
yarn build
```

2. Тествайте production build локално:
```bash
npm run preview
# или
yarn preview
```

3. Публикувайте на вашия хостинг:
- Vercel (препоръчително)
- Netlify
- GitHub Pages
- Firebase Hosting

### Публикуване на Vercel
1. Инсталирайте Vercel CLI:
```bash
npm install -g vercel
```

2. Влезте в акаунта си:
```bash
vercel login
```

3. Публикувайте:
```bash
vercel
```

## 📁 Структура на проекта
```
src/
├── components/     # Преизползваеми компоненти
├── pages/         # Страници на приложението
├── hooks/         # Custom React hooks
├── services/      # API и други услуги
├── types/         # TypeScript типове
├── utils/         # Помощни функции
└── assets/        # Статични ресурси
```

## 🤝 Принос
Приветстваме приносите! Моля, следвайте тези стъпки:
1. Fork-нете репозиторито
2. Създайте feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit-нете промените (`git commit -m 'Add some AmazingFeature'`)
4. Push-нете към branch-а (`git push origin feature/AmazingFeature`)
5. Отворете Pull Request

## 📄 Лиценз
Този проект е лицензиран под MIT лиценза - вижте [LICENSE](LICENSE) файла за детайли.

## 🙏 Благодарности
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [EmailJS](https://www.emailjs.com/)
- [React Router](https://reactrouter.com/)
- [React Helmet Async](https://github.com/staylor/react-helmet-async)

## 🔍 SEO Ръководство
За постигане на най-добри резултати в търсене:
1. Регулярно обновявайте съдържанието
2. Използвайте релевантни ключови думи
3. Оптимизирайте изображенията
4. Поддържайте бърза скорост на зареждане
5. Създавайте качествено съдържание
6. Използвайте правилна HTML структура
7. Добавете sitemap.xml
8. Регистрирайте сайта в Google Search Console

## Локална разработка

1. Клонирайте репозитория:
```bash
git clone https://github.com/your-username/sportify.git
cd sportify
```

2. Инсталирайте зависимостите:
```bash
npm install
```

3. Създайте .env файл:
```bash
cp .env.example .env
```
Редактирайте .env файла с вашите стойности.

4. Стартирайте development сървъра:
```bash
npm run dev
```

## Деплой в Cloudflare Pages

1. Създайте нов проект в Cloudflare Pages
2. Свържете с вашия Git репозиторий
3. Конфигурирайте следните настройки:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Node version: 18 (или по-нова)
4. Добавете environment променливите от .env файла
5. Натиснете "Save and Deploy"

## Build скриптове

- `npm run dev` - Стартира development сървър
- `npm run build` - Създава production build
- `npm run preview` - Преглед на production build
- `npm run lint` - Проверка на кода

## Технологии

- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Router
- Framer Motion
- Headless UI