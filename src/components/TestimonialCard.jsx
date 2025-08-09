function TestimonialCard({ name, role, avatar, text, date }) {
  return (
    <div className="flex flex-col min-h-64 h-auto relative mt-20 mb-16 p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group hover:bg-blue-dark hover:text-white">
      <div className="flex items-start mb-4">
        <div className="absolute right-10 top-10">
          <i className="fa-2xl fa-solid fa-quote-left text-blue-dark group-hover:text-white"></i>
        </div>
        <div className="absolute -top-8">
          <div className="absolute top-[-5px] right-[-5px] size-16 rounded-full bg-yellow-dark -z-10" />
          <img className="size-16 rounded-full object-cover" src={avatar} />
        </div>
        <div className="mt-6 space-y-1">
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-sm text-gray-500 group-hover:text-white">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 text-base leading-relaxed mb-4 group-hover:text-white">
        {text}
      </p>
      <div className="flex justify-between items-center mt-auto">
        <p className="text-sm text-gray-400">{date}</p>
        <div className="flex gap-1 text-yellow-400">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
