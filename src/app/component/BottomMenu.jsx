import Image from "next/image";
import home from "../../assets/home.png";
import book from "../../assets/book.png";
import bookMark from "../../assets/bookmark.png";
import duaQa from "../../assets/duaqa.png";
import duas from "../../assets/duas.png";
import memorize from "../../assets/memorize.png";
import ruqyah from "../../assets/ruqyah.png";

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
