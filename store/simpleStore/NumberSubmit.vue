<template>
  <div>
    <input v-model="newNumber" type="number" />
    <button v-on:click="pushNewNumber(newNumber)">
      Add new number
    </button>
  </div>
</template>

<script>
import {store} from './store.js';

export default {
  name: 'NumberSubmit',
  data () : {
    return {
      newNumber: 0,
    }
  },
  methods: {
    pushNewNumber(newNumber) {
      store.pushNewNumber(newNumber);
    }
  }
}

</script>