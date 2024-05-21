  import React from "react";
  import "./Dashboard.css";
  import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
  } from "@chakra-ui/react";
  import {
    Routes,
    Route,
    Link,
    Outlet,
  } from "react-router-dom";
  import { HamburgerIcon } from "@chakra-ui/icons";
  import { UsersList } from "./UsersList/UsersList";
  import { ProductsList } from "./ProductsList/ProductsList";
  import { RecepiesList } from "./RecepiesList/RecepiesList";
  const Dashboard = () => {
    return (
      <div className="dashboard">
        <div className="dashboard-menu">
          <h1>Dashboard</h1>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem as={Link} to="Dashboard/userslist">
                Manage users
              </MenuItem>
              <MenuItem as={Link} to="Dashboard/productslist">
                Manage products
              </MenuItem>
              <MenuItem as={Link} to="Dashboard/recepieslist">
                Manage recepies
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
        <div className="dashboard-content">
         <Outlet />
        </div>
      </div>
    );
  };
  const AdminRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="Dashboard/userslist" element={<UsersList />} />
        <Route path="Dashboard/productslist" element={<ProductsList />} />
        <Route path="Dashboard/recepieslist" element={<RecepiesList />} />
      </Routes>
    );
  };
  export { Dashboard, AdminRoutes };
