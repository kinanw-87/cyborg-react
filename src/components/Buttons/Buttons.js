import "./Buttons.css";

const PrimaryButton = (props) => {
  return <div className="primary-btn">{props.children}</div>;
};

const SecondaryButton = (props) => {
  return (
    <div className="secondary-btn">
      <a href="/#">{props.children}</a>
    </div>
  );
};

export default PrimaryButton;
export { SecondaryButton };
