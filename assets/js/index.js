"use strict";

window.onload = () => {
    const chatbotIcon = document.querySelector('#chat_bot_icon');
    const chatbotFrame = document.querySelector('#chat_bot_frame');

    chatbotIcon.addEventListener('click', () => {
        if(!chatbotIcon.classList.contains('disable_click')) {
            chatbotIcon.classList.toggle("active");
            chatbotFrame.classList.toggle("active");
            chatbotFrame.classList.contains("active")  && chatbotIcon.classList.add("disable_click");
            chatbotFrame.classList.contains("active") 
                ? setTimeout(() => {
                    chatbotFrame.setAttribute("src", "./chatbot.html");
                    chatbotIcon.classList.remove("disable_click");
                } , 1500)
                : chatbotFrame.removeAttribute("src");
        }
    });
};
