# Agencia de Viajes

Sitio web de una agencia de viajes con renderizado del lado del servidor. Muestra los viajes disponibles con su detalle (precio, fechas, descripción y cupos) y permite a los visitantes leer y dejar testimoniales, todo respaldado por una base de datos MySQL.

**Demo en línea:** https://agencia-viajes-node-33ra.onrender.com

> El sitio está en el plan gratuito de Render: si lleva un rato sin visitas, la primera carga puede tardar entre 30 y 60 segundos mientras el servicio se reactiva.

Proyecto realizado como parte del curso *Introducción a Node.js* (Udemy), desplegado por mi cuenta como parte de mi portafolio.

## Funcionalidades

- Página de inicio con los próximos viajes y los últimos testimoniales
- Listado de viajes y página de detalle por viaje (URL amigable con `slug`)
- Sección de testimoniales con formulario para enviar uno nuevo
- Página "Nosotros"
- Datos persistidos en MySQL mediante Sequelize

## Stack técnico

- **Node.js** + **Express 5** — servidor y enrutamiento
- **Pug** — motor de plantillas para las vistas
- **Sequelize** + **MySQL** (mysql2) — ORM y base de datos
- **dotenv** — variables de entorno
- **Bootstrap** + CSS propio — estilos
- **Render** (aplicación web) y **Filess.io** (base de datos MySQL) — despliegue

## Estructura del proyecto

```
├── config/          # Conexión a la base de datos (Sequelize)
├── controllers/     # Lógica de cada ruta (páginas y testimoniales)
├── models/          # Modelos Viaje y Testimoniales
├── public/          # Archivos estáticos (CSS e imágenes)
├── routes/          # Definición de rutas
├── views/           # Plantillas Pug (y layouts reutilizables)
└── index.js         # Punto de entrada
```

## Rutas

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/` | Inicio |
| GET | `/nosotros` | Sobre la agencia |
| GET | `/viajes` | Listado de viajes |
| GET | `/viajes/:slug` | Detalle de un viaje |
| GET | `/testimoniales` | Ver testimoniales |
| POST | `/testimoniales` | Guardar un nuevo testimonial |

## Cómo correrlo localmente

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/developer-ortega/agencia-viajes-node.git
   cd agencia-viajes-node
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Crear un archivo `.env` en la raíz (usar `.env.example` como referencia):
   ```
   PORT=4000
   DATABASE_URL=mysql://usuario:contraseña@host:3306/nombre_base_de_datos
   ```

4. Iniciar el servidor en modo desarrollo:
   ```bash
   npm run dev
   ```
   Luego abrir `http://localhost:4000`.

## Despliegue

- **Aplicación:** Render (Web Service), con `npm start` como comando de inicio y `DATABASE_URL` configurada como variable de entorno.
- **Base de datos:** MySQL alojado en Filess.io.
