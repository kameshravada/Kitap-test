import { IconArrowNarrowLeft } from '@tabler/icons-react';
import React from 'react'
import { Link } from 'react-router-dom';
import { ControlFlowData } from '../Data/Data1';

const ControlFlow = () => {
  return (
    <div>
      <div className="flex flex-col ">
        <div className="px-4 sm:px-8  space-y-5 pb-14 pt-8 bg-gradient-to-r  !from-[#4b2b99]  !to-[#639eed]">
          <Link
            to={"/"}
            className="flex gap-1 text-white w-fit bg-black/25 p-2 rounded-md"
          >
            <IconArrowNarrowLeft /> Back
          </Link>
          <h2 className="text-3xl font-bold text-white">
            Control Flow Actions
          </h2>
        </div>

        <div className="px-4 sm:px-8 bg-white rounded  space-y-5 py-14 ">
          <div className="text-xl font-semibold text-zinc-900 pl-3">
            {ControlFlowData.category}
          </div>
          {ControlFlowData.steps.map((item, index) => (
            <div
              className="flex flex-col gap-2  rounded-xl shadow p-3"
              key={index}
            >
              <div className="text-lg font-semibold text-cyan-700">
                {index + 1} . {item.name}
              </div>
              <div className="text-sm">Description : {item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ControlFlow