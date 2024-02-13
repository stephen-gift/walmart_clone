import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
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
      <Image
        src={product.image}
        alt={product.title}
        width={200}
        height={200}
        className="mx-auto"
      />
      <p className="text-xl">
        {product.price?.currency}
        {product.price.price}
      </p>

      {product.badge && (
        <Badge className="w-fit absolute top-2 right-2">{product.badge}</Badge>
      )}

      <p className="font-light">{product.title}</p>

      {product.rating && (
        <p className="text-yellow-500 text-sm">
          {product.rating.rating}⭐
          <span className="text-gray-400 ml-2">{product.rating.count}</span>
        </p>
      )}
    </Link>
  );
}

export default Product;
