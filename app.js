const locations = [
  {
    id: 1,
    title: "我房間書桌右手邊靠牆半透明盒子",
    image: "assets/medicine-locations/1.png",
    description:
      "基本常備藥位置。通常會有 paracetamol、ibuprofen、脹氣藥等。",
    items: [
      ["止痛退燒", "paracetamol / acetaminophen，也包含 paracemotal 拼字搜尋"],
      ["止痛消炎", "ibuprofen"],
      ["脹氣", "一般脹氣藥"],
    ],
    keywords: [
      "paracetamol",
      "paracemotal",
      "acetaminophen",
      "普拿疼",
      "撲熱息痛",
      "止痛",
      "退燒",
      "發燒",
      "ibuprofen",
      "布洛芬",
      "消炎",
      "脹氣",
      "gas",
      "bloating",
    ],
  },
  {
    id: 2,
    title: "我房間書桌右手邊小半透明收納盒",
    image: "assets/medicine-locations/2.png",
    description:
      "半透明盒子前方的小收納盒。主要是腸胃藥組，有 Windeze、Buscon / Buscopan，以及意外消脹氣有效的 Moclam。",
    items: [
      ["腸胃", "Windeze、Buscon / Buscopan"],
      ["脹氣", "Moclam 意外有效"],
    ],
    keywords: [
      "windeze",
      "buscon",
      "buscopan",
      "moclam",
      "腸胃",
      "胃痛",
      "肚子痛",
      "腹痛",
      "胃痙攣",
      "脹氣",
      "消脹氣",
      "gas",
      "bloating",
      "stomach",
      "cramp",
    ],
  },
  {
    id: 3,
    title: "我房間書桌桌上黑盒",
    image: "assets/medicine-locations/3.png",
    description:
      "常用藥居家盒。包括基本 sertraline 和 propranolol。",
    items: [
      ["常用藥", "sertraline"],
      ["心律錠", "propranolol"],
    ],
    keywords: [
      "sertraline",
      "舍曲林",
      "左洛復",
      "zoloft",
      "propranolol",
      "心律錠",
      "心得安",
      "beta blocker",
      "貝他阻斷劑",
      "心悸",
      "焦慮",
      "常用藥",
      "居家盒",
    ],
  },
  {
    id: 4,
    title: "我房間包包內白盒",
    image: "assets/medicine-locations/4.png",
    description:
      "常用藥外出盒。包括基本 sertraline 和 propranolol。",
    items: [
      ["常用藥", "sertraline"],
      ["心律錠", "propranolol"],
    ],
    keywords: [
      "sertraline",
      "舍曲林",
      "左洛復",
      "zoloft",
      "propranolol",
      "心律錠",
      "心得安",
      "beta blocker",
      "心悸",
      "焦慮",
      "外出盒",
      "包包",
    ],
  },
  {
    id: 5,
    title: "我房間包包夾層",
    image: "assets/medicine-locations/5.png",
    description: "綠油精放在包包夾層。",
    items: [["外用", "綠油精"]],
    keywords: ["綠油精", "green oil", "薄荷", "頭暈", "暈車", "蚊蟲", "外用", "包包"],
  },
  {
    id: 6,
    title: "我房間白色櫃子抽屜第一層",
    image: "assets/medicine-locations/6.png",
    description:
      "口罩、體溫計、藥布、頭痛貼布、暖暖包、定時服用的維他命，以及我或你的常用藥，多數是我的。",
    items: [
      ["量測防護", "口罩、體溫計"],
      ["外用照護", "藥布、頭痛貼布、暖暖包"],
      ["日常", "定時服用的維他命、常用藥"],
    ],
    keywords: [
      "口罩",
      "mask",
      "體溫計",
      "thermometer",
      "藥布",
      "貼布",
      "頭痛貼布",
      "暖暖包",
      "heat pack",
      "維他命",
      "vitamin",
      "常用藥",
    ],
  },
  {
    id: 7,
    title: "我房間白色櫃子抽屜第二層",
    image: "assets/medicine-locations/7.png",
    description:
      "Moclam、sumatriptan 偏頭痛藥放在靠左邊的 Brita 濾水器紙盒裡。同時裡面也有 sertraline 和 propranolol。",
    items: [
      ["偏頭痛", "sumatriptan，靠左邊的 Brita 濾水器紙盒裡"],
      ["放鬆 / 脹氣", "Moclam"],
      ["常用藥", "sertraline、propranolol"],
    ],
    keywords: [
      "sumatriptan",
      "舒馬曲坦",
      "偏頭痛",
      "migraine",
      "頭痛",
      "headache",
      "moclam",
      "放鬆",
      "脹氣",
      "sertraline",
      "propranolol",
      "心律錠",
      "心得安",
      "brita",
      "白色櫃子",
      "第二層",
    ],
  },
  {
    id: 8,
    title: "客廳烤箱下面第一層開放式紙盒",
    image: "assets/medicine-locations/8.png",
    description:
      "比較重要且常會用到的東西：感冒藥、日本過敏藥、OK 繃。旁邊還有熱水袋、肩頸熱敷袋和敷眼睛的。",
    items: [
      ["感冒 / 過敏", "感冒藥、日本過敏藥"],
      ["急救", "OK 繃"],
      ["熱敷", "熱水袋、肩頸熱敷袋、敷眼睛的"],
    ],
    keywords: [
      "感冒",
      "cold",
      "flu",
      "咳嗽",
      "流鼻水",
      "喉嚨痛",
      "過敏",
      "allergy",
      "日本過敏藥",
      "ok繃",
      "ok蹦",
      "bandage",
      "創可貼",
      "熱水袋",
      "熱敷",
      "肩頸",
      "眼睛",
    ],
  },
  {
    id: 9,
    title: "客廳右邊有蓋式紙盒",
    image: "assets/medicine-locations/9.png",
    description:
      "比較用不到，或是沒在用的藥。平常沒事應該不會用到；如果真的找不到，可以去這裡翻一翻。",
    items: [["備用", "不常用或目前沒在用的藥"]],
    keywords: ["找不到", "備用", "不常用", "沒在用", "其他", "藥", "backup", "unused"],
  },
];

const directMatches = [
  {
    queries: ["頭痛", "headache", "偏頭痛", "migraine", "sumatriptan", "舒馬曲坦"],
    locationIds: [7],
  },
  {
    queries: ["心律錠", "propranolol", "心得安", "心悸", "beta blocker", "貝他阻斷劑"],
    locationIds: [3, 4, 7],
  },
  {
    queries: ["腸胃", "胃痛", "肚子痛", "腹痛", "胃痙攣", "stomach", "cramp", "buscon", "buscopan", "windeze"],
    locationIds: [2],
  },
  {
    queries: ["脹氣", "消脹氣", "gas", "bloating", "moclam"],
    locationIds: [2, 7, 1],
  },
  {
    queries: ["sertraline", "舍曲林", "左洛復", "zoloft"],
    locationIds: [3, 4, 7],
  },
  {
    queries: ["感冒", "cold", "flu", "過敏", "allergy"],
    locationIds: [8],
  },
];

const searchInput = document.querySelector("#medicine-search");
const clearButton = document.querySelector("#clear-search");
const resultsRoot = document.querySelector("#results");
const resultCount = document.querySelector("#result-count");
const template = document.querySelector("#result-card-template");

function normalize(value) {
  return value
    .toString()
    .trim()
    .toLocaleLowerCase()
    .replace(/\s+/g, " ");
}

function compact(value) {
  return normalize(value).replace(/[\s\-_/]+/g, "");
}

function getDirectMatches(query) {
  const normalized = normalize(query);
  const compacted = compact(query);
  const match = directMatches.find((entry) =>
    entry.queries.some((term) => {
      const normalizedTerm = normalize(term);
      return normalized === normalizedTerm || compacted === compact(term);
    }),
  );

  if (!match) return [];
  return match.locationIds.map((id) => locations.find((location) => location.id === id));
}

function scoreLocation(location, query) {
  const normalized = normalize(query);
  const compacted = compact(query);
  const searchableParts = [
    location.id,
    location.title,
    location.description,
    ...location.keywords,
    ...location.items.flat(),
  ];

  let score = 0;
  for (const part of searchableParts) {
    const normalizedPart = normalize(part);
    const compactedPart = compact(part);
    if (normalizedPart === normalized || compactedPart === compacted) score += 10;
    if (normalizedPart.includes(normalized) || compactedPart.includes(compacted)) score += 4;
    if (normalized.includes(normalizedPart) && normalizedPart.length > 1) score += 2;
  }
  return score;
}

function search(query) {
  if (!query.trim()) return locations;

  const direct = getDirectMatches(query).filter(Boolean);
  if (direct.length) return direct;

  return locations
    .map((location) => ({ location, score: scoreLocation(location, query) }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score || a.location.id - b.location.id)
    .map((entry) => entry.location);
}

function render(results, query) {
  resultsRoot.replaceChildren();

  if (query.trim()) {
    resultCount.textContent = results.length
      ? `找到 ${results.length} 個位置`
      : "沒有找到符合的位置，試試藥名、症狀或「找不到」。";
  } else {
    resultCount.textContent = "全部 9 個藥品位置";
  }

  if (!results.length) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.textContent = "沒有符合的結果。可以搜尋「找不到」查看備用藥箱。";
    resultsRoot.append(empty);
    return;
  }

  for (const location of results) {
    const card = template.content.firstElementChild.cloneNode(true);
    const image = card.querySelector("img");
    const number = card.querySelector(".location-number");
    const title = card.querySelector("h2");
    const description = card.querySelector(".location-text");
    const list = card.querySelector(".medicine-list");

    image.src = location.image;
    image.alt = `${location.id}. ${location.title}`;
    number.textContent = location.id;
    title.textContent = location.title;
    description.textContent = location.description;

    for (const [term, detail] of location.items) {
      const row = document.createElement("div");
      const dt = document.createElement("dt");
      const dd = document.createElement("dd");
      dt.textContent = term;
      dd.textContent = detail;
      row.append(dt, dd);
      list.append(row);
    }

    resultsRoot.append(card);
  }
}

function updateResults() {
  const query = searchInput.value;
  render(search(query), query);
}

searchInput.addEventListener("input", updateResults);

clearButton.addEventListener("click", () => {
  searchInput.value = "";
  searchInput.focus();
  updateResults();
});

document.querySelectorAll("[data-query]").forEach((button) => {
  button.addEventListener("click", () => {
    searchInput.value = button.dataset.query;
    searchInput.focus();
    updateResults();
  });
});

updateResults();
