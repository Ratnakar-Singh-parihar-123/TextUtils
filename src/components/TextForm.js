import React, { useState } from 'react';
import axios from 'axios';

export default function TextForm(props) {
    const [text, setText] = useState('');
    const [language, setLanguage] = useState('hi'); // Default language is Hindi
    const [deletedTexts, setDeletedTexts] = useState([]); // State to store deleted texts

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", 'success');
    };

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", 'success');
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const reset = () => {
        // Store the deleted text before clearing it
        setDeletedTexts(prevDeletedTexts => {
            const newDeletedTexts = [text, ...prevDeletedTexts];
            return newDeletedTexts.slice(0, 4); // Keep only the last 4 deleted texts
        });
        setText('');
        props.showAlert("Text is reset", 'success');
    };

    const handleCopy = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard", 'success');
    };

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", 'success');
    };

    const handleGrammar = async () => {
        const url = 'https://api.textgears.com/check.php';
        const apiKey = 'Kg3Q8rQxv8A1Z2Zz';
        try {
            const response = await axios.post(url, null, {
                params: {
                    text: text,
                    key: apiKey,

                }
            });
            const errors = response.data.errors;
            if (errors) {
                const errorMessages = errors.map(error => error.bad);
                props.showAlert("Grammar check complete. Errors: " + errorMessages.join(", "), 'success');
            } else {
                props.showAlert("No grammatical errors found", 'success');
            }
        }
        catch (error) {
            console.error("Error checking grammar:", error);
            props.showAlert("Error checking grammar", 'danger');
        }
    }

    // Translate text using the MyMemory API

    const handleTranslate = async () => {
        const url = 'https://api.mymemory.translated.net/get';
        try {
            const response = await axios.get(url, {
                params: {
                    q: text,
                    langpair: `en|${language}`
                }
            });
            const translatedText = response.data.responseData.translatedText;
            setText(translatedText);
            props.showAlert("Text translated", 'success');
        }
        catch (error) {
            console.error("Error translating text:", error);
            props.showAlert("Error translating text", 'danger');
        }
    };

    const handleLanguageChange = (event) => {
        setLanguage(event.target.value);
    };

    const handleRecycle = () => {

        alert("Deleted texts:\n" + deletedTexts.join("\n\n"));
    };

    //  speech synthesis and recognitions

    const handleRead = () => {
        const speech = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);
        speech.speak(utterance);
        props.showAlert("Reading text", 'success');
    }

    const handleVoice = () => {
        const recognition = new window.webkitSpeechRecognition();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        recognition.start();

        recognition.onresult = (event) => {
            const spokenText = event.results[0][0].transcript;
            setText(spokenText);
            props.showAlert("Voice recognized", 'success');
        };

        recognition.onerror = (event) => {
            console.error('Error occurred in recognition: ', event.error);
            props.showAlert("Error recognizing voice", 'danger');
        };

        recognition.onend = () => {
            console.log('Speech recognition service disconnected');
        }
    }
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>{props.heading}</h2>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        style={{ background: props.mode === 'dark' ? '#143D60' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}
                        onChange={handleOnChange}
                        id="myBox"
                        rows="10"
                    ></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={reset}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Text Copy</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleGrammar}>Check Grammar</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleRecycle}>Recycle Bin</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleRead}>Read</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleVoice}>Voice</button>





                {/* <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleRecycle}>Recycle Bin</button> */}

                <select disabled={text.length === 0} className="form-select mx-2 my-2" value={language} onChange={handleLanguageChange}>
                    <option value="hi">Hindi</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="it">Italian</option>
                    <option value="ru">Russian</option>
                    <option value="ja">Japanese</option>
                    <option value="ko">Korean</option>
                    <option value="ar">Arabic</option>
                    <option value="zh-CN">Chinese</option>
                    <option value="E">English</option>
                </select>
                <button disabled={text.length === 0} className="btn btn-primary mx-2" onClick={handleTranslate}>Translate</button>
                <a href='https://web.whatsapp.com/'><button disabled={text.length === 0} type="button" className="btn btn-success">Share</button></a>
            </div>
            <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter(word => word.length > 0).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter(word => word.length > 0).length} Minutes read</p>
                <p>Preview</p>
                <p>{text.length > 0 ? text : "Enter something"}</p>
            </div>
        </>
    );
}