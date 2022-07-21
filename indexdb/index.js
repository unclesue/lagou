const users = [
  {
    id: 1,
    username: "009",
    firstName: "James",
    lastName: "Bond",
    password: "foo",
  },
  {
    id: 2,
    username: "0010",
    firstName: "James",
    lastName: "Bond",
    password: "foo",
  }
];
const request = indexedDB.open("admin", 1);

request.onerror = (event) => {
  console.log(`Failed to open: ${event.target.errorCode}`);
};

request.onsuccess = (event) => {
  const db = event.target.result
  const transaction = db.transaction("users", "readwrite");
  const store = transaction.objectStore("users");
  const index = store.index("username");
  const request = index.openCursor(null, "next");

  
  // for (let user of users) {
  //   store.add(user)
  // }

  // // const request = store.get("007");
  request.onerror = (event) => console.log("Did not get the object!");
  request.onsuccess = (event) => console.log(event.target.result);
};

request.onupgradeneeded = (event) => {
  console.log("onupgradeneeded");
  const db = event.target.result;
  // 如果存在则删除当前 objectStore。测试的时候可以这样做
  // 但这样会在每次执行事件处理程序时删除已有数据
  if (db.objectStoreNames.contains("users")) {
    db.deleteObjectStore("users");
  }
  const store = db.createObjectStore("users", { keyPath: "id" });
  store.createIndex("username", "username", { unique: true });
  store.createIndex("firstName", "firstName", { unique: false });
};
