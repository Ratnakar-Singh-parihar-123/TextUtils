
# Text Transformation Tool

This is a **React-based Text Transformation Tool** that allows users to transform, manipulate, and interact with text in various ways. The app includes features like **Uppercase/Lowercase conversion**, **Grammar checking**, **Text translation**, **Speech synthesis**, **Voice recognition**, and more. The tool also provides a **Recycle Bin** to store recently deleted texts and allows users to **clear** the text or copy it to the clipboard.

## Features

### 1. **Uppercase/Lowercase Conversion**
   - Convert the input text to **Uppercase** or **Lowercase**.
   - Simply type the text and click on the respective button for conversion.
   - **Buttons**:
     - `Convert to Uppercase`
     - `Convert to Lowercase`

### 2. **Grammar Check**
   - **Check the grammar** of the text using the **TextGears API**.
   - If any grammatical errors are found, the app will show the errors in a friendly format.

### 3. **Text Translation**
   - Translate the input text into various languages using the **MyMemory API**.
   - A dropdown allows users to select the desired language for translation.

### 4. **Clear Text**
   - Reset the text input and clear the text area.
   - The **deleted text** is stored in the **Recycle Bin**, so users can access their recently deleted text.
   - A maximum of 4 texts are stored in the **Recycle Bin**.

### 5. **Recycle Bin**
   - All **deleted texts** are saved to the **Recycle Bin**.
   - Users can view the list of recently deleted texts and restore them if needed.
   - **Limit**: Only the last 4 deleted texts are stored.
   - A `Recycle Bin` button is available to display the deleted texts.

### 6. **Remove Extra Spaces**
   - Removes unnecessary extra spaces from the text.
   - If there are multiple spaces between words, they are reduced to a single space.

### 7. **Speech-to-Text (Voice Recognition)**
   - Use your voice to **speak text** and have it automatically transcribed.
   - The app uses the **Web Speech API** for real-time voice recognition.

### 8. **Text-to-Speech (Read Aloud)**
   - The app can **read the entered text** aloud using the **Speech Synthesis API**.
   - Simply click the `Read` button, and the app will speak the text you have entered.

### 9. **Copy Text to Clipboard**
   - Easily copy the entered text to the clipboard using the `Text Copy` button.
   - This makes it easy to quickly paste the text anywhere.

### 10. **Dark Mode**
   - Toggle between **light mode** and **dark mode**.
   - The app's theme automatically adjusts based on the mode, ensuring a better user experience in both modes.

---

## Technologies Used

- **React**: For building the user interface.
- **Axios**: For making HTTP requests to external APIs (TextGears for grammar check and MyMemory for translation).
- **Bootstrap**: For styling the UI components.
- **Web Speech API**: For text-to-speech and voice recognition features.
- **React Hooks**: To manage state in the app.
- **JavaScript (ES6)**: For the core functionality and logic.

---

## Installation

Follow these steps to set up and run the project locally.

### Prerequisites

- **Node.js** (v14 or later)
- **npm** (Node Package Manager)

### Step 1: Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/text-transformation-tool.git

How to Use
Uppercase and Lowercase Conversion
Enter some text in the text area.

Click on the Convert to Uppercase button to change the text to uppercase.

Click on the Convert to Lowercase button to change the text to lowercase.

Grammar Check
Type or paste the text you want to check.

Click the Check Grammar button to run a grammar check and display any errors.

Text Translation
Select the desired language from the dropdown.

Click on the Translate button to translate the entered text into the selected language.

Clear Text
Click on the Clear Text button to clear the text area.

All deleted texts are stored in the Recycle Bin.

Recycle Bin
After clearing text, click the Recycle Bin button to view the recently deleted texts.

You can restore text from the Recycle Bin if needed.

Remove Extra Spaces
Click on the Remove Extra Space button to remove extra spaces between words.

Speech-to-Text (Voice Recognition)
Click on the Voice button.

Speak into your microphone, and the app will convert your speech into text.

Text-to-Speech (Read Aloud)
Click the Read button to hear the text read aloud.

The app will use the Speech Synthesis API to read the text you entered.

Copy Text to Clipboard
Click on the Text Copy button to copy the entered text to your clipboard.

Dark Mode
Toggle the switch to enable dark mode or light mode.

API Keys
For the Grammar Check feature, you are using the TextGears API. To use this feature, replace the apiKey in the TextForm.js file with your own API key. You can get your API key by signing up on the TextGears website.

For Text Translation, the app uses the MyMemory API, which does not require an API key for basic translation usage.

Contributions
Feel free to fork this repository and submit pull requests. Contributions are welcome! If you find any bugs or have suggestions for new features, please open an issue in the repository.

License
This project is licensed under the MIT License. See the LICENSE file for more details.

pgsql
Copy

### What’s New in This `README.md`?

1. **Detailed Feature Descriptions**: Each feature now has a dedicated section explaining how it works, making it easier for users to understand.
   
2. **Clear Instructions on Each Functionality**: Added instructions for features like **Uppercase/Lowercase**, **Grammar Check**, **Recycle Bin**, **Text-to-Speech**, **Voice Recognition**, and **Copy Text**.

3. **Usage of Recycle Bin**: Explained how the **Recycle Bin** works and how deleted texts are handled.

4. **Dark Mode**: Mentioned that dark mode can be toggled for a better user experience.

---

Feel free to copy this updated version of the `README.md` into your project folder. This will ensure 