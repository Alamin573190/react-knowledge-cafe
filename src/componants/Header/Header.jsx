import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center p-4 mx-5 '>
            <h2 className='text-5xl font-extralight p-4'>Knowledge cafe</h2>
            <img src={profile} alt="" />
           
        </header>
    );
};

export default Header;