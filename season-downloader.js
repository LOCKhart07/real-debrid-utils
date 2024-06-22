const linksBox = document.getElementById("links-box");
function getLinks() {
    const linksGenerated = document.getElementsByClassName("link-generated");
    let linksText = "";
    for (const link of linksGenerated) {
        if (link.nodeName === "DIV") {
            linksText += link.querySelector("a").href + "\n";
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

if (!document.getElementById("get-all-links-btn") && document.getElementById("links").value) {
    const getAllLinksButton = document.createElement("button");
    // getAllLinksButton.style = "border: 5px solid red;";
    getAllLinksButton.style = "display: inline-flex; align-items: center; justify-content: center; padding: 10px 20px; font-size: 14px; color: #333; background: linear-gradient(to right, #fff, #e6e6e6); border: 1px solid #ccc; border-radius: 5px; box-shadow: inset 0 1px 0 #fff; cursor: pointer; position: relative; margin: 5px;"
    linksBox.style = "display: flex; justify-content: center; align-items: center;"
    getAllLinksButton.textContent = "Get All links";
    getAllLinksButton.type = "submit";
    getAllLinksButton.id = "get-all-links-btn"
    getAllLinksButton.addEventListener("click", () => getLinks());
    linksBox.appendChild(getAllLinksButton);
}


