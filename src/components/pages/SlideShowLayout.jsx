import { Outlet } from 'react-router';

const SlideShowLayout = () => {
  return (
    <div>
      <p>Content: </p>
      <Outlet />
      <footer>
        <p>footer</p>
      </footer>
    </div>
  );
};

export default SlideShowLayout;
