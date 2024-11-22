import Image from "next/image";
import logo from "../../assets/logo.png";
import home from "../../assets/home.png";
import book from "../../assets/book.png";
import bookMark from "../../assets/bookMark.png";
import duaQa from "../../assets/duaqa.png";
import duas from "../../assets/duas.png";
import memorize from "../../assets/memorize.png";
import ruqyah from "../../assets/ruqyah.png";
import support from "../../assets/support.png";

const LeftMenu = () => {
  return (
    <div className="my-4 ml-4 ">
      <div className="bg-white w-[100px] h-[650px] px-2 pt-8 flex flex-col items-center justify-between rounded-3xl overflow-x-auto scrollbar-thin">
        {/* Logo */}
        <div>
          <Image src={logo} alt="logo" width={73} height={73} />
        </div>

        {/* all menu */}
        <div className="py-14">
          <ul className="space-y-8 list-none">
            <li>
              <Image src={home} width={40} height={40} alt="home" />
            </li>
            <li>
              <Image src={duas} width={40} height={40} alt="duas" />
            </li>
            <li>
              <Image src={memorize} width={40} height={40} alt="memorize" />
            </li>
            <li>
              <Image src={bookMark} width={40} height={40} alt="bookMark" />
            </li>
            <li>
              <Image src={ruqyah} width={40} height={40} alt="ruqyah" />
            </li>
            <li>
              <Image src={duaQa} width={40} height={40} alt="duaQa" />
            </li>
            <li>
              <Image src={book} width={40} height={40} alt="book" />
            </li>
          </ul>
        </div>

        <div className="pb-4">
          <Image src={support} width={73} height={73} alt="support" />
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
