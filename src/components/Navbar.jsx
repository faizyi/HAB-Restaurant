import { MenuOutlined } from '@ant-design/icons';
import { MenuDrawer } from './Drawer';
import { IsAdminHook } from '../CustomHooks/IsAdminHook';
import { AddDishModal } from '../pages/Admin/AddDishModal';
import { AddDishHook } from '../CustomHooks/AddDishHook';
export const Navbar = () => {
  const { isAdminLoggedIn, handleDrawerOpen, handleDrawerClose, 
  isDrawerOpen, path, navigate, handleLogout } = IsAdminHook();
  const {isModalOpen, handleOpenModal, handleCloseModal} = AddDishHook();
  return (
    <header className="border-b sticky top-0 z-50 bg-opacity-95 backdrop-filter
     backdrop-blur-sm bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1
          onClick={() => navigate('/')}
          className="cursor-pointer text-2xl font-extrabold text-gray-900
           hover:text-gray-700 transition-colors duration-300"
        >
          Restaurant
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {/* Always show Home and Menu */}
          <a
            onClick={() => navigate('/')}
            className={`cursor-pointer text-gray-700 font-medium hover:text-gray-900 
              transition-all duration-300 ${
              path === '/' ? 'border-b-2 border-yellow-500' : ''
            }`}
          >
            Home
          </a>
          {
            isAdminLoggedIn && (
              <button
              onClick={handleOpenModal}
              className={`cursor-pointer text-gray-700 font-medium hover:text-yellow-500 
              transition-all duration-300 hover:border-b-2 hover:border-yellow-500`}
            >
              Add Dish
            </button>
            )
          }
          {isAdminLoggedIn ? (
            <button
              onClick={handleLogout}
              className="cursor-pointer text-gray-700 font-medium 
              hover:text-red-500 transition-all duration-300"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate('/login')}
              className={`cursor-pointer text-gray-700 font-medium hover:text-yellow-500 
              transition-all duration-300 ${
                path === '/login' ? 'border-b-2 border-yellow-500' : ''
              }`}
            >
              Login
            </button>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={handleDrawerOpen}>
          <MenuOutlined className="h-6 w-6 text-gray-700 hover:text-gray-900
           transition-colors duration-300" />
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <MenuDrawer 
      onOpenModal={handleOpenModal}
      handleDrawerClose={handleDrawerClose} 
      isDrawerOpen={isDrawerOpen}
      path={path} 
      navigate={navigate}/>

      {isModalOpen && <AddDishModal visible={isModalOpen} onClose={handleCloseModal}/>}
    </header>
  );
};
