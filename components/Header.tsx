import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { Search } from "lucide-react";

function Header() {
  return (
    <header>
      <Link href={"/"} className="">
        <Image
          src={"https://links.papareact.com/xsi"}
          alt="logo"
          width={150}
          height={150}
        />
      </Link>
      <form className="flex items-center bg-white  rounded-full w-full">
        <input
          type="text"
          placeholder="Search Everything..."
          className="flex-1"
        />
        <button>
          <Search className="rounded-full h-10" />
        </button>
      </form>
      Header
    </header>
  );
}

export default Header;
