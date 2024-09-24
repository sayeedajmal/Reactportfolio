import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'SayeedCodes',

  projectId: 'e47owsvd',
  dataset: 'about',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
