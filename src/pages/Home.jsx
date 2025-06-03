import Contact from "../components/sections/Contact";
import CourseHome from "../components/sections/CourseHome";
import CustomerHome from "../components/sections/CustomerHome";
import DocumentHome from "../components/sections/DocumentHome";
import Hero from "../components/sections/Hero";
import Questions from "../components/sections/Questions";
import TeacherHome from "../components/sections/TeacherHome";
import WhyChose from "../components/sections/WhyChose";

function Home() {
  return (
    <>
      <Hero />
      <WhyChose />
      <DocumentHome />
      <TeacherHome />
      <CourseHome />
      <CustomerHome />
      <Questions />
      <Contact />
    </>
  );
}

export default Home;
