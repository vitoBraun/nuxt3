export default defineEventHandler(async (event) => {
  return [
    { id: "programming", title: "Программирование" },
    { id: "investment", title: "Инвестиции" },
    { id: "ai", title: "AI" },
    { id: "humour", title: "Юмор" },
    { id: "lifestyle", title: "Жизнь" },
  ];
});
