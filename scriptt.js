function sendMessage() {
const input = document.getElementById("user-input");
const log = document.getElementById("chat-log");

const userText = input.value;
if (!userText.trim()) return;

log.innerHTML += <div><strong>You:</strong> ${userText}</div>;

let botReply = "I'm just a simple bot. Try asking about resume or contact.";
const msg = userText.toLowerCase();

if (msg.includes("hello")) {
botReply = "Hi! 👋 How can I help you today?";
} else if (msg.includes("resume")) {
botReply = "You can download my resume in the Resume section above.";
} else if (msg.includes("contact")) {
botReply = "Go to the Contact section to send me a message!";
}

log.innerHTML += <div><strong>Bot:</strong> ${botReply}</div>;
input.value = "";
log.scrollTop = log.scrollHeight;
}