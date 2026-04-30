const cards = [
    { name: "Baseball Cards", value: 5000 , img: "baseball-cards.png" },
    { name: "Cash under the Mattress", value: 5000, img: "cash-under-the-mattress.png" },
    { name: "Piggy Bank", value: 5000, img: "piggy-bank.png" },
    { name: "Stamp Collection", value: 5000, img: "stamp-collection.png" },
    { name: "Bank Account", value: 10000, img: "bank-account.png" },
    { name: "Coin Collection", value: 10000, img: "coin-collection.png" },
    { name: "Stocks", value: 10000, img: "stocks.png"  },
    { name: "Classic Car", value: 15000, img: "classic-auto.png" },
    { name: "Jewels", value: 15000, img: "jewels.png" },
    { name: "Home", value: 20000, img: "home.png" },
    { name: "Silver", value: 25000, img: "silver.png" },
    { name: "Gold", value: 50000, img: "gold.png" }
]

function displayItems () {
    for (const card of cards) {
        if (card["name"] !== "Baseball Cards") {
            const line = document.createElement("div")
            line.innerHTML = `<div class="line"></div>`
            document.getElementById("list").appendChild(line)
        }
        const item = document.createElement("div")
        item.innerHTML = `
            <div class="item">
            <div class="card-img">
                <img src="./assets/${card["img"]}">
            </div>
            <div class="item-info-wrapper">
                <div>
                    <p class="card-name">${card["name"]}</p>
                    <div class="card-value">
                        <span>$${card["value"]/1000 + ",000"}</span>
                    </div>
                </div>
                <div>
                    <div class="subtotal-wrapper">
                        <span class="subtotal">$0</span>
                    </div>
                    <div class="counter-wrapper">
                        <div class="icon minus ${card["img"].slice(0, card["img"].length - 4)}">
                            <i class="ph ph-minus"></i>
                        </div>
                        <div class="quantity">
                            <input type="number" name="count" class="count" min="0" max="15" placeholder="0" value="0" disabled id="${card["img"].slice(0, card["img"].length - 4)}-input"/>
                        </div>
                        <div class="icon plus ${card["img"].slice(0, card["img"].length - 4)}">
                            <i class="ph ph-plus"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        document.getElementById("list").appendChild(item)
    }
}

function updateNumbers () {
    const inputs = document.getElementsByClassName("count");
        const subtotals = [];

        let totalAssets = 0;
        for (let i = 0; i < inputs.length; i++) {
            const count = inputs[i].value;
            const subtotal = cards[i]["value"] * count;
            document.querySelectorAll(".subtotal")[i].textContent = `$${
                subtotal === 0 ? 0 : subtotal/1000 + ",000"}`
            subtotals.push(subtotal)
        }
        const total = subtotals.reduce(
            (accumulator, currentValue) => accumulator + currentValue, 0)
        document.getElementById("total").textContent = `$${
                total === 0 ? 0 : total/1000 + ",000"}`
}

async function main () {
    displayItems();
}

main();

document.querySelectorAll(".count").forEach(input => {
    input.addEventListener("input", () => {
        updateNumbers()
    })
})

document.querySelectorAll(".plus").forEach(input => {
    input.addEventListener("click", () => {
        const textbox = document.getElementById(`${input.classList[2]}-input`)
        textbox.value = Number(textbox.value) + 1
        updateNumbers()
    })
})

document.querySelectorAll(".minus").forEach(input => {
    input.addEventListener("click", () => {
        const textbox = document.getElementById(`${input.classList[2]}-input`)
        if (textbox.value === "0") {

        } else {        
            textbox.value = Number(textbox.value) - 1
            updateNumbers()
        }
    })
})

document.getElementById("reset-button").addEventListener("click", () => {
    document.querySelectorAll(".count").forEach(input => {
        input.value = 0
        updateNumbers()
    })
})
