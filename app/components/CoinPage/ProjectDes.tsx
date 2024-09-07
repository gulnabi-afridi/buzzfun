import React from "react";

const ProjectDes: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex max-w-[700px] 2xl:max-w-full flex-col gap-4">
        <p className="text-[18px] dark:text-white-1 font-semibold text-black-1">
          Project Description:
        </p>
        <p className="text-[14px] dark:text-white-1 font-normal text-black-1">
          orem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&lsquo;s standard dummy
          text ever since the 1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially.
        </p>
      </div>
    </div>
  );
};

export default ProjectDes;
