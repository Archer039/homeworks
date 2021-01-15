<template>
  <div :class="{ search_active: isActive }" class="d-flex justify-content-center">
    <form>
      <label
        v-if="isActive"
        class="text-danger d-block fs-3 fw-bold mb-4"
        for="search"
        >Форма поиска</label
      >
      <input
        v-on:click="isActive = true"
        class="border border-black-50 rounded ps-2"
        type="text"
        name="search"
        id="search"
        placeholder="Поиск"
        autocomplete="off"
      />
      <button
        v-if="isActive"
        v-on:click="isActive = false"
        class="btn btn-danger d-block mt-4"
      >
        Закрыть
      </button>
    </form>
  </div>
</template>


<script>
export default {
  name: "Search",
  data() {
    return {
      isActive: false,
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.search_active {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(90, 90, 90, 0.85);
  z-index: 99;
  
  form {
    position: relative;
    top: 25%;
  }

  #search {
    width: 60vw;
  }
}
</style>
