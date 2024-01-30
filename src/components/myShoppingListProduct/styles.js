import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: theme.color.defaultColor2,
        padding: theme.spacing.p,
        paddingHorizontal: theme.spacing.g,
        alignItems: 'center',
    },
    avatar: {
        width: theme.size.windowWidth * 0.1,
        height: theme.size.windowWidth * 0.1,
        resizeMode: 'cover',
    },
    productAndPriceContainer: {
        alignItems: 'center',
    },
    product: {
        fontSize: theme.fontSize.pp,
        fontWeight: 'bold',
    },
    price: {
        fontSize: theme.fontSize.pp,
        color: theme.color.highlightColor3,
    },
    closedButton: {
        backgroundColor: theme.color.highlightColor4,
        paddingVertical: theme.spacing.pp - 4,
        paddingHorizontal: theme.spacing.pp,
    },
    closedButtonText: {
        fontSize: theme.fontSize.pp,
        color: theme.color.defaultColor2,
    }
});