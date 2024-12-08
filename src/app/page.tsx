import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import { Testimonials } from "@/components/Testimonials";


export default function Home() {
  return (
    <main>
      <Hero/>
      <Products/>
      <Categories/>
      <Testimonials/>
    </main>
  );
}
