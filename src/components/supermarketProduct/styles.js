import { StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: theme.color.defaultColor2,
        padding: theme.spacing.p,
        paddingHorizontal: theme.spacing.g,
    },
    avatar: {
        width: theme.size.windowWidth * 0.1,
        height: theme.size.windowWidth * 0.1,
        resizeMode: 'cover',
    },
    productAndPriceContainer: {
        alignItems: 'flex-end',
    },
    product: {
        fontSize: theme.fontSize.pp,
        fontWeight: 'bold',
    },
    price: {
        fontSize: theme.fontSize.pp,
        color: theme.color.highlightColor3,
    },
});