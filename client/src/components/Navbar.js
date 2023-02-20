import Appbar from '@mui/material/AppBar'
import { Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

import { NavLink } from 'react-router-dom';

const Header = styled(Appbar)`
   background: #111111
`;

const Tabs = styled(NavLink)`
font-size: 20px;
margin-right: 20px;
color:inherit;
text-decoration: none;
`

const Navbar = () => {
    return (
<Header position="static">
    <Toolbar>
        <Tabs to='/'> Code from Shaswat</Tabs>
        <Tabs to='/all'> All Admin</Tabs>
        <Tabs to='/add'> Add User</Tabs>
    </Toolbar>
</Header>
    )
}

export default Navbar;