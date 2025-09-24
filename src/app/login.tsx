// ===== IMPORTAÇÕES =====
import { useState } from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LoginInput } from "@/components/login-input";
import { LoginButton } from "@/components/login-button";

// ===== TIPOS =====
type LoginProps = {
  onLogin: () => void;
};

// ===== COMPONENTE PRINCIPAL =====
export default function Login({ onLogin }: LoginProps) {
  // ===== ESTADOS =====
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // ===== FUNÇÃO DE VALIDAÇÃO =====
  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    // Limpa erros se tudo estiver preenchido
    setError("");

    // Chama função de login passada como prop
    onLogin();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* ===== SEÇÃO DA IMAGEM ===== */}
      <View className="flex-1 justify-center top-[-83]">
        <Image
          source={require("@/assets/Login.png")}
          className="w-full h-80"
          resizeMode="cover"
        />
      </View>

      {/* ===== SEÇÃO DO FORMULÁRIO ===== */}
      <View className="flex-1 justify-center px-8 bg-white">
        <Text className="text-3xl font-bold text-black text-center mb-8">
          Bem vindo ao Café
        </Text>

        <View className="space-y-4">
          {/* Campo de usuário */}
          <LoginInput
            placeholder="Usuário"
            autoCapitalize="none"
            autoCorrect={false}
            value={username}
            onChangeText={setUsername}
          />

          {/* Campo de senha */}
          <LoginInput
            placeholder="Senha"
            secureTextEntry
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Exibe mensagem de erro */}
        {error ? (
          <Text className="text-red-500 text-sm mt-2 text-center">{error}</Text>
        ) : null}

        {/* Botão de login */}
        <LoginButton onPress={handleLogin}>
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
