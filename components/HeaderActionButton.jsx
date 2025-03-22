import Button from "../Button";

const HeaderActionButtons = ({ className }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <Button variant="ghost" className="max-xl:text-xs rounded">
        Log In
      </Button>
      <Button variant="secondary" className="max-xl:text-xs rounded">
        Sign Up
      </Button>
    </div>
  );
};

export default HeaderActionButtons;
