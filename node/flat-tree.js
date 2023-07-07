const targetList = [{
    id: "1",
    title: "我是1",
    pId: "0",
    children: [
      {
        id: "1-1",
        title: "我是1-1",
        pId: "1",
        children: [
          {
            id: "1-1-1",
            title: "我是1-1-1",
            pId: "1-1",
            children: [],
          },
        ],
      },
      {
        id: "1-2",
        title: "我是1-2",
        pId: "1",
        children: [],
      },
      {
        id: "1-3",
        title: "我是1-3",
        pId: "1",
        children: [],
      },
    ],
  },
  {
    id: "2",
    key: "2",
    value: "2",
    title: "我是2",
    pId: "",
    children: [],
  },
  {
    id: "3",
    title: "我是3",
    pId: "",
    children: [
      {
        id: "3-1",
        title: "我是3-1",
        pId: "3",
        children: [
          {
            id: "3-1-1",
            title: "我是3-1-1",
            pId: "3-1",
            children: [
              {
                id: "3-1-1-1",
                title: "我是3-1-1-1",
                pId: "3-1-1",
                children: [],
              },
            ],
          },
          {
            id: "3-1-2",
            title: "我是3-1-2",
            pId: "3-1",
            children: [],
          },
        ],
      },
    ],
  },
];

const treeToArray = (data) => {
  return data.reduce((res, item) => {
    const { children, ...i } = item;
    return res.concat(
      i,
      children && children.length ? treeToArray(children) : []
    );
  }, []);
};

console.log('treeToArray(targetList)', treeToArray(targetList))