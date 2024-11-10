import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import ContactForm from "../../components/ContactForm/ContactForm"
import ContactList from "../../components/ContactList/ContactList"
import SearchBox from "../../components/SearchBox/SearchBox"

import { selectLoading } from "../../redux/contacts/selectors"
import { selectError } from "../../redux/contacts/selectors";
import { fetchContacts } from "../../redux/contacts/operations";

const ContactsPage = () => {

    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div>
            <ContactForm />
            <SearchBox />
            {loading && <p>Contacts are loading...</p>}
            {error && <p>Error: {error}</p>}
            <ContactList />
        </div>
    )
}

export default ContactsPage