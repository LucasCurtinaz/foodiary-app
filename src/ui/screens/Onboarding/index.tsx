import { KeyboardAvoidingView, Platform, View } from 'react-native';

import { theme } from '@ui/styles/theme';
import { OnboardingStack } from './OnboardingStack';
import { OnboardingHeader } from './components/OnboardingHeader';
import { OnboardingProvider } from './context/OnboardingProvider';

export function Onboarding() {
  return (
    <OnboardingProvider>
      <View
        style={{ flex: 1, backgroundColor: theme.colors.white }}
      >
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <OnboardingHeader />
          <OnboardingStack />
        </KeyboardAvoidingView>
      </View>
    </OnboardingProvider>
  );
}
