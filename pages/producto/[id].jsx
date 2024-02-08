export default function Producto(props) {
  return (
    <div>
      <h1>{props.product.title}</h1>
    </div>
  );
}

export async function getServerSideProps(context) {
  //console.log("context", context);
  const productId = context.params.id;
  const response = await fetch(`https://dummyjson.com/products/${productId}`);
  const product = await response.json();
  return {
    props: {
      // will be passed to the page component as props
      product: product,
    },
  };
}
