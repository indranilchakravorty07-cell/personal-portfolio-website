import { useNavigate, useParams } from 'react-router-dom';
import wildlifeBlogs from '../data/wildlife_blogs.json';
import WildlifeHeader from '../components/WildlifeHeader';
import Footer from '../components/Footer';
import BlogDetailLayout from '../components/BlogDetailLayout';
import { getBlog } from '../utils/getBlog';
import './styles/WildlifeBlog.css';

export default function WildlifeBlog() {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const blog = getBlog(wildlifeBlogs, blogId);

  return (
    <BlogDetailLayout
      header={<WildlifeHeader />}
      footer={<Footer />}
      backLabel="← Back"
      onBack={() => navigate('/wildlife')}
      badge={blog && <div className="wildlife-category-badge">{blog.category}</div>}
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