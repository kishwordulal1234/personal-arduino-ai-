#!/usr/bin/python3

print("give me a bottle of rum!")
import time

def show_welcome_message():
    print("\nWelcome! I'm KishorDulalBot. 😊")
    print("You can ask me basic math, science, or general questions.")
    print("Type 'upcoming events' to see the event list or 'bye' to exit.\n")

def respond_to_input(user_input):
    if user_input.lower() == "bye":
        print("\nKishorDulalBot: Goodbye! Have a nice day!")
        exit()
    elif user_input.lower() == "what is your name":
        print("\nKishorDulalBot: My name is KishorDulalBot. 😊")
    elif user_input.lower() == "how are you":
        print("\nKishorDulalBot: I'm fine, and you? 😊")
    elif user_input.lower() == "upcoming events":
        show_upcoming_events()
    elif user_input.isnumeric():
        show_multiplication_table(int(user_input))
    elif "+" in user_input or "-" in user_input or "*" in user_input or "/" in user_input:
        try:
            result = eval(user_input)
            print(f"\nKishorDulalBot: The result is {result}")
        except:
            print("\nKishorDulalBot: I couldn't calculate that. Please try again.")
    else:
        print(f"\nKishorDulalBot: You said '{user_input}'")

def show_multiplication_table(number):
    print(f"\nKishorDulalBot: Here is the multiplication table of {number}:")
    for i in range(1, 11):
        print(f"{number} x {i} = {number * i}")
    print()

def show_upcoming_events():
    events = [
        "A new 8-ball pool event is happening in the college.",
        "Annual cultural fest coming next month!",
        "Football tournament registrations open next week."
    ]
    print("\nUpcoming Events:")
    for event in events:
        print(f" - {event}")
    print()

def chat_bot():
    show_welcome_message()

    while True:
        user_input = input("\nYou: ")
        respond_to_input(user_input)

if __name__ == "__main__":
    chat_bot()
