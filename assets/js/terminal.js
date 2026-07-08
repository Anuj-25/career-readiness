console.log("Mission Switch 2026 Terminal Loaded 🚀");

/* ============================
   DOM Elements
============================ */

const terminalOutput = document.getElementById("terminal-output");
const terminalInputLine = document.getElementById("terminal-input-line");

const terminalState = {
    prompt: "visitor@anuj:~$"
};

/* ============================
   Initialization
============================ */

function initializeTerminal() {
    printWelcomeMessage();
    createPrompt();
}

/* ============================
   Helper Functions
============================ */

function printWelcomeMessage() {
    terminalOutput.innerHTML = `
Welcome to Anuj's Interactive Terminal

Type 'help' to see available commands.

`;
}

function createPrompt() {
 terminalInputLine.innerHTML = `
        <span class="prompt">${terminalState.prompt}</span>
    `;
}


/* ============================
   Event Listeners
============================ */

document.addEventListener("DOMContentLoaded", initializeTerminal);