// main.js - Punto de entrada principal
console.log('main.js iniciando...');

// Contador de reintentos
let retryCount = 0;
const MAX_RETRIES = 10;

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
    console.log(`Intentando inicializar la aplicación... (intento ${retryCount + 1}/${MAX_RETRIES})`);
    
    if (!checkDependencies()) {
        retryCount++;
        
        if (retryCount >= MAX_RETRIES) {
            console.error('❌ No se pudieron cargar las dependencias después de ' + MAX_RETRIES + ' intentos');
            showErrorScreen('Error crítico: No se pudieron cargar todos los componentes necesarios. Por favor, recarga la página.');
            
            // Habilitar navegación básica aunque no se cargue todo
            enableBasicNavigation();
            return;
        }
        
        console.warn(`Faltan dependencias, reintentando en 500ms... (intento ${retryCount}/${MAX_RETRIES})`);
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
            hideLoadingScreen();
            
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
            showErrorScreen('Error al inicializar: ' + error.message);
            enableBasicNavigation();
        });
        
    } catch (error) {
        console.error('❌ Error crítico:', error);
        showErrorScreen('Error crítico: ' + error.message);
        enableBasicNavigation();
    }
}

// Función para ocultar pantalla de carga
function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }
}

// Función para mostrar pantalla de error
function showErrorScreen(errorMessage) {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.innerHTML = `
            <div class="loading-content">
                <h2 style="color: #ff4444;">Error carregant l'aplicació</h2>
                <p style="margin: 20px 0; color: #fff;">${errorMessage || 'Error desconegut'}</p>
                <button onclick="location.reload()" style="padding: 10px 20px; background: #007BFF; color: white; border: none; border-radius: 5px; cursor: pointer;">
                    Recarregar Pàgina
                </button>
            </div>
        `;
    }
}

// Función para habilitar navegación básica sin JavaScript completo
function enableBasicNavigation() {
    console.log('Habilitando navegación básica de emergencia...');
    
    // Ocultar pantalla de carga después de mostrar error
    setTimeout(() => {
        hideLoadingScreen();
    }, 3000);
    
    // Habilitar clics en navegación
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('data-section');
            
            // Ocultar todas las secciones
            document.querySelectorAll('main > section').forEach(section => {
                section.classList.remove('active-section');
            });
            
            // Mostrar la sección seleccionada
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.add('active-section');
            }
            
            // Actualizar navegación activa
            document.querySelectorAll('.nav-link').forEach(navLink => {
                navLink.classList.remove('active');
            });
            link.classList.add('active');
        });
    });
    
    // Mensaje en el chat
    const chatMessages = document.getElementById('chat-messages');
    if (chatMessages) {
        chatMessages.innerHTML += `
            <div class="message bot-message">
                <div class="message-avatar">
                    <span>LY</span>
                </div>
                <div class="message-content">
                    <p>⚠️ <strong>Mode d'emergència activat</strong></p>
                    <p>Hi ha hagut un problema carregant alguns components. La funcionalitat del xat pot estar limitada.</p>
                    <p>Si us plau, recarrega la pàgina per obtenir la funcionalitat completa.</p>
                </div>
            </div>
        `;
    }
}

// Esperar a que el DOM esté completamente cargado
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM cargado, iniciando aplicación...');
        setTimeout(initializeApp, 100); // Reducido de 1000ms a 100ms
    });
} else {
    console.log('DOM ya cargado, iniciando aplicación...');
    setTimeout(initializeApp, 100); // Reducido de 1000ms a 100ms
}

// Verificación adicional después de 10 segundos (aumentado de 5)
setTimeout(() => {
    if (!window.app && retryCount < MAX_RETRIES) {
        console.error('❌ La aplicación no se ha inicializado después de 10 segundos');
        showErrorScreen('Tiempo de espera agotado. Por favor, recarga la página.');
        enableBasicNavigation();
    }
}, 10000); 