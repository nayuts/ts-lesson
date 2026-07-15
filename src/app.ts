// const message: string = "Hello World, TypeScript!";
// console.log(message);

// const message: string = "エラーテスト";

// interface users {
//   name: string;
//   contact: string;
//   email: string;
// }

// 2秒後にTodo一覧を返す関数
function fetchTodos(): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(["買い物", "掃除"]), 2000);
  });
}

// 2秒後にユーザー情報を返す関数
function fetchUser(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => resolve("山田太郎"), 2000);
  });
}
