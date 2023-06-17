// alert("Hello from your Chrome extension!");

const currentURL = window.location.href;
// console.log(currentURL);
var question = currentURL.split("/")[4];
question = question.replace(/-/g, "+");
// console.log(question);

const basicURI = "https://www.youtube.com/results?search_query=";
const finalURI = basicURI + question + "+leetcode";

const button = document.createElement("a");
// button.href = `https://www.youtube.com/results?search_query=${question}+leetcode`;
button.target = "_blank";
button.id = "youtube";
button.classList.add("bg-sky-500");
button.innerHTML = `<span>Video Solution</span>`;


const buttonArea = document.createElement("div");
buttonArea.classList.add("hover:bg-white", "flex", "h-full", "select-none", "items-center", "whitespace-nowrap", "text-xs", "font-medium", "text-label-2", "dark:text-dark-label-2", "hover:text-label-1", "dark:hover:text-dark-label-1");
buttonArea.id = "buttonArea";
buttonArea.appendChild(button);

document.body.appendChild(buttonArea);


button.addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: 'createTab', url: finalURI }, (response) => {
        // console.log(response);
     });
});















// const button2 = document.createElement("div");
// button.classList.add("flex", "h-full", "select-none", "items-center", "whitespace-nowrap", "text-xs", "font-medium", "text-label-2", "dark:text-dark-label-2", "hover:text-label-1", "dark:hover:text-dark-label-1");
// button.appendChild(button2);

// const text = document.createElement("span");
// text.innerText = "Youtube Video Solution";
// button2.appendChild(text);

// const buttonArea = document.querySelectorAll(".bg-layer-2", ".dark:bg-dark-layer-2",".border-fill-3", ".dark:border-dark-fill-3", ".flex", ".h-9", ".w-full", ".items-center", ".justify-between", ".rounded-t", ".border-b", ".px-4")[1];
// console.log(buttonArea);

// const innerdiv = buttonArea.querySelector("div");
// console.log(innerdiv);

// innerdiv.appendChild(button);
    // buttonArea.appendChild(button);
