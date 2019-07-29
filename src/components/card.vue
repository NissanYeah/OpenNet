<template>
  <div>
    <button @click="handleClick">Filter</button>
    <div v-if="!isFilter">
      <h1>All Data</h1>
      <div v-for="(item, index) in userData" :key=index>
        {{ item.age }}
        {{ item.firstName }}
        {{ item.lastName }}
      </div>
    </div>
    <div v-else>
      <h1>filter Data</h1>
      <div v-for="(item, index) in filterData" :key=index>
      {{ item.age }}
      {{ item.firstName }}
      {{ item.lastName }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class UserCard extends Vue {
  
  userData = []

  filterData = []

  isFilter = false

  handleClick() {
    this.isFilter = !this.isFilter
  }

  filter() {
    this.userData.forEach((person) => {
      const nameLength = person.firstName + ' ' + person.lastName;
      if(person.age >= 20 && person.age < 30 && nameLength.length >= 10 ){
        this.filterData.push(person);
      }
    })
  }

  async mounted() {
    const response = await axios.get('http://opn.mobiusloop.cc/api/users')
    const { data } = response
    this.userData = data
    this.filter()
  }
}
</script>
