import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import travelBlogs from '../data/travel_blogs.json';
import HeritageHeader from '../components/HeritageHeader';
import Footer from '../components/Footer';
import BlogDetailLayout from '../components/BlogDetailLayout';
import { getBlog } from '../utils/getBlog';

export default function TravelBlog() {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const blog = getBlog(travelBlogs, blogId);

  return (
    <BlogDetailLayout
      header={<HeritageHeader />}
      footer={<Footer />}
      backLabel="← Back"
      onBack={() => navigate('/heritage')}
      title={blog?.title}
      location={blog?.location}
      country={blog?.country}
      description={blog?.description}
      photos={blog?.galleryPhotos ?? []}
      notFound={!blog ? { message: 'Blog not found.', onBack: () => navigate('/heritage') } : undefined}
    />
  );
}