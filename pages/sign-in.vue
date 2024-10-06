<script setup lang="ts">
import { SignIn } from 'vue-clerk';

definePageMeta({
  layout: 'auth',
});
</script>

<template>
  <SignIn sign-up-url="/sign-up" />
</template>
