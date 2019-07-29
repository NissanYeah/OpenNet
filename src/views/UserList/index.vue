<template>
  <div id="app">
    <UserCard/>
  </div>
</template>



<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import UserCard from '@/components/card.vue'

@Component({
  components:{
    UserCard,
  }
})
export default class UserListView extends Vue {

  async created() {
    const { $store: { dispatch } } = this;
    await dispatch('tokenSet');
  }
}
</script>
