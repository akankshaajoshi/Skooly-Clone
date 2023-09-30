import Navbar from '@/containers/DashboardContainer/Navbar';
import { Container } from '@/components/custom/Container';

function index({ children }) {
  return (
    <Container
      style={{
        display: 'flex',
        minHeight: '100vh',
        flexDirection: 'row',
        justifyContent: 'flex-start',
      }}
    >
      <Navbar imageSrc="https://getskooly.com/skoolyweb/imgs/dashboard/school-image.png" />
      {children}
    </Container>
  );
}

export default index;
