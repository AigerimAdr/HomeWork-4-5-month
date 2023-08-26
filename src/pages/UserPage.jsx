import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const user = useSelector(state => state);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <Link to="/form">Back to Form</Link>
    </div>
  );
};

export default UserProfile;