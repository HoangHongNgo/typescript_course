interface Relation {
    id: string;
    name: string;
}

interface Contact {
    id: string;
    name: string;
    relationId: string;
    phone: string;
    email: string;
    avatar: string;
    relation: Relation;
}

const getData = async ():Promise<Contact[]> => {
    const response = await fetch("https://javascript-rs4y.onrender.com/contacts?_expand=relation");
    return await response.json();
}

const main = async () => {
    const contacts = await getData();
    console.log(contacts);
}

main();