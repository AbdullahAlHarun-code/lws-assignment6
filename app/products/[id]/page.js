import products from "@/app/data/products";
import { discount_price } from "@/utils/DiscountPrice";
import Image from "next/image";
import Link from "next/link";

export default function SingleProduct({ params }) {
  const { id } = params;
  const product = products.find((product) => product.id.toString() === id);
  //const {title} = product
  console.log(product);
  return (
    <main className="h-screen">
      <section className="bg-[#fafaf2] h-full py-20">
        <div className="w-11/12 lg:w-8/12 max-w-7xl mx-auto flex flex-col gap-12 lg:flex-row items-center justify-between">
          <div className="w-full lg:w-7/12 border border-slate-500/20 p-4">
            <Image
              src={`${product.thumbnail}`}
              className="w-[400px] h-[500px] mx-auto object-cover"
              alt=""
              width="400"
              height="500"
            />

            <div className="flex gap-4 mt-4">
              {product.images.map((image,index) => (
                <Image
                  key={index}
                  src={image}
                  className="w-[100px] h-[100px] mx-auto border object-cover"
                  alt=""
                  width="100"
                  height="100"
                />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <h1 className="italic text-xl lg:text-3xl font-serif font-semibold">
              {product.title}
            </h1>
            <Link href={`/category/${product.category}`} className="text-[#919090] my-3">{product.category}</Link>
            <div className="mt-3 flex items-center justify-start gap-1">
              <Image src="/svg/star.svg" width="20" height="20" alt="" />
              <Image src="/svg/star.svg" width="20" height="20" alt="" />
              <Image src="/svg/star.svg" width="20" height="20" alt="" />
              <Image src="/svg/star.svg" width="20" height="20" alt="" />
              <Image src="/svg/star.svg" width="20" height="20" alt="" />
            </div>
            <hr className="my-5 bg-black" />

            <div>
              <p className="my-3">
                <span className="text-rose-600 opacity-60 line-through">
                  ${product.price}
                </span>
                <span className="font-bold text-2xl">${discount_price(product.price, product.discountPercentage)}</span>
              </p>
            </div>
            <div>
              <p className="leading-7">
                {product.description}
              </p>

              <button className="w-full bg-[#1a1a1a] hover:bg-[#3a3a3a] text-center py-3 mt-5 text-white rounded-full">
                Add To Cart - ${discount_price(product.price, product.discountPercentage)}
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
