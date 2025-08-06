import { IconExternalLink } from "@tabler/icons-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const CardComponent = ({ card }) => {
  const navigate = useNavigate();
  const onClickCard = () => {
    navigate(`${card.link}`);
  };
  return (
    <div className="  p-2 bg-gradient-to-r from-[#8d3dc1]/20  to-[#6daaf0]/20 rounded-2xl flex flex-col gap-6 justify-center items-center min-w-[45] h-39 2xl:h-56 2xl:gap-10 flex-wrap">
      <div className="flex justify-center  text-sm lg:text-lg  font-semibold text-black/70">
        {card.testName}
      </div>
      <div className=" bg-[#6324b5]/90 min-w-[80%] hover:bg-[#6324b5]/100 cursor-pointer text-white rounded-md flex justify-center">
        <div
          className="w-full h-full p-2 border flex justify-center text-sm items-center gap-2"
          onClick={onClickCard}
        >
          View Steps <IconExternalLink size={17} />
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
