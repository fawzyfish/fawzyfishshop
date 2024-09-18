function toggleChat() {
    const chatPopup = document.getElementById('chat-popup');
    chatPopup.style.display = chatPopup.style.display === 'none' || chatPopup.style.display === '' ? 'flex' : 'none';
}

function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const chatBody = document.getElementById('chat-body');
    if (chatInput.value.trim()) {
        const userMessage = document.createElement('div');
        userMessage.classList.add('message', 'user-message');
        userMessage.innerHTML = `<p>${chatInput.value}</p>`;
        chatBody.appendChild(userMessage);
        chatInput.value = '';
        chatBody.scrollTop = chatBody.scrollHeight;
    }
}

function submitCode() {
    const supportCode = document.getElementById('support-code').value;
    const validCode = 'ROCn974B07@@!!'; // De specifieke code die je wilt gebruiken
    if (supportCode.trim() === validCode) {
        // Toon de support details popup
        const supportDetailsPopup = document.getElementById('support-details-popup');
        supportDetailsPopup.classList.add('show');
    } else {
        alert('Invalid support code. Please check and try again.');
    }
    document.getElementById('support-code').value = ''; // Veld leegmaken na verzenden
}

function closeSupportDetails() {
    const supportDetailsPopup = document.getElementById('support-details-popup');
    supportDetailsPopup.classList.remove('show');
}
