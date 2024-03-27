import FooterTop from "@/components/FooterTop";
import Hero from "@/components/Hero";
import Image from "next/image";
import products from "@/app/data/products";
import Link from "next/link";
import { discount_price } from "@/utils/DiscountPrice";
export default function category() {
  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );
  return (
    <>
      <Hero />
      <main>
        {/* Product section start */}
        <section className="w-11/12 lg:w-10/12 max-w-7xl mx-auto py-0 lg:py-10 lg:flex justify-between items-start">
          <div className="w-full flex items-center justify-between lg:block lg:w-2/12 my-10 lg:my-0 lg:mt-4">
            {categories.map((name) => (
              <Link
                href={`/category/${name}`}
                className="hover:border-b border-black block h-6 box-border mt-5"
              >
                {name}
              </Link>
            ))}
          </div>
          <div className="sticky top-0 right-0 w-full lg:w-10/12 grid grid-cols-2 gap-4 lg:grid-cols-3 my-4 lg:my-10">
            {/* Product 1 Start */}
            {products.map((product) => (
              <div key={product.id}>
                <div className="relative delay-150 w-180px lg:w-full h-[205px] lg:h-[310px] bg-[#f8f8f8] transition-all duration-3000 ease-in-out transform">
                  <Image
                    src={product.thumbnail}
                    alt="iPhone 9"
                    layout="fill"
                    objectFit="cover"
                    className="bg-cover bg-center"
                  />
                </div>
                <h2 className="text-sm lg:text-base mt-2">
                  <a className="text-base font-bold" href={`/products/${product.id}`}>
                  {product.title}
                  </a>
                  <span className="text-[#919090]">
                    <a href={`/category/${product.category}`}>({product.category})</a>
                  </span>
                </h2>
                <p className="text-[#919090] text-sm ">
                {product.description}
                </p>
                <p className="text-rose-600 text-sm mt-4">
                  <span className="text-[#919090] line-through">${product.price}</span>{" "}
                  ${discount_price(product.price, product.discountPercentage) }
                </p>
              </div>
            ))}

            {/* Product 1 End */}
            {/* Repeat the same structure for other products */}
          </div>
        </section>
        {/* Product section end */}
        {/* Newsletter section start */}
        <FooterTop />
        {/* Newsletter section end */}
      </main>
    </>
  );
}
