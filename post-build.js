import { readFileSync, writeFileSync, existsSync, readdirSync, copyFileSync } from 'fs';
import { resolve } from 'path';

console.log('Post-build: Arreglando build de producción...');

// Copiar archivos JavaScript y CSS a dist
const filesToCopy = ['content-loader.js', 'chatbot.js', 'app.js', 'styles.css'];
const distPath = resolve('dist');

filesToCopy.forEach(file => {
    try {
        copyFileSync(resolve(file), resolve(distPath, file));
        console.log(`✓ Copiado ${file} a dist/`);
    } catch (error) {
        console.error(`✗ Error copiando ${file}:`, error.message);
    }
});

// Leer el index.html original
const originalHtml = readFileSync(resolve('index.html'), 'utf-8');

// Buscar el main.js generado por Vite
const assetsPath = resolve(distPath, 'assets');
let mainJsFile = '';

if (existsSync(assetsPath)) {
    const files = readdirSync(assetsPath);
    mainJsFile = files.find(f => f.startsWith('main-') && f.endsWith('.js')) || '';
}

// Reemplazar las rutas de los scripts para que funcionen desde dist
let finalHtml = originalHtml
    .replace(/src="\/content-loader\.js"/g, 'src="/content-loader.js"')
    .replace(/src="\/chatbot\.js"/g, 'src="/chatbot.js"')
    .replace(/src="\/app\.js"/g, 'src="/app.js"')
    .replace(/src="\/main\.js"/g, `src="/assets/${mainJsFile}"`)
    .replace(/href="styles\.css"/g, 'href="/styles.css"');

// Escribir el HTML final
writeFileSync(resolve(distPath, 'index.html'), finalHtml);
console.log('✓ index.html actualizado correctamente');
console.log('✓ Build completado!'); 