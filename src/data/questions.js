const data = [
  {
    question: "O que é Sinonímia?",
    options: [
      "são as palavras iguais na escrita e diferentes na pronúncia",
      "É a relação que se estabelece entre duas palavras ou mais que apresentam significados iguais ou semelhantes",
      "É a propriedade que uma mesma palavra tem de apresentar vários significados",
      "É a relação que se estabelece entre duas ou mais palavras que possuem",
    ],
    answer: "É a relação que se estabelece entre duas palavras ou mais que apresentam significados iguais ou semelhantes",
  },
  {
    question: "O que é Paronímia?",
    options: ["são as palavras iguais na pronúncia e diferentes na escrita", "são as palavras iguais na escrita e diferentes na pronúncia", "É a relação que se estabelece entre duas palavras ou mais que apresentam significados diferentes, contrários", "É a relação que se estabelece entre duas ou mais palavras que possuem significados diferentes, mas são muito parecidas na pronúncia e na escrita"],
    answer: "É a relação que se estabelece entre duas ou mais palavras que possuem significados diferentes, mas são muito parecidas na pronúncia e na escrita",
  },
  {
    question: "O que é Antonímia?",
    options: ["É a relação que se estabelece entre duas palavras ou mais que apresentam significados diferentes, contrários", "são as palavras iguais na escrita e diferentes na pronúncia", "É a relação que se estabelece entre duas ou mais palavras que possuem significados diferentes, mas são muito parecidas na pronúncia e na escrita", "É a relação que se estabelece entre duas palavras ou mais que apresentam significados iguais ou semelhantes"],
    answer: "É a relação que se estabelece entre duas palavras ou mais que apresentam significados diferentes, contrários",
  },
  {
    question: "O que são palavras Homógrafas?",
    options: ["apresentam significados diferentes, contrários", "- são as palavras iguais na pronúncia e na escrita", "são as palavras iguais na escrita e diferentes na pronúncia", "palavras que apresentam significados iguais ou semelhantes"],
    answer: "são as palavras iguais na escrita e diferentes na pronúncia",
  },
  {
    question:
      "O que é Homônimia?",
    options: ["são as palavras que apresentam significados diferentes, contrários", "- são as palavras iguais na pronúncia e na escrita", "palavras que possuem significados diferentes, mas são muito parecidas na pronúncia e na escrita", "são as palavras iguais na escrita e diferentes na pronúncia"],
    answer: "- são as palavras iguais na pronúncia e na escrita",
  },
  {
    question:
      "Pronominalize a frase: 'Vi o filme'",
    options: ["Vi-lo", "vi-no", "vi-lho", "vi-o"],
    answer: "vi-o",
  },
  {
    question:
      "Pronominalize a frase: 'Vi o assento'",
    options: ["Vio assento", "vi o assento-o", "vi-o", "assento-o"],
    answer: "vi-o",
  },
  {
    question:
      "Pronominalize a frase: 'lavei as folhas'",
    options: ["lavei-as folhas", "lavei folhas-as", "lavei-as", "folhas-as"],
    answer: "lavei-as",
  },
  {
    question:
      "Pronominalize a frase: 'ontem comi funge'",
    options: ["comi-o funge", "ontem comi-o", "comi-o", "comi-a"],
    answer: "ontem comi-o",
  },
  {
    question:
      "Pronominalize a frase: 'Vou ver o Luís'",
    options: ["vou ve-no", "vou ve-lho", "vou ve-o", "vou ve-lo"],
    answer: "vou ve-lo",
  },
  {
    question:
      "Pronominalize a frase: 'Vou ligar à Leia'",
    options: ["vou liga-la", "vou ligar-la", "liga-a", "vou ligar-la a Leia"],
    answer: "vou liga-la",
  },
  {
    question:
      "Pronominalize a frase: 'Tu contas histórias.'",
    options: ["conta-las", "tu contas-las", "tu conta-las", "conta-las historia"],
    answer: "tu conta-las",
  },
  {
    question:
      "Pronominalize a frase: 'Ele faz os trabalhos de casa'",
    options: ["ele fa-los", "ele faz-los de casa", "ele faz-os de casa", "faz-los"],
    answer: "ele fa-los",
  },
  {
    question:
      "Pronominalize a frase: 'Os alunos viram o filme'",
    options: ["Os alunos vira-no", "Os alunos viram-no", "Os alunos viram-no o filmo", "faz-los"],
    answer: "Os alunos viram-no",
  },


];

export default data;
