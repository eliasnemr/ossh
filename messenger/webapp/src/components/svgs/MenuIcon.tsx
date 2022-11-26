interface IProps {
  size: number;
  handleOnClick: () => void;
}

const MenuIcon = ({ size, handleOnClick }: IProps) => {
  return (
    <div onClick={handleOnClick} className="menu__icon_wrapper">
      <svg
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="MenuIcon"
        width={size}
        height={size}
        className="menu__icon"
      >
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
      </svg>
    </div>
  );
};

export default MenuIcon;
