const MENU = [
  {
    title: "Café do Dia",
    data: [
      {
        id: "1",
        title: "Café Expresso",
        price: 24.9,
        description:
          "Café expresso feito ao gosto do cliente...",
        cover: require("../../assets/products/cover/8.png"),
        thumbnail: require("../../assets/products/thumbnail/8.png"),
        ingredients: [
          "café expresso de maquina",
        ],
      },
    ],
  },
  {
    title: "Promoções",
    data: [
      {
        id: "2",
        title: "Capuccino",
        price: 34.9,
        description:
          "Aquele capucciono que nossa convecência sabe fazer tão saboroso...",
        cover: require("../../assets/products/cover/2.png"),
        thumbnail: require("../../assets/products/thumbnail/2.png"),
        ingredients: [
            "50g de café solúvel",
            "250g de leite em pó",
            "3 colheres de sopa de chocolate em pó",
            "1 colher de chá de bicarbonato de sódio (é o que dá a consistência cremosa)",
            "1 colher de chá de canela em pó",
            "250g de açúcar ou adoçante a gosto.",
        ],
      },
      {
        id: "3",
        title: "Pingado",
        price: 32.7,
        description:
          "O café com leite que todo brasileiro gosta logo pela manhã...",
        cover: require("../../assets/products/cover/3.png"),
        thumbnail: require("../../assets/products/thumbnail/3.png"),
        ingredients: [
          "café expresso;",
          "leite fresco;",
        ],
      },
      {
        id: "4",
        title: "café com chocolate",
        price: 29.9,
        description:
          "café coado com um delicoso pedaço de chocolate...",
        cover: require("../../assets/products/cover/4.png"),
        thumbnail: require("../../assets/products/thumbnail/4.png"),
        ingredients: [
          "Café coado;",
          "chocolate a escolha do cliente;",
          "chantilly",
        ],
      },
    ],
  },
  {
    title: "Sobremesa",
    data: [
      {
        id: "5",
        title: "Pote de pão de queijo",
        price: 18.9,
        description:
          "Aquele acompanhamento que não pode faltar com seu cafezinho de manhã...",
        cover: require("../../assets/products/cover/pao-de-queijo.png"),
        thumbnail: require("../../assets/products/thumbnail/pao-de-queijo.png"),
        ingredients: [
          "Pão de queijo especial de Minas Gerais",
        ],
      },
      {
        id: "6",
        title: "Cupcake",
        price: 22.9,
        description:
          "Um delicioso Cupcake para adoçar. Escolha o sabor que você gosta...",
        cover: require("../../assets/products/cover/6.png"),
        thumbnail: require("../../assets/products/thumbnail/6.png"),
        ingredients: ["Escolha o sabor;", "Chantilly;"],
      },
    ],
  },
  {
    title: "Bebidas",
    data: [
      {
        id: "7",
        title: "Hmmm, coquinha!",
        price: 6.9,
        thumbnail: require("../../assets/products/thumbnail/coca-cola.png"),
        cover: require("../../assets/products/cover/coca-cola.png"),
        description:
          "Uma coca super gelada para acompanhar o seu super lanche...",
        ingredients: [],
      },
    ],
  },
];

const PRODUCTS = MENU.map((item) => item.data).flat();

const CATEGORIES = MENU.map((item) => item.title);

type ProductProps = (typeof PRODUCTS)[0];

export { MENU, PRODUCTS, CATEGORIES, ProductProps };
