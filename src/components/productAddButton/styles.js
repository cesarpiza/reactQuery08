import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.color.highlightColor1,
        height: theme.size.windowHeight * 0.06,
        justifyContent: 'center',
    },
    buttonText: {
        textAlign: 'center',
        fontSize: theme.fontSize.pp,
        textTransform: 'capitalize',
    }
});