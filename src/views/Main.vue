<template>
  <div>
    <WText />
    <Softwares />
    <Works />
  </div>
</template>

<script>
import WText from "@/components/WText.vue";
import Softwares from "@/components/Softwares/Softwares.vue";
import Works from "@/components/Works/Works.vue";

export default {
  components: {
    WText,
    Softwares,
    Works,
  },
};
</script>
