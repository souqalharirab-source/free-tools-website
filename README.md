# أدوات برو - Adawat Pro

موقع متخصص في تقديم أدوات مجانية وتطبيقات مفيدة للمستخدمين العرب مع دمج إعلانات ذكية من **Adsterra**.

## 🎯 الميزات الرئيسية

- ✅ **أدوات مجانية 100%** - جميع الأدوات والتطبيقات مجانية تماماً
- ✅ **محتوى عربي** - محتوى مخصص للمستخدمين العرب باللغة العربية
- ✅ **آمن وموثوق** - محتوى آمن وخالي من البرامج الضارة
- ✅ **إعلانات ذكية** - دمج احترافي لإعلانات Adsterra
- ✅ **تصميم حديث** - واجهة جميلة وسهلة الاستخدام
- ✅ **متجاوب** - يعمل بشكل مثالي على جميع الأجهزة

## 📋 الأقسام الرئيسية

### 1. تحميل التطبيقات 📱
- تطبيقات أندرويد وآيفون
- روابط مباشرة وآمنة
- تطبيقات معدلة وأصلية

### 2. الأدوات أونلاين 🛠️
- تحويل الصور والصوت
- معالجة الملفات
- أدوات مفيدة أخرى

### 3. الموارد والروابط 🔗
- مواقع تعليمية
- منصات برمجة
- خدمات مجانية

### 4. المقالات التقنية 📚
- نصائح رقمية
- شروحات تقنية
- دروس مفيدة

## 🚀 البدء السريع

### المتطلبات
- Node.js 14.0.0 أو أحدث
- npm أو yarn

### التثبيت

```bash
# استنساخ المشروع
git clone <repository-url>
cd adawat-pro

# تثبيت المكتبات
npm install

# إنشاء ملف .env
cp .env.example .env
```

### التكوين

قم بتحديث ملف `.env` بمعلومات Adsterra الخاصة بك:

```env
# Adsterra Configuration
ADSTERRA_POPUNDER_CODE=YOUR_CODE_HERE
ADSTERRA_NOTIFICATION_CODE=YOUR_CODE_HERE
ADSTERRA_BANNER_CODE=YOUR_CODE_HERE
```

### التشغيل

```bash
# تشغيل الخادم
npm start

# أو للتطوير مع auto-reload
npm run dev
```

ثم افتح المتصفح وانتقل إلى: `http://localhost:3000`

## 📁 هيكل المشروع

```
adawat-pro/
├── server.js                 # ملف الخادم الرئيسي
├── package.json             # المكتبات والمعلومات
├── .env                     # متغيرات البيئة
├── README.md                # هذا الملف
├── views/                   # قوالب EJS
│   ├── index.ejs           # الصفحة الرئيسية
│   ├── apps.ejs            # صفحة التطبيقات
│   ├── tools.ejs           # صفحة الأدوات
│   ├── resources.ejs       # صفحة الموارد
│   ├── blog.ejs            # صفحة المقالات
│   ├── about.ejs           # صفحة عن الموقع
│   ├── 404.ejs             # صفحة الخطأ 404
│   ├── 500.ejs             # صفحة الخطأ 500
│   └── partials/           # القوالب المشتركة
│       ├── header.ejs      # رأس الصفحة
│       └── footer.ejs      # تذييل الصفحة
└── public/                  # الملفات الثابتة
    ├── css/
    │   └── style.css       # أنماط CSS
    ├── js/
    │   ├── main.js         # JavaScript الرئيسي
    │   └── adsterra.js     # سكريبت Adsterra
    └── images/             # الصور
```

## 🔧 التكوين المتقدم

### إضافة إعلانات Adsterra

#### الطريقة 1: استخدام الكود المباشر

قم بتحديث ملف `public/js/adsterra.js` بأكوادك الفعلية من Adsterra:

```javascript
const ADSTERRA_CONFIG = {
  popunderCode: 'YOUR_ACTUAL_CODE',
  notificationCode: '<script type='text/javascript' src='//pl27877346.effectivegatecpm.com/ba/ba/4a/baba4a29215fc542544bef4c4c7f1674.js'></script>',
  bannerCode: 'YOUR_ACTUAL_CODE'
};
```

#### الطريقة 2: استخدام متغيرات البيئة

```env
ADSTERRA_POPUNDER_CODE=YOUR_CODE
ADSTERRA_NOTIFICATION_CODE=YOUR_CODE
ADSTERRA_BANNER_CODE=YOUR_CODE
```

### إضافة Google Analytics

```env
GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX-X
```

## 📧 نموذج الاتصال

لتفعيل نموذج الاتصال، قم بتحديث متغيرات البريد الإلكتروني:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-password
CONTACT_EMAIL=support@adawat-pro.com
```

## 🌐 النشر

### نشر على Heroku

```bash
# تثبيت Heroku CLI
npm install -g heroku

# تسجيل الدخول
heroku login

# إنشاء تطبيق
heroku create adawat-pro

# نشر التطبيق
git push heroku main
```

### نشر على Vercel

```bash
# تثبيت Vercel CLI
npm install -g vercel

# نشر التطبيق
vercel
```

## 📊 إحصائيات Adsterra

تتبع أرباحك من Adsterra من خلال:
1. لوحة تحكم Adsterra: https://www.adsterra.com
2. تحليل الزيارات والنقرات
3. حساب الأرباح والدفعات

## 🔐 الأمان

- ✅ التحقق من جميع الروابط والتطبيقات
- ✅ عدم استضافة ملفات مقرصنة
- ✅ حماية بيانات المستخدمين
- ✅ استخدام HTTPS في الإنتاج

## 📝 السياسات

### سياسة الخصوصية
- لا نجمع بيانات شخصية دون موافقة
- الإعلانات من Adsterra قد تجمع بيانات للتخصيص

### شروط الاستخدام
- جميع المحتويات للاستخدام الشخصي فقط
- عدم إعادة بيع أو توزيع المحتوى

## 🤝 المساهمة

نرحب بالمساهمات! يمكنك:
- الإبلاغ عن الأخطاء
- اقتراح ميزات جديدة
- تحسين الكود
- ترجمة المحتوى

## 📞 التواصل

- 📧 البريد الإلكتروني: support@adawat-pro.com
- 🌐 الموقع: https://adawat-pro.com
- 📱 وسائل التواصل: [أضف روابط وسائل التواصل]

## 📄 الترخيص

هذا المشروع مرخص تحت رخصة MIT. انظر ملف LICENSE للمزيد من التفاصيل.

## 🙏 شكر وتقدير

شكراً لاستخدامك أدوات برو! نتمنى أن تستفيد من الموقع.

---

**تم التطوير بـ ❤️ لخدمة المستخدمين العرب**

