function TestimonialCard({ name, role, avatar, text, date }) {
  return (
    <div className="relative h-full p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group hover:bg-blue-dark hover:text-white">
      <div className="flex items-start mb-4">
        <div className="absolute -top-8">
          <img className="size-16 rounded-full object-cover" src={avatar} />
        </div>
        <div className="mt-6 flex justify-between w-full">
          <h3 className="font-bold text-lg">{name}</h3>
          <p className="text-sm text-gray-500 group-hover:text-white">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 text-base leading-relaxed mb-4 group-hover:text-white">
        {text}
      </p>
      <div className="text-sm text-gray-400">{date}</div>
    </div>
  );
}

export default TestimonialCard;
