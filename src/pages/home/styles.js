import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: theme.spacing.p,
        backgroundColor: theme.color.defaultColor2,
        rowGap: theme.spacing.p,
    },
});