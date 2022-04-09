
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Main } from "../components/Main"
import { ProductDetails } from "../components/Product"


const DATA = {
  id: 5,
  description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem sint minus sequi quo ducimus amet delectus itaque beatae quod a obcaecati labore placeat, qui accusamus nemo vero eius odit possimus vel voluptatum provident ipsam nostrum. Animi impedit iste quod reiciendis nesciunt ut, cumque corporis. Dolorum earum distinctio voluptatum! Saepe voluptatum magnam laboriosam blanditiis quam quae, cum labore libero eos deserunt nesciunt, id officia enim hic quibusdam reiciendis? Dolores nostrum perspiciatis quis eaque consectetur eum eligendi praesentium nihil asperiores cum! Impedit, nobis est quos, cupiditate iste aperiam possimus expedita itaque repudiandae, mollitia enim adipisci corporis saepe repellat autem voluptatem vero non?",
  thumbnailUrl: "https://i.picsum.photos/id/774/200/300.jpg?hmac=HLVTa6awH1Il_dvZGTiqNsqGiyR5RgPXTkD_pBW9L48",
  thumbnailAlt: "Water and sky",
  rating: 4.5,
  title: "Water and sky",
}

const Home = () => {
  return (
    <div className="flex flex-col  bg-teal-100 min-h-screen">
      <Header/>
      <Main>
        <ProductDetails data={DATA} />
      </Main>
      <Footer />
    </div>
  );
}

export default Home
