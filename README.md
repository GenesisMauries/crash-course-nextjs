# Getting Started

```js
npx create-next-app@latest my-next-ts-project --typescript
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## React Components

- Server components 
    - Unicamente en el servidor, nunca se envian al cliente (menos JS que procesar)
    - No pueden tener useState o useEffect
    - Son renderizados en el servidor, lo que mejora el rendimiento al enviar menos JavaScript al cliente. 
    - Estos componentes no tienen acceso al estado del navegador ni a eventos del cliente, pero pueden cargar datos desde el servidor antes de enviarlos al cliente.
- Client components
    - Se renderizan en el navegador del cliente. 
    - Tienen acceso a todas las APIs del navegador, como el estado local, eventos y manipulación del DOM. 
    - Estos componentes son más interactivos, pero generalmente se cargan después del primer renderizado.
> [!TIP]
> En resumen:
>
> **Server Component:** Renderizado en el servidor, sin JavaScript 
> en el cliente.
> **Client Component:** Renderizado en el cliente, con acceso al
> DOM y estado del navegador.
>
https://www.youtube.com/watch?v=_EgI9WH8q1A
