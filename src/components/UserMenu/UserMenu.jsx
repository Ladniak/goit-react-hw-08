import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/operations";
import { selectUserData } from "../../redux/auth/selectors";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUserData);

    const handleClick = () => {
        dispatch(logout());
    }

    return (
        <div>
            <h3>Welcome, {user.name}!</h3>
            <button type="button" onClick={handleClick}>Log out</button>
        </div>
    );
};