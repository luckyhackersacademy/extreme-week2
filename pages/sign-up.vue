<script setup lang="ts">
import { SignUp } from 'vue-clerk';

definePageMeta({
  layout: 'auth',
});
</script>

<template>
  <SignUp sign-in-url="/sign-in" />
</template>
