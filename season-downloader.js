const linksBox = document.getElementById("links-box");

function getLinks() {
    const linksGenerated = document.getElementsByClassName("link-generated");
    let linksText = "";
    for (const link of linksGenerated) {
        if (link.nodeName === "DIV") {
            linksText += link.querySelector("a").href + "\n";
            noOfRowsNeeded += 1;
        }
    }
    var allLinksTextBox = document.getElementById("all-links-text")
    if (allLinksTextBox) {
        allLinksTextBox.value = linksText;
    } else {
        var allLinksTextBox = document.createElement("textarea");
        allLinksTextBox.id = "all-links-text"
        allLinksTextBox.value = linksText;
        allLinksTextBox.readOnly = true;
        linksBox.appendChild(allLinksTextBox);
    }

}

if (!document.getElementById("get-all-links-btn")) {
    const getAllLinksButton = document.createElement("button");
    getAllLinksButton.style = "border: 5px solid red;";
    getAllLinksButton.textContent = "Get All links";
    getAllLinksButton.type = "submit";
    getAllLinksButton.id = "get-all-links-btn"
    getAllLinksButton.addEventListener("click", () => getLinks());
    linksBox.appendChild(getAllLinksButton);
}


