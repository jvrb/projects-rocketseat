"""
### Regras da aplicação

- A aplicação deve iniciar mostrando uma lista de opções do que é possível fazer com o app e permitir que o usuário digite uma escolha para iniciar a aplicação.
- Deve ser possível adicionar um contato
    - O contato pode ter os dados:
    - Nome
    - Telefone
    - Email
    - Favorito (está opção é para poder marcar um contato como favorito)
- Deve ser possível visualizar a lista de contatos cadastrados
- Deve ser possível editar um contato
- Deve ser possível marcar/desmarcar um contato como favorito
- Deve ser possível ver uma lista de contatos favoritos
- Deve ser possível apagar um contato
"""

def add_contact(list_contacts, name_contact, number_contact, email_contact, isFavorite):
    is_favorite = True if isFavorite == "s" else False
    contact = {
        "name": name_contact,
        "number": number_contact,
        "email": email_contact,
        "favorite": is_favorite
    }
    list_contacts.append(contact)
    return

def read_contact(list_contacts):
    for indice_contact,contact in enumerate(list_contacts, start=1):
        status = "✓" if contact["favorite"] else " "
        name_contact = contact["name"]
        number_contact = contact["number"]
        email_contact = contact["email"]
        print(f"{indice_contact}. [{status}] {name_contact} {number_contact} {email_contact}")
    print("\n")
    return

def menu_edit_contact():
    print("\nQual propriedade deseja editar: ")
    print("1. Nome")
    print("2. Número")
    print("3. Email")
    print("4. Favorito")
    number_edit = int(input("Digite um número: "))

    propertie = ""
    if number_edit == 1:
        propertie = "name"
    elif number_edit == 2:
        propertie = "number"
    elif number_edit == 3:
        propertie = "email"
    elif number_edit == 4:
        propertie = "favorite"

    return propertie

def edit_contact(list_contacts, contact, propertie_option):
    propertie_name = ""
    indice_verdadeiro = contact - 1
    if propertie_option == "name":
        propertie_name = "Nome"
    elif propertie_option == "number":
        propertie_name = "Número"
    elif propertie_option == "email":
        propertie_name = "Email"
    elif propertie_option == "favorite":
        propertie_name = "Favorito"
        valor_alterado = input("\nFavoritar (s/n): ")
        if valor_alterado == "s":
            valor_alterado = True
        else:
            valor_alterado = False
        list_contacts[indice_verdadeiro][propertie_option] = valor_alterado
        return

    valor_atual = list_contacts[indice_verdadeiro][propertie_option]
    print("\n")
    print(f"{propertie_name} atual: {valor_atual}")
    valor_alterado = input("Digite o novo valor: ")
    list_contacts[indice_verdadeiro][propertie_option] = valor_alterado
    return

def mark_favorite(list_contacts, contact):
    indice_verdadeiro = contact - 1
    if list_contacts[indice_verdadeiro]['favorite'] == False:
        list_contacts[indice_verdadeiro]['favorite'] = True
    return

def read_favorites_contacts(list_contacts):
    for index, contact in enumerate(list_contacts, start=1):
        if contact["favorite"] == True:
            status = "✓" if contact["favorite"] else " "
            name_contact = contact["name"]
            number_contact = contact["number"]
            email_contact = contact["email"]
            print(f"{index}. [{status}] {name_contact} {number_contact} {email_contact}")
    return

def delete_contact(list_contacts, contact):
    indice_verdadeiro = contact - 1
    contact_remove = list_contacts[indice_verdadeiro]
    list_contacts.remove(contact_remove)
    return

contacts = []

print("Contatos")
while True:
    print("\n1. Adicionar contato")
    print("2. Visualizar lista de contatos")
    print("3. Editar contato")
    print("4. Marcar contato como favorito")
    print("5. Visualizar lista de favoritos")
    print("6. Apagar Contato")
    print("7. Sair")
    option = int(input("Digite uma opção: "))
    if option == 1:
        print("\n")
        name = input("Digite o nome do contato: ")
        number = input("Digite o número do contato: ")
        email = input("Digite o email do contato: ")
        favorite = input("Marcar como favorito (s/n): ")
        add_contact(contacts, name, number, email, favorite)
    if option == 2:
        print("\n")
        read_contact(contacts)
    elif option == 3:
        print("\nEditar Contato:")
        read_contact(contacts)
        number_indice_contact = int(input("Nº do contato á editar: "))
        propertie_contact_edit = menu_edit_contact()
        edit_contact(contacts, number_indice_contact, propertie_contact_edit)
        print("\nContato atualizado com sucesso!")
    elif option == 4:
        print("\n")
        read_contact(contacts)
        contact_mark = int(input("Digite o número que deseja favoritar: "))
        mark_favorite(contacts, contact_mark)
        print("\nContato Favoritado com sucesso!")
    elif option == 5:
        print("\n")
        read_favorites_contacts(contacts)
    elif option == 6:
        print("\n")
        read_contact(contacts)
        contact_remove = int(input("Digite o contato que deseja deletar: "))
        delete_contact(contacts, contact_remove)
        print("\nContato deletado com sucesso!")
    elif option == 7:
        break