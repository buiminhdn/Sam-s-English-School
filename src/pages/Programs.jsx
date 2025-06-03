import Banner from "../components/Banner";
import Filter from "../components/Filter";
import CourseItem from "../components/CourseItem";

function Programs() {
  return (
    <>
      <Banner />
      <Filter />
      <div className="container mt-10 grid grid-cols-4 gap-x-8 gap-y-12">
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
        <CourseItem />
      </div>
    </>
  );
}

export default Programs;
