<template>
  <h1>Registro</h1>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

<script>
export default {
  data() {
    return {
      newName: {
        firstName: '',
        lastName: ''
      },
      names: []
    }
  },
  methods: {
    addName() {
      this.names.push(this.newName);
      this.newName = {
        firstName: '',
        lastName: ''
      };
    },
    updateName(name, index) {
      this.names[index] = name;
    },
    deleteName(index) {
      this.names.splice(index, 1);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
