<template>
  <div class="row justify-content-center align-items-center text-center">
    <div class="col-md-3">
      <div class="card bg-white shadow-sm py-5">
        <div class="d-flex flex-column justify-content-center p-1">
          <h1>
            <i class="fas fa-exclamation-triangle"></i>
            {{ error.statusCode }}
          </h1>
          <p>{{ error.message }}</p>
          <NuxtLink to="/">Go to Home Page</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"]
};
</script>

<style scoped>
.row {
  overflow: hidden;
}

h1 {
  font-size: 32px;
  color: #e83a44;
  font-weight: 800;
  margin-bottom: 20px;
}

p {
  margin-bottom: 20px;
}
.card {
  margin-top: 250px;
}
</style>
