<template>
  <div>
    <button @click="handleClick">Filter</button>
    <div v-show="!isFilter" v-for="(item, index) in data" :key=index>
      {{ item.age }}
      {{ item.firstName }}
      {{ item.lastName }}
    </div>
    <div v-show="isFilter" v-for="(item, index) in filterData" :key=index>
      {{ item.age }}
      {{ item.firstName }}
      {{ item.lastName }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component({
  components: {
  },
})
export default class Userlist extends Vue {
  
  data = []

  filterData = []

  isFilter = false

  handleClick() {
    this.isFilter = !this.isFilter
  }

  filter() {
    this.data.forEach((person) => {
      const nameLength = person.firstName + ' ' + person.lastName;
      if(person.age >= 20 && person.age < 30 && nameLength.length >= 10 ){
        this.filterData.push(person);
      }
    })
  }

  async mounted() {
    axios.defaults.headers.common.Authorization = localStorage.token
    const response = await axios.get('http://opn.mobiusloop.cc/api/users')
    const { data } = response
    this.data = data
    this.filter()
  }
}
</script>
