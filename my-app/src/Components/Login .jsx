import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google'; // Don't forget this import
import { jwtDecode } from 'jwt-decode';


export default function Login() {
  return (
    <>
    <div className='auth'>
      <div style={{ marginTop: '100px', textAlign: 'center' }}>
        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log( credentialResponse);
            const decoded = jwtDecode(credentialResponse.credential);
            console.log(decoded);
            
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </div>
      </div>
    </>
  );
}
