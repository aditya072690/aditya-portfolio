import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, playStoreUrl, appStoreUrl }) => {
  const hasGit = gitUrl && gitUrl !== "";
  const hasPreview = previewUrl && previewUrl !== "/" && previewUrl !== "";
  const hasPlayStore = playStoreUrl && playStoreUrl !== "";
  const hasAppStore = appStoreUrl && appStoreUrl !== "";

  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 gap-3">
          {hasGit && (
            <Link
              href={gitUrl} target="_blank"
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link flex items-center justify-center"
            >
              <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
          {hasPreview && (
            <Link
              href={previewUrl.startsWith("http") ? previewUrl : `https://${previewUrl}`} target="_blank"
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link flex items-center justify-center"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
          {hasPlayStore && (
            <Link
              href={playStoreUrl} target="_blank"
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link flex items-center justify-center"
              title="View on Google Play Store"
            >
              <svg className="h-8 w-8 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 3.003c0-.623.684-.997 1.206-.653l12.72 8.35c.484.317.484 1.03 0 1.348l-12.72 8.35c-.522.344-1.206-.03-1.206-.653V3.003z" />
              </svg>
            </Link>
          )}
          {hasAppStore && (
            <Link
              href={appStoreUrl} target="_blank"
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link flex items-center justify-center"
              title="View on Apple App Store"
            >
              <svg className="h-8 w-8 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.21.67-2.93 1.49-.62.69-1.16 1.84-1.01 2.96 1.12.09 2.27-.58 2.95-1.39z" />
              </svg>
            </Link>
          )}
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE] text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
