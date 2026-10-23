const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function captureScreens() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Ekran boyutunu ayarla
    await page.setViewport({ width: 1920, height: 1080 });

    const screens = [
        'hick_bad.html',
        'hick_good.html',
        'fitts_bad.html',
        'fitts_good.html',
        'miller_bad.html',
        'miller_good.html'
    ];

    const screensDir = path.join(__dirname, 'screens');
    const outputDir = path.join(__dirname, 'screens_png');

    // Çıktı klasörünü oluştur
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    for (const screen of screens) {
        const screenPath = path.join(screensDir, screen);
        const outputPath = path.join(outputDir, screen.replace('.html', '.png'));

        console.log(`Capturing: ${screen}`);

        // HTML dosyasını yükle
        await page.goto(`file:///${screenPath.replace(/\\/g, '/')}`, {
            waitUntil: 'networkidle0'
        });

        // Sayfanın tam yüklenmesini bekle
        await new Promise(resolve => setTimeout(resolve, 1000));

        // Ekran görüntüsü al
        await page.screenshot({
            path: outputPath,
            fullPage: true
        });

        console.log(`Saved: ${outputPath}`);
    }

    await browser.close();
    console.log('All screens captured successfully!');
}

captureScreens().catch(console.error);
