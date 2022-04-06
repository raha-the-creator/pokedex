import Image from "next/image";

const ListButton = ({ listtext = "Pokemon Type" }) => {
  return (
    <button className="list-button-cont">
      <div className="list-button-text-cont">
        <h1 className="list-button-text">{listtext}</h1>
      </div>
      <div className="list-button-arrow">
        <Image
          src={"/icon/arrowRight.svg"}
          alt="arrow right icon"
          width={27}
          height={28}
          className="arrow-right-icon"
        />
      </div>
    </button>
  );
};

export default ListButton;
