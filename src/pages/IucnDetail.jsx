import { useNavigate, useParams } from "react-router-dom";
import iucnBlogs from "../data/iucn_blogs.json";
import WildlifeHeader from "../components/WildlifeHeader";
import Footer from "../components/Footer";
import BlogDetailLayout from "../components/BlogDetailLayout";
import { getBlog } from "../utils/getBlog";
import "./styles/IucnDetail.css";

export default function IucnDetail() {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const blog = getBlog(iucnBlogs, blogId);

  return (
    <BlogDetailLayout
      header={<WildlifeHeader />}
      footer={<Footer />}
      backLabel="← Back"
      onBack={() => navigate("/wildlife")}
      badge={
        blog?.iucnStatus && (
          <div
            className={`iucn-status-badge iucn-${blog.iucnStatus.toLowerCase().replace(/ /g, "-")}`}
          >
            IUCN: {blog.iucnStatus}
          </div>
        )
      }
      title={blog?.title}
      location={blog?.location}
      country={blog?.country}
      description={blog?.description}
      photos={blog?.galleryPhotos ?? []}
      pageClass="iucn-detail-page"
      notFound={
        !blog
          ? { message: "Entry not found.", onBack: () => navigate("/wildlife") }
          : undefined
      }
    />
  );
}
