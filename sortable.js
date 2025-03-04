
let loadData
const drawtable = () => {
    let namecoltable = [
        "Icon",
        "Name",
        "Full Name",
        "Powerstats",
        "Race",
        "Gender",
        "Height",
        "Weight",
        "Place Of Birth",
        "Alignment"
    ];

    const container = document.createElement("div");
    container.classList.add("container");
    const header=document.createElement('div')
    header.classList.add('header')
    const title=document.createElement('h1')
    title.textContent="sortable"
    header.appendChild(title)
    const input=document.createElement('input')
    input.setAttribute("type","search")
    header.appendChild(input)
    const button=document.createElement('input')
    input.setAttribute("type","submit")
    header.appendChild(button)
    container.appendChild(header)
    const table = document.createElement("table")
    table.classList.add("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    namecoltable.forEach((namecol) => {
        let th = document.createElement("th");
        th.textContent = namecol;
        tr.appendChild(th);
    });
    thead.appendChild(tr)
    table.appendChild(thead);
    const tbody=document.createElement("tbody")
   table.appendChild(tbody) 
    container.appendChild(table);
    document.body.appendChild(container);
};
async function fetchdata(){
    const respone=await fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json")
if(!respone.ok){

}
    const data=await respone.json()
    console.log(data);
    
    
}
const disply=()=>{
    console.log(loadData);

}
export { drawtable ,fetchdata,disply };
