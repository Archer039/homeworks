Vue.createApp({
    data() {
        return {
            show: 4,
            allArticles: [
                {
                    imgSrc: 'img/articles-pic/UnrealVSUnity.jpg',
                    title: 'Сравнение движков Unreal Engine 4 против Unity 5',
                    text: 'Выбрать движок дело не простое, а особенно когда оба очень хороши. В статье мы проведем сравнение двух программ и выясним какой движок использовать именно Вам!'
                },
                {
                    imgSrc: 'img/articles-pic/porGirl.jpg',
                    title: '7 девушек айтишниц из фильмов и сериалов',
                    text: 'Много ли вы знаете фильмов и сериалов, где главные персонажи это девушки программисты? Мы подобрали 7 фильмов с такой концепцией.'
                },
                {
                    imgSrc: 'img/articles-pic/devTools.png',
                    title: '11 полезных инструментов для веб-разработчика',
                    text: 'Разработчики постоянно пытаются сделать свою жизнь проще или расширить собственные возможности. Мы подготовили 11 инструментов, которые это обеспечат.'
                },
                {
                    imgSrc: 'img/articles-pic/deepLearning.jpg',
                    title: 'Что такое Deep Learning? Как работает глубокое обучение?',
                    text: 'Как работает глубокое обучение и что оно из себя представляет? В ходе статьи мы рассжадем про Deep Learning и разберемся с его ключевыми понятиями.'
                },
                {
                    imgSrc: 'img/articles-pic/perl.png',
                    title: 'Устаревшие языки, которые уже не стоит изучать?',
                    text: 'Есть много ЯП, которые уже отдили свое, но их все равно продолжают изучать. В этой статье мы расскажем про 5 языков, которые уже точно не стоить изучать, хотя многие до сих пор делают это.'
                },{
                    imgSrc: 'img/articles-pic/rust.jpg',
                    title: 'Зачем нужен язык программирования Rust?',
                    text: 'Rust набирает популярность, о при этом многие до сих пор не понимают его ценности и функций. Мы расскажем про основные преимузества языка программирования Rust.'
                },
                {
                    imgSrc: 'img/articles-pic/C-lang.jpg',
                    title: 'Что выбрать C++ или C#? С чего лучше начать?',
                    text: 'Между собой оба языка очень похожи. Статья поможет расставить всё по своим местам.'
                },
                {
                    imgSrc: 'img/articles-pic/logic.png',
                    title: '3 логические задачи для настоящего программиста',
                    text: 'Компании любят проверять молодых специалистов на различные логические задачи. Мы подобрали три интересные задачи, которые заставят вас задуматься.'
                },{
                    imgSrc: 'img/articles-pic/bitcoin.png',
                    title: 'Как создать свою криптовалюту?',
                    text: 'Создание собственной криптовалюты это сложная задача, на короткуюуйдет не мало сил и времени. Мы расскажем вам общий алгоритм!'
                },
                {
                    imgSrc: 'img/articles-pic/hobby.jpg',
                    title: 'ТОП 10: Подборка хобби для программиста',
                    text: 'Мы подобрали 10 хороших хобби чтобы можно было с удовольствием провести время вне работы, а так-же улучшить логические и креативные способности мозга.'
                },
                {
                    imgSrc: 'img/articles-pic/seo.jpg',
                    title: 'CEO-продвижение - верный способ улучшит свой бизнес',
                    text: 'Продвижение сайта это сложная работа, требуюая вложений как денег, так и времени. Мы расскадемпро верные способы CEO-продвижения, позволяющие раскрутить сайт!'
                },
                {
                    imgSrc: 'img/articles-pic/Django.jpg',
                    title: '10 самых популярных сайтов написанных на Django',
                    text: 'Django набирает популярность и многие крупные коспании используют его для создания веб проектов. Мы подобрали 10 популярных сайтов, написанных на Django'
                },
            ],
            articles: []
        }
    },
    methods: {
        showMoreArticle() {
            this.show += 4;
            for(let i= this.show - 4; i < this.show; i++){
                if(this.allArticles[i]){
                    this.articles[i] = this.allArticles[i];
                }
                else {
                    break
                }
            }
        },
        firstArticles() {
            for(let i=0; i < 4; i++) {
                this.articles[i] = this.allArticles[i]
            };
        }
    },
    mounted() {
        this.firstArticles()
    },
}).mount('#news')



