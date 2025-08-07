#!/bin/bash

# Script para deploy del proyecto AutoConsult Pro Frontend
# Autor: AutoConsult Pro Team
# Fecha: $(date)

echo "🚀 Iniciando deploy de AutoConsult Pro Frontend..."

# Verificar si estamos en el directorio correcto
if [ ! -f "package.json" ]; then
    echo "❌ Error: No se encontró package.json. Asegúrate de estar en el directorio del proyecto."
    exit 1
fi

# Verificar si git está instalado
if ! command -v git &> /dev/null; then
    echo "❌ Error: Git no está instalado."
    exit 1
fi

# Verificar si node está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js no está instalado."
    exit 1
fi

# Verificar si npm está instalado
if ! command -v npm &> /dev/null; then
    echo "❌ Error: npm no está instalado."
    exit 1
fi

echo "✅ Verificaciones completadas"

# Instalar dependencias si no existen
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Error al instalar dependencias"
        exit 1
    fi
fi

# Construir el proyecto
echo "🔨 Construyendo el proyecto..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Error al construir el proyecto"
    exit 1
fi

# Verificar si el repositorio git está inicializado
if [ ! -d ".git" ]; then
    echo "🔧 Inicializando repositorio git..."
    git init
    git remote add origin https://github.com/josewalke/web-forceUp.git
fi

# Agregar todos los archivos
echo "📁 Agregando archivos al repositorio..."
git add .

# Commit de los cambios
echo "💾 Creando commit..."
git commit -m "🚀 Deploy: AutoConsult Pro Frontend - $(date)"

# Push al repositorio
echo "📤 Subiendo al repositorio..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo "✅ ¡Deploy completado exitosamente!"
    echo "🌐 Tu sitio estará disponible en: https://josewalke.github.io/web-forceUp/"
else
    echo "❌ Error al subir al repositorio"
    echo "💡 Asegúrate de tener permisos de escritura en el repositorio"
    exit 1
fi

echo "🎉 ¡Proceso completado!"
echo ""
echo "📋 Resumen:"
echo "   - Proyecto construido exitosamente"
echo "   - Archivos subidos al repositorio"
echo "   - Sitio listo para producción"
echo ""
echo "🔗 Repositorio: https://github.com/josewalke/web-forceUp.git"
echo "📧 Contacto: info@autoconsultpro.com"
