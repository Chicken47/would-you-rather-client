"use client";

import { BookmarkBorderOutlined, ShareOutlined } from "@mui/icons-material";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import he from "he";

export default function Home() {
  let cardClass = "";
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [wyrData, setWyrData] = useState({
    question: "",
    selftext: "",
    options: [],
  });
  const [type, setType] = useState("new");
  const poll_length = wyrData.options.length;
  const numberOfCards = poll_length;
  switch (numberOfCards) {
    case 2:
      cardClass = "w-[48%] text-[1.5vw]";
      break;
    case 3:
      cardClass = "w-[30%] text-[1.5vw]";
      break;
    case 4:
      cardClass = " w-[48%]";
      break;
    case 5:
      cardClass = " w-[30%]";
      break;
    case 6:
      cardClass = " w-[30%]";
      break;
    default:
      cardClass = "";
  }

  useEffect(() => {
    console.log("lmfao");
    const data = {
      type: type,
    };
    axios.post("http://localhost:8080/v1/get/wyrs", data).then((response) => {
      console.log("haha");
      const questions = response.data.data.children;
      setWyrData({
        question: questions[currentQuestionIndex].data.title,
        selftext: questions[currentQuestionIndex].data.selftext_html,
        options: questions[currentQuestionIndex].data.poll_data
          ? questions[currentQuestionIndex].data.poll_data?.options.map(
              (option) => option?.text
            )
          : [],
      });
    });
  }, [currentQuestionIndex, type]);

  console.log("wyrdata", wyrData.options);
  let htmlDecoded = he.decode(wyrData.selftext);
  console.log(htmlDecoded.split(`<p><a href="https://www.reddit.`)[0].length);
  return (
    <div className="w-screen flex flex-col items-center overflow-hidden h-screen bg-[#FFE8D6]">
      <div
        className="fixed w-full h-full "
        style={{
          backgroundImage: "url(/images/paperTexture.png)",
          backgroundSize: "cover",
        }}
      />
      <div
        className="absolute overflow-hidden top-0 right-0  w-[500px] h-[500px]"
        style={{
          backgroundImage: "url(/images/blurOne.png)",
          backgroundSize: "cover",
        }}
      />
      <div
        className="absolute overflow-hidden left-0 bottom-0 w-[500px] h-[500px]"
        style={{
          backgroundImage: "url(/images/blobTwo.png)",
          backgroundSize: "cover",
        }}
      />
      <div className="z-50 flex justify-center w-full py-5">
        <Header type={type} setType={setType} />
      </div>
      <div className="flex flex-col h-full max-w-[1100px] w-[1000px] justify-evenly z-50 items-center">
        <div className="flex w-full p-3 max-h-[40vh]">
          <div className="flex flex-col w-full px-8 py-5 space-y-5 border border-black rounded-xl">
            <div className="text-lg font-bold">{wyrData.question}</div>
            {htmlDecoded.split(`<p><a href="https://www.reddit.`)[0].length !==
              31 && (
              <>
                <div className="w-full border-b border-black " />
                <div
                  className="overflow-y-scroll"
                  dangerouslySetInnerHTML={{
                    __html: htmlDecoded.split(
                      `<p><a href="https://www.reddit.`
                    )[0],
                  }}
                >
                  {/* {wyrData.selftext} */}
                </div>
              </>
            )}
          </div>
          {/* <div className="w-[10%] flex justify-center space-x-3 pt-5 h-full">
            <BookmarkBorderOutlined
              sx={{ fontSize: "40px" }}
              className="transition-all duration-300 cursor-pointer hover:scale-125"
            />
            <ShareOutlined
              sx={{ fontSize: "40px" }}
              className="transition-all duration-300 cursor-pointer hover:scale-125"
            />
          </div> */}
        </div>
        {wyrData.options.length === 0 && (
          <div
            onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
            className="px-3 py-2 border border-black rounded cursor-pointer"
          >
            Next
          </div>
        )}
        <div className="flex flex-wrap justify-evenly w-full h-[45vh] overflow-y-scroll z-50 p-3">
          {wyrData.options.map((option, idx) => {
            return (
              <div
                key={idx}
                onClick={() =>
                  setCurrentQuestionIndex(currentQuestionIndex + 1)
                }
                className={`${cardClass} my-2 cursor-pointer p-2 text-center rounded-lg flex justify-center items-center h-10/12 bg-[#00000027] hover:bg-[#00000074] hover:text-white transition-all`}
              >
                {option}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
