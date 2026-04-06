import React from "react";

const SparkleIcon = ({ className = "" }) => {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g clipPath="url(#clip0_547_1125)">
        <path
          d="M6.62057 10.3269C6.56109 10.0964 6.44091 9.88593 6.27253 9.71755C6.10415 9.54918 5.89373 9.42899 5.66316 9.36951L1.57566 8.31549C1.50593 8.2957 1.44455 8.2537 1.40085 8.19586C1.35714 8.13803 1.3335 8.06751 1.3335 7.99502C1.3335 7.92253 1.35714 7.85202 1.40085 7.79418C1.44455 7.73635 1.50593 7.69434 1.57566 7.67455L5.66316 6.61986C5.89365 6.56044 6.10401 6.44036 6.27238 6.2721C6.44075 6.10385 6.56098 5.89357 6.62057 5.66312L7.67459 1.57563C7.69418 1.50561 7.73614 1.44393 7.79406 1.4C7.85199 1.35606 7.92269 1.33228 7.99539 1.33228C8.06809 1.33228 8.1388 1.35606 8.19672 1.4C8.25464 1.44393 8.2966 1.50561 8.3162 1.57563L9.36955 5.66312C9.42903 5.89369 9.54921 6.10411 9.71759 6.27249C9.88597 6.44087 10.0964 6.56105 10.327 6.62053L14.4145 7.67388C14.4847 7.69327 14.5467 7.73519 14.5909 7.7932C14.6351 7.85121 14.659 7.92211 14.659 7.99502C14.659 8.06794 14.6351 8.13884 14.5909 8.19685C14.5467 8.25486 14.4847 8.29677 14.4145 8.31616L10.327 9.36951C10.0964 9.42899 9.88597 9.54918 9.71759 9.71755C9.54921 9.88593 9.42903 10.0964 9.36955 10.3269L8.31553 14.4144C8.29594 14.4844 8.25398 14.5461 8.19606 14.59C8.13813 14.634 8.06743 14.6578 7.99473 14.6578C7.92203 14.6578 7.85132 14.634 7.7934 14.59C7.73548 14.5461 7.69352 14.4844 7.67392 14.4144L6.62057 10.3269Z"
          stroke="#12B76A"
          strokeWidth="1.33252"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.3252 1.99878V4.66381"
          stroke="#12B76A"
          strokeWidth="1.33252"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.6577 3.3313H11.9927"
          stroke="#12B76A"
          strokeWidth="1.33252"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.66504 11.3264V12.6589"
          stroke="#12B76A"
          strokeWidth="1.33252"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.33105 11.9927H1.99854"
          stroke="#12B76A"
          strokeWidth="1.33252"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_547_1125">
          <rect width="15.9902" height="15.9902" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const FeaturesBadge = () => {
  return (
    <div className="w-24 sm:w-28 h-8 sm:h-10 pl-3 sm:pl-4 bg-white/10 rounded-full outline outline-[1.26px] outline-offset-[-1.26px] outline-white/20 inline-flex justify-start items-center gap-2">
      <SparkleIcon className="w-3 h-3 sm:w-4 sm:h-4" />
      <span className="text-slate-300 text-xs sm:text-sm font-medium leading-5 font-primary">
        Features
      </span>
    </div>
  );
};

export default FeaturesBadge;

