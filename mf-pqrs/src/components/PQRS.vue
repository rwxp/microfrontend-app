<template>
  <div>
    <h1>Registro de PQRS</h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="email">Correo Electrónico:</label>
        <input type="email" v-model="pqrs.email" id="email" required>
      </div>
      <div>
        <label for="type">Tipo:</label>
        <select v-model="pqrs.type" id="type">
          <option value="Peticion">Peticion</option>
          <option value="Queja">Queja</option>
          <option value="Reclamo">Reclamo</option>
          <option value="Sugerencia">Sugerencia</option>
        </select>
      </div>
      <div>
        <label for="description">Descripción:</label>
        <textarea v-model="pqrs.description" id="description" rows="4" required></textarea>
      </div>
      <div>
        <button type="submit">Enviar PQRS</button>
      </div>
    </form>
    <div v-if="submitted">
      <h2>¡PQRS Enviado!</h2>
      <p>Correo: {{ pqrs.email }}</p>
      <p>Tipo: {{ pqrs.type }}</p>
      <p>Descripción: {{ pqrs.description }}</p>
    </div>
  </div>
</template>

