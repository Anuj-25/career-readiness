console.log("Mission Switch 2026 Terminal Loaded 🚀");

/* ============================
   DOM Elements
============================ */

const terminalOutput = document.getElementById("terminal-output");
const terminalInputLine = document.getElementById("terminal-input-line");
const terminalBody = document.getElementById("terminal-body");


/* ============================
   Terminal State
============================ */

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
        <p>Welcome to Anuj's Interactive Terminal</p>
        <p>Type <strong>'help'</strong> to see available commands.</p>
    `;
}

function createPrompt() {

    terminalInputLine.innerHTML = `
        <div class="terminal-prompt">
            <span class="prompt">${terminalState.prompt}</span>

            <input
                type="text"
                class="terminal-input"
                autocomplete="off"
                spellcheck="false"
            >
        </div>
    `;

    const terminalInput =
        terminalInputLine.querySelector(".terminal-input");

    terminalInput.focus();

    terminalInput.addEventListener("keydown", handleKeyDown);

    scrollToBottom();
}

function printOutput(content) {
    terminalOutput.insertAdjacentHTML("beforeend", content);
    scrollToBottom();
}

function freezePrompt(command) {

    printOutput(`
        <div class="terminal-command">
            <span class="prompt">${terminalState.prompt}</span>
            <span>${command}</span>
        </div>
    `);

    terminalInputLine.innerHTML = "";

}

function handleKeyDown(event) {

    if (event.key === "Enter") {
        handleCommand(event.target.value);
    }

}

function scrollToBottom() {
    terminalBody.scrollTop = terminalBody.scrollHeight;
}


/* ============================
   Command Functions
============================ */

function handleCommand(command) {

    const normalizedCommand = command.trim().toLowerCase();

    if (!normalizedCommand) {
        createPrompt();
        return;
    }

    freezePrompt(command);

    switch (normalizedCommand) {

        case "help":
            showHelp();
            break;

        case "about":
            showAbout();
            break;

        default:
            printOutput(`
                <p>Command not found: <strong>${normalizedCommand}</strong></p>
            `);

    }

    createPrompt();

}

function showHelp() {

    printOutput(`
        <div class="terminal-response">

            <p><strong>Available commands:</strong></p>

            <ul>
                <li><strong>help</strong> - Show available commands</li>
                <li><strong>about</strong> - Learn about me</li>
                <li><strong>skills</strong> - View my technical skills</li>
                <li><strong>projects</strong> - View my projects</li>
                <li><strong>resume</strong> - Open my resume</li>
                <li><strong>clear</strong> - Clear the terminal</li>

            </ul>

        </div>
    `);

}

function showAbout() {

    const { about } = PORTFOLIO;

    const output = `
Name: ${about.name}
Title: ${about.title}
Location: ${about.location}

Mission:
${about.mission}

About:
${about.bio}

Currently Learning:
- ${about.currentlyLearning.join("\n- ")}
`;

    printOutput(output);

}


/* ============================
   Event Listeners
============================ */

document.addEventListener("DOMContentLoaded", initializeTerminal);

terminalBody.addEventListener("click", () => {

    const terminalInput =
        terminalInputLine.querySelector(".terminal-input");

    if (terminalInput) {
        terminalInput.focus();
    }

});