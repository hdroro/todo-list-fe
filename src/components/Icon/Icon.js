export const PlusIcon = ({
  width = "16",
  height = "16",
  className,
  onClick,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    className={className}
    width={width}
    height={height}
    fill="currentColor"
    viewBox="0 0 448 512"
  >
    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
  </svg>
);

export const TrashIcon = ({
  width = "2rem",
  height = "2rem",
  className,
  onClick,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    className={className}
    width={width}
    height={height}
    fill="currentColor"
    viewBox="0 0 448 512"
  >
    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
  </svg>
);

export const AccountIcon = ({
  width = "1.5rem",
  height = "1.5rem",
  className,
  onClick,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
    className={className}
    width={width}
    height={height}
    fill="currentColor"
    viewBox="0 0 448 512"
  >
    <svg>
      <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
    </svg>
  </svg>
);

export const CalendarCurrentDay = ({
  width = "24",
  height = "24",
  className,
  onClick,
  dateCurren,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    onClick={onClick}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 6.00049C20 4.89592 19.1046 4.00049 18 4.00049H6C4.89543 4.00049 4 4.89592 4 6.00049V18.0005C4 19.1051 4.89543 20.0005 6 20.0005H18C19.1046 20.0005 20 19.1051 20 18.0005V6.00049ZM17 8.00049C17.2761 8.00049 17.5 8.22435 17.5 8.50049C17.5 8.77663 17.2761 9.00049 17 9.00049H7C6.72386 9.00049 6.5 8.77663 6.5 8.50049C6.5 8.22435 6.72386 8.00049 7 8.00049H17Z"
      fill="currentColor"
    ></path>
    <text
      fontFamily="-apple-system, system-ui, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
      fontSize="9"
      transform="translate(4 2)"
      fontWeight="500"
      style={{ fill: "#fff" }}
    >
      <tspan x="8" y="15" textAnchor="middle">
        {dateCurren}
      </tspan>
    </text>
  </svg>
);

export const CalendarUpcomingDate = ({
  width = "24",
  height = "24",
  className,
  onClick,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    onClick={onClick}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6Zm10 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm9-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 8a.5.5 0 0 0 0 1h10a.5.5 0 0 0 0-1H7Z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const AddTaskIcon = ({
  width = "24",
  height = "24",
  className,
  onClick,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    onClick={onClick}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm-.711-16.5a.75.75 0 1 1 1.5 0v4.789H17.5a.75.75 0 0 1 0 1.5h-4.711V17.5a.75.75 0 0 1-1.5 0V12.79H6.5a.75.75 0 1 1 0-1.5h4.789V6.5Z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const ToggleSidebar = ({
  width = "24",
  height = "24",
  className,
  onClick,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    onClick={onClick}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M19 4.001H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2Zm-15 2a1 1 0 0 1 1-1h4v14H5a1 1 0 0 1-1-1v-12Zm6 13h9a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1h-9v14Z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const DueDate = ({
  width = "16",
  height = "16",
  className,
  onClick,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    onClick={onClick}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      d="M12 2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8zm0 1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1.25 7a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5zm.75-5a.5.5 0 1 1 0 1h-7a.5.5 0 0 1 0-1h7z"
    ></path>
  </svg>
);

export const CheckedIcon = ({
  width = "16",
  height = "16",
  className,
  onClick,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    onClick={onClick}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 14.001a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-1a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM5.146 8.147a.5.5 0 0 1 .708 0L7 9.294l3.146-3.147a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 0-.708Z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const RoundedIcon = ({
  width = "24",
  height = "24",
  className,
  onClick,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    onClick={onClick}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M8 14.001a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-1a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM5.146 8.147a.5.5 0 0 1 .708 0L7 9.294l3.146-3.147a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 0-.708Z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const CheckIcon = ({
  width = "24",
  height = "24",
  className,
  onClick,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
  </svg>
);

export const CircleIcon = ({
  width = "16",
  height = "16",
  className,
  onClick,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
  </svg>
);

export const ChevRonDownIcon = ({
  width = "16",
  height = "16",
  className,
  onClick,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
  </svg>
);

export const ChevRonRightIcon = ({
  width = "16",
  height = "16",
  className,
  onClick,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
  >
    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
  </svg>
);

export const EditIcon = ({
  width = "16",
  height = "16",
  className,
  onClick,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
  >
    <path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
  </svg>
);

export const Trashicon = ({
  width = "16",
  height = "16",
  className,
  onClick,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
  </svg>
);

export const ChevLeftWeekIcon = ({
  width = "24",
  height = "24",
  className,
  onClick,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <path d="M24 0v24H0V0z"></path>
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="m10.707 12 3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708.708L10.707 12z"
      ></path>
    </g>
  </svg>
);

export const ChevRightWeekIcon = ({
  width = "24",
  height = "24",
  className,
  onClick,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g fill="none" fillRule="evenodd">
      <path d="M0 24V0h24v24z"></path>
      <path
        fill="currentColor"
        fillRule="nonzero"
        d="M13.293 12 9.646 8.354a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 12z"
      ></path>
    </g>
  </svg>
);

export const CancelIcon = ({
  width = "24",
  height = "24",
  className,
  onClick,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    onClick={onClick}
    viewBox="0 0 24 24"
    class="icon_close"
  >
    <path
      fill="currentColor"
      fillRule="nonzero"
      d="M5.146 5.146a.5.5 0 0 1 .708 0L12 11.293l6.146-6.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 0 .708L12.707 12l6.147 6.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.708 0L12 12.707l-6.146 6.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1 0-.708L11.293 12 5.146 5.854a.5.5 0 0 1-.057-.638z"
    ></path>
  </svg>
);

export const SaveIcon = ({
  width = "24",
  height = "24",
  className,
  onClick,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M7.18 6.396C7 6.642 7 7.054 7 7.878V11l6.715.674c.38.038.38.614 0 .652L7 13v3.122c0 .824 0 1.236.18 1.482.157.214.4.356.669.39.308.041.687-.15 1.444-.531l8.183-4.122c.861-.434 1.292-.651 1.432-.942a.915.915 0 0 0 0-.798c-.14-.29-.57-.508-1.433-.942l-8.18-4.122c-.758-.381-1.137-.572-1.445-.532a.986.986 0 0 0-.67.391Z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const EyeIconOpen = ({
  width = "24",
  height = "24",
  className,
  onClick,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
  >
    <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
  </svg>
);

export const EyeIconClose = ({
  width = "24",
  height = "24",
  className,
  onClick,
}) => (
  <svg
    className={className}
    width={width}
    height={height}
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 512"
  >
    <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm51.3 163.3l-41.9-33C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5zm-88-69.3L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8z" />
  </svg>
);
