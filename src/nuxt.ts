import { defineNuxtModule, addImports } from '@nuxt/kit'
import { version, exports as pathExports } from '../package.json'
// import { camelCase } from './string'

type Library<T = keyof typeof pathExports> = Exclude<T, './nuxt'> extends `./${infer R}` ? R : T;

export interface ModuleOptions {
  /**
   * Prefix to be added before every package
   *
   * @default `$un`
   */
  prefix: string;
  /**
   * UnJS libraries that would be required in the project
   *
   * @default ['env', 'object', 'promise', 'string', 'url']
   */
  libraries: (Library | [Library, Record<string, any>])[];

  // exclude: Libraries[]
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'unkit/nuxt',
    version,
    configKey: 'unkit'
  },
  defaults: {
    prefix: '$un',
    libraries: ['env', 'object', 'promise', 'string', 'url'] // Object.keys(pathExports)
  },
  setup (options, _nuxt) {
    options.libraries.forEach((libConfig) => {
      const [libName, libOptions] = Array.isArray(libConfig) ? libConfig : [libConfig, {}]

      addImports({
        name: '*', // libName,
        as: `${options.prefix}${libName}`, // camelCase()
        from: `unkit/${libName}`,
        ...libOptions
      })
    })
  }
})

declare module '@nuxt/schema' {
  interface NuxtConfig { ['unkit']?: Partial<ModuleOptions> }
  interface NuxtOptions { ['unkit']?: ModuleOptions }
}
