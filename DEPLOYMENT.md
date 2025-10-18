# دليل النشر والاستضافة

هذا الدليل يشرح كيفية نشر موقع أدوات برو على خوادم الاستضافة المختلفة.

## 🌐 خيارات الاستضافة

### 1. Heroku (الأسهل)
Heroku توفر استضافة مجانية وسهلة للتطبيقات Node.js

**المميزات:**
- مجاني للبدء
- سهل التثبيت
- دعم Node.js مدمج
- Auto-scaling

**الخطوات:**

1. **تثبيت Heroku CLI**
```bash
npm install -g heroku
```

2. **تسجيل الدخول**
```bash
heroku login
```

3. **إنشاء تطبيق**
```bash
heroku create adawat-pro
```

4. **إضافة متغيرات البيئة**
```bash
heroku config:set PORT=3000
heroku config:set NODE_ENV=production
heroku config:set ADSTERRA_POPUNDER_CODE=YOUR_CODE
heroku config:set ADSTERRA_NOTIFICATION_CODE=YOUR_CODE
heroku config:set ADSTERRA_BANNER_CODE=YOUR_CODE
```

5. **نشر التطبيق**
```bash
git push heroku main
```

6. **فتح الموقع**
```bash
heroku open
```

### 2. Vercel
منصة استضافة حديثة وسريعة

**المميزات:**
- سرعة عالية جداً
- CDN عالمي
- نشر تلقائي من Git
- مجاني للمشاريع الصغيرة

**الخطوات:**

1. **تثبيت Vercel CLI**
```bash
npm install -g vercel
```

2. **نشر التطبيق**
```bash
vercel
```

3. **اتبع الخطوات التفاعلية**

### 3. Railway
منصة استضافة حديثة وسهلة

**المميزات:**
- سهلة الاستخدام
- دعم Node.js
- نشر تلقائي
- مجاني للبدء

**الخطوات:**

1. **اذهب إلى Railway.app**
2. **اربط حسابك على GitHub**
3. **اختر المشروع**
4. **أضف متغيرات البيئة**
5. **النشر التلقائي**

### 4. DigitalOcean
استضافة سحابية قوية وموثوقة

**المميزات:**
- سعر معقول
- أداء عالي
- تحكم كامل
- دعم 24/7

**الخطوات:**

1. **إنشاء Droplet**
   - اختر Ubuntu 22.04
   - اختر الحد الأدنى من الموارد

2. **الاتصال بـ SSH**
```bash
ssh root@YOUR_SERVER_IP
```

3. **تثبيت Node.js**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

4. **نسخ المشروع**
```bash
git clone <your-repo-url>
cd adawat-pro
npm install
```

5. **إعداد PM2 (مدير العمليات)**
```bash
npm install -g pm2
pm2 start server.js --name "adawat-pro"
pm2 startup
pm2 save
```

6. **إعداد Nginx (خادم ويب عكسي)**
```bash
sudo apt-get install nginx
```

7. **إنشاء ملف إعدادات Nginx**
```bash
sudo nano /etc/nginx/sites-available/adawat-pro
```

أضف:
```nginx
server {
    listen 80;
    server_name adawat-pro.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

8. **تفعيل الموقع**
```bash
sudo ln -s /etc/nginx/sites-available/adawat-pro /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

9. **إعداد SSL (HTTPS)**
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d adawat-pro.com
```

### 5. AWS (Amazon Web Services)
خدمة سحابية قوية وموثوقة

**المميزات:**
- قوية جداً
- مرن جداً
- مجاني للسنة الأولى
- دعم عالمي

**الخطوات:**

1. **إنشاء حساب AWS**
2. **إنشاء EC2 Instance**
3. **اتبع نفس خطوات DigitalOcean**

## 🔐 إعدادات الأمان

### 1. متغيرات البيئة الآمنة
```bash
# لا تضع الأكواد السرية في الكود
# استخدم ملف .env
ADSTERRA_POPUNDER_CODE=xxx
ADSTERRA_NOTIFICATION_CODE=xxx
```

### 2. HTTPS إلزامي
```nginx
# إعادة توجيه HTTP إلى HTTPS
server {
    listen 80;
    server_name adawat-pro.com;
    return 301 https://$server_name$request_uri;
}
```

### 3. رؤوس الأمان
```nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
```

## 📊 المراقبة والسجلات

### 1. مراقبة الأداء
```bash
# مع PM2
pm2 monit
```

### 2. عرض السجلات
```bash
# مع PM2
pm2 logs adawat-pro
```

### 3. Google Analytics
- أضف Google Analytics ID
- راقب حركة المرور

## 🔄 النشر المستمر (CI/CD)

### مع GitHub Actions
```yaml
name: Deploy to Heroku

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: akhileshns/heroku-deploy@v3.12.12
      with:
        heroku_api_key: ${{secrets.HEROKU_API_KEY}}
        heroku_app_name: "adawat-pro"
        heroku_email: ${{secrets.HEROKU_EMAIL}}
```

## 🚀 خطوات النشر السريع

### Heroku
```bash
heroku create adawat-pro
git push heroku main
heroku open
```

### Vercel
```bash
vercel
```

### DigitalOcean
```bash
# 1. إنشاء Droplet
# 2. تثبيت Node.js و Nginx
# 3. نسخ المشروع
# 4. إعداد PM2
# 5. إعداد Nginx
# 6. إعداد SSL
```

## 📋 قائمة التحقق قبل النشر

- [ ] جميع الملفات محفوظة
- [ ] لا توجد أخطاء في الكود
- [ ] متغيرات البيئة محددة
- [ ] الأكواد السرية آمنة
- [ ] HTTPS مفعل
- [ ] الموقع يعمل محلياً
- [ ] جميع الصفحات تحمل
- [ ] الإعلانات تظهر
- [ ] الروابط تعمل
- [ ] الأداء مقبول

## 🆘 استكشاف الأخطاء

### الموقع لا يعمل
1. تحقق من السجلات
2. تحقق من متغيرات البيئة
3. تحقق من الاتصال بالإنترنت

### الأداء بطيء
1. تحقق من موارد الخادم
2. قلل عدد الإعلانات
3. حسّن صور الموقع

### الإعلانات لا تظهر
1. تحقق من أكوادك
2. تحقق من متغيرات البيئة
3. افتح وحدة التحكم (F12)

## 📞 الدعم

- **Heroku Support**: https://help.heroku.com
- **Vercel Support**: https://vercel.com/support
- **DigitalOcean Support**: https://www.digitalocean.com/support

---

**تم التحديث: 18 أكتوبر 2024**

