import React from "react";

interface Props {
  fill?: string;
  stroke?: string;
  className?: string;
}

export const Home: React.FC<Props> = ({
  fill = "none",
  stroke = "",
  className = "w-[20px] h-[16px]",
}: Props) => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_1205_56637)">
      <path
        d="M2.65234 7.83895L10.3818 1.82715L18.1113 7.83895V17.2861C18.1113 17.7416 17.9303 18.1785 17.6082 18.5006C17.2861 18.8228 16.8492 19.0037 16.3936 19.0037H4.37C3.91445 19.0037 3.47756 18.8228 3.15543 18.5006C2.83331 18.1785 2.65234 17.7416 2.65234 17.2861V7.83895Z"
        stroke={stroke}
        stroke-width="1.71766"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.80469 19.0038V10.4155H12.9577V19.0038"
        stroke={stroke}
        stroke-width="1.71766"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1205_56637">
        <rect
          width="20.6119"
          height="20.6119"
          fill="white"
          transform="translate(0.0742188 0.109375)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const Profile: React.FC<Props> = ({
  fill = "none",
  stroke = "",
  className = "w-[21px] h-[21px]",
}: Props) => (
  <svg
    width="21"
    height="21"
    viewBox="0 0 21 21"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.3936 2.88281H4.37C3.42137 2.88281 2.65234 3.65183 2.65234 4.60047V16.6241C2.65234 17.5727 3.42137 18.3417 4.37 18.3417H16.3936C17.3422 18.3417 18.1113 17.5727 18.1113 16.6241V4.60047C18.1113 3.65183 17.3422 2.88281 16.3936 2.88281Z"
      stroke={stroke}
      stroke-width="1.71766"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.3812 11.4713C11.8041 11.4713 12.9577 10.3178 12.9577 8.89485C12.9577 7.47189 11.8041 6.31836 10.3812 6.31836C8.95822 6.31836 7.80469 7.47189 7.80469 8.89485C7.80469 10.3178 8.95822 11.4713 10.3812 11.4713Z"
      stroke={stroke}
      stroke-width="1.71766"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.08594 18.3416V16.6239C6.08594 16.1684 6.2669 15.7315 6.58903 15.4093C6.91115 15.0872 7.34804 14.9062 7.8036 14.9062H12.9566C13.4121 14.9062 13.849 15.0872 14.1711 15.4093C14.4933 15.7315 14.6742 16.1684 14.6742 16.6239V18.3416"
      stroke={stroke}
      stroke-width="1.71766"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const Watchlist: React.FC<Props> = ({
  fill = "none",
  stroke = "",
  className = "w-[22px] h-[21px]",
}: Props) => (
  <svg
    width="22"
    height="21"
    viewBox="0 0 22 21"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.9381 3.0957L13.3522 7.98633L18.7506 8.77539L14.8444 12.5801L15.7662 17.9551L10.9381 15.416L6.10999 17.9551L7.03186 12.5801L3.12561 8.77539L8.52405 7.98633L10.9381 3.0957Z"
      stroke={stroke}
      stroke-width="1.5625"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const Buzz: React.FC<Props> = ({
  fill = "none",
  stroke = "",
  className = "w-[22px] h-[21px]",
}: Props) => (
  <svg
    className={className}
    viewBox="0 0 22 21"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.347 2.55469H5.97205C5.57422 2.55469 5.19269 2.71272 4.91139 2.99403C4.63008 3.27533 4.47205 3.65686 4.47205 4.05469V16.0547C4.47205 16.4525 4.63008 16.834 4.91139 17.1153C5.19269 17.3967 5.57422 17.5547 5.97205 17.5547H14.972C15.3699 17.5547 15.7514 17.3967 16.0327 17.1153C16.314 16.834 16.472 16.4525 16.472 16.0547V6.67969L12.347 2.55469Z"
      stroke={stroke}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.972 2.55469V7.05469H16.472"
      stroke={stroke}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.22205 12.3047L9.72205 13.8047L12.722 10.8047"
      stroke={stroke}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const Leaderboard: React.FC<Props> = ({
  fill = "none",
  stroke = "",
  className = "w-[22px] h-[21px]",
}: Props) => (
  <svg
    className={className}
    viewBox="0 0 22 21"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.47205 8.10742H5.34705C4.84976 8.10742 4.37285 7.90988 4.02122 7.55825C3.66959 7.20662 3.47205 6.7297 3.47205 6.23242C3.47205 5.73514 3.66959 5.25823 4.02122 4.9066C4.37285 4.55497 4.84976 4.35742 5.34705 4.35742H6.47205"
      stroke={stroke}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.472 8.10742H16.597C17.0943 8.10742 17.5712 7.90988 17.9229 7.55825C18.2745 7.20662 18.472 6.7297 18.472 6.23242C18.472 5.73514 18.2745 5.25823 17.9229 4.9066C17.5712 4.55497 17.0943 4.35742 16.597 4.35742H15.472"
      stroke={stroke}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.97205 17.8574H16.972"
      stroke={stroke}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.47205 12.3516V14.1066C9.47205 14.5191 9.11955 14.8416 8.74455 15.0141C7.85955 15.4191 7.22205 16.5366 7.22205 17.8566"
      stroke={stroke}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.472 12.3516V14.1066C12.472 14.5191 12.8245 14.8416 13.1995 15.0141C14.0845 15.4191 14.722 16.5366 14.722 17.8566"
      stroke={stroke}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M15.472 2.85742H6.47205V8.10742C6.47205 9.3009 6.94615 10.4455 7.79007 11.2894C8.63398 12.1333 9.77857 12.6074 10.972 12.6074C12.1655 12.6074 13.3101 12.1333 14.154 11.2894C14.9979 10.4455 15.472 9.3009 15.472 8.10742V2.85742Z"
      stroke={stroke}
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const Exclamation: React.FC<Props> = ({
  fill = "none",
  stroke = "",
  className = "w-[21px] h-[21px]",
}: Props) => (
  <svg
  className={className}
    viewBox="0 0 21 21"
    fill={fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.5462 18.8581C15.1486 18.8581 18.8796 15.1271 18.8796 10.5247C18.8796 5.92237 15.1486 2.19141 10.5462 2.19141C5.94385 2.19141 2.21289 5.92237 2.21289 10.5247C2.21289 15.1271 5.94385 18.8581 10.5462 18.8581Z"
      stroke="white"
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.5463 13.8587V10.5254"
      stroke="white"
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10.5463 7.19141H10.5546"
      stroke="white"
      stroke-width="1.66667"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);
