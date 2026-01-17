import Banner from "./_components/Banner";
import Navbar from "./_components/Navbar";
import Projects from "./_components/Project";
import Feedbacks from "./_components/Feedbacks";
import Footer from "./_components/Footer";
import MainProjects from "./_components/MainProjects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <MainProjects projectTitles={["Judite", "Detector RTSP"]} />
      <Projects />
      <Feedbacks />
      <Footer />
    </>
  );
}
