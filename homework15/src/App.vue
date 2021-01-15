<template>
  <header>
    <div class="header container rounded-3 mt-4 shadow-sm">
      <div class="row row-cols-1 row-cols-md-3 m-2 m-md-0 align-items-center">
        <div
          class="col d-flex align-items-center justify-content-center justify-content-md-start"
        >
          <img class="logo rounded-circle" src="./assets/img/logo.jpg" alt="логотип" />
          <p class="m-0 fw-bold lh-1 fs-5">
            itProger <br /><span class="text-danger">Blog</span>
          </p>
        </div>
        <div class="col" id="search-form"></div>
        <div class="col m-2 m-md-0">
          <nav class="d-flex justify-content-center justify-content-md-end">
            <button class="rounded border border-black-50 me-1">Главная</button>
            <button class="rounded border border-black-50 me-1">Статьи</button>
            <button class="rounded border border-black-50">Контакты</button>
          </nav>
        </div>
      </div>
    </div>
  </header>
  <main>
    <div class="fixed-article container mt-4 rounded-1 text-white p-3 p-md-5">
      <div class="row">
        <div class="col-md">
          <h2 class="h1 fw-light">3 основных сферы применения языка Python</h2>
          <p>
            До начала активного изучения любого языка программирования правильно
            было бы задуматься о сферах его примененияю Мы расскажем про 3 самые
            популярные сферы применения языка Python.
          </p>
        </div>
        <div class="col-md">
          <img
            class="border border-4 border-white rounded w-100"
            src="./assets/img/mozrust.png"
            alt="image"
          />
        </div>
      </div>
      <div>
        <button class="btn btn-danger mt-3 mt-md-0">Читать дальше</button>
      </div>
    </div>

    <!-- Статьи -->
    <Articles></Articles>
  </main>
  <footer>
    <div
      class="footer container shadow mb-0 rounded border border-3 border-bottom-0 border-muted mt-5"
    >
      <p class="mb-0 mt-3 text-center fw-bold">Все права защищены &copy;</p>
    </div>
  </footer>
</template>

<script>
import Articles from "./components/Articles";

export default {
  name: "App",
  components: {
    Articles,
  },
};
</script>

<style>
@import url(./css/bootstrap.min.css);
@import url(./scss/main.scss);
</style>
