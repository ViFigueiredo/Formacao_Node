<template>
  <!-- div: para mais de um elemento no template -->
  <div id="cliente">
    <h2 id="cliente-nome">Cliente - Componente aqui!</h2>
    <h3>Sobre o cliente - Bla bla bla!</h3>
    <hr />
  </div>
</template>

<script>
export default {};
</script>

<!-- scoped: apenas neste componente -->
<style scoped>
#cliente {
  color: goldenrod;
  background-color: brown;
  max-width: 300px;
  height: 200px;
}

#cliente-nome {
  color: white;
}
</style>
