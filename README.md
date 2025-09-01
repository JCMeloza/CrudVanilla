# CRUD en JavaScript Vanilla

Este proyecto es una implementación de un CRUD (Create, Read, Update, Delete) utilizando JavaScript vanilla y la API JSONPlaceholder. La aplicación permite gestionar usuarios de manera sencilla y eficiente sin necesidad de frameworks.

## Características

- ✨ Creación de nuevos usuarios
- 📖 Lectura de usuarios existentes
- 🔄 Actualización de usuarios
- 🗑️ Eliminación de usuarios
- 🎯 Validación de formularios
- 🌐 Integración con JSONPlaceholder API

## Tecnologías Utilizadas

- JavaScript Vanilla
- Vite (como bundler)
- JSONPlaceholder API
- HTML5
- CSS3

## Estructura del Proyecto

```
nuevoCrud/
├── src/
│   ├── api.js         # Funciones para interactuar con la API
│   ├── crud.js        # Lógica principal del CRUD
│   ├── main.js        # Punto de entrada de la aplicación
│   └── style.css      # Estilos de la aplicación
├── public/
│   └── vite.svg
├── index.html
├── package.json
└── vite.config.js
```

## Funcionalidades

### API (api.js)
- `getUsers()`: Obtiene la lista de usuarios
- `deleteUsers(id)`: Elimina un usuario específico
- `updateUser(user)`: Crea o actualiza un usuario

### CRUD (crud.js)
- Renderizado de usuarios
- Manejo de formularios
- Operaciones CRUD
- Validación de campos
- Gestión de estado de edición

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/JCMeloza/CrudVanilla.git
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## Uso

1. La aplicación mostrará una lista de usuarios existentes
2. Para crear un usuario:
   - Rellena los campos del formulario
   - Presiona el botón de enviar
3. Para editar un usuario:
   - Haz clic en el botón "Editar" del usuario
   - Modifica los campos en el formulario
   - Presiona el botón de enviar
4. Para eliminar un usuario:
   - Haz clic en el botón "Eliminar" del usuario correspondiente

## Autor

- **Nombre:** JCarlos
- **GitHub:** [JCMeloza](https://github.com/JCMeloza)
- **Correo Electrónico:** melozajuancarlos@gmail.com

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue primero para discutir los cambios que te gustaría realizar.
