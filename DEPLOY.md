# 🚀 Guía de Deploy - AutoConsult Pro Frontend

Esta guía te ayudará a subir tu proyecto React al repositorio [web-forceUp](https://github.com/josewalke/web-forceUp.git) en GitHub.

## 📋 Prerrequisitos

- ✅ Node.js (versión 14 o superior)
- ✅ npm o yarn
- ✅ Git instalado
- ✅ Cuenta de GitHub
- ✅ Acceso al repositorio [web-forceUp](https://github.com/josewalke/web-forceUp.git)

## 🎯 Opciones de Deploy

### Opción 1: Deploy Automático (Recomendado)

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/josewalke/web-forceUp.git
   cd web-forceUp
   ```

2. **Copiar archivos del proyecto**
   ```bash
   # Copia todos los archivos de tu proyecto React aquí
   cp -r ../mi-app-react/* .
   ```

3. **Instalar dependencias**
   ```bash
   npm install
   ```

4. **Configurar Git**
   ```bash
   git add .
   git commit -m "🚀 Initial commit: AutoConsult Pro Frontend"
   git push origin main
   ```

5. **Configurar GitHub Pages**
   - Ve a Settings > Pages
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)

### Opción 2: Deploy Manual

1. **Preparar el proyecto**
   ```bash
   npm run build
   ```

2. **Subir al repositorio**
   ```bash
   git add .
   git commit -m "🚀 Deploy: AutoConsult Pro Frontend"
   git push origin main
   ```

### Opción 3: Usar el Script Automático

1. **Ejecutar el script de deploy**
   ```bash
   chmod +x deploy.sh
   ./deploy.sh
   ```

## 🔧 Configuración Adicional

### GitHub Actions (Automático)

El proyecto incluye un workflow de GitHub Actions que se ejecuta automáticamente cuando haces push a la rama `main`.

**Archivo**: `.github/workflows/deploy.yml`

### Variables de Entorno

Si necesitas variables de entorno, crea un archivo `.env`:

```env
REACT_APP_API_URL=https://api.autoconsultpro.com
REACT_APP_VERSION=1.0.0
```

## 📁 Estructura de Archivos para Deploy

```
web-forceUp/
├── public/
│   ├── index.html
│   ├── logo.jpg
│   └── manifest.json
├── src/
│   ├── components/
│   ├── context/
│   ├── locales/
│   ├── App.js
│   ├── App.css
│   └── index.js
├── .gitignore
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── README.md
├── DEPLOY.md
└── deploy.sh
```

## 🎨 Personalización

### Colores del Tema

Los colores principales del proyecto son:
- **Negro**: `#000000`
- **Blanco**: `#ffffff`
- **Naranja**: `#f97316`
- **Naranja Oscuro**: `#ea580c`

### Configuración de Idiomas

Los archivos de traducción están en:
- `src/locales/es.js` - Español
- `src/locales/en.js` - Inglés

## 🚨 Solución de Problemas

### Error: "Permission denied"
```bash
# Verificar permisos del repositorio
git remote -v
# Asegúrate de tener acceso de escritura
```

### Error: "Build failed"
```bash
# Limpiar cache
npm cache clean --force
rm -rf node_modules
npm install
```

### Error: "GitHub Pages not working"
1. Verifica que la rama `gh-pages` existe
2. Asegúrate de que GitHub Pages esté habilitado
3. Revisa la configuración en Settings > Pages

## 📞 Soporte

Si tienes problemas con el deploy:

1. **Revisa los logs** de GitHub Actions
2. **Verifica la configuración** del repositorio
3. **Contacta al equipo**: info@autoconsultpro.com

## 🎉 ¡Listo!

Una vez completado el deploy, tu sitio estará disponible en:
**https://josewalke.github.io/web-forceUp/**

---

**Desarrollado con ❤️ por AutoConsult Pro**
