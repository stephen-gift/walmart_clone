import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "lucide-react";
import { Organic } from "@/typings/searchTypings";


function Product({ product }: { product: Organic }) {
  return (
    <Link
      className="flex flex-col relative border rounded-md h-full p-5"
      href={{
        pathname: "/product",
        query: { url: product.url },
      }}
    >
      Products
    </Link>
  );
}

export default Product;
