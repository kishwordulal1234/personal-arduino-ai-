class KishorDulalBot {
    constructor() {
        this.botName = "vsnBot";
        this.responses = {
            "greetings": {
                questions: ["hi", "hello", "hey", "yo", "what's up"],
                answers: ["Hey there! 😊", "Hi! 👋", "Hello! 👋", "Hey! 👋"]
            },
            "vsnFullForm": {
                questions: ["what is the full form of vsn", "vsn full form", "what's vsn", "vsn meaning"],
                answers: ["V.S. Niketan stands for Vinayak Sudhha Niketan School / College."]
            },
            "foundingInfo": {
                questions: ["when was vs niketan founded", "founding date of vs niketan", "vs niketan established year"],
                answers: ["V.S. Niketan Higher Secondary School was established in 1981."]
            },
            "firstPrincipal": {
                questions: ["who was the first principal of vs niketan", "first head of vs niketan", "who started vs niketan"],
                answers: ["The first principal of V.S. Niketan was Mr. Damodar Shrestha."]
            },
            "currentPrincipal": {
                questions: ["who is the principal of vs niketan", "who is the current head of vs niketan"],
                answers: ["The current principal of V.S. Niketan is Mrs. Sunita Adhikari."]
            },
            "chairperson": {
                questions: ["who is the chairperson of vs niketan", "who is the head of vs niketan"],
                answers: ["The chairperson of V.S. Niketan is Mr. Giriraj Bhattarai."]
            },
            "class": {
                questions: ["where is the science class", "science group"],
                answers: ["The science classes are held in rooms 202 to 212."]
            },
            "director": {
                questions: ["who is the director of vs niketan", "who runs vs niketan", "who is in charge of vs niketan?"],
                answers: ["The director of V.S. Niketan is Dr. Babin Pokharel."]
            },
            "labs": {
                questions: ["how many labs are there", "are there labs", "labs available"],
                answers: ["Yes, there are laboratories for biology, physics, and chemistry."]
            },
            "campusLocation": {
                questions: ["where is V.S. Niketan located", "V.S. Niketan address", "where is the school located"],
                answers: ["V.S. Niketan Higher Secondary School is located in Minbhawan, Kathmandu, Nepal."]
            },
            "admissionProcess": {
                questions: ["how to apply for admission in vs niketan", "what is the admission process of vs niketan", "vs niketan admission requirements"],
                answers: ["You can apply for admission by visiting the campus or through their online portal. Admission is based on an entrance exam."]
            },
            "dressInfo": {
                questions: ["where can we get our college dress", "where to buy the dress", "where can I get the dress"],
                answers: ["You can get your college dress from New Unix Tailor near Trition School/College, close to Balkumari Bridge."]
            },
            "schoolMotto": {
                questions: ["what is the motto of vs niketan", "vs niketan motto", "what is the tagline of vs niketan"],
                answers: ["The motto of V.S. Niketan is 'Dedicated to Excellence in Education'."]
            },
            "studentPopulation": {
                questions: ["how many students are at vs niketan", "what is the student population of vs niketan", "number of students in vs niketan"],
                answers: ["V.S. Niketan has approximately 4000 students."]
            },
            "programsOffered": {
                questions: ["what programs does vs niketan offer", "courses available at vs niketan", "what can I study at vs niketan"],
                answers: ["V.S. Niketan offers programs in Science, Management, and Humanities at the higher secondary level, along with various undergraduate programs."]
            },
            "schoolEvents": {
                questions: ["what events happen at vs niketan", "school events at vs niketan", "annual events at vs niketan"],
                answers: ["V.S. Niketan organizes various events such as sports day, cultural programs, science exhibitions, and annual day celebrations."]
            },
            "facilities": {
                questions: ["what facilities does vs niketan have", "what services are offered at vs niketan", "what are the facilities in vs niketan"],
                answers: ["V.S. Niketan offers a hostel, cafeteria, transportation services, and various sports activities."]
            },
            "hostelFacilities": {
                questions: ["does vs niketan offer hostel facilities", "can students live on campus at vs niketan?", "is there a hostel at vs niketan?"],
                answers: ["Yes, V.S. Niketan provides hostel facilities with quality amenities."]
            },
            "sportsPrograms": {
                questions: ["what sports are available at vs niketan", "does vs niketan offer sports programs", "what kind of sports can you play at vs niketan"],
                answers: ["V.S. Niketan offers a variety of sports including basketball, football, volleyball, and badminton."]
            },
            "howAreYou": {
                questions: ["how are you", "how r u", "how are you doing", "what's up"],
                answers: ["I'm doing well, thank you! How about you? 😊", "I'm fine, and you? 😊"]
            },
            "nameQuery": {
                questions: ["what is your name", "what should I call you"],
                answers: [`My name is ${this.botName}. 😊`]
            },
            "whoAreYou": {
                questions: ["who are you", "what are you", "tell me about yourself"],
                answers: ["I am a chatbot created by Kishor Dulal."]
            },
            "mathFormulas": {
                questions: ["circle formula", "square formula", "triangle formula", "area of circle", "area of square"],
                answers: {
                    "circle formula": "The area of a circle is πr², where r is the radius.",
                    "square formula": "The area of a square is a², where a is the side length.",
                    "triangle formula": "The area of a triangle is ½bh, where b is the base and h is the height."
                }
            },
            "scienceQuestions": {
                questions: ["what is photosynthesis", "what is gravity", "define energy"],
                answers: {
                    "what is photosynthesis": "Photosynthesis is the process by which plants make their food using sunlight, water, and carbon dioxide.",
                    "what is gravity": "Gravity is the force that attracts two bodies towards each other, commonly experienced as the pull towards the Earth's center.",
                    "define energy": "Energy is the ability to do work or cause change."
                }
            }
        };
        this.chatBox = document.getElementById('chat-box');
        this.userInput = document.getElementById('user-input');
        this.sendButton = document.getElementById('send-button');
        this.popupMessage = document.getElementById('popup-message');
        this.popupText = document.getElementById('popup-text');
        
        this.sendButton.addEventListener('click', this.sendMessage.bind(this));
        this.userInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.sendMessage();
            }
        });
    }
    
    startChatting() {
        this.printMessage(`Welcome! I'm ${this.botName}. Feel free to ask me about math, science, or general questions. Type 'bye' to end the conversation.`);
        this.showPopupMessage(`Welcome! I'm ${this.botName}. A new event is happening at the college at 8 PM. We hope to see you there!`)
    }
    
    sendMessage() {
        let userInputText = this.userInput.value.trim().toLowerCase();
        if (userInputText === "") return;
        
        this.printMessage(`<strong>You:</strong> ${userInputText}`);
        let response = this.generateResponse(userInputText);
        this.printMessage(`<strong>${this.botName}:</strong> ${response}`);
        
        this.userInput.value = '';
    }
    
    generateResponse(userInput) {
        const roughLanguage = ["fuck you", "shut up", "idiot", "asshole"];
        if (roughLanguage.some(phrase => userInput.includes(phrase))) {
            return "No rough words please, be polite.";
        }
        
        if (userInput === "bye") {
            return "Goodbye! If you have more questions later, feel free to reach out. 😊";
        }
        
        const mathExpressionMatch = userInput.match(/(\d+)\s*([+\-*/^])\s*(\d+)/);
        if (mathExpressionMatch) {
            const num1 = parseFloat(mathExpressionMatch[1]);
            const operator = mathExpressionMatch[2];
            const num2 = parseFloat(mathExpressionMatch[3]);
            
            let result;
            switch (operator) {
                case '+': result = num1 + num2; break;
                case '-': result = num1 - num2; break;
                case '*': result = num1 * num2; break;
                case '/': result = num2 === 0 ? "Division by zero is not allowed." : num1 / num2; break;
                case '^': result = Math.pow(num1, num2); break;
                default: result = "I'm not sure what you mean. Can you ask something else? 😊";
            }
            return `The result is ${result}`;
        }
        
        const cubeMatch = userInput.match(/cube of (\d+)/);
        if (cubeMatch) {
            const num = parseFloat(cubeMatch[1]);
            return `The cube of ${num} is ${Math.pow(num, 3)}`;
        }
        
        const rootMatch = userInput.match(/root under of (\d+)/);
        if (rootMatch) {
            const num = parseFloat(rootMatch[1]);
            return `The square root of ${num} is ${Math.sqrt(num)}`;
        }
        
        if (userInput.includes("i love you")) {
            return "I love you too as my friend.";
        }
        
        if (this.responses.nameQuery.questions.some(q => userInput.includes(q))) {
            return this.responses.nameQuery.answers[0];
        }
        
        if (this.responses.howAreYou.questions.some(q => userInput.includes(q))) {
            return this.responses.howAreYou.answers[0];
        }
        
        if (userInput.includes("who created you")) {
            return "I was created by Kishor Dulal.";
        }
        
        if (this.responses.whoAreYou.questions.some(q => userInput.includes(q))) {
            return this.responses.whoAreYou.answers[0];
        }
        
        if (userInput.startsWith('table of ')) {
            let number = parseInt(userInput.split(' ')[2]);
            if (!isNaN(number)) {
                return this.generateMultiplicationTable(number);
            }
        }
        
        for (let key in this.responses) {
            let responseCategory = this.responses[key];
            if (key === "mathFormulas" || key === "scienceQuestions") {
                for (let question in responseCategory.answers) {
                    if (userInput.includes(question)) {
                        return responseCategory.answers[question];
                    }
                }
            } else {
                for (let question of responseCategory.questions) {
                    if (userInput.includes(question)) {
                        let possibleResponses = responseCategory.answers;
                        let randomIndex = Math.floor(Math.random() * possibleResponses.length);
                        return possibleResponses[randomIndex];
                    }
                }
            }
        }
        
        return "I'm not sure what you mean. Can you ask something else? 😊";
    }
    
    
    generateMultiplicationTable(number) {
        let result = `Here is the table of ${number}:\n`;
        for (let i = 1; i <= 10; i++) {
            result += `${number} x ${i} = ${number * i}\n`;
        }
        return result;
    }
    
    printMessage(message) {
        let chatMessage = document.createElement('div');
        chatMessage.classList.add('message');
        chatMessage.innerHTML = message;
        this.chatBox.appendChild(chatMessage);
        this.chatBox.scrollTop = this.chatBox.scrollHeight;
    }
    
    showPopupMessage(message) {
        this.popupText.innerText = message;
        this.popupMessage.classList.remove('popup-hidden');
        setTimeout(() => {
            this.popupMessage.classList.add('popup-hidden');
        }, 5000);
    }
}

const bot = new KishorDulalBot();
bot.startChatting();
