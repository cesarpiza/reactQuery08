import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 0.5,
        backgroundColor: theme.color.defaultColor1,
        padding: theme.spacing.pp,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: theme.fontSize.pp,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center',
        color: theme.color.defaultColor2,
        height: theme.size.windowHeight * 0.04,
    },
    flatListStyle: {
        width: '100%',
    },
    contentContainerStyle: {
        rowGap: theme.spacing.pp,
        backgroundColor: theme.color.defaultColor4,
    }
});