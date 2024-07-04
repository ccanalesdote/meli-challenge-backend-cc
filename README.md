# Challenge Meli: Buscador de Productos (Backend)

Este es el backend de la solución al challenge de Mercado Libre. Implementa un API REST que proporciona datos de productos y categorías para el frontend.

El proyecto consta de dos repositorios:

- [Frontend@Challenge Meli](https://github.com/ccanalesdote/meli-challenge-cc) desarrollado en React + Typescript
- [Backend@Challenge Meli](https://github.com/ccanalesdote/meli-challenge-backend-cc) desarrollado con Node y Express

## Tecnologías Utilizadas

- **Node.js:** Entorno de ejecución de JavaScript del lado del servidor.
- **Express:** Framework web minimalista y flexible para Node.js.
- **TypeScript:** Superset de JavaScript que añade tipado estático para mejorar la calidad del código.
- **JSON:** Formato de intercambio de datos utilizado para almacenar y transmitir información.

## Requisitos Previos

- **Node.js y npm:** Asegúrate de tener instalados Node.js y un gestor de paquetes como npm.

- **Frontend:** El backend entrega servicios para que el frontend pueda funcionar correctamente. Debes clonar y ejecutar el frontend desde el siguiente enlace: [meli-challenge-cc](https://github.com/ccanalesdote/meli-challenge-cc)

## Instalación y Uso

1. Clona el repositorio:

```bash
git clone https://github.com/ccanalesdote/meli-challenge-backend-cc.git
cd tu-repositorio
```

2. Instala las dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

## Endpoints

### Buscar Productos (GET /api/items)
Este endpoint permite buscar productos por su título.

### Parámetros de Consulta:

q: **(obligatorio)** Cadena de búsqueda a buscar en los títulos de los productos.

**Respuesta (JSON):**

```JSON
{
  "author": { "name": "Cristian", "lastname": "Canales" },
  "categories": ["Electrónica, Audio y Video", "Celulares", "Samsung", "Galaxy S10"],
  "items": [
    {
      "id": "MLA123456",
      "title": "Smartphone Samsung Galaxy S10",
      "price": {
        "currency": "ARS",
        "amount": 350000,
        "decimals": 0
      },
      "picture": "http://example.jpg",
      "condition": "nuevo",
      "free_shipping": true,
      "location": "Capital Federal"
    },
    /* ... más productos ... */
  ]
}
```

- **author:** Información del autor.
- **categories:** Array con la categoría más repetida entre los resultados.
- **items:** Array de productos que coinciden con la búsqueda, incluyendo detalles como id, título, precio, imagen, condición, envío gratis y ubicación.

### Obtener Detalles de Producto (GET /api/items/:id)
Este endpoint permite obtener los detalles de un producto específico.

### Parámetros de Ruta:

id: **(obligatorio)** ID del producto a buscar.

**Respuesta (JSON):**

```JSON
{
  "author": { "name": "Cristian", "lastname": "Canales" },
  "item": {
    "id": "MLA123456",
    "title": "Smartphone Samsung Galaxy S10",
    "price": {
      "currency": "ARS",
      "amount": 350000,
      "decimals": 0
    },
    "picture": "http://example.jpg",
    "condition": "nuevo",
    "free_shipping": true,
    "location": "Capital Federal",
    "sold_quantity": 10,
    "description": "Descripción detallada del producto...",
    "categories": ["Electrónica, Audio y Video", "Celulares", "Samsung", "Galaxy S10"]
  }
}
```

- **author:** Información del autor.
- **item:** Detalles completos del producto, incluyendo descripción y cantidad vendida.

## Catálogo

Los servicios pueden entregar productos dentro del siguiente catálogo:

- Smartphone Samsung Galaxy S10
- Smartphone Samsung Galaxy S10 Lite
- Smartphone Samsung Galaxy S20
- Televisor LG 43 pulgadas
- Televisor LG 43 pulgadas 4K
- Apple iPod Touch 5g 32gb Azul
- Apple iPod Touch 5g 32gb Rosa (Caja Abierta)
- Apple iPod Touch 32gb Verde
- Apple iPod Touch 4g 32gb Plata

## Licencia

Este proyecto está bajo la Licencia MIT.
