import MessageContainer from "../components/messages/MessageContainer";
import Sidebar from "../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className='flex sm:h-[450px] md:h-[550px] rounded-lg bg-gray-400 bg-clip-padding backdrop-blur-lg bg-opacity-0 overflow-hidden'>
			<Sidebar />
			<MessageContainer />
		</div>
	);
};
export default Home;