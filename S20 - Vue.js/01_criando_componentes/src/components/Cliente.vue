<template>
  <div id="cliente">
    <h2 id="cliente-nome">Cliente aqui! Componente aqui.</h2>
    <h3>Descrição do cliente aqui.</h3>
    <hr />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* scoped -> apenas este arquivo */
#cliente {
  color: white;
  background: green;
  max-width: 300px;
  max-height: 120px;
}

#cliente-nome {
  color: black;
}
</style>
