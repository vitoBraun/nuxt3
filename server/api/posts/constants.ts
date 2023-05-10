import { IPost } from "~/models/Post";

export const postFields = {
  title: { type: "text", label: "Заголовок" },
  content: { type: "text", label: "Содержание" },
  coverUrl: { type: "image", label: "Обложка" },
};

export const posts: IPost[] = [
  {
    id: 1,
    title: "Вывеска",
    content:
      "Бори́с Дми́триевич Пары́гин — советский и российский философ и психолог, один из основоположников социальной психологии в Советском Союзе. Доктор философских ...",
    coverUrl: "pic.jpeg",
  },
  {
    id: 2,
    title: "Вывеска 2",
    content: "THis is content 2",
    coverUrl: "pic.jpeg",
  },
  {
    id: 3,
    title: "Вывеска 2",
    content: "THis is content 2",
    coverUrl: "pic.jpeg",
  },
  {
    id: 4,
    title: "Вывеска 2",
    content: "THis is content 2",
    coverUrl: "pic.jpeg",
  },
  {
    id: 5,
    title: "Вывеска 2",
    content: "THis is content 2",
    coverUrl: "pic.jpeg",
  },
];

export const topics = [
  {
    id: "programming",
    title: "Программирование",
    icon: "solar:programming-bold",
  },
  { id: "investment", title: "Инвестиции", icon: "arcticons:investing" },
  { id: "ai", title: "AI", icon: "game-icons:artificial-intelligence" },
  {
    id: "humour",
    title: "Юмор",
    icon: "fluent-emoji-high-contrast:rolling-on-the-floor-laughing",
  },
  { id: "lifestyle", title: "Жизнь", icon: "arcticons:healthelife" },
];
