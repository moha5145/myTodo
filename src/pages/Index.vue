<template>
  <q-page class="flex-center ">
    <Categorys />
  </q-page>
</template>

<script>
import Categorys from 'src/components/categorys/Categorys.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { Categorys },
  name: 'PageIndex'
})
</script>

