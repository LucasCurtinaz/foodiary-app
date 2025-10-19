import { View } from 'react-native';

import { AppText } from '@ui/components/AppText';
import { Button } from '@ui/components/Button';
import { useOnboarding } from '../context/useOnboarding';

export function CreateAccountStep() {
  const { currentStepIndex, nextStep } = useOnboarding();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <AppText size="3xl" weight="semiBold">CreateAccountStep</AppText>

      <View>
        <AppText>{currentStepIndex}</AppText>
        <Button onPress={nextStep}>Avançar</Button>
      </View>
    </View>
  );
}
