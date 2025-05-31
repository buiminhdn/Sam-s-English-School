import CourseHome from "../components/CourseHome";
import CustomerHome from "../components/CustomerHome";
import DocumentHome from "../components/DocumentHome";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import TeacherHome from "../components/TeacherHome";
import TopNavbar from "../components/TopNavbar";
import WhyChose from "../components/WhyChose";

function Home() {
  return (
    <>
      <TopNavbar />
      <Navbar />
      <Hero />
      <WhyChose />
      <DocumentHome />
      <TeacherHome />
      <CourseHome />
      <CustomerHome />
    </>
  );
}

export default Home;
