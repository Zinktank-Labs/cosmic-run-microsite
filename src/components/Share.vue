<template>
  <div class="text-center space-y-4">
    <h1 class="text-4xl text-lime-400 font-orbitron">
      {{ t.comingSoon }}
    </h1>

    <div class="share-buttons flex flex-wrap justify-center gap-4 mt-6">
      <a
        :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(t.tweetText)}${url}`"
        target="_blank"
        >{{ t.shareX }}</a
      >
      <a
        :href="`https://www.facebook.com/sharer/sharer.php?u=${url}`"
        target="_blank"
        >{{ t.shareFacebook }}</a
      >
      <a
        :href="`mailto:?subject=${encodeURIComponent(t.emailSubject)}&body=${encodeURIComponent(t.emailBody)} ${url}`"
        >{{ t.email }}</a
      >
      <button @click="copyLink">{{ t.copyLink }}</button>
    </div>
  </div>
</template>

<script setup>
import { inject } from "vue";

const t = inject("t");
const url = "https://cosmicrun.zinktanklabs.com";

function copyLink() {
  navigator.clipboard
    .writeText(url)
    .then(() => alert(t.linkCopied));
}
</script>

<style scoped>
.cta {
  background: var(--accent-color);
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-weight: bold;
  transition: background 0.3s;
}
.cta:hover {
  background: #ff5c94;
}
.share-buttons a,
.share-buttons button {
  border: 1px solid var(--accent-color);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background: transparent;
  color: var(--text-light);
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
}
.share-buttons a:hover,
.share-buttons button:hover {
  background-color: var(--accent-color);
}
</style>