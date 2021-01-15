<template>
  <div class="articles container mt-4">
    <div class="row">

      <!-- Новости -->

      <div id="news" class="news col-md col-md-8">
        <h2 class="text-center text-md-start">Новости</h2>
        <div
          class="article-container d-flex justify-content-between align-items-start flex-wrap"
        >
          <div
            class="card m-1"
            v-for="article in articles"
            :key="article"
            :value="article"
          >
            <img v-bind:src="article.imgSrc" alt="" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">{{ article.title }}</h5>
              <p class="card-text">{{ article.text }}</p>
              <a href="#" class="btn btn-warning">Читать дальше</a>
            </div>
          </div>
        </div>

        <button
          class="btn btn-danger mt-4 position-relative top-0 start-50 translate-middle"
          v-on:click="showMoreArticle()"
        >
          Подгрузить больше
        </button>
      </div>

      <!-- Анонсы -->

      <div class="announcements col-md col-md-4">
        <h2 class="text-center text-md-start">Анонсы</h2>
        <div class="card mt-2">
          <div class="card-body">
            <p class="card-text">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit
              totam repellat, culpa sequi ea enim delectus dolor fugiat
              laudantium, minima vero ullam et? Explicabo, maxime in. Natus unde
              cum repudiandae.
            </p>
          </div>
        </div>
        <div class="card mt-4 bg-info text-white">
          <div class="card-body">
            <img
              src="./../assets/img/android-processor.jpg"
              alt=""
              class="card-img-top border border-4 border-white rounded"
            />
            <p class="card-text mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              aliquid? Quae impedit numquam odio dolores id sint magnam incidunt
              voluptatibus perferendis nemo, vel eum dolorum at cupiditate
              mollitia corporis temporibus!
            </p>
            <a href="" class="btn btn-light">Читать дальше</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Articles",
  data() {
    return {
      show: 4,
      allArticles: [
        {
          imgSrc: require("@/assets/img/articles/UnrealVSUnity.jpg"),
          title: "Сравнение движков Unreal Engine 4 против Unity 5",
          text:
            "Выбрать движок дело не простое, а особенно когда оба очень хороши. В статье мы проведем сравнение двух программ и выясним какой движок использовать именно Вам!",
        },
        {
          imgSrc: require("@/assets/img/articles/porGirl.jpg"),
          title: "7 девушек айтишниц из фильмов и сериалов",
          text:
            "Много ли вы знаете фильмов и сериалов, где главные персонажи это девушки программисты? Мы подобрали 7 фильмов с такой концепцией.",
        },
        {
          imgSrc: require("@/assets/img/articles/devTools.png"),
          title: "11 полезных инструментов для веб-разработчика",
          text:
            "Разработчики постоянно пытаются сделать свою жизнь проще или расширить собственные возможности. Мы подготовили 11 инструментов, которые это обеспечат.",
        },
        {
          imgSrc: require("@/assets/img/articles/deepLearning.jpg"),
          title: "Что такое Deep Learning? Как работает глубокое обучение?",
          text:
            "Как работает глубокое обучение и что оно из себя представляет? В ходе статьи мы рассжадем про Deep Learning и разберемся с его ключевыми понятиями.",
        },
        {
          imgSrc: require("@/assets/img/articles/perl.png"),
          title: "Устаревшие языки, которые уже не стоит изучать?",
          text:
            "Есть много ЯП, которые уже отдили свое, но их все равно продолжают изучать. В этой статье мы расскажем про 5 языков, которые уже точно не стоить изучать, хотя многие до сих пор делают это.",
        },
        {
          imgSrc: require("@/assets/img/articles/rust.jpg"),
          title: "Зачем нужен язык программирования Rust?",
          text:
            "Rust набирает популярность, о при этом многие до сих пор не понимают его ценности и функций. Мы расскажем про основные преимузества языка программирования Rust.",
        },
        {
          imgSrc: require("@/assets/img/articles/C-lang.jpg"),
          title: "Что выбрать C++ или C#? С чего лучше начать?",
          text:
            "Между собой оба языка очень похожи. Статья поможет расставить всё по своим местам.",
        },
        {
          imgSrc: require("@/assets/img/articles/logic.png"),
          title: "3 логические задачи для настоящего программиста",
          text:
            "Компании любят проверять молодых специалистов на различные логические задачи. Мы подобрали три интересные задачи, которые заставят вас задуматься.",
        },
        {
          imgSrc: require("@/assets/img/articles/bitcoin.png"),
          title: "Как создать свою криптовалюту?",
          text:
            "Создание собственной криптовалюты это сложная задача, на короткуюуйдет не мало сил и времени. Мы расскажем вам общий алгоритм!",
        },
        {
          imgSrc: require("@/assets/img/articles/hobby.jpg"),
          title: "ТОП 10: Подборка хобби для программиста",
          text:
            "Мы подобрали 10 хороших хобби чтобы можно было с удовольствием провести время вне работы, а так-же улучшить логические и креативные способности мозга.",
        },
        {
          imgSrc: require("@/assets/img/articles/seo.jpg"),
          title: "CEO-продвижение - верный способ улучшит свой бизнес",
          text:
            "Продвижение сайта это сложная работа, требуюая вложений как денег, так и времени. Мы расскадемпро верные способы CEO-продвижения, позволяющие раскрутить сайт!",
        },
        {
          imgSrc: require("@/assets/img/articles/Django.jpg"),
          title: "10 самых популярных сайтов написанных на Django",
          text:
            "Django набирает популярность и многие крупные коспании используют его для создания веб проектов. Мы подобрали 10 популярных сайтов, написанных на Django",
        },
      ],
      articles: [],
    };
  },
  methods: {
    showMoreArticle() {
      this.show += 4;
      for (let i = this.show - 4; i < this.show; i++) {
        if (this.allArticles[i]) {
          this.articles[i] = this.allArticles[i];
        } else {
          break;
        }
      }
    },
    firstArticles() {
      for (let i = 0; i < 4; i++) {
        this.articles[i] = this.allArticles[i];
      }
    },
  },
  mounted() {
    this.firstArticles();
  },
};
</script>

<style lang="scss">
.articles {
  img {
    height: 100px;
    object-fit: cover;
  }
  .news {
    .card {
      width: 47%;
    }
    button:focus {
      box-shadow: none;
    }
  }
}

@media only screen and (max-width: 767px) {
  .articles {
    .news {
      .card {
        width: 100%;
      }
    }
  }
}
</style>