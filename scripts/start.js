const detectPort = require('detect-port');
const { spawn } = require('child_process');

const DEFAULT_PORT = 3000;

async function start() {
  try {
    // Detectar puerto disponible
    const port = await detectPort.detectPort(DEFAULT_PORT);
    
    if (port !== DEFAULT_PORT) {
      console.log(`⚠️  Puerto ${DEFAULT_PORT} está ocupado. Usando puerto ${port}...`);
    } else {
      console.log(`✅ Iniciando servidor en puerto ${port}...`);
    }

    // Configurar variable de entorno PORT
    process.env.PORT = port;

    // Ejecutar craco start directamente
    const cracoProcess = spawn('npx', ['craco', 'start'], {
      stdio: 'inherit',
      shell: true,
      env: {
        ...process.env,
        PORT: port.toString()
      }
    });

    // Manejar cierre del proceso
    process.on('SIGINT', () => {
      cracoProcess.kill('SIGINT');
      process.exit(0);
    });

    process.on('SIGTERM', () => {
      cracoProcess.kill('SIGTERM');
      process.exit(0);
    });

  } catch (error) {
    console.error('❌ Error al iniciar el servidor:', error);
    process.exit(1);
  }
}

start();

