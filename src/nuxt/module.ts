import { defineNuxtModule, addImports } from '@nuxt/kit' // build: external
import type { Import } from 'unimport'
import * as unkit from './imports'

type Libraries = keyof (typeof unkit);
type ExportNames<P extends Libraries = Libraries> = P extends infer P_ ? P_ extends P_ ? keyof ((typeof unkit)[P]) : never : never;

const prefixLib = false
const { camelCase } = unkit.string

// Module options TypeScript inteface definition
export interface ModuleOptions {
  /**
   * Prefix to be added before every imported function
   *
   * @default `use`
   */
  prefix: string;
  /**
   * UnJS libraries that would be required in the project
   *
   * @default ['env', 'object', 'promise', 'string', 'url']
   */
  libraries: (Libraries | [Libraries, Partial<Record<
    ExportNames, // need to infer package name and pass
    Partial<Omit<Import, 'name' | 'from'> & { exclude: boolean }>
  >>])[]
  // exclude: Libraries[]
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'unkit/nuxt',
    configKey: 'unkit'
  },
  // Default configuration options of the Nuxt module
  defaults: {
    prefix: 'use',
    libraries: ['env', 'object', 'promise', 'string', 'url'] // Object.keys(unkit)
  },
  setup (options, _nuxt) {
    options.libraries.forEach((libConfig) => {
      const [libName, libOptions] = Array.isArray(libConfig) ? libConfig : [libConfig, {}]

      Object.keys(unkit[libName]).forEach((name) => {
        const { exclude, ...importConfig } = libOptions[name as ExportNames] || {}

        if (!exclude) {
          addImports({
            name,
            as: camelCase(`${options.prefix}-${
              name === 'default' ? libName : `${prefixLib ? libName : ''}-${name}`
            }`),
            from: libName,
            ...importConfig
          })
        }
      })
    })
  }
})
