import React, { FC, ReactElement } from 'react';
import cx from 'classnames';
import { AppRoutes } from '../../routes';
import { useHistory } from 'react-router';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import CancelIcon from '@material-ui/icons/Cancel';
import { useAuth } from "../../hooks";

export const Navigation: FC = (): ReactElement => {
        const [open, toggleOpen] = React.useState<boolean>(true);
        const { userLogged, logoutUser } = useAuth();
        const history = useHistory();

        const logout = (): void => {
            logoutUser()
            history.push(`${AppRoutes.Home}`)
        }

        const loggedIn = (<>
            <ul>
                <li className='mb-4'><Link to={AppRoutes.Home} className='pt-2 pb-2'>Home</Link></li>
                <li className='mb-4'><Link to={AppRoutes.AddRecipe} className='pt-2 pb-2'>Add Recipe</Link></li>
                <li className='mb-4'><Link to={AppRoutes.User} className='pt-2 pb-2'>Account</Link></li>
            </ul>
            <Button onClick={logout} type='primary' danger>logout</Button>
        </>);
        const loggedOut = (<ul>
            <li className='mb-4'><Link to={AppRoutes.Home} className='pt-2 pb-2'>Home</Link></li>
            <li className='mb-4'><Link to={AppRoutes.Login} className='pt-2 pb-2'>Login</Link></li>
            <li className='mb-4'><Link to={AppRoutes.SignUp} className='pt-2 pb-2'>Sign up</Link></li>
        </ul>)

        return (
            <>
                <div className='nav-btn'>{!open && <Button onClick={(): any => toggleOpen(true)} type='primary' icon={<MenuUnfoldOutlined />} size='large' shape='circle' className='mb-10 lg:hidden' />}
                </div>
                <div className={cx(open ? 'opened-nav' : 'closed-nav')}>
                    <nav className='nav'>
                        <Button onClick={(): any => toggleOpen(false)} type='link'><CancelIcon style={{ color: '#fff' }} /></Button>
                        {userLogged ? loggedIn : loggedOut}
                    </nav>
                </div>
            </>
        );
    }