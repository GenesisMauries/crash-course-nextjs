"use client"
import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter()
  return <section>
    <h1>About</h1>
    <button onClick={()=>router.push("/")}>Go home</button>
  </section>;
};

export default About;
