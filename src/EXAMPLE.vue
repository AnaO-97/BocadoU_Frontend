<script setup>
  import { ref } from "vue"
// import HelloWorld from './components/HelloWorld.vue'
// import TheWelcome from './components/TheWelcome.vue'

  let   data = ref(null);
  const URL  = 'https://jsonplaceholder.typicode.com/users';
  const titles = ["nombre", "username", "correo", "website", "telefono", "direccion"]
  
  const handlerClick = async (event) => {
    data.value = await (fetch(URL).then((res)=>res.json()));
    event.target.disabled = true;
    console.log(data);
  }
</script>

<template>
  <div>
    <h1> Hola mundo </h1>
    <button @click = "handlerClick">
      USERS
    </button>

    <table>
      <thead>
        <tr>
          <th v-for="(title, index) in titles" :key="index">
            {{ title }}
          </th>
        </tr>
      </thead>

      <tbody v-if="data!==null">
        <tr v-for="user of data" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.website }}</td>
          <td>{{ user.phone }}</td>
        </tr>     
      </tbody>
    </table>
  </div>
</template>

<style scoped>
  /* @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }
  } */
</style>
