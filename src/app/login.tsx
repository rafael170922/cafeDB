// ===== IMPORTAÇÕES =====

// Componentes básicos do React Native
import { View, Text, Image, TouchableOpacity } from "react-native";

// Componente para área segura (evita sobreposição com status bar)
import { SafeAreaView } from "react-native-safe-area-context";

// Nossos componentes personalizados
import { LoginInput } from "@/components/login-input";
import { LoginButton } from "@/components/login-button";

// ===== TIPOS =====

type LoginProps = {
  onLogin: () => void;
};

// ===== COMPONENTE PRINCIPAL =====

export default function Login({ onLogin }: LoginProps) {
  return (
    // SafeAreaView garante que o conteúdo não fique atrás da status bar
    <SafeAreaView className="flex-1 bg-white">
      
      {/* ===== SEÇÃO DA IMAGEM ===== */}
      <View className="flex-1 justify-center top-[-83]">
        <Image
          // Caminho para a imagem de login
          source={require("@/assets/Login.png")}
          
          // Estilos da imagem:
          // w-full = largura total da tela
          // h-80 = altura de 320px
          className="w-full h-80"
          
          // Como a imagem deve se ajustar ao espaço disponível
          resizeMode="cover"
        />
      </View>

      {/* ===== SEÇÃO DO FORMULÁRIO ===== */}
      <View className="flex-1 justify-center px-8 bg-white">
        
        {/* Título da tela */}
        <Text className="text-3xl font-bold text-black text-center mb-8">
          Bem vindo ao Café
        </Text>

        {/* Container dos campos de entrada */}
        <View className="space-y-4">
          
          {/* Campo de usuário */}
          <LoginInput
            placeholder="Usuário"           // Texto de exemplo
            autoCapitalize="none"          // Não capitaliza automaticamente
            autoCorrect={false}            // Desabilita correção automática
          />
          
          {/* Campo de senha */}
          <LoginInput
            placeholder="Senha"            // Texto de exemplo
            secureTextEntry               // Esconde o texto digitado (****)
            autoCapitalize="none"         // Não capitaliza automaticamente
            autoCorrect={false}           // Desabilita correção automática
          />
        </View>

        {/* Botão de login */}
        <LoginButton onPress={onLogin}>
          <LoginButton.Text>Logar</LoginButton.Text>
        </LoginButton>

        {/* Link para registro */}
        <TouchableOpacity className="items-center mt-4">
          <Text className="text-slate-600 text-sm">
            Não tem conta? Entre em contato para registrar-se
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
