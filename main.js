// Log para verificar que main.js se está cargando
console.log('main.js carregat correctament');

// Esperar a que el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

function initApp() {
    console.log('Inicialitzant aplicació des de main.js...');
    
    // Esperar un poco para que se carguen todos los scripts
    setTimeout(() => {
        try {
            // Inicializar AOS cuando esté disponible
            if (typeof AOS !== 'undefined') {
                AOS.init({
                    duration: 800,
                    easing: 'ease-out-cubic',
                    once: true,
                    offset: 100
                });
                console.log('AOS inicialitzat');
            }
            
            // Verificar que las clases estén disponibles
            if (typeof App !== 'undefined' && typeof ContentLoader !== 'undefined' && typeof Chatbot !== 'undefined') {
                console.log('Creant instància de App...');
                window.app = new App();
                window.app.init().then(() => {
                    console.log('App inicialitzada correctament!');
                    // Ocultar pantalla de carga
                    const loadingScreen = document.getElementById('loading-screen');
                    if (loadingScreen) {
                        loadingScreen.style.display = 'none';
                    }
                }).catch(error => {
                    console.error('Error inicialitzant App:', error);
                    showError();
                });
            } else {
                console.error('Classes no trobades:', {
                    App: typeof App !== 'undefined',
                    ContentLoader: typeof ContentLoader !== 'undefined', 
                    Chatbot: typeof Chatbot !== 'undefined'
                });
                showError();
            }
            
        } catch (error) {
            console.error('Error inicialitzant aplicació:', error);
            showError();
        }
    }, 500);
}

function showError() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.innerHTML = `
            <div class="loading-content">
                <h2 style="color: #ff4444;">Error carregant l'aplicació</h2>
                <p>Si us plau, recarrega la pàgina</p>
                <button onclick="location.reload()" style="margin-top: 20px; padding: 10px 20px; background: #007BFF; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    Recarregar
                </button>
            </div>
        `;
    }
} 