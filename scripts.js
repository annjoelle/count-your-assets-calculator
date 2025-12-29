const calculateBtn = document.getElementById("calculate-btn");

const data = [
    { card: "Baseball Card", value: 5000 },
    { card: "Cash under the Mattress", value: 5000 },
    { card: "Piggy Bank", value: 5000 },
    { card: "Stamp Collection", value: 5000 },
    { card: "Bank Account", value: 10000 },
    { card: "Coins Collection", value: 10000 },
    { card: "Stocks", value: 10000 },
    { card: "Classic Car", value: 15000 },
    { card: "Jewels", value: 15000 },
    { card: "Home", value: 20000 },
    { card: "Silver", value: 25000 },
    { card: "Gold", value: 50000 }
]

const values = document.getElementsByClassName("value");
const itemsTotal = document.getElementsByClassName("item-total");
const totalCell = document.getElementById("total");

document.querySelectorAll(".count").forEach(input => {
        
    input.addEventListener("click", () => {
        const inputs = document.getElementsByClassName("count");
        const counts = [];

        let totalAssets = 0;
        for (let i = 0; i < inputs.length; i++) {
            const count = inputs[i].value;
            counts.push(count)
        }

        for (let i = 0; i < counts.length; i++) {
                        
            const total = Number(values[i].textContent.replace(",","")) * counts[i];
            const totalStr = String(total);
            itemsTotal[i].textContent = totalStr.length === 1 ? 0 : totalStr.slice(0,totalStr.length-3) + ",000";

            totalAssets += total
        }

        totalCell.textContent = totalAssets === 0 ? 0 : String(totalAssets).slice(0,String(totalAssets).length-3) + ",000";
    })
})
            