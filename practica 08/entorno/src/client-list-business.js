import * as DataBusiness from "./data-business";
import * as ClientsBusiness from "./client-business";

function printClientsAccounts() {
  const clients = DataBusiness.getClients();
  const ul = document.createElement("ul");
  for (let client of clients) {
    const element = ClientsBusiness.getClientElement(client);
    ul.appendChild(element);
  }

  document.getElementById("app").appendChild(ul);
}

export { printClientsAccounts };
