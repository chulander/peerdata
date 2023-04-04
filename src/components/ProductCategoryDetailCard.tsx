export type ProductCategoryDetailCard = {
  name: string;
  img: string;
  caption: string;
  description: string;
  className?: string;
};

export function ProductCategoryDetailCard({
  name,
  img,
  caption,
  description,
  className,
}: ProductCategoryDetailCard) {
  return (
    <div
      className={`flex w-full flex-col items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row ${className}`}
    >
      <div className="flex w-1/2 flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <h6 className="text-gray-900 dark:text-white">{caption}</h6>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
      <div className="w-1/2">
        <img
          className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={img}
          alt=""
        />
      </div>
    </div>
  );
}

export default ProductCategoryDetailCard;
