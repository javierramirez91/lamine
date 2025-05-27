// main.js - Punto de entrada principal
console.log('main.js iniciando...');

// Función para verificar si todos los scripts están cargados
function checkDependencies() {
    const deps = {
        ContentLoader: typeof ContentLoader !== 'undefined',
        Chatbot: typeof Chatbot !== 'undefined',
        App: typeof App !== 'undefined',
        AOS: typeof AOS !== 'undefined',
        marked: typeof marked !== 'undefined'
    };
    
    console.log('Estado de dependencias:', deps);
    
    return deps.ContentLoader && deps.Chatbot && deps.App;
}

// Función para inicializar la aplicación
function initializeApp() {
    console.log('Intentando inicializar la aplicación...');
    
    if (!checkDependencies()) {
        console.error('Faltan dependencias, reintentando en 500ms...');
        setTimeout(initializeApp, 500);
        return;
    }
    
    try {
        // Crear instancia global de la aplicación
        window.app = new App();
        console.log('Instancia de App creada');
        
        // Inicializar la aplicación
        window.app.init().then(() => {
            console.log('✅ Aplicación inicializada correctamente');
            
            // Ocultar pantalla de carga
            const loadingScreen = document.getElementById('loading-screen');
            if (loadingScreen) {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 500);
            }
            
            // Inicializar AOS si está disponible
            if (typeof AOS !== 'undefined') {
                AOS.init({
                    duration: 800,
                    easing: 'ease-out-cubic',
                    once: true,
                    offset: 100
                });
                console.log('✅ AOS inicializado');
            }
            
        }).catch(error => {
            console.error('❌ Error al inicializar la aplicación:', error);
            showErrorScreen(error.message);
        });
        
    } catch (error) {
        console.error('❌ Error crítico:', error);
        showErrorScreen(error.message);
    }
}

// Función para mostrar pantalla de error
function showErrorScreen(errorMessage) {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.innerHTML = `
            <div class="loading-content">
                <h2 style="color: #ff4444;">Error carregant l'aplicació</h2>
                <p style="margin: 20px 0; color: #666;">${errorMessage || 'Error desconegut'}</p>
                <button onclick="location.reload()" style="padding: 10px 20px; background: #007BFF; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    Recarregar Pàgina
                </button>
            </div>
        `;
    }
}

// Esperar a que el DOM esté completamente cargado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM cargado, esperando 1 segundo para asegurar carga de scripts...');
        setTimeout(initializeApp, 1000);
    });
} else {
    console.log('DOM ya cargado, esperando 1 segundo para asegurar carga de scripts...');
    setTimeout(initializeApp, 1000);
}

// Verificación adicional después de 5 segundos
setTimeout(() => {
    if (!window.app) {
        console.error('❌ La aplicación no se ha inicializado después de 5 segundos');
        showErrorScreen('Tiempo de espera agotado. Por favor, recarga la página.');
    }
}, 5000); 