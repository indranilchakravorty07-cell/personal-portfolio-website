import { useNavigate, useParams } from 'react-router-dom';
import unescoBlogs from '../data/unesco_blogs.json';
import HeritageHeader from '../components/HeritageHeader';
import BlogDetailLayout from '../components/BlogDetailLayout';
import { getBlog } from '../utils/getBlog';
import './styles/UnescoDetail.css';

export default function UnescoDetail() {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const blog = getBlog(unescoBlogs, blogId);

  return (
    <BlogDetailLayout
      header={<HeritageHeader />}
      backLabel="← Back"
      onBack={() => navigate('/heritage')}
      badge={<div className="unesco-badge">UNESCO World Heritage Site</div>}
      title={blog?.title}
      location={blog?.location}
      country={blog?.country}
      description={blog?.description}
      photos={blog?.galleryPhotos ?? []}
      pageClass="unesco-detail-page"
      notFound={!blog ? { message: 'Entry not found.', onBack: () => navigate('/heritage') } : undefined}
    />
  );
}