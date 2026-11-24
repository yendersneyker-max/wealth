# WEALTH 2.0 — Luxury Edition

Aplicación web de finanzas personales con estética premium, cuatro temas visuales y datos guardados localmente.

## Ejecutar

Requisitos: Node.js 20 o superior y npm.

```bash
npm install
npm run dev
```

Para generar una versión de producción: `npm run build` y después `npm run preview`.

## Instalar y publicar

- La aplicación incluye manifiesto, icono y modo sin conexión básico para instalarla desde un navegador compatible.
- El flujo de GitHub Actions está en `.github/workflows/pages.yml`. Sube esta carpeta a un repositorio nuevo de WEALTH 2.0, usa la rama `main` y en **Settings → Pages** selecciona **GitHub Actions** como origen.
- Los datos siguen guardándose en el almacenamiento local del navegador. Cada navegador y cada origen web mantiene sus propios datos; antes de cambiar de dirección web, exporta una copia desde la configuración de la aplicación.

## Funciones

- Cuatro temas: Luxury, Marfil, Océano y Ciruela. Se cambian desde Ajustes y quedan guardados.
- Patrimonio neto con saldos manuales de cuentas, ahorros, propiedades, inversiones y deudas.
- Movimientos, dictado por voz en navegadores compatibles e importación CSV.
- Presupuestos con categorías prioritarias, metas de ahorro, cierre mensual, gastos recurrentes, viajes y calendario.
- Analítica, sobres, simulador de independencia financiera y asistente local.

Los datos se guardan en este navegador. Apple Pay automático, Face ID y hogares compartidos requieren una aplicación iOS nativa y sincronización segura.
