import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Vapora.app",
    short_name: "Vapora",
    description: "Calculadoras de anestesia para profesionales",

    // scope define qué se considera «dentro de la app». Sin esto, iOS abre
    // cualquier navegación en su visor incrustado y se pierde la pantalla completa.
    scope: "/",
    start_url: "/app",

    display: "standalone",
    orientation: "portrait",
    background_color: "#ffffff",
    theme_color: "#ffffff",

    icons: [
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
      { src: "/icon.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}