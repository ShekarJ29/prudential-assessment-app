import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import "./MenuComponent.css";

const MenuComponent = () => {
    return (
        <Menu menuButton={<MenuButton className="menuItem">Home</MenuButton>}>
            {/* <MenuItem>New File</MenuItem>
            <MenuItem>Save</MenuItem>
            <SubMenu label="Edit">
                <MenuItem>Cut</MenuItem>
                <MenuItem>Copy</MenuItem>
                <MenuItem>Paste</MenuItem>
            </SubMenu>
            <MenuItem>Print...</MenuItem> */}
        </Menu>
    );
}

export default MenuComponent;