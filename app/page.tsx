const searches = [
  {
    id: 1,
    term: "4K TVs over $1000",
    url: "/search/4KTVs?sort_by=r&min_price=1000",
    color: "bg-blue-500",
  },
  {
    id: 2,
    term: "Surface Laptop",
    url: "/search/surface-laptop",
    color: "bg-yellow-500",
  },
  {
    id: 3,
    term: "Bose Headphones",
    url: "/search/bose-headphones",
    color: "bg-green-500",
  },
  {
    id: 4,
    term: "Smartwatches under $200",
    url: "/search/smartwatches?sort_by=r&max_price=200",
    color: "bg-purple-500",
  },
  {
    id: 5,
    term: "Sculptures over $1000",
    url: "/search/sculptures?sort_by=r&min_price=1000",
    color: "bg-slate-500",
  },
  {
    id: 6,
    term: "Gaming Laptops",
    url: "/search/gaming-laptops",
    color: "bg-violet-500",
  },
  {
    id: 7,
    term: "Nike Sneakers",
    url: "/search/nike-sneakers",
    color: "bg-orange-500",
  },
  {
    id: 8,
    term: "Puma Running Shoes",
    url: "/search/puma-running-shoes",
    color: "bg-cyan-500",
  },
  {
    id: 9,
    term: "Drones under $300",
    url: "/search/drones?sort_by=r&max_price=300",
    color: "bg-yellow-500",
  },
];


export default function Home() {
  return (
    <main className="p-10 pt-0 text-center md:text-left">
      <h1 className="text-3xl font-extralight mb-5">
        Welcome to Google Shopping
      </h1>
      <h2 className="mb-5">
        Get started by clicking on one of the example search items or typing in
        an item yourself above!
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center items-center gap-5 mt-5">
        {
          // map through searches and display them
          searches.map((search) => (
            <a
              key={search.id}
              href={search.url}
              className={`${search.color} w-full h-36 hover:opacity-50 text-white font-bold py-2 px-4 rounded`}
            >
              {search.term}
            </a>
          ))
        }
      </div>
    </main>
  );
}