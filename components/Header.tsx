"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import {
  Grid2X2,
  Heart,
  LayoutGrid,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";
import { useCartStore } from "@/store";
import { getCartTotal } from "@/lib/getCartTotal";

function Header() {
  const router = useRouter();
  const cart = useCartStore((state) => state.cart);
  const total = getCartTotal(cart);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = e.currentTarget.input.value;
    router.push(`/search?q=${input}`);
  };
  return (
    <header className="flex flex-col md:flex-row bg-walmart px-10 py-7 items-center space-x-5">
      <Link href={"/"} className="">
        <Image
          src={"https://links.papareact.com/xsi"}
          alt="logo"
          width={150}
          height={150}
        />
      </Link>
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-white  rounded-full w-full"
      >
        <input
          type="text"
          name="input"
          placeholder="Search Everything..."
          className="flex-1 px-4 rounded-l-full outline-none placeholder:text-sm text-black"
        />
        <button type="submit">
          <Search className="rounded-full h-10 px-2 w-10 bg-yellow-400" />
        </button>
      </form>

      <div className="flex space-x-5 mt-5 md:mt-0p-5 pb-0 md:p-0">
        <Link
          href={"/"}
          className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <Grid2X2 size={20} />
          <p>Departments</p>
        </Link>
        <Link
          href={"/"}
          className="hidden xl:flex text-white font-bold items-center space-x-2 text-sm"
        >
          <LayoutGrid size={20} />
          <p>Services</p>
        </Link>
        <Link
          href={"/"}
          className="flex text-white font-bold items-center space-x-2 text-sm"
        >
          <Heart size={20} />
          <div>
            <p className="text-xs font-extralight">Reorder</p>
            <p>My Items</p>
          </div>
        </Link>
        <Link
          href={"/"}
          className="flex text-white font-bold items-center space-x-2 text-sm"
        >
          <User size={20} />
          <div>
            <p className="text-xs font-extralight">Sigh In</p>
            <p>Account</p>
          </div>
        </Link>
        <Link
          href={"/basket"}
          className="flex text-white font-bold items-center space-x-2 text-sm"
        >
          <ShoppingCart size={20} />
          <div>
            <p className="text-xs font-extralight">
              {cart.length > 0 ? `${cart.length} items` : "No items"}
            </p>
            <p>{total}</p>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
