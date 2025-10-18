const express = require('express');
const path = require('path');
const cors = require('cors');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Create routes directory if it doesn't exist
if (!fs.existsSync(path.join(__dirname, 'routes'))) {
  fs.mkdirSync(path.join(__dirname, 'routes'));
}

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Sitemap routes
app.get('/sitemap.xml', (req, res) => {
  res.type('application/xml');
  
  const pages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/apps', priority: '0.9', changefreq: 'daily' },
    { url: '/tools', priority: '0.9', changefreq: 'daily' },
    { url: '/resources', priority: '0.8', changefreq: 'weekly' },
    { url: '/blog', priority: '0.8', changefreq: 'daily' },
    { url: '/about', priority: '0.7', changefreq: 'monthly' }
  ];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
  
  pages.forEach(page => {
    xml += '  <url>\n';
    xml += `    <loc>https://adawat-pro.com${page.url}</loc>\n`;
    xml += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  });
  
  xml += '</urlset>';
  res.send(xml);
});

app.get('/robots.txt', (req, res) => {
  res.type('text/plain');
  
  let robots = 'User-agent: *\n';
  robots += 'Allow: /\n';
  robots += 'Disallow: /admin\n';
  robots += 'Disallow: /api/private\n\n';
  robots += 'Crawl-delay: 1\n\n';
  robots += 'Sitemap: https://adawat-pro.com/sitemap.xml\n';
  
  res.send(robots);
});

// Routes
app.get('/', (req, res) => {
  res.render('index', {
    title: 'أدوات برو - أدوات مجانية وتطبيقات مفيدة',
    description: 'مجموعة من الأدوات المجانية والتطبيقات المفيدة للمستخدمين العرب'
  });
});

app.get('/apps', (req, res) => {
  res.render('apps', {
    title: 'تحميل التطبيقات - أدوات برو',
    description: 'تحميل تطبيقات أندرويد وآيفون المجانية'
  });
});

app.get('/tools', (req, res) => {
  res.render('tools', {
    title: 'الأدوات أونلاين - أدوات برو',
    description: 'أدوات تحويل الصور والصوت والملفات أونلاين'
  });
});

app.get('/resources', (req, res) => {
  res.render('resources', {
    title: 'الموارد والروابط - أدوات برو',
    description: 'روابط مباشرة لأفضل المواقع المجانية'
  });
});

app.get('/blog', (req, res) => {
  res.render('blog', {
    title: 'المقالات التقنية - أدوات برو',
    description: 'مقالات تقنية ونصائح رقمية مفيدة'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'عن الموقع - أدوات برو',
    description: 'معلومات عن موقع أدوات برو وسياستنا'
  });
});

app.get('/privacy', (req, res) => {
  res.render('privacy', {
    title: 'سياسة الخصوصية - أدوات برو',
    description: 'سياسة الخصوصية والبيانات الشخصية'
  });
});

app.get('/terms', (req, res) => {
  res.render('terms', {
    title: 'شروط الاستخدام - أدوات برو',
    description: 'شروط الاستخدام والسياسات'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).render('404', {
    title: 'الصفحة غير موجودة - أدوات برو'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).render('500', {
    title: 'خطأ في الخادم - أدوات برو'
  });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
  console.log(`📍 Sitemap: http://localhost:${PORT}/sitemap.xml`);
  console.log(`🤖 Robots: http://localhost:${PORT}/robots.txt`);
});

