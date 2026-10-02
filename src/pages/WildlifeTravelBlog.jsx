import { useNavigate, useParams } from 'react-router-dom';
import wildlifeTravelBlogs from '../data/wildlife_travel_blogs.json';
import WildlifeHeader from '../components/WildlifeHeader';
import Footer from '../components/Footer';
import BlogDetailLayout from '../components/BlogDetailLayout';
import { getBlog } from '../utils/getBlog';

export default function WildlifeTravelBlog() {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const blog = getBlog(wildlifeTravelBlogs, blogId);

  return (
    <BlogDetailLayout
      header={<WildlifeHeader />}
      footer={<Footer />}
      backLabel="← Back"
      onBack={() => navigate('/wildlife')}
      title={blog?.title}
      location={blog?.location}
      country={blog?.country}
      description={blog?.description}
      photos={blog?.galleryPhotos ?? []}
      pageClass="wildlife-blog-page"
      notFound={!blog ? { message: 'Blog not found.', onBack: () => navigate('/wildlife') } : undefined}
    />
  );
}