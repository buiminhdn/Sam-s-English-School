import { SOCIAL_LINKS } from "../routes/routePath";

function CourseItem({
  image,
  title,
  description,
  enrolled,
  classesTaken,
  buttonText = "Tham gia ngay",
}) {
  return (
    <div className="rounded-xl bg-white shadow-md hover:shadow-2xl transition-shadow duration-500 h-full flex flex-col">
      <img
        src={image}
        alt={title}
        className="rounded-t-xl h-50 w-full object-cover"
      />

      <div className="p-4 flex flex-col justify-between flex-1">
        <div>
          <p className="text-lg font-medium">{title}</p>
          <p className="mt-1 text-gray-600">{description}</p>
        </div>

        <div className="w-full border border-gray-300 border-dashed my-4"></div>

        <div className="flex items-center gap-2">
          <div className="bg-blue-light size-8 text-blue-dark rounded-md flex items-center justify-center">
            <i className="fa-regular fa-screen-users"></i>
          </div>
          <p className="text-gray-700">{enrolled}</p>
        </div>

        <div className="flex items-center gap-2 mt-3">
          <div className="bg-blue-light size-8 text-blue-dark rounded-md flex items-center justify-center">
            <i className="fa-regular fa-chalkboard-user"></i>
          </div>
          <p className="text-gray-700">{classesTaken}</p>
        </div>

        <a
          href={SOCIAL_LINKS.ZALO}
          target="_blank"
          className="block text-center border-2 border-yellow-dark bg-yellow-light p-2.5 w-full rounded-lg mt-6 text-yellow-darker hover:bg-yellow-darker hover:text-white transition-colors duration-300"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}

export default CourseItem;
