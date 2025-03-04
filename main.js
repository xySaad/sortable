import { ce, div, input, th } from "./utils/createElement.js";
const url="https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json"
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

const Table = (heroes) => {
  console.log(heroes);

  return div("container").append(
    div("title", "Sortable"),
    div("header").append(
      input("search", "find your hero"),
      div("submit", "submit")
    ),
    ce("table").append(
      ce("thead").append(ce("tr").append(...columnNames.map(th))),
      ce("tbody").append(...heroes.map)
    )
  );
}

const main = () => {
  fetch(url).then(resp=>resp.json()).then(data=>document.body.append(Table(data)))
  
};

main();
