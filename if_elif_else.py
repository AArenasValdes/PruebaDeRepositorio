edad = int(input("Escribe tu edad aqui: "))
peso = int(input("Escibe tu peso: "))
if edad > 18:
    if peso < 60:
        print("Puedes pasar al boliche")
    else:
        print("Mira, tienes mayor de 18 pero estas muy gordo amigo, fuera")
    
elif  edad < 18:
    print("No podes entrar flaquito")

else:
    print("UUU CASI AMIGOOO")
    
    