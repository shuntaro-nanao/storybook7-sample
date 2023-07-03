<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
});
const message = ref("")
const showSuccessfulLogin = () => {
  message.value = 'ログイン成功'
};
</script>

<template>
  <div class="login">
    <div>
      <input
        data-testid="email"
        aria-required="true"
        type="email"
      />
    </div>
    <div>
      <input
        data-testid="password"
        aria-required="true"
        type="password"
    />
    </div>
    <div>
      <button
        data-testid="submit"
        type="submit"
        @click="showSuccessfulLogin()"
      >{{ props.label }}</button>
    </div>
    <div>
      {{ message }}
    </div>
  </div>
</template>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
input {
  width: 200px;
}
</style>