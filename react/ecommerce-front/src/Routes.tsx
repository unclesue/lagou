import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import AddCategory from './components/admin/AddCategory'
import AddProduct from './components/admin/AddProduct'
import AdminDashboard from './components/admin/AdminDashboard'
import AdminPrivateRoute from './components/admin/AdminPrivateRoute'
import Dashboard from './components/admin/Dashboard'
import Orders from './components/admin/Orders'
import PrivateRoute from './components/admin/PrivateRoute'
import Cart from './components/core/Cart'
import Home from './components/core/Home'
import Product from './components/core/Product'
import Shop from './components/core/Shop'
import Signin from './components/core/Signin'
import Signup from './components/core/Signup'

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/cart" component={Cart} />
        <PrivateRoute path="/user/dashboard" component={Dashboard} />
        <AdminPrivateRoute path="/admin/dashboard" component={AdminDashboard} />
        <AdminPrivateRoute path="/admin/create/category" component={AddCategory} />
        <AdminPrivateRoute path="/admin/create/product" component={AddProduct} />
        <AdminPrivateRoute path="/admin/orders" component={Orders} />
        <Route path="/product/:productId" component={Product} />
      </Switch>
    </HashRouter>
  )
}

export default Routes
