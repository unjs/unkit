<script setup>
import { useUnJSJoinURL, useUnJSKebabCase } from '#imports'

const joinedURL = useUnJSJoinURL('a', '/b', '/c')
const kebabCased = useUnJSKebabCase('kebabCase')
</script>

<template>
  <div>
    Nuxt module playground!
    {{ joinedURL }}
    {{ kebabCased }}
  </div>
</template>
