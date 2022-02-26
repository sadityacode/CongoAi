"use strict";

window.onload = () => {
    const chatbotIcon = document.querySelector('#chat_bot_icon');
    const chatbotFrame = document.querySelector('#chat_bot_frame');

    chatbotIcon.addEventListener('click', () => {
        chatbotIcon.classList.toggle("active");
        chatbotFrame.classList.toggle("active");
        chatbotFrame.classList.contains("active") 
            ? setTimeout(() => chatbotFrame.setAttribute("src", "./chatbot.html") , 1500)
            : setTimeout(() => chatbotFrame.removeAttribute("src"), 1);
    });
};
