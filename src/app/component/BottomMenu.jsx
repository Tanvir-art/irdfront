import Image from "next/image";
import logo from "../../assets/logo.png";
import home from "../../assets/Home.png";
import book from "../../assets/Book.png";
import bookMark from "../../assets/BookMark.png";
import duaQa from "../../assets/DuaQa.png";
import duas from "../../assets/duas.png";
import memorize from "../../assets/Memorize.png";
import ruqyah from "../../assets/Ruqyah.png";
import support from "../../assets/support.png";

const BottomMenu = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-md z-50 py-4">
      <div className="flex justify-around">
        <Image src={home} width={40} height={40} alt="home" />
        <Image src={duas} width={40} height={40} alt="duas" />
        <Image src={memorize} width={40} height={40} alt="memorize" />
        <Image src={bookMark} width={40} height={40} alt="bookMark" />
        <Image src={ruqyah} width={40} height={40} alt="ruqyah" />
        <Image src={duaQa} width={40} height={40} alt="duaQa" />
        <Image src={book} width={40} height={40} alt="book" />
      </div>
    </div>
  );
};

export default BottomMenu;
