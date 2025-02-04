import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter"
import ContactList from "./ContactList/ContactList";

export const App = () => {


  // const contacts = [
  //   { id: 0, name: "Rosie Simpson", phone: '123-456-78' },
  //   { id: 1, name: "Hermione Kline", phone: '234-567-81' },
  //   { id: 2, name: "Eden Clements", phone: '345-678-12' },
  //   { id: 3, name: "Annie Copeland", phone: '456-123-87' },
  // ]


  return (
    <div>
      <ContactForm />
      <Filter />
      <ContactList />
    </div>
  );
};
