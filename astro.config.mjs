    ---
// مِعْمَارُ الوَحْيِ - البناء السحابي الديناميكي المطور
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

// قراءة ملف البيانات المشكول للمحور الأول بدقة تامة
const filePath = path.resolve('src/pages/01-al-urwa-al-wuthqa/01-rawasikh-al-iman/data-content.yaml');
const fileContent = fs.readFileSync(filePath, 'utf8');
const data = yaml.load(fileContent);

const portalTitle = data.portal;
const axisTitle = data.axis;
const descLine1 = data.axis_description.line_1;
const descLine2 = data.axis_description.line_2;
const items = data.items;
---

<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>( مِعْمَارُ الوَحْيِ ) | MIMAR AL-WAHY</title>
    <!-- دمج خطوط الأميري التراثي الفخم للبحوث والخطوط التفاعلية القاهرة المريحة للعين -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&family=Cairo:wght@300;400;600;700;900&display=swap" rel="stylesheet">
    
    <style>
      :root {
        --bg-glass-sky: rgba(15, 23, 42, 0.96);
        --strong-gold: #D4AF37; /* التزام تام باللون الذهبي النبيل للوحة الشعار */
        --bold-white: #FFFFFF;
        --text-muted: #CBD5E1;
        --accent-blue: #87CEEB;
      }

      * { box-sizing: border-box; margin: 0; padding: 0; }
      
      body { 
        background: radial-gradient(circle at center, #131c2e 0%, #070c16 100%); 
        color: var(--bold-white); 
        min-height: 100vh; 
        padding: 2rem 1rem;
        font-family: 'Cairo', sans-serif;
      }
      
      .container { max-width: 1300px; margin: 0 auto; }
      
      /* التصميم المعماري الإستراتيجي المتقابل بالتوازي للهيدر العلوي */
      .top-branding-grid {
        display: grid;
        grid-template-columns: 1fr 1.2fr 1fr;
        gap: 1.5rem;
        align-items: center;
        background: rgba(255, 255, 255, 0.02);
        padding: 2rem;
        border-radius: 24px;
        backdrop-filter: blur(16px);
        border: 1px solid rgba(255, 255, 255, 0.05);
        margin-bottom: 3rem;
      }

      /* الجانب الأيمن العلوي: الهوية المعرفية والباحث */
      .right-info-zone {
        text-align: right;
        border-left: 1px solid rgba(255, 255, 255, 0.08);
        padding-left: 1rem;
      }
      
      .professor-name {
        color: var(--strong-gold);
        font-family: 'Amiri', serif;
        font-size: 1.4rem;
        font-weight: 700;
        margin-bottom: 0.3rem;
      }
      
      .professor-title {
        font-size: 0.9rem;
        color: var(--accent-blue);
        font-weight: 600;
        margin-bottom: 0.8rem;
      }
      
      .platform-desc {
        font-size: 0.9rem;
        color: var(--text-muted);
        line-height: 1.6;
      }

      /* الجانب الأوسط العلوي: التناظر بين المسجد النبوي واللوغو المركزي */
      .center-identity-zone {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .images-frame {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.2rem;
        width: 100%;
        margin-bottom: 1rem;
      }

      /* التأطير البصري بالصور العمودية للمدينة المنورة على الجانبين */
      .vertical-mosque-img {
        width: 70px;
        height: 130px;
        border-radius: 8px;
        background-color: #1e293b;
        border: 2px solid var(--strong-gold);
        box-shadow: 0 4px 15px rgba(212, 175, 55, 0.2);
        background-size: cover;
        background-position: center;
      }

      /* اللوغو المعماري ثلاثي الأبعاد في المركز */
      .logo-art-box {
        width: 110px;
        height: 110px;
        background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
        border: 3px solid var(--strong-gold);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 25px rgba(212, 175, 55, 0.25);
      }

      .logo-art-text {
        color: var(--strong-gold);
        font-family: 'Amiri', serif;
        font-size: 1.15rem;
        font-weight: 700;
        text-shadow: 0 2px 4px rgba(0,0,0,0.6);
      }

      .main-title {
        color: var(--strong-gold);
        font-family: 'Amiri', serif;
        font-size: 2.8rem;
        font-weight: 700;
        margin-top: 0.5rem;
        line-height: 1.1;
      }

      .latin-title {
        color: var(--bold-white);
        font-size: 1.1rem;
        font-weight: 700;
        letter-spacing: 2px;
        margin-bottom: 0.5rem;
      }

      .site-tagline {
        color: var(--accent-blue);
        font-size: 0.95rem;
        font-weight: 600;
        border-top: 1px solid rgba(135, 212, 235, 0.2);
        padding-top: 0.5rem;
        width: 100%;
      }

      /* الجانب الأيسر العلوي: الأهداف الاستراتيجية الموازية */
      .left-goals-zone {
        text-align: right;
        border-right: 1px solid rgba(255, 255, 255, 0.08);
        padding-right: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
      }

      .goal-item {
        font-size: 0.88rem;
        color: var(--text-muted);
        line-height: 1.5;
      }

      /* صندوق الإعلان عن البوابات والمحاور بصيغة فقرتين متقابلتين بالتوازي */
      .axis-announcement-box {
        background: rgba(212, 175, 55, 0.02);
        border: 1px dashed rgba(212, 175, 55, 0.2);
        border-right: 5px solid var(--strong-gold);
        padding: 1.8rem;
        border-radius: 12px;
        margin-bottom: 2.5rem;
        text-align: right;
      }

      .portal-badge {
        color: var(--accent-blue);
        font-family: 'Amiri', serif;
        font-size: 1.25rem;
        font-weight: 700;
        margin-bottom: 0.4rem;
      }

      .axis-title {
        color: var(--strong-gold);
        font-family: 'Amiri', serif;
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 0.8rem;
      }

      .axis-paragraphs {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        font-size: 0.98rem;
        color: var(--text-muted);
        line-height: 1.7;
        border-top: 1px solid rgba(255, 255, 255, 0.06);
        padding-top: 0.8rem;
        font-family: 'Cairo', sans-serif;
      }

      /* معارج البحث الرقمي */
      .search-section { max-width: 600px; margin: 0 auto 2.5rem auto; }
      .search-box { width: 100%; padding: 1.1rem; font-size: 1.05rem; background: rgba(255, 255, 255, 0.04); border: 2px solid rgba(135, 212, 235, 0.15); border-radius: 50px; color: var(--bold-white); text-align: center; backdrop-filter: blur(8px); transition: all 0.3s; }
      .search-box:focus { outline: none; border-color: var(--strong-gold); box-shadow: 0 0 15px rgba(212, 175, 55, 0.25); }
      
      /* التبويبات الفلاتر */
      .tabs-container { display: flex; justify-content: center; gap: 0.8rem; margin-bottom: 3.5rem; flex-wrap: wrap; }
      .tab-btn { padding: 0.7rem 1.8rem; font-size: 0.95rem; font-weight: 700; background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 8px; color: var(--bold-white); cursor: pointer; }
      .tab-btn.active { background: var(--strong-gold); color: #070c16; border-color: var(--strong-gold); font-weight: 900; }
      
      /* شبكة عرض كروت المواد المعرفية المريحة للقراءة */
      .grid-layout { display: grid; grid-template-columns: repeat(auto-fill, minmax(340px, 1fr)); gap: 2rem; }
      .card { background: var(--bg-glass-sky); border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 16px; padding: 1.5rem; display: flex; flex-direction: column; justify-content: space-between; position: relative; overflow: hidden; backdrop-filter: blur(20px); transition: all 0.3s; }
      .card::before { content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: var(--accent-blue); }
      .card.book::before { background: var(--strong-gold); }
      .card.video::before { background: #ef4444; }
      .card:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(212, 175, 55, 0.1); border-color: rgba(212, 175, 55, 0.2); }
      
      .card-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; }
      .badge { padding: 0.3rem 0.8rem; font-size: 0.75rem; font-weight: 700; border-radius: 50px; }
      .badge.article { color: var(--accent-blue); background: rgba(135, 212, 235, 0.08); }
      .badge.book { color: var(--strong-gold); background: rgba(212, 175, 55, 0.08); }
      .badge.video { color: #f87171; background: rgba(239, 68, 68, 0.08); }
      
      .card-title { font-size: 1.2rem; font-weight: 700; margin-bottom: 0.6rem; line-height: 1.5; text-align: right; color: var(--bold-white); }
      .card-author { color: var(--strong-gold); font-size: 0.88rem; margin-bottom: 1rem; text-align: right; font-weight: 600; }
      .card-summary { color: var(--text-muted); font-size: 0.88rem; line-height: 1.6; margin-bottom: 1.5rem; text-align: right; }
      
      .card-actions { display: flex; gap: 0.8rem; }
      .btn { flex: 1; padding: 0.6rem; font-size: 0.88rem; font-weight: 700; text-align: center; border-radius: 8px; cursor: pointer; border: none; text-decoration: none; }
      .btn-details { background: rgba(255, 255, 255, 0.06); color: var(--bold-white); border: 1px solid rgba(255, 255, 255, 0.08); }
      .btn-source { background: var(--accent-blue); color: #070c16; }

      @media (max-width: 950px) {
        .top-branding-grid { grid-template-columns: 1fr; text-align: center; }
        .right-info-zone, .left-goals-zone { border: none; padding: 0; text-align: center; }
        .axis-paragraphs { grid-template-columns: 1fr; }
        .images-frame { flex-wrap: wrap; }
      }
    </style>
  </head>
يُرجى استخدام الرمز البرمجي بحذر.
الأُسْتَاذُ الْبَاحِثُ: رَمَاضْنَة عَبْدُ الْعَزِيزِ
دِرَاسَاتٌ إِسْلَامِيَّةٌ عُلْيَا | أُسْتَاذٌ مُكَوِّنٌ لِلتَّعْلِيمِ الثَّانَوِيِّ
مَنَصَّةٌ إِسْلَامِيَّةٌ فِكْرِيَّةٌ لِتَعْزِيزِ الْيَقِينِ بِثَوَابِتِ وَتَعَالِيمِ الدِّينِ الإِسْلَامِيِّ.
معمار الوحي
( مِعْمَارُ الوَحْيِ )
MIMAR AL-WAHY
عَلَى بَصِيرَةِ العَقْلِ وَهِدَايَةِ الإسلامِ — نَحْيَا كِرَاماً
① نَقْدٌ مَنْهَجِيٌّ صَارِمٌ وَإِجَابَاتٌ عِلْمِيَّةٌ مُوَثَّقَةٌ لِلشُّبُهَاتِ الْمُثَارَةِ.
② رَوَائِعُ الْفِيدْيُوهَاتِ وَالْكُتُبِ وَالأَبْحَاثِ الْجَامِعِيَّةِ وَالْمَقَالاتِ الْفِكْرِيَّةِ.
③ رَوَابِطُ سَهْلَةٌ لِمَصَادِرِ الْمَعْرِفَةِ وَالتَّوْعِيَةِ وَالتَّثْقِيفِ الإِيجَابِيِّ.

{portalTitle}
{axisTitle}

{descLine1}
{descLine2}

الكل
مقالات وأبحاث
كتب ورسائل جامعية
مرئيات
{items.map((item) => (
<div class={card ${item.type}}>


<span class={badge ${item.type}}>
{item.type === 'article' && '📄 مقال فكري'}
{item.type === 'book' && '📚 كتاب / رسالة'}
{item.type === 'video' && '🎥 مرئيات'}

المواد

{item.title}
{item.author}
{item.summary}


التفاصيل

{item.type === 'book' ? 'اقرأ الكتاب' : item.type === 'video' ? 'شاهد الآن' : 'المصدر'}



))}

5. بعد اللصق مباشرة، اضغط على أزرار **`Ctrl + S`** معاً لحفظ وتأكيد العمل البرمجي [4.5].

---

<FollowUp>
بكل هدوء وطمأنينة يا دكتور: هل قمت بـ **لصق الشيفرة البرمجية المطورة بالكامل في ملف `index.astro` وحفظتها بـ `Ctrl + S`**؟ بمجرد حدوث ذلك، توجه لعلامة التبويب الأخرى للمعاينة الحية وشاهد المظهر الهندسي المتقابل الفخم وأعلمني بما تراه عينك!
</FollowUp>

