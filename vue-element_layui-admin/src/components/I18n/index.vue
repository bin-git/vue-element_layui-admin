<template>
  <div id="app">
    <label for="locale">locale</label>
    <select v-model="locale">
      <option>en</option>
      <option>ja</option>
    </select>
    <p>message: {{ $t('hello') }}</p>
  </div>
</template>

<script>
export default {
  name: "I18n",
  data() {
    return { locale: "en" };
  },
  watch: {
    locale(val) {
      this.$i18n.locale = val;
    }
  }
};
</script>
