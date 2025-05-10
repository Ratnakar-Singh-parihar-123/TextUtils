# TextForm Component Documentation

## Overview

The `TextForm` component provides users with a variety of text manipulation and analysis tools. It includes options for:

- Converting text to uppercase or lowercase.
- Removing extra spaces.
- Copying text to the clipboard.
- Checking grammar using an external API.
- Translating text into different languages.
- Viewing a preview and summary of the text input.

The component supports theme changes (dark or light mode) and alerts the user whenever an action is performed.

### Key Functionalities:
1. **Text Transformation**: Allows users to change the case of text, clear the text, or remove extra spaces.
2. **Grammar Checking**: Integrates with an external API to check for grammar errors.
3. **Text Translation**: Translates input text into various languages using an external API.
4. **Text Preview & Summary**: Displays a word count, character count, and a reading time estimate.
5. **Recycle Bin**: Keeps track of the last 4 deleted texts and allows users to view them.

---

## Key Actions

### 1. State Variables:

- **text**: Stores the current text that the user has input into the text area. Initially set to an empty string.
- **language**: Stores the language selected by the user for text translation. Defaults to 'hi' (Hindi).
- **deletedTexts**: Keeps track of the last 4 deleted text entries so they can be recovered/viewed later.

### 2. Functions:

- **handleUpClick**: Converts the text to uppercase and updates the text state. An alert is shown after the transformation ("Converted to UpperCase").
- **handleLoClick**: Converts the text to lowercase and updates the text state. An alert is shown after the transformation ("Converted to LowerCase").
- **handleOnChange**: Updates the text state whenever the user types in the text area.
- **reset**: Clears the text area and stores the current text in the deletedTexts state, which tracks the last 4 deleted texts. An alert is shown ("Text is reset").
- **handle**: Copies the current text to the clipboard and shows an alert confirming the action ("Text copied to clipboard").
- **handleExtraSpace**: Removes extra spaces between words in the text. It splits the text by one or more spaces and then joins it back with a single space. An alert is shown ("Extra spaces removed").
- **handleGrammar**: Performs a grammar check using the TextGears API. It alerts the user about grammatical errors found or confirms no errors were found. If there is an error with the API, it shows an alert ("Error checking grammar").
- **handleTranslate**: Translates the input text into the selected language using the MyMemory Translation API. The text is updated and an alert is shown ("Text translated").
- **handleLanguageChange**: Updates the language state to reflect the user's selected translation language.
- **handleRecycle**: Displays the last 4 deleted texts from the deletedTexts array in an alert.

### 3. Rendering the UI:

- **Text Area**:
  The text area allows users to input text that can be manipulated (e.g., upper/lowercase conversion, grammar check, etc.).
  ```jsx
  <textarea
      className="form-control"
      value={text}
      onChange={handleOnChange}
      id="myBox"
      rows="10"
  />
Buttons and Dropdowns: There are various buttons for different functionalities such as converting text to uppercase, checking grammar, and translating text. A dropdown allows the user to select the target language for translation.

Summary and Preview:

jsx
Copy
<p>{text.split(/\s+/).filter(word => word.length > 0).length} words and {text.length} characters</p>
<p>{0.008 * text.split(" ").filter(word => word.length > 0).length} Minutes read</p>
<p>Preview</p>
<p>{text.length > 0 ? text : "Enter something"}</p>
These elements show:

Word count
Character count
Reading time estimate
A preview of the text
Conclusion
The TextForm component is a powerful text manipulation and analysis tool. It allows users to perform various operations like text transformation, grammar checking, text translation, and more, with a user-friendly interface. Additionally, it keeps track of deleted texts and allows users to view them later, making it a highly versatile and interactive component for text handling.

vbnet
Copy

This Markdown file summarizes the key actions and functionalities of the `TextForm` component in the application. Let me know if you need any modifications!