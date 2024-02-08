import Link from "next/link";

export default function ProductCard({ product }) {
  //console.log(product);
  return (
    <article className="w-[300px] h-[420px] m-2 bg-gray-100 p-2 rounded-lg">
      <img
        src={product?.thumbnail}
        alt=""
        className=" max-h-48 w-full rounded-lg"
      />
      <div className=" flex flex-col items-center gap-3">
        <h2 className=" font-bold pt-5">{product?.title}</h2>
        <p>{product?.description}</p>
        <Link href={`/producto/${product?.id}`}>
          <button className=" bg-blue-700 text-white px-6 py-2 font-bold rounded-xl ">
            Ver detalle
          </button>
        </Link>
      </div>
    </article>
  );
}
