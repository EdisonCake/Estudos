import instaloader
from getpass import getpass

# Inicializa o Instaloader
L = instaloader.Instaloader()

# Coleta as credenciais do usuário
usuario = "edisoncake"
senha = "HappierThanEver@123"

# Tenta fazer o login
try:
    L.login(usuario, senha)
except instaloader.exceptions.TwoFactorAuthRequiredException:
    # Se a autenticação de dois fatores for necessária
    dois_fatores = input("Insira o código de autenticação de dois fatores: ")
    L.two_factor_login(dois_fatores)

# Carrega o perfil
profile = instaloader.Profile.from_username(L.context, usuario)

# Lista de seguidores e seguindo
followers = set(profile.get_followers())
followings = set(profile.get_followees())

# Usuários que você segue mas que não te seguem de volta
non_followers = followings - followers

print("Usuários que você segue e não te seguem de volta:")
for user in non_followers:
    print(user.username)
