# دليل تثبيت وتكوين Adsterra

هذا الدليل يشرح كيفية تثبيت وتكوين إعلانات Adsterra على موقع أدوات برو.

## 📋 المتطلبات

- حساب Adsterra نشط
- أكواد Adsterra (Popunder, Notification, Banner)
- الوصول إلى ملفات المشروع

## 🚀 خطوات التثبيت

### 1. الحصول على أكواد Adsterra

1. اذهب إلى [Adsterra.com](https://www.adsterra.com)
2. سجل الدخول إلى حسابك
3. انتقل إلى قسم "Ads" أو "Zones"
4. انسخ الأكواد التالية:
   - **Popunder Code**: كود الإعلانات المنبثقة
   - **Notification Code**: كود إشعارات الدفع
   - **Banner Code**: كود الإعلانات البنرية

### 2. تحديث ملف .env

افتح ملف `.env` وأضف أكوادك:

```env
# Adsterra Configuration
ADSTERRA_POPUNDER_CODE=YOUR_POPUNDER_CODE_HERE
ADSTERRA_NOTIFICATION_CODE=YOUR_NOTIFICATION_CODE_HERE
ADSTERRA_BANNER_CODE=YOUR_BANNER_CODE_HERE

# Enable/Disable Ads
ENABLE_POPUNDER_ADS=true
ENABLE_NOTIFICATION_ADS=true
ENABLE_BANNER_ADS=true
```

### 3. تحديث ملف adsterra.js

افتح ملف `public/js/adsterra.js` وحدّث الأكواد:

```javascript
const ADSTERRA_CONFIG = {
  popunderCode: 'YOUR_ACTUAL_POPUNDER_CODE',
  notificationCode: 'YOUR_ACTUAL_NOTIFICATION_CODE',
  bannerCode: 'YOUR_ACTUAL_BANNER_CODE',
  popunderDelay: 3000,
  enablePopunder: true,
  enableNotification: true,
  enableBanners: true
};
```

### 4. اختبار الإعلانات

1. أعد تشغيل الخادم:
```bash
npm start
```

2. افتح الموقع في المتصفح: `http://localhost:3000`

3. تحقق من ظهور الإعلانات:
   - **Popunder**: يجب أن تظهر بعد 3 ثوان من زيارة الموقع
   - **Notifications**: يجب أن تظهر إشعارات في الزاوية العلوية اليمنى
   - **Banners**: يجب أن تظهر في المساحات المحددة على الصفحات

## 🎯 أنواع الإعلانات المدعومة

### 1. Popunder Ads (الإعلانات المنبثقة)
- تظهر في نافذة منفصلة
- لا تؤثر على تجربة المستخدم الأساسية
- تُظهر بعد تأخير زمني

**المميزات:**
- معدل تحويل عالي
- أرباح جيدة
- لا تزعج المستخدمين كثيراً

### 2. Push Notifications (إشعارات الدفع)
- تظهر كإشعارات في المتصفح
- يمكن للمستخدم السماح أو الرفض

**المميزات:**
- معدل مشاركة عالي
- أرباح متوسطة
- تفاعل مباشر مع المستخدمين

### 3. Banner Ads (الإعلانات البنرية)
- تظهر في مساحات محددة على الصفحات
- تتكيف مع حجم الشاشة

**المميزات:**
- أقل إزعاجاً للمستخدمين
- معدل تحويل متوسط
- سهلة التكامل

## 📊 تحسين الأرباح

### 1. وضع الإعلانات
- ضع الإعلانات في أماكن مرئية
- تجنب وضع إعلانات متعددة بجانب بعضها
- استخدم مساحات بيضاء حول الإعلانات

### 2. تحسين حركة المرور
- أضف محتوى جديد بانتظام
- حسّن SEO للموقع
- شارك الموقع على وسائل التواصل

### 3. اختبار وتحسين
- اختبر أنواع إعلانات مختلفة
- راقب أداء الإعلانات
- عدّل التكوينات بناءً على النتائج

## 🔧 الخيارات المتقدمة

### تأخير Popunder
```javascript
popunderDelay: 3000 // 3 ثوان
```

### تعطيل نوع معين من الإعلانات
```env
ENABLE_POPUNDER_ADS=false
ENABLE_NOTIFICATION_ADS=true
ENABLE_BANNER_ADS=true
```

### إضافة إعلانات في صفحات محددة
قم بإضافة `<div id="adsterra-ad-custom"></div>` في الصفحة المطلوبة

## 📈 مراقبة الأداء

### لوحة تحكم Adsterra
1. اذهب إلى [Adsterra Dashboard](https://www.adsterra.com)
2. انتقل إلى "Statistics" أو "Reports"
3. راقب:
   - عدد الزيارات (Impressions)
   - عدد النقرات (Clicks)
   - معدل التحويل (CTR)
   - الأرباح (Earnings)

### Google Analytics
أضف Google Analytics لتتبع حركة المرور:

```env
GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX-X
```

## 🚨 استكشاف الأخطاء

### الإعلانات لا تظهر
1. تحقق من أكوادك
2. تأكد من تفعيل الإعلانات في .env
3. افتح وحدة التحكم (F12) وابحث عن الأخطاء

### الإعلانات تظهر ببطء
1. تحقق من سرعة الإنترنت
2. قلل عدد الإعلانات على الصفحة
3. تحقق من أداء الخادم

### الأرباح منخفضة
1. أضف محتوى جديد
2. حسّن SEO
3. جرب أنواع إعلانات مختلفة
4. زيادة حركة المرور

## 📞 الدعم

للمساعدة والدعم:
- **Adsterra Support**: https://www.adsterra.com/support
- **البريد الإلكتروني**: support@adawat-pro.com

## ⚖️ شروط الاستخدام

- اتبع سياسات Adsterra
- لا تستخدم طرقاً احتيالية لزيادة الأرباح
- احترم خصوصية المستخدمين
- اتبع القوانين المحلية

## 🎓 موارد إضافية

- [Adsterra Documentation](https://www.adsterra.com/help)
- [Best Practices for Ad Monetization](https://www.adsterra.com/blog)
- [SEO Tips for More Traffic](https://www.adsterra.com/blog)

---

**تم التحديث: 18 أكتوبر 2024**

