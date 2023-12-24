import { BookmarkBorderOutlined, ShareOutlined } from "@mui/icons-material";
import Header from "./components/Header";
import RatherCard from "./components/RatherCard";

export default function Home() {
  let cardClass = "";
  const numberOfCards = 2;
  switch (numberOfCards) {
    case 2:
      cardClass = "w-[48%] flex-wrap"; // 2 cards, side by side
      break;
    case 3:
      cardClass = "flex-row w-[30%]"; // 3 cards, side by side
      break;
    case 4:
      cardClass = "flex-wrap w-[48%]"; // 4 cards, in two rows of 2
      break;
    case 5:
      cardClass = "flex-wrap w-[30%]"; // 5 cards, in two rows (2 on top, 3 on bottom)
      break;
    case 6:
      cardClass = "flex-wrap w-[30%]"; // 6 cards, in two rows of 3
      break;
    default:
      cardClass = "flex-wrap"; // Default to flex-wrap
  }

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
        <Header />
      </div>
      <div className="flex flex-col h-full max-w-[1100px] justify-evenly z-50 items-center">
        <div className="flex w-full p-3 max-h-[40vh]">
          <div className="flex flex-col w-[90%] py-5 px-8 space-y-5 border-black border rounded-xl">
            <div className="text-lg font-bold">
              Santa has decided to hold a prize draw this year and you're the
              lucky winner! He is asking you to pick one of the items from a
              list. Which gift would you rather receive for Christmas?
            </div>
            <div className="w-full border-b border-black " />
            <div className="overflow-y-scroll">
              Santa has decided to hold a prize draw this year and you're the
              lucky winner! He is asking you to pick one of the items from a
              list. Which gift would you rather receive for Christmas?Santa has
              decided to hold a prize draw this year and you're the lucky
              winner! He is asking you to pick one of the items from a list.
            </div>
          </div>
          <div className="w-[10%] flex justify-center space-x-3 pt-5 h-full">
            <BookmarkBorderOutlined
              sx={{ fontSize: "40px" }}
              className="transition-all duration-300 cursor-pointer hover:scale-125"
            />
            <ShareOutlined
              sx={{ fontSize: "40px" }}
              className="transition-all duration-300 cursor-pointer hover:scale-125"
            />
          </div>
        </div>
        <div className="flex flex-wrap justify-between w-full h-[45vh] overflow-y-scroll z-50 p-3">
          <div className="w-[32%] my-2 rounded-lg flex justify-center items-center h-10/12 bg-[#00000027]">
            Akshit
          </div>
          <div className="w-[32%] my-2 rounded-lg flex justify-center items-center h-10/12 bg-[#00000027]">
            Akshit
          </div>
          <div className="w-[32%] my-2 rounded-lg flex justify-center items-center h-10/12 bg-[#00000027]">
            Akshit
          </div>
        </div>
      </div>
    </div>
  );
}
