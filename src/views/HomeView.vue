
<script setup lang="ts">
import YouTube, {PlayerVars} from 'vue3-youtube';
import { ref } from 'vue';


const youtubeRef = ref<any>(null);

const onReady = () => {
    youtubeRef.value?.playVideo();
    console.log(youtubeRef.value)
};
const playerVars: PlayerVars = {
    autoplay: 1,
    controls:1,
    loop: 1
};

</script>
<template>
  <div class="youtube-design">
  <YouTube 
        height="675"
        width="1200"
        :vars="playerVars"
        src="https://www.youtube.com/watch?v=XXYlFuWEuKI&list=PLMC9KNkIncKtPzgY-5rmhvj7fax8fdxoj" 
        @ready="onReady"
        ref="youtube" />
      </div>
</template>
<style scoped lang="scss">
.youtube-design 
{
  margin: auto;
  justify-content: center;
}
</style>

