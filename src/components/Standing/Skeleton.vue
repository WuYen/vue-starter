<template>
  <div>
    <div v-for="index in [1, 2, 3, 4, 5, 6, 7, 8, 9]" :key="index" class="card">
      <div class="body">
        <div class="title skeleton"></div>
        <div class="title sub ">
          <div class="skeleton"></div>
          <div class="skeleton"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "skeleton",
};
</script>

<style scoped>
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: none;
  border-radius: 0.5rem;
  border-color: #c4c4c4;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px hsla(0, 0%, 76.9%, 0.4);
  margin-top: 20px;
}

.body {
  padding: 1.25rem;
}

.skeleton {
  animation: skeleton-loading 1s linear infinite alternate;
}

@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 80%);
  }

  100% {
    background-color: hsl(200, 20%, 95%);
  }
}

.title.skeleton {
  text-transform: capitalize;
  font-weight: 600;
  width: 100%;
  height: 30px;
  border-radius: 0.25rem;
}

.title.sub {
  display: flex;
}

.title.sub .skeleton {
  margin-top: 10px;
  font-size: 14px;
  width: 100px;
  height: 19px;
  border-radius: 0.25rem;
  margin-right: 10px;
}
</style>
