<template>
  <div class="row">
    <div class="col-md-4">
      <label for="email">Correo Electrónico:</label>
      <input type="email" v-model="pqrs.email" id="email" required />
    </div>

    <div class="col-md-4">
      <label for="type">Tipo:</label>
      <select v-model="pqrs.type" id="type">
        <option value="Peticion">Peticion</option>
        <option value="Queja">Queja</option>
        <option value="Reclamo">Reclamo</option>
        <option value="Sugerencia">Sugerencia</option>
      </select>
    </div>

    <div class="col-md-12">
      <label for="description">Descripción:</label>
      <textarea v-model="pqrs.description" id="description" rows="4" required />
    </div>

    <div class="col-md-12">
      <button type="submit" v-on:click="submitForm()">Enviar PQRS</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pqrs: {
        email: "",
        type: "",
        description: "",
      },
      submitted: false,
    };
  },
  methods: {
    submitForm() {
      // Aquí normalmente enviarías los datos al backend
      console.log("PQRS Enviado:", this.pqrs);
      // Limpia el formulario y muestra la confirmación
      this.pqrs.email = "";
      this.pqrs.type = "";
      this.pqrs.description = "";
      this.submitted = true;
    },
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  margin-inline: 20%;
  margin-top: 5%;
}

.col-md-4,
.col-md-12 {
  padding: 10px;
}

input,
select,
textarea {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  padding: 10px;
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px;
}
</style>