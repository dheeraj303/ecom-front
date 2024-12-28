import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import ProductCategory from './pages/ProductCategory';
import ProductDetail from './pages/ProductDetail';
import Footer from './components/Footer';
import LoginPage from './pages/Login';
import SignUpPage from './pages/Signup';
import SearchProductList from './pages/SearchResult';
import AboutPage from './pages/AboutUs';
import ServiceArea from './pages/ServicePage';
import SharpenningService from './pages/SharpeningService';
import DashBoard from './pages/DashBoard';
import ContactPage from './pages/Contact';
import ScheduleMeeting from './pages/ScheduleMeeting';
import CartPage from './pages/Cart';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Shop from './pages/Shop';
import CategoryPage from './pages/CategoryPage';
import AdminDashboard from './admin/dashboard/AdminDashboard';
import SubMenu from './components/SubMenu';
import AdminProductList from './admin/products/product-list';
import Sidebar from './admin/sidebar/Sidebar';
import AdminProductDetail from './admin/products/product-details';
import AdminProductEdit from './admin/products/product-edit';
import AdminProductAdd from './admin/products/product-add';
import AdminCategoryList from './admin/category/category-list';
import AdminCategoryEdit from './admin/category/category-edit';
import AdminCategoryAdd from './admin/category/category-add';
import InventoryWarehouse from './admin/inventory/inventory-warehouse';
import InventoryReceviedOrders from './admin/inventory/inventory-recevied-orders';
import AdminOrderList from './admin/orders/orders-list';
import AdminPurchasesList from './admin/purchases/purchases-list';
import AdminPurchasesOrder from './admin/purchases/purchases-order';
import AdminOrderDetails from './admin/orders/orders-details';
import AdminPurchasesReturn from './admin/purchases/purchases-return';
import AdminInvoiceList from './admin/invoices/invoices-list';
import AdminIanvoicesDetails from './admin/invoices/invoices-details';
import AdminInvoiceCreate from './admin/invoices/invoices-create';
import AdminSetting from './admin/settings/setting';
import AdminPermissionsList from './admin/permissions/permission-list';
import AdminCustomerDetails from './admin/customers/customer-details';
import AdminCustomerList from './admin/customers/customer-list';
import AdminCouponsList from './admin/coupons/coupons-list';
import AdminCouponsAdd from './admin/coupons/coupons-add';
import AdminHelpCenter from './admin/help-center/help-center';
import AdminPrivacyPolicy from './admin/help-center/privacy-policy';
import AdminSignIn from './admin/authentication/sign-in';
import AdminSignUp from './admin/authentication/sign-up';
import AdminResetPassword from './admin/authentication/reset-password';
import AdminLockScreen from './admin/authentication/lock-screen';

const App = () => {
  const location = useLocation();

  // Define routes that should not show Header, SubMenu, or Footer
  const isAdminRoute = location.pathname.startsWith('/admin');
  return (
    <div>
      {!isAdminRoute && <Header />}
      {!isAdminRoute && <SubMenu />}

      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/dashboard" element={<AdminDashboard />} /> */}
        <Route path="/search/:category" element={<ProductCategory />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/schedule-meeting" element={<ScheduleMeeting />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/sharpening-service" element={<SharpenningService />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/service" element={<ServiceArea />} />
        <Route path="/search-result/:term" element={<SearchProductList />} />

        <Route element={<Sidebar />}>
          {/* product  */}
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/product-list" element={<AdminProductList />} />
          <Route
            path="/admin/product-details"
            element={<AdminProductDetail />}
          />
          <Route path="/admin/product-edit" element={<AdminProductEdit />} />
          <Route path="/admin/product-add" element={<AdminProductAdd />} />
          {/* category  */}
          <Route path="/admin/category-list" element={<AdminCategoryList />} />
          <Route path="/admin/category-edit" element={<AdminCategoryEdit />} />
          <Route path="/admin/category-add" element={<AdminCategoryAdd />} />
          {/* inventroy  */}
          <Route
            path="/admin/inventory-warehouse"
            element={<InventoryWarehouse />}
          />
          <Route
            path="/admin/inventory-received-orders"
            element={<InventoryReceviedOrders />}
          />
          {/* orders  */}
          <Route path="/admin/orders-list" element={<AdminOrderList />} />
          <Route path="/admin/orders-details" element={<AdminOrderDetails />} />
          {/* purchases */}
          <Route path="/admin/purchase-list" element={<AdminPurchasesList />} />
          <Route
            path="/admin/purchase-order"
            element={<AdminPurchasesOrder />}
          />
          <Route
            path="/admin/purchase-return"
            element={<AdminPurchasesReturn />}
          />
          {/* invoices  */}
          <Route path="/admin/invoice-list" element={<AdminInvoiceList />} />
          <Route path="/admin/invoice-add" element={<AdminInvoiceCreate />} />
          <Route
            path="/admin/invoice-details"
            element={<AdminIanvoicesDetails />}
          />
          <Route path="/admin/setting" element={<AdminSetting />} />
          {/* Permissions */}
          <Route
            path="/admin/permissions"
            element={<AdminPermissionsList s />}
          />
          {/* user  */}
          <Route path="/admin/customer-list" element={<AdminCustomerList />} />
          <Route
            path="/admin/customer-details"
            element={<AdminCustomerDetails />}
          />
          {/* coupons  */}
          <Route path="/admin/coupons-list" element={<AdminCouponsList />} />
          <Route path="/admin/coupons-add" element={<AdminCouponsAdd />} />
          {/* support  */}
          <Route path="/admin/help-center" element={<AdminHelpCenter />} />
          <Route
            path="/admin/privacy-policy"
            element={<AdminPrivacyPolicy />}
          />
          {/* custom  */}
          <Route path="/admin/sign-in" element={<AdminSignIn />} />
          <Route path="/admin/sign-up" element={<AdminSignUp />} />
          <Route
            path="/admin/reset-password"
            element={<AdminResetPassword />}
          />{' '}
          <Route path="/admin/lock-screen" element={<AdminLockScreen />} />
        </Route>
      </Routes>
      {!isAdminRoute && <Footer />}
    </div>
  );
};

export default App;
