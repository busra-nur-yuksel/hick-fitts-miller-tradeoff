# ⚖️ Hick, Fitts & Miller Terazisi: Acil Servis Triyaj Arayüzü Vaka Analizi

Bu proje, yüksek bilişsel yük ve zaman baskısı altındaki acil servis triyaj süreçlerinde temel İnsan-Bilgisayar Etkileşimi (HCI) yasalarının (**Hick, Fitts ve Miller**) birbirleriyle olan trade-off (ödünleşim) ilişkisini inceleyen deneysel bir çalışmadır.

> **Temel Araştırma Sorusu:** Hick, Fitts ve Miller yasaları aynı ekranda birlikte en iyi hâline ulaşabilir mi, yoksa biri optimize edilirken diğeri bozulur mu?

---

## 👩‍⚕️ Persona ve Bilimsel Temel
* **Persona:** Elif Hemşire (32) – 7 yıllık Acil Servis Triyaj Hemşiresi.
* **Koşul:** Her hasta için ortalama 45–60 saniyede triyaj kodu (Kırmızı/Sarı/Yeşil) belirleme baskısı, arka plan gürültüsü ve yüksek karar yorgunluğu.
* **Literatür Dayanağı:** *Cognitive Load and Decision Making in Emergency Department Triage: An Empirical HCI Study*.

---

## 📐 Yasalar ve Ekran Karşılaştırmaları (Kötü vs. İyi)

### 1. Hick Yasası (Karar Süresi)
Formül: $T = b \cdot \log_2(n + 1)$
* **Kötü Tasarım (`hick_bad.html`):** Ekranda düzensizce yerleştirilmiş 20 kategori butonu ($n=20$) $\rightarrow$ $T = 791\text{ ms}$.
* **İyi Tasarım (`hick_good.html`):** Kademeli Bilgi İfşası (Progressive Disclosure) ile 4 ana sistem seçimi ($n=4$) $\rightarrow$ $T = 418\text{ ms}$.
* **Sonuç:** İlk karar anında **%47 tepki süresi iyileştirmesi**.

### 2. Fitts Yasası (Erişim ve Tıklama Hızı)
Formül: $MT = a + b \cdot \log_2(2D / W)$
* **Kötü Tasarım (`fitts_bad.html`):** Sağ üst köşede, uzak mesafede ($D=900\text{px}$) ve minik ($16\times16\text{px}$) onay butonu $\rightarrow$ $MT = 967\text{ ms}$.
* **İyi Tasarım (`fitts_good.html`):** Alt kontrol bandında, yakın ($D=120\text{px}$) ve geniş dokunma yüzeyli ($280\times54\text{px}$) acil eylem butonu $\rightarrow$ $MT = 124\text{ ms}$.
* **Sonuç:** Kritik eyleme ulaşma süresinde **%87 hız artışı**.

### 3. Miller Yasası (Çalışma Belleği / Chunking)
Kural: $7 \pm 2$ Bilgi Parçacığı
* **Kötü Tasarım (`miller_bad.html`):** 15 ayrı vital bulgunun tek formda gruplanmadan yığılması (Aşırı bilişsel yük).
* **İyi Tasarım (`miller_good.html`):** 3 ana kartta toplanmış anlamsal öbekleme (Chunking: Vital Bulgular, Bilinç Durumu, Risk/Alerji - her kartta $\le 4$ veri).

---

## ⚖️ Terazi Analizi: Neden Üçü Aynı Anda Mükemmel Olamaz?
Acil durum arayüzlerinde üç yasa arasında fiziksel ve bilişsel bir çatışma vardır:
1. **Fitts vs. Miller:** Fitts yasasını tatmin etmek amacıyla acil aksiyon butonları büyütüldüğünde ($W \uparrow$), ekranda kaplanan alan artar. Bu durum ekrandaki diğer kritik verilerin alanını daraltarak Miller yasasının chunking düzenini ve görsel nefes payını bozar.
2. **Hick vs. Fitts:** Hick yasasını optimize etmek için seçenekler kademelendirildiğinde (menü katmanları), kullanıcı tek bir kararı hızlı verse de toplam işlemdeki tıklama sayısı ve fiziksel erişim süresi (Fitts maliyeti) artar.

**Karar:** Acil serviste hayati tehlike durumlarında **Fitts Yasası önceliklendirilmiş**, tıbbi hata riskini sıfırlamak için **Miller Yasası korunmuş**, genel navigasyonda ise **Hick Yasası bilinçli olarak kademeli akışa feda edilmiştir**.

---

## 🛠️ Proje Mimarisi & Dosyalar
* **`screens/`**: İnteraktif HTML/CSS test ekranları.
* **`screens_png/`**: 1920x1080 çözünürlüklü arayüz çıktıları.
* **`Hick_Fitts_Miller_Terazisi_Raporu.pdf`**: Akademik araştırma raporu ve hesaplamalar.