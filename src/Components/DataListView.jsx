import React from "react";

function DataListView() {
  const list = [
    {
      id: 2208287,
      desc: "鄞州：家有富矿，博物馆的美好力量，你get到了吗？ “21世纪的博物馆拥有巨大的",
      title: "果小桃",
    },
    {
      id: 2208760,
      desc: "梅里雪山北坡|我的第二次重装徒步·附攻略1 篇1⃣️ \t 字数限制🚫详细攻略会分",
      title: "小蘑猪zcy",
    },
    {
      id: 2208882,
      desc: "☀️巴塞罗那观赏日落的好去处 巴塞罗那，一座地中海城市，融合了罗马、中世纪的风格",
      title: "Go旅城通票",
    },
  ];

  return (
    <ul>
      {list.map((item, index) => {
        return (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </li>
        );
      })}
    </ul>
  );

  return (
    <div className="DataListView">
      <h3>复杂列表渲染</h3>
      <ul>
        {list.map((item, index) => {
          return (
            <li key={item.id}>
              {item.title}
              <p>{item.desc}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default DataListView;
