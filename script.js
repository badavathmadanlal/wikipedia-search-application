let searchInputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");


function createAndAppendResult(result) {
    let resultItem = document.createElement("div");
    resultItem.classList.add("result-item");

    let titleEl = document.createElement("a");
    titleEl.href = result.link;
    titleEl.target = "_blank";
    titleEl.textContent = result.title;
    titleEl.classList.add("result-title");

    let breakEl = document.createElement("br");

    let urlEl = document.createElement("a");
    urlEl.href = result.link;
    urlEl.target = "_blank";
    urlEl.textContent = result.link;
    urlEl.classList.add("result-url");

    let descEl = document.createElement("p");
    descEl.textContent = result.description;
    descEl.classList.add("link-description");

    resultItem.appendChild(titleEl);
    resultItem.appendChild(breakEl);
    resultItem.appendChild(urlEl);
    resultItem.appendChild(descEl);

    searchResultsEl.appendChild(resultItem);
}

function displayResults(results) {
    searchResultsEl.textContent = "";
    spinnerEl.classList.add("d-none");

    for (let result of results) {
        createAndAppendResult(result);
    }
}

searchInputEl.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        spinnerEl.classList.remove("d-none");
        searchResultsEl.textContent = "";

        let searchValue = searchInputEl.value;

        let url = "https://apis.ccbp.in/wiki-search?search=" + searchValue;

        fetch(url)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                displayResults(data.search_results);
            });
    }
});
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("toggleMode");

  btn.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
});