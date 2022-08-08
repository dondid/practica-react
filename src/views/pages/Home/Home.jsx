import React from 'react';
import { Link } from 'react-router-dom';
import './Home.module.scss';

const Home = () => {
	return (
		<div class='dropdown'>
			<button class='btn btn-primary dropdown-toggle' type='button' data-toggle='dropdown'>
				Main
			</button>
			<ul class='dropdown-menu'>
				<Link to='/login' className='pe-5'>
					Login
				</Link>
				<Link to='/forgotpassword' className='pe-5'>
					ForgotPassword
				</Link>
				<Link to='/changepassword' className='pe-5'>
					ChangePassword
				</Link>
				<Link to='/register'>Register</Link>
			</ul>
		</div>
	);
};

export default Home;
