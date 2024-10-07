import adapter from "@sveltejs/adapter-auto";
import sveltePreprocess from "svelte-preprocess";

export default {
  preprocess: sveltePreprocess({
    // Habilitamos SCSS (también puede ser Sass si prefieres usar la sintaxis sin corchetes)
    scss: {
      //   prependData: `@import 'src/styles/variables.scss';`, // Opcional: para importar variables globales en cada archivo
    },
  }),

  kit: {
    adapter: adapter(),
    // otras configuraciones
  },
};
