import { Sandpack } from '@codesandbox/sandpack-react';
import { VUE_TEMPLATE_3} from './vue3-template'
export function PlaygroundHtml({ code, language, ...props }) {
  return (
      <Sandpack template="vue3" files={{
        "/src/App.vue": `<template>
  <div id="app">Hello World</div>
</template>`
      }} theme="dark" options={{
        externalResources: [
          "https://unpkg.com/@tailwindcss/ui/dist/tailwind-ui.min.css",
        ],
        classes: {
          'sp-preview-iframe': {
            background: 'black',
          }
        }
      }}/>
  )
}
