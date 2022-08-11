import 'tailwindcss-react-native/types.d'

declare module 'react-native' {
  interface TouchableOpacityProps {
    className?: string
  }
}
