import { useState } from "react";
import memes from "../assets/memes";

export default function Main() {
  const [memesImg, setMemesImg] = useState("https://i.imgflip.com/345v97.jpg");
  const [words, setWords] = useState({
    top: "",
    bottom: ""
  })
  const wordsHandler = (e) => {
    const {name, value} = e.target
   setWords(prev => {
       return {
           ...prev,
           [name]: value 
       }
   })
 }
  const memeHandler = (e) => {
    e.preventDefault();
    const wordsCombined = {
        top: words.top,
        bottom: words.bottom
    }
    console.log(wordsCombined)
    const memesData = memes.data.memes;
    const random = Math.floor(Math.random() * memesData.length);
    const url = memesData[random].url;
    setMemesImg(url)
    setWords({
        top: "",
        bottom: ""
    })
  };

  return (
    <>
      <section className="flex items-center p-4">
        <div className="w-full">
          <form>
            <div className="flex gap-3 items-center">
              <input
                type="text"
                placeholder="top word"
                name="top"
                onChange={wordsHandler}
                value={words.top}
                className="w-full bg-gray-100 px-4 py-2 rounded-lg mt-2 focus:outline-none"
              />
              <input
                type="text"
                name="bottom"
                onChange={wordsHandler}
                value={words.bottom}
                placeholder="bottom-word"
                className="w-full bg-gray-100 px-4 py-2 rounded-lg mt-2 focus:outline-none"
              />
            </div>
            <button
              onClick={memeHandler}
              className="w-full mt-3 bg-primary rounded-lg px-4 py-2 text-lg text-white tracking-wide font-semibold font-sans"
            >
              Generate meme
            </button>
          </form>
          <img 
            src={memesImg}
            className="h-64 w-full mt-2"
            />
        </div>
      </section>
    </>
  );
}
