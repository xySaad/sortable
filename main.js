import { ce, div, input, th } from "./utils/createElement.js";

const columnNames = [
  "Icon",
  "Name",
  "Full Name",
  "Powerstats",
  "Race",
  "Gender",
  "Height",
  "Weight",
  "Place Of Birth",
  "Alignment",
];

const Table = (heroes) =>
  div("container").append(
    div("title", "Sortable"),
    div("header").append(
      input("search", "find your hero"),
      div("submit", "submit")
    ),
    ce("table").append(
      ce("thead").append(ce("tr").append(...columnNames.map(th))),
      ce("tbody").append()
    )
  );

async function fetchdata() {
  const respone = await fetch(
    "https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json"
  );
  if (!respone.ok) {
  }
  const data = await respone.json();
  console.log(data);
}

const main = () => {
  document.body.append(Table());
};

main();
