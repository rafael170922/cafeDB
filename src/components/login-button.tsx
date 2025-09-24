// Importa o tipo ReactNode, que representa qualquer elemento React válido (como texto ou outro componente)
import { ReactNode } from "react";

// Importa componentes do React Native: TouchableOpacity (botão), suas propriedades, e o componente Text
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

// Define o tipo das props que o botão de login irá receber
// Ele herda todas as propriedades padrão do TouchableOpacity e exige também o children
type LoginButtonProps = TouchableOpacityProps & {
  children: ReactNode; // Conteúdo interno do botão (geralmente texto)
};

// Define o tipo das props para o componente de texto dentro do botão
type LoginButtonTextProps = {
  children: ReactNode; // Texto a ser exibido dentro do botão
};

// Componente de botão de login personalizado
function LoginButton({ children, ...rest }: LoginButtonProps) {
  return (
    // TouchableOpacity é usado como botão clicável
    <TouchableOpacity
      className="h-12 bg-orange-500 rounded-lg items-center justify-center mb-6" // Estilização com Tailwind CSS
      activeOpacity={0.7} // Define a opacidade ao pressionar o botão
      {...rest} // Repassa qualquer outra propriedade recebida (como onPress, etc.)
    >
      {children}
      {/* Renderiza o conteúdo passado para o botão, geralmente <LoginButton.Text> */}
    </TouchableOpacity>
  );
}

// Componente de texto do botão de login
function LoginButtonText({ children }: LoginButtonTextProps) {
  return (
    // Exibe o texto estilizado dentro do botão
    <Text className="text-white font-bold text-base">{children}</Text>
  );
}

// Adiciona o componente de texto como propriedade estática do botão
// Isso permite usar o botão como <LoginButton><LoginButton.Text>Texto</LoginButton.Text></LoginButton>
LoginButton.Text = LoginButtonText;

// Exporta o botão de login para ser usado em outros arquivos
export { LoginButton };
